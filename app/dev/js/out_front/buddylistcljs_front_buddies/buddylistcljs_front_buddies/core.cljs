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

(.on ipc-renderer "buddies" (fn [event message]
                              (js/console.log "ipc-render recieved")
                              (let [parsed (.parse js/JSON message)
                                    buddies (js->clj parsed :keywordize-keys true)]
                                (js/console.log buddies)
                                (js/console.log (-> buddies first :username))
                                (reset! state buddies))))

(defn buddies-list [event-channel buddies]
  [:ul {:class "buddies-list"}
   (for [buddy buddies]
     ^{:key (:username buddy)}
     [:li {:class "buddy-item" :on-click #(put! event-channel [:buddy-clicked (:username buddy)])}
      [:h3 (:username buddy)]
      (if (not= (:status buddy) nil)
        [:p (:status buddy)]
        [:p "Offline"])])])

(defn root-component []
  [:div
   [buddies-list EVENTCHANNEL @state]])

(defn mount-root [setting]
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))