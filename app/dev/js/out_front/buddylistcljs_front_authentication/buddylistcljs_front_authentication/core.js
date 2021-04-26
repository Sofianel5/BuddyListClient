// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('buddylistcljs_front_authentication.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.nodejs');
buddylistcljs_front_authentication.core.Electron = cljs.nodejs.require.call(null,"electron");
buddylistcljs_front_authentication.core.ipc_renderer = buddylistcljs_front_authentication.core.Electron.ipcRenderer;
if(typeof buddylistcljs_front_authentication.core.state !== 'undefined'){
} else {
buddylistcljs_front_authentication.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"message","message",-406056002),"Loaded"], null));
}
buddylistcljs_front_authentication.core.submit_login_form = (function buddylistcljs_front_authentication$core$submit_login_form(event){
event.preventDefault();

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join(''));

return buddylistcljs_front_authentication.core.ipc_renderer.send("login",username,password);
});
buddylistcljs_front_authentication.core.root_component = (function buddylistcljs_front_authentication$core$root_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__840_SHARP_){
return buddylistcljs_front_authentication.core.submit_login_form.call(null,p1__840_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"password","password",417022471)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null)], null)], null);
});
buddylistcljs_front_authentication.core.mount_root = (function buddylistcljs_front_authentication$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_authentication.core.root_component], null),document.getElementById("app"));
});
buddylistcljs_front_authentication.core.init_BANG_ = (function buddylistcljs_front_authentication$core$init_BANG_(setting){
return buddylistcljs_front_authentication.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map
