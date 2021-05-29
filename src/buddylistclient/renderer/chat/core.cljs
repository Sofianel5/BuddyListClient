(ns buddylistclient.renderer.chat.core
  (:require-macros
   [cljs.core.async.macros :refer (go)])
  (:require
   [clojure.string :refer [split]]
   [reagent.core :refer [atom]]
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

(def ipc-renderer (.-ipcRenderer Electron))

(defonce state (atom []))

(def EVENTCHANNEL (chan))

(def EVENTS
  {:message-sent (fn [message]
                   (.send ipc-renderer "chat:sent" (:with-user data) message))})

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
         (if (= (-> message :from) (:user data))
           (.play (js/Audio. "../assets/imsend.wav"))))))

(.on ipc-renderer "chat:loaded-history"
     (fn [_ parsed]
       (let [messages (js->clj parsed :keywordize-keys true)]
         (swap! state (comp vec flatten conj) messages))))

(defn message-list [messages]
  [:ul {:class "message-list"}
   (for [message messages]
     ^{:key (:id message)}
     [:li {:class "message-holder"}
      [:p (str (:from message) ": " (:message message))]])])

(defn submit-chat [event]
  (.preventDefault event)
  (let [message (-> js/document (.getElementById "chat-input") .-value)]
    (js/console.log message)
    (.send ipc-renderer "chat:sent" (:with-user data) message)
    (set! (-> js/document (.getElementById "chat-input") .-value) "")))

(defn chat-input []
  [:form {:on-submit #(submit-chat %)}
   [:input {:id "chat-input" :type "text"}]
   [:input {:type "submit"}]])

(defn root-component []
  [:div
   [:h4 (str "Conversation with " (:with-user data))]
   [message-list @state]
   [chat-input]])

(defn ^:dev/after-load start! []
  (rd/render
   [root-component]
   (js/document.getElementById "app-container")))
