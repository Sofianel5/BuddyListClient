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
var G__21560 = arguments.length;
switch (G__21560) {
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
if(typeof cljs.core.async.t_cljs$core$async21561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21561 = (function (f,blockable,meta21562){
this.f = f;
this.blockable = blockable;
this.meta21562 = meta21562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21563,meta21562__$1){
var self__ = this;
var _21563__$1 = this;
return (new cljs.core.async.t_cljs$core$async21561(self__.f,self__.blockable,meta21562__$1));
});

cljs.core.async.t_cljs$core$async21561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21563){
var self__ = this;
var _21563__$1 = this;
return self__.meta21562;
});

cljs.core.async.t_cljs$core$async21561.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21561.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21562","meta21562",1802626031,null)], null);
});

cljs.core.async.t_cljs$core$async21561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21561";

cljs.core.async.t_cljs$core$async21561.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async21561");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21561.
 */
cljs.core.async.__GT_t_cljs$core$async21561 = (function cljs$core$async$__GT_t_cljs$core$async21561(f__$1,blockable__$1,meta21562){
return (new cljs.core.async.t_cljs$core$async21561(f__$1,blockable__$1,meta21562));
});

}

return (new cljs.core.async.t_cljs$core$async21561(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21567 = arguments.length;
switch (G__21567) {
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
var G__21570 = arguments.length;
switch (G__21570) {
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
var G__21573 = arguments.length;
switch (G__21573) {
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
var val_21575 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21575);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21575,ret){
return (function (){
return fn1.call(null,val_21575);
});})(val_21575,ret))
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
var G__21577 = arguments.length;
switch (G__21577) {
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
var n__4374__auto___21579 = n;
var x_21580 = (0);
while(true){
if((x_21580 < n__4374__auto___21579)){
(a[x_21580] = (0));

var G__21581 = (x_21580 + (1));
x_21580 = G__21581;
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

var G__21582 = (i + (1));
i = G__21582;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21583 = (function (flag,meta21584){
this.flag = flag;
this.meta21584 = meta21584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21585,meta21584__$1){
var self__ = this;
var _21585__$1 = this;
return (new cljs.core.async.t_cljs$core$async21583(self__.flag,meta21584__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21585){
var self__ = this;
var _21585__$1 = this;
return self__.meta21584;
});})(flag))
;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21583.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21584","meta21584",426905132,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21583";

cljs.core.async.t_cljs$core$async21583.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async21583");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21583.
 */
cljs.core.async.__GT_t_cljs$core$async21583 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21583(flag__$1,meta21584){
return (new cljs.core.async.t_cljs$core$async21583(flag__$1,meta21584));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21583(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21586 = (function (flag,cb,meta21587){
this.flag = flag;
this.cb = cb;
this.meta21587 = meta21587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21588,meta21587__$1){
var self__ = this;
var _21588__$1 = this;
return (new cljs.core.async.t_cljs$core$async21586(self__.flag,self__.cb,meta21587__$1));
});

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21588){
var self__ = this;
var _21588__$1 = this;
return self__.meta21587;
});

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21587","meta21587",1619110065,null)], null);
});

cljs.core.async.t_cljs$core$async21586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21586";

cljs.core.async.t_cljs$core$async21586.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async21586");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21586.
 */
cljs.core.async.__GT_t_cljs$core$async21586 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21586(flag__$1,cb__$1,meta21587){
return (new cljs.core.async.t_cljs$core$async21586(flag__$1,cb__$1,meta21587));
});

}

