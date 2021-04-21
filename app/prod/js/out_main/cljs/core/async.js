// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__7500 = arguments.length;
switch (G__7500) {
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
if(typeof cljs.core.async.t_cljs$core$async7501 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7501 = (function (f,blockable,meta7502){
this.f = f;
this.blockable = blockable;
this.meta7502 = meta7502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7503,meta7502__$1){
var self__ = this;
var _7503__$1 = this;
return (new cljs.core.async.t_cljs$core$async7501(self__.f,self__.blockable,meta7502__$1));
});

cljs.core.async.t_cljs$core$async7501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7503){
var self__ = this;
var _7503__$1 = this;
return self__.meta7502;
});

cljs.core.async.t_cljs$core$async7501.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7502","meta7502",1255207781,null)], null);
});

cljs.core.async.t_cljs$core$async7501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7501";

cljs.core.async.t_cljs$core$async7501.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async7501");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7501.
 */
cljs.core.async.__GT_t_cljs$core$async7501 = (function cljs$core$async$__GT_t_cljs$core$async7501(f__$1,blockable__$1,meta7502){
return (new cljs.core.async.t_cljs$core$async7501(f__$1,blockable__$1,meta7502));
});

}

return (new cljs.core.async.t_cljs$core$async7501(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__7507 = arguments.length;
switch (G__7507) {
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
var G__7510 = arguments.length;
switch (G__7510) {
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
var G__7513 = arguments.length;
switch (G__7513) {
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
var val_7515 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7515);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7515,ret){
return (function (){
return fn1.call(null,val_7515);
});})(val_7515,ret))
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
var G__7517 = arguments.length;
switch (G__7517) {
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
var n__4374__auto___7519 = n;
var x_7520 = (0);
while(true){
if((x_7520 < n__4374__auto___7519)){
(a[x_7520] = (0));

var G__7521 = (x_7520 + (1));
x_7520 = G__7521;
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

var G__7522 = (i + (1));
i = G__7522;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7523 = (function (flag,meta7524){
this.flag = flag;
this.meta7524 = meta7524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7525,meta7524__$1){
var self__ = this;
var _7525__$1 = this;
return (new cljs.core.async.t_cljs$core$async7523(self__.flag,meta7524__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7525){
var self__ = this;
var _7525__$1 = this;
return self__.meta7524;
});})(flag))
;

cljs.core.async.t_cljs$core$async7523.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7523.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7523.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7524","meta7524",1511861037,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7523";

cljs.core.async.t_cljs$core$async7523.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async7523");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7523.
 */
cljs.core.async.__GT_t_cljs$core$async7523 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7523(flag__$1,meta7524){
return (new cljs.core.async.t_cljs$core$async7523(flag__$1,meta7524));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7523(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7526 = (function (flag,cb,meta7527){
this.flag = flag;
this.cb = cb;
this.meta7527 = meta7527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7528,meta7527__$1){
var self__ = this;
var _7528__$1 = this;
return (new cljs.core.async.t_cljs$core$async7526(self__.flag,self__.cb,meta7527__$1));
});

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7528){
var self__ = this;
var _7528__$1 = this;
return self__.meta7527;
});

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7527","meta7527",19585764,null)], null);
});

cljs.core.async.t_cljs$core$async7526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7526";

cljs.core.async.t_cljs$core$async7526.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async7526");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7526.
 */
cljs.core.async.__GT_t_cljs$core$async7526 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7526(flag__$1,cb__$1,meta7527){
return (new cljs.core.async.t_cljs$core$async7526(flag__$1,cb__$1,meta7527));
});

}

