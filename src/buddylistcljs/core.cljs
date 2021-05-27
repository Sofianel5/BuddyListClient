(ns buddylistcljs.core
  (:require
   [cljs.nodejs :as nodejs]
   [buddylistcljs.forjure :refer [dissoc-in]]
   [buddylistcljs.user :as user]
   [buddylistcljs.util :as util]))

(def path (nodejs/require "path"))

(def client (-> "faye-websocket" nodejs/require .-Client))

(def Electron (nodejs/require "electron"))

(def BrowserWindow (.-BrowserWindow Electron))

(def Menu (.-Menu Electron))

(def Tray (.-Tray Electron))

(def ipc-main (.-ipcMain Electron))

(def crash-reporter (.-crashReporter Electron))

(def Os (nodejs/require "os"))

(def Notification (.-Notification Electron))

(def *win* (atom {}))

(def *user* (atom {}))

(def app (.-app Electron))

(if (.-isPackaged app)
  (set! (-> nodejs/process .-env .-NODE_ENV) "production")
  (println (-> nodejs/process .-env .-NODE_ENV)))

(def application-menu-template [{:label "File"
                                 :submenu [{:label "Open buddy list"
                                            :click #(println "open buddy list")}
                                           {:label "Close Window"}]}
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
                                            :click #(println "Add buddy")}
                                           {:label "Remove Buddy"
                                            :click #(println "remove buddy")}]}])

(if (= (.-platform nodejs/process) "darwin")
  (def application-menu-template (into [{:label "BuddyList"
                                         :submenu [{:label "Quit"
                                                    :accelerator (if (= (.-platform nodejs/process) "darwin") "Command+Q" "Ctrl+Q")
                                                    :click #(.quit app)}]}] application-menu-template)))

(if (not= (-> nodejs/process .-env .-NODE_ENV) "production")
  (def application-menu-template (conj application-menu-template {:label "Developer Tools"
                                                                  :submenu [{:label "Toggle DevTools"
                                                                             :click #(.toggleDevTools %2)
                                                                             :accelerator (if (= (.-platform nodejs/process) "darwin") "Command+I" "Ctrl+I")}]})))
(def application-menu-template (clj->js application-menu-template))

(println (.stringify js/JSON application-menu-template))

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

(defn launch-buddylist []
  (println "user:" @*user*)
  (swap! *win* assoc :buddylist (BrowserWindow. (clj->js {:width 300 :minWidth 300 :height 700 :webPreferences {:nodeIntegration true :contextIsolation false}})))
  (.loadURL (:buddylist @*win*) (str "file://" (.resolve path (js* "__dirname") "../html/buddylist.html")))
  (.on (-> @*win* :buddylist .-webContents) "did-finish-load"
       (fn []
         (.send (-> @*win* :buddylist .-webContents) "user" (->> @*user* clj->js (.stringify js/JSON)))
         (let [socket (client. "ws://50.16.117.236:8000/buddies" nil (clj->js {:headers {:authorization (:auth-token @*user*) :request-user (:username @*user*)}}))]
           (.on socket "open" #(println "Opening connection" %))
           (.on socket "close" #(println "Closing connection" %))
           (.on socket "message" on-buddy-message)
           (.on ipc-main "buddies:new-status" (fn [_ new-status]
                                                (println "received new-status" new-status)
                                                (let [package {:new-status new-status}
                                                      encoded-message (->> package
                                                                           clj->js
                                                                           (.stringify js/JSON))]
                                                  (.send socket encoded-message))))
           (.on (:buddylist @*win*) "closed" #(do
                                                (.close socket)
                                                (.removeAllListeners ipc-main "buddies:new-status")
                                                (swap! *win* dissoc :buddylist)))))))

(.on ipc-main "login"
     (fn [_ username password]
       (.then (user/log-in username password) (fn [user]
                                                (reset! *user* user)
                                                (-> @*win* :authentication .close)
                                                (launch-buddylist)))))

(.on ipc-main "signup"
     (fn [_ username phone password]
       (.then (user/sign-up username phone password) (fn [user]
                                                       (reset! *user* user)
                                                       (-> @*win* :authentication .close)
                                                       (launch-buddylist)))))

(defn notify-new-message [with-user message]
  (let [notification-params (clj->js {:title (str "New message from " with-user)
                                      :body message
                                      :sound (.resolve path (js* "__dirname") "../assets/imrcv.wav")})
        notification (Notification. notification-params)]
    (.show notification)))

(defn on-message-recieved [e]
  (println "chat recieved from server" (.-data e))
  (let [js-message (->> e
                        .-data
                        (.parse js/JSON))
        message (js->clj js-message :keywordize-keys true)
        with-user (:to message)
        old-max (user/get-message-count with-user)]
    (if-let [window (-> @*win* :chats (get with-user))]
      (.send (.-webContents window) "chat:received" (.-data e)))
    (if-let [new-max (util/get-max-id (:username @*user*) message)]
      (if (> new-max old-max)
        (do
          (println new-max old-max)
          (user/update-messages-count with-user new-max)
          (notify-new-message with-user (:message message)))
        (println new-max old-max))
      (println "new max null" old-max))))

(defn launch-chat [with-user]
  (swap! *win* assoc-in [:chats with-user] (BrowserWindow. (clj->js {:width 500 :height 400 :webPreferences {:nodeIntegration true :contextIsolation false}})))
  (.loadFile (-> @*win* :chats (get with-user)) (.resolve path (js* "__dirname") "../html/chat.html") (clj->js {:query {:with-user with-user :user (:username @*user*)}}))
  (.on (-> @*win* :chats (get with-user) .-webContents) "did-finish-load"
       (fn []
         (println "chat did-finish-load " with-user)
         (.then (user/get-chat-history (:username @*user*) (:auth-token @*user*) with-user 0 25)
                (fn [data]
                  (println data)
                  (println (first data))
                  (if-let [window (-> @*win* :chats (get with-user))]
                    (.send (.-webContents window) "chat:loaded-history" data))))))
  (.on (-> @*win* :chats (get with-user)) "closed" #(swap! *win* dissoc-in [:chats with-user])))

(.on ipc-main "buddies:selected"
     (fn [_ username]
       (if-not (contains? (:chats @*win*) username)
         (launch-chat username)
         (.show (-> @*win* :chats (get username))))))

(.on ipc-main "addbuddy"
     (fn [_ buddy-username]
       (.then (user/add-buddy (:username @*user*) (:auth-token @*user*) buddy-username)
              (fn [m]
                (.reload (-> @*win* :buddylist))
                (.close (-> @*win* :add-buddy))))))

(defn open-addbuddy-win []
  (swap! *win* assoc :add-buddy (BrowserWindow. (clj->js {:width 300 :height 300 :webPreferences {:nodeIntegration true :contextIsolation false}})))
  (.loadURL (:add-buddy @*win*) (str "file://" (.resolve path (js* "__dirname") "../html/addbuddy.html")))
  (.on (:add-buddy @*win*) "closed" #(do
                                       (.removeAllListeners ipc-main "open-addbuddy")
                                       (swap! *win* dissoc :add-buddy))))
(.on ipc-main "open-addbuddy"
     (fn [_]
       (open-addbuddy-win)))

(defn launch-unauth-flow []
  (-> @*win* :loading .close)
  (swap! *win* assoc :authentication (BrowserWindow. (clj->js {:width 800 :height 600 :webPreferences {:nodeIntegration true :contextIsolation false}})))
  (.loadURL (:authentication @*win*) (str "file://" (.resolve path (js* "__dirname") "../html/authentication.html")))
  (.on (:authentication @*win*) "closed" #(swap! *win* dissoc :authentication)))

(defn -main []
  (.start crash-reporter (clj->js {:companyName "BuddyList"
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
         (swap! *win* assoc :loading (BrowserWindow. (clj->js {:width 800 :height 600 :frame false})))
         ;; when no optimize comment out
         (.loadURL (:loading @*win*) (str "file://" (.resolve path (js* "__dirname") "../index.html")))
         ;; when no optimize uncomment
         ;; (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../../../index.html")))
         ; Check to see if there is a cached user (ie. app is not fresh)
         (if-let [user (user/get-user)]
           (.then user (fn [u] (if u (do
                                       ;
                                       (launch-unauth-flow)
                                       ;
                                       (println "User:" u)
                                       (reset! *user* u)
                                       (-> @*win* :loading .close)
                                       (launch-buddylist)
                                       (user/cache-user @*user*)
                                       (let [socket (client. (str "ws://50.16.117.236:8000/chat") nil (clj->js {:headers {:authorization (:auth-token @*user*) :request-user (:username @*user*)}}))]
                                         (.on socket "open" #(println "Opening connection" %))
                                         (.on socket "close" #(println "Closing connection" %))
                                         (.on socket "message" #(on-message-recieved %))
                                         (.on ipc-main "chat:sent"
                                              (fn [_ to message]
                                                (println "recieved chat from client")
                                                (let [package {:to to :message message}
                                                      encoded-message (->> package
                                                                           clj->js
                                                                           (.stringify js/JSON))]
                                                  (.send socket encoded-message))))))
                                   (launch-unauth-flow))))
           (launch-unauth-flow))
         (let [tray (Tray. (.resolve path (js* "__dirname") "../assets/list.png"))
               context-menu (.buildFromTemplate Menu (clj->js [{:label "BuddyList"}]))]
           (.setToolTip tray "BuddyList")
           (.setContextMenu tray context-menu))))

  (.setApplicationMenu Menu (.buildFromTemplate Menu application-menu-template)))

(nodejs/enable-util-print!)

;;; "Linux" or "Darwin" or "Windows_NT"
(.log js/console (str "Start descjop application on " (.type Os) "."))

(set! *main-cli-fn* -main)
