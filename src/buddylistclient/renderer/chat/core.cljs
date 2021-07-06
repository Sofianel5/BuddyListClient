(ns buddylistclient.renderer.chat.core
  (:require-macros
   [cljs.core.async.macros :refer (go)])
  (:require
   [clojure.string :refer [split]]
   [reagent.core :refer [atom create-class as-element]]
   [reagent.dom :as rd]
   [cljs.core.async :refer (chan put! <!)]
   [cljs.nodejs :as nodejs]
   ["s-ago" :as ago]
   ["react-autosize-textarea" :default TextareaAutosize]))

(def Electron (nodejs/require "electron"))

(defn parse-url
  "Parse URL parameters into a hashmap"
  [s]
  (let [param-strs (-> s (split #"\?") last (split #"\&"))]
    (into {} (for [[k v] (map #(split % #"=") param-strs)]
               [(keyword k) v]))))

(def data (parse-url (-> js/global .-location .-search)))

(def *user (atom (js->clj (.parse js/JSON (js/decodeURIComponent (:user data))) :keywordize-keys true)))

(defonce *with-user (atom (js->clj (.parse js/JSON (js/decodeURIComponent (:with-user data))) :keywordize-keys true)))

(def ipc-renderer (.-ipcRenderer Electron))

(defonce state (atom []))

(defonce pending (atom []))

(def EVENTCHANNEL (chan))

(def EVENTS
  {:message-sent (fn [message])})

(go
  (while true
    (let [[event-name event-data] (<! EVENTCHANNEL)]
      ((event-name EVENTS) event-data))))

(.on ipc-renderer "chat:received"
     (fn [_ message]
       (println message)
       (let [parsed (.parse js/JSON message)
             message (js->clj parsed :keywordize-keys true)]
         (swap! pending (fn [v] (->> v (remove #(= (:uuid message) (:uuid %))) vec)))
         (swap! state conj message))
       (when-let [element (js/document.getElementById "message-list")]
         (set! (.-scrollTop element) (.-scrollHeight element)))))

(.on ipc-renderer "chat:loaded-history"
     (fn [_ parsed]
       (let [messages (js->clj parsed :keywordize-keys true)]
         (swap! state (comp vec flatten conj) messages))
       (when-let [element (js/document.getElementById "message-list")]
         (set! (.-scrollTop element) (.-scrollHeight element)))))

(.on ipc-renderer "chat:update-buddy"
     (fn [_ new-buddy-str]
       (println "new buddy" new-buddy-str)
       (reset! *with-user (js->clj (.parse js/JSON new-buddy-str) :keywordize-keys true))))

(defn send-file [])

(defn conglomerate-messages [processed-messages pending-messages]
  (let [pending-messages (map #(assoc % :pending true) pending-messages)
        messages (into processed-messages pending-messages)]
   (partition-by :from messages)))

(defn message-list [messages]
  (create-class
   {:component-did-update (fn [_ _] (if-let [element (js/document.getElementById "message-list")]
                                      (set! (.-scrollTop element) (.-scrollHeight element))
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
                (let [my-message? (= (:username @*user) (-> message-group first :from))
                      img-url (if my-message? (:profile-pic @*user) (:profile-pic @*with-user))]
                  [:img {:class "object-cover w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-full overflow-hidden mr-[10px]" :src (if (nil? img-url) "../img/smiley.svg" img-url)}])
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
                         [:li {:key (:id message) :class (if (:pending message) "text-gray-200" "")} (:message message)]) message-group)]]]) messages)])}))

(defn submit-chat [event]
  (.preventDefault event)
  (let [message-uuid (str (random-uuid))
        message (-> js/document (.getElementById "chat-input") .-value)]
    (js/console.log message)
    (.send ipc-renderer "chat:sent" (:username @*with-user) message message-uuid)
    (set! (-> js/document (.getElementById "chat-input") .-value) "")
    (swap! pending conj {:uuid message-uuid :id message-uuid :message message :from (:username @*user) :to (:username @*with-user) :time (let [d (js/Date. (.now js/Date))] (.toISOString d))})))

(defn chat-input []
  [:form {:id "form" :class "flex flex-row shadow-2xl absolute inset-x-0 bg-[#303036] h-[50px] mx-[10px] mb-[20px]" :on-submit #(submit-chat %)}
   (as-element
    [:> TextareaAutosize {:onResize #(set! (-> (.querySelector js/document ".overflow-y-scroll") .-style .-height) (str "calc(100vh - 70px - " (-> (.getElementById js/document "chat-input") .-style .-height) ")")) 
                          :on-key-down #(when (= (.-key %) "Enter") (submit-chat %))
                          :class "focus:outline-none focus:ring-0 max-h-[150px] text-sm bg-[#43434C] border-0" 
                          :style {"-webkit-app-region" "no-drag" :flex "1"} 
                          :id "chat-input" 
                          :type "text" 
                          :placeholder (str "Message @" (:username @*with-user))
                          :autoFocus true}])])

(defn chat-header [buddy]
  [:div {:class "flex flex-row justify-start px-[75px] py-[5px] bg-[#303036] cursor-pointer"}
   [:img {:class "object-cover w-[50px] h-[50px] m-w-[50px] m-h-[50px] rounded-full overflow-hidden mr-[10px]" :src (if (nil? (:profile-pic buddy)) "../img/smiley.svg" (:profile-pic buddy))}]
   [:div {:class "flex flex-col justify-evenly"}
    [:h4 {:class "font-semibold"} (:username buddy)]
    [:h6 {:class "font-normal text-xs"} (:status buddy)]]])

(defn root-component []
  [:div {:class "relative h-screen w-screen overflow-hidden font-sans bg-[#3A3A41] select-none text-[#FFFAFF] overflow-x-hidden"
         :on-drop (fn [event]
                    (println "File(s) dropped")
                    (.preventDefault event)
                    (.stopPropagation event)
                    (println (.-dataTransfer event))
                    (let [files (filter #(= (.-kind %) "file") (.-dataTransfer event))]))
         :on-drag-over #(.preventDefault %)
         :on-drag-enter #(.preventDefault %)}
   [chat-header @*with-user]
   [message-list (conglomerate-messages @state @pending)]
   [chat-input]])

(defn ^:dev/after-load start! []
  (rd/render
   [root-component]
   (js/document.getElementById "app-container")
   (fn [_] (when-let [element (js/document.getElementById "message-list")]
             (set! (.-scrollTop element) (.-scrollHeight element))))))
