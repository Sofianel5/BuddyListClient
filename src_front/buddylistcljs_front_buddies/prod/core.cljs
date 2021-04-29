(ns buddylistcljs-front-buddies.core
  (:require-macros [cljs.core.async.macros :refer (go)])
  (:require  [reagent.core :as reagent :refer [atom]]
             [cljs.core.async :refer (chan put! <!)]
             [cljs.nodejs :as nodejs]))

(def Electron (nodejs/require "electron"))

(def ipc-renderer (.-ipcRenderer Electron))

(defonce state (atom nil))

(def EVENTCHANNEL (chan))

(def EVENTS
  {:buddy-clicked (fn [username]
                    (.send ipc-renderer "buddies:selected" username))})

(go
  (while true
    (let [[event-name event-data] (<! EVENTCHANNEL)]
      ((event-name EVENTS) event-data))))

(.on ipc-renderer "buddies" (fn [buddies]
                              (reset! state buddies)))

(defn buddies-list [event-channel buddies]
  [:div {:class "buddies-list"}
   (for [buddy buddies]
     ^{:key (:username buddy)}
     [:div {:class "buddy-item"}
      [:h3 (:username buddy)]
      (if (not= (:status buddy) nil)
        [:p (:status buddy)])])])

(defn root-component []
  [:div
   [buddies-list EVENTCHANNEL @state]])

(defn mount-root [setting]
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))