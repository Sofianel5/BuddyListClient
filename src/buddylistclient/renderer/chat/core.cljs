(ns buddylistclient.renderer.chat.core
  (:require-macros
   [cljs.core.async.macros :refer (go)])
  (:require
   [clojure.string :refer [split]]
   [reagent.core :refer [atom create-class]]
   [reagent.dom :as rd]
   [cljs.core.async :refer (chan put! <!)]
   [cljs.nodejs :as nodejs]
   ["s-ago" :as ago]))

(def Electron (nodejs/require "electron"))

(defn parse-url
  "Parse URL parameters into a hashmap"
  [s]
  (let [param-strs (-> s (split #"\?") last (split #"\&"))]
    (into {} (for [[k v] (map #(split % #"=") param-strs)]
               [(keyword k) v]))))

(def data (parse-url (-> js/global .-location .-search)))

(def user (js->clj (.parse js/JSON (js/decodeURIComponent (:user data))) :keywordize-keys true))

(def with-user (js->clj (.parse js/JSON (js/decodeURIComponent (:with-user data))) :keywordize-keys true))

(def ipc-renderer (.-ipcRenderer Electron))

(defonce state (atom []))

(def EVENTCHANNEL (chan))

(def EVENTS
  {:message-sent (fn [message]
                   (.send ipc-renderer "chat:sent" (:username with-user) message))})

(go
  (while true
    (let [[event-name event-data] (<! EVENTCHANNEL)]
      ((event-name EVENTS) event-data))))

(.on ipc-renderer "chat:received"
     (fn [_ message]
       (println message)
       (let [parsed (.parse js/JSON message)
             message (js->clj parsed :keywordize-keys true)]
         (swap! state conj message)
         (if (= (-> message :from) (:username user))
           (.play (js/Audio. "../sounds/imsend.wav"))))
       (if-let [element (js/document.getElementById "message-list")]
         (do
           (set! (.-scrollTop element) (.-scrollHeight element))
           (println "done!"))
         (println "not rendered message-list yet"))))

(.on ipc-renderer "chat:loaded-history"
     (fn [_ parsed]
       (let [messages (js->clj parsed :keywordize-keys true)]
         (swap! state (comp vec flatten conj) messages))
       (if-let [element (js/document.getElementById "message-list")]
         (do
           (set! (.-scrollTop element) (.-scrollHeight element))
           (println "done!"))
         (println "not rendered message-list yet"))))

(defn conglomerate-messages [messages]
  (partition-by :from messages))

(defn message-list [messages]
  (create-class
   {:component-did-update (fn [_ _] (if-let [element (js/document.getElementById "message-list")]
                                      (do
                                        (set! (.-scrollTop element) (.-scrollHeight element))
                                        (println "done!"))
                                      (println "not rendered message-list yet")))
    :reagent-render
    (fn [messages] [:ul {:class "overflow-y-scroll"
                 :id "message-list"
                 :style {:height "calc(100vh - 120px)"
                         :scrollbar-color "gray #3A3A41"}}
            (map
             (fn [message-group]
               [:li {:class "flex flex-row justify-start my-[5px] ml-[5px]"
                     :key (str (first message-group) "-group")}
                (let [my-message? (= (:username user) (-> message-group first :from))
                      img-url (if my-message? (:profile-pic user) (:profile-pic with-user))]
                  [:img {:class "w-[50px] h-[50px] m-w-[50px] m-h-[50px] rounded-full overflow-hidden mr-[10px]" :src (if (nil? img-url) "../img/smiley.svg" img-url)}])
                [:div
                 [:h5 {:class "font-semibold"}
                  (-> message-group first :from)
                  [:span {:class "ml-[5px] text-xs font-light text-gray-500"}
                   (ago (let [date (js/Date. (-> message-group last :time))
                              date-minutes (.getMinutes date)
                              offset (.getTimezoneOffset date)]
                          (.setMinutes date (- date-minutes offset))
                          date))]]
                 [:ul {:class ""}
                  (map (fn [message]
                         [:li {:key (:id message)} (:message message)]) message-group)]]]) messages)])}))

(defn submit-chat [event]
  (.preventDefault event)
  (let [message (-> js/document (.getElementById "chat-input") .-value)]
    (js/console.log message)
    (.send ipc-renderer "chat:sent" (:username with-user) message)
    (set! (-> js/document (.getElementById "chat-input") .-value) "")))

(defn chat-input []
  [:form {:class "flex flex-row shadow-2xl overflow-hidden absolute inset-x-0 bottom-0 bg-[#303036] h-[50px] mx-[10px] mb-[10px] rounded-full" :on-submit #(submit-chat %) :style {"-webkit-app-region" "no-drag"}}
   [:input {:class "text-sm bg-[#43434C] border-0" :style {:flex "4"} :id "chat-input" :type "text" :placeholder (str "Message @" (:username with-user))}]
   [:input {:class "bg-[#30BCED] text-[#FFFAFF] border-0 cursor-pointer" :style {:flex "1"} :type "submit" :value "Send"}]])

(defn chat-header [with-user]
  [:div {:class "flex flex-row justify-start px-[75px] py-[5px] bg-[#303036] cursor-pointer"}
   [:img {:class "w-[50px] h-[50px] m-w-[50px] m-h-[50px] rounded-full overflow-hidden mr-[10px]" :src (if (nil? (:profile-picture with-user)) "../img/smiley.svg" (:profile-picture with-user))}]
   [:div {:class "flex flex-col justify-evenly"}
    [:h4 {:class "font-semibold"} (:username with-user)]
    [:h6 {:class "font-normal text-xs"} (:status with-user)]]])

(defn root-component []
  [:div {:class "relative h-screen w-screen font-sans bg-[#3A3A41] select-none text-[#FFFAFF] overflow-x-hidden"}
   [chat-header with-user]
   [message-list (conglomerate-messages @state)]
   [chat-input]])

(defn ^:dev/after-load start! []
  (rd/render
   [root-component]
   (js/document.getElementById "app-container")
   (fn [_] (if-let [element (js/document.getElementById "message-list")]
             (do
               (set! (.-scrollTop element) (.-scrollHeight element))
               (println "done!"))
             (println "not rendered message-list yet")))))
