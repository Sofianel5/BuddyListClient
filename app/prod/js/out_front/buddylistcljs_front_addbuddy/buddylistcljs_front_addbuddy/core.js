// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('buddylistcljs_front_addbuddy.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.nodejs');
buddylistcljs_front_addbuddy.core.Electron = cljs.nodejs.require.call(null,"electron");
buddylistcljs_front_addbuddy.core.ipc_renderer = buddylistcljs_front_addbuddy.core.Electron.ipcRenderer;
if(typeof buddylistcljs_front_addbuddy.core.state !== 'undefined'){
} else {
buddylistcljs_front_addbuddy.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buddy","buddy",726015014),null], null));
}
buddylistcljs_front_addbuddy.core.on_submit_add_form = (function buddylistcljs_front_addbuddy$core$on_submit_add_form(event){
event.preventDefault();

var temp__4655__auto__ = document.getElementById("buddy").value;
if(cljs.core.truth_(temp__4655__auto__)){
var buddy = temp__4655__auto__;
return buddylistcljs_front_addbuddy.core.ipc_renderer.send("addbuddy",buddy);
} else {
return null;
}
});
buddylistcljs_front_addbuddy.core.root_component = (function buddylistcljs_front_addbuddy$core$root_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__1670_SHARP_){
return buddylistcljs_front_addbuddy.core.on_submit_add_form.call(null,p1__1670_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"buddy",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Buddy's username",new cljs.core.Keyword(null,"id","id",-1388402092),"buddy"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null)], null)], null);
});
buddylistcljs_front_addbuddy.core.mount_root = (function buddylistcljs_front_addbuddy$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_addbuddy.core.root_component], null),document.getElementById("app"));
});
buddylistcljs_front_addbuddy.core.init_BANG_ = (function buddylistcljs_front_addbuddy$core$init_BANG_(setting){
return buddylistcljs_front_addbuddy.core.mount_root.call(null,setting);
});
