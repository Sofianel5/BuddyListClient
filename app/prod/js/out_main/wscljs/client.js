// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('wscljs.client');
goog.require('cljs.core');
goog.require('wscljs.format');
goog.require('wscljs.spec');
goog.require('cljs.spec.alpha');
wscljs.client.status = (function wscljs$client$status(socket){

var pred__3307 = cljs.core._EQ_;
var expr__3308 = socket.readyState;
if(cljs.core.truth_(pred__3307.call(null,(0),expr__3308))){
return new cljs.core.Keyword(null,"connecting","connecting",-1347943866);
} else {
if(cljs.core.truth_(pred__3307.call(null,(1),expr__3308))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_(pred__3307.call(null,(2),expr__3308))){
return new cljs.core.Keyword(null,"stopping","stopping",1036724975);
} else {
if(cljs.core.truth_(pred__3307.call(null,(3),expr__3308))){
return new cljs.core.Keyword(null,"stopped","stopped",-1490414640);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__3308)].join('')));
}
}
}
}
});
/**
 * Starts a websocket connection and returns it.
 * 
 *   Takes the following arguments:
 * 
 *   url         => the websocket url
 *   handler-map => a hashmap containing handler functions mapping to:
 * 
 *               - :on-open    => called when opening a socket connection
 *               - :on-message => called when recieving message on the socket
 *               - :on-close   => called when closing a socket connection
 * 
 *   Usage:
 * 
 *   (require '[wscljs.client :as ws]
 *         '[wscljs.format :as fmt])
 * 
 * 
 *   (def socket (ws/create "ws://...." handler-map))
 * 
 *   (ws/send socket data fmt/json)
 *   
 */
wscljs.client.create = (function wscljs$client$create(url,p__3310){
var map__3311 = p__3310;
var map__3311__$1 = ((((!((map__3311 == null)))?(((((map__3311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3311):map__3311);
var handler_map = map__3311__$1;
var on_open = cljs.core.get.call(null,map__3311__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var on_message = cljs.core.get.call(null,map__3311__$1,new cljs.core.Keyword(null,"on-message","on-message",1662987808));
var on_close = cljs.core.get.call(null,map__3311__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_error = cljs.core.get.call(null,map__3311__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));

var temp__4655__auto__ = (new WebSocket(url));
if(cljs.core.truth_(temp__4655__auto__)){
var sock = temp__4655__auto__;
sock.onopen = on_open;

sock.onmessage = on_message;

sock.onclose = on_close;

sock.onerror = on_error;

return sock;
} else {
throw (new Error(["Web socket connection failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')));
}
});
/**
 * Sends data over socket in the specified format.
 */
wscljs.client.send = (function wscljs$client$send(var_args){
var G__3314 = arguments.length;
switch (G__3314) {
case 2:
return wscljs.client.send.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wscljs.client.send.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wscljs.client.send.cljs$core$IFn$_invoke$arity$2 = (function (socket,data){
return wscljs.client.send.call(null,socket,data,wscljs.format.identity);
});

wscljs.client.send.cljs$core$IFn$_invoke$arity$3 = (function (socket,data,format){

return socket.send(wscljs.format.write.call(null,format,data));
});

wscljs.client.send.cljs$lang$maxFixedArity = 3;

/**
 * Closes the socket connection.
 */
wscljs.client.close = (function wscljs$client$close(socket){
return socket.close();
});
