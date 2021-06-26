(ns buddylistclient.renderer.settings.core
  (:require-macros
   [cljs.core.async.macros :refer (go)])
  (:require
   [clojure.string :refer [split]]
   [reagent.core :refer [atom create-class]]
   [reagent.dom :as rd]
   [cljs.core.async :refer (chan put! <!)]
   [cljs.nodejs :as nodejs]))

(def Electron (nodejs/require "electron"))

(defn parse-url
  "Parse URL parameters into a hashmap"
  [s]
  (let [param-strs (-> s (split #"\?") last (split #"\&"))]
    (into {} (for [[k v] (map #(split % #"=") param-strs)]
               [(keyword k) v]))))

(def data (parse-url (-> js/global .-location .-search)))

(def user (js->clj (.parse js/JSON (js/decodeURIComponent (:user data))) :keywordize-keys true))

(def *client-settings (atom (js->clj (.parse js/JSON (js/decodeURIComponent (:settings data))) :keywordize-keys true)))

(def ipc-renderer (.-ipcRenderer Electron))

(def EVENTCHANNEL (chan))

(def EVENTS
  {})

(go
  (while true
    (let [[event-name event-data] (<! EVENTCHANNEL)]
      ((event-name EVENTS) event-data))))

(defn account-box []
  [:div {:class "mx-[20px] bg-[#303036] pb-[5px] rounded-lg"}
   [:div {:class "flex flex-row justify-start"}
    [:div {:class "cursor-pointer container w-[75px] h-[75px] m-w-[75px] m-h-[75px] mt-[10px] ml-[10px] rounded-full overflow-hidden mr-[20px]"
           :on-click #(.send ipc-renderer "new-profile-pic")}
     [:img {:class "image w-[75px] h-[75px] m-w-[75px] m-h-[75px]" :src (if (nil? (:profile-pic user)) "../img/smiley.svg" (:profile-pic user))}]
     [:div {:class "overlay"} "Change"]]
    [:div {:class "flex flex-col justify-evenly"}
     [:h3 {:class "font-bold"} (str (:first-name user) " " (:last-name user))]
     [:h5 {:class "font-semibold"} (str "@" (:username user))]
     [:h6 {:class "font-normal text-xs"} (str "Status: " (:status user))]]]
   [:div {:class "mt-[20px] pb-[10px] mb-[10px] mx-[10px] bg-[#43434C] rounded-lg"}
    [:div {:class "flex flex-row justify-between px-[15px] pt-[10px]"}
     [:div {:class "flex flex-col justify-center"}
      [:p {:class "mb-[5px] uppercase text-gray-400 text-xs"} "first name"]
      [:p {:class "text-sm"} (:first-name user)]]
     [:span]]
    [:div {:class "flex flex-row justify-between px-[15px] pt-[10px]"}
     [:div {:class "flex flex-col justify-center"}
      [:p {:class "mb-[5px] uppercase text-gray-400 text-xs"} "last name"]
      [:p {:class "text-sm"} (:last-name user)]]
     [:span]]
    [:div {:class "flex flex-row justify-between pl-[15px] pt-[10px]"}
     [:div {:class "flex flex-col justify-center"}
      [:p {:class "mb-[5px] uppercase text-gray-400 text-xs"} "screen name"]
      [:p {:class "text-sm"} (str "@" (:username user))]]
     [:span]]
    [:div {:class "flex flex-row justify-between pl-[15px] pt-[10px]"}
     [:div {:class "flex flex-col justify-center"}
      [:p {:class "mb-[5px] uppercase text-gray-400 text-xs"} "email"]
      [:p {:class "text-sm"} (:email user)]]
     [:span]]
    [:div {:class "flex flex-row justify-between pl-[15px] pt-[10px]"}
     [:div {:class "flex flex-col justify-center"}
      [:p {:class "mb-[5px] uppercase text-gray-400 text-xs"} "phone number"]
      [:p {:class "text-sm"} (:phone user)]]
     [:span]]]])

(defn save-settings []
  (.send ipc-renderer "new-settings" (->> @*client-settings clj->js (.stringify js/JSON))))

(defn root-component []
  [:div {:class "relative h-screen w-screen font-sans bg-[#43434C] select-none text-[#FFFAFF] overflow-x-hidden"}
   [:h3 {:class "ml-[20px] mt-[25px] mb-[10px] font-bold text-lg"} "My Account"]
   [account-box]
   [:h3 {:class "ml-[20px] mt-[25px] mb-[10px] font-bold text-lg"} "Client Settings"]
   [:div {:class "flex flex-row justify-start"}
    [:h6 {:class "mx-[20px] font-semibold text-sm"} "Sounds"]
    [:input {:class "focus:outline-none focus:border-none focus:ring-0" :type "checkbox" :checked (:sounds @*client-settings) :on-click #(do (swap! *client-settings assoc :sounds (not (:sounds @*client-settings))) (save-settings))}]]
   [:h3 {:class "ml-[20px] mt-[25px] mb-[10px] font-bold text-lg"} "Switch Accounts"]
   [:button {:class "ml-[20px] mb-[25px] px-[10px] py-[5px] bg-[#30BCED] rounded focus:outline-none"
             :on-click #(.send ipc-renderer "logout")}
    "Log Out"]])

(defn ^:dev/after-load start! []
  (rd/render
   [root-component]
   (js/document.getElementById "app-container")))
