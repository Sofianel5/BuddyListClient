// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.user');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
/**
 * returns true if none of the items provided are nill
 */
buddylistcljs.user.none_nil = (function buddylistcljs$user$none_nil(var_args){
var args__4500__auto__ = [];
var len__4497__auto___4096 = arguments.length;
var i__4498__auto___4097 = (0);
while(true){
if((i__4498__auto___4097 < len__4497__auto___4096)){
args__4500__auto__.push((arguments[i__4498__auto___4097]));

var G__4098 = (i__4498__auto___4097 + (1));
i__4498__auto___4097 = G__4098;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return buddylistcljs.user.none_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

buddylistcljs.user.none_nil.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.nil_QMARK_,items));
});

buddylistcljs.user.none_nil.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
buddylistcljs.user.none_nil.cljs$lang$applyTo = (function (seq4095){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4095));
});

buddylistcljs.user.axios = cljs.nodejs.require.call(null,"axios");
buddylistcljs.user.local_storage = cljs.nodejs.require.call(null,"node-localstorage").LocalStorage;
buddylistcljs.user.store = (new buddylistcljs.user.local_storage("./storage"));
buddylistcljs.user.user_key = "user";
buddylistcljs.user.get_cached_user = (function buddylistcljs$user$get_cached_user(){
var temp__4655__auto__ = buddylistcljs.user.store.getItem(buddylistcljs.user.user_key);
if(cljs.core.truth_(temp__4655__auto__)){
var encoded_user = temp__4655__auto__;
return ((function (encoded_user,temp__4655__auto__){
return (function (p1__4099_SHARP_){
cljs.core.js__GT_clj.call(null,p1__4099_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);

return JSON.parse(encoded_user);
});
;})(encoded_user,temp__4655__auto__))
} else {
return null;
}
});
buddylistcljs.user.cache_user = (function buddylistcljs$user$cache_user(user_map){
var encoded_user = JSON.stringify(cljs.core.clj__GT_js.call(null,user_map));
buddylistcljs.user.store.setItem(buddylistcljs.user.user_key,encoded_user);

return encoded_user;
});
buddylistcljs.user.log_in = (function buddylistcljs$user$log_in(username,password){
if(cljs.core.truth_(buddylistcljs.user.none_nil.call(null,username,password))){
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null);
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"url","url",276297046),"http://50.16.117.236:8000/login",new cljs.core.Keyword(null,"params","params",710516235),params], null));
var request = buddylistcljs.user.axios.call(null,options);
return request.then(((function (params,options,request){
return (function (p1__4100_SHARP_){
return buddylistcljs.user.cache_user.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,p1__4100_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
});})(params,options,request))
);
} else {
return null;
}
});
buddylistcljs.user.sign_up = (function buddylistcljs$user$sign_up(username,password,phone){
if(cljs.core.truth_(buddylistcljs.user.none_nil.call(null,username,password,phone))){
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"phone","phone",-763596057),phone], null);
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"url","url",276297046),"http://50.16.117.236:8000/signup",new cljs.core.Keyword(null,"params","params",710516235),params], null));
var request = buddylistcljs.user.axios.call(null,options);
return request.then(((function (params,options,request){
return (function (p1__4102_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__4102_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});})(params,options,request))
);
} else {
return null;
}
});
