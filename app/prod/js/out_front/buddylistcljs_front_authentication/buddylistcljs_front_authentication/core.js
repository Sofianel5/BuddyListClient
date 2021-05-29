// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('buddylistcljs_front_authentication.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.nodejs');
goog.require('react_phone_number_input');
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
return buddylistcljs_front_authentication.core.ipc_renderer.send("login",username,password);
});
buddylistcljs_front_authentication.core.submit_signup_form = (function buddylistcljs_front_authentication$core$submit_signup_form(event){
event.preventDefault();

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var phone = document.getElementById("phone").value;
return buddylistcljs_front_authentication.core.ipc_renderer.send("signup",username,phone,password);
});
buddylistcljs_front_authentication.core.login_form = (function buddylistcljs_front_authentication$core$login_form(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__1670_SHARP_){
return buddylistcljs_front_authentication.core.submit_login_form.call(null,p1__1670_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"username","username",1605666410)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"password","password",417022471)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null)], null)], null);
});
buddylistcljs_front_authentication.core.signup_form = (function buddylistcljs_front_authentication$core$signup_form(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__1671_SHARP_){
return buddylistcljs_front_authentication.core.submit_signup_form.call(null,p1__1671_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"username","username",1605666410)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),buddylistcljs_front_authentication.core.node$module$react_phone_number_input.PhoneInput,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"country","country",312965309),"US",new cljs.core.Keyword(null,"value","value",305978217),"+12133734253",new cljs.core.Keyword(null,"onchange","onchange",1355467329),(function (p1__1672_SHARP_){
return cljs.core.println.call(null,p1__1672_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"phone","phone",-763596057)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"password","password",417022471)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null)], null)], null);
});
buddylistcljs_front_authentication.core.auth_form = (function buddylistcljs_front_authentication$core$auth_form(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs_front_authentication.core.state)),new cljs.core.Keyword(null,"login","login",55217519))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_authentication.core.login_form], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_authentication.core.signup_form], null);
}
});
buddylistcljs_front_authentication.core.auth_type_form = (function buddylistcljs_front_authentication$core$auth_type_form(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"auth-type","auth-type",-56409594),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs_front_authentication.core.state)),new cljs.core.Keyword(null,"login","login",55217519)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,buddylistcljs_front_authentication.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"login","login",55217519));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Log in"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"auth-type","auth-type",-56409594),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs_front_authentication.core.state)),new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,buddylistcljs_front_authentication.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sign up"], null)], null);
});
buddylistcljs_front_authentication.core.root_component = (function buddylistcljs_front_authentication$core$root_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_authentication.core.auth_type_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_authentication.core.auth_form], null)], null);
});
buddylistcljs_front_authentication.core.mount_root = (function buddylistcljs_front_authentication$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_authentication.core.root_component], null),document.getElementById("app"));
});
buddylistcljs_front_authentication.core.init_BANG_ = (function buddylistcljs_front_authentication$core$init_BANG_(setting){
return buddylistcljs_front_authentication.core.mount_root.call(null,setting);
});
