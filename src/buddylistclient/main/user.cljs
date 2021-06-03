(ns buddylistclient.main.user
  (:require [cljs.nodejs :as nodejs]
            ["axios" :as axios]
            ["request-promise" :as rp]
            ["path" :as path]
            ["fs" :as fs]
            ["form-data" :as FormData]
            ["node-localstorage" :refer [LocalStorage]]))

(defn none-nil
  "returns true if none of the items provided are nill"
  [& items]
  (not (some nil? items)))

(defn get-prod-folder []
  (case (.-platform nodejs/process)
    "darwin" (.join path (-> nodejs/process .-env .-HOME) "Library" "Application Support" "BuddyList")
    "win32" (.join path (-> nodejs/process .-env .-APPDATA) "BuddyList")
    "linux" (.join path (-> nodejs/process .-env .-HOME) ".BuddyList")))

(def store (LocalStorage. (get-prod-folder)))

(def user-key "user")

(def buddies-key "buddies")

(defn chat-key [with-user]
  (str "chat-" with-user))

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

(defn update-messages-count [with-user new-count]
  (.setItem store (chat-key with-user) (str new-count)))

(defn get-message-count [with-user]
  (if-let [count-str (.getItem store (chat-key with-user))]
    (js/parseInt count-str)
    nil))

(defn log-in [username password]
  (let [params {:username username :password password}
        options (clj->js {:method "POST" :url "https://buddylist.app/login" :params params})
        request (axios options)]
    (.then request #(-> % (js->clj :keywordize-keys true) :data cache-user))))

(comment (.then (log-in "sofiane" "password") #(println (str "printing: " %))))

(defn sign-up [first-name last-name email phone username password]
  (let [params {:username username :cleartext-password password :phone phone :first-name first-name :last-name last-name :email email}
        options (clj->js {:method "POST" :url "https://buddylist.app/signup" :params params})
        request (axios options)]
    (.then request #(-> % (js->clj :keywordize-keys true) :data cache-user))))

(defn update-user [username auth-token]
  (let [headers {:authorization auth-token :request-user username}
        options (clj->js {:method "POST" :url "https://buddylist.app/user" :headers headers})
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
        options (clj->js {:method "POST" :url "https://buddylist.app/add-buddy" :headers headers :params params})
        request (axios options)]
    (-> request
        (.then #(-> % (js->clj :keywordize-keys true) :data))
        (.catch #(identity nil)))))

(defn get-chat-history [username auth-token buddy start offset]
  (let [headers {:authorization auth-token :request-user username}
        params {:start start :offset offset :buddy buddy}
        options (clj->js {:method "GET" :url "https://buddylist.app/chat-history" :headers headers :params params})
        request (axios options)]
    (-> request
        (.then #(.-data %))
        (.catch #(println %)))))

(defn upload-pfp- [username auth-token f]
  (let [form {:image {:value (.createReadStream fs (-> f
                                                       .-filePaths
                                                       (aget 0)
                                                       .toString))
                      :options {:contentType nil}}}
        headers {:authorization auth-token :request-user username}
        options (clj->js {:method "POST" :url "https://buddylist.app/set-pfp" :formData form :headers headers})
        request (rp options)]
    (-> request
        (.then #(-> % (js->clj :keywordize-keys true)))
        (.catch #(println "user.upload-pfp error:" %)))))

(defn upload-pfp [username auth-token f]
  (let [form (FormData.)
        _ (.append form "image" (.createReadStream fs (-> f
                                                          .-filePaths
                                                          (aget 0)
                                                          .toString)))
        headers (merge {:authorization auth-token :request-user username} (-> form .getHeaders js->clj))
        options (clj->js {:method "post" :url "https://buddylist.app/set-pfp" :data form :headers headers})
        request (axios options)]
    (-> request
        (.then #(-> % (js->clj :keywordize-keys true) :data))
        (.catch #(println "user.upload-pfp error:" %)))))