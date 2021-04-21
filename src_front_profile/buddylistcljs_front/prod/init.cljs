(ns buddylistcljs-front.init
    (:require [buddylistcljs-front.core :as core]
              [buddylistcljs-front.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
