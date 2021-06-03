(ns buddylistclient.renderer.styles.core
  (:require-macros [garden.selectors :refer [defclass]])
  (:require [garden.core :refer [css]]))

(defn flex [direction justification]
  {:display "flex"
   :flex-direction direction
   :justify-content justification})
