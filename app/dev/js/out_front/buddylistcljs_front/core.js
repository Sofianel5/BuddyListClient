// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('buddylistcljs_front.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.nodejs');
buddylistcljs_front.core.Electron = cljs.nodejs.require.call(null,"electron");
buddylistcljs_front.core.ipc_render = buddylistcljs_front.core.Electron.ipcRender;
if(typeof buddylistcljs_front.core.state !== 'undefined'){
} else {
buddylistcljs_front.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Loading..."], null));
}
buddylistcljs_front.core.root_component = (function buddylistcljs_front$core$root_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs_front.core.state))], null);
});
buddylistcljs_front.core.mount_root = (function buddylistcljs_front$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front.core.root_component], null),document.getElementById("app"));
});
buddylistcljs_front.core.init_BANG_ = (function buddylistcljs_front$core$init_BANG_(setting){
return buddylistcljs_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map
