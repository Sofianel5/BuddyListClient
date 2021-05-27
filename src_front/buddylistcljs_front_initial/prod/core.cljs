(ns buddylistcljs-front-initial.core
  (:require  [reagent.core :as reagent :refer [atom]]
             [cljs.nodejs :as nodejs]
             [garden.core :refer [css]]))

(def Electron (nodejs/require "electron"))

(def ipc-render (.-ipcRender Electron))

(defonce state (atom {:message "Loading..."}))

(defn root-component []
  [:h1 {:style (css {:font-weight "bold" :color "blue"})} (:message @state)])

(defn mount-root [setting]
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))