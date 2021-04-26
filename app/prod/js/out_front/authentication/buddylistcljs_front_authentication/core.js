// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('buddylistcljs_front_authentication.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.nodejs');
buddylistcljs_front_authentication.core.Electron = cljs.nodejs.require.call(null,"electron");
buddylistcljs_front_authentication.core.ipc_render = buddylistcljs_front_authentication.core.Electron.ipcRender;
if(typeof buddylistcljs_front_authentication.core.state !== 'undefined'){
} else {
buddylistcljs_front_authentication.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"login","login",55217519)], null));
}
buddylistcljs_front_authentication.core.root_component = (function buddylistcljs_front_authentication$core$root_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return buddylistcljs_front_authentication.core.ipc_render.send("channel","message");
})], null),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs_front_authentication.core.state))], null);
});
buddylistcljs_front_authentication.core.mount_root = (function buddylistcljs_front_authentication$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_authentication.core.root_component], null),document.getElementById("app"));
});
buddylistcljs_front_authentication.core.init_BANG_ = (function buddylistcljs_front_authentication$core$init_BANG_(setting){
return buddylistcljs_front_authentication.core.mount_root.call(null,setting);
});
