(ns buddylistcljs.user
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.nodejs :as nodejs]
            [cljs.core.async :refer [<!]]))

(defn none-nil
  "returns true if none of the items provided are nill"
  [& items]
  (not (some nil? items)))

(def axios (nodejs/require "axios"))

(def local-storage (.-LocalStorage (nodejs/require "node-localstorage")))

(def store (local-storage. "./storage"))

(def user-key "user")

(defn get-cached-user []
  (if-let [encoded-user (.getItem store user-key)]
    (-> encoded-user
        (.parse js/JSON)
        (js->clj {:keywordize-keys true}))))

(defn cache-user [user-map]
  (let [encoded-user (-> user-map
                         clj->js
                         (.stringify js/JSON))]
    (.setItem store user-key encoded-user)))

(defn log-in [username password]
  (if (none-nil username password)
    (let [params {:username username :password password}
          options (clj->js {:method "POST" :url "http://50.16.117.236:8000/login" :params params})
          request (axios options)]
      (.then request #(-> % (js->clj :keywordize-keys true) :data)))))

(comment (.then (log-in "sofiane" "password") #(println (str "printing: " %))))

(defn sign-up [username password phone]
  (if (none-nil username password phone)
    (let [params {:username username :password password :phone phone}
          options (clj->js {:method "POST" :url "http://50.16.117.236:8000/signup" :params params})
          request (axios options)]
      (.then request #(-> % (js->clj :keywordize-keys true))))))

(comment (.then (sign-up "real-user" "password" "666-666-6666") #(println (str "printing: " %))))