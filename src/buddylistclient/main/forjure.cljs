(ns buddylistclient.main.forjure
  (:require [clojure.string :refer [split]]))

(defmacro assert-args
  [& pairs]
  `(do (when-not ~(first pairs)
         (throw (IllegalArgumentException.
                 (str (first ~'&form) " requires " ~(second pairs) " in " ~'*ns* ":" (:line (meta ~'&form))))))
       ~(let [more (nnext pairs)]
          (when more
            (list* `assert-args more)))))

(defmacro if-let-all
  "💈
   if-let but allows multiple items and checks if any are nil"
  ([bindings then]
   `(if-let-all ~bindings ~then nil))
  ([bindings then else & oldform]
   (assert-args
    (vector? bindings) "a vector for its binding"
    (nil? oldform) "1 or 2 forms after binding vector")
   (let [form (bindings 0) tst (bindings 1)]
     `(let [temp# ~tst]
        (if temp#
          (let [~form temp#]
            ~then)
          ~else)))))

(defmacro if-let-last
  "✅
   if-let but allows multiple items and checks if the last item is nil"
  ([bindings then]
   `(if-let-last ~bindings ~then nil))
  ([bindings then else & oldform]
   (assert-args
    (vector? bindings) "a vector for its binding"
    (nil? oldform) "1 or 2 forms after binding vector")
   (let [form (-> bindings pop last) tst (last bindings)]
     `(let [temp# ~tst]
        (if temp#
          (let [~form temp#]
            ~then)
          ; need to apply let anyway or will cause errors
          `(let ~bindings
             ~else))))))

(defmacro keyword-map
  "Turns a list of variables into a map of their names as keywords to their values"
  [& bindings]
  (into {} (map #(identity [(keyword (name '%)) %]) bindings)))

(defn none-nil
  "returns true if none of the items provided are nill"
  [& items]
  (not (some nil? items)))

(defmacro if-assert
  "recieves a list of boolean expressions followed by a default value to return if the expression prior to it is false"
  [bindings]
  @bindings)

(defn dissoc-in
  "Dissociates an entry from a nested associative structure returning a new
  nested structure. keys is a sequence of keys. Any empty maps that result
  will not be present in the new structure."
  [m [k & ks :as keys]]
  (if ks
    (if-let [nextmap (get m k)]
      (let [newmap (dissoc-in nextmap ks)]
        (if (seq newmap)
          (assoc m k newmap)
          (dissoc m k)))
      m)
    (dissoc m k)))

(defn parse-url
  "Parse URL parameters into a hashmap"
  []
  (let [param-strs (-> (.-location js/window) (split #"\?") last (split #"\&"))]
    (into {} (for [[k v] (map #(split % #"=") param-strs)]
               [(keyword k) v]))))

(defn dissoc-by [f m] (->> m (filter #(f (first %))) (into {})))
