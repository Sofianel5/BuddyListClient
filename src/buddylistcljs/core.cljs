(ns buddylistcljs.core
  (:require [cljs.nodejs :as nodejs]
            [buddylistcljs.user :as user]))

(def path (nodejs/require "path"))

(def ws (nodejs/require "faye-websocket"))

(def client (.-Client ws))

(def Electron (nodejs/require "electron"))

(def BrowserWindow (.-BrowserWindow Electron))

(def ipc-main (.-ipcMain Electron))

(def crash-reporter (.-crashReporter Electron))

(def Os (nodejs/require "os"))

(def *win* (atom {}))

(def app (.-app Electron))

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

  (defn on-buddy-message [e]
    (println "Message: " (.-data e))
    (let [buddies (->> e
                       .-data)]
      (println "buddies: " buddies)
      (.send (-> @*win* :buddylist .-webContents) "buddies" buddies)
      (println "sent to client " (-> @*win* :buddylist .-webContents))))

  (defn launch-buddylist [user]
    (swap! *win* assoc :buddylist (BrowserWindow. (clj->js {:width 300 :height 700 :webPreferences {:nodeIntegration true}})))
    (.loadURL (:buddylist @*win*) (str "file://" (.resolve path (js* "__dirname") "../html/buddylist.html")))
    (.on (-> @*win* :buddylist .-webContents) "did-finish-load"
         (fn []
           (let [socket (client. "ws://50.16.117.236:8000/buddies" nil (clj->js {:headers {:authorization "2b6f0364-a2f8-443f-a358-9e80d6d8c159" :request-user "sofiane"}}))]
             (.on socket "open" #(println "Opening connection" %))
             (.on socket "close" #(println "Closing connection" %))
             (.on socket "message" on-buddy-message))))
    (.on (:buddylist @*win*) "closed" #(swap! *win* dissoc :buddylist)))

  (.on ipc-main "login"
       (fn [_ username password]
         (.then (user/log-in username password) (fn [user]
                                                  (-> @*win* :authentication .close)
                                                  (launch-buddylist user)))))
  
  (.on ipc-main "buddies:selected"
       (fn [_ username]
         (println username)))

  ;; ready listener
  (.on app "ready"
       (fn []
         (swap! *win* assoc :loading (BrowserWindow. (clj->js {:width 800 :height 600})))

         ;; when no optimize comment out
         (.loadURL (:loading @*win*) (str "file://" (.resolve path (js* "__dirname") "../index.html")))

         ;; when no optimize uncomment
         ;; (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../../../index.html")))

         ; Check to see if there is a cached user (ie. app is not fresh)
         (if-let [user (user/get-cached-user)]
           (do
             (-> @*win* :loading .close)
             (launch-buddylist user))
           (do
             (-> @*win* :loading .close)
             (swap! *win* assoc :authentication (BrowserWindow. (clj->js {:width 800 :height 600 :webPreferences {:nodeIntegration true}})))
             (.loadURL (:authentication @*win*) (str "file://" (.resolve path (js* "__dirname") "../html/authentication.html")))
             (.on (:authentication @*win*) "closed" #(swap! *win* dissoc :authentication)))))))

(nodejs/enable-util-print!)

;;; "Linux" or "Darwin" or "Windows_NT"
(.log js/console (str "Start descjop application on " (.type Os) "."))

(set! *main-cli-fn* -main)
