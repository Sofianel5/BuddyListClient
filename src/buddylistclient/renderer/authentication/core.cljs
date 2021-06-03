(ns buddylistclient.renderer.authentication.core
  (:require  [reagent.core :refer [atom]]
             [reagent.dom :as rd]
             [cljs.nodejs :as nodejs]
             ["react-phone-number-input" :default PhoneInput]))

(def Electron (nodejs/require "electron"))

(def ipc-renderer (.-ipcRenderer Electron))

(defonce state (atom {:type :login}))

(defonce phone-number (atom nil))

(.on ipc-renderer "signup-error" (fn [_ errors]
                                   (let [parsed (.parse js/JSON errors)
                                         errors (js->clj parsed :keywordize-keys true)]
                                     (swap! state assoc :errors errors))))

(.on ipc-renderer "login-error" (fn [_]
                                  (swap! state assoc :login-error true)))

(defn submit-login-form [event]
  (.preventDefault event)
  (let [username (-> js/document (.getElementById "username") .-value)
        password (-> js/document (.getElementById "password") .-value)]
    (.send ipc-renderer "login" username password)))

(defn submit-signup-form [event]
  (.preventDefault event)
  (let [username (-> js/document (.getElementById "username") .-value)
        password (-> js/document (.getElementById "password") .-value)
        phone @phone-number
        first-name (-> js/document (.getElementById "first-name") .-value)
        last-name (-> js/document (.getElementById "last-name") .-value)
        email (-> js/document (.getElementById "email") .-value)]
    (.send ipc-renderer "signup" first-name last-name email phone username password)))

(defn login-form []
  [:form {:on-submit #(submit-login-form %)
          :class "flex flex-row justify-center mt-[10px]"}
   [:div {:class "mx-[10px]"}
    [:p {:class "mb-[5px] uppercase text-gray-400 text-[10px]"} "screen name"]
    [:input {:class "bg-[#FFFAFF]" :type "text" :name "username" :id "username" :placeholder "hacker123"}]]
   [:div {:class "mx-[10px]"}
    [:div {:class "flex flex-row justify-between"}
     [:p {:class "mb-[5px] uppercase text-gray-400 text-[10px]"} "password"]
     [:div {:class "tooltip w-[10px] bg-center bg-no-repeat bg-contain mb-[5px] uppercase cursor-pointer"
            :style {:display (if (:login-error @state) "block" "none")
                    :background-image "url('../img/error.svg')"}}
      [:ul {:class "list-inside shadow-2xl tooltiptext text-xs list-disc normal-case"}
       [:li "Invalid password or error."]]]]
    [:input {:class "bg-[#FFFAFF]" :type "password" :name "password" :id "password" :placeholder "SomethingSecure!"}]]
   [:input {:class "focus:outline-none cursor-pointer bg-[#09BC8A] w-screen h-[75px] absolute inset-x-0 bottom-0 text-[#FFFAFF] font-semibold"
            :type "submit" :value "See Buddies!"}]])

