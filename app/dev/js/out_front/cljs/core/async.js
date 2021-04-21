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
var G__21559 = arguments.length;
switch (G__21559) {
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
if(typeof cljs.core.async.t_cljs$core$async21560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21560 = (function (f,blockable,meta21561){
this.f = f;
this.blockable = blockable;
this.meta21561 = meta21561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21562,meta21561__$1){
var self__ = this;
var _21562__$1 = this;
return (new cljs.core.async.t_cljs$core$async21560(self__.f,self__.blockable,meta21561__$1));
});

cljs.core.async.t_cljs$core$async21560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21562){
var self__ = this;
var _21562__$1 = this;
return self__.meta21561;
});

cljs.core.async.t_cljs$core$async21560.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21560.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21561","meta21561",1145885930,null)], null);
});

cljs.core.async.t_cljs$core$async21560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21560";

cljs.core.async.t_cljs$core$async21560.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async21560");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21560.
 */
cljs.core.async.__GT_t_cljs$core$async21560 = (function cljs$core$async$__GT_t_cljs$core$async21560(f__$1,blockable__$1,meta21561){
return (new cljs.core.async.t_cljs$core$async21560(f__$1,blockable__$1,meta21561));
});

}

return (new cljs.core.async.t_cljs$core$async21560(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21566 = arguments.length;
switch (G__21566) {
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
var G__21569 = arguments.length;
switch (G__21569) {
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
var G__21572 = arguments.length;
switch (G__21572) {
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
var val_21574 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21574);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21574,ret){
return (function (){
return fn1.call(null,val_21574);
});})(val_21574,ret))
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
var G__21576 = arguments.length;
switch (G__21576) {
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
var n__4374__auto___21578 = n;
var x_21579 = (0);
while(true){
if((x_21579 < n__4374__auto___21578)){
(a[x_21579] = (0));

var G__21580 = (x_21579 + (1));
x_21579 = G__21580;
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

var G__21581 = (i + (1));
i = G__21581;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21582 = (function (flag,meta21583){
this.flag = flag;
this.meta21583 = meta21583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21584,meta21583__$1){
var self__ = this;
var _21584__$1 = this;
return (new cljs.core.async.t_cljs$core$async21582(self__.flag,meta21583__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21584){
var self__ = this;
var _21584__$1 = this;
return self__.meta21583;
});})(flag))
;

cljs.core.async.t_cljs$core$async21582.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21582.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21583","meta21583",-328503933,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21582";

cljs.core.async.t_cljs$core$async21582.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async21582");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21582.
 */
cljs.core.async.__GT_t_cljs$core$async21582 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21582(flag__$1,meta21583){
return (new cljs.core.async.t_cljs$core$async21582(flag__$1,meta21583));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21582(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21585 = (function (flag,cb,meta21586){
this.flag = flag;
this.cb = cb;
this.meta21586 = meta21586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21587,meta21586__$1){
var self__ = this;
var _21587__$1 = this;
return (new cljs.core.async.t_cljs$core$async21585(self__.flag,self__.cb,meta21586__$1));
});

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21587){
var self__ = this;
var _21587__$1 = this;
return self__.meta21586;
});

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21586","meta21586",873556319,null)], null);
});

cljs.core.async.t_cljs$core$async21585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21585";

cljs.core.async.t_cljs$core$async21585.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async21585");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21585.
 */
cljs.core.async.__GT_t_cljs$core$async21585 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21585(flag__$1,cb__$1,meta21586){
return (new cljs.core.async.t_cljs$core$async21585(flag__$1,cb__$1,meta21586));
});

}

