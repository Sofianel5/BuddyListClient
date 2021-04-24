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
var G__21893 = arguments.length;
switch (G__21893) {
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
if(typeof cljs.core.async.t_cljs$core$async21894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21894 = (function (f,blockable,meta21895){
this.f = f;
this.blockable = blockable;
this.meta21895 = meta21895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21896,meta21895__$1){
var self__ = this;
var _21896__$1 = this;
return (new cljs.core.async.t_cljs$core$async21894(self__.f,self__.blockable,meta21895__$1));
});

cljs.core.async.t_cljs$core$async21894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21896){
var self__ = this;
var _21896__$1 = this;
return self__.meta21895;
});

cljs.core.async.t_cljs$core$async21894.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21895","meta21895",1168914814,null)], null);
});

cljs.core.async.t_cljs$core$async21894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21894";

cljs.core.async.t_cljs$core$async21894.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async21894");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21894.
 */
cljs.core.async.__GT_t_cljs$core$async21894 = (function cljs$core$async$__GT_t_cljs$core$async21894(f__$1,blockable__$1,meta21895){
return (new cljs.core.async.t_cljs$core$async21894(f__$1,blockable__$1,meta21895));
});

}

return (new cljs.core.async.t_cljs$core$async21894(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21900 = arguments.length;
switch (G__21900) {
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
var G__21903 = arguments.length;
switch (G__21903) {
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
var G__21906 = arguments.length;
switch (G__21906) {
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
var val_21908 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21908);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21908,ret){
return (function (){
return fn1.call(null,val_21908);
});})(val_21908,ret))
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
var G__21910 = arguments.length;
switch (G__21910) {
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
var n__4374__auto___21912 = n;
var x_21913 = (0);
while(true){
if((x_21913 < n__4374__auto___21912)){
(a[x_21913] = (0));

var G__21914 = (x_21913 + (1));
x_21913 = G__21914;
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

var G__21915 = (i + (1));
i = G__21915;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21916 = (function (flag,meta21917){
this.flag = flag;
this.meta21917 = meta21917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21918,meta21917__$1){
var self__ = this;
var _21918__$1 = this;
return (new cljs.core.async.t_cljs$core$async21916(self__.flag,meta21917__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21918){
var self__ = this;
var _21918__$1 = this;
return self__.meta21917;
});})(flag))
;

cljs.core.async.t_cljs$core$async21916.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21916.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21916.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21917","meta21917",1333025949,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21916";

cljs.core.async.t_cljs$core$async21916.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async21916");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21916.
 */
cljs.core.async.__GT_t_cljs$core$async21916 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21916(flag__$1,meta21917){
return (new cljs.core.async.t_cljs$core$async21916(flag__$1,meta21917));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21916(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21919 = (function (flag,cb,meta21920){
this.flag = flag;
this.cb = cb;
this.meta21920 = meta21920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21921,meta21920__$1){
var self__ = this;
var _21921__$1 = this;
return (new cljs.core.async.t_cljs$core$async21919(self__.flag,self__.cb,meta21920__$1));
});

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21921){
var self__ = this;
var _21921__$1 = this;
return self__.meta21920;
});

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21920","meta21920",-838899658,null)], null);
});

cljs.core.async.t_cljs$core$async21919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21919";

cljs.core.async.t_cljs$core$async21919.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async21919");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21919.
 */
cljs.core.async.__GT_t_cljs$core$async21919 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21919(flag__$1,cb__$1,meta21920){
return (new cljs.core.async.t_cljs$core$async21919(flag__$1,cb__$1,meta21920));
});

}