(defn signup-form []
  [:form {:on-submit #(submit-signup-form %)
          :class "mt-[10px] px-[100px]"}
   [:div {:class "flex flex-row justify-between mb-[10px]"}
    [:div {:class "mx-[10px]"}
     [:div {:class "flex flex-row justify-between"}
      [:p {:class "mb-[5px] uppercase text-gray-400 text-[10px]"} "first name"]
      [:div {:class "tooltip w-[10px] bg-center bg-no-repeat bg-contain mb-[5px] uppercase cursor-pointer"
             :style {:display (if (and (:errors @state) (not (empty? (-> @state :errors :first-name)))) "block" "none")
                     :background-image "url('../img/error.svg')"}}
       [:ul {:class "list-inside shadow-2xl tooltiptext text-xs list-disc normal-case"}
        (for [error (-> @state :errors :first-name)]
          [:li error])]]]
     [:input {:class "bg-[#FFFAFF]" :type "text" :name "first-name" :id "first-name" :placeholder "Sofiane"}]]
    [:div {:class "mx-[10px]"}
     [:div {:class "flex flex-row justify-between"}
      [:p {:class "mb-[5px] uppercase text-gray-400 text-[10px]"} "last name"]
      [:div {:class "tooltip w-[10px] bg-center bg-no-repeat bg-contain mb-[5px] uppercase cursor-pointer"
             :style {:display (if (and (:errors @state) (not (empty? (-> @state :errors :last-name)))) "block" "none")
                     :background-image "url('../img/error.svg')"}}
       [:ul {:class "list-inside shadow-2xl tooltiptext text-xs list-disc normal-case"}
        (for [error (-> @state :errors :last-name)]
          [:li error])]]]
     [:input {:class "bg-[#FFFAFF]" :type "text" :name "last-name" :id "last-name" :placeholder "Larbi"}]]]
   [:div {:class "flex flex-row justify-between mb-[10px]"}
    [:div {:class "mx-[10px]"}
     [:div {:class "flex flex-row justify-between"}
      [:p {:class "mb-[5px] uppercase text-gray-400 text-[10px]"} "email"]
      [:div {:class "tooltip w-[10px] bg-center bg-no-repeat bg-contain mb-[5px] uppercase cursor-pointer"
             :style {:display (if (and (:errors @state) (not (empty? (-> @state :errors :email)))) "block" "none")
                     :background-image "url('../img/error.svg')"}}
       [:ul {:class "list-inside shadow-2xl tooltiptext text-xs list-disc normal-case"}
        (for [error (-> @state :errors :email)]
          [:li error])]]]
     [:input {:class "bg-[#FFFAFF]" :type "email" :name "email" :id "email" :placeholder "sofiane@stanford.edu"}]]
    [:div {:class "mx-[10px]"}
     [:div {:class "flex flex-row justify-between"}
      [:p {:class "mb-[5px] ml-[40px] uppercase text-gray-400 text-[10px]"} "phone number"]
      [:div {:class "tooltip w-[10px] bg-center bg-no-repeat bg-contain mb-[5px] uppercase cursor-pointer"
             :style {:display (if (and (:errors @state) (not (empty? (-> @state :errors :phone)))) "block" "none")
                     :background-image "url('../img/error.svg')"}}
       [:ul {:class "list-inside shadow-2xl tooltiptext text-xs list-disc normal-case"}
        (for [error (-> @state :errors :phone)]
          [:li error])]]]
     [:> PhoneInput {:defaultCountry "US" :onChange #(reset! phone-number %) :placeholder "(646) 220-3750"}]]]
   [:div {:class "flex flex-row justify-between mb-[10px]"}
    [:div {:class "mx-[10px]"}
     [:div {:class "flex flex-row justify-between"}
      [:p {:class "mb-[5px] uppercase text-gray-400 text-[10px]"} "screen name"]
      [:div {:class "tooltip w-[10px] bg-center bg-no-repeat bg-contain mb-[5px] uppercase cursor-pointer"
             :style {:display (if (and (:errors @state) (not (empty? (-> @state :errors :username)))) "block" "none")
                     :background-image "url('../img/error.svg')"}}
       [:ul {:class "list-inside shadow-2xl tooltiptext text-xs list-disc normal-case"}
        (for [error (-> @state :errors :username)]
          [:li error])]]]
     [:input {:class "bg-[#FFFAFF]" :type "text" :name "username" :id "username" :placeholder "sofiane"}]]
    [:div {:class "mx-[10px]"}
     [:div {:class "flex flex-row justify-between"}
      [:p {:class "mb-[5px] uppercase text-gray-400 text-[10px]"} "password"]
      [:div {:class "tooltip w-[10px] bg-center bg-no-repeat bg-contain mb-[5px] uppercase cursor-pointer"
             :style {:display (if (and (:errors @state) (not (empty? (-> @state :errors :password)))) "block" "none")
                     :background-image "url('../img/error.svg')"}}
       [:ul {:class "list-inside shadow-2xl tooltiptext text-xs list-disc normal-case"}
        (for [error (-> @state :errors :password)]
          [:li error])]]]
     [:input {:type "password" :name "password" :id "password" :placeholder "SomethingSecure!"}]]]
   [:input {:class "focus:outline-none cursor-pointer bg-[#09BC8A] w-screen h-[75px] absolute inset-x-0 bottom-0 text-[#FFFAFF] font-semibold"
            :type "submit" :value "Join!"}]])

(defn auth-form []
  (if (= (:type @state) :login)
    [login-form]
    [signup-form]))

(defn toggle-auth-type []
  (swap! state assoc :type (if (= (:type @state) :login) :sign-up :login))
  (if (= (:type @state) :sign-up)
    (.resizeTo js/window 700 550)
    (.resizeTo js/window 600 400)))

(defn auth-type-switcher []
  [:p {:class "text-center text-[12px] mt-[15px] text-[#050401]"}
   (if (= (:type @state) :login) "Don't have an account? " "Have an account? ")
   [:span {:on-click toggle-auth-type
           :class "text-[#30BCED] cursor-pointer"}
    (if (= (:type @state) :login) "Sign up" "Log in")]])

(defn root-component []
  [:div {:class "overflow-hidden relative h-screen font-sans bg-[#303036] select-none"}
   [:h2 {:class "pt-[10px] text-center text-[#FFFAFF] font-bold"} "Welcome to BuddyList"]
   [:div {:class "my-[20px] w-screen flex flex-row justify-center"}
    [:div {:class "bg-[#FFFAFF] rounded-full h-[75px] w-[75px] flex flex-row justify-center"}
     [:img {:class "w-[50px] my-[10px]"
            :src "../img/aim.png"}]]]
   [:h4 {:class "mt-[10px] text-center text-[#FFFAFF] font-semibold"} (if (= (:type @state) :login) "Log in to see your buddies!" "Create an account to connect!")]
   [auth-form]
   [auth-type-switcher]])

(defn ^:dev/after-load start! []
  (rd/render
   [root-component]
   (js/document.getElementById "app-container")))
