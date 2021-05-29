(ns buddylistclient.main.util
  (:require [cljs.nodejs :as nodejs]))

(def dns (nodejs/require "dns"))

(defn network-connected? []
  (.resolve dns "www.google.com" (fn [err] (if err false true))))

(defn get-max-id [my-username message]
  (if (not= my-username (:from message))
    (:id message)
    nil))