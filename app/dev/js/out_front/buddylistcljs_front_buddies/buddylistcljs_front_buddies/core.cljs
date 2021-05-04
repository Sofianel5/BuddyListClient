(ns buddylistcljs-front-buddies.core
  (:require-macros [cljs.core.async.macros :refer (go)])
  (:require  [reagent.core :as reagent :refer [atom]]
             [cljs.core.async :refer (chan put! <!)]
             [cljs.nodejs :as nodejs]))

(def Electron (nodejs/require "electron"))

(def ipc-renderer (.-ipcRenderer Electron))

(defonce state (atom nil))

(def *user* (atom {}))

(def EVENTCHANNEL (chan))

(def EVENTS
  {:buddy-clicked (fn [username]
                    (.send ipc-renderer "buddies:selected" username))
   :status-updated (fn [new-status]
                     (println "sending new-status" new-status)
                     (.send ipc-renderer "buddies:new-status" new-status))})

(go
  (while true
    (let [[event-name event-data] (<! EVENTCHANNEL)]
      ((event-name EVENTS) event-data))))

(.on ipc-renderer "buddies" (fn [_ message]
                              (let [parsed (.parse js/JSON message)
                                    buddies (js->clj parsed :keywordize-keys true)]
                                (js/console.log buddies)
                                (js/console.log (-> buddies first :username))
                                (reset! state buddies))))

(.on ipc-renderer "user" (fn [_ user-str]
                           (println "received user-str" user-str)
                           (reset! *user* (js->clj (.parse js/JSON user-str) :keywordize-keys true))
                           (println "parsed" @*user* (:username @*user*) (get @*user* "username"))))

(defn buddies-list [event-channel buddies]
  [:ul {:class "buddies-list"}
   (for [buddy buddies]
     ^{:key (:username buddy)}
     [:li {:class "buddy-item" :on-click #(put! event-channel [:buddy-clicked (:username buddy)])}
      [:h3 (:username buddy)]
      (if (not= (:status buddy) nil)
        [:p (:status buddy)]
        [:p "Offline"])])])

(defn on-new-status-submit [e event-channel]
  (.preventDefault e)
  (.send ipc-renderer "buddies:new-status" (.-value (.getElementById js/document "new-status-input"))))

(defn status-update [event-channel]
  [:div {:class "status-updater"}
   [:form {:on-submit #(on-new-status-submit % event-channel)}
    [:input {:type "text" :id "new-status-input" :placeholder "New status"}]
    [:input {:type "submit"}]]])

(defn on-add-buddy [event]
  (.preventDefault event)
  (.send ipc-renderer "open-addbuddy"))

(defn open-add-buddy []
  [:form {:on-submit #(on-add-buddy %)}
   [:input {:type "submit" :value "Add Buddy"}]])

(defn root-component []
  [:div
   [:h4 (str (:username @*user*) ": " (:status @*user*))]
   [status-update EVENTCHANNEL]
   (if @state
     [buddies-list EVENTCHANNEL @state]
     [:p "Loading buddies..."])
   [open-add-buddy]])

(defn mount-root [setting]
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))