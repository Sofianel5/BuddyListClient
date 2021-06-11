(ns buddylistclient.main.core
  (:require
   [cljs.nodejs :as nodejs]
   ["electron" :refer [app BrowserWindow Menu ipcMain crashReporter Notification dialog]]
   ["faye-websocket" :refer [Client]]
   ["path" :as path]
   ["menubar" :refer [menubar]]
   ["sound-play" :as sound]
   [buddylistclient.main.forjure :refer [dissoc-in]]
   [buddylistclient.main.user :as user]
   ["auto-launch" :as AutoLaunch]))

(def *win* (atom {}))

(def *user* (atom nil))

(defn on-buddy-message [e]
  (println "Message: " (.-data e))
  (if (not= (first (.-data e)) \{)
    (let [buddies (->> e
                       .-data
                       user/cache-buddies-str)]
      (println "buddies: " buddies)
      (if-let [window (:buddylist @*win*)]
        (.send window "buddies" buddies)))
    (let [new-status (:new-status (js->clj (->> e
                                                .-data
                                                (.parse js/JSON))
                                           :keywordize-keys true))]
      (swap! *user* assoc :status new-status)
      (user/cache-user @*user*)
      (if-let [window (:buddylist @*win*)]
        (.send (.-webContents window) "user" (->> @*user* clj->js (.stringify js/JSON)))))))

(defn connect-buddylist []
  (let [socket (Client. "wss://buddylist.app/buddies" nil (clj->js {:headers {:authorization (:auth-token @*user*) :request-user (:username @*user*)}
                                                                    :ping 10}))
        on-new-status-handler (fn [_ new-status]
                                (println "received new-status" new-status)
                                (let [package {:new-status new-status}
                                      encoded-message (->> package
                                                           clj->js
                                                           (.stringify js/JSON))]
                                  (.send socket encoded-message)))
        on-win-closed-handler #(do
                                 (.close socket)
                                 (.removeAllListeners ipcMain "buddies:new-status")
                                 (swap! *win* dissoc :buddylist))]
    (.on socket "open" #(println "Opening buddylist ws" %))
    (.on socket "close" (fn [_]
                          (println "buddylist ws closed")
                          (.removeAllListeners ipcMain "buddies:new-status")
                          (if-let [buddylist-win (:buddylist @*win*)]
                            (do
                              (.removeAllListeners buddylist-win "closed")
                              (connect-buddylist)))))
    (.on socket "error" #(println "error in buddylist ws" %))
    (.on socket "message" on-buddy-message)
    (.on ipcMain "buddies:new-status" on-new-status-handler)
    (.on (:buddylist @*win*) "closed" on-win-closed-handler)))

(defn launch-buddylist []
  (println "user:" @*user*)
  (swap! *win* assoc :buddylist (BrowserWindow. (clj->js {:width 300 :minWidth 300 :height 700 :titleBarStyle "hidden" :webPreferences {:nodeIntegration true :contextIsolation false}})))
  (.loadURL (:buddylist @*win*) (str "file://" (.resolve path (js* "__dirname") "../resources/public/html/buddylist.html")))
  (.on (-> @*win* :buddylist .-webContents) "did-finish-load"
       (fn []
         (.send (-> @*win* :buddylist .-webContents) "user" (->> @*user* clj->js (.stringify js/JSON)))
         (connect-buddylist))))

(.on ipcMain "signup"
     (fn [_ first-name last-name email phone username password]
       (-> (user/sign-up first-name last-name email phone username password)
           (.then (fn [user]
                    (reset! *user* user)
                    (-> @*win* :authentication .close)
                    (launch-buddylist)))
           (.catch (fn [errors]
                     (if-let [window (:authentication @*win*)]
                       (.send (.-webContents window) "signup-error" (-> errors
                                                                        .-response
                                                                        .-data
                                                                        (#(.stringify js/JSON %))))))))))

(defn notify-new-message [with-user message]
  (let [notification-params (clj->js {:title (str "New message from " with-user)
                                      :body message
                                      :silent true})
        notification (Notification. notification-params)]
    (.play sound (.resolve path (js* "__dirname") "../resources/public/sounds/imrcv.wav"))
    (.show notification)))

(defn on-message-recieved [e]
  (println "chat recieved from server" (.-data e))
  (let [js-message (->> e
                        .-data
                        (.parse js/JSON))
        message (js->clj js-message :keywordize-keys true)
        with-user (if (= (:to message) (:username @*user*)) (:from message) (:to message))]
    (if-let [window (-> @*win* :chats (get with-user))]
      (.send (.-webContents window) "chat:received" (.-data e))
      (println "window not available"))
    (if (= (:to message) (:username @*user*))
      (notify-new-message with-user (:message message)))))

(defn launch-chat [with-user data]
  (swap! *win* assoc-in [:chats with-user] (BrowserWindow. (clj->js {:width 500 :minWidth 350 :height 400 :titleBarStyle "hidden" :webPreferences {:nodeIntegration true :contextIsolation false}})))
  (.loadFile (-> @*win* :chats (get with-user)) (.resolve path (js* "__dirname") "../resources/public/html/chat.html") (clj->js {:query {:with-user data :user (->> @*user* clj->js (.stringify js/JSON))}}))
  (.on (-> @*win* :chats (get with-user) .-webContents) "did-finish-load"
       (fn []
         (println "chat did-finish-load " with-user)
         (.then (user/get-chat-history (:username @*user*) (:auth-token @*user*) with-user 0 25)
                (fn [data]
                  (println data)
                  (if-let [window (-> @*win* :chats (get with-user))]
                    (.send (.-webContents window) "chat:loaded-history" data))))))
  (.on (-> @*win* :chats (get with-user)) "closed" #(swap! *win* dissoc-in [:chats with-user])))

(.on ipcMain "buddies:selected"
     (fn [_ buddy data]
       (println "data:" data)
       (if-not (contains? (:chats @*win*) buddy)
         (launch-chat buddy data)
         (.show (-> @*win* :chats (get buddy))))))

(.on ipcMain "addbuddy"
     (fn [_ buddy-username]
       (.then (user/add-buddy (:username @*user*) (:auth-token @*user*) buddy-username)
              (fn [_]
                (.reload (-> @*win* :buddylist))
                (.close (-> @*win* :add-buddy))))))

(.on ipcMain "new-profile-pic"
     (fn []
       (-> (.showOpenDialog dialog (clj->js {:properties ["openFile"]
                                             :title "Select Screen Image"
                                             :message "Select Screen Image"
                                             :buttonLabel "Upload"
                                             :filters [{:name "Images"
                                                        :extensions ["jpg" "png" "gif" "jpeg" "txt"]}]}))
           (.then (fn [f]
                    (if-not (.-canceled f)
                      (-> (user/upload-pfp (:username @*user*) (:auth-token @*user*) f)
                          (.then (fn [u]
                                   (println u)
                                   (reset! *user* u)
                                   (if-let [window (:buddylist @*win*)]
                                     (.send (.-webContents window) "user" (->> @*user* clj->js (.stringify js/JSON))))))
                          (.catch (fn [err] (println "setting pfp server error:" err)))))))
           (.catch (fn [err]
                     (println "File error:" err))))))

(.on ipcMain "new-buddies-order"
     (fn [_ new-buddies-order]
       (-> (user/set-new-buddies-order (:username @*user*) (:auth-token @*user*) (js->clj new-buddies-order))
           (.then (fn [m]
                    (reset! *user* (js->clj m :keywordize-keys true))))
           (.catch (fn [err]
                     (println "new-buddies-order.err:" err))))))

(defn open-addbuddy-win []
  (if-not (:add-buddy @*win*)
    (do
      (swap! *win* assoc :add-buddy (BrowserWindow. (clj->js {:width 300 :height 300 :webPreferences {:nodeIntegration true :contextIsolation false}})))
      (.loadURL (:add-buddy @*win*) (str "file://" (.resolve path (js* "__dirname") "../resources/public/html/addbuddy.html")))
      (.on (:add-buddy @*win*) "closed" #(swap! *win* dissoc :add-buddy)))
    (.show (:add-buddy @*win*))))

(.on ipcMain "open-addbuddy" open-addbuddy-win)

(defn open-settings-win []
  (if-not (:settings @*win*)
    (do
      (swap! *win* assoc :settings (BrowserWindow. (clj->js {:width 600 :height 500 :titleBarStyle "hidden" :webPreferences {:nodeIntegration true :contextIsolation false}})))
      (.loadFile (:settings @*win*) (.resolve path (js* "__dirname") "../resources/public/html/settings.html") (clj->js {:query {:user (->> @*user* clj->js (.stringify js/JSON))}}))
      (.on (:settings @*win*) "closed" #(swap! *win* dissoc :settings)))
    (.show (:settings @*win*))))

(.on ipcMain "open-settings" open-settings-win)

(defn launch-unauth-flow []
  (if-let [loading-win (:loading @*win*)]
    (.close loading-win))
  (swap! *win* assoc :authentication (BrowserWindow. (clj->js {:width 600 :minWidth 570 :height 400 :minHeight 400 :titleBarStyle "hidden" :webPreferences {:nodeIntegration true :contextIsolation false}})))
  (.loadURL (:authentication @*win*) (str "file://" (.resolve path (js* "__dirname") "../resources/public/html/authentication.html")))
  (.on (:authentication @*win*) "closed" #(swap! *win* dissoc :authentication)))

(defn connect-chat []
  (let [socket (Client. (str "wss://buddylist.app/chat") nil (clj->js {:headers {:authorization (:auth-token @*user*) :request-user (:username @*user*)}
                                                                       :ping 10}))
        on-chat-sent (fn [_ to message]
                       (println "recieved chat from Client")
                       (let [package {:to to :message message}
                             encoded-message (->> package
                                                  clj->js
                                                  (.stringify js/JSON))]
                         (.send socket encoded-message)))]
    (.on socket "open" #(println "Opened chat ws" %))
    (.on socket "close" (fn [_]
                          (println "chat ws closed")
                          (.removeAllListeners ipcMain "chat:sent")
                          (connect-chat)))
    (.on socket "message" #(on-message-recieved %))
    (.on ipcMain "chat:sent" on-chat-sent)))

(defn close-all-windows [wins]
  (println (count wins))
  (doseq [window (vals wins)]
    (if (map? window)
      (close-all-windows window)
      (.close window))))

(defn gen-unauth-menu []
  (let [base [{:label "Edit"
               :submenu [{:label "Undo"
                          :accelerator "CmdOrCtrl+Z"
                          :selector "undo:"}
                         {:label "Redo"
                          :accelerator "Shift+CmdOrCtrl+Z"
                          :selector "redo:"}
                         {:label "Cut"
                          :accelerator "CmdOrCtrl+X"
                          :selector "cut:"}
                         {:label "Copy"
                          :accelerator "CmdOrCtrl+C"
                          :selector "copy:"}
                         {:label "Paste"
                          :accelerator "CmdOrCtrl+V"
                          :selector "paste:"}
                         {:label "Select All"
                          :accelerator "CmdOrCtrl+A"
                          :selector "selectAll:"}]}]]
    (cond-> base
      (= (.-platform nodejs/process) "darwin") (#(into [{:label "BuddyList"
                                                         :submenu [{:label "Quit"
                                                                    :accelerator (if (= (.-platform nodejs/process) "darwin") "Command+Q" "Ctrl+Q")
                                                                    :click (fn [] (.quit app))}]}] %))
      (not= (-> nodejs/process .-env .-NODE_ENV) "production") (conj {:label "Developer Tools"
                                                                      :submenu [{:label "Toggle DevTools"
                                                                                 :click #(.toggleDevTools %2)
                                                                                 :accelerator (if (= (.-platform nodejs/process) "darwin") "Command+I" "Ctrl+I")}]})
      :always clj->js)))

(defn gen-authed-menu []
  (let [base [{:label "File"
               :submenu [{:label "Open buddy list"
                          :click (fn []
                                   (if-let [win (:buddylist @*win*)]
                                     (.show win)
                                     (launch-buddylist)))}]}
              {:label "Edit"
               :submenu [{:label "Undo"
                          :accelerator "CmdOrCtrl+Z"
                          :selector "undo:"}
                         {:label "Redo"
                          :accelerator "Shift+CmdOrCtrl+Z"
                          :selector "redo:"}
                         {:label "Cut"
                          :accelerator "CmdOrCtrl+X"
                          :selector "cut:"}
                         {:label "Copy"
                          :accelerator "CmdOrCtrl+C"
                          :selector "copy:"}
                         {:label "Paste"
                          :accelerator "CmdOrCtrl+V"
                          :selector "paste:"}
                         {:label "Select All"
                          :accelerator "CmdOrCtrl+A"
                          :selector "selectAll:"}]}
              {:label "Buddies"
               :submenu [{:label "Add Buddy"
                          :click (fn []
                                   (if-let [win (:add-buddy @*win*)]
                                     (.show win)
                                     (open-addbuddy-win)))}]}]]
    (cond-> base
      (= (.-platform nodejs/process) "darwin") (#(into [{:label "BuddyList"
                                                         :submenu [{:label "Quit"
                                                                    :accelerator (if (= (.-platform nodejs/process) "darwin") "Command+Q" "Ctrl+Q")
                                                                    :click (fn [] (.quit app))}]}] %))
      (not= (-> nodejs/process .-env .-NODE_ENV) "production") (conj {:label "Developer Tools"
                                                                      :submenu [{:label "Toggle DevTools"
                                                                                 :click #(.toggleDevTools %2)
                                                                                 :accelerator (if (= (.-platform nodejs/process) "darwin") "Command+I" "Ctrl+I")}]})
      :always clj->js)))

(defn generate-menu-template []
  (if-let [_ @*user*]
    (gen-authed-menu)
    (gen-unauth-menu)))

(.on ipcMain "login"
     (fn [_ username password]
       (-> (user/log-in username password)
           (.then (fn [user]
                    (reset! *user* user)
                    (.setApplicationMenu Menu (.buildFromTemplate Menu (generate-menu-template)))
                    (-> @*win* :authentication .close)
                    (launch-buddylist)))
           (.catch (fn [_]
                     (if-let [window (:authentication @*win*)]
                       (.send (.-webContents window) "login-error")))))))

(defn logout []
  (close-all-windows @*win*)
  (reset! *user* nil)
  (.setApplicationMenu Menu (.buildFromTemplate Menu (generate-menu-template)))
  (user/clear-all)
  (launch-unauth-flow))

(.on ipcMain "logout" logout)

(defn main []
  (.start crashReporter (clj->js {:companyName "BuddyList"
                                  :submitURL   "https://buddylist.app"}))

  ;; error listener
  (.on nodejs/process "error"
       (fn [err] (.log js/console err)))

  ;; window all closed listener
  (.on app "window-all-closed"
       (fn [] (if (not= (.-platform nodejs/process) "darwin")
                ; Stop doing this in future
                (.quit app))))

  ;; ready listener
  (.on app "ready"
       (fn []
         (swap! *win* assoc :loading (BrowserWindow. (clj->js {:width 400 :height 300 :frame false})))
         ;; when no optimize comment out
         (.loadURL (:loading @*win*) (str "file://" (.resolve path (js* "__dirname") "../resources/public/html/index.html")))
         (.on (:loading @*win*) "closed" #(swap! *win* dissoc :loading))
         ;; when no optimize uncomment
         ;; (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../../../index.html")))
         ; Check to see if there is a cached user (ie. app is not fresh)
         (if-let [user (user/get-user)]
           (.then user (fn [u] (if u (do
                                       (println "User:" u)
                                       (reset! *user* u)
                                       (.setApplicationMenu Menu (.buildFromTemplate Menu (generate-menu-template)))
                                       (-> @*win* :loading .close)
                                       (launch-buddylist)
                                       (user/cache-user @*user*)
                                       (connect-chat))
                                   (launch-unauth-flow))))
           (launch-unauth-flow))
         (let [launch (AutoLaunch. (clj->js {:name "BuddyList"}))]
           (.enable launch))))

  (.setApplicationMenu Menu (.buildFromTemplate Menu (generate-menu-template))))
