// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__8297 = arguments.length;
switch (G__8297) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async8298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8298 = (function (f,blockable,meta8299){
this.f = f;
this.blockable = blockable;
this.meta8299 = meta8299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8300,meta8299__$1){
var self__ = this;
var _8300__$1 = this;
return (new cljs.core.async.t_cljs$core$async8298(self__.f,self__.blockable,meta8299__$1));
});

cljs.core.async.t_cljs$core$async8298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8300){
var self__ = this;
var _8300__$1 = this;
return self__.meta8299;
});

cljs.core.async.t_cljs$core$async8298.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8298.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8299","meta8299",-891458766,null)], null);
});

cljs.core.async.t_cljs$core$async8298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8298";

cljs.core.async.t_cljs$core$async8298.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async8298");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8298.
 */
cljs.core.async.__GT_t_cljs$core$async8298 = (function cljs$core$async$__GT_t_cljs$core$async8298(f__$1,blockable__$1,meta8299){
return (new cljs.core.async.t_cljs$core$async8298(f__$1,blockable__$1,meta8299));
});

}

return (new cljs.core.async.t_cljs$core$async8298(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__8304 = arguments.length;
switch (G__8304) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__8307 = arguments.length;
switch (G__8307) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__8310 = arguments.length;
switch (G__8310) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8312 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8312);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8312,ret){
return (function (){
return fn1.call(null,val_8312);
});})(val_8312,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__8314 = arguments.length;
switch (G__8314) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4374__auto___8316 = n;
var x_8317 = (0);
while(true){
if((x_8317 < n__4374__auto___8316)){
(a[x_8317] = (0));

var G__8318 = (x_8317 + (1));
x_8317 = G__8318;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__8319 = (i + (1));
i = G__8319;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async8320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8320 = (function (flag,meta8321){
this.flag = flag;
this.meta8321 = meta8321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8322,meta8321__$1){
var self__ = this;
var _8322__$1 = this;
return (new cljs.core.async.t_cljs$core$async8320(self__.flag,meta8321__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8322){
var self__ = this;
var _8322__$1 = this;
return self__.meta8321;
});})(flag))
;

cljs.core.async.t_cljs$core$async8320.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8320.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8320.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8321","meta8321",-2034098119,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8320";

cljs.core.async.t_cljs$core$async8320.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async8320");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8320.
 */
cljs.core.async.__GT_t_cljs$core$async8320 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8320(flag__$1,meta8321){
return (new cljs.core.async.t_cljs$core$async8320(flag__$1,meta8321));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8320(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async8323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8323 = (function (flag,cb,meta8324){
this.flag = flag;
this.cb = cb;
this.meta8324 = meta8324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8325,meta8324__$1){
var self__ = this;
var _8325__$1 = this;
return (new cljs.core.async.t_cljs$core$async8323(self__.flag,self__.cb,meta8324__$1));
});

cljs.core.async.t_cljs$core$async8323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8325){
var self__ = this;
var _8325__$1 = this;
return self__.meta8324;
});

cljs.core.async.t_cljs$core$async8323.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async8323.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8324","meta8324",-237718858,null)], null);
});

cljs.core.async.t_cljs$core$async8323.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8323";

cljs.core.async.t_cljs$core$async8323.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async8323");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8323.
 */
cljs.core.async.__GT_t_cljs$core$async8323 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8323(flag__$1,cb__$1,meta8324){
return (new cljs.core.async.t_cljs$core$async8323(flag__$1,cb__$1,meta8324));
});

}

