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
var G__4056 = arguments.length;
switch (G__4056) {
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
if(typeof cljs.core.async.t_cljs$core$async4057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4057 = (function (f,blockable,meta4058){
this.f = f;
this.blockable = blockable;
this.meta4058 = meta4058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4059,meta4058__$1){
var self__ = this;
var _4059__$1 = this;
return (new cljs.core.async.t_cljs$core$async4057(self__.f,self__.blockable,meta4058__$1));
});

cljs.core.async.t_cljs$core$async4057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4059){
var self__ = this;
var _4059__$1 = this;
return self__.meta4058;
});

cljs.core.async.t_cljs$core$async4057.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async4057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async4057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta4058","meta4058",-283112938,null)], null);
});

cljs.core.async.t_cljs$core$async4057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4057";

cljs.core.async.t_cljs$core$async4057.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4057");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4057.
 */
cljs.core.async.__GT_t_cljs$core$async4057 = (function cljs$core$async$__GT_t_cljs$core$async4057(f__$1,blockable__$1,meta4058){
return (new cljs.core.async.t_cljs$core$async4057(f__$1,blockable__$1,meta4058));
});

}

return (new cljs.core.async.t_cljs$core$async4057(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__4063 = arguments.length;
switch (G__4063) {
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
var G__4066 = arguments.length;
switch (G__4066) {
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
var G__4069 = arguments.length;
switch (G__4069) {
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
var val_4071 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_4071);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_4071,ret){
return (function (){
return fn1.call(null,val_4071);
});})(val_4071,ret))
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
var G__4073 = arguments.length;
switch (G__4073) {
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
var n__4374__auto___4075 = n;
var x_4076 = (0);
while(true){
if((x_4076 < n__4374__auto___4075)){
(a[x_4076] = (0));

var G__4077 = (x_4076 + (1));
x_4076 = G__4077;
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

var G__4078 = (i + (1));
i = G__4078;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async4079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4079 = (function (flag,meta4080){
this.flag = flag;
this.meta4080 = meta4080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_4081,meta4080__$1){
var self__ = this;
var _4081__$1 = this;
return (new cljs.core.async.t_cljs$core$async4079(self__.flag,meta4080__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async4079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_4081){
var self__ = this;
var _4081__$1 = this;
return self__.meta4080;
});})(flag))
;

cljs.core.async.t_cljs$core$async4079.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async4079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4079.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta4080","meta4080",-1032224280,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async4079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4079";

cljs.core.async.t_cljs$core$async4079.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4079");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4079.
 */
cljs.core.async.__GT_t_cljs$core$async4079 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async4079(flag__$1,meta4080){
return (new cljs.core.async.t_cljs$core$async4079(flag__$1,meta4080));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async4079(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async4082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4082 = (function (flag,cb,meta4083){
this.flag = flag;
this.cb = cb;
this.meta4083 = meta4083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4084,meta4083__$1){
var self__ = this;
var _4084__$1 = this;
return (new cljs.core.async.t_cljs$core$async4082(self__.flag,self__.cb,meta4083__$1));
});

cljs.core.async.t_cljs$core$async4082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4084){
var self__ = this;
var _4084__$1 = this;
return self__.meta4083;
});

cljs.core.async.t_cljs$core$async4082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async4082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async4082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta4083","meta4083",-1259348588,null)], null);
});

cljs.core.async.t_cljs$core$async4082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4082";

cljs.core.async.t_cljs$core$async4082.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4082");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4082.
 */
cljs.core.async.__GT_t_cljs$core$async4082 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async4082(flag__$1,cb__$1,meta4083){
return (new cljs.core.async.t_cljs$core$async4082(flag__$1,cb__$1,meta4083));
});

}

