(ns buddylistcljs.util
  (:require [cljs.nodejs :as nodejs]))

(def dns (nodejs/require "dns"))

(defn network-connected? []
  (.resolve dns "www.google.com" (fn [err] (if err false true))))