return (new cljs.core.async.t_cljs$core$async8323(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8326_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8326_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8327_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8327_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3920__auto__ = wport;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8328 = (i + (1));
i = G__8328;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3920__auto__ = ret;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3909__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3909__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3909__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___8334 = arguments.length;
var i__4498__auto___8335 = (0);
while(true){
if((i__4498__auto___8335 < len__4497__auto___8334)){
args__4500__auto__.push((arguments[i__4498__auto___8335]));

var G__8336 = (i__4498__auto___8335 + (1));
i__4498__auto___8335 = G__8336;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8331){
var map__8332 = p__8331;
var map__8332__$1 = ((((!((map__8332 == null)))?(((((map__8332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8332):map__8332);
var opts = map__8332__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8329){
var G__8330 = cljs.core.first.call(null,seq8329);
var seq8329__$1 = cljs.core.next.call(null,seq8329);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8330,seq8329__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__8338 = arguments.length;
switch (G__8338) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6387__auto___8384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___8384){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___8384){
return (function (state_8362){
var state_val_8363 = (state_8362[(1)]);
if((state_val_8363 === (7))){
var inst_8358 = (state_8362[(2)]);
var state_8362__$1 = state_8362;
var statearr_8364_8385 = state_8362__$1;
(statearr_8364_8385[(2)] = inst_8358);

(statearr_8364_8385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8363 === (1))){
var state_8362__$1 = state_8362;
var statearr_8365_8386 = state_8362__$1;
(statearr_8365_8386[(2)] = null);

(statearr_8365_8386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8363 === (4))){
var inst_8341 = (state_8362[(7)]);
var inst_8341__$1 = (state_8362[(2)]);
var inst_8342 = (inst_8341__$1 == null);
var state_8362__$1 = (function (){var statearr_8366 = state_8362;
(statearr_8366[(7)] = inst_8341__$1);

return statearr_8366;
})();
if(cljs.core.truth_(inst_8342)){
var statearr_8367_8387 = state_8362__$1;
(statearr_8367_8387[(1)] = (5));

} else {
var statearr_8368_8388 = state_8362__$1;
(statearr_8368_8388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8363 === (13))){
var state_8362__$1 = state_8362;
var statearr_8369_8389 = state_8362__$1;
(statearr_8369_8389[(2)] = null);

(statearr_8369_8389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8363 === (6))){
var inst_8341 = (state_8362[(7)]);
var state_8362__$1 = state_8362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8362__$1,(11),to,inst_8341);
} else {
if((state_val_8363 === (3))){
var inst_8360 = (state_8362[(2)]);
var state_8362__$1 = state_8362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8362__$1,inst_8360);
} else {
if((state_val_8363 === (12))){
var state_8362__$1 = state_8362;
var statearr_8370_8390 = state_8362__$1;
(statearr_8370_8390[(2)] = null);

(statearr_8370_8390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8363 === (2))){
var state_8362__$1 = state_8362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8362__$1,(4),from);
} else {
if((state_val_8363 === (11))){
var inst_8351 = (state_8362[(2)]);
var state_8362__$1 = state_8362;
if(cljs.core.truth_(inst_8351)){
var statearr_8371_8391 = state_8362__$1;
(statearr_8371_8391[(1)] = (12));

} else {
var statearr_8372_8392 = state_8362__$1;
(statearr_8372_8392[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8363 === (9))){
var state_8362__$1 = state_8362;
var statearr_8373_8393 = state_8362__$1;
(statearr_8373_8393[(2)] = null);

(statearr_8373_8393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8363 === (5))){
var state_8362__$1 = state_8362;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8374_8394 = state_8362__$1;
(statearr_8374_8394[(1)] = (8));

} else {
var statearr_8375_8395 = state_8362__$1;
(statearr_8375_8395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8363 === (14))){
var inst_8356 = (state_8362[(2)]);
var state_8362__$1 = state_8362;
var statearr_8376_8396 = state_8362__$1;
(statearr_8376_8396[(2)] = inst_8356);

(statearr_8376_8396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8363 === (10))){
var inst_8348 = (state_8362[(2)]);
var state_8362__$1 = state_8362;
var statearr_8377_8397 = state_8362__$1;
(statearr_8377_8397[(2)] = inst_8348);

(statearr_8377_8397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8363 === (8))){
var inst_8345 = cljs.core.async.close_BANG_.call(null,to);
var state_8362__$1 = state_8362;
var statearr_8378_8398 = state_8362__$1;
(statearr_8378_8398[(2)] = inst_8345);

(statearr_8378_8398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___8384))
;
return ((function (switch__6232__auto__,c__6387__auto___8384){
return (function() {
var cljs$core$async$state_machine__6233__auto__ = null;
var cljs$core$async$state_machine__6233__auto____0 = (function (){
var statearr_8379 = [null,null,null,null,null,null,null,null];
(statearr_8379[(0)] = cljs$core$async$state_machine__6233__auto__);

(statearr_8379[(1)] = (1));

return statearr_8379;
});
var cljs$core$async$state_machine__6233__auto____1 = (function (state_8362){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_8362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e8380){if((e8380 instanceof Object)){
var ex__6236__auto__ = e8380;
var statearr_8381_8399 = state_8362;
(statearr_8381_8399[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8400 = state_8362;
state_8362 = G__8400;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$state_machine__6233__auto__ = function(state_8362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6233__auto____1.call(this,state_8362);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6233__auto____0;
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6233__auto____1;
return cljs$core$async$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___8384))
})();
var state__6389__auto__ = (function (){var statearr_8382 = f__6388__auto__.call(null);
(statearr_8382[(6)] = c__6387__auto___8384);

return statearr_8382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___8384))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__8401){
var vec__8402 = p__8401;
var v = cljs.core.nth.call(null,vec__8402,(0),null);
var p = cljs.core.nth.call(null,vec__8402,(1),null);
var job = vec__8402;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6387__auto___8573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___8573,res,vec__8402,v,p,job,jobs,results){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___8573,res,vec__8402,v,p,job,jobs,results){
return (function (state_8409){
var state_val_8410 = (state_8409[(1)]);
if((state_val_8410 === (1))){
var state_8409__$1 = state_8409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8409__$1,(2),res,v);
} else {
if((state_val_8410 === (2))){
var inst_8406 = (state_8409[(2)]);
var inst_8407 = cljs.core.async.close_BANG_.call(null,res);
var state_8409__$1 = (function (){var statearr_8411 = state_8409;
(statearr_8411[(7)] = inst_8406);

return statearr_8411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8409__$1,inst_8407);
} else {
return null;
}
}
});})(c__6387__auto___8573,res,vec__8402,v,p,job,jobs,results))
;
return ((function (switch__6232__auto__,c__6387__auto___8573,res,vec__8402,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0 = (function (){
var statearr_8412 = [null,null,null,null,null,null,null,null];
(statearr_8412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__);

(statearr_8412[(1)] = (1));

return statearr_8412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1 = (function (state_8409){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_8409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e8413){if((e8413 instanceof Object)){
var ex__6236__auto__ = e8413;
var statearr_8414_8574 = state_8409;
(statearr_8414_8574[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8575 = state_8409;
state_8409 = G__8575;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__ = function(state_8409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1.call(this,state_8409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___8573,res,vec__8402,v,p,job,jobs,results))
})();
var state__6389__auto__ = (function (){var statearr_8415 = f__6388__auto__.call(null);
(statearr_8415[(6)] = c__6387__auto___8573);

return statearr_8415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___8573,res,vec__8402,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8416){
var vec__8417 = p__8416;
var v = cljs.core.nth.call(null,vec__8417,(0),null);
var p = cljs.core.nth.call(null,vec__8417,(1),null);
var job = vec__8417;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4374__auto___8576 = n;
var __8577 = (0);
while(true){
if((__8577 < n__4374__auto___8576)){
var G__8420_8578 = type;
var G__8420_8579__$1 = (((G__8420_8578 instanceof cljs.core.Keyword))?G__8420_8578.fqn:null);
switch (G__8420_8579__$1) {
case "compute":
var c__6387__auto___8581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8577,c__6387__auto___8581,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (__8577,c__6387__auto___8581,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async){
return (function (state_8433){
var state_val_8434 = (state_8433[(1)]);
if((state_val_8434 === (1))){
var state_8433__$1 = state_8433;
var statearr_8435_8582 = state_8433__$1;
(statearr_8435_8582[(2)] = null);

(statearr_8435_8582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8434 === (2))){
var state_8433__$1 = state_8433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8433__$1,(4),jobs);
} else {
if((state_val_8434 === (3))){
var inst_8431 = (state_8433[(2)]);
var state_8433__$1 = state_8433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8433__$1,inst_8431);
} else {
if((state_val_8434 === (4))){
var inst_8423 = (state_8433[(2)]);
var inst_8424 = process.call(null,inst_8423);
var state_8433__$1 = state_8433;
if(cljs.core.truth_(inst_8424)){
var statearr_8436_8583 = state_8433__$1;
(statearr_8436_8583[(1)] = (5));

} else {
var statearr_8437_8584 = state_8433__$1;
(statearr_8437_8584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8434 === (5))){
var state_8433__$1 = state_8433;
var statearr_8438_8585 = state_8433__$1;
(statearr_8438_8585[(2)] = null);

(statearr_8438_8585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8434 === (6))){
var state_8433__$1 = state_8433;
var statearr_8439_8586 = state_8433__$1;
(statearr_8439_8586[(2)] = null);

(statearr_8439_8586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8434 === (7))){
var inst_8429 = (state_8433[(2)]);
var state_8433__$1 = state_8433;
var statearr_8440_8587 = state_8433__$1;
(statearr_8440_8587[(2)] = inst_8429);

(statearr_8440_8587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__8577,c__6387__auto___8581,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async))
;
return ((function (__8577,switch__6232__auto__,c__6387__auto___8581,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0 = (function (){
var statearr_8441 = [null,null,null,null,null,null,null];
(statearr_8441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__);

(statearr_8441[(1)] = (1));

return statearr_8441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1 = (function (state_8433){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_8433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e8442){if((e8442 instanceof Object)){
var ex__6236__auto__ = e8442;
var statearr_8443_8588 = state_8433;
(statearr_8443_8588[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8589 = state_8433;
state_8433 = G__8589;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__ = function(state_8433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1.call(this,state_8433);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__;
})()
;})(__8577,switch__6232__auto__,c__6387__auto___8581,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async))
})();
var state__6389__auto__ = (function (){var statearr_8444 = f__6388__auto__.call(null);
(statearr_8444[(6)] = c__6387__auto___8581);

return statearr_8444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(__8577,c__6387__auto___8581,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async))
);


break;
case "async":
var c__6387__auto___8590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8577,c__6387__auto___8590,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (__8577,c__6387__auto___8590,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async){
return (function (state_8457){
var state_val_8458 = (state_8457[(1)]);
if((state_val_8458 === (1))){
var state_8457__$1 = state_8457;
var statearr_8459_8591 = state_8457__$1;
(statearr_8459_8591[(2)] = null);

(statearr_8459_8591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8458 === (2))){
var state_8457__$1 = state_8457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8457__$1,(4),jobs);
} else {
if((state_val_8458 === (3))){
var inst_8455 = (state_8457[(2)]);
var state_8457__$1 = state_8457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8457__$1,inst_8455);
} else {
if((state_val_8458 === (4))){
var inst_8447 = (state_8457[(2)]);
var inst_8448 = async.call(null,inst_8447);
var state_8457__$1 = state_8457;
if(cljs.core.truth_(inst_8448)){
var statearr_8460_8592 = state_8457__$1;
(statearr_8460_8592[(1)] = (5));

} else {
var statearr_8461_8593 = state_8457__$1;
(statearr_8461_8593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8458 === (5))){
var state_8457__$1 = state_8457;
var statearr_8462_8594 = state_8457__$1;
(statearr_8462_8594[(2)] = null);

(statearr_8462_8594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8458 === (6))){
var state_8457__$1 = state_8457;
var statearr_8463_8595 = state_8457__$1;
(statearr_8463_8595[(2)] = null);

(statearr_8463_8595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8458 === (7))){
var inst_8453 = (state_8457[(2)]);
var state_8457__$1 = state_8457;
var statearr_8464_8596 = state_8457__$1;
(statearr_8464_8596[(2)] = inst_8453);

(statearr_8464_8596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__8577,c__6387__auto___8590,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async))
;
return ((function (__8577,switch__6232__auto__,c__6387__auto___8590,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0 = (function (){
var statearr_8465 = [null,null,null,null,null,null,null];
(statearr_8465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__);

(statearr_8465[(1)] = (1));

return statearr_8465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1 = (function (state_8457){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_8457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e8466){if((e8466 instanceof Object)){
var ex__6236__auto__ = e8466;
var statearr_8467_8597 = state_8457;
(statearr_8467_8597[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8598 = state_8457;
state_8457 = G__8598;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__ = function(state_8457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1.call(this,state_8457);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__;
})()
;})(__8577,switch__6232__auto__,c__6387__auto___8590,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async))
})();
var state__6389__auto__ = (function (){var statearr_8468 = f__6388__auto__.call(null);
(statearr_8468[(6)] = c__6387__auto___8590);

return statearr_8468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(__8577,c__6387__auto___8590,G__8420_8578,G__8420_8579__$1,n__4374__auto___8576,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8420_8579__$1)].join('')));

}

var G__8599 = (__8577 + (1));
__8577 = G__8599;
continue;
} else {
}
break;
}

var c__6387__auto___8600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___8600,jobs,results,process,async){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___8600,jobs,results,process,async){
return (function (state_8490){
var state_val_8491 = (state_8490[(1)]);
if((state_val_8491 === (1))){
var state_8490__$1 = state_8490;
var statearr_8492_8601 = state_8490__$1;
(statearr_8492_8601[(2)] = null);

(statearr_8492_8601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (2))){
var state_8490__$1 = state_8490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8490__$1,(4),from);
} else {
if((state_val_8491 === (3))){
var inst_8488 = (state_8490[(2)]);
var state_8490__$1 = state_8490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8490__$1,inst_8488);
} else {
if((state_val_8491 === (4))){
var inst_8471 = (state_8490[(7)]);
var inst_8471__$1 = (state_8490[(2)]);
var inst_8472 = (inst_8471__$1 == null);
var state_8490__$1 = (function (){var statearr_8493 = state_8490;
(statearr_8493[(7)] = inst_8471__$1);

return statearr_8493;
})();
if(cljs.core.truth_(inst_8472)){
var statearr_8494_8602 = state_8490__$1;
(statearr_8494_8602[(1)] = (5));

} else {
var statearr_8495_8603 = state_8490__$1;
(statearr_8495_8603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (5))){
var inst_8474 = cljs.core.async.close_BANG_.call(null,jobs);
var state_8490__$1 = state_8490;
var statearr_8496_8604 = state_8490__$1;
(statearr_8496_8604[(2)] = inst_8474);

(statearr_8496_8604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (6))){
var inst_8471 = (state_8490[(7)]);
var inst_8476 = (state_8490[(8)]);
var inst_8476__$1 = cljs.core.async.chan.call(null,(1));
var inst_8477 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8478 = [inst_8471,inst_8476__$1];
var inst_8479 = (new cljs.core.PersistentVector(null,2,(5),inst_8477,inst_8478,null));
var state_8490__$1 = (function (){var statearr_8497 = state_8490;
(statearr_8497[(8)] = inst_8476__$1);

return statearr_8497;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8490__$1,(8),jobs,inst_8479);
} else {
if((state_val_8491 === (7))){
var inst_8486 = (state_8490[(2)]);
var state_8490__$1 = state_8490;
var statearr_8498_8605 = state_8490__$1;
(statearr_8498_8605[(2)] = inst_8486);

(statearr_8498_8605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8491 === (8))){
var inst_8476 = (state_8490[(8)]);
var inst_8481 = (state_8490[(2)]);
var state_8490__$1 = (function (){var statearr_8499 = state_8490;
(statearr_8499[(9)] = inst_8481);

return statearr_8499;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8490__$1,(9),results,inst_8476);
} else {
if((state_val_8491 === (9))){
var inst_8483 = (state_8490[(2)]);
var state_8490__$1 = (function (){var statearr_8500 = state_8490;
(statearr_8500[(10)] = inst_8483);

return statearr_8500;
})();
var statearr_8501_8606 = state_8490__$1;
(statearr_8501_8606[(2)] = null);

(statearr_8501_8606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___8600,jobs,results,process,async))
;
return ((function (switch__6232__auto__,c__6387__auto___8600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0 = (function (){
var statearr_8502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__);

(statearr_8502[(1)] = (1));

return statearr_8502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1 = (function (state_8490){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_8490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e8503){if((e8503 instanceof Object)){
var ex__6236__auto__ = e8503;
var statearr_8504_8607 = state_8490;
(statearr_8504_8607[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8608 = state_8490;
state_8490 = G__8608;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__ = function(state_8490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1.call(this,state_8490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___8600,jobs,results,process,async))
})();
var state__6389__auto__ = (function (){var statearr_8505 = f__6388__auto__.call(null);
(statearr_8505[(6)] = c__6387__auto___8600);

return statearr_8505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___8600,jobs,results,process,async))
);


var c__6387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto__,jobs,results,process,async){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto__,jobs,results,process,async){
return (function (state_8543){
var state_val_8544 = (state_8543[(1)]);
if((state_val_8544 === (7))){
var inst_8539 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
var statearr_8545_8609 = state_8543__$1;
(statearr_8545_8609[(2)] = inst_8539);

(statearr_8545_8609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (20))){
var state_8543__$1 = state_8543;
var statearr_8546_8610 = state_8543__$1;
(statearr_8546_8610[(2)] = null);

(statearr_8546_8610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (1))){
var state_8543__$1 = state_8543;
var statearr_8547_8611 = state_8543__$1;
(statearr_8547_8611[(2)] = null);

(statearr_8547_8611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (4))){
var inst_8508 = (state_8543[(7)]);
var inst_8508__$1 = (state_8543[(2)]);
var inst_8509 = (inst_8508__$1 == null);
var state_8543__$1 = (function (){var statearr_8548 = state_8543;
(statearr_8548[(7)] = inst_8508__$1);

return statearr_8548;
})();
if(cljs.core.truth_(inst_8509)){
var statearr_8549_8612 = state_8543__$1;
(statearr_8549_8612[(1)] = (5));

} else {
var statearr_8550_8613 = state_8543__$1;
(statearr_8550_8613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (15))){
var inst_8521 = (state_8543[(8)]);
var state_8543__$1 = state_8543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8543__$1,(18),to,inst_8521);
} else {
if((state_val_8544 === (21))){
var inst_8534 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
var statearr_8551_8614 = state_8543__$1;
(statearr_8551_8614[(2)] = inst_8534);

(statearr_8551_8614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (13))){
var inst_8536 = (state_8543[(2)]);
var state_8543__$1 = (function (){var statearr_8552 = state_8543;
(statearr_8552[(9)] = inst_8536);

return statearr_8552;
})();
var statearr_8553_8615 = state_8543__$1;
(statearr_8553_8615[(2)] = null);

(statearr_8553_8615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (6))){
var inst_8508 = (state_8543[(7)]);
var state_8543__$1 = state_8543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8543__$1,(11),inst_8508);
} else {
if((state_val_8544 === (17))){
var inst_8529 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
if(cljs.core.truth_(inst_8529)){
var statearr_8554_8616 = state_8543__$1;
(statearr_8554_8616[(1)] = (19));

} else {
var statearr_8555_8617 = state_8543__$1;
(statearr_8555_8617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (3))){
var inst_8541 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8543__$1,inst_8541);
} else {
if((state_val_8544 === (12))){
var inst_8518 = (state_8543[(10)]);
var state_8543__$1 = state_8543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8543__$1,(14),inst_8518);
} else {
if((state_val_8544 === (2))){
var state_8543__$1 = state_8543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8543__$1,(4),results);
} else {
if((state_val_8544 === (19))){
var state_8543__$1 = state_8543;
var statearr_8556_8618 = state_8543__$1;
(statearr_8556_8618[(2)] = null);

(statearr_8556_8618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (11))){
var inst_8518 = (state_8543[(2)]);
var state_8543__$1 = (function (){var statearr_8557 = state_8543;
(statearr_8557[(10)] = inst_8518);

return statearr_8557;
})();
var statearr_8558_8619 = state_8543__$1;
(statearr_8558_8619[(2)] = null);

(statearr_8558_8619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (9))){
var state_8543__$1 = state_8543;
var statearr_8559_8620 = state_8543__$1;
(statearr_8559_8620[(2)] = null);

(statearr_8559_8620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (5))){
var state_8543__$1 = state_8543;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8560_8621 = state_8543__$1;
(statearr_8560_8621[(1)] = (8));

} else {
var statearr_8561_8622 = state_8543__$1;
(statearr_8561_8622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (14))){
var inst_8523 = (state_8543[(11)]);
var inst_8521 = (state_8543[(8)]);
var inst_8521__$1 = (state_8543[(2)]);
var inst_8522 = (inst_8521__$1 == null);
var inst_8523__$1 = cljs.core.not.call(null,inst_8522);
var state_8543__$1 = (function (){var statearr_8562 = state_8543;
(statearr_8562[(11)] = inst_8523__$1);

(statearr_8562[(8)] = inst_8521__$1);

return statearr_8562;
})();
if(inst_8523__$1){
var statearr_8563_8623 = state_8543__$1;
(statearr_8563_8623[(1)] = (15));

} else {
var statearr_8564_8624 = state_8543__$1;
(statearr_8564_8624[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (16))){
var inst_8523 = (state_8543[(11)]);
var state_8543__$1 = state_8543;
var statearr_8565_8625 = state_8543__$1;
(statearr_8565_8625[(2)] = inst_8523);

(statearr_8565_8625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (10))){
var inst_8515 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
var statearr_8566_8626 = state_8543__$1;
(statearr_8566_8626[(2)] = inst_8515);

(statearr_8566_8626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (18))){
var inst_8526 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
var statearr_8567_8627 = state_8543__$1;
(statearr_8567_8627[(2)] = inst_8526);

(statearr_8567_8627[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (8))){
var inst_8512 = cljs.core.async.close_BANG_.call(null,to);
var state_8543__$1 = state_8543;
var statearr_8568_8628 = state_8543__$1;
(statearr_8568_8628[(2)] = inst_8512);

(statearr_8568_8628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto__,jobs,results,process,async))
;
return ((function (switch__6232__auto__,c__6387__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0 = (function (){
var statearr_8569 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__);

(statearr_8569[(1)] = (1));

return statearr_8569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1 = (function (state_8543){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_8543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e8570){if((e8570 instanceof Object)){
var ex__6236__auto__ = e8570;
var statearr_8571_8629 = state_8543;
(statearr_8571_8629[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8630 = state_8543;
state_8543 = G__8630;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__ = function(state_8543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1.call(this,state_8543);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6233__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto__,jobs,results,process,async))
})();
var state__6389__auto__ = (function (){var statearr_8572 = f__6388__auto__.call(null);
(statearr_8572[(6)] = c__6387__auto__);

return statearr_8572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto__,jobs,results,process,async))
);

return c__6387__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__8632 = arguments.length;
switch (G__8632) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__8635 = arguments.length;
switch (G__8635) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__8638 = arguments.length;
switch (G__8638) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6387__auto___8687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___8687,tc,fc){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___8687,tc,fc){
return (function (state_8664){
var state_val_8665 = (state_8664[(1)]);
if((state_val_8665 === (7))){
var inst_8660 = (state_8664[(2)]);
var state_8664__$1 = state_8664;
var statearr_8666_8688 = state_8664__$1;
(statearr_8666_8688[(2)] = inst_8660);

(statearr_8666_8688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8665 === (1))){
var state_8664__$1 = state_8664;
var statearr_8667_8689 = state_8664__$1;
(statearr_8667_8689[(2)] = null);

(statearr_8667_8689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8665 === (4))){
var inst_8641 = (state_8664[(7)]);
var inst_8641__$1 = (state_8664[(2)]);
var inst_8642 = (inst_8641__$1 == null);
var state_8664__$1 = (function (){var statearr_8668 = state_8664;
(statearr_8668[(7)] = inst_8641__$1);

return statearr_8668;
})();
if(cljs.core.truth_(inst_8642)){
var statearr_8669_8690 = state_8664__$1;
(statearr_8669_8690[(1)] = (5));

} else {
var statearr_8670_8691 = state_8664__$1;
(statearr_8670_8691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8665 === (13))){
var state_8664__$1 = state_8664;
var statearr_8671_8692 = state_8664__$1;
(statearr_8671_8692[(2)] = null);

(statearr_8671_8692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8665 === (6))){
var inst_8641 = (state_8664[(7)]);
var inst_8647 = p.call(null,inst_8641);
var state_8664__$1 = state_8664;
if(cljs.core.truth_(inst_8647)){
var statearr_8672_8693 = state_8664__$1;
(statearr_8672_8693[(1)] = (9));

} else {
var statearr_8673_8694 = state_8664__$1;
(statearr_8673_8694[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8665 === (3))){
var inst_8662 = (state_8664[(2)]);
var state_8664__$1 = state_8664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8664__$1,inst_8662);
} else {
if((state_val_8665 === (12))){
var state_8664__$1 = state_8664;
var statearr_8674_8695 = state_8664__$1;
(statearr_8674_8695[(2)] = null);

(statearr_8674_8695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8665 === (2))){
var state_8664__$1 = state_8664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8664__$1,(4),ch);
} else {
if((state_val_8665 === (11))){
var inst_8641 = (state_8664[(7)]);
var inst_8651 = (state_8664[(2)]);
var state_8664__$1 = state_8664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8664__$1,(8),inst_8651,inst_8641);
} else {
if((state_val_8665 === (9))){
var state_8664__$1 = state_8664;
var statearr_8675_8696 = state_8664__$1;
(statearr_8675_8696[(2)] = tc);

(statearr_8675_8696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8665 === (5))){
var inst_8644 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8645 = cljs.core.async.close_BANG_.call(null,fc);
var state_8664__$1 = (function (){var statearr_8676 = state_8664;
(statearr_8676[(8)] = inst_8644);

return statearr_8676;
})();
var statearr_8677_8697 = state_8664__$1;
(statearr_8677_8697[(2)] = inst_8645);

(statearr_8677_8697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8665 === (14))){
var inst_8658 = (state_8664[(2)]);
var state_8664__$1 = state_8664;
var statearr_8678_8698 = state_8664__$1;
(statearr_8678_8698[(2)] = inst_8658);

(statearr_8678_8698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8665 === (10))){
var state_8664__$1 = state_8664;
var statearr_8679_8699 = state_8664__$1;
(statearr_8679_8699[(2)] = fc);

(statearr_8679_8699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8665 === (8))){
var inst_8653 = (state_8664[(2)]);
var state_8664__$1 = state_8664;
if(cljs.core.truth_(inst_8653)){
var statearr_8680_8700 = state_8664__$1;
(statearr_8680_8700[(1)] = (12));

} else {
var statearr_8681_8701 = state_8664__$1;
(statearr_8681_8701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___8687,tc,fc))
;
return ((function (switch__6232__auto__,c__6387__auto___8687,tc,fc){
return (function() {
var cljs$core$async$state_machine__6233__auto__ = null;
var cljs$core$async$state_machine__6233__auto____0 = (function (){
var statearr_8682 = [null,null,null,null,null,null,null,null,null];
(statearr_8682[(0)] = cljs$core$async$state_machine__6233__auto__);

(statearr_8682[(1)] = (1));

return statearr_8682;
});
var cljs$core$async$state_machine__6233__auto____1 = (function (state_8664){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_8664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e8683){if((e8683 instanceof Object)){
var ex__6236__auto__ = e8683;
var statearr_8684_8702 = state_8664;
(statearr_8684_8702[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8703 = state_8664;
state_8664 = G__8703;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$state_machine__6233__auto__ = function(state_8664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6233__auto____1.call(this,state_8664);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6233__auto____0;
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6233__auto____1;
return cljs$core$async$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___8687,tc,fc))
})();
var state__6389__auto__ = (function (){var statearr_8685 = f__6388__auto__.call(null);
(statearr_8685[(6)] = c__6387__auto___8687);

return statearr_8685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___8687,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto__){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto__){
return (function (state_8724){
var state_val_8725 = (state_8724[(1)]);
if((state_val_8725 === (7))){
var inst_8720 = (state_8724[(2)]);
var state_8724__$1 = state_8724;
var statearr_8726_8744 = state_8724__$1;
(statearr_8726_8744[(2)] = inst_8720);

(statearr_8726_8744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8725 === (1))){
var inst_8704 = init;
var state_8724__$1 = (function (){var statearr_8727 = state_8724;
(statearr_8727[(7)] = inst_8704);

return statearr_8727;
})();
var statearr_8728_8745 = state_8724__$1;
(statearr_8728_8745[(2)] = null);

(statearr_8728_8745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8725 === (4))){
var inst_8707 = (state_8724[(8)]);
var inst_8707__$1 = (state_8724[(2)]);
var inst_8708 = (inst_8707__$1 == null);
var state_8724__$1 = (function (){var statearr_8729 = state_8724;
(statearr_8729[(8)] = inst_8707__$1);

return statearr_8729;
})();
if(cljs.core.truth_(inst_8708)){
var statearr_8730_8746 = state_8724__$1;
(statearr_8730_8746[(1)] = (5));

} else {
var statearr_8731_8747 = state_8724__$1;
(statearr_8731_8747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8725 === (6))){
var inst_8711 = (state_8724[(9)]);
var inst_8707 = (state_8724[(8)]);
var inst_8704 = (state_8724[(7)]);
var inst_8711__$1 = f.call(null,inst_8704,inst_8707);
var inst_8712 = cljs.core.reduced_QMARK_.call(null,inst_8711__$1);
var state_8724__$1 = (function (){var statearr_8732 = state_8724;
(statearr_8732[(9)] = inst_8711__$1);

return statearr_8732;
})();
if(inst_8712){
var statearr_8733_8748 = state_8724__$1;
(statearr_8733_8748[(1)] = (8));

} else {
var statearr_8734_8749 = state_8724__$1;
(statearr_8734_8749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8725 === (3))){
var inst_8722 = (state_8724[(2)]);
var state_8724__$1 = state_8724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8724__$1,inst_8722);
} else {
if((state_val_8725 === (2))){
var state_8724__$1 = state_8724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8724__$1,(4),ch);
} else {
if((state_val_8725 === (9))){
var inst_8711 = (state_8724[(9)]);
var inst_8704 = inst_8711;
var state_8724__$1 = (function (){var statearr_8735 = state_8724;
(statearr_8735[(7)] = inst_8704);

return statearr_8735;
})();
var statearr_8736_8750 = state_8724__$1;
(statearr_8736_8750[(2)] = null);

(statearr_8736_8750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8725 === (5))){
var inst_8704 = (state_8724[(7)]);
var state_8724__$1 = state_8724;
var statearr_8737_8751 = state_8724__$1;
(statearr_8737_8751[(2)] = inst_8704);

(statearr_8737_8751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8725 === (10))){
var inst_8718 = (state_8724[(2)]);
var state_8724__$1 = state_8724;
var statearr_8738_8752 = state_8724__$1;
(statearr_8738_8752[(2)] = inst_8718);

(statearr_8738_8752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8725 === (8))){
var inst_8711 = (state_8724[(9)]);
var inst_8714 = cljs.core.deref.call(null,inst_8711);
var state_8724__$1 = state_8724;
var statearr_8739_8753 = state_8724__$1;
(statearr_8739_8753[(2)] = inst_8714);

(statearr_8739_8753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto__))
;
return ((function (switch__6232__auto__,c__6387__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6233__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6233__auto____0 = (function (){
var statearr_8740 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8740[(0)] = cljs$core$async$reduce_$_state_machine__6233__auto__);

(statearr_8740[(1)] = (1));

return statearr_8740;
});
var cljs$core$async$reduce_$_state_machine__6233__auto____1 = (function (state_8724){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_8724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e8741){if((e8741 instanceof Object)){
var ex__6236__auto__ = e8741;
var statearr_8742_8754 = state_8724;
(statearr_8742_8754[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8755 = state_8724;
state_8724 = G__8755;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6233__auto__ = function(state_8724){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6233__auto____1.call(this,state_8724);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6233__auto____0;
cljs$core$async$reduce_$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6233__auto____1;
return cljs$core$async$reduce_$_state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto__))
})();
var state__6389__auto__ = (function (){var statearr_8743 = f__6388__auto__.call(null);
(statearr_8743[(6)] = c__6387__auto__);

return statearr_8743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto__))
);

return c__6387__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__6387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto__,f__$1){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto__,f__$1){
return (function (state_8761){
var state_val_8762 = (state_8761[(1)]);
if((state_val_8762 === (1))){
var inst_8756 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_8761__$1 = state_8761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8761__$1,(2),inst_8756);
} else {
if((state_val_8762 === (2))){
var inst_8758 = (state_8761[(2)]);
var inst_8759 = f__$1.call(null,inst_8758);
var state_8761__$1 = state_8761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8761__$1,inst_8759);
} else {
return null;
}
}
});})(c__6387__auto__,f__$1))
;
return ((function (switch__6232__auto__,c__6387__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__6233__auto__ = null;
var cljs$core$async$transduce_$_state_machine__6233__auto____0 = (function (){
var statearr_8763 = [null,null,null,null,null,null,null];
(statearr_8763[(0)] = cljs$core$async$transduce_$_state_machine__6233__auto__);

(statearr_8763[(1)] = (1));

return statearr_8763;
});
var cljs$core$async$transduce_$_state_machine__6233__auto____1 = (function (state_8761){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_8761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e8764){if((e8764 instanceof Object)){
var ex__6236__auto__ = e8764;
var statearr_8765_8767 = state_8761;
(statearr_8765_8767[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8768 = state_8761;
state_8761 = G__8768;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__6233__auto__ = function(state_8761){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__6233__auto____1.call(this,state_8761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__6233__auto____0;
cljs$core$async$transduce_$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__6233__auto____1;
return cljs$core$async$transduce_$_state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto__,f__$1))
})();
var state__6389__auto__ = (function (){var statearr_8766 = f__6388__auto__.call(null);
(statearr_8766[(6)] = c__6387__auto__);

return statearr_8766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto__,f__$1))
);

return c__6387__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__8770 = arguments.length;
switch (G__8770) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto__){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto__){
return (function (state_8795){
var state_val_8796 = (state_8795[(1)]);
if((state_val_8796 === (7))){
var inst_8777 = (state_8795[(2)]);
var state_8795__$1 = state_8795;
var statearr_8797_8818 = state_8795__$1;
(statearr_8797_8818[(2)] = inst_8777);

(statearr_8797_8818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8796 === (1))){
var inst_8771 = cljs.core.seq.call(null,coll);
var inst_8772 = inst_8771;
var state_8795__$1 = (function (){var statearr_8798 = state_8795;
(statearr_8798[(7)] = inst_8772);

return statearr_8798;
})();
var statearr_8799_8819 = state_8795__$1;
(statearr_8799_8819[(2)] = null);

(statearr_8799_8819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8796 === (4))){
var inst_8772 = (state_8795[(7)]);
var inst_8775 = cljs.core.first.call(null,inst_8772);
var state_8795__$1 = state_8795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8795__$1,(7),ch,inst_8775);
} else {
if((state_val_8796 === (13))){
var inst_8789 = (state_8795[(2)]);
var state_8795__$1 = state_8795;
var statearr_8800_8820 = state_8795__$1;
(statearr_8800_8820[(2)] = inst_8789);

(statearr_8800_8820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8796 === (6))){
var inst_8780 = (state_8795[(2)]);
var state_8795__$1 = state_8795;
if(cljs.core.truth_(inst_8780)){
var statearr_8801_8821 = state_8795__$1;
(statearr_8801_8821[(1)] = (8));

} else {
var statearr_8802_8822 = state_8795__$1;
(statearr_8802_8822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8796 === (3))){
var inst_8793 = (state_8795[(2)]);
var state_8795__$1 = state_8795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8795__$1,inst_8793);
} else {
if((state_val_8796 === (12))){
var state_8795__$1 = state_8795;
var statearr_8803_8823 = state_8795__$1;
(statearr_8803_8823[(2)] = null);

(statearr_8803_8823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8796 === (2))){
var inst_8772 = (state_8795[(7)]);
var state_8795__$1 = state_8795;
if(cljs.core.truth_(inst_8772)){
var statearr_8804_8824 = state_8795__$1;
(statearr_8804_8824[(1)] = (4));

} else {
var statearr_8805_8825 = state_8795__$1;
(statearr_8805_8825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8796 === (11))){
var inst_8786 = cljs.core.async.close_BANG_.call(null,ch);
var state_8795__$1 = state_8795;
var statearr_8806_8826 = state_8795__$1;
(statearr_8806_8826[(2)] = inst_8786);

(statearr_8806_8826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8796 === (9))){
var state_8795__$1 = state_8795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8807_8827 = state_8795__$1;
(statearr_8807_8827[(1)] = (11));

} else {
var statearr_8808_8828 = state_8795__$1;
(statearr_8808_8828[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8796 === (5))){
var inst_8772 = (state_8795[(7)]);
var state_8795__$1 = state_8795;
var statearr_8809_8829 = state_8795__$1;
(statearr_8809_8829[(2)] = inst_8772);

(statearr_8809_8829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8796 === (10))){
var inst_8791 = (state_8795[(2)]);
var state_8795__$1 = state_8795;
var statearr_8810_8830 = state_8795__$1;
(statearr_8810_8830[(2)] = inst_8791);

(statearr_8810_8830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8796 === (8))){
var inst_8772 = (state_8795[(7)]);
var inst_8782 = cljs.core.next.call(null,inst_8772);
var inst_8772__$1 = inst_8782;
var state_8795__$1 = (function (){var statearr_8811 = state_8795;
(statearr_8811[(7)] = inst_8772__$1);

return statearr_8811;
})();
var statearr_8812_8831 = state_8795__$1;
(statearr_8812_8831[(2)] = null);

(statearr_8812_8831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto__))
;
return ((function (switch__6232__auto__,c__6387__auto__){
return (function() {
var cljs$core$async$state_machine__6233__auto__ = null;
var cljs$core$async$state_machine__6233__auto____0 = (function (){
var statearr_8813 = [null,null,null,null,null,null,null,null];
(statearr_8813[(0)] = cljs$core$async$state_machine__6233__auto__);

(statearr_8813[(1)] = (1));

return statearr_8813;
});
var cljs$core$async$state_machine__6233__auto____1 = (function (state_8795){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_8795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e8814){if((e8814 instanceof Object)){
var ex__6236__auto__ = e8814;
var statearr_8815_8832 = state_8795;
(statearr_8815_8832[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8833 = state_8795;
state_8795 = G__8833;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$state_machine__6233__auto__ = function(state_8795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6233__auto____1.call(this,state_8795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6233__auto____0;
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6233__auto____1;
return cljs$core$async$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto__))
})();
var state__6389__auto__ = (function (){var statearr_8816 = f__6388__auto__.call(null);
(statearr_8816[(6)] = c__6387__auto__);

return statearr_8816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto__))
);

return c__6387__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4209__auto__ = (((_ == null))?null:_);
var m__4210__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,_);
} else {
var m__4210__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4210__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m);
} else {
var m__4210__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8834 = (function (ch,cs,meta8835){
this.ch = ch;
this.cs = cs;
this.meta8835 = meta8835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8836,meta8835__$1){
var self__ = this;
var _8836__$1 = this;
return (new cljs.core.async.t_cljs$core$async8834(self__.ch,self__.cs,meta8835__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8836){
var self__ = this;
var _8836__$1 = this;
return self__.meta8835;
});})(cs))
;

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8834.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8834.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8835","meta8835",-838594090,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8834";

cljs.core.async.t_cljs$core$async8834.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async8834");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8834.
 */
cljs.core.async.__GT_t_cljs$core$async8834 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8834(ch__$1,cs__$1,meta8835){
return (new cljs.core.async.t_cljs$core$async8834(ch__$1,cs__$1,meta8835));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8834(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6387__auto___9056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___9056,cs,m,dchan,dctr,done){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___9056,cs,m,dchan,dctr,done){
return (function (state_8971){
var state_val_8972 = (state_8971[(1)]);
if((state_val_8972 === (7))){
var inst_8967 = (state_8971[(2)]);
var state_8971__$1 = state_8971;
var statearr_8973_9057 = state_8971__$1;
(statearr_8973_9057[(2)] = inst_8967);

(statearr_8973_9057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (20))){
var inst_8870 = (state_8971[(7)]);
var inst_8882 = cljs.core.first.call(null,inst_8870);
var inst_8883 = cljs.core.nth.call(null,inst_8882,(0),null);
var inst_8884 = cljs.core.nth.call(null,inst_8882,(1),null);
var state_8971__$1 = (function (){var statearr_8974 = state_8971;
(statearr_8974[(8)] = inst_8883);

return statearr_8974;
})();
if(cljs.core.truth_(inst_8884)){
var statearr_8975_9058 = state_8971__$1;
(statearr_8975_9058[(1)] = (22));

} else {
var statearr_8976_9059 = state_8971__$1;
(statearr_8976_9059[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (27))){
var inst_8912 = (state_8971[(9)]);
var inst_8919 = (state_8971[(10)]);
var inst_8839 = (state_8971[(11)]);
var inst_8914 = (state_8971[(12)]);
var inst_8919__$1 = cljs.core._nth.call(null,inst_8912,inst_8914);
var inst_8920 = cljs.core.async.put_BANG_.call(null,inst_8919__$1,inst_8839,done);
var state_8971__$1 = (function (){var statearr_8977 = state_8971;
(statearr_8977[(10)] = inst_8919__$1);

return statearr_8977;
})();
if(cljs.core.truth_(inst_8920)){
var statearr_8978_9060 = state_8971__$1;
(statearr_8978_9060[(1)] = (30));

} else {
var statearr_8979_9061 = state_8971__$1;
(statearr_8979_9061[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (1))){
var state_8971__$1 = state_8971;
var statearr_8980_9062 = state_8971__$1;
(statearr_8980_9062[(2)] = null);

(statearr_8980_9062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (24))){
var inst_8870 = (state_8971[(7)]);
var inst_8889 = (state_8971[(2)]);
var inst_8890 = cljs.core.next.call(null,inst_8870);
var inst_8848 = inst_8890;
var inst_8849 = null;
var inst_8850 = (0);
var inst_8851 = (0);
var state_8971__$1 = (function (){var statearr_8981 = state_8971;
(statearr_8981[(13)] = inst_8849);

(statearr_8981[(14)] = inst_8851);

(statearr_8981[(15)] = inst_8848);

(statearr_8981[(16)] = inst_8889);

(statearr_8981[(17)] = inst_8850);

return statearr_8981;
})();
var statearr_8982_9063 = state_8971__$1;
(statearr_8982_9063[(2)] = null);

(statearr_8982_9063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (39))){
var state_8971__$1 = state_8971;
var statearr_8986_9064 = state_8971__$1;
(statearr_8986_9064[(2)] = null);

(statearr_8986_9064[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (4))){
var inst_8839 = (state_8971[(11)]);
var inst_8839__$1 = (state_8971[(2)]);
var inst_8840 = (inst_8839__$1 == null);
var state_8971__$1 = (function (){var statearr_8987 = state_8971;
(statearr_8987[(11)] = inst_8839__$1);

return statearr_8987;
})();
if(cljs.core.truth_(inst_8840)){
var statearr_8988_9065 = state_8971__$1;
(statearr_8988_9065[(1)] = (5));

} else {
var statearr_8989_9066 = state_8971__$1;
(statearr_8989_9066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (15))){
var inst_8849 = (state_8971[(13)]);
var inst_8851 = (state_8971[(14)]);
var inst_8848 = (state_8971[(15)]);
var inst_8850 = (state_8971[(17)]);
var inst_8866 = (state_8971[(2)]);
var inst_8867 = (inst_8851 + (1));
var tmp8983 = inst_8849;
var tmp8984 = inst_8848;
var tmp8985 = inst_8850;
var inst_8848__$1 = tmp8984;
var inst_8849__$1 = tmp8983;
var inst_8850__$1 = tmp8985;
var inst_8851__$1 = inst_8867;
var state_8971__$1 = (function (){var statearr_8990 = state_8971;
(statearr_8990[(13)] = inst_8849__$1);

(statearr_8990[(14)] = inst_8851__$1);

(statearr_8990[(15)] = inst_8848__$1);

(statearr_8990[(18)] = inst_8866);

(statearr_8990[(17)] = inst_8850__$1);

return statearr_8990;
})();
var statearr_8991_9067 = state_8971__$1;
(statearr_8991_9067[(2)] = null);

(statearr_8991_9067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (21))){
var inst_8893 = (state_8971[(2)]);
var state_8971__$1 = state_8971;
var statearr_8995_9068 = state_8971__$1;
(statearr_8995_9068[(2)] = inst_8893);

(statearr_8995_9068[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (31))){
var inst_8919 = (state_8971[(10)]);
var inst_8923 = done.call(null,null);
var inst_8924 = cljs.core.async.untap_STAR_.call(null,m,inst_8919);
var state_8971__$1 = (function (){var statearr_8996 = state_8971;
(statearr_8996[(19)] = inst_8923);

return statearr_8996;
})();
var statearr_8997_9069 = state_8971__$1;
(statearr_8997_9069[(2)] = inst_8924);

(statearr_8997_9069[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (32))){
var inst_8912 = (state_8971[(9)]);
var inst_8914 = (state_8971[(12)]);
var inst_8913 = (state_8971[(20)]);
var inst_8911 = (state_8971[(21)]);
var inst_8926 = (state_8971[(2)]);
var inst_8927 = (inst_8914 + (1));
var tmp8992 = inst_8912;
var tmp8993 = inst_8913;
var tmp8994 = inst_8911;
var inst_8911__$1 = tmp8994;
var inst_8912__$1 = tmp8992;
var inst_8913__$1 = tmp8993;
var inst_8914__$1 = inst_8927;
var state_8971__$1 = (function (){var statearr_8998 = state_8971;
(statearr_8998[(9)] = inst_8912__$1);

(statearr_8998[(12)] = inst_8914__$1);

(statearr_8998[(20)] = inst_8913__$1);

(statearr_8998[(22)] = inst_8926);

(statearr_8998[(21)] = inst_8911__$1);

return statearr_8998;
})();
var statearr_8999_9070 = state_8971__$1;
(statearr_8999_9070[(2)] = null);

(statearr_8999_9070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (40))){
var inst_8939 = (state_8971[(23)]);
var inst_8943 = done.call(null,null);
var inst_8944 = cljs.core.async.untap_STAR_.call(null,m,inst_8939);
var state_8971__$1 = (function (){var statearr_9000 = state_8971;
(statearr_9000[(24)] = inst_8943);

return statearr_9000;
})();
var statearr_9001_9071 = state_8971__$1;
(statearr_9001_9071[(2)] = inst_8944);

(statearr_9001_9071[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (33))){
var inst_8930 = (state_8971[(25)]);
var inst_8932 = cljs.core.chunked_seq_QMARK_.call(null,inst_8930);
var state_8971__$1 = state_8971;
if(inst_8932){
var statearr_9002_9072 = state_8971__$1;
(statearr_9002_9072[(1)] = (36));

} else {
var statearr_9003_9073 = state_8971__$1;
(statearr_9003_9073[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (13))){
var inst_8860 = (state_8971[(26)]);
var inst_8863 = cljs.core.async.close_BANG_.call(null,inst_8860);
var state_8971__$1 = state_8971;
var statearr_9004_9074 = state_8971__$1;
(statearr_9004_9074[(2)] = inst_8863);

(statearr_9004_9074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (22))){
var inst_8883 = (state_8971[(8)]);
var inst_8886 = cljs.core.async.close_BANG_.call(null,inst_8883);
var state_8971__$1 = state_8971;
var statearr_9005_9075 = state_8971__$1;
(statearr_9005_9075[(2)] = inst_8886);

(statearr_9005_9075[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (36))){
var inst_8930 = (state_8971[(25)]);
var inst_8934 = cljs.core.chunk_first.call(null,inst_8930);
var inst_8935 = cljs.core.chunk_rest.call(null,inst_8930);
var inst_8936 = cljs.core.count.call(null,inst_8934);
var inst_8911 = inst_8935;
var inst_8912 = inst_8934;
var inst_8913 = inst_8936;
var inst_8914 = (0);
var state_8971__$1 = (function (){var statearr_9006 = state_8971;
(statearr_9006[(9)] = inst_8912);

(statearr_9006[(12)] = inst_8914);

(statearr_9006[(20)] = inst_8913);

(statearr_9006[(21)] = inst_8911);

return statearr_9006;
})();
var statearr_9007_9076 = state_8971__$1;
(statearr_9007_9076[(2)] = null);

(statearr_9007_9076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (41))){
var inst_8930 = (state_8971[(25)]);
var inst_8946 = (state_8971[(2)]);
var inst_8947 = cljs.core.next.call(null,inst_8930);
var inst_8911 = inst_8947;
var inst_8912 = null;
var inst_8913 = (0);
var inst_8914 = (0);
var state_8971__$1 = (function (){var statearr_9008 = state_8971;
(statearr_9008[(27)] = inst_8946);

(statearr_9008[(9)] = inst_8912);

(statearr_9008[(12)] = inst_8914);

(statearr_9008[(20)] = inst_8913);

(statearr_9008[(21)] = inst_8911);

return statearr_9008;
})();
var statearr_9009_9077 = state_8971__$1;
(statearr_9009_9077[(2)] = null);

(statearr_9009_9077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (43))){
var state_8971__$1 = state_8971;
var statearr_9010_9078 = state_8971__$1;
(statearr_9010_9078[(2)] = null);

(statearr_9010_9078[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (29))){
var inst_8955 = (state_8971[(2)]);
var state_8971__$1 = state_8971;
var statearr_9011_9079 = state_8971__$1;
(statearr_9011_9079[(2)] = inst_8955);

(statearr_9011_9079[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (44))){
var inst_8964 = (state_8971[(2)]);
var state_8971__$1 = (function (){var statearr_9012 = state_8971;
(statearr_9012[(28)] = inst_8964);

return statearr_9012;
})();
var statearr_9013_9080 = state_8971__$1;
(statearr_9013_9080[(2)] = null);

(statearr_9013_9080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (6))){
var inst_8903 = (state_8971[(29)]);
var inst_8902 = cljs.core.deref.call(null,cs);
var inst_8903__$1 = cljs.core.keys.call(null,inst_8902);
var inst_8904 = cljs.core.count.call(null,inst_8903__$1);
var inst_8905 = cljs.core.reset_BANG_.call(null,dctr,inst_8904);
var inst_8910 = cljs.core.seq.call(null,inst_8903__$1);
var inst_8911 = inst_8910;
var inst_8912 = null;
var inst_8913 = (0);
var inst_8914 = (0);
var state_8971__$1 = (function (){var statearr_9014 = state_8971;
(statearr_9014[(9)] = inst_8912);

(statearr_9014[(12)] = inst_8914);

(statearr_9014[(20)] = inst_8913);

(statearr_9014[(30)] = inst_8905);

(statearr_9014[(29)] = inst_8903__$1);

(statearr_9014[(21)] = inst_8911);

return statearr_9014;
})();
var statearr_9015_9081 = state_8971__$1;
(statearr_9015_9081[(2)] = null);

(statearr_9015_9081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (28))){
var inst_8930 = (state_8971[(25)]);
var inst_8911 = (state_8971[(21)]);
var inst_8930__$1 = cljs.core.seq.call(null,inst_8911);
var state_8971__$1 = (function (){var statearr_9016 = state_8971;
(statearr_9016[(25)] = inst_8930__$1);

return statearr_9016;
})();
if(inst_8930__$1){
var statearr_9017_9082 = state_8971__$1;
(statearr_9017_9082[(1)] = (33));

} else {
var statearr_9018_9083 = state_8971__$1;
(statearr_9018_9083[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (25))){
var inst_8914 = (state_8971[(12)]);
var inst_8913 = (state_8971[(20)]);
var inst_8916 = (inst_8914 < inst_8913);
var inst_8917 = inst_8916;
var state_8971__$1 = state_8971;
if(cljs.core.truth_(inst_8917)){
var statearr_9019_9084 = state_8971__$1;
(statearr_9019_9084[(1)] = (27));

} else {
var statearr_9020_9085 = state_8971__$1;
(statearr_9020_9085[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (34))){
var state_8971__$1 = state_8971;
var statearr_9021_9086 = state_8971__$1;
(statearr_9021_9086[(2)] = null);

(statearr_9021_9086[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (17))){
var state_8971__$1 = state_8971;
var statearr_9022_9087 = state_8971__$1;
(statearr_9022_9087[(2)] = null);

(statearr_9022_9087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (3))){
var inst_8969 = (state_8971[(2)]);
var state_8971__$1 = state_8971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8971__$1,inst_8969);
} else {
if((state_val_8972 === (12))){
var inst_8898 = (state_8971[(2)]);
var state_8971__$1 = state_8971;
var statearr_9023_9088 = state_8971__$1;
(statearr_9023_9088[(2)] = inst_8898);

(statearr_9023_9088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (2))){
var state_8971__$1 = state_8971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8971__$1,(4),ch);
} else {
if((state_val_8972 === (23))){
var state_8971__$1 = state_8971;
var statearr_9024_9089 = state_8971__$1;
(statearr_9024_9089[(2)] = null);

(statearr_9024_9089[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (35))){
var inst_8953 = (state_8971[(2)]);
var state_8971__$1 = state_8971;
var statearr_9025_9090 = state_8971__$1;
(statearr_9025_9090[(2)] = inst_8953);

(statearr_9025_9090[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (19))){
var inst_8870 = (state_8971[(7)]);
var inst_8874 = cljs.core.chunk_first.call(null,inst_8870);
var inst_8875 = cljs.core.chunk_rest.call(null,inst_8870);
var inst_8876 = cljs.core.count.call(null,inst_8874);
var inst_8848 = inst_8875;
var inst_8849 = inst_8874;
var inst_8850 = inst_8876;
var inst_8851 = (0);
var state_8971__$1 = (function (){var statearr_9026 = state_8971;
(statearr_9026[(13)] = inst_8849);

(statearr_9026[(14)] = inst_8851);

(statearr_9026[(15)] = inst_8848);

(statearr_9026[(17)] = inst_8850);

return statearr_9026;
})();
var statearr_9027_9091 = state_8971__$1;
(statearr_9027_9091[(2)] = null);

(statearr_9027_9091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (11))){
var inst_8870 = (state_8971[(7)]);
var inst_8848 = (state_8971[(15)]);
var inst_8870__$1 = cljs.core.seq.call(null,inst_8848);
var state_8971__$1 = (function (){var statearr_9028 = state_8971;
(statearr_9028[(7)] = inst_8870__$1);

return statearr_9028;
})();
if(inst_8870__$1){
var statearr_9029_9092 = state_8971__$1;
(statearr_9029_9092[(1)] = (16));

} else {
var statearr_9030_9093 = state_8971__$1;
(statearr_9030_9093[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (9))){
var inst_8900 = (state_8971[(2)]);
var state_8971__$1 = state_8971;
var statearr_9031_9094 = state_8971__$1;
(statearr_9031_9094[(2)] = inst_8900);

(statearr_9031_9094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (5))){
var inst_8846 = cljs.core.deref.call(null,cs);
var inst_8847 = cljs.core.seq.call(null,inst_8846);
var inst_8848 = inst_8847;
var inst_8849 = null;
var inst_8850 = (0);
var inst_8851 = (0);
var state_8971__$1 = (function (){var statearr_9032 = state_8971;
(statearr_9032[(13)] = inst_8849);

(statearr_9032[(14)] = inst_8851);

(statearr_9032[(15)] = inst_8848);

(statearr_9032[(17)] = inst_8850);

return statearr_9032;
})();
var statearr_9033_9095 = state_8971__$1;
(statearr_9033_9095[(2)] = null);

(statearr_9033_9095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (14))){
var state_8971__$1 = state_8971;
var statearr_9034_9096 = state_8971__$1;
(statearr_9034_9096[(2)] = null);

(statearr_9034_9096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (45))){
var inst_8961 = (state_8971[(2)]);
var state_8971__$1 = state_8971;
var statearr_9035_9097 = state_8971__$1;
(statearr_9035_9097[(2)] = inst_8961);

(statearr_9035_9097[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (26))){
var inst_8903 = (state_8971[(29)]);
var inst_8957 = (state_8971[(2)]);
var inst_8958 = cljs.core.seq.call(null,inst_8903);
var state_8971__$1 = (function (){var statearr_9036 = state_8971;
(statearr_9036[(31)] = inst_8957);

return statearr_9036;
})();
if(inst_8958){
var statearr_9037_9098 = state_8971__$1;
(statearr_9037_9098[(1)] = (42));

} else {
var statearr_9038_9099 = state_8971__$1;
(statearr_9038_9099[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (16))){
var inst_8870 = (state_8971[(7)]);
var inst_8872 = cljs.core.chunked_seq_QMARK_.call(null,inst_8870);
var state_8971__$1 = state_8971;
if(inst_8872){
var statearr_9039_9100 = state_8971__$1;
(statearr_9039_9100[(1)] = (19));

} else {
var statearr_9040_9101 = state_8971__$1;
(statearr_9040_9101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (38))){
var inst_8950 = (state_8971[(2)]);
var state_8971__$1 = state_8971;
var statearr_9041_9102 = state_8971__$1;
(statearr_9041_9102[(2)] = inst_8950);

(statearr_9041_9102[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (30))){
var state_8971__$1 = state_8971;
var statearr_9042_9103 = state_8971__$1;
(statearr_9042_9103[(2)] = null);

(statearr_9042_9103[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (10))){
var inst_8849 = (state_8971[(13)]);
var inst_8851 = (state_8971[(14)]);
var inst_8859 = cljs.core._nth.call(null,inst_8849,inst_8851);
var inst_8860 = cljs.core.nth.call(null,inst_8859,(0),null);
var inst_8861 = cljs.core.nth.call(null,inst_8859,(1),null);
var state_8971__$1 = (function (){var statearr_9043 = state_8971;
(statearr_9043[(26)] = inst_8860);

return statearr_9043;
})();
if(cljs.core.truth_(inst_8861)){
var statearr_9044_9104 = state_8971__$1;
(statearr_9044_9104[(1)] = (13));

} else {
var statearr_9045_9105 = state_8971__$1;
(statearr_9045_9105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (18))){
var inst_8896 = (state_8971[(2)]);
var state_8971__$1 = state_8971;
var statearr_9046_9106 = state_8971__$1;
(statearr_9046_9106[(2)] = inst_8896);

(statearr_9046_9106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (42))){
var state_8971__$1 = state_8971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8971__$1,(45),dchan);
} else {
if((state_val_8972 === (37))){
var inst_8930 = (state_8971[(25)]);
var inst_8839 = (state_8971[(11)]);
var inst_8939 = (state_8971[(23)]);
var inst_8939__$1 = cljs.core.first.call(null,inst_8930);
var inst_8940 = cljs.core.async.put_BANG_.call(null,inst_8939__$1,inst_8839,done);
var state_8971__$1 = (function (){var statearr_9047 = state_8971;
(statearr_9047[(23)] = inst_8939__$1);

return statearr_9047;
})();
if(cljs.core.truth_(inst_8940)){
var statearr_9048_9107 = state_8971__$1;
(statearr_9048_9107[(1)] = (39));

} else {
var statearr_9049_9108 = state_8971__$1;
(statearr_9049_9108[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8972 === (8))){
var inst_8851 = (state_8971[(14)]);
var inst_8850 = (state_8971[(17)]);
var inst_8853 = (inst_8851 < inst_8850);
var inst_8854 = inst_8853;
var state_8971__$1 = state_8971;
if(cljs.core.truth_(inst_8854)){
var statearr_9050_9109 = state_8971__$1;
(statearr_9050_9109[(1)] = (10));

} else {
var statearr_9051_9110 = state_8971__$1;
(statearr_9051_9110[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___9056,cs,m,dchan,dctr,done))
;
return ((function (switch__6232__auto__,c__6387__auto___9056,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6233__auto__ = null;
var cljs$core$async$mult_$_state_machine__6233__auto____0 = (function (){
var statearr_9052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9052[(0)] = cljs$core$async$mult_$_state_machine__6233__auto__);

(statearr_9052[(1)] = (1));

return statearr_9052;
});
var cljs$core$async$mult_$_state_machine__6233__auto____1 = (function (state_8971){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_8971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e9053){if((e9053 instanceof Object)){
var ex__6236__auto__ = e9053;
var statearr_9054_9111 = state_8971;
(statearr_9054_9111[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9112 = state_8971;
state_8971 = G__9112;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6233__auto__ = function(state_8971){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6233__auto____1.call(this,state_8971);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6233__auto____0;
cljs$core$async$mult_$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6233__auto____1;
return cljs$core$async$mult_$_state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___9056,cs,m,dchan,dctr,done))
})();
var state__6389__auto__ = (function (){var statearr_9055 = f__6388__auto__.call(null);
(statearr_9055[(6)] = c__6387__auto___9056);

return statearr_9055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___9056,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__9114 = arguments.length;
switch (G__9114) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m);
} else {
var m__4210__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,state_map);
} else {
var m__4210__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,mode);
} else {
var m__4210__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9126 = arguments.length;
var i__4498__auto___9127 = (0);
while(true){
if((i__4498__auto___9127 < len__4497__auto___9126)){
args__4500__auto__.push((arguments[i__4498__auto___9127]));

var G__9128 = (i__4498__auto___9127 + (1));
i__4498__auto___9127 = G__9128;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9120){
var map__9121 = p__9120;
var map__9121__$1 = ((((!((map__9121 == null)))?(((((map__9121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9121):map__9121);
var opts = map__9121__$1;
var statearr_9123_9129 = state;
(statearr_9123_9129[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__9121,map__9121__$1,opts){
return (function (val){
var statearr_9124_9130 = state;
(statearr_9124_9130[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__9121,map__9121__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_9125_9131 = state;
(statearr_9125_9131[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9116){
var G__9117 = cljs.core.first.call(null,seq9116);
var seq9116__$1 = cljs.core.next.call(null,seq9116);
var G__9118 = cljs.core.first.call(null,seq9116__$1);
var seq9116__$2 = cljs.core.next.call(null,seq9116__$1);
var G__9119 = cljs.core.first.call(null,seq9116__$2);
var seq9116__$3 = cljs.core.next.call(null,seq9116__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9117,G__9118,G__9119,seq9116__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async9132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9132 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta9133){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta9133 = meta9133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9134,meta9133__$1){
var self__ = this;
var _9134__$1 = this;
return (new cljs.core.async.t_cljs$core$async9132(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta9133__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9134){
var self__ = this;
var _9134__$1 = this;
return self__.meta9133;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9132.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9132.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9132.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9132.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9132.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9132.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9132.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9132.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9132.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta9133","meta9133",-215127214,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9132";

cljs.core.async.t_cljs$core$async9132.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async9132");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9132.
 */
cljs.core.async.__GT_t_cljs$core$async9132 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9132(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta9133){
return (new cljs.core.async.t_cljs$core$async9132(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta9133));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9132(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6387__auto___9296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___9296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___9296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9236){
var state_val_9237 = (state_9236[(1)]);
if((state_val_9237 === (7))){
var inst_9151 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
var statearr_9238_9297 = state_9236__$1;
(statearr_9238_9297[(2)] = inst_9151);

(statearr_9238_9297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (20))){
var inst_9163 = (state_9236[(7)]);
var state_9236__$1 = state_9236;
var statearr_9239_9298 = state_9236__$1;
(statearr_9239_9298[(2)] = inst_9163);

(statearr_9239_9298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (27))){
var state_9236__$1 = state_9236;
var statearr_9240_9299 = state_9236__$1;
(statearr_9240_9299[(2)] = null);

(statearr_9240_9299[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (1))){
var inst_9138 = (state_9236[(8)]);
var inst_9138__$1 = calc_state.call(null);
var inst_9140 = (inst_9138__$1 == null);
var inst_9141 = cljs.core.not.call(null,inst_9140);
var state_9236__$1 = (function (){var statearr_9241 = state_9236;
(statearr_9241[(8)] = inst_9138__$1);

return statearr_9241;
})();
if(inst_9141){
var statearr_9242_9300 = state_9236__$1;
(statearr_9242_9300[(1)] = (2));

} else {
var statearr_9243_9301 = state_9236__$1;
(statearr_9243_9301[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (24))){
var inst_9210 = (state_9236[(9)]);
var inst_9187 = (state_9236[(10)]);
var inst_9196 = (state_9236[(11)]);
var inst_9210__$1 = inst_9187.call(null,inst_9196);
var state_9236__$1 = (function (){var statearr_9244 = state_9236;
(statearr_9244[(9)] = inst_9210__$1);

return statearr_9244;
})();
if(cljs.core.truth_(inst_9210__$1)){
var statearr_9245_9302 = state_9236__$1;
(statearr_9245_9302[(1)] = (29));

} else {
var statearr_9246_9303 = state_9236__$1;
(statearr_9246_9303[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (4))){
var inst_9154 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
if(cljs.core.truth_(inst_9154)){
var statearr_9247_9304 = state_9236__$1;
(statearr_9247_9304[(1)] = (8));

} else {
var statearr_9248_9305 = state_9236__$1;
(statearr_9248_9305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (15))){
var inst_9181 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
if(cljs.core.truth_(inst_9181)){
var statearr_9249_9306 = state_9236__$1;
(statearr_9249_9306[(1)] = (19));

} else {
var statearr_9250_9307 = state_9236__$1;
(statearr_9250_9307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (21))){
var inst_9186 = (state_9236[(12)]);
var inst_9186__$1 = (state_9236[(2)]);
var inst_9187 = cljs.core.get.call(null,inst_9186__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9188 = cljs.core.get.call(null,inst_9186__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9189 = cljs.core.get.call(null,inst_9186__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9236__$1 = (function (){var statearr_9251 = state_9236;
(statearr_9251[(12)] = inst_9186__$1);

(statearr_9251[(10)] = inst_9187);

(statearr_9251[(13)] = inst_9188);

return statearr_9251;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9236__$1,(22),inst_9189);
} else {
if((state_val_9237 === (31))){
var inst_9218 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
if(cljs.core.truth_(inst_9218)){
var statearr_9252_9308 = state_9236__$1;
(statearr_9252_9308[(1)] = (32));

} else {
var statearr_9253_9309 = state_9236__$1;
(statearr_9253_9309[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (32))){
var inst_9195 = (state_9236[(14)]);
var state_9236__$1 = state_9236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9236__$1,(35),out,inst_9195);
} else {
if((state_val_9237 === (33))){
var inst_9186 = (state_9236[(12)]);
var inst_9163 = inst_9186;
var state_9236__$1 = (function (){var statearr_9254 = state_9236;
(statearr_9254[(7)] = inst_9163);

return statearr_9254;
})();
var statearr_9255_9310 = state_9236__$1;
(statearr_9255_9310[(2)] = null);

(statearr_9255_9310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (13))){
var inst_9163 = (state_9236[(7)]);
var inst_9170 = inst_9163.cljs$lang$protocol_mask$partition0$;
var inst_9171 = (inst_9170 & (64));
var inst_9172 = inst_9163.cljs$core$ISeq$;
var inst_9173 = (cljs.core.PROTOCOL_SENTINEL === inst_9172);
var inst_9174 = ((inst_9171) || (inst_9173));
var state_9236__$1 = state_9236;
if(cljs.core.truth_(inst_9174)){
var statearr_9256_9311 = state_9236__$1;
(statearr_9256_9311[(1)] = (16));

} else {
var statearr_9257_9312 = state_9236__$1;
(statearr_9257_9312[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (22))){
var inst_9195 = (state_9236[(14)]);
var inst_9196 = (state_9236[(11)]);
var inst_9194 = (state_9236[(2)]);
var inst_9195__$1 = cljs.core.nth.call(null,inst_9194,(0),null);
var inst_9196__$1 = cljs.core.nth.call(null,inst_9194,(1),null);
var inst_9197 = (inst_9195__$1 == null);
var inst_9198 = cljs.core._EQ_.call(null,inst_9196__$1,change);
var inst_9199 = ((inst_9197) || (inst_9198));
var state_9236__$1 = (function (){var statearr_9258 = state_9236;
(statearr_9258[(14)] = inst_9195__$1);

(statearr_9258[(11)] = inst_9196__$1);

return statearr_9258;
})();
if(cljs.core.truth_(inst_9199)){
var statearr_9259_9313 = state_9236__$1;
(statearr_9259_9313[(1)] = (23));

} else {
var statearr_9260_9314 = state_9236__$1;
(statearr_9260_9314[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (36))){
var inst_9186 = (state_9236[(12)]);
var inst_9163 = inst_9186;
var state_9236__$1 = (function (){var statearr_9261 = state_9236;
(statearr_9261[(7)] = inst_9163);

return statearr_9261;
})();
var statearr_9262_9315 = state_9236__$1;
(statearr_9262_9315[(2)] = null);

(statearr_9262_9315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (29))){
var inst_9210 = (state_9236[(9)]);
var state_9236__$1 = state_9236;
var statearr_9263_9316 = state_9236__$1;
(statearr_9263_9316[(2)] = inst_9210);

(statearr_9263_9316[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (6))){
var state_9236__$1 = state_9236;
var statearr_9264_9317 = state_9236__$1;
(statearr_9264_9317[(2)] = false);

(statearr_9264_9317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (28))){
var inst_9206 = (state_9236[(2)]);
var inst_9207 = calc_state.call(null);
var inst_9163 = inst_9207;
var state_9236__$1 = (function (){var statearr_9265 = state_9236;
(statearr_9265[(15)] = inst_9206);

(statearr_9265[(7)] = inst_9163);

return statearr_9265;
})();
var statearr_9266_9318 = state_9236__$1;
(statearr_9266_9318[(2)] = null);

(statearr_9266_9318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (25))){
var inst_9232 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
var statearr_9267_9319 = state_9236__$1;
(statearr_9267_9319[(2)] = inst_9232);

(statearr_9267_9319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (34))){
var inst_9230 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
var statearr_9268_9320 = state_9236__$1;
(statearr_9268_9320[(2)] = inst_9230);

(statearr_9268_9320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (17))){
var state_9236__$1 = state_9236;
var statearr_9269_9321 = state_9236__$1;
(statearr_9269_9321[(2)] = false);

(statearr_9269_9321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (3))){
var state_9236__$1 = state_9236;
var statearr_9270_9322 = state_9236__$1;
(statearr_9270_9322[(2)] = false);

(statearr_9270_9322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (12))){
var inst_9234 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9236__$1,inst_9234);
} else {
if((state_val_9237 === (2))){
var inst_9138 = (state_9236[(8)]);
var inst_9143 = inst_9138.cljs$lang$protocol_mask$partition0$;
var inst_9144 = (inst_9143 & (64));
var inst_9145 = inst_9138.cljs$core$ISeq$;
var inst_9146 = (cljs.core.PROTOCOL_SENTINEL === inst_9145);
var inst_9147 = ((inst_9144) || (inst_9146));
var state_9236__$1 = state_9236;
if(cljs.core.truth_(inst_9147)){
var statearr_9271_9323 = state_9236__$1;
(statearr_9271_9323[(1)] = (5));

} else {
var statearr_9272_9324 = state_9236__$1;
(statearr_9272_9324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (23))){
var inst_9195 = (state_9236[(14)]);
var inst_9201 = (inst_9195 == null);
var state_9236__$1 = state_9236;
if(cljs.core.truth_(inst_9201)){
var statearr_9273_9325 = state_9236__$1;
(statearr_9273_9325[(1)] = (26));

} else {
var statearr_9274_9326 = state_9236__$1;
(statearr_9274_9326[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (35))){
var inst_9221 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
if(cljs.core.truth_(inst_9221)){
var statearr_9275_9327 = state_9236__$1;
(statearr_9275_9327[(1)] = (36));

} else {
var statearr_9276_9328 = state_9236__$1;
(statearr_9276_9328[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (19))){
var inst_9163 = (state_9236[(7)]);
var inst_9183 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9163);
var state_9236__$1 = state_9236;
var statearr_9277_9329 = state_9236__$1;
(statearr_9277_9329[(2)] = inst_9183);

(statearr_9277_9329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (11))){
var inst_9163 = (state_9236[(7)]);
var inst_9167 = (inst_9163 == null);
var inst_9168 = cljs.core.not.call(null,inst_9167);
var state_9236__$1 = state_9236;
if(inst_9168){
var statearr_9278_9330 = state_9236__$1;
(statearr_9278_9330[(1)] = (13));

} else {
var statearr_9279_9331 = state_9236__$1;
(statearr_9279_9331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (9))){
var inst_9138 = (state_9236[(8)]);
var state_9236__$1 = state_9236;
var statearr_9280_9332 = state_9236__$1;
(statearr_9280_9332[(2)] = inst_9138);

(statearr_9280_9332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (5))){
var state_9236__$1 = state_9236;
var statearr_9281_9333 = state_9236__$1;
(statearr_9281_9333[(2)] = true);

(statearr_9281_9333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (14))){
var state_9236__$1 = state_9236;
var statearr_9282_9334 = state_9236__$1;
(statearr_9282_9334[(2)] = false);

(statearr_9282_9334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (26))){
var inst_9196 = (state_9236[(11)]);
var inst_9203 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9196);
var state_9236__$1 = state_9236;
var statearr_9283_9335 = state_9236__$1;
(statearr_9283_9335[(2)] = inst_9203);

(statearr_9283_9335[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (16))){
var state_9236__$1 = state_9236;
var statearr_9284_9336 = state_9236__$1;
(statearr_9284_9336[(2)] = true);

(statearr_9284_9336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (38))){
var inst_9226 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
var statearr_9285_9337 = state_9236__$1;
(statearr_9285_9337[(2)] = inst_9226);

(statearr_9285_9337[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (30))){
var inst_9187 = (state_9236[(10)]);
var inst_9196 = (state_9236[(11)]);
var inst_9188 = (state_9236[(13)]);
var inst_9213 = cljs.core.empty_QMARK_.call(null,inst_9187);
var inst_9214 = inst_9188.call(null,inst_9196);
var inst_9215 = cljs.core.not.call(null,inst_9214);
var inst_9216 = ((inst_9213) && (inst_9215));
var state_9236__$1 = state_9236;
var statearr_9286_9338 = state_9236__$1;
(statearr_9286_9338[(2)] = inst_9216);

(statearr_9286_9338[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (10))){
var inst_9138 = (state_9236[(8)]);
var inst_9159 = (state_9236[(2)]);
var inst_9160 = cljs.core.get.call(null,inst_9159,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9161 = cljs.core.get.call(null,inst_9159,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9162 = cljs.core.get.call(null,inst_9159,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9163 = inst_9138;
var state_9236__$1 = (function (){var statearr_9287 = state_9236;
(statearr_9287[(7)] = inst_9163);

(statearr_9287[(16)] = inst_9162);

(statearr_9287[(17)] = inst_9161);

(statearr_9287[(18)] = inst_9160);

return statearr_9287;
})();
var statearr_9288_9339 = state_9236__$1;
(statearr_9288_9339[(2)] = null);

(statearr_9288_9339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (18))){
var inst_9178 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
var statearr_9289_9340 = state_9236__$1;
(statearr_9289_9340[(2)] = inst_9178);

(statearr_9289_9340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (37))){
var state_9236__$1 = state_9236;
var statearr_9290_9341 = state_9236__$1;
(statearr_9290_9341[(2)] = null);

(statearr_9290_9341[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (8))){
var inst_9138 = (state_9236[(8)]);
var inst_9156 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9138);
var state_9236__$1 = state_9236;
var statearr_9291_9342 = state_9236__$1;
(statearr_9291_9342[(2)] = inst_9156);

(statearr_9291_9342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___9296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6232__auto__,c__6387__auto___9296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6233__auto__ = null;
var cljs$core$async$mix_$_state_machine__6233__auto____0 = (function (){
var statearr_9292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9292[(0)] = cljs$core$async$mix_$_state_machine__6233__auto__);

(statearr_9292[(1)] = (1));

return statearr_9292;
});
var cljs$core$async$mix_$_state_machine__6233__auto____1 = (function (state_9236){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_9236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e9293){if((e9293 instanceof Object)){
var ex__6236__auto__ = e9293;
var statearr_9294_9343 = state_9236;
(statearr_9294_9343[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9344 = state_9236;
state_9236 = G__9344;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6233__auto__ = function(state_9236){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6233__auto____1.call(this,state_9236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6233__auto____0;
cljs$core$async$mix_$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6233__auto____1;
return cljs$core$async$mix_$_state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___9296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6389__auto__ = (function (){var statearr_9295 = f__6388__auto__.call(null);
(statearr_9295[(6)] = c__6387__auto___9296);

return statearr_9295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___9296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4210__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p,v,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__9346 = arguments.length;
switch (G__9346) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p);
} else {
var m__4210__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p,v);
} else {
var m__4210__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__9350 = arguments.length;
switch (G__9350) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3920__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3920__auto__,mults){
return (function (p1__9348_SHARP_){
if(cljs.core.truth_(p1__9348_SHARP_.call(null,topic))){
return p1__9348_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9348_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async9351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9351 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9352){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9352 = meta9352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9353,meta9352__$1){
var self__ = this;
var _9353__$1 = this;
return (new cljs.core.async.t_cljs$core$async9351(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9352__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9353){
var self__ = this;
var _9353__$1 = this;
return self__.meta9352;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9351.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9351.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9351.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9351.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9351.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9352","meta9352",1670162508,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9351";

cljs.core.async.t_cljs$core$async9351.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async9351");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9351.
 */
cljs.core.async.__GT_t_cljs$core$async9351 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9351(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9352){
return (new cljs.core.async.t_cljs$core$async9351(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9352));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9351(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6387__auto___9471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___9471,mults,ensure_mult,p){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___9471,mults,ensure_mult,p){
return (function (state_9425){
var state_val_9426 = (state_9425[(1)]);
if((state_val_9426 === (7))){
var inst_9421 = (state_9425[(2)]);
var state_9425__$1 = state_9425;
var statearr_9427_9472 = state_9425__$1;
(statearr_9427_9472[(2)] = inst_9421);

(statearr_9427_9472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (20))){
var state_9425__$1 = state_9425;
var statearr_9428_9473 = state_9425__$1;
(statearr_9428_9473[(2)] = null);

(statearr_9428_9473[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (1))){
var state_9425__$1 = state_9425;
var statearr_9429_9474 = state_9425__$1;
(statearr_9429_9474[(2)] = null);

(statearr_9429_9474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (24))){
var inst_9404 = (state_9425[(7)]);
var inst_9413 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9404);
var state_9425__$1 = state_9425;
var statearr_9430_9475 = state_9425__$1;
(statearr_9430_9475[(2)] = inst_9413);

(statearr_9430_9475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (4))){
var inst_9356 = (state_9425[(8)]);
var inst_9356__$1 = (state_9425[(2)]);
var inst_9357 = (inst_9356__$1 == null);
var state_9425__$1 = (function (){var statearr_9431 = state_9425;
(statearr_9431[(8)] = inst_9356__$1);

return statearr_9431;
})();
if(cljs.core.truth_(inst_9357)){
var statearr_9432_9476 = state_9425__$1;
(statearr_9432_9476[(1)] = (5));

} else {
var statearr_9433_9477 = state_9425__$1;
(statearr_9433_9477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (15))){
var inst_9398 = (state_9425[(2)]);
var state_9425__$1 = state_9425;
var statearr_9434_9478 = state_9425__$1;
(statearr_9434_9478[(2)] = inst_9398);

(statearr_9434_9478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (21))){
var inst_9418 = (state_9425[(2)]);
var state_9425__$1 = (function (){var statearr_9435 = state_9425;
(statearr_9435[(9)] = inst_9418);

return statearr_9435;
})();
var statearr_9436_9479 = state_9425__$1;
(statearr_9436_9479[(2)] = null);

(statearr_9436_9479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (13))){
var inst_9380 = (state_9425[(10)]);
var inst_9382 = cljs.core.chunked_seq_QMARK_.call(null,inst_9380);
var state_9425__$1 = state_9425;
if(inst_9382){
var statearr_9437_9480 = state_9425__$1;
(statearr_9437_9480[(1)] = (16));

} else {
var statearr_9438_9481 = state_9425__$1;
(statearr_9438_9481[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (22))){
var inst_9410 = (state_9425[(2)]);
var state_9425__$1 = state_9425;
if(cljs.core.truth_(inst_9410)){
var statearr_9439_9482 = state_9425__$1;
(statearr_9439_9482[(1)] = (23));

} else {
var statearr_9440_9483 = state_9425__$1;
(statearr_9440_9483[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (6))){
var inst_9406 = (state_9425[(11)]);
var inst_9356 = (state_9425[(8)]);
var inst_9404 = (state_9425[(7)]);
var inst_9404__$1 = topic_fn.call(null,inst_9356);
var inst_9405 = cljs.core.deref.call(null,mults);
var inst_9406__$1 = cljs.core.get.call(null,inst_9405,inst_9404__$1);
var state_9425__$1 = (function (){var statearr_9441 = state_9425;
(statearr_9441[(11)] = inst_9406__$1);

(statearr_9441[(7)] = inst_9404__$1);

return statearr_9441;
})();
if(cljs.core.truth_(inst_9406__$1)){
var statearr_9442_9484 = state_9425__$1;
(statearr_9442_9484[(1)] = (19));

} else {
var statearr_9443_9485 = state_9425__$1;
(statearr_9443_9485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (25))){
var inst_9415 = (state_9425[(2)]);
var state_9425__$1 = state_9425;
var statearr_9444_9486 = state_9425__$1;
(statearr_9444_9486[(2)] = inst_9415);

(statearr_9444_9486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (17))){
var inst_9380 = (state_9425[(10)]);
var inst_9389 = cljs.core.first.call(null,inst_9380);
var inst_9390 = cljs.core.async.muxch_STAR_.call(null,inst_9389);
var inst_9391 = cljs.core.async.close_BANG_.call(null,inst_9390);
var inst_9392 = cljs.core.next.call(null,inst_9380);
var inst_9366 = inst_9392;
var inst_9367 = null;
var inst_9368 = (0);
var inst_9369 = (0);
var state_9425__$1 = (function (){var statearr_9445 = state_9425;
(statearr_9445[(12)] = inst_9366);

(statearr_9445[(13)] = inst_9391);

(statearr_9445[(14)] = inst_9369);

(statearr_9445[(15)] = inst_9367);

(statearr_9445[(16)] = inst_9368);

return statearr_9445;
})();
var statearr_9446_9487 = state_9425__$1;
(statearr_9446_9487[(2)] = null);

(statearr_9446_9487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (3))){
var inst_9423 = (state_9425[(2)]);
var state_9425__$1 = state_9425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9425__$1,inst_9423);
} else {
if((state_val_9426 === (12))){
var inst_9400 = (state_9425[(2)]);
var state_9425__$1 = state_9425;
var statearr_9447_9488 = state_9425__$1;
(statearr_9447_9488[(2)] = inst_9400);

(statearr_9447_9488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (2))){
var state_9425__$1 = state_9425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9425__$1,(4),ch);
} else {
if((state_val_9426 === (23))){
var state_9425__$1 = state_9425;
var statearr_9448_9489 = state_9425__$1;
(statearr_9448_9489[(2)] = null);

(statearr_9448_9489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (19))){
var inst_9406 = (state_9425[(11)]);
var inst_9356 = (state_9425[(8)]);
var inst_9408 = cljs.core.async.muxch_STAR_.call(null,inst_9406);
var state_9425__$1 = state_9425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9425__$1,(22),inst_9408,inst_9356);
} else {
if((state_val_9426 === (11))){
var inst_9366 = (state_9425[(12)]);
var inst_9380 = (state_9425[(10)]);
var inst_9380__$1 = cljs.core.seq.call(null,inst_9366);
var state_9425__$1 = (function (){var statearr_9449 = state_9425;
(statearr_9449[(10)] = inst_9380__$1);

return statearr_9449;
})();
if(inst_9380__$1){
var statearr_9450_9490 = state_9425__$1;
(statearr_9450_9490[(1)] = (13));

} else {
var statearr_9451_9491 = state_9425__$1;
(statearr_9451_9491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (9))){
var inst_9402 = (state_9425[(2)]);
var state_9425__$1 = state_9425;
var statearr_9452_9492 = state_9425__$1;
(statearr_9452_9492[(2)] = inst_9402);

(statearr_9452_9492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (5))){
var inst_9363 = cljs.core.deref.call(null,mults);
var inst_9364 = cljs.core.vals.call(null,inst_9363);
var inst_9365 = cljs.core.seq.call(null,inst_9364);
var inst_9366 = inst_9365;
var inst_9367 = null;
var inst_9368 = (0);
var inst_9369 = (0);
var state_9425__$1 = (function (){var statearr_9453 = state_9425;
(statearr_9453[(12)] = inst_9366);

(statearr_9453[(14)] = inst_9369);

(statearr_9453[(15)] = inst_9367);

(statearr_9453[(16)] = inst_9368);

return statearr_9453;
})();
var statearr_9454_9493 = state_9425__$1;
(statearr_9454_9493[(2)] = null);

(statearr_9454_9493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (14))){
var state_9425__$1 = state_9425;
var statearr_9458_9494 = state_9425__$1;
(statearr_9458_9494[(2)] = null);

(statearr_9458_9494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (16))){
var inst_9380 = (state_9425[(10)]);
var inst_9384 = cljs.core.chunk_first.call(null,inst_9380);
var inst_9385 = cljs.core.chunk_rest.call(null,inst_9380);
var inst_9386 = cljs.core.count.call(null,inst_9384);
var inst_9366 = inst_9385;
var inst_9367 = inst_9384;
var inst_9368 = inst_9386;
var inst_9369 = (0);
var state_9425__$1 = (function (){var statearr_9459 = state_9425;
(statearr_9459[(12)] = inst_9366);

(statearr_9459[(14)] = inst_9369);

(statearr_9459[(15)] = inst_9367);

(statearr_9459[(16)] = inst_9368);

return statearr_9459;
})();
var statearr_9460_9495 = state_9425__$1;
(statearr_9460_9495[(2)] = null);

(statearr_9460_9495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (10))){
var inst_9366 = (state_9425[(12)]);
var inst_9369 = (state_9425[(14)]);
var inst_9367 = (state_9425[(15)]);
var inst_9368 = (state_9425[(16)]);
var inst_9374 = cljs.core._nth.call(null,inst_9367,inst_9369);
var inst_9375 = cljs.core.async.muxch_STAR_.call(null,inst_9374);
var inst_9376 = cljs.core.async.close_BANG_.call(null,inst_9375);
var inst_9377 = (inst_9369 + (1));
var tmp9455 = inst_9366;
var tmp9456 = inst_9367;
var tmp9457 = inst_9368;
var inst_9366__$1 = tmp9455;
var inst_9367__$1 = tmp9456;
var inst_9368__$1 = tmp9457;
var inst_9369__$1 = inst_9377;
var state_9425__$1 = (function (){var statearr_9461 = state_9425;
(statearr_9461[(12)] = inst_9366__$1);

(statearr_9461[(14)] = inst_9369__$1);

(statearr_9461[(15)] = inst_9367__$1);

(statearr_9461[(17)] = inst_9376);

(statearr_9461[(16)] = inst_9368__$1);

return statearr_9461;
})();
var statearr_9462_9496 = state_9425__$1;
(statearr_9462_9496[(2)] = null);

(statearr_9462_9496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (18))){
var inst_9395 = (state_9425[(2)]);
var state_9425__$1 = state_9425;
var statearr_9463_9497 = state_9425__$1;
(statearr_9463_9497[(2)] = inst_9395);

(statearr_9463_9497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9426 === (8))){
var inst_9369 = (state_9425[(14)]);
var inst_9368 = (state_9425[(16)]);
var inst_9371 = (inst_9369 < inst_9368);
var inst_9372 = inst_9371;
var state_9425__$1 = state_9425;
if(cljs.core.truth_(inst_9372)){
var statearr_9464_9498 = state_9425__$1;
(statearr_9464_9498[(1)] = (10));

} else {
var statearr_9465_9499 = state_9425__$1;
(statearr_9465_9499[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___9471,mults,ensure_mult,p))
;
return ((function (switch__6232__auto__,c__6387__auto___9471,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6233__auto__ = null;
var cljs$core$async$state_machine__6233__auto____0 = (function (){
var statearr_9466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9466[(0)] = cljs$core$async$state_machine__6233__auto__);

(statearr_9466[(1)] = (1));

return statearr_9466;
});
var cljs$core$async$state_machine__6233__auto____1 = (function (state_9425){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_9425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e9467){if((e9467 instanceof Object)){
var ex__6236__auto__ = e9467;
var statearr_9468_9500 = state_9425;
(statearr_9468_9500[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9501 = state_9425;
state_9425 = G__9501;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$state_machine__6233__auto__ = function(state_9425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6233__auto____1.call(this,state_9425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6233__auto____0;
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6233__auto____1;
return cljs$core$async$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___9471,mults,ensure_mult,p))
})();
var state__6389__auto__ = (function (){var statearr_9469 = f__6388__auto__.call(null);
(statearr_9469[(6)] = c__6387__auto___9471);

return statearr_9469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___9471,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__9503 = arguments.length;
switch (G__9503) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__9506 = arguments.length;
switch (G__9506) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__9509 = arguments.length;
switch (G__9509) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6387__auto___9576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___9576,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___9576,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9548){
var state_val_9549 = (state_9548[(1)]);
if((state_val_9549 === (7))){
var state_9548__$1 = state_9548;
var statearr_9550_9577 = state_9548__$1;
(statearr_9550_9577[(2)] = null);

(statearr_9550_9577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (1))){
var state_9548__$1 = state_9548;
var statearr_9551_9578 = state_9548__$1;
(statearr_9551_9578[(2)] = null);

(statearr_9551_9578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (4))){
var inst_9512 = (state_9548[(7)]);
var inst_9514 = (inst_9512 < cnt);
var state_9548__$1 = state_9548;
if(cljs.core.truth_(inst_9514)){
var statearr_9552_9579 = state_9548__$1;
(statearr_9552_9579[(1)] = (6));

} else {
var statearr_9553_9580 = state_9548__$1;
(statearr_9553_9580[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (15))){
var inst_9544 = (state_9548[(2)]);
var state_9548__$1 = state_9548;
var statearr_9554_9581 = state_9548__$1;
(statearr_9554_9581[(2)] = inst_9544);

(statearr_9554_9581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (13))){
var inst_9537 = cljs.core.async.close_BANG_.call(null,out);
var state_9548__$1 = state_9548;
var statearr_9555_9582 = state_9548__$1;
(statearr_9555_9582[(2)] = inst_9537);

(statearr_9555_9582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (6))){
var state_9548__$1 = state_9548;
var statearr_9556_9583 = state_9548__$1;
(statearr_9556_9583[(2)] = null);

(statearr_9556_9583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (3))){
var inst_9546 = (state_9548[(2)]);
var state_9548__$1 = state_9548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9548__$1,inst_9546);
} else {
if((state_val_9549 === (12))){
var inst_9534 = (state_9548[(8)]);
var inst_9534__$1 = (state_9548[(2)]);
var inst_9535 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9534__$1);
var state_9548__$1 = (function (){var statearr_9557 = state_9548;
(statearr_9557[(8)] = inst_9534__$1);

return statearr_9557;
})();
if(cljs.core.truth_(inst_9535)){
var statearr_9558_9584 = state_9548__$1;
(statearr_9558_9584[(1)] = (13));

} else {
var statearr_9559_9585 = state_9548__$1;
(statearr_9559_9585[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (2))){
var inst_9511 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9512 = (0);
var state_9548__$1 = (function (){var statearr_9560 = state_9548;
(statearr_9560[(7)] = inst_9512);

(statearr_9560[(9)] = inst_9511);

return statearr_9560;
})();
var statearr_9561_9586 = state_9548__$1;
(statearr_9561_9586[(2)] = null);

(statearr_9561_9586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (11))){
var inst_9512 = (state_9548[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9548,(10),Object,null,(9));
var inst_9521 = chs__$1.call(null,inst_9512);
var inst_9522 = done.call(null,inst_9512);
var inst_9523 = cljs.core.async.take_BANG_.call(null,inst_9521,inst_9522);
var state_9548__$1 = state_9548;
var statearr_9562_9587 = state_9548__$1;
(statearr_9562_9587[(2)] = inst_9523);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9548__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (9))){
var inst_9512 = (state_9548[(7)]);
var inst_9525 = (state_9548[(2)]);
var inst_9526 = (inst_9512 + (1));
var inst_9512__$1 = inst_9526;
var state_9548__$1 = (function (){var statearr_9563 = state_9548;
(statearr_9563[(7)] = inst_9512__$1);

(statearr_9563[(10)] = inst_9525);

return statearr_9563;
})();
var statearr_9564_9588 = state_9548__$1;
(statearr_9564_9588[(2)] = null);

(statearr_9564_9588[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (5))){
var inst_9532 = (state_9548[(2)]);
var state_9548__$1 = (function (){var statearr_9565 = state_9548;
(statearr_9565[(11)] = inst_9532);

return statearr_9565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9548__$1,(12),dchan);
} else {
if((state_val_9549 === (14))){
var inst_9534 = (state_9548[(8)]);
var inst_9539 = cljs.core.apply.call(null,f,inst_9534);
var state_9548__$1 = state_9548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9548__$1,(16),out,inst_9539);
} else {
if((state_val_9549 === (16))){
var inst_9541 = (state_9548[(2)]);
var state_9548__$1 = (function (){var statearr_9566 = state_9548;
(statearr_9566[(12)] = inst_9541);

return statearr_9566;
})();
var statearr_9567_9589 = state_9548__$1;
(statearr_9567_9589[(2)] = null);

(statearr_9567_9589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (10))){
var inst_9516 = (state_9548[(2)]);
var inst_9517 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9548__$1 = (function (){var statearr_9568 = state_9548;
(statearr_9568[(13)] = inst_9516);

return statearr_9568;
})();
var statearr_9569_9590 = state_9548__$1;
(statearr_9569_9590[(2)] = inst_9517);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9548__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9549 === (8))){
var inst_9530 = (state_9548[(2)]);
var state_9548__$1 = state_9548;
var statearr_9570_9591 = state_9548__$1;
(statearr_9570_9591[(2)] = inst_9530);

(statearr_9570_9591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___9576,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6232__auto__,c__6387__auto___9576,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6233__auto__ = null;
var cljs$core$async$state_machine__6233__auto____0 = (function (){
var statearr_9571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9571[(0)] = cljs$core$async$state_machine__6233__auto__);

(statearr_9571[(1)] = (1));

return statearr_9571;
});
var cljs$core$async$state_machine__6233__auto____1 = (function (state_9548){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_9548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e9572){if((e9572 instanceof Object)){
var ex__6236__auto__ = e9572;
var statearr_9573_9592 = state_9548;
(statearr_9573_9592[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9593 = state_9548;
state_9548 = G__9593;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$state_machine__6233__auto__ = function(state_9548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6233__auto____1.call(this,state_9548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6233__auto____0;
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6233__auto____1;
return cljs$core$async$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___9576,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6389__auto__ = (function (){var statearr_9574 = f__6388__auto__.call(null);
(statearr_9574[(6)] = c__6387__auto___9576);

return statearr_9574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___9576,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__9596 = arguments.length;
switch (G__9596) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6387__auto___9650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___9650,out){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___9650,out){
return (function (state_9628){
var state_val_9629 = (state_9628[(1)]);
if((state_val_9629 === (7))){
var inst_9607 = (state_9628[(7)]);
var inst_9608 = (state_9628[(8)]);
var inst_9607__$1 = (state_9628[(2)]);
var inst_9608__$1 = cljs.core.nth.call(null,inst_9607__$1,(0),null);
var inst_9609 = cljs.core.nth.call(null,inst_9607__$1,(1),null);
var inst_9610 = (inst_9608__$1 == null);
var state_9628__$1 = (function (){var statearr_9630 = state_9628;
(statearr_9630[(7)] = inst_9607__$1);

(statearr_9630[(8)] = inst_9608__$1);

(statearr_9630[(9)] = inst_9609);

return statearr_9630;
})();
if(cljs.core.truth_(inst_9610)){
var statearr_9631_9651 = state_9628__$1;
(statearr_9631_9651[(1)] = (8));

} else {
var statearr_9632_9652 = state_9628__$1;
(statearr_9632_9652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9629 === (1))){
var inst_9597 = cljs.core.vec.call(null,chs);
var inst_9598 = inst_9597;
var state_9628__$1 = (function (){var statearr_9633 = state_9628;
(statearr_9633[(10)] = inst_9598);

return statearr_9633;
})();
var statearr_9634_9653 = state_9628__$1;
(statearr_9634_9653[(2)] = null);

(statearr_9634_9653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9629 === (4))){
var inst_9598 = (state_9628[(10)]);
var state_9628__$1 = state_9628;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9628__$1,(7),inst_9598);
} else {
if((state_val_9629 === (6))){
var inst_9624 = (state_9628[(2)]);
var state_9628__$1 = state_9628;
var statearr_9635_9654 = state_9628__$1;
(statearr_9635_9654[(2)] = inst_9624);

(statearr_9635_9654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9629 === (3))){
var inst_9626 = (state_9628[(2)]);
var state_9628__$1 = state_9628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9628__$1,inst_9626);
} else {
if((state_val_9629 === (2))){
var inst_9598 = (state_9628[(10)]);
var inst_9600 = cljs.core.count.call(null,inst_9598);
var inst_9601 = (inst_9600 > (0));
var state_9628__$1 = state_9628;
if(cljs.core.truth_(inst_9601)){
var statearr_9637_9655 = state_9628__$1;
(statearr_9637_9655[(1)] = (4));

} else {
var statearr_9638_9656 = state_9628__$1;
(statearr_9638_9656[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9629 === (11))){
var inst_9598 = (state_9628[(10)]);
var inst_9617 = (state_9628[(2)]);
var tmp9636 = inst_9598;
var inst_9598__$1 = tmp9636;
var state_9628__$1 = (function (){var statearr_9639 = state_9628;
(statearr_9639[(11)] = inst_9617);

(statearr_9639[(10)] = inst_9598__$1);

return statearr_9639;
})();
var statearr_9640_9657 = state_9628__$1;
(statearr_9640_9657[(2)] = null);

(statearr_9640_9657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9629 === (9))){
var inst_9608 = (state_9628[(8)]);
var state_9628__$1 = state_9628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9628__$1,(11),out,inst_9608);
} else {
if((state_val_9629 === (5))){
var inst_9622 = cljs.core.async.close_BANG_.call(null,out);
var state_9628__$1 = state_9628;
var statearr_9641_9658 = state_9628__$1;
(statearr_9641_9658[(2)] = inst_9622);

(statearr_9641_9658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9629 === (10))){
var inst_9620 = (state_9628[(2)]);
var state_9628__$1 = state_9628;
var statearr_9642_9659 = state_9628__$1;
(statearr_9642_9659[(2)] = inst_9620);

(statearr_9642_9659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9629 === (8))){
var inst_9607 = (state_9628[(7)]);
var inst_9608 = (state_9628[(8)]);
var inst_9609 = (state_9628[(9)]);
var inst_9598 = (state_9628[(10)]);
var inst_9612 = (function (){var cs = inst_9598;
var vec__9603 = inst_9607;
var v = inst_9608;
var c = inst_9609;
return ((function (cs,vec__9603,v,c,inst_9607,inst_9608,inst_9609,inst_9598,state_val_9629,c__6387__auto___9650,out){
return (function (p1__9594_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9594_SHARP_);
});
;})(cs,vec__9603,v,c,inst_9607,inst_9608,inst_9609,inst_9598,state_val_9629,c__6387__auto___9650,out))
})();
var inst_9613 = cljs.core.filterv.call(null,inst_9612,inst_9598);
var inst_9598__$1 = inst_9613;
var state_9628__$1 = (function (){var statearr_9643 = state_9628;
(statearr_9643[(10)] = inst_9598__$1);

return statearr_9643;
})();
var statearr_9644_9660 = state_9628__$1;
(statearr_9644_9660[(2)] = null);

(statearr_9644_9660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___9650,out))
;
return ((function (switch__6232__auto__,c__6387__auto___9650,out){
return (function() {
var cljs$core$async$state_machine__6233__auto__ = null;
var cljs$core$async$state_machine__6233__auto____0 = (function (){
var statearr_9645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9645[(0)] = cljs$core$async$state_machine__6233__auto__);

(statearr_9645[(1)] = (1));

return statearr_9645;
});
var cljs$core$async$state_machine__6233__auto____1 = (function (state_9628){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_9628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e9646){if((e9646 instanceof Object)){
var ex__6236__auto__ = e9646;
var statearr_9647_9661 = state_9628;
(statearr_9647_9661[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9662 = state_9628;
state_9628 = G__9662;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$state_machine__6233__auto__ = function(state_9628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6233__auto____1.call(this,state_9628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6233__auto____0;
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6233__auto____1;
return cljs$core$async$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___9650,out))
})();
var state__6389__auto__ = (function (){var statearr_9648 = f__6388__auto__.call(null);
(statearr_9648[(6)] = c__6387__auto___9650);

return statearr_9648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___9650,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__9664 = arguments.length;
switch (G__9664) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6387__auto___9709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___9709,out){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___9709,out){
return (function (state_9688){
var state_val_9689 = (state_9688[(1)]);
if((state_val_9689 === (7))){
var inst_9670 = (state_9688[(7)]);
var inst_9670__$1 = (state_9688[(2)]);
var inst_9671 = (inst_9670__$1 == null);
var inst_9672 = cljs.core.not.call(null,inst_9671);
var state_9688__$1 = (function (){var statearr_9690 = state_9688;
(statearr_9690[(7)] = inst_9670__$1);

return statearr_9690;
})();
if(inst_9672){
var statearr_9691_9710 = state_9688__$1;
(statearr_9691_9710[(1)] = (8));

} else {
var statearr_9692_9711 = state_9688__$1;
(statearr_9692_9711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (1))){
var inst_9665 = (0);
var state_9688__$1 = (function (){var statearr_9693 = state_9688;
(statearr_9693[(8)] = inst_9665);

return statearr_9693;
})();
var statearr_9694_9712 = state_9688__$1;
(statearr_9694_9712[(2)] = null);

(statearr_9694_9712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (4))){
var state_9688__$1 = state_9688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9688__$1,(7),ch);
} else {
if((state_val_9689 === (6))){
var inst_9683 = (state_9688[(2)]);
var state_9688__$1 = state_9688;
var statearr_9695_9713 = state_9688__$1;
(statearr_9695_9713[(2)] = inst_9683);

(statearr_9695_9713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (3))){
var inst_9685 = (state_9688[(2)]);
var inst_9686 = cljs.core.async.close_BANG_.call(null,out);
var state_9688__$1 = (function (){var statearr_9696 = state_9688;
(statearr_9696[(9)] = inst_9685);

return statearr_9696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9688__$1,inst_9686);
} else {
if((state_val_9689 === (2))){
var inst_9665 = (state_9688[(8)]);
var inst_9667 = (inst_9665 < n);
var state_9688__$1 = state_9688;
if(cljs.core.truth_(inst_9667)){
var statearr_9697_9714 = state_9688__$1;
(statearr_9697_9714[(1)] = (4));

} else {
var statearr_9698_9715 = state_9688__$1;
(statearr_9698_9715[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (11))){
var inst_9665 = (state_9688[(8)]);
var inst_9675 = (state_9688[(2)]);
var inst_9676 = (inst_9665 + (1));
var inst_9665__$1 = inst_9676;
var state_9688__$1 = (function (){var statearr_9699 = state_9688;
(statearr_9699[(8)] = inst_9665__$1);

(statearr_9699[(10)] = inst_9675);

return statearr_9699;
})();
var statearr_9700_9716 = state_9688__$1;
(statearr_9700_9716[(2)] = null);

(statearr_9700_9716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (9))){
var state_9688__$1 = state_9688;
var statearr_9701_9717 = state_9688__$1;
(statearr_9701_9717[(2)] = null);

(statearr_9701_9717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (5))){
var state_9688__$1 = state_9688;
var statearr_9702_9718 = state_9688__$1;
(statearr_9702_9718[(2)] = null);

(statearr_9702_9718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (10))){
var inst_9680 = (state_9688[(2)]);
var state_9688__$1 = state_9688;
var statearr_9703_9719 = state_9688__$1;
(statearr_9703_9719[(2)] = inst_9680);

(statearr_9703_9719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9689 === (8))){
var inst_9670 = (state_9688[(7)]);
var state_9688__$1 = state_9688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9688__$1,(11),out,inst_9670);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___9709,out))
;
return ((function (switch__6232__auto__,c__6387__auto___9709,out){
return (function() {
var cljs$core$async$state_machine__6233__auto__ = null;
var cljs$core$async$state_machine__6233__auto____0 = (function (){
var statearr_9704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9704[(0)] = cljs$core$async$state_machine__6233__auto__);

(statearr_9704[(1)] = (1));

return statearr_9704;
});
var cljs$core$async$state_machine__6233__auto____1 = (function (state_9688){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_9688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e9705){if((e9705 instanceof Object)){
var ex__6236__auto__ = e9705;
var statearr_9706_9720 = state_9688;
(statearr_9706_9720[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9721 = state_9688;
state_9688 = G__9721;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$state_machine__6233__auto__ = function(state_9688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6233__auto____1.call(this,state_9688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6233__auto____0;
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6233__auto____1;
return cljs$core$async$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___9709,out))
})();
var state__6389__auto__ = (function (){var statearr_9707 = f__6388__auto__.call(null);
(statearr_9707[(6)] = c__6387__auto___9709);

return statearr_9707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___9709,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9723 = (function (f,ch,meta9724){
this.f = f;
this.ch = ch;
this.meta9724 = meta9724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9725,meta9724__$1){
var self__ = this;
var _9725__$1 = this;
return (new cljs.core.async.t_cljs$core$async9723(self__.f,self__.ch,meta9724__$1));
});

cljs.core.async.t_cljs$core$async9723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9725){
var self__ = this;
var _9725__$1 = this;
return self__.meta9724;
});

cljs.core.async.t_cljs$core$async9723.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9723.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9723.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9723.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9723.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9726 = (function (f,ch,meta9724,_,fn1,meta9727){
this.f = f;
this.ch = ch;
this.meta9724 = meta9724;
this._ = _;
this.fn1 = fn1;
this.meta9727 = meta9727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9728,meta9727__$1){
var self__ = this;
var _9728__$1 = this;
return (new cljs.core.async.t_cljs$core$async9726(self__.f,self__.ch,self__.meta9724,self__._,self__.fn1,meta9727__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9728){
var self__ = this;
var _9728__$1 = this;
return self__.meta9727;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9726.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9726.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9722_SHARP_){
return f1.call(null,(((p1__9722_SHARP_ == null))?null:self__.f.call(null,p1__9722_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9726.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9724","meta9724",562529316,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9723","cljs.core.async/t_cljs$core$async9723",-433526189,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9727","meta9727",-1444432524,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9726";

cljs.core.async.t_cljs$core$async9726.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async9726");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9726.
 */
cljs.core.async.__GT_t_cljs$core$async9726 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9726(f__$1,ch__$1,meta9724__$1,___$2,fn1__$1,meta9727){
return (new cljs.core.async.t_cljs$core$async9726(f__$1,ch__$1,meta9724__$1,___$2,fn1__$1,meta9727));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9726(self__.f,self__.ch,self__.meta9724,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3909__auto__ = ret;
if(cljs.core.truth_(and__3909__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3909__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9723.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9723.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9724","meta9724",562529316,null)], null);
});

cljs.core.async.t_cljs$core$async9723.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9723";

cljs.core.async.t_cljs$core$async9723.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async9723");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9723.
 */
cljs.core.async.__GT_t_cljs$core$async9723 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9723(f__$1,ch__$1,meta9724){
return (new cljs.core.async.t_cljs$core$async9723(f__$1,ch__$1,meta9724));
});

}

return (new cljs.core.async.t_cljs$core$async9723(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9729 = (function (f,ch,meta9730){
this.f = f;
this.ch = ch;
this.meta9730 = meta9730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9731,meta9730__$1){
var self__ = this;
var _9731__$1 = this;
return (new cljs.core.async.t_cljs$core$async9729(self__.f,self__.ch,meta9730__$1));
});

cljs.core.async.t_cljs$core$async9729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9731){
var self__ = this;
var _9731__$1 = this;
return self__.meta9730;
});

cljs.core.async.t_cljs$core$async9729.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9729.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9729.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9729.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9729.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9729.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9730","meta9730",1304615003,null)], null);
});

cljs.core.async.t_cljs$core$async9729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9729";

cljs.core.async.t_cljs$core$async9729.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async9729");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9729.
 */
cljs.core.async.__GT_t_cljs$core$async9729 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9729(f__$1,ch__$1,meta9730){
return (new cljs.core.async.t_cljs$core$async9729(f__$1,ch__$1,meta9730));
});

}

return (new cljs.core.async.t_cljs$core$async9729(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9732 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9732 = (function (p,ch,meta9733){
this.p = p;
this.ch = ch;
this.meta9733 = meta9733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9734,meta9733__$1){
var self__ = this;
var _9734__$1 = this;
return (new cljs.core.async.t_cljs$core$async9732(self__.p,self__.ch,meta9733__$1));
});

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9734){
var self__ = this;
var _9734__$1 = this;
return self__.meta9733;
});

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9733","meta9733",673987940,null)], null);
});

cljs.core.async.t_cljs$core$async9732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9732";

cljs.core.async.t_cljs$core$async9732.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async9732");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9732.
 */
cljs.core.async.__GT_t_cljs$core$async9732 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9732(p__$1,ch__$1,meta9733){
return (new cljs.core.async.t_cljs$core$async9732(p__$1,ch__$1,meta9733));
});

}

return (new cljs.core.async.t_cljs$core$async9732(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__9736 = arguments.length;
switch (G__9736) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6387__auto___9776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___9776,out){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___9776,out){
return (function (state_9757){
var state_val_9758 = (state_9757[(1)]);
if((state_val_9758 === (7))){
var inst_9753 = (state_9757[(2)]);
var state_9757__$1 = state_9757;
var statearr_9759_9777 = state_9757__$1;
(statearr_9759_9777[(2)] = inst_9753);

(statearr_9759_9777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9758 === (1))){
var state_9757__$1 = state_9757;
var statearr_9760_9778 = state_9757__$1;
(statearr_9760_9778[(2)] = null);

(statearr_9760_9778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9758 === (4))){
var inst_9739 = (state_9757[(7)]);
var inst_9739__$1 = (state_9757[(2)]);
var inst_9740 = (inst_9739__$1 == null);
var state_9757__$1 = (function (){var statearr_9761 = state_9757;
(statearr_9761[(7)] = inst_9739__$1);

return statearr_9761;
})();
if(cljs.core.truth_(inst_9740)){
var statearr_9762_9779 = state_9757__$1;
(statearr_9762_9779[(1)] = (5));

} else {
var statearr_9763_9780 = state_9757__$1;
(statearr_9763_9780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9758 === (6))){
var inst_9739 = (state_9757[(7)]);
var inst_9744 = p.call(null,inst_9739);
var state_9757__$1 = state_9757;
if(cljs.core.truth_(inst_9744)){
var statearr_9764_9781 = state_9757__$1;
(statearr_9764_9781[(1)] = (8));

} else {
var statearr_9765_9782 = state_9757__$1;
(statearr_9765_9782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9758 === (3))){
var inst_9755 = (state_9757[(2)]);
var state_9757__$1 = state_9757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9757__$1,inst_9755);
} else {
if((state_val_9758 === (2))){
var state_9757__$1 = state_9757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9757__$1,(4),ch);
} else {
if((state_val_9758 === (11))){
var inst_9747 = (state_9757[(2)]);
var state_9757__$1 = state_9757;
var statearr_9766_9783 = state_9757__$1;
(statearr_9766_9783[(2)] = inst_9747);

(statearr_9766_9783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9758 === (9))){
var state_9757__$1 = state_9757;
var statearr_9767_9784 = state_9757__$1;
(statearr_9767_9784[(2)] = null);

(statearr_9767_9784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9758 === (5))){
var inst_9742 = cljs.core.async.close_BANG_.call(null,out);
var state_9757__$1 = state_9757;
var statearr_9768_9785 = state_9757__$1;
(statearr_9768_9785[(2)] = inst_9742);

(statearr_9768_9785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9758 === (10))){
var inst_9750 = (state_9757[(2)]);
var state_9757__$1 = (function (){var statearr_9769 = state_9757;
(statearr_9769[(8)] = inst_9750);

return statearr_9769;
})();
var statearr_9770_9786 = state_9757__$1;
(statearr_9770_9786[(2)] = null);

(statearr_9770_9786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9758 === (8))){
var inst_9739 = (state_9757[(7)]);
var state_9757__$1 = state_9757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9757__$1,(11),out,inst_9739);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___9776,out))
;
return ((function (switch__6232__auto__,c__6387__auto___9776,out){
return (function() {
var cljs$core$async$state_machine__6233__auto__ = null;
var cljs$core$async$state_machine__6233__auto____0 = (function (){
var statearr_9771 = [null,null,null,null,null,null,null,null,null];
(statearr_9771[(0)] = cljs$core$async$state_machine__6233__auto__);

(statearr_9771[(1)] = (1));

return statearr_9771;
});
var cljs$core$async$state_machine__6233__auto____1 = (function (state_9757){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_9757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e9772){if((e9772 instanceof Object)){
var ex__6236__auto__ = e9772;
var statearr_9773_9787 = state_9757;
(statearr_9773_9787[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9788 = state_9757;
state_9757 = G__9788;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$state_machine__6233__auto__ = function(state_9757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6233__auto____1.call(this,state_9757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6233__auto____0;
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6233__auto____1;
return cljs$core$async$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___9776,out))
})();
var state__6389__auto__ = (function (){var statearr_9774 = f__6388__auto__.call(null);
(statearr_9774[(6)] = c__6387__auto___9776);

return statearr_9774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___9776,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__9790 = arguments.length;
switch (G__9790) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto__){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto__){
return (function (state_9853){
var state_val_9854 = (state_9853[(1)]);
if((state_val_9854 === (7))){
var inst_9849 = (state_9853[(2)]);
var state_9853__$1 = state_9853;
var statearr_9855_9893 = state_9853__$1;
(statearr_9855_9893[(2)] = inst_9849);

(statearr_9855_9893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (20))){
var inst_9819 = (state_9853[(7)]);
var inst_9830 = (state_9853[(2)]);
var inst_9831 = cljs.core.next.call(null,inst_9819);
var inst_9805 = inst_9831;
var inst_9806 = null;
var inst_9807 = (0);
var inst_9808 = (0);
var state_9853__$1 = (function (){var statearr_9856 = state_9853;
(statearr_9856[(8)] = inst_9807);

(statearr_9856[(9)] = inst_9805);

(statearr_9856[(10)] = inst_9830);

(statearr_9856[(11)] = inst_9806);

(statearr_9856[(12)] = inst_9808);

return statearr_9856;
})();
var statearr_9857_9894 = state_9853__$1;
(statearr_9857_9894[(2)] = null);

(statearr_9857_9894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (1))){
var state_9853__$1 = state_9853;
var statearr_9858_9895 = state_9853__$1;
(statearr_9858_9895[(2)] = null);

(statearr_9858_9895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (4))){
var inst_9794 = (state_9853[(13)]);
var inst_9794__$1 = (state_9853[(2)]);
var inst_9795 = (inst_9794__$1 == null);
var state_9853__$1 = (function (){var statearr_9859 = state_9853;
(statearr_9859[(13)] = inst_9794__$1);

return statearr_9859;
})();
if(cljs.core.truth_(inst_9795)){
var statearr_9860_9896 = state_9853__$1;
(statearr_9860_9896[(1)] = (5));

} else {
var statearr_9861_9897 = state_9853__$1;
(statearr_9861_9897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (15))){
var state_9853__$1 = state_9853;
var statearr_9865_9898 = state_9853__$1;
(statearr_9865_9898[(2)] = null);

(statearr_9865_9898[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (21))){
var state_9853__$1 = state_9853;
var statearr_9866_9899 = state_9853__$1;
(statearr_9866_9899[(2)] = null);

(statearr_9866_9899[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (13))){
var inst_9807 = (state_9853[(8)]);
var inst_9805 = (state_9853[(9)]);
var inst_9806 = (state_9853[(11)]);
var inst_9808 = (state_9853[(12)]);
var inst_9815 = (state_9853[(2)]);
var inst_9816 = (inst_9808 + (1));
var tmp9862 = inst_9807;
var tmp9863 = inst_9805;
var tmp9864 = inst_9806;
var inst_9805__$1 = tmp9863;
var inst_9806__$1 = tmp9864;
var inst_9807__$1 = tmp9862;
var inst_9808__$1 = inst_9816;
var state_9853__$1 = (function (){var statearr_9867 = state_9853;
(statearr_9867[(8)] = inst_9807__$1);

(statearr_9867[(9)] = inst_9805__$1);

(statearr_9867[(11)] = inst_9806__$1);

(statearr_9867[(14)] = inst_9815);

(statearr_9867[(12)] = inst_9808__$1);

return statearr_9867;
})();
var statearr_9868_9900 = state_9853__$1;
(statearr_9868_9900[(2)] = null);

(statearr_9868_9900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (22))){
var state_9853__$1 = state_9853;
var statearr_9869_9901 = state_9853__$1;
(statearr_9869_9901[(2)] = null);

(statearr_9869_9901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (6))){
var inst_9794 = (state_9853[(13)]);
var inst_9803 = f.call(null,inst_9794);
var inst_9804 = cljs.core.seq.call(null,inst_9803);
var inst_9805 = inst_9804;
var inst_9806 = null;
var inst_9807 = (0);
var inst_9808 = (0);
var state_9853__$1 = (function (){var statearr_9870 = state_9853;
(statearr_9870[(8)] = inst_9807);

(statearr_9870[(9)] = inst_9805);

(statearr_9870[(11)] = inst_9806);

(statearr_9870[(12)] = inst_9808);

return statearr_9870;
})();
var statearr_9871_9902 = state_9853__$1;
(statearr_9871_9902[(2)] = null);

(statearr_9871_9902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (17))){
var inst_9819 = (state_9853[(7)]);
var inst_9823 = cljs.core.chunk_first.call(null,inst_9819);
var inst_9824 = cljs.core.chunk_rest.call(null,inst_9819);
var inst_9825 = cljs.core.count.call(null,inst_9823);
var inst_9805 = inst_9824;
var inst_9806 = inst_9823;
var inst_9807 = inst_9825;
var inst_9808 = (0);
var state_9853__$1 = (function (){var statearr_9872 = state_9853;
(statearr_9872[(8)] = inst_9807);

(statearr_9872[(9)] = inst_9805);

(statearr_9872[(11)] = inst_9806);

(statearr_9872[(12)] = inst_9808);

return statearr_9872;
})();
var statearr_9873_9903 = state_9853__$1;
(statearr_9873_9903[(2)] = null);

(statearr_9873_9903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (3))){
var inst_9851 = (state_9853[(2)]);
var state_9853__$1 = state_9853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9853__$1,inst_9851);
} else {
if((state_val_9854 === (12))){
var inst_9839 = (state_9853[(2)]);
var state_9853__$1 = state_9853;
var statearr_9874_9904 = state_9853__$1;
(statearr_9874_9904[(2)] = inst_9839);

(statearr_9874_9904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (2))){
var state_9853__$1 = state_9853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9853__$1,(4),in$);
} else {
if((state_val_9854 === (23))){
var inst_9847 = (state_9853[(2)]);
var state_9853__$1 = state_9853;
var statearr_9875_9905 = state_9853__$1;
(statearr_9875_9905[(2)] = inst_9847);

(statearr_9875_9905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (19))){
var inst_9834 = (state_9853[(2)]);
var state_9853__$1 = state_9853;
var statearr_9876_9906 = state_9853__$1;
(statearr_9876_9906[(2)] = inst_9834);

(statearr_9876_9906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (11))){
var inst_9805 = (state_9853[(9)]);
var inst_9819 = (state_9853[(7)]);
var inst_9819__$1 = cljs.core.seq.call(null,inst_9805);
var state_9853__$1 = (function (){var statearr_9877 = state_9853;
(statearr_9877[(7)] = inst_9819__$1);

return statearr_9877;
})();
if(inst_9819__$1){
var statearr_9878_9907 = state_9853__$1;
(statearr_9878_9907[(1)] = (14));

} else {
var statearr_9879_9908 = state_9853__$1;
(statearr_9879_9908[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (9))){
var inst_9841 = (state_9853[(2)]);
var inst_9842 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9853__$1 = (function (){var statearr_9880 = state_9853;
(statearr_9880[(15)] = inst_9841);

return statearr_9880;
})();
if(cljs.core.truth_(inst_9842)){
var statearr_9881_9909 = state_9853__$1;
(statearr_9881_9909[(1)] = (21));

} else {
var statearr_9882_9910 = state_9853__$1;
(statearr_9882_9910[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (5))){
var inst_9797 = cljs.core.async.close_BANG_.call(null,out);
var state_9853__$1 = state_9853;
var statearr_9883_9911 = state_9853__$1;
(statearr_9883_9911[(2)] = inst_9797);

(statearr_9883_9911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (14))){
var inst_9819 = (state_9853[(7)]);
var inst_9821 = cljs.core.chunked_seq_QMARK_.call(null,inst_9819);
var state_9853__$1 = state_9853;
if(inst_9821){
var statearr_9884_9912 = state_9853__$1;
(statearr_9884_9912[(1)] = (17));

} else {
var statearr_9885_9913 = state_9853__$1;
(statearr_9885_9913[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (16))){
var inst_9837 = (state_9853[(2)]);
var state_9853__$1 = state_9853;
var statearr_9886_9914 = state_9853__$1;
(statearr_9886_9914[(2)] = inst_9837);

(statearr_9886_9914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9854 === (10))){
var inst_9806 = (state_9853[(11)]);
var inst_9808 = (state_9853[(12)]);
var inst_9813 = cljs.core._nth.call(null,inst_9806,inst_9808);
var state_9853__$1 = state_9853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9853__$1,(13),out,inst_9813);
} else {
if((state_val_9854 === (18))){
var inst_9819 = (state_9853[(7)]);
var inst_9828 = cljs.core.first.call(null,inst_9819);
var state_9853__$1 = state_9853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9853__$1,(20),out,inst_9828);
} else {
if((state_val_9854 === (8))){
var inst_9807 = (state_9853[(8)]);
var inst_9808 = (state_9853[(12)]);
var inst_9810 = (inst_9808 < inst_9807);
var inst_9811 = inst_9810;
var state_9853__$1 = state_9853;
if(cljs.core.truth_(inst_9811)){
var statearr_9887_9915 = state_9853__$1;
(statearr_9887_9915[(1)] = (10));

} else {
var statearr_9888_9916 = state_9853__$1;
(statearr_9888_9916[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto__))
;
return ((function (switch__6232__auto__,c__6387__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6233__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6233__auto____0 = (function (){
var statearr_9889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9889[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6233__auto__);

(statearr_9889[(1)] = (1));

return statearr_9889;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6233__auto____1 = (function (state_9853){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_9853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e9890){if((e9890 instanceof Object)){
var ex__6236__auto__ = e9890;
var statearr_9891_9917 = state_9853;
(statearr_9891_9917[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9918 = state_9853;
state_9853 = G__9918;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6233__auto__ = function(state_9853){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6233__auto____1.call(this,state_9853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6233__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6233__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto__))
})();
var state__6389__auto__ = (function (){var statearr_9892 = f__6388__auto__.call(null);
(statearr_9892[(6)] = c__6387__auto__);

return statearr_9892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto__))
);

return c__6387__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__9920 = arguments.length;
switch (G__9920) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__9923 = arguments.length;
switch (G__9923) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__9926 = arguments.length;
switch (G__9926) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6387__auto___9973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___9973,out){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___9973,out){
return (function (state_9950){
var state_val_9951 = (state_9950[(1)]);
if((state_val_9951 === (7))){
var inst_9945 = (state_9950[(2)]);
var state_9950__$1 = state_9950;
var statearr_9952_9974 = state_9950__$1;
(statearr_9952_9974[(2)] = inst_9945);

(statearr_9952_9974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (1))){
var inst_9927 = null;
var state_9950__$1 = (function (){var statearr_9953 = state_9950;
(statearr_9953[(7)] = inst_9927);

return statearr_9953;
})();
var statearr_9954_9975 = state_9950__$1;
(statearr_9954_9975[(2)] = null);

(statearr_9954_9975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (4))){
var inst_9930 = (state_9950[(8)]);
var inst_9930__$1 = (state_9950[(2)]);
var inst_9931 = (inst_9930__$1 == null);
var inst_9932 = cljs.core.not.call(null,inst_9931);
var state_9950__$1 = (function (){var statearr_9955 = state_9950;
(statearr_9955[(8)] = inst_9930__$1);

return statearr_9955;
})();
if(inst_9932){
var statearr_9956_9976 = state_9950__$1;
(statearr_9956_9976[(1)] = (5));

} else {
var statearr_9957_9977 = state_9950__$1;
(statearr_9957_9977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (6))){
var state_9950__$1 = state_9950;
var statearr_9958_9978 = state_9950__$1;
(statearr_9958_9978[(2)] = null);

(statearr_9958_9978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (3))){
var inst_9947 = (state_9950[(2)]);
var inst_9948 = cljs.core.async.close_BANG_.call(null,out);
var state_9950__$1 = (function (){var statearr_9959 = state_9950;
(statearr_9959[(9)] = inst_9947);

return statearr_9959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9950__$1,inst_9948);
} else {
if((state_val_9951 === (2))){
var state_9950__$1 = state_9950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9950__$1,(4),ch);
} else {
if((state_val_9951 === (11))){
var inst_9930 = (state_9950[(8)]);
var inst_9939 = (state_9950[(2)]);
var inst_9927 = inst_9930;
var state_9950__$1 = (function (){var statearr_9960 = state_9950;
(statearr_9960[(7)] = inst_9927);

(statearr_9960[(10)] = inst_9939);

return statearr_9960;
})();
var statearr_9961_9979 = state_9950__$1;
(statearr_9961_9979[(2)] = null);

(statearr_9961_9979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (9))){
var inst_9930 = (state_9950[(8)]);
var state_9950__$1 = state_9950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9950__$1,(11),out,inst_9930);
} else {
if((state_val_9951 === (5))){
var inst_9930 = (state_9950[(8)]);
var inst_9927 = (state_9950[(7)]);
var inst_9934 = cljs.core._EQ_.call(null,inst_9930,inst_9927);
var state_9950__$1 = state_9950;
if(inst_9934){
var statearr_9963_9980 = state_9950__$1;
(statearr_9963_9980[(1)] = (8));

} else {
var statearr_9964_9981 = state_9950__$1;
(statearr_9964_9981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (10))){
var inst_9942 = (state_9950[(2)]);
var state_9950__$1 = state_9950;
var statearr_9965_9982 = state_9950__$1;
(statearr_9965_9982[(2)] = inst_9942);

(statearr_9965_9982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (8))){
var inst_9927 = (state_9950[(7)]);
var tmp9962 = inst_9927;
var inst_9927__$1 = tmp9962;
var state_9950__$1 = (function (){var statearr_9966 = state_9950;
(statearr_9966[(7)] = inst_9927__$1);

return statearr_9966;
})();
var statearr_9967_9983 = state_9950__$1;
(statearr_9967_9983[(2)] = null);

(statearr_9967_9983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___9973,out))
;
return ((function (switch__6232__auto__,c__6387__auto___9973,out){
return (function() {
var cljs$core$async$state_machine__6233__auto__ = null;
var cljs$core$async$state_machine__6233__auto____0 = (function (){
var statearr_9968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9968[(0)] = cljs$core$async$state_machine__6233__auto__);

(statearr_9968[(1)] = (1));

return statearr_9968;
});
var cljs$core$async$state_machine__6233__auto____1 = (function (state_9950){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_9950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e9969){if((e9969 instanceof Object)){
var ex__6236__auto__ = e9969;
var statearr_9970_9984 = state_9950;
(statearr_9970_9984[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9985 = state_9950;
state_9950 = G__9985;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$state_machine__6233__auto__ = function(state_9950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6233__auto____1.call(this,state_9950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6233__auto____0;
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6233__auto____1;
return cljs$core$async$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___9973,out))
})();
var state__6389__auto__ = (function (){var statearr_9971 = f__6388__auto__.call(null);
(statearr_9971[(6)] = c__6387__auto___9973);

return statearr_9971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___9973,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__9987 = arguments.length;
switch (G__9987) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6387__auto___10053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___10053,out){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___10053,out){
return (function (state_10025){
var state_val_10026 = (state_10025[(1)]);
if((state_val_10026 === (7))){
var inst_10021 = (state_10025[(2)]);
var state_10025__$1 = state_10025;
var statearr_10027_10054 = state_10025__$1;
(statearr_10027_10054[(2)] = inst_10021);

(statearr_10027_10054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10026 === (1))){
var inst_9988 = (new Array(n));
var inst_9989 = inst_9988;
var inst_9990 = (0);
var state_10025__$1 = (function (){var statearr_10028 = state_10025;
(statearr_10028[(7)] = inst_9989);

(statearr_10028[(8)] = inst_9990);

return statearr_10028;
})();
var statearr_10029_10055 = state_10025__$1;
(statearr_10029_10055[(2)] = null);

(statearr_10029_10055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10026 === (4))){
var inst_9993 = (state_10025[(9)]);
var inst_9993__$1 = (state_10025[(2)]);
var inst_9994 = (inst_9993__$1 == null);
var inst_9995 = cljs.core.not.call(null,inst_9994);
var state_10025__$1 = (function (){var statearr_10030 = state_10025;
(statearr_10030[(9)] = inst_9993__$1);

return statearr_10030;
})();
if(inst_9995){
var statearr_10031_10056 = state_10025__$1;
(statearr_10031_10056[(1)] = (5));

} else {
var statearr_10032_10057 = state_10025__$1;
(statearr_10032_10057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10026 === (15))){
var inst_10015 = (state_10025[(2)]);
var state_10025__$1 = state_10025;
var statearr_10033_10058 = state_10025__$1;
(statearr_10033_10058[(2)] = inst_10015);

(statearr_10033_10058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10026 === (13))){
var state_10025__$1 = state_10025;
var statearr_10034_10059 = state_10025__$1;
(statearr_10034_10059[(2)] = null);

(statearr_10034_10059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10026 === (6))){
var inst_9990 = (state_10025[(8)]);
var inst_10011 = (inst_9990 > (0));
var state_10025__$1 = state_10025;
if(cljs.core.truth_(inst_10011)){
var statearr_10035_10060 = state_10025__$1;
(statearr_10035_10060[(1)] = (12));

} else {
var statearr_10036_10061 = state_10025__$1;
(statearr_10036_10061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10026 === (3))){
var inst_10023 = (state_10025[(2)]);
var state_10025__$1 = state_10025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10025__$1,inst_10023);
} else {
if((state_val_10026 === (12))){
var inst_9989 = (state_10025[(7)]);
var inst_10013 = cljs.core.vec.call(null,inst_9989);
var state_10025__$1 = state_10025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10025__$1,(15),out,inst_10013);
} else {
if((state_val_10026 === (2))){
var state_10025__$1 = state_10025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10025__$1,(4),ch);
} else {
if((state_val_10026 === (11))){
var inst_10005 = (state_10025[(2)]);
var inst_10006 = (new Array(n));
var inst_9989 = inst_10006;
var inst_9990 = (0);
var state_10025__$1 = (function (){var statearr_10037 = state_10025;
(statearr_10037[(7)] = inst_9989);

(statearr_10037[(8)] = inst_9990);

(statearr_10037[(10)] = inst_10005);

return statearr_10037;
})();
var statearr_10038_10062 = state_10025__$1;
(statearr_10038_10062[(2)] = null);

(statearr_10038_10062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10026 === (9))){
var inst_9989 = (state_10025[(7)]);
var inst_10003 = cljs.core.vec.call(null,inst_9989);
var state_10025__$1 = state_10025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10025__$1,(11),out,inst_10003);
} else {
if((state_val_10026 === (5))){
var inst_9993 = (state_10025[(9)]);
var inst_9989 = (state_10025[(7)]);
var inst_9990 = (state_10025[(8)]);
var inst_9998 = (state_10025[(11)]);
var inst_9997 = (inst_9989[inst_9990] = inst_9993);
var inst_9998__$1 = (inst_9990 + (1));
var inst_9999 = (inst_9998__$1 < n);
var state_10025__$1 = (function (){var statearr_10039 = state_10025;
(statearr_10039[(12)] = inst_9997);

(statearr_10039[(11)] = inst_9998__$1);

return statearr_10039;
})();
if(cljs.core.truth_(inst_9999)){
var statearr_10040_10063 = state_10025__$1;
(statearr_10040_10063[(1)] = (8));

} else {
var statearr_10041_10064 = state_10025__$1;
(statearr_10041_10064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10026 === (14))){
var inst_10018 = (state_10025[(2)]);
var inst_10019 = cljs.core.async.close_BANG_.call(null,out);
var state_10025__$1 = (function (){var statearr_10043 = state_10025;
(statearr_10043[(13)] = inst_10018);

return statearr_10043;
})();
var statearr_10044_10065 = state_10025__$1;
(statearr_10044_10065[(2)] = inst_10019);

(statearr_10044_10065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10026 === (10))){
var inst_10009 = (state_10025[(2)]);
var state_10025__$1 = state_10025;
var statearr_10045_10066 = state_10025__$1;
(statearr_10045_10066[(2)] = inst_10009);

(statearr_10045_10066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10026 === (8))){
var inst_9989 = (state_10025[(7)]);
var inst_9998 = (state_10025[(11)]);
var tmp10042 = inst_9989;
var inst_9989__$1 = tmp10042;
var inst_9990 = inst_9998;
var state_10025__$1 = (function (){var statearr_10046 = state_10025;
(statearr_10046[(7)] = inst_9989__$1);

(statearr_10046[(8)] = inst_9990);

return statearr_10046;
})();
var statearr_10047_10067 = state_10025__$1;
(statearr_10047_10067[(2)] = null);

(statearr_10047_10067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___10053,out))
;
return ((function (switch__6232__auto__,c__6387__auto___10053,out){
return (function() {
var cljs$core$async$state_machine__6233__auto__ = null;
var cljs$core$async$state_machine__6233__auto____0 = (function (){
var statearr_10048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10048[(0)] = cljs$core$async$state_machine__6233__auto__);

(statearr_10048[(1)] = (1));

return statearr_10048;
});
var cljs$core$async$state_machine__6233__auto____1 = (function (state_10025){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_10025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e10049){if((e10049 instanceof Object)){
var ex__6236__auto__ = e10049;
var statearr_10050_10068 = state_10025;
(statearr_10050_10068[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10069 = state_10025;
state_10025 = G__10069;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$state_machine__6233__auto__ = function(state_10025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6233__auto____1.call(this,state_10025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6233__auto____0;
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6233__auto____1;
return cljs$core$async$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___10053,out))
})();
var state__6389__auto__ = (function (){var statearr_10051 = f__6388__auto__.call(null);
(statearr_10051[(6)] = c__6387__auto___10053);

return statearr_10051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___10053,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__10071 = arguments.length;
switch (G__10071) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6387__auto___10141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___10141,out){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___10141,out){
return (function (state_10113){
var state_val_10114 = (state_10113[(1)]);
if((state_val_10114 === (7))){
var inst_10109 = (state_10113[(2)]);
var state_10113__$1 = state_10113;
var statearr_10115_10142 = state_10113__$1;
(statearr_10115_10142[(2)] = inst_10109);

(statearr_10115_10142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10114 === (1))){
var inst_10072 = [];
var inst_10073 = inst_10072;
var inst_10074 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10113__$1 = (function (){var statearr_10116 = state_10113;
(statearr_10116[(7)] = inst_10074);

(statearr_10116[(8)] = inst_10073);

return statearr_10116;
})();
var statearr_10117_10143 = state_10113__$1;
(statearr_10117_10143[(2)] = null);

(statearr_10117_10143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10114 === (4))){
var inst_10077 = (state_10113[(9)]);
var inst_10077__$1 = (state_10113[(2)]);
var inst_10078 = (inst_10077__$1 == null);
var inst_10079 = cljs.core.not.call(null,inst_10078);
var state_10113__$1 = (function (){var statearr_10118 = state_10113;
(statearr_10118[(9)] = inst_10077__$1);

return statearr_10118;
})();
if(inst_10079){
var statearr_10119_10144 = state_10113__$1;
(statearr_10119_10144[(1)] = (5));

} else {
var statearr_10120_10145 = state_10113__$1;
(statearr_10120_10145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10114 === (15))){
var inst_10103 = (state_10113[(2)]);
var state_10113__$1 = state_10113;
var statearr_10121_10146 = state_10113__$1;
(statearr_10121_10146[(2)] = inst_10103);

(statearr_10121_10146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10114 === (13))){
var state_10113__$1 = state_10113;
var statearr_10122_10147 = state_10113__$1;
(statearr_10122_10147[(2)] = null);

(statearr_10122_10147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10114 === (6))){
var inst_10073 = (state_10113[(8)]);
var inst_10098 = inst_10073.length;
var inst_10099 = (inst_10098 > (0));
var state_10113__$1 = state_10113;
if(cljs.core.truth_(inst_10099)){
var statearr_10123_10148 = state_10113__$1;
(statearr_10123_10148[(1)] = (12));

} else {
var statearr_10124_10149 = state_10113__$1;
(statearr_10124_10149[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10114 === (3))){
var inst_10111 = (state_10113[(2)]);
var state_10113__$1 = state_10113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10113__$1,inst_10111);
} else {
if((state_val_10114 === (12))){
var inst_10073 = (state_10113[(8)]);
var inst_10101 = cljs.core.vec.call(null,inst_10073);
var state_10113__$1 = state_10113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10113__$1,(15),out,inst_10101);
} else {
if((state_val_10114 === (2))){
var state_10113__$1 = state_10113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10113__$1,(4),ch);
} else {
if((state_val_10114 === (11))){
var inst_10077 = (state_10113[(9)]);
var inst_10081 = (state_10113[(10)]);
var inst_10091 = (state_10113[(2)]);
var inst_10092 = [];
var inst_10093 = inst_10092.push(inst_10077);
var inst_10073 = inst_10092;
var inst_10074 = inst_10081;
var state_10113__$1 = (function (){var statearr_10125 = state_10113;
(statearr_10125[(11)] = inst_10093);

(statearr_10125[(7)] = inst_10074);

(statearr_10125[(8)] = inst_10073);

(statearr_10125[(12)] = inst_10091);

return statearr_10125;
})();
var statearr_10126_10150 = state_10113__$1;
(statearr_10126_10150[(2)] = null);

(statearr_10126_10150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10114 === (9))){
var inst_10073 = (state_10113[(8)]);
var inst_10089 = cljs.core.vec.call(null,inst_10073);
var state_10113__$1 = state_10113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10113__$1,(11),out,inst_10089);
} else {
if((state_val_10114 === (5))){
var inst_10074 = (state_10113[(7)]);
var inst_10077 = (state_10113[(9)]);
var inst_10081 = (state_10113[(10)]);
var inst_10081__$1 = f.call(null,inst_10077);
var inst_10082 = cljs.core._EQ_.call(null,inst_10081__$1,inst_10074);
var inst_10083 = cljs.core.keyword_identical_QMARK_.call(null,inst_10074,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10084 = ((inst_10082) || (inst_10083));
var state_10113__$1 = (function (){var statearr_10127 = state_10113;
(statearr_10127[(10)] = inst_10081__$1);

return statearr_10127;
})();
if(cljs.core.truth_(inst_10084)){
var statearr_10128_10151 = state_10113__$1;
(statearr_10128_10151[(1)] = (8));

} else {
var statearr_10129_10152 = state_10113__$1;
(statearr_10129_10152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10114 === (14))){
var inst_10106 = (state_10113[(2)]);
var inst_10107 = cljs.core.async.close_BANG_.call(null,out);
var state_10113__$1 = (function (){var statearr_10131 = state_10113;
(statearr_10131[(13)] = inst_10106);

return statearr_10131;
})();
var statearr_10132_10153 = state_10113__$1;
(statearr_10132_10153[(2)] = inst_10107);

(statearr_10132_10153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10114 === (10))){
var inst_10096 = (state_10113[(2)]);
var state_10113__$1 = state_10113;
var statearr_10133_10154 = state_10113__$1;
(statearr_10133_10154[(2)] = inst_10096);

(statearr_10133_10154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10114 === (8))){
var inst_10073 = (state_10113[(8)]);
var inst_10077 = (state_10113[(9)]);
var inst_10081 = (state_10113[(10)]);
var inst_10086 = inst_10073.push(inst_10077);
var tmp10130 = inst_10073;
var inst_10073__$1 = tmp10130;
var inst_10074 = inst_10081;
var state_10113__$1 = (function (){var statearr_10134 = state_10113;
(statearr_10134[(7)] = inst_10074);

(statearr_10134[(8)] = inst_10073__$1);

(statearr_10134[(14)] = inst_10086);

return statearr_10134;
})();
var statearr_10135_10155 = state_10113__$1;
(statearr_10135_10155[(2)] = null);

(statearr_10135_10155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6387__auto___10141,out))
;
return ((function (switch__6232__auto__,c__6387__auto___10141,out){
return (function() {
var cljs$core$async$state_machine__6233__auto__ = null;
var cljs$core$async$state_machine__6233__auto____0 = (function (){
var statearr_10136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10136[(0)] = cljs$core$async$state_machine__6233__auto__);

(statearr_10136[(1)] = (1));

return statearr_10136;
});
var cljs$core$async$state_machine__6233__auto____1 = (function (state_10113){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_10113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e10137){if((e10137 instanceof Object)){
var ex__6236__auto__ = e10137;
var statearr_10138_10156 = state_10113;
(statearr_10138_10156[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10157 = state_10113;
state_10113 = G__10157;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
cljs$core$async$state_machine__6233__auto__ = function(state_10113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6233__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6233__auto____1.call(this,state_10113);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6233__auto____0;
cljs$core$async$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6233__auto____1;
return cljs$core$async$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___10141,out))
})();
var state__6389__auto__ = (function (){var statearr_10139 = f__6388__auto__.call(null);
(statearr_10139[(6)] = c__6387__auto___10141);

return statearr_10139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___10141,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

