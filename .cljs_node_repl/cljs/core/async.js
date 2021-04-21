// Compiled by ClojureScript 1.10.191 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12320 = arguments.length;
switch (G__12320) {
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
if(typeof cljs.core.async.t_cljs$core$async12321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12321 = (function (f,blockable,meta12322){
this.f = f;
this.blockable = blockable;
this.meta12322 = meta12322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12323,meta12322__$1){
var self__ = this;
var _12323__$1 = this;
return (new cljs.core.async.t_cljs$core$async12321(self__.f,self__.blockable,meta12322__$1));
});

cljs.core.async.t_cljs$core$async12321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12323){
var self__ = this;
var _12323__$1 = this;
return self__.meta12322;
});

cljs.core.async.t_cljs$core$async12321.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12322","meta12322",390517649,null)], null);
});

cljs.core.async.t_cljs$core$async12321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12321";

cljs.core.async.t_cljs$core$async12321.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async12321");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12321.
 */
cljs.core.async.__GT_t_cljs$core$async12321 = (function cljs$core$async$__GT_t_cljs$core$async12321(f__$1,blockable__$1,meta12322){
return (new cljs.core.async.t_cljs$core$async12321(f__$1,blockable__$1,meta12322));
});

}

return (new cljs.core.async.t_cljs$core$async12321(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12327 = arguments.length;
switch (G__12327) {
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
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
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
var G__12330 = arguments.length;
switch (G__12330) {
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
var G__12333 = arguments.length;
switch (G__12333) {
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
var val_12335 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12335);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12335,ret){
return (function (){
return fn1.call(null,val_12335);
});})(val_12335,ret))
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
var G__12337 = arguments.length;
switch (G__12337) {
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
var n__4374__auto___12339 = n;
var x_12340 = (0);
while(true){
if((x_12340 < n__4374__auto___12339)){
(a[x_12340] = (0));

var G__12341 = (x_12340 + (1));
x_12340 = G__12341;
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

var G__12342 = (i + (1));
i = G__12342;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12343 = (function (flag,meta12344){
this.flag = flag;
this.meta12344 = meta12344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12345,meta12344__$1){
var self__ = this;
var _12345__$1 = this;
return (new cljs.core.async.t_cljs$core$async12343(self__.flag,meta12344__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12345){
var self__ = this;
var _12345__$1 = this;
return self__.meta12344;
});})(flag))
;

cljs.core.async.t_cljs$core$async12343.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12343.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12344","meta12344",-1044766683,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12343";

cljs.core.async.t_cljs$core$async12343.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async12343");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12343.
 */
cljs.core.async.__GT_t_cljs$core$async12343 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12343(flag__$1,meta12344){
return (new cljs.core.async.t_cljs$core$async12343(flag__$1,meta12344));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12343(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12346 = (function (flag,cb,meta12347){
this.flag = flag;
this.cb = cb;
this.meta12347 = meta12347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12348,meta12347__$1){
var self__ = this;
var _12348__$1 = this;
return (new cljs.core.async.t_cljs$core$async12346(self__.flag,self__.cb,meta12347__$1));
});

cljs.core.async.t_cljs$core$async12346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12348){
var self__ = this;
var _12348__$1 = this;
return self__.meta12347;
});

cljs.core.async.t_cljs$core$async12346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12347","meta12347",936840928,null)], null);
});

cljs.core.async.t_cljs$core$async12346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12346";

cljs.core.async.t_cljs$core$async12346.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async12346");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12346.
 */
cljs.core.async.__GT_t_cljs$core$async12346 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12346(flag__$1,cb__$1,meta12347){
return (new cljs.core.async.t_cljs$core$async12346(flag__$1,cb__$1,meta12347));
});

}

