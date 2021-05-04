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

(def buddies-key "buddies")

(defn get-cached-user []
  (if-let [encoded-user (.getItem store user-key)]
    (js->clj (.parse js/JSON encoded-user) :keywordize-keys true)))

(defn cache-string [s key]
  (.setItem store key s)
  s)

(defn cache-clj-map [stuff key]
  (let [encoded-stuff (->> stuff
                           clj->js
                           (.stringify js/JSON))]
    (cache-string encoded-stuff key)
    stuff))

(defn cache-user [user-map]
  (cache-clj-map user-map user-key))

(defn cache-buddies-str [buddies-str]
  (cache-string buddies-str buddies-key))

(defn get-cached-buddies-str []
  (.getItem store buddies-key))

(defn log-in [username password]
  (if (none-nil username password)
    (let [params {:username username :password password}
          options (clj->js {:method "POST" :url "http://50.16.117.236:8000/login" :params params})
          request (axios options)]
      (.then request #(-> % (js->clj :keywordize-keys true) :data cache-user)))))

(comment (.then (log-in "sofiane" "password") #(println (str "printing: " %))))

(defn sign-up [username phone password]
  (if (none-nil username password phone)
    (let [params {:username username :password password :phone phone}
          options (clj->js {:method "POST" :url "http://50.16.117.236:8000/signup" :params params})
          request (axios options)]
      (.then request #(-> % (js->clj :keywordize-keys true) :data cache-user)))))

(comment (.then (sign-up "real-user" "password" "666-666-6666") #(println (str "printing: " %))))

(defn update-user [username auth-token]
  (let [headers {:authorization auth-token :request-user username}
        options (clj->js {:method "POST" :url "http://50.16.117.236:8000/user" :headers headers})
        request (axios options)]
    (-> request
        (.then #(-> % (js->clj :keywordize-keys true) :data))
        (.catch #(identity nil)))))

(defn get-user []
  (if-let [user (get-cached-user)]
    (update-user (:username user) (:auth-token user))
    nil))

(defn add-buddy [username auth-token new-buddy]
  (let [headers {:authorization auth-token :request-user username}
        params {:new-buddy new-buddy}
        options (clj->js {:method "POST" :url "http://50.16.117.236:8000/add-buddy" :headers headers :params params})
        request (axios options)]
    (-> request
        (.then #(-> % (js->clj :keywordize-keys true) :data))
        (.catch #(identity nil)))))