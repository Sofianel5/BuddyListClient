(ns buddylistclient.renderer.add-buddy.core
  (:require  [reagent.core :refer [atom]]
             [reagent.dom :as rd]
             [cljs.nodejs :as nodejs]))

(enable-console-print!)

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

(defn ^:dev/after-load start! []
  (rd/render
   [root-component]
   (js/document.getElementById "app-container")))