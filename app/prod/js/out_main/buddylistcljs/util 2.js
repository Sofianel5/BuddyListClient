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
