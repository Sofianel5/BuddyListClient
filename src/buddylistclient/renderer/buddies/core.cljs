(ns buddylistclient.renderer.buddies.core
  (:require-macros [cljs.core.async.macros :refer (go)])
  (:require  [reagent.core :refer [atom as-element]]
             [reagent.dom :as rd]
             [cljs.core.async :refer (chan put! <!)]
             [cljs.nodejs :as nodejs]
             ["react-beautiful-dnd" :refer [DragDropContext Draggable Droppable]]))

(def Electron (nodejs/require "electron"))


(def ipc-renderer (.-ipcRenderer Electron))

(defonce state (atom nil))

(def *user* (atom {}))

(def EVENTCHANNEL (chan))

(def EVENTS
  {:buddy-clicked (fn [username]
                    (.send ipc-renderer "buddies:selected" username))
   :status-updated (fn [new-status]
                     (println "sending new-status" new-status)
                     (.send ipc-renderer "buddies:new-status" new-status))})

(go
  (while true
    (let [[event-name event-data] (<! EVENTCHANNEL)]
      ((event-name EVENTS) event-data))))

(.on ipc-renderer "buddies" (fn [_ message]
                              (let [parsed (.parse js/JSON message)
                                    buddies (js->clj parsed :keywordize-keys true)]
                                (js/console.log buddies)
                                (js/console.log (-> buddies first :username))
                                (reset! state buddies))))

(.on ipc-renderer "user" (fn [_ user-str]
                           (println "received user-str" user-str)
                           (reset! *user* (js->clj (.parse js/JSON user-str) :keywordize-keys true))
                           (println "parsed" @*user* (:username @*user*) (get @*user* "username"))))

(defn buddies-list [event-channel buddies]
  [:ul (merge {:class "buddies-list"})
   (for [buddy buddies]
     ^{:key (:username buddy)}
     [:> Droppable {:droppable-id (str "droppable-" (:username buddy))
                    :direction    "vertical"}
      (fn [provided snapshot]
        (let [inner-ref (.-innerRef provided)
              droppable-props (-> (.-droppableProps provided)
                                  (js->clj :keywordize-keys true))
              placeholder (.-placeholder provided)
              is-dragging-over (.-isDraggingOver snapshot)]

          (as-element
           [:div (merge droppable-props
                       {:ref inner-ref
                        :isdraggingover (str is-dragging-over)})
            [:> Draggable {:draggableId (str key)
                           :index (if (= (:username buddy) "liam") 0 1)}
             (fn [provided snapshot]
               (let [inner-ref (.-innerRef provided)
                     draggable-props (-> (.-draggableProps provided)
                                         (js->clj :keywordize-keys true))
                     drag-handler-props (-> (.-dragHandleProps provided)
                                            (js->clj :keywordize-keys true))
                     is-dragging (.-isDragging snapshot)]
                 (as-element
                  [:li (merge {:ref inner-ref :isdragging is-dragging}
                              draggable-props
                              {:class "flex flex-row justify-start px-[20px] my-[10px] cursor-pointer" :on-click #(put! event-channel [:buddy-clicked (:username buddy)])}
                              drag-handler-props)
                   [:img {:class "w-[50px] h-[50px] m-w-[50px] m-h-[50px] rounded-full overflow-hidden mr-[10px]" :src "../img/smiley.svg"}]
                   [:div {:class "flex flex-col justify-evenly"}
                    [:h4 {:class "font-semibold"} (:username buddy)]
                    [:h6 {:class "font-normal text-xs"} (:status buddy)]]
                   placeholder])))]])))])])

(defn on-new-status-submit [e _]
  (.preventDefault e)
  (.send ipc-renderer "buddies:new-status" (.-value (.getElementById js/document "new-status-input")))
  (set! (.-value (.getElementById js/document "new-status-input")) ""))

(defn status-update [event-channel]
  [:div {:class "m-[20px]"}
   [:form {:on-submit #(on-new-status-submit % event-channel) :class "flex flex-col justify-start"
           :style {"-webkit-app-region" "no-drag"}}
    [:textarea {:class "text-[#050401] focus:border-[#30BCED] resize-y text-xs h-[50px] min-h-[50px]" :type "text" :id "new-status-input" :placeholder "New status"}]
    [:input {:type "submit" :value "Change" :class "bg-[#09BC8A] focus:outline-none mt-[5px] py-[10px] font-semibold"}]]])

(defn on-add-buddy [event]
  (.preventDefault event)
  (.send ipc-renderer "open-addbuddy"))

(defn open-add-buddy []
  [:div {:class "flex flex-row justify-center mt-[15px]"}
   [:button {:on-click #(on-add-buddy %)
             :class "cursor-pointer font-semibold text-[#09BC8A]"}
    "Add buddy!"]])

(defn root-component []
  [:div {:class "relative h-screen w-screen font-sans bg-[#303036] py-[5px] select-none text-[#FFFAFF] overflow-x-hidden"
         :style {"-webkit-app-region" "no-drag"}}
   [:h4 {:class "mb-[30px] text-center"} "BuddyList"]
   [:div {:class "flex flex-row justify-start px-[20px]"}
    [:div {:class "cursor-pointer container w-[100px] h-[100px] m-w-[100px] m-h-[100px] rounded-full overflow-hidden mr-[20px]"
           :on-click #(.send ipc-renderer "new-profile-pic")}
     [:img {:class "image w-[100px] h-[100px] m-w-[100px] m-h-[100px]" :src (if (nil? (:profile-pic @*user*)) "../img/smiley.svg" (:profile-pic @*user*))}]
     [:div {:class "overlay"} "Change"]]
    [:div {:class "flex flex-col justify-evenly max-w-[140px]"}
     [:h3 {:class "font-bold"} (str (:first-name @*user*) " " (:last-name @*user*))]
     [:h5 {:class "font-semibold"} (str "@" (:username @*user*))]
     [:h6 {:class "font-normal text-xs"} (:status @*user*)]]]
   [status-update EVENTCHANNEL]
   [:h3 {:class "font-bold ml-[20px]"} "Buddies"]
   (if @state
     [:> DragDropContext {:on-drag-start #()
                          :on-drag-update #()
                          :on-drag-end #(println %)}
      [buddies-list EVENTCHANNEL @state]]
     [:p "Loading buddies..."])
   [open-add-buddy]])

(defn ^:dev/after-load start! []
  (rd/render
   [root-component]
   (js/document.getElementById "app-container")))