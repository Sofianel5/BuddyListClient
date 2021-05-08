(ns buddylistcljs-front-initial.init
  (:require [figwheel.client :as fw :include-macros true]
            [buddylistcljs-front-initial.core :as core]
            [buddylistcljs-front-initial.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