return (new cljs.core.async.t_cljs$core$async21586(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21589_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21589_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21590_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21590_SHARP_,port], null));
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
var G__21591 = (i + (1));
i = G__21591;
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
var len__4497__auto___21597 = arguments.length;
var i__4498__auto___21598 = (0);
while(true){
if((i__4498__auto___21598 < len__4497__auto___21597)){
args__4500__auto__.push((arguments[i__4498__auto___21598]));

var G__21599 = (i__4498__auto___21598 + (1));
i__4498__auto___21598 = G__21599;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21594){
var map__21595 = p__21594;
var map__21595__$1 = ((((!((map__21595 == null)))?(((((map__21595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21595):map__21595);
var opts = map__21595__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21592){
var G__21593 = cljs.core.first.call(null,seq21592);
var seq21592__$1 = cljs.core.next.call(null,seq21592);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21593,seq21592__$1);
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
var G__21601 = arguments.length;
switch (G__21601) {
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
var c__19650__auto___21647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___21647){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___21647){
return (function (state_21625){
var state_val_21626 = (state_21625[(1)]);
if((state_val_21626 === (7))){
var inst_21621 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
var statearr_21627_21648 = state_21625__$1;
(statearr_21627_21648[(2)] = inst_21621);

(statearr_21627_21648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (1))){
var state_21625__$1 = state_21625;
var statearr_21628_21649 = state_21625__$1;
(statearr_21628_21649[(2)] = null);

(statearr_21628_21649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (4))){
var inst_21604 = (state_21625[(7)]);
var inst_21604__$1 = (state_21625[(2)]);
var inst_21605 = (inst_21604__$1 == null);
var state_21625__$1 = (function (){var statearr_21629 = state_21625;
(statearr_21629[(7)] = inst_21604__$1);

return statearr_21629;
})();
if(cljs.core.truth_(inst_21605)){
var statearr_21630_21650 = state_21625__$1;
(statearr_21630_21650[(1)] = (5));

} else {
var statearr_21631_21651 = state_21625__$1;
(statearr_21631_21651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (13))){
var state_21625__$1 = state_21625;
var statearr_21632_21652 = state_21625__$1;
(statearr_21632_21652[(2)] = null);

(statearr_21632_21652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (6))){
var inst_21604 = (state_21625[(7)]);
var state_21625__$1 = state_21625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21625__$1,(11),to,inst_21604);
} else {
if((state_val_21626 === (3))){
var inst_21623 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21625__$1,inst_21623);
} else {
if((state_val_21626 === (12))){
var state_21625__$1 = state_21625;
var statearr_21633_21653 = state_21625__$1;
(statearr_21633_21653[(2)] = null);

(statearr_21633_21653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (2))){
var state_21625__$1 = state_21625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21625__$1,(4),from);
} else {
if((state_val_21626 === (11))){
var inst_21614 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
if(cljs.core.truth_(inst_21614)){
var statearr_21634_21654 = state_21625__$1;
(statearr_21634_21654[(1)] = (12));

} else {
var statearr_21635_21655 = state_21625__$1;
(statearr_21635_21655[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (9))){
var state_21625__$1 = state_21625;
var statearr_21636_21656 = state_21625__$1;
(statearr_21636_21656[(2)] = null);

(statearr_21636_21656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (5))){
var state_21625__$1 = state_21625;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21637_21657 = state_21625__$1;
(statearr_21637_21657[(1)] = (8));

} else {
var statearr_21638_21658 = state_21625__$1;
(statearr_21638_21658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (14))){
var inst_21619 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
var statearr_21639_21659 = state_21625__$1;
(statearr_21639_21659[(2)] = inst_21619);

(statearr_21639_21659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (10))){
var inst_21611 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
var statearr_21640_21660 = state_21625__$1;
(statearr_21640_21660[(2)] = inst_21611);

(statearr_21640_21660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (8))){
var inst_21608 = cljs.core.async.close_BANG_.call(null,to);
var state_21625__$1 = state_21625;
var statearr_21641_21661 = state_21625__$1;
(statearr_21641_21661[(2)] = inst_21608);

(statearr_21641_21661[(1)] = (10));


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
});})(c__19650__auto___21647))
;
return ((function (switch__19495__auto__,c__19650__auto___21647){
return (function() {
var cljs$core$async$state_machine__19496__auto__ = null;
var cljs$core$async$state_machine__19496__auto____0 = (function (){
var statearr_21642 = [null,null,null,null,null,null,null,null];
(statearr_21642[(0)] = cljs$core$async$state_machine__19496__auto__);

(statearr_21642[(1)] = (1));

return statearr_21642;
});
var cljs$core$async$state_machine__19496__auto____1 = (function (state_21625){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_21625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e21643){if((e21643 instanceof Object)){
var ex__19499__auto__ = e21643;
var statearr_21644_21662 = state_21625;
(statearr_21644_21662[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21663 = state_21625;
state_21625 = G__21663;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$state_machine__19496__auto__ = function(state_21625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19496__auto____1.call(this,state_21625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19496__auto____0;
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19496__auto____1;
return cljs$core$async$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___21647))
})();
var state__19652__auto__ = (function (){var statearr_21645 = f__19651__auto__.call(null);
(statearr_21645[(6)] = c__19650__auto___21647);

return statearr_21645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___21647))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21664){
var vec__21665 = p__21664;
var v = cljs.core.nth.call(null,vec__21665,(0),null);
var p = cljs.core.nth.call(null,vec__21665,(1),null);
var job = vec__21665;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19650__auto___21836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___21836,res,vec__21665,v,p,job,jobs,results){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___21836,res,vec__21665,v,p,job,jobs,results){
return (function (state_21672){
var state_val_21673 = (state_21672[(1)]);
if((state_val_21673 === (1))){
var state_21672__$1 = state_21672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21672__$1,(2),res,v);
} else {
if((state_val_21673 === (2))){
var inst_21669 = (state_21672[(2)]);
var inst_21670 = cljs.core.async.close_BANG_.call(null,res);
var state_21672__$1 = (function (){var statearr_21674 = state_21672;
(statearr_21674[(7)] = inst_21669);

return statearr_21674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21672__$1,inst_21670);
} else {
return null;
}
}
});})(c__19650__auto___21836,res,vec__21665,v,p,job,jobs,results))
;
return ((function (switch__19495__auto__,c__19650__auto___21836,res,vec__21665,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0 = (function (){
var statearr_21675 = [null,null,null,null,null,null,null,null];
(statearr_21675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__);

(statearr_21675[(1)] = (1));

return statearr_21675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1 = (function (state_21672){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_21672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e21676){if((e21676 instanceof Object)){
var ex__19499__auto__ = e21676;
var statearr_21677_21837 = state_21672;
(statearr_21677_21837[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21838 = state_21672;
state_21672 = G__21838;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__ = function(state_21672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1.call(this,state_21672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___21836,res,vec__21665,v,p,job,jobs,results))
})();
var state__19652__auto__ = (function (){var statearr_21678 = f__19651__auto__.call(null);
(statearr_21678[(6)] = c__19650__auto___21836);

return statearr_21678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___21836,res,vec__21665,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21679){
var vec__21680 = p__21679;
var v = cljs.core.nth.call(null,vec__21680,(0),null);
var p = cljs.core.nth.call(null,vec__21680,(1),null);
var job = vec__21680;
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
var n__4374__auto___21839 = n;
var __21840 = (0);
while(true){
if((__21840 < n__4374__auto___21839)){
var G__21683_21841 = type;
var G__21683_21842__$1 = (((G__21683_21841 instanceof cljs.core.Keyword))?G__21683_21841.fqn:null);
switch (G__21683_21842__$1) {
case "compute":
var c__19650__auto___21844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21840,c__19650__auto___21844,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (__21840,c__19650__auto___21844,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async){
return (function (state_21696){
var state_val_21697 = (state_21696[(1)]);
if((state_val_21697 === (1))){
var state_21696__$1 = state_21696;
var statearr_21698_21845 = state_21696__$1;
(statearr_21698_21845[(2)] = null);

(statearr_21698_21845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21697 === (2))){
var state_21696__$1 = state_21696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21696__$1,(4),jobs);
} else {
if((state_val_21697 === (3))){
var inst_21694 = (state_21696[(2)]);
var state_21696__$1 = state_21696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21696__$1,inst_21694);
} else {
if((state_val_21697 === (4))){
var inst_21686 = (state_21696[(2)]);
var inst_21687 = process.call(null,inst_21686);
var state_21696__$1 = state_21696;
if(cljs.core.truth_(inst_21687)){
var statearr_21699_21846 = state_21696__$1;
(statearr_21699_21846[(1)] = (5));

} else {
var statearr_21700_21847 = state_21696__$1;
(statearr_21700_21847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21697 === (5))){
var state_21696__$1 = state_21696;
var statearr_21701_21848 = state_21696__$1;
(statearr_21701_21848[(2)] = null);

(statearr_21701_21848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21697 === (6))){
var state_21696__$1 = state_21696;
var statearr_21702_21849 = state_21696__$1;
(statearr_21702_21849[(2)] = null);

(statearr_21702_21849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21697 === (7))){
var inst_21692 = (state_21696[(2)]);
var state_21696__$1 = state_21696;
var statearr_21703_21850 = state_21696__$1;
(statearr_21703_21850[(2)] = inst_21692);

(statearr_21703_21850[(1)] = (3));


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
});})(__21840,c__19650__auto___21844,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async))
;
return ((function (__21840,switch__19495__auto__,c__19650__auto___21844,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0 = (function (){
var statearr_21704 = [null,null,null,null,null,null,null];
(statearr_21704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__);

(statearr_21704[(1)] = (1));

return statearr_21704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1 = (function (state_21696){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_21696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e21705){if((e21705 instanceof Object)){
var ex__19499__auto__ = e21705;
var statearr_21706_21851 = state_21696;
(statearr_21706_21851[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21852 = state_21696;
state_21696 = G__21852;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__ = function(state_21696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1.call(this,state_21696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__;
})()
;})(__21840,switch__19495__auto__,c__19650__auto___21844,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async))
})();
var state__19652__auto__ = (function (){var statearr_21707 = f__19651__auto__.call(null);
(statearr_21707[(6)] = c__19650__auto___21844);

return statearr_21707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(__21840,c__19650__auto___21844,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async))
);


break;
case "async":
var c__19650__auto___21853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21840,c__19650__auto___21853,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (__21840,c__19650__auto___21853,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async){
return (function (state_21720){
var state_val_21721 = (state_21720[(1)]);
if((state_val_21721 === (1))){
var state_21720__$1 = state_21720;
var statearr_21722_21854 = state_21720__$1;
(statearr_21722_21854[(2)] = null);

(statearr_21722_21854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (2))){
var state_21720__$1 = state_21720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21720__$1,(4),jobs);
} else {
if((state_val_21721 === (3))){
var inst_21718 = (state_21720[(2)]);
var state_21720__$1 = state_21720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21720__$1,inst_21718);
} else {
if((state_val_21721 === (4))){
var inst_21710 = (state_21720[(2)]);
var inst_21711 = async.call(null,inst_21710);
var state_21720__$1 = state_21720;
if(cljs.core.truth_(inst_21711)){
var statearr_21723_21855 = state_21720__$1;
(statearr_21723_21855[(1)] = (5));

} else {
var statearr_21724_21856 = state_21720__$1;
(statearr_21724_21856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (5))){
var state_21720__$1 = state_21720;
var statearr_21725_21857 = state_21720__$1;
(statearr_21725_21857[(2)] = null);

(statearr_21725_21857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (6))){
var state_21720__$1 = state_21720;
var statearr_21726_21858 = state_21720__$1;
(statearr_21726_21858[(2)] = null);

(statearr_21726_21858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (7))){
var inst_21716 = (state_21720[(2)]);
var state_21720__$1 = state_21720;
var statearr_21727_21859 = state_21720__$1;
(statearr_21727_21859[(2)] = inst_21716);

(statearr_21727_21859[(1)] = (3));


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
});})(__21840,c__19650__auto___21853,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async))
;
return ((function (__21840,switch__19495__auto__,c__19650__auto___21853,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0 = (function (){
var statearr_21728 = [null,null,null,null,null,null,null];
(statearr_21728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__);

(statearr_21728[(1)] = (1));

return statearr_21728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1 = (function (state_21720){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_21720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e21729){if((e21729 instanceof Object)){
var ex__19499__auto__ = e21729;
var statearr_21730_21860 = state_21720;
(statearr_21730_21860[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21861 = state_21720;
state_21720 = G__21861;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__ = function(state_21720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1.call(this,state_21720);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__;
})()
;})(__21840,switch__19495__auto__,c__19650__auto___21853,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async))
})();
var state__19652__auto__ = (function (){var statearr_21731 = f__19651__auto__.call(null);
(statearr_21731[(6)] = c__19650__auto___21853);

return statearr_21731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(__21840,c__19650__auto___21853,G__21683_21841,G__21683_21842__$1,n__4374__auto___21839,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21683_21842__$1)].join('')));

}

var G__21862 = (__21840 + (1));
__21840 = G__21862;
continue;
} else {
}
break;
}

var c__19650__auto___21863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___21863,jobs,results,process,async){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___21863,jobs,results,process,async){
return (function (state_21753){
var state_val_21754 = (state_21753[(1)]);
if((state_val_21754 === (1))){
var state_21753__$1 = state_21753;
var statearr_21755_21864 = state_21753__$1;
(statearr_21755_21864[(2)] = null);

(statearr_21755_21864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (2))){
var state_21753__$1 = state_21753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21753__$1,(4),from);
} else {
if((state_val_21754 === (3))){
var inst_21751 = (state_21753[(2)]);
var state_21753__$1 = state_21753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21753__$1,inst_21751);
} else {
if((state_val_21754 === (4))){
var inst_21734 = (state_21753[(7)]);
var inst_21734__$1 = (state_21753[(2)]);
var inst_21735 = (inst_21734__$1 == null);
var state_21753__$1 = (function (){var statearr_21756 = state_21753;
(statearr_21756[(7)] = inst_21734__$1);

return statearr_21756;
})();
if(cljs.core.truth_(inst_21735)){
var statearr_21757_21865 = state_21753__$1;
(statearr_21757_21865[(1)] = (5));

} else {
var statearr_21758_21866 = state_21753__$1;
(statearr_21758_21866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (5))){
var inst_21737 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21753__$1 = state_21753;
var statearr_21759_21867 = state_21753__$1;
(statearr_21759_21867[(2)] = inst_21737);

(statearr_21759_21867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (6))){
var inst_21739 = (state_21753[(8)]);
var inst_21734 = (state_21753[(7)]);
var inst_21739__$1 = cljs.core.async.chan.call(null,(1));
var inst_21740 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21741 = [inst_21734,inst_21739__$1];
var inst_21742 = (new cljs.core.PersistentVector(null,2,(5),inst_21740,inst_21741,null));
var state_21753__$1 = (function (){var statearr_21760 = state_21753;
(statearr_21760[(8)] = inst_21739__$1);

return statearr_21760;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21753__$1,(8),jobs,inst_21742);
} else {
if((state_val_21754 === (7))){
var inst_21749 = (state_21753[(2)]);
var state_21753__$1 = state_21753;
var statearr_21761_21868 = state_21753__$1;
(statearr_21761_21868[(2)] = inst_21749);

(statearr_21761_21868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (8))){
var inst_21739 = (state_21753[(8)]);
var inst_21744 = (state_21753[(2)]);
var state_21753__$1 = (function (){var statearr_21762 = state_21753;
(statearr_21762[(9)] = inst_21744);

return statearr_21762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21753__$1,(9),results,inst_21739);
} else {
if((state_val_21754 === (9))){
var inst_21746 = (state_21753[(2)]);
var state_21753__$1 = (function (){var statearr_21763 = state_21753;
(statearr_21763[(10)] = inst_21746);

return statearr_21763;
})();
var statearr_21764_21869 = state_21753__$1;
(statearr_21764_21869[(2)] = null);

(statearr_21764_21869[(1)] = (2));


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
});})(c__19650__auto___21863,jobs,results,process,async))
;
return ((function (switch__19495__auto__,c__19650__auto___21863,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0 = (function (){
var statearr_21765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__);

(statearr_21765[(1)] = (1));

return statearr_21765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1 = (function (state_21753){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_21753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e21766){if((e21766 instanceof Object)){
var ex__19499__auto__ = e21766;
var statearr_21767_21870 = state_21753;
(statearr_21767_21870[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21871 = state_21753;
state_21753 = G__21871;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__ = function(state_21753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1.call(this,state_21753);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___21863,jobs,results,process,async))
})();
var state__19652__auto__ = (function (){var statearr_21768 = f__19651__auto__.call(null);
(statearr_21768[(6)] = c__19650__auto___21863);

return statearr_21768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___21863,jobs,results,process,async))
);


var c__19650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto__,jobs,results,process,async){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto__,jobs,results,process,async){
return (function (state_21806){
var state_val_21807 = (state_21806[(1)]);
if((state_val_21807 === (7))){
var inst_21802 = (state_21806[(2)]);
var state_21806__$1 = state_21806;
var statearr_21808_21872 = state_21806__$1;
(statearr_21808_21872[(2)] = inst_21802);

(statearr_21808_21872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (20))){
var state_21806__$1 = state_21806;
var statearr_21809_21873 = state_21806__$1;
(statearr_21809_21873[(2)] = null);

(statearr_21809_21873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (1))){
var state_21806__$1 = state_21806;
var statearr_21810_21874 = state_21806__$1;
(statearr_21810_21874[(2)] = null);

(statearr_21810_21874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (4))){
var inst_21771 = (state_21806[(7)]);
var inst_21771__$1 = (state_21806[(2)]);
var inst_21772 = (inst_21771__$1 == null);
var state_21806__$1 = (function (){var statearr_21811 = state_21806;
(statearr_21811[(7)] = inst_21771__$1);

return statearr_21811;
})();
if(cljs.core.truth_(inst_21772)){
var statearr_21812_21875 = state_21806__$1;
(statearr_21812_21875[(1)] = (5));

} else {
var statearr_21813_21876 = state_21806__$1;
(statearr_21813_21876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (15))){
var inst_21784 = (state_21806[(8)]);
var state_21806__$1 = state_21806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21806__$1,(18),to,inst_21784);
} else {
if((state_val_21807 === (21))){
var inst_21797 = (state_21806[(2)]);
var state_21806__$1 = state_21806;
var statearr_21814_21877 = state_21806__$1;
(statearr_21814_21877[(2)] = inst_21797);

(statearr_21814_21877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (13))){
var inst_21799 = (state_21806[(2)]);
var state_21806__$1 = (function (){var statearr_21815 = state_21806;
(statearr_21815[(9)] = inst_21799);

return statearr_21815;
})();
var statearr_21816_21878 = state_21806__$1;
(statearr_21816_21878[(2)] = null);

(statearr_21816_21878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (6))){
var inst_21771 = (state_21806[(7)]);
var state_21806__$1 = state_21806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21806__$1,(11),inst_21771);
} else {
if((state_val_21807 === (17))){
var inst_21792 = (state_21806[(2)]);
var state_21806__$1 = state_21806;
if(cljs.core.truth_(inst_21792)){
var statearr_21817_21879 = state_21806__$1;
(statearr_21817_21879[(1)] = (19));

} else {
var statearr_21818_21880 = state_21806__$1;
(statearr_21818_21880[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (3))){
var inst_21804 = (state_21806[(2)]);
var state_21806__$1 = state_21806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21806__$1,inst_21804);
} else {
if((state_val_21807 === (12))){
var inst_21781 = (state_21806[(10)]);
var state_21806__$1 = state_21806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21806__$1,(14),inst_21781);
} else {
if((state_val_21807 === (2))){
var state_21806__$1 = state_21806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21806__$1,(4),results);
} else {
if((state_val_21807 === (19))){
var state_21806__$1 = state_21806;
var statearr_21819_21881 = state_21806__$1;
(statearr_21819_21881[(2)] = null);

(statearr_21819_21881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (11))){
var inst_21781 = (state_21806[(2)]);
var state_21806__$1 = (function (){var statearr_21820 = state_21806;
(statearr_21820[(10)] = inst_21781);

return statearr_21820;
})();
var statearr_21821_21882 = state_21806__$1;
(statearr_21821_21882[(2)] = null);

(statearr_21821_21882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (9))){
var state_21806__$1 = state_21806;
var statearr_21822_21883 = state_21806__$1;
(statearr_21822_21883[(2)] = null);

(statearr_21822_21883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (5))){
var state_21806__$1 = state_21806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21823_21884 = state_21806__$1;
(statearr_21823_21884[(1)] = (8));

} else {
var statearr_21824_21885 = state_21806__$1;
(statearr_21824_21885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (14))){
var inst_21784 = (state_21806[(8)]);
var inst_21786 = (state_21806[(11)]);
var inst_21784__$1 = (state_21806[(2)]);
var inst_21785 = (inst_21784__$1 == null);
var inst_21786__$1 = cljs.core.not.call(null,inst_21785);
var state_21806__$1 = (function (){var statearr_21825 = state_21806;
(statearr_21825[(8)] = inst_21784__$1);

(statearr_21825[(11)] = inst_21786__$1);

return statearr_21825;
})();
if(inst_21786__$1){
var statearr_21826_21886 = state_21806__$1;
(statearr_21826_21886[(1)] = (15));

} else {
var statearr_21827_21887 = state_21806__$1;
(statearr_21827_21887[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (16))){
var inst_21786 = (state_21806[(11)]);
var state_21806__$1 = state_21806;
var statearr_21828_21888 = state_21806__$1;
(statearr_21828_21888[(2)] = inst_21786);

(statearr_21828_21888[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (10))){
var inst_21778 = (state_21806[(2)]);
var state_21806__$1 = state_21806;
var statearr_21829_21889 = state_21806__$1;
(statearr_21829_21889[(2)] = inst_21778);

(statearr_21829_21889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (18))){
var inst_21789 = (state_21806[(2)]);
var state_21806__$1 = state_21806;
var statearr_21830_21890 = state_21806__$1;
(statearr_21830_21890[(2)] = inst_21789);

(statearr_21830_21890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (8))){
var inst_21775 = cljs.core.async.close_BANG_.call(null,to);
var state_21806__$1 = state_21806;
var statearr_21831_21891 = state_21806__$1;
(statearr_21831_21891[(2)] = inst_21775);

(statearr_21831_21891[(1)] = (10));


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
});})(c__19650__auto__,jobs,results,process,async))
;
return ((function (switch__19495__auto__,c__19650__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0 = (function (){
var statearr_21832 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21832[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__);

(statearr_21832[(1)] = (1));

return statearr_21832;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1 = (function (state_21806){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_21806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e21833){if((e21833 instanceof Object)){
var ex__19499__auto__ = e21833;
var statearr_21834_21892 = state_21806;
(statearr_21834_21892[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21893 = state_21806;
state_21806 = G__21893;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__ = function(state_21806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1.call(this,state_21806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto__,jobs,results,process,async))
})();
var state__19652__auto__ = (function (){var statearr_21835 = f__19651__auto__.call(null);
(statearr_21835[(6)] = c__19650__auto__);

return statearr_21835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto__,jobs,results,process,async))
);

return c__19650__auto__;
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
var G__21895 = arguments.length;
switch (G__21895) {
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
var G__21898 = arguments.length;
switch (G__21898) {
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
var G__21901 = arguments.length;
switch (G__21901) {
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
var c__19650__auto___21950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___21950,tc,fc){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___21950,tc,fc){
return (function (state_21927){
var state_val_21928 = (state_21927[(1)]);
if((state_val_21928 === (7))){
var inst_21923 = (state_21927[(2)]);
var state_21927__$1 = state_21927;
var statearr_21929_21951 = state_21927__$1;
(statearr_21929_21951[(2)] = inst_21923);

(statearr_21929_21951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21928 === (1))){
var state_21927__$1 = state_21927;
var statearr_21930_21952 = state_21927__$1;
(statearr_21930_21952[(2)] = null);

(statearr_21930_21952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21928 === (4))){
var inst_21904 = (state_21927[(7)]);
var inst_21904__$1 = (state_21927[(2)]);
var inst_21905 = (inst_21904__$1 == null);
var state_21927__$1 = (function (){var statearr_21931 = state_21927;
(statearr_21931[(7)] = inst_21904__$1);

return statearr_21931;
})();
if(cljs.core.truth_(inst_21905)){
var statearr_21932_21953 = state_21927__$1;
(statearr_21932_21953[(1)] = (5));

} else {
var statearr_21933_21954 = state_21927__$1;
(statearr_21933_21954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21928 === (13))){
var state_21927__$1 = state_21927;
var statearr_21934_21955 = state_21927__$1;
(statearr_21934_21955[(2)] = null);

(statearr_21934_21955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21928 === (6))){
var inst_21904 = (state_21927[(7)]);
var inst_21910 = p.call(null,inst_21904);
var state_21927__$1 = state_21927;
if(cljs.core.truth_(inst_21910)){
var statearr_21935_21956 = state_21927__$1;
(statearr_21935_21956[(1)] = (9));

} else {
var statearr_21936_21957 = state_21927__$1;
(statearr_21936_21957[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21928 === (3))){
var inst_21925 = (state_21927[(2)]);
var state_21927__$1 = state_21927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21927__$1,inst_21925);
} else {
if((state_val_21928 === (12))){
var state_21927__$1 = state_21927;
var statearr_21937_21958 = state_21927__$1;
(statearr_21937_21958[(2)] = null);

(statearr_21937_21958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21928 === (2))){
var state_21927__$1 = state_21927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21927__$1,(4),ch);
} else {
if((state_val_21928 === (11))){
var inst_21904 = (state_21927[(7)]);
var inst_21914 = (state_21927[(2)]);
var state_21927__$1 = state_21927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21927__$1,(8),inst_21914,inst_21904);
} else {
if((state_val_21928 === (9))){
var state_21927__$1 = state_21927;
var statearr_21938_21959 = state_21927__$1;
(statearr_21938_21959[(2)] = tc);

(statearr_21938_21959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21928 === (5))){
var inst_21907 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21908 = cljs.core.async.close_BANG_.call(null,fc);
var state_21927__$1 = (function (){var statearr_21939 = state_21927;
(statearr_21939[(8)] = inst_21907);

return statearr_21939;
})();
var statearr_21940_21960 = state_21927__$1;
(statearr_21940_21960[(2)] = inst_21908);

(statearr_21940_21960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21928 === (14))){
var inst_21921 = (state_21927[(2)]);
var state_21927__$1 = state_21927;
var statearr_21941_21961 = state_21927__$1;
(statearr_21941_21961[(2)] = inst_21921);

(statearr_21941_21961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21928 === (10))){
var state_21927__$1 = state_21927;
var statearr_21942_21962 = state_21927__$1;
(statearr_21942_21962[(2)] = fc);

(statearr_21942_21962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21928 === (8))){
var inst_21916 = (state_21927[(2)]);
var state_21927__$1 = state_21927;
if(cljs.core.truth_(inst_21916)){
var statearr_21943_21963 = state_21927__$1;
(statearr_21943_21963[(1)] = (12));

} else {
var statearr_21944_21964 = state_21927__$1;
(statearr_21944_21964[(1)] = (13));

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
});})(c__19650__auto___21950,tc,fc))
;
return ((function (switch__19495__auto__,c__19650__auto___21950,tc,fc){
return (function() {
var cljs$core$async$state_machine__19496__auto__ = null;
var cljs$core$async$state_machine__19496__auto____0 = (function (){
var statearr_21945 = [null,null,null,null,null,null,null,null,null];
(statearr_21945[(0)] = cljs$core$async$state_machine__19496__auto__);

(statearr_21945[(1)] = (1));

return statearr_21945;
});
var cljs$core$async$state_machine__19496__auto____1 = (function (state_21927){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_21927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e21946){if((e21946 instanceof Object)){
var ex__19499__auto__ = e21946;
var statearr_21947_21965 = state_21927;
(statearr_21947_21965[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21966 = state_21927;
state_21927 = G__21966;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$state_machine__19496__auto__ = function(state_21927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19496__auto____1.call(this,state_21927);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19496__auto____0;
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19496__auto____1;
return cljs$core$async$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___21950,tc,fc))
})();
var state__19652__auto__ = (function (){var statearr_21948 = f__19651__auto__.call(null);
(statearr_21948[(6)] = c__19650__auto___21950);

return statearr_21948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___21950,tc,fc))
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
var c__19650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto__){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto__){
return (function (state_21987){
var state_val_21988 = (state_21987[(1)]);
if((state_val_21988 === (7))){
var inst_21983 = (state_21987[(2)]);
var state_21987__$1 = state_21987;
var statearr_21989_22007 = state_21987__$1;
(statearr_21989_22007[(2)] = inst_21983);

(statearr_21989_22007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21988 === (1))){
var inst_21967 = init;
var state_21987__$1 = (function (){var statearr_21990 = state_21987;
(statearr_21990[(7)] = inst_21967);

return statearr_21990;
})();
var statearr_21991_22008 = state_21987__$1;
(statearr_21991_22008[(2)] = null);

(statearr_21991_22008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21988 === (4))){
var inst_21970 = (state_21987[(8)]);
var inst_21970__$1 = (state_21987[(2)]);
var inst_21971 = (inst_21970__$1 == null);
var state_21987__$1 = (function (){var statearr_21992 = state_21987;
(statearr_21992[(8)] = inst_21970__$1);

return statearr_21992;
})();
if(cljs.core.truth_(inst_21971)){
var statearr_21993_22009 = state_21987__$1;
(statearr_21993_22009[(1)] = (5));

} else {
var statearr_21994_22010 = state_21987__$1;
(statearr_21994_22010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21988 === (6))){
var inst_21974 = (state_21987[(9)]);
var inst_21970 = (state_21987[(8)]);
var inst_21967 = (state_21987[(7)]);
var inst_21974__$1 = f.call(null,inst_21967,inst_21970);
var inst_21975 = cljs.core.reduced_QMARK_.call(null,inst_21974__$1);
var state_21987__$1 = (function (){var statearr_21995 = state_21987;
(statearr_21995[(9)] = inst_21974__$1);

return statearr_21995;
})();
if(inst_21975){
var statearr_21996_22011 = state_21987__$1;
(statearr_21996_22011[(1)] = (8));

} else {
var statearr_21997_22012 = state_21987__$1;
(statearr_21997_22012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21988 === (3))){
var inst_21985 = (state_21987[(2)]);
var state_21987__$1 = state_21987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21987__$1,inst_21985);
} else {
if((state_val_21988 === (2))){
var state_21987__$1 = state_21987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21987__$1,(4),ch);
} else {
if((state_val_21988 === (9))){
var inst_21974 = (state_21987[(9)]);
var inst_21967 = inst_21974;
var state_21987__$1 = (function (){var statearr_21998 = state_21987;
(statearr_21998[(7)] = inst_21967);

return statearr_21998;
})();
var statearr_21999_22013 = state_21987__$1;
(statearr_21999_22013[(2)] = null);

(statearr_21999_22013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21988 === (5))){
var inst_21967 = (state_21987[(7)]);
var state_21987__$1 = state_21987;
var statearr_22000_22014 = state_21987__$1;
(statearr_22000_22014[(2)] = inst_21967);

(statearr_22000_22014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21988 === (10))){
var inst_21981 = (state_21987[(2)]);
var state_21987__$1 = state_21987;
var statearr_22001_22015 = state_21987__$1;
(statearr_22001_22015[(2)] = inst_21981);

(statearr_22001_22015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21988 === (8))){
var inst_21974 = (state_21987[(9)]);
var inst_21977 = cljs.core.deref.call(null,inst_21974);
var state_21987__$1 = state_21987;
var statearr_22002_22016 = state_21987__$1;
(statearr_22002_22016[(2)] = inst_21977);

(statearr_22002_22016[(1)] = (10));


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
});})(c__19650__auto__))
;
return ((function (switch__19495__auto__,c__19650__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19496__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19496__auto____0 = (function (){
var statearr_22003 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22003[(0)] = cljs$core$async$reduce_$_state_machine__19496__auto__);

(statearr_22003[(1)] = (1));

return statearr_22003;
});
var cljs$core$async$reduce_$_state_machine__19496__auto____1 = (function (state_21987){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_21987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e22004){if((e22004 instanceof Object)){
var ex__19499__auto__ = e22004;
var statearr_22005_22017 = state_21987;
(statearr_22005_22017[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22018 = state_21987;
state_21987 = G__22018;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19496__auto__ = function(state_21987){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19496__auto____1.call(this,state_21987);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19496__auto____0;
cljs$core$async$reduce_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19496__auto____1;
return cljs$core$async$reduce_$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto__))
})();
var state__19652__auto__ = (function (){var statearr_22006 = f__19651__auto__.call(null);
(statearr_22006[(6)] = c__19650__auto__);

return statearr_22006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto__))
);

return c__19650__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__19650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto__,f__$1){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto__,f__$1){
return (function (state_22024){
var state_val_22025 = (state_22024[(1)]);
if((state_val_22025 === (1))){
var inst_22019 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22024__$1 = state_22024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22024__$1,(2),inst_22019);
} else {
if((state_val_22025 === (2))){
var inst_22021 = (state_22024[(2)]);
var inst_22022 = f__$1.call(null,inst_22021);
var state_22024__$1 = state_22024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22024__$1,inst_22022);
} else {
return null;
}
}
});})(c__19650__auto__,f__$1))
;
return ((function (switch__19495__auto__,c__19650__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__19496__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19496__auto____0 = (function (){
var statearr_22026 = [null,null,null,null,null,null,null];
(statearr_22026[(0)] = cljs$core$async$transduce_$_state_machine__19496__auto__);

(statearr_22026[(1)] = (1));

return statearr_22026;
});
var cljs$core$async$transduce_$_state_machine__19496__auto____1 = (function (state_22024){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_22024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e22027){if((e22027 instanceof Object)){
var ex__19499__auto__ = e22027;
var statearr_22028_22030 = state_22024;
(statearr_22028_22030[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22031 = state_22024;
state_22024 = G__22031;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19496__auto__ = function(state_22024){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19496__auto____1.call(this,state_22024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19496__auto____0;
cljs$core$async$transduce_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19496__auto____1;
return cljs$core$async$transduce_$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto__,f__$1))
})();
var state__19652__auto__ = (function (){var statearr_22029 = f__19651__auto__.call(null);
(statearr_22029[(6)] = c__19650__auto__);

return statearr_22029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto__,f__$1))
);

return c__19650__auto__;
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
var G__22033 = arguments.length;
switch (G__22033) {
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
var c__19650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto__){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto__){
return (function (state_22058){
var state_val_22059 = (state_22058[(1)]);
if((state_val_22059 === (7))){
var inst_22040 = (state_22058[(2)]);
var state_22058__$1 = state_22058;
var statearr_22060_22081 = state_22058__$1;
(statearr_22060_22081[(2)] = inst_22040);

(statearr_22060_22081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22059 === (1))){
var inst_22034 = cljs.core.seq.call(null,coll);
var inst_22035 = inst_22034;
var state_22058__$1 = (function (){var statearr_22061 = state_22058;
(statearr_22061[(7)] = inst_22035);

return statearr_22061;
})();
var statearr_22062_22082 = state_22058__$1;
(statearr_22062_22082[(2)] = null);

(statearr_22062_22082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22059 === (4))){
var inst_22035 = (state_22058[(7)]);
var inst_22038 = cljs.core.first.call(null,inst_22035);
var state_22058__$1 = state_22058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22058__$1,(7),ch,inst_22038);
} else {
if((state_val_22059 === (13))){
var inst_22052 = (state_22058[(2)]);
var state_22058__$1 = state_22058;
var statearr_22063_22083 = state_22058__$1;
(statearr_22063_22083[(2)] = inst_22052);

(statearr_22063_22083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22059 === (6))){
var inst_22043 = (state_22058[(2)]);
var state_22058__$1 = state_22058;
if(cljs.core.truth_(inst_22043)){
var statearr_22064_22084 = state_22058__$1;
(statearr_22064_22084[(1)] = (8));

} else {
var statearr_22065_22085 = state_22058__$1;
(statearr_22065_22085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22059 === (3))){
var inst_22056 = (state_22058[(2)]);
var state_22058__$1 = state_22058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22058__$1,inst_22056);
} else {
if((state_val_22059 === (12))){
var state_22058__$1 = state_22058;
var statearr_22066_22086 = state_22058__$1;
(statearr_22066_22086[(2)] = null);

(statearr_22066_22086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22059 === (2))){
var inst_22035 = (state_22058[(7)]);
var state_22058__$1 = state_22058;
if(cljs.core.truth_(inst_22035)){
var statearr_22067_22087 = state_22058__$1;
(statearr_22067_22087[(1)] = (4));

} else {
var statearr_22068_22088 = state_22058__$1;
(statearr_22068_22088[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22059 === (11))){
var inst_22049 = cljs.core.async.close_BANG_.call(null,ch);
var state_22058__$1 = state_22058;
var statearr_22069_22089 = state_22058__$1;
(statearr_22069_22089[(2)] = inst_22049);

(statearr_22069_22089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22059 === (9))){
var state_22058__$1 = state_22058;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22070_22090 = state_22058__$1;
(statearr_22070_22090[(1)] = (11));

} else {
var statearr_22071_22091 = state_22058__$1;
(statearr_22071_22091[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22059 === (5))){
var inst_22035 = (state_22058[(7)]);
var state_22058__$1 = state_22058;
var statearr_22072_22092 = state_22058__$1;
(statearr_22072_22092[(2)] = inst_22035);

(statearr_22072_22092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22059 === (10))){
var inst_22054 = (state_22058[(2)]);
var state_22058__$1 = state_22058;
var statearr_22073_22093 = state_22058__$1;
(statearr_22073_22093[(2)] = inst_22054);

(statearr_22073_22093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22059 === (8))){
var inst_22035 = (state_22058[(7)]);
var inst_22045 = cljs.core.next.call(null,inst_22035);
var inst_22035__$1 = inst_22045;
var state_22058__$1 = (function (){var statearr_22074 = state_22058;
(statearr_22074[(7)] = inst_22035__$1);

return statearr_22074;
})();
var statearr_22075_22094 = state_22058__$1;
(statearr_22075_22094[(2)] = null);

(statearr_22075_22094[(1)] = (2));


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
});})(c__19650__auto__))
;
return ((function (switch__19495__auto__,c__19650__auto__){
return (function() {
var cljs$core$async$state_machine__19496__auto__ = null;
var cljs$core$async$state_machine__19496__auto____0 = (function (){
var statearr_22076 = [null,null,null,null,null,null,null,null];
(statearr_22076[(0)] = cljs$core$async$state_machine__19496__auto__);

(statearr_22076[(1)] = (1));

return statearr_22076;
});
var cljs$core$async$state_machine__19496__auto____1 = (function (state_22058){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_22058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e22077){if((e22077 instanceof Object)){
var ex__19499__auto__ = e22077;
var statearr_22078_22095 = state_22058;
(statearr_22078_22095[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22096 = state_22058;
state_22058 = G__22096;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$state_machine__19496__auto__ = function(state_22058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19496__auto____1.call(this,state_22058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19496__auto____0;
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19496__auto____1;
return cljs$core$async$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto__))
})();
var state__19652__auto__ = (function (){var statearr_22079 = f__19651__auto__.call(null);
(statearr_22079[(6)] = c__19650__auto__);

return statearr_22079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto__))
);

return c__19650__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22097 = (function (ch,cs,meta22098){
this.ch = ch;
this.cs = cs;
this.meta22098 = meta22098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22099,meta22098__$1){
var self__ = this;
var _22099__$1 = this;
return (new cljs.core.async.t_cljs$core$async22097(self__.ch,self__.cs,meta22098__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22099){
var self__ = this;
var _22099__$1 = this;
return self__.meta22098;
});})(cs))
;

cljs.core.async.t_cljs$core$async22097.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22097.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22097.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22097.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22097.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22097.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22097.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22098","meta22098",-166178011,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22097";

cljs.core.async.t_cljs$core$async22097.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22097");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22097.
 */
cljs.core.async.__GT_t_cljs$core$async22097 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22097(ch__$1,cs__$1,meta22098){
return (new cljs.core.async.t_cljs$core$async22097(ch__$1,cs__$1,meta22098));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22097(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19650__auto___22319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___22319,cs,m,dchan,dctr,done){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___22319,cs,m,dchan,dctr,done){
return (function (state_22234){
var state_val_22235 = (state_22234[(1)]);
if((state_val_22235 === (7))){
var inst_22230 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22236_22320 = state_22234__$1;
(statearr_22236_22320[(2)] = inst_22230);

(statearr_22236_22320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (20))){
var inst_22133 = (state_22234[(7)]);
var inst_22145 = cljs.core.first.call(null,inst_22133);
var inst_22146 = cljs.core.nth.call(null,inst_22145,(0),null);
var inst_22147 = cljs.core.nth.call(null,inst_22145,(1),null);
var state_22234__$1 = (function (){var statearr_22237 = state_22234;
(statearr_22237[(8)] = inst_22146);

return statearr_22237;
})();
if(cljs.core.truth_(inst_22147)){
var statearr_22238_22321 = state_22234__$1;
(statearr_22238_22321[(1)] = (22));

} else {
var statearr_22239_22322 = state_22234__$1;
(statearr_22239_22322[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (27))){
var inst_22175 = (state_22234[(9)]);
var inst_22182 = (state_22234[(10)]);
var inst_22102 = (state_22234[(11)]);
var inst_22177 = (state_22234[(12)]);
var inst_22182__$1 = cljs.core._nth.call(null,inst_22175,inst_22177);
var inst_22183 = cljs.core.async.put_BANG_.call(null,inst_22182__$1,inst_22102,done);
var state_22234__$1 = (function (){var statearr_22240 = state_22234;
(statearr_22240[(10)] = inst_22182__$1);

return statearr_22240;
})();
if(cljs.core.truth_(inst_22183)){
var statearr_22241_22323 = state_22234__$1;
(statearr_22241_22323[(1)] = (30));

} else {
var statearr_22242_22324 = state_22234__$1;
(statearr_22242_22324[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (1))){
var state_22234__$1 = state_22234;
var statearr_22243_22325 = state_22234__$1;
(statearr_22243_22325[(2)] = null);

(statearr_22243_22325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (24))){
var inst_22133 = (state_22234[(7)]);
var inst_22152 = (state_22234[(2)]);
var inst_22153 = cljs.core.next.call(null,inst_22133);
var inst_22111 = inst_22153;
var inst_22112 = null;
var inst_22113 = (0);
var inst_22114 = (0);
var state_22234__$1 = (function (){var statearr_22244 = state_22234;
(statearr_22244[(13)] = inst_22112);

(statearr_22244[(14)] = inst_22111);

(statearr_22244[(15)] = inst_22152);

(statearr_22244[(16)] = inst_22113);

(statearr_22244[(17)] = inst_22114);

return statearr_22244;
})();
var statearr_22245_22326 = state_22234__$1;
(statearr_22245_22326[(2)] = null);

(statearr_22245_22326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (39))){
var state_22234__$1 = state_22234;
var statearr_22249_22327 = state_22234__$1;
(statearr_22249_22327[(2)] = null);

(statearr_22249_22327[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (4))){
var inst_22102 = (state_22234[(11)]);
var inst_22102__$1 = (state_22234[(2)]);
var inst_22103 = (inst_22102__$1 == null);
var state_22234__$1 = (function (){var statearr_22250 = state_22234;
(statearr_22250[(11)] = inst_22102__$1);

return statearr_22250;
})();
if(cljs.core.truth_(inst_22103)){
var statearr_22251_22328 = state_22234__$1;
(statearr_22251_22328[(1)] = (5));

} else {
var statearr_22252_22329 = state_22234__$1;
(statearr_22252_22329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (15))){
var inst_22112 = (state_22234[(13)]);
var inst_22111 = (state_22234[(14)]);
var inst_22113 = (state_22234[(16)]);
var inst_22114 = (state_22234[(17)]);
var inst_22129 = (state_22234[(2)]);
var inst_22130 = (inst_22114 + (1));
var tmp22246 = inst_22112;
var tmp22247 = inst_22111;
var tmp22248 = inst_22113;
var inst_22111__$1 = tmp22247;
var inst_22112__$1 = tmp22246;
var inst_22113__$1 = tmp22248;
var inst_22114__$1 = inst_22130;
var state_22234__$1 = (function (){var statearr_22253 = state_22234;
(statearr_22253[(13)] = inst_22112__$1);

(statearr_22253[(14)] = inst_22111__$1);

(statearr_22253[(18)] = inst_22129);

(statearr_22253[(16)] = inst_22113__$1);

(statearr_22253[(17)] = inst_22114__$1);

return statearr_22253;
})();
var statearr_22254_22330 = state_22234__$1;
(statearr_22254_22330[(2)] = null);

(statearr_22254_22330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (21))){
var inst_22156 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22258_22331 = state_22234__$1;
(statearr_22258_22331[(2)] = inst_22156);

(statearr_22258_22331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (31))){
var inst_22182 = (state_22234[(10)]);
var inst_22186 = done.call(null,null);
var inst_22187 = cljs.core.async.untap_STAR_.call(null,m,inst_22182);
var state_22234__$1 = (function (){var statearr_22259 = state_22234;
(statearr_22259[(19)] = inst_22186);

return statearr_22259;
})();
var statearr_22260_22332 = state_22234__$1;
(statearr_22260_22332[(2)] = inst_22187);

(statearr_22260_22332[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (32))){
var inst_22175 = (state_22234[(9)]);
var inst_22176 = (state_22234[(20)]);
var inst_22174 = (state_22234[(21)]);
var inst_22177 = (state_22234[(12)]);
var inst_22189 = (state_22234[(2)]);
var inst_22190 = (inst_22177 + (1));
var tmp22255 = inst_22175;
var tmp22256 = inst_22176;
var tmp22257 = inst_22174;
var inst_22174__$1 = tmp22257;
var inst_22175__$1 = tmp22255;
var inst_22176__$1 = tmp22256;
var inst_22177__$1 = inst_22190;
var state_22234__$1 = (function (){var statearr_22261 = state_22234;
(statearr_22261[(9)] = inst_22175__$1);

(statearr_22261[(22)] = inst_22189);

(statearr_22261[(20)] = inst_22176__$1);

(statearr_22261[(21)] = inst_22174__$1);

(statearr_22261[(12)] = inst_22177__$1);

return statearr_22261;
})();
var statearr_22262_22333 = state_22234__$1;
(statearr_22262_22333[(2)] = null);

(statearr_22262_22333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (40))){
var inst_22202 = (state_22234[(23)]);
var inst_22206 = done.call(null,null);
var inst_22207 = cljs.core.async.untap_STAR_.call(null,m,inst_22202);
var state_22234__$1 = (function (){var statearr_22263 = state_22234;
(statearr_22263[(24)] = inst_22206);

return statearr_22263;
})();
var statearr_22264_22334 = state_22234__$1;
(statearr_22264_22334[(2)] = inst_22207);

(statearr_22264_22334[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (33))){
var inst_22193 = (state_22234[(25)]);
var inst_22195 = cljs.core.chunked_seq_QMARK_.call(null,inst_22193);
var state_22234__$1 = state_22234;
if(inst_22195){
var statearr_22265_22335 = state_22234__$1;
(statearr_22265_22335[(1)] = (36));

} else {
var statearr_22266_22336 = state_22234__$1;
(statearr_22266_22336[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (13))){
var inst_22123 = (state_22234[(26)]);
var inst_22126 = cljs.core.async.close_BANG_.call(null,inst_22123);
var state_22234__$1 = state_22234;
var statearr_22267_22337 = state_22234__$1;
(statearr_22267_22337[(2)] = inst_22126);

(statearr_22267_22337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (22))){
var inst_22146 = (state_22234[(8)]);
var inst_22149 = cljs.core.async.close_BANG_.call(null,inst_22146);
var state_22234__$1 = state_22234;
var statearr_22268_22338 = state_22234__$1;
(statearr_22268_22338[(2)] = inst_22149);

(statearr_22268_22338[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (36))){
var inst_22193 = (state_22234[(25)]);
var inst_22197 = cljs.core.chunk_first.call(null,inst_22193);
var inst_22198 = cljs.core.chunk_rest.call(null,inst_22193);
var inst_22199 = cljs.core.count.call(null,inst_22197);
var inst_22174 = inst_22198;
var inst_22175 = inst_22197;
var inst_22176 = inst_22199;
var inst_22177 = (0);
var state_22234__$1 = (function (){var statearr_22269 = state_22234;
(statearr_22269[(9)] = inst_22175);

(statearr_22269[(20)] = inst_22176);

(statearr_22269[(21)] = inst_22174);

(statearr_22269[(12)] = inst_22177);

return statearr_22269;
})();
var statearr_22270_22339 = state_22234__$1;
(statearr_22270_22339[(2)] = null);

(statearr_22270_22339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (41))){
var inst_22193 = (state_22234[(25)]);
var inst_22209 = (state_22234[(2)]);
var inst_22210 = cljs.core.next.call(null,inst_22193);
var inst_22174 = inst_22210;
var inst_22175 = null;
var inst_22176 = (0);
var inst_22177 = (0);
var state_22234__$1 = (function (){var statearr_22271 = state_22234;
(statearr_22271[(9)] = inst_22175);

(statearr_22271[(27)] = inst_22209);

(statearr_22271[(20)] = inst_22176);

(statearr_22271[(21)] = inst_22174);

(statearr_22271[(12)] = inst_22177);

return statearr_22271;
})();
var statearr_22272_22340 = state_22234__$1;
(statearr_22272_22340[(2)] = null);

(statearr_22272_22340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (43))){
var state_22234__$1 = state_22234;
var statearr_22273_22341 = state_22234__$1;
(statearr_22273_22341[(2)] = null);

(statearr_22273_22341[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (29))){
var inst_22218 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22274_22342 = state_22234__$1;
(statearr_22274_22342[(2)] = inst_22218);

(statearr_22274_22342[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (44))){
var inst_22227 = (state_22234[(2)]);
var state_22234__$1 = (function (){var statearr_22275 = state_22234;
(statearr_22275[(28)] = inst_22227);

return statearr_22275;
})();
var statearr_22276_22343 = state_22234__$1;
(statearr_22276_22343[(2)] = null);

(statearr_22276_22343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (6))){
var inst_22166 = (state_22234[(29)]);
var inst_22165 = cljs.core.deref.call(null,cs);
var inst_22166__$1 = cljs.core.keys.call(null,inst_22165);
var inst_22167 = cljs.core.count.call(null,inst_22166__$1);
var inst_22168 = cljs.core.reset_BANG_.call(null,dctr,inst_22167);
var inst_22173 = cljs.core.seq.call(null,inst_22166__$1);
var inst_22174 = inst_22173;
var inst_22175 = null;
var inst_22176 = (0);
var inst_22177 = (0);
var state_22234__$1 = (function (){var statearr_22277 = state_22234;
(statearr_22277[(9)] = inst_22175);

(statearr_22277[(20)] = inst_22176);

(statearr_22277[(30)] = inst_22168);

(statearr_22277[(21)] = inst_22174);

(statearr_22277[(29)] = inst_22166__$1);

(statearr_22277[(12)] = inst_22177);

return statearr_22277;
})();
var statearr_22278_22344 = state_22234__$1;
(statearr_22278_22344[(2)] = null);

(statearr_22278_22344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (28))){
var inst_22193 = (state_22234[(25)]);
var inst_22174 = (state_22234[(21)]);
var inst_22193__$1 = cljs.core.seq.call(null,inst_22174);
var state_22234__$1 = (function (){var statearr_22279 = state_22234;
(statearr_22279[(25)] = inst_22193__$1);

return statearr_22279;
})();
if(inst_22193__$1){
var statearr_22280_22345 = state_22234__$1;
(statearr_22280_22345[(1)] = (33));

} else {
var statearr_22281_22346 = state_22234__$1;
(statearr_22281_22346[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (25))){
var inst_22176 = (state_22234[(20)]);
var inst_22177 = (state_22234[(12)]);
var inst_22179 = (inst_22177 < inst_22176);
var inst_22180 = inst_22179;
var state_22234__$1 = state_22234;
if(cljs.core.truth_(inst_22180)){
var statearr_22282_22347 = state_22234__$1;
(statearr_22282_22347[(1)] = (27));

} else {
var statearr_22283_22348 = state_22234__$1;
(statearr_22283_22348[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (34))){
var state_22234__$1 = state_22234;
var statearr_22284_22349 = state_22234__$1;
(statearr_22284_22349[(2)] = null);

(statearr_22284_22349[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (17))){
var state_22234__$1 = state_22234;
var statearr_22285_22350 = state_22234__$1;
(statearr_22285_22350[(2)] = null);

(statearr_22285_22350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (3))){
var inst_22232 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22234__$1,inst_22232);
} else {
if((state_val_22235 === (12))){
var inst_22161 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22286_22351 = state_22234__$1;
(statearr_22286_22351[(2)] = inst_22161);

(statearr_22286_22351[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (2))){
var state_22234__$1 = state_22234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22234__$1,(4),ch);
} else {
if((state_val_22235 === (23))){
var state_22234__$1 = state_22234;
var statearr_22287_22352 = state_22234__$1;
(statearr_22287_22352[(2)] = null);

(statearr_22287_22352[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (35))){
var inst_22216 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22288_22353 = state_22234__$1;
(statearr_22288_22353[(2)] = inst_22216);

(statearr_22288_22353[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (19))){
var inst_22133 = (state_22234[(7)]);
var inst_22137 = cljs.core.chunk_first.call(null,inst_22133);
var inst_22138 = cljs.core.chunk_rest.call(null,inst_22133);
var inst_22139 = cljs.core.count.call(null,inst_22137);
var inst_22111 = inst_22138;
var inst_22112 = inst_22137;
var inst_22113 = inst_22139;
var inst_22114 = (0);
var state_22234__$1 = (function (){var statearr_22289 = state_22234;
(statearr_22289[(13)] = inst_22112);

(statearr_22289[(14)] = inst_22111);

(statearr_22289[(16)] = inst_22113);

(statearr_22289[(17)] = inst_22114);

return statearr_22289;
})();
var statearr_22290_22354 = state_22234__$1;
(statearr_22290_22354[(2)] = null);

(statearr_22290_22354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (11))){
var inst_22111 = (state_22234[(14)]);
var inst_22133 = (state_22234[(7)]);
var inst_22133__$1 = cljs.core.seq.call(null,inst_22111);
var state_22234__$1 = (function (){var statearr_22291 = state_22234;
(statearr_22291[(7)] = inst_22133__$1);

return statearr_22291;
})();
if(inst_22133__$1){
var statearr_22292_22355 = state_22234__$1;
(statearr_22292_22355[(1)] = (16));

} else {
var statearr_22293_22356 = state_22234__$1;
(statearr_22293_22356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (9))){
var inst_22163 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22294_22357 = state_22234__$1;
(statearr_22294_22357[(2)] = inst_22163);

(statearr_22294_22357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (5))){
var inst_22109 = cljs.core.deref.call(null,cs);
var inst_22110 = cljs.core.seq.call(null,inst_22109);
var inst_22111 = inst_22110;
var inst_22112 = null;
var inst_22113 = (0);
var inst_22114 = (0);
var state_22234__$1 = (function (){var statearr_22295 = state_22234;
(statearr_22295[(13)] = inst_22112);

(statearr_22295[(14)] = inst_22111);

(statearr_22295[(16)] = inst_22113);

(statearr_22295[(17)] = inst_22114);

return statearr_22295;
})();
var statearr_22296_22358 = state_22234__$1;
(statearr_22296_22358[(2)] = null);

(statearr_22296_22358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (14))){
var state_22234__$1 = state_22234;
var statearr_22297_22359 = state_22234__$1;
(statearr_22297_22359[(2)] = null);

(statearr_22297_22359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (45))){
var inst_22224 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22298_22360 = state_22234__$1;
(statearr_22298_22360[(2)] = inst_22224);

(statearr_22298_22360[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (26))){
var inst_22166 = (state_22234[(29)]);
var inst_22220 = (state_22234[(2)]);
var inst_22221 = cljs.core.seq.call(null,inst_22166);
var state_22234__$1 = (function (){var statearr_22299 = state_22234;
(statearr_22299[(31)] = inst_22220);

return statearr_22299;
})();
if(inst_22221){
var statearr_22300_22361 = state_22234__$1;
(statearr_22300_22361[(1)] = (42));

} else {
var statearr_22301_22362 = state_22234__$1;
(statearr_22301_22362[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (16))){
var inst_22133 = (state_22234[(7)]);
var inst_22135 = cljs.core.chunked_seq_QMARK_.call(null,inst_22133);
var state_22234__$1 = state_22234;
if(inst_22135){
var statearr_22302_22363 = state_22234__$1;
(statearr_22302_22363[(1)] = (19));

} else {
var statearr_22303_22364 = state_22234__$1;
(statearr_22303_22364[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (38))){
var inst_22213 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22304_22365 = state_22234__$1;
(statearr_22304_22365[(2)] = inst_22213);

(statearr_22304_22365[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (30))){
var state_22234__$1 = state_22234;
var statearr_22305_22366 = state_22234__$1;
(statearr_22305_22366[(2)] = null);

(statearr_22305_22366[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (10))){
var inst_22112 = (state_22234[(13)]);
var inst_22114 = (state_22234[(17)]);
var inst_22122 = cljs.core._nth.call(null,inst_22112,inst_22114);
var inst_22123 = cljs.core.nth.call(null,inst_22122,(0),null);
var inst_22124 = cljs.core.nth.call(null,inst_22122,(1),null);
var state_22234__$1 = (function (){var statearr_22306 = state_22234;
(statearr_22306[(26)] = inst_22123);

return statearr_22306;
})();
if(cljs.core.truth_(inst_22124)){
var statearr_22307_22367 = state_22234__$1;
(statearr_22307_22367[(1)] = (13));

} else {
var statearr_22308_22368 = state_22234__$1;
(statearr_22308_22368[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (18))){
var inst_22159 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22309_22369 = state_22234__$1;
(statearr_22309_22369[(2)] = inst_22159);

(statearr_22309_22369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (42))){
var state_22234__$1 = state_22234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22234__$1,(45),dchan);
} else {
if((state_val_22235 === (37))){
var inst_22193 = (state_22234[(25)]);
var inst_22202 = (state_22234[(23)]);
var inst_22102 = (state_22234[(11)]);
var inst_22202__$1 = cljs.core.first.call(null,inst_22193);
var inst_22203 = cljs.core.async.put_BANG_.call(null,inst_22202__$1,inst_22102,done);
var state_22234__$1 = (function (){var statearr_22310 = state_22234;
(statearr_22310[(23)] = inst_22202__$1);

return statearr_22310;
})();
if(cljs.core.truth_(inst_22203)){
var statearr_22311_22370 = state_22234__$1;
(statearr_22311_22370[(1)] = (39));

} else {
var statearr_22312_22371 = state_22234__$1;
(statearr_22312_22371[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (8))){
var inst_22113 = (state_22234[(16)]);
var inst_22114 = (state_22234[(17)]);
var inst_22116 = (inst_22114 < inst_22113);
var inst_22117 = inst_22116;
var state_22234__$1 = state_22234;
if(cljs.core.truth_(inst_22117)){
var statearr_22313_22372 = state_22234__$1;
(statearr_22313_22372[(1)] = (10));

} else {
var statearr_22314_22373 = state_22234__$1;
(statearr_22314_22373[(1)] = (11));

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
});})(c__19650__auto___22319,cs,m,dchan,dctr,done))
;
return ((function (switch__19495__auto__,c__19650__auto___22319,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19496__auto__ = null;
var cljs$core$async$mult_$_state_machine__19496__auto____0 = (function (){
var statearr_22315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22315[(0)] = cljs$core$async$mult_$_state_machine__19496__auto__);

(statearr_22315[(1)] = (1));

return statearr_22315;
});
var cljs$core$async$mult_$_state_machine__19496__auto____1 = (function (state_22234){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_22234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e22316){if((e22316 instanceof Object)){
var ex__19499__auto__ = e22316;
var statearr_22317_22374 = state_22234;
(statearr_22317_22374[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22375 = state_22234;
state_22234 = G__22375;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19496__auto__ = function(state_22234){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19496__auto____1.call(this,state_22234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19496__auto____0;
cljs$core$async$mult_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19496__auto____1;
return cljs$core$async$mult_$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___22319,cs,m,dchan,dctr,done))
})();
var state__19652__auto__ = (function (){var statearr_22318 = f__19651__auto__.call(null);
(statearr_22318[(6)] = c__19650__auto___22319);

return statearr_22318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___22319,cs,m,dchan,dctr,done))
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
var G__22377 = arguments.length;
switch (G__22377) {
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
var len__4497__auto___22389 = arguments.length;
var i__4498__auto___22390 = (0);
while(true){
if((i__4498__auto___22390 < len__4497__auto___22389)){
args__4500__auto__.push((arguments[i__4498__auto___22390]));

var G__22391 = (i__4498__auto___22390 + (1));
i__4498__auto___22390 = G__22391;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22383){
var map__22384 = p__22383;
var map__22384__$1 = ((((!((map__22384 == null)))?(((((map__22384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22384):map__22384);
var opts = map__22384__$1;
var statearr_22386_22392 = state;
(statearr_22386_22392[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22384,map__22384__$1,opts){
return (function (val){
var statearr_22387_22393 = state;
(statearr_22387_22393[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22384,map__22384__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22388_22394 = state;
(statearr_22388_22394[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22379){
var G__22380 = cljs.core.first.call(null,seq22379);
var seq22379__$1 = cljs.core.next.call(null,seq22379);
var G__22381 = cljs.core.first.call(null,seq22379__$1);
var seq22379__$2 = cljs.core.next.call(null,seq22379__$1);
var G__22382 = cljs.core.first.call(null,seq22379__$2);
var seq22379__$3 = cljs.core.next.call(null,seq22379__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22380,G__22381,G__22382,seq22379__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22395 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22396){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22396 = meta22396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22397,meta22396__$1){
var self__ = this;
var _22397__$1 = this;
return (new cljs.core.async.t_cljs$core$async22395(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22396__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22397){
var self__ = this;
var _22397__$1 = this;
return self__.meta22396;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22395.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22395.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22395.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22395.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22395.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22395.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22395.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22395.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22396","meta22396",-1120502885,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22395";

cljs.core.async.t_cljs$core$async22395.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22395");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22395.
 */
cljs.core.async.__GT_t_cljs$core$async22395 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22395(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22396){
return (new cljs.core.async.t_cljs$core$async22395(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22396));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22395(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19650__auto___22559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___22559,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___22559,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22499){
var state_val_22500 = (state_22499[(1)]);
if((state_val_22500 === (7))){
var inst_22414 = (state_22499[(2)]);
var state_22499__$1 = state_22499;
var statearr_22501_22560 = state_22499__$1;
(statearr_22501_22560[(2)] = inst_22414);

(statearr_22501_22560[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (20))){
var inst_22426 = (state_22499[(7)]);
var state_22499__$1 = state_22499;
var statearr_22502_22561 = state_22499__$1;
(statearr_22502_22561[(2)] = inst_22426);

(statearr_22502_22561[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (27))){
var state_22499__$1 = state_22499;
var statearr_22503_22562 = state_22499__$1;
(statearr_22503_22562[(2)] = null);

(statearr_22503_22562[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (1))){
var inst_22401 = (state_22499[(8)]);
var inst_22401__$1 = calc_state.call(null);
var inst_22403 = (inst_22401__$1 == null);
var inst_22404 = cljs.core.not.call(null,inst_22403);
var state_22499__$1 = (function (){var statearr_22504 = state_22499;
(statearr_22504[(8)] = inst_22401__$1);

return statearr_22504;
})();
if(inst_22404){
var statearr_22505_22563 = state_22499__$1;
(statearr_22505_22563[(1)] = (2));

} else {
var statearr_22506_22564 = state_22499__$1;
(statearr_22506_22564[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (24))){
var inst_22450 = (state_22499[(9)]);
var inst_22459 = (state_22499[(10)]);
var inst_22473 = (state_22499[(11)]);
var inst_22473__$1 = inst_22450.call(null,inst_22459);
var state_22499__$1 = (function (){var statearr_22507 = state_22499;
(statearr_22507[(11)] = inst_22473__$1);

return statearr_22507;
})();
if(cljs.core.truth_(inst_22473__$1)){
var statearr_22508_22565 = state_22499__$1;
(statearr_22508_22565[(1)] = (29));

} else {
var statearr_22509_22566 = state_22499__$1;
(statearr_22509_22566[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (4))){
var inst_22417 = (state_22499[(2)]);
var state_22499__$1 = state_22499;
if(cljs.core.truth_(inst_22417)){
var statearr_22510_22567 = state_22499__$1;
(statearr_22510_22567[(1)] = (8));

} else {
var statearr_22511_22568 = state_22499__$1;
(statearr_22511_22568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (15))){
var inst_22444 = (state_22499[(2)]);
var state_22499__$1 = state_22499;
if(cljs.core.truth_(inst_22444)){
var statearr_22512_22569 = state_22499__$1;
(statearr_22512_22569[(1)] = (19));

} else {
var statearr_22513_22570 = state_22499__$1;
(statearr_22513_22570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (21))){
var inst_22449 = (state_22499[(12)]);
var inst_22449__$1 = (state_22499[(2)]);
var inst_22450 = cljs.core.get.call(null,inst_22449__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22451 = cljs.core.get.call(null,inst_22449__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22452 = cljs.core.get.call(null,inst_22449__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22499__$1 = (function (){var statearr_22514 = state_22499;
(statearr_22514[(9)] = inst_22450);

(statearr_22514[(12)] = inst_22449__$1);

(statearr_22514[(13)] = inst_22451);

return statearr_22514;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22499__$1,(22),inst_22452);
} else {
if((state_val_22500 === (31))){
var inst_22481 = (state_22499[(2)]);
var state_22499__$1 = state_22499;
if(cljs.core.truth_(inst_22481)){
var statearr_22515_22571 = state_22499__$1;
(statearr_22515_22571[(1)] = (32));

} else {
var statearr_22516_22572 = state_22499__$1;
(statearr_22516_22572[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (32))){
var inst_22458 = (state_22499[(14)]);
var state_22499__$1 = state_22499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22499__$1,(35),out,inst_22458);
} else {
if((state_val_22500 === (33))){
var inst_22449 = (state_22499[(12)]);
var inst_22426 = inst_22449;
var state_22499__$1 = (function (){var statearr_22517 = state_22499;
(statearr_22517[(7)] = inst_22426);

return statearr_22517;
})();
var statearr_22518_22573 = state_22499__$1;
(statearr_22518_22573[(2)] = null);

(statearr_22518_22573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (13))){
var inst_22426 = (state_22499[(7)]);
var inst_22433 = inst_22426.cljs$lang$protocol_mask$partition0$;
var inst_22434 = (inst_22433 & (64));
var inst_22435 = inst_22426.cljs$core$ISeq$;
var inst_22436 = (cljs.core.PROTOCOL_SENTINEL === inst_22435);
var inst_22437 = ((inst_22434) || (inst_22436));
var state_22499__$1 = state_22499;
if(cljs.core.truth_(inst_22437)){
var statearr_22519_22574 = state_22499__$1;
(statearr_22519_22574[(1)] = (16));

} else {
var statearr_22520_22575 = state_22499__$1;
(statearr_22520_22575[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (22))){
var inst_22459 = (state_22499[(10)]);
var inst_22458 = (state_22499[(14)]);
var inst_22457 = (state_22499[(2)]);
var inst_22458__$1 = cljs.core.nth.call(null,inst_22457,(0),null);
var inst_22459__$1 = cljs.core.nth.call(null,inst_22457,(1),null);
var inst_22460 = (inst_22458__$1 == null);
var inst_22461 = cljs.core._EQ_.call(null,inst_22459__$1,change);
var inst_22462 = ((inst_22460) || (inst_22461));
var state_22499__$1 = (function (){var statearr_22521 = state_22499;
(statearr_22521[(10)] = inst_22459__$1);

(statearr_22521[(14)] = inst_22458__$1);

return statearr_22521;
})();
if(cljs.core.truth_(inst_22462)){
var statearr_22522_22576 = state_22499__$1;
(statearr_22522_22576[(1)] = (23));

} else {
var statearr_22523_22577 = state_22499__$1;
(statearr_22523_22577[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (36))){
var inst_22449 = (state_22499[(12)]);
var inst_22426 = inst_22449;
var state_22499__$1 = (function (){var statearr_22524 = state_22499;
(statearr_22524[(7)] = inst_22426);

return statearr_22524;
})();
var statearr_22525_22578 = state_22499__$1;
(statearr_22525_22578[(2)] = null);

(statearr_22525_22578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (29))){
var inst_22473 = (state_22499[(11)]);
var state_22499__$1 = state_22499;
var statearr_22526_22579 = state_22499__$1;
(statearr_22526_22579[(2)] = inst_22473);

(statearr_22526_22579[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (6))){
var state_22499__$1 = state_22499;
var statearr_22527_22580 = state_22499__$1;
(statearr_22527_22580[(2)] = false);

(statearr_22527_22580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (28))){
var inst_22469 = (state_22499[(2)]);
var inst_22470 = calc_state.call(null);
var inst_22426 = inst_22470;
var state_22499__$1 = (function (){var statearr_22528 = state_22499;
(statearr_22528[(15)] = inst_22469);

(statearr_22528[(7)] = inst_22426);

return statearr_22528;
})();
var statearr_22529_22581 = state_22499__$1;
(statearr_22529_22581[(2)] = null);

(statearr_22529_22581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (25))){
var inst_22495 = (state_22499[(2)]);
var state_22499__$1 = state_22499;
var statearr_22530_22582 = state_22499__$1;
(statearr_22530_22582[(2)] = inst_22495);

(statearr_22530_22582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (34))){
var inst_22493 = (state_22499[(2)]);
var state_22499__$1 = state_22499;
var statearr_22531_22583 = state_22499__$1;
(statearr_22531_22583[(2)] = inst_22493);

(statearr_22531_22583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (17))){
var state_22499__$1 = state_22499;
var statearr_22532_22584 = state_22499__$1;
(statearr_22532_22584[(2)] = false);

(statearr_22532_22584[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (3))){
var state_22499__$1 = state_22499;
var statearr_22533_22585 = state_22499__$1;
(statearr_22533_22585[(2)] = false);

(statearr_22533_22585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (12))){
var inst_22497 = (state_22499[(2)]);
var state_22499__$1 = state_22499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22499__$1,inst_22497);
} else {
if((state_val_22500 === (2))){
var inst_22401 = (state_22499[(8)]);
var inst_22406 = inst_22401.cljs$lang$protocol_mask$partition0$;
var inst_22407 = (inst_22406 & (64));
var inst_22408 = inst_22401.cljs$core$ISeq$;
var inst_22409 = (cljs.core.PROTOCOL_SENTINEL === inst_22408);
var inst_22410 = ((inst_22407) || (inst_22409));
var state_22499__$1 = state_22499;
if(cljs.core.truth_(inst_22410)){
var statearr_22534_22586 = state_22499__$1;
(statearr_22534_22586[(1)] = (5));

} else {
var statearr_22535_22587 = state_22499__$1;
(statearr_22535_22587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (23))){
var inst_22458 = (state_22499[(14)]);
var inst_22464 = (inst_22458 == null);
var state_22499__$1 = state_22499;
if(cljs.core.truth_(inst_22464)){
var statearr_22536_22588 = state_22499__$1;
(statearr_22536_22588[(1)] = (26));

} else {
var statearr_22537_22589 = state_22499__$1;
(statearr_22537_22589[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (35))){
var inst_22484 = (state_22499[(2)]);
var state_22499__$1 = state_22499;
if(cljs.core.truth_(inst_22484)){
var statearr_22538_22590 = state_22499__$1;
(statearr_22538_22590[(1)] = (36));

} else {
var statearr_22539_22591 = state_22499__$1;
(statearr_22539_22591[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (19))){
var inst_22426 = (state_22499[(7)]);
var inst_22446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22426);
var state_22499__$1 = state_22499;
var statearr_22540_22592 = state_22499__$1;
(statearr_22540_22592[(2)] = inst_22446);

(statearr_22540_22592[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (11))){
var inst_22426 = (state_22499[(7)]);
var inst_22430 = (inst_22426 == null);
var inst_22431 = cljs.core.not.call(null,inst_22430);
var state_22499__$1 = state_22499;
if(inst_22431){
var statearr_22541_22593 = state_22499__$1;
(statearr_22541_22593[(1)] = (13));

} else {
var statearr_22542_22594 = state_22499__$1;
(statearr_22542_22594[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (9))){
var inst_22401 = (state_22499[(8)]);
var state_22499__$1 = state_22499;
var statearr_22543_22595 = state_22499__$1;
(statearr_22543_22595[(2)] = inst_22401);

(statearr_22543_22595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (5))){
var state_22499__$1 = state_22499;
var statearr_22544_22596 = state_22499__$1;
(statearr_22544_22596[(2)] = true);

(statearr_22544_22596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (14))){
var state_22499__$1 = state_22499;
var statearr_22545_22597 = state_22499__$1;
(statearr_22545_22597[(2)] = false);

(statearr_22545_22597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (26))){
var inst_22459 = (state_22499[(10)]);
var inst_22466 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22459);
var state_22499__$1 = state_22499;
var statearr_22546_22598 = state_22499__$1;
(statearr_22546_22598[(2)] = inst_22466);

(statearr_22546_22598[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (16))){
var state_22499__$1 = state_22499;
var statearr_22547_22599 = state_22499__$1;
(statearr_22547_22599[(2)] = true);

(statearr_22547_22599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (38))){
var inst_22489 = (state_22499[(2)]);
var state_22499__$1 = state_22499;
var statearr_22548_22600 = state_22499__$1;
(statearr_22548_22600[(2)] = inst_22489);

(statearr_22548_22600[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (30))){
var inst_22450 = (state_22499[(9)]);
var inst_22459 = (state_22499[(10)]);
var inst_22451 = (state_22499[(13)]);
var inst_22476 = cljs.core.empty_QMARK_.call(null,inst_22450);
var inst_22477 = inst_22451.call(null,inst_22459);
var inst_22478 = cljs.core.not.call(null,inst_22477);
var inst_22479 = ((inst_22476) && (inst_22478));
var state_22499__$1 = state_22499;
var statearr_22549_22601 = state_22499__$1;
(statearr_22549_22601[(2)] = inst_22479);

(statearr_22549_22601[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (10))){
var inst_22401 = (state_22499[(8)]);
var inst_22422 = (state_22499[(2)]);
var inst_22423 = cljs.core.get.call(null,inst_22422,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22424 = cljs.core.get.call(null,inst_22422,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22425 = cljs.core.get.call(null,inst_22422,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22426 = inst_22401;
var state_22499__$1 = (function (){var statearr_22550 = state_22499;
(statearr_22550[(16)] = inst_22423);

(statearr_22550[(17)] = inst_22424);

(statearr_22550[(18)] = inst_22425);

(statearr_22550[(7)] = inst_22426);

return statearr_22550;
})();
var statearr_22551_22602 = state_22499__$1;
(statearr_22551_22602[(2)] = null);

(statearr_22551_22602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (18))){
var inst_22441 = (state_22499[(2)]);
var state_22499__$1 = state_22499;
var statearr_22552_22603 = state_22499__$1;
(statearr_22552_22603[(2)] = inst_22441);

(statearr_22552_22603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (37))){
var state_22499__$1 = state_22499;
var statearr_22553_22604 = state_22499__$1;
(statearr_22553_22604[(2)] = null);

(statearr_22553_22604[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22500 === (8))){
var inst_22401 = (state_22499[(8)]);
var inst_22419 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22401);
var state_22499__$1 = state_22499;
var statearr_22554_22605 = state_22499__$1;
(statearr_22554_22605[(2)] = inst_22419);

(statearr_22554_22605[(1)] = (10));


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
});})(c__19650__auto___22559,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19495__auto__,c__19650__auto___22559,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19496__auto__ = null;
var cljs$core$async$mix_$_state_machine__19496__auto____0 = (function (){
var statearr_22555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22555[(0)] = cljs$core$async$mix_$_state_machine__19496__auto__);

(statearr_22555[(1)] = (1));

return statearr_22555;
});
var cljs$core$async$mix_$_state_machine__19496__auto____1 = (function (state_22499){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_22499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e22556){if((e22556 instanceof Object)){
var ex__19499__auto__ = e22556;
var statearr_22557_22606 = state_22499;
(statearr_22557_22606[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22607 = state_22499;
state_22499 = G__22607;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19496__auto__ = function(state_22499){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19496__auto____1.call(this,state_22499);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19496__auto____0;
cljs$core$async$mix_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19496__auto____1;
return cljs$core$async$mix_$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___22559,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19652__auto__ = (function (){var statearr_22558 = f__19651__auto__.call(null);
(statearr_22558[(6)] = c__19650__auto___22559);

return statearr_22558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___22559,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__22609 = arguments.length;
switch (G__22609) {
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
var G__22613 = arguments.length;
switch (G__22613) {
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
return (function (p1__22611_SHARP_){
if(cljs.core.truth_(p1__22611_SHARP_.call(null,topic))){
return p1__22611_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22611_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22614 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22615){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22615 = meta22615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22616,meta22615__$1){
var self__ = this;
var _22616__$1 = this;
return (new cljs.core.async.t_cljs$core$async22614(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22615__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22616){
var self__ = this;
var _22616__$1 = this;
return self__.meta22615;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22614.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22615","meta22615",1740398105,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22614";

cljs.core.async.t_cljs$core$async22614.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22614");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22614.
 */
cljs.core.async.__GT_t_cljs$core$async22614 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22614(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22615){
return (new cljs.core.async.t_cljs$core$async22614(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22615));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22614(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19650__auto___22734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___22734,mults,ensure_mult,p){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___22734,mults,ensure_mult,p){
return (function (state_22688){
var state_val_22689 = (state_22688[(1)]);
if((state_val_22689 === (7))){
var inst_22684 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22690_22735 = state_22688__$1;
(statearr_22690_22735[(2)] = inst_22684);

(statearr_22690_22735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (20))){
var state_22688__$1 = state_22688;
var statearr_22691_22736 = state_22688__$1;
(statearr_22691_22736[(2)] = null);

(statearr_22691_22736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (1))){
var state_22688__$1 = state_22688;
var statearr_22692_22737 = state_22688__$1;
(statearr_22692_22737[(2)] = null);

(statearr_22692_22737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (24))){
var inst_22667 = (state_22688[(7)]);
var inst_22676 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22667);
var state_22688__$1 = state_22688;
var statearr_22693_22738 = state_22688__$1;
(statearr_22693_22738[(2)] = inst_22676);

(statearr_22693_22738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (4))){
var inst_22619 = (state_22688[(8)]);
var inst_22619__$1 = (state_22688[(2)]);
var inst_22620 = (inst_22619__$1 == null);
var state_22688__$1 = (function (){var statearr_22694 = state_22688;
(statearr_22694[(8)] = inst_22619__$1);

return statearr_22694;
})();
if(cljs.core.truth_(inst_22620)){
var statearr_22695_22739 = state_22688__$1;
(statearr_22695_22739[(1)] = (5));

} else {
var statearr_22696_22740 = state_22688__$1;
(statearr_22696_22740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (15))){
var inst_22661 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22697_22741 = state_22688__$1;
(statearr_22697_22741[(2)] = inst_22661);

(statearr_22697_22741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (21))){
var inst_22681 = (state_22688[(2)]);
var state_22688__$1 = (function (){var statearr_22698 = state_22688;
(statearr_22698[(9)] = inst_22681);

return statearr_22698;
})();
var statearr_22699_22742 = state_22688__$1;
(statearr_22699_22742[(2)] = null);

(statearr_22699_22742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (13))){
var inst_22643 = (state_22688[(10)]);
var inst_22645 = cljs.core.chunked_seq_QMARK_.call(null,inst_22643);
var state_22688__$1 = state_22688;
if(inst_22645){
var statearr_22700_22743 = state_22688__$1;
(statearr_22700_22743[(1)] = (16));

} else {
var statearr_22701_22744 = state_22688__$1;
(statearr_22701_22744[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (22))){
var inst_22673 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
if(cljs.core.truth_(inst_22673)){
var statearr_22702_22745 = state_22688__$1;
(statearr_22702_22745[(1)] = (23));

} else {
var statearr_22703_22746 = state_22688__$1;
(statearr_22703_22746[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (6))){
var inst_22667 = (state_22688[(7)]);
var inst_22619 = (state_22688[(8)]);
var inst_22669 = (state_22688[(11)]);
var inst_22667__$1 = topic_fn.call(null,inst_22619);
var inst_22668 = cljs.core.deref.call(null,mults);
var inst_22669__$1 = cljs.core.get.call(null,inst_22668,inst_22667__$1);
var state_22688__$1 = (function (){var statearr_22704 = state_22688;
(statearr_22704[(7)] = inst_22667__$1);

(statearr_22704[(11)] = inst_22669__$1);

return statearr_22704;
})();
if(cljs.core.truth_(inst_22669__$1)){
var statearr_22705_22747 = state_22688__$1;
(statearr_22705_22747[(1)] = (19));

} else {
var statearr_22706_22748 = state_22688__$1;
(statearr_22706_22748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (25))){
var inst_22678 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22707_22749 = state_22688__$1;
(statearr_22707_22749[(2)] = inst_22678);

(statearr_22707_22749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (17))){
var inst_22643 = (state_22688[(10)]);
var inst_22652 = cljs.core.first.call(null,inst_22643);
var inst_22653 = cljs.core.async.muxch_STAR_.call(null,inst_22652);
var inst_22654 = cljs.core.async.close_BANG_.call(null,inst_22653);
var inst_22655 = cljs.core.next.call(null,inst_22643);
var inst_22629 = inst_22655;
var inst_22630 = null;
var inst_22631 = (0);
var inst_22632 = (0);
var state_22688__$1 = (function (){var statearr_22708 = state_22688;
(statearr_22708[(12)] = inst_22629);

(statearr_22708[(13)] = inst_22632);

(statearr_22708[(14)] = inst_22654);

(statearr_22708[(15)] = inst_22631);

(statearr_22708[(16)] = inst_22630);

return statearr_22708;
})();
var statearr_22709_22750 = state_22688__$1;
(statearr_22709_22750[(2)] = null);

(statearr_22709_22750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (3))){
var inst_22686 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22688__$1,inst_22686);
} else {
if((state_val_22689 === (12))){
var inst_22663 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22710_22751 = state_22688__$1;
(statearr_22710_22751[(2)] = inst_22663);

(statearr_22710_22751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (2))){
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22688__$1,(4),ch);
} else {
if((state_val_22689 === (23))){
var state_22688__$1 = state_22688;
var statearr_22711_22752 = state_22688__$1;
(statearr_22711_22752[(2)] = null);

(statearr_22711_22752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (19))){
var inst_22619 = (state_22688[(8)]);
var inst_22669 = (state_22688[(11)]);
var inst_22671 = cljs.core.async.muxch_STAR_.call(null,inst_22669);
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22688__$1,(22),inst_22671,inst_22619);
} else {
if((state_val_22689 === (11))){
var inst_22629 = (state_22688[(12)]);
var inst_22643 = (state_22688[(10)]);
var inst_22643__$1 = cljs.core.seq.call(null,inst_22629);
var state_22688__$1 = (function (){var statearr_22712 = state_22688;
(statearr_22712[(10)] = inst_22643__$1);

return statearr_22712;
})();
if(inst_22643__$1){
var statearr_22713_22753 = state_22688__$1;
(statearr_22713_22753[(1)] = (13));

} else {
var statearr_22714_22754 = state_22688__$1;
(statearr_22714_22754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (9))){
var inst_22665 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22715_22755 = state_22688__$1;
(statearr_22715_22755[(2)] = inst_22665);

(statearr_22715_22755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (5))){
var inst_22626 = cljs.core.deref.call(null,mults);
var inst_22627 = cljs.core.vals.call(null,inst_22626);
var inst_22628 = cljs.core.seq.call(null,inst_22627);
var inst_22629 = inst_22628;
var inst_22630 = null;
var inst_22631 = (0);
var inst_22632 = (0);
var state_22688__$1 = (function (){var statearr_22716 = state_22688;
(statearr_22716[(12)] = inst_22629);

(statearr_22716[(13)] = inst_22632);

(statearr_22716[(15)] = inst_22631);

(statearr_22716[(16)] = inst_22630);

return statearr_22716;
})();
var statearr_22717_22756 = state_22688__$1;
(statearr_22717_22756[(2)] = null);

(statearr_22717_22756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (14))){
var state_22688__$1 = state_22688;
var statearr_22721_22757 = state_22688__$1;
(statearr_22721_22757[(2)] = null);

(statearr_22721_22757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (16))){
var inst_22643 = (state_22688[(10)]);
var inst_22647 = cljs.core.chunk_first.call(null,inst_22643);
var inst_22648 = cljs.core.chunk_rest.call(null,inst_22643);
var inst_22649 = cljs.core.count.call(null,inst_22647);
var inst_22629 = inst_22648;
var inst_22630 = inst_22647;
var inst_22631 = inst_22649;
var inst_22632 = (0);
var state_22688__$1 = (function (){var statearr_22722 = state_22688;
(statearr_22722[(12)] = inst_22629);

(statearr_22722[(13)] = inst_22632);

(statearr_22722[(15)] = inst_22631);

(statearr_22722[(16)] = inst_22630);

return statearr_22722;
})();
var statearr_22723_22758 = state_22688__$1;
(statearr_22723_22758[(2)] = null);

(statearr_22723_22758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (10))){
var inst_22629 = (state_22688[(12)]);
var inst_22632 = (state_22688[(13)]);
var inst_22631 = (state_22688[(15)]);
var inst_22630 = (state_22688[(16)]);
var inst_22637 = cljs.core._nth.call(null,inst_22630,inst_22632);
var inst_22638 = cljs.core.async.muxch_STAR_.call(null,inst_22637);
var inst_22639 = cljs.core.async.close_BANG_.call(null,inst_22638);
var inst_22640 = (inst_22632 + (1));
var tmp22718 = inst_22629;
var tmp22719 = inst_22631;
var tmp22720 = inst_22630;
var inst_22629__$1 = tmp22718;
var inst_22630__$1 = tmp22720;
var inst_22631__$1 = tmp22719;
var inst_22632__$1 = inst_22640;
var state_22688__$1 = (function (){var statearr_22724 = state_22688;
(statearr_22724[(12)] = inst_22629__$1);

(statearr_22724[(13)] = inst_22632__$1);

(statearr_22724[(15)] = inst_22631__$1);

(statearr_22724[(17)] = inst_22639);

(statearr_22724[(16)] = inst_22630__$1);

return statearr_22724;
})();
var statearr_22725_22759 = state_22688__$1;
(statearr_22725_22759[(2)] = null);

(statearr_22725_22759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (18))){
var inst_22658 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22726_22760 = state_22688__$1;
(statearr_22726_22760[(2)] = inst_22658);

(statearr_22726_22760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (8))){
var inst_22632 = (state_22688[(13)]);
var inst_22631 = (state_22688[(15)]);
var inst_22634 = (inst_22632 < inst_22631);
var inst_22635 = inst_22634;
var state_22688__$1 = state_22688;
if(cljs.core.truth_(inst_22635)){
var statearr_22727_22761 = state_22688__$1;
(statearr_22727_22761[(1)] = (10));

} else {
var statearr_22728_22762 = state_22688__$1;
(statearr_22728_22762[(1)] = (11));

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
});})(c__19650__auto___22734,mults,ensure_mult,p))
;
return ((function (switch__19495__auto__,c__19650__auto___22734,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19496__auto__ = null;
var cljs$core$async$state_machine__19496__auto____0 = (function (){
var statearr_22729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22729[(0)] = cljs$core$async$state_machine__19496__auto__);

(statearr_22729[(1)] = (1));

return statearr_22729;
});
var cljs$core$async$state_machine__19496__auto____1 = (function (state_22688){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_22688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e22730){if((e22730 instanceof Object)){
var ex__19499__auto__ = e22730;
var statearr_22731_22763 = state_22688;
(statearr_22731_22763[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22764 = state_22688;
state_22688 = G__22764;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$state_machine__19496__auto__ = function(state_22688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19496__auto____1.call(this,state_22688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19496__auto____0;
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19496__auto____1;
return cljs$core$async$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___22734,mults,ensure_mult,p))
})();
var state__19652__auto__ = (function (){var statearr_22732 = f__19651__auto__.call(null);
(statearr_22732[(6)] = c__19650__auto___22734);

return statearr_22732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___22734,mults,ensure_mult,p))
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
var G__22766 = arguments.length;
switch (G__22766) {
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
var G__22769 = arguments.length;
switch (G__22769) {
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
var G__22772 = arguments.length;
switch (G__22772) {
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
var c__19650__auto___22839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___22839,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___22839,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22811){
var state_val_22812 = (state_22811[(1)]);
if((state_val_22812 === (7))){
var state_22811__$1 = state_22811;
var statearr_22813_22840 = state_22811__$1;
(statearr_22813_22840[(2)] = null);

(statearr_22813_22840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (1))){
var state_22811__$1 = state_22811;
var statearr_22814_22841 = state_22811__$1;
(statearr_22814_22841[(2)] = null);

(statearr_22814_22841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (4))){
var inst_22775 = (state_22811[(7)]);
var inst_22777 = (inst_22775 < cnt);
var state_22811__$1 = state_22811;
if(cljs.core.truth_(inst_22777)){
var statearr_22815_22842 = state_22811__$1;
(statearr_22815_22842[(1)] = (6));

} else {
var statearr_22816_22843 = state_22811__$1;
(statearr_22816_22843[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (15))){
var inst_22807 = (state_22811[(2)]);
var state_22811__$1 = state_22811;
var statearr_22817_22844 = state_22811__$1;
(statearr_22817_22844[(2)] = inst_22807);

(statearr_22817_22844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (13))){
var inst_22800 = cljs.core.async.close_BANG_.call(null,out);
var state_22811__$1 = state_22811;
var statearr_22818_22845 = state_22811__$1;
(statearr_22818_22845[(2)] = inst_22800);

(statearr_22818_22845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (6))){
var state_22811__$1 = state_22811;
var statearr_22819_22846 = state_22811__$1;
(statearr_22819_22846[(2)] = null);

(statearr_22819_22846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (3))){
var inst_22809 = (state_22811[(2)]);
var state_22811__$1 = state_22811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22811__$1,inst_22809);
} else {
if((state_val_22812 === (12))){
var inst_22797 = (state_22811[(8)]);
var inst_22797__$1 = (state_22811[(2)]);
var inst_22798 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22797__$1);
var state_22811__$1 = (function (){var statearr_22820 = state_22811;
(statearr_22820[(8)] = inst_22797__$1);

return statearr_22820;
})();
if(cljs.core.truth_(inst_22798)){
var statearr_22821_22847 = state_22811__$1;
(statearr_22821_22847[(1)] = (13));

} else {
var statearr_22822_22848 = state_22811__$1;
(statearr_22822_22848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (2))){
var inst_22774 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22775 = (0);
var state_22811__$1 = (function (){var statearr_22823 = state_22811;
(statearr_22823[(7)] = inst_22775);

(statearr_22823[(9)] = inst_22774);

return statearr_22823;
})();
var statearr_22824_22849 = state_22811__$1;
(statearr_22824_22849[(2)] = null);

(statearr_22824_22849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (11))){
var inst_22775 = (state_22811[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22811,(10),Object,null,(9));
var inst_22784 = chs__$1.call(null,inst_22775);
var inst_22785 = done.call(null,inst_22775);
var inst_22786 = cljs.core.async.take_BANG_.call(null,inst_22784,inst_22785);
var state_22811__$1 = state_22811;
var statearr_22825_22850 = state_22811__$1;
(statearr_22825_22850[(2)] = inst_22786);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22811__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (9))){
var inst_22775 = (state_22811[(7)]);
var inst_22788 = (state_22811[(2)]);
var inst_22789 = (inst_22775 + (1));
var inst_22775__$1 = inst_22789;
var state_22811__$1 = (function (){var statearr_22826 = state_22811;
(statearr_22826[(7)] = inst_22775__$1);

(statearr_22826[(10)] = inst_22788);

return statearr_22826;
})();
var statearr_22827_22851 = state_22811__$1;
(statearr_22827_22851[(2)] = null);

(statearr_22827_22851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (5))){
var inst_22795 = (state_22811[(2)]);
var state_22811__$1 = (function (){var statearr_22828 = state_22811;
(statearr_22828[(11)] = inst_22795);

return statearr_22828;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22811__$1,(12),dchan);
} else {
if((state_val_22812 === (14))){
var inst_22797 = (state_22811[(8)]);
var inst_22802 = cljs.core.apply.call(null,f,inst_22797);
var state_22811__$1 = state_22811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22811__$1,(16),out,inst_22802);
} else {
if((state_val_22812 === (16))){
var inst_22804 = (state_22811[(2)]);
var state_22811__$1 = (function (){var statearr_22829 = state_22811;
(statearr_22829[(12)] = inst_22804);

return statearr_22829;
})();
var statearr_22830_22852 = state_22811__$1;
(statearr_22830_22852[(2)] = null);

(statearr_22830_22852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (10))){
var inst_22779 = (state_22811[(2)]);
var inst_22780 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22811__$1 = (function (){var statearr_22831 = state_22811;
(statearr_22831[(13)] = inst_22779);

return statearr_22831;
})();
var statearr_22832_22853 = state_22811__$1;
(statearr_22832_22853[(2)] = inst_22780);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22811__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22812 === (8))){
var inst_22793 = (state_22811[(2)]);
var state_22811__$1 = state_22811;
var statearr_22833_22854 = state_22811__$1;
(statearr_22833_22854[(2)] = inst_22793);

(statearr_22833_22854[(1)] = (5));


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
});})(c__19650__auto___22839,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19495__auto__,c__19650__auto___22839,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19496__auto__ = null;
var cljs$core$async$state_machine__19496__auto____0 = (function (){
var statearr_22834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22834[(0)] = cljs$core$async$state_machine__19496__auto__);

(statearr_22834[(1)] = (1));

return statearr_22834;
});
var cljs$core$async$state_machine__19496__auto____1 = (function (state_22811){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_22811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e22835){if((e22835 instanceof Object)){
var ex__19499__auto__ = e22835;
var statearr_22836_22855 = state_22811;
(statearr_22836_22855[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22856 = state_22811;
state_22811 = G__22856;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$state_machine__19496__auto__ = function(state_22811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19496__auto____1.call(this,state_22811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19496__auto____0;
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19496__auto____1;
return cljs$core$async$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___22839,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19652__auto__ = (function (){var statearr_22837 = f__19651__auto__.call(null);
(statearr_22837[(6)] = c__19650__auto___22839);

return statearr_22837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___22839,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__22859 = arguments.length;
switch (G__22859) {
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
var c__19650__auto___22913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___22913,out){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___22913,out){
return (function (state_22891){
var state_val_22892 = (state_22891[(1)]);
if((state_val_22892 === (7))){
var inst_22870 = (state_22891[(7)]);
var inst_22871 = (state_22891[(8)]);
var inst_22870__$1 = (state_22891[(2)]);
var inst_22871__$1 = cljs.core.nth.call(null,inst_22870__$1,(0),null);
var inst_22872 = cljs.core.nth.call(null,inst_22870__$1,(1),null);
var inst_22873 = (inst_22871__$1 == null);
var state_22891__$1 = (function (){var statearr_22893 = state_22891;
(statearr_22893[(7)] = inst_22870__$1);

(statearr_22893[(8)] = inst_22871__$1);

(statearr_22893[(9)] = inst_22872);

return statearr_22893;
})();
if(cljs.core.truth_(inst_22873)){
var statearr_22894_22914 = state_22891__$1;
(statearr_22894_22914[(1)] = (8));

} else {
var statearr_22895_22915 = state_22891__$1;
(statearr_22895_22915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (1))){
var inst_22860 = cljs.core.vec.call(null,chs);
var inst_22861 = inst_22860;
var state_22891__$1 = (function (){var statearr_22896 = state_22891;
(statearr_22896[(10)] = inst_22861);

return statearr_22896;
})();
var statearr_22897_22916 = state_22891__$1;
(statearr_22897_22916[(2)] = null);

(statearr_22897_22916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (4))){
var inst_22861 = (state_22891[(10)]);
var state_22891__$1 = state_22891;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22891__$1,(7),inst_22861);
} else {
if((state_val_22892 === (6))){
var inst_22887 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22898_22917 = state_22891__$1;
(statearr_22898_22917[(2)] = inst_22887);

(statearr_22898_22917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (3))){
var inst_22889 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22891__$1,inst_22889);
} else {
if((state_val_22892 === (2))){
var inst_22861 = (state_22891[(10)]);
var inst_22863 = cljs.core.count.call(null,inst_22861);
var inst_22864 = (inst_22863 > (0));
var state_22891__$1 = state_22891;
if(cljs.core.truth_(inst_22864)){
var statearr_22900_22918 = state_22891__$1;
(statearr_22900_22918[(1)] = (4));

} else {
var statearr_22901_22919 = state_22891__$1;
(statearr_22901_22919[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (11))){
var inst_22861 = (state_22891[(10)]);
var inst_22880 = (state_22891[(2)]);
var tmp22899 = inst_22861;
var inst_22861__$1 = tmp22899;
var state_22891__$1 = (function (){var statearr_22902 = state_22891;
(statearr_22902[(11)] = inst_22880);

(statearr_22902[(10)] = inst_22861__$1);

return statearr_22902;
})();
var statearr_22903_22920 = state_22891__$1;
(statearr_22903_22920[(2)] = null);

(statearr_22903_22920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (9))){
var inst_22871 = (state_22891[(8)]);
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22891__$1,(11),out,inst_22871);
} else {
if((state_val_22892 === (5))){
var inst_22885 = cljs.core.async.close_BANG_.call(null,out);
var state_22891__$1 = state_22891;
var statearr_22904_22921 = state_22891__$1;
(statearr_22904_22921[(2)] = inst_22885);

(statearr_22904_22921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (10))){
var inst_22883 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22905_22922 = state_22891__$1;
(statearr_22905_22922[(2)] = inst_22883);

(statearr_22905_22922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (8))){
var inst_22870 = (state_22891[(7)]);
var inst_22871 = (state_22891[(8)]);
var inst_22872 = (state_22891[(9)]);
var inst_22861 = (state_22891[(10)]);
var inst_22875 = (function (){var cs = inst_22861;
var vec__22866 = inst_22870;
var v = inst_22871;
var c = inst_22872;
return ((function (cs,vec__22866,v,c,inst_22870,inst_22871,inst_22872,inst_22861,state_val_22892,c__19650__auto___22913,out){
return (function (p1__22857_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22857_SHARP_);
});
;})(cs,vec__22866,v,c,inst_22870,inst_22871,inst_22872,inst_22861,state_val_22892,c__19650__auto___22913,out))
})();
var inst_22876 = cljs.core.filterv.call(null,inst_22875,inst_22861);
var inst_22861__$1 = inst_22876;
var state_22891__$1 = (function (){var statearr_22906 = state_22891;
(statearr_22906[(10)] = inst_22861__$1);

return statearr_22906;
})();
var statearr_22907_22923 = state_22891__$1;
(statearr_22907_22923[(2)] = null);

(statearr_22907_22923[(1)] = (2));


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
});})(c__19650__auto___22913,out))
;
return ((function (switch__19495__auto__,c__19650__auto___22913,out){
return (function() {
var cljs$core$async$state_machine__19496__auto__ = null;
var cljs$core$async$state_machine__19496__auto____0 = (function (){
var statearr_22908 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22908[(0)] = cljs$core$async$state_machine__19496__auto__);

(statearr_22908[(1)] = (1));

return statearr_22908;
});
var cljs$core$async$state_machine__19496__auto____1 = (function (state_22891){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_22891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e22909){if((e22909 instanceof Object)){
var ex__19499__auto__ = e22909;
var statearr_22910_22924 = state_22891;
(statearr_22910_22924[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22925 = state_22891;
state_22891 = G__22925;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$state_machine__19496__auto__ = function(state_22891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19496__auto____1.call(this,state_22891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19496__auto____0;
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19496__auto____1;
return cljs$core$async$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___22913,out))
})();
var state__19652__auto__ = (function (){var statearr_22911 = f__19651__auto__.call(null);
(statearr_22911[(6)] = c__19650__auto___22913);

return statearr_22911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___22913,out))
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
var G__22927 = arguments.length;
switch (G__22927) {
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
var c__19650__auto___22972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___22972,out){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___22972,out){
return (function (state_22951){
var state_val_22952 = (state_22951[(1)]);
if((state_val_22952 === (7))){
var inst_22933 = (state_22951[(7)]);
var inst_22933__$1 = (state_22951[(2)]);
var inst_22934 = (inst_22933__$1 == null);
var inst_22935 = cljs.core.not.call(null,inst_22934);
var state_22951__$1 = (function (){var statearr_22953 = state_22951;
(statearr_22953[(7)] = inst_22933__$1);

return statearr_22953;
})();
if(inst_22935){
var statearr_22954_22973 = state_22951__$1;
(statearr_22954_22973[(1)] = (8));

} else {
var statearr_22955_22974 = state_22951__$1;
(statearr_22955_22974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (1))){
var inst_22928 = (0);
var state_22951__$1 = (function (){var statearr_22956 = state_22951;
(statearr_22956[(8)] = inst_22928);

return statearr_22956;
})();
var statearr_22957_22975 = state_22951__$1;
(statearr_22957_22975[(2)] = null);

(statearr_22957_22975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (4))){
var state_22951__$1 = state_22951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22951__$1,(7),ch);
} else {
if((state_val_22952 === (6))){
var inst_22946 = (state_22951[(2)]);
var state_22951__$1 = state_22951;
var statearr_22958_22976 = state_22951__$1;
(statearr_22958_22976[(2)] = inst_22946);

(statearr_22958_22976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (3))){
var inst_22948 = (state_22951[(2)]);
var inst_22949 = cljs.core.async.close_BANG_.call(null,out);
var state_22951__$1 = (function (){var statearr_22959 = state_22951;
(statearr_22959[(9)] = inst_22948);

return statearr_22959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22951__$1,inst_22949);
} else {
if((state_val_22952 === (2))){
var inst_22928 = (state_22951[(8)]);
var inst_22930 = (inst_22928 < n);
var state_22951__$1 = state_22951;
if(cljs.core.truth_(inst_22930)){
var statearr_22960_22977 = state_22951__$1;
(statearr_22960_22977[(1)] = (4));

} else {
var statearr_22961_22978 = state_22951__$1;
(statearr_22961_22978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (11))){
var inst_22928 = (state_22951[(8)]);
var inst_22938 = (state_22951[(2)]);
var inst_22939 = (inst_22928 + (1));
var inst_22928__$1 = inst_22939;
var state_22951__$1 = (function (){var statearr_22962 = state_22951;
(statearr_22962[(10)] = inst_22938);

(statearr_22962[(8)] = inst_22928__$1);

return statearr_22962;
})();
var statearr_22963_22979 = state_22951__$1;
(statearr_22963_22979[(2)] = null);

(statearr_22963_22979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (9))){
var state_22951__$1 = state_22951;
var statearr_22964_22980 = state_22951__$1;
(statearr_22964_22980[(2)] = null);

(statearr_22964_22980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (5))){
var state_22951__$1 = state_22951;
var statearr_22965_22981 = state_22951__$1;
(statearr_22965_22981[(2)] = null);

(statearr_22965_22981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (10))){
var inst_22943 = (state_22951[(2)]);
var state_22951__$1 = state_22951;
var statearr_22966_22982 = state_22951__$1;
(statearr_22966_22982[(2)] = inst_22943);

(statearr_22966_22982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (8))){
var inst_22933 = (state_22951[(7)]);
var state_22951__$1 = state_22951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22951__$1,(11),out,inst_22933);
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
});})(c__19650__auto___22972,out))
;
return ((function (switch__19495__auto__,c__19650__auto___22972,out){
return (function() {
var cljs$core$async$state_machine__19496__auto__ = null;
var cljs$core$async$state_machine__19496__auto____0 = (function (){
var statearr_22967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22967[(0)] = cljs$core$async$state_machine__19496__auto__);

(statearr_22967[(1)] = (1));

return statearr_22967;
});
var cljs$core$async$state_machine__19496__auto____1 = (function (state_22951){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_22951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e22968){if((e22968 instanceof Object)){
var ex__19499__auto__ = e22968;
var statearr_22969_22983 = state_22951;
(statearr_22969_22983[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22984 = state_22951;
state_22951 = G__22984;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$state_machine__19496__auto__ = function(state_22951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19496__auto____1.call(this,state_22951);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19496__auto____0;
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19496__auto____1;
return cljs$core$async$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___22972,out))
})();
var state__19652__auto__ = (function (){var statearr_22970 = f__19651__auto__.call(null);
(statearr_22970[(6)] = c__19650__auto___22972);

return statearr_22970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___22972,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22986 = (function (f,ch,meta22987){
this.f = f;
this.ch = ch;
this.meta22987 = meta22987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22988,meta22987__$1){
var self__ = this;
var _22988__$1 = this;
return (new cljs.core.async.t_cljs$core$async22986(self__.f,self__.ch,meta22987__$1));
});

cljs.core.async.t_cljs$core$async22986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22988){
var self__ = this;
var _22988__$1 = this;
return self__.meta22987;
});

cljs.core.async.t_cljs$core$async22986.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22986.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22986.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22986.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22986.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22989 = (function (f,ch,meta22987,_,fn1,meta22990){
this.f = f;
this.ch = ch;
this.meta22987 = meta22987;
this._ = _;
this.fn1 = fn1;
this.meta22990 = meta22990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22991,meta22990__$1){
var self__ = this;
var _22991__$1 = this;
return (new cljs.core.async.t_cljs$core$async22989(self__.f,self__.ch,self__.meta22987,self__._,self__.fn1,meta22990__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22991){
var self__ = this;
var _22991__$1 = this;
return self__.meta22990;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22985_SHARP_){
return f1.call(null,(((p1__22985_SHARP_ == null))?null:self__.f.call(null,p1__22985_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22989.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22987","meta22987",321698520,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22986","cljs.core.async/t_cljs$core$async22986",-14907069,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22990","meta22990",-2017853405,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22989.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22989";

cljs.core.async.t_cljs$core$async22989.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22989");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22989.
 */
cljs.core.async.__GT_t_cljs$core$async22989 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22989(f__$1,ch__$1,meta22987__$1,___$2,fn1__$1,meta22990){
return (new cljs.core.async.t_cljs$core$async22989(f__$1,ch__$1,meta22987__$1,___$2,fn1__$1,meta22990));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22989(self__.f,self__.ch,self__.meta22987,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async22986.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22986.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22987","meta22987",321698520,null)], null);
});

cljs.core.async.t_cljs$core$async22986.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22986";

cljs.core.async.t_cljs$core$async22986.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22986");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22986.
 */
cljs.core.async.__GT_t_cljs$core$async22986 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22986(f__$1,ch__$1,meta22987){
return (new cljs.core.async.t_cljs$core$async22986(f__$1,ch__$1,meta22987));
});

}

return (new cljs.core.async.t_cljs$core$async22986(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22992 = (function (f,ch,meta22993){
this.f = f;
this.ch = ch;
this.meta22993 = meta22993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22994,meta22993__$1){
var self__ = this;
var _22994__$1 = this;
return (new cljs.core.async.t_cljs$core$async22992(self__.f,self__.ch,meta22993__$1));
});

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22994){
var self__ = this;
var _22994__$1 = this;
return self__.meta22993;
});

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22993","meta22993",163171648,null)], null);
});

cljs.core.async.t_cljs$core$async22992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22992";

cljs.core.async.t_cljs$core$async22992.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22992");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22992.
 */
cljs.core.async.__GT_t_cljs$core$async22992 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22992(f__$1,ch__$1,meta22993){
return (new cljs.core.async.t_cljs$core$async22992(f__$1,ch__$1,meta22993));
});

}

return (new cljs.core.async.t_cljs$core$async22992(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22995 = (function (p,ch,meta22996){
this.p = p;
this.ch = ch;
this.meta22996 = meta22996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22997,meta22996__$1){
var self__ = this;
var _22997__$1 = this;
return (new cljs.core.async.t_cljs$core$async22995(self__.p,self__.ch,meta22996__$1));
});

cljs.core.async.t_cljs$core$async22995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22997){
var self__ = this;
var _22997__$1 = this;
return self__.meta22996;
});

cljs.core.async.t_cljs$core$async22995.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22995.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22995.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22995.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22995.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22995.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22995.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22996","meta22996",467533854,null)], null);
});

cljs.core.async.t_cljs$core$async22995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22995";

cljs.core.async.t_cljs$core$async22995.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22995");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22995.
 */
cljs.core.async.__GT_t_cljs$core$async22995 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22995(p__$1,ch__$1,meta22996){
return (new cljs.core.async.t_cljs$core$async22995(p__$1,ch__$1,meta22996));
});

}

return (new cljs.core.async.t_cljs$core$async22995(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22999 = arguments.length;
switch (G__22999) {
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
var c__19650__auto___23039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___23039,out){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___23039,out){
return (function (state_23020){
var state_val_23021 = (state_23020[(1)]);
if((state_val_23021 === (7))){
var inst_23016 = (state_23020[(2)]);
var state_23020__$1 = state_23020;
var statearr_23022_23040 = state_23020__$1;
(statearr_23022_23040[(2)] = inst_23016);

(statearr_23022_23040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (1))){
var state_23020__$1 = state_23020;
var statearr_23023_23041 = state_23020__$1;
(statearr_23023_23041[(2)] = null);

(statearr_23023_23041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (4))){
var inst_23002 = (state_23020[(7)]);
var inst_23002__$1 = (state_23020[(2)]);
var inst_23003 = (inst_23002__$1 == null);
var state_23020__$1 = (function (){var statearr_23024 = state_23020;
(statearr_23024[(7)] = inst_23002__$1);

return statearr_23024;
})();
if(cljs.core.truth_(inst_23003)){
var statearr_23025_23042 = state_23020__$1;
(statearr_23025_23042[(1)] = (5));

} else {
var statearr_23026_23043 = state_23020__$1;
(statearr_23026_23043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (6))){
var inst_23002 = (state_23020[(7)]);
var inst_23007 = p.call(null,inst_23002);
var state_23020__$1 = state_23020;
if(cljs.core.truth_(inst_23007)){
var statearr_23027_23044 = state_23020__$1;
(statearr_23027_23044[(1)] = (8));

} else {
var statearr_23028_23045 = state_23020__$1;
(statearr_23028_23045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (3))){
var inst_23018 = (state_23020[(2)]);
var state_23020__$1 = state_23020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23020__$1,inst_23018);
} else {
if((state_val_23021 === (2))){
var state_23020__$1 = state_23020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23020__$1,(4),ch);
} else {
if((state_val_23021 === (11))){
var inst_23010 = (state_23020[(2)]);
var state_23020__$1 = state_23020;
var statearr_23029_23046 = state_23020__$1;
(statearr_23029_23046[(2)] = inst_23010);

(statearr_23029_23046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (9))){
var state_23020__$1 = state_23020;
var statearr_23030_23047 = state_23020__$1;
(statearr_23030_23047[(2)] = null);

(statearr_23030_23047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (5))){
var inst_23005 = cljs.core.async.close_BANG_.call(null,out);
var state_23020__$1 = state_23020;
var statearr_23031_23048 = state_23020__$1;
(statearr_23031_23048[(2)] = inst_23005);

(statearr_23031_23048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (10))){
var inst_23013 = (state_23020[(2)]);
var state_23020__$1 = (function (){var statearr_23032 = state_23020;
(statearr_23032[(8)] = inst_23013);

return statearr_23032;
})();
var statearr_23033_23049 = state_23020__$1;
(statearr_23033_23049[(2)] = null);

(statearr_23033_23049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (8))){
var inst_23002 = (state_23020[(7)]);
var state_23020__$1 = state_23020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23020__$1,(11),out,inst_23002);
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
});})(c__19650__auto___23039,out))
;
return ((function (switch__19495__auto__,c__19650__auto___23039,out){
return (function() {
var cljs$core$async$state_machine__19496__auto__ = null;
var cljs$core$async$state_machine__19496__auto____0 = (function (){
var statearr_23034 = [null,null,null,null,null,null,null,null,null];
(statearr_23034[(0)] = cljs$core$async$state_machine__19496__auto__);

(statearr_23034[(1)] = (1));

return statearr_23034;
});
var cljs$core$async$state_machine__19496__auto____1 = (function (state_23020){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_23020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e23035){if((e23035 instanceof Object)){
var ex__19499__auto__ = e23035;
var statearr_23036_23050 = state_23020;
(statearr_23036_23050[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23051 = state_23020;
state_23020 = G__23051;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$state_machine__19496__auto__ = function(state_23020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19496__auto____1.call(this,state_23020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19496__auto____0;
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19496__auto____1;
return cljs$core$async$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___23039,out))
})();
var state__19652__auto__ = (function (){var statearr_23037 = f__19651__auto__.call(null);
(statearr_23037[(6)] = c__19650__auto___23039);

return statearr_23037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___23039,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23053 = arguments.length;
switch (G__23053) {
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
var c__19650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto__){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto__){
return (function (state_23116){
var state_val_23117 = (state_23116[(1)]);
if((state_val_23117 === (7))){
var inst_23112 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23118_23156 = state_23116__$1;
(statearr_23118_23156[(2)] = inst_23112);

(statearr_23118_23156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (20))){
var inst_23082 = (state_23116[(7)]);
var inst_23093 = (state_23116[(2)]);
var inst_23094 = cljs.core.next.call(null,inst_23082);
var inst_23068 = inst_23094;
var inst_23069 = null;
var inst_23070 = (0);
var inst_23071 = (0);
var state_23116__$1 = (function (){var statearr_23119 = state_23116;
(statearr_23119[(8)] = inst_23069);

(statearr_23119[(9)] = inst_23070);

(statearr_23119[(10)] = inst_23068);

(statearr_23119[(11)] = inst_23093);

(statearr_23119[(12)] = inst_23071);

return statearr_23119;
})();
var statearr_23120_23157 = state_23116__$1;
(statearr_23120_23157[(2)] = null);

(statearr_23120_23157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (1))){
var state_23116__$1 = state_23116;
var statearr_23121_23158 = state_23116__$1;
(statearr_23121_23158[(2)] = null);

(statearr_23121_23158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (4))){
var inst_23057 = (state_23116[(13)]);
var inst_23057__$1 = (state_23116[(2)]);
var inst_23058 = (inst_23057__$1 == null);
var state_23116__$1 = (function (){var statearr_23122 = state_23116;
(statearr_23122[(13)] = inst_23057__$1);

return statearr_23122;
})();
if(cljs.core.truth_(inst_23058)){
var statearr_23123_23159 = state_23116__$1;
(statearr_23123_23159[(1)] = (5));

} else {
var statearr_23124_23160 = state_23116__$1;
(statearr_23124_23160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (15))){
var state_23116__$1 = state_23116;
var statearr_23128_23161 = state_23116__$1;
(statearr_23128_23161[(2)] = null);

(statearr_23128_23161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (21))){
var state_23116__$1 = state_23116;
var statearr_23129_23162 = state_23116__$1;
(statearr_23129_23162[(2)] = null);

(statearr_23129_23162[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (13))){
var inst_23069 = (state_23116[(8)]);
var inst_23070 = (state_23116[(9)]);
var inst_23068 = (state_23116[(10)]);
var inst_23071 = (state_23116[(12)]);
var inst_23078 = (state_23116[(2)]);
var inst_23079 = (inst_23071 + (1));
var tmp23125 = inst_23069;
var tmp23126 = inst_23070;
var tmp23127 = inst_23068;
var inst_23068__$1 = tmp23127;
var inst_23069__$1 = tmp23125;
var inst_23070__$1 = tmp23126;
var inst_23071__$1 = inst_23079;
var state_23116__$1 = (function (){var statearr_23130 = state_23116;
(statearr_23130[(8)] = inst_23069__$1);

(statearr_23130[(9)] = inst_23070__$1);

(statearr_23130[(14)] = inst_23078);

(statearr_23130[(10)] = inst_23068__$1);

(statearr_23130[(12)] = inst_23071__$1);

return statearr_23130;
})();
var statearr_23131_23163 = state_23116__$1;
(statearr_23131_23163[(2)] = null);

(statearr_23131_23163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (22))){
var state_23116__$1 = state_23116;
var statearr_23132_23164 = state_23116__$1;
(statearr_23132_23164[(2)] = null);

(statearr_23132_23164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (6))){
var inst_23057 = (state_23116[(13)]);
var inst_23066 = f.call(null,inst_23057);
var inst_23067 = cljs.core.seq.call(null,inst_23066);
var inst_23068 = inst_23067;
var inst_23069 = null;
var inst_23070 = (0);
var inst_23071 = (0);
var state_23116__$1 = (function (){var statearr_23133 = state_23116;
(statearr_23133[(8)] = inst_23069);

(statearr_23133[(9)] = inst_23070);

(statearr_23133[(10)] = inst_23068);

(statearr_23133[(12)] = inst_23071);

return statearr_23133;
})();
var statearr_23134_23165 = state_23116__$1;
(statearr_23134_23165[(2)] = null);

(statearr_23134_23165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (17))){
var inst_23082 = (state_23116[(7)]);
var inst_23086 = cljs.core.chunk_first.call(null,inst_23082);
var inst_23087 = cljs.core.chunk_rest.call(null,inst_23082);
var inst_23088 = cljs.core.count.call(null,inst_23086);
var inst_23068 = inst_23087;
var inst_23069 = inst_23086;
var inst_23070 = inst_23088;
var inst_23071 = (0);
var state_23116__$1 = (function (){var statearr_23135 = state_23116;
(statearr_23135[(8)] = inst_23069);

(statearr_23135[(9)] = inst_23070);

(statearr_23135[(10)] = inst_23068);

(statearr_23135[(12)] = inst_23071);

return statearr_23135;
})();
var statearr_23136_23166 = state_23116__$1;
(statearr_23136_23166[(2)] = null);

(statearr_23136_23166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (3))){
var inst_23114 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23116__$1,inst_23114);
} else {
if((state_val_23117 === (12))){
var inst_23102 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23137_23167 = state_23116__$1;
(statearr_23137_23167[(2)] = inst_23102);

(statearr_23137_23167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (2))){
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23116__$1,(4),in$);
} else {
if((state_val_23117 === (23))){
var inst_23110 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23138_23168 = state_23116__$1;
(statearr_23138_23168[(2)] = inst_23110);

(statearr_23138_23168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (19))){
var inst_23097 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23139_23169 = state_23116__$1;
(statearr_23139_23169[(2)] = inst_23097);

(statearr_23139_23169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (11))){
var inst_23068 = (state_23116[(10)]);
var inst_23082 = (state_23116[(7)]);
var inst_23082__$1 = cljs.core.seq.call(null,inst_23068);
var state_23116__$1 = (function (){var statearr_23140 = state_23116;
(statearr_23140[(7)] = inst_23082__$1);

return statearr_23140;
})();
if(inst_23082__$1){
var statearr_23141_23170 = state_23116__$1;
(statearr_23141_23170[(1)] = (14));

} else {
var statearr_23142_23171 = state_23116__$1;
(statearr_23142_23171[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (9))){
var inst_23104 = (state_23116[(2)]);
var inst_23105 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23116__$1 = (function (){var statearr_23143 = state_23116;
(statearr_23143[(15)] = inst_23104);

return statearr_23143;
})();
if(cljs.core.truth_(inst_23105)){
var statearr_23144_23172 = state_23116__$1;
(statearr_23144_23172[(1)] = (21));

} else {
var statearr_23145_23173 = state_23116__$1;
(statearr_23145_23173[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (5))){
var inst_23060 = cljs.core.async.close_BANG_.call(null,out);
var state_23116__$1 = state_23116;
var statearr_23146_23174 = state_23116__$1;
(statearr_23146_23174[(2)] = inst_23060);

(statearr_23146_23174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (14))){
var inst_23082 = (state_23116[(7)]);
var inst_23084 = cljs.core.chunked_seq_QMARK_.call(null,inst_23082);
var state_23116__$1 = state_23116;
if(inst_23084){
var statearr_23147_23175 = state_23116__$1;
(statearr_23147_23175[(1)] = (17));

} else {
var statearr_23148_23176 = state_23116__$1;
(statearr_23148_23176[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (16))){
var inst_23100 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23149_23177 = state_23116__$1;
(statearr_23149_23177[(2)] = inst_23100);

(statearr_23149_23177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (10))){
var inst_23069 = (state_23116[(8)]);
var inst_23071 = (state_23116[(12)]);
var inst_23076 = cljs.core._nth.call(null,inst_23069,inst_23071);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23116__$1,(13),out,inst_23076);
} else {
if((state_val_23117 === (18))){
var inst_23082 = (state_23116[(7)]);
var inst_23091 = cljs.core.first.call(null,inst_23082);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23116__$1,(20),out,inst_23091);
} else {
if((state_val_23117 === (8))){
var inst_23070 = (state_23116[(9)]);
var inst_23071 = (state_23116[(12)]);
var inst_23073 = (inst_23071 < inst_23070);
var inst_23074 = inst_23073;
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23074)){
var statearr_23150_23178 = state_23116__$1;
(statearr_23150_23178[(1)] = (10));

} else {
var statearr_23151_23179 = state_23116__$1;
(statearr_23151_23179[(1)] = (11));

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
});})(c__19650__auto__))
;
return ((function (switch__19495__auto__,c__19650__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19496__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19496__auto____0 = (function (){
var statearr_23152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23152[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19496__auto__);

(statearr_23152[(1)] = (1));

return statearr_23152;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19496__auto____1 = (function (state_23116){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_23116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e23153){if((e23153 instanceof Object)){
var ex__19499__auto__ = e23153;
var statearr_23154_23180 = state_23116;
(statearr_23154_23180[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23181 = state_23116;
state_23116 = G__23181;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19496__auto__ = function(state_23116){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19496__auto____1.call(this,state_23116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19496__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19496__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto__))
})();
var state__19652__auto__ = (function (){var statearr_23155 = f__19651__auto__.call(null);
(statearr_23155[(6)] = c__19650__auto__);

return statearr_23155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto__))
);

return c__19650__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23183 = arguments.length;
switch (G__23183) {
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
var G__23186 = arguments.length;
switch (G__23186) {
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
var G__23189 = arguments.length;
switch (G__23189) {
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
var c__19650__auto___23236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___23236,out){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___23236,out){
return (function (state_23213){
var state_val_23214 = (state_23213[(1)]);
if((state_val_23214 === (7))){
var inst_23208 = (state_23213[(2)]);
var state_23213__$1 = state_23213;
var statearr_23215_23237 = state_23213__$1;
(statearr_23215_23237[(2)] = inst_23208);

(statearr_23215_23237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (1))){
var inst_23190 = null;
var state_23213__$1 = (function (){var statearr_23216 = state_23213;
(statearr_23216[(7)] = inst_23190);

return statearr_23216;
})();
var statearr_23217_23238 = state_23213__$1;
(statearr_23217_23238[(2)] = null);

(statearr_23217_23238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (4))){
var inst_23193 = (state_23213[(8)]);
var inst_23193__$1 = (state_23213[(2)]);
var inst_23194 = (inst_23193__$1 == null);
var inst_23195 = cljs.core.not.call(null,inst_23194);
var state_23213__$1 = (function (){var statearr_23218 = state_23213;
(statearr_23218[(8)] = inst_23193__$1);

return statearr_23218;
})();
if(inst_23195){
var statearr_23219_23239 = state_23213__$1;
(statearr_23219_23239[(1)] = (5));

} else {
var statearr_23220_23240 = state_23213__$1;
(statearr_23220_23240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (6))){
var state_23213__$1 = state_23213;
var statearr_23221_23241 = state_23213__$1;
(statearr_23221_23241[(2)] = null);

(statearr_23221_23241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (3))){
var inst_23210 = (state_23213[(2)]);
var inst_23211 = cljs.core.async.close_BANG_.call(null,out);
var state_23213__$1 = (function (){var statearr_23222 = state_23213;
(statearr_23222[(9)] = inst_23210);

return statearr_23222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23213__$1,inst_23211);
} else {
if((state_val_23214 === (2))){
var state_23213__$1 = state_23213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23213__$1,(4),ch);
} else {
if((state_val_23214 === (11))){
var inst_23193 = (state_23213[(8)]);
var inst_23202 = (state_23213[(2)]);
var inst_23190 = inst_23193;
var state_23213__$1 = (function (){var statearr_23223 = state_23213;
(statearr_23223[(10)] = inst_23202);

(statearr_23223[(7)] = inst_23190);

return statearr_23223;
})();
var statearr_23224_23242 = state_23213__$1;
(statearr_23224_23242[(2)] = null);

(statearr_23224_23242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (9))){
var inst_23193 = (state_23213[(8)]);
var state_23213__$1 = state_23213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23213__$1,(11),out,inst_23193);
} else {
if((state_val_23214 === (5))){
var inst_23193 = (state_23213[(8)]);
var inst_23190 = (state_23213[(7)]);
var inst_23197 = cljs.core._EQ_.call(null,inst_23193,inst_23190);
var state_23213__$1 = state_23213;
if(inst_23197){
var statearr_23226_23243 = state_23213__$1;
(statearr_23226_23243[(1)] = (8));

} else {
var statearr_23227_23244 = state_23213__$1;
(statearr_23227_23244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (10))){
var inst_23205 = (state_23213[(2)]);
var state_23213__$1 = state_23213;
var statearr_23228_23245 = state_23213__$1;
(statearr_23228_23245[(2)] = inst_23205);

(statearr_23228_23245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (8))){
var inst_23190 = (state_23213[(7)]);
var tmp23225 = inst_23190;
var inst_23190__$1 = tmp23225;
var state_23213__$1 = (function (){var statearr_23229 = state_23213;
(statearr_23229[(7)] = inst_23190__$1);

return statearr_23229;
})();
var statearr_23230_23246 = state_23213__$1;
(statearr_23230_23246[(2)] = null);

(statearr_23230_23246[(1)] = (2));


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
});})(c__19650__auto___23236,out))
;
return ((function (switch__19495__auto__,c__19650__auto___23236,out){
return (function() {
var cljs$core$async$state_machine__19496__auto__ = null;
var cljs$core$async$state_machine__19496__auto____0 = (function (){
var statearr_23231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23231[(0)] = cljs$core$async$state_machine__19496__auto__);

(statearr_23231[(1)] = (1));

return statearr_23231;
});
var cljs$core$async$state_machine__19496__auto____1 = (function (state_23213){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_23213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e23232){if((e23232 instanceof Object)){
var ex__19499__auto__ = e23232;
var statearr_23233_23247 = state_23213;
(statearr_23233_23247[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23248 = state_23213;
state_23213 = G__23248;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$state_machine__19496__auto__ = function(state_23213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19496__auto____1.call(this,state_23213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19496__auto____0;
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19496__auto____1;
return cljs$core$async$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___23236,out))
})();
var state__19652__auto__ = (function (){var statearr_23234 = f__19651__auto__.call(null);
(statearr_23234[(6)] = c__19650__auto___23236);

return statearr_23234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___23236,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23250 = arguments.length;
switch (G__23250) {
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
var c__19650__auto___23316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___23316,out){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___23316,out){
return (function (state_23288){
var state_val_23289 = (state_23288[(1)]);
if((state_val_23289 === (7))){
var inst_23284 = (state_23288[(2)]);
var state_23288__$1 = state_23288;
var statearr_23290_23317 = state_23288__$1;
(statearr_23290_23317[(2)] = inst_23284);

(statearr_23290_23317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (1))){
var inst_23251 = (new Array(n));
var inst_23252 = inst_23251;
var inst_23253 = (0);
var state_23288__$1 = (function (){var statearr_23291 = state_23288;
(statearr_23291[(7)] = inst_23252);

(statearr_23291[(8)] = inst_23253);

return statearr_23291;
})();
var statearr_23292_23318 = state_23288__$1;
(statearr_23292_23318[(2)] = null);

(statearr_23292_23318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (4))){
var inst_23256 = (state_23288[(9)]);
var inst_23256__$1 = (state_23288[(2)]);
var inst_23257 = (inst_23256__$1 == null);
var inst_23258 = cljs.core.not.call(null,inst_23257);
var state_23288__$1 = (function (){var statearr_23293 = state_23288;
(statearr_23293[(9)] = inst_23256__$1);

return statearr_23293;
})();
if(inst_23258){
var statearr_23294_23319 = state_23288__$1;
(statearr_23294_23319[(1)] = (5));

} else {
var statearr_23295_23320 = state_23288__$1;
(statearr_23295_23320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (15))){
var inst_23278 = (state_23288[(2)]);
var state_23288__$1 = state_23288;
var statearr_23296_23321 = state_23288__$1;
(statearr_23296_23321[(2)] = inst_23278);

(statearr_23296_23321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (13))){
var state_23288__$1 = state_23288;
var statearr_23297_23322 = state_23288__$1;
(statearr_23297_23322[(2)] = null);

(statearr_23297_23322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (6))){
var inst_23253 = (state_23288[(8)]);
var inst_23274 = (inst_23253 > (0));
var state_23288__$1 = state_23288;
if(cljs.core.truth_(inst_23274)){
var statearr_23298_23323 = state_23288__$1;
(statearr_23298_23323[(1)] = (12));

} else {
var statearr_23299_23324 = state_23288__$1;
(statearr_23299_23324[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (3))){
var inst_23286 = (state_23288[(2)]);
var state_23288__$1 = state_23288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23288__$1,inst_23286);
} else {
if((state_val_23289 === (12))){
var inst_23252 = (state_23288[(7)]);
var inst_23276 = cljs.core.vec.call(null,inst_23252);
var state_23288__$1 = state_23288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23288__$1,(15),out,inst_23276);
} else {
if((state_val_23289 === (2))){
var state_23288__$1 = state_23288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23288__$1,(4),ch);
} else {
if((state_val_23289 === (11))){
var inst_23268 = (state_23288[(2)]);
var inst_23269 = (new Array(n));
var inst_23252 = inst_23269;
var inst_23253 = (0);
var state_23288__$1 = (function (){var statearr_23300 = state_23288;
(statearr_23300[(10)] = inst_23268);

(statearr_23300[(7)] = inst_23252);

(statearr_23300[(8)] = inst_23253);

return statearr_23300;
})();
var statearr_23301_23325 = state_23288__$1;
(statearr_23301_23325[(2)] = null);

(statearr_23301_23325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (9))){
var inst_23252 = (state_23288[(7)]);
var inst_23266 = cljs.core.vec.call(null,inst_23252);
var state_23288__$1 = state_23288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23288__$1,(11),out,inst_23266);
} else {
if((state_val_23289 === (5))){
var inst_23252 = (state_23288[(7)]);
var inst_23256 = (state_23288[(9)]);
var inst_23253 = (state_23288[(8)]);
var inst_23261 = (state_23288[(11)]);
var inst_23260 = (inst_23252[inst_23253] = inst_23256);
var inst_23261__$1 = (inst_23253 + (1));
var inst_23262 = (inst_23261__$1 < n);
var state_23288__$1 = (function (){var statearr_23302 = state_23288;
(statearr_23302[(12)] = inst_23260);

(statearr_23302[(11)] = inst_23261__$1);

return statearr_23302;
})();
if(cljs.core.truth_(inst_23262)){
var statearr_23303_23326 = state_23288__$1;
(statearr_23303_23326[(1)] = (8));

} else {
var statearr_23304_23327 = state_23288__$1;
(statearr_23304_23327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (14))){
var inst_23281 = (state_23288[(2)]);
var inst_23282 = cljs.core.async.close_BANG_.call(null,out);
var state_23288__$1 = (function (){var statearr_23306 = state_23288;
(statearr_23306[(13)] = inst_23281);

return statearr_23306;
})();
var statearr_23307_23328 = state_23288__$1;
(statearr_23307_23328[(2)] = inst_23282);

(statearr_23307_23328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (10))){
var inst_23272 = (state_23288[(2)]);
var state_23288__$1 = state_23288;
var statearr_23308_23329 = state_23288__$1;
(statearr_23308_23329[(2)] = inst_23272);

(statearr_23308_23329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (8))){
var inst_23252 = (state_23288[(7)]);
var inst_23261 = (state_23288[(11)]);
var tmp23305 = inst_23252;
var inst_23252__$1 = tmp23305;
var inst_23253 = inst_23261;
var state_23288__$1 = (function (){var statearr_23309 = state_23288;
(statearr_23309[(7)] = inst_23252__$1);

(statearr_23309[(8)] = inst_23253);

return statearr_23309;
})();
var statearr_23310_23330 = state_23288__$1;
(statearr_23310_23330[(2)] = null);

(statearr_23310_23330[(1)] = (2));


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
});})(c__19650__auto___23316,out))
;
return ((function (switch__19495__auto__,c__19650__auto___23316,out){
return (function() {
var cljs$core$async$state_machine__19496__auto__ = null;
var cljs$core$async$state_machine__19496__auto____0 = (function (){
var statearr_23311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23311[(0)] = cljs$core$async$state_machine__19496__auto__);

(statearr_23311[(1)] = (1));

return statearr_23311;
});
var cljs$core$async$state_machine__19496__auto____1 = (function (state_23288){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_23288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e23312){if((e23312 instanceof Object)){
var ex__19499__auto__ = e23312;
var statearr_23313_23331 = state_23288;
(statearr_23313_23331[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23332 = state_23288;
state_23288 = G__23332;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$state_machine__19496__auto__ = function(state_23288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19496__auto____1.call(this,state_23288);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19496__auto____0;
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19496__auto____1;
return cljs$core$async$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___23316,out))
})();
var state__19652__auto__ = (function (){var statearr_23314 = f__19651__auto__.call(null);
(statearr_23314[(6)] = c__19650__auto___23316);

return statearr_23314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___23316,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23334 = arguments.length;
switch (G__23334) {
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
var c__19650__auto___23404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___23404,out){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___23404,out){
return (function (state_23376){
var state_val_23377 = (state_23376[(1)]);
if((state_val_23377 === (7))){
var inst_23372 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23378_23405 = state_23376__$1;
(statearr_23378_23405[(2)] = inst_23372);

(statearr_23378_23405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (1))){
var inst_23335 = [];
var inst_23336 = inst_23335;
var inst_23337 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23376__$1 = (function (){var statearr_23379 = state_23376;
(statearr_23379[(7)] = inst_23336);

(statearr_23379[(8)] = inst_23337);

return statearr_23379;
})();
var statearr_23380_23406 = state_23376__$1;
(statearr_23380_23406[(2)] = null);

(statearr_23380_23406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (4))){
var inst_23340 = (state_23376[(9)]);
var inst_23340__$1 = (state_23376[(2)]);
var inst_23341 = (inst_23340__$1 == null);
var inst_23342 = cljs.core.not.call(null,inst_23341);
var state_23376__$1 = (function (){var statearr_23381 = state_23376;
(statearr_23381[(9)] = inst_23340__$1);

return statearr_23381;
})();
if(inst_23342){
var statearr_23382_23407 = state_23376__$1;
(statearr_23382_23407[(1)] = (5));

} else {
var statearr_23383_23408 = state_23376__$1;
(statearr_23383_23408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (15))){
var inst_23366 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23384_23409 = state_23376__$1;
(statearr_23384_23409[(2)] = inst_23366);

(statearr_23384_23409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (13))){
var state_23376__$1 = state_23376;
var statearr_23385_23410 = state_23376__$1;
(statearr_23385_23410[(2)] = null);

(statearr_23385_23410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (6))){
var inst_23336 = (state_23376[(7)]);
var inst_23361 = inst_23336.length;
var inst_23362 = (inst_23361 > (0));
var state_23376__$1 = state_23376;
if(cljs.core.truth_(inst_23362)){
var statearr_23386_23411 = state_23376__$1;
(statearr_23386_23411[(1)] = (12));

} else {
var statearr_23387_23412 = state_23376__$1;
(statearr_23387_23412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (3))){
var inst_23374 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23376__$1,inst_23374);
} else {
if((state_val_23377 === (12))){
var inst_23336 = (state_23376[(7)]);
var inst_23364 = cljs.core.vec.call(null,inst_23336);
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23376__$1,(15),out,inst_23364);
} else {
if((state_val_23377 === (2))){
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23376__$1,(4),ch);
} else {
if((state_val_23377 === (11))){
var inst_23340 = (state_23376[(9)]);
var inst_23344 = (state_23376[(10)]);
var inst_23354 = (state_23376[(2)]);
var inst_23355 = [];
var inst_23356 = inst_23355.push(inst_23340);
var inst_23336 = inst_23355;
var inst_23337 = inst_23344;
var state_23376__$1 = (function (){var statearr_23388 = state_23376;
(statearr_23388[(7)] = inst_23336);

(statearr_23388[(8)] = inst_23337);

(statearr_23388[(11)] = inst_23354);

(statearr_23388[(12)] = inst_23356);

return statearr_23388;
})();
var statearr_23389_23413 = state_23376__$1;
(statearr_23389_23413[(2)] = null);

(statearr_23389_23413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (9))){
var inst_23336 = (state_23376[(7)]);
var inst_23352 = cljs.core.vec.call(null,inst_23336);
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23376__$1,(11),out,inst_23352);
} else {
if((state_val_23377 === (5))){
var inst_23337 = (state_23376[(8)]);
var inst_23340 = (state_23376[(9)]);
var inst_23344 = (state_23376[(10)]);
var inst_23344__$1 = f.call(null,inst_23340);
var inst_23345 = cljs.core._EQ_.call(null,inst_23344__$1,inst_23337);
var inst_23346 = cljs.core.keyword_identical_QMARK_.call(null,inst_23337,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23347 = ((inst_23345) || (inst_23346));
var state_23376__$1 = (function (){var statearr_23390 = state_23376;
(statearr_23390[(10)] = inst_23344__$1);

return statearr_23390;
})();
if(cljs.core.truth_(inst_23347)){
var statearr_23391_23414 = state_23376__$1;
(statearr_23391_23414[(1)] = (8));

} else {
var statearr_23392_23415 = state_23376__$1;
(statearr_23392_23415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (14))){
var inst_23369 = (state_23376[(2)]);
var inst_23370 = cljs.core.async.close_BANG_.call(null,out);
var state_23376__$1 = (function (){var statearr_23394 = state_23376;
(statearr_23394[(13)] = inst_23369);

return statearr_23394;
})();
var statearr_23395_23416 = state_23376__$1;
(statearr_23395_23416[(2)] = inst_23370);

(statearr_23395_23416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (10))){
var inst_23359 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23396_23417 = state_23376__$1;
(statearr_23396_23417[(2)] = inst_23359);

(statearr_23396_23417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (8))){
var inst_23336 = (state_23376[(7)]);
var inst_23340 = (state_23376[(9)]);
var inst_23344 = (state_23376[(10)]);
var inst_23349 = inst_23336.push(inst_23340);
var tmp23393 = inst_23336;
var inst_23336__$1 = tmp23393;
var inst_23337 = inst_23344;
var state_23376__$1 = (function (){var statearr_23397 = state_23376;
(statearr_23397[(7)] = inst_23336__$1);

(statearr_23397[(8)] = inst_23337);

(statearr_23397[(14)] = inst_23349);

return statearr_23397;
})();
var statearr_23398_23418 = state_23376__$1;
(statearr_23398_23418[(2)] = null);

(statearr_23398_23418[(1)] = (2));


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
});})(c__19650__auto___23404,out))
;
return ((function (switch__19495__auto__,c__19650__auto___23404,out){
return (function() {
var cljs$core$async$state_machine__19496__auto__ = null;
var cljs$core$async$state_machine__19496__auto____0 = (function (){
var statearr_23399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23399[(0)] = cljs$core$async$state_machine__19496__auto__);

(statearr_23399[(1)] = (1));

return statearr_23399;
});
var cljs$core$async$state_machine__19496__auto____1 = (function (state_23376){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_23376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e23400){if((e23400 instanceof Object)){
var ex__19499__auto__ = e23400;
var statearr_23401_23419 = state_23376;
(statearr_23401_23419[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23420 = state_23376;
state_23376 = G__23420;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
cljs$core$async$state_machine__19496__auto__ = function(state_23376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19496__auto____1.call(this,state_23376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19496__auto____0;
cljs$core$async$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19496__auto____1;
return cljs$core$async$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___23404,out))
})();
var state__19652__auto__ = (function (){var statearr_23402 = f__19651__auto__.call(null);
(statearr_23402[(6)] = c__19650__auto___23404);

return statearr_23402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___23404,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