return (new cljs.core.async.t_cljs$core$async21919(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21922_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21922_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21923_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21923_SHARP_,port], null));
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
var G__21924 = (i + (1));
i = G__21924;
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
var len__4497__auto___21930 = arguments.length;
var i__4498__auto___21931 = (0);
while(true){
if((i__4498__auto___21931 < len__4497__auto___21930)){
args__4500__auto__.push((arguments[i__4498__auto___21931]));

var G__21932 = (i__4498__auto___21931 + (1));
i__4498__auto___21931 = G__21932;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21927){
var map__21928 = p__21927;
var map__21928__$1 = ((((!((map__21928 == null)))?(((((map__21928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21928):map__21928);
var opts = map__21928__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21925){
var G__21926 = cljs.core.first.call(null,seq21925);
var seq21925__$1 = cljs.core.next.call(null,seq21925);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21926,seq21925__$1);
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
var G__21934 = arguments.length;
switch (G__21934) {
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
var c__19618__auto___21980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___21980){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___21980){
return (function (state_21958){
var state_val_21959 = (state_21958[(1)]);
if((state_val_21959 === (7))){
var inst_21954 = (state_21958[(2)]);
var state_21958__$1 = state_21958;
var statearr_21960_21981 = state_21958__$1;
(statearr_21960_21981[(2)] = inst_21954);

(statearr_21960_21981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (1))){
var state_21958__$1 = state_21958;
var statearr_21961_21982 = state_21958__$1;
(statearr_21961_21982[(2)] = null);

(statearr_21961_21982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (4))){
var inst_21937 = (state_21958[(7)]);
var inst_21937__$1 = (state_21958[(2)]);
var inst_21938 = (inst_21937__$1 == null);
var state_21958__$1 = (function (){var statearr_21962 = state_21958;
(statearr_21962[(7)] = inst_21937__$1);

return statearr_21962;
})();
if(cljs.core.truth_(inst_21938)){
var statearr_21963_21983 = state_21958__$1;
(statearr_21963_21983[(1)] = (5));

} else {
var statearr_21964_21984 = state_21958__$1;
(statearr_21964_21984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (13))){
var state_21958__$1 = state_21958;
var statearr_21965_21985 = state_21958__$1;
(statearr_21965_21985[(2)] = null);

(statearr_21965_21985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (6))){
var inst_21937 = (state_21958[(7)]);
var state_21958__$1 = state_21958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21958__$1,(11),to,inst_21937);
} else {
if((state_val_21959 === (3))){
var inst_21956 = (state_21958[(2)]);
var state_21958__$1 = state_21958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21958__$1,inst_21956);
} else {
if((state_val_21959 === (12))){
var state_21958__$1 = state_21958;
var statearr_21966_21986 = state_21958__$1;
(statearr_21966_21986[(2)] = null);

(statearr_21966_21986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (2))){
var state_21958__$1 = state_21958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21958__$1,(4),from);
} else {
if((state_val_21959 === (11))){
var inst_21947 = (state_21958[(2)]);
var state_21958__$1 = state_21958;
if(cljs.core.truth_(inst_21947)){
var statearr_21967_21987 = state_21958__$1;
(statearr_21967_21987[(1)] = (12));

} else {
var statearr_21968_21988 = state_21958__$1;
(statearr_21968_21988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (9))){
var state_21958__$1 = state_21958;
var statearr_21969_21989 = state_21958__$1;
(statearr_21969_21989[(2)] = null);

(statearr_21969_21989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (5))){
var state_21958__$1 = state_21958;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21970_21990 = state_21958__$1;
(statearr_21970_21990[(1)] = (8));

} else {
var statearr_21971_21991 = state_21958__$1;
(statearr_21971_21991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (14))){
var inst_21952 = (state_21958[(2)]);
var state_21958__$1 = state_21958;
var statearr_21972_21992 = state_21958__$1;
(statearr_21972_21992[(2)] = inst_21952);

(statearr_21972_21992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (10))){
var inst_21944 = (state_21958[(2)]);
var state_21958__$1 = state_21958;
var statearr_21973_21993 = state_21958__$1;
(statearr_21973_21993[(2)] = inst_21944);

(statearr_21973_21993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (8))){
var inst_21941 = cljs.core.async.close_BANG_.call(null,to);
var state_21958__$1 = state_21958;
var statearr_21974_21994 = state_21958__$1;
(statearr_21974_21994[(2)] = inst_21941);

(statearr_21974_21994[(1)] = (10));


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
});})(c__19618__auto___21980))
;
return ((function (switch__19597__auto__,c__19618__auto___21980){
return (function() {
var cljs$core$async$state_machine__19598__auto__ = null;
var cljs$core$async$state_machine__19598__auto____0 = (function (){
var statearr_21975 = [null,null,null,null,null,null,null,null];
(statearr_21975[(0)] = cljs$core$async$state_machine__19598__auto__);

(statearr_21975[(1)] = (1));

return statearr_21975;
});
var cljs$core$async$state_machine__19598__auto____1 = (function (state_21958){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_21958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e21976){if((e21976 instanceof Object)){
var ex__19601__auto__ = e21976;
var statearr_21977_21995 = state_21958;
(statearr_21977_21995[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21996 = state_21958;
state_21958 = G__21996;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$state_machine__19598__auto__ = function(state_21958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19598__auto____1.call(this,state_21958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19598__auto____0;
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19598__auto____1;
return cljs$core$async$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___21980))
})();
var state__19620__auto__ = (function (){var statearr_21978 = f__19619__auto__.call(null);
(statearr_21978[(6)] = c__19618__auto___21980);

return statearr_21978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___21980))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21997){
var vec__21998 = p__21997;
var v = cljs.core.nth.call(null,vec__21998,(0),null);
var p = cljs.core.nth.call(null,vec__21998,(1),null);
var job = vec__21998;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19618__auto___22169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___22169,res,vec__21998,v,p,job,jobs,results){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___22169,res,vec__21998,v,p,job,jobs,results){
return (function (state_22005){
var state_val_22006 = (state_22005[(1)]);
if((state_val_22006 === (1))){
var state_22005__$1 = state_22005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22005__$1,(2),res,v);
} else {
if((state_val_22006 === (2))){
var inst_22002 = (state_22005[(2)]);
var inst_22003 = cljs.core.async.close_BANG_.call(null,res);
var state_22005__$1 = (function (){var statearr_22007 = state_22005;
(statearr_22007[(7)] = inst_22002);

return statearr_22007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22005__$1,inst_22003);
} else {
return null;
}
}
});})(c__19618__auto___22169,res,vec__21998,v,p,job,jobs,results))
;
return ((function (switch__19597__auto__,c__19618__auto___22169,res,vec__21998,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0 = (function (){
var statearr_22008 = [null,null,null,null,null,null,null,null];
(statearr_22008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__);

(statearr_22008[(1)] = (1));

return statearr_22008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1 = (function (state_22005){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_22005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e22009){if((e22009 instanceof Object)){
var ex__19601__auto__ = e22009;
var statearr_22010_22170 = state_22005;
(statearr_22010_22170[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22171 = state_22005;
state_22005 = G__22171;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__ = function(state_22005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1.call(this,state_22005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___22169,res,vec__21998,v,p,job,jobs,results))
})();
var state__19620__auto__ = (function (){var statearr_22011 = f__19619__auto__.call(null);
(statearr_22011[(6)] = c__19618__auto___22169);

return statearr_22011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___22169,res,vec__21998,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22012){
var vec__22013 = p__22012;
var v = cljs.core.nth.call(null,vec__22013,(0),null);
var p = cljs.core.nth.call(null,vec__22013,(1),null);
var job = vec__22013;
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
var n__4374__auto___22172 = n;
var __22173 = (0);
while(true){
if((__22173 < n__4374__auto___22172)){
var G__22016_22174 = type;
var G__22016_22175__$1 = (((G__22016_22174 instanceof cljs.core.Keyword))?G__22016_22174.fqn:null);
switch (G__22016_22175__$1) {
case "compute":
var c__19618__auto___22177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22173,c__19618__auto___22177,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (__22173,c__19618__auto___22177,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async){
return (function (state_22029){
var state_val_22030 = (state_22029[(1)]);
if((state_val_22030 === (1))){
var state_22029__$1 = state_22029;
var statearr_22031_22178 = state_22029__$1;
(statearr_22031_22178[(2)] = null);

(statearr_22031_22178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (2))){
var state_22029__$1 = state_22029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22029__$1,(4),jobs);
} else {
if((state_val_22030 === (3))){
var inst_22027 = (state_22029[(2)]);
var state_22029__$1 = state_22029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22029__$1,inst_22027);
} else {
if((state_val_22030 === (4))){
var inst_22019 = (state_22029[(2)]);
var inst_22020 = process.call(null,inst_22019);
var state_22029__$1 = state_22029;
if(cljs.core.truth_(inst_22020)){
var statearr_22032_22179 = state_22029__$1;
(statearr_22032_22179[(1)] = (5));

} else {
var statearr_22033_22180 = state_22029__$1;
(statearr_22033_22180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (5))){
var state_22029__$1 = state_22029;
var statearr_22034_22181 = state_22029__$1;
(statearr_22034_22181[(2)] = null);

(statearr_22034_22181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (6))){
var state_22029__$1 = state_22029;
var statearr_22035_22182 = state_22029__$1;
(statearr_22035_22182[(2)] = null);

(statearr_22035_22182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (7))){
var inst_22025 = (state_22029[(2)]);
var state_22029__$1 = state_22029;
var statearr_22036_22183 = state_22029__$1;
(statearr_22036_22183[(2)] = inst_22025);

(statearr_22036_22183[(1)] = (3));


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
});})(__22173,c__19618__auto___22177,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async))
;
return ((function (__22173,switch__19597__auto__,c__19618__auto___22177,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0 = (function (){
var statearr_22037 = [null,null,null,null,null,null,null];
(statearr_22037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__);

(statearr_22037[(1)] = (1));

return statearr_22037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1 = (function (state_22029){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_22029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e22038){if((e22038 instanceof Object)){
var ex__19601__auto__ = e22038;
var statearr_22039_22184 = state_22029;
(statearr_22039_22184[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22185 = state_22029;
state_22029 = G__22185;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__ = function(state_22029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1.call(this,state_22029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__;
})()
;})(__22173,switch__19597__auto__,c__19618__auto___22177,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async))
})();
var state__19620__auto__ = (function (){var statearr_22040 = f__19619__auto__.call(null);
(statearr_22040[(6)] = c__19618__auto___22177);

return statearr_22040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(__22173,c__19618__auto___22177,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async))
);


break;
case "async":
var c__19618__auto___22186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22173,c__19618__auto___22186,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (__22173,c__19618__auto___22186,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async){
return (function (state_22053){
var state_val_22054 = (state_22053[(1)]);
if((state_val_22054 === (1))){
var state_22053__$1 = state_22053;
var statearr_22055_22187 = state_22053__$1;
(statearr_22055_22187[(2)] = null);

(statearr_22055_22187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (2))){
var state_22053__$1 = state_22053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22053__$1,(4),jobs);
} else {
if((state_val_22054 === (3))){
var inst_22051 = (state_22053[(2)]);
var state_22053__$1 = state_22053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22053__$1,inst_22051);
} else {
if((state_val_22054 === (4))){
var inst_22043 = (state_22053[(2)]);
var inst_22044 = async.call(null,inst_22043);
var state_22053__$1 = state_22053;
if(cljs.core.truth_(inst_22044)){
var statearr_22056_22188 = state_22053__$1;
(statearr_22056_22188[(1)] = (5));

} else {
var statearr_22057_22189 = state_22053__$1;
(statearr_22057_22189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (5))){
var state_22053__$1 = state_22053;
var statearr_22058_22190 = state_22053__$1;
(statearr_22058_22190[(2)] = null);

(statearr_22058_22190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (6))){
var state_22053__$1 = state_22053;
var statearr_22059_22191 = state_22053__$1;
(statearr_22059_22191[(2)] = null);

(statearr_22059_22191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (7))){
var inst_22049 = (state_22053[(2)]);
var state_22053__$1 = state_22053;
var statearr_22060_22192 = state_22053__$1;
(statearr_22060_22192[(2)] = inst_22049);

(statearr_22060_22192[(1)] = (3));


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
});})(__22173,c__19618__auto___22186,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async))
;
return ((function (__22173,switch__19597__auto__,c__19618__auto___22186,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0 = (function (){
var statearr_22061 = [null,null,null,null,null,null,null];
(statearr_22061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__);

(statearr_22061[(1)] = (1));

return statearr_22061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1 = (function (state_22053){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_22053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e22062){if((e22062 instanceof Object)){
var ex__19601__auto__ = e22062;
var statearr_22063_22193 = state_22053;
(statearr_22063_22193[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22194 = state_22053;
state_22053 = G__22194;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__ = function(state_22053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1.call(this,state_22053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__;
})()
;})(__22173,switch__19597__auto__,c__19618__auto___22186,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async))
})();
var state__19620__auto__ = (function (){var statearr_22064 = f__19619__auto__.call(null);
(statearr_22064[(6)] = c__19618__auto___22186);

return statearr_22064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(__22173,c__19618__auto___22186,G__22016_22174,G__22016_22175__$1,n__4374__auto___22172,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22016_22175__$1)].join('')));

}

var G__22195 = (__22173 + (1));
__22173 = G__22195;
continue;
} else {
}
break;
}

var c__19618__auto___22196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___22196,jobs,results,process,async){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___22196,jobs,results,process,async){
return (function (state_22086){
var state_val_22087 = (state_22086[(1)]);
if((state_val_22087 === (1))){
var state_22086__$1 = state_22086;
var statearr_22088_22197 = state_22086__$1;
(statearr_22088_22197[(2)] = null);

(statearr_22088_22197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (2))){
var state_22086__$1 = state_22086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22086__$1,(4),from);
} else {
if((state_val_22087 === (3))){
var inst_22084 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22086__$1,inst_22084);
} else {
if((state_val_22087 === (4))){
var inst_22067 = (state_22086[(7)]);
var inst_22067__$1 = (state_22086[(2)]);
var inst_22068 = (inst_22067__$1 == null);
var state_22086__$1 = (function (){var statearr_22089 = state_22086;
(statearr_22089[(7)] = inst_22067__$1);

return statearr_22089;
})();
if(cljs.core.truth_(inst_22068)){
var statearr_22090_22198 = state_22086__$1;
(statearr_22090_22198[(1)] = (5));

} else {
var statearr_22091_22199 = state_22086__$1;
(statearr_22091_22199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (5))){
var inst_22070 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22086__$1 = state_22086;
var statearr_22092_22200 = state_22086__$1;
(statearr_22092_22200[(2)] = inst_22070);

(statearr_22092_22200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (6))){
var inst_22072 = (state_22086[(8)]);
var inst_22067 = (state_22086[(7)]);
var inst_22072__$1 = cljs.core.async.chan.call(null,(1));
var inst_22073 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22074 = [inst_22067,inst_22072__$1];
var inst_22075 = (new cljs.core.PersistentVector(null,2,(5),inst_22073,inst_22074,null));
var state_22086__$1 = (function (){var statearr_22093 = state_22086;
(statearr_22093[(8)] = inst_22072__$1);

return statearr_22093;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22086__$1,(8),jobs,inst_22075);
} else {
if((state_val_22087 === (7))){
var inst_22082 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22094_22201 = state_22086__$1;
(statearr_22094_22201[(2)] = inst_22082);

(statearr_22094_22201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (8))){
var inst_22072 = (state_22086[(8)]);
var inst_22077 = (state_22086[(2)]);
var state_22086__$1 = (function (){var statearr_22095 = state_22086;
(statearr_22095[(9)] = inst_22077);

return statearr_22095;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22086__$1,(9),results,inst_22072);
} else {
if((state_val_22087 === (9))){
var inst_22079 = (state_22086[(2)]);
var state_22086__$1 = (function (){var statearr_22096 = state_22086;
(statearr_22096[(10)] = inst_22079);

return statearr_22096;
})();
var statearr_22097_22202 = state_22086__$1;
(statearr_22097_22202[(2)] = null);

(statearr_22097_22202[(1)] = (2));


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
});})(c__19618__auto___22196,jobs,results,process,async))
;
return ((function (switch__19597__auto__,c__19618__auto___22196,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0 = (function (){
var statearr_22098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__);

(statearr_22098[(1)] = (1));

return statearr_22098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1 = (function (state_22086){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_22086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e22099){if((e22099 instanceof Object)){
var ex__19601__auto__ = e22099;
var statearr_22100_22203 = state_22086;
(statearr_22100_22203[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22204 = state_22086;
state_22086 = G__22204;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__ = function(state_22086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1.call(this,state_22086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___22196,jobs,results,process,async))
})();
var state__19620__auto__ = (function (){var statearr_22101 = f__19619__auto__.call(null);
(statearr_22101[(6)] = c__19618__auto___22196);

return statearr_22101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___22196,jobs,results,process,async))
);


var c__19618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto__,jobs,results,process,async){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto__,jobs,results,process,async){
return (function (state_22139){
var state_val_22140 = (state_22139[(1)]);
if((state_val_22140 === (7))){
var inst_22135 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22141_22205 = state_22139__$1;
(statearr_22141_22205[(2)] = inst_22135);

(statearr_22141_22205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (20))){
var state_22139__$1 = state_22139;
var statearr_22142_22206 = state_22139__$1;
(statearr_22142_22206[(2)] = null);

(statearr_22142_22206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (1))){
var state_22139__$1 = state_22139;
var statearr_22143_22207 = state_22139__$1;
(statearr_22143_22207[(2)] = null);

(statearr_22143_22207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (4))){
var inst_22104 = (state_22139[(7)]);
var inst_22104__$1 = (state_22139[(2)]);
var inst_22105 = (inst_22104__$1 == null);
var state_22139__$1 = (function (){var statearr_22144 = state_22139;
(statearr_22144[(7)] = inst_22104__$1);

return statearr_22144;
})();
if(cljs.core.truth_(inst_22105)){
var statearr_22145_22208 = state_22139__$1;
(statearr_22145_22208[(1)] = (5));

} else {
var statearr_22146_22209 = state_22139__$1;
(statearr_22146_22209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (15))){
var inst_22117 = (state_22139[(8)]);
var state_22139__$1 = state_22139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22139__$1,(18),to,inst_22117);
} else {
if((state_val_22140 === (21))){
var inst_22130 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22147_22210 = state_22139__$1;
(statearr_22147_22210[(2)] = inst_22130);

(statearr_22147_22210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (13))){
var inst_22132 = (state_22139[(2)]);
var state_22139__$1 = (function (){var statearr_22148 = state_22139;
(statearr_22148[(9)] = inst_22132);

return statearr_22148;
})();
var statearr_22149_22211 = state_22139__$1;
(statearr_22149_22211[(2)] = null);

(statearr_22149_22211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (6))){
var inst_22104 = (state_22139[(7)]);
var state_22139__$1 = state_22139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22139__$1,(11),inst_22104);
} else {
if((state_val_22140 === (17))){
var inst_22125 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
if(cljs.core.truth_(inst_22125)){
var statearr_22150_22212 = state_22139__$1;
(statearr_22150_22212[(1)] = (19));

} else {
var statearr_22151_22213 = state_22139__$1;
(statearr_22151_22213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (3))){
var inst_22137 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22139__$1,inst_22137);
} else {
if((state_val_22140 === (12))){
var inst_22114 = (state_22139[(10)]);
var state_22139__$1 = state_22139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22139__$1,(14),inst_22114);
} else {
if((state_val_22140 === (2))){
var state_22139__$1 = state_22139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22139__$1,(4),results);
} else {
if((state_val_22140 === (19))){
var state_22139__$1 = state_22139;
var statearr_22152_22214 = state_22139__$1;
(statearr_22152_22214[(2)] = null);

(statearr_22152_22214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (11))){
var inst_22114 = (state_22139[(2)]);
var state_22139__$1 = (function (){var statearr_22153 = state_22139;
(statearr_22153[(10)] = inst_22114);

return statearr_22153;
})();
var statearr_22154_22215 = state_22139__$1;
(statearr_22154_22215[(2)] = null);

(statearr_22154_22215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (9))){
var state_22139__$1 = state_22139;
var statearr_22155_22216 = state_22139__$1;
(statearr_22155_22216[(2)] = null);

(statearr_22155_22216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (5))){
var state_22139__$1 = state_22139;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22156_22217 = state_22139__$1;
(statearr_22156_22217[(1)] = (8));

} else {
var statearr_22157_22218 = state_22139__$1;
(statearr_22157_22218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (14))){
var inst_22119 = (state_22139[(11)]);
var inst_22117 = (state_22139[(8)]);
var inst_22117__$1 = (state_22139[(2)]);
var inst_22118 = (inst_22117__$1 == null);
var inst_22119__$1 = cljs.core.not.call(null,inst_22118);
var state_22139__$1 = (function (){var statearr_22158 = state_22139;
(statearr_22158[(11)] = inst_22119__$1);

(statearr_22158[(8)] = inst_22117__$1);

return statearr_22158;
})();
if(inst_22119__$1){
var statearr_22159_22219 = state_22139__$1;
(statearr_22159_22219[(1)] = (15));

} else {
var statearr_22160_22220 = state_22139__$1;
(statearr_22160_22220[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (16))){
var inst_22119 = (state_22139[(11)]);
var state_22139__$1 = state_22139;
var statearr_22161_22221 = state_22139__$1;
(statearr_22161_22221[(2)] = inst_22119);

(statearr_22161_22221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (10))){
var inst_22111 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22162_22222 = state_22139__$1;
(statearr_22162_22222[(2)] = inst_22111);

(statearr_22162_22222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (18))){
var inst_22122 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22163_22223 = state_22139__$1;
(statearr_22163_22223[(2)] = inst_22122);

(statearr_22163_22223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (8))){
var inst_22108 = cljs.core.async.close_BANG_.call(null,to);
var state_22139__$1 = state_22139;
var statearr_22164_22224 = state_22139__$1;
(statearr_22164_22224[(2)] = inst_22108);

(statearr_22164_22224[(1)] = (10));


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
});})(c__19618__auto__,jobs,results,process,async))
;
return ((function (switch__19597__auto__,c__19618__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0 = (function (){
var statearr_22165 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__);

(statearr_22165[(1)] = (1));

return statearr_22165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1 = (function (state_22139){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_22139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e22166){if((e22166 instanceof Object)){
var ex__19601__auto__ = e22166;
var statearr_22167_22225 = state_22139;
(statearr_22167_22225[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22226 = state_22139;
state_22139 = G__22226;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__ = function(state_22139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1.call(this,state_22139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto__,jobs,results,process,async))
})();
var state__19620__auto__ = (function (){var statearr_22168 = f__19619__auto__.call(null);
(statearr_22168[(6)] = c__19618__auto__);

return statearr_22168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto__,jobs,results,process,async))
);

return c__19618__auto__;
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
var G__22228 = arguments.length;
switch (G__22228) {
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
var G__22231 = arguments.length;
switch (G__22231) {
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
var G__22234 = arguments.length;
switch (G__22234) {
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
var c__19618__auto___22283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___22283,tc,fc){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___22283,tc,fc){
return (function (state_22260){
var state_val_22261 = (state_22260[(1)]);
if((state_val_22261 === (7))){
var inst_22256 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
var statearr_22262_22284 = state_22260__$1;
(statearr_22262_22284[(2)] = inst_22256);

(statearr_22262_22284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (1))){
var state_22260__$1 = state_22260;
var statearr_22263_22285 = state_22260__$1;
(statearr_22263_22285[(2)] = null);

(statearr_22263_22285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (4))){
var inst_22237 = (state_22260[(7)]);
var inst_22237__$1 = (state_22260[(2)]);
var inst_22238 = (inst_22237__$1 == null);
var state_22260__$1 = (function (){var statearr_22264 = state_22260;
(statearr_22264[(7)] = inst_22237__$1);

return statearr_22264;
})();
if(cljs.core.truth_(inst_22238)){
var statearr_22265_22286 = state_22260__$1;
(statearr_22265_22286[(1)] = (5));

} else {
var statearr_22266_22287 = state_22260__$1;
(statearr_22266_22287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (13))){
var state_22260__$1 = state_22260;
var statearr_22267_22288 = state_22260__$1;
(statearr_22267_22288[(2)] = null);

(statearr_22267_22288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (6))){
var inst_22237 = (state_22260[(7)]);
var inst_22243 = p.call(null,inst_22237);
var state_22260__$1 = state_22260;
if(cljs.core.truth_(inst_22243)){
var statearr_22268_22289 = state_22260__$1;
(statearr_22268_22289[(1)] = (9));

} else {
var statearr_22269_22290 = state_22260__$1;
(statearr_22269_22290[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (3))){
var inst_22258 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22260__$1,inst_22258);
} else {
if((state_val_22261 === (12))){
var state_22260__$1 = state_22260;
var statearr_22270_22291 = state_22260__$1;
(statearr_22270_22291[(2)] = null);

(statearr_22270_22291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (2))){
var state_22260__$1 = state_22260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22260__$1,(4),ch);
} else {
if((state_val_22261 === (11))){
var inst_22237 = (state_22260[(7)]);
var inst_22247 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22260__$1,(8),inst_22247,inst_22237);
} else {
if((state_val_22261 === (9))){
var state_22260__$1 = state_22260;
var statearr_22271_22292 = state_22260__$1;
(statearr_22271_22292[(2)] = tc);

(statearr_22271_22292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (5))){
var inst_22240 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22241 = cljs.core.async.close_BANG_.call(null,fc);
var state_22260__$1 = (function (){var statearr_22272 = state_22260;
(statearr_22272[(8)] = inst_22240);

return statearr_22272;
})();
var statearr_22273_22293 = state_22260__$1;
(statearr_22273_22293[(2)] = inst_22241);

(statearr_22273_22293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (14))){
var inst_22254 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
var statearr_22274_22294 = state_22260__$1;
(statearr_22274_22294[(2)] = inst_22254);

(statearr_22274_22294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (10))){
var state_22260__$1 = state_22260;
var statearr_22275_22295 = state_22260__$1;
(statearr_22275_22295[(2)] = fc);

(statearr_22275_22295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (8))){
var inst_22249 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
if(cljs.core.truth_(inst_22249)){
var statearr_22276_22296 = state_22260__$1;
(statearr_22276_22296[(1)] = (12));

} else {
var statearr_22277_22297 = state_22260__$1;
(statearr_22277_22297[(1)] = (13));

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
});})(c__19618__auto___22283,tc,fc))
;
return ((function (switch__19597__auto__,c__19618__auto___22283,tc,fc){
return (function() {
var cljs$core$async$state_machine__19598__auto__ = null;
var cljs$core$async$state_machine__19598__auto____0 = (function (){
var statearr_22278 = [null,null,null,null,null,null,null,null,null];
(statearr_22278[(0)] = cljs$core$async$state_machine__19598__auto__);

(statearr_22278[(1)] = (1));

return statearr_22278;
});
var cljs$core$async$state_machine__19598__auto____1 = (function (state_22260){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_22260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e22279){if((e22279 instanceof Object)){
var ex__19601__auto__ = e22279;
var statearr_22280_22298 = state_22260;
(statearr_22280_22298[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22299 = state_22260;
state_22260 = G__22299;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$state_machine__19598__auto__ = function(state_22260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19598__auto____1.call(this,state_22260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19598__auto____0;
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19598__auto____1;
return cljs$core$async$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___22283,tc,fc))
})();
var state__19620__auto__ = (function (){var statearr_22281 = f__19619__auto__.call(null);
(statearr_22281[(6)] = c__19618__auto___22283);

return statearr_22281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___22283,tc,fc))
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
var c__19618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto__){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto__){
return (function (state_22320){
var state_val_22321 = (state_22320[(1)]);
if((state_val_22321 === (7))){
var inst_22316 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
var statearr_22322_22340 = state_22320__$1;
(statearr_22322_22340[(2)] = inst_22316);

(statearr_22322_22340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (1))){
var inst_22300 = init;
var state_22320__$1 = (function (){var statearr_22323 = state_22320;
(statearr_22323[(7)] = inst_22300);

return statearr_22323;
})();
var statearr_22324_22341 = state_22320__$1;
(statearr_22324_22341[(2)] = null);

(statearr_22324_22341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (4))){
var inst_22303 = (state_22320[(8)]);
var inst_22303__$1 = (state_22320[(2)]);
var inst_22304 = (inst_22303__$1 == null);
var state_22320__$1 = (function (){var statearr_22325 = state_22320;
(statearr_22325[(8)] = inst_22303__$1);

return statearr_22325;
})();
if(cljs.core.truth_(inst_22304)){
var statearr_22326_22342 = state_22320__$1;
(statearr_22326_22342[(1)] = (5));

} else {
var statearr_22327_22343 = state_22320__$1;
(statearr_22327_22343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (6))){
var inst_22303 = (state_22320[(8)]);
var inst_22300 = (state_22320[(7)]);
var inst_22307 = (state_22320[(9)]);
var inst_22307__$1 = f.call(null,inst_22300,inst_22303);
var inst_22308 = cljs.core.reduced_QMARK_.call(null,inst_22307__$1);
var state_22320__$1 = (function (){var statearr_22328 = state_22320;
(statearr_22328[(9)] = inst_22307__$1);

return statearr_22328;
})();
if(inst_22308){
var statearr_22329_22344 = state_22320__$1;
(statearr_22329_22344[(1)] = (8));

} else {
var statearr_22330_22345 = state_22320__$1;
(statearr_22330_22345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (3))){
var inst_22318 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22320__$1,inst_22318);
} else {
if((state_val_22321 === (2))){
var state_22320__$1 = state_22320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22320__$1,(4),ch);
} else {
if((state_val_22321 === (9))){
var inst_22307 = (state_22320[(9)]);
var inst_22300 = inst_22307;
var state_22320__$1 = (function (){var statearr_22331 = state_22320;
(statearr_22331[(7)] = inst_22300);

return statearr_22331;
})();
var statearr_22332_22346 = state_22320__$1;
(statearr_22332_22346[(2)] = null);

(statearr_22332_22346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (5))){
var inst_22300 = (state_22320[(7)]);
var state_22320__$1 = state_22320;
var statearr_22333_22347 = state_22320__$1;
(statearr_22333_22347[(2)] = inst_22300);

(statearr_22333_22347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (10))){
var inst_22314 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
var statearr_22334_22348 = state_22320__$1;
(statearr_22334_22348[(2)] = inst_22314);

(statearr_22334_22348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (8))){
var inst_22307 = (state_22320[(9)]);
var inst_22310 = cljs.core.deref.call(null,inst_22307);
var state_22320__$1 = state_22320;
var statearr_22335_22349 = state_22320__$1;
(statearr_22335_22349[(2)] = inst_22310);

(statearr_22335_22349[(1)] = (10));


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
});})(c__19618__auto__))
;
return ((function (switch__19597__auto__,c__19618__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19598__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19598__auto____0 = (function (){
var statearr_22336 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22336[(0)] = cljs$core$async$reduce_$_state_machine__19598__auto__);

(statearr_22336[(1)] = (1));

return statearr_22336;
});
var cljs$core$async$reduce_$_state_machine__19598__auto____1 = (function (state_22320){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_22320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e22337){if((e22337 instanceof Object)){
var ex__19601__auto__ = e22337;
var statearr_22338_22350 = state_22320;
(statearr_22338_22350[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22351 = state_22320;
state_22320 = G__22351;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19598__auto__ = function(state_22320){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19598__auto____1.call(this,state_22320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19598__auto____0;
cljs$core$async$reduce_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19598__auto____1;
return cljs$core$async$reduce_$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto__))
})();
var state__19620__auto__ = (function (){var statearr_22339 = f__19619__auto__.call(null);
(statearr_22339[(6)] = c__19618__auto__);

return statearr_22339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto__))
);

return c__19618__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__19618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto__,f__$1){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto__,f__$1){
return (function (state_22357){
var state_val_22358 = (state_22357[(1)]);
if((state_val_22358 === (1))){
var inst_22352 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22357__$1 = state_22357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22357__$1,(2),inst_22352);
} else {
if((state_val_22358 === (2))){
var inst_22354 = (state_22357[(2)]);
var inst_22355 = f__$1.call(null,inst_22354);
var state_22357__$1 = state_22357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22357__$1,inst_22355);
} else {
return null;
}
}
});})(c__19618__auto__,f__$1))
;
return ((function (switch__19597__auto__,c__19618__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__19598__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19598__auto____0 = (function (){
var statearr_22359 = [null,null,null,null,null,null,null];
(statearr_22359[(0)] = cljs$core$async$transduce_$_state_machine__19598__auto__);

(statearr_22359[(1)] = (1));

return statearr_22359;
});
var cljs$core$async$transduce_$_state_machine__19598__auto____1 = (function (state_22357){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_22357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e22360){if((e22360 instanceof Object)){
var ex__19601__auto__ = e22360;
var statearr_22361_22363 = state_22357;
(statearr_22361_22363[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22364 = state_22357;
state_22357 = G__22364;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19598__auto__ = function(state_22357){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19598__auto____1.call(this,state_22357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19598__auto____0;
cljs$core$async$transduce_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19598__auto____1;
return cljs$core$async$transduce_$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto__,f__$1))
})();
var state__19620__auto__ = (function (){var statearr_22362 = f__19619__auto__.call(null);
(statearr_22362[(6)] = c__19618__auto__);

return statearr_22362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto__,f__$1))
);

return c__19618__auto__;
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
var G__22366 = arguments.length;
switch (G__22366) {
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
var c__19618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto__){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto__){
return (function (state_22391){
var state_val_22392 = (state_22391[(1)]);
if((state_val_22392 === (7))){
var inst_22373 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22393_22414 = state_22391__$1;
(statearr_22393_22414[(2)] = inst_22373);

(statearr_22393_22414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (1))){
var inst_22367 = cljs.core.seq.call(null,coll);
var inst_22368 = inst_22367;
var state_22391__$1 = (function (){var statearr_22394 = state_22391;
(statearr_22394[(7)] = inst_22368);

return statearr_22394;
})();
var statearr_22395_22415 = state_22391__$1;
(statearr_22395_22415[(2)] = null);

(statearr_22395_22415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (4))){
var inst_22368 = (state_22391[(7)]);
var inst_22371 = cljs.core.first.call(null,inst_22368);
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22391__$1,(7),ch,inst_22371);
} else {
if((state_val_22392 === (13))){
var inst_22385 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22396_22416 = state_22391__$1;
(statearr_22396_22416[(2)] = inst_22385);

(statearr_22396_22416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (6))){
var inst_22376 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
if(cljs.core.truth_(inst_22376)){
var statearr_22397_22417 = state_22391__$1;
(statearr_22397_22417[(1)] = (8));

} else {
var statearr_22398_22418 = state_22391__$1;
(statearr_22398_22418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (3))){
var inst_22389 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22391__$1,inst_22389);
} else {
if((state_val_22392 === (12))){
var state_22391__$1 = state_22391;
var statearr_22399_22419 = state_22391__$1;
(statearr_22399_22419[(2)] = null);

(statearr_22399_22419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (2))){
var inst_22368 = (state_22391[(7)]);
var state_22391__$1 = state_22391;
if(cljs.core.truth_(inst_22368)){
var statearr_22400_22420 = state_22391__$1;
(statearr_22400_22420[(1)] = (4));

} else {
var statearr_22401_22421 = state_22391__$1;
(statearr_22401_22421[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (11))){
var inst_22382 = cljs.core.async.close_BANG_.call(null,ch);
var state_22391__$1 = state_22391;
var statearr_22402_22422 = state_22391__$1;
(statearr_22402_22422[(2)] = inst_22382);

(statearr_22402_22422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (9))){
var state_22391__$1 = state_22391;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22403_22423 = state_22391__$1;
(statearr_22403_22423[(1)] = (11));

} else {
var statearr_22404_22424 = state_22391__$1;
(statearr_22404_22424[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (5))){
var inst_22368 = (state_22391[(7)]);
var state_22391__$1 = state_22391;
var statearr_22405_22425 = state_22391__$1;
(statearr_22405_22425[(2)] = inst_22368);

(statearr_22405_22425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (10))){
var inst_22387 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22406_22426 = state_22391__$1;
(statearr_22406_22426[(2)] = inst_22387);

(statearr_22406_22426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (8))){
var inst_22368 = (state_22391[(7)]);
var inst_22378 = cljs.core.next.call(null,inst_22368);
var inst_22368__$1 = inst_22378;
var state_22391__$1 = (function (){var statearr_22407 = state_22391;
(statearr_22407[(7)] = inst_22368__$1);

return statearr_22407;
})();
var statearr_22408_22427 = state_22391__$1;
(statearr_22408_22427[(2)] = null);

(statearr_22408_22427[(1)] = (2));


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
});})(c__19618__auto__))
;
return ((function (switch__19597__auto__,c__19618__auto__){
return (function() {
var cljs$core$async$state_machine__19598__auto__ = null;
var cljs$core$async$state_machine__19598__auto____0 = (function (){
var statearr_22409 = [null,null,null,null,null,null,null,null];
(statearr_22409[(0)] = cljs$core$async$state_machine__19598__auto__);

(statearr_22409[(1)] = (1));

return statearr_22409;
});
var cljs$core$async$state_machine__19598__auto____1 = (function (state_22391){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_22391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e22410){if((e22410 instanceof Object)){
var ex__19601__auto__ = e22410;
var statearr_22411_22428 = state_22391;
(statearr_22411_22428[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22429 = state_22391;
state_22391 = G__22429;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$state_machine__19598__auto__ = function(state_22391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19598__auto____1.call(this,state_22391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19598__auto____0;
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19598__auto____1;
return cljs$core$async$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto__))
})();
var state__19620__auto__ = (function (){var statearr_22412 = f__19619__auto__.call(null);
(statearr_22412[(6)] = c__19618__auto__);

return statearr_22412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto__))
);

return c__19618__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22430 = (function (ch,cs,meta22431){
this.ch = ch;
this.cs = cs;
this.meta22431 = meta22431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22432,meta22431__$1){
var self__ = this;
var _22432__$1 = this;
return (new cljs.core.async.t_cljs$core$async22430(self__.ch,self__.cs,meta22431__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22432){
var self__ = this;
var _22432__$1 = this;
return self__.meta22431;
});})(cs))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22430.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22431","meta22431",1833563350,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22430";

cljs.core.async.t_cljs$core$async22430.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22430");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22430.
 */
cljs.core.async.__GT_t_cljs$core$async22430 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22430(ch__$1,cs__$1,meta22431){
return (new cljs.core.async.t_cljs$core$async22430(ch__$1,cs__$1,meta22431));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22430(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19618__auto___22652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___22652,cs,m,dchan,dctr,done){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___22652,cs,m,dchan,dctr,done){
return (function (state_22567){
var state_val_22568 = (state_22567[(1)]);
if((state_val_22568 === (7))){
var inst_22563 = (state_22567[(2)]);
var state_22567__$1 = state_22567;
var statearr_22569_22653 = state_22567__$1;
(statearr_22569_22653[(2)] = inst_22563);

(statearr_22569_22653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (20))){
var inst_22466 = (state_22567[(7)]);
var inst_22478 = cljs.core.first.call(null,inst_22466);
var inst_22479 = cljs.core.nth.call(null,inst_22478,(0),null);
var inst_22480 = cljs.core.nth.call(null,inst_22478,(1),null);
var state_22567__$1 = (function (){var statearr_22570 = state_22567;
(statearr_22570[(8)] = inst_22479);

return statearr_22570;
})();
if(cljs.core.truth_(inst_22480)){
var statearr_22571_22654 = state_22567__$1;
(statearr_22571_22654[(1)] = (22));

} else {
var statearr_22572_22655 = state_22567__$1;
(statearr_22572_22655[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (27))){
var inst_22515 = (state_22567[(9)]);
var inst_22508 = (state_22567[(10)]);
var inst_22510 = (state_22567[(11)]);
var inst_22435 = (state_22567[(12)]);
var inst_22515__$1 = cljs.core._nth.call(null,inst_22508,inst_22510);
var inst_22516 = cljs.core.async.put_BANG_.call(null,inst_22515__$1,inst_22435,done);
var state_22567__$1 = (function (){var statearr_22573 = state_22567;
(statearr_22573[(9)] = inst_22515__$1);

return statearr_22573;
})();
if(cljs.core.truth_(inst_22516)){
var statearr_22574_22656 = state_22567__$1;
(statearr_22574_22656[(1)] = (30));

} else {
var statearr_22575_22657 = state_22567__$1;
(statearr_22575_22657[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (1))){
var state_22567__$1 = state_22567;
var statearr_22576_22658 = state_22567__$1;
(statearr_22576_22658[(2)] = null);

(statearr_22576_22658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (24))){
var inst_22466 = (state_22567[(7)]);
var inst_22485 = (state_22567[(2)]);
var inst_22486 = cljs.core.next.call(null,inst_22466);
var inst_22444 = inst_22486;
var inst_22445 = null;
var inst_22446 = (0);
var inst_22447 = (0);
var state_22567__$1 = (function (){var statearr_22577 = state_22567;
(statearr_22577[(13)] = inst_22444);

(statearr_22577[(14)] = inst_22445);

(statearr_22577[(15)] = inst_22447);

(statearr_22577[(16)] = inst_22485);

(statearr_22577[(17)] = inst_22446);

return statearr_22577;
})();
var statearr_22578_22659 = state_22567__$1;
(statearr_22578_22659[(2)] = null);

(statearr_22578_22659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (39))){
var state_22567__$1 = state_22567;
var statearr_22582_22660 = state_22567__$1;
(statearr_22582_22660[(2)] = null);

(statearr_22582_22660[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (4))){
var inst_22435 = (state_22567[(12)]);
var inst_22435__$1 = (state_22567[(2)]);
var inst_22436 = (inst_22435__$1 == null);
var state_22567__$1 = (function (){var statearr_22583 = state_22567;
(statearr_22583[(12)] = inst_22435__$1);

return statearr_22583;
})();
if(cljs.core.truth_(inst_22436)){
var statearr_22584_22661 = state_22567__$1;
(statearr_22584_22661[(1)] = (5));

} else {
var statearr_22585_22662 = state_22567__$1;
(statearr_22585_22662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (15))){
var inst_22444 = (state_22567[(13)]);
var inst_22445 = (state_22567[(14)]);
var inst_22447 = (state_22567[(15)]);
var inst_22446 = (state_22567[(17)]);
var inst_22462 = (state_22567[(2)]);
var inst_22463 = (inst_22447 + (1));
var tmp22579 = inst_22444;
var tmp22580 = inst_22445;
var tmp22581 = inst_22446;
var inst_22444__$1 = tmp22579;
var inst_22445__$1 = tmp22580;
var inst_22446__$1 = tmp22581;
var inst_22447__$1 = inst_22463;
var state_22567__$1 = (function (){var statearr_22586 = state_22567;
(statearr_22586[(13)] = inst_22444__$1);

(statearr_22586[(18)] = inst_22462);

(statearr_22586[(14)] = inst_22445__$1);

(statearr_22586[(15)] = inst_22447__$1);

(statearr_22586[(17)] = inst_22446__$1);

return statearr_22586;
})();
var statearr_22587_22663 = state_22567__$1;
(statearr_22587_22663[(2)] = null);

(statearr_22587_22663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (21))){
var inst_22489 = (state_22567[(2)]);
var state_22567__$1 = state_22567;
var statearr_22591_22664 = state_22567__$1;
(statearr_22591_22664[(2)] = inst_22489);

(statearr_22591_22664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (31))){
var inst_22515 = (state_22567[(9)]);
var inst_22519 = done.call(null,null);
var inst_22520 = cljs.core.async.untap_STAR_.call(null,m,inst_22515);
var state_22567__$1 = (function (){var statearr_22592 = state_22567;
(statearr_22592[(19)] = inst_22519);

return statearr_22592;
})();
var statearr_22593_22665 = state_22567__$1;
(statearr_22593_22665[(2)] = inst_22520);

(statearr_22593_22665[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (32))){
var inst_22508 = (state_22567[(10)]);
var inst_22510 = (state_22567[(11)]);
var inst_22507 = (state_22567[(20)]);
var inst_22509 = (state_22567[(21)]);
var inst_22522 = (state_22567[(2)]);
var inst_22523 = (inst_22510 + (1));
var tmp22588 = inst_22508;
var tmp22589 = inst_22507;
var tmp22590 = inst_22509;
var inst_22507__$1 = tmp22589;
var inst_22508__$1 = tmp22588;
var inst_22509__$1 = tmp22590;
var inst_22510__$1 = inst_22523;
var state_22567__$1 = (function (){var statearr_22594 = state_22567;
(statearr_22594[(10)] = inst_22508__$1);

(statearr_22594[(22)] = inst_22522);

(statearr_22594[(11)] = inst_22510__$1);

(statearr_22594[(20)] = inst_22507__$1);

(statearr_22594[(21)] = inst_22509__$1);

return statearr_22594;
})();
var statearr_22595_22666 = state_22567__$1;
(statearr_22595_22666[(2)] = null);

(statearr_22595_22666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (40))){
var inst_22535 = (state_22567[(23)]);
var inst_22539 = done.call(null,null);
var inst_22540 = cljs.core.async.untap_STAR_.call(null,m,inst_22535);
var state_22567__$1 = (function (){var statearr_22596 = state_22567;
(statearr_22596[(24)] = inst_22539);

return statearr_22596;
})();
var statearr_22597_22667 = state_22567__$1;
(statearr_22597_22667[(2)] = inst_22540);

(statearr_22597_22667[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (33))){
var inst_22526 = (state_22567[(25)]);
var inst_22528 = cljs.core.chunked_seq_QMARK_.call(null,inst_22526);
var state_22567__$1 = state_22567;
if(inst_22528){
var statearr_22598_22668 = state_22567__$1;
(statearr_22598_22668[(1)] = (36));

} else {
var statearr_22599_22669 = state_22567__$1;
(statearr_22599_22669[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (13))){
var inst_22456 = (state_22567[(26)]);
var inst_22459 = cljs.core.async.close_BANG_.call(null,inst_22456);
var state_22567__$1 = state_22567;
var statearr_22600_22670 = state_22567__$1;
(statearr_22600_22670[(2)] = inst_22459);

(statearr_22600_22670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (22))){
var inst_22479 = (state_22567[(8)]);
var inst_22482 = cljs.core.async.close_BANG_.call(null,inst_22479);
var state_22567__$1 = state_22567;
var statearr_22601_22671 = state_22567__$1;
(statearr_22601_22671[(2)] = inst_22482);

(statearr_22601_22671[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (36))){
var inst_22526 = (state_22567[(25)]);
var inst_22530 = cljs.core.chunk_first.call(null,inst_22526);
var inst_22531 = cljs.core.chunk_rest.call(null,inst_22526);
var inst_22532 = cljs.core.count.call(null,inst_22530);
var inst_22507 = inst_22531;
var inst_22508 = inst_22530;
var inst_22509 = inst_22532;
var inst_22510 = (0);
var state_22567__$1 = (function (){var statearr_22602 = state_22567;
(statearr_22602[(10)] = inst_22508);

(statearr_22602[(11)] = inst_22510);

(statearr_22602[(20)] = inst_22507);

(statearr_22602[(21)] = inst_22509);

return statearr_22602;
})();
var statearr_22603_22672 = state_22567__$1;
(statearr_22603_22672[(2)] = null);

(statearr_22603_22672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (41))){
var inst_22526 = (state_22567[(25)]);
var inst_22542 = (state_22567[(2)]);
var inst_22543 = cljs.core.next.call(null,inst_22526);
var inst_22507 = inst_22543;
var inst_22508 = null;
var inst_22509 = (0);
var inst_22510 = (0);
var state_22567__$1 = (function (){var statearr_22604 = state_22567;
(statearr_22604[(27)] = inst_22542);

(statearr_22604[(10)] = inst_22508);

(statearr_22604[(11)] = inst_22510);

(statearr_22604[(20)] = inst_22507);

(statearr_22604[(21)] = inst_22509);

return statearr_22604;
})();
var statearr_22605_22673 = state_22567__$1;
(statearr_22605_22673[(2)] = null);

(statearr_22605_22673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (43))){
var state_22567__$1 = state_22567;
var statearr_22606_22674 = state_22567__$1;
(statearr_22606_22674[(2)] = null);

(statearr_22606_22674[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (29))){
var inst_22551 = (state_22567[(2)]);
var state_22567__$1 = state_22567;
var statearr_22607_22675 = state_22567__$1;
(statearr_22607_22675[(2)] = inst_22551);

(statearr_22607_22675[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (44))){
var inst_22560 = (state_22567[(2)]);
var state_22567__$1 = (function (){var statearr_22608 = state_22567;
(statearr_22608[(28)] = inst_22560);

return statearr_22608;
})();
var statearr_22609_22676 = state_22567__$1;
(statearr_22609_22676[(2)] = null);

(statearr_22609_22676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (6))){
var inst_22499 = (state_22567[(29)]);
var inst_22498 = cljs.core.deref.call(null,cs);
var inst_22499__$1 = cljs.core.keys.call(null,inst_22498);
var inst_22500 = cljs.core.count.call(null,inst_22499__$1);
var inst_22501 = cljs.core.reset_BANG_.call(null,dctr,inst_22500);
var inst_22506 = cljs.core.seq.call(null,inst_22499__$1);
var inst_22507 = inst_22506;
var inst_22508 = null;
var inst_22509 = (0);
var inst_22510 = (0);
var state_22567__$1 = (function (){var statearr_22610 = state_22567;
(statearr_22610[(29)] = inst_22499__$1);

(statearr_22610[(10)] = inst_22508);

(statearr_22610[(11)] = inst_22510);

(statearr_22610[(30)] = inst_22501);

(statearr_22610[(20)] = inst_22507);

(statearr_22610[(21)] = inst_22509);

return statearr_22610;
})();
var statearr_22611_22677 = state_22567__$1;
(statearr_22611_22677[(2)] = null);

(statearr_22611_22677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (28))){
var inst_22526 = (state_22567[(25)]);
var inst_22507 = (state_22567[(20)]);
var inst_22526__$1 = cljs.core.seq.call(null,inst_22507);
var state_22567__$1 = (function (){var statearr_22612 = state_22567;
(statearr_22612[(25)] = inst_22526__$1);

return statearr_22612;
})();
if(inst_22526__$1){
var statearr_22613_22678 = state_22567__$1;
(statearr_22613_22678[(1)] = (33));

} else {
var statearr_22614_22679 = state_22567__$1;
(statearr_22614_22679[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (25))){
var inst_22510 = (state_22567[(11)]);
var inst_22509 = (state_22567[(21)]);
var inst_22512 = (inst_22510 < inst_22509);
var inst_22513 = inst_22512;
var state_22567__$1 = state_22567;
if(cljs.core.truth_(inst_22513)){
var statearr_22615_22680 = state_22567__$1;
(statearr_22615_22680[(1)] = (27));

} else {
var statearr_22616_22681 = state_22567__$1;
(statearr_22616_22681[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (34))){
var state_22567__$1 = state_22567;
var statearr_22617_22682 = state_22567__$1;
(statearr_22617_22682[(2)] = null);

(statearr_22617_22682[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (17))){
var state_22567__$1 = state_22567;
var statearr_22618_22683 = state_22567__$1;
(statearr_22618_22683[(2)] = null);

(statearr_22618_22683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (3))){
var inst_22565 = (state_22567[(2)]);
var state_22567__$1 = state_22567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22567__$1,inst_22565);
} else {
if((state_val_22568 === (12))){
var inst_22494 = (state_22567[(2)]);
var state_22567__$1 = state_22567;
var statearr_22619_22684 = state_22567__$1;
(statearr_22619_22684[(2)] = inst_22494);

(statearr_22619_22684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (2))){
var state_22567__$1 = state_22567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22567__$1,(4),ch);
} else {
if((state_val_22568 === (23))){
var state_22567__$1 = state_22567;
var statearr_22620_22685 = state_22567__$1;
(statearr_22620_22685[(2)] = null);

(statearr_22620_22685[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (35))){
var inst_22549 = (state_22567[(2)]);
var state_22567__$1 = state_22567;
var statearr_22621_22686 = state_22567__$1;
(statearr_22621_22686[(2)] = inst_22549);

(statearr_22621_22686[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (19))){
var inst_22466 = (state_22567[(7)]);
var inst_22470 = cljs.core.chunk_first.call(null,inst_22466);
var inst_22471 = cljs.core.chunk_rest.call(null,inst_22466);
var inst_22472 = cljs.core.count.call(null,inst_22470);
var inst_22444 = inst_22471;
var inst_22445 = inst_22470;
var inst_22446 = inst_22472;
var inst_22447 = (0);
var state_22567__$1 = (function (){var statearr_22622 = state_22567;
(statearr_22622[(13)] = inst_22444);

(statearr_22622[(14)] = inst_22445);

(statearr_22622[(15)] = inst_22447);

(statearr_22622[(17)] = inst_22446);

return statearr_22622;
})();
var statearr_22623_22687 = state_22567__$1;
(statearr_22623_22687[(2)] = null);

(statearr_22623_22687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (11))){
var inst_22444 = (state_22567[(13)]);
var inst_22466 = (state_22567[(7)]);
var inst_22466__$1 = cljs.core.seq.call(null,inst_22444);
var state_22567__$1 = (function (){var statearr_22624 = state_22567;
(statearr_22624[(7)] = inst_22466__$1);

return statearr_22624;
})();
if(inst_22466__$1){
var statearr_22625_22688 = state_22567__$1;
(statearr_22625_22688[(1)] = (16));

} else {
var statearr_22626_22689 = state_22567__$1;
(statearr_22626_22689[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (9))){
var inst_22496 = (state_22567[(2)]);
var state_22567__$1 = state_22567;
var statearr_22627_22690 = state_22567__$1;
(statearr_22627_22690[(2)] = inst_22496);

(statearr_22627_22690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (5))){
var inst_22442 = cljs.core.deref.call(null,cs);
var inst_22443 = cljs.core.seq.call(null,inst_22442);
var inst_22444 = inst_22443;
var inst_22445 = null;
var inst_22446 = (0);
var inst_22447 = (0);
var state_22567__$1 = (function (){var statearr_22628 = state_22567;
(statearr_22628[(13)] = inst_22444);

(statearr_22628[(14)] = inst_22445);

(statearr_22628[(15)] = inst_22447);

(statearr_22628[(17)] = inst_22446);

return statearr_22628;
})();
var statearr_22629_22691 = state_22567__$1;
(statearr_22629_22691[(2)] = null);

(statearr_22629_22691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (14))){
var state_22567__$1 = state_22567;
var statearr_22630_22692 = state_22567__$1;
(statearr_22630_22692[(2)] = null);

(statearr_22630_22692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (45))){
var inst_22557 = (state_22567[(2)]);
var state_22567__$1 = state_22567;
var statearr_22631_22693 = state_22567__$1;
(statearr_22631_22693[(2)] = inst_22557);

(statearr_22631_22693[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (26))){
var inst_22499 = (state_22567[(29)]);
var inst_22553 = (state_22567[(2)]);
var inst_22554 = cljs.core.seq.call(null,inst_22499);
var state_22567__$1 = (function (){var statearr_22632 = state_22567;
(statearr_22632[(31)] = inst_22553);

return statearr_22632;
})();
if(inst_22554){
var statearr_22633_22694 = state_22567__$1;
(statearr_22633_22694[(1)] = (42));

} else {
var statearr_22634_22695 = state_22567__$1;
(statearr_22634_22695[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (16))){
var inst_22466 = (state_22567[(7)]);
var inst_22468 = cljs.core.chunked_seq_QMARK_.call(null,inst_22466);
var state_22567__$1 = state_22567;
if(inst_22468){
var statearr_22635_22696 = state_22567__$1;
(statearr_22635_22696[(1)] = (19));

} else {
var statearr_22636_22697 = state_22567__$1;
(statearr_22636_22697[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (38))){
var inst_22546 = (state_22567[(2)]);
var state_22567__$1 = state_22567;
var statearr_22637_22698 = state_22567__$1;
(statearr_22637_22698[(2)] = inst_22546);

(statearr_22637_22698[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (30))){
var state_22567__$1 = state_22567;
var statearr_22638_22699 = state_22567__$1;
(statearr_22638_22699[(2)] = null);

(statearr_22638_22699[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (10))){
var inst_22445 = (state_22567[(14)]);
var inst_22447 = (state_22567[(15)]);
var inst_22455 = cljs.core._nth.call(null,inst_22445,inst_22447);
var inst_22456 = cljs.core.nth.call(null,inst_22455,(0),null);
var inst_22457 = cljs.core.nth.call(null,inst_22455,(1),null);
var state_22567__$1 = (function (){var statearr_22639 = state_22567;
(statearr_22639[(26)] = inst_22456);

return statearr_22639;
})();
if(cljs.core.truth_(inst_22457)){
var statearr_22640_22700 = state_22567__$1;
(statearr_22640_22700[(1)] = (13));

} else {
var statearr_22641_22701 = state_22567__$1;
(statearr_22641_22701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (18))){
var inst_22492 = (state_22567[(2)]);
var state_22567__$1 = state_22567;
var statearr_22642_22702 = state_22567__$1;
(statearr_22642_22702[(2)] = inst_22492);

(statearr_22642_22702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (42))){
var state_22567__$1 = state_22567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22567__$1,(45),dchan);
} else {
if((state_val_22568 === (37))){
var inst_22526 = (state_22567[(25)]);
var inst_22535 = (state_22567[(23)]);
var inst_22435 = (state_22567[(12)]);
var inst_22535__$1 = cljs.core.first.call(null,inst_22526);
var inst_22536 = cljs.core.async.put_BANG_.call(null,inst_22535__$1,inst_22435,done);
var state_22567__$1 = (function (){var statearr_22643 = state_22567;
(statearr_22643[(23)] = inst_22535__$1);

return statearr_22643;
})();
if(cljs.core.truth_(inst_22536)){
var statearr_22644_22703 = state_22567__$1;
(statearr_22644_22703[(1)] = (39));

} else {
var statearr_22645_22704 = state_22567__$1;
(statearr_22645_22704[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22568 === (8))){
var inst_22447 = (state_22567[(15)]);
var inst_22446 = (state_22567[(17)]);
var inst_22449 = (inst_22447 < inst_22446);
var inst_22450 = inst_22449;
var state_22567__$1 = state_22567;
if(cljs.core.truth_(inst_22450)){
var statearr_22646_22705 = state_22567__$1;
(statearr_22646_22705[(1)] = (10));

} else {
var statearr_22647_22706 = state_22567__$1;
(statearr_22647_22706[(1)] = (11));

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
});})(c__19618__auto___22652,cs,m,dchan,dctr,done))
;
return ((function (switch__19597__auto__,c__19618__auto___22652,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19598__auto__ = null;
var cljs$core$async$mult_$_state_machine__19598__auto____0 = (function (){
var statearr_22648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22648[(0)] = cljs$core$async$mult_$_state_machine__19598__auto__);

(statearr_22648[(1)] = (1));

return statearr_22648;
});
var cljs$core$async$mult_$_state_machine__19598__auto____1 = (function (state_22567){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_22567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e22649){if((e22649 instanceof Object)){
var ex__19601__auto__ = e22649;
var statearr_22650_22707 = state_22567;
(statearr_22650_22707[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22708 = state_22567;
state_22567 = G__22708;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19598__auto__ = function(state_22567){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19598__auto____1.call(this,state_22567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19598__auto____0;
cljs$core$async$mult_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19598__auto____1;
return cljs$core$async$mult_$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___22652,cs,m,dchan,dctr,done))
})();
var state__19620__auto__ = (function (){var statearr_22651 = f__19619__auto__.call(null);
(statearr_22651[(6)] = c__19618__auto___22652);

return statearr_22651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___22652,cs,m,dchan,dctr,done))
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
var G__22710 = arguments.length;
switch (G__22710) {
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
var len__4497__auto___22722 = arguments.length;
var i__4498__auto___22723 = (0);
while(true){
if((i__4498__auto___22723 < len__4497__auto___22722)){
args__4500__auto__.push((arguments[i__4498__auto___22723]));

var G__22724 = (i__4498__auto___22723 + (1));
i__4498__auto___22723 = G__22724;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22716){
var map__22717 = p__22716;
var map__22717__$1 = ((((!((map__22717 == null)))?(((((map__22717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22717):map__22717);
var opts = map__22717__$1;
var statearr_22719_22725 = state;
(statearr_22719_22725[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22717,map__22717__$1,opts){
return (function (val){
var statearr_22720_22726 = state;
(statearr_22720_22726[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22717,map__22717__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22721_22727 = state;
(statearr_22721_22727[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22712){
var G__22713 = cljs.core.first.call(null,seq22712);
var seq22712__$1 = cljs.core.next.call(null,seq22712);
var G__22714 = cljs.core.first.call(null,seq22712__$1);
var seq22712__$2 = cljs.core.next.call(null,seq22712__$1);
var G__22715 = cljs.core.first.call(null,seq22712__$2);
var seq22712__$3 = cljs.core.next.call(null,seq22712__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22713,G__22714,G__22715,seq22712__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22728 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22729){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22729 = meta22729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22730,meta22729__$1){
var self__ = this;
var _22730__$1 = this;
return (new cljs.core.async.t_cljs$core$async22728(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22729__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22730){
var self__ = this;
var _22730__$1 = this;
return self__.meta22729;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22728.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22729","meta22729",144744403,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22728";

cljs.core.async.t_cljs$core$async22728.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22728");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22728.
 */
cljs.core.async.__GT_t_cljs$core$async22728 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22728(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22729){
return (new cljs.core.async.t_cljs$core$async22728(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22729));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22728(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19618__auto___22892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___22892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___22892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22832){
var state_val_22833 = (state_22832[(1)]);
if((state_val_22833 === (7))){
var inst_22747 = (state_22832[(2)]);
var state_22832__$1 = state_22832;
var statearr_22834_22893 = state_22832__$1;
(statearr_22834_22893[(2)] = inst_22747);

(statearr_22834_22893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (20))){
var inst_22759 = (state_22832[(7)]);
var state_22832__$1 = state_22832;
var statearr_22835_22894 = state_22832__$1;
(statearr_22835_22894[(2)] = inst_22759);

(statearr_22835_22894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (27))){
var state_22832__$1 = state_22832;
var statearr_22836_22895 = state_22832__$1;
(statearr_22836_22895[(2)] = null);

(statearr_22836_22895[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (1))){
var inst_22734 = (state_22832[(8)]);
var inst_22734__$1 = calc_state.call(null);
var inst_22736 = (inst_22734__$1 == null);
var inst_22737 = cljs.core.not.call(null,inst_22736);
var state_22832__$1 = (function (){var statearr_22837 = state_22832;
(statearr_22837[(8)] = inst_22734__$1);

return statearr_22837;
})();
if(inst_22737){
var statearr_22838_22896 = state_22832__$1;
(statearr_22838_22896[(1)] = (2));

} else {
var statearr_22839_22897 = state_22832__$1;
(statearr_22839_22897[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (24))){
var inst_22783 = (state_22832[(9)]);
var inst_22792 = (state_22832[(10)]);
var inst_22806 = (state_22832[(11)]);
var inst_22806__$1 = inst_22783.call(null,inst_22792);
var state_22832__$1 = (function (){var statearr_22840 = state_22832;
(statearr_22840[(11)] = inst_22806__$1);

return statearr_22840;
})();
if(cljs.core.truth_(inst_22806__$1)){
var statearr_22841_22898 = state_22832__$1;
(statearr_22841_22898[(1)] = (29));

} else {
var statearr_22842_22899 = state_22832__$1;
(statearr_22842_22899[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (4))){
var inst_22750 = (state_22832[(2)]);
var state_22832__$1 = state_22832;
if(cljs.core.truth_(inst_22750)){
var statearr_22843_22900 = state_22832__$1;
(statearr_22843_22900[(1)] = (8));

} else {
var statearr_22844_22901 = state_22832__$1;
(statearr_22844_22901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (15))){
var inst_22777 = (state_22832[(2)]);
var state_22832__$1 = state_22832;
if(cljs.core.truth_(inst_22777)){
var statearr_22845_22902 = state_22832__$1;
(statearr_22845_22902[(1)] = (19));

} else {
var statearr_22846_22903 = state_22832__$1;
(statearr_22846_22903[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (21))){
var inst_22782 = (state_22832[(12)]);
var inst_22782__$1 = (state_22832[(2)]);
var inst_22783 = cljs.core.get.call(null,inst_22782__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22784 = cljs.core.get.call(null,inst_22782__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22785 = cljs.core.get.call(null,inst_22782__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22832__$1 = (function (){var statearr_22847 = state_22832;
(statearr_22847[(12)] = inst_22782__$1);

(statearr_22847[(9)] = inst_22783);

(statearr_22847[(13)] = inst_22784);

return statearr_22847;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22832__$1,(22),inst_22785);
} else {
if((state_val_22833 === (31))){
var inst_22814 = (state_22832[(2)]);
var state_22832__$1 = state_22832;
if(cljs.core.truth_(inst_22814)){
var statearr_22848_22904 = state_22832__$1;
(statearr_22848_22904[(1)] = (32));

} else {
var statearr_22849_22905 = state_22832__$1;
(statearr_22849_22905[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (32))){
var inst_22791 = (state_22832[(14)]);
var state_22832__$1 = state_22832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22832__$1,(35),out,inst_22791);
} else {
if((state_val_22833 === (33))){
var inst_22782 = (state_22832[(12)]);
var inst_22759 = inst_22782;
var state_22832__$1 = (function (){var statearr_22850 = state_22832;
(statearr_22850[(7)] = inst_22759);

return statearr_22850;
})();
var statearr_22851_22906 = state_22832__$1;
(statearr_22851_22906[(2)] = null);

(statearr_22851_22906[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (13))){
var inst_22759 = (state_22832[(7)]);
var inst_22766 = inst_22759.cljs$lang$protocol_mask$partition0$;
var inst_22767 = (inst_22766 & (64));
var inst_22768 = inst_22759.cljs$core$ISeq$;
var inst_22769 = (cljs.core.PROTOCOL_SENTINEL === inst_22768);
var inst_22770 = ((inst_22767) || (inst_22769));
var state_22832__$1 = state_22832;
if(cljs.core.truth_(inst_22770)){
var statearr_22852_22907 = state_22832__$1;
(statearr_22852_22907[(1)] = (16));

} else {
var statearr_22853_22908 = state_22832__$1;
(statearr_22853_22908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (22))){
var inst_22792 = (state_22832[(10)]);
var inst_22791 = (state_22832[(14)]);
var inst_22790 = (state_22832[(2)]);
var inst_22791__$1 = cljs.core.nth.call(null,inst_22790,(0),null);
var inst_22792__$1 = cljs.core.nth.call(null,inst_22790,(1),null);
var inst_22793 = (inst_22791__$1 == null);
var inst_22794 = cljs.core._EQ_.call(null,inst_22792__$1,change);
var inst_22795 = ((inst_22793) || (inst_22794));
var state_22832__$1 = (function (){var statearr_22854 = state_22832;
(statearr_22854[(10)] = inst_22792__$1);

(statearr_22854[(14)] = inst_22791__$1);

return statearr_22854;
})();
if(cljs.core.truth_(inst_22795)){
var statearr_22855_22909 = state_22832__$1;
(statearr_22855_22909[(1)] = (23));

} else {
var statearr_22856_22910 = state_22832__$1;
(statearr_22856_22910[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (36))){
var inst_22782 = (state_22832[(12)]);
var inst_22759 = inst_22782;
var state_22832__$1 = (function (){var statearr_22857 = state_22832;
(statearr_22857[(7)] = inst_22759);

return statearr_22857;
})();
var statearr_22858_22911 = state_22832__$1;
(statearr_22858_22911[(2)] = null);

(statearr_22858_22911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (29))){
var inst_22806 = (state_22832[(11)]);
var state_22832__$1 = state_22832;
var statearr_22859_22912 = state_22832__$1;
(statearr_22859_22912[(2)] = inst_22806);

(statearr_22859_22912[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (6))){
var state_22832__$1 = state_22832;
var statearr_22860_22913 = state_22832__$1;
(statearr_22860_22913[(2)] = false);

(statearr_22860_22913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (28))){
var inst_22802 = (state_22832[(2)]);
var inst_22803 = calc_state.call(null);
var inst_22759 = inst_22803;
var state_22832__$1 = (function (){var statearr_22861 = state_22832;
(statearr_22861[(15)] = inst_22802);

(statearr_22861[(7)] = inst_22759);

return statearr_22861;
})();
var statearr_22862_22914 = state_22832__$1;
(statearr_22862_22914[(2)] = null);

(statearr_22862_22914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (25))){
var inst_22828 = (state_22832[(2)]);
var state_22832__$1 = state_22832;
var statearr_22863_22915 = state_22832__$1;
(statearr_22863_22915[(2)] = inst_22828);

(statearr_22863_22915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (34))){
var inst_22826 = (state_22832[(2)]);
var state_22832__$1 = state_22832;
var statearr_22864_22916 = state_22832__$1;
(statearr_22864_22916[(2)] = inst_22826);

(statearr_22864_22916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (17))){
var state_22832__$1 = state_22832;
var statearr_22865_22917 = state_22832__$1;
(statearr_22865_22917[(2)] = false);

(statearr_22865_22917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (3))){
var state_22832__$1 = state_22832;
var statearr_22866_22918 = state_22832__$1;
(statearr_22866_22918[(2)] = false);

(statearr_22866_22918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (12))){
var inst_22830 = (state_22832[(2)]);
var state_22832__$1 = state_22832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22832__$1,inst_22830);
} else {
if((state_val_22833 === (2))){
var inst_22734 = (state_22832[(8)]);
var inst_22739 = inst_22734.cljs$lang$protocol_mask$partition0$;
var inst_22740 = (inst_22739 & (64));
var inst_22741 = inst_22734.cljs$core$ISeq$;
var inst_22742 = (cljs.core.PROTOCOL_SENTINEL === inst_22741);
var inst_22743 = ((inst_22740) || (inst_22742));
var state_22832__$1 = state_22832;
if(cljs.core.truth_(inst_22743)){
var statearr_22867_22919 = state_22832__$1;
(statearr_22867_22919[(1)] = (5));

} else {
var statearr_22868_22920 = state_22832__$1;
(statearr_22868_22920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (23))){
var inst_22791 = (state_22832[(14)]);
var inst_22797 = (inst_22791 == null);
var state_22832__$1 = state_22832;
if(cljs.core.truth_(inst_22797)){
var statearr_22869_22921 = state_22832__$1;
(statearr_22869_22921[(1)] = (26));

} else {
var statearr_22870_22922 = state_22832__$1;
(statearr_22870_22922[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (35))){
var inst_22817 = (state_22832[(2)]);
var state_22832__$1 = state_22832;
if(cljs.core.truth_(inst_22817)){
var statearr_22871_22923 = state_22832__$1;
(statearr_22871_22923[(1)] = (36));

} else {
var statearr_22872_22924 = state_22832__$1;
(statearr_22872_22924[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (19))){
var inst_22759 = (state_22832[(7)]);
var inst_22779 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22759);
var state_22832__$1 = state_22832;
var statearr_22873_22925 = state_22832__$1;
(statearr_22873_22925[(2)] = inst_22779);

(statearr_22873_22925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (11))){
var inst_22759 = (state_22832[(7)]);
var inst_22763 = (inst_22759 == null);
var inst_22764 = cljs.core.not.call(null,inst_22763);
var state_22832__$1 = state_22832;
if(inst_22764){
var statearr_22874_22926 = state_22832__$1;
(statearr_22874_22926[(1)] = (13));

} else {
var statearr_22875_22927 = state_22832__$1;
(statearr_22875_22927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (9))){
var inst_22734 = (state_22832[(8)]);
var state_22832__$1 = state_22832;
var statearr_22876_22928 = state_22832__$1;
(statearr_22876_22928[(2)] = inst_22734);

(statearr_22876_22928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (5))){
var state_22832__$1 = state_22832;
var statearr_22877_22929 = state_22832__$1;
(statearr_22877_22929[(2)] = true);

(statearr_22877_22929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (14))){
var state_22832__$1 = state_22832;
var statearr_22878_22930 = state_22832__$1;
(statearr_22878_22930[(2)] = false);

(statearr_22878_22930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (26))){
var inst_22792 = (state_22832[(10)]);
var inst_22799 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22792);
var state_22832__$1 = state_22832;
var statearr_22879_22931 = state_22832__$1;
(statearr_22879_22931[(2)] = inst_22799);

(statearr_22879_22931[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (16))){
var state_22832__$1 = state_22832;
var statearr_22880_22932 = state_22832__$1;
(statearr_22880_22932[(2)] = true);

(statearr_22880_22932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (38))){
var inst_22822 = (state_22832[(2)]);
var state_22832__$1 = state_22832;
var statearr_22881_22933 = state_22832__$1;
(statearr_22881_22933[(2)] = inst_22822);

(statearr_22881_22933[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (30))){
var inst_22783 = (state_22832[(9)]);
var inst_22792 = (state_22832[(10)]);
var inst_22784 = (state_22832[(13)]);
var inst_22809 = cljs.core.empty_QMARK_.call(null,inst_22783);
var inst_22810 = inst_22784.call(null,inst_22792);
var inst_22811 = cljs.core.not.call(null,inst_22810);
var inst_22812 = ((inst_22809) && (inst_22811));
var state_22832__$1 = state_22832;
var statearr_22882_22934 = state_22832__$1;
(statearr_22882_22934[(2)] = inst_22812);

(statearr_22882_22934[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (10))){
var inst_22734 = (state_22832[(8)]);
var inst_22755 = (state_22832[(2)]);
var inst_22756 = cljs.core.get.call(null,inst_22755,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22757 = cljs.core.get.call(null,inst_22755,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22758 = cljs.core.get.call(null,inst_22755,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22759 = inst_22734;
var state_22832__$1 = (function (){var statearr_22883 = state_22832;
(statearr_22883[(16)] = inst_22758);

(statearr_22883[(7)] = inst_22759);

(statearr_22883[(17)] = inst_22756);

(statearr_22883[(18)] = inst_22757);

return statearr_22883;
})();
var statearr_22884_22935 = state_22832__$1;
(statearr_22884_22935[(2)] = null);

(statearr_22884_22935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (18))){
var inst_22774 = (state_22832[(2)]);
var state_22832__$1 = state_22832;
var statearr_22885_22936 = state_22832__$1;
(statearr_22885_22936[(2)] = inst_22774);

(statearr_22885_22936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (37))){
var state_22832__$1 = state_22832;
var statearr_22886_22937 = state_22832__$1;
(statearr_22886_22937[(2)] = null);

(statearr_22886_22937[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22833 === (8))){
var inst_22734 = (state_22832[(8)]);
var inst_22752 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22734);
var state_22832__$1 = state_22832;
var statearr_22887_22938 = state_22832__$1;
(statearr_22887_22938[(2)] = inst_22752);

(statearr_22887_22938[(1)] = (10));


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
});})(c__19618__auto___22892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19597__auto__,c__19618__auto___22892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19598__auto__ = null;
var cljs$core$async$mix_$_state_machine__19598__auto____0 = (function (){
var statearr_22888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22888[(0)] = cljs$core$async$mix_$_state_machine__19598__auto__);

(statearr_22888[(1)] = (1));

return statearr_22888;
});
var cljs$core$async$mix_$_state_machine__19598__auto____1 = (function (state_22832){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_22832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e22889){if((e22889 instanceof Object)){
var ex__19601__auto__ = e22889;
var statearr_22890_22939 = state_22832;
(statearr_22890_22939[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22940 = state_22832;
state_22832 = G__22940;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19598__auto__ = function(state_22832){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19598__auto____1.call(this,state_22832);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19598__auto____0;
cljs$core$async$mix_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19598__auto____1;
return cljs$core$async$mix_$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___22892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19620__auto__ = (function (){var statearr_22891 = f__19619__auto__.call(null);
(statearr_22891[(6)] = c__19618__auto___22892);

return statearr_22891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___22892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__22942 = arguments.length;
switch (G__22942) {
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
var G__22946 = arguments.length;
switch (G__22946) {
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
return (function (p1__22944_SHARP_){
if(cljs.core.truth_(p1__22944_SHARP_.call(null,topic))){
return p1__22944_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22944_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22947 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22948){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22948 = meta22948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22949,meta22948__$1){
var self__ = this;
var _22949__$1 = this;
return (new cljs.core.async.t_cljs$core$async22947(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22948__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22949){
var self__ = this;
var _22949__$1 = this;
return self__.meta22948;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22947.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22947.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22947.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22947.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22947.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22947.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22947.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22947.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22948","meta22948",1898897150,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22947";

cljs.core.async.t_cljs$core$async22947.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async22947");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22947.
 */
cljs.core.async.__GT_t_cljs$core$async22947 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22947(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22948){
return (new cljs.core.async.t_cljs$core$async22947(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22948));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22947(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19618__auto___23067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___23067,mults,ensure_mult,p){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___23067,mults,ensure_mult,p){
return (function (state_23021){
var state_val_23022 = (state_23021[(1)]);
if((state_val_23022 === (7))){
var inst_23017 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23023_23068 = state_23021__$1;
(statearr_23023_23068[(2)] = inst_23017);

(statearr_23023_23068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (20))){
var state_23021__$1 = state_23021;
var statearr_23024_23069 = state_23021__$1;
(statearr_23024_23069[(2)] = null);

(statearr_23024_23069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (1))){
var state_23021__$1 = state_23021;
var statearr_23025_23070 = state_23021__$1;
(statearr_23025_23070[(2)] = null);

(statearr_23025_23070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (24))){
var inst_23000 = (state_23021[(7)]);
var inst_23009 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23000);
var state_23021__$1 = state_23021;
var statearr_23026_23071 = state_23021__$1;
(statearr_23026_23071[(2)] = inst_23009);

(statearr_23026_23071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (4))){
var inst_22952 = (state_23021[(8)]);
var inst_22952__$1 = (state_23021[(2)]);
var inst_22953 = (inst_22952__$1 == null);
var state_23021__$1 = (function (){var statearr_23027 = state_23021;
(statearr_23027[(8)] = inst_22952__$1);

return statearr_23027;
})();
if(cljs.core.truth_(inst_22953)){
var statearr_23028_23072 = state_23021__$1;
(statearr_23028_23072[(1)] = (5));

} else {
var statearr_23029_23073 = state_23021__$1;
(statearr_23029_23073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (15))){
var inst_22994 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23030_23074 = state_23021__$1;
(statearr_23030_23074[(2)] = inst_22994);

(statearr_23030_23074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (21))){
var inst_23014 = (state_23021[(2)]);
var state_23021__$1 = (function (){var statearr_23031 = state_23021;
(statearr_23031[(9)] = inst_23014);

return statearr_23031;
})();
var statearr_23032_23075 = state_23021__$1;
(statearr_23032_23075[(2)] = null);

(statearr_23032_23075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (13))){
var inst_22976 = (state_23021[(10)]);
var inst_22978 = cljs.core.chunked_seq_QMARK_.call(null,inst_22976);
var state_23021__$1 = state_23021;
if(inst_22978){
var statearr_23033_23076 = state_23021__$1;
(statearr_23033_23076[(1)] = (16));

} else {
var statearr_23034_23077 = state_23021__$1;
(statearr_23034_23077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (22))){
var inst_23006 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
if(cljs.core.truth_(inst_23006)){
var statearr_23035_23078 = state_23021__$1;
(statearr_23035_23078[(1)] = (23));

} else {
var statearr_23036_23079 = state_23021__$1;
(statearr_23036_23079[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (6))){
var inst_23000 = (state_23021[(7)]);
var inst_22952 = (state_23021[(8)]);
var inst_23002 = (state_23021[(11)]);
var inst_23000__$1 = topic_fn.call(null,inst_22952);
var inst_23001 = cljs.core.deref.call(null,mults);
var inst_23002__$1 = cljs.core.get.call(null,inst_23001,inst_23000__$1);
var state_23021__$1 = (function (){var statearr_23037 = state_23021;
(statearr_23037[(7)] = inst_23000__$1);

(statearr_23037[(11)] = inst_23002__$1);

return statearr_23037;
})();
if(cljs.core.truth_(inst_23002__$1)){
var statearr_23038_23080 = state_23021__$1;
(statearr_23038_23080[(1)] = (19));

} else {
var statearr_23039_23081 = state_23021__$1;
(statearr_23039_23081[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (25))){
var inst_23011 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23040_23082 = state_23021__$1;
(statearr_23040_23082[(2)] = inst_23011);

(statearr_23040_23082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (17))){
var inst_22976 = (state_23021[(10)]);
var inst_22985 = cljs.core.first.call(null,inst_22976);
var inst_22986 = cljs.core.async.muxch_STAR_.call(null,inst_22985);
var inst_22987 = cljs.core.async.close_BANG_.call(null,inst_22986);
var inst_22988 = cljs.core.next.call(null,inst_22976);
var inst_22962 = inst_22988;
var inst_22963 = null;
var inst_22964 = (0);
var inst_22965 = (0);
var state_23021__$1 = (function (){var statearr_23041 = state_23021;
(statearr_23041[(12)] = inst_22965);

(statearr_23041[(13)] = inst_22963);

(statearr_23041[(14)] = inst_22987);

(statearr_23041[(15)] = inst_22962);

(statearr_23041[(16)] = inst_22964);

return statearr_23041;
})();
var statearr_23042_23083 = state_23021__$1;
(statearr_23042_23083[(2)] = null);

(statearr_23042_23083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (3))){
var inst_23019 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23021__$1,inst_23019);
} else {
if((state_val_23022 === (12))){
var inst_22996 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23043_23084 = state_23021__$1;
(statearr_23043_23084[(2)] = inst_22996);

(statearr_23043_23084[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (2))){
var state_23021__$1 = state_23021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23021__$1,(4),ch);
} else {
if((state_val_23022 === (23))){
var state_23021__$1 = state_23021;
var statearr_23044_23085 = state_23021__$1;
(statearr_23044_23085[(2)] = null);

(statearr_23044_23085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (19))){
var inst_22952 = (state_23021[(8)]);
var inst_23002 = (state_23021[(11)]);
var inst_23004 = cljs.core.async.muxch_STAR_.call(null,inst_23002);
var state_23021__$1 = state_23021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23021__$1,(22),inst_23004,inst_22952);
} else {
if((state_val_23022 === (11))){
var inst_22976 = (state_23021[(10)]);
var inst_22962 = (state_23021[(15)]);
var inst_22976__$1 = cljs.core.seq.call(null,inst_22962);
var state_23021__$1 = (function (){var statearr_23045 = state_23021;
(statearr_23045[(10)] = inst_22976__$1);

return statearr_23045;
})();
if(inst_22976__$1){
var statearr_23046_23086 = state_23021__$1;
(statearr_23046_23086[(1)] = (13));

} else {
var statearr_23047_23087 = state_23021__$1;
(statearr_23047_23087[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (9))){
var inst_22998 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23048_23088 = state_23021__$1;
(statearr_23048_23088[(2)] = inst_22998);

(statearr_23048_23088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (5))){
var inst_22959 = cljs.core.deref.call(null,mults);
var inst_22960 = cljs.core.vals.call(null,inst_22959);
var inst_22961 = cljs.core.seq.call(null,inst_22960);
var inst_22962 = inst_22961;
var inst_22963 = null;
var inst_22964 = (0);
var inst_22965 = (0);
var state_23021__$1 = (function (){var statearr_23049 = state_23021;
(statearr_23049[(12)] = inst_22965);

(statearr_23049[(13)] = inst_22963);

(statearr_23049[(15)] = inst_22962);

(statearr_23049[(16)] = inst_22964);

return statearr_23049;
})();
var statearr_23050_23089 = state_23021__$1;
(statearr_23050_23089[(2)] = null);

(statearr_23050_23089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (14))){
var state_23021__$1 = state_23021;
var statearr_23054_23090 = state_23021__$1;
(statearr_23054_23090[(2)] = null);

(statearr_23054_23090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (16))){
var inst_22976 = (state_23021[(10)]);
var inst_22980 = cljs.core.chunk_first.call(null,inst_22976);
var inst_22981 = cljs.core.chunk_rest.call(null,inst_22976);
var inst_22982 = cljs.core.count.call(null,inst_22980);
var inst_22962 = inst_22981;
var inst_22963 = inst_22980;
var inst_22964 = inst_22982;
var inst_22965 = (0);
var state_23021__$1 = (function (){var statearr_23055 = state_23021;
(statearr_23055[(12)] = inst_22965);

(statearr_23055[(13)] = inst_22963);

(statearr_23055[(15)] = inst_22962);

(statearr_23055[(16)] = inst_22964);

return statearr_23055;
})();
var statearr_23056_23091 = state_23021__$1;
(statearr_23056_23091[(2)] = null);

(statearr_23056_23091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (10))){
var inst_22965 = (state_23021[(12)]);
var inst_22963 = (state_23021[(13)]);
var inst_22962 = (state_23021[(15)]);
var inst_22964 = (state_23021[(16)]);
var inst_22970 = cljs.core._nth.call(null,inst_22963,inst_22965);
var inst_22971 = cljs.core.async.muxch_STAR_.call(null,inst_22970);
var inst_22972 = cljs.core.async.close_BANG_.call(null,inst_22971);
var inst_22973 = (inst_22965 + (1));
var tmp23051 = inst_22963;
var tmp23052 = inst_22962;
var tmp23053 = inst_22964;
var inst_22962__$1 = tmp23052;
var inst_22963__$1 = tmp23051;
var inst_22964__$1 = tmp23053;
var inst_22965__$1 = inst_22973;
var state_23021__$1 = (function (){var statearr_23057 = state_23021;
(statearr_23057[(12)] = inst_22965__$1);

(statearr_23057[(13)] = inst_22963__$1);

(statearr_23057[(17)] = inst_22972);

(statearr_23057[(15)] = inst_22962__$1);

(statearr_23057[(16)] = inst_22964__$1);

return statearr_23057;
})();
var statearr_23058_23092 = state_23021__$1;
(statearr_23058_23092[(2)] = null);

(statearr_23058_23092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (18))){
var inst_22991 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23059_23093 = state_23021__$1;
(statearr_23059_23093[(2)] = inst_22991);

(statearr_23059_23093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23022 === (8))){
var inst_22965 = (state_23021[(12)]);
var inst_22964 = (state_23021[(16)]);
var inst_22967 = (inst_22965 < inst_22964);
var inst_22968 = inst_22967;
var state_23021__$1 = state_23021;
if(cljs.core.truth_(inst_22968)){
var statearr_23060_23094 = state_23021__$1;
(statearr_23060_23094[(1)] = (10));

} else {
var statearr_23061_23095 = state_23021__$1;
(statearr_23061_23095[(1)] = (11));

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
});})(c__19618__auto___23067,mults,ensure_mult,p))
;
return ((function (switch__19597__auto__,c__19618__auto___23067,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19598__auto__ = null;
var cljs$core$async$state_machine__19598__auto____0 = (function (){
var statearr_23062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23062[(0)] = cljs$core$async$state_machine__19598__auto__);

(statearr_23062[(1)] = (1));

return statearr_23062;
});
var cljs$core$async$state_machine__19598__auto____1 = (function (state_23021){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_23021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e23063){if((e23063 instanceof Object)){
var ex__19601__auto__ = e23063;
var statearr_23064_23096 = state_23021;
(statearr_23064_23096[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23097 = state_23021;
state_23021 = G__23097;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$state_machine__19598__auto__ = function(state_23021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19598__auto____1.call(this,state_23021);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19598__auto____0;
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19598__auto____1;
return cljs$core$async$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___23067,mults,ensure_mult,p))
})();
var state__19620__auto__ = (function (){var statearr_23065 = f__19619__auto__.call(null);
(statearr_23065[(6)] = c__19618__auto___23067);

return statearr_23065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___23067,mults,ensure_mult,p))
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
var G__23099 = arguments.length;
switch (G__23099) {
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
var G__23102 = arguments.length;
switch (G__23102) {
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
var G__23105 = arguments.length;
switch (G__23105) {
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
var c__19618__auto___23172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___23172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___23172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23144){
var state_val_23145 = (state_23144[(1)]);
if((state_val_23145 === (7))){
var state_23144__$1 = state_23144;
var statearr_23146_23173 = state_23144__$1;
(statearr_23146_23173[(2)] = null);

(statearr_23146_23173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (1))){
var state_23144__$1 = state_23144;
var statearr_23147_23174 = state_23144__$1;
(statearr_23147_23174[(2)] = null);

(statearr_23147_23174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (4))){
var inst_23108 = (state_23144[(7)]);
var inst_23110 = (inst_23108 < cnt);
var state_23144__$1 = state_23144;
if(cljs.core.truth_(inst_23110)){
var statearr_23148_23175 = state_23144__$1;
(statearr_23148_23175[(1)] = (6));

} else {
var statearr_23149_23176 = state_23144__$1;
(statearr_23149_23176[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (15))){
var inst_23140 = (state_23144[(2)]);
var state_23144__$1 = state_23144;
var statearr_23150_23177 = state_23144__$1;
(statearr_23150_23177[(2)] = inst_23140);

(statearr_23150_23177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (13))){
var inst_23133 = cljs.core.async.close_BANG_.call(null,out);
var state_23144__$1 = state_23144;
var statearr_23151_23178 = state_23144__$1;
(statearr_23151_23178[(2)] = inst_23133);

(statearr_23151_23178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (6))){
var state_23144__$1 = state_23144;
var statearr_23152_23179 = state_23144__$1;
(statearr_23152_23179[(2)] = null);

(statearr_23152_23179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (3))){
var inst_23142 = (state_23144[(2)]);
var state_23144__$1 = state_23144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23144__$1,inst_23142);
} else {
if((state_val_23145 === (12))){
var inst_23130 = (state_23144[(8)]);
var inst_23130__$1 = (state_23144[(2)]);
var inst_23131 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23130__$1);
var state_23144__$1 = (function (){var statearr_23153 = state_23144;
(statearr_23153[(8)] = inst_23130__$1);

return statearr_23153;
})();
if(cljs.core.truth_(inst_23131)){
var statearr_23154_23180 = state_23144__$1;
(statearr_23154_23180[(1)] = (13));

} else {
var statearr_23155_23181 = state_23144__$1;
(statearr_23155_23181[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (2))){
var inst_23107 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23108 = (0);
var state_23144__$1 = (function (){var statearr_23156 = state_23144;
(statearr_23156[(9)] = inst_23107);

(statearr_23156[(7)] = inst_23108);

return statearr_23156;
})();
var statearr_23157_23182 = state_23144__$1;
(statearr_23157_23182[(2)] = null);

(statearr_23157_23182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (11))){
var inst_23108 = (state_23144[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23144,(10),Object,null,(9));
var inst_23117 = chs__$1.call(null,inst_23108);
var inst_23118 = done.call(null,inst_23108);
var inst_23119 = cljs.core.async.take_BANG_.call(null,inst_23117,inst_23118);
var state_23144__$1 = state_23144;
var statearr_23158_23183 = state_23144__$1;
(statearr_23158_23183[(2)] = inst_23119);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23144__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (9))){
var inst_23108 = (state_23144[(7)]);
var inst_23121 = (state_23144[(2)]);
var inst_23122 = (inst_23108 + (1));
var inst_23108__$1 = inst_23122;
var state_23144__$1 = (function (){var statearr_23159 = state_23144;
(statearr_23159[(7)] = inst_23108__$1);

(statearr_23159[(10)] = inst_23121);

return statearr_23159;
})();
var statearr_23160_23184 = state_23144__$1;
(statearr_23160_23184[(2)] = null);

(statearr_23160_23184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (5))){
var inst_23128 = (state_23144[(2)]);
var state_23144__$1 = (function (){var statearr_23161 = state_23144;
(statearr_23161[(11)] = inst_23128);

return statearr_23161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23144__$1,(12),dchan);
} else {
if((state_val_23145 === (14))){
var inst_23130 = (state_23144[(8)]);
var inst_23135 = cljs.core.apply.call(null,f,inst_23130);
var state_23144__$1 = state_23144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23144__$1,(16),out,inst_23135);
} else {
if((state_val_23145 === (16))){
var inst_23137 = (state_23144[(2)]);
var state_23144__$1 = (function (){var statearr_23162 = state_23144;
(statearr_23162[(12)] = inst_23137);

return statearr_23162;
})();
var statearr_23163_23185 = state_23144__$1;
(statearr_23163_23185[(2)] = null);

(statearr_23163_23185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (10))){
var inst_23112 = (state_23144[(2)]);
var inst_23113 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23144__$1 = (function (){var statearr_23164 = state_23144;
(statearr_23164[(13)] = inst_23112);

return statearr_23164;
})();
var statearr_23165_23186 = state_23144__$1;
(statearr_23165_23186[(2)] = inst_23113);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23144__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (8))){
var inst_23126 = (state_23144[(2)]);
var state_23144__$1 = state_23144;
var statearr_23166_23187 = state_23144__$1;
(statearr_23166_23187[(2)] = inst_23126);

(statearr_23166_23187[(1)] = (5));


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
});})(c__19618__auto___23172,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19597__auto__,c__19618__auto___23172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19598__auto__ = null;
var cljs$core$async$state_machine__19598__auto____0 = (function (){
var statearr_23167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23167[(0)] = cljs$core$async$state_machine__19598__auto__);

(statearr_23167[(1)] = (1));

return statearr_23167;
});
var cljs$core$async$state_machine__19598__auto____1 = (function (state_23144){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_23144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e23168){if((e23168 instanceof Object)){
var ex__19601__auto__ = e23168;
var statearr_23169_23188 = state_23144;
(statearr_23169_23188[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23189 = state_23144;
state_23144 = G__23189;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$state_machine__19598__auto__ = function(state_23144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19598__auto____1.call(this,state_23144);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19598__auto____0;
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19598__auto____1;
return cljs$core$async$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___23172,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19620__auto__ = (function (){var statearr_23170 = f__19619__auto__.call(null);
(statearr_23170[(6)] = c__19618__auto___23172);

return statearr_23170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___23172,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__23192 = arguments.length;
switch (G__23192) {
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
var c__19618__auto___23246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___23246,out){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___23246,out){
return (function (state_23224){
var state_val_23225 = (state_23224[(1)]);
if((state_val_23225 === (7))){
var inst_23204 = (state_23224[(7)]);
var inst_23203 = (state_23224[(8)]);
var inst_23203__$1 = (state_23224[(2)]);
var inst_23204__$1 = cljs.core.nth.call(null,inst_23203__$1,(0),null);
var inst_23205 = cljs.core.nth.call(null,inst_23203__$1,(1),null);
var inst_23206 = (inst_23204__$1 == null);
var state_23224__$1 = (function (){var statearr_23226 = state_23224;
(statearr_23226[(7)] = inst_23204__$1);

(statearr_23226[(8)] = inst_23203__$1);

(statearr_23226[(9)] = inst_23205);

return statearr_23226;
})();
if(cljs.core.truth_(inst_23206)){
var statearr_23227_23247 = state_23224__$1;
(statearr_23227_23247[(1)] = (8));

} else {
var statearr_23228_23248 = state_23224__$1;
(statearr_23228_23248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (1))){
var inst_23193 = cljs.core.vec.call(null,chs);
var inst_23194 = inst_23193;
var state_23224__$1 = (function (){var statearr_23229 = state_23224;
(statearr_23229[(10)] = inst_23194);

return statearr_23229;
})();
var statearr_23230_23249 = state_23224__$1;
(statearr_23230_23249[(2)] = null);

(statearr_23230_23249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (4))){
var inst_23194 = (state_23224[(10)]);
var state_23224__$1 = state_23224;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23224__$1,(7),inst_23194);
} else {
if((state_val_23225 === (6))){
var inst_23220 = (state_23224[(2)]);
var state_23224__$1 = state_23224;
var statearr_23231_23250 = state_23224__$1;
(statearr_23231_23250[(2)] = inst_23220);

(statearr_23231_23250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (3))){
var inst_23222 = (state_23224[(2)]);
var state_23224__$1 = state_23224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23224__$1,inst_23222);
} else {
if((state_val_23225 === (2))){
var inst_23194 = (state_23224[(10)]);
var inst_23196 = cljs.core.count.call(null,inst_23194);
var inst_23197 = (inst_23196 > (0));
var state_23224__$1 = state_23224;
if(cljs.core.truth_(inst_23197)){
var statearr_23233_23251 = state_23224__$1;
(statearr_23233_23251[(1)] = (4));

} else {
var statearr_23234_23252 = state_23224__$1;
(statearr_23234_23252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (11))){
var inst_23194 = (state_23224[(10)]);
var inst_23213 = (state_23224[(2)]);
var tmp23232 = inst_23194;
var inst_23194__$1 = tmp23232;
var state_23224__$1 = (function (){var statearr_23235 = state_23224;
(statearr_23235[(10)] = inst_23194__$1);

(statearr_23235[(11)] = inst_23213);

return statearr_23235;
})();
var statearr_23236_23253 = state_23224__$1;
(statearr_23236_23253[(2)] = null);

(statearr_23236_23253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (9))){
var inst_23204 = (state_23224[(7)]);
var state_23224__$1 = state_23224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23224__$1,(11),out,inst_23204);
} else {
if((state_val_23225 === (5))){
var inst_23218 = cljs.core.async.close_BANG_.call(null,out);
var state_23224__$1 = state_23224;
var statearr_23237_23254 = state_23224__$1;
(statearr_23237_23254[(2)] = inst_23218);

(statearr_23237_23254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (10))){
var inst_23216 = (state_23224[(2)]);
var state_23224__$1 = state_23224;
var statearr_23238_23255 = state_23224__$1;
(statearr_23238_23255[(2)] = inst_23216);

(statearr_23238_23255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23225 === (8))){
var inst_23194 = (state_23224[(10)]);
var inst_23204 = (state_23224[(7)]);
var inst_23203 = (state_23224[(8)]);
var inst_23205 = (state_23224[(9)]);
var inst_23208 = (function (){var cs = inst_23194;
var vec__23199 = inst_23203;
var v = inst_23204;
var c = inst_23205;
return ((function (cs,vec__23199,v,c,inst_23194,inst_23204,inst_23203,inst_23205,state_val_23225,c__19618__auto___23246,out){
return (function (p1__23190_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23190_SHARP_);
});
;})(cs,vec__23199,v,c,inst_23194,inst_23204,inst_23203,inst_23205,state_val_23225,c__19618__auto___23246,out))
})();
var inst_23209 = cljs.core.filterv.call(null,inst_23208,inst_23194);
var inst_23194__$1 = inst_23209;
var state_23224__$1 = (function (){var statearr_23239 = state_23224;
(statearr_23239[(10)] = inst_23194__$1);

return statearr_23239;
})();
var statearr_23240_23256 = state_23224__$1;
(statearr_23240_23256[(2)] = null);

(statearr_23240_23256[(1)] = (2));


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
});})(c__19618__auto___23246,out))
;
return ((function (switch__19597__auto__,c__19618__auto___23246,out){
return (function() {
var cljs$core$async$state_machine__19598__auto__ = null;
var cljs$core$async$state_machine__19598__auto____0 = (function (){
var statearr_23241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23241[(0)] = cljs$core$async$state_machine__19598__auto__);

(statearr_23241[(1)] = (1));

return statearr_23241;
});
var cljs$core$async$state_machine__19598__auto____1 = (function (state_23224){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_23224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e23242){if((e23242 instanceof Object)){
var ex__19601__auto__ = e23242;
var statearr_23243_23257 = state_23224;
(statearr_23243_23257[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23258 = state_23224;
state_23224 = G__23258;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$state_machine__19598__auto__ = function(state_23224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19598__auto____1.call(this,state_23224);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19598__auto____0;
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19598__auto____1;
return cljs$core$async$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___23246,out))
})();
var state__19620__auto__ = (function (){var statearr_23244 = f__19619__auto__.call(null);
(statearr_23244[(6)] = c__19618__auto___23246);

return statearr_23244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___23246,out))
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
var G__23260 = arguments.length;
switch (G__23260) {
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
var c__19618__auto___23305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___23305,out){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___23305,out){
return (function (state_23284){
var state_val_23285 = (state_23284[(1)]);
if((state_val_23285 === (7))){
var inst_23266 = (state_23284[(7)]);
var inst_23266__$1 = (state_23284[(2)]);
var inst_23267 = (inst_23266__$1 == null);
var inst_23268 = cljs.core.not.call(null,inst_23267);
var state_23284__$1 = (function (){var statearr_23286 = state_23284;
(statearr_23286[(7)] = inst_23266__$1);

return statearr_23286;
})();
if(inst_23268){
var statearr_23287_23306 = state_23284__$1;
(statearr_23287_23306[(1)] = (8));

} else {
var statearr_23288_23307 = state_23284__$1;
(statearr_23288_23307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23285 === (1))){
var inst_23261 = (0);
var state_23284__$1 = (function (){var statearr_23289 = state_23284;
(statearr_23289[(8)] = inst_23261);

return statearr_23289;
})();
var statearr_23290_23308 = state_23284__$1;
(statearr_23290_23308[(2)] = null);

(statearr_23290_23308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23285 === (4))){
var state_23284__$1 = state_23284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23284__$1,(7),ch);
} else {
if((state_val_23285 === (6))){
var inst_23279 = (state_23284[(2)]);
var state_23284__$1 = state_23284;
var statearr_23291_23309 = state_23284__$1;
(statearr_23291_23309[(2)] = inst_23279);

(statearr_23291_23309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23285 === (3))){
var inst_23281 = (state_23284[(2)]);
var inst_23282 = cljs.core.async.close_BANG_.call(null,out);
var state_23284__$1 = (function (){var statearr_23292 = state_23284;
(statearr_23292[(9)] = inst_23281);

return statearr_23292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23284__$1,inst_23282);
} else {
if((state_val_23285 === (2))){
var inst_23261 = (state_23284[(8)]);
var inst_23263 = (inst_23261 < n);
var state_23284__$1 = state_23284;
if(cljs.core.truth_(inst_23263)){
var statearr_23293_23310 = state_23284__$1;
(statearr_23293_23310[(1)] = (4));

} else {
var statearr_23294_23311 = state_23284__$1;
(statearr_23294_23311[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23285 === (11))){
var inst_23261 = (state_23284[(8)]);
var inst_23271 = (state_23284[(2)]);
var inst_23272 = (inst_23261 + (1));
var inst_23261__$1 = inst_23272;
var state_23284__$1 = (function (){var statearr_23295 = state_23284;
(statearr_23295[(8)] = inst_23261__$1);

(statearr_23295[(10)] = inst_23271);

return statearr_23295;
})();
var statearr_23296_23312 = state_23284__$1;
(statearr_23296_23312[(2)] = null);

(statearr_23296_23312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23285 === (9))){
var state_23284__$1 = state_23284;
var statearr_23297_23313 = state_23284__$1;
(statearr_23297_23313[(2)] = null);

(statearr_23297_23313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23285 === (5))){
var state_23284__$1 = state_23284;
var statearr_23298_23314 = state_23284__$1;
(statearr_23298_23314[(2)] = null);

(statearr_23298_23314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23285 === (10))){
var inst_23276 = (state_23284[(2)]);
var state_23284__$1 = state_23284;
var statearr_23299_23315 = state_23284__$1;
(statearr_23299_23315[(2)] = inst_23276);

(statearr_23299_23315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23285 === (8))){
var inst_23266 = (state_23284[(7)]);
var state_23284__$1 = state_23284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23284__$1,(11),out,inst_23266);
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
});})(c__19618__auto___23305,out))
;
return ((function (switch__19597__auto__,c__19618__auto___23305,out){
return (function() {
var cljs$core$async$state_machine__19598__auto__ = null;
var cljs$core$async$state_machine__19598__auto____0 = (function (){
var statearr_23300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23300[(0)] = cljs$core$async$state_machine__19598__auto__);

(statearr_23300[(1)] = (1));

return statearr_23300;
});
var cljs$core$async$state_machine__19598__auto____1 = (function (state_23284){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_23284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e23301){if((e23301 instanceof Object)){
var ex__19601__auto__ = e23301;
var statearr_23302_23316 = state_23284;
(statearr_23302_23316[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23317 = state_23284;
state_23284 = G__23317;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$state_machine__19598__auto__ = function(state_23284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19598__auto____1.call(this,state_23284);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19598__auto____0;
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19598__auto____1;
return cljs$core$async$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___23305,out))
})();
var state__19620__auto__ = (function (){var statearr_23303 = f__19619__auto__.call(null);
(statearr_23303[(6)] = c__19618__auto___23305);

return statearr_23303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___23305,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23319 = (function (f,ch,meta23320){
this.f = f;
this.ch = ch;
this.meta23320 = meta23320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23321,meta23320__$1){
var self__ = this;
var _23321__$1 = this;
return (new cljs.core.async.t_cljs$core$async23319(self__.f,self__.ch,meta23320__$1));
});

cljs.core.async.t_cljs$core$async23319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23321){
var self__ = this;
var _23321__$1 = this;
return self__.meta23320;
});

cljs.core.async.t_cljs$core$async23319.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23319.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23319.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23322 = (function (f,ch,meta23320,_,fn1,meta23323){
this.f = f;
this.ch = ch;
this.meta23320 = meta23320;
this._ = _;
this.fn1 = fn1;
this.meta23323 = meta23323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23324,meta23323__$1){
var self__ = this;
var _23324__$1 = this;
return (new cljs.core.async.t_cljs$core$async23322(self__.f,self__.ch,self__.meta23320,self__._,self__.fn1,meta23323__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23324){
var self__ = this;
var _23324__$1 = this;
return self__.meta23323;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23318_SHARP_){
return f1.call(null,(((p1__23318_SHARP_ == null))?null:self__.f.call(null,p1__23318_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23322.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23320","meta23320",-1705132104,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23319","cljs.core.async/t_cljs$core$async23319",1002591283,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23323","meta23323",526142166,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23322";

cljs.core.async.t_cljs$core$async23322.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async23322");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23322.
 */
cljs.core.async.__GT_t_cljs$core$async23322 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23322(f__$1,ch__$1,meta23320__$1,___$2,fn1__$1,meta23323){
return (new cljs.core.async.t_cljs$core$async23322(f__$1,ch__$1,meta23320__$1,___$2,fn1__$1,meta23323));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23322(self__.f,self__.ch,self__.meta23320,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async23319.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23320","meta23320",-1705132104,null)], null);
});

cljs.core.async.t_cljs$core$async23319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23319";

cljs.core.async.t_cljs$core$async23319.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async23319");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23319.
 */
cljs.core.async.__GT_t_cljs$core$async23319 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23319(f__$1,ch__$1,meta23320){
return (new cljs.core.async.t_cljs$core$async23319(f__$1,ch__$1,meta23320));
});

}

return (new cljs.core.async.t_cljs$core$async23319(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23325 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23325 = (function (f,ch,meta23326){
this.f = f;
this.ch = ch;
this.meta23326 = meta23326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23327,meta23326__$1){
var self__ = this;
var _23327__$1 = this;
return (new cljs.core.async.t_cljs$core$async23325(self__.f,self__.ch,meta23326__$1));
});

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23327){
var self__ = this;
var _23327__$1 = this;
return self__.meta23326;
});

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23326","meta23326",-151848378,null)], null);
});

cljs.core.async.t_cljs$core$async23325.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23325";

cljs.core.async.t_cljs$core$async23325.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async23325");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23325.
 */
cljs.core.async.__GT_t_cljs$core$async23325 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23325(f__$1,ch__$1,meta23326){
return (new cljs.core.async.t_cljs$core$async23325(f__$1,ch__$1,meta23326));
});

}

return (new cljs.core.async.t_cljs$core$async23325(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23328 = (function (p,ch,meta23329){
this.p = p;
this.ch = ch;
this.meta23329 = meta23329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23330,meta23329__$1){
var self__ = this;
var _23330__$1 = this;
return (new cljs.core.async.t_cljs$core$async23328(self__.p,self__.ch,meta23329__$1));
});

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23330){
var self__ = this;
var _23330__$1 = this;
return self__.meta23329;
});

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23329","meta23329",540536448,null)], null);
});

cljs.core.async.t_cljs$core$async23328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23328";

cljs.core.async.t_cljs$core$async23328.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async23328");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23328.
 */
cljs.core.async.__GT_t_cljs$core$async23328 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23328(p__$1,ch__$1,meta23329){
return (new cljs.core.async.t_cljs$core$async23328(p__$1,ch__$1,meta23329));
});

}

return (new cljs.core.async.t_cljs$core$async23328(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23332 = arguments.length;
switch (G__23332) {
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
var c__19618__auto___23372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___23372,out){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___23372,out){
return (function (state_23353){
var state_val_23354 = (state_23353[(1)]);
if((state_val_23354 === (7))){
var inst_23349 = (state_23353[(2)]);
var state_23353__$1 = state_23353;
var statearr_23355_23373 = state_23353__$1;
(statearr_23355_23373[(2)] = inst_23349);

(statearr_23355_23373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (1))){
var state_23353__$1 = state_23353;
var statearr_23356_23374 = state_23353__$1;
(statearr_23356_23374[(2)] = null);

(statearr_23356_23374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (4))){
var inst_23335 = (state_23353[(7)]);
var inst_23335__$1 = (state_23353[(2)]);
var inst_23336 = (inst_23335__$1 == null);
var state_23353__$1 = (function (){var statearr_23357 = state_23353;
(statearr_23357[(7)] = inst_23335__$1);

return statearr_23357;
})();
if(cljs.core.truth_(inst_23336)){
var statearr_23358_23375 = state_23353__$1;
(statearr_23358_23375[(1)] = (5));

} else {
var statearr_23359_23376 = state_23353__$1;
(statearr_23359_23376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (6))){
var inst_23335 = (state_23353[(7)]);
var inst_23340 = p.call(null,inst_23335);
var state_23353__$1 = state_23353;
if(cljs.core.truth_(inst_23340)){
var statearr_23360_23377 = state_23353__$1;
(statearr_23360_23377[(1)] = (8));

} else {
var statearr_23361_23378 = state_23353__$1;
(statearr_23361_23378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (3))){
var inst_23351 = (state_23353[(2)]);
var state_23353__$1 = state_23353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23353__$1,inst_23351);
} else {
if((state_val_23354 === (2))){
var state_23353__$1 = state_23353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23353__$1,(4),ch);
} else {
if((state_val_23354 === (11))){
var inst_23343 = (state_23353[(2)]);
var state_23353__$1 = state_23353;
var statearr_23362_23379 = state_23353__$1;
(statearr_23362_23379[(2)] = inst_23343);

(statearr_23362_23379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (9))){
var state_23353__$1 = state_23353;
var statearr_23363_23380 = state_23353__$1;
(statearr_23363_23380[(2)] = null);

(statearr_23363_23380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (5))){
var inst_23338 = cljs.core.async.close_BANG_.call(null,out);
var state_23353__$1 = state_23353;
var statearr_23364_23381 = state_23353__$1;
(statearr_23364_23381[(2)] = inst_23338);

(statearr_23364_23381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (10))){
var inst_23346 = (state_23353[(2)]);
var state_23353__$1 = (function (){var statearr_23365 = state_23353;
(statearr_23365[(8)] = inst_23346);

return statearr_23365;
})();
var statearr_23366_23382 = state_23353__$1;
(statearr_23366_23382[(2)] = null);

(statearr_23366_23382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (8))){
var inst_23335 = (state_23353[(7)]);
var state_23353__$1 = state_23353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23353__$1,(11),out,inst_23335);
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
});})(c__19618__auto___23372,out))
;
return ((function (switch__19597__auto__,c__19618__auto___23372,out){
return (function() {
var cljs$core$async$state_machine__19598__auto__ = null;
var cljs$core$async$state_machine__19598__auto____0 = (function (){
var statearr_23367 = [null,null,null,null,null,null,null,null,null];
(statearr_23367[(0)] = cljs$core$async$state_machine__19598__auto__);

(statearr_23367[(1)] = (1));

return statearr_23367;
});
var cljs$core$async$state_machine__19598__auto____1 = (function (state_23353){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_23353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e23368){if((e23368 instanceof Object)){
var ex__19601__auto__ = e23368;
var statearr_23369_23383 = state_23353;
(statearr_23369_23383[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23384 = state_23353;
state_23353 = G__23384;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$state_machine__19598__auto__ = function(state_23353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19598__auto____1.call(this,state_23353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19598__auto____0;
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19598__auto____1;
return cljs$core$async$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___23372,out))
})();
var state__19620__auto__ = (function (){var statearr_23370 = f__19619__auto__.call(null);
(statearr_23370[(6)] = c__19618__auto___23372);

return statearr_23370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___23372,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23386 = arguments.length;
switch (G__23386) {
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
var c__19618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto__){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto__){
return (function (state_23449){
var state_val_23450 = (state_23449[(1)]);
if((state_val_23450 === (7))){
var inst_23445 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23451_23489 = state_23449__$1;
(statearr_23451_23489[(2)] = inst_23445);

(statearr_23451_23489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (20))){
var inst_23415 = (state_23449[(7)]);
var inst_23426 = (state_23449[(2)]);
var inst_23427 = cljs.core.next.call(null,inst_23415);
var inst_23401 = inst_23427;
var inst_23402 = null;
var inst_23403 = (0);
var inst_23404 = (0);
var state_23449__$1 = (function (){var statearr_23452 = state_23449;
(statearr_23452[(8)] = inst_23426);

(statearr_23452[(9)] = inst_23401);

(statearr_23452[(10)] = inst_23402);

(statearr_23452[(11)] = inst_23403);

(statearr_23452[(12)] = inst_23404);

return statearr_23452;
})();
var statearr_23453_23490 = state_23449__$1;
(statearr_23453_23490[(2)] = null);

(statearr_23453_23490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (1))){
var state_23449__$1 = state_23449;
var statearr_23454_23491 = state_23449__$1;
(statearr_23454_23491[(2)] = null);

(statearr_23454_23491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (4))){
var inst_23390 = (state_23449[(13)]);
var inst_23390__$1 = (state_23449[(2)]);
var inst_23391 = (inst_23390__$1 == null);
var state_23449__$1 = (function (){var statearr_23455 = state_23449;
(statearr_23455[(13)] = inst_23390__$1);

return statearr_23455;
})();
if(cljs.core.truth_(inst_23391)){
var statearr_23456_23492 = state_23449__$1;
(statearr_23456_23492[(1)] = (5));

} else {
var statearr_23457_23493 = state_23449__$1;
(statearr_23457_23493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (15))){
var state_23449__$1 = state_23449;
var statearr_23461_23494 = state_23449__$1;
(statearr_23461_23494[(2)] = null);

(statearr_23461_23494[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (21))){
var state_23449__$1 = state_23449;
var statearr_23462_23495 = state_23449__$1;
(statearr_23462_23495[(2)] = null);

(statearr_23462_23495[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (13))){
var inst_23401 = (state_23449[(9)]);
var inst_23402 = (state_23449[(10)]);
var inst_23403 = (state_23449[(11)]);
var inst_23404 = (state_23449[(12)]);
var inst_23411 = (state_23449[(2)]);
var inst_23412 = (inst_23404 + (1));
var tmp23458 = inst_23401;
var tmp23459 = inst_23402;
var tmp23460 = inst_23403;
var inst_23401__$1 = tmp23458;
var inst_23402__$1 = tmp23459;
var inst_23403__$1 = tmp23460;
var inst_23404__$1 = inst_23412;
var state_23449__$1 = (function (){var statearr_23463 = state_23449;
(statearr_23463[(9)] = inst_23401__$1);

(statearr_23463[(10)] = inst_23402__$1);

(statearr_23463[(11)] = inst_23403__$1);

(statearr_23463[(14)] = inst_23411);

(statearr_23463[(12)] = inst_23404__$1);

return statearr_23463;
})();
var statearr_23464_23496 = state_23449__$1;
(statearr_23464_23496[(2)] = null);

(statearr_23464_23496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (22))){
var state_23449__$1 = state_23449;
var statearr_23465_23497 = state_23449__$1;
(statearr_23465_23497[(2)] = null);

(statearr_23465_23497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (6))){
var inst_23390 = (state_23449[(13)]);
var inst_23399 = f.call(null,inst_23390);
var inst_23400 = cljs.core.seq.call(null,inst_23399);
var inst_23401 = inst_23400;
var inst_23402 = null;
var inst_23403 = (0);
var inst_23404 = (0);
var state_23449__$1 = (function (){var statearr_23466 = state_23449;
(statearr_23466[(9)] = inst_23401);

(statearr_23466[(10)] = inst_23402);

(statearr_23466[(11)] = inst_23403);

(statearr_23466[(12)] = inst_23404);

return statearr_23466;
})();
var statearr_23467_23498 = state_23449__$1;
(statearr_23467_23498[(2)] = null);

(statearr_23467_23498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (17))){
var inst_23415 = (state_23449[(7)]);
var inst_23419 = cljs.core.chunk_first.call(null,inst_23415);
var inst_23420 = cljs.core.chunk_rest.call(null,inst_23415);
var inst_23421 = cljs.core.count.call(null,inst_23419);
var inst_23401 = inst_23420;
var inst_23402 = inst_23419;
var inst_23403 = inst_23421;
var inst_23404 = (0);
var state_23449__$1 = (function (){var statearr_23468 = state_23449;
(statearr_23468[(9)] = inst_23401);

(statearr_23468[(10)] = inst_23402);

(statearr_23468[(11)] = inst_23403);

(statearr_23468[(12)] = inst_23404);

return statearr_23468;
})();
var statearr_23469_23499 = state_23449__$1;
(statearr_23469_23499[(2)] = null);

(statearr_23469_23499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (3))){
var inst_23447 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23449__$1,inst_23447);
} else {
if((state_val_23450 === (12))){
var inst_23435 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23470_23500 = state_23449__$1;
(statearr_23470_23500[(2)] = inst_23435);

(statearr_23470_23500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (2))){
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23449__$1,(4),in$);
} else {
if((state_val_23450 === (23))){
var inst_23443 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23471_23501 = state_23449__$1;
(statearr_23471_23501[(2)] = inst_23443);

(statearr_23471_23501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (19))){
var inst_23430 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23472_23502 = state_23449__$1;
(statearr_23472_23502[(2)] = inst_23430);

(statearr_23472_23502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (11))){
var inst_23401 = (state_23449[(9)]);
var inst_23415 = (state_23449[(7)]);
var inst_23415__$1 = cljs.core.seq.call(null,inst_23401);
var state_23449__$1 = (function (){var statearr_23473 = state_23449;
(statearr_23473[(7)] = inst_23415__$1);

return statearr_23473;
})();
if(inst_23415__$1){
var statearr_23474_23503 = state_23449__$1;
(statearr_23474_23503[(1)] = (14));

} else {
var statearr_23475_23504 = state_23449__$1;
(statearr_23475_23504[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (9))){
var inst_23437 = (state_23449[(2)]);
var inst_23438 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23449__$1 = (function (){var statearr_23476 = state_23449;
(statearr_23476[(15)] = inst_23437);

return statearr_23476;
})();
if(cljs.core.truth_(inst_23438)){
var statearr_23477_23505 = state_23449__$1;
(statearr_23477_23505[(1)] = (21));

} else {
var statearr_23478_23506 = state_23449__$1;
(statearr_23478_23506[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (5))){
var inst_23393 = cljs.core.async.close_BANG_.call(null,out);
var state_23449__$1 = state_23449;
var statearr_23479_23507 = state_23449__$1;
(statearr_23479_23507[(2)] = inst_23393);

(statearr_23479_23507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (14))){
var inst_23415 = (state_23449[(7)]);
var inst_23417 = cljs.core.chunked_seq_QMARK_.call(null,inst_23415);
var state_23449__$1 = state_23449;
if(inst_23417){
var statearr_23480_23508 = state_23449__$1;
(statearr_23480_23508[(1)] = (17));

} else {
var statearr_23481_23509 = state_23449__$1;
(statearr_23481_23509[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (16))){
var inst_23433 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23482_23510 = state_23449__$1;
(statearr_23482_23510[(2)] = inst_23433);

(statearr_23482_23510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (10))){
var inst_23402 = (state_23449[(10)]);
var inst_23404 = (state_23449[(12)]);
var inst_23409 = cljs.core._nth.call(null,inst_23402,inst_23404);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23449__$1,(13),out,inst_23409);
} else {
if((state_val_23450 === (18))){
var inst_23415 = (state_23449[(7)]);
var inst_23424 = cljs.core.first.call(null,inst_23415);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23449__$1,(20),out,inst_23424);
} else {
if((state_val_23450 === (8))){
var inst_23403 = (state_23449[(11)]);
var inst_23404 = (state_23449[(12)]);
var inst_23406 = (inst_23404 < inst_23403);
var inst_23407 = inst_23406;
var state_23449__$1 = state_23449;
if(cljs.core.truth_(inst_23407)){
var statearr_23483_23511 = state_23449__$1;
(statearr_23483_23511[(1)] = (10));

} else {
var statearr_23484_23512 = state_23449__$1;
(statearr_23484_23512[(1)] = (11));

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
});})(c__19618__auto__))
;
return ((function (switch__19597__auto__,c__19618__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19598__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19598__auto____0 = (function (){
var statearr_23485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23485[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19598__auto__);

(statearr_23485[(1)] = (1));

return statearr_23485;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19598__auto____1 = (function (state_23449){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_23449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e23486){if((e23486 instanceof Object)){
var ex__19601__auto__ = e23486;
var statearr_23487_23513 = state_23449;
(statearr_23487_23513[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23514 = state_23449;
state_23449 = G__23514;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19598__auto__ = function(state_23449){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19598__auto____1.call(this,state_23449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19598__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19598__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto__))
})();
var state__19620__auto__ = (function (){var statearr_23488 = f__19619__auto__.call(null);
(statearr_23488[(6)] = c__19618__auto__);

return statearr_23488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto__))
);

return c__19618__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23516 = arguments.length;
switch (G__23516) {
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
var G__23519 = arguments.length;
switch (G__23519) {
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
var G__23522 = arguments.length;
switch (G__23522) {
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
var c__19618__auto___23569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___23569,out){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___23569,out){
return (function (state_23546){
var state_val_23547 = (state_23546[(1)]);
if((state_val_23547 === (7))){
var inst_23541 = (state_23546[(2)]);
var state_23546__$1 = state_23546;
var statearr_23548_23570 = state_23546__$1;
(statearr_23548_23570[(2)] = inst_23541);

(statearr_23548_23570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (1))){
var inst_23523 = null;
var state_23546__$1 = (function (){var statearr_23549 = state_23546;
(statearr_23549[(7)] = inst_23523);

return statearr_23549;
})();
var statearr_23550_23571 = state_23546__$1;
(statearr_23550_23571[(2)] = null);

(statearr_23550_23571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (4))){
var inst_23526 = (state_23546[(8)]);
var inst_23526__$1 = (state_23546[(2)]);
var inst_23527 = (inst_23526__$1 == null);
var inst_23528 = cljs.core.not.call(null,inst_23527);
var state_23546__$1 = (function (){var statearr_23551 = state_23546;
(statearr_23551[(8)] = inst_23526__$1);

return statearr_23551;
})();
if(inst_23528){
var statearr_23552_23572 = state_23546__$1;
(statearr_23552_23572[(1)] = (5));

} else {
var statearr_23553_23573 = state_23546__$1;
(statearr_23553_23573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (6))){
var state_23546__$1 = state_23546;
var statearr_23554_23574 = state_23546__$1;
(statearr_23554_23574[(2)] = null);

(statearr_23554_23574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (3))){
var inst_23543 = (state_23546[(2)]);
var inst_23544 = cljs.core.async.close_BANG_.call(null,out);
var state_23546__$1 = (function (){var statearr_23555 = state_23546;
(statearr_23555[(9)] = inst_23543);

return statearr_23555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23546__$1,inst_23544);
} else {
if((state_val_23547 === (2))){
var state_23546__$1 = state_23546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23546__$1,(4),ch);
} else {
if((state_val_23547 === (11))){
var inst_23526 = (state_23546[(8)]);
var inst_23535 = (state_23546[(2)]);
var inst_23523 = inst_23526;
var state_23546__$1 = (function (){var statearr_23556 = state_23546;
(statearr_23556[(10)] = inst_23535);

(statearr_23556[(7)] = inst_23523);

return statearr_23556;
})();
var statearr_23557_23575 = state_23546__$1;
(statearr_23557_23575[(2)] = null);

(statearr_23557_23575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (9))){
var inst_23526 = (state_23546[(8)]);
var state_23546__$1 = state_23546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23546__$1,(11),out,inst_23526);
} else {
if((state_val_23547 === (5))){
var inst_23523 = (state_23546[(7)]);
var inst_23526 = (state_23546[(8)]);
var inst_23530 = cljs.core._EQ_.call(null,inst_23526,inst_23523);
var state_23546__$1 = state_23546;
if(inst_23530){
var statearr_23559_23576 = state_23546__$1;
(statearr_23559_23576[(1)] = (8));

} else {
var statearr_23560_23577 = state_23546__$1;
(statearr_23560_23577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (10))){
var inst_23538 = (state_23546[(2)]);
var state_23546__$1 = state_23546;
var statearr_23561_23578 = state_23546__$1;
(statearr_23561_23578[(2)] = inst_23538);

(statearr_23561_23578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (8))){
var inst_23523 = (state_23546[(7)]);
var tmp23558 = inst_23523;
var inst_23523__$1 = tmp23558;
var state_23546__$1 = (function (){var statearr_23562 = state_23546;
(statearr_23562[(7)] = inst_23523__$1);

return statearr_23562;
})();
var statearr_23563_23579 = state_23546__$1;
(statearr_23563_23579[(2)] = null);

(statearr_23563_23579[(1)] = (2));


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
});})(c__19618__auto___23569,out))
;
return ((function (switch__19597__auto__,c__19618__auto___23569,out){
return (function() {
var cljs$core$async$state_machine__19598__auto__ = null;
var cljs$core$async$state_machine__19598__auto____0 = (function (){
var statearr_23564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23564[(0)] = cljs$core$async$state_machine__19598__auto__);

(statearr_23564[(1)] = (1));

return statearr_23564;
});
var cljs$core$async$state_machine__19598__auto____1 = (function (state_23546){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_23546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e23565){if((e23565 instanceof Object)){
var ex__19601__auto__ = e23565;
var statearr_23566_23580 = state_23546;
(statearr_23566_23580[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23581 = state_23546;
state_23546 = G__23581;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$state_machine__19598__auto__ = function(state_23546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19598__auto____1.call(this,state_23546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19598__auto____0;
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19598__auto____1;
return cljs$core$async$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___23569,out))
})();
var state__19620__auto__ = (function (){var statearr_23567 = f__19619__auto__.call(null);
(statearr_23567[(6)] = c__19618__auto___23569);

return statearr_23567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___23569,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23583 = arguments.length;
switch (G__23583) {
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
var c__19618__auto___23649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___23649,out){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___23649,out){
return (function (state_23621){
var state_val_23622 = (state_23621[(1)]);
if((state_val_23622 === (7))){
var inst_23617 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
var statearr_23623_23650 = state_23621__$1;
(statearr_23623_23650[(2)] = inst_23617);

(statearr_23623_23650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (1))){
var inst_23584 = (new Array(n));
var inst_23585 = inst_23584;
var inst_23586 = (0);
var state_23621__$1 = (function (){var statearr_23624 = state_23621;
(statearr_23624[(7)] = inst_23586);

(statearr_23624[(8)] = inst_23585);

return statearr_23624;
})();
var statearr_23625_23651 = state_23621__$1;
(statearr_23625_23651[(2)] = null);

(statearr_23625_23651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (4))){
var inst_23589 = (state_23621[(9)]);
var inst_23589__$1 = (state_23621[(2)]);
var inst_23590 = (inst_23589__$1 == null);
var inst_23591 = cljs.core.not.call(null,inst_23590);
var state_23621__$1 = (function (){var statearr_23626 = state_23621;
(statearr_23626[(9)] = inst_23589__$1);

return statearr_23626;
})();
if(inst_23591){
var statearr_23627_23652 = state_23621__$1;
(statearr_23627_23652[(1)] = (5));

} else {
var statearr_23628_23653 = state_23621__$1;
(statearr_23628_23653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (15))){
var inst_23611 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
var statearr_23629_23654 = state_23621__$1;
(statearr_23629_23654[(2)] = inst_23611);

(statearr_23629_23654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (13))){
var state_23621__$1 = state_23621;
var statearr_23630_23655 = state_23621__$1;
(statearr_23630_23655[(2)] = null);

(statearr_23630_23655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (6))){
var inst_23586 = (state_23621[(7)]);
var inst_23607 = (inst_23586 > (0));
var state_23621__$1 = state_23621;
if(cljs.core.truth_(inst_23607)){
var statearr_23631_23656 = state_23621__$1;
(statearr_23631_23656[(1)] = (12));

} else {
var statearr_23632_23657 = state_23621__$1;
(statearr_23632_23657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (3))){
var inst_23619 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23621__$1,inst_23619);
} else {
if((state_val_23622 === (12))){
var inst_23585 = (state_23621[(8)]);
var inst_23609 = cljs.core.vec.call(null,inst_23585);
var state_23621__$1 = state_23621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23621__$1,(15),out,inst_23609);
} else {
if((state_val_23622 === (2))){
var state_23621__$1 = state_23621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23621__$1,(4),ch);
} else {
if((state_val_23622 === (11))){
var inst_23601 = (state_23621[(2)]);
var inst_23602 = (new Array(n));
var inst_23585 = inst_23602;
var inst_23586 = (0);
var state_23621__$1 = (function (){var statearr_23633 = state_23621;
(statearr_23633[(10)] = inst_23601);

(statearr_23633[(7)] = inst_23586);

(statearr_23633[(8)] = inst_23585);

return statearr_23633;
})();
var statearr_23634_23658 = state_23621__$1;
(statearr_23634_23658[(2)] = null);

(statearr_23634_23658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (9))){
var inst_23585 = (state_23621[(8)]);
var inst_23599 = cljs.core.vec.call(null,inst_23585);
var state_23621__$1 = state_23621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23621__$1,(11),out,inst_23599);
} else {
if((state_val_23622 === (5))){
var inst_23586 = (state_23621[(7)]);
var inst_23589 = (state_23621[(9)]);
var inst_23594 = (state_23621[(11)]);
var inst_23585 = (state_23621[(8)]);
var inst_23593 = (inst_23585[inst_23586] = inst_23589);
var inst_23594__$1 = (inst_23586 + (1));
var inst_23595 = (inst_23594__$1 < n);
var state_23621__$1 = (function (){var statearr_23635 = state_23621;
(statearr_23635[(11)] = inst_23594__$1);

(statearr_23635[(12)] = inst_23593);

return statearr_23635;
})();
if(cljs.core.truth_(inst_23595)){
var statearr_23636_23659 = state_23621__$1;
(statearr_23636_23659[(1)] = (8));

} else {
var statearr_23637_23660 = state_23621__$1;
(statearr_23637_23660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (14))){
var inst_23614 = (state_23621[(2)]);
var inst_23615 = cljs.core.async.close_BANG_.call(null,out);
var state_23621__$1 = (function (){var statearr_23639 = state_23621;
(statearr_23639[(13)] = inst_23614);

return statearr_23639;
})();
var statearr_23640_23661 = state_23621__$1;
(statearr_23640_23661[(2)] = inst_23615);

(statearr_23640_23661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (10))){
var inst_23605 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
var statearr_23641_23662 = state_23621__$1;
(statearr_23641_23662[(2)] = inst_23605);

(statearr_23641_23662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (8))){
var inst_23594 = (state_23621[(11)]);
var inst_23585 = (state_23621[(8)]);
var tmp23638 = inst_23585;
var inst_23585__$1 = tmp23638;
var inst_23586 = inst_23594;
var state_23621__$1 = (function (){var statearr_23642 = state_23621;
(statearr_23642[(7)] = inst_23586);

(statearr_23642[(8)] = inst_23585__$1);

return statearr_23642;
})();
var statearr_23643_23663 = state_23621__$1;
(statearr_23643_23663[(2)] = null);

(statearr_23643_23663[(1)] = (2));


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
});})(c__19618__auto___23649,out))
;
return ((function (switch__19597__auto__,c__19618__auto___23649,out){
return (function() {
var cljs$core$async$state_machine__19598__auto__ = null;
var cljs$core$async$state_machine__19598__auto____0 = (function (){
var statearr_23644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23644[(0)] = cljs$core$async$state_machine__19598__auto__);

(statearr_23644[(1)] = (1));

return statearr_23644;
});
var cljs$core$async$state_machine__19598__auto____1 = (function (state_23621){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_23621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e23645){if((e23645 instanceof Object)){
var ex__19601__auto__ = e23645;
var statearr_23646_23664 = state_23621;
(statearr_23646_23664[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23665 = state_23621;
state_23621 = G__23665;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$state_machine__19598__auto__ = function(state_23621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19598__auto____1.call(this,state_23621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19598__auto____0;
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19598__auto____1;
return cljs$core$async$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___23649,out))
})();
var state__19620__auto__ = (function (){var statearr_23647 = f__19619__auto__.call(null);
(statearr_23647[(6)] = c__19618__auto___23649);

return statearr_23647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___23649,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23667 = arguments.length;
switch (G__23667) {
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
var c__19618__auto___23737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___23737,out){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___23737,out){
return (function (state_23709){
var state_val_23710 = (state_23709[(1)]);
if((state_val_23710 === (7))){
var inst_23705 = (state_23709[(2)]);
var state_23709__$1 = state_23709;
var statearr_23711_23738 = state_23709__$1;
(statearr_23711_23738[(2)] = inst_23705);

(statearr_23711_23738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (1))){
var inst_23668 = [];
var inst_23669 = inst_23668;
var inst_23670 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23709__$1 = (function (){var statearr_23712 = state_23709;
(statearr_23712[(7)] = inst_23669);

(statearr_23712[(8)] = inst_23670);

return statearr_23712;
})();
var statearr_23713_23739 = state_23709__$1;
(statearr_23713_23739[(2)] = null);

(statearr_23713_23739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (4))){
var inst_23673 = (state_23709[(9)]);
var inst_23673__$1 = (state_23709[(2)]);
var inst_23674 = (inst_23673__$1 == null);
var inst_23675 = cljs.core.not.call(null,inst_23674);
var state_23709__$1 = (function (){var statearr_23714 = state_23709;
(statearr_23714[(9)] = inst_23673__$1);

return statearr_23714;
})();
if(inst_23675){
var statearr_23715_23740 = state_23709__$1;
(statearr_23715_23740[(1)] = (5));

} else {
var statearr_23716_23741 = state_23709__$1;
(statearr_23716_23741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (15))){
var inst_23699 = (state_23709[(2)]);
var state_23709__$1 = state_23709;
var statearr_23717_23742 = state_23709__$1;
(statearr_23717_23742[(2)] = inst_23699);

(statearr_23717_23742[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (13))){
var state_23709__$1 = state_23709;
var statearr_23718_23743 = state_23709__$1;
(statearr_23718_23743[(2)] = null);

(statearr_23718_23743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (6))){
var inst_23669 = (state_23709[(7)]);
var inst_23694 = inst_23669.length;
var inst_23695 = (inst_23694 > (0));
var state_23709__$1 = state_23709;
if(cljs.core.truth_(inst_23695)){
var statearr_23719_23744 = state_23709__$1;
(statearr_23719_23744[(1)] = (12));

} else {
var statearr_23720_23745 = state_23709__$1;
(statearr_23720_23745[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (3))){
var inst_23707 = (state_23709[(2)]);
var state_23709__$1 = state_23709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23709__$1,inst_23707);
} else {
if((state_val_23710 === (12))){
var inst_23669 = (state_23709[(7)]);
var inst_23697 = cljs.core.vec.call(null,inst_23669);
var state_23709__$1 = state_23709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23709__$1,(15),out,inst_23697);
} else {
if((state_val_23710 === (2))){
var state_23709__$1 = state_23709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23709__$1,(4),ch);
} else {
if((state_val_23710 === (11))){
var inst_23673 = (state_23709[(9)]);
var inst_23677 = (state_23709[(10)]);
var inst_23687 = (state_23709[(2)]);
var inst_23688 = [];
var inst_23689 = inst_23688.push(inst_23673);
var inst_23669 = inst_23688;
var inst_23670 = inst_23677;
var state_23709__$1 = (function (){var statearr_23721 = state_23709;
(statearr_23721[(7)] = inst_23669);

(statearr_23721[(11)] = inst_23687);

(statearr_23721[(8)] = inst_23670);

(statearr_23721[(12)] = inst_23689);

return statearr_23721;
})();
var statearr_23722_23746 = state_23709__$1;
(statearr_23722_23746[(2)] = null);

(statearr_23722_23746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (9))){
var inst_23669 = (state_23709[(7)]);
var inst_23685 = cljs.core.vec.call(null,inst_23669);
var state_23709__$1 = state_23709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23709__$1,(11),out,inst_23685);
} else {
if((state_val_23710 === (5))){
var inst_23670 = (state_23709[(8)]);
var inst_23673 = (state_23709[(9)]);
var inst_23677 = (state_23709[(10)]);
var inst_23677__$1 = f.call(null,inst_23673);
var inst_23678 = cljs.core._EQ_.call(null,inst_23677__$1,inst_23670);
var inst_23679 = cljs.core.keyword_identical_QMARK_.call(null,inst_23670,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23680 = ((inst_23678) || (inst_23679));
var state_23709__$1 = (function (){var statearr_23723 = state_23709;
(statearr_23723[(10)] = inst_23677__$1);

return statearr_23723;
})();
if(cljs.core.truth_(inst_23680)){
var statearr_23724_23747 = state_23709__$1;
(statearr_23724_23747[(1)] = (8));

} else {
var statearr_23725_23748 = state_23709__$1;
(statearr_23725_23748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (14))){
var inst_23702 = (state_23709[(2)]);
var inst_23703 = cljs.core.async.close_BANG_.call(null,out);
var state_23709__$1 = (function (){var statearr_23727 = state_23709;
(statearr_23727[(13)] = inst_23702);

return statearr_23727;
})();
var statearr_23728_23749 = state_23709__$1;
(statearr_23728_23749[(2)] = inst_23703);

(statearr_23728_23749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (10))){
var inst_23692 = (state_23709[(2)]);
var state_23709__$1 = state_23709;
var statearr_23729_23750 = state_23709__$1;
(statearr_23729_23750[(2)] = inst_23692);

(statearr_23729_23750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (8))){
var inst_23669 = (state_23709[(7)]);
var inst_23673 = (state_23709[(9)]);
var inst_23677 = (state_23709[(10)]);
var inst_23682 = inst_23669.push(inst_23673);
var tmp23726 = inst_23669;
var inst_23669__$1 = tmp23726;
var inst_23670 = inst_23677;
var state_23709__$1 = (function (){var statearr_23730 = state_23709;
(statearr_23730[(7)] = inst_23669__$1);

(statearr_23730[(8)] = inst_23670);

(statearr_23730[(14)] = inst_23682);

return statearr_23730;
})();
var statearr_23731_23751 = state_23709__$1;
(statearr_23731_23751[(2)] = null);

(statearr_23731_23751[(1)] = (2));


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
});})(c__19618__auto___23737,out))
;
return ((function (switch__19597__auto__,c__19618__auto___23737,out){
return (function() {
var cljs$core$async$state_machine__19598__auto__ = null;
var cljs$core$async$state_machine__19598__auto____0 = (function (){
var statearr_23732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23732[(0)] = cljs$core$async$state_machine__19598__auto__);

(statearr_23732[(1)] = (1));

return statearr_23732;
});
var cljs$core$async$state_machine__19598__auto____1 = (function (state_23709){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_23709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e23733){if((e23733 instanceof Object)){
var ex__19601__auto__ = e23733;
var statearr_23734_23752 = state_23709;
(statearr_23734_23752[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23753 = state_23709;
state_23709 = G__23753;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
cljs$core$async$state_machine__19598__auto__ = function(state_23709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19598__auto____1.call(this,state_23709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19598__auto____0;
cljs$core$async$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19598__auto____1;
return cljs$core$async$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___23737,out))
})();
var state__19620__auto__ = (function (){var statearr_23735 = f__19619__auto__.call(null);
(statearr_23735[(6)] = c__19618__auto___23737);

return statearr_23735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___23737,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
