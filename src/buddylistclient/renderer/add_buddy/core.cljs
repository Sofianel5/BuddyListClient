(ns buddylistclient.renderer.add-buddy.core
  (:require  [reagent.dom :as rd]
             [cljs.nodejs :as nodejs]))

(enable-console-print!)

(def Electron (nodejs/require "electron"))

(def ipc-renderer (.-ipcRenderer Electron))

(defn on-submit-add-form [event]
  (.preventDefault event)
  (if-let [buddy (-> js/document (.getElementById "buddy") .-value)]
    (.send ipc-renderer "addbuddy" buddy)))

(defn add-budy-form []
  [:form {:on-submit #(on-submit-add-form %)}
   ;later add option to add by phone number
   [:input {:class "ml-[20px] mr-[20px]" :type "text" :name "buddy" :placeholder "hacker123" :id "buddy"}]
   [:input {:class "focus:outline-none cursor-pointer bg-[#09BC8A] w-screen h-[50px] absolute inset-x-0 bottom-0 text-[#FFFAFF] font-semibold" :type "submit" :value "Add!"}]])

(defn root-component []
  [:div {:class "w-screen h-screen font-sans bg-[#303036] overflow-hidden select-none relative"}
   [:h3 {:class "ml-[20px] mt-[25px] mb-[10px] font-bold text-lg text-[#FFFAFF]"} "Add Buddy"]
   [add-budy-form]])

(defn ^:dev/after-load start! []
  (rd/render
   [root-component]
   (js/document.getElementById "app-container")))