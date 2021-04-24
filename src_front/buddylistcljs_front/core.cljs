(ns buddylistcljs-front.core
  (:require  [reagent.core :as reagent :refer [atom]]
             [cljs.nodejs :as nodejs]))

(def Electron (nodejs/require "electron"))

(def ipc-render (.-ipcRender Electron))

(defonce state (atom {:message "Hello Reagent world"}))

(defn root-component []
  [:h1 (:message @state)
   [:p "Log in"]
   [:form {:on-submit #(println %)}
    [:input {:id "username" :type "text"}]
    [:input {:id "password" :type "password"}]
    [:input {:type "submit"}]]])

(defn mount-root [setting]
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))