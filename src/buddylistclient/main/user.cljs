(ns buddylistclient.main.user
  (:require [cljs.nodejs :as nodejs]
            [buddylistclient.main.config :as config]
            ["axios" :as axios]
            ["path" :as path]
            ["fs" :as fs]
            ["form-data" :as FormData]
            ["node-localstorage" :refer [LocalStorage]]))

(defn get-prod-folder []
  (case (.-platform nodejs/process)
    "darwin" (.join path (-> nodejs/process .-env .-HOME) "Library" "Application Support" "BuddyList")
    "win32" (.join path (-> nodejs/process .-env .-APPDATA) "BuddyList")
    "linux" (.join path (-> nodejs/process .-env .-HOME) ".BuddyList")))

(def store (LocalStorage. (get-prod-folder)))

(def user-key "user")

(def buddies-key "buddies")

(def chat-key "chats")

(def settings-key "settings")

(defn clear-all []
  (.removeItem store user-key)
  (.removeItem store buddies-key)
  (.removeItem store chat-key)
  (.removeItem store settings-key))

(def default-settings {:sounds true})

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

(defn get-cached-clj-map [key]
  (if-let [encoded-map (.getItem store key)]
    (js->clj (.parse js/JSON encoded-map) :keywordize-keys true)))

(defn cache-user [user-map]
  (cache-clj-map user-map user-key))

(defn log-in [username password]
  (let [params {:username username :password password}
        options (clj->js {:method "POST" :url config/login-url :params params})
        request (axios options)]
    (.then request #(-> % (js->clj :keywordize-keys true) :data cache-user))))

(comment (.then (log-in "sofiane" "password") #(println (str "printing: " %))))

(defn sign-up [first-name last-name email phone username password]
  (let [params {:username username :cleartext-password password :phone phone :first-name first-name :last-name last-name :email email}
        options (clj->js {:method "POST" :url config/signup-url :params params})
        request (axios options)]
    (.then request #(-> % (js->clj :keywordize-keys true) :data cache-user))))

  (defn get-settings []
    (if-let [settings (get-cached-clj-map settings-key)]
      settings
      default-settings))

(defn save-settings [m]
  (cache-clj-map m settings-key))

(defn update-user [username auth-token]
  (let [headers {:authorization auth-token :request-user username}
        options (clj->js {:method "POST" :url config/user-url :headers headers})
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
        options (clj->js {:method "POST" :url config/add-buddy-url :headers headers :params params})
        request (axios options)]
    (-> request
        (.then #(-> % (js->clj :keywordize-keys true) :data))
        (.catch #(identity nil)))))

(defn get-chat-history [username auth-token buddy start offset]
  (let [headers {:authorization auth-token :request-user username}
        params {:start start :offset offset :buddy buddy}
        options (clj->js {:method "GET" :url config/chat-history-url :headers headers :params params})
        request (axios options)]
    (-> request
        (.then #(.-data %))
        (.catch #(println %)))))

(defn upload-pfp [username auth-token f]
  (let [form (FormData.)
        _ (.append form "image" (.createReadStream fs (-> f
                                                          .-filePaths
                                                          (aget 0)
                                                          .toString)))
        headers (merge {:authorization auth-token :request-user username} (-> form .getHeaders js->clj))
        options (clj->js {:method "post" :url config/pfp-url :data form :headers headers})
        request (axios options)]
    (-> request
        (.then #(-> % (js->clj :keywordize-keys true) :data))
        (.catch #(println "user.upload-pfp error:" %)))))

(defn set-new-buddies-order [username auth-token new-buddies-order]
  (println new-buddies-order)
  (let [headers {:authorization auth-token :request-user username "Content-Type" "application/json"}
        params {:new-buddies-order new-buddies-order}
        options (clj->js {:method "POST" :url config/rearrange-buddies-url :headers headers :data params})
        request (axios options)]
    (-> request
        (.then #(.-data %))
        (.catch #(println (-> % .-response .-data))))))

(defn cache-unread-messages-map [m]
  (cache-clj-map m chat-key))

(defn get-unread-messages-map []
  (if-let [encoded-map (.getItem store chat-key)]
    (js->clj (.parse js/JSON encoded-map))))