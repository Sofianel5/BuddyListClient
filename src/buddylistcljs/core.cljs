(ns buddylistcljs.core
  (:require
   [cljs.nodejs :as nodejs]
   [buddylistcljs.forjure :refer [dissoc-in]]
   [buddylistcljs.user :as user]))

(def path (nodejs/require "path"))

(def client (-> "faye-websocket" nodejs/require .-Client))

(def Electron (nodejs/require "electron"))

(def BrowserWindow (.-BrowserWindow Electron))

(def ipc-main (.-ipcMain Electron))

(def crash-reporter (.-crashReporter Electron))

(def Os (nodejs/require "os"))

(def *win* (atom {}))

(def *user* (atom {}))

(def app (.-app Electron))

(defn on-buddy-message [e]
  (println "Message: " (.-data e))
  (if (not= (first (.-data e)) \{)
    (let [buddies (->> e
                       .-data
                       user/cache-buddies-str)]
      (println "buddies: " buddies)
      (.send (-> @*win* :buddylist .-webContents) "buddies" buddies)
      (println "sent to client " (-> @*win* :buddylist .-webContents)))
    (let [new-status (:new-status (js->clj (->> e
                                                .-data
                                                (.parse js/JSON))
                                           :keywordize-keys true))]
      (swap! *user* assoc :status new-status)
      (user/cache-user @*user*)
      (.send (-> @*win* :buddylist .-webContents) "user" (->> @*user* clj->js (.stringify js/JSON))))))

(defn launch-buddylist []
  (println "user:" @*user*)
  (swap! *win* assoc :buddylist (BrowserWindow. (clj->js {:width 300 :height 700 :webPreferences {:nodeIntegration true :contextIsolation false}})))
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
                                                  (.send socket encoded-message)))))))
  (.on (:buddylist @*win*) "closed" #(swap! *win* dissoc :buddylist)))

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

(defn on-message-recieved [with-user e]
  (.send (-> @*win* :chats (get with-user) .-webContents) "chat:received" (.-data e)))

(defn launch-chat [with-user]
  (swap! *win* assoc-in [:chats with-user] (BrowserWindow. (clj->js {:width 500 :height 400 :webPreferences {:nodeIntegration true :contextIsolation false}})))
  (.loadFile (-> @*win* :chats (get with-user)) (.resolve path (js* "__dirname") "../html/chat.html") (clj->js {:query {:with-user with-user}}))
  (.on (-> @*win* :chats (get with-user) .-webContents) "did-finish-load"
       (fn []
         (let [socket (client. (str "ws://50.16.117.236:8000/chat?with-user=" with-user) nil (clj->js {:headers {:authorization (:auth-token @*user*) :request-user (:username @*user*)}}))]
           (.on socket "open" #(println "Opening connection" %))
           (.on socket "close" #(println "Closing connection" %))
           (.on socket "message" #(on-message-recieved with-user %))
           (.on ipc-main (str "chat:sent:" with-user)
                (fn [_ message]
                  (let [package {:to with-user :message message}
                        encoded-message (->> package
                                             clj->js
                                             (.stringify js/JSON))]
                    (.send socket encoded-message)))))))

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
  (.on (:add-buddy @*win*) "closed" #(swap! *win* dissoc :add-buddy)))

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
                                   :submitURL   "http://buddylistapp.com"}))

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
         (swap! *win* assoc :loading (BrowserWindow. (clj->js {:width 800 :height 600})))
         ;; when no optimize comment out
         (.loadURL (:loading @*win*) (str "file://" (.resolve path (js* "__dirname") "../index.html")))
         ;; when no optimize uncomment
         ;; (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../../../index.html")))
         ; Check to see if there is a cached user (ie. app is not fresh)
         (if-let [user (user/get-user)]
           (.then user #(if % (do
                                (println "User:" %)
                                (reset! *user* %)
                                (-> @*win* :loading .close)
                                (launch-buddylist)
                                (user/cache-user @*user*))
                            (launch-unauth-flow)))
           (launch-unauth-flow)))))

           (nodejs/enable-util-print!)

;;; "Linux" or "Darwin" or "Windows_NT"
(.log js/console (str "Start descjop application on " (.type Os) "."))

(set! *main-cli-fn* -main)
