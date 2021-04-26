(ns buddylistcljs-front-authentication.core
  (:require  [reagent.core :as reagent :refer [atom]]
             [cljs.nodejs :as nodejs]))

(def Electron (nodejs/require "electron"))

(def ipc-render (.-ipcRender Electron))

(defonce state (atom {:type :login}))

(defn root-component []
  [:h1 {:on-click #(.send ipc-render "channel" "message")} (:message @state)])

(defn mount-root [setting]
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))