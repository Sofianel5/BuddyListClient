(ns buddylistcljs.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.nodejs :as nodejs]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(def path (nodejs/require "path"))

(def Electron (nodejs/require "electron"))

(def BrowserWindow (.-BrowserWindow Electron))

(def crash-reporter (.-crashReporter Electron))

(def Os (nodejs/require "os"))

(def *win* (atom nil))

(def app (.-app Electron))

(defn login-user [username password]
  (go (let [params {:username username :password password}
            response (<! (http/post "http://50.16.117.236:8000/login"
                                    {:query-params params}))]
        (prn (:status response))
        (prn (map :login (:body response))))))

(defn signup-user [username password phone]
  (go (let [params {:username username :password password :phone phone}
            response (<! (http/post "http://50.16.117.236:8000/signup"
                                    {:query-params params}))]
        (prn (:status response))
        (prn (map :login (:body response))))))

(defn -main []
  (.start crash-reporter (clj->js {:companyName "BuddyList"
                                   :submitURL   "http://buddylistapp.com"}))

  ;; error listener
  (.on nodejs/process "error"
       (fn [err] (.log js/console err)))

  ;; window all closed listener
  (.on app "window-all-closed"
       (fn [] (if (not= (.-platform nodejs/process) "darwin")
                (.quit app))))

  ;; ready listener
  (.on app "ready"
       (fn []
         (reset! *win* (BrowserWindow. (clj->js {:width 800 :height 600})))

         ;; when no optimize comment out
         (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../index.html")))
         ;; when no optimize uncomment
         ;; (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../../../index.html")))

         (.on @*win* "closed" (fn [] (reset! *win* nil))))))

(nodejs/enable-util-print!)

;;; "Linux" or "Darwin" or "Windows_NT"
(.log js/console (str "Start descjop application on " (.type Os) "."))

(set! *main-cli-fn* -main)
