(ns buddylistcljs-front-initial.core
  (:require  [reagent.core :as reagent :refer [atom]]
             [cljs.nodejs :as nodejs]))

(def Electron (nodejs/require "electron"))

(def ipc-render (.-ipcRender Electron))

(defonce state (atom {:message "Loading..."}))

(defn root-component []
  [:h1 (:message @state)])

(defn mount-root [setting]
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))