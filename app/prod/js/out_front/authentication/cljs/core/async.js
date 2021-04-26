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
var G__4698 = arguments.length;
switch (G__4698) {
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
if(typeof cljs.core.async.t_cljs$core$async4699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4699 = (function (f,blockable,meta4700){
this.f = f;
this.blockable = blockable;
this.meta4700 = meta4700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4701,meta4700__$1){
var self__ = this;
var _4701__$1 = this;
return (new cljs.core.async.t_cljs$core$async4699(self__.f,self__.blockable,meta4700__$1));
});

cljs.core.async.t_cljs$core$async4699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4701){
var self__ = this;
var _4701__$1 = this;
return self__.meta4700;
});

cljs.core.async.t_cljs$core$async4699.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4699.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4699.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async4699.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async4699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta4700","meta4700",-2013455341,null)], null);
});

cljs.core.async.t_cljs$core$async4699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4699";

cljs.core.async.t_cljs$core$async4699.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4699");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4699.
 */
cljs.core.async.__GT_t_cljs$core$async4699 = (function cljs$core$async$__GT_t_cljs$core$async4699(f__$1,blockable__$1,meta4700){
return (new cljs.core.async.t_cljs$core$async4699(f__$1,blockable__$1,meta4700));
});

}

return (new cljs.core.async.t_cljs$core$async4699(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__4705 = arguments.length;
switch (G__4705) {
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
var G__4708 = arguments.length;
switch (G__4708) {
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
var G__4711 = arguments.length;
switch (G__4711) {
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
var val_4713 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_4713);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_4713,ret){
return (function (){
return fn1.call(null,val_4713);
});})(val_4713,ret))
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
var G__4715 = arguments.length;
switch (G__4715) {
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
var n__4374__auto___4717 = n;
var x_4718 = (0);
while(true){
if((x_4718 < n__4374__auto___4717)){
(a[x_4718] = (0));

var G__4719 = (x_4718 + (1));
x_4718 = G__4719;
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

var G__4720 = (i + (1));
i = G__4720;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async4721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4721 = (function (flag,meta4722){
this.flag = flag;
this.meta4722 = meta4722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_4723,meta4722__$1){
var self__ = this;
var _4723__$1 = this;
return (new cljs.core.async.t_cljs$core$async4721(self__.flag,meta4722__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_4723){
var self__ = this;
var _4723__$1 = this;
return self__.meta4722;
});})(flag))
;

cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4721.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta4722","meta4722",-808170877,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async4721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4721";

cljs.core.async.t_cljs$core$async4721.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4721");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4721.
 */
cljs.core.async.__GT_t_cljs$core$async4721 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async4721(flag__$1,meta4722){
return (new cljs.core.async.t_cljs$core$async4721(flag__$1,meta4722));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async4721(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async4724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4724 = (function (flag,cb,meta4725){
this.flag = flag;
this.cb = cb;
this.meta4725 = meta4725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4726,meta4725__$1){
var self__ = this;
var _4726__$1 = this;
return (new cljs.core.async.t_cljs$core$async4724(self__.flag,self__.cb,meta4725__$1));
});

cljs.core.async.t_cljs$core$async4724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4726){
var self__ = this;
var _4726__$1 = this;
return self__.meta4725;
});

cljs.core.async.t_cljs$core$async4724.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async4724.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async4724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta4725","meta4725",48797671,null)], null);
});

cljs.core.async.t_cljs$core$async4724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4724";

cljs.core.async.t_cljs$core$async4724.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4724");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4724.
 */
cljs.core.async.__GT_t_cljs$core$async4724 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async4724(flag__$1,cb__$1,meta4725){
return (new cljs.core.async.t_cljs$core$async4724(flag__$1,cb__$1,meta4725));
});

}

