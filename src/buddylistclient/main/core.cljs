(ns buddylistclient.main.core
  (:require
   [cljs.nodejs :as nodejs]
   ["electron" :refer [app BrowserWindow Menu MenuItem Tray ipcMain crashReporter Notification dialog nativeTheme]]
   ["faye-websocket" :refer [Client]]
   ["path" :as path]
   ["sound-play" :as sound]
   [buddylistclient.main.forjure :refer [dissoc-in]]
   [buddylistclient.main.user :as user]
   [buddylistclient.main.config :as config]
   ["auto-launch" :as AutoLaunch]
   ["update-electron-app" :as auto-update]))

(auto-update)

(defonce *win (atom {}))

(defonce *user (atom nil))

(defonce *settings (atom nil))

(defonce *tray (atom nil))

(defonce *buddies (atom nil))

(defonce *chat-socket (atom nil))

(defonce *buddylist-socket (atom nil))

(defonce *new-messages (atom (user/get-unread-messages-map)))

(declare reset-new-message-count)

(declare launch-buddylist)

(defn enable-spellcheck [window]
  (.on (.-webContents window) "context-menu"
       (fn [_ params]
         (let [menu (Menu.)]
           (doseq [suggestion (.-dictionarySuggestions params)]
             (.append menu (MenuItem. (clj->js {:label suggestion :click #(-> window .-webContents (.replaceMisspelling suggestion))}))))
           (.popup menu)))))

(defn launch-chat [with-user data]
  (swap! *win assoc-in [:chats with-user] (BrowserWindow. (clj->js {:width 500 :minWidth 350 :height 400 :minHeight 300 :titleBarStyle "hidden" :webPreferences {:nodeIntegration true :contextIsolation false}})))
  (.loadFile (-> @*win :chats (get with-user)) (.resolve path js/__dirname "../resources/public/html/chat.html") (clj->js {:query {:with-user data :user (->> @*user clj->js (.stringify js/JSON))}}))
  (enable-spellcheck (-> @*win :chats (get with-user)))
  (.on (-> @*win :chats (get with-user) .-webContents) "did-finish-load"
       (fn []
         (println "chat did-finish-load " with-user)
         (reset-new-message-count with-user)
         (.then (user/get-chat-history (:username @*user) (:auth-token @*user) with-user 0 25)
                (fn [data]
                  (println data)
                  (if-let [window (-> @*win :chats (get with-user))]
                    (.send (.-webContents window) "chat:loaded-history" data))))))
  (.on (-> @*win :chats (get with-user)) "closed" #(swap! *win dissoc-in [:chats with-user]))
  (.on (-> @*win :chats (get with-user)) "focus" #(reset-new-message-count with-user)))

(defn reset-tray []
  (if-let [ct @*tray]
    (.destroy ct))
  (reset! *tray nil)
  (let [t (Tray. (.resolve path js/__dirname (if (.-shouldUseDarkColors nativeTheme) "../resources/public/img/tray-white@2x.png" "../resources/public/img/tray@2x.png")))
        menu (.buildFromTemplate Menu (clj->js (apply concat [{:label "Your buddies" :click (fn []
                                                                                                             (if-let [win (:buddylist @*win)]
                                                                                                               (.show win)
                                                                                                               (launch-buddylist)))} {:type "separator"}]
                                                      (map (fn [buddy]
                                                             [{:label (:username buddy)
                                                               :enabled false}
                                                              {:label (str "Status: " (:status buddy)) :enabled false}
                                                              {:label (str "Chat with " (:username buddy) " (" (or (get @*new-messages (:username buddy)) 0) " unread messages)")
                                                               :click #(if-not (contains? (:chats @*win) (:username buddy))
                                                                         (launch-chat (:username buddy) (.stringify js/JSON (clj->js buddy)))
                                                                         (.show (-> @*win :chats (get (:username buddy)))))}
                                                              {:type "separator"}]) @*buddies))))]
    (.setToolTip t "BuddyList")
    (.setContextMenu t menu)
    (reset! *tray t)))

(defn update-dock []
  (when (= (.-platform nodejs/process) "darwin")
    (let [sum (->> @*new-messages vals (reduce +))]
      (-> app
          .-dock
          (.setBadge (if (> sum 0) (str sum) ""))))))

(defn reset-new-message-count [with-user]
  (swap! *new-messages assoc with-user 0)
  (reset-tray)
  (user/cache-unread-messages-map @*new-messages)
  (if-let [window (:buddylist @*win)]
    (.send window "buddies"
           (->> @*buddies
                (map #(assoc % :new-messages (get @*new-messages (:username %))))
                clj->js
                (.stringify js/JSON))))
  (update-dock))

(defn inc-new-message-count [with-user]
  (if (contains? @*new-messages with-user)
    (swap! *new-messages update with-user inc)
    (swap! *new-messages assoc with-user 1))
  (reset-tray)
  (user/cache-unread-messages-map @*new-messages)
  (if-let [window (:buddylist @*win)]
    (.send window "buddies"
           (->> @*buddies
                (map #(assoc % :new-messages (get @*new-messages (:username %))))
                clj->js
                (.stringify js/JSON))))
  (update-dock))

(.on nativeTheme "updated" reset-tray)

(defn on-buddy-message [e]
  (if (not= (first (.-data e)) \{)
    (let [buddies (->> e
                       .-data)]
      (reset! *buddies (js->clj (.parse js/JSON buddies) :keywordize-keys true))
      (reset! *new-messages (into {} (map (fn [x] {(:username x) (or (get @*new-messages (:username x)) 0)}) @*buddies)))
      (if-let [window (:buddylist @*win)]
        (.send window "buddies" 
               (->> @*buddies
                   (map #(assoc % :new-messages (get @*new-messages (:username %))))
                    clj->js
                    (.stringify js/JSON))))
      (user/cache-unread-messages-map @*new-messages)
      (println "@*buddies:" @*buddies)
      (println "@*new-messages" @*new-messages)
      (doseq [buddy @*buddies]
        (if-let [chat-win (-> @*win :chats (get (:username buddy)))]
          (.send chat-win "chat:update-buddy" (->> buddy clj->js (.stringify js/JSON)))
          (println "no window for" (:username buddy))))
      (reset-tray))
    (let [new-status (:new-status (js->clj (->> e
                                                .-data
                                                (.parse js/JSON))
                                           :keywordize-keys true))]
      (swap! *user assoc :status new-status)
      (user/cache-user @*user)
      (if-let [window (:buddylist @*win)]
        (.send (.-webContents window) "user" (->> @*user clj->js (.stringify js/JSON)))))))

(defn connect-buddylist []
  (let [socket (Client. config/buddylist-ws-url nil (clj->js {:headers {:authorization (:auth-token @*user) :request-user (:username @*user)}
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
                                 (swap! *win dissoc :buddylist))]
    (.on socket "open" #(do
                          (println "Opening buddylist ws" %)
                          (reset! *buddylist-socket socket)))
    (.on socket "close" (fn [_]
                          (println "buddylist ws closed")
                          (.removeAllListeners ipcMain "buddies:new-status")
                          (reset! *buddylist-socket nil)
                          (when-let [buddylist-win (:buddylist @*win)]
                            (.removeAllListeners buddylist-win "closed")
                            (connect-buddylist))))
    (.on socket "error" #(println "error in buddylist ws" %))
    (.on socket "message" on-buddy-message)
    (.on ipcMain "buddies:new-status" on-new-status-handler)
    (.on (:buddylist @*win) "closed" on-win-closed-handler)))

(defn launch-buddylist []
  (println "user:" @*user)
  (println @*new-messages)
  (swap! *win assoc :buddylist (BrowserWindow. (clj->js {:width 300 :minWidth 300 :height 700 :titleBarStyle "hidden" :webPreferences {:nodeIntegration true :contextIsolation false}})))
  (enable-spellcheck (:buddylist @*win))
  (.loadURL (:buddylist @*win) (str "file://" (.resolve path js/__dirname "../resources/public/html/buddylist.html")))
  (.on (-> @*win :buddylist .-webContents) "did-finish-load"
       (fn []
         (.send (-> @*win :buddylist .-webContents) "user" (->> @*user clj->js (.stringify js/JSON)))
         (connect-buddylist)
         (update-dock))))


(defn notify-new-message [with-user message]
  (let [notification-params (clj->js {:title (str "New message from " with-user)
                                      :body message
                                      :silent true
                                      :hasReply true})
        notification (Notification. notification-params)]
    (when (:sounds @*settings)
      (.play sound (.resolve path js/__dirname "../resources/public/sounds/imrcv.wav")))
    (.on notification "reply" (fn [_ response]
                                (let [package {:to with-user :message response}
                                      encoded-message (->> package
                                                           clj->js
                                                           (.stringify js/JSON))]
                                  (when-let [socket @*chat-socket]
                                    (.send socket encoded-message)))))
    (.show notification)))

(defn on-message-recieved [e]
  (println "chat recieved from server" (.-data e))
  (let [js-message (->> e
                        .-data
                        (.parse js/JSON))
        message (js->clj js-message :keywordize-keys true)
        with-user (if (= (:to message) (:username @*user)) (:from message) (:to message))]
    (if-let [window (-> @*win :chats (get with-user))]
      (.send (.-webContents window) "chat:received" (.-data e))
      (println "window not available"))
    (when (and (:sounds @*settings) (= (:from message) (:username @*user)))
      (.play sound (.resolve path js/__dirname "../resources/public/sounds/imsend.wav")))
    (when (= (:to message) (:username @*user))
      (notify-new-message with-user (:message message))
      (if-let [window (-> @*win :chats (get with-user))]
       (when (not (.isFocused window))
        (inc-new-message-count with-user))
       (inc-new-message-count with-user)))))

(.on ipcMain "buddies:selected"
     (fn [_ buddy data]
       (println "data:" data)
       (if-not (contains? (:chats @*win) buddy)
         (launch-chat buddy data)
         (.show (-> @*win :chats (get buddy))))))

(.on ipcMain "addbuddy"
     (fn [_ buddy-username]
       (.then (user/add-buddy (:username @*user) (:auth-token @*user) buddy-username)
              (fn [_]
                (.reload (-> @*win :buddylist))
                (.close (-> @*win :add-buddy))))))

(.on ipcMain "new-profile-pic"
     (fn []
       (-> (.showOpenDialog dialog (clj->js {:properties ["openFile"]
                                             :title "Select Screen Image"
                                             :message "Select Screen Image"
                                             :buttonLabel "Upload"
                                             :filters [{:name "Images"
                                                        :extensions ["jpg" "png" "gif" "jpeg"]}]}))
           (.then (fn [f]
                    (if-not (.-canceled f)
                      (-> (user/upload-pfp (:username @*user) (:auth-token @*user) f)
                          (.then (fn [u]
                                   (println u)
                                   (reset! *user u)
                                   (if-let [window (:buddylist @*win)]
                                     (.send (.-webContents window) "user" (->> @*user clj->js (.stringify js/JSON))))))
                          (.catch (fn [err] (println "setting pfp server error:" err)))))))
           (.catch (fn [err]
                     (println "File error:" err))))))

(.on ipcMain "new-buddies-order"
     (fn [_ new-buddies-order]
       (-> (user/set-new-buddies-order (:username @*user) (:auth-token @*user) (js->clj new-buddies-order))
           (.then (fn [m]
                    (reset! *user (js->clj m :keywordize-keys true))))
           (.catch (fn [err]
                     (println "new-buddies-order.err:" err))))))

(defn open-addbuddy-win []
  (if-not (:add-buddy @*win)
    (do
      (swap! *win assoc :add-buddy (BrowserWindow. (clj->js {:width 233 :height 193 :titleBarStyle "hidden" :webPreferences {:nodeIntegration true :contextIsolation false}})))
      (.loadURL (:add-buddy @*win) (str "file://" (.resolve path js/__dirname "../resources/public/html/addbuddy.html")))
      (.on (:add-buddy @*win) "closed" #(swap! *win dissoc :add-buddy)))
    (.show (:add-buddy @*win))))

(.on ipcMain "open-addbuddy" open-addbuddy-win)

(defn open-settings-win []
  (if-not (:settings @*win)
    (do
      (swap! *win assoc :settings (BrowserWindow. (clj->js {:width 600 :height 500 :titleBarStyle "hidden" :webPreferences {:nodeIntegration true :contextIsolation false}})))
      (.loadFile (:settings @*win) (.resolve path js/__dirname "../resources/public/html/settings.html") (clj->js {:query {:user (->> @*user clj->js (.stringify js/JSON)) :settings (->> @*settings clj->js (.stringify js/JSON))}}))
      (.on (:settings @*win) "closed" #(swap! *win dissoc :settings)))
    (.show (:settings @*win))))

(.on ipcMain "open-settings" open-settings-win)

(.on ipcMain "new-settings" (fn [_ new-settings-str]
                              (let [new-settings-js (.parse js/JSON new-settings-str)
                                       new-settings (js->clj new-settings-js :keywordize-keys true)]
                                (println new-settings)
                                (reset! *settings new-settings)
                                (user/save-settings @*settings))))

(defn launch-unauth-flow []
  (if-let [loading-win (:loading @*win)]
    (.close loading-win))
  (swap! *win assoc :authentication (BrowserWindow. (clj->js {:width 600 :minWidth 570 :height 400 :minHeight 400 :titleBarStyle "hidden" :webPreferences {:nodeIntegration true :contextIsolation false}})))
  (.loadURL (:authentication @*win) (str "file://" (.resolve path js/__dirname "../resources/public/html/authentication.html")))
  (.on (:authentication @*win) "closed" #(swap! *win dissoc :authentication)))

(defn connect-chat []
  (let [socket (Client. config/chat-ws-url nil (clj->js {:headers {:authorization (:auth-token @*user) :request-user (:username @*user)}
                                                                       :ping 10}))
        on-chat-sent (fn [_ to message message-uuid]
                       (println "recieved chat from Client")
                       (let [package {:to to :message message :uuid message-uuid}
                             encoded-message (->> package
                                                  clj->js
                                                  (.stringify js/JSON))]
                         (.send socket encoded-message)))]
    (.on socket "open" #(do
                          (println "Opened chat ws" %)
                          (reset! *chat-socket socket)))
    (.on socket "close" (fn [_]
                          (println "chat ws closed")
                          (reset! *chat-socket nil)
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
                                   (if-let [win (:buddylist @*win)]
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
                                   (if-let [win (:add-buddy @*win)]
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
  (if-let [_ @*user]
    (gen-authed-menu)
    (gen-unauth-menu)))

(.on ipcMain "login"
     (fn [_ username password]
       (-> (user/log-in username password)
           (.then (fn [user]
                    (reset! *user user)
                    (.setApplicationMenu Menu (.buildFromTemplate Menu (generate-menu-template)))
                    (-> @*win :authentication .close)
                    (launch-buddylist)
                    (user/cache-user @*user)
                    (connect-chat)))
           (.catch (fn [_]
                     (if-let [window (:authentication @*win)]
                       (.send (.-webContents window) "login-error")))))))

(.on ipcMain "signup"
     (fn [_ first-name last-name email phone username password]
       (-> (user/sign-up first-name last-name email phone username password)
           (.then (fn [user]
                    (reset! *user user)
                    (-> @*win :authentication .close)
                    (.setApplicationMenu Menu (.buildFromTemplate Menu (generate-menu-template)))
                    (launch-buddylist)
                    (user/cache-user @*user)
                    (connect-chat)))
           (.catch (fn [errors]
                     (if-let [window (:authentication @*win)]
                       (.send (.-webContents window) "signup-error" (-> errors
                                                                        .-response
                                                                        .-data
                                                                        (#(.stringify js/JSON %))))))))))

(defn logout []
  (close-all-windows @*win)
  (reset! *user nil)
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
  
  (.on app "activate"
       (fn []
         (when (and (= (-> BrowserWindow .getAllWindows .-length) 0) (-> @*user nil? not))
           (launch-buddylist))))

  ;; ready listener
  (.on app "ready"
       (fn []
         (swap! *win assoc :loading (BrowserWindow. (clj->js {:width 400 :height 300 :frame false})))
         (.loadURL (:loading @*win) (str "file://" (.resolve path js/__dirname "../resources/public/html/index.html")))
         (.on (:loading @*win) "closed" #(swap! *win dissoc :loading))
         ; Check to see if there is a cached user (ie. app is not fresh)
         (if-let [user (user/get-user)]
           (.then user (fn [u] (if u (do
                                       (println "User:" u)
                                       (reset! *user u)
                                       (reset! *settings (user/get-settings))
                                       (.setApplicationMenu Menu (.buildFromTemplate Menu (generate-menu-template)))
                                       (-> @*win :loading .close)
                                       (launch-buddylist)
                                       (user/cache-user @*user)
                                       (connect-chat))
                                   (launch-unauth-flow))))
           (launch-unauth-flow))
         (let [launch (AutoLaunch. (clj->js {:name "BuddyList"}))]
           (.enable launch))
         (println "data folder" (.join path (-> nodejs/process .-env .-HOME) "Library" "Application Support" "BuddyList"))))

  (.setApplicationMenu Menu (.buildFromTemplate Menu (generate-menu-template))))
