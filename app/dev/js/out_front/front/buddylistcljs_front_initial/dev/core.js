// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('front.buddylistcljs_front_initial.dev.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.nodejs');
front.buddylistcljs_front_initial.dev.core.Electron = cljs.nodejs.require.call(null,"electron");
front.buddylistcljs_front_initial.dev.core.ipc_render = front.buddylistcljs_front_initial.dev.core.Electron.ipcRender;
if(typeof front.buddylistcljs_front_initial.dev.core.state !== 'undefined'){
} else {
front.buddylistcljs_front_initial.dev.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Loading..."], null));
}
front.buddylistcljs_front_initial.dev.core.root_component = (function front$buddylistcljs_front_initial$dev$core$root_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,front.buddylistcljs_front_initial.dev.core.state))], null);
});
front.buddylistcljs_front_initial.dev.core.mount_root = (function front$buddylistcljs_front_initial$dev$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [front.buddylistcljs_front_initial.dev.core.root_component], null),document.getElementById("app"));
});
front.buddylistcljs_front_initial.dev.core.init_BANG_ = (function front$buddylistcljs_front_initial$dev$core$init_BANG_(setting){
return front.buddylistcljs_front_initial.dev.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map
