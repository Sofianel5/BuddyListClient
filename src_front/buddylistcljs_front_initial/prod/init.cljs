(ns buddylistcljs-front-initial.init
  (:require [buddylistcljs-front-initial.core :as core]
            [buddylistcljs-front-initial.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