return (new cljs.core.async.t_cljs$core$async21585(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21588_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21588_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21589_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21589_SHARP_,port], null));
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
var G__21590 = (i + (1));
i = G__21590;
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
var len__4497__auto___21596 = arguments.length;
var i__4498__auto___21597 = (0);
while(true){
if((i__4498__auto___21597 < len__4497__auto___21596)){
args__4500__auto__.push((arguments[i__4498__auto___21597]));

var G__21598 = (i__4498__auto___21597 + (1));
i__4498__auto___21597 = G__21598;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21593){
var map__21594 = p__21593;
var map__21594__$1 = ((((!((map__21594 == null)))?(((((map__21594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21594):map__21594);
var opts = map__21594__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21591){
var G__21592 = cljs.core.first.call(null,seq21591);
var seq21591__$1 = cljs.core.next.call(null,seq21591);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21592,seq21591__$1);
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
var G__21600 = arguments.length;
switch (G__21600) {
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
var c__19649__auto___21646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___21646){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___21646){
return (function (state_21624){
var state_val_21625 = (state_21624[(1)]);
if((state_val_21625 === (7))){
var inst_21620 = (state_21624[(2)]);
var state_21624__$1 = state_21624;
var statearr_21626_21647 = state_21624__$1;
(statearr_21626_21647[(2)] = inst_21620);

(statearr_21626_21647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (1))){
var state_21624__$1 = state_21624;
var statearr_21627_21648 = state_21624__$1;
(statearr_21627_21648[(2)] = null);

(statearr_21627_21648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (4))){
var inst_21603 = (state_21624[(7)]);
var inst_21603__$1 = (state_21624[(2)]);
var inst_21604 = (inst_21603__$1 == null);
var state_21624__$1 = (function (){var statearr_21628 = state_21624;
(statearr_21628[(7)] = inst_21603__$1);

return statearr_21628;
})();
if(cljs.core.truth_(inst_21604)){
var statearr_21629_21649 = state_21624__$1;
(statearr_21629_21649[(1)] = (5));

} else {
var statearr_21630_21650 = state_21624__$1;
(statearr_21630_21650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (13))){
var state_21624__$1 = state_21624;
var statearr_21631_21651 = state_21624__$1;
(statearr_21631_21651[(2)] = null);

(statearr_21631_21651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (6))){
var inst_21603 = (state_21624[(7)]);
var state_21624__$1 = state_21624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21624__$1,(11),to,inst_21603);
} else {
if((state_val_21625 === (3))){
var inst_21622 = (state_21624[(2)]);
var state_21624__$1 = state_21624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21624__$1,inst_21622);
} else {
if((state_val_21625 === (12))){
var state_21624__$1 = state_21624;
var statearr_21632_21652 = state_21624__$1;
(statearr_21632_21652[(2)] = null);

(statearr_21632_21652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (2))){
var state_21624__$1 = state_21624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21624__$1,(4),from);
} else {
if((state_val_21625 === (11))){
var inst_21613 = (state_21624[(2)]);
var state_21624__$1 = state_21624;
if(cljs.core.truth_(inst_21613)){
var statearr_21633_21653 = state_21624__$1;
(statearr_21633_21653[(1)] = (12));

} else {
var statearr_21634_21654 = state_21624__$1;
(statearr_21634_21654[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (9))){
var state_21624__$1 = state_21624;
var statearr_21635_21655 = state_21624__$1;
(statearr_21635_21655[(2)] = null);

(statearr_21635_21655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (5))){
var state_21624__$1 = state_21624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21636_21656 = state_21624__$1;
(statearr_21636_21656[(1)] = (8));

} else {
var statearr_21637_21657 = state_21624__$1;
(statearr_21637_21657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (14))){
var inst_21618 = (state_21624[(2)]);
var state_21624__$1 = state_21624;
var statearr_21638_21658 = state_21624__$1;
(statearr_21638_21658[(2)] = inst_21618);

(statearr_21638_21658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (10))){
var inst_21610 = (state_21624[(2)]);
var state_21624__$1 = state_21624;
var statearr_21639_21659 = state_21624__$1;
(statearr_21639_21659[(2)] = inst_21610);

(statearr_21639_21659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21625 === (8))){
var inst_21607 = cljs.core.async.close_BANG_.call(null,to);
var state_21624__$1 = state_21624;
var statearr_21640_21660 = state_21624__$1;
(statearr_21640_21660[(2)] = inst_21607);

(statearr_21640_21660[(1)] = (10));


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
});})(c__19649__auto___21646))
;
return ((function (switch__19494__auto__,c__19649__auto___21646){
return (function() {
var cljs$core$async$state_machine__19495__auto__ = null;
var cljs$core$async$state_machine__19495__auto____0 = (function (){
var statearr_21641 = [null,null,null,null,null,null,null,null];
(statearr_21641[(0)] = cljs$core$async$state_machine__19495__auto__);

(statearr_21641[(1)] = (1));

return statearr_21641;
});
var cljs$core$async$state_machine__19495__auto____1 = (function (state_21624){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_21624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e21642){if((e21642 instanceof Object)){
var ex__19498__auto__ = e21642;
var statearr_21643_21661 = state_21624;
(statearr_21643_21661[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21662 = state_21624;
state_21624 = G__21662;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$state_machine__19495__auto__ = function(state_21624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19495__auto____1.call(this,state_21624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19495__auto____0;
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19495__auto____1;
return cljs$core$async$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___21646))
})();
var state__19651__auto__ = (function (){var statearr_21644 = f__19650__auto__.call(null);
(statearr_21644[(6)] = c__19649__auto___21646);

return statearr_21644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___21646))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21663){
var vec__21664 = p__21663;
var v = cljs.core.nth.call(null,vec__21664,(0),null);
var p = cljs.core.nth.call(null,vec__21664,(1),null);
var job = vec__21664;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19649__auto___21835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___21835,res,vec__21664,v,p,job,jobs,results){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___21835,res,vec__21664,v,p,job,jobs,results){
return (function (state_21671){
var state_val_21672 = (state_21671[(1)]);
if((state_val_21672 === (1))){
var state_21671__$1 = state_21671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21671__$1,(2),res,v);
} else {
if((state_val_21672 === (2))){
var inst_21668 = (state_21671[(2)]);
var inst_21669 = cljs.core.async.close_BANG_.call(null,res);
var state_21671__$1 = (function (){var statearr_21673 = state_21671;
(statearr_21673[(7)] = inst_21668);

return statearr_21673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21671__$1,inst_21669);
} else {
return null;
}
}
});})(c__19649__auto___21835,res,vec__21664,v,p,job,jobs,results))
;
return ((function (switch__19494__auto__,c__19649__auto___21835,res,vec__21664,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0 = (function (){
var statearr_21674 = [null,null,null,null,null,null,null,null];
(statearr_21674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__);

(statearr_21674[(1)] = (1));

return statearr_21674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1 = (function (state_21671){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_21671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e21675){if((e21675 instanceof Object)){
var ex__19498__auto__ = e21675;
var statearr_21676_21836 = state_21671;
(statearr_21676_21836[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21837 = state_21671;
state_21671 = G__21837;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__ = function(state_21671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1.call(this,state_21671);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___21835,res,vec__21664,v,p,job,jobs,results))
})();
var state__19651__auto__ = (function (){var statearr_21677 = f__19650__auto__.call(null);
(statearr_21677[(6)] = c__19649__auto___21835);

return statearr_21677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___21835,res,vec__21664,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21678){
var vec__21679 = p__21678;
var v = cljs.core.nth.call(null,vec__21679,(0),null);
var p = cljs.core.nth.call(null,vec__21679,(1),null);
var job = vec__21679;
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
var n__4374__auto___21838 = n;
var __21839 = (0);
while(true){
if((__21839 < n__4374__auto___21838)){
var G__21682_21840 = type;
var G__21682_21841__$1 = (((G__21682_21840 instanceof cljs.core.Keyword))?G__21682_21840.fqn:null);
switch (G__21682_21841__$1) {
case "compute":
var c__19649__auto___21843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21839,c__19649__auto___21843,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (__21839,c__19649__auto___21843,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async){
return (function (state_21695){
var state_val_21696 = (state_21695[(1)]);
if((state_val_21696 === (1))){
var state_21695__$1 = state_21695;
var statearr_21697_21844 = state_21695__$1;
(statearr_21697_21844[(2)] = null);

(statearr_21697_21844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (2))){
var state_21695__$1 = state_21695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21695__$1,(4),jobs);
} else {
if((state_val_21696 === (3))){
var inst_21693 = (state_21695[(2)]);
var state_21695__$1 = state_21695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21695__$1,inst_21693);
} else {
if((state_val_21696 === (4))){
var inst_21685 = (state_21695[(2)]);
var inst_21686 = process.call(null,inst_21685);
var state_21695__$1 = state_21695;
if(cljs.core.truth_(inst_21686)){
var statearr_21698_21845 = state_21695__$1;
(statearr_21698_21845[(1)] = (5));

} else {
var statearr_21699_21846 = state_21695__$1;
(statearr_21699_21846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (5))){
var state_21695__$1 = state_21695;
var statearr_21700_21847 = state_21695__$1;
(statearr_21700_21847[(2)] = null);

(statearr_21700_21847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (6))){
var state_21695__$1 = state_21695;
var statearr_21701_21848 = state_21695__$1;
(statearr_21701_21848[(2)] = null);

(statearr_21701_21848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (7))){
var inst_21691 = (state_21695[(2)]);
var state_21695__$1 = state_21695;
var statearr_21702_21849 = state_21695__$1;
(statearr_21702_21849[(2)] = inst_21691);

(statearr_21702_21849[(1)] = (3));


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
});})(__21839,c__19649__auto___21843,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async))
;
return ((function (__21839,switch__19494__auto__,c__19649__auto___21843,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0 = (function (){
var statearr_21703 = [null,null,null,null,null,null,null];
(statearr_21703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__);

(statearr_21703[(1)] = (1));

return statearr_21703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1 = (function (state_21695){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_21695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e21704){if((e21704 instanceof Object)){
var ex__19498__auto__ = e21704;
var statearr_21705_21850 = state_21695;
(statearr_21705_21850[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21851 = state_21695;
state_21695 = G__21851;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__ = function(state_21695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1.call(this,state_21695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__;
})()
;})(__21839,switch__19494__auto__,c__19649__auto___21843,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async))
})();
var state__19651__auto__ = (function (){var statearr_21706 = f__19650__auto__.call(null);
(statearr_21706[(6)] = c__19649__auto___21843);

return statearr_21706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(__21839,c__19649__auto___21843,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async))
);


break;
case "async":
var c__19649__auto___21852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21839,c__19649__auto___21852,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (__21839,c__19649__auto___21852,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async){
return (function (state_21719){
var state_val_21720 = (state_21719[(1)]);
if((state_val_21720 === (1))){
var state_21719__$1 = state_21719;
var statearr_21721_21853 = state_21719__$1;
(statearr_21721_21853[(2)] = null);

(statearr_21721_21853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (2))){
var state_21719__$1 = state_21719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21719__$1,(4),jobs);
} else {
if((state_val_21720 === (3))){
var inst_21717 = (state_21719[(2)]);
var state_21719__$1 = state_21719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21719__$1,inst_21717);
} else {
if((state_val_21720 === (4))){
var inst_21709 = (state_21719[(2)]);
var inst_21710 = async.call(null,inst_21709);
var state_21719__$1 = state_21719;
if(cljs.core.truth_(inst_21710)){
var statearr_21722_21854 = state_21719__$1;
(statearr_21722_21854[(1)] = (5));

} else {
var statearr_21723_21855 = state_21719__$1;
(statearr_21723_21855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (5))){
var state_21719__$1 = state_21719;
var statearr_21724_21856 = state_21719__$1;
(statearr_21724_21856[(2)] = null);

(statearr_21724_21856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (6))){
var state_21719__$1 = state_21719;
var statearr_21725_21857 = state_21719__$1;
(statearr_21725_21857[(2)] = null);

(statearr_21725_21857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (7))){
var inst_21715 = (state_21719[(2)]);
var state_21719__$1 = state_21719;
var statearr_21726_21858 = state_21719__$1;
(statearr_21726_21858[(2)] = inst_21715);

(statearr_21726_21858[(1)] = (3));


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
});})(__21839,c__19649__auto___21852,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async))
;
return ((function (__21839,switch__19494__auto__,c__19649__auto___21852,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0 = (function (){
var statearr_21727 = [null,null,null,null,null,null,null];
(statearr_21727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__);

(statearr_21727[(1)] = (1));

return statearr_21727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1 = (function (state_21719){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_21719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e21728){if((e21728 instanceof Object)){
var ex__19498__auto__ = e21728;
var statearr_21729_21859 = state_21719;
(statearr_21729_21859[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21860 = state_21719;
state_21719 = G__21860;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__ = function(state_21719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1.call(this,state_21719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__;
})()
;})(__21839,switch__19494__auto__,c__19649__auto___21852,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async))
})();
var state__19651__auto__ = (function (){var statearr_21730 = f__19650__auto__.call(null);
(statearr_21730[(6)] = c__19649__auto___21852);

return statearr_21730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(__21839,c__19649__auto___21852,G__21682_21840,G__21682_21841__$1,n__4374__auto___21838,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21682_21841__$1)].join('')));

}

var G__21861 = (__21839 + (1));
__21839 = G__21861;
continue;
} else {
}
break;
}

var c__19649__auto___21862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___21862,jobs,results,process,async){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___21862,jobs,results,process,async){
return (function (state_21752){
var state_val_21753 = (state_21752[(1)]);
if((state_val_21753 === (1))){
var state_21752__$1 = state_21752;
var statearr_21754_21863 = state_21752__$1;
(statearr_21754_21863[(2)] = null);

(statearr_21754_21863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21753 === (2))){
var state_21752__$1 = state_21752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21752__$1,(4),from);
} else {
if((state_val_21753 === (3))){
var inst_21750 = (state_21752[(2)]);
var state_21752__$1 = state_21752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21752__$1,inst_21750);
} else {
if((state_val_21753 === (4))){
var inst_21733 = (state_21752[(7)]);
var inst_21733__$1 = (state_21752[(2)]);
var inst_21734 = (inst_21733__$1 == null);
var state_21752__$1 = (function (){var statearr_21755 = state_21752;
(statearr_21755[(7)] = inst_21733__$1);

return statearr_21755;
})();
if(cljs.core.truth_(inst_21734)){
var statearr_21756_21864 = state_21752__$1;
(statearr_21756_21864[(1)] = (5));

} else {
var statearr_21757_21865 = state_21752__$1;
(statearr_21757_21865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21753 === (5))){
var inst_21736 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21752__$1 = state_21752;
var statearr_21758_21866 = state_21752__$1;
(statearr_21758_21866[(2)] = inst_21736);

(statearr_21758_21866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21753 === (6))){
var inst_21733 = (state_21752[(7)]);
var inst_21738 = (state_21752[(8)]);
var inst_21738__$1 = cljs.core.async.chan.call(null,(1));
var inst_21739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21740 = [inst_21733,inst_21738__$1];
var inst_21741 = (new cljs.core.PersistentVector(null,2,(5),inst_21739,inst_21740,null));
var state_21752__$1 = (function (){var statearr_21759 = state_21752;
(statearr_21759[(8)] = inst_21738__$1);

return statearr_21759;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21752__$1,(8),jobs,inst_21741);
} else {
if((state_val_21753 === (7))){
var inst_21748 = (state_21752[(2)]);
var state_21752__$1 = state_21752;
var statearr_21760_21867 = state_21752__$1;
(statearr_21760_21867[(2)] = inst_21748);

(statearr_21760_21867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21753 === (8))){
var inst_21738 = (state_21752[(8)]);
var inst_21743 = (state_21752[(2)]);
var state_21752__$1 = (function (){var statearr_21761 = state_21752;
(statearr_21761[(9)] = inst_21743);

return statearr_21761;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21752__$1,(9),results,inst_21738);
} else {
if((state_val_21753 === (9))){
var inst_21745 = (state_21752[(2)]);
var state_21752__$1 = (function (){var statearr_21762 = state_21752;
(statearr_21762[(10)] = inst_21745);

return statearr_21762;
})();
var statearr_21763_21868 = state_21752__$1;
(statearr_21763_21868[(2)] = null);

(statearr_21763_21868[(1)] = (2));


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
});})(c__19649__auto___21862,jobs,results,process,async))
;
return ((function (switch__19494__auto__,c__19649__auto___21862,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0 = (function (){
var statearr_21764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__);

(statearr_21764[(1)] = (1));

return statearr_21764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1 = (function (state_21752){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_21752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e21765){if((e21765 instanceof Object)){
var ex__19498__auto__ = e21765;
var statearr_21766_21869 = state_21752;
(statearr_21766_21869[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21870 = state_21752;
state_21752 = G__21870;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__ = function(state_21752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1.call(this,state_21752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___21862,jobs,results,process,async))
})();
var state__19651__auto__ = (function (){var statearr_21767 = f__19650__auto__.call(null);
(statearr_21767[(6)] = c__19649__auto___21862);

return statearr_21767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___21862,jobs,results,process,async))
);


var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__,jobs,results,process,async){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto__,jobs,results,process,async){
return (function (state_21805){
var state_val_21806 = (state_21805[(1)]);
if((state_val_21806 === (7))){
var inst_21801 = (state_21805[(2)]);
var state_21805__$1 = state_21805;
var statearr_21807_21871 = state_21805__$1;
(statearr_21807_21871[(2)] = inst_21801);

(statearr_21807_21871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (20))){
var state_21805__$1 = state_21805;
var statearr_21808_21872 = state_21805__$1;
(statearr_21808_21872[(2)] = null);

(statearr_21808_21872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (1))){
var state_21805__$1 = state_21805;
var statearr_21809_21873 = state_21805__$1;
(statearr_21809_21873[(2)] = null);

(statearr_21809_21873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (4))){
var inst_21770 = (state_21805[(7)]);
var inst_21770__$1 = (state_21805[(2)]);
var inst_21771 = (inst_21770__$1 == null);
var state_21805__$1 = (function (){var statearr_21810 = state_21805;
(statearr_21810[(7)] = inst_21770__$1);

return statearr_21810;
})();
if(cljs.core.truth_(inst_21771)){
var statearr_21811_21874 = state_21805__$1;
(statearr_21811_21874[(1)] = (5));

} else {
var statearr_21812_21875 = state_21805__$1;
(statearr_21812_21875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (15))){
var inst_21783 = (state_21805[(8)]);
var state_21805__$1 = state_21805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21805__$1,(18),to,inst_21783);
} else {
if((state_val_21806 === (21))){
var inst_21796 = (state_21805[(2)]);
var state_21805__$1 = state_21805;
var statearr_21813_21876 = state_21805__$1;
(statearr_21813_21876[(2)] = inst_21796);

(statearr_21813_21876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (13))){
var inst_21798 = (state_21805[(2)]);
var state_21805__$1 = (function (){var statearr_21814 = state_21805;
(statearr_21814[(9)] = inst_21798);

return statearr_21814;
})();
var statearr_21815_21877 = state_21805__$1;
(statearr_21815_21877[(2)] = null);

(statearr_21815_21877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (6))){
var inst_21770 = (state_21805[(7)]);
var state_21805__$1 = state_21805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21805__$1,(11),inst_21770);
} else {
if((state_val_21806 === (17))){
var inst_21791 = (state_21805[(2)]);
var state_21805__$1 = state_21805;
if(cljs.core.truth_(inst_21791)){
var statearr_21816_21878 = state_21805__$1;
(statearr_21816_21878[(1)] = (19));

} else {
var statearr_21817_21879 = state_21805__$1;
(statearr_21817_21879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (3))){
var inst_21803 = (state_21805[(2)]);
var state_21805__$1 = state_21805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21805__$1,inst_21803);
} else {
if((state_val_21806 === (12))){
var inst_21780 = (state_21805[(10)]);
var state_21805__$1 = state_21805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21805__$1,(14),inst_21780);
} else {
if((state_val_21806 === (2))){
var state_21805__$1 = state_21805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21805__$1,(4),results);
} else {
if((state_val_21806 === (19))){
var state_21805__$1 = state_21805;
var statearr_21818_21880 = state_21805__$1;
(statearr_21818_21880[(2)] = null);

(statearr_21818_21880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (11))){
var inst_21780 = (state_21805[(2)]);
var state_21805__$1 = (function (){var statearr_21819 = state_21805;
(statearr_21819[(10)] = inst_21780);

return statearr_21819;
})();
var statearr_21820_21881 = state_21805__$1;
(statearr_21820_21881[(2)] = null);

(statearr_21820_21881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (9))){
var state_21805__$1 = state_21805;
var statearr_21821_21882 = state_21805__$1;
(statearr_21821_21882[(2)] = null);

(statearr_21821_21882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (5))){
var state_21805__$1 = state_21805;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21822_21883 = state_21805__$1;
(statearr_21822_21883[(1)] = (8));

} else {
var statearr_21823_21884 = state_21805__$1;
(statearr_21823_21884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (14))){
var inst_21785 = (state_21805[(11)]);
var inst_21783 = (state_21805[(8)]);
var inst_21783__$1 = (state_21805[(2)]);
var inst_21784 = (inst_21783__$1 == null);
var inst_21785__$1 = cljs.core.not.call(null,inst_21784);
var state_21805__$1 = (function (){var statearr_21824 = state_21805;
(statearr_21824[(11)] = inst_21785__$1);

(statearr_21824[(8)] = inst_21783__$1);

return statearr_21824;
})();
if(inst_21785__$1){
var statearr_21825_21885 = state_21805__$1;
(statearr_21825_21885[(1)] = (15));

} else {
var statearr_21826_21886 = state_21805__$1;
(statearr_21826_21886[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (16))){
var inst_21785 = (state_21805[(11)]);
var state_21805__$1 = state_21805;
var statearr_21827_21887 = state_21805__$1;
(statearr_21827_21887[(2)] = inst_21785);

(statearr_21827_21887[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (10))){
var inst_21777 = (state_21805[(2)]);
var state_21805__$1 = state_21805;
var statearr_21828_21888 = state_21805__$1;
(statearr_21828_21888[(2)] = inst_21777);

(statearr_21828_21888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (18))){
var inst_21788 = (state_21805[(2)]);
var state_21805__$1 = state_21805;
var statearr_21829_21889 = state_21805__$1;
(statearr_21829_21889[(2)] = inst_21788);

(statearr_21829_21889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (8))){
var inst_21774 = cljs.core.async.close_BANG_.call(null,to);
var state_21805__$1 = state_21805;
var statearr_21830_21890 = state_21805__$1;
(statearr_21830_21890[(2)] = inst_21774);

(statearr_21830_21890[(1)] = (10));


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
});})(c__19649__auto__,jobs,results,process,async))
;
return ((function (switch__19494__auto__,c__19649__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0 = (function (){
var statearr_21831 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__);

(statearr_21831[(1)] = (1));

return statearr_21831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1 = (function (state_21805){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_21805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e21832){if((e21832 instanceof Object)){
var ex__19498__auto__ = e21832;
var statearr_21833_21891 = state_21805;
(statearr_21833_21891[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21892 = state_21805;
state_21805 = G__21892;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__ = function(state_21805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1.call(this,state_21805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto__,jobs,results,process,async))
})();
var state__19651__auto__ = (function (){var statearr_21834 = f__19650__auto__.call(null);
(statearr_21834[(6)] = c__19649__auto__);

return statearr_21834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__,jobs,results,process,async))
);

return c__19649__auto__;
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
var G__21894 = arguments.length;
switch (G__21894) {
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
var G__21897 = arguments.length;
switch (G__21897) {
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
var G__21900 = arguments.length;
switch (G__21900) {
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
var c__19649__auto___21949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___21949,tc,fc){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___21949,tc,fc){
return (function (state_21926){
var state_val_21927 = (state_21926[(1)]);
if((state_val_21927 === (7))){
var inst_21922 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21928_21950 = state_21926__$1;
(statearr_21928_21950[(2)] = inst_21922);

(statearr_21928_21950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (1))){
var state_21926__$1 = state_21926;
var statearr_21929_21951 = state_21926__$1;
(statearr_21929_21951[(2)] = null);

(statearr_21929_21951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (4))){
var inst_21903 = (state_21926[(7)]);
var inst_21903__$1 = (state_21926[(2)]);
var inst_21904 = (inst_21903__$1 == null);
var state_21926__$1 = (function (){var statearr_21930 = state_21926;
(statearr_21930[(7)] = inst_21903__$1);

return statearr_21930;
})();
if(cljs.core.truth_(inst_21904)){
var statearr_21931_21952 = state_21926__$1;
(statearr_21931_21952[(1)] = (5));

} else {
var statearr_21932_21953 = state_21926__$1;
(statearr_21932_21953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (13))){
var state_21926__$1 = state_21926;
var statearr_21933_21954 = state_21926__$1;
(statearr_21933_21954[(2)] = null);

(statearr_21933_21954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (6))){
var inst_21903 = (state_21926[(7)]);
var inst_21909 = p.call(null,inst_21903);
var state_21926__$1 = state_21926;
if(cljs.core.truth_(inst_21909)){
var statearr_21934_21955 = state_21926__$1;
(statearr_21934_21955[(1)] = (9));

} else {
var statearr_21935_21956 = state_21926__$1;
(statearr_21935_21956[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (3))){
var inst_21924 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21926__$1,inst_21924);
} else {
if((state_val_21927 === (12))){
var state_21926__$1 = state_21926;
var statearr_21936_21957 = state_21926__$1;
(statearr_21936_21957[(2)] = null);

(statearr_21936_21957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (2))){
var state_21926__$1 = state_21926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21926__$1,(4),ch);
} else {
if((state_val_21927 === (11))){
var inst_21903 = (state_21926[(7)]);
var inst_21913 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21926__$1,(8),inst_21913,inst_21903);
} else {
if((state_val_21927 === (9))){
var state_21926__$1 = state_21926;
var statearr_21937_21958 = state_21926__$1;
(statearr_21937_21958[(2)] = tc);

(statearr_21937_21958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (5))){
var inst_21906 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21907 = cljs.core.async.close_BANG_.call(null,fc);
var state_21926__$1 = (function (){var statearr_21938 = state_21926;
(statearr_21938[(8)] = inst_21906);

return statearr_21938;
})();
var statearr_21939_21959 = state_21926__$1;
(statearr_21939_21959[(2)] = inst_21907);

(statearr_21939_21959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (14))){
var inst_21920 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21940_21960 = state_21926__$1;
(statearr_21940_21960[(2)] = inst_21920);

(statearr_21940_21960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (10))){
var state_21926__$1 = state_21926;
var statearr_21941_21961 = state_21926__$1;
(statearr_21941_21961[(2)] = fc);

(statearr_21941_21961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (8))){
var inst_21915 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
if(cljs.core.truth_(inst_21915)){
var statearr_21942_21962 = state_21926__$1;
(statearr_21942_21962[(1)] = (12));

} else {
var statearr_21943_21963 = state_21926__$1;
(statearr_21943_21963[(1)] = (13));

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
});})(c__19649__auto___21949,tc,fc))
;
return ((function (switch__19494__auto__,c__19649__auto___21949,tc,fc){
return (function() {
var cljs$core$async$state_machine__19495__auto__ = null;
var cljs$core$async$state_machine__19495__auto____0 = (function (){
var statearr_21944 = [null,null,null,null,null,null,null,null,null];
(statearr_21944[(0)] = cljs$core$async$state_machine__19495__auto__);

(statearr_21944[(1)] = (1));

return statearr_21944;
});
var cljs$core$async$state_machine__19495__auto____1 = (function (state_21926){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_21926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e21945){if((e21945 instanceof Object)){
var ex__19498__auto__ = e21945;
var statearr_21946_21964 = state_21926;
(statearr_21946_21964[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21965 = state_21926;
state_21926 = G__21965;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$state_machine__19495__auto__ = function(state_21926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19495__auto____1.call(this,state_21926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19495__auto____0;
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19495__auto____1;
return cljs$core$async$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___21949,tc,fc))
})();
var state__19651__auto__ = (function (){var statearr_21947 = f__19650__auto__.call(null);
(statearr_21947[(6)] = c__19649__auto___21949);

return statearr_21947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___21949,tc,fc))
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
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto__){
return (function (state_21986){
var state_val_21987 = (state_21986[(1)]);
if((state_val_21987 === (7))){
var inst_21982 = (state_21986[(2)]);
var state_21986__$1 = state_21986;
var statearr_21988_22006 = state_21986__$1;
(statearr_21988_22006[(2)] = inst_21982);

(statearr_21988_22006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21987 === (1))){
var inst_21966 = init;
var state_21986__$1 = (function (){var statearr_21989 = state_21986;
(statearr_21989[(7)] = inst_21966);

return statearr_21989;
})();
var statearr_21990_22007 = state_21986__$1;
(statearr_21990_22007[(2)] = null);

(statearr_21990_22007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21987 === (4))){
var inst_21969 = (state_21986[(8)]);
var inst_21969__$1 = (state_21986[(2)]);
var inst_21970 = (inst_21969__$1 == null);
var state_21986__$1 = (function (){var statearr_21991 = state_21986;
(statearr_21991[(8)] = inst_21969__$1);

return statearr_21991;
})();
if(cljs.core.truth_(inst_21970)){
var statearr_21992_22008 = state_21986__$1;
(statearr_21992_22008[(1)] = (5));

} else {
var statearr_21993_22009 = state_21986__$1;
(statearr_21993_22009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21987 === (6))){
var inst_21969 = (state_21986[(8)]);
var inst_21973 = (state_21986[(9)]);
var inst_21966 = (state_21986[(7)]);
var inst_21973__$1 = f.call(null,inst_21966,inst_21969);
var inst_21974 = cljs.core.reduced_QMARK_.call(null,inst_21973__$1);
var state_21986__$1 = (function (){var statearr_21994 = state_21986;
(statearr_21994[(9)] = inst_21973__$1);

return statearr_21994;
})();
if(inst_21974){
var statearr_21995_22010 = state_21986__$1;
(statearr_21995_22010[(1)] = (8));

} else {
var statearr_21996_22011 = state_21986__$1;
(statearr_21996_22011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21987 === (3))){
var inst_21984 = (state_21986[(2)]);
var state_21986__$1 = state_21986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21986__$1,inst_21984);
} else {
if((state_val_21987 === (2))){
var state_21986__$1 = state_21986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21986__$1,(4),ch);
} else {
if((state_val_21987 === (9))){
var inst_21973 = (state_21986[(9)]);
var inst_21966 = inst_21973;
var state_21986__$1 = (function (){var statearr_21997 = state_21986;
(statearr_21997[(7)] = inst_21966);

return statearr_21997;
})();
var statearr_21998_22012 = state_21986__$1;
(statearr_21998_22012[(2)] = null);

(statearr_21998_22012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21987 === (5))){
var inst_21966 = (state_21986[(7)]);
var state_21986__$1 = state_21986;
var statearr_21999_22013 = state_21986__$1;
(statearr_21999_22013[(2)] = inst_21966);

(statearr_21999_22013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21987 === (10))){
var inst_21980 = (state_21986[(2)]);
var state_21986__$1 = state_21986;
var statearr_22000_22014 = state_21986__$1;
(statearr_22000_22014[(2)] = inst_21980);

(statearr_22000_22014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21987 === (8))){
var inst_21973 = (state_21986[(9)]);
var inst_21976 = cljs.core.deref.call(null,inst_21973);
var state_21986__$1 = state_21986;
var statearr_22001_22015 = state_21986__$1;
(statearr_22001_22015[(2)] = inst_21976);

(statearr_22001_22015[(1)] = (10));


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
});})(c__19649__auto__))
;
return ((function (switch__19494__auto__,c__19649__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19495__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19495__auto____0 = (function (){
var statearr_22002 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22002[(0)] = cljs$core$async$reduce_$_state_machine__19495__auto__);

(statearr_22002[(1)] = (1));

return statearr_22002;
});
var cljs$core$async$reduce_$_state_machine__19495__auto____1 = (function (state_21986){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_21986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e22003){if((e22003 instanceof Object)){
var ex__19498__auto__ = e22003;
var statearr_22004_22016 = state_21986;
(statearr_22004_22016[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22017 = state_21986;
state_21986 = G__22017;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19495__auto__ = function(state_21986){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19495__auto____1.call(this,state_21986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19495__auto____0;
cljs$core$async$reduce_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19495__auto____1;
return cljs$core$async$reduce_$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto__))
})();
var state__19651__auto__ = (function (){var statearr_22005 = f__19650__auto__.call(null);
(statearr_22005[(6)] = c__19649__auto__);

return statearr_22005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__))
);

return c__19649__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__,f__$1){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto__,f__$1){
return (function (state_22023){
var state_val_22024 = (state_22023[(1)]);
if((state_val_22024 === (1))){
var inst_22018 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22023__$1 = state_22023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22023__$1,(2),inst_22018);
} else {
if((state_val_22024 === (2))){
var inst_22020 = (state_22023[(2)]);
var inst_22021 = f__$1.call(null,inst_22020);
var state_22023__$1 = state_22023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22023__$1,inst_22021);
} else {
return null;
}
}
});})(c__19649__auto__,f__$1))
;
return ((function (switch__19494__auto__,c__19649__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__19495__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19495__auto____0 = (function (){
var statearr_22025 = [null,null,null,null,null,null,null];
(statearr_22025[(0)] = cljs$core$async$transduce_$_state_machine__19495__auto__);

(statearr_22025[(1)] = (1));

return statearr_22025;
});
var cljs$core$async$transduce_$_state_machine__19495__auto____1 = (function (state_22023){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_22023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e22026){if((e22026 instanceof Object)){
var ex__19498__auto__ = e22026;
var statearr_22027_22029 = state_22023;
(statearr_22027_22029[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22030 = state_22023;
state_22023 = G__22030;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19495__auto__ = function(state_22023){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19495__auto____1.call(this,state_22023);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19495__auto____0;
cljs$core$async$transduce_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19495__auto____1;
return cljs$core$async$transduce_$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto__,f__$1))
})();
var state__19651__auto__ = (function (){var statearr_22028 = f__19650__auto__.call(null);
(statearr_22028[(6)] = c__19649__auto__);

return statearr_22028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__,f__$1))
);

return c__19649__auto__;
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
var G__22032 = arguments.length;
switch (G__22032) {
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
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto__){
return (function (state_22057){
var state_val_22058 = (state_22057[(1)]);
if((state_val_22058 === (7))){
var inst_22039 = (state_22057[(2)]);
var state_22057__$1 = state_22057;
var statearr_22059_22080 = state_22057__$1;
(statearr_22059_22080[(2)] = inst_22039);

(statearr_22059_22080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22058 === (1))){
var inst_22033 = cljs.core.seq.call(null,coll);
var inst_22034 = inst_22033;
var state_22057__$1 = (function (){var statearr_22060 = state_22057;
(statearr_22060[(7)] = inst_22034);

return statearr_22060;
})();
var statearr_22061_22081 = state_22057__$1;
(statearr_22061_22081[(2)] = null);

(statearr_22061_22081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22058 === (4))){
var inst_22034 = (state_22057[(7)]);
var inst_22037 = cljs.core.first.call(null,inst_22034);
var state_22057__$1 = state_22057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22057__$1,(7),ch,inst_22037);
} else {
if((state_val_22058 === (13))){
var inst_22051 = (state_22057[(2)]);
var state_22057__$1 = state_22057;
var statearr_22062_22082 = state_22057__$1;
(statearr_22062_22082[(2)] = inst_22051);

(statearr_22062_22082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22058 === (6))){
var inst_22042 = (state_22057[(2)]);
var state_22057__$1 = state_22057;
if(cljs.core.truth_(inst_22042)){
var statearr_22063_22083 = state_22057__$1;
(statearr_22063_22083[(1)] = (8));

} else {
var statearr_22064_22084 = state_22057__$1;
(statearr_22064_22084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22058 === (3))){
var inst_22055 = (state_22057[(2)]);
var state_22057__$1 = state_22057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22057__$1,inst_22055);
} else {
if((state_val_22058 === (12))){
var state_22057__$1 = state_22057;
var statearr_22065_22085 = state_22057__$1;
(statearr_22065_22085[(2)] = null);

(statearr_22065_22085[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22058 === (2))){
var inst_22034 = (state_22057[(7)]);
var state_22057__$1 = state_22057;
if(cljs.core.truth_(inst_22034)){
var statearr_22066_22086 = state_22057__$1;
(statearr_22066_22086[(1)] = (4));

} else {
var statearr_22067_22087 = state_22057__$1;
(statearr_22067_22087[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22058 === (11))){
var inst_22048 = cljs.core.async.close_BANG_.call(null,ch);
var state_22057__$1 = state_22057;
var statearr_22068_22088 = state_22057__$1;
(statearr_22068_22088[(2)] = inst_22048);

(statearr_22068_22088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22058 === (9))){
var state_22057__$1 = state_22057;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22069_22089 = state_22057__$1;
(statearr_22069_22089[(1)] = (11));

} else {
var statearr_22070_22090 = state_22057__$1;
(statearr_22070_22090[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22058 === (5))){
var inst_22034 = (state_22057[(7)]);
var state_22057__$1 = state_22057;
var statearr_22071_22091 = state_22057__$1;
(statearr_22071_22091[(2)] = inst_22034);

(statearr_22071_22091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22058 === (10))){
var inst_22053 = (state_22057[(2)]);
var state_22057__$1 = state_22057;
var statearr_22072_22092 = state_22057__$1;
(statearr_22072_22092[(2)] = inst_22053);

(statearr_22072_22092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22058 === (8))){
var inst_22034 = (state_22057[(7)]);
var inst_22044 = cljs.core.next.call(null,inst_22034);
var inst_22034__$1 = inst_22044;
var state_22057__$1 = (function (){var statearr_22073 = state_22057;
(statearr_22073[(7)] = inst_22034__$1);

return statearr_22073;
})();
var statearr_22074_22093 = state_22057__$1;
(statearr_22074_22093[(2)] = null);

(statearr_22074_22093[(1)] = (2));


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
});})(c__19649__auto__))
;
return ((function (switch__19494__auto__,c__19649__auto__){
return (function() {
var cljs$core$async$state_machine__19495__auto__ = null;
var cljs$core$async$state_machine__19495__auto____0 = (function (){
var statearr_22075 = [null,null,null,null,null,null,null,null];
(statearr_22075[(0)] = cljs$core$async$state_machine__19495__auto__);

(statearr_22075[(1)] = (1));

return statearr_22075;
});
var cljs$core$async$state_machine__19495__auto____1 = (function (state_22057){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_22057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e22076){if((e22076 instanceof Object)){
var ex__19498__auto__ = e22076;
var statearr_22077_22094 = state_22057;
(statearr_22077_22094[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22095 = state_22057;
state_22057 = G__22095;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$state_machine__19495__auto__ = function(state_22057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19495__auto____1.call(this,state_22057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19495__auto____0;
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19495__auto____1;
return cljs$core$async$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto__))
})();
var state__19651__auto__ = (function (){var statearr_22078 = f__19650__auto__.call(null);
(statearr_22078[(6)] = c__19649__auto__);

return statearr_22078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__))
);

return c__19649__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22096 = (function (ch,cs,meta22097){
this.ch = ch;
this.cs = cs;
this.meta22097 = meta22097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22098,meta22097__$1){
var self__ = this;
var _22098__$1 = this;
return (new cljs.core.async.t_cljs$core$async22096(self__.ch,self__.cs,meta22097__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22098){
var self__ = this;
var _22098__$1 = this;
return self__.meta22097;
});})(cs))
;

cljs.core.async.t_cljs$core$async22096.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22096.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22096.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22096.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22096.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22096.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22097","meta22097",1755457454,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22096";

cljs.core.async.t_cljs$core$async22096.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22096");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22096.
 */
cljs.core.async.__GT_t_cljs$core$async22096 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22096(ch__$1,cs__$1,meta22097){
return (new cljs.core.async.t_cljs$core$async22096(ch__$1,cs__$1,meta22097));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22096(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19649__auto___22318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___22318,cs,m,dchan,dctr,done){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___22318,cs,m,dchan,dctr,done){
return (function (state_22233){
var state_val_22234 = (state_22233[(1)]);
if((state_val_22234 === (7))){
var inst_22229 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22235_22319 = state_22233__$1;
(statearr_22235_22319[(2)] = inst_22229);

(statearr_22235_22319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (20))){
var inst_22132 = (state_22233[(7)]);
var inst_22144 = cljs.core.first.call(null,inst_22132);
var inst_22145 = cljs.core.nth.call(null,inst_22144,(0),null);
var inst_22146 = cljs.core.nth.call(null,inst_22144,(1),null);
var state_22233__$1 = (function (){var statearr_22236 = state_22233;
(statearr_22236[(8)] = inst_22145);

return statearr_22236;
})();
if(cljs.core.truth_(inst_22146)){
var statearr_22237_22320 = state_22233__$1;
(statearr_22237_22320[(1)] = (22));

} else {
var statearr_22238_22321 = state_22233__$1;
(statearr_22238_22321[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (27))){
var inst_22181 = (state_22233[(9)]);
var inst_22176 = (state_22233[(10)]);
var inst_22101 = (state_22233[(11)]);
var inst_22174 = (state_22233[(12)]);
var inst_22181__$1 = cljs.core._nth.call(null,inst_22174,inst_22176);
var inst_22182 = cljs.core.async.put_BANG_.call(null,inst_22181__$1,inst_22101,done);
var state_22233__$1 = (function (){var statearr_22239 = state_22233;
(statearr_22239[(9)] = inst_22181__$1);

return statearr_22239;
})();
if(cljs.core.truth_(inst_22182)){
var statearr_22240_22322 = state_22233__$1;
(statearr_22240_22322[(1)] = (30));

} else {
var statearr_22241_22323 = state_22233__$1;
(statearr_22241_22323[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (1))){
var state_22233__$1 = state_22233;
var statearr_22242_22324 = state_22233__$1;
(statearr_22242_22324[(2)] = null);

(statearr_22242_22324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (24))){
var inst_22132 = (state_22233[(7)]);
var inst_22151 = (state_22233[(2)]);
var inst_22152 = cljs.core.next.call(null,inst_22132);
var inst_22110 = inst_22152;
var inst_22111 = null;
var inst_22112 = (0);
var inst_22113 = (0);
var state_22233__$1 = (function (){var statearr_22243 = state_22233;
(statearr_22243[(13)] = inst_22112);

(statearr_22243[(14)] = inst_22151);

(statearr_22243[(15)] = inst_22111);

(statearr_22243[(16)] = inst_22113);

(statearr_22243[(17)] = inst_22110);

return statearr_22243;
})();
var statearr_22244_22325 = state_22233__$1;
(statearr_22244_22325[(2)] = null);

(statearr_22244_22325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (39))){
var state_22233__$1 = state_22233;
var statearr_22248_22326 = state_22233__$1;
(statearr_22248_22326[(2)] = null);

(statearr_22248_22326[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (4))){
var inst_22101 = (state_22233[(11)]);
var inst_22101__$1 = (state_22233[(2)]);
var inst_22102 = (inst_22101__$1 == null);
var state_22233__$1 = (function (){var statearr_22249 = state_22233;
(statearr_22249[(11)] = inst_22101__$1);

return statearr_22249;
})();
if(cljs.core.truth_(inst_22102)){
var statearr_22250_22327 = state_22233__$1;
(statearr_22250_22327[(1)] = (5));

} else {
var statearr_22251_22328 = state_22233__$1;
(statearr_22251_22328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (15))){
var inst_22112 = (state_22233[(13)]);
var inst_22111 = (state_22233[(15)]);
var inst_22113 = (state_22233[(16)]);
var inst_22110 = (state_22233[(17)]);
var inst_22128 = (state_22233[(2)]);
var inst_22129 = (inst_22113 + (1));
var tmp22245 = inst_22112;
var tmp22246 = inst_22111;
var tmp22247 = inst_22110;
var inst_22110__$1 = tmp22247;
var inst_22111__$1 = tmp22246;
var inst_22112__$1 = tmp22245;
var inst_22113__$1 = inst_22129;
var state_22233__$1 = (function (){var statearr_22252 = state_22233;
(statearr_22252[(13)] = inst_22112__$1);

(statearr_22252[(15)] = inst_22111__$1);

(statearr_22252[(18)] = inst_22128);

(statearr_22252[(16)] = inst_22113__$1);

(statearr_22252[(17)] = inst_22110__$1);

return statearr_22252;
})();
var statearr_22253_22329 = state_22233__$1;
(statearr_22253_22329[(2)] = null);

(statearr_22253_22329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (21))){
var inst_22155 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22257_22330 = state_22233__$1;
(statearr_22257_22330[(2)] = inst_22155);

(statearr_22257_22330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (31))){
var inst_22181 = (state_22233[(9)]);
var inst_22185 = done.call(null,null);
var inst_22186 = cljs.core.async.untap_STAR_.call(null,m,inst_22181);
var state_22233__$1 = (function (){var statearr_22258 = state_22233;
(statearr_22258[(19)] = inst_22185);

return statearr_22258;
})();
var statearr_22259_22331 = state_22233__$1;
(statearr_22259_22331[(2)] = inst_22186);

(statearr_22259_22331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (32))){
var inst_22175 = (state_22233[(20)]);
var inst_22173 = (state_22233[(21)]);
var inst_22176 = (state_22233[(10)]);
var inst_22174 = (state_22233[(12)]);
var inst_22188 = (state_22233[(2)]);
var inst_22189 = (inst_22176 + (1));
var tmp22254 = inst_22175;
var tmp22255 = inst_22173;
var tmp22256 = inst_22174;
var inst_22173__$1 = tmp22255;
var inst_22174__$1 = tmp22256;
var inst_22175__$1 = tmp22254;
var inst_22176__$1 = inst_22189;
var state_22233__$1 = (function (){var statearr_22260 = state_22233;
(statearr_22260[(20)] = inst_22175__$1);

(statearr_22260[(21)] = inst_22173__$1);

(statearr_22260[(10)] = inst_22176__$1);

(statearr_22260[(12)] = inst_22174__$1);

(statearr_22260[(22)] = inst_22188);

return statearr_22260;
})();
var statearr_22261_22332 = state_22233__$1;
(statearr_22261_22332[(2)] = null);

(statearr_22261_22332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (40))){
var inst_22201 = (state_22233[(23)]);
var inst_22205 = done.call(null,null);
var inst_22206 = cljs.core.async.untap_STAR_.call(null,m,inst_22201);
var state_22233__$1 = (function (){var statearr_22262 = state_22233;
(statearr_22262[(24)] = inst_22205);

return statearr_22262;
})();
var statearr_22263_22333 = state_22233__$1;
(statearr_22263_22333[(2)] = inst_22206);

(statearr_22263_22333[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (33))){
var inst_22192 = (state_22233[(25)]);
var inst_22194 = cljs.core.chunked_seq_QMARK_.call(null,inst_22192);
var state_22233__$1 = state_22233;
if(inst_22194){
var statearr_22264_22334 = state_22233__$1;
(statearr_22264_22334[(1)] = (36));

} else {
var statearr_22265_22335 = state_22233__$1;
(statearr_22265_22335[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (13))){
var inst_22122 = (state_22233[(26)]);
var inst_22125 = cljs.core.async.close_BANG_.call(null,inst_22122);
var state_22233__$1 = state_22233;
var statearr_22266_22336 = state_22233__$1;
(statearr_22266_22336[(2)] = inst_22125);

(statearr_22266_22336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (22))){
var inst_22145 = (state_22233[(8)]);
var inst_22148 = cljs.core.async.close_BANG_.call(null,inst_22145);
var state_22233__$1 = state_22233;
var statearr_22267_22337 = state_22233__$1;
(statearr_22267_22337[(2)] = inst_22148);

(statearr_22267_22337[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (36))){
var inst_22192 = (state_22233[(25)]);
var inst_22196 = cljs.core.chunk_first.call(null,inst_22192);
var inst_22197 = cljs.core.chunk_rest.call(null,inst_22192);
var inst_22198 = cljs.core.count.call(null,inst_22196);
var inst_22173 = inst_22197;
var inst_22174 = inst_22196;
var inst_22175 = inst_22198;
var inst_22176 = (0);
var state_22233__$1 = (function (){var statearr_22268 = state_22233;
(statearr_22268[(20)] = inst_22175);

(statearr_22268[(21)] = inst_22173);

(statearr_22268[(10)] = inst_22176);

(statearr_22268[(12)] = inst_22174);

return statearr_22268;
})();
var statearr_22269_22338 = state_22233__$1;
(statearr_22269_22338[(2)] = null);

(statearr_22269_22338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (41))){
var inst_22192 = (state_22233[(25)]);
var inst_22208 = (state_22233[(2)]);
var inst_22209 = cljs.core.next.call(null,inst_22192);
var inst_22173 = inst_22209;
var inst_22174 = null;
var inst_22175 = (0);
var inst_22176 = (0);
var state_22233__$1 = (function (){var statearr_22270 = state_22233;
(statearr_22270[(20)] = inst_22175);

(statearr_22270[(27)] = inst_22208);

(statearr_22270[(21)] = inst_22173);

(statearr_22270[(10)] = inst_22176);

(statearr_22270[(12)] = inst_22174);

return statearr_22270;
})();
var statearr_22271_22339 = state_22233__$1;
(statearr_22271_22339[(2)] = null);

(statearr_22271_22339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (43))){
var state_22233__$1 = state_22233;
var statearr_22272_22340 = state_22233__$1;
(statearr_22272_22340[(2)] = null);

(statearr_22272_22340[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (29))){
var inst_22217 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22273_22341 = state_22233__$1;
(statearr_22273_22341[(2)] = inst_22217);

(statearr_22273_22341[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (44))){
var inst_22226 = (state_22233[(2)]);
var state_22233__$1 = (function (){var statearr_22274 = state_22233;
(statearr_22274[(28)] = inst_22226);

return statearr_22274;
})();
var statearr_22275_22342 = state_22233__$1;
(statearr_22275_22342[(2)] = null);

(statearr_22275_22342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (6))){
var inst_22165 = (state_22233[(29)]);
var inst_22164 = cljs.core.deref.call(null,cs);
var inst_22165__$1 = cljs.core.keys.call(null,inst_22164);
var inst_22166 = cljs.core.count.call(null,inst_22165__$1);
var inst_22167 = cljs.core.reset_BANG_.call(null,dctr,inst_22166);
var inst_22172 = cljs.core.seq.call(null,inst_22165__$1);
var inst_22173 = inst_22172;
var inst_22174 = null;
var inst_22175 = (0);
var inst_22176 = (0);
var state_22233__$1 = (function (){var statearr_22276 = state_22233;
(statearr_22276[(20)] = inst_22175);

(statearr_22276[(30)] = inst_22167);

(statearr_22276[(21)] = inst_22173);

(statearr_22276[(10)] = inst_22176);

(statearr_22276[(12)] = inst_22174);

(statearr_22276[(29)] = inst_22165__$1);

return statearr_22276;
})();
var statearr_22277_22343 = state_22233__$1;
(statearr_22277_22343[(2)] = null);

(statearr_22277_22343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (28))){
var inst_22173 = (state_22233[(21)]);
var inst_22192 = (state_22233[(25)]);
var inst_22192__$1 = cljs.core.seq.call(null,inst_22173);
var state_22233__$1 = (function (){var statearr_22278 = state_22233;
(statearr_22278[(25)] = inst_22192__$1);

return statearr_22278;
})();
if(inst_22192__$1){
var statearr_22279_22344 = state_22233__$1;
(statearr_22279_22344[(1)] = (33));

} else {
var statearr_22280_22345 = state_22233__$1;
(statearr_22280_22345[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (25))){
var inst_22175 = (state_22233[(20)]);
var inst_22176 = (state_22233[(10)]);
var inst_22178 = (inst_22176 < inst_22175);
var inst_22179 = inst_22178;
var state_22233__$1 = state_22233;
if(cljs.core.truth_(inst_22179)){
var statearr_22281_22346 = state_22233__$1;
(statearr_22281_22346[(1)] = (27));

} else {
var statearr_22282_22347 = state_22233__$1;
(statearr_22282_22347[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (34))){
var state_22233__$1 = state_22233;
var statearr_22283_22348 = state_22233__$1;
(statearr_22283_22348[(2)] = null);

(statearr_22283_22348[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (17))){
var state_22233__$1 = state_22233;
var statearr_22284_22349 = state_22233__$1;
(statearr_22284_22349[(2)] = null);

(statearr_22284_22349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (3))){
var inst_22231 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22233__$1,inst_22231);
} else {
if((state_val_22234 === (12))){
var inst_22160 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22285_22350 = state_22233__$1;
(statearr_22285_22350[(2)] = inst_22160);

(statearr_22285_22350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (2))){
var state_22233__$1 = state_22233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22233__$1,(4),ch);
} else {
if((state_val_22234 === (23))){
var state_22233__$1 = state_22233;
var statearr_22286_22351 = state_22233__$1;
(statearr_22286_22351[(2)] = null);

(statearr_22286_22351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (35))){
var inst_22215 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22287_22352 = state_22233__$1;
(statearr_22287_22352[(2)] = inst_22215);

(statearr_22287_22352[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (19))){
var inst_22132 = (state_22233[(7)]);
var inst_22136 = cljs.core.chunk_first.call(null,inst_22132);
var inst_22137 = cljs.core.chunk_rest.call(null,inst_22132);
var inst_22138 = cljs.core.count.call(null,inst_22136);
var inst_22110 = inst_22137;
var inst_22111 = inst_22136;
var inst_22112 = inst_22138;
var inst_22113 = (0);
var state_22233__$1 = (function (){var statearr_22288 = state_22233;
(statearr_22288[(13)] = inst_22112);

(statearr_22288[(15)] = inst_22111);

(statearr_22288[(16)] = inst_22113);

(statearr_22288[(17)] = inst_22110);

return statearr_22288;
})();
var statearr_22289_22353 = state_22233__$1;
(statearr_22289_22353[(2)] = null);

(statearr_22289_22353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (11))){
var inst_22132 = (state_22233[(7)]);
var inst_22110 = (state_22233[(17)]);
var inst_22132__$1 = cljs.core.seq.call(null,inst_22110);
var state_22233__$1 = (function (){var statearr_22290 = state_22233;
(statearr_22290[(7)] = inst_22132__$1);

return statearr_22290;
})();
if(inst_22132__$1){
var statearr_22291_22354 = state_22233__$1;
(statearr_22291_22354[(1)] = (16));

} else {
var statearr_22292_22355 = state_22233__$1;
(statearr_22292_22355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (9))){
var inst_22162 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22293_22356 = state_22233__$1;
(statearr_22293_22356[(2)] = inst_22162);

(statearr_22293_22356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (5))){
var inst_22108 = cljs.core.deref.call(null,cs);
var inst_22109 = cljs.core.seq.call(null,inst_22108);
var inst_22110 = inst_22109;
var inst_22111 = null;
var inst_22112 = (0);
var inst_22113 = (0);
var state_22233__$1 = (function (){var statearr_22294 = state_22233;
(statearr_22294[(13)] = inst_22112);

(statearr_22294[(15)] = inst_22111);

(statearr_22294[(16)] = inst_22113);

(statearr_22294[(17)] = inst_22110);

return statearr_22294;
})();
var statearr_22295_22357 = state_22233__$1;
(statearr_22295_22357[(2)] = null);

(statearr_22295_22357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (14))){
var state_22233__$1 = state_22233;
var statearr_22296_22358 = state_22233__$1;
(statearr_22296_22358[(2)] = null);

(statearr_22296_22358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (45))){
var inst_22223 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22297_22359 = state_22233__$1;
(statearr_22297_22359[(2)] = inst_22223);

(statearr_22297_22359[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (26))){
var inst_22165 = (state_22233[(29)]);
var inst_22219 = (state_22233[(2)]);
var inst_22220 = cljs.core.seq.call(null,inst_22165);
var state_22233__$1 = (function (){var statearr_22298 = state_22233;
(statearr_22298[(31)] = inst_22219);

return statearr_22298;
})();
if(inst_22220){
var statearr_22299_22360 = state_22233__$1;
(statearr_22299_22360[(1)] = (42));

} else {
var statearr_22300_22361 = state_22233__$1;
(statearr_22300_22361[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (16))){
var inst_22132 = (state_22233[(7)]);
var inst_22134 = cljs.core.chunked_seq_QMARK_.call(null,inst_22132);
var state_22233__$1 = state_22233;
if(inst_22134){
var statearr_22301_22362 = state_22233__$1;
(statearr_22301_22362[(1)] = (19));

} else {
var statearr_22302_22363 = state_22233__$1;
(statearr_22302_22363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (38))){
var inst_22212 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22303_22364 = state_22233__$1;
(statearr_22303_22364[(2)] = inst_22212);

(statearr_22303_22364[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (30))){
var state_22233__$1 = state_22233;
var statearr_22304_22365 = state_22233__$1;
(statearr_22304_22365[(2)] = null);

(statearr_22304_22365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (10))){
var inst_22111 = (state_22233[(15)]);
var inst_22113 = (state_22233[(16)]);
var inst_22121 = cljs.core._nth.call(null,inst_22111,inst_22113);
var inst_22122 = cljs.core.nth.call(null,inst_22121,(0),null);
var inst_22123 = cljs.core.nth.call(null,inst_22121,(1),null);
var state_22233__$1 = (function (){var statearr_22305 = state_22233;
(statearr_22305[(26)] = inst_22122);

return statearr_22305;
})();
if(cljs.core.truth_(inst_22123)){
var statearr_22306_22366 = state_22233__$1;
(statearr_22306_22366[(1)] = (13));

} else {
var statearr_22307_22367 = state_22233__$1;
(statearr_22307_22367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (18))){
var inst_22158 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22308_22368 = state_22233__$1;
(statearr_22308_22368[(2)] = inst_22158);

(statearr_22308_22368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (42))){
var state_22233__$1 = state_22233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22233__$1,(45),dchan);
} else {
if((state_val_22234 === (37))){
var inst_22101 = (state_22233[(11)]);
var inst_22192 = (state_22233[(25)]);
var inst_22201 = (state_22233[(23)]);
var inst_22201__$1 = cljs.core.first.call(null,inst_22192);
var inst_22202 = cljs.core.async.put_BANG_.call(null,inst_22201__$1,inst_22101,done);
var state_22233__$1 = (function (){var statearr_22309 = state_22233;
(statearr_22309[(23)] = inst_22201__$1);

return statearr_22309;
})();
if(cljs.core.truth_(inst_22202)){
var statearr_22310_22369 = state_22233__$1;
(statearr_22310_22369[(1)] = (39));

} else {
var statearr_22311_22370 = state_22233__$1;
(statearr_22311_22370[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (8))){
var inst_22112 = (state_22233[(13)]);
var inst_22113 = (state_22233[(16)]);
var inst_22115 = (inst_22113 < inst_22112);
var inst_22116 = inst_22115;
var state_22233__$1 = state_22233;
if(cljs.core.truth_(inst_22116)){
var statearr_22312_22371 = state_22233__$1;
(statearr_22312_22371[(1)] = (10));

} else {
var statearr_22313_22372 = state_22233__$1;
(statearr_22313_22372[(1)] = (11));

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
});})(c__19649__auto___22318,cs,m,dchan,dctr,done))
;
return ((function (switch__19494__auto__,c__19649__auto___22318,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19495__auto__ = null;
var cljs$core$async$mult_$_state_machine__19495__auto____0 = (function (){
var statearr_22314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22314[(0)] = cljs$core$async$mult_$_state_machine__19495__auto__);

(statearr_22314[(1)] = (1));

return statearr_22314;
});
var cljs$core$async$mult_$_state_machine__19495__auto____1 = (function (state_22233){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_22233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e22315){if((e22315 instanceof Object)){
var ex__19498__auto__ = e22315;
var statearr_22316_22373 = state_22233;
(statearr_22316_22373[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22374 = state_22233;
state_22233 = G__22374;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19495__auto__ = function(state_22233){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19495__auto____1.call(this,state_22233);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19495__auto____0;
cljs$core$async$mult_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19495__auto____1;
return cljs$core$async$mult_$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___22318,cs,m,dchan,dctr,done))
})();
var state__19651__auto__ = (function (){var statearr_22317 = f__19650__auto__.call(null);
(statearr_22317[(6)] = c__19649__auto___22318);

return statearr_22317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___22318,cs,m,dchan,dctr,done))
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
var G__22376 = arguments.length;
switch (G__22376) {
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
var len__4497__auto___22388 = arguments.length;
var i__4498__auto___22389 = (0);
while(true){
if((i__4498__auto___22389 < len__4497__auto___22388)){
args__4500__auto__.push((arguments[i__4498__auto___22389]));

var G__22390 = (i__4498__auto___22389 + (1));
i__4498__auto___22389 = G__22390;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22382){
var map__22383 = p__22382;
var map__22383__$1 = ((((!((map__22383 == null)))?(((((map__22383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22383):map__22383);
var opts = map__22383__$1;
var statearr_22385_22391 = state;
(statearr_22385_22391[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22383,map__22383__$1,opts){
return (function (val){
var statearr_22386_22392 = state;
(statearr_22386_22392[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22383,map__22383__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22387_22393 = state;
(statearr_22387_22393[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22378){
var G__22379 = cljs.core.first.call(null,seq22378);
var seq22378__$1 = cljs.core.next.call(null,seq22378);
var G__22380 = cljs.core.first.call(null,seq22378__$1);
var seq22378__$2 = cljs.core.next.call(null,seq22378__$1);
var G__22381 = cljs.core.first.call(null,seq22378__$2);
var seq22378__$3 = cljs.core.next.call(null,seq22378__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22379,G__22380,G__22381,seq22378__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22394 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22395){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22395 = meta22395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22396,meta22395__$1){
var self__ = this;
var _22396__$1 = this;
return (new cljs.core.async.t_cljs$core$async22394(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22395__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22394.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22396){
var self__ = this;
var _22396__$1 = this;
return self__.meta22395;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22394.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22394.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22394.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22394.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22394.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22394.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22394.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22394.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22394.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22395","meta22395",984856266,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22394.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22394";

cljs.core.async.t_cljs$core$async22394.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22394");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22394.
 */
cljs.core.async.__GT_t_cljs$core$async22394 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22394(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22395){
return (new cljs.core.async.t_cljs$core$async22394(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22395));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22394(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19649__auto___22558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___22558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___22558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22498){
var state_val_22499 = (state_22498[(1)]);
if((state_val_22499 === (7))){
var inst_22413 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
var statearr_22500_22559 = state_22498__$1;
(statearr_22500_22559[(2)] = inst_22413);

(statearr_22500_22559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (20))){
var inst_22425 = (state_22498[(7)]);
var state_22498__$1 = state_22498;
var statearr_22501_22560 = state_22498__$1;
(statearr_22501_22560[(2)] = inst_22425);

(statearr_22501_22560[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (27))){
var state_22498__$1 = state_22498;
var statearr_22502_22561 = state_22498__$1;
(statearr_22502_22561[(2)] = null);

(statearr_22502_22561[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (1))){
var inst_22400 = (state_22498[(8)]);
var inst_22400__$1 = calc_state.call(null);
var inst_22402 = (inst_22400__$1 == null);
var inst_22403 = cljs.core.not.call(null,inst_22402);
var state_22498__$1 = (function (){var statearr_22503 = state_22498;
(statearr_22503[(8)] = inst_22400__$1);

return statearr_22503;
})();
if(inst_22403){
var statearr_22504_22562 = state_22498__$1;
(statearr_22504_22562[(1)] = (2));

} else {
var statearr_22505_22563 = state_22498__$1;
(statearr_22505_22563[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (24))){
var inst_22449 = (state_22498[(9)]);
var inst_22458 = (state_22498[(10)]);
var inst_22472 = (state_22498[(11)]);
var inst_22472__$1 = inst_22449.call(null,inst_22458);
var state_22498__$1 = (function (){var statearr_22506 = state_22498;
(statearr_22506[(11)] = inst_22472__$1);

return statearr_22506;
})();
if(cljs.core.truth_(inst_22472__$1)){
var statearr_22507_22564 = state_22498__$1;
(statearr_22507_22564[(1)] = (29));

} else {
var statearr_22508_22565 = state_22498__$1;
(statearr_22508_22565[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (4))){
var inst_22416 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
if(cljs.core.truth_(inst_22416)){
var statearr_22509_22566 = state_22498__$1;
(statearr_22509_22566[(1)] = (8));

} else {
var statearr_22510_22567 = state_22498__$1;
(statearr_22510_22567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (15))){
var inst_22443 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
if(cljs.core.truth_(inst_22443)){
var statearr_22511_22568 = state_22498__$1;
(statearr_22511_22568[(1)] = (19));

} else {
var statearr_22512_22569 = state_22498__$1;
(statearr_22512_22569[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (21))){
var inst_22448 = (state_22498[(12)]);
var inst_22448__$1 = (state_22498[(2)]);
var inst_22449 = cljs.core.get.call(null,inst_22448__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22450 = cljs.core.get.call(null,inst_22448__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22451 = cljs.core.get.call(null,inst_22448__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22498__$1 = (function (){var statearr_22513 = state_22498;
(statearr_22513[(13)] = inst_22450);

(statearr_22513[(12)] = inst_22448__$1);

(statearr_22513[(9)] = inst_22449);

return statearr_22513;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22498__$1,(22),inst_22451);
} else {
if((state_val_22499 === (31))){
var inst_22480 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
if(cljs.core.truth_(inst_22480)){
var statearr_22514_22570 = state_22498__$1;
(statearr_22514_22570[(1)] = (32));

} else {
var statearr_22515_22571 = state_22498__$1;
(statearr_22515_22571[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (32))){
var inst_22457 = (state_22498[(14)]);
var state_22498__$1 = state_22498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22498__$1,(35),out,inst_22457);
} else {
if((state_val_22499 === (33))){
var inst_22448 = (state_22498[(12)]);
var inst_22425 = inst_22448;
var state_22498__$1 = (function (){var statearr_22516 = state_22498;
(statearr_22516[(7)] = inst_22425);

return statearr_22516;
})();
var statearr_22517_22572 = state_22498__$1;
(statearr_22517_22572[(2)] = null);

(statearr_22517_22572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (13))){
var inst_22425 = (state_22498[(7)]);
var inst_22432 = inst_22425.cljs$lang$protocol_mask$partition0$;
var inst_22433 = (inst_22432 & (64));
var inst_22434 = inst_22425.cljs$core$ISeq$;
var inst_22435 = (cljs.core.PROTOCOL_SENTINEL === inst_22434);
var inst_22436 = ((inst_22433) || (inst_22435));
var state_22498__$1 = state_22498;
if(cljs.core.truth_(inst_22436)){
var statearr_22518_22573 = state_22498__$1;
(statearr_22518_22573[(1)] = (16));

} else {
var statearr_22519_22574 = state_22498__$1;
(statearr_22519_22574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (22))){
var inst_22457 = (state_22498[(14)]);
var inst_22458 = (state_22498[(10)]);
var inst_22456 = (state_22498[(2)]);
var inst_22457__$1 = cljs.core.nth.call(null,inst_22456,(0),null);
var inst_22458__$1 = cljs.core.nth.call(null,inst_22456,(1),null);
var inst_22459 = (inst_22457__$1 == null);
var inst_22460 = cljs.core._EQ_.call(null,inst_22458__$1,change);
var inst_22461 = ((inst_22459) || (inst_22460));
var state_22498__$1 = (function (){var statearr_22520 = state_22498;
(statearr_22520[(14)] = inst_22457__$1);

(statearr_22520[(10)] = inst_22458__$1);

return statearr_22520;
})();
if(cljs.core.truth_(inst_22461)){
var statearr_22521_22575 = state_22498__$1;
(statearr_22521_22575[(1)] = (23));

} else {
var statearr_22522_22576 = state_22498__$1;
(statearr_22522_22576[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (36))){
var inst_22448 = (state_22498[(12)]);
var inst_22425 = inst_22448;
var state_22498__$1 = (function (){var statearr_22523 = state_22498;
(statearr_22523[(7)] = inst_22425);

return statearr_22523;
})();
var statearr_22524_22577 = state_22498__$1;
(statearr_22524_22577[(2)] = null);

(statearr_22524_22577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (29))){
var inst_22472 = (state_22498[(11)]);
var state_22498__$1 = state_22498;
var statearr_22525_22578 = state_22498__$1;
(statearr_22525_22578[(2)] = inst_22472);

(statearr_22525_22578[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (6))){
var state_22498__$1 = state_22498;
var statearr_22526_22579 = state_22498__$1;
(statearr_22526_22579[(2)] = false);

(statearr_22526_22579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (28))){
var inst_22468 = (state_22498[(2)]);
var inst_22469 = calc_state.call(null);
var inst_22425 = inst_22469;
var state_22498__$1 = (function (){var statearr_22527 = state_22498;
(statearr_22527[(7)] = inst_22425);

(statearr_22527[(15)] = inst_22468);

return statearr_22527;
})();
var statearr_22528_22580 = state_22498__$1;
(statearr_22528_22580[(2)] = null);

(statearr_22528_22580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (25))){
var inst_22494 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
var statearr_22529_22581 = state_22498__$1;
(statearr_22529_22581[(2)] = inst_22494);

(statearr_22529_22581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (34))){
var inst_22492 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
var statearr_22530_22582 = state_22498__$1;
(statearr_22530_22582[(2)] = inst_22492);

(statearr_22530_22582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (17))){
var state_22498__$1 = state_22498;
var statearr_22531_22583 = state_22498__$1;
(statearr_22531_22583[(2)] = false);

(statearr_22531_22583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (3))){
var state_22498__$1 = state_22498;
var statearr_22532_22584 = state_22498__$1;
(statearr_22532_22584[(2)] = false);

(statearr_22532_22584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (12))){
var inst_22496 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22498__$1,inst_22496);
} else {
if((state_val_22499 === (2))){
var inst_22400 = (state_22498[(8)]);
var inst_22405 = inst_22400.cljs$lang$protocol_mask$partition0$;
var inst_22406 = (inst_22405 & (64));
var inst_22407 = inst_22400.cljs$core$ISeq$;
var inst_22408 = (cljs.core.PROTOCOL_SENTINEL === inst_22407);
var inst_22409 = ((inst_22406) || (inst_22408));
var state_22498__$1 = state_22498;
if(cljs.core.truth_(inst_22409)){
var statearr_22533_22585 = state_22498__$1;
(statearr_22533_22585[(1)] = (5));

} else {
var statearr_22534_22586 = state_22498__$1;
(statearr_22534_22586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (23))){
var inst_22457 = (state_22498[(14)]);
var inst_22463 = (inst_22457 == null);
var state_22498__$1 = state_22498;
if(cljs.core.truth_(inst_22463)){
var statearr_22535_22587 = state_22498__$1;
(statearr_22535_22587[(1)] = (26));

} else {
var statearr_22536_22588 = state_22498__$1;
(statearr_22536_22588[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (35))){
var inst_22483 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
if(cljs.core.truth_(inst_22483)){
var statearr_22537_22589 = state_22498__$1;
(statearr_22537_22589[(1)] = (36));

} else {
var statearr_22538_22590 = state_22498__$1;
(statearr_22538_22590[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (19))){
var inst_22425 = (state_22498[(7)]);
var inst_22445 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22425);
var state_22498__$1 = state_22498;
var statearr_22539_22591 = state_22498__$1;
(statearr_22539_22591[(2)] = inst_22445);

(statearr_22539_22591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (11))){
var inst_22425 = (state_22498[(7)]);
var inst_22429 = (inst_22425 == null);
var inst_22430 = cljs.core.not.call(null,inst_22429);
var state_22498__$1 = state_22498;
if(inst_22430){
var statearr_22540_22592 = state_22498__$1;
(statearr_22540_22592[(1)] = (13));

} else {
var statearr_22541_22593 = state_22498__$1;
(statearr_22541_22593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (9))){
var inst_22400 = (state_22498[(8)]);
var state_22498__$1 = state_22498;
var statearr_22542_22594 = state_22498__$1;
(statearr_22542_22594[(2)] = inst_22400);

(statearr_22542_22594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (5))){
var state_22498__$1 = state_22498;
var statearr_22543_22595 = state_22498__$1;
(statearr_22543_22595[(2)] = true);

(statearr_22543_22595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (14))){
var state_22498__$1 = state_22498;
var statearr_22544_22596 = state_22498__$1;
(statearr_22544_22596[(2)] = false);

(statearr_22544_22596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (26))){
var inst_22458 = (state_22498[(10)]);
var inst_22465 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22458);
var state_22498__$1 = state_22498;
var statearr_22545_22597 = state_22498__$1;
(statearr_22545_22597[(2)] = inst_22465);

(statearr_22545_22597[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (16))){
var state_22498__$1 = state_22498;
var statearr_22546_22598 = state_22498__$1;
(statearr_22546_22598[(2)] = true);

(statearr_22546_22598[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (38))){
var inst_22488 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
var statearr_22547_22599 = state_22498__$1;
(statearr_22547_22599[(2)] = inst_22488);

(statearr_22547_22599[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (30))){
var inst_22450 = (state_22498[(13)]);
var inst_22449 = (state_22498[(9)]);
var inst_22458 = (state_22498[(10)]);
var inst_22475 = cljs.core.empty_QMARK_.call(null,inst_22449);
var inst_22476 = inst_22450.call(null,inst_22458);
var inst_22477 = cljs.core.not.call(null,inst_22476);
var inst_22478 = ((inst_22475) && (inst_22477));
var state_22498__$1 = state_22498;
var statearr_22548_22600 = state_22498__$1;
(statearr_22548_22600[(2)] = inst_22478);

(statearr_22548_22600[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (10))){
var inst_22400 = (state_22498[(8)]);
var inst_22421 = (state_22498[(2)]);
var inst_22422 = cljs.core.get.call(null,inst_22421,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22423 = cljs.core.get.call(null,inst_22421,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22424 = cljs.core.get.call(null,inst_22421,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22425 = inst_22400;
var state_22498__$1 = (function (){var statearr_22549 = state_22498;
(statearr_22549[(16)] = inst_22422);

(statearr_22549[(17)] = inst_22423);

(statearr_22549[(18)] = inst_22424);

(statearr_22549[(7)] = inst_22425);

return statearr_22549;
})();
var statearr_22550_22601 = state_22498__$1;
(statearr_22550_22601[(2)] = null);

(statearr_22550_22601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (18))){
var inst_22440 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
var statearr_22551_22602 = state_22498__$1;
(statearr_22551_22602[(2)] = inst_22440);

(statearr_22551_22602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (37))){
var state_22498__$1 = state_22498;
var statearr_22552_22603 = state_22498__$1;
(statearr_22552_22603[(2)] = null);

(statearr_22552_22603[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (8))){
var inst_22400 = (state_22498[(8)]);
var inst_22418 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22400);
var state_22498__$1 = state_22498;
var statearr_22553_22604 = state_22498__$1;
(statearr_22553_22604[(2)] = inst_22418);

(statearr_22553_22604[(1)] = (10));


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
});})(c__19649__auto___22558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19494__auto__,c__19649__auto___22558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19495__auto__ = null;
var cljs$core$async$mix_$_state_machine__19495__auto____0 = (function (){
var statearr_22554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22554[(0)] = cljs$core$async$mix_$_state_machine__19495__auto__);

(statearr_22554[(1)] = (1));

return statearr_22554;
});
var cljs$core$async$mix_$_state_machine__19495__auto____1 = (function (state_22498){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_22498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e22555){if((e22555 instanceof Object)){
var ex__19498__auto__ = e22555;
var statearr_22556_22605 = state_22498;
(statearr_22556_22605[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22606 = state_22498;
state_22498 = G__22606;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19495__auto__ = function(state_22498){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19495__auto____1.call(this,state_22498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19495__auto____0;
cljs$core$async$mix_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19495__auto____1;
return cljs$core$async$mix_$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___22558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19651__auto__ = (function (){var statearr_22557 = f__19650__auto__.call(null);
(statearr_22557[(6)] = c__19649__auto___22558);

return statearr_22557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___22558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__22608 = arguments.length;
switch (G__22608) {
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
var G__22612 = arguments.length;
switch (G__22612) {
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
return (function (p1__22610_SHARP_){
if(cljs.core.truth_(p1__22610_SHARP_.call(null,topic))){
return p1__22610_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22610_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22613 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22614){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22614 = meta22614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22615,meta22614__$1){
var self__ = this;
var _22615__$1 = this;
return (new cljs.core.async.t_cljs$core$async22613(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22614__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22615){
var self__ = this;
var _22615__$1 = this;
return self__.meta22614;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22613.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22613.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22613.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22613.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22613.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22614","meta22614",1880724551,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22613";

cljs.core.async.t_cljs$core$async22613.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22613");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22613.
 */
cljs.core.async.__GT_t_cljs$core$async22613 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22613(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22614){
return (new cljs.core.async.t_cljs$core$async22613(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22614));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22613(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19649__auto___22733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___22733,mults,ensure_mult,p){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___22733,mults,ensure_mult,p){
return (function (state_22687){
var state_val_22688 = (state_22687[(1)]);
if((state_val_22688 === (7))){
var inst_22683 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
var statearr_22689_22734 = state_22687__$1;
(statearr_22689_22734[(2)] = inst_22683);

(statearr_22689_22734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (20))){
var state_22687__$1 = state_22687;
var statearr_22690_22735 = state_22687__$1;
(statearr_22690_22735[(2)] = null);

(statearr_22690_22735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (1))){
var state_22687__$1 = state_22687;
var statearr_22691_22736 = state_22687__$1;
(statearr_22691_22736[(2)] = null);

(statearr_22691_22736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (24))){
var inst_22666 = (state_22687[(7)]);
var inst_22675 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22666);
var state_22687__$1 = state_22687;
var statearr_22692_22737 = state_22687__$1;
(statearr_22692_22737[(2)] = inst_22675);

(statearr_22692_22737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (4))){
var inst_22618 = (state_22687[(8)]);
var inst_22618__$1 = (state_22687[(2)]);
var inst_22619 = (inst_22618__$1 == null);
var state_22687__$1 = (function (){var statearr_22693 = state_22687;
(statearr_22693[(8)] = inst_22618__$1);

return statearr_22693;
})();
if(cljs.core.truth_(inst_22619)){
var statearr_22694_22738 = state_22687__$1;
(statearr_22694_22738[(1)] = (5));

} else {
var statearr_22695_22739 = state_22687__$1;
(statearr_22695_22739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (15))){
var inst_22660 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
var statearr_22696_22740 = state_22687__$1;
(statearr_22696_22740[(2)] = inst_22660);

(statearr_22696_22740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (21))){
var inst_22680 = (state_22687[(2)]);
var state_22687__$1 = (function (){var statearr_22697 = state_22687;
(statearr_22697[(9)] = inst_22680);

return statearr_22697;
})();
var statearr_22698_22741 = state_22687__$1;
(statearr_22698_22741[(2)] = null);

(statearr_22698_22741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (13))){
var inst_22642 = (state_22687[(10)]);
var inst_22644 = cljs.core.chunked_seq_QMARK_.call(null,inst_22642);
var state_22687__$1 = state_22687;
if(inst_22644){
var statearr_22699_22742 = state_22687__$1;
(statearr_22699_22742[(1)] = (16));

} else {
var statearr_22700_22743 = state_22687__$1;
(statearr_22700_22743[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (22))){
var inst_22672 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
if(cljs.core.truth_(inst_22672)){
var statearr_22701_22744 = state_22687__$1;
(statearr_22701_22744[(1)] = (23));

} else {
var statearr_22702_22745 = state_22687__$1;
(statearr_22702_22745[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (6))){
var inst_22618 = (state_22687[(8)]);
var inst_22668 = (state_22687[(11)]);
var inst_22666 = (state_22687[(7)]);
var inst_22666__$1 = topic_fn.call(null,inst_22618);
var inst_22667 = cljs.core.deref.call(null,mults);
var inst_22668__$1 = cljs.core.get.call(null,inst_22667,inst_22666__$1);
var state_22687__$1 = (function (){var statearr_22703 = state_22687;
(statearr_22703[(11)] = inst_22668__$1);

(statearr_22703[(7)] = inst_22666__$1);

return statearr_22703;
})();
if(cljs.core.truth_(inst_22668__$1)){
var statearr_22704_22746 = state_22687__$1;
(statearr_22704_22746[(1)] = (19));

} else {
var statearr_22705_22747 = state_22687__$1;
(statearr_22705_22747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (25))){
var inst_22677 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
var statearr_22706_22748 = state_22687__$1;
(statearr_22706_22748[(2)] = inst_22677);

(statearr_22706_22748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (17))){
var inst_22642 = (state_22687[(10)]);
var inst_22651 = cljs.core.first.call(null,inst_22642);
var inst_22652 = cljs.core.async.muxch_STAR_.call(null,inst_22651);
var inst_22653 = cljs.core.async.close_BANG_.call(null,inst_22652);
var inst_22654 = cljs.core.next.call(null,inst_22642);
var inst_22628 = inst_22654;
var inst_22629 = null;
var inst_22630 = (0);
var inst_22631 = (0);
var state_22687__$1 = (function (){var statearr_22707 = state_22687;
(statearr_22707[(12)] = inst_22629);

(statearr_22707[(13)] = inst_22653);

(statearr_22707[(14)] = inst_22631);

(statearr_22707[(15)] = inst_22628);

(statearr_22707[(16)] = inst_22630);

return statearr_22707;
})();
var statearr_22708_22749 = state_22687__$1;
(statearr_22708_22749[(2)] = null);

(statearr_22708_22749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (3))){
var inst_22685 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22687__$1,inst_22685);
} else {
if((state_val_22688 === (12))){
var inst_22662 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
var statearr_22709_22750 = state_22687__$1;
(statearr_22709_22750[(2)] = inst_22662);

(statearr_22709_22750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (2))){
var state_22687__$1 = state_22687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22687__$1,(4),ch);
} else {
if((state_val_22688 === (23))){
var state_22687__$1 = state_22687;
var statearr_22710_22751 = state_22687__$1;
(statearr_22710_22751[(2)] = null);

(statearr_22710_22751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (19))){
var inst_22618 = (state_22687[(8)]);
var inst_22668 = (state_22687[(11)]);
var inst_22670 = cljs.core.async.muxch_STAR_.call(null,inst_22668);
var state_22687__$1 = state_22687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22687__$1,(22),inst_22670,inst_22618);
} else {
if((state_val_22688 === (11))){
var inst_22642 = (state_22687[(10)]);
var inst_22628 = (state_22687[(15)]);
var inst_22642__$1 = cljs.core.seq.call(null,inst_22628);
var state_22687__$1 = (function (){var statearr_22711 = state_22687;
(statearr_22711[(10)] = inst_22642__$1);

return statearr_22711;
})();
if(inst_22642__$1){
var statearr_22712_22752 = state_22687__$1;
(statearr_22712_22752[(1)] = (13));

} else {
var statearr_22713_22753 = state_22687__$1;
(statearr_22713_22753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (9))){
var inst_22664 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
var statearr_22714_22754 = state_22687__$1;
(statearr_22714_22754[(2)] = inst_22664);

(statearr_22714_22754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (5))){
var inst_22625 = cljs.core.deref.call(null,mults);
var inst_22626 = cljs.core.vals.call(null,inst_22625);
var inst_22627 = cljs.core.seq.call(null,inst_22626);
var inst_22628 = inst_22627;
var inst_22629 = null;
var inst_22630 = (0);
var inst_22631 = (0);
var state_22687__$1 = (function (){var statearr_22715 = state_22687;
(statearr_22715[(12)] = inst_22629);

(statearr_22715[(14)] = inst_22631);

(statearr_22715[(15)] = inst_22628);

(statearr_22715[(16)] = inst_22630);

return statearr_22715;
})();
var statearr_22716_22755 = state_22687__$1;
(statearr_22716_22755[(2)] = null);

(statearr_22716_22755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (14))){
var state_22687__$1 = state_22687;
var statearr_22720_22756 = state_22687__$1;
(statearr_22720_22756[(2)] = null);

(statearr_22720_22756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (16))){
var inst_22642 = (state_22687[(10)]);
var inst_22646 = cljs.core.chunk_first.call(null,inst_22642);
var inst_22647 = cljs.core.chunk_rest.call(null,inst_22642);
var inst_22648 = cljs.core.count.call(null,inst_22646);
var inst_22628 = inst_22647;
var inst_22629 = inst_22646;
var inst_22630 = inst_22648;
var inst_22631 = (0);
var state_22687__$1 = (function (){var statearr_22721 = state_22687;
(statearr_22721[(12)] = inst_22629);

(statearr_22721[(14)] = inst_22631);

(statearr_22721[(15)] = inst_22628);

(statearr_22721[(16)] = inst_22630);

return statearr_22721;
})();
var statearr_22722_22757 = state_22687__$1;
(statearr_22722_22757[(2)] = null);

(statearr_22722_22757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (10))){
var inst_22629 = (state_22687[(12)]);
var inst_22631 = (state_22687[(14)]);
var inst_22628 = (state_22687[(15)]);
var inst_22630 = (state_22687[(16)]);
var inst_22636 = cljs.core._nth.call(null,inst_22629,inst_22631);
var inst_22637 = cljs.core.async.muxch_STAR_.call(null,inst_22636);
var inst_22638 = cljs.core.async.close_BANG_.call(null,inst_22637);
var inst_22639 = (inst_22631 + (1));
var tmp22717 = inst_22629;
var tmp22718 = inst_22628;
var tmp22719 = inst_22630;
var inst_22628__$1 = tmp22718;
var inst_22629__$1 = tmp22717;
var inst_22630__$1 = tmp22719;
var inst_22631__$1 = inst_22639;
var state_22687__$1 = (function (){var statearr_22723 = state_22687;
(statearr_22723[(12)] = inst_22629__$1);

(statearr_22723[(17)] = inst_22638);

(statearr_22723[(14)] = inst_22631__$1);

(statearr_22723[(15)] = inst_22628__$1);

(statearr_22723[(16)] = inst_22630__$1);

return statearr_22723;
})();
var statearr_22724_22758 = state_22687__$1;
(statearr_22724_22758[(2)] = null);

(statearr_22724_22758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (18))){
var inst_22657 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
var statearr_22725_22759 = state_22687__$1;
(statearr_22725_22759[(2)] = inst_22657);

(statearr_22725_22759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (8))){
var inst_22631 = (state_22687[(14)]);
var inst_22630 = (state_22687[(16)]);
var inst_22633 = (inst_22631 < inst_22630);
var inst_22634 = inst_22633;
var state_22687__$1 = state_22687;
if(cljs.core.truth_(inst_22634)){
var statearr_22726_22760 = state_22687__$1;
(statearr_22726_22760[(1)] = (10));

} else {
var statearr_22727_22761 = state_22687__$1;
(statearr_22727_22761[(1)] = (11));

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
});})(c__19649__auto___22733,mults,ensure_mult,p))
;
return ((function (switch__19494__auto__,c__19649__auto___22733,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19495__auto__ = null;
var cljs$core$async$state_machine__19495__auto____0 = (function (){
var statearr_22728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22728[(0)] = cljs$core$async$state_machine__19495__auto__);

(statearr_22728[(1)] = (1));

return statearr_22728;
});
var cljs$core$async$state_machine__19495__auto____1 = (function (state_22687){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_22687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e22729){if((e22729 instanceof Object)){
var ex__19498__auto__ = e22729;
var statearr_22730_22762 = state_22687;
(statearr_22730_22762[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22763 = state_22687;
state_22687 = G__22763;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$state_machine__19495__auto__ = function(state_22687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19495__auto____1.call(this,state_22687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19495__auto____0;
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19495__auto____1;
return cljs$core$async$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___22733,mults,ensure_mult,p))
})();
var state__19651__auto__ = (function (){var statearr_22731 = f__19650__auto__.call(null);
(statearr_22731[(6)] = c__19649__auto___22733);

return statearr_22731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___22733,mults,ensure_mult,p))
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
var G__22765 = arguments.length;
switch (G__22765) {
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
var G__22768 = arguments.length;
switch (G__22768) {
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
var G__22771 = arguments.length;
switch (G__22771) {
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
var c__19649__auto___22838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___22838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___22838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22810){
var state_val_22811 = (state_22810[(1)]);
if((state_val_22811 === (7))){
var state_22810__$1 = state_22810;
var statearr_22812_22839 = state_22810__$1;
(statearr_22812_22839[(2)] = null);

(statearr_22812_22839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (1))){
var state_22810__$1 = state_22810;
var statearr_22813_22840 = state_22810__$1;
(statearr_22813_22840[(2)] = null);

(statearr_22813_22840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (4))){
var inst_22774 = (state_22810[(7)]);
var inst_22776 = (inst_22774 < cnt);
var state_22810__$1 = state_22810;
if(cljs.core.truth_(inst_22776)){
var statearr_22814_22841 = state_22810__$1;
(statearr_22814_22841[(1)] = (6));

} else {
var statearr_22815_22842 = state_22810__$1;
(statearr_22815_22842[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (15))){
var inst_22806 = (state_22810[(2)]);
var state_22810__$1 = state_22810;
var statearr_22816_22843 = state_22810__$1;
(statearr_22816_22843[(2)] = inst_22806);

(statearr_22816_22843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (13))){
var inst_22799 = cljs.core.async.close_BANG_.call(null,out);
var state_22810__$1 = state_22810;
var statearr_22817_22844 = state_22810__$1;
(statearr_22817_22844[(2)] = inst_22799);

(statearr_22817_22844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (6))){
var state_22810__$1 = state_22810;
var statearr_22818_22845 = state_22810__$1;
(statearr_22818_22845[(2)] = null);

(statearr_22818_22845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (3))){
var inst_22808 = (state_22810[(2)]);
var state_22810__$1 = state_22810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22810__$1,inst_22808);
} else {
if((state_val_22811 === (12))){
var inst_22796 = (state_22810[(8)]);
var inst_22796__$1 = (state_22810[(2)]);
var inst_22797 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22796__$1);
var state_22810__$1 = (function (){var statearr_22819 = state_22810;
(statearr_22819[(8)] = inst_22796__$1);

return statearr_22819;
})();
if(cljs.core.truth_(inst_22797)){
var statearr_22820_22846 = state_22810__$1;
(statearr_22820_22846[(1)] = (13));

} else {
var statearr_22821_22847 = state_22810__$1;
(statearr_22821_22847[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (2))){
var inst_22773 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22774 = (0);
var state_22810__$1 = (function (){var statearr_22822 = state_22810;
(statearr_22822[(9)] = inst_22773);

(statearr_22822[(7)] = inst_22774);

return statearr_22822;
})();
var statearr_22823_22848 = state_22810__$1;
(statearr_22823_22848[(2)] = null);

(statearr_22823_22848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (11))){
var inst_22774 = (state_22810[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22810,(10),Object,null,(9));
var inst_22783 = chs__$1.call(null,inst_22774);
var inst_22784 = done.call(null,inst_22774);
var inst_22785 = cljs.core.async.take_BANG_.call(null,inst_22783,inst_22784);
var state_22810__$1 = state_22810;
var statearr_22824_22849 = state_22810__$1;
(statearr_22824_22849[(2)] = inst_22785);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22810__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (9))){
var inst_22774 = (state_22810[(7)]);
var inst_22787 = (state_22810[(2)]);
var inst_22788 = (inst_22774 + (1));
var inst_22774__$1 = inst_22788;
var state_22810__$1 = (function (){var statearr_22825 = state_22810;
(statearr_22825[(10)] = inst_22787);

(statearr_22825[(7)] = inst_22774__$1);

return statearr_22825;
})();
var statearr_22826_22850 = state_22810__$1;
(statearr_22826_22850[(2)] = null);

(statearr_22826_22850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (5))){
var inst_22794 = (state_22810[(2)]);
var state_22810__$1 = (function (){var statearr_22827 = state_22810;
(statearr_22827[(11)] = inst_22794);

return statearr_22827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22810__$1,(12),dchan);
} else {
if((state_val_22811 === (14))){
var inst_22796 = (state_22810[(8)]);
var inst_22801 = cljs.core.apply.call(null,f,inst_22796);
var state_22810__$1 = state_22810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22810__$1,(16),out,inst_22801);
} else {
if((state_val_22811 === (16))){
var inst_22803 = (state_22810[(2)]);
var state_22810__$1 = (function (){var statearr_22828 = state_22810;
(statearr_22828[(12)] = inst_22803);

return statearr_22828;
})();
var statearr_22829_22851 = state_22810__$1;
(statearr_22829_22851[(2)] = null);

(statearr_22829_22851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (10))){
var inst_22778 = (state_22810[(2)]);
var inst_22779 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22810__$1 = (function (){var statearr_22830 = state_22810;
(statearr_22830[(13)] = inst_22778);

return statearr_22830;
})();
var statearr_22831_22852 = state_22810__$1;
(statearr_22831_22852[(2)] = inst_22779);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22810__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (8))){
var inst_22792 = (state_22810[(2)]);
var state_22810__$1 = state_22810;
var statearr_22832_22853 = state_22810__$1;
(statearr_22832_22853[(2)] = inst_22792);

(statearr_22832_22853[(1)] = (5));


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
});})(c__19649__auto___22838,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19494__auto__,c__19649__auto___22838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19495__auto__ = null;
var cljs$core$async$state_machine__19495__auto____0 = (function (){
var statearr_22833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22833[(0)] = cljs$core$async$state_machine__19495__auto__);

(statearr_22833[(1)] = (1));

return statearr_22833;
});
var cljs$core$async$state_machine__19495__auto____1 = (function (state_22810){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_22810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e22834){if((e22834 instanceof Object)){
var ex__19498__auto__ = e22834;
var statearr_22835_22854 = state_22810;
(statearr_22835_22854[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22855 = state_22810;
state_22810 = G__22855;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$state_machine__19495__auto__ = function(state_22810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19495__auto____1.call(this,state_22810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19495__auto____0;
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19495__auto____1;
return cljs$core$async$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___22838,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19651__auto__ = (function (){var statearr_22836 = f__19650__auto__.call(null);
(statearr_22836[(6)] = c__19649__auto___22838);

return statearr_22836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___22838,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__22858 = arguments.length;
switch (G__22858) {
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
var c__19649__auto___22912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___22912,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___22912,out){
return (function (state_22890){
var state_val_22891 = (state_22890[(1)]);
if((state_val_22891 === (7))){
var inst_22870 = (state_22890[(7)]);
var inst_22869 = (state_22890[(8)]);
var inst_22869__$1 = (state_22890[(2)]);
var inst_22870__$1 = cljs.core.nth.call(null,inst_22869__$1,(0),null);
var inst_22871 = cljs.core.nth.call(null,inst_22869__$1,(1),null);
var inst_22872 = (inst_22870__$1 == null);
var state_22890__$1 = (function (){var statearr_22892 = state_22890;
(statearr_22892[(7)] = inst_22870__$1);

(statearr_22892[(8)] = inst_22869__$1);

(statearr_22892[(9)] = inst_22871);

return statearr_22892;
})();
if(cljs.core.truth_(inst_22872)){
var statearr_22893_22913 = state_22890__$1;
(statearr_22893_22913[(1)] = (8));

} else {
var statearr_22894_22914 = state_22890__$1;
(statearr_22894_22914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (1))){
var inst_22859 = cljs.core.vec.call(null,chs);
var inst_22860 = inst_22859;
var state_22890__$1 = (function (){var statearr_22895 = state_22890;
(statearr_22895[(10)] = inst_22860);

return statearr_22895;
})();
var statearr_22896_22915 = state_22890__$1;
(statearr_22896_22915[(2)] = null);

(statearr_22896_22915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (4))){
var inst_22860 = (state_22890[(10)]);
var state_22890__$1 = state_22890;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22890__$1,(7),inst_22860);
} else {
if((state_val_22891 === (6))){
var inst_22886 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
var statearr_22897_22916 = state_22890__$1;
(statearr_22897_22916[(2)] = inst_22886);

(statearr_22897_22916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (3))){
var inst_22888 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22890__$1,inst_22888);
} else {
if((state_val_22891 === (2))){
var inst_22860 = (state_22890[(10)]);
var inst_22862 = cljs.core.count.call(null,inst_22860);
var inst_22863 = (inst_22862 > (0));
var state_22890__$1 = state_22890;
if(cljs.core.truth_(inst_22863)){
var statearr_22899_22917 = state_22890__$1;
(statearr_22899_22917[(1)] = (4));

} else {
var statearr_22900_22918 = state_22890__$1;
(statearr_22900_22918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (11))){
var inst_22860 = (state_22890[(10)]);
var inst_22879 = (state_22890[(2)]);
var tmp22898 = inst_22860;
var inst_22860__$1 = tmp22898;
var state_22890__$1 = (function (){var statearr_22901 = state_22890;
(statearr_22901[(10)] = inst_22860__$1);

(statearr_22901[(11)] = inst_22879);

return statearr_22901;
})();
var statearr_22902_22919 = state_22890__$1;
(statearr_22902_22919[(2)] = null);

(statearr_22902_22919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (9))){
var inst_22870 = (state_22890[(7)]);
var state_22890__$1 = state_22890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22890__$1,(11),out,inst_22870);
} else {
if((state_val_22891 === (5))){
var inst_22884 = cljs.core.async.close_BANG_.call(null,out);
var state_22890__$1 = state_22890;
var statearr_22903_22920 = state_22890__$1;
(statearr_22903_22920[(2)] = inst_22884);

(statearr_22903_22920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (10))){
var inst_22882 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
var statearr_22904_22921 = state_22890__$1;
(statearr_22904_22921[(2)] = inst_22882);

(statearr_22904_22921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (8))){
var inst_22870 = (state_22890[(7)]);
var inst_22869 = (state_22890[(8)]);
var inst_22860 = (state_22890[(10)]);
var inst_22871 = (state_22890[(9)]);
var inst_22874 = (function (){var cs = inst_22860;
var vec__22865 = inst_22869;
var v = inst_22870;
var c = inst_22871;
return ((function (cs,vec__22865,v,c,inst_22870,inst_22869,inst_22860,inst_22871,state_val_22891,c__19649__auto___22912,out){
return (function (p1__22856_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22856_SHARP_);
});
;})(cs,vec__22865,v,c,inst_22870,inst_22869,inst_22860,inst_22871,state_val_22891,c__19649__auto___22912,out))
})();
var inst_22875 = cljs.core.filterv.call(null,inst_22874,inst_22860);
var inst_22860__$1 = inst_22875;
var state_22890__$1 = (function (){var statearr_22905 = state_22890;
(statearr_22905[(10)] = inst_22860__$1);

return statearr_22905;
})();
var statearr_22906_22922 = state_22890__$1;
(statearr_22906_22922[(2)] = null);

(statearr_22906_22922[(1)] = (2));


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
});})(c__19649__auto___22912,out))
;
return ((function (switch__19494__auto__,c__19649__auto___22912,out){
return (function() {
var cljs$core$async$state_machine__19495__auto__ = null;
var cljs$core$async$state_machine__19495__auto____0 = (function (){
var statearr_22907 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22907[(0)] = cljs$core$async$state_machine__19495__auto__);

(statearr_22907[(1)] = (1));

return statearr_22907;
});
var cljs$core$async$state_machine__19495__auto____1 = (function (state_22890){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_22890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e22908){if((e22908 instanceof Object)){
var ex__19498__auto__ = e22908;
var statearr_22909_22923 = state_22890;
(statearr_22909_22923[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22924 = state_22890;
state_22890 = G__22924;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$state_machine__19495__auto__ = function(state_22890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19495__auto____1.call(this,state_22890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19495__auto____0;
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19495__auto____1;
return cljs$core$async$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___22912,out))
})();
var state__19651__auto__ = (function (){var statearr_22910 = f__19650__auto__.call(null);
(statearr_22910[(6)] = c__19649__auto___22912);

return statearr_22910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___22912,out))
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
var G__22926 = arguments.length;
switch (G__22926) {
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
var c__19649__auto___22971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___22971,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___22971,out){
return (function (state_22950){
var state_val_22951 = (state_22950[(1)]);
if((state_val_22951 === (7))){
var inst_22932 = (state_22950[(7)]);
var inst_22932__$1 = (state_22950[(2)]);
var inst_22933 = (inst_22932__$1 == null);
var inst_22934 = cljs.core.not.call(null,inst_22933);
var state_22950__$1 = (function (){var statearr_22952 = state_22950;
(statearr_22952[(7)] = inst_22932__$1);

return statearr_22952;
})();
if(inst_22934){
var statearr_22953_22972 = state_22950__$1;
(statearr_22953_22972[(1)] = (8));

} else {
var statearr_22954_22973 = state_22950__$1;
(statearr_22954_22973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (1))){
var inst_22927 = (0);
var state_22950__$1 = (function (){var statearr_22955 = state_22950;
(statearr_22955[(8)] = inst_22927);

return statearr_22955;
})();
var statearr_22956_22974 = state_22950__$1;
(statearr_22956_22974[(2)] = null);

(statearr_22956_22974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (4))){
var state_22950__$1 = state_22950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22950__$1,(7),ch);
} else {
if((state_val_22951 === (6))){
var inst_22945 = (state_22950[(2)]);
var state_22950__$1 = state_22950;
var statearr_22957_22975 = state_22950__$1;
(statearr_22957_22975[(2)] = inst_22945);

(statearr_22957_22975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (3))){
var inst_22947 = (state_22950[(2)]);
var inst_22948 = cljs.core.async.close_BANG_.call(null,out);
var state_22950__$1 = (function (){var statearr_22958 = state_22950;
(statearr_22958[(9)] = inst_22947);

return statearr_22958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22950__$1,inst_22948);
} else {
if((state_val_22951 === (2))){
var inst_22927 = (state_22950[(8)]);
var inst_22929 = (inst_22927 < n);
var state_22950__$1 = state_22950;
if(cljs.core.truth_(inst_22929)){
var statearr_22959_22976 = state_22950__$1;
(statearr_22959_22976[(1)] = (4));

} else {
var statearr_22960_22977 = state_22950__$1;
(statearr_22960_22977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (11))){
var inst_22927 = (state_22950[(8)]);
var inst_22937 = (state_22950[(2)]);
var inst_22938 = (inst_22927 + (1));
var inst_22927__$1 = inst_22938;
var state_22950__$1 = (function (){var statearr_22961 = state_22950;
(statearr_22961[(10)] = inst_22937);

(statearr_22961[(8)] = inst_22927__$1);

return statearr_22961;
})();
var statearr_22962_22978 = state_22950__$1;
(statearr_22962_22978[(2)] = null);

(statearr_22962_22978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (9))){
var state_22950__$1 = state_22950;
var statearr_22963_22979 = state_22950__$1;
(statearr_22963_22979[(2)] = null);

(statearr_22963_22979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (5))){
var state_22950__$1 = state_22950;
var statearr_22964_22980 = state_22950__$1;
(statearr_22964_22980[(2)] = null);

(statearr_22964_22980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (10))){
var inst_22942 = (state_22950[(2)]);
var state_22950__$1 = state_22950;
var statearr_22965_22981 = state_22950__$1;
(statearr_22965_22981[(2)] = inst_22942);

(statearr_22965_22981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (8))){
var inst_22932 = (state_22950[(7)]);
var state_22950__$1 = state_22950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22950__$1,(11),out,inst_22932);
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
});})(c__19649__auto___22971,out))
;
return ((function (switch__19494__auto__,c__19649__auto___22971,out){
return (function() {
var cljs$core$async$state_machine__19495__auto__ = null;
var cljs$core$async$state_machine__19495__auto____0 = (function (){
var statearr_22966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22966[(0)] = cljs$core$async$state_machine__19495__auto__);

(statearr_22966[(1)] = (1));

return statearr_22966;
});
var cljs$core$async$state_machine__19495__auto____1 = (function (state_22950){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_22950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e22967){if((e22967 instanceof Object)){
var ex__19498__auto__ = e22967;
var statearr_22968_22982 = state_22950;
(statearr_22968_22982[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22983 = state_22950;
state_22950 = G__22983;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$state_machine__19495__auto__ = function(state_22950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19495__auto____1.call(this,state_22950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19495__auto____0;
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19495__auto____1;
return cljs$core$async$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___22971,out))
})();
var state__19651__auto__ = (function (){var statearr_22969 = f__19650__auto__.call(null);
(statearr_22969[(6)] = c__19649__auto___22971);

return statearr_22969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___22971,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22985 = (function (f,ch,meta22986){
this.f = f;
this.ch = ch;
this.meta22986 = meta22986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22987,meta22986__$1){
var self__ = this;
var _22987__$1 = this;
return (new cljs.core.async.t_cljs$core$async22985(self__.f,self__.ch,meta22986__$1));
});

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22987){
var self__ = this;
var _22987__$1 = this;
return self__.meta22986;
});

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22988 = (function (f,ch,meta22986,_,fn1,meta22989){
this.f = f;
this.ch = ch;
this.meta22986 = meta22986;
this._ = _;
this.fn1 = fn1;
this.meta22989 = meta22989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22990,meta22989__$1){
var self__ = this;
var _22990__$1 = this;
return (new cljs.core.async.t_cljs$core$async22988(self__.f,self__.ch,self__.meta22986,self__._,self__.fn1,meta22989__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22990){
var self__ = this;
var _22990__$1 = this;
return self__.meta22989;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22988.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22988.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22984_SHARP_){
return f1.call(null,(((p1__22984_SHARP_ == null))?null:self__.f.call(null,p1__22984_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22988.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22986","meta22986",698785903,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22985","cljs.core.async/t_cljs$core$async22985",-584387984,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22989","meta22989",981916051,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22988";

cljs.core.async.t_cljs$core$async22988.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22988");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22988.
 */
cljs.core.async.__GT_t_cljs$core$async22988 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22988(f__$1,ch__$1,meta22986__$1,___$2,fn1__$1,meta22989){
return (new cljs.core.async.t_cljs$core$async22988(f__$1,ch__$1,meta22986__$1,___$2,fn1__$1,meta22989));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22988(self__.f,self__.ch,self__.meta22986,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22986","meta22986",698785903,null)], null);
});

cljs.core.async.t_cljs$core$async22985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22985";

cljs.core.async.t_cljs$core$async22985.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22985");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22985.
 */
cljs.core.async.__GT_t_cljs$core$async22985 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22985(f__$1,ch__$1,meta22986){
return (new cljs.core.async.t_cljs$core$async22985(f__$1,ch__$1,meta22986));
});

}

return (new cljs.core.async.t_cljs$core$async22985(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22991 = (function (f,ch,meta22992){
this.f = f;
this.ch = ch;
this.meta22992 = meta22992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22993,meta22992__$1){
var self__ = this;
var _22993__$1 = this;
return (new cljs.core.async.t_cljs$core$async22991(self__.f,self__.ch,meta22992__$1));
});

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22993){
var self__ = this;
var _22993__$1 = this;
return self__.meta22992;
});

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22992","meta22992",-701704612,null)], null);
});

cljs.core.async.t_cljs$core$async22991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22991";

cljs.core.async.t_cljs$core$async22991.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22991");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22991.
 */
cljs.core.async.__GT_t_cljs$core$async22991 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22991(f__$1,ch__$1,meta22992){
return (new cljs.core.async.t_cljs$core$async22991(f__$1,ch__$1,meta22992));
});

}

return (new cljs.core.async.t_cljs$core$async22991(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22994 = (function (p,ch,meta22995){
this.p = p;
this.ch = ch;
this.meta22995 = meta22995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22996,meta22995__$1){
var self__ = this;
var _22996__$1 = this;
return (new cljs.core.async.t_cljs$core$async22994(self__.p,self__.ch,meta22995__$1));
});

cljs.core.async.t_cljs$core$async22994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22996){
var self__ = this;
var _22996__$1 = this;
return self__.meta22995;
});

cljs.core.async.t_cljs$core$async22994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22994.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22995","meta22995",1560835138,null)], null);
});

cljs.core.async.t_cljs$core$async22994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22994";

cljs.core.async.t_cljs$core$async22994.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22994");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22994.
 */
cljs.core.async.__GT_t_cljs$core$async22994 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22994(p__$1,ch__$1,meta22995){
return (new cljs.core.async.t_cljs$core$async22994(p__$1,ch__$1,meta22995));
});

}

return (new cljs.core.async.t_cljs$core$async22994(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22998 = arguments.length;
switch (G__22998) {
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
var c__19649__auto___23038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___23038,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___23038,out){
return (function (state_23019){
var state_val_23020 = (state_23019[(1)]);
if((state_val_23020 === (7))){
var inst_23015 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
var statearr_23021_23039 = state_23019__$1;
(statearr_23021_23039[(2)] = inst_23015);

(statearr_23021_23039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (1))){
var state_23019__$1 = state_23019;
var statearr_23022_23040 = state_23019__$1;
(statearr_23022_23040[(2)] = null);

(statearr_23022_23040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (4))){
var inst_23001 = (state_23019[(7)]);
var inst_23001__$1 = (state_23019[(2)]);
var inst_23002 = (inst_23001__$1 == null);
var state_23019__$1 = (function (){var statearr_23023 = state_23019;
(statearr_23023[(7)] = inst_23001__$1);

return statearr_23023;
})();
if(cljs.core.truth_(inst_23002)){
var statearr_23024_23041 = state_23019__$1;
(statearr_23024_23041[(1)] = (5));

} else {
var statearr_23025_23042 = state_23019__$1;
(statearr_23025_23042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (6))){
var inst_23001 = (state_23019[(7)]);
var inst_23006 = p.call(null,inst_23001);
var state_23019__$1 = state_23019;
if(cljs.core.truth_(inst_23006)){
var statearr_23026_23043 = state_23019__$1;
(statearr_23026_23043[(1)] = (8));

} else {
var statearr_23027_23044 = state_23019__$1;
(statearr_23027_23044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (3))){
var inst_23017 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23019__$1,inst_23017);
} else {
if((state_val_23020 === (2))){
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23019__$1,(4),ch);
} else {
if((state_val_23020 === (11))){
var inst_23009 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
var statearr_23028_23045 = state_23019__$1;
(statearr_23028_23045[(2)] = inst_23009);

(statearr_23028_23045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (9))){
var state_23019__$1 = state_23019;
var statearr_23029_23046 = state_23019__$1;
(statearr_23029_23046[(2)] = null);

(statearr_23029_23046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (5))){
var inst_23004 = cljs.core.async.close_BANG_.call(null,out);
var state_23019__$1 = state_23019;
var statearr_23030_23047 = state_23019__$1;
(statearr_23030_23047[(2)] = inst_23004);

(statearr_23030_23047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (10))){
var inst_23012 = (state_23019[(2)]);
var state_23019__$1 = (function (){var statearr_23031 = state_23019;
(statearr_23031[(8)] = inst_23012);

return statearr_23031;
})();
var statearr_23032_23048 = state_23019__$1;
(statearr_23032_23048[(2)] = null);

(statearr_23032_23048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (8))){
var inst_23001 = (state_23019[(7)]);
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23019__$1,(11),out,inst_23001);
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
});})(c__19649__auto___23038,out))
;
return ((function (switch__19494__auto__,c__19649__auto___23038,out){
return (function() {
var cljs$core$async$state_machine__19495__auto__ = null;
var cljs$core$async$state_machine__19495__auto____0 = (function (){
var statearr_23033 = [null,null,null,null,null,null,null,null,null];
(statearr_23033[(0)] = cljs$core$async$state_machine__19495__auto__);

(statearr_23033[(1)] = (1));

return statearr_23033;
});
var cljs$core$async$state_machine__19495__auto____1 = (function (state_23019){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_23019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e23034){if((e23034 instanceof Object)){
var ex__19498__auto__ = e23034;
var statearr_23035_23049 = state_23019;
(statearr_23035_23049[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23050 = state_23019;
state_23019 = G__23050;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$state_machine__19495__auto__ = function(state_23019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19495__auto____1.call(this,state_23019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19495__auto____0;
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19495__auto____1;
return cljs$core$async$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___23038,out))
})();
var state__19651__auto__ = (function (){var statearr_23036 = f__19650__auto__.call(null);
(statearr_23036[(6)] = c__19649__auto___23038);

return statearr_23036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___23038,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23052 = arguments.length;
switch (G__23052) {
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
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto__){
return (function (state_23115){
var state_val_23116 = (state_23115[(1)]);
if((state_val_23116 === (7))){
var inst_23111 = (state_23115[(2)]);
var state_23115__$1 = state_23115;
var statearr_23117_23155 = state_23115__$1;
(statearr_23117_23155[(2)] = inst_23111);

(statearr_23117_23155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (20))){
var inst_23081 = (state_23115[(7)]);
var inst_23092 = (state_23115[(2)]);
var inst_23093 = cljs.core.next.call(null,inst_23081);
var inst_23067 = inst_23093;
var inst_23068 = null;
var inst_23069 = (0);
var inst_23070 = (0);
var state_23115__$1 = (function (){var statearr_23118 = state_23115;
(statearr_23118[(8)] = inst_23069);

(statearr_23118[(9)] = inst_23070);

(statearr_23118[(10)] = inst_23068);

(statearr_23118[(11)] = inst_23092);

(statearr_23118[(12)] = inst_23067);

return statearr_23118;
})();
var statearr_23119_23156 = state_23115__$1;
(statearr_23119_23156[(2)] = null);

(statearr_23119_23156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (1))){
var state_23115__$1 = state_23115;
var statearr_23120_23157 = state_23115__$1;
(statearr_23120_23157[(2)] = null);

(statearr_23120_23157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (4))){
var inst_23056 = (state_23115[(13)]);
var inst_23056__$1 = (state_23115[(2)]);
var inst_23057 = (inst_23056__$1 == null);
var state_23115__$1 = (function (){var statearr_23121 = state_23115;
(statearr_23121[(13)] = inst_23056__$1);

return statearr_23121;
})();
if(cljs.core.truth_(inst_23057)){
var statearr_23122_23158 = state_23115__$1;
(statearr_23122_23158[(1)] = (5));

} else {
var statearr_23123_23159 = state_23115__$1;
(statearr_23123_23159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (15))){
var state_23115__$1 = state_23115;
var statearr_23127_23160 = state_23115__$1;
(statearr_23127_23160[(2)] = null);

(statearr_23127_23160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (21))){
var state_23115__$1 = state_23115;
var statearr_23128_23161 = state_23115__$1;
(statearr_23128_23161[(2)] = null);

(statearr_23128_23161[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (13))){
var inst_23069 = (state_23115[(8)]);
var inst_23070 = (state_23115[(9)]);
var inst_23068 = (state_23115[(10)]);
var inst_23067 = (state_23115[(12)]);
var inst_23077 = (state_23115[(2)]);
var inst_23078 = (inst_23070 + (1));
var tmp23124 = inst_23069;
var tmp23125 = inst_23068;
var tmp23126 = inst_23067;
var inst_23067__$1 = tmp23126;
var inst_23068__$1 = tmp23125;
var inst_23069__$1 = tmp23124;
var inst_23070__$1 = inst_23078;
var state_23115__$1 = (function (){var statearr_23129 = state_23115;
(statearr_23129[(8)] = inst_23069__$1);

(statearr_23129[(9)] = inst_23070__$1);

(statearr_23129[(10)] = inst_23068__$1);

(statearr_23129[(14)] = inst_23077);

(statearr_23129[(12)] = inst_23067__$1);

return statearr_23129;
})();
var statearr_23130_23162 = state_23115__$1;
(statearr_23130_23162[(2)] = null);

(statearr_23130_23162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (22))){
var state_23115__$1 = state_23115;
var statearr_23131_23163 = state_23115__$1;
(statearr_23131_23163[(2)] = null);

(statearr_23131_23163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (6))){
var inst_23056 = (state_23115[(13)]);
var inst_23065 = f.call(null,inst_23056);
var inst_23066 = cljs.core.seq.call(null,inst_23065);
var inst_23067 = inst_23066;
var inst_23068 = null;
var inst_23069 = (0);
var inst_23070 = (0);
var state_23115__$1 = (function (){var statearr_23132 = state_23115;
(statearr_23132[(8)] = inst_23069);

(statearr_23132[(9)] = inst_23070);

(statearr_23132[(10)] = inst_23068);

(statearr_23132[(12)] = inst_23067);

return statearr_23132;
})();
var statearr_23133_23164 = state_23115__$1;
(statearr_23133_23164[(2)] = null);

(statearr_23133_23164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (17))){
var inst_23081 = (state_23115[(7)]);
var inst_23085 = cljs.core.chunk_first.call(null,inst_23081);
var inst_23086 = cljs.core.chunk_rest.call(null,inst_23081);
var inst_23087 = cljs.core.count.call(null,inst_23085);
var inst_23067 = inst_23086;
var inst_23068 = inst_23085;
var inst_23069 = inst_23087;
var inst_23070 = (0);
var state_23115__$1 = (function (){var statearr_23134 = state_23115;
(statearr_23134[(8)] = inst_23069);

(statearr_23134[(9)] = inst_23070);

(statearr_23134[(10)] = inst_23068);

(statearr_23134[(12)] = inst_23067);

return statearr_23134;
})();
var statearr_23135_23165 = state_23115__$1;
(statearr_23135_23165[(2)] = null);

(statearr_23135_23165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (3))){
var inst_23113 = (state_23115[(2)]);
var state_23115__$1 = state_23115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23115__$1,inst_23113);
} else {
if((state_val_23116 === (12))){
var inst_23101 = (state_23115[(2)]);
var state_23115__$1 = state_23115;
var statearr_23136_23166 = state_23115__$1;
(statearr_23136_23166[(2)] = inst_23101);

(statearr_23136_23166[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (2))){
var state_23115__$1 = state_23115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23115__$1,(4),in$);
} else {
if((state_val_23116 === (23))){
var inst_23109 = (state_23115[(2)]);
var state_23115__$1 = state_23115;
var statearr_23137_23167 = state_23115__$1;
(statearr_23137_23167[(2)] = inst_23109);

(statearr_23137_23167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (19))){
var inst_23096 = (state_23115[(2)]);
var state_23115__$1 = state_23115;
var statearr_23138_23168 = state_23115__$1;
(statearr_23138_23168[(2)] = inst_23096);

(statearr_23138_23168[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (11))){
var inst_23081 = (state_23115[(7)]);
var inst_23067 = (state_23115[(12)]);
var inst_23081__$1 = cljs.core.seq.call(null,inst_23067);
var state_23115__$1 = (function (){var statearr_23139 = state_23115;
(statearr_23139[(7)] = inst_23081__$1);

return statearr_23139;
})();
if(inst_23081__$1){
var statearr_23140_23169 = state_23115__$1;
(statearr_23140_23169[(1)] = (14));

} else {
var statearr_23141_23170 = state_23115__$1;
(statearr_23141_23170[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (9))){
var inst_23103 = (state_23115[(2)]);
var inst_23104 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23115__$1 = (function (){var statearr_23142 = state_23115;
(statearr_23142[(15)] = inst_23103);

return statearr_23142;
})();
if(cljs.core.truth_(inst_23104)){
var statearr_23143_23171 = state_23115__$1;
(statearr_23143_23171[(1)] = (21));

} else {
var statearr_23144_23172 = state_23115__$1;
(statearr_23144_23172[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (5))){
var inst_23059 = cljs.core.async.close_BANG_.call(null,out);
var state_23115__$1 = state_23115;
var statearr_23145_23173 = state_23115__$1;
(statearr_23145_23173[(2)] = inst_23059);

(statearr_23145_23173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (14))){
var inst_23081 = (state_23115[(7)]);
var inst_23083 = cljs.core.chunked_seq_QMARK_.call(null,inst_23081);
var state_23115__$1 = state_23115;
if(inst_23083){
var statearr_23146_23174 = state_23115__$1;
(statearr_23146_23174[(1)] = (17));

} else {
var statearr_23147_23175 = state_23115__$1;
(statearr_23147_23175[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (16))){
var inst_23099 = (state_23115[(2)]);
var state_23115__$1 = state_23115;
var statearr_23148_23176 = state_23115__$1;
(statearr_23148_23176[(2)] = inst_23099);

(statearr_23148_23176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (10))){
var inst_23070 = (state_23115[(9)]);
var inst_23068 = (state_23115[(10)]);
var inst_23075 = cljs.core._nth.call(null,inst_23068,inst_23070);
var state_23115__$1 = state_23115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23115__$1,(13),out,inst_23075);
} else {
if((state_val_23116 === (18))){
var inst_23081 = (state_23115[(7)]);
var inst_23090 = cljs.core.first.call(null,inst_23081);
var state_23115__$1 = state_23115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23115__$1,(20),out,inst_23090);
} else {
if((state_val_23116 === (8))){
var inst_23069 = (state_23115[(8)]);
var inst_23070 = (state_23115[(9)]);
var inst_23072 = (inst_23070 < inst_23069);
var inst_23073 = inst_23072;
var state_23115__$1 = state_23115;
if(cljs.core.truth_(inst_23073)){
var statearr_23149_23177 = state_23115__$1;
(statearr_23149_23177[(1)] = (10));

} else {
var statearr_23150_23178 = state_23115__$1;
(statearr_23150_23178[(1)] = (11));

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
});})(c__19649__auto__))
;
return ((function (switch__19494__auto__,c__19649__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19495__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19495__auto____0 = (function (){
var statearr_23151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23151[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19495__auto__);

(statearr_23151[(1)] = (1));

return statearr_23151;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19495__auto____1 = (function (state_23115){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_23115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e23152){if((e23152 instanceof Object)){
var ex__19498__auto__ = e23152;
var statearr_23153_23179 = state_23115;
(statearr_23153_23179[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23180 = state_23115;
state_23115 = G__23180;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19495__auto__ = function(state_23115){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19495__auto____1.call(this,state_23115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19495__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19495__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto__))
})();
var state__19651__auto__ = (function (){var statearr_23154 = f__19650__auto__.call(null);
(statearr_23154[(6)] = c__19649__auto__);

return statearr_23154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__))
);

return c__19649__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23182 = arguments.length;
switch (G__23182) {
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
var G__23185 = arguments.length;
switch (G__23185) {
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
var G__23188 = arguments.length;
switch (G__23188) {
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
var c__19649__auto___23235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___23235,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___23235,out){
return (function (state_23212){
var state_val_23213 = (state_23212[(1)]);
if((state_val_23213 === (7))){
var inst_23207 = (state_23212[(2)]);
var state_23212__$1 = state_23212;
var statearr_23214_23236 = state_23212__$1;
(statearr_23214_23236[(2)] = inst_23207);

(statearr_23214_23236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23213 === (1))){
var inst_23189 = null;
var state_23212__$1 = (function (){var statearr_23215 = state_23212;
(statearr_23215[(7)] = inst_23189);

return statearr_23215;
})();
var statearr_23216_23237 = state_23212__$1;
(statearr_23216_23237[(2)] = null);

(statearr_23216_23237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23213 === (4))){
var inst_23192 = (state_23212[(8)]);
var inst_23192__$1 = (state_23212[(2)]);
var inst_23193 = (inst_23192__$1 == null);
var inst_23194 = cljs.core.not.call(null,inst_23193);
var state_23212__$1 = (function (){var statearr_23217 = state_23212;
(statearr_23217[(8)] = inst_23192__$1);

return statearr_23217;
})();
if(inst_23194){
var statearr_23218_23238 = state_23212__$1;
(statearr_23218_23238[(1)] = (5));

} else {
var statearr_23219_23239 = state_23212__$1;
(statearr_23219_23239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23213 === (6))){
var state_23212__$1 = state_23212;
var statearr_23220_23240 = state_23212__$1;
(statearr_23220_23240[(2)] = null);

(statearr_23220_23240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23213 === (3))){
var inst_23209 = (state_23212[(2)]);
var inst_23210 = cljs.core.async.close_BANG_.call(null,out);
var state_23212__$1 = (function (){var statearr_23221 = state_23212;
(statearr_23221[(9)] = inst_23209);

return statearr_23221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23212__$1,inst_23210);
} else {
if((state_val_23213 === (2))){
var state_23212__$1 = state_23212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23212__$1,(4),ch);
} else {
if((state_val_23213 === (11))){
var inst_23192 = (state_23212[(8)]);
var inst_23201 = (state_23212[(2)]);
var inst_23189 = inst_23192;
var state_23212__$1 = (function (){var statearr_23222 = state_23212;
(statearr_23222[(7)] = inst_23189);

(statearr_23222[(10)] = inst_23201);

return statearr_23222;
})();
var statearr_23223_23241 = state_23212__$1;
(statearr_23223_23241[(2)] = null);

(statearr_23223_23241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23213 === (9))){
var inst_23192 = (state_23212[(8)]);
var state_23212__$1 = state_23212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23212__$1,(11),out,inst_23192);
} else {
if((state_val_23213 === (5))){
var inst_23189 = (state_23212[(7)]);
var inst_23192 = (state_23212[(8)]);
var inst_23196 = cljs.core._EQ_.call(null,inst_23192,inst_23189);
var state_23212__$1 = state_23212;
if(inst_23196){
var statearr_23225_23242 = state_23212__$1;
(statearr_23225_23242[(1)] = (8));

} else {
var statearr_23226_23243 = state_23212__$1;
(statearr_23226_23243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23213 === (10))){
var inst_23204 = (state_23212[(2)]);
var state_23212__$1 = state_23212;
var statearr_23227_23244 = state_23212__$1;
(statearr_23227_23244[(2)] = inst_23204);

(statearr_23227_23244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23213 === (8))){
var inst_23189 = (state_23212[(7)]);
var tmp23224 = inst_23189;
var inst_23189__$1 = tmp23224;
var state_23212__$1 = (function (){var statearr_23228 = state_23212;
(statearr_23228[(7)] = inst_23189__$1);

return statearr_23228;
})();
var statearr_23229_23245 = state_23212__$1;
(statearr_23229_23245[(2)] = null);

(statearr_23229_23245[(1)] = (2));


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
});})(c__19649__auto___23235,out))
;
return ((function (switch__19494__auto__,c__19649__auto___23235,out){
return (function() {
var cljs$core$async$state_machine__19495__auto__ = null;
var cljs$core$async$state_machine__19495__auto____0 = (function (){
var statearr_23230 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23230[(0)] = cljs$core$async$state_machine__19495__auto__);

(statearr_23230[(1)] = (1));

return statearr_23230;
});
var cljs$core$async$state_machine__19495__auto____1 = (function (state_23212){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_23212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e23231){if((e23231 instanceof Object)){
var ex__19498__auto__ = e23231;
var statearr_23232_23246 = state_23212;
(statearr_23232_23246[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23247 = state_23212;
state_23212 = G__23247;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$state_machine__19495__auto__ = function(state_23212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19495__auto____1.call(this,state_23212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19495__auto____0;
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19495__auto____1;
return cljs$core$async$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___23235,out))
})();
var state__19651__auto__ = (function (){var statearr_23233 = f__19650__auto__.call(null);
(statearr_23233[(6)] = c__19649__auto___23235);

return statearr_23233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___23235,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23249 = arguments.length;
switch (G__23249) {
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
var c__19649__auto___23315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___23315,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___23315,out){
return (function (state_23287){
var state_val_23288 = (state_23287[(1)]);
if((state_val_23288 === (7))){
var inst_23283 = (state_23287[(2)]);
var state_23287__$1 = state_23287;
var statearr_23289_23316 = state_23287__$1;
(statearr_23289_23316[(2)] = inst_23283);

(statearr_23289_23316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (1))){
var inst_23250 = (new Array(n));
var inst_23251 = inst_23250;
var inst_23252 = (0);
var state_23287__$1 = (function (){var statearr_23290 = state_23287;
(statearr_23290[(7)] = inst_23252);

(statearr_23290[(8)] = inst_23251);

return statearr_23290;
})();
var statearr_23291_23317 = state_23287__$1;
(statearr_23291_23317[(2)] = null);

(statearr_23291_23317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (4))){
var inst_23255 = (state_23287[(9)]);
var inst_23255__$1 = (state_23287[(2)]);
var inst_23256 = (inst_23255__$1 == null);
var inst_23257 = cljs.core.not.call(null,inst_23256);
var state_23287__$1 = (function (){var statearr_23292 = state_23287;
(statearr_23292[(9)] = inst_23255__$1);

return statearr_23292;
})();
if(inst_23257){
var statearr_23293_23318 = state_23287__$1;
(statearr_23293_23318[(1)] = (5));

} else {
var statearr_23294_23319 = state_23287__$1;
(statearr_23294_23319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (15))){
var inst_23277 = (state_23287[(2)]);
var state_23287__$1 = state_23287;
var statearr_23295_23320 = state_23287__$1;
(statearr_23295_23320[(2)] = inst_23277);

(statearr_23295_23320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (13))){
var state_23287__$1 = state_23287;
var statearr_23296_23321 = state_23287__$1;
(statearr_23296_23321[(2)] = null);

(statearr_23296_23321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (6))){
var inst_23252 = (state_23287[(7)]);
var inst_23273 = (inst_23252 > (0));
var state_23287__$1 = state_23287;
if(cljs.core.truth_(inst_23273)){
var statearr_23297_23322 = state_23287__$1;
(statearr_23297_23322[(1)] = (12));

} else {
var statearr_23298_23323 = state_23287__$1;
(statearr_23298_23323[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (3))){
var inst_23285 = (state_23287[(2)]);
var state_23287__$1 = state_23287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23287__$1,inst_23285);
} else {
if((state_val_23288 === (12))){
var inst_23251 = (state_23287[(8)]);
var inst_23275 = cljs.core.vec.call(null,inst_23251);
var state_23287__$1 = state_23287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23287__$1,(15),out,inst_23275);
} else {
if((state_val_23288 === (2))){
var state_23287__$1 = state_23287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23287__$1,(4),ch);
} else {
if((state_val_23288 === (11))){
var inst_23267 = (state_23287[(2)]);
var inst_23268 = (new Array(n));
var inst_23251 = inst_23268;
var inst_23252 = (0);
var state_23287__$1 = (function (){var statearr_23299 = state_23287;
(statearr_23299[(10)] = inst_23267);

(statearr_23299[(7)] = inst_23252);

(statearr_23299[(8)] = inst_23251);

return statearr_23299;
})();
var statearr_23300_23324 = state_23287__$1;
(statearr_23300_23324[(2)] = null);

(statearr_23300_23324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (9))){
var inst_23251 = (state_23287[(8)]);
var inst_23265 = cljs.core.vec.call(null,inst_23251);
var state_23287__$1 = state_23287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23287__$1,(11),out,inst_23265);
} else {
if((state_val_23288 === (5))){
var inst_23255 = (state_23287[(9)]);
var inst_23252 = (state_23287[(7)]);
var inst_23260 = (state_23287[(11)]);
var inst_23251 = (state_23287[(8)]);
var inst_23259 = (inst_23251[inst_23252] = inst_23255);
var inst_23260__$1 = (inst_23252 + (1));
var inst_23261 = (inst_23260__$1 < n);
var state_23287__$1 = (function (){var statearr_23301 = state_23287;
(statearr_23301[(12)] = inst_23259);

(statearr_23301[(11)] = inst_23260__$1);

return statearr_23301;
})();
if(cljs.core.truth_(inst_23261)){
var statearr_23302_23325 = state_23287__$1;
(statearr_23302_23325[(1)] = (8));

} else {
var statearr_23303_23326 = state_23287__$1;
(statearr_23303_23326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (14))){
var inst_23280 = (state_23287[(2)]);
var inst_23281 = cljs.core.async.close_BANG_.call(null,out);
var state_23287__$1 = (function (){var statearr_23305 = state_23287;
(statearr_23305[(13)] = inst_23280);

return statearr_23305;
})();
var statearr_23306_23327 = state_23287__$1;
(statearr_23306_23327[(2)] = inst_23281);

(statearr_23306_23327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (10))){
var inst_23271 = (state_23287[(2)]);
var state_23287__$1 = state_23287;
var statearr_23307_23328 = state_23287__$1;
(statearr_23307_23328[(2)] = inst_23271);

(statearr_23307_23328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (8))){
var inst_23260 = (state_23287[(11)]);
var inst_23251 = (state_23287[(8)]);
var tmp23304 = inst_23251;
var inst_23251__$1 = tmp23304;
var inst_23252 = inst_23260;
var state_23287__$1 = (function (){var statearr_23308 = state_23287;
(statearr_23308[(7)] = inst_23252);

(statearr_23308[(8)] = inst_23251__$1);

return statearr_23308;
})();
var statearr_23309_23329 = state_23287__$1;
(statearr_23309_23329[(2)] = null);

(statearr_23309_23329[(1)] = (2));


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
});})(c__19649__auto___23315,out))
;
return ((function (switch__19494__auto__,c__19649__auto___23315,out){
return (function() {
var cljs$core$async$state_machine__19495__auto__ = null;
var cljs$core$async$state_machine__19495__auto____0 = (function (){
var statearr_23310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23310[(0)] = cljs$core$async$state_machine__19495__auto__);

(statearr_23310[(1)] = (1));

return statearr_23310;
});
var cljs$core$async$state_machine__19495__auto____1 = (function (state_23287){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_23287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e23311){if((e23311 instanceof Object)){
var ex__19498__auto__ = e23311;
var statearr_23312_23330 = state_23287;
(statearr_23312_23330[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23331 = state_23287;
state_23287 = G__23331;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$state_machine__19495__auto__ = function(state_23287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19495__auto____1.call(this,state_23287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19495__auto____0;
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19495__auto____1;
return cljs$core$async$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___23315,out))
})();
var state__19651__auto__ = (function (){var statearr_23313 = f__19650__auto__.call(null);
(statearr_23313[(6)] = c__19649__auto___23315);

return statearr_23313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___23315,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23333 = arguments.length;
switch (G__23333) {
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
var c__19649__auto___23403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___23403,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___23403,out){
return (function (state_23375){
var state_val_23376 = (state_23375[(1)]);
if((state_val_23376 === (7))){
var inst_23371 = (state_23375[(2)]);
var state_23375__$1 = state_23375;
var statearr_23377_23404 = state_23375__$1;
(statearr_23377_23404[(2)] = inst_23371);

(statearr_23377_23404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (1))){
var inst_23334 = [];
var inst_23335 = inst_23334;
var inst_23336 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23375__$1 = (function (){var statearr_23378 = state_23375;
(statearr_23378[(7)] = inst_23336);

(statearr_23378[(8)] = inst_23335);

return statearr_23378;
})();
var statearr_23379_23405 = state_23375__$1;
(statearr_23379_23405[(2)] = null);

(statearr_23379_23405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (4))){
var inst_23339 = (state_23375[(9)]);
var inst_23339__$1 = (state_23375[(2)]);
var inst_23340 = (inst_23339__$1 == null);
var inst_23341 = cljs.core.not.call(null,inst_23340);
var state_23375__$1 = (function (){var statearr_23380 = state_23375;
(statearr_23380[(9)] = inst_23339__$1);

return statearr_23380;
})();
if(inst_23341){
var statearr_23381_23406 = state_23375__$1;
(statearr_23381_23406[(1)] = (5));

} else {
var statearr_23382_23407 = state_23375__$1;
(statearr_23382_23407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (15))){
var inst_23365 = (state_23375[(2)]);
var state_23375__$1 = state_23375;
var statearr_23383_23408 = state_23375__$1;
(statearr_23383_23408[(2)] = inst_23365);

(statearr_23383_23408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (13))){
var state_23375__$1 = state_23375;
var statearr_23384_23409 = state_23375__$1;
(statearr_23384_23409[(2)] = null);

(statearr_23384_23409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (6))){
var inst_23335 = (state_23375[(8)]);
var inst_23360 = inst_23335.length;
var inst_23361 = (inst_23360 > (0));
var state_23375__$1 = state_23375;
if(cljs.core.truth_(inst_23361)){
var statearr_23385_23410 = state_23375__$1;
(statearr_23385_23410[(1)] = (12));

} else {
var statearr_23386_23411 = state_23375__$1;
(statearr_23386_23411[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (3))){
var inst_23373 = (state_23375[(2)]);
var state_23375__$1 = state_23375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23375__$1,inst_23373);
} else {
if((state_val_23376 === (12))){
var inst_23335 = (state_23375[(8)]);
var inst_23363 = cljs.core.vec.call(null,inst_23335);
var state_23375__$1 = state_23375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23375__$1,(15),out,inst_23363);
} else {
if((state_val_23376 === (2))){
var state_23375__$1 = state_23375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23375__$1,(4),ch);
} else {
if((state_val_23376 === (11))){
var inst_23339 = (state_23375[(9)]);
var inst_23343 = (state_23375[(10)]);
var inst_23353 = (state_23375[(2)]);
var inst_23354 = [];
var inst_23355 = inst_23354.push(inst_23339);
var inst_23335 = inst_23354;
var inst_23336 = inst_23343;
var state_23375__$1 = (function (){var statearr_23387 = state_23375;
(statearr_23387[(7)] = inst_23336);

(statearr_23387[(11)] = inst_23353);

(statearr_23387[(8)] = inst_23335);

(statearr_23387[(12)] = inst_23355);

return statearr_23387;
})();
var statearr_23388_23412 = state_23375__$1;
(statearr_23388_23412[(2)] = null);

(statearr_23388_23412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (9))){
var inst_23335 = (state_23375[(8)]);
var inst_23351 = cljs.core.vec.call(null,inst_23335);
var state_23375__$1 = state_23375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23375__$1,(11),out,inst_23351);
} else {
if((state_val_23376 === (5))){
var inst_23339 = (state_23375[(9)]);
var inst_23336 = (state_23375[(7)]);
var inst_23343 = (state_23375[(10)]);
var inst_23343__$1 = f.call(null,inst_23339);
var inst_23344 = cljs.core._EQ_.call(null,inst_23343__$1,inst_23336);
var inst_23345 = cljs.core.keyword_identical_QMARK_.call(null,inst_23336,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23346 = ((inst_23344) || (inst_23345));
var state_23375__$1 = (function (){var statearr_23389 = state_23375;
(statearr_23389[(10)] = inst_23343__$1);

return statearr_23389;
})();
if(cljs.core.truth_(inst_23346)){
var statearr_23390_23413 = state_23375__$1;
(statearr_23390_23413[(1)] = (8));

} else {
var statearr_23391_23414 = state_23375__$1;
(statearr_23391_23414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (14))){
var inst_23368 = (state_23375[(2)]);
var inst_23369 = cljs.core.async.close_BANG_.call(null,out);
var state_23375__$1 = (function (){var statearr_23393 = state_23375;
(statearr_23393[(13)] = inst_23368);

return statearr_23393;
})();
var statearr_23394_23415 = state_23375__$1;
(statearr_23394_23415[(2)] = inst_23369);

(statearr_23394_23415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (10))){
var inst_23358 = (state_23375[(2)]);
var state_23375__$1 = state_23375;
var statearr_23395_23416 = state_23375__$1;
(statearr_23395_23416[(2)] = inst_23358);

(statearr_23395_23416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (8))){
var inst_23339 = (state_23375[(9)]);
var inst_23343 = (state_23375[(10)]);
var inst_23335 = (state_23375[(8)]);
var inst_23348 = inst_23335.push(inst_23339);
var tmp23392 = inst_23335;
var inst_23335__$1 = tmp23392;
var inst_23336 = inst_23343;
var state_23375__$1 = (function (){var statearr_23396 = state_23375;
(statearr_23396[(7)] = inst_23336);

(statearr_23396[(14)] = inst_23348);

(statearr_23396[(8)] = inst_23335__$1);

return statearr_23396;
})();
var statearr_23397_23417 = state_23375__$1;
(statearr_23397_23417[(2)] = null);

(statearr_23397_23417[(1)] = (2));


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
});})(c__19649__auto___23403,out))
;
return ((function (switch__19494__auto__,c__19649__auto___23403,out){
return (function() {
var cljs$core$async$state_machine__19495__auto__ = null;
var cljs$core$async$state_machine__19495__auto____0 = (function (){
var statearr_23398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23398[(0)] = cljs$core$async$state_machine__19495__auto__);

(statearr_23398[(1)] = (1));

return statearr_23398;
});
var cljs$core$async$state_machine__19495__auto____1 = (function (state_23375){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_23375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e23399){if((e23399 instanceof Object)){
var ex__19498__auto__ = e23399;
var statearr_23400_23418 = state_23375;
(statearr_23400_23418[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23419 = state_23375;
state_23375 = G__23419;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
cljs$core$async$state_machine__19495__auto__ = function(state_23375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19495__auto____1.call(this,state_23375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19495__auto____0;
cljs$core$async$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19495__auto____1;
return cljs$core$async$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___23403,out))
})();
var state__19651__auto__ = (function (){var statearr_23401 = f__19650__auto__.call(null);
(statearr_23401[(6)] = c__19649__auto___23403);

return statearr_23401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___23403,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