return (new cljs.core.async.t_cljs$core$async7526(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__7529_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7529_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7530_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7530_SHARP_,port], null));
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
var G__7531 = (i + (1));
i = G__7531;
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
var len__4497__auto___7537 = arguments.length;
var i__4498__auto___7538 = (0);
while(true){
if((i__4498__auto___7538 < len__4497__auto___7537)){
args__4500__auto__.push((arguments[i__4498__auto___7538]));

var G__7539 = (i__4498__auto___7538 + (1));
i__4498__auto___7538 = G__7539;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7534){
var map__7535 = p__7534;
var map__7535__$1 = ((((!((map__7535 == null)))?(((((map__7535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7535):map__7535);
var opts = map__7535__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7532){
var G__7533 = cljs.core.first.call(null,seq7532);
var seq7532__$1 = cljs.core.next.call(null,seq7532);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7533,seq7532__$1);
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
var G__7541 = arguments.length;
switch (G__7541) {
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
var c__5590__auto___7587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___7587){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___7587){
return (function (state_7565){
var state_val_7566 = (state_7565[(1)]);
if((state_val_7566 === (7))){
var inst_7561 = (state_7565[(2)]);
var state_7565__$1 = state_7565;
var statearr_7567_7588 = state_7565__$1;
(statearr_7567_7588[(2)] = inst_7561);

(statearr_7567_7588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7566 === (1))){
var state_7565__$1 = state_7565;
var statearr_7568_7589 = state_7565__$1;
(statearr_7568_7589[(2)] = null);

(statearr_7568_7589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7566 === (4))){
var inst_7544 = (state_7565[(7)]);
var inst_7544__$1 = (state_7565[(2)]);
var inst_7545 = (inst_7544__$1 == null);
var state_7565__$1 = (function (){var statearr_7569 = state_7565;
(statearr_7569[(7)] = inst_7544__$1);

return statearr_7569;
})();
if(cljs.core.truth_(inst_7545)){
var statearr_7570_7590 = state_7565__$1;
(statearr_7570_7590[(1)] = (5));

} else {
var statearr_7571_7591 = state_7565__$1;
(statearr_7571_7591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7566 === (13))){
var state_7565__$1 = state_7565;
var statearr_7572_7592 = state_7565__$1;
(statearr_7572_7592[(2)] = null);

(statearr_7572_7592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7566 === (6))){
var inst_7544 = (state_7565[(7)]);
var state_7565__$1 = state_7565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7565__$1,(11),to,inst_7544);
} else {
if((state_val_7566 === (3))){
var inst_7563 = (state_7565[(2)]);
var state_7565__$1 = state_7565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7565__$1,inst_7563);
} else {
if((state_val_7566 === (12))){
var state_7565__$1 = state_7565;
var statearr_7573_7593 = state_7565__$1;
(statearr_7573_7593[(2)] = null);

(statearr_7573_7593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7566 === (2))){
var state_7565__$1 = state_7565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7565__$1,(4),from);
} else {
if((state_val_7566 === (11))){
var inst_7554 = (state_7565[(2)]);
var state_7565__$1 = state_7565;
if(cljs.core.truth_(inst_7554)){
var statearr_7574_7594 = state_7565__$1;
(statearr_7574_7594[(1)] = (12));

} else {
var statearr_7575_7595 = state_7565__$1;
(statearr_7575_7595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7566 === (9))){
var state_7565__$1 = state_7565;
var statearr_7576_7596 = state_7565__$1;
(statearr_7576_7596[(2)] = null);

(statearr_7576_7596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7566 === (5))){
var state_7565__$1 = state_7565;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7577_7597 = state_7565__$1;
(statearr_7577_7597[(1)] = (8));

} else {
var statearr_7578_7598 = state_7565__$1;
(statearr_7578_7598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7566 === (14))){
var inst_7559 = (state_7565[(2)]);
var state_7565__$1 = state_7565;
var statearr_7579_7599 = state_7565__$1;
(statearr_7579_7599[(2)] = inst_7559);

(statearr_7579_7599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7566 === (10))){
var inst_7551 = (state_7565[(2)]);
var state_7565__$1 = state_7565;
var statearr_7580_7600 = state_7565__$1;
(statearr_7580_7600[(2)] = inst_7551);

(statearr_7580_7600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7566 === (8))){
var inst_7548 = cljs.core.async.close_BANG_.call(null,to);
var state_7565__$1 = state_7565;
var statearr_7581_7601 = state_7565__$1;
(statearr_7581_7601[(2)] = inst_7548);

(statearr_7581_7601[(1)] = (10));


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
});})(c__5590__auto___7587))
;
return ((function (switch__5435__auto__,c__5590__auto___7587){
return (function() {
var cljs$core$async$state_machine__5436__auto__ = null;
var cljs$core$async$state_machine__5436__auto____0 = (function (){
var statearr_7582 = [null,null,null,null,null,null,null,null];
(statearr_7582[(0)] = cljs$core$async$state_machine__5436__auto__);

(statearr_7582[(1)] = (1));

return statearr_7582;
});
var cljs$core$async$state_machine__5436__auto____1 = (function (state_7565){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_7565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e7583){if((e7583 instanceof Object)){
var ex__5439__auto__ = e7583;
var statearr_7584_7602 = state_7565;
(statearr_7584_7602[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7603 = state_7565;
state_7565 = G__7603;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$state_machine__5436__auto__ = function(state_7565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5436__auto____1.call(this,state_7565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5436__auto____0;
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5436__auto____1;
return cljs$core$async$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___7587))
})();
var state__5592__auto__ = (function (){var statearr_7585 = f__5591__auto__.call(null);
(statearr_7585[(6)] = c__5590__auto___7587);

return statearr_7585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___7587))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7604){
var vec__7605 = p__7604;
var v = cljs.core.nth.call(null,vec__7605,(0),null);
var p = cljs.core.nth.call(null,vec__7605,(1),null);
var job = vec__7605;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5590__auto___7776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___7776,res,vec__7605,v,p,job,jobs,results){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___7776,res,vec__7605,v,p,job,jobs,results){
return (function (state_7612){
var state_val_7613 = (state_7612[(1)]);
if((state_val_7613 === (1))){
var state_7612__$1 = state_7612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7612__$1,(2),res,v);
} else {
if((state_val_7613 === (2))){
var inst_7609 = (state_7612[(2)]);
var inst_7610 = cljs.core.async.close_BANG_.call(null,res);
var state_7612__$1 = (function (){var statearr_7614 = state_7612;
(statearr_7614[(7)] = inst_7609);

return statearr_7614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7612__$1,inst_7610);
} else {
return null;
}
}
});})(c__5590__auto___7776,res,vec__7605,v,p,job,jobs,results))
;
return ((function (switch__5435__auto__,c__5590__auto___7776,res,vec__7605,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0 = (function (){
var statearr_7615 = [null,null,null,null,null,null,null,null];
(statearr_7615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__);

(statearr_7615[(1)] = (1));

return statearr_7615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1 = (function (state_7612){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_7612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e7616){if((e7616 instanceof Object)){
var ex__5439__auto__ = e7616;
var statearr_7617_7777 = state_7612;
(statearr_7617_7777[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7778 = state_7612;
state_7612 = G__7778;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__ = function(state_7612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1.call(this,state_7612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___7776,res,vec__7605,v,p,job,jobs,results))
})();
var state__5592__auto__ = (function (){var statearr_7618 = f__5591__auto__.call(null);
(statearr_7618[(6)] = c__5590__auto___7776);

return statearr_7618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___7776,res,vec__7605,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7619){
var vec__7620 = p__7619;
var v = cljs.core.nth.call(null,vec__7620,(0),null);
var p = cljs.core.nth.call(null,vec__7620,(1),null);
var job = vec__7620;
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
var n__4374__auto___7779 = n;
var __7780 = (0);
while(true){
if((__7780 < n__4374__auto___7779)){
var G__7623_7781 = type;
var G__7623_7782__$1 = (((G__7623_7781 instanceof cljs.core.Keyword))?G__7623_7781.fqn:null);
switch (G__7623_7782__$1) {
case "compute":
var c__5590__auto___7784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7780,c__5590__auto___7784,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (__7780,c__5590__auto___7784,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async){
return (function (state_7636){
var state_val_7637 = (state_7636[(1)]);
if((state_val_7637 === (1))){
var state_7636__$1 = state_7636;
var statearr_7638_7785 = state_7636__$1;
(statearr_7638_7785[(2)] = null);

(statearr_7638_7785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7637 === (2))){
var state_7636__$1 = state_7636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7636__$1,(4),jobs);
} else {
if((state_val_7637 === (3))){
var inst_7634 = (state_7636[(2)]);
var state_7636__$1 = state_7636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7636__$1,inst_7634);
} else {
if((state_val_7637 === (4))){
var inst_7626 = (state_7636[(2)]);
var inst_7627 = process.call(null,inst_7626);
var state_7636__$1 = state_7636;
if(cljs.core.truth_(inst_7627)){
var statearr_7639_7786 = state_7636__$1;
(statearr_7639_7786[(1)] = (5));

} else {
var statearr_7640_7787 = state_7636__$1;
(statearr_7640_7787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7637 === (5))){
var state_7636__$1 = state_7636;
var statearr_7641_7788 = state_7636__$1;
(statearr_7641_7788[(2)] = null);

(statearr_7641_7788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7637 === (6))){
var state_7636__$1 = state_7636;
var statearr_7642_7789 = state_7636__$1;
(statearr_7642_7789[(2)] = null);

(statearr_7642_7789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7637 === (7))){
var inst_7632 = (state_7636[(2)]);
var state_7636__$1 = state_7636;
var statearr_7643_7790 = state_7636__$1;
(statearr_7643_7790[(2)] = inst_7632);

(statearr_7643_7790[(1)] = (3));


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
});})(__7780,c__5590__auto___7784,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async))
;
return ((function (__7780,switch__5435__auto__,c__5590__auto___7784,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0 = (function (){
var statearr_7644 = [null,null,null,null,null,null,null];
(statearr_7644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__);

(statearr_7644[(1)] = (1));

return statearr_7644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1 = (function (state_7636){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_7636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e7645){if((e7645 instanceof Object)){
var ex__5439__auto__ = e7645;
var statearr_7646_7791 = state_7636;
(statearr_7646_7791[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7792 = state_7636;
state_7636 = G__7792;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__ = function(state_7636){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1.call(this,state_7636);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__;
})()
;})(__7780,switch__5435__auto__,c__5590__auto___7784,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async))
})();
var state__5592__auto__ = (function (){var statearr_7647 = f__5591__auto__.call(null);
(statearr_7647[(6)] = c__5590__auto___7784);

return statearr_7647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(__7780,c__5590__auto___7784,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async))
);


break;
case "async":
var c__5590__auto___7793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7780,c__5590__auto___7793,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (__7780,c__5590__auto___7793,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async){
return (function (state_7660){
var state_val_7661 = (state_7660[(1)]);
if((state_val_7661 === (1))){
var state_7660__$1 = state_7660;
var statearr_7662_7794 = state_7660__$1;
(statearr_7662_7794[(2)] = null);

(statearr_7662_7794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7661 === (2))){
var state_7660__$1 = state_7660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7660__$1,(4),jobs);
} else {
if((state_val_7661 === (3))){
var inst_7658 = (state_7660[(2)]);
var state_7660__$1 = state_7660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7660__$1,inst_7658);
} else {
if((state_val_7661 === (4))){
var inst_7650 = (state_7660[(2)]);
var inst_7651 = async.call(null,inst_7650);
var state_7660__$1 = state_7660;
if(cljs.core.truth_(inst_7651)){
var statearr_7663_7795 = state_7660__$1;
(statearr_7663_7795[(1)] = (5));

} else {
var statearr_7664_7796 = state_7660__$1;
(statearr_7664_7796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7661 === (5))){
var state_7660__$1 = state_7660;
var statearr_7665_7797 = state_7660__$1;
(statearr_7665_7797[(2)] = null);

(statearr_7665_7797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7661 === (6))){
var state_7660__$1 = state_7660;
var statearr_7666_7798 = state_7660__$1;
(statearr_7666_7798[(2)] = null);

(statearr_7666_7798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7661 === (7))){
var inst_7656 = (state_7660[(2)]);
var state_7660__$1 = state_7660;
var statearr_7667_7799 = state_7660__$1;
(statearr_7667_7799[(2)] = inst_7656);

(statearr_7667_7799[(1)] = (3));


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
});})(__7780,c__5590__auto___7793,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async))
;
return ((function (__7780,switch__5435__auto__,c__5590__auto___7793,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0 = (function (){
var statearr_7668 = [null,null,null,null,null,null,null];
(statearr_7668[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__);

(statearr_7668[(1)] = (1));

return statearr_7668;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1 = (function (state_7660){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_7660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e7669){if((e7669 instanceof Object)){
var ex__5439__auto__ = e7669;
var statearr_7670_7800 = state_7660;
(statearr_7670_7800[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7801 = state_7660;
state_7660 = G__7801;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__ = function(state_7660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1.call(this,state_7660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__;
})()
;})(__7780,switch__5435__auto__,c__5590__auto___7793,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async))
})();
var state__5592__auto__ = (function (){var statearr_7671 = f__5591__auto__.call(null);
(statearr_7671[(6)] = c__5590__auto___7793);

return statearr_7671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(__7780,c__5590__auto___7793,G__7623_7781,G__7623_7782__$1,n__4374__auto___7779,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7623_7782__$1)].join('')));

}

var G__7802 = (__7780 + (1));
__7780 = G__7802;
continue;
} else {
}
break;
}

var c__5590__auto___7803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___7803,jobs,results,process,async){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___7803,jobs,results,process,async){
return (function (state_7693){
var state_val_7694 = (state_7693[(1)]);
if((state_val_7694 === (1))){
var state_7693__$1 = state_7693;
var statearr_7695_7804 = state_7693__$1;
(statearr_7695_7804[(2)] = null);

(statearr_7695_7804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7694 === (2))){
var state_7693__$1 = state_7693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7693__$1,(4),from);
} else {
if((state_val_7694 === (3))){
var inst_7691 = (state_7693[(2)]);
var state_7693__$1 = state_7693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7693__$1,inst_7691);
} else {
if((state_val_7694 === (4))){
var inst_7674 = (state_7693[(7)]);
var inst_7674__$1 = (state_7693[(2)]);
var inst_7675 = (inst_7674__$1 == null);
var state_7693__$1 = (function (){var statearr_7696 = state_7693;
(statearr_7696[(7)] = inst_7674__$1);

return statearr_7696;
})();
if(cljs.core.truth_(inst_7675)){
var statearr_7697_7805 = state_7693__$1;
(statearr_7697_7805[(1)] = (5));

} else {
var statearr_7698_7806 = state_7693__$1;
(statearr_7698_7806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7694 === (5))){
var inst_7677 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7693__$1 = state_7693;
var statearr_7699_7807 = state_7693__$1;
(statearr_7699_7807[(2)] = inst_7677);

(statearr_7699_7807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7694 === (6))){
var inst_7679 = (state_7693[(8)]);
var inst_7674 = (state_7693[(7)]);
var inst_7679__$1 = cljs.core.async.chan.call(null,(1));
var inst_7680 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7681 = [inst_7674,inst_7679__$1];
var inst_7682 = (new cljs.core.PersistentVector(null,2,(5),inst_7680,inst_7681,null));
var state_7693__$1 = (function (){var statearr_7700 = state_7693;
(statearr_7700[(8)] = inst_7679__$1);

return statearr_7700;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7693__$1,(8),jobs,inst_7682);
} else {
if((state_val_7694 === (7))){
var inst_7689 = (state_7693[(2)]);
var state_7693__$1 = state_7693;
var statearr_7701_7808 = state_7693__$1;
(statearr_7701_7808[(2)] = inst_7689);

(statearr_7701_7808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7694 === (8))){
var inst_7679 = (state_7693[(8)]);
var inst_7684 = (state_7693[(2)]);
var state_7693__$1 = (function (){var statearr_7702 = state_7693;
(statearr_7702[(9)] = inst_7684);

return statearr_7702;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7693__$1,(9),results,inst_7679);
} else {
if((state_val_7694 === (9))){
var inst_7686 = (state_7693[(2)]);
var state_7693__$1 = (function (){var statearr_7703 = state_7693;
(statearr_7703[(10)] = inst_7686);

return statearr_7703;
})();
var statearr_7704_7809 = state_7693__$1;
(statearr_7704_7809[(2)] = null);

(statearr_7704_7809[(1)] = (2));


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
});})(c__5590__auto___7803,jobs,results,process,async))
;
return ((function (switch__5435__auto__,c__5590__auto___7803,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0 = (function (){
var statearr_7705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__);

(statearr_7705[(1)] = (1));

return statearr_7705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1 = (function (state_7693){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_7693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e7706){if((e7706 instanceof Object)){
var ex__5439__auto__ = e7706;
var statearr_7707_7810 = state_7693;
(statearr_7707_7810[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7811 = state_7693;
state_7693 = G__7811;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__ = function(state_7693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1.call(this,state_7693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___7803,jobs,results,process,async))
})();
var state__5592__auto__ = (function (){var statearr_7708 = f__5591__auto__.call(null);
(statearr_7708[(6)] = c__5590__auto___7803);

return statearr_7708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___7803,jobs,results,process,async))
);


var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__,jobs,results,process,async){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__,jobs,results,process,async){
return (function (state_7746){
var state_val_7747 = (state_7746[(1)]);
if((state_val_7747 === (7))){
var inst_7742 = (state_7746[(2)]);
var state_7746__$1 = state_7746;
var statearr_7748_7812 = state_7746__$1;
(statearr_7748_7812[(2)] = inst_7742);

(statearr_7748_7812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (20))){
var state_7746__$1 = state_7746;
var statearr_7749_7813 = state_7746__$1;
(statearr_7749_7813[(2)] = null);

(statearr_7749_7813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (1))){
var state_7746__$1 = state_7746;
var statearr_7750_7814 = state_7746__$1;
(statearr_7750_7814[(2)] = null);

(statearr_7750_7814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (4))){
var inst_7711 = (state_7746[(7)]);
var inst_7711__$1 = (state_7746[(2)]);
var inst_7712 = (inst_7711__$1 == null);
var state_7746__$1 = (function (){var statearr_7751 = state_7746;
(statearr_7751[(7)] = inst_7711__$1);

return statearr_7751;
})();
if(cljs.core.truth_(inst_7712)){
var statearr_7752_7815 = state_7746__$1;
(statearr_7752_7815[(1)] = (5));

} else {
var statearr_7753_7816 = state_7746__$1;
(statearr_7753_7816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (15))){
var inst_7724 = (state_7746[(8)]);
var state_7746__$1 = state_7746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7746__$1,(18),to,inst_7724);
} else {
if((state_val_7747 === (21))){
var inst_7737 = (state_7746[(2)]);
var state_7746__$1 = state_7746;
var statearr_7754_7817 = state_7746__$1;
(statearr_7754_7817[(2)] = inst_7737);

(statearr_7754_7817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (13))){
var inst_7739 = (state_7746[(2)]);
var state_7746__$1 = (function (){var statearr_7755 = state_7746;
(statearr_7755[(9)] = inst_7739);

return statearr_7755;
})();
var statearr_7756_7818 = state_7746__$1;
(statearr_7756_7818[(2)] = null);

(statearr_7756_7818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (6))){
var inst_7711 = (state_7746[(7)]);
var state_7746__$1 = state_7746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7746__$1,(11),inst_7711);
} else {
if((state_val_7747 === (17))){
var inst_7732 = (state_7746[(2)]);
var state_7746__$1 = state_7746;
if(cljs.core.truth_(inst_7732)){
var statearr_7757_7819 = state_7746__$1;
(statearr_7757_7819[(1)] = (19));

} else {
var statearr_7758_7820 = state_7746__$1;
(statearr_7758_7820[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (3))){
var inst_7744 = (state_7746[(2)]);
var state_7746__$1 = state_7746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7746__$1,inst_7744);
} else {
if((state_val_7747 === (12))){
var inst_7721 = (state_7746[(10)]);
var state_7746__$1 = state_7746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7746__$1,(14),inst_7721);
} else {
if((state_val_7747 === (2))){
var state_7746__$1 = state_7746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7746__$1,(4),results);
} else {
if((state_val_7747 === (19))){
var state_7746__$1 = state_7746;
var statearr_7759_7821 = state_7746__$1;
(statearr_7759_7821[(2)] = null);

(statearr_7759_7821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (11))){
var inst_7721 = (state_7746[(2)]);
var state_7746__$1 = (function (){var statearr_7760 = state_7746;
(statearr_7760[(10)] = inst_7721);

return statearr_7760;
})();
var statearr_7761_7822 = state_7746__$1;
(statearr_7761_7822[(2)] = null);

(statearr_7761_7822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (9))){
var state_7746__$1 = state_7746;
var statearr_7762_7823 = state_7746__$1;
(statearr_7762_7823[(2)] = null);

(statearr_7762_7823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (5))){
var state_7746__$1 = state_7746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7763_7824 = state_7746__$1;
(statearr_7763_7824[(1)] = (8));

} else {
var statearr_7764_7825 = state_7746__$1;
(statearr_7764_7825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (14))){
var inst_7724 = (state_7746[(8)]);
var inst_7726 = (state_7746[(11)]);
var inst_7724__$1 = (state_7746[(2)]);
var inst_7725 = (inst_7724__$1 == null);
var inst_7726__$1 = cljs.core.not.call(null,inst_7725);
var state_7746__$1 = (function (){var statearr_7765 = state_7746;
(statearr_7765[(8)] = inst_7724__$1);

(statearr_7765[(11)] = inst_7726__$1);

return statearr_7765;
})();
if(inst_7726__$1){
var statearr_7766_7826 = state_7746__$1;
(statearr_7766_7826[(1)] = (15));

} else {
var statearr_7767_7827 = state_7746__$1;
(statearr_7767_7827[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (16))){
var inst_7726 = (state_7746[(11)]);
var state_7746__$1 = state_7746;
var statearr_7768_7828 = state_7746__$1;
(statearr_7768_7828[(2)] = inst_7726);

(statearr_7768_7828[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (10))){
var inst_7718 = (state_7746[(2)]);
var state_7746__$1 = state_7746;
var statearr_7769_7829 = state_7746__$1;
(statearr_7769_7829[(2)] = inst_7718);

(statearr_7769_7829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (18))){
var inst_7729 = (state_7746[(2)]);
var state_7746__$1 = state_7746;
var statearr_7770_7830 = state_7746__$1;
(statearr_7770_7830[(2)] = inst_7729);

(statearr_7770_7830[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7747 === (8))){
var inst_7715 = cljs.core.async.close_BANG_.call(null,to);
var state_7746__$1 = state_7746;
var statearr_7771_7831 = state_7746__$1;
(statearr_7771_7831[(2)] = inst_7715);

(statearr_7771_7831[(1)] = (10));


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
});})(c__5590__auto__,jobs,results,process,async))
;
return ((function (switch__5435__auto__,c__5590__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0 = (function (){
var statearr_7772 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__);

(statearr_7772[(1)] = (1));

return statearr_7772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1 = (function (state_7746){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_7746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e7773){if((e7773 instanceof Object)){
var ex__5439__auto__ = e7773;
var statearr_7774_7832 = state_7746;
(statearr_7774_7832[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7833 = state_7746;
state_7746 = G__7833;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__ = function(state_7746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1.call(this,state_7746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__,jobs,results,process,async))
})();
var state__5592__auto__ = (function (){var statearr_7775 = f__5591__auto__.call(null);
(statearr_7775[(6)] = c__5590__auto__);

return statearr_7775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__,jobs,results,process,async))
);

return c__5590__auto__;
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
var G__7835 = arguments.length;
switch (G__7835) {
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
var G__7838 = arguments.length;
switch (G__7838) {
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
var G__7841 = arguments.length;
switch (G__7841) {
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
var c__5590__auto___7890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___7890,tc,fc){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___7890,tc,fc){
return (function (state_7867){
var state_val_7868 = (state_7867[(1)]);
if((state_val_7868 === (7))){
var inst_7863 = (state_7867[(2)]);
var state_7867__$1 = state_7867;
var statearr_7869_7891 = state_7867__$1;
(statearr_7869_7891[(2)] = inst_7863);

(statearr_7869_7891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7868 === (1))){
var state_7867__$1 = state_7867;
var statearr_7870_7892 = state_7867__$1;
(statearr_7870_7892[(2)] = null);

(statearr_7870_7892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7868 === (4))){
var inst_7844 = (state_7867[(7)]);
var inst_7844__$1 = (state_7867[(2)]);
var inst_7845 = (inst_7844__$1 == null);
var state_7867__$1 = (function (){var statearr_7871 = state_7867;
(statearr_7871[(7)] = inst_7844__$1);

return statearr_7871;
})();
if(cljs.core.truth_(inst_7845)){
var statearr_7872_7893 = state_7867__$1;
(statearr_7872_7893[(1)] = (5));

} else {
var statearr_7873_7894 = state_7867__$1;
(statearr_7873_7894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7868 === (13))){
var state_7867__$1 = state_7867;
var statearr_7874_7895 = state_7867__$1;
(statearr_7874_7895[(2)] = null);

(statearr_7874_7895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7868 === (6))){
var inst_7844 = (state_7867[(7)]);
var inst_7850 = p.call(null,inst_7844);
var state_7867__$1 = state_7867;
if(cljs.core.truth_(inst_7850)){
var statearr_7875_7896 = state_7867__$1;
(statearr_7875_7896[(1)] = (9));

} else {
var statearr_7876_7897 = state_7867__$1;
(statearr_7876_7897[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7868 === (3))){
var inst_7865 = (state_7867[(2)]);
var state_7867__$1 = state_7867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7867__$1,inst_7865);
} else {
if((state_val_7868 === (12))){
var state_7867__$1 = state_7867;
var statearr_7877_7898 = state_7867__$1;
(statearr_7877_7898[(2)] = null);

(statearr_7877_7898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7868 === (2))){
var state_7867__$1 = state_7867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7867__$1,(4),ch);
} else {
if((state_val_7868 === (11))){
var inst_7844 = (state_7867[(7)]);
var inst_7854 = (state_7867[(2)]);
var state_7867__$1 = state_7867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7867__$1,(8),inst_7854,inst_7844);
} else {
if((state_val_7868 === (9))){
var state_7867__$1 = state_7867;
var statearr_7878_7899 = state_7867__$1;
(statearr_7878_7899[(2)] = tc);

(statearr_7878_7899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7868 === (5))){
var inst_7847 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7848 = cljs.core.async.close_BANG_.call(null,fc);
var state_7867__$1 = (function (){var statearr_7879 = state_7867;
(statearr_7879[(8)] = inst_7847);

return statearr_7879;
})();
var statearr_7880_7900 = state_7867__$1;
(statearr_7880_7900[(2)] = inst_7848);

(statearr_7880_7900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7868 === (14))){
var inst_7861 = (state_7867[(2)]);
var state_7867__$1 = state_7867;
var statearr_7881_7901 = state_7867__$1;
(statearr_7881_7901[(2)] = inst_7861);

(statearr_7881_7901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7868 === (10))){
var state_7867__$1 = state_7867;
var statearr_7882_7902 = state_7867__$1;
(statearr_7882_7902[(2)] = fc);

(statearr_7882_7902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7868 === (8))){
var inst_7856 = (state_7867[(2)]);
var state_7867__$1 = state_7867;
if(cljs.core.truth_(inst_7856)){
var statearr_7883_7903 = state_7867__$1;
(statearr_7883_7903[(1)] = (12));

} else {
var statearr_7884_7904 = state_7867__$1;
(statearr_7884_7904[(1)] = (13));

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
});})(c__5590__auto___7890,tc,fc))
;
return ((function (switch__5435__auto__,c__5590__auto___7890,tc,fc){
return (function() {
var cljs$core$async$state_machine__5436__auto__ = null;
var cljs$core$async$state_machine__5436__auto____0 = (function (){
var statearr_7885 = [null,null,null,null,null,null,null,null,null];
(statearr_7885[(0)] = cljs$core$async$state_machine__5436__auto__);

(statearr_7885[(1)] = (1));

return statearr_7885;
});
var cljs$core$async$state_machine__5436__auto____1 = (function (state_7867){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_7867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e7886){if((e7886 instanceof Object)){
var ex__5439__auto__ = e7886;
var statearr_7887_7905 = state_7867;
(statearr_7887_7905[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7906 = state_7867;
state_7867 = G__7906;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$state_machine__5436__auto__ = function(state_7867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5436__auto____1.call(this,state_7867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5436__auto____0;
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5436__auto____1;
return cljs$core$async$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___7890,tc,fc))
})();
var state__5592__auto__ = (function (){var statearr_7888 = f__5591__auto__.call(null);
(statearr_7888[(6)] = c__5590__auto___7890);

return statearr_7888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___7890,tc,fc))
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
var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__){
return (function (state_7927){
var state_val_7928 = (state_7927[(1)]);
if((state_val_7928 === (7))){
var inst_7923 = (state_7927[(2)]);
var state_7927__$1 = state_7927;
var statearr_7929_7947 = state_7927__$1;
(statearr_7929_7947[(2)] = inst_7923);

(statearr_7929_7947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (1))){
var inst_7907 = init;
var state_7927__$1 = (function (){var statearr_7930 = state_7927;
(statearr_7930[(7)] = inst_7907);

return statearr_7930;
})();
var statearr_7931_7948 = state_7927__$1;
(statearr_7931_7948[(2)] = null);

(statearr_7931_7948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (4))){
var inst_7910 = (state_7927[(8)]);
var inst_7910__$1 = (state_7927[(2)]);
var inst_7911 = (inst_7910__$1 == null);
var state_7927__$1 = (function (){var statearr_7932 = state_7927;
(statearr_7932[(8)] = inst_7910__$1);

return statearr_7932;
})();
if(cljs.core.truth_(inst_7911)){
var statearr_7933_7949 = state_7927__$1;
(statearr_7933_7949[(1)] = (5));

} else {
var statearr_7934_7950 = state_7927__$1;
(statearr_7934_7950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (6))){
var inst_7910 = (state_7927[(8)]);
var inst_7907 = (state_7927[(7)]);
var inst_7914 = (state_7927[(9)]);
var inst_7914__$1 = f.call(null,inst_7907,inst_7910);
var inst_7915 = cljs.core.reduced_QMARK_.call(null,inst_7914__$1);
var state_7927__$1 = (function (){var statearr_7935 = state_7927;
(statearr_7935[(9)] = inst_7914__$1);

return statearr_7935;
})();
if(inst_7915){
var statearr_7936_7951 = state_7927__$1;
(statearr_7936_7951[(1)] = (8));

} else {
var statearr_7937_7952 = state_7927__$1;
(statearr_7937_7952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (3))){
var inst_7925 = (state_7927[(2)]);
var state_7927__$1 = state_7927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7927__$1,inst_7925);
} else {
if((state_val_7928 === (2))){
var state_7927__$1 = state_7927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7927__$1,(4),ch);
} else {
if((state_val_7928 === (9))){
var inst_7914 = (state_7927[(9)]);
var inst_7907 = inst_7914;
var state_7927__$1 = (function (){var statearr_7938 = state_7927;
(statearr_7938[(7)] = inst_7907);

return statearr_7938;
})();
var statearr_7939_7953 = state_7927__$1;
(statearr_7939_7953[(2)] = null);

(statearr_7939_7953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (5))){
var inst_7907 = (state_7927[(7)]);
var state_7927__$1 = state_7927;
var statearr_7940_7954 = state_7927__$1;
(statearr_7940_7954[(2)] = inst_7907);

(statearr_7940_7954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (10))){
var inst_7921 = (state_7927[(2)]);
var state_7927__$1 = state_7927;
var statearr_7941_7955 = state_7927__$1;
(statearr_7941_7955[(2)] = inst_7921);

(statearr_7941_7955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (8))){
var inst_7914 = (state_7927[(9)]);
var inst_7917 = cljs.core.deref.call(null,inst_7914);
var state_7927__$1 = state_7927;
var statearr_7942_7956 = state_7927__$1;
(statearr_7942_7956[(2)] = inst_7917);

(statearr_7942_7956[(1)] = (10));


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
});})(c__5590__auto__))
;
return ((function (switch__5435__auto__,c__5590__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__5436__auto__ = null;
var cljs$core$async$reduce_$_state_machine__5436__auto____0 = (function (){
var statearr_7943 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7943[(0)] = cljs$core$async$reduce_$_state_machine__5436__auto__);

(statearr_7943[(1)] = (1));

return statearr_7943;
});
var cljs$core$async$reduce_$_state_machine__5436__auto____1 = (function (state_7927){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_7927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e7944){if((e7944 instanceof Object)){
var ex__5439__auto__ = e7944;
var statearr_7945_7957 = state_7927;
(statearr_7945_7957[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7958 = state_7927;
state_7927 = G__7958;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__5436__auto__ = function(state_7927){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__5436__auto____1.call(this,state_7927);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__5436__auto____0;
cljs$core$async$reduce_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__5436__auto____1;
return cljs$core$async$reduce_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_7946 = f__5591__auto__.call(null);
(statearr_7946[(6)] = c__5590__auto__);

return statearr_7946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__))
);

return c__5590__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__,f__$1){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__,f__$1){
return (function (state_7964){
var state_val_7965 = (state_7964[(1)]);
if((state_val_7965 === (1))){
var inst_7959 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_7964__$1 = state_7964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7964__$1,(2),inst_7959);
} else {
if((state_val_7965 === (2))){
var inst_7961 = (state_7964[(2)]);
var inst_7962 = f__$1.call(null,inst_7961);
var state_7964__$1 = state_7964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7964__$1,inst_7962);
} else {
return null;
}
}
});})(c__5590__auto__,f__$1))
;
return ((function (switch__5435__auto__,c__5590__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__5436__auto__ = null;
var cljs$core$async$transduce_$_state_machine__5436__auto____0 = (function (){
var statearr_7966 = [null,null,null,null,null,null,null];
(statearr_7966[(0)] = cljs$core$async$transduce_$_state_machine__5436__auto__);

(statearr_7966[(1)] = (1));

return statearr_7966;
});
var cljs$core$async$transduce_$_state_machine__5436__auto____1 = (function (state_7964){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_7964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e7967){if((e7967 instanceof Object)){
var ex__5439__auto__ = e7967;
var statearr_7968_7970 = state_7964;
(statearr_7968_7970[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7971 = state_7964;
state_7964 = G__7971;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__5436__auto__ = function(state_7964){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__5436__auto____1.call(this,state_7964);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__5436__auto____0;
cljs$core$async$transduce_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__5436__auto____1;
return cljs$core$async$transduce_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__,f__$1))
})();
var state__5592__auto__ = (function (){var statearr_7969 = f__5591__auto__.call(null);
(statearr_7969[(6)] = c__5590__auto__);

return statearr_7969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__,f__$1))
);

return c__5590__auto__;
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
var G__7973 = arguments.length;
switch (G__7973) {
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
var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__){
return (function (state_7998){
var state_val_7999 = (state_7998[(1)]);
if((state_val_7999 === (7))){
var inst_7980 = (state_7998[(2)]);
var state_7998__$1 = state_7998;
var statearr_8000_8021 = state_7998__$1;
(statearr_8000_8021[(2)] = inst_7980);

(statearr_8000_8021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7999 === (1))){
var inst_7974 = cljs.core.seq.call(null,coll);
var inst_7975 = inst_7974;
var state_7998__$1 = (function (){var statearr_8001 = state_7998;
(statearr_8001[(7)] = inst_7975);

return statearr_8001;
})();
var statearr_8002_8022 = state_7998__$1;
(statearr_8002_8022[(2)] = null);

(statearr_8002_8022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7999 === (4))){
var inst_7975 = (state_7998[(7)]);
var inst_7978 = cljs.core.first.call(null,inst_7975);
var state_7998__$1 = state_7998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7998__$1,(7),ch,inst_7978);
} else {
if((state_val_7999 === (13))){
var inst_7992 = (state_7998[(2)]);
var state_7998__$1 = state_7998;
var statearr_8003_8023 = state_7998__$1;
(statearr_8003_8023[(2)] = inst_7992);

(statearr_8003_8023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7999 === (6))){
var inst_7983 = (state_7998[(2)]);
var state_7998__$1 = state_7998;
if(cljs.core.truth_(inst_7983)){
var statearr_8004_8024 = state_7998__$1;
(statearr_8004_8024[(1)] = (8));

} else {
var statearr_8005_8025 = state_7998__$1;
(statearr_8005_8025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7999 === (3))){
var inst_7996 = (state_7998[(2)]);
var state_7998__$1 = state_7998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7998__$1,inst_7996);
} else {
if((state_val_7999 === (12))){
var state_7998__$1 = state_7998;
var statearr_8006_8026 = state_7998__$1;
(statearr_8006_8026[(2)] = null);

(statearr_8006_8026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7999 === (2))){
var inst_7975 = (state_7998[(7)]);
var state_7998__$1 = state_7998;
if(cljs.core.truth_(inst_7975)){
var statearr_8007_8027 = state_7998__$1;
(statearr_8007_8027[(1)] = (4));

} else {
var statearr_8008_8028 = state_7998__$1;
(statearr_8008_8028[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7999 === (11))){
var inst_7989 = cljs.core.async.close_BANG_.call(null,ch);
var state_7998__$1 = state_7998;
var statearr_8009_8029 = state_7998__$1;
(statearr_8009_8029[(2)] = inst_7989);

(statearr_8009_8029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7999 === (9))){
var state_7998__$1 = state_7998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8010_8030 = state_7998__$1;
(statearr_8010_8030[(1)] = (11));

} else {
var statearr_8011_8031 = state_7998__$1;
(statearr_8011_8031[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7999 === (5))){
var inst_7975 = (state_7998[(7)]);
var state_7998__$1 = state_7998;
var statearr_8012_8032 = state_7998__$1;
(statearr_8012_8032[(2)] = inst_7975);

(statearr_8012_8032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7999 === (10))){
var inst_7994 = (state_7998[(2)]);
var state_7998__$1 = state_7998;
var statearr_8013_8033 = state_7998__$1;
(statearr_8013_8033[(2)] = inst_7994);

(statearr_8013_8033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7999 === (8))){
var inst_7975 = (state_7998[(7)]);
var inst_7985 = cljs.core.next.call(null,inst_7975);
var inst_7975__$1 = inst_7985;
var state_7998__$1 = (function (){var statearr_8014 = state_7998;
(statearr_8014[(7)] = inst_7975__$1);

return statearr_8014;
})();
var statearr_8015_8034 = state_7998__$1;
(statearr_8015_8034[(2)] = null);

(statearr_8015_8034[(1)] = (2));


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
});})(c__5590__auto__))
;
return ((function (switch__5435__auto__,c__5590__auto__){
return (function() {
var cljs$core$async$state_machine__5436__auto__ = null;
var cljs$core$async$state_machine__5436__auto____0 = (function (){
var statearr_8016 = [null,null,null,null,null,null,null,null];
(statearr_8016[(0)] = cljs$core$async$state_machine__5436__auto__);

(statearr_8016[(1)] = (1));

return statearr_8016;
});
var cljs$core$async$state_machine__5436__auto____1 = (function (state_7998){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_7998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e8017){if((e8017 instanceof Object)){
var ex__5439__auto__ = e8017;
var statearr_8018_8035 = state_7998;
(statearr_8018_8035[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8036 = state_7998;
state_7998 = G__8036;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$state_machine__5436__auto__ = function(state_7998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5436__auto____1.call(this,state_7998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5436__auto____0;
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5436__auto____1;
return cljs$core$async$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_8019 = f__5591__auto__.call(null);
(statearr_8019[(6)] = c__5590__auto__);

return statearr_8019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__))
);

return c__5590__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async8037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8037 = (function (ch,cs,meta8038){
this.ch = ch;
this.cs = cs;
this.meta8038 = meta8038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8039,meta8038__$1){
var self__ = this;
var _8039__$1 = this;
return (new cljs.core.async.t_cljs$core$async8037(self__.ch,self__.cs,meta8038__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8039){
var self__ = this;
var _8039__$1 = this;
return self__.meta8038;
});})(cs))
;

cljs.core.async.t_cljs$core$async8037.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8037.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8037.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8037.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8037.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8037.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8038","meta8038",-1674608070,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8037";

cljs.core.async.t_cljs$core$async8037.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async8037");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8037.
 */
cljs.core.async.__GT_t_cljs$core$async8037 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8037(ch__$1,cs__$1,meta8038){
return (new cljs.core.async.t_cljs$core$async8037(ch__$1,cs__$1,meta8038));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8037(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__5590__auto___8259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___8259,cs,m,dchan,dctr,done){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___8259,cs,m,dchan,dctr,done){
return (function (state_8174){
var state_val_8175 = (state_8174[(1)]);
if((state_val_8175 === (7))){
var inst_8170 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8176_8260 = state_8174__$1;
(statearr_8176_8260[(2)] = inst_8170);

(statearr_8176_8260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (20))){
var inst_8073 = (state_8174[(7)]);
var inst_8085 = cljs.core.first.call(null,inst_8073);
var inst_8086 = cljs.core.nth.call(null,inst_8085,(0),null);
var inst_8087 = cljs.core.nth.call(null,inst_8085,(1),null);
var state_8174__$1 = (function (){var statearr_8177 = state_8174;
(statearr_8177[(8)] = inst_8086);

return statearr_8177;
})();
if(cljs.core.truth_(inst_8087)){
var statearr_8178_8261 = state_8174__$1;
(statearr_8178_8261[(1)] = (22));

} else {
var statearr_8179_8262 = state_8174__$1;
(statearr_8179_8262[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (27))){
var inst_8115 = (state_8174[(9)]);
var inst_8122 = (state_8174[(10)]);
var inst_8117 = (state_8174[(11)]);
var inst_8042 = (state_8174[(12)]);
var inst_8122__$1 = cljs.core._nth.call(null,inst_8115,inst_8117);
var inst_8123 = cljs.core.async.put_BANG_.call(null,inst_8122__$1,inst_8042,done);
var state_8174__$1 = (function (){var statearr_8180 = state_8174;
(statearr_8180[(10)] = inst_8122__$1);

return statearr_8180;
})();
if(cljs.core.truth_(inst_8123)){
var statearr_8181_8263 = state_8174__$1;
(statearr_8181_8263[(1)] = (30));

} else {
var statearr_8182_8264 = state_8174__$1;
(statearr_8182_8264[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (1))){
var state_8174__$1 = state_8174;
var statearr_8183_8265 = state_8174__$1;
(statearr_8183_8265[(2)] = null);

(statearr_8183_8265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (24))){
var inst_8073 = (state_8174[(7)]);
var inst_8092 = (state_8174[(2)]);
var inst_8093 = cljs.core.next.call(null,inst_8073);
var inst_8051 = inst_8093;
var inst_8052 = null;
var inst_8053 = (0);
var inst_8054 = (0);
var state_8174__$1 = (function (){var statearr_8184 = state_8174;
(statearr_8184[(13)] = inst_8051);

(statearr_8184[(14)] = inst_8053);

(statearr_8184[(15)] = inst_8054);

(statearr_8184[(16)] = inst_8092);

(statearr_8184[(17)] = inst_8052);

return statearr_8184;
})();
var statearr_8185_8266 = state_8174__$1;
(statearr_8185_8266[(2)] = null);

(statearr_8185_8266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (39))){
var state_8174__$1 = state_8174;
var statearr_8189_8267 = state_8174__$1;
(statearr_8189_8267[(2)] = null);

(statearr_8189_8267[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (4))){
var inst_8042 = (state_8174[(12)]);
var inst_8042__$1 = (state_8174[(2)]);
var inst_8043 = (inst_8042__$1 == null);
var state_8174__$1 = (function (){var statearr_8190 = state_8174;
(statearr_8190[(12)] = inst_8042__$1);

return statearr_8190;
})();
if(cljs.core.truth_(inst_8043)){
var statearr_8191_8268 = state_8174__$1;
(statearr_8191_8268[(1)] = (5));

} else {
var statearr_8192_8269 = state_8174__$1;
(statearr_8192_8269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (15))){
var inst_8051 = (state_8174[(13)]);
var inst_8053 = (state_8174[(14)]);
var inst_8054 = (state_8174[(15)]);
var inst_8052 = (state_8174[(17)]);
var inst_8069 = (state_8174[(2)]);
var inst_8070 = (inst_8054 + (1));
var tmp8186 = inst_8051;
var tmp8187 = inst_8053;
var tmp8188 = inst_8052;
var inst_8051__$1 = tmp8186;
var inst_8052__$1 = tmp8188;
var inst_8053__$1 = tmp8187;
var inst_8054__$1 = inst_8070;
var state_8174__$1 = (function (){var statearr_8193 = state_8174;
(statearr_8193[(13)] = inst_8051__$1);

(statearr_8193[(14)] = inst_8053__$1);

(statearr_8193[(18)] = inst_8069);

(statearr_8193[(15)] = inst_8054__$1);

(statearr_8193[(17)] = inst_8052__$1);

return statearr_8193;
})();
var statearr_8194_8270 = state_8174__$1;
(statearr_8194_8270[(2)] = null);

(statearr_8194_8270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (21))){
var inst_8096 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8198_8271 = state_8174__$1;
(statearr_8198_8271[(2)] = inst_8096);

(statearr_8198_8271[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (31))){
var inst_8122 = (state_8174[(10)]);
var inst_8126 = done.call(null,null);
var inst_8127 = cljs.core.async.untap_STAR_.call(null,m,inst_8122);
var state_8174__$1 = (function (){var statearr_8199 = state_8174;
(statearr_8199[(19)] = inst_8126);

return statearr_8199;
})();
var statearr_8200_8272 = state_8174__$1;
(statearr_8200_8272[(2)] = inst_8127);

(statearr_8200_8272[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (32))){
var inst_8115 = (state_8174[(9)]);
var inst_8117 = (state_8174[(11)]);
var inst_8116 = (state_8174[(20)]);
var inst_8114 = (state_8174[(21)]);
var inst_8129 = (state_8174[(2)]);
var inst_8130 = (inst_8117 + (1));
var tmp8195 = inst_8115;
var tmp8196 = inst_8116;
var tmp8197 = inst_8114;
var inst_8114__$1 = tmp8197;
var inst_8115__$1 = tmp8195;
var inst_8116__$1 = tmp8196;
var inst_8117__$1 = inst_8130;
var state_8174__$1 = (function (){var statearr_8201 = state_8174;
(statearr_8201[(22)] = inst_8129);

(statearr_8201[(9)] = inst_8115__$1);

(statearr_8201[(11)] = inst_8117__$1);

(statearr_8201[(20)] = inst_8116__$1);

(statearr_8201[(21)] = inst_8114__$1);

return statearr_8201;
})();
var statearr_8202_8273 = state_8174__$1;
(statearr_8202_8273[(2)] = null);

(statearr_8202_8273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (40))){
var inst_8142 = (state_8174[(23)]);
var inst_8146 = done.call(null,null);
var inst_8147 = cljs.core.async.untap_STAR_.call(null,m,inst_8142);
var state_8174__$1 = (function (){var statearr_8203 = state_8174;
(statearr_8203[(24)] = inst_8146);

return statearr_8203;
})();
var statearr_8204_8274 = state_8174__$1;
(statearr_8204_8274[(2)] = inst_8147);

(statearr_8204_8274[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (33))){
var inst_8133 = (state_8174[(25)]);
var inst_8135 = cljs.core.chunked_seq_QMARK_.call(null,inst_8133);
var state_8174__$1 = state_8174;
if(inst_8135){
var statearr_8205_8275 = state_8174__$1;
(statearr_8205_8275[(1)] = (36));

} else {
var statearr_8206_8276 = state_8174__$1;
(statearr_8206_8276[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (13))){
var inst_8063 = (state_8174[(26)]);
var inst_8066 = cljs.core.async.close_BANG_.call(null,inst_8063);
var state_8174__$1 = state_8174;
var statearr_8207_8277 = state_8174__$1;
(statearr_8207_8277[(2)] = inst_8066);

(statearr_8207_8277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (22))){
var inst_8086 = (state_8174[(8)]);
var inst_8089 = cljs.core.async.close_BANG_.call(null,inst_8086);
var state_8174__$1 = state_8174;
var statearr_8208_8278 = state_8174__$1;
(statearr_8208_8278[(2)] = inst_8089);

(statearr_8208_8278[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (36))){
var inst_8133 = (state_8174[(25)]);
var inst_8137 = cljs.core.chunk_first.call(null,inst_8133);
var inst_8138 = cljs.core.chunk_rest.call(null,inst_8133);
var inst_8139 = cljs.core.count.call(null,inst_8137);
var inst_8114 = inst_8138;
var inst_8115 = inst_8137;
var inst_8116 = inst_8139;
var inst_8117 = (0);
var state_8174__$1 = (function (){var statearr_8209 = state_8174;
(statearr_8209[(9)] = inst_8115);

(statearr_8209[(11)] = inst_8117);

(statearr_8209[(20)] = inst_8116);

(statearr_8209[(21)] = inst_8114);

return statearr_8209;
})();
var statearr_8210_8279 = state_8174__$1;
(statearr_8210_8279[(2)] = null);

(statearr_8210_8279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (41))){
var inst_8133 = (state_8174[(25)]);
var inst_8149 = (state_8174[(2)]);
var inst_8150 = cljs.core.next.call(null,inst_8133);
var inst_8114 = inst_8150;
var inst_8115 = null;
var inst_8116 = (0);
var inst_8117 = (0);
var state_8174__$1 = (function (){var statearr_8211 = state_8174;
(statearr_8211[(9)] = inst_8115);

(statearr_8211[(27)] = inst_8149);

(statearr_8211[(11)] = inst_8117);

(statearr_8211[(20)] = inst_8116);

(statearr_8211[(21)] = inst_8114);

return statearr_8211;
})();
var statearr_8212_8280 = state_8174__$1;
(statearr_8212_8280[(2)] = null);

(statearr_8212_8280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (43))){
var state_8174__$1 = state_8174;
var statearr_8213_8281 = state_8174__$1;
(statearr_8213_8281[(2)] = null);

(statearr_8213_8281[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (29))){
var inst_8158 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8214_8282 = state_8174__$1;
(statearr_8214_8282[(2)] = inst_8158);

(statearr_8214_8282[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (44))){
var inst_8167 = (state_8174[(2)]);
var state_8174__$1 = (function (){var statearr_8215 = state_8174;
(statearr_8215[(28)] = inst_8167);

return statearr_8215;
})();
var statearr_8216_8283 = state_8174__$1;
(statearr_8216_8283[(2)] = null);

(statearr_8216_8283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (6))){
var inst_8106 = (state_8174[(29)]);
var inst_8105 = cljs.core.deref.call(null,cs);
var inst_8106__$1 = cljs.core.keys.call(null,inst_8105);
var inst_8107 = cljs.core.count.call(null,inst_8106__$1);
var inst_8108 = cljs.core.reset_BANG_.call(null,dctr,inst_8107);
var inst_8113 = cljs.core.seq.call(null,inst_8106__$1);
var inst_8114 = inst_8113;
var inst_8115 = null;
var inst_8116 = (0);
var inst_8117 = (0);
var state_8174__$1 = (function (){var statearr_8217 = state_8174;
(statearr_8217[(29)] = inst_8106__$1);

(statearr_8217[(9)] = inst_8115);

(statearr_8217[(11)] = inst_8117);

(statearr_8217[(20)] = inst_8116);

(statearr_8217[(21)] = inst_8114);

(statearr_8217[(30)] = inst_8108);

return statearr_8217;
})();
var statearr_8218_8284 = state_8174__$1;
(statearr_8218_8284[(2)] = null);

(statearr_8218_8284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (28))){
var inst_8114 = (state_8174[(21)]);
var inst_8133 = (state_8174[(25)]);
var inst_8133__$1 = cljs.core.seq.call(null,inst_8114);
var state_8174__$1 = (function (){var statearr_8219 = state_8174;
(statearr_8219[(25)] = inst_8133__$1);

return statearr_8219;
})();
if(inst_8133__$1){
var statearr_8220_8285 = state_8174__$1;
(statearr_8220_8285[(1)] = (33));

} else {
var statearr_8221_8286 = state_8174__$1;
(statearr_8221_8286[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (25))){
var inst_8117 = (state_8174[(11)]);
var inst_8116 = (state_8174[(20)]);
var inst_8119 = (inst_8117 < inst_8116);
var inst_8120 = inst_8119;
var state_8174__$1 = state_8174;
if(cljs.core.truth_(inst_8120)){
var statearr_8222_8287 = state_8174__$1;
(statearr_8222_8287[(1)] = (27));

} else {
var statearr_8223_8288 = state_8174__$1;
(statearr_8223_8288[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (34))){
var state_8174__$1 = state_8174;
var statearr_8224_8289 = state_8174__$1;
(statearr_8224_8289[(2)] = null);

(statearr_8224_8289[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (17))){
var state_8174__$1 = state_8174;
var statearr_8225_8290 = state_8174__$1;
(statearr_8225_8290[(2)] = null);

(statearr_8225_8290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (3))){
var inst_8172 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8174__$1,inst_8172);
} else {
if((state_val_8175 === (12))){
var inst_8101 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8226_8291 = state_8174__$1;
(statearr_8226_8291[(2)] = inst_8101);

(statearr_8226_8291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (2))){
var state_8174__$1 = state_8174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8174__$1,(4),ch);
} else {
if((state_val_8175 === (23))){
var state_8174__$1 = state_8174;
var statearr_8227_8292 = state_8174__$1;
(statearr_8227_8292[(2)] = null);

(statearr_8227_8292[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (35))){
var inst_8156 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8228_8293 = state_8174__$1;
(statearr_8228_8293[(2)] = inst_8156);

(statearr_8228_8293[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (19))){
var inst_8073 = (state_8174[(7)]);
var inst_8077 = cljs.core.chunk_first.call(null,inst_8073);
var inst_8078 = cljs.core.chunk_rest.call(null,inst_8073);
var inst_8079 = cljs.core.count.call(null,inst_8077);
var inst_8051 = inst_8078;
var inst_8052 = inst_8077;
var inst_8053 = inst_8079;
var inst_8054 = (0);
var state_8174__$1 = (function (){var statearr_8229 = state_8174;
(statearr_8229[(13)] = inst_8051);

(statearr_8229[(14)] = inst_8053);

(statearr_8229[(15)] = inst_8054);

(statearr_8229[(17)] = inst_8052);

return statearr_8229;
})();
var statearr_8230_8294 = state_8174__$1;
(statearr_8230_8294[(2)] = null);

(statearr_8230_8294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (11))){
var inst_8051 = (state_8174[(13)]);
var inst_8073 = (state_8174[(7)]);
var inst_8073__$1 = cljs.core.seq.call(null,inst_8051);
var state_8174__$1 = (function (){var statearr_8231 = state_8174;
(statearr_8231[(7)] = inst_8073__$1);

return statearr_8231;
})();
if(inst_8073__$1){
var statearr_8232_8295 = state_8174__$1;
(statearr_8232_8295[(1)] = (16));

} else {
var statearr_8233_8296 = state_8174__$1;
(statearr_8233_8296[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (9))){
var inst_8103 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8234_8297 = state_8174__$1;
(statearr_8234_8297[(2)] = inst_8103);

(statearr_8234_8297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (5))){
var inst_8049 = cljs.core.deref.call(null,cs);
var inst_8050 = cljs.core.seq.call(null,inst_8049);
var inst_8051 = inst_8050;
var inst_8052 = null;
var inst_8053 = (0);
var inst_8054 = (0);
var state_8174__$1 = (function (){var statearr_8235 = state_8174;
(statearr_8235[(13)] = inst_8051);

(statearr_8235[(14)] = inst_8053);

(statearr_8235[(15)] = inst_8054);

(statearr_8235[(17)] = inst_8052);

return statearr_8235;
})();
var statearr_8236_8298 = state_8174__$1;
(statearr_8236_8298[(2)] = null);

(statearr_8236_8298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (14))){
var state_8174__$1 = state_8174;
var statearr_8237_8299 = state_8174__$1;
(statearr_8237_8299[(2)] = null);

(statearr_8237_8299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (45))){
var inst_8164 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8238_8300 = state_8174__$1;
(statearr_8238_8300[(2)] = inst_8164);

(statearr_8238_8300[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (26))){
var inst_8106 = (state_8174[(29)]);
var inst_8160 = (state_8174[(2)]);
var inst_8161 = cljs.core.seq.call(null,inst_8106);
var state_8174__$1 = (function (){var statearr_8239 = state_8174;
(statearr_8239[(31)] = inst_8160);

return statearr_8239;
})();
if(inst_8161){
var statearr_8240_8301 = state_8174__$1;
(statearr_8240_8301[(1)] = (42));

} else {
var statearr_8241_8302 = state_8174__$1;
(statearr_8241_8302[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (16))){
var inst_8073 = (state_8174[(7)]);
var inst_8075 = cljs.core.chunked_seq_QMARK_.call(null,inst_8073);
var state_8174__$1 = state_8174;
if(inst_8075){
var statearr_8242_8303 = state_8174__$1;
(statearr_8242_8303[(1)] = (19));

} else {
var statearr_8243_8304 = state_8174__$1;
(statearr_8243_8304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (38))){
var inst_8153 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8244_8305 = state_8174__$1;
(statearr_8244_8305[(2)] = inst_8153);

(statearr_8244_8305[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (30))){
var state_8174__$1 = state_8174;
var statearr_8245_8306 = state_8174__$1;
(statearr_8245_8306[(2)] = null);

(statearr_8245_8306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (10))){
var inst_8054 = (state_8174[(15)]);
var inst_8052 = (state_8174[(17)]);
var inst_8062 = cljs.core._nth.call(null,inst_8052,inst_8054);
var inst_8063 = cljs.core.nth.call(null,inst_8062,(0),null);
var inst_8064 = cljs.core.nth.call(null,inst_8062,(1),null);
var state_8174__$1 = (function (){var statearr_8246 = state_8174;
(statearr_8246[(26)] = inst_8063);

return statearr_8246;
})();
if(cljs.core.truth_(inst_8064)){
var statearr_8247_8307 = state_8174__$1;
(statearr_8247_8307[(1)] = (13));

} else {
var statearr_8248_8308 = state_8174__$1;
(statearr_8248_8308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (18))){
var inst_8099 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8249_8309 = state_8174__$1;
(statearr_8249_8309[(2)] = inst_8099);

(statearr_8249_8309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (42))){
var state_8174__$1 = state_8174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8174__$1,(45),dchan);
} else {
if((state_val_8175 === (37))){
var inst_8042 = (state_8174[(12)]);
var inst_8133 = (state_8174[(25)]);
var inst_8142 = (state_8174[(23)]);
var inst_8142__$1 = cljs.core.first.call(null,inst_8133);
var inst_8143 = cljs.core.async.put_BANG_.call(null,inst_8142__$1,inst_8042,done);
var state_8174__$1 = (function (){var statearr_8250 = state_8174;
(statearr_8250[(23)] = inst_8142__$1);

return statearr_8250;
})();
if(cljs.core.truth_(inst_8143)){
var statearr_8251_8310 = state_8174__$1;
(statearr_8251_8310[(1)] = (39));

} else {
var statearr_8252_8311 = state_8174__$1;
(statearr_8252_8311[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (8))){
var inst_8053 = (state_8174[(14)]);
var inst_8054 = (state_8174[(15)]);
var inst_8056 = (inst_8054 < inst_8053);
var inst_8057 = inst_8056;
var state_8174__$1 = state_8174;
if(cljs.core.truth_(inst_8057)){
var statearr_8253_8312 = state_8174__$1;
(statearr_8253_8312[(1)] = (10));

} else {
var statearr_8254_8313 = state_8174__$1;
(statearr_8254_8313[(1)] = (11));

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
});})(c__5590__auto___8259,cs,m,dchan,dctr,done))
;
return ((function (switch__5435__auto__,c__5590__auto___8259,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__5436__auto__ = null;
var cljs$core$async$mult_$_state_machine__5436__auto____0 = (function (){
var statearr_8255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8255[(0)] = cljs$core$async$mult_$_state_machine__5436__auto__);

(statearr_8255[(1)] = (1));

return statearr_8255;
});
var cljs$core$async$mult_$_state_machine__5436__auto____1 = (function (state_8174){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_8174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e8256){if((e8256 instanceof Object)){
var ex__5439__auto__ = e8256;
var statearr_8257_8314 = state_8174;
(statearr_8257_8314[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8315 = state_8174;
state_8174 = G__8315;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__5436__auto__ = function(state_8174){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__5436__auto____1.call(this,state_8174);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__5436__auto____0;
cljs$core$async$mult_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__5436__auto____1;
return cljs$core$async$mult_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___8259,cs,m,dchan,dctr,done))
})();
var state__5592__auto__ = (function (){var statearr_8258 = f__5591__auto__.call(null);
(statearr_8258[(6)] = c__5590__auto___8259);

return statearr_8258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___8259,cs,m,dchan,dctr,done))
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
var G__8317 = arguments.length;
switch (G__8317) {
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
var len__4497__auto___8329 = arguments.length;
var i__4498__auto___8330 = (0);
while(true){
if((i__4498__auto___8330 < len__4497__auto___8329)){
args__4500__auto__.push((arguments[i__4498__auto___8330]));

var G__8331 = (i__4498__auto___8330 + (1));
i__4498__auto___8330 = G__8331;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8323){
var map__8324 = p__8323;
var map__8324__$1 = ((((!((map__8324 == null)))?(((((map__8324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8324):map__8324);
var opts = map__8324__$1;
var statearr_8326_8332 = state;
(statearr_8326_8332[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__8324,map__8324__$1,opts){
return (function (val){
var statearr_8327_8333 = state;
(statearr_8327_8333[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8324,map__8324__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_8328_8334 = state;
(statearr_8328_8334[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8319){
var G__8320 = cljs.core.first.call(null,seq8319);
var seq8319__$1 = cljs.core.next.call(null,seq8319);
var G__8321 = cljs.core.first.call(null,seq8319__$1);
var seq8319__$2 = cljs.core.next.call(null,seq8319__$1);
var G__8322 = cljs.core.first.call(null,seq8319__$2);
var seq8319__$3 = cljs.core.next.call(null,seq8319__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8320,G__8321,G__8322,seq8319__$3);
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
if(typeof cljs.core.async.t_cljs$core$async8335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8335 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta8336){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta8336 = meta8336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8337,meta8336__$1){
var self__ = this;
var _8337__$1 = this;
return (new cljs.core.async.t_cljs$core$async8335(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta8336__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8337){
var self__ = this;
var _8337__$1 = this;
return self__.meta8336;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8335.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8335.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8335.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8335.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8335.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8335.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8335.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8335.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8335.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta8336","meta8336",586143086,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8335";

cljs.core.async.t_cljs$core$async8335.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async8335");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8335.
 */
cljs.core.async.__GT_t_cljs$core$async8335 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8335(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8336){
return (new cljs.core.async.t_cljs$core$async8335(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8336));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8335(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5590__auto___8499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___8499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___8499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8439){
var state_val_8440 = (state_8439[(1)]);
if((state_val_8440 === (7))){
var inst_8354 = (state_8439[(2)]);
var state_8439__$1 = state_8439;
var statearr_8441_8500 = state_8439__$1;
(statearr_8441_8500[(2)] = inst_8354);

(statearr_8441_8500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (20))){
var inst_8366 = (state_8439[(7)]);
var state_8439__$1 = state_8439;
var statearr_8442_8501 = state_8439__$1;
(statearr_8442_8501[(2)] = inst_8366);

(statearr_8442_8501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (27))){
var state_8439__$1 = state_8439;
var statearr_8443_8502 = state_8439__$1;
(statearr_8443_8502[(2)] = null);

(statearr_8443_8502[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (1))){
var inst_8341 = (state_8439[(8)]);
var inst_8341__$1 = calc_state.call(null);
var inst_8343 = (inst_8341__$1 == null);
var inst_8344 = cljs.core.not.call(null,inst_8343);
var state_8439__$1 = (function (){var statearr_8444 = state_8439;
(statearr_8444[(8)] = inst_8341__$1);

return statearr_8444;
})();
if(inst_8344){
var statearr_8445_8503 = state_8439__$1;
(statearr_8445_8503[(1)] = (2));

} else {
var statearr_8446_8504 = state_8439__$1;
(statearr_8446_8504[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (24))){
var inst_8413 = (state_8439[(9)]);
var inst_8399 = (state_8439[(10)]);
var inst_8390 = (state_8439[(11)]);
var inst_8413__$1 = inst_8390.call(null,inst_8399);
var state_8439__$1 = (function (){var statearr_8447 = state_8439;
(statearr_8447[(9)] = inst_8413__$1);

return statearr_8447;
})();
if(cljs.core.truth_(inst_8413__$1)){
var statearr_8448_8505 = state_8439__$1;
(statearr_8448_8505[(1)] = (29));

} else {
var statearr_8449_8506 = state_8439__$1;
(statearr_8449_8506[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (4))){
var inst_8357 = (state_8439[(2)]);
var state_8439__$1 = state_8439;
if(cljs.core.truth_(inst_8357)){
var statearr_8450_8507 = state_8439__$1;
(statearr_8450_8507[(1)] = (8));

} else {
var statearr_8451_8508 = state_8439__$1;
(statearr_8451_8508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (15))){
var inst_8384 = (state_8439[(2)]);
var state_8439__$1 = state_8439;
if(cljs.core.truth_(inst_8384)){
var statearr_8452_8509 = state_8439__$1;
(statearr_8452_8509[(1)] = (19));

} else {
var statearr_8453_8510 = state_8439__$1;
(statearr_8453_8510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (21))){
var inst_8389 = (state_8439[(12)]);
var inst_8389__$1 = (state_8439[(2)]);
var inst_8390 = cljs.core.get.call(null,inst_8389__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8391 = cljs.core.get.call(null,inst_8389__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8392 = cljs.core.get.call(null,inst_8389__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_8439__$1 = (function (){var statearr_8454 = state_8439;
(statearr_8454[(12)] = inst_8389__$1);

(statearr_8454[(11)] = inst_8390);

(statearr_8454[(13)] = inst_8391);

return statearr_8454;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8439__$1,(22),inst_8392);
} else {
if((state_val_8440 === (31))){
var inst_8421 = (state_8439[(2)]);
var state_8439__$1 = state_8439;
if(cljs.core.truth_(inst_8421)){
var statearr_8455_8511 = state_8439__$1;
(statearr_8455_8511[(1)] = (32));

} else {
var statearr_8456_8512 = state_8439__$1;
(statearr_8456_8512[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (32))){
var inst_8398 = (state_8439[(14)]);
var state_8439__$1 = state_8439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8439__$1,(35),out,inst_8398);
} else {
if((state_val_8440 === (33))){
var inst_8389 = (state_8439[(12)]);
var inst_8366 = inst_8389;
var state_8439__$1 = (function (){var statearr_8457 = state_8439;
(statearr_8457[(7)] = inst_8366);

return statearr_8457;
})();
var statearr_8458_8513 = state_8439__$1;
(statearr_8458_8513[(2)] = null);

(statearr_8458_8513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (13))){
var inst_8366 = (state_8439[(7)]);
var inst_8373 = inst_8366.cljs$lang$protocol_mask$partition0$;
var inst_8374 = (inst_8373 & (64));
var inst_8375 = inst_8366.cljs$core$ISeq$;
var inst_8376 = (cljs.core.PROTOCOL_SENTINEL === inst_8375);
var inst_8377 = ((inst_8374) || (inst_8376));
var state_8439__$1 = state_8439;
if(cljs.core.truth_(inst_8377)){
var statearr_8459_8514 = state_8439__$1;
(statearr_8459_8514[(1)] = (16));

} else {
var statearr_8460_8515 = state_8439__$1;
(statearr_8460_8515[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (22))){
var inst_8398 = (state_8439[(14)]);
var inst_8399 = (state_8439[(10)]);
var inst_8397 = (state_8439[(2)]);
var inst_8398__$1 = cljs.core.nth.call(null,inst_8397,(0),null);
var inst_8399__$1 = cljs.core.nth.call(null,inst_8397,(1),null);
var inst_8400 = (inst_8398__$1 == null);
var inst_8401 = cljs.core._EQ_.call(null,inst_8399__$1,change);
var inst_8402 = ((inst_8400) || (inst_8401));
var state_8439__$1 = (function (){var statearr_8461 = state_8439;
(statearr_8461[(14)] = inst_8398__$1);

(statearr_8461[(10)] = inst_8399__$1);

return statearr_8461;
})();
if(cljs.core.truth_(inst_8402)){
var statearr_8462_8516 = state_8439__$1;
(statearr_8462_8516[(1)] = (23));

} else {
var statearr_8463_8517 = state_8439__$1;
(statearr_8463_8517[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (36))){
var inst_8389 = (state_8439[(12)]);
var inst_8366 = inst_8389;
var state_8439__$1 = (function (){var statearr_8464 = state_8439;
(statearr_8464[(7)] = inst_8366);

return statearr_8464;
})();
var statearr_8465_8518 = state_8439__$1;
(statearr_8465_8518[(2)] = null);

(statearr_8465_8518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (29))){
var inst_8413 = (state_8439[(9)]);
var state_8439__$1 = state_8439;
var statearr_8466_8519 = state_8439__$1;
(statearr_8466_8519[(2)] = inst_8413);

(statearr_8466_8519[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (6))){
var state_8439__$1 = state_8439;
var statearr_8467_8520 = state_8439__$1;
(statearr_8467_8520[(2)] = false);

(statearr_8467_8520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (28))){
var inst_8409 = (state_8439[(2)]);
var inst_8410 = calc_state.call(null);
var inst_8366 = inst_8410;
var state_8439__$1 = (function (){var statearr_8468 = state_8439;
(statearr_8468[(7)] = inst_8366);

(statearr_8468[(15)] = inst_8409);

return statearr_8468;
})();
var statearr_8469_8521 = state_8439__$1;
(statearr_8469_8521[(2)] = null);

(statearr_8469_8521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (25))){
var inst_8435 = (state_8439[(2)]);
var state_8439__$1 = state_8439;
var statearr_8470_8522 = state_8439__$1;
(statearr_8470_8522[(2)] = inst_8435);

(statearr_8470_8522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (34))){
var inst_8433 = (state_8439[(2)]);
var state_8439__$1 = state_8439;
var statearr_8471_8523 = state_8439__$1;
(statearr_8471_8523[(2)] = inst_8433);

(statearr_8471_8523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (17))){
var state_8439__$1 = state_8439;
var statearr_8472_8524 = state_8439__$1;
(statearr_8472_8524[(2)] = false);

(statearr_8472_8524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (3))){
var state_8439__$1 = state_8439;
var statearr_8473_8525 = state_8439__$1;
(statearr_8473_8525[(2)] = false);

(statearr_8473_8525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (12))){
var inst_8437 = (state_8439[(2)]);
var state_8439__$1 = state_8439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8439__$1,inst_8437);
} else {
if((state_val_8440 === (2))){
var inst_8341 = (state_8439[(8)]);
var inst_8346 = inst_8341.cljs$lang$protocol_mask$partition0$;
var inst_8347 = (inst_8346 & (64));
var inst_8348 = inst_8341.cljs$core$ISeq$;
var inst_8349 = (cljs.core.PROTOCOL_SENTINEL === inst_8348);
var inst_8350 = ((inst_8347) || (inst_8349));
var state_8439__$1 = state_8439;
if(cljs.core.truth_(inst_8350)){
var statearr_8474_8526 = state_8439__$1;
(statearr_8474_8526[(1)] = (5));

} else {
var statearr_8475_8527 = state_8439__$1;
(statearr_8475_8527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (23))){
var inst_8398 = (state_8439[(14)]);
var inst_8404 = (inst_8398 == null);
var state_8439__$1 = state_8439;
if(cljs.core.truth_(inst_8404)){
var statearr_8476_8528 = state_8439__$1;
(statearr_8476_8528[(1)] = (26));

} else {
var statearr_8477_8529 = state_8439__$1;
(statearr_8477_8529[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (35))){
var inst_8424 = (state_8439[(2)]);
var state_8439__$1 = state_8439;
if(cljs.core.truth_(inst_8424)){
var statearr_8478_8530 = state_8439__$1;
(statearr_8478_8530[(1)] = (36));

} else {
var statearr_8479_8531 = state_8439__$1;
(statearr_8479_8531[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (19))){
var inst_8366 = (state_8439[(7)]);
var inst_8386 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8366);
var state_8439__$1 = state_8439;
var statearr_8480_8532 = state_8439__$1;
(statearr_8480_8532[(2)] = inst_8386);

(statearr_8480_8532[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (11))){
var inst_8366 = (state_8439[(7)]);
var inst_8370 = (inst_8366 == null);
var inst_8371 = cljs.core.not.call(null,inst_8370);
var state_8439__$1 = state_8439;
if(inst_8371){
var statearr_8481_8533 = state_8439__$1;
(statearr_8481_8533[(1)] = (13));

} else {
var statearr_8482_8534 = state_8439__$1;
(statearr_8482_8534[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (9))){
var inst_8341 = (state_8439[(8)]);
var state_8439__$1 = state_8439;
var statearr_8483_8535 = state_8439__$1;
(statearr_8483_8535[(2)] = inst_8341);

(statearr_8483_8535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (5))){
var state_8439__$1 = state_8439;
var statearr_8484_8536 = state_8439__$1;
(statearr_8484_8536[(2)] = true);

(statearr_8484_8536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (14))){
var state_8439__$1 = state_8439;
var statearr_8485_8537 = state_8439__$1;
(statearr_8485_8537[(2)] = false);

(statearr_8485_8537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (26))){
var inst_8399 = (state_8439[(10)]);
var inst_8406 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_8399);
var state_8439__$1 = state_8439;
var statearr_8486_8538 = state_8439__$1;
(statearr_8486_8538[(2)] = inst_8406);

(statearr_8486_8538[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (16))){
var state_8439__$1 = state_8439;
var statearr_8487_8539 = state_8439__$1;
(statearr_8487_8539[(2)] = true);

(statearr_8487_8539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (38))){
var inst_8429 = (state_8439[(2)]);
var state_8439__$1 = state_8439;
var statearr_8488_8540 = state_8439__$1;
(statearr_8488_8540[(2)] = inst_8429);

(statearr_8488_8540[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (30))){
var inst_8399 = (state_8439[(10)]);
var inst_8390 = (state_8439[(11)]);
var inst_8391 = (state_8439[(13)]);
var inst_8416 = cljs.core.empty_QMARK_.call(null,inst_8390);
var inst_8417 = inst_8391.call(null,inst_8399);
var inst_8418 = cljs.core.not.call(null,inst_8417);
var inst_8419 = ((inst_8416) && (inst_8418));
var state_8439__$1 = state_8439;
var statearr_8489_8541 = state_8439__$1;
(statearr_8489_8541[(2)] = inst_8419);

(statearr_8489_8541[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (10))){
var inst_8341 = (state_8439[(8)]);
var inst_8362 = (state_8439[(2)]);
var inst_8363 = cljs.core.get.call(null,inst_8362,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8364 = cljs.core.get.call(null,inst_8362,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8365 = cljs.core.get.call(null,inst_8362,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_8366 = inst_8341;
var state_8439__$1 = (function (){var statearr_8490 = state_8439;
(statearr_8490[(7)] = inst_8366);

(statearr_8490[(16)] = inst_8363);

(statearr_8490[(17)] = inst_8365);

(statearr_8490[(18)] = inst_8364);

return statearr_8490;
})();
var statearr_8491_8542 = state_8439__$1;
(statearr_8491_8542[(2)] = null);

(statearr_8491_8542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (18))){
var inst_8381 = (state_8439[(2)]);
var state_8439__$1 = state_8439;
var statearr_8492_8543 = state_8439__$1;
(statearr_8492_8543[(2)] = inst_8381);

(statearr_8492_8543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (37))){
var state_8439__$1 = state_8439;
var statearr_8493_8544 = state_8439__$1;
(statearr_8493_8544[(2)] = null);

(statearr_8493_8544[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8440 === (8))){
var inst_8341 = (state_8439[(8)]);
var inst_8359 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8341);
var state_8439__$1 = state_8439;
var statearr_8494_8545 = state_8439__$1;
(statearr_8494_8545[(2)] = inst_8359);

(statearr_8494_8545[(1)] = (10));


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
});})(c__5590__auto___8499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5435__auto__,c__5590__auto___8499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__5436__auto__ = null;
var cljs$core$async$mix_$_state_machine__5436__auto____0 = (function (){
var statearr_8495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8495[(0)] = cljs$core$async$mix_$_state_machine__5436__auto__);

(statearr_8495[(1)] = (1));

return statearr_8495;
});
var cljs$core$async$mix_$_state_machine__5436__auto____1 = (function (state_8439){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_8439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e8496){if((e8496 instanceof Object)){
var ex__5439__auto__ = e8496;
var statearr_8497_8546 = state_8439;
(statearr_8497_8546[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8547 = state_8439;
state_8439 = G__8547;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__5436__auto__ = function(state_8439){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__5436__auto____1.call(this,state_8439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__5436__auto____0;
cljs$core$async$mix_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__5436__auto____1;
return cljs$core$async$mix_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___8499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5592__auto__ = (function (){var statearr_8498 = f__5591__auto__.call(null);
(statearr_8498[(6)] = c__5590__auto___8499);

return statearr_8498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___8499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__8549 = arguments.length;
switch (G__8549) {
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
var G__8553 = arguments.length;
switch (G__8553) {
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
return (function (p1__8551_SHARP_){
if(cljs.core.truth_(p1__8551_SHARP_.call(null,topic))){
return p1__8551_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__8551_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8554 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8555){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8555 = meta8555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8556,meta8555__$1){
var self__ = this;
var _8556__$1 = this;
return (new cljs.core.async.t_cljs$core$async8554(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8555__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8556){
var self__ = this;
var _8556__$1 = this;
return self__.meta8555;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8554.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8555","meta8555",-1106810580,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8554";

cljs.core.async.t_cljs$core$async8554.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async8554");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8554.
 */
cljs.core.async.__GT_t_cljs$core$async8554 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8554(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8555){
return (new cljs.core.async.t_cljs$core$async8554(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8555));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8554(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5590__auto___8674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___8674,mults,ensure_mult,p){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___8674,mults,ensure_mult,p){
return (function (state_8628){
var state_val_8629 = (state_8628[(1)]);
if((state_val_8629 === (7))){
var inst_8624 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
var statearr_8630_8675 = state_8628__$1;
(statearr_8630_8675[(2)] = inst_8624);

(statearr_8630_8675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (20))){
var state_8628__$1 = state_8628;
var statearr_8631_8676 = state_8628__$1;
(statearr_8631_8676[(2)] = null);

(statearr_8631_8676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (1))){
var state_8628__$1 = state_8628;
var statearr_8632_8677 = state_8628__$1;
(statearr_8632_8677[(2)] = null);

(statearr_8632_8677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (24))){
var inst_8607 = (state_8628[(7)]);
var inst_8616 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_8607);
var state_8628__$1 = state_8628;
var statearr_8633_8678 = state_8628__$1;
(statearr_8633_8678[(2)] = inst_8616);

(statearr_8633_8678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (4))){
var inst_8559 = (state_8628[(8)]);
var inst_8559__$1 = (state_8628[(2)]);
var inst_8560 = (inst_8559__$1 == null);
var state_8628__$1 = (function (){var statearr_8634 = state_8628;
(statearr_8634[(8)] = inst_8559__$1);

return statearr_8634;
})();
if(cljs.core.truth_(inst_8560)){
var statearr_8635_8679 = state_8628__$1;
(statearr_8635_8679[(1)] = (5));

} else {
var statearr_8636_8680 = state_8628__$1;
(statearr_8636_8680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (15))){
var inst_8601 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
var statearr_8637_8681 = state_8628__$1;
(statearr_8637_8681[(2)] = inst_8601);

(statearr_8637_8681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (21))){
var inst_8621 = (state_8628[(2)]);
var state_8628__$1 = (function (){var statearr_8638 = state_8628;
(statearr_8638[(9)] = inst_8621);

return statearr_8638;
})();
var statearr_8639_8682 = state_8628__$1;
(statearr_8639_8682[(2)] = null);

(statearr_8639_8682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (13))){
var inst_8583 = (state_8628[(10)]);
var inst_8585 = cljs.core.chunked_seq_QMARK_.call(null,inst_8583);
var state_8628__$1 = state_8628;
if(inst_8585){
var statearr_8640_8683 = state_8628__$1;
(statearr_8640_8683[(1)] = (16));

} else {
var statearr_8641_8684 = state_8628__$1;
(statearr_8641_8684[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (22))){
var inst_8613 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
if(cljs.core.truth_(inst_8613)){
var statearr_8642_8685 = state_8628__$1;
(statearr_8642_8685[(1)] = (23));

} else {
var statearr_8643_8686 = state_8628__$1;
(statearr_8643_8686[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (6))){
var inst_8609 = (state_8628[(11)]);
var inst_8607 = (state_8628[(7)]);
var inst_8559 = (state_8628[(8)]);
var inst_8607__$1 = topic_fn.call(null,inst_8559);
var inst_8608 = cljs.core.deref.call(null,mults);
var inst_8609__$1 = cljs.core.get.call(null,inst_8608,inst_8607__$1);
var state_8628__$1 = (function (){var statearr_8644 = state_8628;
(statearr_8644[(11)] = inst_8609__$1);

(statearr_8644[(7)] = inst_8607__$1);

return statearr_8644;
})();
if(cljs.core.truth_(inst_8609__$1)){
var statearr_8645_8687 = state_8628__$1;
(statearr_8645_8687[(1)] = (19));

} else {
var statearr_8646_8688 = state_8628__$1;
(statearr_8646_8688[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (25))){
var inst_8618 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
var statearr_8647_8689 = state_8628__$1;
(statearr_8647_8689[(2)] = inst_8618);

(statearr_8647_8689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (17))){
var inst_8583 = (state_8628[(10)]);
var inst_8592 = cljs.core.first.call(null,inst_8583);
var inst_8593 = cljs.core.async.muxch_STAR_.call(null,inst_8592);
var inst_8594 = cljs.core.async.close_BANG_.call(null,inst_8593);
var inst_8595 = cljs.core.next.call(null,inst_8583);
var inst_8569 = inst_8595;
var inst_8570 = null;
var inst_8571 = (0);
var inst_8572 = (0);
var state_8628__$1 = (function (){var statearr_8648 = state_8628;
(statearr_8648[(12)] = inst_8569);

(statearr_8648[(13)] = inst_8571);

(statearr_8648[(14)] = inst_8572);

(statearr_8648[(15)] = inst_8570);

(statearr_8648[(16)] = inst_8594);

return statearr_8648;
})();
var statearr_8649_8690 = state_8628__$1;
(statearr_8649_8690[(2)] = null);

(statearr_8649_8690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (3))){
var inst_8626 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8628__$1,inst_8626);
} else {
if((state_val_8629 === (12))){
var inst_8603 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
var statearr_8650_8691 = state_8628__$1;
(statearr_8650_8691[(2)] = inst_8603);

(statearr_8650_8691[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (2))){
var state_8628__$1 = state_8628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8628__$1,(4),ch);
} else {
if((state_val_8629 === (23))){
var state_8628__$1 = state_8628;
var statearr_8651_8692 = state_8628__$1;
(statearr_8651_8692[(2)] = null);

(statearr_8651_8692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (19))){
var inst_8609 = (state_8628[(11)]);
var inst_8559 = (state_8628[(8)]);
var inst_8611 = cljs.core.async.muxch_STAR_.call(null,inst_8609);
var state_8628__$1 = state_8628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8628__$1,(22),inst_8611,inst_8559);
} else {
if((state_val_8629 === (11))){
var inst_8569 = (state_8628[(12)]);
var inst_8583 = (state_8628[(10)]);
var inst_8583__$1 = cljs.core.seq.call(null,inst_8569);
var state_8628__$1 = (function (){var statearr_8652 = state_8628;
(statearr_8652[(10)] = inst_8583__$1);

return statearr_8652;
})();
if(inst_8583__$1){
var statearr_8653_8693 = state_8628__$1;
(statearr_8653_8693[(1)] = (13));

} else {
var statearr_8654_8694 = state_8628__$1;
(statearr_8654_8694[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (9))){
var inst_8605 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
var statearr_8655_8695 = state_8628__$1;
(statearr_8655_8695[(2)] = inst_8605);

(statearr_8655_8695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (5))){
var inst_8566 = cljs.core.deref.call(null,mults);
var inst_8567 = cljs.core.vals.call(null,inst_8566);
var inst_8568 = cljs.core.seq.call(null,inst_8567);
var inst_8569 = inst_8568;
var inst_8570 = null;
var inst_8571 = (0);
var inst_8572 = (0);
var state_8628__$1 = (function (){var statearr_8656 = state_8628;
(statearr_8656[(12)] = inst_8569);

(statearr_8656[(13)] = inst_8571);

(statearr_8656[(14)] = inst_8572);

(statearr_8656[(15)] = inst_8570);

return statearr_8656;
})();
var statearr_8657_8696 = state_8628__$1;
(statearr_8657_8696[(2)] = null);

(statearr_8657_8696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (14))){
var state_8628__$1 = state_8628;
var statearr_8661_8697 = state_8628__$1;
(statearr_8661_8697[(2)] = null);

(statearr_8661_8697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (16))){
var inst_8583 = (state_8628[(10)]);
var inst_8587 = cljs.core.chunk_first.call(null,inst_8583);
var inst_8588 = cljs.core.chunk_rest.call(null,inst_8583);
var inst_8589 = cljs.core.count.call(null,inst_8587);
var inst_8569 = inst_8588;
var inst_8570 = inst_8587;
var inst_8571 = inst_8589;
var inst_8572 = (0);
var state_8628__$1 = (function (){var statearr_8662 = state_8628;
(statearr_8662[(12)] = inst_8569);

(statearr_8662[(13)] = inst_8571);

(statearr_8662[(14)] = inst_8572);

(statearr_8662[(15)] = inst_8570);

return statearr_8662;
})();
var statearr_8663_8698 = state_8628__$1;
(statearr_8663_8698[(2)] = null);

(statearr_8663_8698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (10))){
var inst_8569 = (state_8628[(12)]);
var inst_8571 = (state_8628[(13)]);
var inst_8572 = (state_8628[(14)]);
var inst_8570 = (state_8628[(15)]);
var inst_8577 = cljs.core._nth.call(null,inst_8570,inst_8572);
var inst_8578 = cljs.core.async.muxch_STAR_.call(null,inst_8577);
var inst_8579 = cljs.core.async.close_BANG_.call(null,inst_8578);
var inst_8580 = (inst_8572 + (1));
var tmp8658 = inst_8569;
var tmp8659 = inst_8571;
var tmp8660 = inst_8570;
var inst_8569__$1 = tmp8658;
var inst_8570__$1 = tmp8660;
var inst_8571__$1 = tmp8659;
var inst_8572__$1 = inst_8580;
var state_8628__$1 = (function (){var statearr_8664 = state_8628;
(statearr_8664[(12)] = inst_8569__$1);

(statearr_8664[(13)] = inst_8571__$1);

(statearr_8664[(17)] = inst_8579);

(statearr_8664[(14)] = inst_8572__$1);

(statearr_8664[(15)] = inst_8570__$1);

return statearr_8664;
})();
var statearr_8665_8699 = state_8628__$1;
(statearr_8665_8699[(2)] = null);

(statearr_8665_8699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (18))){
var inst_8598 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
var statearr_8666_8700 = state_8628__$1;
(statearr_8666_8700[(2)] = inst_8598);

(statearr_8666_8700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (8))){
var inst_8571 = (state_8628[(13)]);
var inst_8572 = (state_8628[(14)]);
var inst_8574 = (inst_8572 < inst_8571);
var inst_8575 = inst_8574;
var state_8628__$1 = state_8628;
if(cljs.core.truth_(inst_8575)){
var statearr_8667_8701 = state_8628__$1;
(statearr_8667_8701[(1)] = (10));

} else {
var statearr_8668_8702 = state_8628__$1;
(statearr_8668_8702[(1)] = (11));

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
});})(c__5590__auto___8674,mults,ensure_mult,p))
;
return ((function (switch__5435__auto__,c__5590__auto___8674,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__5436__auto__ = null;
var cljs$core$async$state_machine__5436__auto____0 = (function (){
var statearr_8669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8669[(0)] = cljs$core$async$state_machine__5436__auto__);

(statearr_8669[(1)] = (1));

return statearr_8669;
});
var cljs$core$async$state_machine__5436__auto____1 = (function (state_8628){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_8628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e8670){if((e8670 instanceof Object)){
var ex__5439__auto__ = e8670;
var statearr_8671_8703 = state_8628;
(statearr_8671_8703[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8704 = state_8628;
state_8628 = G__8704;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$state_machine__5436__auto__ = function(state_8628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5436__auto____1.call(this,state_8628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5436__auto____0;
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5436__auto____1;
return cljs$core$async$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___8674,mults,ensure_mult,p))
})();
var state__5592__auto__ = (function (){var statearr_8672 = f__5591__auto__.call(null);
(statearr_8672[(6)] = c__5590__auto___8674);

return statearr_8672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___8674,mults,ensure_mult,p))
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
var G__8706 = arguments.length;
switch (G__8706) {
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
var G__8709 = arguments.length;
switch (G__8709) {
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
var G__8712 = arguments.length;
switch (G__8712) {
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
var c__5590__auto___8779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___8779,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___8779,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_8751){
var state_val_8752 = (state_8751[(1)]);
if((state_val_8752 === (7))){
var state_8751__$1 = state_8751;
var statearr_8753_8780 = state_8751__$1;
(statearr_8753_8780[(2)] = null);

(statearr_8753_8780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (1))){
var state_8751__$1 = state_8751;
var statearr_8754_8781 = state_8751__$1;
(statearr_8754_8781[(2)] = null);

(statearr_8754_8781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (4))){
var inst_8715 = (state_8751[(7)]);
var inst_8717 = (inst_8715 < cnt);
var state_8751__$1 = state_8751;
if(cljs.core.truth_(inst_8717)){
var statearr_8755_8782 = state_8751__$1;
(statearr_8755_8782[(1)] = (6));

} else {
var statearr_8756_8783 = state_8751__$1;
(statearr_8756_8783[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (15))){
var inst_8747 = (state_8751[(2)]);
var state_8751__$1 = state_8751;
var statearr_8757_8784 = state_8751__$1;
(statearr_8757_8784[(2)] = inst_8747);

(statearr_8757_8784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (13))){
var inst_8740 = cljs.core.async.close_BANG_.call(null,out);
var state_8751__$1 = state_8751;
var statearr_8758_8785 = state_8751__$1;
(statearr_8758_8785[(2)] = inst_8740);

(statearr_8758_8785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (6))){
var state_8751__$1 = state_8751;
var statearr_8759_8786 = state_8751__$1;
(statearr_8759_8786[(2)] = null);

(statearr_8759_8786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (3))){
var inst_8749 = (state_8751[(2)]);
var state_8751__$1 = state_8751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8751__$1,inst_8749);
} else {
if((state_val_8752 === (12))){
var inst_8737 = (state_8751[(8)]);
var inst_8737__$1 = (state_8751[(2)]);
var inst_8738 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_8737__$1);
var state_8751__$1 = (function (){var statearr_8760 = state_8751;
(statearr_8760[(8)] = inst_8737__$1);

return statearr_8760;
})();
if(cljs.core.truth_(inst_8738)){
var statearr_8761_8787 = state_8751__$1;
(statearr_8761_8787[(1)] = (13));

} else {
var statearr_8762_8788 = state_8751__$1;
(statearr_8762_8788[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (2))){
var inst_8714 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_8715 = (0);
var state_8751__$1 = (function (){var statearr_8763 = state_8751;
(statearr_8763[(9)] = inst_8714);

(statearr_8763[(7)] = inst_8715);

return statearr_8763;
})();
var statearr_8764_8789 = state_8751__$1;
(statearr_8764_8789[(2)] = null);

(statearr_8764_8789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (11))){
var inst_8715 = (state_8751[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_8751,(10),Object,null,(9));
var inst_8724 = chs__$1.call(null,inst_8715);
var inst_8725 = done.call(null,inst_8715);
var inst_8726 = cljs.core.async.take_BANG_.call(null,inst_8724,inst_8725);
var state_8751__$1 = state_8751;
var statearr_8765_8790 = state_8751__$1;
(statearr_8765_8790[(2)] = inst_8726);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8751__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (9))){
var inst_8715 = (state_8751[(7)]);
var inst_8728 = (state_8751[(2)]);
var inst_8729 = (inst_8715 + (1));
var inst_8715__$1 = inst_8729;
var state_8751__$1 = (function (){var statearr_8766 = state_8751;
(statearr_8766[(7)] = inst_8715__$1);

(statearr_8766[(10)] = inst_8728);

return statearr_8766;
})();
var statearr_8767_8791 = state_8751__$1;
(statearr_8767_8791[(2)] = null);

(statearr_8767_8791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (5))){
var inst_8735 = (state_8751[(2)]);
var state_8751__$1 = (function (){var statearr_8768 = state_8751;
(statearr_8768[(11)] = inst_8735);

return statearr_8768;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8751__$1,(12),dchan);
} else {
if((state_val_8752 === (14))){
var inst_8737 = (state_8751[(8)]);
var inst_8742 = cljs.core.apply.call(null,f,inst_8737);
var state_8751__$1 = state_8751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8751__$1,(16),out,inst_8742);
} else {
if((state_val_8752 === (16))){
var inst_8744 = (state_8751[(2)]);
var state_8751__$1 = (function (){var statearr_8769 = state_8751;
(statearr_8769[(12)] = inst_8744);

return statearr_8769;
})();
var statearr_8770_8792 = state_8751__$1;
(statearr_8770_8792[(2)] = null);

(statearr_8770_8792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (10))){
var inst_8719 = (state_8751[(2)]);
var inst_8720 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_8751__$1 = (function (){var statearr_8771 = state_8751;
(statearr_8771[(13)] = inst_8719);

return statearr_8771;
})();
var statearr_8772_8793 = state_8751__$1;
(statearr_8772_8793[(2)] = inst_8720);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8751__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8752 === (8))){
var inst_8733 = (state_8751[(2)]);
var state_8751__$1 = state_8751;
var statearr_8773_8794 = state_8751__$1;
(statearr_8773_8794[(2)] = inst_8733);

(statearr_8773_8794[(1)] = (5));


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
});})(c__5590__auto___8779,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5435__auto__,c__5590__auto___8779,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__5436__auto__ = null;
var cljs$core$async$state_machine__5436__auto____0 = (function (){
var statearr_8774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8774[(0)] = cljs$core$async$state_machine__5436__auto__);

(statearr_8774[(1)] = (1));

return statearr_8774;
});
var cljs$core$async$state_machine__5436__auto____1 = (function (state_8751){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_8751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e8775){if((e8775 instanceof Object)){
var ex__5439__auto__ = e8775;
var statearr_8776_8795 = state_8751;
(statearr_8776_8795[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8796 = state_8751;
state_8751 = G__8796;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$state_machine__5436__auto__ = function(state_8751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5436__auto____1.call(this,state_8751);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5436__auto____0;
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5436__auto____1;
return cljs$core$async$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___8779,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5592__auto__ = (function (){var statearr_8777 = f__5591__auto__.call(null);
(statearr_8777[(6)] = c__5590__auto___8779);

return statearr_8777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___8779,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__8799 = arguments.length;
switch (G__8799) {
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
var c__5590__auto___8853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___8853,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___8853,out){
return (function (state_8831){
var state_val_8832 = (state_8831[(1)]);
if((state_val_8832 === (7))){
var inst_8811 = (state_8831[(7)]);
var inst_8810 = (state_8831[(8)]);
var inst_8810__$1 = (state_8831[(2)]);
var inst_8811__$1 = cljs.core.nth.call(null,inst_8810__$1,(0),null);
var inst_8812 = cljs.core.nth.call(null,inst_8810__$1,(1),null);
var inst_8813 = (inst_8811__$1 == null);
var state_8831__$1 = (function (){var statearr_8833 = state_8831;
(statearr_8833[(9)] = inst_8812);

(statearr_8833[(7)] = inst_8811__$1);

(statearr_8833[(8)] = inst_8810__$1);

return statearr_8833;
})();
if(cljs.core.truth_(inst_8813)){
var statearr_8834_8854 = state_8831__$1;
(statearr_8834_8854[(1)] = (8));

} else {
var statearr_8835_8855 = state_8831__$1;
(statearr_8835_8855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8832 === (1))){
var inst_8800 = cljs.core.vec.call(null,chs);
var inst_8801 = inst_8800;
var state_8831__$1 = (function (){var statearr_8836 = state_8831;
(statearr_8836[(10)] = inst_8801);

return statearr_8836;
})();
var statearr_8837_8856 = state_8831__$1;
(statearr_8837_8856[(2)] = null);

(statearr_8837_8856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8832 === (4))){
var inst_8801 = (state_8831[(10)]);
var state_8831__$1 = state_8831;
return cljs.core.async.ioc_alts_BANG_.call(null,state_8831__$1,(7),inst_8801);
} else {
if((state_val_8832 === (6))){
var inst_8827 = (state_8831[(2)]);
var state_8831__$1 = state_8831;
var statearr_8838_8857 = state_8831__$1;
(statearr_8838_8857[(2)] = inst_8827);

(statearr_8838_8857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8832 === (3))){
var inst_8829 = (state_8831[(2)]);
var state_8831__$1 = state_8831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8831__$1,inst_8829);
} else {
if((state_val_8832 === (2))){
var inst_8801 = (state_8831[(10)]);
var inst_8803 = cljs.core.count.call(null,inst_8801);
var inst_8804 = (inst_8803 > (0));
var state_8831__$1 = state_8831;
if(cljs.core.truth_(inst_8804)){
var statearr_8840_8858 = state_8831__$1;
(statearr_8840_8858[(1)] = (4));

} else {
var statearr_8841_8859 = state_8831__$1;
(statearr_8841_8859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8832 === (11))){
var inst_8801 = (state_8831[(10)]);
var inst_8820 = (state_8831[(2)]);
var tmp8839 = inst_8801;
var inst_8801__$1 = tmp8839;
var state_8831__$1 = (function (){var statearr_8842 = state_8831;
(statearr_8842[(11)] = inst_8820);

(statearr_8842[(10)] = inst_8801__$1);

return statearr_8842;
})();
var statearr_8843_8860 = state_8831__$1;
(statearr_8843_8860[(2)] = null);

(statearr_8843_8860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8832 === (9))){
var inst_8811 = (state_8831[(7)]);
var state_8831__$1 = state_8831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8831__$1,(11),out,inst_8811);
} else {
if((state_val_8832 === (5))){
var inst_8825 = cljs.core.async.close_BANG_.call(null,out);
var state_8831__$1 = state_8831;
var statearr_8844_8861 = state_8831__$1;
(statearr_8844_8861[(2)] = inst_8825);

(statearr_8844_8861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8832 === (10))){
var inst_8823 = (state_8831[(2)]);
var state_8831__$1 = state_8831;
var statearr_8845_8862 = state_8831__$1;
(statearr_8845_8862[(2)] = inst_8823);

(statearr_8845_8862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8832 === (8))){
var inst_8812 = (state_8831[(9)]);
var inst_8801 = (state_8831[(10)]);
var inst_8811 = (state_8831[(7)]);
var inst_8810 = (state_8831[(8)]);
var inst_8815 = (function (){var cs = inst_8801;
var vec__8806 = inst_8810;
var v = inst_8811;
var c = inst_8812;
return ((function (cs,vec__8806,v,c,inst_8812,inst_8801,inst_8811,inst_8810,state_val_8832,c__5590__auto___8853,out){
return (function (p1__8797_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__8797_SHARP_);
});
;})(cs,vec__8806,v,c,inst_8812,inst_8801,inst_8811,inst_8810,state_val_8832,c__5590__auto___8853,out))
})();
var inst_8816 = cljs.core.filterv.call(null,inst_8815,inst_8801);
var inst_8801__$1 = inst_8816;
var state_8831__$1 = (function (){var statearr_8846 = state_8831;
(statearr_8846[(10)] = inst_8801__$1);

return statearr_8846;
})();
var statearr_8847_8863 = state_8831__$1;
(statearr_8847_8863[(2)] = null);

(statearr_8847_8863[(1)] = (2));


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
});})(c__5590__auto___8853,out))
;
return ((function (switch__5435__auto__,c__5590__auto___8853,out){
return (function() {
var cljs$core$async$state_machine__5436__auto__ = null;
var cljs$core$async$state_machine__5436__auto____0 = (function (){
var statearr_8848 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8848[(0)] = cljs$core$async$state_machine__5436__auto__);

(statearr_8848[(1)] = (1));

return statearr_8848;
});
var cljs$core$async$state_machine__5436__auto____1 = (function (state_8831){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_8831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e8849){if((e8849 instanceof Object)){
var ex__5439__auto__ = e8849;
var statearr_8850_8864 = state_8831;
(statearr_8850_8864[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8865 = state_8831;
state_8831 = G__8865;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$state_machine__5436__auto__ = function(state_8831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5436__auto____1.call(this,state_8831);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5436__auto____0;
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5436__auto____1;
return cljs$core$async$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___8853,out))
})();
var state__5592__auto__ = (function (){var statearr_8851 = f__5591__auto__.call(null);
(statearr_8851[(6)] = c__5590__auto___8853);

return statearr_8851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___8853,out))
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
var G__8867 = arguments.length;
switch (G__8867) {
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
var c__5590__auto___8912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___8912,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___8912,out){
return (function (state_8891){
var state_val_8892 = (state_8891[(1)]);
if((state_val_8892 === (7))){
var inst_8873 = (state_8891[(7)]);
var inst_8873__$1 = (state_8891[(2)]);
var inst_8874 = (inst_8873__$1 == null);
var inst_8875 = cljs.core.not.call(null,inst_8874);
var state_8891__$1 = (function (){var statearr_8893 = state_8891;
(statearr_8893[(7)] = inst_8873__$1);

return statearr_8893;
})();
if(inst_8875){
var statearr_8894_8913 = state_8891__$1;
(statearr_8894_8913[(1)] = (8));

} else {
var statearr_8895_8914 = state_8891__$1;
(statearr_8895_8914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8892 === (1))){
var inst_8868 = (0);
var state_8891__$1 = (function (){var statearr_8896 = state_8891;
(statearr_8896[(8)] = inst_8868);

return statearr_8896;
})();
var statearr_8897_8915 = state_8891__$1;
(statearr_8897_8915[(2)] = null);

(statearr_8897_8915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8892 === (4))){
var state_8891__$1 = state_8891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8891__$1,(7),ch);
} else {
if((state_val_8892 === (6))){
var inst_8886 = (state_8891[(2)]);
var state_8891__$1 = state_8891;
var statearr_8898_8916 = state_8891__$1;
(statearr_8898_8916[(2)] = inst_8886);

(statearr_8898_8916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8892 === (3))){
var inst_8888 = (state_8891[(2)]);
var inst_8889 = cljs.core.async.close_BANG_.call(null,out);
var state_8891__$1 = (function (){var statearr_8899 = state_8891;
(statearr_8899[(9)] = inst_8888);

return statearr_8899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8891__$1,inst_8889);
} else {
if((state_val_8892 === (2))){
var inst_8868 = (state_8891[(8)]);
var inst_8870 = (inst_8868 < n);
var state_8891__$1 = state_8891;
if(cljs.core.truth_(inst_8870)){
var statearr_8900_8917 = state_8891__$1;
(statearr_8900_8917[(1)] = (4));

} else {
var statearr_8901_8918 = state_8891__$1;
(statearr_8901_8918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8892 === (11))){
var inst_8868 = (state_8891[(8)]);
var inst_8878 = (state_8891[(2)]);
var inst_8879 = (inst_8868 + (1));
var inst_8868__$1 = inst_8879;
var state_8891__$1 = (function (){var statearr_8902 = state_8891;
(statearr_8902[(10)] = inst_8878);

(statearr_8902[(8)] = inst_8868__$1);

return statearr_8902;
})();
var statearr_8903_8919 = state_8891__$1;
(statearr_8903_8919[(2)] = null);

(statearr_8903_8919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8892 === (9))){
var state_8891__$1 = state_8891;
var statearr_8904_8920 = state_8891__$1;
(statearr_8904_8920[(2)] = null);

(statearr_8904_8920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8892 === (5))){
var state_8891__$1 = state_8891;
var statearr_8905_8921 = state_8891__$1;
(statearr_8905_8921[(2)] = null);

(statearr_8905_8921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8892 === (10))){
var inst_8883 = (state_8891[(2)]);
var state_8891__$1 = state_8891;
var statearr_8906_8922 = state_8891__$1;
(statearr_8906_8922[(2)] = inst_8883);

(statearr_8906_8922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8892 === (8))){
var inst_8873 = (state_8891[(7)]);
var state_8891__$1 = state_8891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8891__$1,(11),out,inst_8873);
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
});})(c__5590__auto___8912,out))
;
return ((function (switch__5435__auto__,c__5590__auto___8912,out){
return (function() {
var cljs$core$async$state_machine__5436__auto__ = null;
var cljs$core$async$state_machine__5436__auto____0 = (function (){
var statearr_8907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8907[(0)] = cljs$core$async$state_machine__5436__auto__);

(statearr_8907[(1)] = (1));

return statearr_8907;
});
var cljs$core$async$state_machine__5436__auto____1 = (function (state_8891){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_8891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e8908){if((e8908 instanceof Object)){
var ex__5439__auto__ = e8908;
var statearr_8909_8923 = state_8891;
(statearr_8909_8923[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8924 = state_8891;
state_8891 = G__8924;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$state_machine__5436__auto__ = function(state_8891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5436__auto____1.call(this,state_8891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5436__auto____0;
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5436__auto____1;
return cljs$core$async$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___8912,out))
})();
var state__5592__auto__ = (function (){var statearr_8910 = f__5591__auto__.call(null);
(statearr_8910[(6)] = c__5590__auto___8912);

return statearr_8910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___8912,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async8926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8926 = (function (f,ch,meta8927){
this.f = f;
this.ch = ch;
this.meta8927 = meta8927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8928,meta8927__$1){
var self__ = this;
var _8928__$1 = this;
return (new cljs.core.async.t_cljs$core$async8926(self__.f,self__.ch,meta8927__$1));
});

cljs.core.async.t_cljs$core$async8926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8928){
var self__ = this;
var _8928__$1 = this;
return self__.meta8927;
});

cljs.core.async.t_cljs$core$async8926.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8926.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8926.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async8929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8929 = (function (f,ch,meta8927,_,fn1,meta8930){
this.f = f;
this.ch = ch;
this.meta8927 = meta8927;
this._ = _;
this.fn1 = fn1;
this.meta8930 = meta8930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8931,meta8930__$1){
var self__ = this;
var _8931__$1 = this;
return (new cljs.core.async.t_cljs$core$async8929(self__.f,self__.ch,self__.meta8927,self__._,self__.fn1,meta8930__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8931){
var self__ = this;
var _8931__$1 = this;
return self__.meta8930;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8925_SHARP_){
return f1.call(null,(((p1__8925_SHARP_ == null))?null:self__.f.call(null,p1__8925_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async8929.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8927","meta8927",1269309784,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async8926","cljs.core.async/t_cljs$core$async8926",-692067249,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta8930","meta8930",1132239213,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8929";

cljs.core.async.t_cljs$core$async8929.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async8929");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8929.
 */
cljs.core.async.__GT_t_cljs$core$async8929 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8929(f__$1,ch__$1,meta8927__$1,___$2,fn1__$1,meta8930){
return (new cljs.core.async.t_cljs$core$async8929(f__$1,ch__$1,meta8927__$1,___$2,fn1__$1,meta8930));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async8929(self__.f,self__.ch,self__.meta8927,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async8926.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async8926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8927","meta8927",1269309784,null)], null);
});

cljs.core.async.t_cljs$core$async8926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8926";

cljs.core.async.t_cljs$core$async8926.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async8926");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8926.
 */
cljs.core.async.__GT_t_cljs$core$async8926 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8926(f__$1,ch__$1,meta8927){
return (new cljs.core.async.t_cljs$core$async8926(f__$1,ch__$1,meta8927));
});

}

return (new cljs.core.async.t_cljs$core$async8926(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async8932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8932 = (function (f,ch,meta8933){
this.f = f;
this.ch = ch;
this.meta8933 = meta8933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8934,meta8933__$1){
var self__ = this;
var _8934__$1 = this;
return (new cljs.core.async.t_cljs$core$async8932(self__.f,self__.ch,meta8933__$1));
});

cljs.core.async.t_cljs$core$async8932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8934){
var self__ = this;
var _8934__$1 = this;
return self__.meta8933;
});

cljs.core.async.t_cljs$core$async8932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async8932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8933","meta8933",846282385,null)], null);
});

cljs.core.async.t_cljs$core$async8932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8932";

cljs.core.async.t_cljs$core$async8932.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async8932");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8932.
 */
cljs.core.async.__GT_t_cljs$core$async8932 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async8932(f__$1,ch__$1,meta8933){
return (new cljs.core.async.t_cljs$core$async8932(f__$1,ch__$1,meta8933));
});

}

return (new cljs.core.async.t_cljs$core$async8932(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async8935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8935 = (function (p,ch,meta8936){
this.p = p;
this.ch = ch;
this.meta8936 = meta8936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8937,meta8936__$1){
var self__ = this;
var _8937__$1 = this;
return (new cljs.core.async.t_cljs$core$async8935(self__.p,self__.ch,meta8936__$1));
});

cljs.core.async.t_cljs$core$async8935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8937){
var self__ = this;
var _8937__$1 = this;
return self__.meta8936;
});

cljs.core.async.t_cljs$core$async8935.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8935.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8935.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8935.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async8935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8936","meta8936",2089413798,null)], null);
});

cljs.core.async.t_cljs$core$async8935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8935";

cljs.core.async.t_cljs$core$async8935.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async8935");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8935.
 */
cljs.core.async.__GT_t_cljs$core$async8935 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async8935(p__$1,ch__$1,meta8936){
return (new cljs.core.async.t_cljs$core$async8935(p__$1,ch__$1,meta8936));
});

}

return (new cljs.core.async.t_cljs$core$async8935(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__8939 = arguments.length;
switch (G__8939) {
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
var c__5590__auto___8979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___8979,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___8979,out){
return (function (state_8960){
var state_val_8961 = (state_8960[(1)]);
if((state_val_8961 === (7))){
var inst_8956 = (state_8960[(2)]);
var state_8960__$1 = state_8960;
var statearr_8962_8980 = state_8960__$1;
(statearr_8962_8980[(2)] = inst_8956);

(statearr_8962_8980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8961 === (1))){
var state_8960__$1 = state_8960;
var statearr_8963_8981 = state_8960__$1;
(statearr_8963_8981[(2)] = null);

(statearr_8963_8981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8961 === (4))){
var inst_8942 = (state_8960[(7)]);
var inst_8942__$1 = (state_8960[(2)]);
var inst_8943 = (inst_8942__$1 == null);
var state_8960__$1 = (function (){var statearr_8964 = state_8960;
(statearr_8964[(7)] = inst_8942__$1);

return statearr_8964;
})();
if(cljs.core.truth_(inst_8943)){
var statearr_8965_8982 = state_8960__$1;
(statearr_8965_8982[(1)] = (5));

} else {
var statearr_8966_8983 = state_8960__$1;
(statearr_8966_8983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8961 === (6))){
var inst_8942 = (state_8960[(7)]);
var inst_8947 = p.call(null,inst_8942);
var state_8960__$1 = state_8960;
if(cljs.core.truth_(inst_8947)){
var statearr_8967_8984 = state_8960__$1;
(statearr_8967_8984[(1)] = (8));

} else {
var statearr_8968_8985 = state_8960__$1;
(statearr_8968_8985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8961 === (3))){
var inst_8958 = (state_8960[(2)]);
var state_8960__$1 = state_8960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8960__$1,inst_8958);
} else {
if((state_val_8961 === (2))){
var state_8960__$1 = state_8960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8960__$1,(4),ch);
} else {
if((state_val_8961 === (11))){
var inst_8950 = (state_8960[(2)]);
var state_8960__$1 = state_8960;
var statearr_8969_8986 = state_8960__$1;
(statearr_8969_8986[(2)] = inst_8950);

(statearr_8969_8986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8961 === (9))){
var state_8960__$1 = state_8960;
var statearr_8970_8987 = state_8960__$1;
(statearr_8970_8987[(2)] = null);

(statearr_8970_8987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8961 === (5))){
var inst_8945 = cljs.core.async.close_BANG_.call(null,out);
var state_8960__$1 = state_8960;
var statearr_8971_8988 = state_8960__$1;
(statearr_8971_8988[(2)] = inst_8945);

(statearr_8971_8988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8961 === (10))){
var inst_8953 = (state_8960[(2)]);
var state_8960__$1 = (function (){var statearr_8972 = state_8960;
(statearr_8972[(8)] = inst_8953);

return statearr_8972;
})();
var statearr_8973_8989 = state_8960__$1;
(statearr_8973_8989[(2)] = null);

(statearr_8973_8989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8961 === (8))){
var inst_8942 = (state_8960[(7)]);
var state_8960__$1 = state_8960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8960__$1,(11),out,inst_8942);
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
});})(c__5590__auto___8979,out))
;
return ((function (switch__5435__auto__,c__5590__auto___8979,out){
return (function() {
var cljs$core$async$state_machine__5436__auto__ = null;
var cljs$core$async$state_machine__5436__auto____0 = (function (){
var statearr_8974 = [null,null,null,null,null,null,null,null,null];
(statearr_8974[(0)] = cljs$core$async$state_machine__5436__auto__);

(statearr_8974[(1)] = (1));

return statearr_8974;
});
var cljs$core$async$state_machine__5436__auto____1 = (function (state_8960){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_8960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e8975){if((e8975 instanceof Object)){
var ex__5439__auto__ = e8975;
var statearr_8976_8990 = state_8960;
(statearr_8976_8990[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8991 = state_8960;
state_8960 = G__8991;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$state_machine__5436__auto__ = function(state_8960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5436__auto____1.call(this,state_8960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5436__auto____0;
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5436__auto____1;
return cljs$core$async$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___8979,out))
})();
var state__5592__auto__ = (function (){var statearr_8977 = f__5591__auto__.call(null);
(statearr_8977[(6)] = c__5590__auto___8979);

return statearr_8977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___8979,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8993 = arguments.length;
switch (G__8993) {
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
var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__){
return (function (state_9056){
var state_val_9057 = (state_9056[(1)]);
if((state_val_9057 === (7))){
var inst_9052 = (state_9056[(2)]);
var state_9056__$1 = state_9056;
var statearr_9058_9096 = state_9056__$1;
(statearr_9058_9096[(2)] = inst_9052);

(statearr_9058_9096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (20))){
var inst_9022 = (state_9056[(7)]);
var inst_9033 = (state_9056[(2)]);
var inst_9034 = cljs.core.next.call(null,inst_9022);
var inst_9008 = inst_9034;
var inst_9009 = null;
var inst_9010 = (0);
var inst_9011 = (0);
var state_9056__$1 = (function (){var statearr_9059 = state_9056;
(statearr_9059[(8)] = inst_9011);

(statearr_9059[(9)] = inst_9010);

(statearr_9059[(10)] = inst_9008);

(statearr_9059[(11)] = inst_9009);

(statearr_9059[(12)] = inst_9033);

return statearr_9059;
})();
var statearr_9060_9097 = state_9056__$1;
(statearr_9060_9097[(2)] = null);

(statearr_9060_9097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (1))){
var state_9056__$1 = state_9056;
var statearr_9061_9098 = state_9056__$1;
(statearr_9061_9098[(2)] = null);

(statearr_9061_9098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (4))){
var inst_8997 = (state_9056[(13)]);
var inst_8997__$1 = (state_9056[(2)]);
var inst_8998 = (inst_8997__$1 == null);
var state_9056__$1 = (function (){var statearr_9062 = state_9056;
(statearr_9062[(13)] = inst_8997__$1);

return statearr_9062;
})();
if(cljs.core.truth_(inst_8998)){
var statearr_9063_9099 = state_9056__$1;
(statearr_9063_9099[(1)] = (5));

} else {
var statearr_9064_9100 = state_9056__$1;
(statearr_9064_9100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (15))){
var state_9056__$1 = state_9056;
var statearr_9068_9101 = state_9056__$1;
(statearr_9068_9101[(2)] = null);

(statearr_9068_9101[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (21))){
var state_9056__$1 = state_9056;
var statearr_9069_9102 = state_9056__$1;
(statearr_9069_9102[(2)] = null);

(statearr_9069_9102[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (13))){
var inst_9011 = (state_9056[(8)]);
var inst_9010 = (state_9056[(9)]);
var inst_9008 = (state_9056[(10)]);
var inst_9009 = (state_9056[(11)]);
var inst_9018 = (state_9056[(2)]);
var inst_9019 = (inst_9011 + (1));
var tmp9065 = inst_9010;
var tmp9066 = inst_9008;
var tmp9067 = inst_9009;
var inst_9008__$1 = tmp9066;
var inst_9009__$1 = tmp9067;
var inst_9010__$1 = tmp9065;
var inst_9011__$1 = inst_9019;
var state_9056__$1 = (function (){var statearr_9070 = state_9056;
(statearr_9070[(8)] = inst_9011__$1);

(statearr_9070[(9)] = inst_9010__$1);

(statearr_9070[(10)] = inst_9008__$1);

(statearr_9070[(11)] = inst_9009__$1);

(statearr_9070[(14)] = inst_9018);

return statearr_9070;
})();
var statearr_9071_9103 = state_9056__$1;
(statearr_9071_9103[(2)] = null);

(statearr_9071_9103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (22))){
var state_9056__$1 = state_9056;
var statearr_9072_9104 = state_9056__$1;
(statearr_9072_9104[(2)] = null);

(statearr_9072_9104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (6))){
var inst_8997 = (state_9056[(13)]);
var inst_9006 = f.call(null,inst_8997);
var inst_9007 = cljs.core.seq.call(null,inst_9006);
var inst_9008 = inst_9007;
var inst_9009 = null;
var inst_9010 = (0);
var inst_9011 = (0);
var state_9056__$1 = (function (){var statearr_9073 = state_9056;
(statearr_9073[(8)] = inst_9011);

(statearr_9073[(9)] = inst_9010);

(statearr_9073[(10)] = inst_9008);

(statearr_9073[(11)] = inst_9009);

return statearr_9073;
})();
var statearr_9074_9105 = state_9056__$1;
(statearr_9074_9105[(2)] = null);

(statearr_9074_9105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (17))){
var inst_9022 = (state_9056[(7)]);
var inst_9026 = cljs.core.chunk_first.call(null,inst_9022);
var inst_9027 = cljs.core.chunk_rest.call(null,inst_9022);
var inst_9028 = cljs.core.count.call(null,inst_9026);
var inst_9008 = inst_9027;
var inst_9009 = inst_9026;
var inst_9010 = inst_9028;
var inst_9011 = (0);
var state_9056__$1 = (function (){var statearr_9075 = state_9056;
(statearr_9075[(8)] = inst_9011);

(statearr_9075[(9)] = inst_9010);

(statearr_9075[(10)] = inst_9008);

(statearr_9075[(11)] = inst_9009);

return statearr_9075;
})();
var statearr_9076_9106 = state_9056__$1;
(statearr_9076_9106[(2)] = null);

(statearr_9076_9106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (3))){
var inst_9054 = (state_9056[(2)]);
var state_9056__$1 = state_9056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9056__$1,inst_9054);
} else {
if((state_val_9057 === (12))){
var inst_9042 = (state_9056[(2)]);
var state_9056__$1 = state_9056;
var statearr_9077_9107 = state_9056__$1;
(statearr_9077_9107[(2)] = inst_9042);

(statearr_9077_9107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (2))){
var state_9056__$1 = state_9056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9056__$1,(4),in$);
} else {
if((state_val_9057 === (23))){
var inst_9050 = (state_9056[(2)]);
var state_9056__$1 = state_9056;
var statearr_9078_9108 = state_9056__$1;
(statearr_9078_9108[(2)] = inst_9050);

(statearr_9078_9108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (19))){
var inst_9037 = (state_9056[(2)]);
var state_9056__$1 = state_9056;
var statearr_9079_9109 = state_9056__$1;
(statearr_9079_9109[(2)] = inst_9037);

(statearr_9079_9109[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (11))){
var inst_9008 = (state_9056[(10)]);
var inst_9022 = (state_9056[(7)]);
var inst_9022__$1 = cljs.core.seq.call(null,inst_9008);
var state_9056__$1 = (function (){var statearr_9080 = state_9056;
(statearr_9080[(7)] = inst_9022__$1);

return statearr_9080;
})();
if(inst_9022__$1){
var statearr_9081_9110 = state_9056__$1;
(statearr_9081_9110[(1)] = (14));

} else {
var statearr_9082_9111 = state_9056__$1;
(statearr_9082_9111[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (9))){
var inst_9044 = (state_9056[(2)]);
var inst_9045 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9056__$1 = (function (){var statearr_9083 = state_9056;
(statearr_9083[(15)] = inst_9044);

return statearr_9083;
})();
if(cljs.core.truth_(inst_9045)){
var statearr_9084_9112 = state_9056__$1;
(statearr_9084_9112[(1)] = (21));

} else {
var statearr_9085_9113 = state_9056__$1;
(statearr_9085_9113[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (5))){
var inst_9000 = cljs.core.async.close_BANG_.call(null,out);
var state_9056__$1 = state_9056;
var statearr_9086_9114 = state_9056__$1;
(statearr_9086_9114[(2)] = inst_9000);

(statearr_9086_9114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (14))){
var inst_9022 = (state_9056[(7)]);
var inst_9024 = cljs.core.chunked_seq_QMARK_.call(null,inst_9022);
var state_9056__$1 = state_9056;
if(inst_9024){
var statearr_9087_9115 = state_9056__$1;
(statearr_9087_9115[(1)] = (17));

} else {
var statearr_9088_9116 = state_9056__$1;
(statearr_9088_9116[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (16))){
var inst_9040 = (state_9056[(2)]);
var state_9056__$1 = state_9056;
var statearr_9089_9117 = state_9056__$1;
(statearr_9089_9117[(2)] = inst_9040);

(statearr_9089_9117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9057 === (10))){
var inst_9011 = (state_9056[(8)]);
var inst_9009 = (state_9056[(11)]);
var inst_9016 = cljs.core._nth.call(null,inst_9009,inst_9011);
var state_9056__$1 = state_9056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9056__$1,(13),out,inst_9016);
} else {
if((state_val_9057 === (18))){
var inst_9022 = (state_9056[(7)]);
var inst_9031 = cljs.core.first.call(null,inst_9022);
var state_9056__$1 = state_9056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9056__$1,(20),out,inst_9031);
} else {
if((state_val_9057 === (8))){
var inst_9011 = (state_9056[(8)]);
var inst_9010 = (state_9056[(9)]);
var inst_9013 = (inst_9011 < inst_9010);
var inst_9014 = inst_9013;
var state_9056__$1 = state_9056;
if(cljs.core.truth_(inst_9014)){
var statearr_9090_9118 = state_9056__$1;
(statearr_9090_9118[(1)] = (10));

} else {
var statearr_9091_9119 = state_9056__$1;
(statearr_9091_9119[(1)] = (11));

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
});})(c__5590__auto__))
;
return ((function (switch__5435__auto__,c__5590__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__5436__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__5436__auto____0 = (function (){
var statearr_9092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9092[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__5436__auto__);

(statearr_9092[(1)] = (1));

return statearr_9092;
});
var cljs$core$async$mapcat_STAR__$_state_machine__5436__auto____1 = (function (state_9056){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_9056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e9093){if((e9093 instanceof Object)){
var ex__5439__auto__ = e9093;
var statearr_9094_9120 = state_9056;
(statearr_9094_9120[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9121 = state_9056;
state_9056 = G__9121;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__5436__auto__ = function(state_9056){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__5436__auto____1.call(this,state_9056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__5436__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__5436__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_9095 = f__5591__auto__.call(null);
(statearr_9095[(6)] = c__5590__auto__);

return statearr_9095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__))
);

return c__5590__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__9123 = arguments.length;
switch (G__9123) {
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
var G__9126 = arguments.length;
switch (G__9126) {
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
var G__9129 = arguments.length;
switch (G__9129) {
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
var c__5590__auto___9176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___9176,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___9176,out){
return (function (state_9153){
var state_val_9154 = (state_9153[(1)]);
if((state_val_9154 === (7))){
var inst_9148 = (state_9153[(2)]);
var state_9153__$1 = state_9153;
var statearr_9155_9177 = state_9153__$1;
(statearr_9155_9177[(2)] = inst_9148);

(statearr_9155_9177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9154 === (1))){
var inst_9130 = null;
var state_9153__$1 = (function (){var statearr_9156 = state_9153;
(statearr_9156[(7)] = inst_9130);

return statearr_9156;
})();
var statearr_9157_9178 = state_9153__$1;
(statearr_9157_9178[(2)] = null);

(statearr_9157_9178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9154 === (4))){
var inst_9133 = (state_9153[(8)]);
var inst_9133__$1 = (state_9153[(2)]);
var inst_9134 = (inst_9133__$1 == null);
var inst_9135 = cljs.core.not.call(null,inst_9134);
var state_9153__$1 = (function (){var statearr_9158 = state_9153;
(statearr_9158[(8)] = inst_9133__$1);

return statearr_9158;
})();
if(inst_9135){
var statearr_9159_9179 = state_9153__$1;
(statearr_9159_9179[(1)] = (5));

} else {
var statearr_9160_9180 = state_9153__$1;
(statearr_9160_9180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9154 === (6))){
var state_9153__$1 = state_9153;
var statearr_9161_9181 = state_9153__$1;
(statearr_9161_9181[(2)] = null);

(statearr_9161_9181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9154 === (3))){
var inst_9150 = (state_9153[(2)]);
var inst_9151 = cljs.core.async.close_BANG_.call(null,out);
var state_9153__$1 = (function (){var statearr_9162 = state_9153;
(statearr_9162[(9)] = inst_9150);

return statearr_9162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9153__$1,inst_9151);
} else {
if((state_val_9154 === (2))){
var state_9153__$1 = state_9153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9153__$1,(4),ch);
} else {
if((state_val_9154 === (11))){
var inst_9133 = (state_9153[(8)]);
var inst_9142 = (state_9153[(2)]);
var inst_9130 = inst_9133;
var state_9153__$1 = (function (){var statearr_9163 = state_9153;
(statearr_9163[(7)] = inst_9130);

(statearr_9163[(10)] = inst_9142);

return statearr_9163;
})();
var statearr_9164_9182 = state_9153__$1;
(statearr_9164_9182[(2)] = null);

(statearr_9164_9182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9154 === (9))){
var inst_9133 = (state_9153[(8)]);
var state_9153__$1 = state_9153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9153__$1,(11),out,inst_9133);
} else {
if((state_val_9154 === (5))){
var inst_9130 = (state_9153[(7)]);
var inst_9133 = (state_9153[(8)]);
var inst_9137 = cljs.core._EQ_.call(null,inst_9133,inst_9130);
var state_9153__$1 = state_9153;
if(inst_9137){
var statearr_9166_9183 = state_9153__$1;
(statearr_9166_9183[(1)] = (8));

} else {
var statearr_9167_9184 = state_9153__$1;
(statearr_9167_9184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9154 === (10))){
var inst_9145 = (state_9153[(2)]);
var state_9153__$1 = state_9153;
var statearr_9168_9185 = state_9153__$1;
(statearr_9168_9185[(2)] = inst_9145);

(statearr_9168_9185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9154 === (8))){
var inst_9130 = (state_9153[(7)]);
var tmp9165 = inst_9130;
var inst_9130__$1 = tmp9165;
var state_9153__$1 = (function (){var statearr_9169 = state_9153;
(statearr_9169[(7)] = inst_9130__$1);

return statearr_9169;
})();
var statearr_9170_9186 = state_9153__$1;
(statearr_9170_9186[(2)] = null);

(statearr_9170_9186[(1)] = (2));


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
});})(c__5590__auto___9176,out))
;
return ((function (switch__5435__auto__,c__5590__auto___9176,out){
return (function() {
var cljs$core$async$state_machine__5436__auto__ = null;
var cljs$core$async$state_machine__5436__auto____0 = (function (){
var statearr_9171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9171[(0)] = cljs$core$async$state_machine__5436__auto__);

(statearr_9171[(1)] = (1));

return statearr_9171;
});
var cljs$core$async$state_machine__5436__auto____1 = (function (state_9153){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_9153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e9172){if((e9172 instanceof Object)){
var ex__5439__auto__ = e9172;
var statearr_9173_9187 = state_9153;
(statearr_9173_9187[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9188 = state_9153;
state_9153 = G__9188;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$state_machine__5436__auto__ = function(state_9153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5436__auto____1.call(this,state_9153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5436__auto____0;
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5436__auto____1;
return cljs$core$async$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___9176,out))
})();
var state__5592__auto__ = (function (){var statearr_9174 = f__5591__auto__.call(null);
(statearr_9174[(6)] = c__5590__auto___9176);

return statearr_9174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___9176,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__9190 = arguments.length;
switch (G__9190) {
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
var c__5590__auto___9256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___9256,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___9256,out){
return (function (state_9228){
var state_val_9229 = (state_9228[(1)]);
if((state_val_9229 === (7))){
var inst_9224 = (state_9228[(2)]);
var state_9228__$1 = state_9228;
var statearr_9230_9257 = state_9228__$1;
(statearr_9230_9257[(2)] = inst_9224);

(statearr_9230_9257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9229 === (1))){
var inst_9191 = (new Array(n));
var inst_9192 = inst_9191;
var inst_9193 = (0);
var state_9228__$1 = (function (){var statearr_9231 = state_9228;
(statearr_9231[(7)] = inst_9192);

(statearr_9231[(8)] = inst_9193);

return statearr_9231;
})();
var statearr_9232_9258 = state_9228__$1;
(statearr_9232_9258[(2)] = null);

(statearr_9232_9258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9229 === (4))){
var inst_9196 = (state_9228[(9)]);
var inst_9196__$1 = (state_9228[(2)]);
var inst_9197 = (inst_9196__$1 == null);
var inst_9198 = cljs.core.not.call(null,inst_9197);
var state_9228__$1 = (function (){var statearr_9233 = state_9228;
(statearr_9233[(9)] = inst_9196__$1);

return statearr_9233;
})();
if(inst_9198){
var statearr_9234_9259 = state_9228__$1;
(statearr_9234_9259[(1)] = (5));

} else {
var statearr_9235_9260 = state_9228__$1;
(statearr_9235_9260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9229 === (15))){
var inst_9218 = (state_9228[(2)]);
var state_9228__$1 = state_9228;
var statearr_9236_9261 = state_9228__$1;
(statearr_9236_9261[(2)] = inst_9218);

(statearr_9236_9261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9229 === (13))){
var state_9228__$1 = state_9228;
var statearr_9237_9262 = state_9228__$1;
(statearr_9237_9262[(2)] = null);

(statearr_9237_9262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9229 === (6))){
var inst_9193 = (state_9228[(8)]);
var inst_9214 = (inst_9193 > (0));
var state_9228__$1 = state_9228;
if(cljs.core.truth_(inst_9214)){
var statearr_9238_9263 = state_9228__$1;
(statearr_9238_9263[(1)] = (12));

} else {
var statearr_9239_9264 = state_9228__$1;
(statearr_9239_9264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9229 === (3))){
var inst_9226 = (state_9228[(2)]);
var state_9228__$1 = state_9228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9228__$1,inst_9226);
} else {
if((state_val_9229 === (12))){
var inst_9192 = (state_9228[(7)]);
var inst_9216 = cljs.core.vec.call(null,inst_9192);
var state_9228__$1 = state_9228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9228__$1,(15),out,inst_9216);
} else {
if((state_val_9229 === (2))){
var state_9228__$1 = state_9228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9228__$1,(4),ch);
} else {
if((state_val_9229 === (11))){
var inst_9208 = (state_9228[(2)]);
var inst_9209 = (new Array(n));
var inst_9192 = inst_9209;
var inst_9193 = (0);
var state_9228__$1 = (function (){var statearr_9240 = state_9228;
(statearr_9240[(7)] = inst_9192);

(statearr_9240[(8)] = inst_9193);

(statearr_9240[(10)] = inst_9208);

return statearr_9240;
})();
var statearr_9241_9265 = state_9228__$1;
(statearr_9241_9265[(2)] = null);

(statearr_9241_9265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9229 === (9))){
var inst_9192 = (state_9228[(7)]);
var inst_9206 = cljs.core.vec.call(null,inst_9192);
var state_9228__$1 = state_9228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9228__$1,(11),out,inst_9206);
} else {
if((state_val_9229 === (5))){
var inst_9192 = (state_9228[(7)]);
var inst_9196 = (state_9228[(9)]);
var inst_9193 = (state_9228[(8)]);
var inst_9201 = (state_9228[(11)]);
var inst_9200 = (inst_9192[inst_9193] = inst_9196);
var inst_9201__$1 = (inst_9193 + (1));
var inst_9202 = (inst_9201__$1 < n);
var state_9228__$1 = (function (){var statearr_9242 = state_9228;
(statearr_9242[(12)] = inst_9200);

(statearr_9242[(11)] = inst_9201__$1);

return statearr_9242;
})();
if(cljs.core.truth_(inst_9202)){
var statearr_9243_9266 = state_9228__$1;
(statearr_9243_9266[(1)] = (8));

} else {
var statearr_9244_9267 = state_9228__$1;
(statearr_9244_9267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9229 === (14))){
var inst_9221 = (state_9228[(2)]);
var inst_9222 = cljs.core.async.close_BANG_.call(null,out);
var state_9228__$1 = (function (){var statearr_9246 = state_9228;
(statearr_9246[(13)] = inst_9221);

return statearr_9246;
})();
var statearr_9247_9268 = state_9228__$1;
(statearr_9247_9268[(2)] = inst_9222);

(statearr_9247_9268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9229 === (10))){
var inst_9212 = (state_9228[(2)]);
var state_9228__$1 = state_9228;
var statearr_9248_9269 = state_9228__$1;
(statearr_9248_9269[(2)] = inst_9212);

(statearr_9248_9269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9229 === (8))){
var inst_9192 = (state_9228[(7)]);
var inst_9201 = (state_9228[(11)]);
var tmp9245 = inst_9192;
var inst_9192__$1 = tmp9245;
var inst_9193 = inst_9201;
var state_9228__$1 = (function (){var statearr_9249 = state_9228;
(statearr_9249[(7)] = inst_9192__$1);

(statearr_9249[(8)] = inst_9193);

return statearr_9249;
})();
var statearr_9250_9270 = state_9228__$1;
(statearr_9250_9270[(2)] = null);

(statearr_9250_9270[(1)] = (2));


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
});})(c__5590__auto___9256,out))
;
return ((function (switch__5435__auto__,c__5590__auto___9256,out){
return (function() {
var cljs$core$async$state_machine__5436__auto__ = null;
var cljs$core$async$state_machine__5436__auto____0 = (function (){
var statearr_9251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9251[(0)] = cljs$core$async$state_machine__5436__auto__);

(statearr_9251[(1)] = (1));

return statearr_9251;
});
var cljs$core$async$state_machine__5436__auto____1 = (function (state_9228){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_9228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e9252){if((e9252 instanceof Object)){
var ex__5439__auto__ = e9252;
var statearr_9253_9271 = state_9228;
(statearr_9253_9271[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9272 = state_9228;
state_9228 = G__9272;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$state_machine__5436__auto__ = function(state_9228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5436__auto____1.call(this,state_9228);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5436__auto____0;
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5436__auto____1;
return cljs$core$async$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___9256,out))
})();
var state__5592__auto__ = (function (){var statearr_9254 = f__5591__auto__.call(null);
(statearr_9254[(6)] = c__5590__auto___9256);

return statearr_9254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___9256,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__9274 = arguments.length;
switch (G__9274) {
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
var c__5590__auto___9344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___9344,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___9344,out){
return (function (state_9316){
var state_val_9317 = (state_9316[(1)]);
if((state_val_9317 === (7))){
var inst_9312 = (state_9316[(2)]);
var state_9316__$1 = state_9316;
var statearr_9318_9345 = state_9316__$1;
(statearr_9318_9345[(2)] = inst_9312);

(statearr_9318_9345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9317 === (1))){
var inst_9275 = [];
var inst_9276 = inst_9275;
var inst_9277 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_9316__$1 = (function (){var statearr_9319 = state_9316;
(statearr_9319[(7)] = inst_9277);

(statearr_9319[(8)] = inst_9276);

return statearr_9319;
})();
var statearr_9320_9346 = state_9316__$1;
(statearr_9320_9346[(2)] = null);

(statearr_9320_9346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9317 === (4))){
var inst_9280 = (state_9316[(9)]);
var inst_9280__$1 = (state_9316[(2)]);
var inst_9281 = (inst_9280__$1 == null);
var inst_9282 = cljs.core.not.call(null,inst_9281);
var state_9316__$1 = (function (){var statearr_9321 = state_9316;
(statearr_9321[(9)] = inst_9280__$1);

return statearr_9321;
})();
if(inst_9282){
var statearr_9322_9347 = state_9316__$1;
(statearr_9322_9347[(1)] = (5));

} else {
var statearr_9323_9348 = state_9316__$1;
(statearr_9323_9348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9317 === (15))){
var inst_9306 = (state_9316[(2)]);
var state_9316__$1 = state_9316;
var statearr_9324_9349 = state_9316__$1;
(statearr_9324_9349[(2)] = inst_9306);

(statearr_9324_9349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9317 === (13))){
var state_9316__$1 = state_9316;
var statearr_9325_9350 = state_9316__$1;
(statearr_9325_9350[(2)] = null);

(statearr_9325_9350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9317 === (6))){
var inst_9276 = (state_9316[(8)]);
var inst_9301 = inst_9276.length;
var inst_9302 = (inst_9301 > (0));
var state_9316__$1 = state_9316;
if(cljs.core.truth_(inst_9302)){
var statearr_9326_9351 = state_9316__$1;
(statearr_9326_9351[(1)] = (12));

} else {
var statearr_9327_9352 = state_9316__$1;
(statearr_9327_9352[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9317 === (3))){
var inst_9314 = (state_9316[(2)]);
var state_9316__$1 = state_9316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9316__$1,inst_9314);
} else {
if((state_val_9317 === (12))){
var inst_9276 = (state_9316[(8)]);
var inst_9304 = cljs.core.vec.call(null,inst_9276);
var state_9316__$1 = state_9316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9316__$1,(15),out,inst_9304);
} else {
if((state_val_9317 === (2))){
var state_9316__$1 = state_9316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9316__$1,(4),ch);
} else {
if((state_val_9317 === (11))){
var inst_9284 = (state_9316[(10)]);
var inst_9280 = (state_9316[(9)]);
var inst_9294 = (state_9316[(2)]);
var inst_9295 = [];
var inst_9296 = inst_9295.push(inst_9280);
var inst_9276 = inst_9295;
var inst_9277 = inst_9284;
var state_9316__$1 = (function (){var statearr_9328 = state_9316;
(statearr_9328[(11)] = inst_9296);

(statearr_9328[(7)] = inst_9277);

(statearr_9328[(12)] = inst_9294);

(statearr_9328[(8)] = inst_9276);

return statearr_9328;
})();
var statearr_9329_9353 = state_9316__$1;
(statearr_9329_9353[(2)] = null);

(statearr_9329_9353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9317 === (9))){
var inst_9276 = (state_9316[(8)]);
var inst_9292 = cljs.core.vec.call(null,inst_9276);
var state_9316__$1 = state_9316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9316__$1,(11),out,inst_9292);
} else {
if((state_val_9317 === (5))){
var inst_9284 = (state_9316[(10)]);
var inst_9277 = (state_9316[(7)]);
var inst_9280 = (state_9316[(9)]);
var inst_9284__$1 = f.call(null,inst_9280);
var inst_9285 = cljs.core._EQ_.call(null,inst_9284__$1,inst_9277);
var inst_9286 = cljs.core.keyword_identical_QMARK_.call(null,inst_9277,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_9287 = ((inst_9285) || (inst_9286));
var state_9316__$1 = (function (){var statearr_9330 = state_9316;
(statearr_9330[(10)] = inst_9284__$1);

return statearr_9330;
})();
if(cljs.core.truth_(inst_9287)){
var statearr_9331_9354 = state_9316__$1;
(statearr_9331_9354[(1)] = (8));

} else {
var statearr_9332_9355 = state_9316__$1;
(statearr_9332_9355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9317 === (14))){
var inst_9309 = (state_9316[(2)]);
var inst_9310 = cljs.core.async.close_BANG_.call(null,out);
var state_9316__$1 = (function (){var statearr_9334 = state_9316;
(statearr_9334[(13)] = inst_9309);

return statearr_9334;
})();
var statearr_9335_9356 = state_9316__$1;
(statearr_9335_9356[(2)] = inst_9310);

(statearr_9335_9356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9317 === (10))){
var inst_9299 = (state_9316[(2)]);
var state_9316__$1 = state_9316;
var statearr_9336_9357 = state_9316__$1;
(statearr_9336_9357[(2)] = inst_9299);

(statearr_9336_9357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9317 === (8))){
var inst_9284 = (state_9316[(10)]);
var inst_9280 = (state_9316[(9)]);
var inst_9276 = (state_9316[(8)]);
var inst_9289 = inst_9276.push(inst_9280);
var tmp9333 = inst_9276;
var inst_9276__$1 = tmp9333;
var inst_9277 = inst_9284;
var state_9316__$1 = (function (){var statearr_9337 = state_9316;
(statearr_9337[(7)] = inst_9277);

(statearr_9337[(14)] = inst_9289);

(statearr_9337[(8)] = inst_9276__$1);

return statearr_9337;
})();
var statearr_9338_9358 = state_9316__$1;
(statearr_9338_9358[(2)] = null);

(statearr_9338_9358[(1)] = (2));


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
});})(c__5590__auto___9344,out))
;
return ((function (switch__5435__auto__,c__5590__auto___9344,out){
return (function() {
var cljs$core$async$state_machine__5436__auto__ = null;
var cljs$core$async$state_machine__5436__auto____0 = (function (){
var statearr_9339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9339[(0)] = cljs$core$async$state_machine__5436__auto__);

(statearr_9339[(1)] = (1));

return statearr_9339;
});
var cljs$core$async$state_machine__5436__auto____1 = (function (state_9316){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_9316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e9340){if((e9340 instanceof Object)){
var ex__5439__auto__ = e9340;
var statearr_9341_9359 = state_9316;
(statearr_9341_9359[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9360 = state_9316;
state_9316 = G__9360;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
cljs$core$async$state_machine__5436__auto__ = function(state_9316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5436__auto____1.call(this,state_9316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5436__auto____0;
cljs$core$async$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5436__auto____1;
return cljs$core$async$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___9344,out))
})();
var state__5592__auto__ = (function (){var statearr_9342 = f__5591__auto__.call(null);
(statearr_9342[(6)] = c__5590__auto___9344);

return statearr_9342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___9344,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

