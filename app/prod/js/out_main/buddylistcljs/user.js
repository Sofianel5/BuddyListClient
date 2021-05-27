// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.user');
goog.require('cljs.core');
goog.require('cljs.nodejs');
/**
 * returns true if none of the items provided are nill
 */
buddylistcljs.user.none_nil = (function buddylistcljs$user$none_nil(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1338 = arguments.length;
var i__4498__auto___1339 = (0);
while(true){
if((i__4498__auto___1339 < len__4497__auto___1338)){
args__4500__auto__.push((arguments[i__4498__auto___1339]));

var G__1340 = (i__4498__auto___1339 + (1));
i__4498__auto___1339 = G__1340;
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
buddylistcljs.user.none_nil.cljs$lang$applyTo = (function (seq1337){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1337));
});

buddylistcljs.user.path = cljs.nodejs.require.call(null,"path");
buddylistcljs.user.axios = cljs.nodejs.require.call(null,"axios");
buddylistcljs.user.local_storage = cljs.nodejs.require.call(null,"node-localstorage").LocalStorage;
buddylistcljs.user.get_prod_folder = (function buddylistcljs$user$get_prod_folder(){
var G__1341 = cljs.nodejs.process.platform;
switch (G__1341) {
case "darwin":
return buddylistcljs.user.path.join(cljs.nodejs.process.env.HOME,"Library","Application Support","BuddyList");

break;
case "win32":
return buddylistcljs.user.path.join(cljs.nodejs.process.env.APPDATA,"BuddyList");

break;
case "linux":
return buddylistcljs.user.path.join(cljs.nodejs.process.env.HOME,".BuddyList");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1341)].join('')));

}
});
buddylistcljs.user.store = (new buddylistcljs.user.local_storage(buddylistcljs.user.get_prod_folder.call(null)));
buddylistcljs.user.user_key = "user";
buddylistcljs.user.buddies_key = "buddies";
buddylistcljs.user.chat_key = (function buddylistcljs$user$chat_key(with_user){
return ["chat-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(with_user)].join('');
});
buddylistcljs.user.get_cached_user = (function buddylistcljs$user$get_cached_user(){
var temp__4655__auto__ = buddylistcljs.user.store.getItem(buddylistcljs.user.user_key);
if(cljs.core.truth_(temp__4655__auto__)){
var encoded_user = temp__4655__auto__;
return cljs.core.js__GT_clj.call(null,JSON.parse(encoded_user),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
} else {
return null;
}
});
buddylistcljs.user.cache_string = (function buddylistcljs$user$cache_string(s,key){
buddylistcljs.user.store.setItem(key,s);

return s;
});
buddylistcljs.user.cache_clj_map = (function buddylistcljs$user$cache_clj_map(stuff,key){
var encoded_stuff = JSON.stringify(cljs.core.clj__GT_js.call(null,stuff));
buddylistcljs.user.cache_string.call(null,encoded_stuff,key);

return stuff;
});
buddylistcljs.user.cache_user = (function buddylistcljs$user$cache_user(user_map){
return buddylistcljs.user.cache_clj_map.call(null,user_map,buddylistcljs.user.user_key);
});
buddylistcljs.user.cache_buddies_str = (function buddylistcljs$user$cache_buddies_str(buddies_str){
return buddylistcljs.user.cache_string.call(null,buddies_str,buddylistcljs.user.buddies_key);
});
buddylistcljs.user.update_messages_count = (function buddylistcljs$user$update_messages_count(with_user,new_count){
return buddylistcljs.user.store.setItem(buddylistcljs.user.chat_key.call(null,with_user),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_count)].join(''));
});
buddylistcljs.user.get_message_count = (function buddylistcljs$user$get_message_count(with_user){
var temp__4655__auto__ = buddylistcljs.user.store.getItem(buddylistcljs.user.chat_key.call(null,with_user));
if(cljs.core.truth_(temp__4655__auto__)){
var count_str = temp__4655__auto__;
return parseInt(count_str);
} else {
return null;
}
});
buddylistcljs.user.log_in = (function buddylistcljs$user$log_in(username,password){
if(cljs.core.truth_(buddylistcljs.user.none_nil.call(null,username,password))){
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null);
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"url","url",276297046),"https://buddylist.app/login",new cljs.core.Keyword(null,"params","params",710516235),params], null));
var request = buddylistcljs.user.axios.call(null,options);
return request.then(((function (params,options,request){
return (function (p1__1343_SHARP_){
return buddylistcljs.user.cache_user.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,p1__1343_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
});})(params,options,request))
);
} else {
return null;
}
});
buddylistcljs.user.sign_up = (function buddylistcljs$user$sign_up(username,phone,password){
if(cljs.core.truth_(buddylistcljs.user.none_nil.call(null,username,password,phone))){
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"cleartext-password","cleartext-password",-1648131185),password,new cljs.core.Keyword(null,"phone","phone",-763596057),phone], null);
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"url","url",276297046),"https://buddylist.app/signup",new cljs.core.Keyword(null,"params","params",710516235),params], null));
var request = buddylistcljs.user.axios.call(null,options);
return request.then(((function (params,options,request){
return (function (p1__1345_SHARP_){
return buddylistcljs.user.cache_user.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,p1__1345_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
});})(params,options,request))
);
} else {
return null;
}
});
buddylistcljs.user.update_user = (function buddylistcljs$user$update_user(username,auth_token){
var headers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),auth_token,new cljs.core.Keyword(null,"request-user","request-user",2052007844),username], null);
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"url","url",276297046),"https://buddylist.app/user",new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null));
var request = buddylistcljs.user.axios.call(null,options);
return request.then(((function (headers,options,request){
return (function (p1__1347_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,p1__1347_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});})(headers,options,request))
).catch(((function (headers,options,request){
return (function (){
return cljs.core.identity.call(null,null);
});})(headers,options,request))
);
});
buddylistcljs.user.get_user = (function buddylistcljs$user$get_user(){
var temp__4655__auto__ = buddylistcljs.user.get_cached_user.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var user = temp__4655__auto__;
return buddylistcljs.user.update_user.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(user));
} else {
return null;
}
});
buddylistcljs.user.add_buddy = (function buddylistcljs$user$add_buddy(username,auth_token,new_buddy){
var headers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),auth_token,new cljs.core.Keyword(null,"request-user","request-user",2052007844),username], null);
var params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-buddy","new-buddy",-1555719642),new_buddy], null);
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"url","url",276297046),"https://buddylist.app/add-buddy",new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"params","params",710516235),params], null));
var request = buddylistcljs.user.axios.call(null,options);
return request.then(((function (headers,params,options,request){
return (function (p1__1348_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,p1__1348_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});})(headers,params,options,request))
).catch(((function (headers,params,options,request){
return (function (){
return cljs.core.identity.call(null,null);
});})(headers,params,options,request))
);
});
buddylistcljs.user.get_chat_history = (function buddylistcljs$user$get_chat_history(username,auth_token,buddy,start,offset){
var headers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),auth_token,new cljs.core.Keyword(null,"request-user","request-user",2052007844),username], null);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"buddy","buddy",726015014),buddy], null);
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"url","url",276297046),"https://buddylist.app/chat-history",new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"params","params",710516235),params], null));
var request = buddylistcljs.user.axios.call(null,options);
return request.then(((function (headers,params,options,request){
return (function (p1__1349_SHARP_){
return p1__1349_SHARP_.data;
});})(headers,params,options,request))
).catch(((function (headers,params,options,request){
return (function (p1__1350_SHARP_){
return cljs.core.println.call(null,p1__1350_SHARP_);
});})(headers,params,options,request))
);
});
