// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.util');
goog.require('cljs.core');
goog.require('cljs.nodejs');
buddylistcljs.util.dns = cljs.nodejs.require.call(null,"dns");
buddylistcljs.util.network_connected_QMARK_ = (function buddylistcljs$util$network_connected_QMARK_(){
return buddylistcljs.util.dns.resolve("www.google.com",(function (err){
if(cljs.core.truth_(err)){
return false;
} else {
return true;
}
}));
});
buddylistcljs.util.get_max_id = (function buddylistcljs$util$get_max_id(my_username,message){
if(cljs.core.not_EQ_.call(null,my_username,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(message))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(message);
} else {
return null;
}
});
