(ns front.buddylistcljs-front-initial.dev.init
  (:require [figwheel.client :as fw :include-macros true]
            [front.buddylistcljs-front-initial.dev.core :as core]
            [front.buddylistcljs-front-initial.dev.conf :as conf]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url   "ws://localhost:3449/figwheel-ws"
 :jsload-callback 'start-descjop!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