return (new cljs.core.async.t_cljs$core$async4724(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__4727_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4727_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4728_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4728_SHARP_,port], null));
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
var G__4729 = (i + (1));
i = G__4729;
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
var len__4497__auto___4735 = arguments.length;
var i__4498__auto___4736 = (0);
while(true){
if((i__4498__auto___4736 < len__4497__auto___4735)){
args__4500__auto__.push((arguments[i__4498__auto___4736]));

var G__4737 = (i__4498__auto___4736 + (1));
i__4498__auto___4736 = G__4737;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__4732){
var map__4733 = p__4732;
var map__4733__$1 = ((((!((map__4733 == null)))?(((((map__4733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4733):map__4733);
var opts = map__4733__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq4730){
var G__4731 = cljs.core.first.call(null,seq4730);
var seq4730__$1 = cljs.core.next.call(null,seq4730);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4731,seq4730__$1);
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
var G__4739 = arguments.length;
switch (G__4739) {
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
var c__2788__auto___4785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___4785){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___4785){
return (function (state_4763){
var state_val_4764 = (state_4763[(1)]);
if((state_val_4764 === (7))){
var inst_4759 = (state_4763[(2)]);
var state_4763__$1 = state_4763;
var statearr_4765_4786 = state_4763__$1;
(statearr_4765_4786[(2)] = inst_4759);

(statearr_4765_4786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4764 === (1))){
var state_4763__$1 = state_4763;
var statearr_4766_4787 = state_4763__$1;
(statearr_4766_4787[(2)] = null);

(statearr_4766_4787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4764 === (4))){
var inst_4742 = (state_4763[(7)]);
var inst_4742__$1 = (state_4763[(2)]);
var inst_4743 = (inst_4742__$1 == null);
var state_4763__$1 = (function (){var statearr_4767 = state_4763;
(statearr_4767[(7)] = inst_4742__$1);

return statearr_4767;
})();
if(cljs.core.truth_(inst_4743)){
var statearr_4768_4788 = state_4763__$1;
(statearr_4768_4788[(1)] = (5));

} else {
var statearr_4769_4789 = state_4763__$1;
(statearr_4769_4789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4764 === (13))){
var state_4763__$1 = state_4763;
var statearr_4770_4790 = state_4763__$1;
(statearr_4770_4790[(2)] = null);

(statearr_4770_4790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4764 === (6))){
var inst_4742 = (state_4763[(7)]);
var state_4763__$1 = state_4763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4763__$1,(11),to,inst_4742);
} else {
if((state_val_4764 === (3))){
var inst_4761 = (state_4763[(2)]);
var state_4763__$1 = state_4763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4763__$1,inst_4761);
} else {
if((state_val_4764 === (12))){
var state_4763__$1 = state_4763;
var statearr_4771_4791 = state_4763__$1;
(statearr_4771_4791[(2)] = null);

(statearr_4771_4791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4764 === (2))){
var state_4763__$1 = state_4763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4763__$1,(4),from);
} else {
if((state_val_4764 === (11))){
var inst_4752 = (state_4763[(2)]);
var state_4763__$1 = state_4763;
if(cljs.core.truth_(inst_4752)){
var statearr_4772_4792 = state_4763__$1;
(statearr_4772_4792[(1)] = (12));

} else {
var statearr_4773_4793 = state_4763__$1;
(statearr_4773_4793[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4764 === (9))){
var state_4763__$1 = state_4763;
var statearr_4774_4794 = state_4763__$1;
(statearr_4774_4794[(2)] = null);

(statearr_4774_4794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4764 === (5))){
var state_4763__$1 = state_4763;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4775_4795 = state_4763__$1;
(statearr_4775_4795[(1)] = (8));

} else {
var statearr_4776_4796 = state_4763__$1;
(statearr_4776_4796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4764 === (14))){
var inst_4757 = (state_4763[(2)]);
var state_4763__$1 = state_4763;
var statearr_4777_4797 = state_4763__$1;
(statearr_4777_4797[(2)] = inst_4757);

(statearr_4777_4797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4764 === (10))){
var inst_4749 = (state_4763[(2)]);
var state_4763__$1 = state_4763;
var statearr_4778_4798 = state_4763__$1;
(statearr_4778_4798[(2)] = inst_4749);

(statearr_4778_4798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4764 === (8))){
var inst_4746 = cljs.core.async.close_BANG_.call(null,to);
var state_4763__$1 = state_4763;
var statearr_4779_4799 = state_4763__$1;
(statearr_4779_4799[(2)] = inst_4746);

(statearr_4779_4799[(1)] = (10));


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
});})(c__2788__auto___4785))
;
return ((function (switch__2633__auto__,c__2788__auto___4785){
return (function() {
var cljs$core$async$state_machine__2634__auto__ = null;
var cljs$core$async$state_machine__2634__auto____0 = (function (){
var statearr_4780 = [null,null,null,null,null,null,null,null];
(statearr_4780[(0)] = cljs$core$async$state_machine__2634__auto__);

(statearr_4780[(1)] = (1));

return statearr_4780;
});
var cljs$core$async$state_machine__2634__auto____1 = (function (state_4763){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_4763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e4781){if((e4781 instanceof Object)){
var ex__2637__auto__ = e4781;
var statearr_4782_4800 = state_4763;
(statearr_4782_4800[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4801 = state_4763;
state_4763 = G__4801;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$state_machine__2634__auto__ = function(state_4763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2634__auto____1.call(this,state_4763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2634__auto____0;
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2634__auto____1;
return cljs$core$async$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___4785))
})();
var state__2790__auto__ = (function (){var statearr_4783 = f__2789__auto__.call(null);
(statearr_4783[(6)] = c__2788__auto___4785);

return statearr_4783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___4785))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__4802){
var vec__4803 = p__4802;
var v = cljs.core.nth.call(null,vec__4803,(0),null);
var p = cljs.core.nth.call(null,vec__4803,(1),null);
var job = vec__4803;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2788__auto___4974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___4974,res,vec__4803,v,p,job,jobs,results){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___4974,res,vec__4803,v,p,job,jobs,results){
return (function (state_4810){
var state_val_4811 = (state_4810[(1)]);
if((state_val_4811 === (1))){
var state_4810__$1 = state_4810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4810__$1,(2),res,v);
} else {
if((state_val_4811 === (2))){
var inst_4807 = (state_4810[(2)]);
var inst_4808 = cljs.core.async.close_BANG_.call(null,res);
var state_4810__$1 = (function (){var statearr_4812 = state_4810;
(statearr_4812[(7)] = inst_4807);

return statearr_4812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4810__$1,inst_4808);
} else {
return null;
}
}
});})(c__2788__auto___4974,res,vec__4803,v,p,job,jobs,results))
;
return ((function (switch__2633__auto__,c__2788__auto___4974,res,vec__4803,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0 = (function (){
var statearr_4813 = [null,null,null,null,null,null,null,null];
(statearr_4813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__);

(statearr_4813[(1)] = (1));

return statearr_4813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1 = (function (state_4810){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_4810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e4814){if((e4814 instanceof Object)){
var ex__2637__auto__ = e4814;
var statearr_4815_4975 = state_4810;
(statearr_4815_4975[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4976 = state_4810;
state_4810 = G__4976;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__ = function(state_4810){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1.call(this,state_4810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___4974,res,vec__4803,v,p,job,jobs,results))
})();
var state__2790__auto__ = (function (){var statearr_4816 = f__2789__auto__.call(null);
(statearr_4816[(6)] = c__2788__auto___4974);

return statearr_4816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___4974,res,vec__4803,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4817){
var vec__4818 = p__4817;
var v = cljs.core.nth.call(null,vec__4818,(0),null);
var p = cljs.core.nth.call(null,vec__4818,(1),null);
var job = vec__4818;
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
var n__4374__auto___4977 = n;
var __4978 = (0);
while(true){
if((__4978 < n__4374__auto___4977)){
var G__4821_4979 = type;
var G__4821_4980__$1 = (((G__4821_4979 instanceof cljs.core.Keyword))?G__4821_4979.fqn:null);
switch (G__4821_4980__$1) {
case "compute":
var c__2788__auto___4982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4978,c__2788__auto___4982,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (__4978,c__2788__auto___4982,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async){
return (function (state_4834){
var state_val_4835 = (state_4834[(1)]);
if((state_val_4835 === (1))){
var state_4834__$1 = state_4834;
var statearr_4836_4983 = state_4834__$1;
(statearr_4836_4983[(2)] = null);

(statearr_4836_4983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4835 === (2))){
var state_4834__$1 = state_4834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4834__$1,(4),jobs);
} else {
if((state_val_4835 === (3))){
var inst_4832 = (state_4834[(2)]);
var state_4834__$1 = state_4834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4834__$1,inst_4832);
} else {
if((state_val_4835 === (4))){
var inst_4824 = (state_4834[(2)]);
var inst_4825 = process.call(null,inst_4824);
var state_4834__$1 = state_4834;
if(cljs.core.truth_(inst_4825)){
var statearr_4837_4984 = state_4834__$1;
(statearr_4837_4984[(1)] = (5));

} else {
var statearr_4838_4985 = state_4834__$1;
(statearr_4838_4985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4835 === (5))){
var state_4834__$1 = state_4834;
var statearr_4839_4986 = state_4834__$1;
(statearr_4839_4986[(2)] = null);

(statearr_4839_4986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4835 === (6))){
var state_4834__$1 = state_4834;
var statearr_4840_4987 = state_4834__$1;
(statearr_4840_4987[(2)] = null);

(statearr_4840_4987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4835 === (7))){
var inst_4830 = (state_4834[(2)]);
var state_4834__$1 = state_4834;
var statearr_4841_4988 = state_4834__$1;
(statearr_4841_4988[(2)] = inst_4830);

(statearr_4841_4988[(1)] = (3));


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
});})(__4978,c__2788__auto___4982,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async))
;
return ((function (__4978,switch__2633__auto__,c__2788__auto___4982,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0 = (function (){
var statearr_4842 = [null,null,null,null,null,null,null];
(statearr_4842[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__);

(statearr_4842[(1)] = (1));

return statearr_4842;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1 = (function (state_4834){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_4834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e4843){if((e4843 instanceof Object)){
var ex__2637__auto__ = e4843;
var statearr_4844_4989 = state_4834;
(statearr_4844_4989[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4990 = state_4834;
state_4834 = G__4990;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__ = function(state_4834){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1.call(this,state_4834);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__;
})()
;})(__4978,switch__2633__auto__,c__2788__auto___4982,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async))
})();
var state__2790__auto__ = (function (){var statearr_4845 = f__2789__auto__.call(null);
(statearr_4845[(6)] = c__2788__auto___4982);

return statearr_4845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(__4978,c__2788__auto___4982,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async))
);


break;
case "async":
var c__2788__auto___4991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4978,c__2788__auto___4991,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (__4978,c__2788__auto___4991,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async){
return (function (state_4858){
var state_val_4859 = (state_4858[(1)]);
if((state_val_4859 === (1))){
var state_4858__$1 = state_4858;
var statearr_4860_4992 = state_4858__$1;
(statearr_4860_4992[(2)] = null);

(statearr_4860_4992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (2))){
var state_4858__$1 = state_4858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4858__$1,(4),jobs);
} else {
if((state_val_4859 === (3))){
var inst_4856 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4858__$1,inst_4856);
} else {
if((state_val_4859 === (4))){
var inst_4848 = (state_4858[(2)]);
var inst_4849 = async.call(null,inst_4848);
var state_4858__$1 = state_4858;
if(cljs.core.truth_(inst_4849)){
var statearr_4861_4993 = state_4858__$1;
(statearr_4861_4993[(1)] = (5));

} else {
var statearr_4862_4994 = state_4858__$1;
(statearr_4862_4994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (5))){
var state_4858__$1 = state_4858;
var statearr_4863_4995 = state_4858__$1;
(statearr_4863_4995[(2)] = null);

(statearr_4863_4995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (6))){
var state_4858__$1 = state_4858;
var statearr_4864_4996 = state_4858__$1;
(statearr_4864_4996[(2)] = null);

(statearr_4864_4996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4859 === (7))){
var inst_4854 = (state_4858[(2)]);
var state_4858__$1 = state_4858;
var statearr_4865_4997 = state_4858__$1;
(statearr_4865_4997[(2)] = inst_4854);

(statearr_4865_4997[(1)] = (3));


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
});})(__4978,c__2788__auto___4991,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async))
;
return ((function (__4978,switch__2633__auto__,c__2788__auto___4991,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0 = (function (){
var statearr_4866 = [null,null,null,null,null,null,null];
(statearr_4866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__);

(statearr_4866[(1)] = (1));

return statearr_4866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1 = (function (state_4858){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_4858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e4867){if((e4867 instanceof Object)){
var ex__2637__auto__ = e4867;
var statearr_4868_4998 = state_4858;
(statearr_4868_4998[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4999 = state_4858;
state_4858 = G__4999;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__ = function(state_4858){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1.call(this,state_4858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__;
})()
;})(__4978,switch__2633__auto__,c__2788__auto___4991,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async))
})();
var state__2790__auto__ = (function (){var statearr_4869 = f__2789__auto__.call(null);
(statearr_4869[(6)] = c__2788__auto___4991);

return statearr_4869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(__4978,c__2788__auto___4991,G__4821_4979,G__4821_4980__$1,n__4374__auto___4977,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4821_4980__$1)].join('')));

}

var G__5000 = (__4978 + (1));
__4978 = G__5000;
continue;
} else {
}
break;
}

var c__2788__auto___5001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___5001,jobs,results,process,async){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___5001,jobs,results,process,async){
return (function (state_4891){
var state_val_4892 = (state_4891[(1)]);
if((state_val_4892 === (1))){
var state_4891__$1 = state_4891;
var statearr_4893_5002 = state_4891__$1;
(statearr_4893_5002[(2)] = null);

(statearr_4893_5002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4892 === (2))){
var state_4891__$1 = state_4891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4891__$1,(4),from);
} else {
if((state_val_4892 === (3))){
var inst_4889 = (state_4891[(2)]);
var state_4891__$1 = state_4891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4891__$1,inst_4889);
} else {
if((state_val_4892 === (4))){
var inst_4872 = (state_4891[(7)]);
var inst_4872__$1 = (state_4891[(2)]);
var inst_4873 = (inst_4872__$1 == null);
var state_4891__$1 = (function (){var statearr_4894 = state_4891;
(statearr_4894[(7)] = inst_4872__$1);

return statearr_4894;
})();
if(cljs.core.truth_(inst_4873)){
var statearr_4895_5003 = state_4891__$1;
(statearr_4895_5003[(1)] = (5));

} else {
var statearr_4896_5004 = state_4891__$1;
(statearr_4896_5004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4892 === (5))){
var inst_4875 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4891__$1 = state_4891;
var statearr_4897_5005 = state_4891__$1;
(statearr_4897_5005[(2)] = inst_4875);

(statearr_4897_5005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4892 === (6))){
var inst_4877 = (state_4891[(8)]);
var inst_4872 = (state_4891[(7)]);
var inst_4877__$1 = cljs.core.async.chan.call(null,(1));
var inst_4878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4879 = [inst_4872,inst_4877__$1];
var inst_4880 = (new cljs.core.PersistentVector(null,2,(5),inst_4878,inst_4879,null));
var state_4891__$1 = (function (){var statearr_4898 = state_4891;
(statearr_4898[(8)] = inst_4877__$1);

return statearr_4898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4891__$1,(8),jobs,inst_4880);
} else {
if((state_val_4892 === (7))){
var inst_4887 = (state_4891[(2)]);
var state_4891__$1 = state_4891;
var statearr_4899_5006 = state_4891__$1;
(statearr_4899_5006[(2)] = inst_4887);

(statearr_4899_5006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4892 === (8))){
var inst_4877 = (state_4891[(8)]);
var inst_4882 = (state_4891[(2)]);
var state_4891__$1 = (function (){var statearr_4900 = state_4891;
(statearr_4900[(9)] = inst_4882);

return statearr_4900;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4891__$1,(9),results,inst_4877);
} else {
if((state_val_4892 === (9))){
var inst_4884 = (state_4891[(2)]);
var state_4891__$1 = (function (){var statearr_4901 = state_4891;
(statearr_4901[(10)] = inst_4884);

return statearr_4901;
})();
var statearr_4902_5007 = state_4891__$1;
(statearr_4902_5007[(2)] = null);

(statearr_4902_5007[(1)] = (2));


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
});})(c__2788__auto___5001,jobs,results,process,async))
;
return ((function (switch__2633__auto__,c__2788__auto___5001,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0 = (function (){
var statearr_4903 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__);

(statearr_4903[(1)] = (1));

return statearr_4903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1 = (function (state_4891){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_4891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e4904){if((e4904 instanceof Object)){
var ex__2637__auto__ = e4904;
var statearr_4905_5008 = state_4891;
(statearr_4905_5008[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5009 = state_4891;
state_4891 = G__5009;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__ = function(state_4891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1.call(this,state_4891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___5001,jobs,results,process,async))
})();
var state__2790__auto__ = (function (){var statearr_4906 = f__2789__auto__.call(null);
(statearr_4906[(6)] = c__2788__auto___5001);

return statearr_4906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___5001,jobs,results,process,async))
);


var c__2788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto__,jobs,results,process,async){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto__,jobs,results,process,async){
return (function (state_4944){
var state_val_4945 = (state_4944[(1)]);
if((state_val_4945 === (7))){
var inst_4940 = (state_4944[(2)]);
var state_4944__$1 = state_4944;
var statearr_4946_5010 = state_4944__$1;
(statearr_4946_5010[(2)] = inst_4940);

(statearr_4946_5010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (20))){
var state_4944__$1 = state_4944;
var statearr_4947_5011 = state_4944__$1;
(statearr_4947_5011[(2)] = null);

(statearr_4947_5011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (1))){
var state_4944__$1 = state_4944;
var statearr_4948_5012 = state_4944__$1;
(statearr_4948_5012[(2)] = null);

(statearr_4948_5012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (4))){
var inst_4909 = (state_4944[(7)]);
var inst_4909__$1 = (state_4944[(2)]);
var inst_4910 = (inst_4909__$1 == null);
var state_4944__$1 = (function (){var statearr_4949 = state_4944;
(statearr_4949[(7)] = inst_4909__$1);

return statearr_4949;
})();
if(cljs.core.truth_(inst_4910)){
var statearr_4950_5013 = state_4944__$1;
(statearr_4950_5013[(1)] = (5));

} else {
var statearr_4951_5014 = state_4944__$1;
(statearr_4951_5014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (15))){
var inst_4922 = (state_4944[(8)]);
var state_4944__$1 = state_4944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4944__$1,(18),to,inst_4922);
} else {
if((state_val_4945 === (21))){
var inst_4935 = (state_4944[(2)]);
var state_4944__$1 = state_4944;
var statearr_4952_5015 = state_4944__$1;
(statearr_4952_5015[(2)] = inst_4935);

(statearr_4952_5015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (13))){
var inst_4937 = (state_4944[(2)]);
var state_4944__$1 = (function (){var statearr_4953 = state_4944;
(statearr_4953[(9)] = inst_4937);

return statearr_4953;
})();
var statearr_4954_5016 = state_4944__$1;
(statearr_4954_5016[(2)] = null);

(statearr_4954_5016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (6))){
var inst_4909 = (state_4944[(7)]);
var state_4944__$1 = state_4944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4944__$1,(11),inst_4909);
} else {
if((state_val_4945 === (17))){
var inst_4930 = (state_4944[(2)]);
var state_4944__$1 = state_4944;
if(cljs.core.truth_(inst_4930)){
var statearr_4955_5017 = state_4944__$1;
(statearr_4955_5017[(1)] = (19));

} else {
var statearr_4956_5018 = state_4944__$1;
(statearr_4956_5018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (3))){
var inst_4942 = (state_4944[(2)]);
var state_4944__$1 = state_4944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4944__$1,inst_4942);
} else {
if((state_val_4945 === (12))){
var inst_4919 = (state_4944[(10)]);
var state_4944__$1 = state_4944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4944__$1,(14),inst_4919);
} else {
if((state_val_4945 === (2))){
var state_4944__$1 = state_4944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4944__$1,(4),results);
} else {
if((state_val_4945 === (19))){
var state_4944__$1 = state_4944;
var statearr_4957_5019 = state_4944__$1;
(statearr_4957_5019[(2)] = null);

(statearr_4957_5019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (11))){
var inst_4919 = (state_4944[(2)]);
var state_4944__$1 = (function (){var statearr_4958 = state_4944;
(statearr_4958[(10)] = inst_4919);

return statearr_4958;
})();
var statearr_4959_5020 = state_4944__$1;
(statearr_4959_5020[(2)] = null);

(statearr_4959_5020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (9))){
var state_4944__$1 = state_4944;
var statearr_4960_5021 = state_4944__$1;
(statearr_4960_5021[(2)] = null);

(statearr_4960_5021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (5))){
var state_4944__$1 = state_4944;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4961_5022 = state_4944__$1;
(statearr_4961_5022[(1)] = (8));

} else {
var statearr_4962_5023 = state_4944__$1;
(statearr_4962_5023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (14))){
var inst_4924 = (state_4944[(11)]);
var inst_4922 = (state_4944[(8)]);
var inst_4922__$1 = (state_4944[(2)]);
var inst_4923 = (inst_4922__$1 == null);
var inst_4924__$1 = cljs.core.not.call(null,inst_4923);
var state_4944__$1 = (function (){var statearr_4963 = state_4944;
(statearr_4963[(11)] = inst_4924__$1);

(statearr_4963[(8)] = inst_4922__$1);

return statearr_4963;
})();
if(inst_4924__$1){
var statearr_4964_5024 = state_4944__$1;
(statearr_4964_5024[(1)] = (15));

} else {
var statearr_4965_5025 = state_4944__$1;
(statearr_4965_5025[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (16))){
var inst_4924 = (state_4944[(11)]);
var state_4944__$1 = state_4944;
var statearr_4966_5026 = state_4944__$1;
(statearr_4966_5026[(2)] = inst_4924);

(statearr_4966_5026[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (10))){
var inst_4916 = (state_4944[(2)]);
var state_4944__$1 = state_4944;
var statearr_4967_5027 = state_4944__$1;
(statearr_4967_5027[(2)] = inst_4916);

(statearr_4967_5027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (18))){
var inst_4927 = (state_4944[(2)]);
var state_4944__$1 = state_4944;
var statearr_4968_5028 = state_4944__$1;
(statearr_4968_5028[(2)] = inst_4927);

(statearr_4968_5028[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4945 === (8))){
var inst_4913 = cljs.core.async.close_BANG_.call(null,to);
var state_4944__$1 = state_4944;
var statearr_4969_5029 = state_4944__$1;
(statearr_4969_5029[(2)] = inst_4913);

(statearr_4969_5029[(1)] = (10));


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
});})(c__2788__auto__,jobs,results,process,async))
;
return ((function (switch__2633__auto__,c__2788__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0 = (function (){
var statearr_4970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__);

(statearr_4970[(1)] = (1));

return statearr_4970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1 = (function (state_4944){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_4944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e4971){if((e4971 instanceof Object)){
var ex__2637__auto__ = e4971;
var statearr_4972_5030 = state_4944;
(statearr_4972_5030[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5031 = state_4944;
state_4944 = G__5031;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__ = function(state_4944){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1.call(this,state_4944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2634__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__,jobs,results,process,async))
})();
var state__2790__auto__ = (function (){var statearr_4973 = f__2789__auto__.call(null);
(statearr_4973[(6)] = c__2788__auto__);

return statearr_4973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__,jobs,results,process,async))
);

return c__2788__auto__;
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
var G__5033 = arguments.length;
switch (G__5033) {
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
var G__5036 = arguments.length;
switch (G__5036) {
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
var G__5039 = arguments.length;
switch (G__5039) {
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
var c__2788__auto___5088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___5088,tc,fc){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___5088,tc,fc){
return (function (state_5065){
var state_val_5066 = (state_5065[(1)]);
if((state_val_5066 === (7))){
var inst_5061 = (state_5065[(2)]);
var state_5065__$1 = state_5065;
var statearr_5067_5089 = state_5065__$1;
(statearr_5067_5089[(2)] = inst_5061);

(statearr_5067_5089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5066 === (1))){
var state_5065__$1 = state_5065;
var statearr_5068_5090 = state_5065__$1;
(statearr_5068_5090[(2)] = null);

(statearr_5068_5090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5066 === (4))){
var inst_5042 = (state_5065[(7)]);
var inst_5042__$1 = (state_5065[(2)]);
var inst_5043 = (inst_5042__$1 == null);
var state_5065__$1 = (function (){var statearr_5069 = state_5065;
(statearr_5069[(7)] = inst_5042__$1);

return statearr_5069;
})();
if(cljs.core.truth_(inst_5043)){
var statearr_5070_5091 = state_5065__$1;
(statearr_5070_5091[(1)] = (5));

} else {
var statearr_5071_5092 = state_5065__$1;
(statearr_5071_5092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5066 === (13))){
var state_5065__$1 = state_5065;
var statearr_5072_5093 = state_5065__$1;
(statearr_5072_5093[(2)] = null);

(statearr_5072_5093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5066 === (6))){
var inst_5042 = (state_5065[(7)]);
var inst_5048 = p.call(null,inst_5042);
var state_5065__$1 = state_5065;
if(cljs.core.truth_(inst_5048)){
var statearr_5073_5094 = state_5065__$1;
(statearr_5073_5094[(1)] = (9));

} else {
var statearr_5074_5095 = state_5065__$1;
(statearr_5074_5095[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5066 === (3))){
var inst_5063 = (state_5065[(2)]);
var state_5065__$1 = state_5065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5065__$1,inst_5063);
} else {
if((state_val_5066 === (12))){
var state_5065__$1 = state_5065;
var statearr_5075_5096 = state_5065__$1;
(statearr_5075_5096[(2)] = null);

(statearr_5075_5096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5066 === (2))){
var state_5065__$1 = state_5065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5065__$1,(4),ch);
} else {
if((state_val_5066 === (11))){
var inst_5042 = (state_5065[(7)]);
var inst_5052 = (state_5065[(2)]);
var state_5065__$1 = state_5065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5065__$1,(8),inst_5052,inst_5042);
} else {
if((state_val_5066 === (9))){
var state_5065__$1 = state_5065;
var statearr_5076_5097 = state_5065__$1;
(statearr_5076_5097[(2)] = tc);

(statearr_5076_5097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5066 === (5))){
var inst_5045 = cljs.core.async.close_BANG_.call(null,tc);
var inst_5046 = cljs.core.async.close_BANG_.call(null,fc);
var state_5065__$1 = (function (){var statearr_5077 = state_5065;
(statearr_5077[(8)] = inst_5045);

return statearr_5077;
})();
var statearr_5078_5098 = state_5065__$1;
(statearr_5078_5098[(2)] = inst_5046);

(statearr_5078_5098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5066 === (14))){
var inst_5059 = (state_5065[(2)]);
var state_5065__$1 = state_5065;
var statearr_5079_5099 = state_5065__$1;
(statearr_5079_5099[(2)] = inst_5059);

(statearr_5079_5099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5066 === (10))){
var state_5065__$1 = state_5065;
var statearr_5080_5100 = state_5065__$1;
(statearr_5080_5100[(2)] = fc);

(statearr_5080_5100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5066 === (8))){
var inst_5054 = (state_5065[(2)]);
var state_5065__$1 = state_5065;
if(cljs.core.truth_(inst_5054)){
var statearr_5081_5101 = state_5065__$1;
(statearr_5081_5101[(1)] = (12));

} else {
var statearr_5082_5102 = state_5065__$1;
(statearr_5082_5102[(1)] = (13));

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
});})(c__2788__auto___5088,tc,fc))
;
return ((function (switch__2633__auto__,c__2788__auto___5088,tc,fc){
return (function() {
var cljs$core$async$state_machine__2634__auto__ = null;
var cljs$core$async$state_machine__2634__auto____0 = (function (){
var statearr_5083 = [null,null,null,null,null,null,null,null,null];
(statearr_5083[(0)] = cljs$core$async$state_machine__2634__auto__);

(statearr_5083[(1)] = (1));

return statearr_5083;
});
var cljs$core$async$state_machine__2634__auto____1 = (function (state_5065){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_5065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e5084){if((e5084 instanceof Object)){
var ex__2637__auto__ = e5084;
var statearr_5085_5103 = state_5065;
(statearr_5085_5103[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5104 = state_5065;
state_5065 = G__5104;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$state_machine__2634__auto__ = function(state_5065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2634__auto____1.call(this,state_5065);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2634__auto____0;
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2634__auto____1;
return cljs$core$async$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___5088,tc,fc))
})();
var state__2790__auto__ = (function (){var statearr_5086 = f__2789__auto__.call(null);
(statearr_5086[(6)] = c__2788__auto___5088);

return statearr_5086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___5088,tc,fc))
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
var c__2788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto__){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto__){
return (function (state_5125){
var state_val_5126 = (state_5125[(1)]);
if((state_val_5126 === (7))){
var inst_5121 = (state_5125[(2)]);
var state_5125__$1 = state_5125;
var statearr_5127_5145 = state_5125__$1;
(statearr_5127_5145[(2)] = inst_5121);

(statearr_5127_5145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5126 === (1))){
var inst_5105 = init;
var state_5125__$1 = (function (){var statearr_5128 = state_5125;
(statearr_5128[(7)] = inst_5105);

return statearr_5128;
})();
var statearr_5129_5146 = state_5125__$1;
(statearr_5129_5146[(2)] = null);

(statearr_5129_5146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5126 === (4))){
var inst_5108 = (state_5125[(8)]);
var inst_5108__$1 = (state_5125[(2)]);
var inst_5109 = (inst_5108__$1 == null);
var state_5125__$1 = (function (){var statearr_5130 = state_5125;
(statearr_5130[(8)] = inst_5108__$1);

return statearr_5130;
})();
if(cljs.core.truth_(inst_5109)){
var statearr_5131_5147 = state_5125__$1;
(statearr_5131_5147[(1)] = (5));

} else {
var statearr_5132_5148 = state_5125__$1;
(statearr_5132_5148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5126 === (6))){
var inst_5108 = (state_5125[(8)]);
var inst_5105 = (state_5125[(7)]);
var inst_5112 = (state_5125[(9)]);
var inst_5112__$1 = f.call(null,inst_5105,inst_5108);
var inst_5113 = cljs.core.reduced_QMARK_.call(null,inst_5112__$1);
var state_5125__$1 = (function (){var statearr_5133 = state_5125;
(statearr_5133[(9)] = inst_5112__$1);

return statearr_5133;
})();
if(inst_5113){
var statearr_5134_5149 = state_5125__$1;
(statearr_5134_5149[(1)] = (8));

} else {
var statearr_5135_5150 = state_5125__$1;
(statearr_5135_5150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5126 === (3))){
var inst_5123 = (state_5125[(2)]);
var state_5125__$1 = state_5125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5125__$1,inst_5123);
} else {
if((state_val_5126 === (2))){
var state_5125__$1 = state_5125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5125__$1,(4),ch);
} else {
if((state_val_5126 === (9))){
var inst_5112 = (state_5125[(9)]);
var inst_5105 = inst_5112;
var state_5125__$1 = (function (){var statearr_5136 = state_5125;
(statearr_5136[(7)] = inst_5105);

return statearr_5136;
})();
var statearr_5137_5151 = state_5125__$1;
(statearr_5137_5151[(2)] = null);

(statearr_5137_5151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5126 === (5))){
var inst_5105 = (state_5125[(7)]);
var state_5125__$1 = state_5125;
var statearr_5138_5152 = state_5125__$1;
(statearr_5138_5152[(2)] = inst_5105);

(statearr_5138_5152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5126 === (10))){
var inst_5119 = (state_5125[(2)]);
var state_5125__$1 = state_5125;
var statearr_5139_5153 = state_5125__$1;
(statearr_5139_5153[(2)] = inst_5119);

(statearr_5139_5153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5126 === (8))){
var inst_5112 = (state_5125[(9)]);
var inst_5115 = cljs.core.deref.call(null,inst_5112);
var state_5125__$1 = state_5125;
var statearr_5140_5154 = state_5125__$1;
(statearr_5140_5154[(2)] = inst_5115);

(statearr_5140_5154[(1)] = (10));


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
});})(c__2788__auto__))
;
return ((function (switch__2633__auto__,c__2788__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__2634__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2634__auto____0 = (function (){
var statearr_5141 = [null,null,null,null,null,null,null,null,null,null];
(statearr_5141[(0)] = cljs$core$async$reduce_$_state_machine__2634__auto__);

(statearr_5141[(1)] = (1));

return statearr_5141;
});
var cljs$core$async$reduce_$_state_machine__2634__auto____1 = (function (state_5125){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_5125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e5142){if((e5142 instanceof Object)){
var ex__2637__auto__ = e5142;
var statearr_5143_5155 = state_5125;
(statearr_5143_5155[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5156 = state_5125;
state_5125 = G__5156;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2634__auto__ = function(state_5125){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2634__auto____1.call(this,state_5125);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2634__auto____0;
cljs$core$async$reduce_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2634__auto____1;
return cljs$core$async$reduce_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__))
})();
var state__2790__auto__ = (function (){var statearr_5144 = f__2789__auto__.call(null);
(statearr_5144[(6)] = c__2788__auto__);

return statearr_5144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__))
);

return c__2788__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__2788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto__,f__$1){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto__,f__$1){
return (function (state_5162){
var state_val_5163 = (state_5162[(1)]);
if((state_val_5163 === (1))){
var inst_5157 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_5162__$1 = state_5162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5162__$1,(2),inst_5157);
} else {
if((state_val_5163 === (2))){
var inst_5159 = (state_5162[(2)]);
var inst_5160 = f__$1.call(null,inst_5159);
var state_5162__$1 = state_5162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5162__$1,inst_5160);
} else {
return null;
}
}
});})(c__2788__auto__,f__$1))
;
return ((function (switch__2633__auto__,c__2788__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__2634__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2634__auto____0 = (function (){
var statearr_5164 = [null,null,null,null,null,null,null];
(statearr_5164[(0)] = cljs$core$async$transduce_$_state_machine__2634__auto__);

(statearr_5164[(1)] = (1));

return statearr_5164;
});
var cljs$core$async$transduce_$_state_machine__2634__auto____1 = (function (state_5162){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_5162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e5165){if((e5165 instanceof Object)){
var ex__2637__auto__ = e5165;
var statearr_5166_5168 = state_5162;
(statearr_5166_5168[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5169 = state_5162;
state_5162 = G__5169;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2634__auto__ = function(state_5162){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2634__auto____1.call(this,state_5162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2634__auto____0;
cljs$core$async$transduce_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2634__auto____1;
return cljs$core$async$transduce_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__,f__$1))
})();
var state__2790__auto__ = (function (){var statearr_5167 = f__2789__auto__.call(null);
(statearr_5167[(6)] = c__2788__auto__);

return statearr_5167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__,f__$1))
);

return c__2788__auto__;
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
var G__5171 = arguments.length;
switch (G__5171) {
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
var c__2788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto__){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto__){
return (function (state_5196){
var state_val_5197 = (state_5196[(1)]);
if((state_val_5197 === (7))){
var inst_5178 = (state_5196[(2)]);
var state_5196__$1 = state_5196;
var statearr_5198_5219 = state_5196__$1;
(statearr_5198_5219[(2)] = inst_5178);

(statearr_5198_5219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5197 === (1))){
var inst_5172 = cljs.core.seq.call(null,coll);
var inst_5173 = inst_5172;
var state_5196__$1 = (function (){var statearr_5199 = state_5196;
(statearr_5199[(7)] = inst_5173);

return statearr_5199;
})();
var statearr_5200_5220 = state_5196__$1;
(statearr_5200_5220[(2)] = null);

(statearr_5200_5220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5197 === (4))){
var inst_5173 = (state_5196[(7)]);
var inst_5176 = cljs.core.first.call(null,inst_5173);
var state_5196__$1 = state_5196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5196__$1,(7),ch,inst_5176);
} else {
if((state_val_5197 === (13))){
var inst_5190 = (state_5196[(2)]);
var state_5196__$1 = state_5196;
var statearr_5201_5221 = state_5196__$1;
(statearr_5201_5221[(2)] = inst_5190);

(statearr_5201_5221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5197 === (6))){
var inst_5181 = (state_5196[(2)]);
var state_5196__$1 = state_5196;
if(cljs.core.truth_(inst_5181)){
var statearr_5202_5222 = state_5196__$1;
(statearr_5202_5222[(1)] = (8));

} else {
var statearr_5203_5223 = state_5196__$1;
(statearr_5203_5223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5197 === (3))){
var inst_5194 = (state_5196[(2)]);
var state_5196__$1 = state_5196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5196__$1,inst_5194);
} else {
if((state_val_5197 === (12))){
var state_5196__$1 = state_5196;
var statearr_5204_5224 = state_5196__$1;
(statearr_5204_5224[(2)] = null);

(statearr_5204_5224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5197 === (2))){
var inst_5173 = (state_5196[(7)]);
var state_5196__$1 = state_5196;
if(cljs.core.truth_(inst_5173)){
var statearr_5205_5225 = state_5196__$1;
(statearr_5205_5225[(1)] = (4));

} else {
var statearr_5206_5226 = state_5196__$1;
(statearr_5206_5226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5197 === (11))){
var inst_5187 = cljs.core.async.close_BANG_.call(null,ch);
var state_5196__$1 = state_5196;
var statearr_5207_5227 = state_5196__$1;
(statearr_5207_5227[(2)] = inst_5187);

(statearr_5207_5227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5197 === (9))){
var state_5196__$1 = state_5196;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5208_5228 = state_5196__$1;
(statearr_5208_5228[(1)] = (11));

} else {
var statearr_5209_5229 = state_5196__$1;
(statearr_5209_5229[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5197 === (5))){
var inst_5173 = (state_5196[(7)]);
var state_5196__$1 = state_5196;
var statearr_5210_5230 = state_5196__$1;
(statearr_5210_5230[(2)] = inst_5173);

(statearr_5210_5230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5197 === (10))){
var inst_5192 = (state_5196[(2)]);
var state_5196__$1 = state_5196;
var statearr_5211_5231 = state_5196__$1;
(statearr_5211_5231[(2)] = inst_5192);

(statearr_5211_5231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5197 === (8))){
var inst_5173 = (state_5196[(7)]);
var inst_5183 = cljs.core.next.call(null,inst_5173);
var inst_5173__$1 = inst_5183;
var state_5196__$1 = (function (){var statearr_5212 = state_5196;
(statearr_5212[(7)] = inst_5173__$1);

return statearr_5212;
})();
var statearr_5213_5232 = state_5196__$1;
(statearr_5213_5232[(2)] = null);

(statearr_5213_5232[(1)] = (2));


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
});})(c__2788__auto__))
;
return ((function (switch__2633__auto__,c__2788__auto__){
return (function() {
var cljs$core$async$state_machine__2634__auto__ = null;
var cljs$core$async$state_machine__2634__auto____0 = (function (){
var statearr_5214 = [null,null,null,null,null,null,null,null];
(statearr_5214[(0)] = cljs$core$async$state_machine__2634__auto__);

(statearr_5214[(1)] = (1));

return statearr_5214;
});
var cljs$core$async$state_machine__2634__auto____1 = (function (state_5196){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_5196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e5215){if((e5215 instanceof Object)){
var ex__2637__auto__ = e5215;
var statearr_5216_5233 = state_5196;
(statearr_5216_5233[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5234 = state_5196;
state_5196 = G__5234;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$state_machine__2634__auto__ = function(state_5196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2634__auto____1.call(this,state_5196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2634__auto____0;
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2634__auto____1;
return cljs$core$async$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__))
})();
var state__2790__auto__ = (function (){var statearr_5217 = f__2789__auto__.call(null);
(statearr_5217[(6)] = c__2788__auto__);

return statearr_5217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__))
);

return c__2788__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async5235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5235 = (function (ch,cs,meta5236){
this.ch = ch;
this.cs = cs;
this.meta5236 = meta5236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_5237,meta5236__$1){
var self__ = this;
var _5237__$1 = this;
return (new cljs.core.async.t_cljs$core$async5235(self__.ch,self__.cs,meta5236__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async5235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_5237){
var self__ = this;
var _5237__$1 = this;
return self__.meta5236;
});})(cs))
;

cljs.core.async.t_cljs$core$async5235.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5235.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async5235.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5235.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async5235.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async5235.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async5235.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta5236","meta5236",-749500593,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async5235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5235";

cljs.core.async.t_cljs$core$async5235.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5235");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5235.
 */
cljs.core.async.__GT_t_cljs$core$async5235 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async5235(ch__$1,cs__$1,meta5236){
return (new cljs.core.async.t_cljs$core$async5235(ch__$1,cs__$1,meta5236));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async5235(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__2788__auto___5457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___5457,cs,m,dchan,dctr,done){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___5457,cs,m,dchan,dctr,done){
return (function (state_5372){
var state_val_5373 = (state_5372[(1)]);
if((state_val_5373 === (7))){
var inst_5368 = (state_5372[(2)]);
var state_5372__$1 = state_5372;
var statearr_5374_5458 = state_5372__$1;
(statearr_5374_5458[(2)] = inst_5368);

(statearr_5374_5458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (20))){
var inst_5271 = (state_5372[(7)]);
var inst_5283 = cljs.core.first.call(null,inst_5271);
var inst_5284 = cljs.core.nth.call(null,inst_5283,(0),null);
var inst_5285 = cljs.core.nth.call(null,inst_5283,(1),null);
var state_5372__$1 = (function (){var statearr_5375 = state_5372;
(statearr_5375[(8)] = inst_5284);

return statearr_5375;
})();
if(cljs.core.truth_(inst_5285)){
var statearr_5376_5459 = state_5372__$1;
(statearr_5376_5459[(1)] = (22));

} else {
var statearr_5377_5460 = state_5372__$1;
(statearr_5377_5460[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (27))){
var inst_5320 = (state_5372[(9)]);
var inst_5240 = (state_5372[(10)]);
var inst_5313 = (state_5372[(11)]);
var inst_5315 = (state_5372[(12)]);
var inst_5320__$1 = cljs.core._nth.call(null,inst_5313,inst_5315);
var inst_5321 = cljs.core.async.put_BANG_.call(null,inst_5320__$1,inst_5240,done);
var state_5372__$1 = (function (){var statearr_5378 = state_5372;
(statearr_5378[(9)] = inst_5320__$1);

return statearr_5378;
})();
if(cljs.core.truth_(inst_5321)){
var statearr_5379_5461 = state_5372__$1;
(statearr_5379_5461[(1)] = (30));

} else {
var statearr_5380_5462 = state_5372__$1;
(statearr_5380_5462[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (1))){
var state_5372__$1 = state_5372;
var statearr_5381_5463 = state_5372__$1;
(statearr_5381_5463[(2)] = null);

(statearr_5381_5463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (24))){
var inst_5271 = (state_5372[(7)]);
var inst_5290 = (state_5372[(2)]);
var inst_5291 = cljs.core.next.call(null,inst_5271);
var inst_5249 = inst_5291;
var inst_5250 = null;
var inst_5251 = (0);
var inst_5252 = (0);
var state_5372__$1 = (function (){var statearr_5382 = state_5372;
(statearr_5382[(13)] = inst_5290);

(statearr_5382[(14)] = inst_5249);

(statearr_5382[(15)] = inst_5250);

(statearr_5382[(16)] = inst_5252);

(statearr_5382[(17)] = inst_5251);

return statearr_5382;
})();
var statearr_5383_5464 = state_5372__$1;
(statearr_5383_5464[(2)] = null);

(statearr_5383_5464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (39))){
var state_5372__$1 = state_5372;
var statearr_5387_5465 = state_5372__$1;
(statearr_5387_5465[(2)] = null);

(statearr_5387_5465[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (4))){
var inst_5240 = (state_5372[(10)]);
var inst_5240__$1 = (state_5372[(2)]);
var inst_5241 = (inst_5240__$1 == null);
var state_5372__$1 = (function (){var statearr_5388 = state_5372;
(statearr_5388[(10)] = inst_5240__$1);

return statearr_5388;
})();
if(cljs.core.truth_(inst_5241)){
var statearr_5389_5466 = state_5372__$1;
(statearr_5389_5466[(1)] = (5));

} else {
var statearr_5390_5467 = state_5372__$1;
(statearr_5390_5467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (15))){
var inst_5249 = (state_5372[(14)]);
var inst_5250 = (state_5372[(15)]);
var inst_5252 = (state_5372[(16)]);
var inst_5251 = (state_5372[(17)]);
var inst_5267 = (state_5372[(2)]);
var inst_5268 = (inst_5252 + (1));
var tmp5384 = inst_5249;
var tmp5385 = inst_5250;
var tmp5386 = inst_5251;
var inst_5249__$1 = tmp5384;
var inst_5250__$1 = tmp5385;
var inst_5251__$1 = tmp5386;
var inst_5252__$1 = inst_5268;
var state_5372__$1 = (function (){var statearr_5391 = state_5372;
(statearr_5391[(14)] = inst_5249__$1);

(statearr_5391[(18)] = inst_5267);

(statearr_5391[(15)] = inst_5250__$1);

(statearr_5391[(16)] = inst_5252__$1);

(statearr_5391[(17)] = inst_5251__$1);

return statearr_5391;
})();
var statearr_5392_5468 = state_5372__$1;
(statearr_5392_5468[(2)] = null);

(statearr_5392_5468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (21))){
var inst_5294 = (state_5372[(2)]);
var state_5372__$1 = state_5372;
var statearr_5396_5469 = state_5372__$1;
(statearr_5396_5469[(2)] = inst_5294);

(statearr_5396_5469[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (31))){
var inst_5320 = (state_5372[(9)]);
var inst_5324 = done.call(null,null);
var inst_5325 = cljs.core.async.untap_STAR_.call(null,m,inst_5320);
var state_5372__$1 = (function (){var statearr_5397 = state_5372;
(statearr_5397[(19)] = inst_5324);

return statearr_5397;
})();
var statearr_5398_5470 = state_5372__$1;
(statearr_5398_5470[(2)] = inst_5325);

(statearr_5398_5470[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (32))){
var inst_5312 = (state_5372[(20)]);
var inst_5314 = (state_5372[(21)]);
var inst_5313 = (state_5372[(11)]);
var inst_5315 = (state_5372[(12)]);
var inst_5327 = (state_5372[(2)]);
var inst_5328 = (inst_5315 + (1));
var tmp5393 = inst_5312;
var tmp5394 = inst_5314;
var tmp5395 = inst_5313;
var inst_5312__$1 = tmp5393;
var inst_5313__$1 = tmp5395;
var inst_5314__$1 = tmp5394;
var inst_5315__$1 = inst_5328;
var state_5372__$1 = (function (){var statearr_5399 = state_5372;
(statearr_5399[(22)] = inst_5327);

(statearr_5399[(20)] = inst_5312__$1);

(statearr_5399[(21)] = inst_5314__$1);

(statearr_5399[(11)] = inst_5313__$1);

(statearr_5399[(12)] = inst_5315__$1);

return statearr_5399;
})();
var statearr_5400_5471 = state_5372__$1;
(statearr_5400_5471[(2)] = null);

(statearr_5400_5471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (40))){
var inst_5340 = (state_5372[(23)]);
var inst_5344 = done.call(null,null);
var inst_5345 = cljs.core.async.untap_STAR_.call(null,m,inst_5340);
var state_5372__$1 = (function (){var statearr_5401 = state_5372;
(statearr_5401[(24)] = inst_5344);

return statearr_5401;
})();
var statearr_5402_5472 = state_5372__$1;
(statearr_5402_5472[(2)] = inst_5345);

(statearr_5402_5472[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (33))){
var inst_5331 = (state_5372[(25)]);
var inst_5333 = cljs.core.chunked_seq_QMARK_.call(null,inst_5331);
var state_5372__$1 = state_5372;
if(inst_5333){
var statearr_5403_5473 = state_5372__$1;
(statearr_5403_5473[(1)] = (36));

} else {
var statearr_5404_5474 = state_5372__$1;
(statearr_5404_5474[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (13))){
var inst_5261 = (state_5372[(26)]);
var inst_5264 = cljs.core.async.close_BANG_.call(null,inst_5261);
var state_5372__$1 = state_5372;
var statearr_5405_5475 = state_5372__$1;
(statearr_5405_5475[(2)] = inst_5264);

(statearr_5405_5475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (22))){
var inst_5284 = (state_5372[(8)]);
var inst_5287 = cljs.core.async.close_BANG_.call(null,inst_5284);
var state_5372__$1 = state_5372;
var statearr_5406_5476 = state_5372__$1;
(statearr_5406_5476[(2)] = inst_5287);

(statearr_5406_5476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (36))){
var inst_5331 = (state_5372[(25)]);
var inst_5335 = cljs.core.chunk_first.call(null,inst_5331);
var inst_5336 = cljs.core.chunk_rest.call(null,inst_5331);
var inst_5337 = cljs.core.count.call(null,inst_5335);
var inst_5312 = inst_5336;
var inst_5313 = inst_5335;
var inst_5314 = inst_5337;
var inst_5315 = (0);
var state_5372__$1 = (function (){var statearr_5407 = state_5372;
(statearr_5407[(20)] = inst_5312);

(statearr_5407[(21)] = inst_5314);

(statearr_5407[(11)] = inst_5313);

(statearr_5407[(12)] = inst_5315);

return statearr_5407;
})();
var statearr_5408_5477 = state_5372__$1;
(statearr_5408_5477[(2)] = null);

(statearr_5408_5477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (41))){
var inst_5331 = (state_5372[(25)]);
var inst_5347 = (state_5372[(2)]);
var inst_5348 = cljs.core.next.call(null,inst_5331);
var inst_5312 = inst_5348;
var inst_5313 = null;
var inst_5314 = (0);
var inst_5315 = (0);
var state_5372__$1 = (function (){var statearr_5409 = state_5372;
(statearr_5409[(20)] = inst_5312);

(statearr_5409[(27)] = inst_5347);

(statearr_5409[(21)] = inst_5314);

(statearr_5409[(11)] = inst_5313);

(statearr_5409[(12)] = inst_5315);

return statearr_5409;
})();
var statearr_5410_5478 = state_5372__$1;
(statearr_5410_5478[(2)] = null);

(statearr_5410_5478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (43))){
var state_5372__$1 = state_5372;
var statearr_5411_5479 = state_5372__$1;
(statearr_5411_5479[(2)] = null);

(statearr_5411_5479[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (29))){
var inst_5356 = (state_5372[(2)]);
var state_5372__$1 = state_5372;
var statearr_5412_5480 = state_5372__$1;
(statearr_5412_5480[(2)] = inst_5356);

(statearr_5412_5480[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (44))){
var inst_5365 = (state_5372[(2)]);
var state_5372__$1 = (function (){var statearr_5413 = state_5372;
(statearr_5413[(28)] = inst_5365);

return statearr_5413;
})();
var statearr_5414_5481 = state_5372__$1;
(statearr_5414_5481[(2)] = null);

(statearr_5414_5481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (6))){
var inst_5304 = (state_5372[(29)]);
var inst_5303 = cljs.core.deref.call(null,cs);
var inst_5304__$1 = cljs.core.keys.call(null,inst_5303);
var inst_5305 = cljs.core.count.call(null,inst_5304__$1);
var inst_5306 = cljs.core.reset_BANG_.call(null,dctr,inst_5305);
var inst_5311 = cljs.core.seq.call(null,inst_5304__$1);
var inst_5312 = inst_5311;
var inst_5313 = null;
var inst_5314 = (0);
var inst_5315 = (0);
var state_5372__$1 = (function (){var statearr_5415 = state_5372;
(statearr_5415[(20)] = inst_5312);

(statearr_5415[(21)] = inst_5314);

(statearr_5415[(30)] = inst_5306);

(statearr_5415[(29)] = inst_5304__$1);

(statearr_5415[(11)] = inst_5313);

(statearr_5415[(12)] = inst_5315);

return statearr_5415;
})();
var statearr_5416_5482 = state_5372__$1;
(statearr_5416_5482[(2)] = null);

(statearr_5416_5482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (28))){
var inst_5312 = (state_5372[(20)]);
var inst_5331 = (state_5372[(25)]);
var inst_5331__$1 = cljs.core.seq.call(null,inst_5312);
var state_5372__$1 = (function (){var statearr_5417 = state_5372;
(statearr_5417[(25)] = inst_5331__$1);

return statearr_5417;
})();
if(inst_5331__$1){
var statearr_5418_5483 = state_5372__$1;
(statearr_5418_5483[(1)] = (33));

} else {
var statearr_5419_5484 = state_5372__$1;
(statearr_5419_5484[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (25))){
var inst_5314 = (state_5372[(21)]);
var inst_5315 = (state_5372[(12)]);
var inst_5317 = (inst_5315 < inst_5314);
var inst_5318 = inst_5317;
var state_5372__$1 = state_5372;
if(cljs.core.truth_(inst_5318)){
var statearr_5420_5485 = state_5372__$1;
(statearr_5420_5485[(1)] = (27));

} else {
var statearr_5421_5486 = state_5372__$1;
(statearr_5421_5486[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (34))){
var state_5372__$1 = state_5372;
var statearr_5422_5487 = state_5372__$1;
(statearr_5422_5487[(2)] = null);

(statearr_5422_5487[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (17))){
var state_5372__$1 = state_5372;
var statearr_5423_5488 = state_5372__$1;
(statearr_5423_5488[(2)] = null);

(statearr_5423_5488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (3))){
var inst_5370 = (state_5372[(2)]);
var state_5372__$1 = state_5372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5372__$1,inst_5370);
} else {
if((state_val_5373 === (12))){
var inst_5299 = (state_5372[(2)]);
var state_5372__$1 = state_5372;
var statearr_5424_5489 = state_5372__$1;
(statearr_5424_5489[(2)] = inst_5299);

(statearr_5424_5489[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (2))){
var state_5372__$1 = state_5372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5372__$1,(4),ch);
} else {
if((state_val_5373 === (23))){
var state_5372__$1 = state_5372;
var statearr_5425_5490 = state_5372__$1;
(statearr_5425_5490[(2)] = null);

(statearr_5425_5490[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (35))){
var inst_5354 = (state_5372[(2)]);
var state_5372__$1 = state_5372;
var statearr_5426_5491 = state_5372__$1;
(statearr_5426_5491[(2)] = inst_5354);

(statearr_5426_5491[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (19))){
var inst_5271 = (state_5372[(7)]);
var inst_5275 = cljs.core.chunk_first.call(null,inst_5271);
var inst_5276 = cljs.core.chunk_rest.call(null,inst_5271);
var inst_5277 = cljs.core.count.call(null,inst_5275);
var inst_5249 = inst_5276;
var inst_5250 = inst_5275;
var inst_5251 = inst_5277;
var inst_5252 = (0);
var state_5372__$1 = (function (){var statearr_5427 = state_5372;
(statearr_5427[(14)] = inst_5249);

(statearr_5427[(15)] = inst_5250);

(statearr_5427[(16)] = inst_5252);

(statearr_5427[(17)] = inst_5251);

return statearr_5427;
})();
var statearr_5428_5492 = state_5372__$1;
(statearr_5428_5492[(2)] = null);

(statearr_5428_5492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (11))){
var inst_5271 = (state_5372[(7)]);
var inst_5249 = (state_5372[(14)]);
var inst_5271__$1 = cljs.core.seq.call(null,inst_5249);
var state_5372__$1 = (function (){var statearr_5429 = state_5372;
(statearr_5429[(7)] = inst_5271__$1);

return statearr_5429;
})();
if(inst_5271__$1){
var statearr_5430_5493 = state_5372__$1;
(statearr_5430_5493[(1)] = (16));

} else {
var statearr_5431_5494 = state_5372__$1;
(statearr_5431_5494[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (9))){
var inst_5301 = (state_5372[(2)]);
var state_5372__$1 = state_5372;
var statearr_5432_5495 = state_5372__$1;
(statearr_5432_5495[(2)] = inst_5301);

(statearr_5432_5495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (5))){
var inst_5247 = cljs.core.deref.call(null,cs);
var inst_5248 = cljs.core.seq.call(null,inst_5247);
var inst_5249 = inst_5248;
var inst_5250 = null;
var inst_5251 = (0);
var inst_5252 = (0);
var state_5372__$1 = (function (){var statearr_5433 = state_5372;
(statearr_5433[(14)] = inst_5249);

(statearr_5433[(15)] = inst_5250);

(statearr_5433[(16)] = inst_5252);

(statearr_5433[(17)] = inst_5251);

return statearr_5433;
})();
var statearr_5434_5496 = state_5372__$1;
(statearr_5434_5496[(2)] = null);

(statearr_5434_5496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (14))){
var state_5372__$1 = state_5372;
var statearr_5435_5497 = state_5372__$1;
(statearr_5435_5497[(2)] = null);

(statearr_5435_5497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (45))){
var inst_5362 = (state_5372[(2)]);
var state_5372__$1 = state_5372;
var statearr_5436_5498 = state_5372__$1;
(statearr_5436_5498[(2)] = inst_5362);

(statearr_5436_5498[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (26))){
var inst_5304 = (state_5372[(29)]);
var inst_5358 = (state_5372[(2)]);
var inst_5359 = cljs.core.seq.call(null,inst_5304);
var state_5372__$1 = (function (){var statearr_5437 = state_5372;
(statearr_5437[(31)] = inst_5358);

return statearr_5437;
})();
if(inst_5359){
var statearr_5438_5499 = state_5372__$1;
(statearr_5438_5499[(1)] = (42));

} else {
var statearr_5439_5500 = state_5372__$1;
(statearr_5439_5500[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (16))){
var inst_5271 = (state_5372[(7)]);
var inst_5273 = cljs.core.chunked_seq_QMARK_.call(null,inst_5271);
var state_5372__$1 = state_5372;
if(inst_5273){
var statearr_5440_5501 = state_5372__$1;
(statearr_5440_5501[(1)] = (19));

} else {
var statearr_5441_5502 = state_5372__$1;
(statearr_5441_5502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (38))){
var inst_5351 = (state_5372[(2)]);
var state_5372__$1 = state_5372;
var statearr_5442_5503 = state_5372__$1;
(statearr_5442_5503[(2)] = inst_5351);

(statearr_5442_5503[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (30))){
var state_5372__$1 = state_5372;
var statearr_5443_5504 = state_5372__$1;
(statearr_5443_5504[(2)] = null);

(statearr_5443_5504[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (10))){
var inst_5250 = (state_5372[(15)]);
var inst_5252 = (state_5372[(16)]);
var inst_5260 = cljs.core._nth.call(null,inst_5250,inst_5252);
var inst_5261 = cljs.core.nth.call(null,inst_5260,(0),null);
var inst_5262 = cljs.core.nth.call(null,inst_5260,(1),null);
var state_5372__$1 = (function (){var statearr_5444 = state_5372;
(statearr_5444[(26)] = inst_5261);

return statearr_5444;
})();
if(cljs.core.truth_(inst_5262)){
var statearr_5445_5505 = state_5372__$1;
(statearr_5445_5505[(1)] = (13));

} else {
var statearr_5446_5506 = state_5372__$1;
(statearr_5446_5506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (18))){
var inst_5297 = (state_5372[(2)]);
var state_5372__$1 = state_5372;
var statearr_5447_5507 = state_5372__$1;
(statearr_5447_5507[(2)] = inst_5297);

(statearr_5447_5507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (42))){
var state_5372__$1 = state_5372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5372__$1,(45),dchan);
} else {
if((state_val_5373 === (37))){
var inst_5340 = (state_5372[(23)]);
var inst_5240 = (state_5372[(10)]);
var inst_5331 = (state_5372[(25)]);
var inst_5340__$1 = cljs.core.first.call(null,inst_5331);
var inst_5341 = cljs.core.async.put_BANG_.call(null,inst_5340__$1,inst_5240,done);
var state_5372__$1 = (function (){var statearr_5448 = state_5372;
(statearr_5448[(23)] = inst_5340__$1);

return statearr_5448;
})();
if(cljs.core.truth_(inst_5341)){
var statearr_5449_5508 = state_5372__$1;
(statearr_5449_5508[(1)] = (39));

} else {
var statearr_5450_5509 = state_5372__$1;
(statearr_5450_5509[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5373 === (8))){
var inst_5252 = (state_5372[(16)]);
var inst_5251 = (state_5372[(17)]);
var inst_5254 = (inst_5252 < inst_5251);
var inst_5255 = inst_5254;
var state_5372__$1 = state_5372;
if(cljs.core.truth_(inst_5255)){
var statearr_5451_5510 = state_5372__$1;
(statearr_5451_5510[(1)] = (10));

} else {
var statearr_5452_5511 = state_5372__$1;
(statearr_5452_5511[(1)] = (11));

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
});})(c__2788__auto___5457,cs,m,dchan,dctr,done))
;
return ((function (switch__2633__auto__,c__2788__auto___5457,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__2634__auto__ = null;
var cljs$core$async$mult_$_state_machine__2634__auto____0 = (function (){
var statearr_5453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5453[(0)] = cljs$core$async$mult_$_state_machine__2634__auto__);

(statearr_5453[(1)] = (1));

return statearr_5453;
});
var cljs$core$async$mult_$_state_machine__2634__auto____1 = (function (state_5372){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_5372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e5454){if((e5454 instanceof Object)){
var ex__2637__auto__ = e5454;
var statearr_5455_5512 = state_5372;
(statearr_5455_5512[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5513 = state_5372;
state_5372 = G__5513;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2634__auto__ = function(state_5372){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2634__auto____1.call(this,state_5372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2634__auto____0;
cljs$core$async$mult_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2634__auto____1;
return cljs$core$async$mult_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___5457,cs,m,dchan,dctr,done))
})();
var state__2790__auto__ = (function (){var statearr_5456 = f__2789__auto__.call(null);
(statearr_5456[(6)] = c__2788__auto___5457);

return statearr_5456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___5457,cs,m,dchan,dctr,done))
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
var G__5515 = arguments.length;
switch (G__5515) {
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
var len__4497__auto___5527 = arguments.length;
var i__4498__auto___5528 = (0);
while(true){
if((i__4498__auto___5528 < len__4497__auto___5527)){
args__4500__auto__.push((arguments[i__4498__auto___5528]));

var G__5529 = (i__4498__auto___5528 + (1));
i__4498__auto___5528 = G__5529;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__5521){
var map__5522 = p__5521;
var map__5522__$1 = ((((!((map__5522 == null)))?(((((map__5522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5522):map__5522);
var opts = map__5522__$1;
var statearr_5524_5530 = state;
(statearr_5524_5530[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__5522,map__5522__$1,opts){
return (function (val){
var statearr_5525_5531 = state;
(statearr_5525_5531[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__5522,map__5522__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_5526_5532 = state;
(statearr_5526_5532[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq5517){
var G__5518 = cljs.core.first.call(null,seq5517);
var seq5517__$1 = cljs.core.next.call(null,seq5517);
var G__5519 = cljs.core.first.call(null,seq5517__$1);
var seq5517__$2 = cljs.core.next.call(null,seq5517__$1);
var G__5520 = cljs.core.first.call(null,seq5517__$2);
var seq5517__$3 = cljs.core.next.call(null,seq5517__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5518,G__5519,G__5520,seq5517__$3);
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
if(typeof cljs.core.async.t_cljs$core$async5533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5533 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta5534){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta5534 = meta5534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5535,meta5534__$1){
var self__ = this;
var _5535__$1 = this;
return (new cljs.core.async.t_cljs$core$async5533(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta5534__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5535){
var self__ = this;
var _5535__$1 = this;
return self__.meta5534;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5533.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5533.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5533.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5533.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5533.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5533.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5533.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5533.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5533.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta5534","meta5534",-988523891,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5533";

cljs.core.async.t_cljs$core$async5533.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5533");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5533.
 */
cljs.core.async.__GT_t_cljs$core$async5533 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async5533(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta5534){
return (new cljs.core.async.t_cljs$core$async5533(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta5534));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async5533(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2788__auto___5697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___5697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___5697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_5637){
var state_val_5638 = (state_5637[(1)]);
if((state_val_5638 === (7))){
var inst_5552 = (state_5637[(2)]);
var state_5637__$1 = state_5637;
var statearr_5639_5698 = state_5637__$1;
(statearr_5639_5698[(2)] = inst_5552);

(statearr_5639_5698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (20))){
var inst_5564 = (state_5637[(7)]);
var state_5637__$1 = state_5637;
var statearr_5640_5699 = state_5637__$1;
(statearr_5640_5699[(2)] = inst_5564);

(statearr_5640_5699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (27))){
var state_5637__$1 = state_5637;
var statearr_5641_5700 = state_5637__$1;
(statearr_5641_5700[(2)] = null);

(statearr_5641_5700[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (1))){
var inst_5539 = (state_5637[(8)]);
var inst_5539__$1 = calc_state.call(null);
var inst_5541 = (inst_5539__$1 == null);
var inst_5542 = cljs.core.not.call(null,inst_5541);
var state_5637__$1 = (function (){var statearr_5642 = state_5637;
(statearr_5642[(8)] = inst_5539__$1);

return statearr_5642;
})();
if(inst_5542){
var statearr_5643_5701 = state_5637__$1;
(statearr_5643_5701[(1)] = (2));

} else {
var statearr_5644_5702 = state_5637__$1;
(statearr_5644_5702[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (24))){
var inst_5611 = (state_5637[(9)]);
var inst_5597 = (state_5637[(10)]);
var inst_5588 = (state_5637[(11)]);
var inst_5611__$1 = inst_5588.call(null,inst_5597);
var state_5637__$1 = (function (){var statearr_5645 = state_5637;
(statearr_5645[(9)] = inst_5611__$1);

return statearr_5645;
})();
if(cljs.core.truth_(inst_5611__$1)){
var statearr_5646_5703 = state_5637__$1;
(statearr_5646_5703[(1)] = (29));

} else {
var statearr_5647_5704 = state_5637__$1;
(statearr_5647_5704[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (4))){
var inst_5555 = (state_5637[(2)]);
var state_5637__$1 = state_5637;
if(cljs.core.truth_(inst_5555)){
var statearr_5648_5705 = state_5637__$1;
(statearr_5648_5705[(1)] = (8));

} else {
var statearr_5649_5706 = state_5637__$1;
(statearr_5649_5706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (15))){
var inst_5582 = (state_5637[(2)]);
var state_5637__$1 = state_5637;
if(cljs.core.truth_(inst_5582)){
var statearr_5650_5707 = state_5637__$1;
(statearr_5650_5707[(1)] = (19));

} else {
var statearr_5651_5708 = state_5637__$1;
(statearr_5651_5708[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (21))){
var inst_5587 = (state_5637[(12)]);
var inst_5587__$1 = (state_5637[(2)]);
var inst_5588 = cljs.core.get.call(null,inst_5587__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5589 = cljs.core.get.call(null,inst_5587__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5590 = cljs.core.get.call(null,inst_5587__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5637__$1 = (function (){var statearr_5652 = state_5637;
(statearr_5652[(12)] = inst_5587__$1);

(statearr_5652[(13)] = inst_5589);

(statearr_5652[(11)] = inst_5588);

return statearr_5652;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5637__$1,(22),inst_5590);
} else {
if((state_val_5638 === (31))){
var inst_5619 = (state_5637[(2)]);
var state_5637__$1 = state_5637;
if(cljs.core.truth_(inst_5619)){
var statearr_5653_5709 = state_5637__$1;
(statearr_5653_5709[(1)] = (32));

} else {
var statearr_5654_5710 = state_5637__$1;
(statearr_5654_5710[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (32))){
var inst_5596 = (state_5637[(14)]);
var state_5637__$1 = state_5637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5637__$1,(35),out,inst_5596);
} else {
if((state_val_5638 === (33))){
var inst_5587 = (state_5637[(12)]);
var inst_5564 = inst_5587;
var state_5637__$1 = (function (){var statearr_5655 = state_5637;
(statearr_5655[(7)] = inst_5564);

return statearr_5655;
})();
var statearr_5656_5711 = state_5637__$1;
(statearr_5656_5711[(2)] = null);

(statearr_5656_5711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (13))){
var inst_5564 = (state_5637[(7)]);
var inst_5571 = inst_5564.cljs$lang$protocol_mask$partition0$;
var inst_5572 = (inst_5571 & (64));
var inst_5573 = inst_5564.cljs$core$ISeq$;
var inst_5574 = (cljs.core.PROTOCOL_SENTINEL === inst_5573);
var inst_5575 = ((inst_5572) || (inst_5574));
var state_5637__$1 = state_5637;
if(cljs.core.truth_(inst_5575)){
var statearr_5657_5712 = state_5637__$1;
(statearr_5657_5712[(1)] = (16));

} else {
var statearr_5658_5713 = state_5637__$1;
(statearr_5658_5713[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (22))){
var inst_5597 = (state_5637[(10)]);
var inst_5596 = (state_5637[(14)]);
var inst_5595 = (state_5637[(2)]);
var inst_5596__$1 = cljs.core.nth.call(null,inst_5595,(0),null);
var inst_5597__$1 = cljs.core.nth.call(null,inst_5595,(1),null);
var inst_5598 = (inst_5596__$1 == null);
var inst_5599 = cljs.core._EQ_.call(null,inst_5597__$1,change);
var inst_5600 = ((inst_5598) || (inst_5599));
var state_5637__$1 = (function (){var statearr_5659 = state_5637;
(statearr_5659[(10)] = inst_5597__$1);

(statearr_5659[(14)] = inst_5596__$1);

return statearr_5659;
})();
if(cljs.core.truth_(inst_5600)){
var statearr_5660_5714 = state_5637__$1;
(statearr_5660_5714[(1)] = (23));

} else {
var statearr_5661_5715 = state_5637__$1;
(statearr_5661_5715[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (36))){
var inst_5587 = (state_5637[(12)]);
var inst_5564 = inst_5587;
var state_5637__$1 = (function (){var statearr_5662 = state_5637;
(statearr_5662[(7)] = inst_5564);

return statearr_5662;
})();
var statearr_5663_5716 = state_5637__$1;
(statearr_5663_5716[(2)] = null);

(statearr_5663_5716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (29))){
var inst_5611 = (state_5637[(9)]);
var state_5637__$1 = state_5637;
var statearr_5664_5717 = state_5637__$1;
(statearr_5664_5717[(2)] = inst_5611);

(statearr_5664_5717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (6))){
var state_5637__$1 = state_5637;
var statearr_5665_5718 = state_5637__$1;
(statearr_5665_5718[(2)] = false);

(statearr_5665_5718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (28))){
var inst_5607 = (state_5637[(2)]);
var inst_5608 = calc_state.call(null);
var inst_5564 = inst_5608;
var state_5637__$1 = (function (){var statearr_5666 = state_5637;
(statearr_5666[(15)] = inst_5607);

(statearr_5666[(7)] = inst_5564);

return statearr_5666;
})();
var statearr_5667_5719 = state_5637__$1;
(statearr_5667_5719[(2)] = null);

(statearr_5667_5719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (25))){
var inst_5633 = (state_5637[(2)]);
var state_5637__$1 = state_5637;
var statearr_5668_5720 = state_5637__$1;
(statearr_5668_5720[(2)] = inst_5633);

(statearr_5668_5720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (34))){
var inst_5631 = (state_5637[(2)]);
var state_5637__$1 = state_5637;
var statearr_5669_5721 = state_5637__$1;
(statearr_5669_5721[(2)] = inst_5631);

(statearr_5669_5721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (17))){
var state_5637__$1 = state_5637;
var statearr_5670_5722 = state_5637__$1;
(statearr_5670_5722[(2)] = false);

(statearr_5670_5722[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (3))){
var state_5637__$1 = state_5637;
var statearr_5671_5723 = state_5637__$1;
(statearr_5671_5723[(2)] = false);

(statearr_5671_5723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (12))){
var inst_5635 = (state_5637[(2)]);
var state_5637__$1 = state_5637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5637__$1,inst_5635);
} else {
if((state_val_5638 === (2))){
var inst_5539 = (state_5637[(8)]);
var inst_5544 = inst_5539.cljs$lang$protocol_mask$partition0$;
var inst_5545 = (inst_5544 & (64));
var inst_5546 = inst_5539.cljs$core$ISeq$;
var inst_5547 = (cljs.core.PROTOCOL_SENTINEL === inst_5546);
var inst_5548 = ((inst_5545) || (inst_5547));
var state_5637__$1 = state_5637;
if(cljs.core.truth_(inst_5548)){
var statearr_5672_5724 = state_5637__$1;
(statearr_5672_5724[(1)] = (5));

} else {
var statearr_5673_5725 = state_5637__$1;
(statearr_5673_5725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (23))){
var inst_5596 = (state_5637[(14)]);
var inst_5602 = (inst_5596 == null);
var state_5637__$1 = state_5637;
if(cljs.core.truth_(inst_5602)){
var statearr_5674_5726 = state_5637__$1;
(statearr_5674_5726[(1)] = (26));

} else {
var statearr_5675_5727 = state_5637__$1;
(statearr_5675_5727[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (35))){
var inst_5622 = (state_5637[(2)]);
var state_5637__$1 = state_5637;
if(cljs.core.truth_(inst_5622)){
var statearr_5676_5728 = state_5637__$1;
(statearr_5676_5728[(1)] = (36));

} else {
var statearr_5677_5729 = state_5637__$1;
(statearr_5677_5729[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (19))){
var inst_5564 = (state_5637[(7)]);
var inst_5584 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5564);
var state_5637__$1 = state_5637;
var statearr_5678_5730 = state_5637__$1;
(statearr_5678_5730[(2)] = inst_5584);

(statearr_5678_5730[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (11))){
var inst_5564 = (state_5637[(7)]);
var inst_5568 = (inst_5564 == null);
var inst_5569 = cljs.core.not.call(null,inst_5568);
var state_5637__$1 = state_5637;
if(inst_5569){
var statearr_5679_5731 = state_5637__$1;
(statearr_5679_5731[(1)] = (13));

} else {
var statearr_5680_5732 = state_5637__$1;
(statearr_5680_5732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (9))){
var inst_5539 = (state_5637[(8)]);
var state_5637__$1 = state_5637;
var statearr_5681_5733 = state_5637__$1;
(statearr_5681_5733[(2)] = inst_5539);

(statearr_5681_5733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (5))){
var state_5637__$1 = state_5637;
var statearr_5682_5734 = state_5637__$1;
(statearr_5682_5734[(2)] = true);

(statearr_5682_5734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (14))){
var state_5637__$1 = state_5637;
var statearr_5683_5735 = state_5637__$1;
(statearr_5683_5735[(2)] = false);

(statearr_5683_5735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (26))){
var inst_5597 = (state_5637[(10)]);
var inst_5604 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_5597);
var state_5637__$1 = state_5637;
var statearr_5684_5736 = state_5637__$1;
(statearr_5684_5736[(2)] = inst_5604);

(statearr_5684_5736[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (16))){
var state_5637__$1 = state_5637;
var statearr_5685_5737 = state_5637__$1;
(statearr_5685_5737[(2)] = true);

(statearr_5685_5737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (38))){
var inst_5627 = (state_5637[(2)]);
var state_5637__$1 = state_5637;
var statearr_5686_5738 = state_5637__$1;
(statearr_5686_5738[(2)] = inst_5627);

(statearr_5686_5738[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (30))){
var inst_5589 = (state_5637[(13)]);
var inst_5597 = (state_5637[(10)]);
var inst_5588 = (state_5637[(11)]);
var inst_5614 = cljs.core.empty_QMARK_.call(null,inst_5588);
var inst_5615 = inst_5589.call(null,inst_5597);
var inst_5616 = cljs.core.not.call(null,inst_5615);
var inst_5617 = ((inst_5614) && (inst_5616));
var state_5637__$1 = state_5637;
var statearr_5687_5739 = state_5637__$1;
(statearr_5687_5739[(2)] = inst_5617);

(statearr_5687_5739[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (10))){
var inst_5539 = (state_5637[(8)]);
var inst_5560 = (state_5637[(2)]);
var inst_5561 = cljs.core.get.call(null,inst_5560,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5562 = cljs.core.get.call(null,inst_5560,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5563 = cljs.core.get.call(null,inst_5560,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5564 = inst_5539;
var state_5637__$1 = (function (){var statearr_5688 = state_5637;
(statearr_5688[(16)] = inst_5562);

(statearr_5688[(17)] = inst_5563);

(statearr_5688[(18)] = inst_5561);

(statearr_5688[(7)] = inst_5564);

return statearr_5688;
})();
var statearr_5689_5740 = state_5637__$1;
(statearr_5689_5740[(2)] = null);

(statearr_5689_5740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (18))){
var inst_5579 = (state_5637[(2)]);
var state_5637__$1 = state_5637;
var statearr_5690_5741 = state_5637__$1;
(statearr_5690_5741[(2)] = inst_5579);

(statearr_5690_5741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (37))){
var state_5637__$1 = state_5637;
var statearr_5691_5742 = state_5637__$1;
(statearr_5691_5742[(2)] = null);

(statearr_5691_5742[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5638 === (8))){
var inst_5539 = (state_5637[(8)]);
var inst_5557 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5539);
var state_5637__$1 = state_5637;
var statearr_5692_5743 = state_5637__$1;
(statearr_5692_5743[(2)] = inst_5557);

(statearr_5692_5743[(1)] = (10));


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
});})(c__2788__auto___5697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__2633__auto__,c__2788__auto___5697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__2634__auto__ = null;
var cljs$core$async$mix_$_state_machine__2634__auto____0 = (function (){
var statearr_5693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5693[(0)] = cljs$core$async$mix_$_state_machine__2634__auto__);

(statearr_5693[(1)] = (1));

return statearr_5693;
});
var cljs$core$async$mix_$_state_machine__2634__auto____1 = (function (state_5637){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_5637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e5694){if((e5694 instanceof Object)){
var ex__2637__auto__ = e5694;
var statearr_5695_5744 = state_5637;
(statearr_5695_5744[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5745 = state_5637;
state_5637 = G__5745;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2634__auto__ = function(state_5637){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2634__auto____1.call(this,state_5637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2634__auto____0;
cljs$core$async$mix_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2634__auto____1;
return cljs$core$async$mix_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___5697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__2790__auto__ = (function (){var statearr_5696 = f__2789__auto__.call(null);
(statearr_5696[(6)] = c__2788__auto___5697);

return statearr_5696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___5697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__5747 = arguments.length;
switch (G__5747) {
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
var G__5751 = arguments.length;
switch (G__5751) {
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
return (function (p1__5749_SHARP_){
if(cljs.core.truth_(p1__5749_SHARP_.call(null,topic))){
return p1__5749_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5749_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async5752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5752 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5753){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5753 = meta5753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5754,meta5753__$1){
var self__ = this;
var _5754__$1 = this;
return (new cljs.core.async.t_cljs$core$async5752(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5753__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5754){
var self__ = this;
var _5754__$1 = this;
return self__.meta5753;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5752.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5752.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5752.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5752.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5752.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async5752.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5752.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5752.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5753","meta5753",1489252211,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5752";

cljs.core.async.t_cljs$core$async5752.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5752");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5752.
 */
cljs.core.async.__GT_t_cljs$core$async5752 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async5752(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5753){
return (new cljs.core.async.t_cljs$core$async5752(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5753));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async5752(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2788__auto___5872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___5872,mults,ensure_mult,p){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___5872,mults,ensure_mult,p){
return (function (state_5826){
var state_val_5827 = (state_5826[(1)]);
if((state_val_5827 === (7))){
var inst_5822 = (state_5826[(2)]);
var state_5826__$1 = state_5826;
var statearr_5828_5873 = state_5826__$1;
(statearr_5828_5873[(2)] = inst_5822);

(statearr_5828_5873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (20))){
var state_5826__$1 = state_5826;
var statearr_5829_5874 = state_5826__$1;
(statearr_5829_5874[(2)] = null);

(statearr_5829_5874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (1))){
var state_5826__$1 = state_5826;
var statearr_5830_5875 = state_5826__$1;
(statearr_5830_5875[(2)] = null);

(statearr_5830_5875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (24))){
var inst_5805 = (state_5826[(7)]);
var inst_5814 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5805);
var state_5826__$1 = state_5826;
var statearr_5831_5876 = state_5826__$1;
(statearr_5831_5876[(2)] = inst_5814);

(statearr_5831_5876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (4))){
var inst_5757 = (state_5826[(8)]);
var inst_5757__$1 = (state_5826[(2)]);
var inst_5758 = (inst_5757__$1 == null);
var state_5826__$1 = (function (){var statearr_5832 = state_5826;
(statearr_5832[(8)] = inst_5757__$1);

return statearr_5832;
})();
if(cljs.core.truth_(inst_5758)){
var statearr_5833_5877 = state_5826__$1;
(statearr_5833_5877[(1)] = (5));

} else {
var statearr_5834_5878 = state_5826__$1;
(statearr_5834_5878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (15))){
var inst_5799 = (state_5826[(2)]);
var state_5826__$1 = state_5826;
var statearr_5835_5879 = state_5826__$1;
(statearr_5835_5879[(2)] = inst_5799);

(statearr_5835_5879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (21))){
var inst_5819 = (state_5826[(2)]);
var state_5826__$1 = (function (){var statearr_5836 = state_5826;
(statearr_5836[(9)] = inst_5819);

return statearr_5836;
})();
var statearr_5837_5880 = state_5826__$1;
(statearr_5837_5880[(2)] = null);

(statearr_5837_5880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (13))){
var inst_5781 = (state_5826[(10)]);
var inst_5783 = cljs.core.chunked_seq_QMARK_.call(null,inst_5781);
var state_5826__$1 = state_5826;
if(inst_5783){
var statearr_5838_5881 = state_5826__$1;
(statearr_5838_5881[(1)] = (16));

} else {
var statearr_5839_5882 = state_5826__$1;
(statearr_5839_5882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (22))){
var inst_5811 = (state_5826[(2)]);
var state_5826__$1 = state_5826;
if(cljs.core.truth_(inst_5811)){
var statearr_5840_5883 = state_5826__$1;
(statearr_5840_5883[(1)] = (23));

} else {
var statearr_5841_5884 = state_5826__$1;
(statearr_5841_5884[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (6))){
var inst_5807 = (state_5826[(11)]);
var inst_5757 = (state_5826[(8)]);
var inst_5805 = (state_5826[(7)]);
var inst_5805__$1 = topic_fn.call(null,inst_5757);
var inst_5806 = cljs.core.deref.call(null,mults);
var inst_5807__$1 = cljs.core.get.call(null,inst_5806,inst_5805__$1);
var state_5826__$1 = (function (){var statearr_5842 = state_5826;
(statearr_5842[(11)] = inst_5807__$1);

(statearr_5842[(7)] = inst_5805__$1);

return statearr_5842;
})();
if(cljs.core.truth_(inst_5807__$1)){
var statearr_5843_5885 = state_5826__$1;
(statearr_5843_5885[(1)] = (19));

} else {
var statearr_5844_5886 = state_5826__$1;
(statearr_5844_5886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (25))){
var inst_5816 = (state_5826[(2)]);
var state_5826__$1 = state_5826;
var statearr_5845_5887 = state_5826__$1;
(statearr_5845_5887[(2)] = inst_5816);

(statearr_5845_5887[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (17))){
var inst_5781 = (state_5826[(10)]);
var inst_5790 = cljs.core.first.call(null,inst_5781);
var inst_5791 = cljs.core.async.muxch_STAR_.call(null,inst_5790);
var inst_5792 = cljs.core.async.close_BANG_.call(null,inst_5791);
var inst_5793 = cljs.core.next.call(null,inst_5781);
var inst_5767 = inst_5793;
var inst_5768 = null;
var inst_5769 = (0);
var inst_5770 = (0);
var state_5826__$1 = (function (){var statearr_5846 = state_5826;
(statearr_5846[(12)] = inst_5768);

(statearr_5846[(13)] = inst_5770);

(statearr_5846[(14)] = inst_5792);

(statearr_5846[(15)] = inst_5767);

(statearr_5846[(16)] = inst_5769);

return statearr_5846;
})();
var statearr_5847_5888 = state_5826__$1;
(statearr_5847_5888[(2)] = null);

(statearr_5847_5888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (3))){
var inst_5824 = (state_5826[(2)]);
var state_5826__$1 = state_5826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5826__$1,inst_5824);
} else {
if((state_val_5827 === (12))){
var inst_5801 = (state_5826[(2)]);
var state_5826__$1 = state_5826;
var statearr_5848_5889 = state_5826__$1;
(statearr_5848_5889[(2)] = inst_5801);

(statearr_5848_5889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (2))){
var state_5826__$1 = state_5826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5826__$1,(4),ch);
} else {
if((state_val_5827 === (23))){
var state_5826__$1 = state_5826;
var statearr_5849_5890 = state_5826__$1;
(statearr_5849_5890[(2)] = null);

(statearr_5849_5890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (19))){
var inst_5807 = (state_5826[(11)]);
var inst_5757 = (state_5826[(8)]);
var inst_5809 = cljs.core.async.muxch_STAR_.call(null,inst_5807);
var state_5826__$1 = state_5826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5826__$1,(22),inst_5809,inst_5757);
} else {
if((state_val_5827 === (11))){
var inst_5781 = (state_5826[(10)]);
var inst_5767 = (state_5826[(15)]);
var inst_5781__$1 = cljs.core.seq.call(null,inst_5767);
var state_5826__$1 = (function (){var statearr_5850 = state_5826;
(statearr_5850[(10)] = inst_5781__$1);

return statearr_5850;
})();
if(inst_5781__$1){
var statearr_5851_5891 = state_5826__$1;
(statearr_5851_5891[(1)] = (13));

} else {
var statearr_5852_5892 = state_5826__$1;
(statearr_5852_5892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (9))){
var inst_5803 = (state_5826[(2)]);
var state_5826__$1 = state_5826;
var statearr_5853_5893 = state_5826__$1;
(statearr_5853_5893[(2)] = inst_5803);

(statearr_5853_5893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (5))){
var inst_5764 = cljs.core.deref.call(null,mults);
var inst_5765 = cljs.core.vals.call(null,inst_5764);
var inst_5766 = cljs.core.seq.call(null,inst_5765);
var inst_5767 = inst_5766;
var inst_5768 = null;
var inst_5769 = (0);
var inst_5770 = (0);
var state_5826__$1 = (function (){var statearr_5854 = state_5826;
(statearr_5854[(12)] = inst_5768);

(statearr_5854[(13)] = inst_5770);

(statearr_5854[(15)] = inst_5767);

(statearr_5854[(16)] = inst_5769);

return statearr_5854;
})();
var statearr_5855_5894 = state_5826__$1;
(statearr_5855_5894[(2)] = null);

(statearr_5855_5894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (14))){
var state_5826__$1 = state_5826;
var statearr_5859_5895 = state_5826__$1;
(statearr_5859_5895[(2)] = null);

(statearr_5859_5895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (16))){
var inst_5781 = (state_5826[(10)]);
var inst_5785 = cljs.core.chunk_first.call(null,inst_5781);
var inst_5786 = cljs.core.chunk_rest.call(null,inst_5781);
var inst_5787 = cljs.core.count.call(null,inst_5785);
var inst_5767 = inst_5786;
var inst_5768 = inst_5785;
var inst_5769 = inst_5787;
var inst_5770 = (0);
var state_5826__$1 = (function (){var statearr_5860 = state_5826;
(statearr_5860[(12)] = inst_5768);

(statearr_5860[(13)] = inst_5770);

(statearr_5860[(15)] = inst_5767);

(statearr_5860[(16)] = inst_5769);

return statearr_5860;
})();
var statearr_5861_5896 = state_5826__$1;
(statearr_5861_5896[(2)] = null);

(statearr_5861_5896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (10))){
var inst_5768 = (state_5826[(12)]);
var inst_5770 = (state_5826[(13)]);
var inst_5767 = (state_5826[(15)]);
var inst_5769 = (state_5826[(16)]);
var inst_5775 = cljs.core._nth.call(null,inst_5768,inst_5770);
var inst_5776 = cljs.core.async.muxch_STAR_.call(null,inst_5775);
var inst_5777 = cljs.core.async.close_BANG_.call(null,inst_5776);
var inst_5778 = (inst_5770 + (1));
var tmp5856 = inst_5768;
var tmp5857 = inst_5767;
var tmp5858 = inst_5769;
var inst_5767__$1 = tmp5857;
var inst_5768__$1 = tmp5856;
var inst_5769__$1 = tmp5858;
var inst_5770__$1 = inst_5778;
var state_5826__$1 = (function (){var statearr_5862 = state_5826;
(statearr_5862[(12)] = inst_5768__$1);

(statearr_5862[(13)] = inst_5770__$1);

(statearr_5862[(15)] = inst_5767__$1);

(statearr_5862[(17)] = inst_5777);

(statearr_5862[(16)] = inst_5769__$1);

return statearr_5862;
})();
var statearr_5863_5897 = state_5826__$1;
(statearr_5863_5897[(2)] = null);

(statearr_5863_5897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (18))){
var inst_5796 = (state_5826[(2)]);
var state_5826__$1 = state_5826;
var statearr_5864_5898 = state_5826__$1;
(statearr_5864_5898[(2)] = inst_5796);

(statearr_5864_5898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5827 === (8))){
var inst_5770 = (state_5826[(13)]);
var inst_5769 = (state_5826[(16)]);
var inst_5772 = (inst_5770 < inst_5769);
var inst_5773 = inst_5772;
var state_5826__$1 = state_5826;
if(cljs.core.truth_(inst_5773)){
var statearr_5865_5899 = state_5826__$1;
(statearr_5865_5899[(1)] = (10));

} else {
var statearr_5866_5900 = state_5826__$1;
(statearr_5866_5900[(1)] = (11));

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
});})(c__2788__auto___5872,mults,ensure_mult,p))
;
return ((function (switch__2633__auto__,c__2788__auto___5872,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__2634__auto__ = null;
var cljs$core$async$state_machine__2634__auto____0 = (function (){
var statearr_5867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5867[(0)] = cljs$core$async$state_machine__2634__auto__);

(statearr_5867[(1)] = (1));

return statearr_5867;
});
var cljs$core$async$state_machine__2634__auto____1 = (function (state_5826){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_5826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e5868){if((e5868 instanceof Object)){
var ex__2637__auto__ = e5868;
var statearr_5869_5901 = state_5826;
(statearr_5869_5901[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5902 = state_5826;
state_5826 = G__5902;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$state_machine__2634__auto__ = function(state_5826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2634__auto____1.call(this,state_5826);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2634__auto____0;
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2634__auto____1;
return cljs$core$async$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___5872,mults,ensure_mult,p))
})();
var state__2790__auto__ = (function (){var statearr_5870 = f__2789__auto__.call(null);
(statearr_5870[(6)] = c__2788__auto___5872);

return statearr_5870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___5872,mults,ensure_mult,p))
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
var G__5904 = arguments.length;
switch (G__5904) {
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
var G__5907 = arguments.length;
switch (G__5907) {
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
var G__5910 = arguments.length;
switch (G__5910) {
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
var c__2788__auto___5977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___5977,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___5977,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5949){
var state_val_5950 = (state_5949[(1)]);
if((state_val_5950 === (7))){
var state_5949__$1 = state_5949;
var statearr_5951_5978 = state_5949__$1;
(statearr_5951_5978[(2)] = null);

(statearr_5951_5978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (1))){
var state_5949__$1 = state_5949;
var statearr_5952_5979 = state_5949__$1;
(statearr_5952_5979[(2)] = null);

(statearr_5952_5979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (4))){
var inst_5913 = (state_5949[(7)]);
var inst_5915 = (inst_5913 < cnt);
var state_5949__$1 = state_5949;
if(cljs.core.truth_(inst_5915)){
var statearr_5953_5980 = state_5949__$1;
(statearr_5953_5980[(1)] = (6));

} else {
var statearr_5954_5981 = state_5949__$1;
(statearr_5954_5981[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (15))){
var inst_5945 = (state_5949[(2)]);
var state_5949__$1 = state_5949;
var statearr_5955_5982 = state_5949__$1;
(statearr_5955_5982[(2)] = inst_5945);

(statearr_5955_5982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (13))){
var inst_5938 = cljs.core.async.close_BANG_.call(null,out);
var state_5949__$1 = state_5949;
var statearr_5956_5983 = state_5949__$1;
(statearr_5956_5983[(2)] = inst_5938);

(statearr_5956_5983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (6))){
var state_5949__$1 = state_5949;
var statearr_5957_5984 = state_5949__$1;
(statearr_5957_5984[(2)] = null);

(statearr_5957_5984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (3))){
var inst_5947 = (state_5949[(2)]);
var state_5949__$1 = state_5949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5949__$1,inst_5947);
} else {
if((state_val_5950 === (12))){
var inst_5935 = (state_5949[(8)]);
var inst_5935__$1 = (state_5949[(2)]);
var inst_5936 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5935__$1);
var state_5949__$1 = (function (){var statearr_5958 = state_5949;
(statearr_5958[(8)] = inst_5935__$1);

return statearr_5958;
})();
if(cljs.core.truth_(inst_5936)){
var statearr_5959_5985 = state_5949__$1;
(statearr_5959_5985[(1)] = (13));

} else {
var statearr_5960_5986 = state_5949__$1;
(statearr_5960_5986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (2))){
var inst_5912 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5913 = (0);
var state_5949__$1 = (function (){var statearr_5961 = state_5949;
(statearr_5961[(9)] = inst_5912);

(statearr_5961[(7)] = inst_5913);

return statearr_5961;
})();
var statearr_5962_5987 = state_5949__$1;
(statearr_5962_5987[(2)] = null);

(statearr_5962_5987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (11))){
var inst_5913 = (state_5949[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5949,(10),Object,null,(9));
var inst_5922 = chs__$1.call(null,inst_5913);
var inst_5923 = done.call(null,inst_5913);
var inst_5924 = cljs.core.async.take_BANG_.call(null,inst_5922,inst_5923);
var state_5949__$1 = state_5949;
var statearr_5963_5988 = state_5949__$1;
(statearr_5963_5988[(2)] = inst_5924);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5949__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (9))){
var inst_5913 = (state_5949[(7)]);
var inst_5926 = (state_5949[(2)]);
var inst_5927 = (inst_5913 + (1));
var inst_5913__$1 = inst_5927;
var state_5949__$1 = (function (){var statearr_5964 = state_5949;
(statearr_5964[(10)] = inst_5926);

(statearr_5964[(7)] = inst_5913__$1);

return statearr_5964;
})();
var statearr_5965_5989 = state_5949__$1;
(statearr_5965_5989[(2)] = null);

(statearr_5965_5989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (5))){
var inst_5933 = (state_5949[(2)]);
var state_5949__$1 = (function (){var statearr_5966 = state_5949;
(statearr_5966[(11)] = inst_5933);

return statearr_5966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5949__$1,(12),dchan);
} else {
if((state_val_5950 === (14))){
var inst_5935 = (state_5949[(8)]);
var inst_5940 = cljs.core.apply.call(null,f,inst_5935);
var state_5949__$1 = state_5949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5949__$1,(16),out,inst_5940);
} else {
if((state_val_5950 === (16))){
var inst_5942 = (state_5949[(2)]);
var state_5949__$1 = (function (){var statearr_5967 = state_5949;
(statearr_5967[(12)] = inst_5942);

return statearr_5967;
})();
var statearr_5968_5990 = state_5949__$1;
(statearr_5968_5990[(2)] = null);

(statearr_5968_5990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (10))){
var inst_5917 = (state_5949[(2)]);
var inst_5918 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5949__$1 = (function (){var statearr_5969 = state_5949;
(statearr_5969[(13)] = inst_5917);

return statearr_5969;
})();
var statearr_5970_5991 = state_5949__$1;
(statearr_5970_5991[(2)] = inst_5918);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5949__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5950 === (8))){
var inst_5931 = (state_5949[(2)]);
var state_5949__$1 = state_5949;
var statearr_5971_5992 = state_5949__$1;
(statearr_5971_5992[(2)] = inst_5931);

(statearr_5971_5992[(1)] = (5));


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
});})(c__2788__auto___5977,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__2633__auto__,c__2788__auto___5977,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__2634__auto__ = null;
var cljs$core$async$state_machine__2634__auto____0 = (function (){
var statearr_5972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5972[(0)] = cljs$core$async$state_machine__2634__auto__);

(statearr_5972[(1)] = (1));

return statearr_5972;
});
var cljs$core$async$state_machine__2634__auto____1 = (function (state_5949){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_5949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e5973){if((e5973 instanceof Object)){
var ex__2637__auto__ = e5973;
var statearr_5974_5993 = state_5949;
(statearr_5974_5993[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5994 = state_5949;
state_5949 = G__5994;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$state_machine__2634__auto__ = function(state_5949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2634__auto____1.call(this,state_5949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2634__auto____0;
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2634__auto____1;
return cljs$core$async$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___5977,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__2790__auto__ = (function (){var statearr_5975 = f__2789__auto__.call(null);
(statearr_5975[(6)] = c__2788__auto___5977);

return statearr_5975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___5977,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__5997 = arguments.length;
switch (G__5997) {
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
var c__2788__auto___6051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___6051,out){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___6051,out){
return (function (state_6029){
var state_val_6030 = (state_6029[(1)]);
if((state_val_6030 === (7))){
var inst_6009 = (state_6029[(7)]);
var inst_6008 = (state_6029[(8)]);
var inst_6008__$1 = (state_6029[(2)]);
var inst_6009__$1 = cljs.core.nth.call(null,inst_6008__$1,(0),null);
var inst_6010 = cljs.core.nth.call(null,inst_6008__$1,(1),null);
var inst_6011 = (inst_6009__$1 == null);
var state_6029__$1 = (function (){var statearr_6031 = state_6029;
(statearr_6031[(9)] = inst_6010);

(statearr_6031[(7)] = inst_6009__$1);

(statearr_6031[(8)] = inst_6008__$1);

return statearr_6031;
})();
if(cljs.core.truth_(inst_6011)){
var statearr_6032_6052 = state_6029__$1;
(statearr_6032_6052[(1)] = (8));

} else {
var statearr_6033_6053 = state_6029__$1;
(statearr_6033_6053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6030 === (1))){
var inst_5998 = cljs.core.vec.call(null,chs);
var inst_5999 = inst_5998;
var state_6029__$1 = (function (){var statearr_6034 = state_6029;
(statearr_6034[(10)] = inst_5999);

return statearr_6034;
})();
var statearr_6035_6054 = state_6029__$1;
(statearr_6035_6054[(2)] = null);

(statearr_6035_6054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6030 === (4))){
var inst_5999 = (state_6029[(10)]);
var state_6029__$1 = state_6029;
return cljs.core.async.ioc_alts_BANG_.call(null,state_6029__$1,(7),inst_5999);
} else {
if((state_val_6030 === (6))){
var inst_6025 = (state_6029[(2)]);
var state_6029__$1 = state_6029;
var statearr_6036_6055 = state_6029__$1;
(statearr_6036_6055[(2)] = inst_6025);

(statearr_6036_6055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6030 === (3))){
var inst_6027 = (state_6029[(2)]);
var state_6029__$1 = state_6029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6029__$1,inst_6027);
} else {
if((state_val_6030 === (2))){
var inst_5999 = (state_6029[(10)]);
var inst_6001 = cljs.core.count.call(null,inst_5999);
var inst_6002 = (inst_6001 > (0));
var state_6029__$1 = state_6029;
if(cljs.core.truth_(inst_6002)){
var statearr_6038_6056 = state_6029__$1;
(statearr_6038_6056[(1)] = (4));

} else {
var statearr_6039_6057 = state_6029__$1;
(statearr_6039_6057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6030 === (11))){
var inst_5999 = (state_6029[(10)]);
var inst_6018 = (state_6029[(2)]);
var tmp6037 = inst_5999;
var inst_5999__$1 = tmp6037;
var state_6029__$1 = (function (){var statearr_6040 = state_6029;
(statearr_6040[(10)] = inst_5999__$1);

(statearr_6040[(11)] = inst_6018);

return statearr_6040;
})();
var statearr_6041_6058 = state_6029__$1;
(statearr_6041_6058[(2)] = null);

(statearr_6041_6058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6030 === (9))){
var inst_6009 = (state_6029[(7)]);
var state_6029__$1 = state_6029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6029__$1,(11),out,inst_6009);
} else {
if((state_val_6030 === (5))){
var inst_6023 = cljs.core.async.close_BANG_.call(null,out);
var state_6029__$1 = state_6029;
var statearr_6042_6059 = state_6029__$1;
(statearr_6042_6059[(2)] = inst_6023);

(statearr_6042_6059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6030 === (10))){
var inst_6021 = (state_6029[(2)]);
var state_6029__$1 = state_6029;
var statearr_6043_6060 = state_6029__$1;
(statearr_6043_6060[(2)] = inst_6021);

(statearr_6043_6060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6030 === (8))){
var inst_5999 = (state_6029[(10)]);
var inst_6010 = (state_6029[(9)]);
var inst_6009 = (state_6029[(7)]);
var inst_6008 = (state_6029[(8)]);
var inst_6013 = (function (){var cs = inst_5999;
var vec__6004 = inst_6008;
var v = inst_6009;
var c = inst_6010;
return ((function (cs,vec__6004,v,c,inst_5999,inst_6010,inst_6009,inst_6008,state_val_6030,c__2788__auto___6051,out){
return (function (p1__5995_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5995_SHARP_);
});
;})(cs,vec__6004,v,c,inst_5999,inst_6010,inst_6009,inst_6008,state_val_6030,c__2788__auto___6051,out))
})();
var inst_6014 = cljs.core.filterv.call(null,inst_6013,inst_5999);
var inst_5999__$1 = inst_6014;
var state_6029__$1 = (function (){var statearr_6044 = state_6029;
(statearr_6044[(10)] = inst_5999__$1);

return statearr_6044;
})();
var statearr_6045_6061 = state_6029__$1;
(statearr_6045_6061[(2)] = null);

(statearr_6045_6061[(1)] = (2));


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
});})(c__2788__auto___6051,out))
;
return ((function (switch__2633__auto__,c__2788__auto___6051,out){
return (function() {
var cljs$core$async$state_machine__2634__auto__ = null;
var cljs$core$async$state_machine__2634__auto____0 = (function (){
var statearr_6046 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6046[(0)] = cljs$core$async$state_machine__2634__auto__);

(statearr_6046[(1)] = (1));

return statearr_6046;
});
var cljs$core$async$state_machine__2634__auto____1 = (function (state_6029){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_6029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e6047){if((e6047 instanceof Object)){
var ex__2637__auto__ = e6047;
var statearr_6048_6062 = state_6029;
(statearr_6048_6062[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6063 = state_6029;
state_6029 = G__6063;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$state_machine__2634__auto__ = function(state_6029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2634__auto____1.call(this,state_6029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2634__auto____0;
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2634__auto____1;
return cljs$core$async$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___6051,out))
})();
var state__2790__auto__ = (function (){var statearr_6049 = f__2789__auto__.call(null);
(statearr_6049[(6)] = c__2788__auto___6051);

return statearr_6049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___6051,out))
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
var G__6065 = arguments.length;
switch (G__6065) {
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
var c__2788__auto___6110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___6110,out){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___6110,out){
return (function (state_6089){
var state_val_6090 = (state_6089[(1)]);
if((state_val_6090 === (7))){
var inst_6071 = (state_6089[(7)]);
var inst_6071__$1 = (state_6089[(2)]);
var inst_6072 = (inst_6071__$1 == null);
var inst_6073 = cljs.core.not.call(null,inst_6072);
var state_6089__$1 = (function (){var statearr_6091 = state_6089;
(statearr_6091[(7)] = inst_6071__$1);

return statearr_6091;
})();
if(inst_6073){
var statearr_6092_6111 = state_6089__$1;
(statearr_6092_6111[(1)] = (8));

} else {
var statearr_6093_6112 = state_6089__$1;
(statearr_6093_6112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (1))){
var inst_6066 = (0);
var state_6089__$1 = (function (){var statearr_6094 = state_6089;
(statearr_6094[(8)] = inst_6066);

return statearr_6094;
})();
var statearr_6095_6113 = state_6089__$1;
(statearr_6095_6113[(2)] = null);

(statearr_6095_6113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (4))){
var state_6089__$1 = state_6089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6089__$1,(7),ch);
} else {
if((state_val_6090 === (6))){
var inst_6084 = (state_6089[(2)]);
var state_6089__$1 = state_6089;
var statearr_6096_6114 = state_6089__$1;
(statearr_6096_6114[(2)] = inst_6084);

(statearr_6096_6114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (3))){
var inst_6086 = (state_6089[(2)]);
var inst_6087 = cljs.core.async.close_BANG_.call(null,out);
var state_6089__$1 = (function (){var statearr_6097 = state_6089;
(statearr_6097[(9)] = inst_6086);

return statearr_6097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6089__$1,inst_6087);
} else {
if((state_val_6090 === (2))){
var inst_6066 = (state_6089[(8)]);
var inst_6068 = (inst_6066 < n);
var state_6089__$1 = state_6089;
if(cljs.core.truth_(inst_6068)){
var statearr_6098_6115 = state_6089__$1;
(statearr_6098_6115[(1)] = (4));

} else {
var statearr_6099_6116 = state_6089__$1;
(statearr_6099_6116[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (11))){
var inst_6066 = (state_6089[(8)]);
var inst_6076 = (state_6089[(2)]);
var inst_6077 = (inst_6066 + (1));
var inst_6066__$1 = inst_6077;
var state_6089__$1 = (function (){var statearr_6100 = state_6089;
(statearr_6100[(8)] = inst_6066__$1);

(statearr_6100[(10)] = inst_6076);

return statearr_6100;
})();
var statearr_6101_6117 = state_6089__$1;
(statearr_6101_6117[(2)] = null);

(statearr_6101_6117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (9))){
var state_6089__$1 = state_6089;
var statearr_6102_6118 = state_6089__$1;
(statearr_6102_6118[(2)] = null);

(statearr_6102_6118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (5))){
var state_6089__$1 = state_6089;
var statearr_6103_6119 = state_6089__$1;
(statearr_6103_6119[(2)] = null);

(statearr_6103_6119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (10))){
var inst_6081 = (state_6089[(2)]);
var state_6089__$1 = state_6089;
var statearr_6104_6120 = state_6089__$1;
(statearr_6104_6120[(2)] = inst_6081);

(statearr_6104_6120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (8))){
var inst_6071 = (state_6089[(7)]);
var state_6089__$1 = state_6089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6089__$1,(11),out,inst_6071);
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
});})(c__2788__auto___6110,out))
;
return ((function (switch__2633__auto__,c__2788__auto___6110,out){
return (function() {
var cljs$core$async$state_machine__2634__auto__ = null;
var cljs$core$async$state_machine__2634__auto____0 = (function (){
var statearr_6105 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6105[(0)] = cljs$core$async$state_machine__2634__auto__);

(statearr_6105[(1)] = (1));

return statearr_6105;
});
var cljs$core$async$state_machine__2634__auto____1 = (function (state_6089){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_6089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e6106){if((e6106 instanceof Object)){
var ex__2637__auto__ = e6106;
var statearr_6107_6121 = state_6089;
(statearr_6107_6121[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6122 = state_6089;
state_6089 = G__6122;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$state_machine__2634__auto__ = function(state_6089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2634__auto____1.call(this,state_6089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2634__auto____0;
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2634__auto____1;
return cljs$core$async$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___6110,out))
})();
var state__2790__auto__ = (function (){var statearr_6108 = f__2789__auto__.call(null);
(statearr_6108[(6)] = c__2788__auto___6110);

return statearr_6108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___6110,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async6124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6124 = (function (f,ch,meta6125){
this.f = f;
this.ch = ch;
this.meta6125 = meta6125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6126,meta6125__$1){
var self__ = this;
var _6126__$1 = this;
return (new cljs.core.async.t_cljs$core$async6124(self__.f,self__.ch,meta6125__$1));
});

cljs.core.async.t_cljs$core$async6124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6126){
var self__ = this;
var _6126__$1 = this;
return self__.meta6125;
});

cljs.core.async.t_cljs$core$async6124.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async6124.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async6124.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async6127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6127 = (function (f,ch,meta6125,_,fn1,meta6128){
this.f = f;
this.ch = ch;
this.meta6125 = meta6125;
this._ = _;
this.fn1 = fn1;
this.meta6128 = meta6128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_6129,meta6128__$1){
var self__ = this;
var _6129__$1 = this;
return (new cljs.core.async.t_cljs$core$async6127(self__.f,self__.ch,self__.meta6125,self__._,self__.fn1,meta6128__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async6127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_6129){
var self__ = this;
var _6129__$1 = this;
return self__.meta6128;
});})(___$1))
;

cljs.core.async.t_cljs$core$async6127.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async6127.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async6127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__6123_SHARP_){
return f1.call(null,(((p1__6123_SHARP_ == null))?null:self__.f.call(null,p1__6123_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async6127.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6125","meta6125",9617382,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async6124","cljs.core.async/t_cljs$core$async6124",-1296030788,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta6128","meta6128",1659898475,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async6127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6127";

cljs.core.async.t_cljs$core$async6127.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6127");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6127.
 */
cljs.core.async.__GT_t_cljs$core$async6127 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6127(f__$1,ch__$1,meta6125__$1,___$2,fn1__$1,meta6128){
return (new cljs.core.async.t_cljs$core$async6127(f__$1,ch__$1,meta6125__$1,___$2,fn1__$1,meta6128));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async6127(self__.f,self__.ch,self__.meta6125,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async6124.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async6124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6125","meta6125",9617382,null)], null);
});

cljs.core.async.t_cljs$core$async6124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6124";

cljs.core.async.t_cljs$core$async6124.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6124");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6124.
 */
cljs.core.async.__GT_t_cljs$core$async6124 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6124(f__$1,ch__$1,meta6125){
return (new cljs.core.async.t_cljs$core$async6124(f__$1,ch__$1,meta6125));
});

}

return (new cljs.core.async.t_cljs$core$async6124(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async6130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6130 = (function (f,ch,meta6131){
this.f = f;
this.ch = ch;
this.meta6131 = meta6131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6132,meta6131__$1){
var self__ = this;
var _6132__$1 = this;
return (new cljs.core.async.t_cljs$core$async6130(self__.f,self__.ch,meta6131__$1));
});

cljs.core.async.t_cljs$core$async6130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6132){
var self__ = this;
var _6132__$1 = this;
return self__.meta6131;
});

cljs.core.async.t_cljs$core$async6130.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async6130.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async6130.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async6130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6131","meta6131",1531640722,null)], null);
});

cljs.core.async.t_cljs$core$async6130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6130";

cljs.core.async.t_cljs$core$async6130.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6130");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6130.
 */
cljs.core.async.__GT_t_cljs$core$async6130 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async6130(f__$1,ch__$1,meta6131){
return (new cljs.core.async.t_cljs$core$async6130(f__$1,ch__$1,meta6131));
});

}

return (new cljs.core.async.t_cljs$core$async6130(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async6133 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6133 = (function (p,ch,meta6134){
this.p = p;
this.ch = ch;
this.meta6134 = meta6134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6135,meta6134__$1){
var self__ = this;
var _6135__$1 = this;
return (new cljs.core.async.t_cljs$core$async6133(self__.p,self__.ch,meta6134__$1));
});

cljs.core.async.t_cljs$core$async6133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6135){
var self__ = this;
var _6135__$1 = this;
return self__.meta6134;
});

cljs.core.async.t_cljs$core$async6133.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async6133.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async6133.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async6133.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async6133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6134","meta6134",-341458896,null)], null);
});

cljs.core.async.t_cljs$core$async6133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6133";

cljs.core.async.t_cljs$core$async6133.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async6133");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6133.
 */
cljs.core.async.__GT_t_cljs$core$async6133 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async6133(p__$1,ch__$1,meta6134){
return (new cljs.core.async.t_cljs$core$async6133(p__$1,ch__$1,meta6134));
});

}

return (new cljs.core.async.t_cljs$core$async6133(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__6137 = arguments.length;
switch (G__6137) {
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
var c__2788__auto___6177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___6177,out){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___6177,out){
return (function (state_6158){
var state_val_6159 = (state_6158[(1)]);
if((state_val_6159 === (7))){
var inst_6154 = (state_6158[(2)]);
var state_6158__$1 = state_6158;
var statearr_6160_6178 = state_6158__$1;
(statearr_6160_6178[(2)] = inst_6154);

(statearr_6160_6178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6159 === (1))){
var state_6158__$1 = state_6158;
var statearr_6161_6179 = state_6158__$1;
(statearr_6161_6179[(2)] = null);

(statearr_6161_6179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6159 === (4))){
var inst_6140 = (state_6158[(7)]);
var inst_6140__$1 = (state_6158[(2)]);
var inst_6141 = (inst_6140__$1 == null);
var state_6158__$1 = (function (){var statearr_6162 = state_6158;
(statearr_6162[(7)] = inst_6140__$1);

return statearr_6162;
})();
if(cljs.core.truth_(inst_6141)){
var statearr_6163_6180 = state_6158__$1;
(statearr_6163_6180[(1)] = (5));

} else {
var statearr_6164_6181 = state_6158__$1;
(statearr_6164_6181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6159 === (6))){
var inst_6140 = (state_6158[(7)]);
var inst_6145 = p.call(null,inst_6140);
var state_6158__$1 = state_6158;
if(cljs.core.truth_(inst_6145)){
var statearr_6165_6182 = state_6158__$1;
(statearr_6165_6182[(1)] = (8));

} else {
var statearr_6166_6183 = state_6158__$1;
(statearr_6166_6183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6159 === (3))){
var inst_6156 = (state_6158[(2)]);
var state_6158__$1 = state_6158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6158__$1,inst_6156);
} else {
if((state_val_6159 === (2))){
var state_6158__$1 = state_6158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6158__$1,(4),ch);
} else {
if((state_val_6159 === (11))){
var inst_6148 = (state_6158[(2)]);
var state_6158__$1 = state_6158;
var statearr_6167_6184 = state_6158__$1;
(statearr_6167_6184[(2)] = inst_6148);

(statearr_6167_6184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6159 === (9))){
var state_6158__$1 = state_6158;
var statearr_6168_6185 = state_6158__$1;
(statearr_6168_6185[(2)] = null);

(statearr_6168_6185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6159 === (5))){
var inst_6143 = cljs.core.async.close_BANG_.call(null,out);
var state_6158__$1 = state_6158;
var statearr_6169_6186 = state_6158__$1;
(statearr_6169_6186[(2)] = inst_6143);

(statearr_6169_6186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6159 === (10))){
var inst_6151 = (state_6158[(2)]);
var state_6158__$1 = (function (){var statearr_6170 = state_6158;
(statearr_6170[(8)] = inst_6151);

return statearr_6170;
})();
var statearr_6171_6187 = state_6158__$1;
(statearr_6171_6187[(2)] = null);

(statearr_6171_6187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6159 === (8))){
var inst_6140 = (state_6158[(7)]);
var state_6158__$1 = state_6158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6158__$1,(11),out,inst_6140);
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
});})(c__2788__auto___6177,out))
;
return ((function (switch__2633__auto__,c__2788__auto___6177,out){
return (function() {
var cljs$core$async$state_machine__2634__auto__ = null;
var cljs$core$async$state_machine__2634__auto____0 = (function (){
var statearr_6172 = [null,null,null,null,null,null,null,null,null];
(statearr_6172[(0)] = cljs$core$async$state_machine__2634__auto__);

(statearr_6172[(1)] = (1));

return statearr_6172;
});
var cljs$core$async$state_machine__2634__auto____1 = (function (state_6158){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_6158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e6173){if((e6173 instanceof Object)){
var ex__2637__auto__ = e6173;
var statearr_6174_6188 = state_6158;
(statearr_6174_6188[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6189 = state_6158;
state_6158 = G__6189;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$state_machine__2634__auto__ = function(state_6158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2634__auto____1.call(this,state_6158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2634__auto____0;
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2634__auto____1;
return cljs$core$async$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___6177,out))
})();
var state__2790__auto__ = (function (){var statearr_6175 = f__2789__auto__.call(null);
(statearr_6175[(6)] = c__2788__auto___6177);

return statearr_6175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___6177,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__6191 = arguments.length;
switch (G__6191) {
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
var c__2788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto__){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto__){
return (function (state_6254){
var state_val_6255 = (state_6254[(1)]);
if((state_val_6255 === (7))){
var inst_6250 = (state_6254[(2)]);
var state_6254__$1 = state_6254;
var statearr_6256_6294 = state_6254__$1;
(statearr_6256_6294[(2)] = inst_6250);

(statearr_6256_6294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (20))){
var inst_6220 = (state_6254[(7)]);
var inst_6231 = (state_6254[(2)]);
var inst_6232 = cljs.core.next.call(null,inst_6220);
var inst_6206 = inst_6232;
var inst_6207 = null;
var inst_6208 = (0);
var inst_6209 = (0);
var state_6254__$1 = (function (){var statearr_6257 = state_6254;
(statearr_6257[(8)] = inst_6206);

(statearr_6257[(9)] = inst_6231);

(statearr_6257[(10)] = inst_6209);

(statearr_6257[(11)] = inst_6207);

(statearr_6257[(12)] = inst_6208);

return statearr_6257;
})();
var statearr_6258_6295 = state_6254__$1;
(statearr_6258_6295[(2)] = null);

(statearr_6258_6295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (1))){
var state_6254__$1 = state_6254;
var statearr_6259_6296 = state_6254__$1;
(statearr_6259_6296[(2)] = null);

(statearr_6259_6296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (4))){
var inst_6195 = (state_6254[(13)]);
var inst_6195__$1 = (state_6254[(2)]);
var inst_6196 = (inst_6195__$1 == null);
var state_6254__$1 = (function (){var statearr_6260 = state_6254;
(statearr_6260[(13)] = inst_6195__$1);

return statearr_6260;
})();
if(cljs.core.truth_(inst_6196)){
var statearr_6261_6297 = state_6254__$1;
(statearr_6261_6297[(1)] = (5));

} else {
var statearr_6262_6298 = state_6254__$1;
(statearr_6262_6298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (15))){
var state_6254__$1 = state_6254;
var statearr_6266_6299 = state_6254__$1;
(statearr_6266_6299[(2)] = null);

(statearr_6266_6299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (21))){
var state_6254__$1 = state_6254;
var statearr_6267_6300 = state_6254__$1;
(statearr_6267_6300[(2)] = null);

(statearr_6267_6300[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (13))){
var inst_6206 = (state_6254[(8)]);
var inst_6209 = (state_6254[(10)]);
var inst_6207 = (state_6254[(11)]);
var inst_6208 = (state_6254[(12)]);
var inst_6216 = (state_6254[(2)]);
var inst_6217 = (inst_6209 + (1));
var tmp6263 = inst_6206;
var tmp6264 = inst_6207;
var tmp6265 = inst_6208;
var inst_6206__$1 = tmp6263;
var inst_6207__$1 = tmp6264;
var inst_6208__$1 = tmp6265;
var inst_6209__$1 = inst_6217;
var state_6254__$1 = (function (){var statearr_6268 = state_6254;
(statearr_6268[(8)] = inst_6206__$1);

(statearr_6268[(10)] = inst_6209__$1);

(statearr_6268[(14)] = inst_6216);

(statearr_6268[(11)] = inst_6207__$1);

(statearr_6268[(12)] = inst_6208__$1);

return statearr_6268;
})();
var statearr_6269_6301 = state_6254__$1;
(statearr_6269_6301[(2)] = null);

(statearr_6269_6301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (22))){
var state_6254__$1 = state_6254;
var statearr_6270_6302 = state_6254__$1;
(statearr_6270_6302[(2)] = null);

(statearr_6270_6302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (6))){
var inst_6195 = (state_6254[(13)]);
var inst_6204 = f.call(null,inst_6195);
var inst_6205 = cljs.core.seq.call(null,inst_6204);
var inst_6206 = inst_6205;
var inst_6207 = null;
var inst_6208 = (0);
var inst_6209 = (0);
var state_6254__$1 = (function (){var statearr_6271 = state_6254;
(statearr_6271[(8)] = inst_6206);

(statearr_6271[(10)] = inst_6209);

(statearr_6271[(11)] = inst_6207);

(statearr_6271[(12)] = inst_6208);

return statearr_6271;
})();
var statearr_6272_6303 = state_6254__$1;
(statearr_6272_6303[(2)] = null);

(statearr_6272_6303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (17))){
var inst_6220 = (state_6254[(7)]);
var inst_6224 = cljs.core.chunk_first.call(null,inst_6220);
var inst_6225 = cljs.core.chunk_rest.call(null,inst_6220);
var inst_6226 = cljs.core.count.call(null,inst_6224);
var inst_6206 = inst_6225;
var inst_6207 = inst_6224;
var inst_6208 = inst_6226;
var inst_6209 = (0);
var state_6254__$1 = (function (){var statearr_6273 = state_6254;
(statearr_6273[(8)] = inst_6206);

(statearr_6273[(10)] = inst_6209);

(statearr_6273[(11)] = inst_6207);

(statearr_6273[(12)] = inst_6208);

return statearr_6273;
})();
var statearr_6274_6304 = state_6254__$1;
(statearr_6274_6304[(2)] = null);

(statearr_6274_6304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (3))){
var inst_6252 = (state_6254[(2)]);
var state_6254__$1 = state_6254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6254__$1,inst_6252);
} else {
if((state_val_6255 === (12))){
var inst_6240 = (state_6254[(2)]);
var state_6254__$1 = state_6254;
var statearr_6275_6305 = state_6254__$1;
(statearr_6275_6305[(2)] = inst_6240);

(statearr_6275_6305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (2))){
var state_6254__$1 = state_6254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6254__$1,(4),in$);
} else {
if((state_val_6255 === (23))){
var inst_6248 = (state_6254[(2)]);
var state_6254__$1 = state_6254;
var statearr_6276_6306 = state_6254__$1;
(statearr_6276_6306[(2)] = inst_6248);

(statearr_6276_6306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (19))){
var inst_6235 = (state_6254[(2)]);
var state_6254__$1 = state_6254;
var statearr_6277_6307 = state_6254__$1;
(statearr_6277_6307[(2)] = inst_6235);

(statearr_6277_6307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (11))){
var inst_6206 = (state_6254[(8)]);
var inst_6220 = (state_6254[(7)]);
var inst_6220__$1 = cljs.core.seq.call(null,inst_6206);
var state_6254__$1 = (function (){var statearr_6278 = state_6254;
(statearr_6278[(7)] = inst_6220__$1);

return statearr_6278;
})();
if(inst_6220__$1){
var statearr_6279_6308 = state_6254__$1;
(statearr_6279_6308[(1)] = (14));

} else {
var statearr_6280_6309 = state_6254__$1;
(statearr_6280_6309[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (9))){
var inst_6242 = (state_6254[(2)]);
var inst_6243 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_6254__$1 = (function (){var statearr_6281 = state_6254;
(statearr_6281[(15)] = inst_6242);

return statearr_6281;
})();
if(cljs.core.truth_(inst_6243)){
var statearr_6282_6310 = state_6254__$1;
(statearr_6282_6310[(1)] = (21));

} else {
var statearr_6283_6311 = state_6254__$1;
(statearr_6283_6311[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (5))){
var inst_6198 = cljs.core.async.close_BANG_.call(null,out);
var state_6254__$1 = state_6254;
var statearr_6284_6312 = state_6254__$1;
(statearr_6284_6312[(2)] = inst_6198);

(statearr_6284_6312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (14))){
var inst_6220 = (state_6254[(7)]);
var inst_6222 = cljs.core.chunked_seq_QMARK_.call(null,inst_6220);
var state_6254__$1 = state_6254;
if(inst_6222){
var statearr_6285_6313 = state_6254__$1;
(statearr_6285_6313[(1)] = (17));

} else {
var statearr_6286_6314 = state_6254__$1;
(statearr_6286_6314[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (16))){
var inst_6238 = (state_6254[(2)]);
var state_6254__$1 = state_6254;
var statearr_6287_6315 = state_6254__$1;
(statearr_6287_6315[(2)] = inst_6238);

(statearr_6287_6315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6255 === (10))){
var inst_6209 = (state_6254[(10)]);
var inst_6207 = (state_6254[(11)]);
var inst_6214 = cljs.core._nth.call(null,inst_6207,inst_6209);
var state_6254__$1 = state_6254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6254__$1,(13),out,inst_6214);
} else {
if((state_val_6255 === (18))){
var inst_6220 = (state_6254[(7)]);
var inst_6229 = cljs.core.first.call(null,inst_6220);
var state_6254__$1 = state_6254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6254__$1,(20),out,inst_6229);
} else {
if((state_val_6255 === (8))){
var inst_6209 = (state_6254[(10)]);
var inst_6208 = (state_6254[(12)]);
var inst_6211 = (inst_6209 < inst_6208);
var inst_6212 = inst_6211;
var state_6254__$1 = state_6254;
if(cljs.core.truth_(inst_6212)){
var statearr_6288_6316 = state_6254__$1;
(statearr_6288_6316[(1)] = (10));

} else {
var statearr_6289_6317 = state_6254__$1;
(statearr_6289_6317[(1)] = (11));

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
});})(c__2788__auto__))
;
return ((function (switch__2633__auto__,c__2788__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2634__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2634__auto____0 = (function (){
var statearr_6290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6290[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2634__auto__);

(statearr_6290[(1)] = (1));

return statearr_6290;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2634__auto____1 = (function (state_6254){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_6254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e6291){if((e6291 instanceof Object)){
var ex__2637__auto__ = e6291;
var statearr_6292_6318 = state_6254;
(statearr_6292_6318[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6319 = state_6254;
state_6254 = G__6319;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2634__auto__ = function(state_6254){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2634__auto____1.call(this,state_6254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2634__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2634__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__))
})();
var state__2790__auto__ = (function (){var statearr_6293 = f__2789__auto__.call(null);
(statearr_6293[(6)] = c__2788__auto__);

return statearr_6293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__))
);

return c__2788__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__6321 = arguments.length;
switch (G__6321) {
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
var G__6324 = arguments.length;
switch (G__6324) {
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
var G__6327 = arguments.length;
switch (G__6327) {
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
var c__2788__auto___6374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___6374,out){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___6374,out){
return (function (state_6351){
var state_val_6352 = (state_6351[(1)]);
if((state_val_6352 === (7))){
var inst_6346 = (state_6351[(2)]);
var state_6351__$1 = state_6351;
var statearr_6353_6375 = state_6351__$1;
(statearr_6353_6375[(2)] = inst_6346);

(statearr_6353_6375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6352 === (1))){
var inst_6328 = null;
var state_6351__$1 = (function (){var statearr_6354 = state_6351;
(statearr_6354[(7)] = inst_6328);

return statearr_6354;
})();
var statearr_6355_6376 = state_6351__$1;
(statearr_6355_6376[(2)] = null);

(statearr_6355_6376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6352 === (4))){
var inst_6331 = (state_6351[(8)]);
var inst_6331__$1 = (state_6351[(2)]);
var inst_6332 = (inst_6331__$1 == null);
var inst_6333 = cljs.core.not.call(null,inst_6332);
var state_6351__$1 = (function (){var statearr_6356 = state_6351;
(statearr_6356[(8)] = inst_6331__$1);

return statearr_6356;
})();
if(inst_6333){
var statearr_6357_6377 = state_6351__$1;
(statearr_6357_6377[(1)] = (5));

} else {
var statearr_6358_6378 = state_6351__$1;
(statearr_6358_6378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6352 === (6))){
var state_6351__$1 = state_6351;
var statearr_6359_6379 = state_6351__$1;
(statearr_6359_6379[(2)] = null);

(statearr_6359_6379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6352 === (3))){
var inst_6348 = (state_6351[(2)]);
var inst_6349 = cljs.core.async.close_BANG_.call(null,out);
var state_6351__$1 = (function (){var statearr_6360 = state_6351;
(statearr_6360[(9)] = inst_6348);

return statearr_6360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6351__$1,inst_6349);
} else {
if((state_val_6352 === (2))){
var state_6351__$1 = state_6351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6351__$1,(4),ch);
} else {
if((state_val_6352 === (11))){
var inst_6331 = (state_6351[(8)]);
var inst_6340 = (state_6351[(2)]);
var inst_6328 = inst_6331;
var state_6351__$1 = (function (){var statearr_6361 = state_6351;
(statearr_6361[(7)] = inst_6328);

(statearr_6361[(10)] = inst_6340);

return statearr_6361;
})();
var statearr_6362_6380 = state_6351__$1;
(statearr_6362_6380[(2)] = null);

(statearr_6362_6380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6352 === (9))){
var inst_6331 = (state_6351[(8)]);
var state_6351__$1 = state_6351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6351__$1,(11),out,inst_6331);
} else {
if((state_val_6352 === (5))){
var inst_6328 = (state_6351[(7)]);
var inst_6331 = (state_6351[(8)]);
var inst_6335 = cljs.core._EQ_.call(null,inst_6331,inst_6328);
var state_6351__$1 = state_6351;
if(inst_6335){
var statearr_6364_6381 = state_6351__$1;
(statearr_6364_6381[(1)] = (8));

} else {
var statearr_6365_6382 = state_6351__$1;
(statearr_6365_6382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6352 === (10))){
var inst_6343 = (state_6351[(2)]);
var state_6351__$1 = state_6351;
var statearr_6366_6383 = state_6351__$1;
(statearr_6366_6383[(2)] = inst_6343);

(statearr_6366_6383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6352 === (8))){
var inst_6328 = (state_6351[(7)]);
var tmp6363 = inst_6328;
var inst_6328__$1 = tmp6363;
var state_6351__$1 = (function (){var statearr_6367 = state_6351;
(statearr_6367[(7)] = inst_6328__$1);

return statearr_6367;
})();
var statearr_6368_6384 = state_6351__$1;
(statearr_6368_6384[(2)] = null);

(statearr_6368_6384[(1)] = (2));


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
});})(c__2788__auto___6374,out))
;
return ((function (switch__2633__auto__,c__2788__auto___6374,out){
return (function() {
var cljs$core$async$state_machine__2634__auto__ = null;
var cljs$core$async$state_machine__2634__auto____0 = (function (){
var statearr_6369 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6369[(0)] = cljs$core$async$state_machine__2634__auto__);

(statearr_6369[(1)] = (1));

return statearr_6369;
});
var cljs$core$async$state_machine__2634__auto____1 = (function (state_6351){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_6351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e6370){if((e6370 instanceof Object)){
var ex__2637__auto__ = e6370;
var statearr_6371_6385 = state_6351;
(statearr_6371_6385[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6386 = state_6351;
state_6351 = G__6386;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$state_machine__2634__auto__ = function(state_6351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2634__auto____1.call(this,state_6351);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2634__auto____0;
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2634__auto____1;
return cljs$core$async$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___6374,out))
})();
var state__2790__auto__ = (function (){var statearr_6372 = f__2789__auto__.call(null);
(statearr_6372[(6)] = c__2788__auto___6374);

return statearr_6372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___6374,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__6388 = arguments.length;
switch (G__6388) {
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
var c__2788__auto___6454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___6454,out){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___6454,out){
return (function (state_6426){
var state_val_6427 = (state_6426[(1)]);
if((state_val_6427 === (7))){
var inst_6422 = (state_6426[(2)]);
var state_6426__$1 = state_6426;
var statearr_6428_6455 = state_6426__$1;
(statearr_6428_6455[(2)] = inst_6422);

(statearr_6428_6455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6427 === (1))){
var inst_6389 = (new Array(n));
var inst_6390 = inst_6389;
var inst_6391 = (0);
var state_6426__$1 = (function (){var statearr_6429 = state_6426;
(statearr_6429[(7)] = inst_6391);

(statearr_6429[(8)] = inst_6390);

return statearr_6429;
})();
var statearr_6430_6456 = state_6426__$1;
(statearr_6430_6456[(2)] = null);

(statearr_6430_6456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6427 === (4))){
var inst_6394 = (state_6426[(9)]);
var inst_6394__$1 = (state_6426[(2)]);
var inst_6395 = (inst_6394__$1 == null);
var inst_6396 = cljs.core.not.call(null,inst_6395);
var state_6426__$1 = (function (){var statearr_6431 = state_6426;
(statearr_6431[(9)] = inst_6394__$1);

return statearr_6431;
})();
if(inst_6396){
var statearr_6432_6457 = state_6426__$1;
(statearr_6432_6457[(1)] = (5));

} else {
var statearr_6433_6458 = state_6426__$1;
(statearr_6433_6458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6427 === (15))){
var inst_6416 = (state_6426[(2)]);
var state_6426__$1 = state_6426;
var statearr_6434_6459 = state_6426__$1;
(statearr_6434_6459[(2)] = inst_6416);

(statearr_6434_6459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6427 === (13))){
var state_6426__$1 = state_6426;
var statearr_6435_6460 = state_6426__$1;
(statearr_6435_6460[(2)] = null);

(statearr_6435_6460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6427 === (6))){
var inst_6391 = (state_6426[(7)]);
var inst_6412 = (inst_6391 > (0));
var state_6426__$1 = state_6426;
if(cljs.core.truth_(inst_6412)){
var statearr_6436_6461 = state_6426__$1;
(statearr_6436_6461[(1)] = (12));

} else {
var statearr_6437_6462 = state_6426__$1;
(statearr_6437_6462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6427 === (3))){
var inst_6424 = (state_6426[(2)]);
var state_6426__$1 = state_6426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6426__$1,inst_6424);
} else {
if((state_val_6427 === (12))){
var inst_6390 = (state_6426[(8)]);
var inst_6414 = cljs.core.vec.call(null,inst_6390);
var state_6426__$1 = state_6426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6426__$1,(15),out,inst_6414);
} else {
if((state_val_6427 === (2))){
var state_6426__$1 = state_6426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6426__$1,(4),ch);
} else {
if((state_val_6427 === (11))){
var inst_6406 = (state_6426[(2)]);
var inst_6407 = (new Array(n));
var inst_6390 = inst_6407;
var inst_6391 = (0);
var state_6426__$1 = (function (){var statearr_6438 = state_6426;
(statearr_6438[(7)] = inst_6391);

(statearr_6438[(8)] = inst_6390);

(statearr_6438[(10)] = inst_6406);

return statearr_6438;
})();
var statearr_6439_6463 = state_6426__$1;
(statearr_6439_6463[(2)] = null);

(statearr_6439_6463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6427 === (9))){
var inst_6390 = (state_6426[(8)]);
var inst_6404 = cljs.core.vec.call(null,inst_6390);
var state_6426__$1 = state_6426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6426__$1,(11),out,inst_6404);
} else {
if((state_val_6427 === (5))){
var inst_6391 = (state_6426[(7)]);
var inst_6394 = (state_6426[(9)]);
var inst_6390 = (state_6426[(8)]);
var inst_6399 = (state_6426[(11)]);
var inst_6398 = (inst_6390[inst_6391] = inst_6394);
var inst_6399__$1 = (inst_6391 + (1));
var inst_6400 = (inst_6399__$1 < n);
var state_6426__$1 = (function (){var statearr_6440 = state_6426;
(statearr_6440[(12)] = inst_6398);

(statearr_6440[(11)] = inst_6399__$1);

return statearr_6440;
})();
if(cljs.core.truth_(inst_6400)){
var statearr_6441_6464 = state_6426__$1;
(statearr_6441_6464[(1)] = (8));

} else {
var statearr_6442_6465 = state_6426__$1;
(statearr_6442_6465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6427 === (14))){
var inst_6419 = (state_6426[(2)]);
var inst_6420 = cljs.core.async.close_BANG_.call(null,out);
var state_6426__$1 = (function (){var statearr_6444 = state_6426;
(statearr_6444[(13)] = inst_6419);

return statearr_6444;
})();
var statearr_6445_6466 = state_6426__$1;
(statearr_6445_6466[(2)] = inst_6420);

(statearr_6445_6466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6427 === (10))){
var inst_6410 = (state_6426[(2)]);
var state_6426__$1 = state_6426;
var statearr_6446_6467 = state_6426__$1;
(statearr_6446_6467[(2)] = inst_6410);

(statearr_6446_6467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6427 === (8))){
var inst_6390 = (state_6426[(8)]);
var inst_6399 = (state_6426[(11)]);
var tmp6443 = inst_6390;
var inst_6390__$1 = tmp6443;
var inst_6391 = inst_6399;
var state_6426__$1 = (function (){var statearr_6447 = state_6426;
(statearr_6447[(7)] = inst_6391);

(statearr_6447[(8)] = inst_6390__$1);

return statearr_6447;
})();
var statearr_6448_6468 = state_6426__$1;
(statearr_6448_6468[(2)] = null);

(statearr_6448_6468[(1)] = (2));


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
});})(c__2788__auto___6454,out))
;
return ((function (switch__2633__auto__,c__2788__auto___6454,out){
return (function() {
var cljs$core$async$state_machine__2634__auto__ = null;
var cljs$core$async$state_machine__2634__auto____0 = (function (){
var statearr_6449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6449[(0)] = cljs$core$async$state_machine__2634__auto__);

(statearr_6449[(1)] = (1));

return statearr_6449;
});
var cljs$core$async$state_machine__2634__auto____1 = (function (state_6426){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_6426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e6450){if((e6450 instanceof Object)){
var ex__2637__auto__ = e6450;
var statearr_6451_6469 = state_6426;
(statearr_6451_6469[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6470 = state_6426;
state_6426 = G__6470;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$state_machine__2634__auto__ = function(state_6426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2634__auto____1.call(this,state_6426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2634__auto____0;
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2634__auto____1;
return cljs$core$async$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___6454,out))
})();
var state__2790__auto__ = (function (){var statearr_6452 = f__2789__auto__.call(null);
(statearr_6452[(6)] = c__2788__auto___6454);

return statearr_6452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___6454,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__6472 = arguments.length;
switch (G__6472) {
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
var c__2788__auto___6542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___6542,out){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___6542,out){
return (function (state_6514){
var state_val_6515 = (state_6514[(1)]);
if((state_val_6515 === (7))){
var inst_6510 = (state_6514[(2)]);
var state_6514__$1 = state_6514;
var statearr_6516_6543 = state_6514__$1;
(statearr_6516_6543[(2)] = inst_6510);

(statearr_6516_6543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6515 === (1))){
var inst_6473 = [];
var inst_6474 = inst_6473;
var inst_6475 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_6514__$1 = (function (){var statearr_6517 = state_6514;
(statearr_6517[(7)] = inst_6474);

(statearr_6517[(8)] = inst_6475);

return statearr_6517;
})();
var statearr_6518_6544 = state_6514__$1;
(statearr_6518_6544[(2)] = null);

(statearr_6518_6544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6515 === (4))){
var inst_6478 = (state_6514[(9)]);
var inst_6478__$1 = (state_6514[(2)]);
var inst_6479 = (inst_6478__$1 == null);
var inst_6480 = cljs.core.not.call(null,inst_6479);
var state_6514__$1 = (function (){var statearr_6519 = state_6514;
(statearr_6519[(9)] = inst_6478__$1);

return statearr_6519;
})();
if(inst_6480){
var statearr_6520_6545 = state_6514__$1;
(statearr_6520_6545[(1)] = (5));

} else {
var statearr_6521_6546 = state_6514__$1;
(statearr_6521_6546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6515 === (15))){
var inst_6504 = (state_6514[(2)]);
var state_6514__$1 = state_6514;
var statearr_6522_6547 = state_6514__$1;
(statearr_6522_6547[(2)] = inst_6504);

(statearr_6522_6547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6515 === (13))){
var state_6514__$1 = state_6514;
var statearr_6523_6548 = state_6514__$1;
(statearr_6523_6548[(2)] = null);

(statearr_6523_6548[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6515 === (6))){
var inst_6474 = (state_6514[(7)]);
var inst_6499 = inst_6474.length;
var inst_6500 = (inst_6499 > (0));
var state_6514__$1 = state_6514;
if(cljs.core.truth_(inst_6500)){
var statearr_6524_6549 = state_6514__$1;
(statearr_6524_6549[(1)] = (12));

} else {
var statearr_6525_6550 = state_6514__$1;
(statearr_6525_6550[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6515 === (3))){
var inst_6512 = (state_6514[(2)]);
var state_6514__$1 = state_6514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6514__$1,inst_6512);
} else {
if((state_val_6515 === (12))){
var inst_6474 = (state_6514[(7)]);
var inst_6502 = cljs.core.vec.call(null,inst_6474);
var state_6514__$1 = state_6514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6514__$1,(15),out,inst_6502);
} else {
if((state_val_6515 === (2))){
var state_6514__$1 = state_6514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6514__$1,(4),ch);
} else {
if((state_val_6515 === (11))){
var inst_6478 = (state_6514[(9)]);
var inst_6482 = (state_6514[(10)]);
var inst_6492 = (state_6514[(2)]);
var inst_6493 = [];
var inst_6494 = inst_6493.push(inst_6478);
var inst_6474 = inst_6493;
var inst_6475 = inst_6482;
var state_6514__$1 = (function (){var statearr_6526 = state_6514;
(statearr_6526[(7)] = inst_6474);

(statearr_6526[(8)] = inst_6475);

(statearr_6526[(11)] = inst_6494);

(statearr_6526[(12)] = inst_6492);

return statearr_6526;
})();
var statearr_6527_6551 = state_6514__$1;
(statearr_6527_6551[(2)] = null);

(statearr_6527_6551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6515 === (9))){
var inst_6474 = (state_6514[(7)]);
var inst_6490 = cljs.core.vec.call(null,inst_6474);
var state_6514__$1 = state_6514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6514__$1,(11),out,inst_6490);
} else {
if((state_val_6515 === (5))){
var inst_6475 = (state_6514[(8)]);
var inst_6478 = (state_6514[(9)]);
var inst_6482 = (state_6514[(10)]);
var inst_6482__$1 = f.call(null,inst_6478);
var inst_6483 = cljs.core._EQ_.call(null,inst_6482__$1,inst_6475);
var inst_6484 = cljs.core.keyword_identical_QMARK_.call(null,inst_6475,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_6485 = ((inst_6483) || (inst_6484));
var state_6514__$1 = (function (){var statearr_6528 = state_6514;
(statearr_6528[(10)] = inst_6482__$1);

return statearr_6528;
})();
if(cljs.core.truth_(inst_6485)){
var statearr_6529_6552 = state_6514__$1;
(statearr_6529_6552[(1)] = (8));

} else {
var statearr_6530_6553 = state_6514__$1;
(statearr_6530_6553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6515 === (14))){
var inst_6507 = (state_6514[(2)]);
var inst_6508 = cljs.core.async.close_BANG_.call(null,out);
var state_6514__$1 = (function (){var statearr_6532 = state_6514;
(statearr_6532[(13)] = inst_6507);

return statearr_6532;
})();
var statearr_6533_6554 = state_6514__$1;
(statearr_6533_6554[(2)] = inst_6508);

(statearr_6533_6554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6515 === (10))){
var inst_6497 = (state_6514[(2)]);
var state_6514__$1 = state_6514;
var statearr_6534_6555 = state_6514__$1;
(statearr_6534_6555[(2)] = inst_6497);

(statearr_6534_6555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6515 === (8))){
var inst_6474 = (state_6514[(7)]);
var inst_6478 = (state_6514[(9)]);
var inst_6482 = (state_6514[(10)]);
var inst_6487 = inst_6474.push(inst_6478);
var tmp6531 = inst_6474;
var inst_6474__$1 = tmp6531;
var inst_6475 = inst_6482;
var state_6514__$1 = (function (){var statearr_6535 = state_6514;
(statearr_6535[(7)] = inst_6474__$1);

(statearr_6535[(8)] = inst_6475);

(statearr_6535[(14)] = inst_6487);

return statearr_6535;
})();
var statearr_6536_6556 = state_6514__$1;
(statearr_6536_6556[(2)] = null);

(statearr_6536_6556[(1)] = (2));


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
});})(c__2788__auto___6542,out))
;
return ((function (switch__2633__auto__,c__2788__auto___6542,out){
return (function() {
var cljs$core$async$state_machine__2634__auto__ = null;
var cljs$core$async$state_machine__2634__auto____0 = (function (){
var statearr_6537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6537[(0)] = cljs$core$async$state_machine__2634__auto__);

(statearr_6537[(1)] = (1));

return statearr_6537;
});
var cljs$core$async$state_machine__2634__auto____1 = (function (state_6514){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_6514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e6538){if((e6538 instanceof Object)){
var ex__2637__auto__ = e6538;
var statearr_6539_6557 = state_6514;
(statearr_6539_6557[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6558 = state_6514;
state_6514 = G__6558;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
cljs$core$async$state_machine__2634__auto__ = function(state_6514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2634__auto____1.call(this,state_6514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2634__auto____0;
cljs$core$async$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2634__auto____1;
return cljs$core$async$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___6542,out))
})();
var state__2790__auto__ = (function (){var statearr_6540 = f__2789__auto__.call(null);
(statearr_6540[(6)] = c__2788__auto___6542);

return statearr_6540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___6542,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

