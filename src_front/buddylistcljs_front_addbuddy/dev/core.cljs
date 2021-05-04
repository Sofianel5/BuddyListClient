(ns buddylistcljs-front-addbuddy.core
  (:require  [reagent.core :as reagent :refer [atom]]
             [cljs.nodejs :as nodejs]))

(def Electron (nodejs/require "electron"))

(def ipc-renderer (.-ipcRenderer Electron))

(defonce state (atom {:buddy nil}))

(defn on-submit-add-form [event]
  (.preventDefault event)
  (if-let [buddy (-> js/document (.getElementById "buddy") .-value)]
    (.send ipc-renderer "addbuddy" buddy)))

(defn root-component []
  [:form {:on-submit #(on-submit-add-form %)}
   ;later add option to add by phone number
   [:input {:type "text" :name "buddy" :placeholder "Buddy's username" :id "buddy"}]
   [:input {:type "submit"}]])

(defn mount-root [setting]
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))