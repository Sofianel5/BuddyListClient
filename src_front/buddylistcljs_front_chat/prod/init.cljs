(ns buddylistcljs-front-chat.init
  (:require [buddylistcljs-front-chat.core :as core]
            [buddylistcljs-front-chat.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