return (new cljs.core.async.t_cljs$core$async4082(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__4085_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4085_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4086_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4086_SHARP_,port], null));
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
var G__4087 = (i + (1));
i = G__4087;
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
var len__4497__auto___4093 = arguments.length;
var i__4498__auto___4094 = (0);
while(true){
if((i__4498__auto___4094 < len__4497__auto___4093)){
args__4500__auto__.push((arguments[i__4498__auto___4094]));

var G__4095 = (i__4498__auto___4094 + (1));
i__4498__auto___4094 = G__4095;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__4090){
var map__4091 = p__4090;
var map__4091__$1 = ((((!((map__4091 == null)))?(((((map__4091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4091):map__4091);
var opts = map__4091__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq4088){
var G__4089 = cljs.core.first.call(null,seq4088);
var seq4088__$1 = cljs.core.next.call(null,seq4088);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4089,seq4088__$1);
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
var G__4097 = arguments.length;
switch (G__4097) {
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
var c__2146__auto___4143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___4143){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___4143){
return (function (state_4121){
var state_val_4122 = (state_4121[(1)]);
if((state_val_4122 === (7))){
var inst_4117 = (state_4121[(2)]);
var state_4121__$1 = state_4121;
var statearr_4123_4144 = state_4121__$1;
(statearr_4123_4144[(2)] = inst_4117);

(statearr_4123_4144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4122 === (1))){
var state_4121__$1 = state_4121;
var statearr_4124_4145 = state_4121__$1;
(statearr_4124_4145[(2)] = null);

(statearr_4124_4145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4122 === (4))){
var inst_4100 = (state_4121[(7)]);
var inst_4100__$1 = (state_4121[(2)]);
var inst_4101 = (inst_4100__$1 == null);
var state_4121__$1 = (function (){var statearr_4125 = state_4121;
(statearr_4125[(7)] = inst_4100__$1);

return statearr_4125;
})();
if(cljs.core.truth_(inst_4101)){
var statearr_4126_4146 = state_4121__$1;
(statearr_4126_4146[(1)] = (5));

} else {
var statearr_4127_4147 = state_4121__$1;
(statearr_4127_4147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4122 === (13))){
var state_4121__$1 = state_4121;
var statearr_4128_4148 = state_4121__$1;
(statearr_4128_4148[(2)] = null);

(statearr_4128_4148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4122 === (6))){
var inst_4100 = (state_4121[(7)]);
var state_4121__$1 = state_4121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4121__$1,(11),to,inst_4100);
} else {
if((state_val_4122 === (3))){
var inst_4119 = (state_4121[(2)]);
var state_4121__$1 = state_4121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4121__$1,inst_4119);
} else {
if((state_val_4122 === (12))){
var state_4121__$1 = state_4121;
var statearr_4129_4149 = state_4121__$1;
(statearr_4129_4149[(2)] = null);

(statearr_4129_4149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4122 === (2))){
var state_4121__$1 = state_4121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4121__$1,(4),from);
} else {
if((state_val_4122 === (11))){
var inst_4110 = (state_4121[(2)]);
var state_4121__$1 = state_4121;
if(cljs.core.truth_(inst_4110)){
var statearr_4130_4150 = state_4121__$1;
(statearr_4130_4150[(1)] = (12));

} else {
var statearr_4131_4151 = state_4121__$1;
(statearr_4131_4151[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4122 === (9))){
var state_4121__$1 = state_4121;
var statearr_4132_4152 = state_4121__$1;
(statearr_4132_4152[(2)] = null);

(statearr_4132_4152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4122 === (5))){
var state_4121__$1 = state_4121;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4133_4153 = state_4121__$1;
(statearr_4133_4153[(1)] = (8));

} else {
var statearr_4134_4154 = state_4121__$1;
(statearr_4134_4154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4122 === (14))){
var inst_4115 = (state_4121[(2)]);
var state_4121__$1 = state_4121;
var statearr_4135_4155 = state_4121__$1;
(statearr_4135_4155[(2)] = inst_4115);

(statearr_4135_4155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4122 === (10))){
var inst_4107 = (state_4121[(2)]);
var state_4121__$1 = state_4121;
var statearr_4136_4156 = state_4121__$1;
(statearr_4136_4156[(2)] = inst_4107);

(statearr_4136_4156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4122 === (8))){
var inst_4104 = cljs.core.async.close_BANG_.call(null,to);
var state_4121__$1 = state_4121;
var statearr_4137_4157 = state_4121__$1;
(statearr_4137_4157[(2)] = inst_4104);

(statearr_4137_4157[(1)] = (10));


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
});})(c__2146__auto___4143))
;
return ((function (switch__1991__auto__,c__2146__auto___4143){
return (function() {
var cljs$core$async$state_machine__1992__auto__ = null;
var cljs$core$async$state_machine__1992__auto____0 = (function (){
var statearr_4138 = [null,null,null,null,null,null,null,null];
(statearr_4138[(0)] = cljs$core$async$state_machine__1992__auto__);

(statearr_4138[(1)] = (1));

return statearr_4138;
});
var cljs$core$async$state_machine__1992__auto____1 = (function (state_4121){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e4139){if((e4139 instanceof Object)){
var ex__1995__auto__ = e4139;
var statearr_4140_4158 = state_4121;
(statearr_4140_4158[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4159 = state_4121;
state_4121 = G__4159;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$state_machine__1992__auto__ = function(state_4121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1992__auto____1.call(this,state_4121);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1992__auto____0;
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1992__auto____1;
return cljs$core$async$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___4143))
})();
var state__2148__auto__ = (function (){var statearr_4141 = f__2147__auto__.call(null);
(statearr_4141[(6)] = c__2146__auto___4143);

return statearr_4141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___4143))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__4160){
var vec__4161 = p__4160;
var v = cljs.core.nth.call(null,vec__4161,(0),null);
var p = cljs.core.nth.call(null,vec__4161,(1),null);
var job = vec__4161;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2146__auto___4332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___4332,res,vec__4161,v,p,job,jobs,results){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___4332,res,vec__4161,v,p,job,jobs,results){
return (function (state_4168){
var state_val_4169 = (state_4168[(1)]);
if((state_val_4169 === (1))){
var state_4168__$1 = state_4168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4168__$1,(2),res,v);
} else {
if((state_val_4169 === (2))){
var inst_4165 = (state_4168[(2)]);
var inst_4166 = cljs.core.async.close_BANG_.call(null,res);
var state_4168__$1 = (function (){var statearr_4170 = state_4168;
(statearr_4170[(7)] = inst_4165);

return statearr_4170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4168__$1,inst_4166);
} else {
return null;
}
}
});})(c__2146__auto___4332,res,vec__4161,v,p,job,jobs,results))
;
return ((function (switch__1991__auto__,c__2146__auto___4332,res,vec__4161,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0 = (function (){
var statearr_4171 = [null,null,null,null,null,null,null,null];
(statearr_4171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__);

(statearr_4171[(1)] = (1));

return statearr_4171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1 = (function (state_4168){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e4172){if((e4172 instanceof Object)){
var ex__1995__auto__ = e4172;
var statearr_4173_4333 = state_4168;
(statearr_4173_4333[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4334 = state_4168;
state_4168 = G__4334;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__ = function(state_4168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1.call(this,state_4168);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___4332,res,vec__4161,v,p,job,jobs,results))
})();
var state__2148__auto__ = (function (){var statearr_4174 = f__2147__auto__.call(null);
(statearr_4174[(6)] = c__2146__auto___4332);

return statearr_4174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___4332,res,vec__4161,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4175){
var vec__4176 = p__4175;
var v = cljs.core.nth.call(null,vec__4176,(0),null);
var p = cljs.core.nth.call(null,vec__4176,(1),null);
var job = vec__4176;
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
var n__4374__auto___4335 = n;
var __4336 = (0);
while(true){
if((__4336 < n__4374__auto___4335)){
var G__4179_4337 = type;
var G__4179_4338__$1 = (((G__4179_4337 instanceof cljs.core.Keyword))?G__4179_4337.fqn:null);
switch (G__4179_4338__$1) {
case "compute":
var c__2146__auto___4340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4336,c__2146__auto___4340,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (__4336,c__2146__auto___4340,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async){
return (function (state_4192){
var state_val_4193 = (state_4192[(1)]);
if((state_val_4193 === (1))){
var state_4192__$1 = state_4192;
var statearr_4194_4341 = state_4192__$1;
(statearr_4194_4341[(2)] = null);

(statearr_4194_4341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4193 === (2))){
var state_4192__$1 = state_4192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4192__$1,(4),jobs);
} else {
if((state_val_4193 === (3))){
var inst_4190 = (state_4192[(2)]);
var state_4192__$1 = state_4192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4192__$1,inst_4190);
} else {
if((state_val_4193 === (4))){
var inst_4182 = (state_4192[(2)]);
var inst_4183 = process.call(null,inst_4182);
var state_4192__$1 = state_4192;
if(cljs.core.truth_(inst_4183)){
var statearr_4195_4342 = state_4192__$1;
(statearr_4195_4342[(1)] = (5));

} else {
var statearr_4196_4343 = state_4192__$1;
(statearr_4196_4343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4193 === (5))){
var state_4192__$1 = state_4192;
var statearr_4197_4344 = state_4192__$1;
(statearr_4197_4344[(2)] = null);

(statearr_4197_4344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4193 === (6))){
var state_4192__$1 = state_4192;
var statearr_4198_4345 = state_4192__$1;
(statearr_4198_4345[(2)] = null);

(statearr_4198_4345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4193 === (7))){
var inst_4188 = (state_4192[(2)]);
var state_4192__$1 = state_4192;
var statearr_4199_4346 = state_4192__$1;
(statearr_4199_4346[(2)] = inst_4188);

(statearr_4199_4346[(1)] = (3));


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
});})(__4336,c__2146__auto___4340,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async))
;
return ((function (__4336,switch__1991__auto__,c__2146__auto___4340,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0 = (function (){
var statearr_4200 = [null,null,null,null,null,null,null];
(statearr_4200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__);

(statearr_4200[(1)] = (1));

return statearr_4200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1 = (function (state_4192){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e4201){if((e4201 instanceof Object)){
var ex__1995__auto__ = e4201;
var statearr_4202_4347 = state_4192;
(statearr_4202_4347[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4348 = state_4192;
state_4192 = G__4348;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__ = function(state_4192){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1.call(this,state_4192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__;
})()
;})(__4336,switch__1991__auto__,c__2146__auto___4340,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async))
})();
var state__2148__auto__ = (function (){var statearr_4203 = f__2147__auto__.call(null);
(statearr_4203[(6)] = c__2146__auto___4340);

return statearr_4203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(__4336,c__2146__auto___4340,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async))
);


break;
case "async":
var c__2146__auto___4349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4336,c__2146__auto___4349,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (__4336,c__2146__auto___4349,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async){
return (function (state_4216){
var state_val_4217 = (state_4216[(1)]);
if((state_val_4217 === (1))){
var state_4216__$1 = state_4216;
var statearr_4218_4350 = state_4216__$1;
(statearr_4218_4350[(2)] = null);

(statearr_4218_4350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4217 === (2))){
var state_4216__$1 = state_4216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4216__$1,(4),jobs);
} else {
if((state_val_4217 === (3))){
var inst_4214 = (state_4216[(2)]);
var state_4216__$1 = state_4216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4216__$1,inst_4214);
} else {
if((state_val_4217 === (4))){
var inst_4206 = (state_4216[(2)]);
var inst_4207 = async.call(null,inst_4206);
var state_4216__$1 = state_4216;
if(cljs.core.truth_(inst_4207)){
var statearr_4219_4351 = state_4216__$1;
(statearr_4219_4351[(1)] = (5));

} else {
var statearr_4220_4352 = state_4216__$1;
(statearr_4220_4352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4217 === (5))){
var state_4216__$1 = state_4216;
var statearr_4221_4353 = state_4216__$1;
(statearr_4221_4353[(2)] = null);

(statearr_4221_4353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4217 === (6))){
var state_4216__$1 = state_4216;
var statearr_4222_4354 = state_4216__$1;
(statearr_4222_4354[(2)] = null);

(statearr_4222_4354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4217 === (7))){
var inst_4212 = (state_4216[(2)]);
var state_4216__$1 = state_4216;
var statearr_4223_4355 = state_4216__$1;
(statearr_4223_4355[(2)] = inst_4212);

(statearr_4223_4355[(1)] = (3));


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
});})(__4336,c__2146__auto___4349,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async))
;
return ((function (__4336,switch__1991__auto__,c__2146__auto___4349,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0 = (function (){
var statearr_4224 = [null,null,null,null,null,null,null];
(statearr_4224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__);

(statearr_4224[(1)] = (1));

return statearr_4224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1 = (function (state_4216){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e4225){if((e4225 instanceof Object)){
var ex__1995__auto__ = e4225;
var statearr_4226_4356 = state_4216;
(statearr_4226_4356[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4357 = state_4216;
state_4216 = G__4357;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__ = function(state_4216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1.call(this,state_4216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__;
})()
;})(__4336,switch__1991__auto__,c__2146__auto___4349,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async))
})();
var state__2148__auto__ = (function (){var statearr_4227 = f__2147__auto__.call(null);
(statearr_4227[(6)] = c__2146__auto___4349);

return statearr_4227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(__4336,c__2146__auto___4349,G__4179_4337,G__4179_4338__$1,n__4374__auto___4335,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4179_4338__$1)].join('')));

}

var G__4358 = (__4336 + (1));
__4336 = G__4358;
continue;
} else {
}
break;
}

var c__2146__auto___4359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___4359,jobs,results,process,async){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___4359,jobs,results,process,async){
return (function (state_4249){
var state_val_4250 = (state_4249[(1)]);
if((state_val_4250 === (1))){
var state_4249__$1 = state_4249;
var statearr_4251_4360 = state_4249__$1;
(statearr_4251_4360[(2)] = null);

(statearr_4251_4360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4250 === (2))){
var state_4249__$1 = state_4249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4249__$1,(4),from);
} else {
if((state_val_4250 === (3))){
var inst_4247 = (state_4249[(2)]);
var state_4249__$1 = state_4249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4249__$1,inst_4247);
} else {
if((state_val_4250 === (4))){
var inst_4230 = (state_4249[(7)]);
var inst_4230__$1 = (state_4249[(2)]);
var inst_4231 = (inst_4230__$1 == null);
var state_4249__$1 = (function (){var statearr_4252 = state_4249;
(statearr_4252[(7)] = inst_4230__$1);

return statearr_4252;
})();
if(cljs.core.truth_(inst_4231)){
var statearr_4253_4361 = state_4249__$1;
(statearr_4253_4361[(1)] = (5));

} else {
var statearr_4254_4362 = state_4249__$1;
(statearr_4254_4362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4250 === (5))){
var inst_4233 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4249__$1 = state_4249;
var statearr_4255_4363 = state_4249__$1;
(statearr_4255_4363[(2)] = inst_4233);

(statearr_4255_4363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4250 === (6))){
var inst_4230 = (state_4249[(7)]);
var inst_4235 = (state_4249[(8)]);
var inst_4235__$1 = cljs.core.async.chan.call(null,(1));
var inst_4236 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4237 = [inst_4230,inst_4235__$1];
var inst_4238 = (new cljs.core.PersistentVector(null,2,(5),inst_4236,inst_4237,null));
var state_4249__$1 = (function (){var statearr_4256 = state_4249;
(statearr_4256[(8)] = inst_4235__$1);

return statearr_4256;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4249__$1,(8),jobs,inst_4238);
} else {
if((state_val_4250 === (7))){
var inst_4245 = (state_4249[(2)]);
var state_4249__$1 = state_4249;
var statearr_4257_4364 = state_4249__$1;
(statearr_4257_4364[(2)] = inst_4245);

(statearr_4257_4364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4250 === (8))){
var inst_4235 = (state_4249[(8)]);
var inst_4240 = (state_4249[(2)]);
var state_4249__$1 = (function (){var statearr_4258 = state_4249;
(statearr_4258[(9)] = inst_4240);

return statearr_4258;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4249__$1,(9),results,inst_4235);
} else {
if((state_val_4250 === (9))){
var inst_4242 = (state_4249[(2)]);
var state_4249__$1 = (function (){var statearr_4259 = state_4249;
(statearr_4259[(10)] = inst_4242);

return statearr_4259;
})();
var statearr_4260_4365 = state_4249__$1;
(statearr_4260_4365[(2)] = null);

(statearr_4260_4365[(1)] = (2));


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
});})(c__2146__auto___4359,jobs,results,process,async))
;
return ((function (switch__1991__auto__,c__2146__auto___4359,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0 = (function (){
var statearr_4261 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__);

(statearr_4261[(1)] = (1));

return statearr_4261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1 = (function (state_4249){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e4262){if((e4262 instanceof Object)){
var ex__1995__auto__ = e4262;
var statearr_4263_4366 = state_4249;
(statearr_4263_4366[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4367 = state_4249;
state_4249 = G__4367;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__ = function(state_4249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1.call(this,state_4249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___4359,jobs,results,process,async))
})();
var state__2148__auto__ = (function (){var statearr_4264 = f__2147__auto__.call(null);
(statearr_4264[(6)] = c__2146__auto___4359);

return statearr_4264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___4359,jobs,results,process,async))
);


var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__,jobs,results,process,async){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__,jobs,results,process,async){
return (function (state_4302){
var state_val_4303 = (state_4302[(1)]);
if((state_val_4303 === (7))){
var inst_4298 = (state_4302[(2)]);
var state_4302__$1 = state_4302;
var statearr_4304_4368 = state_4302__$1;
(statearr_4304_4368[(2)] = inst_4298);

(statearr_4304_4368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (20))){
var state_4302__$1 = state_4302;
var statearr_4305_4369 = state_4302__$1;
(statearr_4305_4369[(2)] = null);

(statearr_4305_4369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (1))){
var state_4302__$1 = state_4302;
var statearr_4306_4370 = state_4302__$1;
(statearr_4306_4370[(2)] = null);

(statearr_4306_4370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (4))){
var inst_4267 = (state_4302[(7)]);
var inst_4267__$1 = (state_4302[(2)]);
var inst_4268 = (inst_4267__$1 == null);
var state_4302__$1 = (function (){var statearr_4307 = state_4302;
(statearr_4307[(7)] = inst_4267__$1);

return statearr_4307;
})();
if(cljs.core.truth_(inst_4268)){
var statearr_4308_4371 = state_4302__$1;
(statearr_4308_4371[(1)] = (5));

} else {
var statearr_4309_4372 = state_4302__$1;
(statearr_4309_4372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (15))){
var inst_4280 = (state_4302[(8)]);
var state_4302__$1 = state_4302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4302__$1,(18),to,inst_4280);
} else {
if((state_val_4303 === (21))){
var inst_4293 = (state_4302[(2)]);
var state_4302__$1 = state_4302;
var statearr_4310_4373 = state_4302__$1;
(statearr_4310_4373[(2)] = inst_4293);

(statearr_4310_4373[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (13))){
var inst_4295 = (state_4302[(2)]);
var state_4302__$1 = (function (){var statearr_4311 = state_4302;
(statearr_4311[(9)] = inst_4295);

return statearr_4311;
})();
var statearr_4312_4374 = state_4302__$1;
(statearr_4312_4374[(2)] = null);

(statearr_4312_4374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (6))){
var inst_4267 = (state_4302[(7)]);
var state_4302__$1 = state_4302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4302__$1,(11),inst_4267);
} else {
if((state_val_4303 === (17))){
var inst_4288 = (state_4302[(2)]);
var state_4302__$1 = state_4302;
if(cljs.core.truth_(inst_4288)){
var statearr_4313_4375 = state_4302__$1;
(statearr_4313_4375[(1)] = (19));

} else {
var statearr_4314_4376 = state_4302__$1;
(statearr_4314_4376[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (3))){
var inst_4300 = (state_4302[(2)]);
var state_4302__$1 = state_4302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4302__$1,inst_4300);
} else {
if((state_val_4303 === (12))){
var inst_4277 = (state_4302[(10)]);
var state_4302__$1 = state_4302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4302__$1,(14),inst_4277);
} else {
if((state_val_4303 === (2))){
var state_4302__$1 = state_4302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4302__$1,(4),results);
} else {
if((state_val_4303 === (19))){
var state_4302__$1 = state_4302;
var statearr_4315_4377 = state_4302__$1;
(statearr_4315_4377[(2)] = null);

(statearr_4315_4377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (11))){
var inst_4277 = (state_4302[(2)]);
var state_4302__$1 = (function (){var statearr_4316 = state_4302;
(statearr_4316[(10)] = inst_4277);

return statearr_4316;
})();
var statearr_4317_4378 = state_4302__$1;
(statearr_4317_4378[(2)] = null);

(statearr_4317_4378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (9))){
var state_4302__$1 = state_4302;
var statearr_4318_4379 = state_4302__$1;
(statearr_4318_4379[(2)] = null);

(statearr_4318_4379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (5))){
var state_4302__$1 = state_4302;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4319_4380 = state_4302__$1;
(statearr_4319_4380[(1)] = (8));

} else {
var statearr_4320_4381 = state_4302__$1;
(statearr_4320_4381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (14))){
var inst_4280 = (state_4302[(8)]);
var inst_4282 = (state_4302[(11)]);
var inst_4280__$1 = (state_4302[(2)]);
var inst_4281 = (inst_4280__$1 == null);
var inst_4282__$1 = cljs.core.not.call(null,inst_4281);
var state_4302__$1 = (function (){var statearr_4321 = state_4302;
(statearr_4321[(8)] = inst_4280__$1);

(statearr_4321[(11)] = inst_4282__$1);

return statearr_4321;
})();
if(inst_4282__$1){
var statearr_4322_4382 = state_4302__$1;
(statearr_4322_4382[(1)] = (15));

} else {
var statearr_4323_4383 = state_4302__$1;
(statearr_4323_4383[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (16))){
var inst_4282 = (state_4302[(11)]);
var state_4302__$1 = state_4302;
var statearr_4324_4384 = state_4302__$1;
(statearr_4324_4384[(2)] = inst_4282);

(statearr_4324_4384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (10))){
var inst_4274 = (state_4302[(2)]);
var state_4302__$1 = state_4302;
var statearr_4325_4385 = state_4302__$1;
(statearr_4325_4385[(2)] = inst_4274);

(statearr_4325_4385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (18))){
var inst_4285 = (state_4302[(2)]);
var state_4302__$1 = state_4302;
var statearr_4326_4386 = state_4302__$1;
(statearr_4326_4386[(2)] = inst_4285);

(statearr_4326_4386[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4303 === (8))){
var inst_4271 = cljs.core.async.close_BANG_.call(null,to);
var state_4302__$1 = state_4302;
var statearr_4327_4387 = state_4302__$1;
(statearr_4327_4387[(2)] = inst_4271);

(statearr_4327_4387[(1)] = (10));


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
});})(c__2146__auto__,jobs,results,process,async))
;
return ((function (switch__1991__auto__,c__2146__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0 = (function (){
var statearr_4328 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__);

(statearr_4328[(1)] = (1));

return statearr_4328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1 = (function (state_4302){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e4329){if((e4329 instanceof Object)){
var ex__1995__auto__ = e4329;
var statearr_4330_4388 = state_4302;
(statearr_4330_4388[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4389 = state_4302;
state_4302 = G__4389;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__ = function(state_4302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1.call(this,state_4302);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__,jobs,results,process,async))
})();
var state__2148__auto__ = (function (){var statearr_4331 = f__2147__auto__.call(null);
(statearr_4331[(6)] = c__2146__auto__);

return statearr_4331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__,jobs,results,process,async))
);

return c__2146__auto__;
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
var G__4391 = arguments.length;
switch (G__4391) {
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
var G__4394 = arguments.length;
switch (G__4394) {
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
var G__4397 = arguments.length;
switch (G__4397) {
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
var c__2146__auto___4446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___4446,tc,fc){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___4446,tc,fc){
return (function (state_4423){
var state_val_4424 = (state_4423[(1)]);
if((state_val_4424 === (7))){
var inst_4419 = (state_4423[(2)]);
var state_4423__$1 = state_4423;
var statearr_4425_4447 = state_4423__$1;
(statearr_4425_4447[(2)] = inst_4419);

(statearr_4425_4447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4424 === (1))){
var state_4423__$1 = state_4423;
var statearr_4426_4448 = state_4423__$1;
(statearr_4426_4448[(2)] = null);

(statearr_4426_4448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4424 === (4))){
var inst_4400 = (state_4423[(7)]);
var inst_4400__$1 = (state_4423[(2)]);
var inst_4401 = (inst_4400__$1 == null);
var state_4423__$1 = (function (){var statearr_4427 = state_4423;
(statearr_4427[(7)] = inst_4400__$1);

return statearr_4427;
})();
if(cljs.core.truth_(inst_4401)){
var statearr_4428_4449 = state_4423__$1;
(statearr_4428_4449[(1)] = (5));

} else {
var statearr_4429_4450 = state_4423__$1;
(statearr_4429_4450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4424 === (13))){
var state_4423__$1 = state_4423;
var statearr_4430_4451 = state_4423__$1;
(statearr_4430_4451[(2)] = null);

(statearr_4430_4451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4424 === (6))){
var inst_4400 = (state_4423[(7)]);
var inst_4406 = p.call(null,inst_4400);
var state_4423__$1 = state_4423;
if(cljs.core.truth_(inst_4406)){
var statearr_4431_4452 = state_4423__$1;
(statearr_4431_4452[(1)] = (9));

} else {
var statearr_4432_4453 = state_4423__$1;
(statearr_4432_4453[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4424 === (3))){
var inst_4421 = (state_4423[(2)]);
var state_4423__$1 = state_4423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4423__$1,inst_4421);
} else {
if((state_val_4424 === (12))){
var state_4423__$1 = state_4423;
var statearr_4433_4454 = state_4423__$1;
(statearr_4433_4454[(2)] = null);

(statearr_4433_4454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4424 === (2))){
var state_4423__$1 = state_4423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4423__$1,(4),ch);
} else {
if((state_val_4424 === (11))){
var inst_4400 = (state_4423[(7)]);
var inst_4410 = (state_4423[(2)]);
var state_4423__$1 = state_4423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4423__$1,(8),inst_4410,inst_4400);
} else {
if((state_val_4424 === (9))){
var state_4423__$1 = state_4423;
var statearr_4434_4455 = state_4423__$1;
(statearr_4434_4455[(2)] = tc);

(statearr_4434_4455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4424 === (5))){
var inst_4403 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4404 = cljs.core.async.close_BANG_.call(null,fc);
var state_4423__$1 = (function (){var statearr_4435 = state_4423;
(statearr_4435[(8)] = inst_4403);

return statearr_4435;
})();
var statearr_4436_4456 = state_4423__$1;
(statearr_4436_4456[(2)] = inst_4404);

(statearr_4436_4456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4424 === (14))){
var inst_4417 = (state_4423[(2)]);
var state_4423__$1 = state_4423;
var statearr_4437_4457 = state_4423__$1;
(statearr_4437_4457[(2)] = inst_4417);

(statearr_4437_4457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4424 === (10))){
var state_4423__$1 = state_4423;
var statearr_4438_4458 = state_4423__$1;
(statearr_4438_4458[(2)] = fc);

(statearr_4438_4458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4424 === (8))){
var inst_4412 = (state_4423[(2)]);
var state_4423__$1 = state_4423;
if(cljs.core.truth_(inst_4412)){
var statearr_4439_4459 = state_4423__$1;
(statearr_4439_4459[(1)] = (12));

} else {
var statearr_4440_4460 = state_4423__$1;
(statearr_4440_4460[(1)] = (13));

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
});})(c__2146__auto___4446,tc,fc))
;
return ((function (switch__1991__auto__,c__2146__auto___4446,tc,fc){
return (function() {
var cljs$core$async$state_machine__1992__auto__ = null;
var cljs$core$async$state_machine__1992__auto____0 = (function (){
var statearr_4441 = [null,null,null,null,null,null,null,null,null];
(statearr_4441[(0)] = cljs$core$async$state_machine__1992__auto__);

(statearr_4441[(1)] = (1));

return statearr_4441;
});
var cljs$core$async$state_machine__1992__auto____1 = (function (state_4423){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e4442){if((e4442 instanceof Object)){
var ex__1995__auto__ = e4442;
var statearr_4443_4461 = state_4423;
(statearr_4443_4461[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4462 = state_4423;
state_4423 = G__4462;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$state_machine__1992__auto__ = function(state_4423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1992__auto____1.call(this,state_4423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1992__auto____0;
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1992__auto____1;
return cljs$core$async$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___4446,tc,fc))
})();
var state__2148__auto__ = (function (){var statearr_4444 = f__2147__auto__.call(null);
(statearr_4444[(6)] = c__2146__auto___4446);

return statearr_4444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___4446,tc,fc))
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
var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__){
return (function (state_4483){
var state_val_4484 = (state_4483[(1)]);
if((state_val_4484 === (7))){
var inst_4479 = (state_4483[(2)]);
var state_4483__$1 = state_4483;
var statearr_4485_4503 = state_4483__$1;
(statearr_4485_4503[(2)] = inst_4479);

(statearr_4485_4503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4484 === (1))){
var inst_4463 = init;
var state_4483__$1 = (function (){var statearr_4486 = state_4483;
(statearr_4486[(7)] = inst_4463);

return statearr_4486;
})();
var statearr_4487_4504 = state_4483__$1;
(statearr_4487_4504[(2)] = null);

(statearr_4487_4504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4484 === (4))){
var inst_4466 = (state_4483[(8)]);
var inst_4466__$1 = (state_4483[(2)]);
var inst_4467 = (inst_4466__$1 == null);
var state_4483__$1 = (function (){var statearr_4488 = state_4483;
(statearr_4488[(8)] = inst_4466__$1);

return statearr_4488;
})();
if(cljs.core.truth_(inst_4467)){
var statearr_4489_4505 = state_4483__$1;
(statearr_4489_4505[(1)] = (5));

} else {
var statearr_4490_4506 = state_4483__$1;
(statearr_4490_4506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4484 === (6))){
var inst_4466 = (state_4483[(8)]);
var inst_4463 = (state_4483[(7)]);
var inst_4470 = (state_4483[(9)]);
var inst_4470__$1 = f.call(null,inst_4463,inst_4466);
var inst_4471 = cljs.core.reduced_QMARK_.call(null,inst_4470__$1);
var state_4483__$1 = (function (){var statearr_4491 = state_4483;
(statearr_4491[(9)] = inst_4470__$1);

return statearr_4491;
})();
if(inst_4471){
var statearr_4492_4507 = state_4483__$1;
(statearr_4492_4507[(1)] = (8));

} else {
var statearr_4493_4508 = state_4483__$1;
(statearr_4493_4508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4484 === (3))){
var inst_4481 = (state_4483[(2)]);
var state_4483__$1 = state_4483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4483__$1,inst_4481);
} else {
if((state_val_4484 === (2))){
var state_4483__$1 = state_4483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4483__$1,(4),ch);
} else {
if((state_val_4484 === (9))){
var inst_4470 = (state_4483[(9)]);
var inst_4463 = inst_4470;
var state_4483__$1 = (function (){var statearr_4494 = state_4483;
(statearr_4494[(7)] = inst_4463);

return statearr_4494;
})();
var statearr_4495_4509 = state_4483__$1;
(statearr_4495_4509[(2)] = null);

(statearr_4495_4509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4484 === (5))){
var inst_4463 = (state_4483[(7)]);
var state_4483__$1 = state_4483;
var statearr_4496_4510 = state_4483__$1;
(statearr_4496_4510[(2)] = inst_4463);

(statearr_4496_4510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4484 === (10))){
var inst_4477 = (state_4483[(2)]);
var state_4483__$1 = state_4483;
var statearr_4497_4511 = state_4483__$1;
(statearr_4497_4511[(2)] = inst_4477);

(statearr_4497_4511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4484 === (8))){
var inst_4470 = (state_4483[(9)]);
var inst_4473 = cljs.core.deref.call(null,inst_4470);
var state_4483__$1 = state_4483;
var statearr_4498_4512 = state_4483__$1;
(statearr_4498_4512[(2)] = inst_4473);

(statearr_4498_4512[(1)] = (10));


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
});})(c__2146__auto__))
;
return ((function (switch__1991__auto__,c__2146__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__1992__auto__ = null;
var cljs$core$async$reduce_$_state_machine__1992__auto____0 = (function (){
var statearr_4499 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4499[(0)] = cljs$core$async$reduce_$_state_machine__1992__auto__);

(statearr_4499[(1)] = (1));

return statearr_4499;
});
var cljs$core$async$reduce_$_state_machine__1992__auto____1 = (function (state_4483){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e4500){if((e4500 instanceof Object)){
var ex__1995__auto__ = e4500;
var statearr_4501_4513 = state_4483;
(statearr_4501_4513[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4514 = state_4483;
state_4483 = G__4514;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__1992__auto__ = function(state_4483){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__1992__auto____1.call(this,state_4483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__1992__auto____0;
cljs$core$async$reduce_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__1992__auto____1;
return cljs$core$async$reduce_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__))
})();
var state__2148__auto__ = (function (){var statearr_4502 = f__2147__auto__.call(null);
(statearr_4502[(6)] = c__2146__auto__);

return statearr_4502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__))
);

return c__2146__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__,f__$1){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__,f__$1){
return (function (state_4520){
var state_val_4521 = (state_4520[(1)]);
if((state_val_4521 === (1))){
var inst_4515 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_4520__$1 = state_4520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4520__$1,(2),inst_4515);
} else {
if((state_val_4521 === (2))){
var inst_4517 = (state_4520[(2)]);
var inst_4518 = f__$1.call(null,inst_4517);
var state_4520__$1 = state_4520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4520__$1,inst_4518);
} else {
return null;
}
}
});})(c__2146__auto__,f__$1))
;
return ((function (switch__1991__auto__,c__2146__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__1992__auto__ = null;
var cljs$core$async$transduce_$_state_machine__1992__auto____0 = (function (){
var statearr_4522 = [null,null,null,null,null,null,null];
(statearr_4522[(0)] = cljs$core$async$transduce_$_state_machine__1992__auto__);

(statearr_4522[(1)] = (1));

return statearr_4522;
});
var cljs$core$async$transduce_$_state_machine__1992__auto____1 = (function (state_4520){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e4523){if((e4523 instanceof Object)){
var ex__1995__auto__ = e4523;
var statearr_4524_4526 = state_4520;
(statearr_4524_4526[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4527 = state_4520;
state_4520 = G__4527;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__1992__auto__ = function(state_4520){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__1992__auto____1.call(this,state_4520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__1992__auto____0;
cljs$core$async$transduce_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__1992__auto____1;
return cljs$core$async$transduce_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__,f__$1))
})();
var state__2148__auto__ = (function (){var statearr_4525 = f__2147__auto__.call(null);
(statearr_4525[(6)] = c__2146__auto__);

return statearr_4525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__,f__$1))
);

return c__2146__auto__;
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
var G__4529 = arguments.length;
switch (G__4529) {
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
var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__){
return (function (state_4554){
var state_val_4555 = (state_4554[(1)]);
if((state_val_4555 === (7))){
var inst_4536 = (state_4554[(2)]);
var state_4554__$1 = state_4554;
var statearr_4556_4577 = state_4554__$1;
(statearr_4556_4577[(2)] = inst_4536);

(statearr_4556_4577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4555 === (1))){
var inst_4530 = cljs.core.seq.call(null,coll);
var inst_4531 = inst_4530;
var state_4554__$1 = (function (){var statearr_4557 = state_4554;
(statearr_4557[(7)] = inst_4531);

return statearr_4557;
})();
var statearr_4558_4578 = state_4554__$1;
(statearr_4558_4578[(2)] = null);

(statearr_4558_4578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4555 === (4))){
var inst_4531 = (state_4554[(7)]);
var inst_4534 = cljs.core.first.call(null,inst_4531);
var state_4554__$1 = state_4554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4554__$1,(7),ch,inst_4534);
} else {
if((state_val_4555 === (13))){
var inst_4548 = (state_4554[(2)]);
var state_4554__$1 = state_4554;
var statearr_4559_4579 = state_4554__$1;
(statearr_4559_4579[(2)] = inst_4548);

(statearr_4559_4579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4555 === (6))){
var inst_4539 = (state_4554[(2)]);
var state_4554__$1 = state_4554;
if(cljs.core.truth_(inst_4539)){
var statearr_4560_4580 = state_4554__$1;
(statearr_4560_4580[(1)] = (8));

} else {
var statearr_4561_4581 = state_4554__$1;
(statearr_4561_4581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4555 === (3))){
var inst_4552 = (state_4554[(2)]);
var state_4554__$1 = state_4554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4554__$1,inst_4552);
} else {
if((state_val_4555 === (12))){
var state_4554__$1 = state_4554;
var statearr_4562_4582 = state_4554__$1;
(statearr_4562_4582[(2)] = null);

(statearr_4562_4582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4555 === (2))){
var inst_4531 = (state_4554[(7)]);
var state_4554__$1 = state_4554;
if(cljs.core.truth_(inst_4531)){
var statearr_4563_4583 = state_4554__$1;
(statearr_4563_4583[(1)] = (4));

} else {
var statearr_4564_4584 = state_4554__$1;
(statearr_4564_4584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4555 === (11))){
var inst_4545 = cljs.core.async.close_BANG_.call(null,ch);
var state_4554__$1 = state_4554;
var statearr_4565_4585 = state_4554__$1;
(statearr_4565_4585[(2)] = inst_4545);

(statearr_4565_4585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4555 === (9))){
var state_4554__$1 = state_4554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4566_4586 = state_4554__$1;
(statearr_4566_4586[(1)] = (11));

} else {
var statearr_4567_4587 = state_4554__$1;
(statearr_4567_4587[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4555 === (5))){
var inst_4531 = (state_4554[(7)]);
var state_4554__$1 = state_4554;
var statearr_4568_4588 = state_4554__$1;
(statearr_4568_4588[(2)] = inst_4531);

(statearr_4568_4588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4555 === (10))){
var inst_4550 = (state_4554[(2)]);
var state_4554__$1 = state_4554;
var statearr_4569_4589 = state_4554__$1;
(statearr_4569_4589[(2)] = inst_4550);

(statearr_4569_4589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4555 === (8))){
var inst_4531 = (state_4554[(7)]);
var inst_4541 = cljs.core.next.call(null,inst_4531);
var inst_4531__$1 = inst_4541;
var state_4554__$1 = (function (){var statearr_4570 = state_4554;
(statearr_4570[(7)] = inst_4531__$1);

return statearr_4570;
})();
var statearr_4571_4590 = state_4554__$1;
(statearr_4571_4590[(2)] = null);

(statearr_4571_4590[(1)] = (2));


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
});})(c__2146__auto__))
;
return ((function (switch__1991__auto__,c__2146__auto__){
return (function() {
var cljs$core$async$state_machine__1992__auto__ = null;
var cljs$core$async$state_machine__1992__auto____0 = (function (){
var statearr_4572 = [null,null,null,null,null,null,null,null];
(statearr_4572[(0)] = cljs$core$async$state_machine__1992__auto__);

(statearr_4572[(1)] = (1));

return statearr_4572;
});
var cljs$core$async$state_machine__1992__auto____1 = (function (state_4554){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e4573){if((e4573 instanceof Object)){
var ex__1995__auto__ = e4573;
var statearr_4574_4591 = state_4554;
(statearr_4574_4591[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4592 = state_4554;
state_4554 = G__4592;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$state_machine__1992__auto__ = function(state_4554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1992__auto____1.call(this,state_4554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1992__auto____0;
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1992__auto____1;
return cljs$core$async$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__))
})();
var state__2148__auto__ = (function (){var statearr_4575 = f__2147__auto__.call(null);
(statearr_4575[(6)] = c__2146__auto__);

return statearr_4575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__))
);

return c__2146__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async4593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4593 = (function (ch,cs,meta4594){
this.ch = ch;
this.cs = cs;
this.meta4594 = meta4594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4595,meta4594__$1){
var self__ = this;
var _4595__$1 = this;
return (new cljs.core.async.t_cljs$core$async4593(self__.ch,self__.cs,meta4594__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async4593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4595){
var self__ = this;
var _4595__$1 = this;
return self__.meta4594;
});})(cs))
;

cljs.core.async.t_cljs$core$async4593.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async4593.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4593.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4593.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4593.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4593.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4594","meta4594",-1556862191,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async4593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4593";

cljs.core.async.t_cljs$core$async4593.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4593");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4593.
 */
cljs.core.async.__GT_t_cljs$core$async4593 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async4593(ch__$1,cs__$1,meta4594){
return (new cljs.core.async.t_cljs$core$async4593(ch__$1,cs__$1,meta4594));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async4593(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__2146__auto___4815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___4815,cs,m,dchan,dctr,done){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___4815,cs,m,dchan,dctr,done){
return (function (state_4730){
var state_val_4731 = (state_4730[(1)]);
if((state_val_4731 === (7))){
var inst_4726 = (state_4730[(2)]);
var state_4730__$1 = state_4730;
var statearr_4732_4816 = state_4730__$1;
(statearr_4732_4816[(2)] = inst_4726);

(statearr_4732_4816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (20))){
var inst_4629 = (state_4730[(7)]);
var inst_4641 = cljs.core.first.call(null,inst_4629);
var inst_4642 = cljs.core.nth.call(null,inst_4641,(0),null);
var inst_4643 = cljs.core.nth.call(null,inst_4641,(1),null);
var state_4730__$1 = (function (){var statearr_4733 = state_4730;
(statearr_4733[(8)] = inst_4642);

return statearr_4733;
})();
if(cljs.core.truth_(inst_4643)){
var statearr_4734_4817 = state_4730__$1;
(statearr_4734_4817[(1)] = (22));

} else {
var statearr_4735_4818 = state_4730__$1;
(statearr_4735_4818[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (27))){
var inst_4671 = (state_4730[(9)]);
var inst_4678 = (state_4730[(10)]);
var inst_4598 = (state_4730[(11)]);
var inst_4673 = (state_4730[(12)]);
var inst_4678__$1 = cljs.core._nth.call(null,inst_4671,inst_4673);
var inst_4679 = cljs.core.async.put_BANG_.call(null,inst_4678__$1,inst_4598,done);
var state_4730__$1 = (function (){var statearr_4736 = state_4730;
(statearr_4736[(10)] = inst_4678__$1);

return statearr_4736;
})();
if(cljs.core.truth_(inst_4679)){
var statearr_4737_4819 = state_4730__$1;
(statearr_4737_4819[(1)] = (30));

} else {
var statearr_4738_4820 = state_4730__$1;
(statearr_4738_4820[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (1))){
var state_4730__$1 = state_4730;
var statearr_4739_4821 = state_4730__$1;
(statearr_4739_4821[(2)] = null);

(statearr_4739_4821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (24))){
var inst_4629 = (state_4730[(7)]);
var inst_4648 = (state_4730[(2)]);
var inst_4649 = cljs.core.next.call(null,inst_4629);
var inst_4607 = inst_4649;
var inst_4608 = null;
var inst_4609 = (0);
var inst_4610 = (0);
var state_4730__$1 = (function (){var statearr_4740 = state_4730;
(statearr_4740[(13)] = inst_4648);

(statearr_4740[(14)] = inst_4607);

(statearr_4740[(15)] = inst_4610);

(statearr_4740[(16)] = inst_4608);

(statearr_4740[(17)] = inst_4609);

return statearr_4740;
})();
var statearr_4741_4822 = state_4730__$1;
(statearr_4741_4822[(2)] = null);

(statearr_4741_4822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (39))){
var state_4730__$1 = state_4730;
var statearr_4745_4823 = state_4730__$1;
(statearr_4745_4823[(2)] = null);

(statearr_4745_4823[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (4))){
var inst_4598 = (state_4730[(11)]);
var inst_4598__$1 = (state_4730[(2)]);
var inst_4599 = (inst_4598__$1 == null);
var state_4730__$1 = (function (){var statearr_4746 = state_4730;
(statearr_4746[(11)] = inst_4598__$1);

return statearr_4746;
})();
if(cljs.core.truth_(inst_4599)){
var statearr_4747_4824 = state_4730__$1;
(statearr_4747_4824[(1)] = (5));

} else {
var statearr_4748_4825 = state_4730__$1;
(statearr_4748_4825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (15))){
var inst_4607 = (state_4730[(14)]);
var inst_4610 = (state_4730[(15)]);
var inst_4608 = (state_4730[(16)]);
var inst_4609 = (state_4730[(17)]);
var inst_4625 = (state_4730[(2)]);
var inst_4626 = (inst_4610 + (1));
var tmp4742 = inst_4607;
var tmp4743 = inst_4608;
var tmp4744 = inst_4609;
var inst_4607__$1 = tmp4742;
var inst_4608__$1 = tmp4743;
var inst_4609__$1 = tmp4744;
var inst_4610__$1 = inst_4626;
var state_4730__$1 = (function (){var statearr_4749 = state_4730;
(statearr_4749[(14)] = inst_4607__$1);

(statearr_4749[(18)] = inst_4625);

(statearr_4749[(15)] = inst_4610__$1);

(statearr_4749[(16)] = inst_4608__$1);

(statearr_4749[(17)] = inst_4609__$1);

return statearr_4749;
})();
var statearr_4750_4826 = state_4730__$1;
(statearr_4750_4826[(2)] = null);

(statearr_4750_4826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (21))){
var inst_4652 = (state_4730[(2)]);
var state_4730__$1 = state_4730;
var statearr_4754_4827 = state_4730__$1;
(statearr_4754_4827[(2)] = inst_4652);

(statearr_4754_4827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (31))){
var inst_4678 = (state_4730[(10)]);
var inst_4682 = done.call(null,null);
var inst_4683 = cljs.core.async.untap_STAR_.call(null,m,inst_4678);
var state_4730__$1 = (function (){var statearr_4755 = state_4730;
(statearr_4755[(19)] = inst_4682);

return statearr_4755;
})();
var statearr_4756_4828 = state_4730__$1;
(statearr_4756_4828[(2)] = inst_4683);

(statearr_4756_4828[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (32))){
var inst_4670 = (state_4730[(20)]);
var inst_4671 = (state_4730[(9)]);
var inst_4672 = (state_4730[(21)]);
var inst_4673 = (state_4730[(12)]);
var inst_4685 = (state_4730[(2)]);
var inst_4686 = (inst_4673 + (1));
var tmp4751 = inst_4670;
var tmp4752 = inst_4671;
var tmp4753 = inst_4672;
var inst_4670__$1 = tmp4751;
var inst_4671__$1 = tmp4752;
var inst_4672__$1 = tmp4753;
var inst_4673__$1 = inst_4686;
var state_4730__$1 = (function (){var statearr_4757 = state_4730;
(statearr_4757[(20)] = inst_4670__$1);

(statearr_4757[(9)] = inst_4671__$1);

(statearr_4757[(22)] = inst_4685);

(statearr_4757[(21)] = inst_4672__$1);

(statearr_4757[(12)] = inst_4673__$1);

return statearr_4757;
})();
var statearr_4758_4829 = state_4730__$1;
(statearr_4758_4829[(2)] = null);

(statearr_4758_4829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (40))){
var inst_4698 = (state_4730[(23)]);
var inst_4702 = done.call(null,null);
var inst_4703 = cljs.core.async.untap_STAR_.call(null,m,inst_4698);
var state_4730__$1 = (function (){var statearr_4759 = state_4730;
(statearr_4759[(24)] = inst_4702);

return statearr_4759;
})();
var statearr_4760_4830 = state_4730__$1;
(statearr_4760_4830[(2)] = inst_4703);

(statearr_4760_4830[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (33))){
var inst_4689 = (state_4730[(25)]);
var inst_4691 = cljs.core.chunked_seq_QMARK_.call(null,inst_4689);
var state_4730__$1 = state_4730;
if(inst_4691){
var statearr_4761_4831 = state_4730__$1;
(statearr_4761_4831[(1)] = (36));

} else {
var statearr_4762_4832 = state_4730__$1;
(statearr_4762_4832[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (13))){
var inst_4619 = (state_4730[(26)]);
var inst_4622 = cljs.core.async.close_BANG_.call(null,inst_4619);
var state_4730__$1 = state_4730;
var statearr_4763_4833 = state_4730__$1;
(statearr_4763_4833[(2)] = inst_4622);

(statearr_4763_4833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (22))){
var inst_4642 = (state_4730[(8)]);
var inst_4645 = cljs.core.async.close_BANG_.call(null,inst_4642);
var state_4730__$1 = state_4730;
var statearr_4764_4834 = state_4730__$1;
(statearr_4764_4834[(2)] = inst_4645);

(statearr_4764_4834[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (36))){
var inst_4689 = (state_4730[(25)]);
var inst_4693 = cljs.core.chunk_first.call(null,inst_4689);
var inst_4694 = cljs.core.chunk_rest.call(null,inst_4689);
var inst_4695 = cljs.core.count.call(null,inst_4693);
var inst_4670 = inst_4694;
var inst_4671 = inst_4693;
var inst_4672 = inst_4695;
var inst_4673 = (0);
var state_4730__$1 = (function (){var statearr_4765 = state_4730;
(statearr_4765[(20)] = inst_4670);

(statearr_4765[(9)] = inst_4671);

(statearr_4765[(21)] = inst_4672);

(statearr_4765[(12)] = inst_4673);

return statearr_4765;
})();
var statearr_4766_4835 = state_4730__$1;
(statearr_4766_4835[(2)] = null);

(statearr_4766_4835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (41))){
var inst_4689 = (state_4730[(25)]);
var inst_4705 = (state_4730[(2)]);
var inst_4706 = cljs.core.next.call(null,inst_4689);
var inst_4670 = inst_4706;
var inst_4671 = null;
var inst_4672 = (0);
var inst_4673 = (0);
var state_4730__$1 = (function (){var statearr_4767 = state_4730;
(statearr_4767[(20)] = inst_4670);

(statearr_4767[(9)] = inst_4671);

(statearr_4767[(21)] = inst_4672);

(statearr_4767[(12)] = inst_4673);

(statearr_4767[(27)] = inst_4705);

return statearr_4767;
})();
var statearr_4768_4836 = state_4730__$1;
(statearr_4768_4836[(2)] = null);

(statearr_4768_4836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (43))){
var state_4730__$1 = state_4730;
var statearr_4769_4837 = state_4730__$1;
(statearr_4769_4837[(2)] = null);

(statearr_4769_4837[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (29))){
var inst_4714 = (state_4730[(2)]);
var state_4730__$1 = state_4730;
var statearr_4770_4838 = state_4730__$1;
(statearr_4770_4838[(2)] = inst_4714);

(statearr_4770_4838[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (44))){
var inst_4723 = (state_4730[(2)]);
var state_4730__$1 = (function (){var statearr_4771 = state_4730;
(statearr_4771[(28)] = inst_4723);

return statearr_4771;
})();
var statearr_4772_4839 = state_4730__$1;
(statearr_4772_4839[(2)] = null);

(statearr_4772_4839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (6))){
var inst_4662 = (state_4730[(29)]);
var inst_4661 = cljs.core.deref.call(null,cs);
var inst_4662__$1 = cljs.core.keys.call(null,inst_4661);
var inst_4663 = cljs.core.count.call(null,inst_4662__$1);
var inst_4664 = cljs.core.reset_BANG_.call(null,dctr,inst_4663);
var inst_4669 = cljs.core.seq.call(null,inst_4662__$1);
var inst_4670 = inst_4669;
var inst_4671 = null;
var inst_4672 = (0);
var inst_4673 = (0);
var state_4730__$1 = (function (){var statearr_4773 = state_4730;
(statearr_4773[(20)] = inst_4670);

(statearr_4773[(9)] = inst_4671);

(statearr_4773[(30)] = inst_4664);

(statearr_4773[(29)] = inst_4662__$1);

(statearr_4773[(21)] = inst_4672);

(statearr_4773[(12)] = inst_4673);

return statearr_4773;
})();
var statearr_4774_4840 = state_4730__$1;
(statearr_4774_4840[(2)] = null);

(statearr_4774_4840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (28))){
var inst_4670 = (state_4730[(20)]);
var inst_4689 = (state_4730[(25)]);
var inst_4689__$1 = cljs.core.seq.call(null,inst_4670);
var state_4730__$1 = (function (){var statearr_4775 = state_4730;
(statearr_4775[(25)] = inst_4689__$1);

return statearr_4775;
})();
if(inst_4689__$1){
var statearr_4776_4841 = state_4730__$1;
(statearr_4776_4841[(1)] = (33));

} else {
var statearr_4777_4842 = state_4730__$1;
(statearr_4777_4842[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (25))){
var inst_4672 = (state_4730[(21)]);
var inst_4673 = (state_4730[(12)]);
var inst_4675 = (inst_4673 < inst_4672);
var inst_4676 = inst_4675;
var state_4730__$1 = state_4730;
if(cljs.core.truth_(inst_4676)){
var statearr_4778_4843 = state_4730__$1;
(statearr_4778_4843[(1)] = (27));

} else {
var statearr_4779_4844 = state_4730__$1;
(statearr_4779_4844[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (34))){
var state_4730__$1 = state_4730;
var statearr_4780_4845 = state_4730__$1;
(statearr_4780_4845[(2)] = null);

(statearr_4780_4845[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (17))){
var state_4730__$1 = state_4730;
var statearr_4781_4846 = state_4730__$1;
(statearr_4781_4846[(2)] = null);

(statearr_4781_4846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (3))){
var inst_4728 = (state_4730[(2)]);
var state_4730__$1 = state_4730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4730__$1,inst_4728);
} else {
if((state_val_4731 === (12))){
var inst_4657 = (state_4730[(2)]);
var state_4730__$1 = state_4730;
var statearr_4782_4847 = state_4730__$1;
(statearr_4782_4847[(2)] = inst_4657);

(statearr_4782_4847[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (2))){
var state_4730__$1 = state_4730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4730__$1,(4),ch);
} else {
if((state_val_4731 === (23))){
var state_4730__$1 = state_4730;
var statearr_4783_4848 = state_4730__$1;
(statearr_4783_4848[(2)] = null);

(statearr_4783_4848[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (35))){
var inst_4712 = (state_4730[(2)]);
var state_4730__$1 = state_4730;
var statearr_4784_4849 = state_4730__$1;
(statearr_4784_4849[(2)] = inst_4712);

(statearr_4784_4849[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (19))){
var inst_4629 = (state_4730[(7)]);
var inst_4633 = cljs.core.chunk_first.call(null,inst_4629);
var inst_4634 = cljs.core.chunk_rest.call(null,inst_4629);
var inst_4635 = cljs.core.count.call(null,inst_4633);
var inst_4607 = inst_4634;
var inst_4608 = inst_4633;
var inst_4609 = inst_4635;
var inst_4610 = (0);
var state_4730__$1 = (function (){var statearr_4785 = state_4730;
(statearr_4785[(14)] = inst_4607);

(statearr_4785[(15)] = inst_4610);

(statearr_4785[(16)] = inst_4608);

(statearr_4785[(17)] = inst_4609);

return statearr_4785;
})();
var statearr_4786_4850 = state_4730__$1;
(statearr_4786_4850[(2)] = null);

(statearr_4786_4850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (11))){
var inst_4607 = (state_4730[(14)]);
var inst_4629 = (state_4730[(7)]);
var inst_4629__$1 = cljs.core.seq.call(null,inst_4607);
var state_4730__$1 = (function (){var statearr_4787 = state_4730;
(statearr_4787[(7)] = inst_4629__$1);

return statearr_4787;
})();
if(inst_4629__$1){
var statearr_4788_4851 = state_4730__$1;
(statearr_4788_4851[(1)] = (16));

} else {
var statearr_4789_4852 = state_4730__$1;
(statearr_4789_4852[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (9))){
var inst_4659 = (state_4730[(2)]);
var state_4730__$1 = state_4730;
var statearr_4790_4853 = state_4730__$1;
(statearr_4790_4853[(2)] = inst_4659);

(statearr_4790_4853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (5))){
var inst_4605 = cljs.core.deref.call(null,cs);
var inst_4606 = cljs.core.seq.call(null,inst_4605);
var inst_4607 = inst_4606;
var inst_4608 = null;
var inst_4609 = (0);
var inst_4610 = (0);
var state_4730__$1 = (function (){var statearr_4791 = state_4730;
(statearr_4791[(14)] = inst_4607);

(statearr_4791[(15)] = inst_4610);

(statearr_4791[(16)] = inst_4608);

(statearr_4791[(17)] = inst_4609);

return statearr_4791;
})();
var statearr_4792_4854 = state_4730__$1;
(statearr_4792_4854[(2)] = null);

(statearr_4792_4854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (14))){
var state_4730__$1 = state_4730;
var statearr_4793_4855 = state_4730__$1;
(statearr_4793_4855[(2)] = null);

(statearr_4793_4855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (45))){
var inst_4720 = (state_4730[(2)]);
var state_4730__$1 = state_4730;
var statearr_4794_4856 = state_4730__$1;
(statearr_4794_4856[(2)] = inst_4720);

(statearr_4794_4856[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (26))){
var inst_4662 = (state_4730[(29)]);
var inst_4716 = (state_4730[(2)]);
var inst_4717 = cljs.core.seq.call(null,inst_4662);
var state_4730__$1 = (function (){var statearr_4795 = state_4730;
(statearr_4795[(31)] = inst_4716);

return statearr_4795;
})();
if(inst_4717){
var statearr_4796_4857 = state_4730__$1;
(statearr_4796_4857[(1)] = (42));

} else {
var statearr_4797_4858 = state_4730__$1;
(statearr_4797_4858[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (16))){
var inst_4629 = (state_4730[(7)]);
var inst_4631 = cljs.core.chunked_seq_QMARK_.call(null,inst_4629);
var state_4730__$1 = state_4730;
if(inst_4631){
var statearr_4798_4859 = state_4730__$1;
(statearr_4798_4859[(1)] = (19));

} else {
var statearr_4799_4860 = state_4730__$1;
(statearr_4799_4860[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (38))){
var inst_4709 = (state_4730[(2)]);
var state_4730__$1 = state_4730;
var statearr_4800_4861 = state_4730__$1;
(statearr_4800_4861[(2)] = inst_4709);

(statearr_4800_4861[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (30))){
var state_4730__$1 = state_4730;
var statearr_4801_4862 = state_4730__$1;
(statearr_4801_4862[(2)] = null);

(statearr_4801_4862[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (10))){
var inst_4610 = (state_4730[(15)]);
var inst_4608 = (state_4730[(16)]);
var inst_4618 = cljs.core._nth.call(null,inst_4608,inst_4610);
var inst_4619 = cljs.core.nth.call(null,inst_4618,(0),null);
var inst_4620 = cljs.core.nth.call(null,inst_4618,(1),null);
var state_4730__$1 = (function (){var statearr_4802 = state_4730;
(statearr_4802[(26)] = inst_4619);

return statearr_4802;
})();
if(cljs.core.truth_(inst_4620)){
var statearr_4803_4863 = state_4730__$1;
(statearr_4803_4863[(1)] = (13));

} else {
var statearr_4804_4864 = state_4730__$1;
(statearr_4804_4864[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (18))){
var inst_4655 = (state_4730[(2)]);
var state_4730__$1 = state_4730;
var statearr_4805_4865 = state_4730__$1;
(statearr_4805_4865[(2)] = inst_4655);

(statearr_4805_4865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (42))){
var state_4730__$1 = state_4730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4730__$1,(45),dchan);
} else {
if((state_val_4731 === (37))){
var inst_4698 = (state_4730[(23)]);
var inst_4598 = (state_4730[(11)]);
var inst_4689 = (state_4730[(25)]);
var inst_4698__$1 = cljs.core.first.call(null,inst_4689);
var inst_4699 = cljs.core.async.put_BANG_.call(null,inst_4698__$1,inst_4598,done);
var state_4730__$1 = (function (){var statearr_4806 = state_4730;
(statearr_4806[(23)] = inst_4698__$1);

return statearr_4806;
})();
if(cljs.core.truth_(inst_4699)){
var statearr_4807_4866 = state_4730__$1;
(statearr_4807_4866[(1)] = (39));

} else {
var statearr_4808_4867 = state_4730__$1;
(statearr_4808_4867[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4731 === (8))){
var inst_4610 = (state_4730[(15)]);
var inst_4609 = (state_4730[(17)]);
var inst_4612 = (inst_4610 < inst_4609);
var inst_4613 = inst_4612;
var state_4730__$1 = state_4730;
if(cljs.core.truth_(inst_4613)){
var statearr_4809_4868 = state_4730__$1;
(statearr_4809_4868[(1)] = (10));

} else {
var statearr_4810_4869 = state_4730__$1;
(statearr_4810_4869[(1)] = (11));

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
});})(c__2146__auto___4815,cs,m,dchan,dctr,done))
;
return ((function (switch__1991__auto__,c__2146__auto___4815,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__1992__auto__ = null;
var cljs$core$async$mult_$_state_machine__1992__auto____0 = (function (){
var statearr_4811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4811[(0)] = cljs$core$async$mult_$_state_machine__1992__auto__);

(statearr_4811[(1)] = (1));

return statearr_4811;
});
var cljs$core$async$mult_$_state_machine__1992__auto____1 = (function (state_4730){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e4812){if((e4812 instanceof Object)){
var ex__1995__auto__ = e4812;
var statearr_4813_4870 = state_4730;
(statearr_4813_4870[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4871 = state_4730;
state_4730 = G__4871;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__1992__auto__ = function(state_4730){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__1992__auto____1.call(this,state_4730);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__1992__auto____0;
cljs$core$async$mult_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__1992__auto____1;
return cljs$core$async$mult_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___4815,cs,m,dchan,dctr,done))
})();
var state__2148__auto__ = (function (){var statearr_4814 = f__2147__auto__.call(null);
(statearr_4814[(6)] = c__2146__auto___4815);

return statearr_4814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___4815,cs,m,dchan,dctr,done))
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
var G__4873 = arguments.length;
switch (G__4873) {
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
var len__4497__auto___4885 = arguments.length;
var i__4498__auto___4886 = (0);
while(true){
if((i__4498__auto___4886 < len__4497__auto___4885)){
args__4500__auto__.push((arguments[i__4498__auto___4886]));

var G__4887 = (i__4498__auto___4886 + (1));
i__4498__auto___4886 = G__4887;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4879){
var map__4880 = p__4879;
var map__4880__$1 = ((((!((map__4880 == null)))?(((((map__4880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4880):map__4880);
var opts = map__4880__$1;
var statearr_4882_4888 = state;
(statearr_4882_4888[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__4880,map__4880__$1,opts){
return (function (val){
var statearr_4883_4889 = state;
(statearr_4883_4889[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4880,map__4880__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_4884_4890 = state;
(statearr_4884_4890[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4875){
var G__4876 = cljs.core.first.call(null,seq4875);
var seq4875__$1 = cljs.core.next.call(null,seq4875);
var G__4877 = cljs.core.first.call(null,seq4875__$1);
var seq4875__$2 = cljs.core.next.call(null,seq4875__$1);
var G__4878 = cljs.core.first.call(null,seq4875__$2);
var seq4875__$3 = cljs.core.next.call(null,seq4875__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4876,G__4877,G__4878,seq4875__$3);
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
if(typeof cljs.core.async.t_cljs$core$async4891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4891 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta4892){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta4892 = meta4892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4893,meta4892__$1){
var self__ = this;
var _4893__$1 = this;
return (new cljs.core.async.t_cljs$core$async4891(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta4892__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4893){
var self__ = this;
var _4893__$1 = this;
return self__.meta4892;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4891.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4891.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4891.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4891.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4891.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4891.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4891.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4891.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta4892","meta4892",1059139738,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4891";

cljs.core.async.t_cljs$core$async4891.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4891");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4891.
 */
cljs.core.async.__GT_t_cljs$core$async4891 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async4891(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4892){
return (new cljs.core.async.t_cljs$core$async4891(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4892));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async4891(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2146__auto___5055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___5055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___5055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_4995){
var state_val_4996 = (state_4995[(1)]);
if((state_val_4996 === (7))){
var inst_4910 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
var statearr_4997_5056 = state_4995__$1;
(statearr_4997_5056[(2)] = inst_4910);

(statearr_4997_5056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (20))){
var inst_4922 = (state_4995[(7)]);
var state_4995__$1 = state_4995;
var statearr_4998_5057 = state_4995__$1;
(statearr_4998_5057[(2)] = inst_4922);

(statearr_4998_5057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (27))){
var state_4995__$1 = state_4995;
var statearr_4999_5058 = state_4995__$1;
(statearr_4999_5058[(2)] = null);

(statearr_4999_5058[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (1))){
var inst_4897 = (state_4995[(8)]);
var inst_4897__$1 = calc_state.call(null);
var inst_4899 = (inst_4897__$1 == null);
var inst_4900 = cljs.core.not.call(null,inst_4899);
var state_4995__$1 = (function (){var statearr_5000 = state_4995;
(statearr_5000[(8)] = inst_4897__$1);

return statearr_5000;
})();
if(inst_4900){
var statearr_5001_5059 = state_4995__$1;
(statearr_5001_5059[(1)] = (2));

} else {
var statearr_5002_5060 = state_4995__$1;
(statearr_5002_5060[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (24))){
var inst_4946 = (state_4995[(9)]);
var inst_4969 = (state_4995[(10)]);
var inst_4955 = (state_4995[(11)]);
var inst_4969__$1 = inst_4946.call(null,inst_4955);
var state_4995__$1 = (function (){var statearr_5003 = state_4995;
(statearr_5003[(10)] = inst_4969__$1);

return statearr_5003;
})();
if(cljs.core.truth_(inst_4969__$1)){
var statearr_5004_5061 = state_4995__$1;
(statearr_5004_5061[(1)] = (29));

} else {
var statearr_5005_5062 = state_4995__$1;
(statearr_5005_5062[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (4))){
var inst_4913 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
if(cljs.core.truth_(inst_4913)){
var statearr_5006_5063 = state_4995__$1;
(statearr_5006_5063[(1)] = (8));

} else {
var statearr_5007_5064 = state_4995__$1;
(statearr_5007_5064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (15))){
var inst_4940 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
if(cljs.core.truth_(inst_4940)){
var statearr_5008_5065 = state_4995__$1;
(statearr_5008_5065[(1)] = (19));

} else {
var statearr_5009_5066 = state_4995__$1;
(statearr_5009_5066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (21))){
var inst_4945 = (state_4995[(12)]);
var inst_4945__$1 = (state_4995[(2)]);
var inst_4946 = cljs.core.get.call(null,inst_4945__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4947 = cljs.core.get.call(null,inst_4945__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4948 = cljs.core.get.call(null,inst_4945__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4995__$1 = (function (){var statearr_5010 = state_4995;
(statearr_5010[(12)] = inst_4945__$1);

(statearr_5010[(9)] = inst_4946);

(statearr_5010[(13)] = inst_4947);

return statearr_5010;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4995__$1,(22),inst_4948);
} else {
if((state_val_4996 === (31))){
var inst_4977 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
if(cljs.core.truth_(inst_4977)){
var statearr_5011_5067 = state_4995__$1;
(statearr_5011_5067[(1)] = (32));

} else {
var statearr_5012_5068 = state_4995__$1;
(statearr_5012_5068[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (32))){
var inst_4954 = (state_4995[(14)]);
var state_4995__$1 = state_4995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4995__$1,(35),out,inst_4954);
} else {
if((state_val_4996 === (33))){
var inst_4945 = (state_4995[(12)]);
var inst_4922 = inst_4945;
var state_4995__$1 = (function (){var statearr_5013 = state_4995;
(statearr_5013[(7)] = inst_4922);

return statearr_5013;
})();
var statearr_5014_5069 = state_4995__$1;
(statearr_5014_5069[(2)] = null);

(statearr_5014_5069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (13))){
var inst_4922 = (state_4995[(7)]);
var inst_4929 = inst_4922.cljs$lang$protocol_mask$partition0$;
var inst_4930 = (inst_4929 & (64));
var inst_4931 = inst_4922.cljs$core$ISeq$;
var inst_4932 = (cljs.core.PROTOCOL_SENTINEL === inst_4931);
var inst_4933 = ((inst_4930) || (inst_4932));
var state_4995__$1 = state_4995;
if(cljs.core.truth_(inst_4933)){
var statearr_5015_5070 = state_4995__$1;
(statearr_5015_5070[(1)] = (16));

} else {
var statearr_5016_5071 = state_4995__$1;
(statearr_5016_5071[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (22))){
var inst_4954 = (state_4995[(14)]);
var inst_4955 = (state_4995[(11)]);
var inst_4953 = (state_4995[(2)]);
var inst_4954__$1 = cljs.core.nth.call(null,inst_4953,(0),null);
var inst_4955__$1 = cljs.core.nth.call(null,inst_4953,(1),null);
var inst_4956 = (inst_4954__$1 == null);
var inst_4957 = cljs.core._EQ_.call(null,inst_4955__$1,change);
var inst_4958 = ((inst_4956) || (inst_4957));
var state_4995__$1 = (function (){var statearr_5017 = state_4995;
(statearr_5017[(14)] = inst_4954__$1);

(statearr_5017[(11)] = inst_4955__$1);

return statearr_5017;
})();
if(cljs.core.truth_(inst_4958)){
var statearr_5018_5072 = state_4995__$1;
(statearr_5018_5072[(1)] = (23));

} else {
var statearr_5019_5073 = state_4995__$1;
(statearr_5019_5073[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (36))){
var inst_4945 = (state_4995[(12)]);
var inst_4922 = inst_4945;
var state_4995__$1 = (function (){var statearr_5020 = state_4995;
(statearr_5020[(7)] = inst_4922);

return statearr_5020;
})();
var statearr_5021_5074 = state_4995__$1;
(statearr_5021_5074[(2)] = null);

(statearr_5021_5074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (29))){
var inst_4969 = (state_4995[(10)]);
var state_4995__$1 = state_4995;
var statearr_5022_5075 = state_4995__$1;
(statearr_5022_5075[(2)] = inst_4969);

(statearr_5022_5075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (6))){
var state_4995__$1 = state_4995;
var statearr_5023_5076 = state_4995__$1;
(statearr_5023_5076[(2)] = false);

(statearr_5023_5076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (28))){
var inst_4965 = (state_4995[(2)]);
var inst_4966 = calc_state.call(null);
var inst_4922 = inst_4966;
var state_4995__$1 = (function (){var statearr_5024 = state_4995;
(statearr_5024[(15)] = inst_4965);

(statearr_5024[(7)] = inst_4922);

return statearr_5024;
})();
var statearr_5025_5077 = state_4995__$1;
(statearr_5025_5077[(2)] = null);

(statearr_5025_5077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (25))){
var inst_4991 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
var statearr_5026_5078 = state_4995__$1;
(statearr_5026_5078[(2)] = inst_4991);

(statearr_5026_5078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (34))){
var inst_4989 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
var statearr_5027_5079 = state_4995__$1;
(statearr_5027_5079[(2)] = inst_4989);

(statearr_5027_5079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (17))){
var state_4995__$1 = state_4995;
var statearr_5028_5080 = state_4995__$1;
(statearr_5028_5080[(2)] = false);

(statearr_5028_5080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (3))){
var state_4995__$1 = state_4995;
var statearr_5029_5081 = state_4995__$1;
(statearr_5029_5081[(2)] = false);

(statearr_5029_5081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (12))){
var inst_4993 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4995__$1,inst_4993);
} else {
if((state_val_4996 === (2))){
var inst_4897 = (state_4995[(8)]);
var inst_4902 = inst_4897.cljs$lang$protocol_mask$partition0$;
var inst_4903 = (inst_4902 & (64));
var inst_4904 = inst_4897.cljs$core$ISeq$;
var inst_4905 = (cljs.core.PROTOCOL_SENTINEL === inst_4904);
var inst_4906 = ((inst_4903) || (inst_4905));
var state_4995__$1 = state_4995;
if(cljs.core.truth_(inst_4906)){
var statearr_5030_5082 = state_4995__$1;
(statearr_5030_5082[(1)] = (5));

} else {
var statearr_5031_5083 = state_4995__$1;
(statearr_5031_5083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (23))){
var inst_4954 = (state_4995[(14)]);
var inst_4960 = (inst_4954 == null);
var state_4995__$1 = state_4995;
if(cljs.core.truth_(inst_4960)){
var statearr_5032_5084 = state_4995__$1;
(statearr_5032_5084[(1)] = (26));

} else {
var statearr_5033_5085 = state_4995__$1;
(statearr_5033_5085[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (35))){
var inst_4980 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
if(cljs.core.truth_(inst_4980)){
var statearr_5034_5086 = state_4995__$1;
(statearr_5034_5086[(1)] = (36));

} else {
var statearr_5035_5087 = state_4995__$1;
(statearr_5035_5087[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (19))){
var inst_4922 = (state_4995[(7)]);
var inst_4942 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4922);
var state_4995__$1 = state_4995;
var statearr_5036_5088 = state_4995__$1;
(statearr_5036_5088[(2)] = inst_4942);

(statearr_5036_5088[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (11))){
var inst_4922 = (state_4995[(7)]);
var inst_4926 = (inst_4922 == null);
var inst_4927 = cljs.core.not.call(null,inst_4926);
var state_4995__$1 = state_4995;
if(inst_4927){
var statearr_5037_5089 = state_4995__$1;
(statearr_5037_5089[(1)] = (13));

} else {
var statearr_5038_5090 = state_4995__$1;
(statearr_5038_5090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (9))){
var inst_4897 = (state_4995[(8)]);
var state_4995__$1 = state_4995;
var statearr_5039_5091 = state_4995__$1;
(statearr_5039_5091[(2)] = inst_4897);

(statearr_5039_5091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (5))){
var state_4995__$1 = state_4995;
var statearr_5040_5092 = state_4995__$1;
(statearr_5040_5092[(2)] = true);

(statearr_5040_5092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (14))){
var state_4995__$1 = state_4995;
var statearr_5041_5093 = state_4995__$1;
(statearr_5041_5093[(2)] = false);

(statearr_5041_5093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (26))){
var inst_4955 = (state_4995[(11)]);
var inst_4962 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4955);
var state_4995__$1 = state_4995;
var statearr_5042_5094 = state_4995__$1;
(statearr_5042_5094[(2)] = inst_4962);

(statearr_5042_5094[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (16))){
var state_4995__$1 = state_4995;
var statearr_5043_5095 = state_4995__$1;
(statearr_5043_5095[(2)] = true);

(statearr_5043_5095[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (38))){
var inst_4985 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
var statearr_5044_5096 = state_4995__$1;
(statearr_5044_5096[(2)] = inst_4985);

(statearr_5044_5096[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (30))){
var inst_4946 = (state_4995[(9)]);
var inst_4947 = (state_4995[(13)]);
var inst_4955 = (state_4995[(11)]);
var inst_4972 = cljs.core.empty_QMARK_.call(null,inst_4946);
var inst_4973 = inst_4947.call(null,inst_4955);
var inst_4974 = cljs.core.not.call(null,inst_4973);
var inst_4975 = ((inst_4972) && (inst_4974));
var state_4995__$1 = state_4995;
var statearr_5045_5097 = state_4995__$1;
(statearr_5045_5097[(2)] = inst_4975);

(statearr_5045_5097[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (10))){
var inst_4897 = (state_4995[(8)]);
var inst_4918 = (state_4995[(2)]);
var inst_4919 = cljs.core.get.call(null,inst_4918,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4920 = cljs.core.get.call(null,inst_4918,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4921 = cljs.core.get.call(null,inst_4918,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_4922 = inst_4897;
var state_4995__$1 = (function (){var statearr_5046 = state_4995;
(statearr_5046[(7)] = inst_4922);

(statearr_5046[(16)] = inst_4919);

(statearr_5046[(17)] = inst_4921);

(statearr_5046[(18)] = inst_4920);

return statearr_5046;
})();
var statearr_5047_5098 = state_4995__$1;
(statearr_5047_5098[(2)] = null);

(statearr_5047_5098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (18))){
var inst_4937 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
var statearr_5048_5099 = state_4995__$1;
(statearr_5048_5099[(2)] = inst_4937);

(statearr_5048_5099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (37))){
var state_4995__$1 = state_4995;
var statearr_5049_5100 = state_4995__$1;
(statearr_5049_5100[(2)] = null);

(statearr_5049_5100[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (8))){
var inst_4897 = (state_4995[(8)]);
var inst_4915 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4897);
var state_4995__$1 = state_4995;
var statearr_5050_5101 = state_4995__$1;
(statearr_5050_5101[(2)] = inst_4915);

(statearr_5050_5101[(1)] = (10));


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
});})(c__2146__auto___5055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__1991__auto__,c__2146__auto___5055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__1992__auto__ = null;
var cljs$core$async$mix_$_state_machine__1992__auto____0 = (function (){
var statearr_5051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5051[(0)] = cljs$core$async$mix_$_state_machine__1992__auto__);

(statearr_5051[(1)] = (1));

return statearr_5051;
});
var cljs$core$async$mix_$_state_machine__1992__auto____1 = (function (state_4995){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_4995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e5052){if((e5052 instanceof Object)){
var ex__1995__auto__ = e5052;
var statearr_5053_5102 = state_4995;
(statearr_5053_5102[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5103 = state_4995;
state_4995 = G__5103;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__1992__auto__ = function(state_4995){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__1992__auto____1.call(this,state_4995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__1992__auto____0;
cljs$core$async$mix_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__1992__auto____1;
return cljs$core$async$mix_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___5055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__2148__auto__ = (function (){var statearr_5054 = f__2147__auto__.call(null);
(statearr_5054[(6)] = c__2146__auto___5055);

return statearr_5054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___5055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__5105 = arguments.length;
switch (G__5105) {
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
var G__5109 = arguments.length;
switch (G__5109) {
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
return (function (p1__5107_SHARP_){
if(cljs.core.truth_(p1__5107_SHARP_.call(null,topic))){
return p1__5107_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5107_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async5110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5110 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5111){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5111 = meta5111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5112,meta5111__$1){
var self__ = this;
var _5112__$1 = this;
return (new cljs.core.async.t_cljs$core$async5110(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5111__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5112){
var self__ = this;
var _5112__$1 = this;
return self__.meta5111;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5110.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5110.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5110.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5110.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5110.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async5110.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5110.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5110.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5111","meta5111",628838204,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5110";

cljs.core.async.t_cljs$core$async5110.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5110");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5110.
 */
cljs.core.async.__GT_t_cljs$core$async5110 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async5110(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5111){
return (new cljs.core.async.t_cljs$core$async5110(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5111));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async5110(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2146__auto___5230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___5230,mults,ensure_mult,p){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___5230,mults,ensure_mult,p){
return (function (state_5184){
var state_val_5185 = (state_5184[(1)]);
if((state_val_5185 === (7))){
var inst_5180 = (state_5184[(2)]);
var state_5184__$1 = state_5184;
var statearr_5186_5231 = state_5184__$1;
(statearr_5186_5231[(2)] = inst_5180);

(statearr_5186_5231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (20))){
var state_5184__$1 = state_5184;
var statearr_5187_5232 = state_5184__$1;
(statearr_5187_5232[(2)] = null);

(statearr_5187_5232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (1))){
var state_5184__$1 = state_5184;
var statearr_5188_5233 = state_5184__$1;
(statearr_5188_5233[(2)] = null);

(statearr_5188_5233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (24))){
var inst_5163 = (state_5184[(7)]);
var inst_5172 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5163);
var state_5184__$1 = state_5184;
var statearr_5189_5234 = state_5184__$1;
(statearr_5189_5234[(2)] = inst_5172);

(statearr_5189_5234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (4))){
var inst_5115 = (state_5184[(8)]);
var inst_5115__$1 = (state_5184[(2)]);
var inst_5116 = (inst_5115__$1 == null);
var state_5184__$1 = (function (){var statearr_5190 = state_5184;
(statearr_5190[(8)] = inst_5115__$1);

return statearr_5190;
})();
if(cljs.core.truth_(inst_5116)){
var statearr_5191_5235 = state_5184__$1;
(statearr_5191_5235[(1)] = (5));

} else {
var statearr_5192_5236 = state_5184__$1;
(statearr_5192_5236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (15))){
var inst_5157 = (state_5184[(2)]);
var state_5184__$1 = state_5184;
var statearr_5193_5237 = state_5184__$1;
(statearr_5193_5237[(2)] = inst_5157);

(statearr_5193_5237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (21))){
var inst_5177 = (state_5184[(2)]);
var state_5184__$1 = (function (){var statearr_5194 = state_5184;
(statearr_5194[(9)] = inst_5177);

return statearr_5194;
})();
var statearr_5195_5238 = state_5184__$1;
(statearr_5195_5238[(2)] = null);

(statearr_5195_5238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (13))){
var inst_5139 = (state_5184[(10)]);
var inst_5141 = cljs.core.chunked_seq_QMARK_.call(null,inst_5139);
var state_5184__$1 = state_5184;
if(inst_5141){
var statearr_5196_5239 = state_5184__$1;
(statearr_5196_5239[(1)] = (16));

} else {
var statearr_5197_5240 = state_5184__$1;
(statearr_5197_5240[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (22))){
var inst_5169 = (state_5184[(2)]);
var state_5184__$1 = state_5184;
if(cljs.core.truth_(inst_5169)){
var statearr_5198_5241 = state_5184__$1;
(statearr_5198_5241[(1)] = (23));

} else {
var statearr_5199_5242 = state_5184__$1;
(statearr_5199_5242[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (6))){
var inst_5163 = (state_5184[(7)]);
var inst_5115 = (state_5184[(8)]);
var inst_5165 = (state_5184[(11)]);
var inst_5163__$1 = topic_fn.call(null,inst_5115);
var inst_5164 = cljs.core.deref.call(null,mults);
var inst_5165__$1 = cljs.core.get.call(null,inst_5164,inst_5163__$1);
var state_5184__$1 = (function (){var statearr_5200 = state_5184;
(statearr_5200[(7)] = inst_5163__$1);

(statearr_5200[(11)] = inst_5165__$1);

return statearr_5200;
})();
if(cljs.core.truth_(inst_5165__$1)){
var statearr_5201_5243 = state_5184__$1;
(statearr_5201_5243[(1)] = (19));

} else {
var statearr_5202_5244 = state_5184__$1;
(statearr_5202_5244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (25))){
var inst_5174 = (state_5184[(2)]);
var state_5184__$1 = state_5184;
var statearr_5203_5245 = state_5184__$1;
(statearr_5203_5245[(2)] = inst_5174);

(statearr_5203_5245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (17))){
var inst_5139 = (state_5184[(10)]);
var inst_5148 = cljs.core.first.call(null,inst_5139);
var inst_5149 = cljs.core.async.muxch_STAR_.call(null,inst_5148);
var inst_5150 = cljs.core.async.close_BANG_.call(null,inst_5149);
var inst_5151 = cljs.core.next.call(null,inst_5139);
var inst_5125 = inst_5151;
var inst_5126 = null;
var inst_5127 = (0);
var inst_5128 = (0);
var state_5184__$1 = (function (){var statearr_5204 = state_5184;
(statearr_5204[(12)] = inst_5126);

(statearr_5204[(13)] = inst_5128);

(statearr_5204[(14)] = inst_5150);

(statearr_5204[(15)] = inst_5127);

(statearr_5204[(16)] = inst_5125);

return statearr_5204;
})();
var statearr_5205_5246 = state_5184__$1;
(statearr_5205_5246[(2)] = null);

(statearr_5205_5246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (3))){
var inst_5182 = (state_5184[(2)]);
var state_5184__$1 = state_5184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5184__$1,inst_5182);
} else {
if((state_val_5185 === (12))){
var inst_5159 = (state_5184[(2)]);
var state_5184__$1 = state_5184;
var statearr_5206_5247 = state_5184__$1;
(statearr_5206_5247[(2)] = inst_5159);

(statearr_5206_5247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (2))){
var state_5184__$1 = state_5184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5184__$1,(4),ch);
} else {
if((state_val_5185 === (23))){
var state_5184__$1 = state_5184;
var statearr_5207_5248 = state_5184__$1;
(statearr_5207_5248[(2)] = null);

(statearr_5207_5248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (19))){
var inst_5115 = (state_5184[(8)]);
var inst_5165 = (state_5184[(11)]);
var inst_5167 = cljs.core.async.muxch_STAR_.call(null,inst_5165);
var state_5184__$1 = state_5184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5184__$1,(22),inst_5167,inst_5115);
} else {
if((state_val_5185 === (11))){
var inst_5139 = (state_5184[(10)]);
var inst_5125 = (state_5184[(16)]);
var inst_5139__$1 = cljs.core.seq.call(null,inst_5125);
var state_5184__$1 = (function (){var statearr_5208 = state_5184;
(statearr_5208[(10)] = inst_5139__$1);

return statearr_5208;
})();
if(inst_5139__$1){
var statearr_5209_5249 = state_5184__$1;
(statearr_5209_5249[(1)] = (13));

} else {
var statearr_5210_5250 = state_5184__$1;
(statearr_5210_5250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (9))){
var inst_5161 = (state_5184[(2)]);
var state_5184__$1 = state_5184;
var statearr_5211_5251 = state_5184__$1;
(statearr_5211_5251[(2)] = inst_5161);

(statearr_5211_5251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (5))){
var inst_5122 = cljs.core.deref.call(null,mults);
var inst_5123 = cljs.core.vals.call(null,inst_5122);
var inst_5124 = cljs.core.seq.call(null,inst_5123);
var inst_5125 = inst_5124;
var inst_5126 = null;
var inst_5127 = (0);
var inst_5128 = (0);
var state_5184__$1 = (function (){var statearr_5212 = state_5184;
(statearr_5212[(12)] = inst_5126);

(statearr_5212[(13)] = inst_5128);

(statearr_5212[(15)] = inst_5127);

(statearr_5212[(16)] = inst_5125);

return statearr_5212;
})();
var statearr_5213_5252 = state_5184__$1;
(statearr_5213_5252[(2)] = null);

(statearr_5213_5252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (14))){
var state_5184__$1 = state_5184;
var statearr_5217_5253 = state_5184__$1;
(statearr_5217_5253[(2)] = null);

(statearr_5217_5253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (16))){
var inst_5139 = (state_5184[(10)]);
var inst_5143 = cljs.core.chunk_first.call(null,inst_5139);
var inst_5144 = cljs.core.chunk_rest.call(null,inst_5139);
var inst_5145 = cljs.core.count.call(null,inst_5143);
var inst_5125 = inst_5144;
var inst_5126 = inst_5143;
var inst_5127 = inst_5145;
var inst_5128 = (0);
var state_5184__$1 = (function (){var statearr_5218 = state_5184;
(statearr_5218[(12)] = inst_5126);

(statearr_5218[(13)] = inst_5128);

(statearr_5218[(15)] = inst_5127);

(statearr_5218[(16)] = inst_5125);

return statearr_5218;
})();
var statearr_5219_5254 = state_5184__$1;
(statearr_5219_5254[(2)] = null);

(statearr_5219_5254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (10))){
var inst_5126 = (state_5184[(12)]);
var inst_5128 = (state_5184[(13)]);
var inst_5127 = (state_5184[(15)]);
var inst_5125 = (state_5184[(16)]);
var inst_5133 = cljs.core._nth.call(null,inst_5126,inst_5128);
var inst_5134 = cljs.core.async.muxch_STAR_.call(null,inst_5133);
var inst_5135 = cljs.core.async.close_BANG_.call(null,inst_5134);
var inst_5136 = (inst_5128 + (1));
var tmp5214 = inst_5126;
var tmp5215 = inst_5127;
var tmp5216 = inst_5125;
var inst_5125__$1 = tmp5216;
var inst_5126__$1 = tmp5214;
var inst_5127__$1 = tmp5215;
var inst_5128__$1 = inst_5136;
var state_5184__$1 = (function (){var statearr_5220 = state_5184;
(statearr_5220[(12)] = inst_5126__$1);

(statearr_5220[(13)] = inst_5128__$1);

(statearr_5220[(15)] = inst_5127__$1);

(statearr_5220[(17)] = inst_5135);

(statearr_5220[(16)] = inst_5125__$1);

return statearr_5220;
})();
var statearr_5221_5255 = state_5184__$1;
(statearr_5221_5255[(2)] = null);

(statearr_5221_5255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (18))){
var inst_5154 = (state_5184[(2)]);
var state_5184__$1 = state_5184;
var statearr_5222_5256 = state_5184__$1;
(statearr_5222_5256[(2)] = inst_5154);

(statearr_5222_5256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (8))){
var inst_5128 = (state_5184[(13)]);
var inst_5127 = (state_5184[(15)]);
var inst_5130 = (inst_5128 < inst_5127);
var inst_5131 = inst_5130;
var state_5184__$1 = state_5184;
if(cljs.core.truth_(inst_5131)){
var statearr_5223_5257 = state_5184__$1;
(statearr_5223_5257[(1)] = (10));

} else {
var statearr_5224_5258 = state_5184__$1;
(statearr_5224_5258[(1)] = (11));

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
});})(c__2146__auto___5230,mults,ensure_mult,p))
;
return ((function (switch__1991__auto__,c__2146__auto___5230,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__1992__auto__ = null;
var cljs$core$async$state_machine__1992__auto____0 = (function (){
var statearr_5225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5225[(0)] = cljs$core$async$state_machine__1992__auto__);

(statearr_5225[(1)] = (1));

return statearr_5225;
});
var cljs$core$async$state_machine__1992__auto____1 = (function (state_5184){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_5184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e5226){if((e5226 instanceof Object)){
var ex__1995__auto__ = e5226;
var statearr_5227_5259 = state_5184;
(statearr_5227_5259[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5260 = state_5184;
state_5184 = G__5260;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$state_machine__1992__auto__ = function(state_5184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1992__auto____1.call(this,state_5184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1992__auto____0;
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1992__auto____1;
return cljs$core$async$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___5230,mults,ensure_mult,p))
})();
var state__2148__auto__ = (function (){var statearr_5228 = f__2147__auto__.call(null);
(statearr_5228[(6)] = c__2146__auto___5230);

return statearr_5228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___5230,mults,ensure_mult,p))
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
var G__5262 = arguments.length;
switch (G__5262) {
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
var G__5265 = arguments.length;
switch (G__5265) {
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
var G__5268 = arguments.length;
switch (G__5268) {
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
var c__2146__auto___5335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___5335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___5335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5307){
var state_val_5308 = (state_5307[(1)]);
if((state_val_5308 === (7))){
var state_5307__$1 = state_5307;
var statearr_5309_5336 = state_5307__$1;
(statearr_5309_5336[(2)] = null);

(statearr_5309_5336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (1))){
var state_5307__$1 = state_5307;
var statearr_5310_5337 = state_5307__$1;
(statearr_5310_5337[(2)] = null);

(statearr_5310_5337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (4))){
var inst_5271 = (state_5307[(7)]);
var inst_5273 = (inst_5271 < cnt);
var state_5307__$1 = state_5307;
if(cljs.core.truth_(inst_5273)){
var statearr_5311_5338 = state_5307__$1;
(statearr_5311_5338[(1)] = (6));

} else {
var statearr_5312_5339 = state_5307__$1;
(statearr_5312_5339[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (15))){
var inst_5303 = (state_5307[(2)]);
var state_5307__$1 = state_5307;
var statearr_5313_5340 = state_5307__$1;
(statearr_5313_5340[(2)] = inst_5303);

(statearr_5313_5340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (13))){
var inst_5296 = cljs.core.async.close_BANG_.call(null,out);
var state_5307__$1 = state_5307;
var statearr_5314_5341 = state_5307__$1;
(statearr_5314_5341[(2)] = inst_5296);

(statearr_5314_5341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (6))){
var state_5307__$1 = state_5307;
var statearr_5315_5342 = state_5307__$1;
(statearr_5315_5342[(2)] = null);

(statearr_5315_5342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (3))){
var inst_5305 = (state_5307[(2)]);
var state_5307__$1 = state_5307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5307__$1,inst_5305);
} else {
if((state_val_5308 === (12))){
var inst_5293 = (state_5307[(8)]);
var inst_5293__$1 = (state_5307[(2)]);
var inst_5294 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5293__$1);
var state_5307__$1 = (function (){var statearr_5316 = state_5307;
(statearr_5316[(8)] = inst_5293__$1);

return statearr_5316;
})();
if(cljs.core.truth_(inst_5294)){
var statearr_5317_5343 = state_5307__$1;
(statearr_5317_5343[(1)] = (13));

} else {
var statearr_5318_5344 = state_5307__$1;
(statearr_5318_5344[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (2))){
var inst_5270 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5271 = (0);
var state_5307__$1 = (function (){var statearr_5319 = state_5307;
(statearr_5319[(7)] = inst_5271);

(statearr_5319[(9)] = inst_5270);

return statearr_5319;
})();
var statearr_5320_5345 = state_5307__$1;
(statearr_5320_5345[(2)] = null);

(statearr_5320_5345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (11))){
var inst_5271 = (state_5307[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5307,(10),Object,null,(9));
var inst_5280 = chs__$1.call(null,inst_5271);
var inst_5281 = done.call(null,inst_5271);
var inst_5282 = cljs.core.async.take_BANG_.call(null,inst_5280,inst_5281);
var state_5307__$1 = state_5307;
var statearr_5321_5346 = state_5307__$1;
(statearr_5321_5346[(2)] = inst_5282);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5307__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (9))){
var inst_5271 = (state_5307[(7)]);
var inst_5284 = (state_5307[(2)]);
var inst_5285 = (inst_5271 + (1));
var inst_5271__$1 = inst_5285;
var state_5307__$1 = (function (){var statearr_5322 = state_5307;
(statearr_5322[(7)] = inst_5271__$1);

(statearr_5322[(10)] = inst_5284);

return statearr_5322;
})();
var statearr_5323_5347 = state_5307__$1;
(statearr_5323_5347[(2)] = null);

(statearr_5323_5347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (5))){
var inst_5291 = (state_5307[(2)]);
var state_5307__$1 = (function (){var statearr_5324 = state_5307;
(statearr_5324[(11)] = inst_5291);

return statearr_5324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5307__$1,(12),dchan);
} else {
if((state_val_5308 === (14))){
var inst_5293 = (state_5307[(8)]);
var inst_5298 = cljs.core.apply.call(null,f,inst_5293);
var state_5307__$1 = state_5307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5307__$1,(16),out,inst_5298);
} else {
if((state_val_5308 === (16))){
var inst_5300 = (state_5307[(2)]);
var state_5307__$1 = (function (){var statearr_5325 = state_5307;
(statearr_5325[(12)] = inst_5300);

return statearr_5325;
})();
var statearr_5326_5348 = state_5307__$1;
(statearr_5326_5348[(2)] = null);

(statearr_5326_5348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (10))){
var inst_5275 = (state_5307[(2)]);
var inst_5276 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5307__$1 = (function (){var statearr_5327 = state_5307;
(statearr_5327[(13)] = inst_5275);

return statearr_5327;
})();
var statearr_5328_5349 = state_5307__$1;
(statearr_5328_5349[(2)] = inst_5276);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5307__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5308 === (8))){
var inst_5289 = (state_5307[(2)]);
var state_5307__$1 = state_5307;
var statearr_5329_5350 = state_5307__$1;
(statearr_5329_5350[(2)] = inst_5289);

(statearr_5329_5350[(1)] = (5));


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
});})(c__2146__auto___5335,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__1991__auto__,c__2146__auto___5335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__1992__auto__ = null;
var cljs$core$async$state_machine__1992__auto____0 = (function (){
var statearr_5330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5330[(0)] = cljs$core$async$state_machine__1992__auto__);

(statearr_5330[(1)] = (1));

return statearr_5330;
});
var cljs$core$async$state_machine__1992__auto____1 = (function (state_5307){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_5307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e5331){if((e5331 instanceof Object)){
var ex__1995__auto__ = e5331;
var statearr_5332_5351 = state_5307;
(statearr_5332_5351[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5352 = state_5307;
state_5307 = G__5352;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$state_machine__1992__auto__ = function(state_5307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1992__auto____1.call(this,state_5307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1992__auto____0;
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1992__auto____1;
return cljs$core$async$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___5335,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__2148__auto__ = (function (){var statearr_5333 = f__2147__auto__.call(null);
(statearr_5333[(6)] = c__2146__auto___5335);

return statearr_5333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___5335,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__5355 = arguments.length;
switch (G__5355) {
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
var c__2146__auto___5409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___5409,out){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___5409,out){
return (function (state_5387){
var state_val_5388 = (state_5387[(1)]);
if((state_val_5388 === (7))){
var inst_5367 = (state_5387[(7)]);
var inst_5366 = (state_5387[(8)]);
var inst_5366__$1 = (state_5387[(2)]);
var inst_5367__$1 = cljs.core.nth.call(null,inst_5366__$1,(0),null);
var inst_5368 = cljs.core.nth.call(null,inst_5366__$1,(1),null);
var inst_5369 = (inst_5367__$1 == null);
var state_5387__$1 = (function (){var statearr_5389 = state_5387;
(statearr_5389[(7)] = inst_5367__$1);

(statearr_5389[(8)] = inst_5366__$1);

(statearr_5389[(9)] = inst_5368);

return statearr_5389;
})();
if(cljs.core.truth_(inst_5369)){
var statearr_5390_5410 = state_5387__$1;
(statearr_5390_5410[(1)] = (8));

} else {
var statearr_5391_5411 = state_5387__$1;
(statearr_5391_5411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5388 === (1))){
var inst_5356 = cljs.core.vec.call(null,chs);
var inst_5357 = inst_5356;
var state_5387__$1 = (function (){var statearr_5392 = state_5387;
(statearr_5392[(10)] = inst_5357);

return statearr_5392;
})();
var statearr_5393_5412 = state_5387__$1;
(statearr_5393_5412[(2)] = null);

(statearr_5393_5412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5388 === (4))){
var inst_5357 = (state_5387[(10)]);
var state_5387__$1 = state_5387;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5387__$1,(7),inst_5357);
} else {
if((state_val_5388 === (6))){
var inst_5383 = (state_5387[(2)]);
var state_5387__$1 = state_5387;
var statearr_5394_5413 = state_5387__$1;
(statearr_5394_5413[(2)] = inst_5383);

(statearr_5394_5413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5388 === (3))){
var inst_5385 = (state_5387[(2)]);
var state_5387__$1 = state_5387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5387__$1,inst_5385);
} else {
if((state_val_5388 === (2))){
var inst_5357 = (state_5387[(10)]);
var inst_5359 = cljs.core.count.call(null,inst_5357);
var inst_5360 = (inst_5359 > (0));
var state_5387__$1 = state_5387;
if(cljs.core.truth_(inst_5360)){
var statearr_5396_5414 = state_5387__$1;
(statearr_5396_5414[(1)] = (4));

} else {
var statearr_5397_5415 = state_5387__$1;
(statearr_5397_5415[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5388 === (11))){
var inst_5357 = (state_5387[(10)]);
var inst_5376 = (state_5387[(2)]);
var tmp5395 = inst_5357;
var inst_5357__$1 = tmp5395;
var state_5387__$1 = (function (){var statearr_5398 = state_5387;
(statearr_5398[(11)] = inst_5376);

(statearr_5398[(10)] = inst_5357__$1);

return statearr_5398;
})();
var statearr_5399_5416 = state_5387__$1;
(statearr_5399_5416[(2)] = null);

(statearr_5399_5416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5388 === (9))){
var inst_5367 = (state_5387[(7)]);
var state_5387__$1 = state_5387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5387__$1,(11),out,inst_5367);
} else {
if((state_val_5388 === (5))){
var inst_5381 = cljs.core.async.close_BANG_.call(null,out);
var state_5387__$1 = state_5387;
var statearr_5400_5417 = state_5387__$1;
(statearr_5400_5417[(2)] = inst_5381);

(statearr_5400_5417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5388 === (10))){
var inst_5379 = (state_5387[(2)]);
var state_5387__$1 = state_5387;
var statearr_5401_5418 = state_5387__$1;
(statearr_5401_5418[(2)] = inst_5379);

(statearr_5401_5418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5388 === (8))){
var inst_5367 = (state_5387[(7)]);
var inst_5357 = (state_5387[(10)]);
var inst_5366 = (state_5387[(8)]);
var inst_5368 = (state_5387[(9)]);
var inst_5371 = (function (){var cs = inst_5357;
var vec__5362 = inst_5366;
var v = inst_5367;
var c = inst_5368;
return ((function (cs,vec__5362,v,c,inst_5367,inst_5357,inst_5366,inst_5368,state_val_5388,c__2146__auto___5409,out){
return (function (p1__5353_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5353_SHARP_);
});
;})(cs,vec__5362,v,c,inst_5367,inst_5357,inst_5366,inst_5368,state_val_5388,c__2146__auto___5409,out))
})();
var inst_5372 = cljs.core.filterv.call(null,inst_5371,inst_5357);
var inst_5357__$1 = inst_5372;
var state_5387__$1 = (function (){var statearr_5402 = state_5387;
(statearr_5402[(10)] = inst_5357__$1);

return statearr_5402;
})();
var statearr_5403_5419 = state_5387__$1;
(statearr_5403_5419[(2)] = null);

(statearr_5403_5419[(1)] = (2));


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
});})(c__2146__auto___5409,out))
;
return ((function (switch__1991__auto__,c__2146__auto___5409,out){
return (function() {
var cljs$core$async$state_machine__1992__auto__ = null;
var cljs$core$async$state_machine__1992__auto____0 = (function (){
var statearr_5404 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5404[(0)] = cljs$core$async$state_machine__1992__auto__);

(statearr_5404[(1)] = (1));

return statearr_5404;
});
var cljs$core$async$state_machine__1992__auto____1 = (function (state_5387){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_5387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e5405){if((e5405 instanceof Object)){
var ex__1995__auto__ = e5405;
var statearr_5406_5420 = state_5387;
(statearr_5406_5420[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5421 = state_5387;
state_5387 = G__5421;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$state_machine__1992__auto__ = function(state_5387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1992__auto____1.call(this,state_5387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1992__auto____0;
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1992__auto____1;
return cljs$core$async$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___5409,out))
})();
var state__2148__auto__ = (function (){var statearr_5407 = f__2147__auto__.call(null);
(statearr_5407[(6)] = c__2146__auto___5409);

return statearr_5407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___5409,out))
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
var G__5423 = arguments.length;
switch (G__5423) {
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
var c__2146__auto___5468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___5468,out){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___5468,out){
return (function (state_5447){
var state_val_5448 = (state_5447[(1)]);
if((state_val_5448 === (7))){
var inst_5429 = (state_5447[(7)]);
var inst_5429__$1 = (state_5447[(2)]);
var inst_5430 = (inst_5429__$1 == null);
var inst_5431 = cljs.core.not.call(null,inst_5430);
var state_5447__$1 = (function (){var statearr_5449 = state_5447;
(statearr_5449[(7)] = inst_5429__$1);

return statearr_5449;
})();
if(inst_5431){
var statearr_5450_5469 = state_5447__$1;
(statearr_5450_5469[(1)] = (8));

} else {
var statearr_5451_5470 = state_5447__$1;
(statearr_5451_5470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5448 === (1))){
var inst_5424 = (0);
var state_5447__$1 = (function (){var statearr_5452 = state_5447;
(statearr_5452[(8)] = inst_5424);

return statearr_5452;
})();
var statearr_5453_5471 = state_5447__$1;
(statearr_5453_5471[(2)] = null);

(statearr_5453_5471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5448 === (4))){
var state_5447__$1 = state_5447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5447__$1,(7),ch);
} else {
if((state_val_5448 === (6))){
var inst_5442 = (state_5447[(2)]);
var state_5447__$1 = state_5447;
var statearr_5454_5472 = state_5447__$1;
(statearr_5454_5472[(2)] = inst_5442);

(statearr_5454_5472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5448 === (3))){
var inst_5444 = (state_5447[(2)]);
var inst_5445 = cljs.core.async.close_BANG_.call(null,out);
var state_5447__$1 = (function (){var statearr_5455 = state_5447;
(statearr_5455[(9)] = inst_5444);

return statearr_5455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5447__$1,inst_5445);
} else {
if((state_val_5448 === (2))){
var inst_5424 = (state_5447[(8)]);
var inst_5426 = (inst_5424 < n);
var state_5447__$1 = state_5447;
if(cljs.core.truth_(inst_5426)){
var statearr_5456_5473 = state_5447__$1;
(statearr_5456_5473[(1)] = (4));

} else {
var statearr_5457_5474 = state_5447__$1;
(statearr_5457_5474[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5448 === (11))){
var inst_5424 = (state_5447[(8)]);
var inst_5434 = (state_5447[(2)]);
var inst_5435 = (inst_5424 + (1));
var inst_5424__$1 = inst_5435;
var state_5447__$1 = (function (){var statearr_5458 = state_5447;
(statearr_5458[(8)] = inst_5424__$1);

(statearr_5458[(10)] = inst_5434);

return statearr_5458;
})();
var statearr_5459_5475 = state_5447__$1;
(statearr_5459_5475[(2)] = null);

(statearr_5459_5475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5448 === (9))){
var state_5447__$1 = state_5447;
var statearr_5460_5476 = state_5447__$1;
(statearr_5460_5476[(2)] = null);

(statearr_5460_5476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5448 === (5))){
var state_5447__$1 = state_5447;
var statearr_5461_5477 = state_5447__$1;
(statearr_5461_5477[(2)] = null);

(statearr_5461_5477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5448 === (10))){
var inst_5439 = (state_5447[(2)]);
var state_5447__$1 = state_5447;
var statearr_5462_5478 = state_5447__$1;
(statearr_5462_5478[(2)] = inst_5439);

(statearr_5462_5478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5448 === (8))){
var inst_5429 = (state_5447[(7)]);
var state_5447__$1 = state_5447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5447__$1,(11),out,inst_5429);
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
});})(c__2146__auto___5468,out))
;
return ((function (switch__1991__auto__,c__2146__auto___5468,out){
return (function() {
var cljs$core$async$state_machine__1992__auto__ = null;
var cljs$core$async$state_machine__1992__auto____0 = (function (){
var statearr_5463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5463[(0)] = cljs$core$async$state_machine__1992__auto__);

(statearr_5463[(1)] = (1));

return statearr_5463;
});
var cljs$core$async$state_machine__1992__auto____1 = (function (state_5447){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_5447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e5464){if((e5464 instanceof Object)){
var ex__1995__auto__ = e5464;
var statearr_5465_5479 = state_5447;
(statearr_5465_5479[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5480 = state_5447;
state_5447 = G__5480;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$state_machine__1992__auto__ = function(state_5447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1992__auto____1.call(this,state_5447);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1992__auto____0;
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1992__auto____1;
return cljs$core$async$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___5468,out))
})();
var state__2148__auto__ = (function (){var statearr_5466 = f__2147__auto__.call(null);
(statearr_5466[(6)] = c__2146__auto___5468);

return statearr_5466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___5468,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5482 = (function (f,ch,meta5483){
this.f = f;
this.ch = ch;
this.meta5483 = meta5483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5484,meta5483__$1){
var self__ = this;
var _5484__$1 = this;
return (new cljs.core.async.t_cljs$core$async5482(self__.f,self__.ch,meta5483__$1));
});

cljs.core.async.t_cljs$core$async5482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5484){
var self__ = this;
var _5484__$1 = this;
return self__.meta5483;
});

cljs.core.async.t_cljs$core$async5482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5482.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async5485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5485 = (function (f,ch,meta5483,_,fn1,meta5486){
this.f = f;
this.ch = ch;
this.meta5483 = meta5483;
this._ = _;
this.fn1 = fn1;
this.meta5486 = meta5486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5487,meta5486__$1){
var self__ = this;
var _5487__$1 = this;
return (new cljs.core.async.t_cljs$core$async5485(self__.f,self__.ch,self__.meta5483,self__._,self__.fn1,meta5486__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async5485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5487){
var self__ = this;
var _5487__$1 = this;
return self__.meta5486;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5485.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5485.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5485.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5485.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5481_SHARP_){
return f1.call(null,(((p1__5481_SHARP_ == null))?null:self__.f.call(null,p1__5481_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async5485.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5483","meta5483",-2096077189,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async5482","cljs.core.async/t_cljs$core$async5482",-1234806575,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5486","meta5486",-29377754,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5485";

cljs.core.async.t_cljs$core$async5485.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5485");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5485.
 */
cljs.core.async.__GT_t_cljs$core$async5485 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5485(f__$1,ch__$1,meta5483__$1,___$2,fn1__$1,meta5486){
return (new cljs.core.async.t_cljs$core$async5485(f__$1,ch__$1,meta5483__$1,___$2,fn1__$1,meta5486));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async5485(self__.f,self__.ch,self__.meta5483,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async5482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async5482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5483","meta5483",-2096077189,null)], null);
});

cljs.core.async.t_cljs$core$async5482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5482";

cljs.core.async.t_cljs$core$async5482.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5482");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5482.
 */
cljs.core.async.__GT_t_cljs$core$async5482 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5482(f__$1,ch__$1,meta5483){
return (new cljs.core.async.t_cljs$core$async5482(f__$1,ch__$1,meta5483));
});

}

return (new cljs.core.async.t_cljs$core$async5482(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5488 = (function (f,ch,meta5489){
this.f = f;
this.ch = ch;
this.meta5489 = meta5489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5490,meta5489__$1){
var self__ = this;
var _5490__$1 = this;
return (new cljs.core.async.t_cljs$core$async5488(self__.f,self__.ch,meta5489__$1));
});

cljs.core.async.t_cljs$core$async5488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5490){
var self__ = this;
var _5490__$1 = this;
return self__.meta5489;
});

cljs.core.async.t_cljs$core$async5488.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5488.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5488.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async5488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5489","meta5489",-978248803,null)], null);
});

cljs.core.async.t_cljs$core$async5488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5488";

cljs.core.async.t_cljs$core$async5488.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5488");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5488.
 */
cljs.core.async.__GT_t_cljs$core$async5488 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async5488(f__$1,ch__$1,meta5489){
return (new cljs.core.async.t_cljs$core$async5488(f__$1,ch__$1,meta5489));
});

}

return (new cljs.core.async.t_cljs$core$async5488(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async5491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5491 = (function (p,ch,meta5492){
this.p = p;
this.ch = ch;
this.meta5492 = meta5492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5493,meta5492__$1){
var self__ = this;
var _5493__$1 = this;
return (new cljs.core.async.t_cljs$core$async5491(self__.p,self__.ch,meta5492__$1));
});

cljs.core.async.t_cljs$core$async5491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5493){
var self__ = this;
var _5493__$1 = this;
return self__.meta5492;
});

cljs.core.async.t_cljs$core$async5491.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5491.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5491.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5491.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async5491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5492","meta5492",-2028387603,null)], null);
});

cljs.core.async.t_cljs$core$async5491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5491";

cljs.core.async.t_cljs$core$async5491.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5491");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5491.
 */
cljs.core.async.__GT_t_cljs$core$async5491 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async5491(p__$1,ch__$1,meta5492){
return (new cljs.core.async.t_cljs$core$async5491(p__$1,ch__$1,meta5492));
});

}

return (new cljs.core.async.t_cljs$core$async5491(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__5495 = arguments.length;
switch (G__5495) {
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
var c__2146__auto___5535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___5535,out){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___5535,out){
return (function (state_5516){
var state_val_5517 = (state_5516[(1)]);
if((state_val_5517 === (7))){
var inst_5512 = (state_5516[(2)]);
var state_5516__$1 = state_5516;
var statearr_5518_5536 = state_5516__$1;
(statearr_5518_5536[(2)] = inst_5512);

(statearr_5518_5536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5517 === (1))){
var state_5516__$1 = state_5516;
var statearr_5519_5537 = state_5516__$1;
(statearr_5519_5537[(2)] = null);

(statearr_5519_5537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5517 === (4))){
var inst_5498 = (state_5516[(7)]);
var inst_5498__$1 = (state_5516[(2)]);
var inst_5499 = (inst_5498__$1 == null);
var state_5516__$1 = (function (){var statearr_5520 = state_5516;
(statearr_5520[(7)] = inst_5498__$1);

return statearr_5520;
})();
if(cljs.core.truth_(inst_5499)){
var statearr_5521_5538 = state_5516__$1;
(statearr_5521_5538[(1)] = (5));

} else {
var statearr_5522_5539 = state_5516__$1;
(statearr_5522_5539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5517 === (6))){
var inst_5498 = (state_5516[(7)]);
var inst_5503 = p.call(null,inst_5498);
var state_5516__$1 = state_5516;
if(cljs.core.truth_(inst_5503)){
var statearr_5523_5540 = state_5516__$1;
(statearr_5523_5540[(1)] = (8));

} else {
var statearr_5524_5541 = state_5516__$1;
(statearr_5524_5541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5517 === (3))){
var inst_5514 = (state_5516[(2)]);
var state_5516__$1 = state_5516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5516__$1,inst_5514);
} else {
if((state_val_5517 === (2))){
var state_5516__$1 = state_5516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5516__$1,(4),ch);
} else {
if((state_val_5517 === (11))){
var inst_5506 = (state_5516[(2)]);
var state_5516__$1 = state_5516;
var statearr_5525_5542 = state_5516__$1;
(statearr_5525_5542[(2)] = inst_5506);

(statearr_5525_5542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5517 === (9))){
var state_5516__$1 = state_5516;
var statearr_5526_5543 = state_5516__$1;
(statearr_5526_5543[(2)] = null);

(statearr_5526_5543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5517 === (5))){
var inst_5501 = cljs.core.async.close_BANG_.call(null,out);
var state_5516__$1 = state_5516;
var statearr_5527_5544 = state_5516__$1;
(statearr_5527_5544[(2)] = inst_5501);

(statearr_5527_5544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5517 === (10))){
var inst_5509 = (state_5516[(2)]);
var state_5516__$1 = (function (){var statearr_5528 = state_5516;
(statearr_5528[(8)] = inst_5509);

return statearr_5528;
})();
var statearr_5529_5545 = state_5516__$1;
(statearr_5529_5545[(2)] = null);

(statearr_5529_5545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5517 === (8))){
var inst_5498 = (state_5516[(7)]);
var state_5516__$1 = state_5516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5516__$1,(11),out,inst_5498);
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
});})(c__2146__auto___5535,out))
;
return ((function (switch__1991__auto__,c__2146__auto___5535,out){
return (function() {
var cljs$core$async$state_machine__1992__auto__ = null;
var cljs$core$async$state_machine__1992__auto____0 = (function (){
var statearr_5530 = [null,null,null,null,null,null,null,null,null];
(statearr_5530[(0)] = cljs$core$async$state_machine__1992__auto__);

(statearr_5530[(1)] = (1));

return statearr_5530;
});
var cljs$core$async$state_machine__1992__auto____1 = (function (state_5516){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_5516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e5531){if((e5531 instanceof Object)){
var ex__1995__auto__ = e5531;
var statearr_5532_5546 = state_5516;
(statearr_5532_5546[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5547 = state_5516;
state_5516 = G__5547;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$state_machine__1992__auto__ = function(state_5516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1992__auto____1.call(this,state_5516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1992__auto____0;
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1992__auto____1;
return cljs$core$async$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___5535,out))
})();
var state__2148__auto__ = (function (){var statearr_5533 = f__2147__auto__.call(null);
(statearr_5533[(6)] = c__2146__auto___5535);

return statearr_5533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___5535,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__5549 = arguments.length;
switch (G__5549) {
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
var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__){
return (function (state_5612){
var state_val_5613 = (state_5612[(1)]);
if((state_val_5613 === (7))){
var inst_5608 = (state_5612[(2)]);
var state_5612__$1 = state_5612;
var statearr_5614_5652 = state_5612__$1;
(statearr_5614_5652[(2)] = inst_5608);

(statearr_5614_5652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (20))){
var inst_5578 = (state_5612[(7)]);
var inst_5589 = (state_5612[(2)]);
var inst_5590 = cljs.core.next.call(null,inst_5578);
var inst_5564 = inst_5590;
var inst_5565 = null;
var inst_5566 = (0);
var inst_5567 = (0);
var state_5612__$1 = (function (){var statearr_5615 = state_5612;
(statearr_5615[(8)] = inst_5589);

(statearr_5615[(9)] = inst_5566);

(statearr_5615[(10)] = inst_5567);

(statearr_5615[(11)] = inst_5564);

(statearr_5615[(12)] = inst_5565);

return statearr_5615;
})();
var statearr_5616_5653 = state_5612__$1;
(statearr_5616_5653[(2)] = null);

(statearr_5616_5653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (1))){
var state_5612__$1 = state_5612;
var statearr_5617_5654 = state_5612__$1;
(statearr_5617_5654[(2)] = null);

(statearr_5617_5654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (4))){
var inst_5553 = (state_5612[(13)]);
var inst_5553__$1 = (state_5612[(2)]);
var inst_5554 = (inst_5553__$1 == null);
var state_5612__$1 = (function (){var statearr_5618 = state_5612;
(statearr_5618[(13)] = inst_5553__$1);

return statearr_5618;
})();
if(cljs.core.truth_(inst_5554)){
var statearr_5619_5655 = state_5612__$1;
(statearr_5619_5655[(1)] = (5));

} else {
var statearr_5620_5656 = state_5612__$1;
(statearr_5620_5656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (15))){
var state_5612__$1 = state_5612;
var statearr_5624_5657 = state_5612__$1;
(statearr_5624_5657[(2)] = null);

(statearr_5624_5657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (21))){
var state_5612__$1 = state_5612;
var statearr_5625_5658 = state_5612__$1;
(statearr_5625_5658[(2)] = null);

(statearr_5625_5658[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (13))){
var inst_5566 = (state_5612[(9)]);
var inst_5567 = (state_5612[(10)]);
var inst_5564 = (state_5612[(11)]);
var inst_5565 = (state_5612[(12)]);
var inst_5574 = (state_5612[(2)]);
var inst_5575 = (inst_5567 + (1));
var tmp5621 = inst_5566;
var tmp5622 = inst_5564;
var tmp5623 = inst_5565;
var inst_5564__$1 = tmp5622;
var inst_5565__$1 = tmp5623;
var inst_5566__$1 = tmp5621;
var inst_5567__$1 = inst_5575;
var state_5612__$1 = (function (){var statearr_5626 = state_5612;
(statearr_5626[(14)] = inst_5574);

(statearr_5626[(9)] = inst_5566__$1);

(statearr_5626[(10)] = inst_5567__$1);

(statearr_5626[(11)] = inst_5564__$1);

(statearr_5626[(12)] = inst_5565__$1);

return statearr_5626;
})();
var statearr_5627_5659 = state_5612__$1;
(statearr_5627_5659[(2)] = null);

(statearr_5627_5659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (22))){
var state_5612__$1 = state_5612;
var statearr_5628_5660 = state_5612__$1;
(statearr_5628_5660[(2)] = null);

(statearr_5628_5660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (6))){
var inst_5553 = (state_5612[(13)]);
var inst_5562 = f.call(null,inst_5553);
var inst_5563 = cljs.core.seq.call(null,inst_5562);
var inst_5564 = inst_5563;
var inst_5565 = null;
var inst_5566 = (0);
var inst_5567 = (0);
var state_5612__$1 = (function (){var statearr_5629 = state_5612;
(statearr_5629[(9)] = inst_5566);

(statearr_5629[(10)] = inst_5567);

(statearr_5629[(11)] = inst_5564);

(statearr_5629[(12)] = inst_5565);

return statearr_5629;
})();
var statearr_5630_5661 = state_5612__$1;
(statearr_5630_5661[(2)] = null);

(statearr_5630_5661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (17))){
var inst_5578 = (state_5612[(7)]);
var inst_5582 = cljs.core.chunk_first.call(null,inst_5578);
var inst_5583 = cljs.core.chunk_rest.call(null,inst_5578);
var inst_5584 = cljs.core.count.call(null,inst_5582);
var inst_5564 = inst_5583;
var inst_5565 = inst_5582;
var inst_5566 = inst_5584;
var inst_5567 = (0);
var state_5612__$1 = (function (){var statearr_5631 = state_5612;
(statearr_5631[(9)] = inst_5566);

(statearr_5631[(10)] = inst_5567);

(statearr_5631[(11)] = inst_5564);

(statearr_5631[(12)] = inst_5565);

return statearr_5631;
})();
var statearr_5632_5662 = state_5612__$1;
(statearr_5632_5662[(2)] = null);

(statearr_5632_5662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (3))){
var inst_5610 = (state_5612[(2)]);
var state_5612__$1 = state_5612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5612__$1,inst_5610);
} else {
if((state_val_5613 === (12))){
var inst_5598 = (state_5612[(2)]);
var state_5612__$1 = state_5612;
var statearr_5633_5663 = state_5612__$1;
(statearr_5633_5663[(2)] = inst_5598);

(statearr_5633_5663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (2))){
var state_5612__$1 = state_5612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5612__$1,(4),in$);
} else {
if((state_val_5613 === (23))){
var inst_5606 = (state_5612[(2)]);
var state_5612__$1 = state_5612;
var statearr_5634_5664 = state_5612__$1;
(statearr_5634_5664[(2)] = inst_5606);

(statearr_5634_5664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (19))){
var inst_5593 = (state_5612[(2)]);
var state_5612__$1 = state_5612;
var statearr_5635_5665 = state_5612__$1;
(statearr_5635_5665[(2)] = inst_5593);

(statearr_5635_5665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (11))){
var inst_5578 = (state_5612[(7)]);
var inst_5564 = (state_5612[(11)]);
var inst_5578__$1 = cljs.core.seq.call(null,inst_5564);
var state_5612__$1 = (function (){var statearr_5636 = state_5612;
(statearr_5636[(7)] = inst_5578__$1);

return statearr_5636;
})();
if(inst_5578__$1){
var statearr_5637_5666 = state_5612__$1;
(statearr_5637_5666[(1)] = (14));

} else {
var statearr_5638_5667 = state_5612__$1;
(statearr_5638_5667[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (9))){
var inst_5600 = (state_5612[(2)]);
var inst_5601 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_5612__$1 = (function (){var statearr_5639 = state_5612;
(statearr_5639[(15)] = inst_5600);

return statearr_5639;
})();
if(cljs.core.truth_(inst_5601)){
var statearr_5640_5668 = state_5612__$1;
(statearr_5640_5668[(1)] = (21));

} else {
var statearr_5641_5669 = state_5612__$1;
(statearr_5641_5669[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (5))){
var inst_5556 = cljs.core.async.close_BANG_.call(null,out);
var state_5612__$1 = state_5612;
var statearr_5642_5670 = state_5612__$1;
(statearr_5642_5670[(2)] = inst_5556);

(statearr_5642_5670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (14))){
var inst_5578 = (state_5612[(7)]);
var inst_5580 = cljs.core.chunked_seq_QMARK_.call(null,inst_5578);
var state_5612__$1 = state_5612;
if(inst_5580){
var statearr_5643_5671 = state_5612__$1;
(statearr_5643_5671[(1)] = (17));

} else {
var statearr_5644_5672 = state_5612__$1;
(statearr_5644_5672[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (16))){
var inst_5596 = (state_5612[(2)]);
var state_5612__$1 = state_5612;
var statearr_5645_5673 = state_5612__$1;
(statearr_5645_5673[(2)] = inst_5596);

(statearr_5645_5673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5613 === (10))){
var inst_5567 = (state_5612[(10)]);
var inst_5565 = (state_5612[(12)]);
var inst_5572 = cljs.core._nth.call(null,inst_5565,inst_5567);
var state_5612__$1 = state_5612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5612__$1,(13),out,inst_5572);
} else {
if((state_val_5613 === (18))){
var inst_5578 = (state_5612[(7)]);
var inst_5587 = cljs.core.first.call(null,inst_5578);
var state_5612__$1 = state_5612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5612__$1,(20),out,inst_5587);
} else {
if((state_val_5613 === (8))){
var inst_5566 = (state_5612[(9)]);
var inst_5567 = (state_5612[(10)]);
var inst_5569 = (inst_5567 < inst_5566);
var inst_5570 = inst_5569;
var state_5612__$1 = state_5612;
if(cljs.core.truth_(inst_5570)){
var statearr_5646_5674 = state_5612__$1;
(statearr_5646_5674[(1)] = (10));

} else {
var statearr_5647_5675 = state_5612__$1;
(statearr_5647_5675[(1)] = (11));

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
});})(c__2146__auto__))
;
return ((function (switch__1991__auto__,c__2146__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__1992__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__1992__auto____0 = (function (){
var statearr_5648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5648[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__1992__auto__);

(statearr_5648[(1)] = (1));

return statearr_5648;
});
var cljs$core$async$mapcat_STAR__$_state_machine__1992__auto____1 = (function (state_5612){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_5612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e5649){if((e5649 instanceof Object)){
var ex__1995__auto__ = e5649;
var statearr_5650_5676 = state_5612;
(statearr_5650_5676[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5677 = state_5612;
state_5612 = G__5677;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__1992__auto__ = function(state_5612){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__1992__auto____1.call(this,state_5612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__1992__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__1992__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__))
})();
var state__2148__auto__ = (function (){var statearr_5651 = f__2147__auto__.call(null);
(statearr_5651[(6)] = c__2146__auto__);

return statearr_5651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__))
);

return c__2146__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__5679 = arguments.length;
switch (G__5679) {
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
var G__5682 = arguments.length;
switch (G__5682) {
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
var G__5685 = arguments.length;
switch (G__5685) {
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
var c__2146__auto___5732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___5732,out){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___5732,out){
return (function (state_5709){
var state_val_5710 = (state_5709[(1)]);
if((state_val_5710 === (7))){
var inst_5704 = (state_5709[(2)]);
var state_5709__$1 = state_5709;
var statearr_5711_5733 = state_5709__$1;
(statearr_5711_5733[(2)] = inst_5704);

(statearr_5711_5733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5710 === (1))){
var inst_5686 = null;
var state_5709__$1 = (function (){var statearr_5712 = state_5709;
(statearr_5712[(7)] = inst_5686);

return statearr_5712;
})();
var statearr_5713_5734 = state_5709__$1;
(statearr_5713_5734[(2)] = null);

(statearr_5713_5734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5710 === (4))){
var inst_5689 = (state_5709[(8)]);
var inst_5689__$1 = (state_5709[(2)]);
var inst_5690 = (inst_5689__$1 == null);
var inst_5691 = cljs.core.not.call(null,inst_5690);
var state_5709__$1 = (function (){var statearr_5714 = state_5709;
(statearr_5714[(8)] = inst_5689__$1);

return statearr_5714;
})();
if(inst_5691){
var statearr_5715_5735 = state_5709__$1;
(statearr_5715_5735[(1)] = (5));

} else {
var statearr_5716_5736 = state_5709__$1;
(statearr_5716_5736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5710 === (6))){
var state_5709__$1 = state_5709;
var statearr_5717_5737 = state_5709__$1;
(statearr_5717_5737[(2)] = null);

(statearr_5717_5737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5710 === (3))){
var inst_5706 = (state_5709[(2)]);
var inst_5707 = cljs.core.async.close_BANG_.call(null,out);
var state_5709__$1 = (function (){var statearr_5718 = state_5709;
(statearr_5718[(9)] = inst_5706);

return statearr_5718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5709__$1,inst_5707);
} else {
if((state_val_5710 === (2))){
var state_5709__$1 = state_5709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5709__$1,(4),ch);
} else {
if((state_val_5710 === (11))){
var inst_5689 = (state_5709[(8)]);
var inst_5698 = (state_5709[(2)]);
var inst_5686 = inst_5689;
var state_5709__$1 = (function (){var statearr_5719 = state_5709;
(statearr_5719[(10)] = inst_5698);

(statearr_5719[(7)] = inst_5686);

return statearr_5719;
})();
var statearr_5720_5738 = state_5709__$1;
(statearr_5720_5738[(2)] = null);

(statearr_5720_5738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5710 === (9))){
var inst_5689 = (state_5709[(8)]);
var state_5709__$1 = state_5709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5709__$1,(11),out,inst_5689);
} else {
if((state_val_5710 === (5))){
var inst_5689 = (state_5709[(8)]);
var inst_5686 = (state_5709[(7)]);
var inst_5693 = cljs.core._EQ_.call(null,inst_5689,inst_5686);
var state_5709__$1 = state_5709;
if(inst_5693){
var statearr_5722_5739 = state_5709__$1;
(statearr_5722_5739[(1)] = (8));

} else {
var statearr_5723_5740 = state_5709__$1;
(statearr_5723_5740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5710 === (10))){
var inst_5701 = (state_5709[(2)]);
var state_5709__$1 = state_5709;
var statearr_5724_5741 = state_5709__$1;
(statearr_5724_5741[(2)] = inst_5701);

(statearr_5724_5741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5710 === (8))){
var inst_5686 = (state_5709[(7)]);
var tmp5721 = inst_5686;
var inst_5686__$1 = tmp5721;
var state_5709__$1 = (function (){var statearr_5725 = state_5709;
(statearr_5725[(7)] = inst_5686__$1);

return statearr_5725;
})();
var statearr_5726_5742 = state_5709__$1;
(statearr_5726_5742[(2)] = null);

(statearr_5726_5742[(1)] = (2));


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
});})(c__2146__auto___5732,out))
;
return ((function (switch__1991__auto__,c__2146__auto___5732,out){
return (function() {
var cljs$core$async$state_machine__1992__auto__ = null;
var cljs$core$async$state_machine__1992__auto____0 = (function (){
var statearr_5727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5727[(0)] = cljs$core$async$state_machine__1992__auto__);

(statearr_5727[(1)] = (1));

return statearr_5727;
});
var cljs$core$async$state_machine__1992__auto____1 = (function (state_5709){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_5709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e5728){if((e5728 instanceof Object)){
var ex__1995__auto__ = e5728;
var statearr_5729_5743 = state_5709;
(statearr_5729_5743[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5744 = state_5709;
state_5709 = G__5744;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$state_machine__1992__auto__ = function(state_5709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1992__auto____1.call(this,state_5709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1992__auto____0;
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1992__auto____1;
return cljs$core$async$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___5732,out))
})();
var state__2148__auto__ = (function (){var statearr_5730 = f__2147__auto__.call(null);
(statearr_5730[(6)] = c__2146__auto___5732);

return statearr_5730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___5732,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__5746 = arguments.length;
switch (G__5746) {
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
var c__2146__auto___5812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___5812,out){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___5812,out){
return (function (state_5784){
var state_val_5785 = (state_5784[(1)]);
if((state_val_5785 === (7))){
var inst_5780 = (state_5784[(2)]);
var state_5784__$1 = state_5784;
var statearr_5786_5813 = state_5784__$1;
(statearr_5786_5813[(2)] = inst_5780);

(statearr_5786_5813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5785 === (1))){
var inst_5747 = (new Array(n));
var inst_5748 = inst_5747;
var inst_5749 = (0);
var state_5784__$1 = (function (){var statearr_5787 = state_5784;
(statearr_5787[(7)] = inst_5748);

(statearr_5787[(8)] = inst_5749);

return statearr_5787;
})();
var statearr_5788_5814 = state_5784__$1;
(statearr_5788_5814[(2)] = null);

(statearr_5788_5814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5785 === (4))){
var inst_5752 = (state_5784[(9)]);
var inst_5752__$1 = (state_5784[(2)]);
var inst_5753 = (inst_5752__$1 == null);
var inst_5754 = cljs.core.not.call(null,inst_5753);
var state_5784__$1 = (function (){var statearr_5789 = state_5784;
(statearr_5789[(9)] = inst_5752__$1);

return statearr_5789;
})();
if(inst_5754){
var statearr_5790_5815 = state_5784__$1;
(statearr_5790_5815[(1)] = (5));

} else {
var statearr_5791_5816 = state_5784__$1;
(statearr_5791_5816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5785 === (15))){
var inst_5774 = (state_5784[(2)]);
var state_5784__$1 = state_5784;
var statearr_5792_5817 = state_5784__$1;
(statearr_5792_5817[(2)] = inst_5774);

(statearr_5792_5817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5785 === (13))){
var state_5784__$1 = state_5784;
var statearr_5793_5818 = state_5784__$1;
(statearr_5793_5818[(2)] = null);

(statearr_5793_5818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5785 === (6))){
var inst_5749 = (state_5784[(8)]);
var inst_5770 = (inst_5749 > (0));
var state_5784__$1 = state_5784;
if(cljs.core.truth_(inst_5770)){
var statearr_5794_5819 = state_5784__$1;
(statearr_5794_5819[(1)] = (12));

} else {
var statearr_5795_5820 = state_5784__$1;
(statearr_5795_5820[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5785 === (3))){
var inst_5782 = (state_5784[(2)]);
var state_5784__$1 = state_5784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5784__$1,inst_5782);
} else {
if((state_val_5785 === (12))){
var inst_5748 = (state_5784[(7)]);
var inst_5772 = cljs.core.vec.call(null,inst_5748);
var state_5784__$1 = state_5784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5784__$1,(15),out,inst_5772);
} else {
if((state_val_5785 === (2))){
var state_5784__$1 = state_5784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5784__$1,(4),ch);
} else {
if((state_val_5785 === (11))){
var inst_5764 = (state_5784[(2)]);
var inst_5765 = (new Array(n));
var inst_5748 = inst_5765;
var inst_5749 = (0);
var state_5784__$1 = (function (){var statearr_5796 = state_5784;
(statearr_5796[(10)] = inst_5764);

(statearr_5796[(7)] = inst_5748);

(statearr_5796[(8)] = inst_5749);

return statearr_5796;
})();
var statearr_5797_5821 = state_5784__$1;
(statearr_5797_5821[(2)] = null);

(statearr_5797_5821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5785 === (9))){
var inst_5748 = (state_5784[(7)]);
var inst_5762 = cljs.core.vec.call(null,inst_5748);
var state_5784__$1 = state_5784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5784__$1,(11),out,inst_5762);
} else {
if((state_val_5785 === (5))){
var inst_5757 = (state_5784[(11)]);
var inst_5752 = (state_5784[(9)]);
var inst_5748 = (state_5784[(7)]);
var inst_5749 = (state_5784[(8)]);
var inst_5756 = (inst_5748[inst_5749] = inst_5752);
var inst_5757__$1 = (inst_5749 + (1));
var inst_5758 = (inst_5757__$1 < n);
var state_5784__$1 = (function (){var statearr_5798 = state_5784;
(statearr_5798[(11)] = inst_5757__$1);

(statearr_5798[(12)] = inst_5756);

return statearr_5798;
})();
if(cljs.core.truth_(inst_5758)){
var statearr_5799_5822 = state_5784__$1;
(statearr_5799_5822[(1)] = (8));

} else {
var statearr_5800_5823 = state_5784__$1;
(statearr_5800_5823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5785 === (14))){
var inst_5777 = (state_5784[(2)]);
var inst_5778 = cljs.core.async.close_BANG_.call(null,out);
var state_5784__$1 = (function (){var statearr_5802 = state_5784;
(statearr_5802[(13)] = inst_5777);

return statearr_5802;
})();
var statearr_5803_5824 = state_5784__$1;
(statearr_5803_5824[(2)] = inst_5778);

(statearr_5803_5824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5785 === (10))){
var inst_5768 = (state_5784[(2)]);
var state_5784__$1 = state_5784;
var statearr_5804_5825 = state_5784__$1;
(statearr_5804_5825[(2)] = inst_5768);

(statearr_5804_5825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5785 === (8))){
var inst_5757 = (state_5784[(11)]);
var inst_5748 = (state_5784[(7)]);
var tmp5801 = inst_5748;
var inst_5748__$1 = tmp5801;
var inst_5749 = inst_5757;
var state_5784__$1 = (function (){var statearr_5805 = state_5784;
(statearr_5805[(7)] = inst_5748__$1);

(statearr_5805[(8)] = inst_5749);

return statearr_5805;
})();
var statearr_5806_5826 = state_5784__$1;
(statearr_5806_5826[(2)] = null);

(statearr_5806_5826[(1)] = (2));


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
});})(c__2146__auto___5812,out))
;
return ((function (switch__1991__auto__,c__2146__auto___5812,out){
return (function() {
var cljs$core$async$state_machine__1992__auto__ = null;
var cljs$core$async$state_machine__1992__auto____0 = (function (){
var statearr_5807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5807[(0)] = cljs$core$async$state_machine__1992__auto__);

(statearr_5807[(1)] = (1));

return statearr_5807;
});
var cljs$core$async$state_machine__1992__auto____1 = (function (state_5784){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_5784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e5808){if((e5808 instanceof Object)){
var ex__1995__auto__ = e5808;
var statearr_5809_5827 = state_5784;
(statearr_5809_5827[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5828 = state_5784;
state_5784 = G__5828;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$state_machine__1992__auto__ = function(state_5784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1992__auto____1.call(this,state_5784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1992__auto____0;
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1992__auto____1;
return cljs$core$async$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___5812,out))
})();
var state__2148__auto__ = (function (){var statearr_5810 = f__2147__auto__.call(null);
(statearr_5810[(6)] = c__2146__auto___5812);

return statearr_5810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___5812,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__5830 = arguments.length;
switch (G__5830) {
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
var c__2146__auto___5900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___5900,out){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___5900,out){
return (function (state_5872){
var state_val_5873 = (state_5872[(1)]);
if((state_val_5873 === (7))){
var inst_5868 = (state_5872[(2)]);
var state_5872__$1 = state_5872;
var statearr_5874_5901 = state_5872__$1;
(statearr_5874_5901[(2)] = inst_5868);

(statearr_5874_5901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5873 === (1))){
var inst_5831 = [];
var inst_5832 = inst_5831;
var inst_5833 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5872__$1 = (function (){var statearr_5875 = state_5872;
(statearr_5875[(7)] = inst_5832);

(statearr_5875[(8)] = inst_5833);

return statearr_5875;
})();
var statearr_5876_5902 = state_5872__$1;
(statearr_5876_5902[(2)] = null);

(statearr_5876_5902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5873 === (4))){
var inst_5836 = (state_5872[(9)]);
var inst_5836__$1 = (state_5872[(2)]);
var inst_5837 = (inst_5836__$1 == null);
var inst_5838 = cljs.core.not.call(null,inst_5837);
var state_5872__$1 = (function (){var statearr_5877 = state_5872;
(statearr_5877[(9)] = inst_5836__$1);

return statearr_5877;
})();
if(inst_5838){
var statearr_5878_5903 = state_5872__$1;
(statearr_5878_5903[(1)] = (5));

} else {
var statearr_5879_5904 = state_5872__$1;
(statearr_5879_5904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5873 === (15))){
var inst_5862 = (state_5872[(2)]);
var state_5872__$1 = state_5872;
var statearr_5880_5905 = state_5872__$1;
(statearr_5880_5905[(2)] = inst_5862);

(statearr_5880_5905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5873 === (13))){
var state_5872__$1 = state_5872;
var statearr_5881_5906 = state_5872__$1;
(statearr_5881_5906[(2)] = null);

(statearr_5881_5906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5873 === (6))){
var inst_5832 = (state_5872[(7)]);
var inst_5857 = inst_5832.length;
var inst_5858 = (inst_5857 > (0));
var state_5872__$1 = state_5872;
if(cljs.core.truth_(inst_5858)){
var statearr_5882_5907 = state_5872__$1;
(statearr_5882_5907[(1)] = (12));

} else {
var statearr_5883_5908 = state_5872__$1;
(statearr_5883_5908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5873 === (3))){
var inst_5870 = (state_5872[(2)]);
var state_5872__$1 = state_5872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5872__$1,inst_5870);
} else {
if((state_val_5873 === (12))){
var inst_5832 = (state_5872[(7)]);
var inst_5860 = cljs.core.vec.call(null,inst_5832);
var state_5872__$1 = state_5872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5872__$1,(15),out,inst_5860);
} else {
if((state_val_5873 === (2))){
var state_5872__$1 = state_5872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5872__$1,(4),ch);
} else {
if((state_val_5873 === (11))){
var inst_5836 = (state_5872[(9)]);
var inst_5840 = (state_5872[(10)]);
var inst_5850 = (state_5872[(2)]);
var inst_5851 = [];
var inst_5852 = inst_5851.push(inst_5836);
var inst_5832 = inst_5851;
var inst_5833 = inst_5840;
var state_5872__$1 = (function (){var statearr_5884 = state_5872;
(statearr_5884[(7)] = inst_5832);

(statearr_5884[(11)] = inst_5850);

(statearr_5884[(8)] = inst_5833);

(statearr_5884[(12)] = inst_5852);

return statearr_5884;
})();
var statearr_5885_5909 = state_5872__$1;
(statearr_5885_5909[(2)] = null);

(statearr_5885_5909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5873 === (9))){
var inst_5832 = (state_5872[(7)]);
var inst_5848 = cljs.core.vec.call(null,inst_5832);
var state_5872__$1 = state_5872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5872__$1,(11),out,inst_5848);
} else {
if((state_val_5873 === (5))){
var inst_5836 = (state_5872[(9)]);
var inst_5840 = (state_5872[(10)]);
var inst_5833 = (state_5872[(8)]);
var inst_5840__$1 = f.call(null,inst_5836);
var inst_5841 = cljs.core._EQ_.call(null,inst_5840__$1,inst_5833);
var inst_5842 = cljs.core.keyword_identical_QMARK_.call(null,inst_5833,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_5843 = ((inst_5841) || (inst_5842));
var state_5872__$1 = (function (){var statearr_5886 = state_5872;
(statearr_5886[(10)] = inst_5840__$1);

return statearr_5886;
})();
if(cljs.core.truth_(inst_5843)){
var statearr_5887_5910 = state_5872__$1;
(statearr_5887_5910[(1)] = (8));

} else {
var statearr_5888_5911 = state_5872__$1;
(statearr_5888_5911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5873 === (14))){
var inst_5865 = (state_5872[(2)]);
var inst_5866 = cljs.core.async.close_BANG_.call(null,out);
var state_5872__$1 = (function (){var statearr_5890 = state_5872;
(statearr_5890[(13)] = inst_5865);

return statearr_5890;
})();
var statearr_5891_5912 = state_5872__$1;
(statearr_5891_5912[(2)] = inst_5866);

(statearr_5891_5912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5873 === (10))){
var inst_5855 = (state_5872[(2)]);
var state_5872__$1 = state_5872;
var statearr_5892_5913 = state_5872__$1;
(statearr_5892_5913[(2)] = inst_5855);

(statearr_5892_5913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5873 === (8))){
var inst_5836 = (state_5872[(9)]);
var inst_5832 = (state_5872[(7)]);
var inst_5840 = (state_5872[(10)]);
var inst_5845 = inst_5832.push(inst_5836);
var tmp5889 = inst_5832;
var inst_5832__$1 = tmp5889;
var inst_5833 = inst_5840;
var state_5872__$1 = (function (){var statearr_5893 = state_5872;
(statearr_5893[(7)] = inst_5832__$1);

(statearr_5893[(8)] = inst_5833);

(statearr_5893[(14)] = inst_5845);

return statearr_5893;
})();
var statearr_5894_5914 = state_5872__$1;
(statearr_5894_5914[(2)] = null);

(statearr_5894_5914[(1)] = (2));


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
});})(c__2146__auto___5900,out))
;
return ((function (switch__1991__auto__,c__2146__auto___5900,out){
return (function() {
var cljs$core$async$state_machine__1992__auto__ = null;
var cljs$core$async$state_machine__1992__auto____0 = (function (){
var statearr_5895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5895[(0)] = cljs$core$async$state_machine__1992__auto__);

(statearr_5895[(1)] = (1));

return statearr_5895;
});
var cljs$core$async$state_machine__1992__auto____1 = (function (state_5872){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_5872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e5896){if((e5896 instanceof Object)){
var ex__1995__auto__ = e5896;
var statearr_5897_5915 = state_5872;
(statearr_5897_5915[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5916 = state_5872;
state_5872 = G__5916;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
cljs$core$async$state_machine__1992__auto__ = function(state_5872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1992__auto____1.call(this,state_5872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1992__auto____0;
cljs$core$async$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1992__auto____1;
return cljs$core$async$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___5900,out))
})();
var state__2148__auto__ = (function (){var statearr_5898 = f__2147__auto__.call(null);
(statearr_5898[(6)] = c__2146__auto___5900);

return statearr_5898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___5900,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
