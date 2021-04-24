(ns buddylistcljs.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.nodejs :as nodejs]
            [buddylistcljs.user :as user]
            [cljs.core.async :refer [<!]]))

(def path (nodejs/require "path"))

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
  
  (.on ipc-main "login"
       (fn [event arg]
         (println event)
         (println arg)))

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
             (swap! *win* assoc :buddylist (BrowserWindow. (clj->js {:width 300 :height 1000 :webPreferences {:nodeIntegration true}})))
             (.loadURL (:buddylist @*win*) (str "file://" (.resolve path (js* "__dirname") "../html/buddylist.html")))
             (.on (:buddylist @*win*) "closed" #(swap! *win* dissoc :buddylist)))
           (do
             (-> @*win* :loading .close)
             (swap! *win* assoc :authentication (BrowserWindow. (clj->js {:width 800 :height 600 :webPreferences {:nodeIntegration true}})))
             (.loadURL (:authentication @*win*) (str "file://" (.resolve path (js* "__dirname") "../html/authentication.html")))
             (.on (:authentication @*win*) "closed" #(swap! *win* dissoc :authentication)))))))

(nodejs/enable-util-print!)

;;; "Linux" or "Darwin" or "Windows_NT"
(.log js/console (str "Start descjop application on " (.type Os) "."))

(set! *main-cli-fn* -main)
