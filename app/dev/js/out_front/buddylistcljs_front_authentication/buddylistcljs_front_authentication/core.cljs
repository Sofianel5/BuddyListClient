(ns buddylistcljs-front-authentication.core
  (:require  [reagent.core :as reagent :refer [atom]]
             [cljs.nodejs :as nodejs]))

(def Electron (nodejs/require "electron"))

(def ipc-renderer (.-ipcRenderer Electron))

(defonce state (atom {:type :login
                      :message "Loaded"}))

(defn submit-login-form [event]
  (.preventDefault event)
  (let [username (-> js/document (.getElementById "username") .-value)
        password (-> js/document (.getElementById "password") .-value)]
    (.send ipc-renderer "login" username password)))

(defn submit-signup-form [event]
  (.preventDefault event)
  (let [username (-> js/document (.getElementById "username") .-value)
        password (-> js/document (.getElementById "password") .-value)
        phone (-> js/document (.getElementById "phone") .-value)] 
    (.send ipc-renderer "signup" username phone password)))

(defn login-form []
  [:form {:on-submit #(submit-login-form %)}
   [:input {:type :text :name :username :id :username :placeholder :username}]
   [:input {:type :password :name :password :id :password :placeholder :password}]
   [:input {:type :submit}]])

(defn signup-form []
   [:form {:on-submit #(submit-signup-form %)}
    [:input {:type :text :name :username :id :username :placeholder :username}]
    [:input {:type :text :name :phone :id :phone :placeholder :phone}]
    [:input {:type :password :name :password :id :password :placeholder :password}]
    [:input {:type :submit}]])

(defn auth-form []
  (if (= (:type @state) :login)
    [login-form]
    [signup-form]))

(defn auth-type-form []
  [:form
   [:input {:type :radio :name :auth-type :value :login :checked true :on-change #(swap! state assoc :type :login)}]
   [:p "Log in"]
   [:input {:type :radio :name :auth-type :value :sign-up :on-change #(swap! state assoc :type :sign-up)}]
   [:p "Sign up"]])

(defn root-component []
  [:div
   [auth-type-form]
   [auth-form]])

(defn mount-root [setting]
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))