return (new cljs.core.async.t_cljs$core$async12346(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12349_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12349_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12350_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12350_SHARP_,port], null));
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
var G__12351 = (i + (1));
i = G__12351;
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
var len__4497__auto___12357 = arguments.length;
var i__4498__auto___12358 = (0);
while(true){
if((i__4498__auto___12358 < len__4497__auto___12357)){
args__4500__auto__.push((arguments[i__4498__auto___12358]));

var G__12359 = (i__4498__auto___12358 + (1));
i__4498__auto___12358 = G__12359;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12354){
var map__12355 = p__12354;
var map__12355__$1 = ((((!((map__12355 == null)))?(((((map__12355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12355):map__12355);
var opts = map__12355__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12352){
var G__12353 = cljs.core.first.call(null,seq12352);
var seq12352__$1 = cljs.core.next.call(null,seq12352);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12353,seq12352__$1);
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
var G__12361 = arguments.length;
switch (G__12361) {
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
var c__10178__auto___12407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___12407){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___12407){
return (function (state_12385){
var state_val_12386 = (state_12385[(1)]);
if((state_val_12386 === (7))){
var inst_12381 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
var statearr_12387_12408 = state_12385__$1;
(statearr_12387_12408[(2)] = inst_12381);

(statearr_12387_12408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (1))){
var state_12385__$1 = state_12385;
var statearr_12388_12409 = state_12385__$1;
(statearr_12388_12409[(2)] = null);

(statearr_12388_12409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (4))){
var inst_12364 = (state_12385[(7)]);
var inst_12364__$1 = (state_12385[(2)]);
var inst_12365 = (inst_12364__$1 == null);
var state_12385__$1 = (function (){var statearr_12389 = state_12385;
(statearr_12389[(7)] = inst_12364__$1);

return statearr_12389;
})();
if(cljs.core.truth_(inst_12365)){
var statearr_12390_12410 = state_12385__$1;
(statearr_12390_12410[(1)] = (5));

} else {
var statearr_12391_12411 = state_12385__$1;
(statearr_12391_12411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (13))){
var state_12385__$1 = state_12385;
var statearr_12392_12412 = state_12385__$1;
(statearr_12392_12412[(2)] = null);

(statearr_12392_12412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (6))){
var inst_12364 = (state_12385[(7)]);
var state_12385__$1 = state_12385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12385__$1,(11),to,inst_12364);
} else {
if((state_val_12386 === (3))){
var inst_12383 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12385__$1,inst_12383);
} else {
if((state_val_12386 === (12))){
var state_12385__$1 = state_12385;
var statearr_12393_12413 = state_12385__$1;
(statearr_12393_12413[(2)] = null);

(statearr_12393_12413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (2))){
var state_12385__$1 = state_12385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12385__$1,(4),from);
} else {
if((state_val_12386 === (11))){
var inst_12374 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
if(cljs.core.truth_(inst_12374)){
var statearr_12394_12414 = state_12385__$1;
(statearr_12394_12414[(1)] = (12));

} else {
var statearr_12395_12415 = state_12385__$1;
(statearr_12395_12415[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (9))){
var state_12385__$1 = state_12385;
var statearr_12396_12416 = state_12385__$1;
(statearr_12396_12416[(2)] = null);

(statearr_12396_12416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (5))){
var state_12385__$1 = state_12385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12397_12417 = state_12385__$1;
(statearr_12397_12417[(1)] = (8));

} else {
var statearr_12398_12418 = state_12385__$1;
(statearr_12398_12418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (14))){
var inst_12379 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
var statearr_12399_12419 = state_12385__$1;
(statearr_12399_12419[(2)] = inst_12379);

(statearr_12399_12419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (10))){
var inst_12371 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
var statearr_12400_12420 = state_12385__$1;
(statearr_12400_12420[(2)] = inst_12371);

(statearr_12400_12420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (8))){
var inst_12368 = cljs.core.async.close_BANG_.call(null,to);
var state_12385__$1 = state_12385;
var statearr_12401_12421 = state_12385__$1;
(statearr_12401_12421[(2)] = inst_12368);

(statearr_12401_12421[(1)] = (10));


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
});})(c__10178__auto___12407))
;
return ((function (switch__10163__auto__,c__10178__auto___12407){
return (function() {
var cljs$core$async$state_machine__10164__auto__ = null;
var cljs$core$async$state_machine__10164__auto____0 = (function (){
var statearr_12402 = [null,null,null,null,null,null,null,null];
(statearr_12402[(0)] = cljs$core$async$state_machine__10164__auto__);

(statearr_12402[(1)] = (1));

return statearr_12402;
});
var cljs$core$async$state_machine__10164__auto____1 = (function (state_12385){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_12385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e12403){if((e12403 instanceof Object)){
var ex__10167__auto__ = e12403;
var statearr_12404_12422 = state_12385;
(statearr_12404_12422[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12423 = state_12385;
state_12385 = G__12423;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$state_machine__10164__auto__ = function(state_12385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10164__auto____1.call(this,state_12385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10164__auto____0;
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10164__auto____1;
return cljs$core$async$state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___12407))
})();
var state__10180__auto__ = (function (){var statearr_12405 = f__10179__auto__.call(null);
(statearr_12405[(6)] = c__10178__auto___12407);

return statearr_12405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___12407))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12424){
var vec__12425 = p__12424;
var v = cljs.core.nth.call(null,vec__12425,(0),null);
var p = cljs.core.nth.call(null,vec__12425,(1),null);
var job = vec__12425;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10178__auto___12596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___12596,res,vec__12425,v,p,job,jobs,results){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___12596,res,vec__12425,v,p,job,jobs,results){
return (function (state_12432){
var state_val_12433 = (state_12432[(1)]);
if((state_val_12433 === (1))){
var state_12432__$1 = state_12432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12432__$1,(2),res,v);
} else {
if((state_val_12433 === (2))){
var inst_12429 = (state_12432[(2)]);
var inst_12430 = cljs.core.async.close_BANG_.call(null,res);
var state_12432__$1 = (function (){var statearr_12434 = state_12432;
(statearr_12434[(7)] = inst_12429);

return statearr_12434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12432__$1,inst_12430);
} else {
return null;
}
}
});})(c__10178__auto___12596,res,vec__12425,v,p,job,jobs,results))
;
return ((function (switch__10163__auto__,c__10178__auto___12596,res,vec__12425,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0 = (function (){
var statearr_12435 = [null,null,null,null,null,null,null,null];
(statearr_12435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__);

(statearr_12435[(1)] = (1));

return statearr_12435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1 = (function (state_12432){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_12432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e12436){if((e12436 instanceof Object)){
var ex__10167__auto__ = e12436;
var statearr_12437_12597 = state_12432;
(statearr_12437_12597[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12598 = state_12432;
state_12432 = G__12598;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__ = function(state_12432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1.call(this,state_12432);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___12596,res,vec__12425,v,p,job,jobs,results))
})();
var state__10180__auto__ = (function (){var statearr_12438 = f__10179__auto__.call(null);
(statearr_12438[(6)] = c__10178__auto___12596);

return statearr_12438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___12596,res,vec__12425,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12439){
var vec__12440 = p__12439;
var v = cljs.core.nth.call(null,vec__12440,(0),null);
var p = cljs.core.nth.call(null,vec__12440,(1),null);
var job = vec__12440;
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
var n__4374__auto___12599 = n;
var __12600 = (0);
while(true){
if((__12600 < n__4374__auto___12599)){
var G__12443_12601 = type;
var G__12443_12602__$1 = (((G__12443_12601 instanceof cljs.core.Keyword))?G__12443_12601.fqn:null);
switch (G__12443_12602__$1) {
case "compute":
var c__10178__auto___12604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12600,c__10178__auto___12604,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (__12600,c__10178__auto___12604,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async){
return (function (state_12456){
var state_val_12457 = (state_12456[(1)]);
if((state_val_12457 === (1))){
var state_12456__$1 = state_12456;
var statearr_12458_12605 = state_12456__$1;
(statearr_12458_12605[(2)] = null);

(statearr_12458_12605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (2))){
var state_12456__$1 = state_12456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12456__$1,(4),jobs);
} else {
if((state_val_12457 === (3))){
var inst_12454 = (state_12456[(2)]);
var state_12456__$1 = state_12456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12456__$1,inst_12454);
} else {
if((state_val_12457 === (4))){
var inst_12446 = (state_12456[(2)]);
var inst_12447 = process.call(null,inst_12446);
var state_12456__$1 = state_12456;
if(cljs.core.truth_(inst_12447)){
var statearr_12459_12606 = state_12456__$1;
(statearr_12459_12606[(1)] = (5));

} else {
var statearr_12460_12607 = state_12456__$1;
(statearr_12460_12607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (5))){
var state_12456__$1 = state_12456;
var statearr_12461_12608 = state_12456__$1;
(statearr_12461_12608[(2)] = null);

(statearr_12461_12608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (6))){
var state_12456__$1 = state_12456;
var statearr_12462_12609 = state_12456__$1;
(statearr_12462_12609[(2)] = null);

(statearr_12462_12609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (7))){
var inst_12452 = (state_12456[(2)]);
var state_12456__$1 = state_12456;
var statearr_12463_12610 = state_12456__$1;
(statearr_12463_12610[(2)] = inst_12452);

(statearr_12463_12610[(1)] = (3));


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
});})(__12600,c__10178__auto___12604,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async))
;
return ((function (__12600,switch__10163__auto__,c__10178__auto___12604,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0 = (function (){
var statearr_12464 = [null,null,null,null,null,null,null];
(statearr_12464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__);

(statearr_12464[(1)] = (1));

return statearr_12464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1 = (function (state_12456){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_12456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e12465){if((e12465 instanceof Object)){
var ex__10167__auto__ = e12465;
var statearr_12466_12611 = state_12456;
(statearr_12466_12611[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12612 = state_12456;
state_12456 = G__12612;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__ = function(state_12456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1.call(this,state_12456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__;
})()
;})(__12600,switch__10163__auto__,c__10178__auto___12604,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async))
})();
var state__10180__auto__ = (function (){var statearr_12467 = f__10179__auto__.call(null);
(statearr_12467[(6)] = c__10178__auto___12604);

return statearr_12467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(__12600,c__10178__auto___12604,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async))
);


break;
case "async":
var c__10178__auto___12613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12600,c__10178__auto___12613,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (__12600,c__10178__auto___12613,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async){
return (function (state_12480){
var state_val_12481 = (state_12480[(1)]);
if((state_val_12481 === (1))){
var state_12480__$1 = state_12480;
var statearr_12482_12614 = state_12480__$1;
(statearr_12482_12614[(2)] = null);

(statearr_12482_12614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12481 === (2))){
var state_12480__$1 = state_12480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12480__$1,(4),jobs);
} else {
if((state_val_12481 === (3))){
var inst_12478 = (state_12480[(2)]);
var state_12480__$1 = state_12480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12480__$1,inst_12478);
} else {
if((state_val_12481 === (4))){
var inst_12470 = (state_12480[(2)]);
var inst_12471 = async.call(null,inst_12470);
var state_12480__$1 = state_12480;
if(cljs.core.truth_(inst_12471)){
var statearr_12483_12615 = state_12480__$1;
(statearr_12483_12615[(1)] = (5));

} else {
var statearr_12484_12616 = state_12480__$1;
(statearr_12484_12616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12481 === (5))){
var state_12480__$1 = state_12480;
var statearr_12485_12617 = state_12480__$1;
(statearr_12485_12617[(2)] = null);

(statearr_12485_12617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12481 === (6))){
var state_12480__$1 = state_12480;
var statearr_12486_12618 = state_12480__$1;
(statearr_12486_12618[(2)] = null);

(statearr_12486_12618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12481 === (7))){
var inst_12476 = (state_12480[(2)]);
var state_12480__$1 = state_12480;
var statearr_12487_12619 = state_12480__$1;
(statearr_12487_12619[(2)] = inst_12476);

(statearr_12487_12619[(1)] = (3));


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
});})(__12600,c__10178__auto___12613,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async))
;
return ((function (__12600,switch__10163__auto__,c__10178__auto___12613,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0 = (function (){
var statearr_12488 = [null,null,null,null,null,null,null];
(statearr_12488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__);

(statearr_12488[(1)] = (1));

return statearr_12488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1 = (function (state_12480){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_12480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e12489){if((e12489 instanceof Object)){
var ex__10167__auto__ = e12489;
var statearr_12490_12620 = state_12480;
(statearr_12490_12620[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12621 = state_12480;
state_12480 = G__12621;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__ = function(state_12480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1.call(this,state_12480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__;
})()
;})(__12600,switch__10163__auto__,c__10178__auto___12613,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async))
})();
var state__10180__auto__ = (function (){var statearr_12491 = f__10179__auto__.call(null);
(statearr_12491[(6)] = c__10178__auto___12613);

return statearr_12491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(__12600,c__10178__auto___12613,G__12443_12601,G__12443_12602__$1,n__4374__auto___12599,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12443_12602__$1)].join('')));

}

var G__12622 = (__12600 + (1));
__12600 = G__12622;
continue;
} else {
}
break;
}

var c__10178__auto___12623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___12623,jobs,results,process,async){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___12623,jobs,results,process,async){
return (function (state_12513){
var state_val_12514 = (state_12513[(1)]);
if((state_val_12514 === (1))){
var state_12513__$1 = state_12513;
var statearr_12515_12624 = state_12513__$1;
(statearr_12515_12624[(2)] = null);

(statearr_12515_12624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12514 === (2))){
var state_12513__$1 = state_12513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12513__$1,(4),from);
} else {
if((state_val_12514 === (3))){
var inst_12511 = (state_12513[(2)]);
var state_12513__$1 = state_12513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12513__$1,inst_12511);
} else {
if((state_val_12514 === (4))){
var inst_12494 = (state_12513[(7)]);
var inst_12494__$1 = (state_12513[(2)]);
var inst_12495 = (inst_12494__$1 == null);
var state_12513__$1 = (function (){var statearr_12516 = state_12513;
(statearr_12516[(7)] = inst_12494__$1);

return statearr_12516;
})();
if(cljs.core.truth_(inst_12495)){
var statearr_12517_12625 = state_12513__$1;
(statearr_12517_12625[(1)] = (5));

} else {
var statearr_12518_12626 = state_12513__$1;
(statearr_12518_12626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12514 === (5))){
var inst_12497 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12513__$1 = state_12513;
var statearr_12519_12627 = state_12513__$1;
(statearr_12519_12627[(2)] = inst_12497);

(statearr_12519_12627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12514 === (6))){
var inst_12494 = (state_12513[(7)]);
var inst_12499 = (state_12513[(8)]);
var inst_12499__$1 = cljs.core.async.chan.call(null,(1));
var inst_12500 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12501 = [inst_12494,inst_12499__$1];
var inst_12502 = (new cljs.core.PersistentVector(null,2,(5),inst_12500,inst_12501,null));
var state_12513__$1 = (function (){var statearr_12520 = state_12513;
(statearr_12520[(8)] = inst_12499__$1);

return statearr_12520;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12513__$1,(8),jobs,inst_12502);
} else {
if((state_val_12514 === (7))){
var inst_12509 = (state_12513[(2)]);
var state_12513__$1 = state_12513;
var statearr_12521_12628 = state_12513__$1;
(statearr_12521_12628[(2)] = inst_12509);

(statearr_12521_12628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12514 === (8))){
var inst_12499 = (state_12513[(8)]);
var inst_12504 = (state_12513[(2)]);
var state_12513__$1 = (function (){var statearr_12522 = state_12513;
(statearr_12522[(9)] = inst_12504);

return statearr_12522;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12513__$1,(9),results,inst_12499);
} else {
if((state_val_12514 === (9))){
var inst_12506 = (state_12513[(2)]);
var state_12513__$1 = (function (){var statearr_12523 = state_12513;
(statearr_12523[(10)] = inst_12506);

return statearr_12523;
})();
var statearr_12524_12629 = state_12513__$1;
(statearr_12524_12629[(2)] = null);

(statearr_12524_12629[(1)] = (2));


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
});})(c__10178__auto___12623,jobs,results,process,async))
;
return ((function (switch__10163__auto__,c__10178__auto___12623,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0 = (function (){
var statearr_12525 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__);

(statearr_12525[(1)] = (1));

return statearr_12525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1 = (function (state_12513){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_12513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e12526){if((e12526 instanceof Object)){
var ex__10167__auto__ = e12526;
var statearr_12527_12630 = state_12513;
(statearr_12527_12630[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12631 = state_12513;
state_12513 = G__12631;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__ = function(state_12513){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1.call(this,state_12513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___12623,jobs,results,process,async))
})();
var state__10180__auto__ = (function (){var statearr_12528 = f__10179__auto__.call(null);
(statearr_12528[(6)] = c__10178__auto___12623);

return statearr_12528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___12623,jobs,results,process,async))
);


var c__10178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto__,jobs,results,process,async){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto__,jobs,results,process,async){
return (function (state_12566){
var state_val_12567 = (state_12566[(1)]);
if((state_val_12567 === (7))){
var inst_12562 = (state_12566[(2)]);
var state_12566__$1 = state_12566;
var statearr_12568_12632 = state_12566__$1;
(statearr_12568_12632[(2)] = inst_12562);

(statearr_12568_12632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (20))){
var state_12566__$1 = state_12566;
var statearr_12569_12633 = state_12566__$1;
(statearr_12569_12633[(2)] = null);

(statearr_12569_12633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (1))){
var state_12566__$1 = state_12566;
var statearr_12570_12634 = state_12566__$1;
(statearr_12570_12634[(2)] = null);

(statearr_12570_12634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (4))){
var inst_12531 = (state_12566[(7)]);
var inst_12531__$1 = (state_12566[(2)]);
var inst_12532 = (inst_12531__$1 == null);
var state_12566__$1 = (function (){var statearr_12571 = state_12566;
(statearr_12571[(7)] = inst_12531__$1);

return statearr_12571;
})();
if(cljs.core.truth_(inst_12532)){
var statearr_12572_12635 = state_12566__$1;
(statearr_12572_12635[(1)] = (5));

} else {
var statearr_12573_12636 = state_12566__$1;
(statearr_12573_12636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (15))){
var inst_12544 = (state_12566[(8)]);
var state_12566__$1 = state_12566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12566__$1,(18),to,inst_12544);
} else {
if((state_val_12567 === (21))){
var inst_12557 = (state_12566[(2)]);
var state_12566__$1 = state_12566;
var statearr_12574_12637 = state_12566__$1;
(statearr_12574_12637[(2)] = inst_12557);

(statearr_12574_12637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (13))){
var inst_12559 = (state_12566[(2)]);
var state_12566__$1 = (function (){var statearr_12575 = state_12566;
(statearr_12575[(9)] = inst_12559);

return statearr_12575;
})();
var statearr_12576_12638 = state_12566__$1;
(statearr_12576_12638[(2)] = null);

(statearr_12576_12638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (6))){
var inst_12531 = (state_12566[(7)]);
var state_12566__$1 = state_12566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12566__$1,(11),inst_12531);
} else {
if((state_val_12567 === (17))){
var inst_12552 = (state_12566[(2)]);
var state_12566__$1 = state_12566;
if(cljs.core.truth_(inst_12552)){
var statearr_12577_12639 = state_12566__$1;
(statearr_12577_12639[(1)] = (19));

} else {
var statearr_12578_12640 = state_12566__$1;
(statearr_12578_12640[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (3))){
var inst_12564 = (state_12566[(2)]);
var state_12566__$1 = state_12566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12566__$1,inst_12564);
} else {
if((state_val_12567 === (12))){
var inst_12541 = (state_12566[(10)]);
var state_12566__$1 = state_12566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12566__$1,(14),inst_12541);
} else {
if((state_val_12567 === (2))){
var state_12566__$1 = state_12566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12566__$1,(4),results);
} else {
if((state_val_12567 === (19))){
var state_12566__$1 = state_12566;
var statearr_12579_12641 = state_12566__$1;
(statearr_12579_12641[(2)] = null);

(statearr_12579_12641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (11))){
var inst_12541 = (state_12566[(2)]);
var state_12566__$1 = (function (){var statearr_12580 = state_12566;
(statearr_12580[(10)] = inst_12541);

return statearr_12580;
})();
var statearr_12581_12642 = state_12566__$1;
(statearr_12581_12642[(2)] = null);

(statearr_12581_12642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (9))){
var state_12566__$1 = state_12566;
var statearr_12582_12643 = state_12566__$1;
(statearr_12582_12643[(2)] = null);

(statearr_12582_12643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (5))){
var state_12566__$1 = state_12566;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12583_12644 = state_12566__$1;
(statearr_12583_12644[(1)] = (8));

} else {
var statearr_12584_12645 = state_12566__$1;
(statearr_12584_12645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (14))){
var inst_12546 = (state_12566[(11)]);
var inst_12544 = (state_12566[(8)]);
var inst_12544__$1 = (state_12566[(2)]);
var inst_12545 = (inst_12544__$1 == null);
var inst_12546__$1 = cljs.core.not.call(null,inst_12545);
var state_12566__$1 = (function (){var statearr_12585 = state_12566;
(statearr_12585[(11)] = inst_12546__$1);

(statearr_12585[(8)] = inst_12544__$1);

return statearr_12585;
})();
if(inst_12546__$1){
var statearr_12586_12646 = state_12566__$1;
(statearr_12586_12646[(1)] = (15));

} else {
var statearr_12587_12647 = state_12566__$1;
(statearr_12587_12647[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (16))){
var inst_12546 = (state_12566[(11)]);
var state_12566__$1 = state_12566;
var statearr_12588_12648 = state_12566__$1;
(statearr_12588_12648[(2)] = inst_12546);

(statearr_12588_12648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (10))){
var inst_12538 = (state_12566[(2)]);
var state_12566__$1 = state_12566;
var statearr_12589_12649 = state_12566__$1;
(statearr_12589_12649[(2)] = inst_12538);

(statearr_12589_12649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (18))){
var inst_12549 = (state_12566[(2)]);
var state_12566__$1 = state_12566;
var statearr_12590_12650 = state_12566__$1;
(statearr_12590_12650[(2)] = inst_12549);

(statearr_12590_12650[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12567 === (8))){
var inst_12535 = cljs.core.async.close_BANG_.call(null,to);
var state_12566__$1 = state_12566;
var statearr_12591_12651 = state_12566__$1;
(statearr_12591_12651[(2)] = inst_12535);

(statearr_12591_12651[(1)] = (10));


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
});})(c__10178__auto__,jobs,results,process,async))
;
return ((function (switch__10163__auto__,c__10178__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0 = (function (){
var statearr_12592 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12592[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__);

(statearr_12592[(1)] = (1));

return statearr_12592;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1 = (function (state_12566){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_12566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e12593){if((e12593 instanceof Object)){
var ex__10167__auto__ = e12593;
var statearr_12594_12652 = state_12566;
(statearr_12594_12652[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12653 = state_12566;
state_12566 = G__12653;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__ = function(state_12566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1.call(this,state_12566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto__,jobs,results,process,async))
})();
var state__10180__auto__ = (function (){var statearr_12595 = f__10179__auto__.call(null);
(statearr_12595[(6)] = c__10178__auto__);

return statearr_12595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto__,jobs,results,process,async))
);

return c__10178__auto__;
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
var G__12655 = arguments.length;
switch (G__12655) {
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
var G__12658 = arguments.length;
switch (G__12658) {
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
var G__12661 = arguments.length;
switch (G__12661) {
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
var c__10178__auto___12710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___12710,tc,fc){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___12710,tc,fc){
return (function (state_12687){
var state_val_12688 = (state_12687[(1)]);
if((state_val_12688 === (7))){
var inst_12683 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12689_12711 = state_12687__$1;
(statearr_12689_12711[(2)] = inst_12683);

(statearr_12689_12711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (1))){
var state_12687__$1 = state_12687;
var statearr_12690_12712 = state_12687__$1;
(statearr_12690_12712[(2)] = null);

(statearr_12690_12712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (4))){
var inst_12664 = (state_12687[(7)]);
var inst_12664__$1 = (state_12687[(2)]);
var inst_12665 = (inst_12664__$1 == null);
var state_12687__$1 = (function (){var statearr_12691 = state_12687;
(statearr_12691[(7)] = inst_12664__$1);

return statearr_12691;
})();
if(cljs.core.truth_(inst_12665)){
var statearr_12692_12713 = state_12687__$1;
(statearr_12692_12713[(1)] = (5));

} else {
var statearr_12693_12714 = state_12687__$1;
(statearr_12693_12714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (13))){
var state_12687__$1 = state_12687;
var statearr_12694_12715 = state_12687__$1;
(statearr_12694_12715[(2)] = null);

(statearr_12694_12715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (6))){
var inst_12664 = (state_12687[(7)]);
var inst_12670 = p.call(null,inst_12664);
var state_12687__$1 = state_12687;
if(cljs.core.truth_(inst_12670)){
var statearr_12695_12716 = state_12687__$1;
(statearr_12695_12716[(1)] = (9));

} else {
var statearr_12696_12717 = state_12687__$1;
(statearr_12696_12717[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (3))){
var inst_12685 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12687__$1,inst_12685);
} else {
if((state_val_12688 === (12))){
var state_12687__$1 = state_12687;
var statearr_12697_12718 = state_12687__$1;
(statearr_12697_12718[(2)] = null);

(statearr_12697_12718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (2))){
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12687__$1,(4),ch);
} else {
if((state_val_12688 === (11))){
var inst_12664 = (state_12687[(7)]);
var inst_12674 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12687__$1,(8),inst_12674,inst_12664);
} else {
if((state_val_12688 === (9))){
var state_12687__$1 = state_12687;
var statearr_12698_12719 = state_12687__$1;
(statearr_12698_12719[(2)] = tc);

(statearr_12698_12719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (5))){
var inst_12667 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12668 = cljs.core.async.close_BANG_.call(null,fc);
var state_12687__$1 = (function (){var statearr_12699 = state_12687;
(statearr_12699[(8)] = inst_12667);

return statearr_12699;
})();
var statearr_12700_12720 = state_12687__$1;
(statearr_12700_12720[(2)] = inst_12668);

(statearr_12700_12720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (14))){
var inst_12681 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12701_12721 = state_12687__$1;
(statearr_12701_12721[(2)] = inst_12681);

(statearr_12701_12721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (10))){
var state_12687__$1 = state_12687;
var statearr_12702_12722 = state_12687__$1;
(statearr_12702_12722[(2)] = fc);

(statearr_12702_12722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (8))){
var inst_12676 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
if(cljs.core.truth_(inst_12676)){
var statearr_12703_12723 = state_12687__$1;
(statearr_12703_12723[(1)] = (12));

} else {
var statearr_12704_12724 = state_12687__$1;
(statearr_12704_12724[(1)] = (13));

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
});})(c__10178__auto___12710,tc,fc))
;
return ((function (switch__10163__auto__,c__10178__auto___12710,tc,fc){
return (function() {
var cljs$core$async$state_machine__10164__auto__ = null;
var cljs$core$async$state_machine__10164__auto____0 = (function (){
var statearr_12705 = [null,null,null,null,null,null,null,null,null];
(statearr_12705[(0)] = cljs$core$async$state_machine__10164__auto__);

(statearr_12705[(1)] = (1));

return statearr_12705;
});
var cljs$core$async$state_machine__10164__auto____1 = (function (state_12687){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_12687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e12706){if((e12706 instanceof Object)){
var ex__10167__auto__ = e12706;
var statearr_12707_12725 = state_12687;
(statearr_12707_12725[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12726 = state_12687;
state_12687 = G__12726;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$state_machine__10164__auto__ = function(state_12687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10164__auto____1.call(this,state_12687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10164__auto____0;
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10164__auto____1;
return cljs$core$async$state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___12710,tc,fc))
})();
var state__10180__auto__ = (function (){var statearr_12708 = f__10179__auto__.call(null);
(statearr_12708[(6)] = c__10178__auto___12710);

return statearr_12708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___12710,tc,fc))
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
var c__10178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto__){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto__){
return (function (state_12747){
var state_val_12748 = (state_12747[(1)]);
if((state_val_12748 === (7))){
var inst_12743 = (state_12747[(2)]);
var state_12747__$1 = state_12747;
var statearr_12749_12767 = state_12747__$1;
(statearr_12749_12767[(2)] = inst_12743);

(statearr_12749_12767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (1))){
var inst_12727 = init;
var state_12747__$1 = (function (){var statearr_12750 = state_12747;
(statearr_12750[(7)] = inst_12727);

return statearr_12750;
})();
var statearr_12751_12768 = state_12747__$1;
(statearr_12751_12768[(2)] = null);

(statearr_12751_12768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (4))){
var inst_12730 = (state_12747[(8)]);
var inst_12730__$1 = (state_12747[(2)]);
var inst_12731 = (inst_12730__$1 == null);
var state_12747__$1 = (function (){var statearr_12752 = state_12747;
(statearr_12752[(8)] = inst_12730__$1);

return statearr_12752;
})();
if(cljs.core.truth_(inst_12731)){
var statearr_12753_12769 = state_12747__$1;
(statearr_12753_12769[(1)] = (5));

} else {
var statearr_12754_12770 = state_12747__$1;
(statearr_12754_12770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (6))){
var inst_12730 = (state_12747[(8)]);
var inst_12734 = (state_12747[(9)]);
var inst_12727 = (state_12747[(7)]);
var inst_12734__$1 = f.call(null,inst_12727,inst_12730);
var inst_12735 = cljs.core.reduced_QMARK_.call(null,inst_12734__$1);
var state_12747__$1 = (function (){var statearr_12755 = state_12747;
(statearr_12755[(9)] = inst_12734__$1);

return statearr_12755;
})();
if(inst_12735){
var statearr_12756_12771 = state_12747__$1;
(statearr_12756_12771[(1)] = (8));

} else {
var statearr_12757_12772 = state_12747__$1;
(statearr_12757_12772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (3))){
var inst_12745 = (state_12747[(2)]);
var state_12747__$1 = state_12747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12747__$1,inst_12745);
} else {
if((state_val_12748 === (2))){
var state_12747__$1 = state_12747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12747__$1,(4),ch);
} else {
if((state_val_12748 === (9))){
var inst_12734 = (state_12747[(9)]);
var inst_12727 = inst_12734;
var state_12747__$1 = (function (){var statearr_12758 = state_12747;
(statearr_12758[(7)] = inst_12727);

return statearr_12758;
})();
var statearr_12759_12773 = state_12747__$1;
(statearr_12759_12773[(2)] = null);

(statearr_12759_12773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (5))){
var inst_12727 = (state_12747[(7)]);
var state_12747__$1 = state_12747;
var statearr_12760_12774 = state_12747__$1;
(statearr_12760_12774[(2)] = inst_12727);

(statearr_12760_12774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (10))){
var inst_12741 = (state_12747[(2)]);
var state_12747__$1 = state_12747;
var statearr_12761_12775 = state_12747__$1;
(statearr_12761_12775[(2)] = inst_12741);

(statearr_12761_12775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (8))){
var inst_12734 = (state_12747[(9)]);
var inst_12737 = cljs.core.deref.call(null,inst_12734);
var state_12747__$1 = state_12747;
var statearr_12762_12776 = state_12747__$1;
(statearr_12762_12776[(2)] = inst_12737);

(statearr_12762_12776[(1)] = (10));


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
});})(c__10178__auto__))
;
return ((function (switch__10163__auto__,c__10178__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10164__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10164__auto____0 = (function (){
var statearr_12763 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12763[(0)] = cljs$core$async$reduce_$_state_machine__10164__auto__);

(statearr_12763[(1)] = (1));

return statearr_12763;
});
var cljs$core$async$reduce_$_state_machine__10164__auto____1 = (function (state_12747){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_12747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e12764){if((e12764 instanceof Object)){
var ex__10167__auto__ = e12764;
var statearr_12765_12777 = state_12747;
(statearr_12765_12777[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12778 = state_12747;
state_12747 = G__12778;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10164__auto__ = function(state_12747){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10164__auto____1.call(this,state_12747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10164__auto____0;
cljs$core$async$reduce_$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10164__auto____1;
return cljs$core$async$reduce_$_state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto__))
})();
var state__10180__auto__ = (function (){var statearr_12766 = f__10179__auto__.call(null);
(statearr_12766[(6)] = c__10178__auto__);

return statearr_12766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto__))
);

return c__10178__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto__,f__$1){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto__,f__$1){
return (function (state_12784){
var state_val_12785 = (state_12784[(1)]);
if((state_val_12785 === (1))){
var inst_12779 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_12784__$1 = state_12784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12784__$1,(2),inst_12779);
} else {
if((state_val_12785 === (2))){
var inst_12781 = (state_12784[(2)]);
var inst_12782 = f__$1.call(null,inst_12781);
var state_12784__$1 = state_12784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12784__$1,inst_12782);
} else {
return null;
}
}
});})(c__10178__auto__,f__$1))
;
return ((function (switch__10163__auto__,c__10178__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10164__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10164__auto____0 = (function (){
var statearr_12786 = [null,null,null,null,null,null,null];
(statearr_12786[(0)] = cljs$core$async$transduce_$_state_machine__10164__auto__);

(statearr_12786[(1)] = (1));

return statearr_12786;
});
var cljs$core$async$transduce_$_state_machine__10164__auto____1 = (function (state_12784){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_12784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e12787){if((e12787 instanceof Object)){
var ex__10167__auto__ = e12787;
var statearr_12788_12790 = state_12784;
(statearr_12788_12790[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12791 = state_12784;
state_12784 = G__12791;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10164__auto__ = function(state_12784){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10164__auto____1.call(this,state_12784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10164__auto____0;
cljs$core$async$transduce_$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10164__auto____1;
return cljs$core$async$transduce_$_state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto__,f__$1))
})();
var state__10180__auto__ = (function (){var statearr_12789 = f__10179__auto__.call(null);
(statearr_12789[(6)] = c__10178__auto__);

return statearr_12789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto__,f__$1))
);

return c__10178__auto__;
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
var G__12793 = arguments.length;
switch (G__12793) {
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
var c__10178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto__){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto__){
return (function (state_12818){
var state_val_12819 = (state_12818[(1)]);
if((state_val_12819 === (7))){
var inst_12800 = (state_12818[(2)]);
var state_12818__$1 = state_12818;
var statearr_12820_12841 = state_12818__$1;
(statearr_12820_12841[(2)] = inst_12800);

(statearr_12820_12841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (1))){
var inst_12794 = cljs.core.seq.call(null,coll);
var inst_12795 = inst_12794;
var state_12818__$1 = (function (){var statearr_12821 = state_12818;
(statearr_12821[(7)] = inst_12795);

return statearr_12821;
})();
var statearr_12822_12842 = state_12818__$1;
(statearr_12822_12842[(2)] = null);

(statearr_12822_12842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (4))){
var inst_12795 = (state_12818[(7)]);
var inst_12798 = cljs.core.first.call(null,inst_12795);
var state_12818__$1 = state_12818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12818__$1,(7),ch,inst_12798);
} else {
if((state_val_12819 === (13))){
var inst_12812 = (state_12818[(2)]);
var state_12818__$1 = state_12818;
var statearr_12823_12843 = state_12818__$1;
(statearr_12823_12843[(2)] = inst_12812);

(statearr_12823_12843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (6))){
var inst_12803 = (state_12818[(2)]);
var state_12818__$1 = state_12818;
if(cljs.core.truth_(inst_12803)){
var statearr_12824_12844 = state_12818__$1;
(statearr_12824_12844[(1)] = (8));

} else {
var statearr_12825_12845 = state_12818__$1;
(statearr_12825_12845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (3))){
var inst_12816 = (state_12818[(2)]);
var state_12818__$1 = state_12818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12818__$1,inst_12816);
} else {
if((state_val_12819 === (12))){
var state_12818__$1 = state_12818;
var statearr_12826_12846 = state_12818__$1;
(statearr_12826_12846[(2)] = null);

(statearr_12826_12846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (2))){
var inst_12795 = (state_12818[(7)]);
var state_12818__$1 = state_12818;
if(cljs.core.truth_(inst_12795)){
var statearr_12827_12847 = state_12818__$1;
(statearr_12827_12847[(1)] = (4));

} else {
var statearr_12828_12848 = state_12818__$1;
(statearr_12828_12848[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (11))){
var inst_12809 = cljs.core.async.close_BANG_.call(null,ch);
var state_12818__$1 = state_12818;
var statearr_12829_12849 = state_12818__$1;
(statearr_12829_12849[(2)] = inst_12809);

(statearr_12829_12849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (9))){
var state_12818__$1 = state_12818;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12830_12850 = state_12818__$1;
(statearr_12830_12850[(1)] = (11));

} else {
var statearr_12831_12851 = state_12818__$1;
(statearr_12831_12851[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (5))){
var inst_12795 = (state_12818[(7)]);
var state_12818__$1 = state_12818;
var statearr_12832_12852 = state_12818__$1;
(statearr_12832_12852[(2)] = inst_12795);

(statearr_12832_12852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (10))){
var inst_12814 = (state_12818[(2)]);
var state_12818__$1 = state_12818;
var statearr_12833_12853 = state_12818__$1;
(statearr_12833_12853[(2)] = inst_12814);

(statearr_12833_12853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (8))){
var inst_12795 = (state_12818[(7)]);
var inst_12805 = cljs.core.next.call(null,inst_12795);
var inst_12795__$1 = inst_12805;
var state_12818__$1 = (function (){var statearr_12834 = state_12818;
(statearr_12834[(7)] = inst_12795__$1);

return statearr_12834;
})();
var statearr_12835_12854 = state_12818__$1;
(statearr_12835_12854[(2)] = null);

(statearr_12835_12854[(1)] = (2));


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
});})(c__10178__auto__))
;
return ((function (switch__10163__auto__,c__10178__auto__){
return (function() {
var cljs$core$async$state_machine__10164__auto__ = null;
var cljs$core$async$state_machine__10164__auto____0 = (function (){
var statearr_12836 = [null,null,null,null,null,null,null,null];
(statearr_12836[(0)] = cljs$core$async$state_machine__10164__auto__);

(statearr_12836[(1)] = (1));

return statearr_12836;
});
var cljs$core$async$state_machine__10164__auto____1 = (function (state_12818){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_12818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e12837){if((e12837 instanceof Object)){
var ex__10167__auto__ = e12837;
var statearr_12838_12855 = state_12818;
(statearr_12838_12855[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12856 = state_12818;
state_12818 = G__12856;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$state_machine__10164__auto__ = function(state_12818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10164__auto____1.call(this,state_12818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10164__auto____0;
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10164__auto____1;
return cljs$core$async$state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto__))
})();
var state__10180__auto__ = (function (){var statearr_12839 = f__10179__auto__.call(null);
(statearr_12839[(6)] = c__10178__auto__);

return statearr_12839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto__))
);

return c__10178__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async12857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12857 = (function (ch,cs,meta12858){
this.ch = ch;
this.cs = cs;
this.meta12858 = meta12858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12859,meta12858__$1){
var self__ = this;
var _12859__$1 = this;
return (new cljs.core.async.t_cljs$core$async12857(self__.ch,self__.cs,meta12858__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12859){
var self__ = this;
var _12859__$1 = this;
return self__.meta12858;
});})(cs))
;

cljs.core.async.t_cljs$core$async12857.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12857.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12857.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12857.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12857.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12857.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12858","meta12858",1895227439,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12857";

cljs.core.async.t_cljs$core$async12857.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async12857");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12857.
 */
cljs.core.async.__GT_t_cljs$core$async12857 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12857(ch__$1,cs__$1,meta12858){
return (new cljs.core.async.t_cljs$core$async12857(ch__$1,cs__$1,meta12858));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12857(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10178__auto___13079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___13079,cs,m,dchan,dctr,done){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___13079,cs,m,dchan,dctr,done){
return (function (state_12994){
var state_val_12995 = (state_12994[(1)]);
if((state_val_12995 === (7))){
var inst_12990 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_12996_13080 = state_12994__$1;
(statearr_12996_13080[(2)] = inst_12990);

(statearr_12996_13080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (20))){
var inst_12893 = (state_12994[(7)]);
var inst_12905 = cljs.core.first.call(null,inst_12893);
var inst_12906 = cljs.core.nth.call(null,inst_12905,(0),null);
var inst_12907 = cljs.core.nth.call(null,inst_12905,(1),null);
var state_12994__$1 = (function (){var statearr_12997 = state_12994;
(statearr_12997[(8)] = inst_12906);

return statearr_12997;
})();
if(cljs.core.truth_(inst_12907)){
var statearr_12998_13081 = state_12994__$1;
(statearr_12998_13081[(1)] = (22));

} else {
var statearr_12999_13082 = state_12994__$1;
(statearr_12999_13082[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (27))){
var inst_12862 = (state_12994[(9)]);
var inst_12937 = (state_12994[(10)]);
var inst_12942 = (state_12994[(11)]);
var inst_12935 = (state_12994[(12)]);
var inst_12942__$1 = cljs.core._nth.call(null,inst_12935,inst_12937);
var inst_12943 = cljs.core.async.put_BANG_.call(null,inst_12942__$1,inst_12862,done);
var state_12994__$1 = (function (){var statearr_13000 = state_12994;
(statearr_13000[(11)] = inst_12942__$1);

return statearr_13000;
})();
if(cljs.core.truth_(inst_12943)){
var statearr_13001_13083 = state_12994__$1;
(statearr_13001_13083[(1)] = (30));

} else {
var statearr_13002_13084 = state_12994__$1;
(statearr_13002_13084[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (1))){
var state_12994__$1 = state_12994;
var statearr_13003_13085 = state_12994__$1;
(statearr_13003_13085[(2)] = null);

(statearr_13003_13085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (24))){
var inst_12893 = (state_12994[(7)]);
var inst_12912 = (state_12994[(2)]);
var inst_12913 = cljs.core.next.call(null,inst_12893);
var inst_12871 = inst_12913;
var inst_12872 = null;
var inst_12873 = (0);
var inst_12874 = (0);
var state_12994__$1 = (function (){var statearr_13004 = state_12994;
(statearr_13004[(13)] = inst_12912);

(statearr_13004[(14)] = inst_12874);

(statearr_13004[(15)] = inst_12873);

(statearr_13004[(16)] = inst_12871);

(statearr_13004[(17)] = inst_12872);

return statearr_13004;
})();
var statearr_13005_13086 = state_12994__$1;
(statearr_13005_13086[(2)] = null);

(statearr_13005_13086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (39))){
var state_12994__$1 = state_12994;
var statearr_13009_13087 = state_12994__$1;
(statearr_13009_13087[(2)] = null);

(statearr_13009_13087[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (4))){
var inst_12862 = (state_12994[(9)]);
var inst_12862__$1 = (state_12994[(2)]);
var inst_12863 = (inst_12862__$1 == null);
var state_12994__$1 = (function (){var statearr_13010 = state_12994;
(statearr_13010[(9)] = inst_12862__$1);

return statearr_13010;
})();
if(cljs.core.truth_(inst_12863)){
var statearr_13011_13088 = state_12994__$1;
(statearr_13011_13088[(1)] = (5));

} else {
var statearr_13012_13089 = state_12994__$1;
(statearr_13012_13089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (15))){
var inst_12874 = (state_12994[(14)]);
var inst_12873 = (state_12994[(15)]);
var inst_12871 = (state_12994[(16)]);
var inst_12872 = (state_12994[(17)]);
var inst_12889 = (state_12994[(2)]);
var inst_12890 = (inst_12874 + (1));
var tmp13006 = inst_12873;
var tmp13007 = inst_12871;
var tmp13008 = inst_12872;
var inst_12871__$1 = tmp13007;
var inst_12872__$1 = tmp13008;
var inst_12873__$1 = tmp13006;
var inst_12874__$1 = inst_12890;
var state_12994__$1 = (function (){var statearr_13013 = state_12994;
(statearr_13013[(14)] = inst_12874__$1);

(statearr_13013[(15)] = inst_12873__$1);

(statearr_13013[(16)] = inst_12871__$1);

(statearr_13013[(17)] = inst_12872__$1);

(statearr_13013[(18)] = inst_12889);

return statearr_13013;
})();
var statearr_13014_13090 = state_12994__$1;
(statearr_13014_13090[(2)] = null);

(statearr_13014_13090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (21))){
var inst_12916 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13018_13091 = state_12994__$1;
(statearr_13018_13091[(2)] = inst_12916);

(statearr_13018_13091[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (31))){
var inst_12942 = (state_12994[(11)]);
var inst_12946 = done.call(null,null);
var inst_12947 = cljs.core.async.untap_STAR_.call(null,m,inst_12942);
var state_12994__$1 = (function (){var statearr_13019 = state_12994;
(statearr_13019[(19)] = inst_12946);

return statearr_13019;
})();
var statearr_13020_13092 = state_12994__$1;
(statearr_13020_13092[(2)] = inst_12947);

(statearr_13020_13092[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (32))){
var inst_12937 = (state_12994[(10)]);
var inst_12936 = (state_12994[(20)]);
var inst_12934 = (state_12994[(21)]);
var inst_12935 = (state_12994[(12)]);
var inst_12949 = (state_12994[(2)]);
var inst_12950 = (inst_12937 + (1));
var tmp13015 = inst_12936;
var tmp13016 = inst_12934;
var tmp13017 = inst_12935;
var inst_12934__$1 = tmp13016;
var inst_12935__$1 = tmp13017;
var inst_12936__$1 = tmp13015;
var inst_12937__$1 = inst_12950;
var state_12994__$1 = (function (){var statearr_13021 = state_12994;
(statearr_13021[(10)] = inst_12937__$1);

(statearr_13021[(20)] = inst_12936__$1);

(statearr_13021[(21)] = inst_12934__$1);

(statearr_13021[(12)] = inst_12935__$1);

(statearr_13021[(22)] = inst_12949);

return statearr_13021;
})();
var statearr_13022_13093 = state_12994__$1;
(statearr_13022_13093[(2)] = null);

(statearr_13022_13093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (40))){
var inst_12962 = (state_12994[(23)]);
var inst_12966 = done.call(null,null);
var inst_12967 = cljs.core.async.untap_STAR_.call(null,m,inst_12962);
var state_12994__$1 = (function (){var statearr_13023 = state_12994;
(statearr_13023[(24)] = inst_12966);

return statearr_13023;
})();
var statearr_13024_13094 = state_12994__$1;
(statearr_13024_13094[(2)] = inst_12967);

(statearr_13024_13094[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (33))){
var inst_12953 = (state_12994[(25)]);
var inst_12955 = cljs.core.chunked_seq_QMARK_.call(null,inst_12953);
var state_12994__$1 = state_12994;
if(inst_12955){
var statearr_13025_13095 = state_12994__$1;
(statearr_13025_13095[(1)] = (36));

} else {
var statearr_13026_13096 = state_12994__$1;
(statearr_13026_13096[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (13))){
var inst_12883 = (state_12994[(26)]);
var inst_12886 = cljs.core.async.close_BANG_.call(null,inst_12883);
var state_12994__$1 = state_12994;
var statearr_13027_13097 = state_12994__$1;
(statearr_13027_13097[(2)] = inst_12886);

(statearr_13027_13097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (22))){
var inst_12906 = (state_12994[(8)]);
var inst_12909 = cljs.core.async.close_BANG_.call(null,inst_12906);
var state_12994__$1 = state_12994;
var statearr_13028_13098 = state_12994__$1;
(statearr_13028_13098[(2)] = inst_12909);

(statearr_13028_13098[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (36))){
var inst_12953 = (state_12994[(25)]);
var inst_12957 = cljs.core.chunk_first.call(null,inst_12953);
var inst_12958 = cljs.core.chunk_rest.call(null,inst_12953);
var inst_12959 = cljs.core.count.call(null,inst_12957);
var inst_12934 = inst_12958;
var inst_12935 = inst_12957;
var inst_12936 = inst_12959;
var inst_12937 = (0);
var state_12994__$1 = (function (){var statearr_13029 = state_12994;
(statearr_13029[(10)] = inst_12937);

(statearr_13029[(20)] = inst_12936);

(statearr_13029[(21)] = inst_12934);

(statearr_13029[(12)] = inst_12935);

return statearr_13029;
})();
var statearr_13030_13099 = state_12994__$1;
(statearr_13030_13099[(2)] = null);

(statearr_13030_13099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (41))){
var inst_12953 = (state_12994[(25)]);
var inst_12969 = (state_12994[(2)]);
var inst_12970 = cljs.core.next.call(null,inst_12953);
var inst_12934 = inst_12970;
var inst_12935 = null;
var inst_12936 = (0);
var inst_12937 = (0);
var state_12994__$1 = (function (){var statearr_13031 = state_12994;
(statearr_13031[(27)] = inst_12969);

(statearr_13031[(10)] = inst_12937);

(statearr_13031[(20)] = inst_12936);

(statearr_13031[(21)] = inst_12934);

(statearr_13031[(12)] = inst_12935);

return statearr_13031;
})();
var statearr_13032_13100 = state_12994__$1;
(statearr_13032_13100[(2)] = null);

(statearr_13032_13100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (43))){
var state_12994__$1 = state_12994;
var statearr_13033_13101 = state_12994__$1;
(statearr_13033_13101[(2)] = null);

(statearr_13033_13101[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (29))){
var inst_12978 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13034_13102 = state_12994__$1;
(statearr_13034_13102[(2)] = inst_12978);

(statearr_13034_13102[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (44))){
var inst_12987 = (state_12994[(2)]);
var state_12994__$1 = (function (){var statearr_13035 = state_12994;
(statearr_13035[(28)] = inst_12987);

return statearr_13035;
})();
var statearr_13036_13103 = state_12994__$1;
(statearr_13036_13103[(2)] = null);

(statearr_13036_13103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (6))){
var inst_12926 = (state_12994[(29)]);
var inst_12925 = cljs.core.deref.call(null,cs);
var inst_12926__$1 = cljs.core.keys.call(null,inst_12925);
var inst_12927 = cljs.core.count.call(null,inst_12926__$1);
var inst_12928 = cljs.core.reset_BANG_.call(null,dctr,inst_12927);
var inst_12933 = cljs.core.seq.call(null,inst_12926__$1);
var inst_12934 = inst_12933;
var inst_12935 = null;
var inst_12936 = (0);
var inst_12937 = (0);
var state_12994__$1 = (function (){var statearr_13037 = state_12994;
(statearr_13037[(30)] = inst_12928);

(statearr_13037[(29)] = inst_12926__$1);

(statearr_13037[(10)] = inst_12937);

(statearr_13037[(20)] = inst_12936);

(statearr_13037[(21)] = inst_12934);

(statearr_13037[(12)] = inst_12935);

return statearr_13037;
})();
var statearr_13038_13104 = state_12994__$1;
(statearr_13038_13104[(2)] = null);

(statearr_13038_13104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (28))){
var inst_12934 = (state_12994[(21)]);
var inst_12953 = (state_12994[(25)]);
var inst_12953__$1 = cljs.core.seq.call(null,inst_12934);
var state_12994__$1 = (function (){var statearr_13039 = state_12994;
(statearr_13039[(25)] = inst_12953__$1);

return statearr_13039;
})();
if(inst_12953__$1){
var statearr_13040_13105 = state_12994__$1;
(statearr_13040_13105[(1)] = (33));

} else {
var statearr_13041_13106 = state_12994__$1;
(statearr_13041_13106[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (25))){
var inst_12937 = (state_12994[(10)]);
var inst_12936 = (state_12994[(20)]);
var inst_12939 = (inst_12937 < inst_12936);
var inst_12940 = inst_12939;
var state_12994__$1 = state_12994;
if(cljs.core.truth_(inst_12940)){
var statearr_13042_13107 = state_12994__$1;
(statearr_13042_13107[(1)] = (27));

} else {
var statearr_13043_13108 = state_12994__$1;
(statearr_13043_13108[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (34))){
var state_12994__$1 = state_12994;
var statearr_13044_13109 = state_12994__$1;
(statearr_13044_13109[(2)] = null);

(statearr_13044_13109[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (17))){
var state_12994__$1 = state_12994;
var statearr_13045_13110 = state_12994__$1;
(statearr_13045_13110[(2)] = null);

(statearr_13045_13110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (3))){
var inst_12992 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12994__$1,inst_12992);
} else {
if((state_val_12995 === (12))){
var inst_12921 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13046_13111 = state_12994__$1;
(statearr_13046_13111[(2)] = inst_12921);

(statearr_13046_13111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (2))){
var state_12994__$1 = state_12994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12994__$1,(4),ch);
} else {
if((state_val_12995 === (23))){
var state_12994__$1 = state_12994;
var statearr_13047_13112 = state_12994__$1;
(statearr_13047_13112[(2)] = null);

(statearr_13047_13112[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (35))){
var inst_12976 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13048_13113 = state_12994__$1;
(statearr_13048_13113[(2)] = inst_12976);

(statearr_13048_13113[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (19))){
var inst_12893 = (state_12994[(7)]);
var inst_12897 = cljs.core.chunk_first.call(null,inst_12893);
var inst_12898 = cljs.core.chunk_rest.call(null,inst_12893);
var inst_12899 = cljs.core.count.call(null,inst_12897);
var inst_12871 = inst_12898;
var inst_12872 = inst_12897;
var inst_12873 = inst_12899;
var inst_12874 = (0);
var state_12994__$1 = (function (){var statearr_13049 = state_12994;
(statearr_13049[(14)] = inst_12874);

(statearr_13049[(15)] = inst_12873);

(statearr_13049[(16)] = inst_12871);

(statearr_13049[(17)] = inst_12872);

return statearr_13049;
})();
var statearr_13050_13114 = state_12994__$1;
(statearr_13050_13114[(2)] = null);

(statearr_13050_13114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (11))){
var inst_12893 = (state_12994[(7)]);
var inst_12871 = (state_12994[(16)]);
var inst_12893__$1 = cljs.core.seq.call(null,inst_12871);
var state_12994__$1 = (function (){var statearr_13051 = state_12994;
(statearr_13051[(7)] = inst_12893__$1);

return statearr_13051;
})();
if(inst_12893__$1){
var statearr_13052_13115 = state_12994__$1;
(statearr_13052_13115[(1)] = (16));

} else {
var statearr_13053_13116 = state_12994__$1;
(statearr_13053_13116[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (9))){
var inst_12923 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13054_13117 = state_12994__$1;
(statearr_13054_13117[(2)] = inst_12923);

(statearr_13054_13117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (5))){
var inst_12869 = cljs.core.deref.call(null,cs);
var inst_12870 = cljs.core.seq.call(null,inst_12869);
var inst_12871 = inst_12870;
var inst_12872 = null;
var inst_12873 = (0);
var inst_12874 = (0);
var state_12994__$1 = (function (){var statearr_13055 = state_12994;
(statearr_13055[(14)] = inst_12874);

(statearr_13055[(15)] = inst_12873);

(statearr_13055[(16)] = inst_12871);

(statearr_13055[(17)] = inst_12872);

return statearr_13055;
})();
var statearr_13056_13118 = state_12994__$1;
(statearr_13056_13118[(2)] = null);

(statearr_13056_13118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (14))){
var state_12994__$1 = state_12994;
var statearr_13057_13119 = state_12994__$1;
(statearr_13057_13119[(2)] = null);

(statearr_13057_13119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (45))){
var inst_12984 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13058_13120 = state_12994__$1;
(statearr_13058_13120[(2)] = inst_12984);

(statearr_13058_13120[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (26))){
var inst_12926 = (state_12994[(29)]);
var inst_12980 = (state_12994[(2)]);
var inst_12981 = cljs.core.seq.call(null,inst_12926);
var state_12994__$1 = (function (){var statearr_13059 = state_12994;
(statearr_13059[(31)] = inst_12980);

return statearr_13059;
})();
if(inst_12981){
var statearr_13060_13121 = state_12994__$1;
(statearr_13060_13121[(1)] = (42));

} else {
var statearr_13061_13122 = state_12994__$1;
(statearr_13061_13122[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (16))){
var inst_12893 = (state_12994[(7)]);
var inst_12895 = cljs.core.chunked_seq_QMARK_.call(null,inst_12893);
var state_12994__$1 = state_12994;
if(inst_12895){
var statearr_13062_13123 = state_12994__$1;
(statearr_13062_13123[(1)] = (19));

} else {
var statearr_13063_13124 = state_12994__$1;
(statearr_13063_13124[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (38))){
var inst_12973 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13064_13125 = state_12994__$1;
(statearr_13064_13125[(2)] = inst_12973);

(statearr_13064_13125[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (30))){
var state_12994__$1 = state_12994;
var statearr_13065_13126 = state_12994__$1;
(statearr_13065_13126[(2)] = null);

(statearr_13065_13126[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (10))){
var inst_12874 = (state_12994[(14)]);
var inst_12872 = (state_12994[(17)]);
var inst_12882 = cljs.core._nth.call(null,inst_12872,inst_12874);
var inst_12883 = cljs.core.nth.call(null,inst_12882,(0),null);
var inst_12884 = cljs.core.nth.call(null,inst_12882,(1),null);
var state_12994__$1 = (function (){var statearr_13066 = state_12994;
(statearr_13066[(26)] = inst_12883);

return statearr_13066;
})();
if(cljs.core.truth_(inst_12884)){
var statearr_13067_13127 = state_12994__$1;
(statearr_13067_13127[(1)] = (13));

} else {
var statearr_13068_13128 = state_12994__$1;
(statearr_13068_13128[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (18))){
var inst_12919 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13069_13129 = state_12994__$1;
(statearr_13069_13129[(2)] = inst_12919);

(statearr_13069_13129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (42))){
var state_12994__$1 = state_12994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12994__$1,(45),dchan);
} else {
if((state_val_12995 === (37))){
var inst_12862 = (state_12994[(9)]);
var inst_12962 = (state_12994[(23)]);
var inst_12953 = (state_12994[(25)]);
var inst_12962__$1 = cljs.core.first.call(null,inst_12953);
var inst_12963 = cljs.core.async.put_BANG_.call(null,inst_12962__$1,inst_12862,done);
var state_12994__$1 = (function (){var statearr_13070 = state_12994;
(statearr_13070[(23)] = inst_12962__$1);

return statearr_13070;
})();
if(cljs.core.truth_(inst_12963)){
var statearr_13071_13130 = state_12994__$1;
(statearr_13071_13130[(1)] = (39));

} else {
var statearr_13072_13131 = state_12994__$1;
(statearr_13072_13131[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (8))){
var inst_12874 = (state_12994[(14)]);
var inst_12873 = (state_12994[(15)]);
var inst_12876 = (inst_12874 < inst_12873);
var inst_12877 = inst_12876;
var state_12994__$1 = state_12994;
if(cljs.core.truth_(inst_12877)){
var statearr_13073_13132 = state_12994__$1;
(statearr_13073_13132[(1)] = (10));

} else {
var statearr_13074_13133 = state_12994__$1;
(statearr_13074_13133[(1)] = (11));

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
});})(c__10178__auto___13079,cs,m,dchan,dctr,done))
;
return ((function (switch__10163__auto__,c__10178__auto___13079,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10164__auto__ = null;
var cljs$core$async$mult_$_state_machine__10164__auto____0 = (function (){
var statearr_13075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13075[(0)] = cljs$core$async$mult_$_state_machine__10164__auto__);

(statearr_13075[(1)] = (1));

return statearr_13075;
});
var cljs$core$async$mult_$_state_machine__10164__auto____1 = (function (state_12994){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_12994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e13076){if((e13076 instanceof Object)){
var ex__10167__auto__ = e13076;
var statearr_13077_13134 = state_12994;
(statearr_13077_13134[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13135 = state_12994;
state_12994 = G__13135;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10164__auto__ = function(state_12994){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10164__auto____1.call(this,state_12994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10164__auto____0;
cljs$core$async$mult_$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10164__auto____1;
return cljs$core$async$mult_$_state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___13079,cs,m,dchan,dctr,done))
})();
var state__10180__auto__ = (function (){var statearr_13078 = f__10179__auto__.call(null);
(statearr_13078[(6)] = c__10178__auto___13079);

return statearr_13078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___13079,cs,m,dchan,dctr,done))
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
var G__13137 = arguments.length;
switch (G__13137) {
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
var len__4497__auto___13149 = arguments.length;
var i__4498__auto___13150 = (0);
while(true){
if((i__4498__auto___13150 < len__4497__auto___13149)){
args__4500__auto__.push((arguments[i__4498__auto___13150]));

var G__13151 = (i__4498__auto___13150 + (1));
i__4498__auto___13150 = G__13151;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13143){
var map__13144 = p__13143;
var map__13144__$1 = ((((!((map__13144 == null)))?(((((map__13144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13144):map__13144);
var opts = map__13144__$1;
var statearr_13146_13152 = state;
(statearr_13146_13152[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13144,map__13144__$1,opts){
return (function (val){
var statearr_13147_13153 = state;
(statearr_13147_13153[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13144,map__13144__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13148_13154 = state;
(statearr_13148_13154[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13139){
var G__13140 = cljs.core.first.call(null,seq13139);
var seq13139__$1 = cljs.core.next.call(null,seq13139);
var G__13141 = cljs.core.first.call(null,seq13139__$1);
var seq13139__$2 = cljs.core.next.call(null,seq13139__$1);
var G__13142 = cljs.core.first.call(null,seq13139__$2);
var seq13139__$3 = cljs.core.next.call(null,seq13139__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13140,G__13141,G__13142,seq13139__$3);
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
if(typeof cljs.core.async.t_cljs$core$async13155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13155 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta13156){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta13156 = meta13156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13157,meta13156__$1){
var self__ = this;
var _13157__$1 = this;
return (new cljs.core.async.t_cljs$core$async13155(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta13156__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13157){
var self__ = this;
var _13157__$1 = this;
return self__.meta13156;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13155.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13155.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13155.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13155.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13155.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13155.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13155.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13155.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13155.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta13156","meta13156",2004838861,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13155.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13155";

cljs.core.async.t_cljs$core$async13155.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async13155");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13155.
 */
cljs.core.async.__GT_t_cljs$core$async13155 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13155(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13156){
return (new cljs.core.async.t_cljs$core$async13155(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13156));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13155(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10178__auto___13319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___13319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___13319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13259){
var state_val_13260 = (state_13259[(1)]);
if((state_val_13260 === (7))){
var inst_13174 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
var statearr_13261_13320 = state_13259__$1;
(statearr_13261_13320[(2)] = inst_13174);

(statearr_13261_13320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (20))){
var inst_13186 = (state_13259[(7)]);
var state_13259__$1 = state_13259;
var statearr_13262_13321 = state_13259__$1;
(statearr_13262_13321[(2)] = inst_13186);

(statearr_13262_13321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (27))){
var state_13259__$1 = state_13259;
var statearr_13263_13322 = state_13259__$1;
(statearr_13263_13322[(2)] = null);

(statearr_13263_13322[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (1))){
var inst_13161 = (state_13259[(8)]);
var inst_13161__$1 = calc_state.call(null);
var inst_13163 = (inst_13161__$1 == null);
var inst_13164 = cljs.core.not.call(null,inst_13163);
var state_13259__$1 = (function (){var statearr_13264 = state_13259;
(statearr_13264[(8)] = inst_13161__$1);

return statearr_13264;
})();
if(inst_13164){
var statearr_13265_13323 = state_13259__$1;
(statearr_13265_13323[(1)] = (2));

} else {
var statearr_13266_13324 = state_13259__$1;
(statearr_13266_13324[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (24))){
var inst_13219 = (state_13259[(9)]);
var inst_13233 = (state_13259[(10)]);
var inst_13210 = (state_13259[(11)]);
var inst_13233__$1 = inst_13210.call(null,inst_13219);
var state_13259__$1 = (function (){var statearr_13267 = state_13259;
(statearr_13267[(10)] = inst_13233__$1);

return statearr_13267;
})();
if(cljs.core.truth_(inst_13233__$1)){
var statearr_13268_13325 = state_13259__$1;
(statearr_13268_13325[(1)] = (29));

} else {
var statearr_13269_13326 = state_13259__$1;
(statearr_13269_13326[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (4))){
var inst_13177 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
if(cljs.core.truth_(inst_13177)){
var statearr_13270_13327 = state_13259__$1;
(statearr_13270_13327[(1)] = (8));

} else {
var statearr_13271_13328 = state_13259__$1;
(statearr_13271_13328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (15))){
var inst_13204 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
if(cljs.core.truth_(inst_13204)){
var statearr_13272_13329 = state_13259__$1;
(statearr_13272_13329[(1)] = (19));

} else {
var statearr_13273_13330 = state_13259__$1;
(statearr_13273_13330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (21))){
var inst_13209 = (state_13259[(12)]);
var inst_13209__$1 = (state_13259[(2)]);
var inst_13210 = cljs.core.get.call(null,inst_13209__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13211 = cljs.core.get.call(null,inst_13209__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13212 = cljs.core.get.call(null,inst_13209__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13259__$1 = (function (){var statearr_13274 = state_13259;
(statearr_13274[(11)] = inst_13210);

(statearr_13274[(12)] = inst_13209__$1);

(statearr_13274[(13)] = inst_13211);

return statearr_13274;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13259__$1,(22),inst_13212);
} else {
if((state_val_13260 === (31))){
var inst_13241 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
if(cljs.core.truth_(inst_13241)){
var statearr_13275_13331 = state_13259__$1;
(statearr_13275_13331[(1)] = (32));

} else {
var statearr_13276_13332 = state_13259__$1;
(statearr_13276_13332[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (32))){
var inst_13218 = (state_13259[(14)]);
var state_13259__$1 = state_13259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13259__$1,(35),out,inst_13218);
} else {
if((state_val_13260 === (33))){
var inst_13209 = (state_13259[(12)]);
var inst_13186 = inst_13209;
var state_13259__$1 = (function (){var statearr_13277 = state_13259;
(statearr_13277[(7)] = inst_13186);

return statearr_13277;
})();
var statearr_13278_13333 = state_13259__$1;
(statearr_13278_13333[(2)] = null);

(statearr_13278_13333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (13))){
var inst_13186 = (state_13259[(7)]);
var inst_13193 = inst_13186.cljs$lang$protocol_mask$partition0$;
var inst_13194 = (inst_13193 & (64));
var inst_13195 = inst_13186.cljs$core$ISeq$;
var inst_13196 = (cljs.core.PROTOCOL_SENTINEL === inst_13195);
var inst_13197 = ((inst_13194) || (inst_13196));
var state_13259__$1 = state_13259;
if(cljs.core.truth_(inst_13197)){
var statearr_13279_13334 = state_13259__$1;
(statearr_13279_13334[(1)] = (16));

} else {
var statearr_13280_13335 = state_13259__$1;
(statearr_13280_13335[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (22))){
var inst_13219 = (state_13259[(9)]);
var inst_13218 = (state_13259[(14)]);
var inst_13217 = (state_13259[(2)]);
var inst_13218__$1 = cljs.core.nth.call(null,inst_13217,(0),null);
var inst_13219__$1 = cljs.core.nth.call(null,inst_13217,(1),null);
var inst_13220 = (inst_13218__$1 == null);
var inst_13221 = cljs.core._EQ_.call(null,inst_13219__$1,change);
var inst_13222 = ((inst_13220) || (inst_13221));
var state_13259__$1 = (function (){var statearr_13281 = state_13259;
(statearr_13281[(9)] = inst_13219__$1);

(statearr_13281[(14)] = inst_13218__$1);

return statearr_13281;
})();
if(cljs.core.truth_(inst_13222)){
var statearr_13282_13336 = state_13259__$1;
(statearr_13282_13336[(1)] = (23));

} else {
var statearr_13283_13337 = state_13259__$1;
(statearr_13283_13337[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (36))){
var inst_13209 = (state_13259[(12)]);
var inst_13186 = inst_13209;
var state_13259__$1 = (function (){var statearr_13284 = state_13259;
(statearr_13284[(7)] = inst_13186);

return statearr_13284;
})();
var statearr_13285_13338 = state_13259__$1;
(statearr_13285_13338[(2)] = null);

(statearr_13285_13338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (29))){
var inst_13233 = (state_13259[(10)]);
var state_13259__$1 = state_13259;
var statearr_13286_13339 = state_13259__$1;
(statearr_13286_13339[(2)] = inst_13233);

(statearr_13286_13339[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (6))){
var state_13259__$1 = state_13259;
var statearr_13287_13340 = state_13259__$1;
(statearr_13287_13340[(2)] = false);

(statearr_13287_13340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (28))){
var inst_13229 = (state_13259[(2)]);
var inst_13230 = calc_state.call(null);
var inst_13186 = inst_13230;
var state_13259__$1 = (function (){var statearr_13288 = state_13259;
(statearr_13288[(7)] = inst_13186);

(statearr_13288[(15)] = inst_13229);

return statearr_13288;
})();
var statearr_13289_13341 = state_13259__$1;
(statearr_13289_13341[(2)] = null);

(statearr_13289_13341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (25))){
var inst_13255 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
var statearr_13290_13342 = state_13259__$1;
(statearr_13290_13342[(2)] = inst_13255);

(statearr_13290_13342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (34))){
var inst_13253 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
var statearr_13291_13343 = state_13259__$1;
(statearr_13291_13343[(2)] = inst_13253);

(statearr_13291_13343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (17))){
var state_13259__$1 = state_13259;
var statearr_13292_13344 = state_13259__$1;
(statearr_13292_13344[(2)] = false);

(statearr_13292_13344[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (3))){
var state_13259__$1 = state_13259;
var statearr_13293_13345 = state_13259__$1;
(statearr_13293_13345[(2)] = false);

(statearr_13293_13345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (12))){
var inst_13257 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13259__$1,inst_13257);
} else {
if((state_val_13260 === (2))){
var inst_13161 = (state_13259[(8)]);
var inst_13166 = inst_13161.cljs$lang$protocol_mask$partition0$;
var inst_13167 = (inst_13166 & (64));
var inst_13168 = inst_13161.cljs$core$ISeq$;
var inst_13169 = (cljs.core.PROTOCOL_SENTINEL === inst_13168);
var inst_13170 = ((inst_13167) || (inst_13169));
var state_13259__$1 = state_13259;
if(cljs.core.truth_(inst_13170)){
var statearr_13294_13346 = state_13259__$1;
(statearr_13294_13346[(1)] = (5));

} else {
var statearr_13295_13347 = state_13259__$1;
(statearr_13295_13347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (23))){
var inst_13218 = (state_13259[(14)]);
var inst_13224 = (inst_13218 == null);
var state_13259__$1 = state_13259;
if(cljs.core.truth_(inst_13224)){
var statearr_13296_13348 = state_13259__$1;
(statearr_13296_13348[(1)] = (26));

} else {
var statearr_13297_13349 = state_13259__$1;
(statearr_13297_13349[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (35))){
var inst_13244 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
if(cljs.core.truth_(inst_13244)){
var statearr_13298_13350 = state_13259__$1;
(statearr_13298_13350[(1)] = (36));

} else {
var statearr_13299_13351 = state_13259__$1;
(statearr_13299_13351[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (19))){
var inst_13186 = (state_13259[(7)]);
var inst_13206 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13186);
var state_13259__$1 = state_13259;
var statearr_13300_13352 = state_13259__$1;
(statearr_13300_13352[(2)] = inst_13206);

(statearr_13300_13352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (11))){
var inst_13186 = (state_13259[(7)]);
var inst_13190 = (inst_13186 == null);
var inst_13191 = cljs.core.not.call(null,inst_13190);
var state_13259__$1 = state_13259;
if(inst_13191){
var statearr_13301_13353 = state_13259__$1;
(statearr_13301_13353[(1)] = (13));

} else {
var statearr_13302_13354 = state_13259__$1;
(statearr_13302_13354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (9))){
var inst_13161 = (state_13259[(8)]);
var state_13259__$1 = state_13259;
var statearr_13303_13355 = state_13259__$1;
(statearr_13303_13355[(2)] = inst_13161);

(statearr_13303_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (5))){
var state_13259__$1 = state_13259;
var statearr_13304_13356 = state_13259__$1;
(statearr_13304_13356[(2)] = true);

(statearr_13304_13356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (14))){
var state_13259__$1 = state_13259;
var statearr_13305_13357 = state_13259__$1;
(statearr_13305_13357[(2)] = false);

(statearr_13305_13357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (26))){
var inst_13219 = (state_13259[(9)]);
var inst_13226 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13219);
var state_13259__$1 = state_13259;
var statearr_13306_13358 = state_13259__$1;
(statearr_13306_13358[(2)] = inst_13226);

(statearr_13306_13358[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (16))){
var state_13259__$1 = state_13259;
var statearr_13307_13359 = state_13259__$1;
(statearr_13307_13359[(2)] = true);

(statearr_13307_13359[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (38))){
var inst_13249 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
var statearr_13308_13360 = state_13259__$1;
(statearr_13308_13360[(2)] = inst_13249);

(statearr_13308_13360[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (30))){
var inst_13219 = (state_13259[(9)]);
var inst_13210 = (state_13259[(11)]);
var inst_13211 = (state_13259[(13)]);
var inst_13236 = cljs.core.empty_QMARK_.call(null,inst_13210);
var inst_13237 = inst_13211.call(null,inst_13219);
var inst_13238 = cljs.core.not.call(null,inst_13237);
var inst_13239 = ((inst_13236) && (inst_13238));
var state_13259__$1 = state_13259;
var statearr_13309_13361 = state_13259__$1;
(statearr_13309_13361[(2)] = inst_13239);

(statearr_13309_13361[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (10))){
var inst_13161 = (state_13259[(8)]);
var inst_13182 = (state_13259[(2)]);
var inst_13183 = cljs.core.get.call(null,inst_13182,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13184 = cljs.core.get.call(null,inst_13182,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13185 = cljs.core.get.call(null,inst_13182,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13186 = inst_13161;
var state_13259__$1 = (function (){var statearr_13310 = state_13259;
(statearr_13310[(16)] = inst_13184);

(statearr_13310[(17)] = inst_13185);

(statearr_13310[(7)] = inst_13186);

(statearr_13310[(18)] = inst_13183);

return statearr_13310;
})();
var statearr_13311_13362 = state_13259__$1;
(statearr_13311_13362[(2)] = null);

(statearr_13311_13362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (18))){
var inst_13201 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
var statearr_13312_13363 = state_13259__$1;
(statearr_13312_13363[(2)] = inst_13201);

(statearr_13312_13363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (37))){
var state_13259__$1 = state_13259;
var statearr_13313_13364 = state_13259__$1;
(statearr_13313_13364[(2)] = null);

(statearr_13313_13364[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (8))){
var inst_13161 = (state_13259[(8)]);
var inst_13179 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13161);
var state_13259__$1 = state_13259;
var statearr_13314_13365 = state_13259__$1;
(statearr_13314_13365[(2)] = inst_13179);

(statearr_13314_13365[(1)] = (10));


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
});})(c__10178__auto___13319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10163__auto__,c__10178__auto___13319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10164__auto__ = null;
var cljs$core$async$mix_$_state_machine__10164__auto____0 = (function (){
var statearr_13315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13315[(0)] = cljs$core$async$mix_$_state_machine__10164__auto__);

(statearr_13315[(1)] = (1));

return statearr_13315;
});
var cljs$core$async$mix_$_state_machine__10164__auto____1 = (function (state_13259){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_13259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e13316){if((e13316 instanceof Object)){
var ex__10167__auto__ = e13316;
var statearr_13317_13366 = state_13259;
(statearr_13317_13366[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13367 = state_13259;
state_13259 = G__13367;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10164__auto__ = function(state_13259){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10164__auto____1.call(this,state_13259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10164__auto____0;
cljs$core$async$mix_$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10164__auto____1;
return cljs$core$async$mix_$_state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___13319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10180__auto__ = (function (){var statearr_13318 = f__10179__auto__.call(null);
(statearr_13318[(6)] = c__10178__auto___13319);

return statearr_13318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___13319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__13369 = arguments.length;
switch (G__13369) {
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
var G__13373 = arguments.length;
switch (G__13373) {
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
return (function (p1__13371_SHARP_){
if(cljs.core.truth_(p1__13371_SHARP_.call(null,topic))){
return p1__13371_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13371_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13374 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13375){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13375 = meta13375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13376,meta13375__$1){
var self__ = this;
var _13376__$1 = this;
return (new cljs.core.async.t_cljs$core$async13374(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13375__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13376){
var self__ = this;
var _13376__$1 = this;
return self__.meta13375;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13374.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13375","meta13375",-464932069,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13374";

cljs.core.async.t_cljs$core$async13374.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async13374");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13374.
 */
cljs.core.async.__GT_t_cljs$core$async13374 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13374(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13375){
return (new cljs.core.async.t_cljs$core$async13374(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13375));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13374(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10178__auto___13494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___13494,mults,ensure_mult,p){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___13494,mults,ensure_mult,p){
return (function (state_13448){
var state_val_13449 = (state_13448[(1)]);
if((state_val_13449 === (7))){
var inst_13444 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13450_13495 = state_13448__$1;
(statearr_13450_13495[(2)] = inst_13444);

(statearr_13450_13495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (20))){
var state_13448__$1 = state_13448;
var statearr_13451_13496 = state_13448__$1;
(statearr_13451_13496[(2)] = null);

(statearr_13451_13496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (1))){
var state_13448__$1 = state_13448;
var statearr_13452_13497 = state_13448__$1;
(statearr_13452_13497[(2)] = null);

(statearr_13452_13497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (24))){
var inst_13427 = (state_13448[(7)]);
var inst_13436 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13427);
var state_13448__$1 = state_13448;
var statearr_13453_13498 = state_13448__$1;
(statearr_13453_13498[(2)] = inst_13436);

(statearr_13453_13498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (4))){
var inst_13379 = (state_13448[(8)]);
var inst_13379__$1 = (state_13448[(2)]);
var inst_13380 = (inst_13379__$1 == null);
var state_13448__$1 = (function (){var statearr_13454 = state_13448;
(statearr_13454[(8)] = inst_13379__$1);

return statearr_13454;
})();
if(cljs.core.truth_(inst_13380)){
var statearr_13455_13499 = state_13448__$1;
(statearr_13455_13499[(1)] = (5));

} else {
var statearr_13456_13500 = state_13448__$1;
(statearr_13456_13500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (15))){
var inst_13421 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13457_13501 = state_13448__$1;
(statearr_13457_13501[(2)] = inst_13421);

(statearr_13457_13501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (21))){
var inst_13441 = (state_13448[(2)]);
var state_13448__$1 = (function (){var statearr_13458 = state_13448;
(statearr_13458[(9)] = inst_13441);

return statearr_13458;
})();
var statearr_13459_13502 = state_13448__$1;
(statearr_13459_13502[(2)] = null);

(statearr_13459_13502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (13))){
var inst_13403 = (state_13448[(10)]);
var inst_13405 = cljs.core.chunked_seq_QMARK_.call(null,inst_13403);
var state_13448__$1 = state_13448;
if(inst_13405){
var statearr_13460_13503 = state_13448__$1;
(statearr_13460_13503[(1)] = (16));

} else {
var statearr_13461_13504 = state_13448__$1;
(statearr_13461_13504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (22))){
var inst_13433 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
if(cljs.core.truth_(inst_13433)){
var statearr_13462_13505 = state_13448__$1;
(statearr_13462_13505[(1)] = (23));

} else {
var statearr_13463_13506 = state_13448__$1;
(statearr_13463_13506[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (6))){
var inst_13379 = (state_13448[(8)]);
var inst_13429 = (state_13448[(11)]);
var inst_13427 = (state_13448[(7)]);
var inst_13427__$1 = topic_fn.call(null,inst_13379);
var inst_13428 = cljs.core.deref.call(null,mults);
var inst_13429__$1 = cljs.core.get.call(null,inst_13428,inst_13427__$1);
var state_13448__$1 = (function (){var statearr_13464 = state_13448;
(statearr_13464[(11)] = inst_13429__$1);

(statearr_13464[(7)] = inst_13427__$1);

return statearr_13464;
})();
if(cljs.core.truth_(inst_13429__$1)){
var statearr_13465_13507 = state_13448__$1;
(statearr_13465_13507[(1)] = (19));

} else {
var statearr_13466_13508 = state_13448__$1;
(statearr_13466_13508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (25))){
var inst_13438 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13467_13509 = state_13448__$1;
(statearr_13467_13509[(2)] = inst_13438);

(statearr_13467_13509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (17))){
var inst_13403 = (state_13448[(10)]);
var inst_13412 = cljs.core.first.call(null,inst_13403);
var inst_13413 = cljs.core.async.muxch_STAR_.call(null,inst_13412);
var inst_13414 = cljs.core.async.close_BANG_.call(null,inst_13413);
var inst_13415 = cljs.core.next.call(null,inst_13403);
var inst_13389 = inst_13415;
var inst_13390 = null;
var inst_13391 = (0);
var inst_13392 = (0);
var state_13448__$1 = (function (){var statearr_13468 = state_13448;
(statearr_13468[(12)] = inst_13391);

(statearr_13468[(13)] = inst_13414);

(statearr_13468[(14)] = inst_13390);

(statearr_13468[(15)] = inst_13389);

(statearr_13468[(16)] = inst_13392);

return statearr_13468;
})();
var statearr_13469_13510 = state_13448__$1;
(statearr_13469_13510[(2)] = null);

(statearr_13469_13510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (3))){
var inst_13446 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13448__$1,inst_13446);
} else {
if((state_val_13449 === (12))){
var inst_13423 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13470_13511 = state_13448__$1;
(statearr_13470_13511[(2)] = inst_13423);

(statearr_13470_13511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (2))){
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13448__$1,(4),ch);
} else {
if((state_val_13449 === (23))){
var state_13448__$1 = state_13448;
var statearr_13471_13512 = state_13448__$1;
(statearr_13471_13512[(2)] = null);

(statearr_13471_13512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (19))){
var inst_13379 = (state_13448[(8)]);
var inst_13429 = (state_13448[(11)]);
var inst_13431 = cljs.core.async.muxch_STAR_.call(null,inst_13429);
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13448__$1,(22),inst_13431,inst_13379);
} else {
if((state_val_13449 === (11))){
var inst_13403 = (state_13448[(10)]);
var inst_13389 = (state_13448[(15)]);
var inst_13403__$1 = cljs.core.seq.call(null,inst_13389);
var state_13448__$1 = (function (){var statearr_13472 = state_13448;
(statearr_13472[(10)] = inst_13403__$1);

return statearr_13472;
})();
if(inst_13403__$1){
var statearr_13473_13513 = state_13448__$1;
(statearr_13473_13513[(1)] = (13));

} else {
var statearr_13474_13514 = state_13448__$1;
(statearr_13474_13514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (9))){
var inst_13425 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13475_13515 = state_13448__$1;
(statearr_13475_13515[(2)] = inst_13425);

(statearr_13475_13515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (5))){
var inst_13386 = cljs.core.deref.call(null,mults);
var inst_13387 = cljs.core.vals.call(null,inst_13386);
var inst_13388 = cljs.core.seq.call(null,inst_13387);
var inst_13389 = inst_13388;
var inst_13390 = null;
var inst_13391 = (0);
var inst_13392 = (0);
var state_13448__$1 = (function (){var statearr_13476 = state_13448;
(statearr_13476[(12)] = inst_13391);

(statearr_13476[(14)] = inst_13390);

(statearr_13476[(15)] = inst_13389);

(statearr_13476[(16)] = inst_13392);

return statearr_13476;
})();
var statearr_13477_13516 = state_13448__$1;
(statearr_13477_13516[(2)] = null);

(statearr_13477_13516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (14))){
var state_13448__$1 = state_13448;
var statearr_13481_13517 = state_13448__$1;
(statearr_13481_13517[(2)] = null);

(statearr_13481_13517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (16))){
var inst_13403 = (state_13448[(10)]);
var inst_13407 = cljs.core.chunk_first.call(null,inst_13403);
var inst_13408 = cljs.core.chunk_rest.call(null,inst_13403);
var inst_13409 = cljs.core.count.call(null,inst_13407);
var inst_13389 = inst_13408;
var inst_13390 = inst_13407;
var inst_13391 = inst_13409;
var inst_13392 = (0);
var state_13448__$1 = (function (){var statearr_13482 = state_13448;
(statearr_13482[(12)] = inst_13391);

(statearr_13482[(14)] = inst_13390);

(statearr_13482[(15)] = inst_13389);

(statearr_13482[(16)] = inst_13392);

return statearr_13482;
})();
var statearr_13483_13518 = state_13448__$1;
(statearr_13483_13518[(2)] = null);

(statearr_13483_13518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (10))){
var inst_13391 = (state_13448[(12)]);
var inst_13390 = (state_13448[(14)]);
var inst_13389 = (state_13448[(15)]);
var inst_13392 = (state_13448[(16)]);
var inst_13397 = cljs.core._nth.call(null,inst_13390,inst_13392);
var inst_13398 = cljs.core.async.muxch_STAR_.call(null,inst_13397);
var inst_13399 = cljs.core.async.close_BANG_.call(null,inst_13398);
var inst_13400 = (inst_13392 + (1));
var tmp13478 = inst_13391;
var tmp13479 = inst_13390;
var tmp13480 = inst_13389;
var inst_13389__$1 = tmp13480;
var inst_13390__$1 = tmp13479;
var inst_13391__$1 = tmp13478;
var inst_13392__$1 = inst_13400;
var state_13448__$1 = (function (){var statearr_13484 = state_13448;
(statearr_13484[(17)] = inst_13399);

(statearr_13484[(12)] = inst_13391__$1);

(statearr_13484[(14)] = inst_13390__$1);

(statearr_13484[(15)] = inst_13389__$1);

(statearr_13484[(16)] = inst_13392__$1);

return statearr_13484;
})();
var statearr_13485_13519 = state_13448__$1;
(statearr_13485_13519[(2)] = null);

(statearr_13485_13519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (18))){
var inst_13418 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13486_13520 = state_13448__$1;
(statearr_13486_13520[(2)] = inst_13418);

(statearr_13486_13520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (8))){
var inst_13391 = (state_13448[(12)]);
var inst_13392 = (state_13448[(16)]);
var inst_13394 = (inst_13392 < inst_13391);
var inst_13395 = inst_13394;
var state_13448__$1 = state_13448;
if(cljs.core.truth_(inst_13395)){
var statearr_13487_13521 = state_13448__$1;
(statearr_13487_13521[(1)] = (10));

} else {
var statearr_13488_13522 = state_13448__$1;
(statearr_13488_13522[(1)] = (11));

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
});})(c__10178__auto___13494,mults,ensure_mult,p))
;
return ((function (switch__10163__auto__,c__10178__auto___13494,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10164__auto__ = null;
var cljs$core$async$state_machine__10164__auto____0 = (function (){
var statearr_13489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13489[(0)] = cljs$core$async$state_machine__10164__auto__);

(statearr_13489[(1)] = (1));

return statearr_13489;
});
var cljs$core$async$state_machine__10164__auto____1 = (function (state_13448){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_13448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e13490){if((e13490 instanceof Object)){
var ex__10167__auto__ = e13490;
var statearr_13491_13523 = state_13448;
(statearr_13491_13523[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13524 = state_13448;
state_13448 = G__13524;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$state_machine__10164__auto__ = function(state_13448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10164__auto____1.call(this,state_13448);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10164__auto____0;
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10164__auto____1;
return cljs$core$async$state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___13494,mults,ensure_mult,p))
})();
var state__10180__auto__ = (function (){var statearr_13492 = f__10179__auto__.call(null);
(statearr_13492[(6)] = c__10178__auto___13494);

return statearr_13492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___13494,mults,ensure_mult,p))
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
var G__13526 = arguments.length;
switch (G__13526) {
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
var G__13529 = arguments.length;
switch (G__13529) {
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
var G__13532 = arguments.length;
switch (G__13532) {
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
var c__10178__auto___13599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___13599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___13599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13571){
var state_val_13572 = (state_13571[(1)]);
if((state_val_13572 === (7))){
var state_13571__$1 = state_13571;
var statearr_13573_13600 = state_13571__$1;
(statearr_13573_13600[(2)] = null);

(statearr_13573_13600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (1))){
var state_13571__$1 = state_13571;
var statearr_13574_13601 = state_13571__$1;
(statearr_13574_13601[(2)] = null);

(statearr_13574_13601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (4))){
var inst_13535 = (state_13571[(7)]);
var inst_13537 = (inst_13535 < cnt);
var state_13571__$1 = state_13571;
if(cljs.core.truth_(inst_13537)){
var statearr_13575_13602 = state_13571__$1;
(statearr_13575_13602[(1)] = (6));

} else {
var statearr_13576_13603 = state_13571__$1;
(statearr_13576_13603[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (15))){
var inst_13567 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
var statearr_13577_13604 = state_13571__$1;
(statearr_13577_13604[(2)] = inst_13567);

(statearr_13577_13604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (13))){
var inst_13560 = cljs.core.async.close_BANG_.call(null,out);
var state_13571__$1 = state_13571;
var statearr_13578_13605 = state_13571__$1;
(statearr_13578_13605[(2)] = inst_13560);

(statearr_13578_13605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (6))){
var state_13571__$1 = state_13571;
var statearr_13579_13606 = state_13571__$1;
(statearr_13579_13606[(2)] = null);

(statearr_13579_13606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (3))){
var inst_13569 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13571__$1,inst_13569);
} else {
if((state_val_13572 === (12))){
var inst_13557 = (state_13571[(8)]);
var inst_13557__$1 = (state_13571[(2)]);
var inst_13558 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13557__$1);
var state_13571__$1 = (function (){var statearr_13580 = state_13571;
(statearr_13580[(8)] = inst_13557__$1);

return statearr_13580;
})();
if(cljs.core.truth_(inst_13558)){
var statearr_13581_13607 = state_13571__$1;
(statearr_13581_13607[(1)] = (13));

} else {
var statearr_13582_13608 = state_13571__$1;
(statearr_13582_13608[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (2))){
var inst_13534 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13535 = (0);
var state_13571__$1 = (function (){var statearr_13583 = state_13571;
(statearr_13583[(7)] = inst_13535);

(statearr_13583[(9)] = inst_13534);

return statearr_13583;
})();
var statearr_13584_13609 = state_13571__$1;
(statearr_13584_13609[(2)] = null);

(statearr_13584_13609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (11))){
var inst_13535 = (state_13571[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13571,(10),Object,null,(9));
var inst_13544 = chs__$1.call(null,inst_13535);
var inst_13545 = done.call(null,inst_13535);
var inst_13546 = cljs.core.async.take_BANG_.call(null,inst_13544,inst_13545);
var state_13571__$1 = state_13571;
var statearr_13585_13610 = state_13571__$1;
(statearr_13585_13610[(2)] = inst_13546);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13571__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (9))){
var inst_13535 = (state_13571[(7)]);
var inst_13548 = (state_13571[(2)]);
var inst_13549 = (inst_13535 + (1));
var inst_13535__$1 = inst_13549;
var state_13571__$1 = (function (){var statearr_13586 = state_13571;
(statearr_13586[(7)] = inst_13535__$1);

(statearr_13586[(10)] = inst_13548);

return statearr_13586;
})();
var statearr_13587_13611 = state_13571__$1;
(statearr_13587_13611[(2)] = null);

(statearr_13587_13611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (5))){
var inst_13555 = (state_13571[(2)]);
var state_13571__$1 = (function (){var statearr_13588 = state_13571;
(statearr_13588[(11)] = inst_13555);

return statearr_13588;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13571__$1,(12),dchan);
} else {
if((state_val_13572 === (14))){
var inst_13557 = (state_13571[(8)]);
var inst_13562 = cljs.core.apply.call(null,f,inst_13557);
var state_13571__$1 = state_13571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13571__$1,(16),out,inst_13562);
} else {
if((state_val_13572 === (16))){
var inst_13564 = (state_13571[(2)]);
var state_13571__$1 = (function (){var statearr_13589 = state_13571;
(statearr_13589[(12)] = inst_13564);

return statearr_13589;
})();
var statearr_13590_13612 = state_13571__$1;
(statearr_13590_13612[(2)] = null);

(statearr_13590_13612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (10))){
var inst_13539 = (state_13571[(2)]);
var inst_13540 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13571__$1 = (function (){var statearr_13591 = state_13571;
(statearr_13591[(13)] = inst_13539);

return statearr_13591;
})();
var statearr_13592_13613 = state_13571__$1;
(statearr_13592_13613[(2)] = inst_13540);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13571__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (8))){
var inst_13553 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
var statearr_13593_13614 = state_13571__$1;
(statearr_13593_13614[(2)] = inst_13553);

(statearr_13593_13614[(1)] = (5));


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
});})(c__10178__auto___13599,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10163__auto__,c__10178__auto___13599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10164__auto__ = null;
var cljs$core$async$state_machine__10164__auto____0 = (function (){
var statearr_13594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13594[(0)] = cljs$core$async$state_machine__10164__auto__);

(statearr_13594[(1)] = (1));

return statearr_13594;
});
var cljs$core$async$state_machine__10164__auto____1 = (function (state_13571){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_13571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e13595){if((e13595 instanceof Object)){
var ex__10167__auto__ = e13595;
var statearr_13596_13615 = state_13571;
(statearr_13596_13615[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13616 = state_13571;
state_13571 = G__13616;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$state_machine__10164__auto__ = function(state_13571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10164__auto____1.call(this,state_13571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10164__auto____0;
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10164__auto____1;
return cljs$core$async$state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___13599,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10180__auto__ = (function (){var statearr_13597 = f__10179__auto__.call(null);
(statearr_13597[(6)] = c__10178__auto___13599);

return statearr_13597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___13599,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__13619 = arguments.length;
switch (G__13619) {
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
var c__10178__auto___13673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___13673,out){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___13673,out){
return (function (state_13651){
var state_val_13652 = (state_13651[(1)]);
if((state_val_13652 === (7))){
var inst_13630 = (state_13651[(7)]);
var inst_13631 = (state_13651[(8)]);
var inst_13630__$1 = (state_13651[(2)]);
var inst_13631__$1 = cljs.core.nth.call(null,inst_13630__$1,(0),null);
var inst_13632 = cljs.core.nth.call(null,inst_13630__$1,(1),null);
var inst_13633 = (inst_13631__$1 == null);
var state_13651__$1 = (function (){var statearr_13653 = state_13651;
(statearr_13653[(7)] = inst_13630__$1);

(statearr_13653[(9)] = inst_13632);

(statearr_13653[(8)] = inst_13631__$1);

return statearr_13653;
})();
if(cljs.core.truth_(inst_13633)){
var statearr_13654_13674 = state_13651__$1;
(statearr_13654_13674[(1)] = (8));

} else {
var statearr_13655_13675 = state_13651__$1;
(statearr_13655_13675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13652 === (1))){
var inst_13620 = cljs.core.vec.call(null,chs);
var inst_13621 = inst_13620;
var state_13651__$1 = (function (){var statearr_13656 = state_13651;
(statearr_13656[(10)] = inst_13621);

return statearr_13656;
})();
var statearr_13657_13676 = state_13651__$1;
(statearr_13657_13676[(2)] = null);

(statearr_13657_13676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13652 === (4))){
var inst_13621 = (state_13651[(10)]);
var state_13651__$1 = state_13651;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13651__$1,(7),inst_13621);
} else {
if((state_val_13652 === (6))){
var inst_13647 = (state_13651[(2)]);
var state_13651__$1 = state_13651;
var statearr_13658_13677 = state_13651__$1;
(statearr_13658_13677[(2)] = inst_13647);

(statearr_13658_13677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13652 === (3))){
var inst_13649 = (state_13651[(2)]);
var state_13651__$1 = state_13651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13651__$1,inst_13649);
} else {
if((state_val_13652 === (2))){
var inst_13621 = (state_13651[(10)]);
var inst_13623 = cljs.core.count.call(null,inst_13621);
var inst_13624 = (inst_13623 > (0));
var state_13651__$1 = state_13651;
if(cljs.core.truth_(inst_13624)){
var statearr_13660_13678 = state_13651__$1;
(statearr_13660_13678[(1)] = (4));

} else {
var statearr_13661_13679 = state_13651__$1;
(statearr_13661_13679[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13652 === (11))){
var inst_13621 = (state_13651[(10)]);
var inst_13640 = (state_13651[(2)]);
var tmp13659 = inst_13621;
var inst_13621__$1 = tmp13659;
var state_13651__$1 = (function (){var statearr_13662 = state_13651;
(statearr_13662[(10)] = inst_13621__$1);

(statearr_13662[(11)] = inst_13640);

return statearr_13662;
})();
var statearr_13663_13680 = state_13651__$1;
(statearr_13663_13680[(2)] = null);

(statearr_13663_13680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13652 === (9))){
var inst_13631 = (state_13651[(8)]);
var state_13651__$1 = state_13651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13651__$1,(11),out,inst_13631);
} else {
if((state_val_13652 === (5))){
var inst_13645 = cljs.core.async.close_BANG_.call(null,out);
var state_13651__$1 = state_13651;
var statearr_13664_13681 = state_13651__$1;
(statearr_13664_13681[(2)] = inst_13645);

(statearr_13664_13681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13652 === (10))){
var inst_13643 = (state_13651[(2)]);
var state_13651__$1 = state_13651;
var statearr_13665_13682 = state_13651__$1;
(statearr_13665_13682[(2)] = inst_13643);

(statearr_13665_13682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13652 === (8))){
var inst_13630 = (state_13651[(7)]);
var inst_13621 = (state_13651[(10)]);
var inst_13632 = (state_13651[(9)]);
var inst_13631 = (state_13651[(8)]);
var inst_13635 = (function (){var cs = inst_13621;
var vec__13626 = inst_13630;
var v = inst_13631;
var c = inst_13632;
return ((function (cs,vec__13626,v,c,inst_13630,inst_13621,inst_13632,inst_13631,state_val_13652,c__10178__auto___13673,out){
return (function (p1__13617_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13617_SHARP_);
});
;})(cs,vec__13626,v,c,inst_13630,inst_13621,inst_13632,inst_13631,state_val_13652,c__10178__auto___13673,out))
})();
var inst_13636 = cljs.core.filterv.call(null,inst_13635,inst_13621);
var inst_13621__$1 = inst_13636;
var state_13651__$1 = (function (){var statearr_13666 = state_13651;
(statearr_13666[(10)] = inst_13621__$1);

return statearr_13666;
})();
var statearr_13667_13683 = state_13651__$1;
(statearr_13667_13683[(2)] = null);

(statearr_13667_13683[(1)] = (2));


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
});})(c__10178__auto___13673,out))
;
return ((function (switch__10163__auto__,c__10178__auto___13673,out){
return (function() {
var cljs$core$async$state_machine__10164__auto__ = null;
var cljs$core$async$state_machine__10164__auto____0 = (function (){
var statearr_13668 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13668[(0)] = cljs$core$async$state_machine__10164__auto__);

(statearr_13668[(1)] = (1));

return statearr_13668;
});
var cljs$core$async$state_machine__10164__auto____1 = (function (state_13651){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_13651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e13669){if((e13669 instanceof Object)){
var ex__10167__auto__ = e13669;
var statearr_13670_13684 = state_13651;
(statearr_13670_13684[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13685 = state_13651;
state_13651 = G__13685;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$state_machine__10164__auto__ = function(state_13651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10164__auto____1.call(this,state_13651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10164__auto____0;
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10164__auto____1;
return cljs$core$async$state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___13673,out))
})();
var state__10180__auto__ = (function (){var statearr_13671 = f__10179__auto__.call(null);
(statearr_13671[(6)] = c__10178__auto___13673);

return statearr_13671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___13673,out))
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
var G__13687 = arguments.length;
switch (G__13687) {
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
var c__10178__auto___13732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___13732,out){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___13732,out){
return (function (state_13711){
var state_val_13712 = (state_13711[(1)]);
if((state_val_13712 === (7))){
var inst_13693 = (state_13711[(7)]);
var inst_13693__$1 = (state_13711[(2)]);
var inst_13694 = (inst_13693__$1 == null);
var inst_13695 = cljs.core.not.call(null,inst_13694);
var state_13711__$1 = (function (){var statearr_13713 = state_13711;
(statearr_13713[(7)] = inst_13693__$1);

return statearr_13713;
})();
if(inst_13695){
var statearr_13714_13733 = state_13711__$1;
(statearr_13714_13733[(1)] = (8));

} else {
var statearr_13715_13734 = state_13711__$1;
(statearr_13715_13734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13712 === (1))){
var inst_13688 = (0);
var state_13711__$1 = (function (){var statearr_13716 = state_13711;
(statearr_13716[(8)] = inst_13688);

return statearr_13716;
})();
var statearr_13717_13735 = state_13711__$1;
(statearr_13717_13735[(2)] = null);

(statearr_13717_13735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13712 === (4))){
var state_13711__$1 = state_13711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13711__$1,(7),ch);
} else {
if((state_val_13712 === (6))){
var inst_13706 = (state_13711[(2)]);
var state_13711__$1 = state_13711;
var statearr_13718_13736 = state_13711__$1;
(statearr_13718_13736[(2)] = inst_13706);

(statearr_13718_13736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13712 === (3))){
var inst_13708 = (state_13711[(2)]);
var inst_13709 = cljs.core.async.close_BANG_.call(null,out);
var state_13711__$1 = (function (){var statearr_13719 = state_13711;
(statearr_13719[(9)] = inst_13708);

return statearr_13719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13711__$1,inst_13709);
} else {
if((state_val_13712 === (2))){
var inst_13688 = (state_13711[(8)]);
var inst_13690 = (inst_13688 < n);
var state_13711__$1 = state_13711;
if(cljs.core.truth_(inst_13690)){
var statearr_13720_13737 = state_13711__$1;
(statearr_13720_13737[(1)] = (4));

} else {
var statearr_13721_13738 = state_13711__$1;
(statearr_13721_13738[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13712 === (11))){
var inst_13688 = (state_13711[(8)]);
var inst_13698 = (state_13711[(2)]);
var inst_13699 = (inst_13688 + (1));
var inst_13688__$1 = inst_13699;
var state_13711__$1 = (function (){var statearr_13722 = state_13711;
(statearr_13722[(8)] = inst_13688__$1);

(statearr_13722[(10)] = inst_13698);

return statearr_13722;
})();
var statearr_13723_13739 = state_13711__$1;
(statearr_13723_13739[(2)] = null);

(statearr_13723_13739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13712 === (9))){
var state_13711__$1 = state_13711;
var statearr_13724_13740 = state_13711__$1;
(statearr_13724_13740[(2)] = null);

(statearr_13724_13740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13712 === (5))){
var state_13711__$1 = state_13711;
var statearr_13725_13741 = state_13711__$1;
(statearr_13725_13741[(2)] = null);

(statearr_13725_13741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13712 === (10))){
var inst_13703 = (state_13711[(2)]);
var state_13711__$1 = state_13711;
var statearr_13726_13742 = state_13711__$1;
(statearr_13726_13742[(2)] = inst_13703);

(statearr_13726_13742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13712 === (8))){
var inst_13693 = (state_13711[(7)]);
var state_13711__$1 = state_13711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13711__$1,(11),out,inst_13693);
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
});})(c__10178__auto___13732,out))
;
return ((function (switch__10163__auto__,c__10178__auto___13732,out){
return (function() {
var cljs$core$async$state_machine__10164__auto__ = null;
var cljs$core$async$state_machine__10164__auto____0 = (function (){
var statearr_13727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13727[(0)] = cljs$core$async$state_machine__10164__auto__);

(statearr_13727[(1)] = (1));

return statearr_13727;
});
var cljs$core$async$state_machine__10164__auto____1 = (function (state_13711){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_13711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e13728){if((e13728 instanceof Object)){
var ex__10167__auto__ = e13728;
var statearr_13729_13743 = state_13711;
(statearr_13729_13743[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13744 = state_13711;
state_13711 = G__13744;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$state_machine__10164__auto__ = function(state_13711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10164__auto____1.call(this,state_13711);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10164__auto____0;
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10164__auto____1;
return cljs$core$async$state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___13732,out))
})();
var state__10180__auto__ = (function (){var statearr_13730 = f__10179__auto__.call(null);
(statearr_13730[(6)] = c__10178__auto___13732);

return statearr_13730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___13732,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13746 = (function (f,ch,meta13747){
this.f = f;
this.ch = ch;
this.meta13747 = meta13747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13748,meta13747__$1){
var self__ = this;
var _13748__$1 = this;
return (new cljs.core.async.t_cljs$core$async13746(self__.f,self__.ch,meta13747__$1));
});

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13748){
var self__ = this;
var _13748__$1 = this;
return self__.meta13747;
});

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13749 = (function (f,ch,meta13747,_,fn1,meta13750){
this.f = f;
this.ch = ch;
this.meta13747 = meta13747;
this._ = _;
this.fn1 = fn1;
this.meta13750 = meta13750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13751,meta13750__$1){
var self__ = this;
var _13751__$1 = this;
return (new cljs.core.async.t_cljs$core$async13749(self__.f,self__.ch,self__.meta13747,self__._,self__.fn1,meta13750__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13751){
var self__ = this;
var _13751__$1 = this;
return self__.meta13750;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13749.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13745_SHARP_){
return f1.call(null,(((p1__13745_SHARP_ == null))?null:self__.f.call(null,p1__13745_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13749.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13747","meta13747",-1015623638,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13746","cljs.core.async/t_cljs$core$async13746",-2033741694,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13750","meta13750",1963220981,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13749";

cljs.core.async.t_cljs$core$async13749.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async13749");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13749.
 */
cljs.core.async.__GT_t_cljs$core$async13749 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13749(f__$1,ch__$1,meta13747__$1,___$2,fn1__$1,meta13750){
return (new cljs.core.async.t_cljs$core$async13749(f__$1,ch__$1,meta13747__$1,___$2,fn1__$1,meta13750));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13749(self__.f,self__.ch,self__.meta13747,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13747","meta13747",-1015623638,null)], null);
});

cljs.core.async.t_cljs$core$async13746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13746";

cljs.core.async.t_cljs$core$async13746.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async13746");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13746.
 */
cljs.core.async.__GT_t_cljs$core$async13746 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13746(f__$1,ch__$1,meta13747){
return (new cljs.core.async.t_cljs$core$async13746(f__$1,ch__$1,meta13747));
});

}

return (new cljs.core.async.t_cljs$core$async13746(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13752 = (function (f,ch,meta13753){
this.f = f;
this.ch = ch;
this.meta13753 = meta13753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13754,meta13753__$1){
var self__ = this;
var _13754__$1 = this;
return (new cljs.core.async.t_cljs$core$async13752(self__.f,self__.ch,meta13753__$1));
});

cljs.core.async.t_cljs$core$async13752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13754){
var self__ = this;
var _13754__$1 = this;
return self__.meta13753;
});

cljs.core.async.t_cljs$core$async13752.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13752.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13752.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13753","meta13753",-1682614095,null)], null);
});

cljs.core.async.t_cljs$core$async13752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13752";

cljs.core.async.t_cljs$core$async13752.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async13752");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13752.
 */
cljs.core.async.__GT_t_cljs$core$async13752 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13752(f__$1,ch__$1,meta13753){
return (new cljs.core.async.t_cljs$core$async13752(f__$1,ch__$1,meta13753));
});

}

return (new cljs.core.async.t_cljs$core$async13752(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13755 = (function (p,ch,meta13756){
this.p = p;
this.ch = ch;
this.meta13756 = meta13756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13757,meta13756__$1){
var self__ = this;
var _13757__$1 = this;
return (new cljs.core.async.t_cljs$core$async13755(self__.p,self__.ch,meta13756__$1));
});

cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13757){
var self__ = this;
var _13757__$1 = this;
return self__.meta13756;
});

cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13756","meta13756",-1428053231,null)], null);
});

cljs.core.async.t_cljs$core$async13755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13755";

cljs.core.async.t_cljs$core$async13755.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async13755");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13755.
 */
cljs.core.async.__GT_t_cljs$core$async13755 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13755(p__$1,ch__$1,meta13756){
return (new cljs.core.async.t_cljs$core$async13755(p__$1,ch__$1,meta13756));
});

}

return (new cljs.core.async.t_cljs$core$async13755(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13759 = arguments.length;
switch (G__13759) {
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
var c__10178__auto___13799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___13799,out){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___13799,out){
return (function (state_13780){
var state_val_13781 = (state_13780[(1)]);
if((state_val_13781 === (7))){
var inst_13776 = (state_13780[(2)]);
var state_13780__$1 = state_13780;
var statearr_13782_13800 = state_13780__$1;
(statearr_13782_13800[(2)] = inst_13776);

(statearr_13782_13800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (1))){
var state_13780__$1 = state_13780;
var statearr_13783_13801 = state_13780__$1;
(statearr_13783_13801[(2)] = null);

(statearr_13783_13801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (4))){
var inst_13762 = (state_13780[(7)]);
var inst_13762__$1 = (state_13780[(2)]);
var inst_13763 = (inst_13762__$1 == null);
var state_13780__$1 = (function (){var statearr_13784 = state_13780;
(statearr_13784[(7)] = inst_13762__$1);

return statearr_13784;
})();
if(cljs.core.truth_(inst_13763)){
var statearr_13785_13802 = state_13780__$1;
(statearr_13785_13802[(1)] = (5));

} else {
var statearr_13786_13803 = state_13780__$1;
(statearr_13786_13803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (6))){
var inst_13762 = (state_13780[(7)]);
var inst_13767 = p.call(null,inst_13762);
var state_13780__$1 = state_13780;
if(cljs.core.truth_(inst_13767)){
var statearr_13787_13804 = state_13780__$1;
(statearr_13787_13804[(1)] = (8));

} else {
var statearr_13788_13805 = state_13780__$1;
(statearr_13788_13805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (3))){
var inst_13778 = (state_13780[(2)]);
var state_13780__$1 = state_13780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13780__$1,inst_13778);
} else {
if((state_val_13781 === (2))){
var state_13780__$1 = state_13780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13780__$1,(4),ch);
} else {
if((state_val_13781 === (11))){
var inst_13770 = (state_13780[(2)]);
var state_13780__$1 = state_13780;
var statearr_13789_13806 = state_13780__$1;
(statearr_13789_13806[(2)] = inst_13770);

(statearr_13789_13806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (9))){
var state_13780__$1 = state_13780;
var statearr_13790_13807 = state_13780__$1;
(statearr_13790_13807[(2)] = null);

(statearr_13790_13807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (5))){
var inst_13765 = cljs.core.async.close_BANG_.call(null,out);
var state_13780__$1 = state_13780;
var statearr_13791_13808 = state_13780__$1;
(statearr_13791_13808[(2)] = inst_13765);

(statearr_13791_13808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (10))){
var inst_13773 = (state_13780[(2)]);
var state_13780__$1 = (function (){var statearr_13792 = state_13780;
(statearr_13792[(8)] = inst_13773);

return statearr_13792;
})();
var statearr_13793_13809 = state_13780__$1;
(statearr_13793_13809[(2)] = null);

(statearr_13793_13809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (8))){
var inst_13762 = (state_13780[(7)]);
var state_13780__$1 = state_13780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13780__$1,(11),out,inst_13762);
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
});})(c__10178__auto___13799,out))
;
return ((function (switch__10163__auto__,c__10178__auto___13799,out){
return (function() {
var cljs$core$async$state_machine__10164__auto__ = null;
var cljs$core$async$state_machine__10164__auto____0 = (function (){
var statearr_13794 = [null,null,null,null,null,null,null,null,null];
(statearr_13794[(0)] = cljs$core$async$state_machine__10164__auto__);

(statearr_13794[(1)] = (1));

return statearr_13794;
});
var cljs$core$async$state_machine__10164__auto____1 = (function (state_13780){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_13780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e13795){if((e13795 instanceof Object)){
var ex__10167__auto__ = e13795;
var statearr_13796_13810 = state_13780;
(statearr_13796_13810[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13811 = state_13780;
state_13780 = G__13811;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$state_machine__10164__auto__ = function(state_13780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10164__auto____1.call(this,state_13780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10164__auto____0;
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10164__auto____1;
return cljs$core$async$state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___13799,out))
})();
var state__10180__auto__ = (function (){var statearr_13797 = f__10179__auto__.call(null);
(statearr_13797[(6)] = c__10178__auto___13799);

return statearr_13797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___13799,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13813 = arguments.length;
switch (G__13813) {
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
var c__10178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto__){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto__){
return (function (state_13876){
var state_val_13877 = (state_13876[(1)]);
if((state_val_13877 === (7))){
var inst_13872 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
var statearr_13878_13916 = state_13876__$1;
(statearr_13878_13916[(2)] = inst_13872);

(statearr_13878_13916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (20))){
var inst_13842 = (state_13876[(7)]);
var inst_13853 = (state_13876[(2)]);
var inst_13854 = cljs.core.next.call(null,inst_13842);
var inst_13828 = inst_13854;
var inst_13829 = null;
var inst_13830 = (0);
var inst_13831 = (0);
var state_13876__$1 = (function (){var statearr_13879 = state_13876;
(statearr_13879[(8)] = inst_13853);

(statearr_13879[(9)] = inst_13830);

(statearr_13879[(10)] = inst_13828);

(statearr_13879[(11)] = inst_13831);

(statearr_13879[(12)] = inst_13829);

return statearr_13879;
})();
var statearr_13880_13917 = state_13876__$1;
(statearr_13880_13917[(2)] = null);

(statearr_13880_13917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (1))){
var state_13876__$1 = state_13876;
var statearr_13881_13918 = state_13876__$1;
(statearr_13881_13918[(2)] = null);

(statearr_13881_13918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (4))){
var inst_13817 = (state_13876[(13)]);
var inst_13817__$1 = (state_13876[(2)]);
var inst_13818 = (inst_13817__$1 == null);
var state_13876__$1 = (function (){var statearr_13882 = state_13876;
(statearr_13882[(13)] = inst_13817__$1);

return statearr_13882;
})();
if(cljs.core.truth_(inst_13818)){
var statearr_13883_13919 = state_13876__$1;
(statearr_13883_13919[(1)] = (5));

} else {
var statearr_13884_13920 = state_13876__$1;
(statearr_13884_13920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (15))){
var state_13876__$1 = state_13876;
var statearr_13888_13921 = state_13876__$1;
(statearr_13888_13921[(2)] = null);

(statearr_13888_13921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (21))){
var state_13876__$1 = state_13876;
var statearr_13889_13922 = state_13876__$1;
(statearr_13889_13922[(2)] = null);

(statearr_13889_13922[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (13))){
var inst_13830 = (state_13876[(9)]);
var inst_13828 = (state_13876[(10)]);
var inst_13831 = (state_13876[(11)]);
var inst_13829 = (state_13876[(12)]);
var inst_13838 = (state_13876[(2)]);
var inst_13839 = (inst_13831 + (1));
var tmp13885 = inst_13830;
var tmp13886 = inst_13828;
var tmp13887 = inst_13829;
var inst_13828__$1 = tmp13886;
var inst_13829__$1 = tmp13887;
var inst_13830__$1 = tmp13885;
var inst_13831__$1 = inst_13839;
var state_13876__$1 = (function (){var statearr_13890 = state_13876;
(statearr_13890[(14)] = inst_13838);

(statearr_13890[(9)] = inst_13830__$1);

(statearr_13890[(10)] = inst_13828__$1);

(statearr_13890[(11)] = inst_13831__$1);

(statearr_13890[(12)] = inst_13829__$1);

return statearr_13890;
})();
var statearr_13891_13923 = state_13876__$1;
(statearr_13891_13923[(2)] = null);

(statearr_13891_13923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (22))){
var state_13876__$1 = state_13876;
var statearr_13892_13924 = state_13876__$1;
(statearr_13892_13924[(2)] = null);

(statearr_13892_13924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (6))){
var inst_13817 = (state_13876[(13)]);
var inst_13826 = f.call(null,inst_13817);
var inst_13827 = cljs.core.seq.call(null,inst_13826);
var inst_13828 = inst_13827;
var inst_13829 = null;
var inst_13830 = (0);
var inst_13831 = (0);
var state_13876__$1 = (function (){var statearr_13893 = state_13876;
(statearr_13893[(9)] = inst_13830);

(statearr_13893[(10)] = inst_13828);

(statearr_13893[(11)] = inst_13831);

(statearr_13893[(12)] = inst_13829);

return statearr_13893;
})();
var statearr_13894_13925 = state_13876__$1;
(statearr_13894_13925[(2)] = null);

(statearr_13894_13925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (17))){
var inst_13842 = (state_13876[(7)]);
var inst_13846 = cljs.core.chunk_first.call(null,inst_13842);
var inst_13847 = cljs.core.chunk_rest.call(null,inst_13842);
var inst_13848 = cljs.core.count.call(null,inst_13846);
var inst_13828 = inst_13847;
var inst_13829 = inst_13846;
var inst_13830 = inst_13848;
var inst_13831 = (0);
var state_13876__$1 = (function (){var statearr_13895 = state_13876;
(statearr_13895[(9)] = inst_13830);

(statearr_13895[(10)] = inst_13828);

(statearr_13895[(11)] = inst_13831);

(statearr_13895[(12)] = inst_13829);

return statearr_13895;
})();
var statearr_13896_13926 = state_13876__$1;
(statearr_13896_13926[(2)] = null);

(statearr_13896_13926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (3))){
var inst_13874 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13876__$1,inst_13874);
} else {
if((state_val_13877 === (12))){
var inst_13862 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
var statearr_13897_13927 = state_13876__$1;
(statearr_13897_13927[(2)] = inst_13862);

(statearr_13897_13927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (2))){
var state_13876__$1 = state_13876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13876__$1,(4),in$);
} else {
if((state_val_13877 === (23))){
var inst_13870 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
var statearr_13898_13928 = state_13876__$1;
(statearr_13898_13928[(2)] = inst_13870);

(statearr_13898_13928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (19))){
var inst_13857 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
var statearr_13899_13929 = state_13876__$1;
(statearr_13899_13929[(2)] = inst_13857);

(statearr_13899_13929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (11))){
var inst_13828 = (state_13876[(10)]);
var inst_13842 = (state_13876[(7)]);
var inst_13842__$1 = cljs.core.seq.call(null,inst_13828);
var state_13876__$1 = (function (){var statearr_13900 = state_13876;
(statearr_13900[(7)] = inst_13842__$1);

return statearr_13900;
})();
if(inst_13842__$1){
var statearr_13901_13930 = state_13876__$1;
(statearr_13901_13930[(1)] = (14));

} else {
var statearr_13902_13931 = state_13876__$1;
(statearr_13902_13931[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (9))){
var inst_13864 = (state_13876[(2)]);
var inst_13865 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13876__$1 = (function (){var statearr_13903 = state_13876;
(statearr_13903[(15)] = inst_13864);

return statearr_13903;
})();
if(cljs.core.truth_(inst_13865)){
var statearr_13904_13932 = state_13876__$1;
(statearr_13904_13932[(1)] = (21));

} else {
var statearr_13905_13933 = state_13876__$1;
(statearr_13905_13933[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (5))){
var inst_13820 = cljs.core.async.close_BANG_.call(null,out);
var state_13876__$1 = state_13876;
var statearr_13906_13934 = state_13876__$1;
(statearr_13906_13934[(2)] = inst_13820);

(statearr_13906_13934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (14))){
var inst_13842 = (state_13876[(7)]);
var inst_13844 = cljs.core.chunked_seq_QMARK_.call(null,inst_13842);
var state_13876__$1 = state_13876;
if(inst_13844){
var statearr_13907_13935 = state_13876__$1;
(statearr_13907_13935[(1)] = (17));

} else {
var statearr_13908_13936 = state_13876__$1;
(statearr_13908_13936[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (16))){
var inst_13860 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
var statearr_13909_13937 = state_13876__$1;
(statearr_13909_13937[(2)] = inst_13860);

(statearr_13909_13937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (10))){
var inst_13831 = (state_13876[(11)]);
var inst_13829 = (state_13876[(12)]);
var inst_13836 = cljs.core._nth.call(null,inst_13829,inst_13831);
var state_13876__$1 = state_13876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13876__$1,(13),out,inst_13836);
} else {
if((state_val_13877 === (18))){
var inst_13842 = (state_13876[(7)]);
var inst_13851 = cljs.core.first.call(null,inst_13842);
var state_13876__$1 = state_13876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13876__$1,(20),out,inst_13851);
} else {
if((state_val_13877 === (8))){
var inst_13830 = (state_13876[(9)]);
var inst_13831 = (state_13876[(11)]);
var inst_13833 = (inst_13831 < inst_13830);
var inst_13834 = inst_13833;
var state_13876__$1 = state_13876;
if(cljs.core.truth_(inst_13834)){
var statearr_13910_13938 = state_13876__$1;
(statearr_13910_13938[(1)] = (10));

} else {
var statearr_13911_13939 = state_13876__$1;
(statearr_13911_13939[(1)] = (11));

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
});})(c__10178__auto__))
;
return ((function (switch__10163__auto__,c__10178__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10164__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10164__auto____0 = (function (){
var statearr_13912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13912[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10164__auto__);

(statearr_13912[(1)] = (1));

return statearr_13912;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10164__auto____1 = (function (state_13876){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_13876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e13913){if((e13913 instanceof Object)){
var ex__10167__auto__ = e13913;
var statearr_13914_13940 = state_13876;
(statearr_13914_13940[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13941 = state_13876;
state_13876 = G__13941;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10164__auto__ = function(state_13876){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10164__auto____1.call(this,state_13876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10164__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10164__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto__))
})();
var state__10180__auto__ = (function (){var statearr_13915 = f__10179__auto__.call(null);
(statearr_13915[(6)] = c__10178__auto__);

return statearr_13915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto__))
);

return c__10178__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13943 = arguments.length;
switch (G__13943) {
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
var G__13946 = arguments.length;
switch (G__13946) {
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
var G__13949 = arguments.length;
switch (G__13949) {
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
var c__10178__auto___13996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___13996,out){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___13996,out){
return (function (state_13973){
var state_val_13974 = (state_13973[(1)]);
if((state_val_13974 === (7))){
var inst_13968 = (state_13973[(2)]);
var state_13973__$1 = state_13973;
var statearr_13975_13997 = state_13973__$1;
(statearr_13975_13997[(2)] = inst_13968);

(statearr_13975_13997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (1))){
var inst_13950 = null;
var state_13973__$1 = (function (){var statearr_13976 = state_13973;
(statearr_13976[(7)] = inst_13950);

return statearr_13976;
})();
var statearr_13977_13998 = state_13973__$1;
(statearr_13977_13998[(2)] = null);

(statearr_13977_13998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (4))){
var inst_13953 = (state_13973[(8)]);
var inst_13953__$1 = (state_13973[(2)]);
var inst_13954 = (inst_13953__$1 == null);
var inst_13955 = cljs.core.not.call(null,inst_13954);
var state_13973__$1 = (function (){var statearr_13978 = state_13973;
(statearr_13978[(8)] = inst_13953__$1);

return statearr_13978;
})();
if(inst_13955){
var statearr_13979_13999 = state_13973__$1;
(statearr_13979_13999[(1)] = (5));

} else {
var statearr_13980_14000 = state_13973__$1;
(statearr_13980_14000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (6))){
var state_13973__$1 = state_13973;
var statearr_13981_14001 = state_13973__$1;
(statearr_13981_14001[(2)] = null);

(statearr_13981_14001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (3))){
var inst_13970 = (state_13973[(2)]);
var inst_13971 = cljs.core.async.close_BANG_.call(null,out);
var state_13973__$1 = (function (){var statearr_13982 = state_13973;
(statearr_13982[(9)] = inst_13970);

return statearr_13982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13973__$1,inst_13971);
} else {
if((state_val_13974 === (2))){
var state_13973__$1 = state_13973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13973__$1,(4),ch);
} else {
if((state_val_13974 === (11))){
var inst_13953 = (state_13973[(8)]);
var inst_13962 = (state_13973[(2)]);
var inst_13950 = inst_13953;
var state_13973__$1 = (function (){var statearr_13983 = state_13973;
(statearr_13983[(7)] = inst_13950);

(statearr_13983[(10)] = inst_13962);

return statearr_13983;
})();
var statearr_13984_14002 = state_13973__$1;
(statearr_13984_14002[(2)] = null);

(statearr_13984_14002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (9))){
var inst_13953 = (state_13973[(8)]);
var state_13973__$1 = state_13973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13973__$1,(11),out,inst_13953);
} else {
if((state_val_13974 === (5))){
var inst_13953 = (state_13973[(8)]);
var inst_13950 = (state_13973[(7)]);
var inst_13957 = cljs.core._EQ_.call(null,inst_13953,inst_13950);
var state_13973__$1 = state_13973;
if(inst_13957){
var statearr_13986_14003 = state_13973__$1;
(statearr_13986_14003[(1)] = (8));

} else {
var statearr_13987_14004 = state_13973__$1;
(statearr_13987_14004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (10))){
var inst_13965 = (state_13973[(2)]);
var state_13973__$1 = state_13973;
var statearr_13988_14005 = state_13973__$1;
(statearr_13988_14005[(2)] = inst_13965);

(statearr_13988_14005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13974 === (8))){
var inst_13950 = (state_13973[(7)]);
var tmp13985 = inst_13950;
var inst_13950__$1 = tmp13985;
var state_13973__$1 = (function (){var statearr_13989 = state_13973;
(statearr_13989[(7)] = inst_13950__$1);

return statearr_13989;
})();
var statearr_13990_14006 = state_13973__$1;
(statearr_13990_14006[(2)] = null);

(statearr_13990_14006[(1)] = (2));


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
});})(c__10178__auto___13996,out))
;
return ((function (switch__10163__auto__,c__10178__auto___13996,out){
return (function() {
var cljs$core$async$state_machine__10164__auto__ = null;
var cljs$core$async$state_machine__10164__auto____0 = (function (){
var statearr_13991 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13991[(0)] = cljs$core$async$state_machine__10164__auto__);

(statearr_13991[(1)] = (1));

return statearr_13991;
});
var cljs$core$async$state_machine__10164__auto____1 = (function (state_13973){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_13973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e13992){if((e13992 instanceof Object)){
var ex__10167__auto__ = e13992;
var statearr_13993_14007 = state_13973;
(statearr_13993_14007[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14008 = state_13973;
state_13973 = G__14008;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$state_machine__10164__auto__ = function(state_13973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10164__auto____1.call(this,state_13973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10164__auto____0;
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10164__auto____1;
return cljs$core$async$state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___13996,out))
})();
var state__10180__auto__ = (function (){var statearr_13994 = f__10179__auto__.call(null);
(statearr_13994[(6)] = c__10178__auto___13996);

return statearr_13994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___13996,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14010 = arguments.length;
switch (G__14010) {
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
var c__10178__auto___14076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___14076,out){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___14076,out){
return (function (state_14048){
var state_val_14049 = (state_14048[(1)]);
if((state_val_14049 === (7))){
var inst_14044 = (state_14048[(2)]);
var state_14048__$1 = state_14048;
var statearr_14050_14077 = state_14048__$1;
(statearr_14050_14077[(2)] = inst_14044);

(statearr_14050_14077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (1))){
var inst_14011 = (new Array(n));
var inst_14012 = inst_14011;
var inst_14013 = (0);
var state_14048__$1 = (function (){var statearr_14051 = state_14048;
(statearr_14051[(7)] = inst_14013);

(statearr_14051[(8)] = inst_14012);

return statearr_14051;
})();
var statearr_14052_14078 = state_14048__$1;
(statearr_14052_14078[(2)] = null);

(statearr_14052_14078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (4))){
var inst_14016 = (state_14048[(9)]);
var inst_14016__$1 = (state_14048[(2)]);
var inst_14017 = (inst_14016__$1 == null);
var inst_14018 = cljs.core.not.call(null,inst_14017);
var state_14048__$1 = (function (){var statearr_14053 = state_14048;
(statearr_14053[(9)] = inst_14016__$1);

return statearr_14053;
})();
if(inst_14018){
var statearr_14054_14079 = state_14048__$1;
(statearr_14054_14079[(1)] = (5));

} else {
var statearr_14055_14080 = state_14048__$1;
(statearr_14055_14080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (15))){
var inst_14038 = (state_14048[(2)]);
var state_14048__$1 = state_14048;
var statearr_14056_14081 = state_14048__$1;
(statearr_14056_14081[(2)] = inst_14038);

(statearr_14056_14081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (13))){
var state_14048__$1 = state_14048;
var statearr_14057_14082 = state_14048__$1;
(statearr_14057_14082[(2)] = null);

(statearr_14057_14082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (6))){
var inst_14013 = (state_14048[(7)]);
var inst_14034 = (inst_14013 > (0));
var state_14048__$1 = state_14048;
if(cljs.core.truth_(inst_14034)){
var statearr_14058_14083 = state_14048__$1;
(statearr_14058_14083[(1)] = (12));

} else {
var statearr_14059_14084 = state_14048__$1;
(statearr_14059_14084[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (3))){
var inst_14046 = (state_14048[(2)]);
var state_14048__$1 = state_14048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14048__$1,inst_14046);
} else {
if((state_val_14049 === (12))){
var inst_14012 = (state_14048[(8)]);
var inst_14036 = cljs.core.vec.call(null,inst_14012);
var state_14048__$1 = state_14048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14048__$1,(15),out,inst_14036);
} else {
if((state_val_14049 === (2))){
var state_14048__$1 = state_14048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14048__$1,(4),ch);
} else {
if((state_val_14049 === (11))){
var inst_14028 = (state_14048[(2)]);
var inst_14029 = (new Array(n));
var inst_14012 = inst_14029;
var inst_14013 = (0);
var state_14048__$1 = (function (){var statearr_14060 = state_14048;
(statearr_14060[(7)] = inst_14013);

(statearr_14060[(10)] = inst_14028);

(statearr_14060[(8)] = inst_14012);

return statearr_14060;
})();
var statearr_14061_14085 = state_14048__$1;
(statearr_14061_14085[(2)] = null);

(statearr_14061_14085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (9))){
var inst_14012 = (state_14048[(8)]);
var inst_14026 = cljs.core.vec.call(null,inst_14012);
var state_14048__$1 = state_14048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14048__$1,(11),out,inst_14026);
} else {
if((state_val_14049 === (5))){
var inst_14021 = (state_14048[(11)]);
var inst_14013 = (state_14048[(7)]);
var inst_14016 = (state_14048[(9)]);
var inst_14012 = (state_14048[(8)]);
var inst_14020 = (inst_14012[inst_14013] = inst_14016);
var inst_14021__$1 = (inst_14013 + (1));
var inst_14022 = (inst_14021__$1 < n);
var state_14048__$1 = (function (){var statearr_14062 = state_14048;
(statearr_14062[(11)] = inst_14021__$1);

(statearr_14062[(12)] = inst_14020);

return statearr_14062;
})();
if(cljs.core.truth_(inst_14022)){
var statearr_14063_14086 = state_14048__$1;
(statearr_14063_14086[(1)] = (8));

} else {
var statearr_14064_14087 = state_14048__$1;
(statearr_14064_14087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (14))){
var inst_14041 = (state_14048[(2)]);
var inst_14042 = cljs.core.async.close_BANG_.call(null,out);
var state_14048__$1 = (function (){var statearr_14066 = state_14048;
(statearr_14066[(13)] = inst_14041);

return statearr_14066;
})();
var statearr_14067_14088 = state_14048__$1;
(statearr_14067_14088[(2)] = inst_14042);

(statearr_14067_14088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (10))){
var inst_14032 = (state_14048[(2)]);
var state_14048__$1 = state_14048;
var statearr_14068_14089 = state_14048__$1;
(statearr_14068_14089[(2)] = inst_14032);

(statearr_14068_14089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (8))){
var inst_14021 = (state_14048[(11)]);
var inst_14012 = (state_14048[(8)]);
var tmp14065 = inst_14012;
var inst_14012__$1 = tmp14065;
var inst_14013 = inst_14021;
var state_14048__$1 = (function (){var statearr_14069 = state_14048;
(statearr_14069[(7)] = inst_14013);

(statearr_14069[(8)] = inst_14012__$1);

return statearr_14069;
})();
var statearr_14070_14090 = state_14048__$1;
(statearr_14070_14090[(2)] = null);

(statearr_14070_14090[(1)] = (2));


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
});})(c__10178__auto___14076,out))
;
return ((function (switch__10163__auto__,c__10178__auto___14076,out){
return (function() {
var cljs$core$async$state_machine__10164__auto__ = null;
var cljs$core$async$state_machine__10164__auto____0 = (function (){
var statearr_14071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14071[(0)] = cljs$core$async$state_machine__10164__auto__);

(statearr_14071[(1)] = (1));

return statearr_14071;
});
var cljs$core$async$state_machine__10164__auto____1 = (function (state_14048){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_14048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e14072){if((e14072 instanceof Object)){
var ex__10167__auto__ = e14072;
var statearr_14073_14091 = state_14048;
(statearr_14073_14091[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14092 = state_14048;
state_14048 = G__14092;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$state_machine__10164__auto__ = function(state_14048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10164__auto____1.call(this,state_14048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10164__auto____0;
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10164__auto____1;
return cljs$core$async$state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___14076,out))
})();
var state__10180__auto__ = (function (){var statearr_14074 = f__10179__auto__.call(null);
(statearr_14074[(6)] = c__10178__auto___14076);

return statearr_14074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___14076,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14094 = arguments.length;
switch (G__14094) {
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
var c__10178__auto___14164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10178__auto___14164,out){
return (function (){
var f__10179__auto__ = (function (){var switch__10163__auto__ = ((function (c__10178__auto___14164,out){
return (function (state_14136){
var state_val_14137 = (state_14136[(1)]);
if((state_val_14137 === (7))){
var inst_14132 = (state_14136[(2)]);
var state_14136__$1 = state_14136;
var statearr_14138_14165 = state_14136__$1;
(statearr_14138_14165[(2)] = inst_14132);

(statearr_14138_14165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14137 === (1))){
var inst_14095 = [];
var inst_14096 = inst_14095;
var inst_14097 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14136__$1 = (function (){var statearr_14139 = state_14136;
(statearr_14139[(7)] = inst_14096);

(statearr_14139[(8)] = inst_14097);

return statearr_14139;
})();
var statearr_14140_14166 = state_14136__$1;
(statearr_14140_14166[(2)] = null);

(statearr_14140_14166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14137 === (4))){
var inst_14100 = (state_14136[(9)]);
var inst_14100__$1 = (state_14136[(2)]);
var inst_14101 = (inst_14100__$1 == null);
var inst_14102 = cljs.core.not.call(null,inst_14101);
var state_14136__$1 = (function (){var statearr_14141 = state_14136;
(statearr_14141[(9)] = inst_14100__$1);

return statearr_14141;
})();
if(inst_14102){
var statearr_14142_14167 = state_14136__$1;
(statearr_14142_14167[(1)] = (5));

} else {
var statearr_14143_14168 = state_14136__$1;
(statearr_14143_14168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14137 === (15))){
var inst_14126 = (state_14136[(2)]);
var state_14136__$1 = state_14136;
var statearr_14144_14169 = state_14136__$1;
(statearr_14144_14169[(2)] = inst_14126);

(statearr_14144_14169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14137 === (13))){
var state_14136__$1 = state_14136;
var statearr_14145_14170 = state_14136__$1;
(statearr_14145_14170[(2)] = null);

(statearr_14145_14170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14137 === (6))){
var inst_14096 = (state_14136[(7)]);
var inst_14121 = inst_14096.length;
var inst_14122 = (inst_14121 > (0));
var state_14136__$1 = state_14136;
if(cljs.core.truth_(inst_14122)){
var statearr_14146_14171 = state_14136__$1;
(statearr_14146_14171[(1)] = (12));

} else {
var statearr_14147_14172 = state_14136__$1;
(statearr_14147_14172[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14137 === (3))){
var inst_14134 = (state_14136[(2)]);
var state_14136__$1 = state_14136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14136__$1,inst_14134);
} else {
if((state_val_14137 === (12))){
var inst_14096 = (state_14136[(7)]);
var inst_14124 = cljs.core.vec.call(null,inst_14096);
var state_14136__$1 = state_14136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14136__$1,(15),out,inst_14124);
} else {
if((state_val_14137 === (2))){
var state_14136__$1 = state_14136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14136__$1,(4),ch);
} else {
if((state_val_14137 === (11))){
var inst_14104 = (state_14136[(10)]);
var inst_14100 = (state_14136[(9)]);
var inst_14114 = (state_14136[(2)]);
var inst_14115 = [];
var inst_14116 = inst_14115.push(inst_14100);
var inst_14096 = inst_14115;
var inst_14097 = inst_14104;
var state_14136__$1 = (function (){var statearr_14148 = state_14136;
(statearr_14148[(7)] = inst_14096);

(statearr_14148[(11)] = inst_14116);

(statearr_14148[(12)] = inst_14114);

(statearr_14148[(8)] = inst_14097);

return statearr_14148;
})();
var statearr_14149_14173 = state_14136__$1;
(statearr_14149_14173[(2)] = null);

(statearr_14149_14173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14137 === (9))){
var inst_14096 = (state_14136[(7)]);
var inst_14112 = cljs.core.vec.call(null,inst_14096);
var state_14136__$1 = state_14136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14136__$1,(11),out,inst_14112);
} else {
if((state_val_14137 === (5))){
var inst_14104 = (state_14136[(10)]);
var inst_14100 = (state_14136[(9)]);
var inst_14097 = (state_14136[(8)]);
var inst_14104__$1 = f.call(null,inst_14100);
var inst_14105 = cljs.core._EQ_.call(null,inst_14104__$1,inst_14097);
var inst_14106 = cljs.core.keyword_identical_QMARK_.call(null,inst_14097,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14107 = ((inst_14105) || (inst_14106));
var state_14136__$1 = (function (){var statearr_14150 = state_14136;
(statearr_14150[(10)] = inst_14104__$1);

return statearr_14150;
})();
if(cljs.core.truth_(inst_14107)){
var statearr_14151_14174 = state_14136__$1;
(statearr_14151_14174[(1)] = (8));

} else {
var statearr_14152_14175 = state_14136__$1;
(statearr_14152_14175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14137 === (14))){
var inst_14129 = (state_14136[(2)]);
var inst_14130 = cljs.core.async.close_BANG_.call(null,out);
var state_14136__$1 = (function (){var statearr_14154 = state_14136;
(statearr_14154[(13)] = inst_14129);

return statearr_14154;
})();
var statearr_14155_14176 = state_14136__$1;
(statearr_14155_14176[(2)] = inst_14130);

(statearr_14155_14176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14137 === (10))){
var inst_14119 = (state_14136[(2)]);
var state_14136__$1 = state_14136;
var statearr_14156_14177 = state_14136__$1;
(statearr_14156_14177[(2)] = inst_14119);

(statearr_14156_14177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14137 === (8))){
var inst_14096 = (state_14136[(7)]);
var inst_14104 = (state_14136[(10)]);
var inst_14100 = (state_14136[(9)]);
var inst_14109 = inst_14096.push(inst_14100);
var tmp14153 = inst_14096;
var inst_14096__$1 = tmp14153;
var inst_14097 = inst_14104;
var state_14136__$1 = (function (){var statearr_14157 = state_14136;
(statearr_14157[(7)] = inst_14096__$1);

(statearr_14157[(14)] = inst_14109);

(statearr_14157[(8)] = inst_14097);

return statearr_14157;
})();
var statearr_14158_14178 = state_14136__$1;
(statearr_14158_14178[(2)] = null);

(statearr_14158_14178[(1)] = (2));


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
});})(c__10178__auto___14164,out))
;
return ((function (switch__10163__auto__,c__10178__auto___14164,out){
return (function() {
var cljs$core$async$state_machine__10164__auto__ = null;
var cljs$core$async$state_machine__10164__auto____0 = (function (){
var statearr_14159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14159[(0)] = cljs$core$async$state_machine__10164__auto__);

(statearr_14159[(1)] = (1));

return statearr_14159;
});
var cljs$core$async$state_machine__10164__auto____1 = (function (state_14136){
while(true){
var ret_value__10165__auto__ = (function (){try{while(true){
var result__10166__auto__ = switch__10163__auto__.call(null,state_14136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10166__auto__;
}
break;
}
}catch (e14160){if((e14160 instanceof Object)){
var ex__10167__auto__ = e14160;
var statearr_14161_14179 = state_14136;
(statearr_14161_14179[(5)] = ex__10167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14180 = state_14136;
state_14136 = G__14180;
continue;
} else {
return ret_value__10165__auto__;
}
break;
}
});
cljs$core$async$state_machine__10164__auto__ = function(state_14136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10164__auto____1.call(this,state_14136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10164__auto____0;
cljs$core$async$state_machine__10164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10164__auto____1;
return cljs$core$async$state_machine__10164__auto__;
})()
;})(switch__10163__auto__,c__10178__auto___14164,out))
})();
var state__10180__auto__ = (function (){var statearr_14162 = f__10179__auto__.call(null);
(statearr_14162[(6)] = c__10178__auto___14164);

return statearr_14162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10180__auto__);
});})(c__10178__auto___14164,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
