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
var G__4061 = arguments.length;
switch (G__4061) {
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
if(typeof cljs.core.async.t_cljs$core$async4062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4062 = (function (f,blockable,meta4063){
this.f = f;
this.blockable = blockable;
this.meta4063 = meta4063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4064,meta4063__$1){
var self__ = this;
var _4064__$1 = this;
return (new cljs.core.async.t_cljs$core$async4062(self__.f,self__.blockable,meta4063__$1));
});

cljs.core.async.t_cljs$core$async4062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4064){
var self__ = this;
var _4064__$1 = this;
return self__.meta4063;
});

cljs.core.async.t_cljs$core$async4062.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async4062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async4062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta4063","meta4063",1928800545,null)], null);
});

cljs.core.async.t_cljs$core$async4062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4062";

cljs.core.async.t_cljs$core$async4062.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4062");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4062.
 */
cljs.core.async.__GT_t_cljs$core$async4062 = (function cljs$core$async$__GT_t_cljs$core$async4062(f__$1,blockable__$1,meta4063){
return (new cljs.core.async.t_cljs$core$async4062(f__$1,blockable__$1,meta4063));
});

}

return (new cljs.core.async.t_cljs$core$async4062(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__4068 = arguments.length;
switch (G__4068) {
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
var G__4071 = arguments.length;
switch (G__4071) {
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
var G__4074 = arguments.length;
switch (G__4074) {
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
var val_4076 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_4076);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_4076,ret){
return (function (){
return fn1.call(null,val_4076);
});})(val_4076,ret))
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
var G__4078 = arguments.length;
switch (G__4078) {
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
var n__4374__auto___4080 = n;
var x_4081 = (0);
while(true){
if((x_4081 < n__4374__auto___4080)){
(a[x_4081] = (0));

var G__4082 = (x_4081 + (1));
x_4081 = G__4082;
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

var G__4083 = (i + (1));
i = G__4083;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async4084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4084 = (function (flag,meta4085){
this.flag = flag;
this.meta4085 = meta4085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_4086,meta4085__$1){
var self__ = this;
var _4086__$1 = this;
return (new cljs.core.async.t_cljs$core$async4084(self__.flag,meta4085__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async4084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_4086){
var self__ = this;
var _4086__$1 = this;
return self__.meta4085;
});})(flag))
;

cljs.core.async.t_cljs$core$async4084.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async4084.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4084.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta4085","meta4085",-919309480,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async4084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4084";

cljs.core.async.t_cljs$core$async4084.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4084");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4084.
 */
cljs.core.async.__GT_t_cljs$core$async4084 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async4084(flag__$1,meta4085){
return (new cljs.core.async.t_cljs$core$async4084(flag__$1,meta4085));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async4084(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async4087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4087 = (function (flag,cb,meta4088){
this.flag = flag;
this.cb = cb;
this.meta4088 = meta4088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4089,meta4088__$1){
var self__ = this;
var _4089__$1 = this;
return (new cljs.core.async.t_cljs$core$async4087(self__.flag,self__.cb,meta4088__$1));
});

cljs.core.async.t_cljs$core$async4087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4089){
var self__ = this;
var _4089__$1 = this;
return self__.meta4088;
});

cljs.core.async.t_cljs$core$async4087.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async4087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async4087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta4088","meta4088",2014935857,null)], null);
});

cljs.core.async.t_cljs$core$async4087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4087";

cljs.core.async.t_cljs$core$async4087.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4087");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4087.
 */
cljs.core.async.__GT_t_cljs$core$async4087 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async4087(flag__$1,cb__$1,meta4088){
return (new cljs.core.async.t_cljs$core$async4087(flag__$1,cb__$1,meta4088));
});

}

return (new cljs.core.async.t_cljs$core$async4087(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__4090_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4090_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4091_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4091_SHARP_,port], null));
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
var G__4092 = (i + (1));
i = G__4092;
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
var len__4497__auto___4098 = arguments.length;
var i__4498__auto___4099 = (0);
while(true){
if((i__4498__auto___4099 < len__4497__auto___4098)){
args__4500__auto__.push((arguments[i__4498__auto___4099]));

var G__4100 = (i__4498__auto___4099 + (1));
i__4498__auto___4099 = G__4100;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__4095){
var map__4096 = p__4095;
var map__4096__$1 = ((((!((map__4096 == null)))?(((((map__4096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4096):map__4096);
var opts = map__4096__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq4093){
var G__4094 = cljs.core.first.call(null,seq4093);
var seq4093__$1 = cljs.core.next.call(null,seq4093);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4094,seq4093__$1);
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
var G__4102 = arguments.length;
switch (G__4102) {
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
var c__2151__auto___4148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___4148){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___4148){
return (function (state_4126){
var state_val_4127 = (state_4126[(1)]);
if((state_val_4127 === (7))){
var inst_4122 = (state_4126[(2)]);
var state_4126__$1 = state_4126;
var statearr_4128_4149 = state_4126__$1;
(statearr_4128_4149[(2)] = inst_4122);

(statearr_4128_4149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4127 === (1))){
var state_4126__$1 = state_4126;
var statearr_4129_4150 = state_4126__$1;
(statearr_4129_4150[(2)] = null);

(statearr_4129_4150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4127 === (4))){
var inst_4105 = (state_4126[(7)]);
var inst_4105__$1 = (state_4126[(2)]);
var inst_4106 = (inst_4105__$1 == null);
var state_4126__$1 = (function (){var statearr_4130 = state_4126;
(statearr_4130[(7)] = inst_4105__$1);

return statearr_4130;
})();
if(cljs.core.truth_(inst_4106)){
var statearr_4131_4151 = state_4126__$1;
(statearr_4131_4151[(1)] = (5));

} else {
var statearr_4132_4152 = state_4126__$1;
(statearr_4132_4152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4127 === (13))){
var state_4126__$1 = state_4126;
var statearr_4133_4153 = state_4126__$1;
(statearr_4133_4153[(2)] = null);

(statearr_4133_4153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4127 === (6))){
var inst_4105 = (state_4126[(7)]);
var state_4126__$1 = state_4126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4126__$1,(11),to,inst_4105);
} else {
if((state_val_4127 === (3))){
var inst_4124 = (state_4126[(2)]);
var state_4126__$1 = state_4126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4126__$1,inst_4124);
} else {
if((state_val_4127 === (12))){
var state_4126__$1 = state_4126;
var statearr_4134_4154 = state_4126__$1;
(statearr_4134_4154[(2)] = null);

(statearr_4134_4154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4127 === (2))){
var state_4126__$1 = state_4126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4126__$1,(4),from);
} else {
if((state_val_4127 === (11))){
var inst_4115 = (state_4126[(2)]);
var state_4126__$1 = state_4126;
if(cljs.core.truth_(inst_4115)){
var statearr_4135_4155 = state_4126__$1;
(statearr_4135_4155[(1)] = (12));

} else {
var statearr_4136_4156 = state_4126__$1;
(statearr_4136_4156[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4127 === (9))){
var state_4126__$1 = state_4126;
var statearr_4137_4157 = state_4126__$1;
(statearr_4137_4157[(2)] = null);

(statearr_4137_4157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4127 === (5))){
var state_4126__$1 = state_4126;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4138_4158 = state_4126__$1;
(statearr_4138_4158[(1)] = (8));

} else {
var statearr_4139_4159 = state_4126__$1;
(statearr_4139_4159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4127 === (14))){
var inst_4120 = (state_4126[(2)]);
var state_4126__$1 = state_4126;
var statearr_4140_4160 = state_4126__$1;
(statearr_4140_4160[(2)] = inst_4120);

(statearr_4140_4160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4127 === (10))){
var inst_4112 = (state_4126[(2)]);
var state_4126__$1 = state_4126;
var statearr_4141_4161 = state_4126__$1;
(statearr_4141_4161[(2)] = inst_4112);

(statearr_4141_4161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4127 === (8))){
var inst_4109 = cljs.core.async.close_BANG_.call(null,to);
var state_4126__$1 = state_4126;
var statearr_4142_4162 = state_4126__$1;
(statearr_4142_4162[(2)] = inst_4109);

(statearr_4142_4162[(1)] = (10));


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
});})(c__2151__auto___4148))
;
return ((function (switch__1996__auto__,c__2151__auto___4148){
return (function() {
var cljs$core$async$state_machine__1997__auto__ = null;
var cljs$core$async$state_machine__1997__auto____0 = (function (){
var statearr_4143 = [null,null,null,null,null,null,null,null];
(statearr_4143[(0)] = cljs$core$async$state_machine__1997__auto__);

(statearr_4143[(1)] = (1));

return statearr_4143;
});
var cljs$core$async$state_machine__1997__auto____1 = (function (state_4126){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_4126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e4144){if((e4144 instanceof Object)){
var ex__2000__auto__ = e4144;
var statearr_4145_4163 = state_4126;
(statearr_4145_4163[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4164 = state_4126;
state_4126 = G__4164;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$state_machine__1997__auto__ = function(state_4126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1997__auto____1.call(this,state_4126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1997__auto____0;
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1997__auto____1;
return cljs$core$async$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___4148))
})();
var state__2153__auto__ = (function (){var statearr_4146 = f__2152__auto__.call(null);
(statearr_4146[(6)] = c__2151__auto___4148);

return statearr_4146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___4148))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__4165){
var vec__4166 = p__4165;
var v = cljs.core.nth.call(null,vec__4166,(0),null);
var p = cljs.core.nth.call(null,vec__4166,(1),null);
var job = vec__4166;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2151__auto___4337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___4337,res,vec__4166,v,p,job,jobs,results){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___4337,res,vec__4166,v,p,job,jobs,results){
return (function (state_4173){
var state_val_4174 = (state_4173[(1)]);
if((state_val_4174 === (1))){
var state_4173__$1 = state_4173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4173__$1,(2),res,v);
} else {
if((state_val_4174 === (2))){
var inst_4170 = (state_4173[(2)]);
var inst_4171 = cljs.core.async.close_BANG_.call(null,res);
var state_4173__$1 = (function (){var statearr_4175 = state_4173;
(statearr_4175[(7)] = inst_4170);

return statearr_4175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4173__$1,inst_4171);
} else {
return null;
}
}
});})(c__2151__auto___4337,res,vec__4166,v,p,job,jobs,results))
;
return ((function (switch__1996__auto__,c__2151__auto___4337,res,vec__4166,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0 = (function (){
var statearr_4176 = [null,null,null,null,null,null,null,null];
(statearr_4176[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__);

(statearr_4176[(1)] = (1));

return statearr_4176;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1 = (function (state_4173){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_4173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e4177){if((e4177 instanceof Object)){
var ex__2000__auto__ = e4177;
var statearr_4178_4338 = state_4173;
(statearr_4178_4338[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4339 = state_4173;
state_4173 = G__4339;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__ = function(state_4173){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1.call(this,state_4173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___4337,res,vec__4166,v,p,job,jobs,results))
})();
var state__2153__auto__ = (function (){var statearr_4179 = f__2152__auto__.call(null);
(statearr_4179[(6)] = c__2151__auto___4337);

return statearr_4179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___4337,res,vec__4166,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4180){
var vec__4181 = p__4180;
var v = cljs.core.nth.call(null,vec__4181,(0),null);
var p = cljs.core.nth.call(null,vec__4181,(1),null);
var job = vec__4181;
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
var n__4374__auto___4340 = n;
var __4341 = (0);
while(true){
if((__4341 < n__4374__auto___4340)){
var G__4184_4342 = type;
var G__4184_4343__$1 = (((G__4184_4342 instanceof cljs.core.Keyword))?G__4184_4342.fqn:null);
switch (G__4184_4343__$1) {
case "compute":
var c__2151__auto___4345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4341,c__2151__auto___4345,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (__4341,c__2151__auto___4345,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async){
return (function (state_4197){
var state_val_4198 = (state_4197[(1)]);
if((state_val_4198 === (1))){
var state_4197__$1 = state_4197;
var statearr_4199_4346 = state_4197__$1;
(statearr_4199_4346[(2)] = null);

(statearr_4199_4346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4198 === (2))){
var state_4197__$1 = state_4197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4197__$1,(4),jobs);
} else {
if((state_val_4198 === (3))){
var inst_4195 = (state_4197[(2)]);
var state_4197__$1 = state_4197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4197__$1,inst_4195);
} else {
if((state_val_4198 === (4))){
var inst_4187 = (state_4197[(2)]);
var inst_4188 = process.call(null,inst_4187);
var state_4197__$1 = state_4197;
if(cljs.core.truth_(inst_4188)){
var statearr_4200_4347 = state_4197__$1;
(statearr_4200_4347[(1)] = (5));

} else {
var statearr_4201_4348 = state_4197__$1;
(statearr_4201_4348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4198 === (5))){
var state_4197__$1 = state_4197;
var statearr_4202_4349 = state_4197__$1;
(statearr_4202_4349[(2)] = null);

(statearr_4202_4349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4198 === (6))){
var state_4197__$1 = state_4197;
var statearr_4203_4350 = state_4197__$1;
(statearr_4203_4350[(2)] = null);

(statearr_4203_4350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4198 === (7))){
var inst_4193 = (state_4197[(2)]);
var state_4197__$1 = state_4197;
var statearr_4204_4351 = state_4197__$1;
(statearr_4204_4351[(2)] = inst_4193);

(statearr_4204_4351[(1)] = (3));


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
});})(__4341,c__2151__auto___4345,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async))
;
return ((function (__4341,switch__1996__auto__,c__2151__auto___4345,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0 = (function (){
var statearr_4205 = [null,null,null,null,null,null,null];
(statearr_4205[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__);

(statearr_4205[(1)] = (1));

return statearr_4205;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1 = (function (state_4197){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_4197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e4206){if((e4206 instanceof Object)){
var ex__2000__auto__ = e4206;
var statearr_4207_4352 = state_4197;
(statearr_4207_4352[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4353 = state_4197;
state_4197 = G__4353;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__ = function(state_4197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1.call(this,state_4197);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__;
})()
;})(__4341,switch__1996__auto__,c__2151__auto___4345,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async))
})();
var state__2153__auto__ = (function (){var statearr_4208 = f__2152__auto__.call(null);
(statearr_4208[(6)] = c__2151__auto___4345);

return statearr_4208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(__4341,c__2151__auto___4345,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async))
);


break;
case "async":
var c__2151__auto___4354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4341,c__2151__auto___4354,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (__4341,c__2151__auto___4354,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async){
return (function (state_4221){
var state_val_4222 = (state_4221[(1)]);
if((state_val_4222 === (1))){
var state_4221__$1 = state_4221;
var statearr_4223_4355 = state_4221__$1;
(statearr_4223_4355[(2)] = null);

(statearr_4223_4355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4222 === (2))){
var state_4221__$1 = state_4221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4221__$1,(4),jobs);
} else {
if((state_val_4222 === (3))){
var inst_4219 = (state_4221[(2)]);
var state_4221__$1 = state_4221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4221__$1,inst_4219);
} else {
if((state_val_4222 === (4))){
var inst_4211 = (state_4221[(2)]);
var inst_4212 = async.call(null,inst_4211);
var state_4221__$1 = state_4221;
if(cljs.core.truth_(inst_4212)){
var statearr_4224_4356 = state_4221__$1;
(statearr_4224_4356[(1)] = (5));

} else {
var statearr_4225_4357 = state_4221__$1;
(statearr_4225_4357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4222 === (5))){
var state_4221__$1 = state_4221;
var statearr_4226_4358 = state_4221__$1;
(statearr_4226_4358[(2)] = null);

(statearr_4226_4358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4222 === (6))){
var state_4221__$1 = state_4221;
var statearr_4227_4359 = state_4221__$1;
(statearr_4227_4359[(2)] = null);

(statearr_4227_4359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4222 === (7))){
var inst_4217 = (state_4221[(2)]);
var state_4221__$1 = state_4221;
var statearr_4228_4360 = state_4221__$1;
(statearr_4228_4360[(2)] = inst_4217);

(statearr_4228_4360[(1)] = (3));


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
});})(__4341,c__2151__auto___4354,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async))
;
return ((function (__4341,switch__1996__auto__,c__2151__auto___4354,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0 = (function (){
var statearr_4229 = [null,null,null,null,null,null,null];
(statearr_4229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__);

(statearr_4229[(1)] = (1));

return statearr_4229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1 = (function (state_4221){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_4221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e4230){if((e4230 instanceof Object)){
var ex__2000__auto__ = e4230;
var statearr_4231_4361 = state_4221;
(statearr_4231_4361[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4362 = state_4221;
state_4221 = G__4362;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__ = function(state_4221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1.call(this,state_4221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__;
})()
;})(__4341,switch__1996__auto__,c__2151__auto___4354,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async))
})();
var state__2153__auto__ = (function (){var statearr_4232 = f__2152__auto__.call(null);
(statearr_4232[(6)] = c__2151__auto___4354);

return statearr_4232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(__4341,c__2151__auto___4354,G__4184_4342,G__4184_4343__$1,n__4374__auto___4340,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4184_4343__$1)].join('')));

}

var G__4363 = (__4341 + (1));
__4341 = G__4363;
continue;
} else {
}
break;
}

var c__2151__auto___4364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___4364,jobs,results,process,async){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___4364,jobs,results,process,async){
return (function (state_4254){
var state_val_4255 = (state_4254[(1)]);
if((state_val_4255 === (1))){
var state_4254__$1 = state_4254;
var statearr_4256_4365 = state_4254__$1;
(statearr_4256_4365[(2)] = null);

(statearr_4256_4365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4255 === (2))){
var state_4254__$1 = state_4254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4254__$1,(4),from);
} else {
if((state_val_4255 === (3))){
var inst_4252 = (state_4254[(2)]);
var state_4254__$1 = state_4254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4254__$1,inst_4252);
} else {
if((state_val_4255 === (4))){
var inst_4235 = (state_4254[(7)]);
var inst_4235__$1 = (state_4254[(2)]);
var inst_4236 = (inst_4235__$1 == null);
var state_4254__$1 = (function (){var statearr_4257 = state_4254;
(statearr_4257[(7)] = inst_4235__$1);

return statearr_4257;
})();
if(cljs.core.truth_(inst_4236)){
var statearr_4258_4366 = state_4254__$1;
(statearr_4258_4366[(1)] = (5));

} else {
var statearr_4259_4367 = state_4254__$1;
(statearr_4259_4367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4255 === (5))){
var inst_4238 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4254__$1 = state_4254;
var statearr_4260_4368 = state_4254__$1;
(statearr_4260_4368[(2)] = inst_4238);

(statearr_4260_4368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4255 === (6))){
var inst_4240 = (state_4254[(8)]);
var inst_4235 = (state_4254[(7)]);
var inst_4240__$1 = cljs.core.async.chan.call(null,(1));
var inst_4241 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4242 = [inst_4235,inst_4240__$1];
var inst_4243 = (new cljs.core.PersistentVector(null,2,(5),inst_4241,inst_4242,null));
var state_4254__$1 = (function (){var statearr_4261 = state_4254;
(statearr_4261[(8)] = inst_4240__$1);

return statearr_4261;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4254__$1,(8),jobs,inst_4243);
} else {
if((state_val_4255 === (7))){
var inst_4250 = (state_4254[(2)]);
var state_4254__$1 = state_4254;
var statearr_4262_4369 = state_4254__$1;
(statearr_4262_4369[(2)] = inst_4250);

(statearr_4262_4369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4255 === (8))){
var inst_4240 = (state_4254[(8)]);
var inst_4245 = (state_4254[(2)]);
var state_4254__$1 = (function (){var statearr_4263 = state_4254;
(statearr_4263[(9)] = inst_4245);

return statearr_4263;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4254__$1,(9),results,inst_4240);
} else {
if((state_val_4255 === (9))){
var inst_4247 = (state_4254[(2)]);
var state_4254__$1 = (function (){var statearr_4264 = state_4254;
(statearr_4264[(10)] = inst_4247);

return statearr_4264;
})();
var statearr_4265_4370 = state_4254__$1;
(statearr_4265_4370[(2)] = null);

(statearr_4265_4370[(1)] = (2));


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
});})(c__2151__auto___4364,jobs,results,process,async))
;
return ((function (switch__1996__auto__,c__2151__auto___4364,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0 = (function (){
var statearr_4266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__);

(statearr_4266[(1)] = (1));

return statearr_4266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1 = (function (state_4254){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_4254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e4267){if((e4267 instanceof Object)){
var ex__2000__auto__ = e4267;
var statearr_4268_4371 = state_4254;
(statearr_4268_4371[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4372 = state_4254;
state_4254 = G__4372;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__ = function(state_4254){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1.call(this,state_4254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___4364,jobs,results,process,async))
})();
var state__2153__auto__ = (function (){var statearr_4269 = f__2152__auto__.call(null);
(statearr_4269[(6)] = c__2151__auto___4364);

return statearr_4269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___4364,jobs,results,process,async))
);


var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__,jobs,results,process,async){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__,jobs,results,process,async){
return (function (state_4307){
var state_val_4308 = (state_4307[(1)]);
if((state_val_4308 === (7))){
var inst_4303 = (state_4307[(2)]);
var state_4307__$1 = state_4307;
var statearr_4309_4373 = state_4307__$1;
(statearr_4309_4373[(2)] = inst_4303);

(statearr_4309_4373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (20))){
var state_4307__$1 = state_4307;
var statearr_4310_4374 = state_4307__$1;
(statearr_4310_4374[(2)] = null);

(statearr_4310_4374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (1))){
var state_4307__$1 = state_4307;
var statearr_4311_4375 = state_4307__$1;
(statearr_4311_4375[(2)] = null);

(statearr_4311_4375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (4))){
var inst_4272 = (state_4307[(7)]);
var inst_4272__$1 = (state_4307[(2)]);
var inst_4273 = (inst_4272__$1 == null);
var state_4307__$1 = (function (){var statearr_4312 = state_4307;
(statearr_4312[(7)] = inst_4272__$1);

return statearr_4312;
})();
if(cljs.core.truth_(inst_4273)){
var statearr_4313_4376 = state_4307__$1;
(statearr_4313_4376[(1)] = (5));

} else {
var statearr_4314_4377 = state_4307__$1;
(statearr_4314_4377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (15))){
var inst_4285 = (state_4307[(8)]);
var state_4307__$1 = state_4307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4307__$1,(18),to,inst_4285);
} else {
if((state_val_4308 === (21))){
var inst_4298 = (state_4307[(2)]);
var state_4307__$1 = state_4307;
var statearr_4315_4378 = state_4307__$1;
(statearr_4315_4378[(2)] = inst_4298);

(statearr_4315_4378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (13))){
var inst_4300 = (state_4307[(2)]);
var state_4307__$1 = (function (){var statearr_4316 = state_4307;
(statearr_4316[(9)] = inst_4300);

return statearr_4316;
})();
var statearr_4317_4379 = state_4307__$1;
(statearr_4317_4379[(2)] = null);

(statearr_4317_4379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (6))){
var inst_4272 = (state_4307[(7)]);
var state_4307__$1 = state_4307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4307__$1,(11),inst_4272);
} else {
if((state_val_4308 === (17))){
var inst_4293 = (state_4307[(2)]);
var state_4307__$1 = state_4307;
if(cljs.core.truth_(inst_4293)){
var statearr_4318_4380 = state_4307__$1;
(statearr_4318_4380[(1)] = (19));

} else {
var statearr_4319_4381 = state_4307__$1;
(statearr_4319_4381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (3))){
var inst_4305 = (state_4307[(2)]);
var state_4307__$1 = state_4307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4307__$1,inst_4305);
} else {
if((state_val_4308 === (12))){
var inst_4282 = (state_4307[(10)]);
var state_4307__$1 = state_4307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4307__$1,(14),inst_4282);
} else {
if((state_val_4308 === (2))){
var state_4307__$1 = state_4307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4307__$1,(4),results);
} else {
if((state_val_4308 === (19))){
var state_4307__$1 = state_4307;
var statearr_4320_4382 = state_4307__$1;
(statearr_4320_4382[(2)] = null);

(statearr_4320_4382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (11))){
var inst_4282 = (state_4307[(2)]);
var state_4307__$1 = (function (){var statearr_4321 = state_4307;
(statearr_4321[(10)] = inst_4282);

return statearr_4321;
})();
var statearr_4322_4383 = state_4307__$1;
(statearr_4322_4383[(2)] = null);

(statearr_4322_4383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (9))){
var state_4307__$1 = state_4307;
var statearr_4323_4384 = state_4307__$1;
(statearr_4323_4384[(2)] = null);

(statearr_4323_4384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (5))){
var state_4307__$1 = state_4307;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4324_4385 = state_4307__$1;
(statearr_4324_4385[(1)] = (8));

} else {
var statearr_4325_4386 = state_4307__$1;
(statearr_4325_4386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (14))){
var inst_4287 = (state_4307[(11)]);
var inst_4285 = (state_4307[(8)]);
var inst_4285__$1 = (state_4307[(2)]);
var inst_4286 = (inst_4285__$1 == null);
var inst_4287__$1 = cljs.core.not.call(null,inst_4286);
var state_4307__$1 = (function (){var statearr_4326 = state_4307;
(statearr_4326[(11)] = inst_4287__$1);

(statearr_4326[(8)] = inst_4285__$1);

return statearr_4326;
})();
if(inst_4287__$1){
var statearr_4327_4387 = state_4307__$1;
(statearr_4327_4387[(1)] = (15));

} else {
var statearr_4328_4388 = state_4307__$1;
(statearr_4328_4388[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (16))){
var inst_4287 = (state_4307[(11)]);
var state_4307__$1 = state_4307;
var statearr_4329_4389 = state_4307__$1;
(statearr_4329_4389[(2)] = inst_4287);

(statearr_4329_4389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (10))){
var inst_4279 = (state_4307[(2)]);
var state_4307__$1 = state_4307;
var statearr_4330_4390 = state_4307__$1;
(statearr_4330_4390[(2)] = inst_4279);

(statearr_4330_4390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (18))){
var inst_4290 = (state_4307[(2)]);
var state_4307__$1 = state_4307;
var statearr_4331_4391 = state_4307__$1;
(statearr_4331_4391[(2)] = inst_4290);

(statearr_4331_4391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4308 === (8))){
var inst_4276 = cljs.core.async.close_BANG_.call(null,to);
var state_4307__$1 = state_4307;
var statearr_4332_4392 = state_4307__$1;
(statearr_4332_4392[(2)] = inst_4276);

(statearr_4332_4392[(1)] = (10));


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
});})(c__2151__auto__,jobs,results,process,async))
;
return ((function (switch__1996__auto__,c__2151__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0 = (function (){
var statearr_4333 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__);

(statearr_4333[(1)] = (1));

return statearr_4333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1 = (function (state_4307){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_4307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e4334){if((e4334 instanceof Object)){
var ex__2000__auto__ = e4334;
var statearr_4335_4393 = state_4307;
(statearr_4335_4393[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4394 = state_4307;
state_4307 = G__4394;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__ = function(state_4307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1.call(this,state_4307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,jobs,results,process,async))
})();
var state__2153__auto__ = (function (){var statearr_4336 = f__2152__auto__.call(null);
(statearr_4336[(6)] = c__2151__auto__);

return statearr_4336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__,jobs,results,process,async))
);

return c__2151__auto__;
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
var G__4396 = arguments.length;
switch (G__4396) {
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
var G__4399 = arguments.length;
switch (G__4399) {
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
var G__4402 = arguments.length;
switch (G__4402) {
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
var c__2151__auto___4451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___4451,tc,fc){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___4451,tc,fc){
return (function (state_4428){
var state_val_4429 = (state_4428[(1)]);
if((state_val_4429 === (7))){
var inst_4424 = (state_4428[(2)]);
var state_4428__$1 = state_4428;
var statearr_4430_4452 = state_4428__$1;
(statearr_4430_4452[(2)] = inst_4424);

(statearr_4430_4452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4429 === (1))){
var state_4428__$1 = state_4428;
var statearr_4431_4453 = state_4428__$1;
(statearr_4431_4453[(2)] = null);

(statearr_4431_4453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4429 === (4))){
var inst_4405 = (state_4428[(7)]);
var inst_4405__$1 = (state_4428[(2)]);
var inst_4406 = (inst_4405__$1 == null);
var state_4428__$1 = (function (){var statearr_4432 = state_4428;
(statearr_4432[(7)] = inst_4405__$1);

return statearr_4432;
})();
if(cljs.core.truth_(inst_4406)){
var statearr_4433_4454 = state_4428__$1;
(statearr_4433_4454[(1)] = (5));

} else {
var statearr_4434_4455 = state_4428__$1;
(statearr_4434_4455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4429 === (13))){
var state_4428__$1 = state_4428;
var statearr_4435_4456 = state_4428__$1;
(statearr_4435_4456[(2)] = null);

(statearr_4435_4456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4429 === (6))){
var inst_4405 = (state_4428[(7)]);
var inst_4411 = p.call(null,inst_4405);
var state_4428__$1 = state_4428;
if(cljs.core.truth_(inst_4411)){
var statearr_4436_4457 = state_4428__$1;
(statearr_4436_4457[(1)] = (9));

} else {
var statearr_4437_4458 = state_4428__$1;
(statearr_4437_4458[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4429 === (3))){
var inst_4426 = (state_4428[(2)]);
var state_4428__$1 = state_4428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4428__$1,inst_4426);
} else {
if((state_val_4429 === (12))){
var state_4428__$1 = state_4428;
var statearr_4438_4459 = state_4428__$1;
(statearr_4438_4459[(2)] = null);

(statearr_4438_4459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4429 === (2))){
var state_4428__$1 = state_4428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4428__$1,(4),ch);
} else {
if((state_val_4429 === (11))){
var inst_4405 = (state_4428[(7)]);
var inst_4415 = (state_4428[(2)]);
var state_4428__$1 = state_4428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4428__$1,(8),inst_4415,inst_4405);
} else {
if((state_val_4429 === (9))){
var state_4428__$1 = state_4428;
var statearr_4439_4460 = state_4428__$1;
(statearr_4439_4460[(2)] = tc);

(statearr_4439_4460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4429 === (5))){
var inst_4408 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4409 = cljs.core.async.close_BANG_.call(null,fc);
var state_4428__$1 = (function (){var statearr_4440 = state_4428;
(statearr_4440[(8)] = inst_4408);

return statearr_4440;
})();
var statearr_4441_4461 = state_4428__$1;
(statearr_4441_4461[(2)] = inst_4409);

(statearr_4441_4461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4429 === (14))){
var inst_4422 = (state_4428[(2)]);
var state_4428__$1 = state_4428;
var statearr_4442_4462 = state_4428__$1;
(statearr_4442_4462[(2)] = inst_4422);

(statearr_4442_4462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4429 === (10))){
var state_4428__$1 = state_4428;
var statearr_4443_4463 = state_4428__$1;
(statearr_4443_4463[(2)] = fc);

(statearr_4443_4463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4429 === (8))){
var inst_4417 = (state_4428[(2)]);
var state_4428__$1 = state_4428;
if(cljs.core.truth_(inst_4417)){
var statearr_4444_4464 = state_4428__$1;
(statearr_4444_4464[(1)] = (12));

} else {
var statearr_4445_4465 = state_4428__$1;
(statearr_4445_4465[(1)] = (13));

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
});})(c__2151__auto___4451,tc,fc))
;
return ((function (switch__1996__auto__,c__2151__auto___4451,tc,fc){
return (function() {
var cljs$core$async$state_machine__1997__auto__ = null;
var cljs$core$async$state_machine__1997__auto____0 = (function (){
var statearr_4446 = [null,null,null,null,null,null,null,null,null];
(statearr_4446[(0)] = cljs$core$async$state_machine__1997__auto__);

(statearr_4446[(1)] = (1));

return statearr_4446;
});
var cljs$core$async$state_machine__1997__auto____1 = (function (state_4428){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_4428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e4447){if((e4447 instanceof Object)){
var ex__2000__auto__ = e4447;
var statearr_4448_4466 = state_4428;
(statearr_4448_4466[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4467 = state_4428;
state_4428 = G__4467;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$state_machine__1997__auto__ = function(state_4428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1997__auto____1.call(this,state_4428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1997__auto____0;
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1997__auto____1;
return cljs$core$async$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___4451,tc,fc))
})();
var state__2153__auto__ = (function (){var statearr_4449 = f__2152__auto__.call(null);
(statearr_4449[(6)] = c__2151__auto___4451);

return statearr_4449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___4451,tc,fc))
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
var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__){
return (function (state_4488){
var state_val_4489 = (state_4488[(1)]);
if((state_val_4489 === (7))){
var inst_4484 = (state_4488[(2)]);
var state_4488__$1 = state_4488;
var statearr_4490_4508 = state_4488__$1;
(statearr_4490_4508[(2)] = inst_4484);

(statearr_4490_4508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4489 === (1))){
var inst_4468 = init;
var state_4488__$1 = (function (){var statearr_4491 = state_4488;
(statearr_4491[(7)] = inst_4468);

return statearr_4491;
})();
var statearr_4492_4509 = state_4488__$1;
(statearr_4492_4509[(2)] = null);

(statearr_4492_4509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4489 === (4))){
var inst_4471 = (state_4488[(8)]);
var inst_4471__$1 = (state_4488[(2)]);
var inst_4472 = (inst_4471__$1 == null);
var state_4488__$1 = (function (){var statearr_4493 = state_4488;
(statearr_4493[(8)] = inst_4471__$1);

return statearr_4493;
})();
if(cljs.core.truth_(inst_4472)){
var statearr_4494_4510 = state_4488__$1;
(statearr_4494_4510[(1)] = (5));

} else {
var statearr_4495_4511 = state_4488__$1;
(statearr_4495_4511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4489 === (6))){
var inst_4468 = (state_4488[(7)]);
var inst_4475 = (state_4488[(9)]);
var inst_4471 = (state_4488[(8)]);
var inst_4475__$1 = f.call(null,inst_4468,inst_4471);
var inst_4476 = cljs.core.reduced_QMARK_.call(null,inst_4475__$1);
var state_4488__$1 = (function (){var statearr_4496 = state_4488;
(statearr_4496[(9)] = inst_4475__$1);

return statearr_4496;
})();
if(inst_4476){
var statearr_4497_4512 = state_4488__$1;
(statearr_4497_4512[(1)] = (8));

} else {
var statearr_4498_4513 = state_4488__$1;
(statearr_4498_4513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4489 === (3))){
var inst_4486 = (state_4488[(2)]);
var state_4488__$1 = state_4488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4488__$1,inst_4486);
} else {
if((state_val_4489 === (2))){
var state_4488__$1 = state_4488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4488__$1,(4),ch);
} else {
if((state_val_4489 === (9))){
var inst_4475 = (state_4488[(9)]);
var inst_4468 = inst_4475;
var state_4488__$1 = (function (){var statearr_4499 = state_4488;
(statearr_4499[(7)] = inst_4468);

return statearr_4499;
})();
var statearr_4500_4514 = state_4488__$1;
(statearr_4500_4514[(2)] = null);

(statearr_4500_4514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4489 === (5))){
var inst_4468 = (state_4488[(7)]);
var state_4488__$1 = state_4488;
var statearr_4501_4515 = state_4488__$1;
(statearr_4501_4515[(2)] = inst_4468);

(statearr_4501_4515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4489 === (10))){
var inst_4482 = (state_4488[(2)]);
var state_4488__$1 = state_4488;
var statearr_4502_4516 = state_4488__$1;
(statearr_4502_4516[(2)] = inst_4482);

(statearr_4502_4516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4489 === (8))){
var inst_4475 = (state_4488[(9)]);
var inst_4478 = cljs.core.deref.call(null,inst_4475);
var state_4488__$1 = state_4488;
var statearr_4503_4517 = state_4488__$1;
(statearr_4503_4517[(2)] = inst_4478);

(statearr_4503_4517[(1)] = (10));


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
});})(c__2151__auto__))
;
return ((function (switch__1996__auto__,c__2151__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__1997__auto__ = null;
var cljs$core$async$reduce_$_state_machine__1997__auto____0 = (function (){
var statearr_4504 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4504[(0)] = cljs$core$async$reduce_$_state_machine__1997__auto__);

(statearr_4504[(1)] = (1));

return statearr_4504;
});
var cljs$core$async$reduce_$_state_machine__1997__auto____1 = (function (state_4488){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_4488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e4505){if((e4505 instanceof Object)){
var ex__2000__auto__ = e4505;
var statearr_4506_4518 = state_4488;
(statearr_4506_4518[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4519 = state_4488;
state_4488 = G__4519;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__1997__auto__ = function(state_4488){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__1997__auto____1.call(this,state_4488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__1997__auto____0;
cljs$core$async$reduce_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__1997__auto____1;
return cljs$core$async$reduce_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__))
})();
var state__2153__auto__ = (function (){var statearr_4507 = f__2152__auto__.call(null);
(statearr_4507[(6)] = c__2151__auto__);

return statearr_4507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__))
);

return c__2151__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__,f__$1){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__,f__$1){
return (function (state_4525){
var state_val_4526 = (state_4525[(1)]);
if((state_val_4526 === (1))){
var inst_4520 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_4525__$1 = state_4525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4525__$1,(2),inst_4520);
} else {
if((state_val_4526 === (2))){
var inst_4522 = (state_4525[(2)]);
var inst_4523 = f__$1.call(null,inst_4522);
var state_4525__$1 = state_4525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4525__$1,inst_4523);
} else {
return null;
}
}
});})(c__2151__auto__,f__$1))
;
return ((function (switch__1996__auto__,c__2151__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__1997__auto__ = null;
var cljs$core$async$transduce_$_state_machine__1997__auto____0 = (function (){
var statearr_4527 = [null,null,null,null,null,null,null];
(statearr_4527[(0)] = cljs$core$async$transduce_$_state_machine__1997__auto__);

(statearr_4527[(1)] = (1));

return statearr_4527;
});
var cljs$core$async$transduce_$_state_machine__1997__auto____1 = (function (state_4525){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_4525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e4528){if((e4528 instanceof Object)){
var ex__2000__auto__ = e4528;
var statearr_4529_4531 = state_4525;
(statearr_4529_4531[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4532 = state_4525;
state_4525 = G__4532;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__1997__auto__ = function(state_4525){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__1997__auto____1.call(this,state_4525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__1997__auto____0;
cljs$core$async$transduce_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__1997__auto____1;
return cljs$core$async$transduce_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,f__$1))
})();
var state__2153__auto__ = (function (){var statearr_4530 = f__2152__auto__.call(null);
(statearr_4530[(6)] = c__2151__auto__);

return statearr_4530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__,f__$1))
);

return c__2151__auto__;
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
var G__4534 = arguments.length;
switch (G__4534) {
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
var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__){
return (function (state_4559){
var state_val_4560 = (state_4559[(1)]);
if((state_val_4560 === (7))){
var inst_4541 = (state_4559[(2)]);
var state_4559__$1 = state_4559;
var statearr_4561_4582 = state_4559__$1;
(statearr_4561_4582[(2)] = inst_4541);

(statearr_4561_4582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4560 === (1))){
var inst_4535 = cljs.core.seq.call(null,coll);
var inst_4536 = inst_4535;
var state_4559__$1 = (function (){var statearr_4562 = state_4559;
(statearr_4562[(7)] = inst_4536);

return statearr_4562;
})();
var statearr_4563_4583 = state_4559__$1;
(statearr_4563_4583[(2)] = null);

(statearr_4563_4583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4560 === (4))){
var inst_4536 = (state_4559[(7)]);
var inst_4539 = cljs.core.first.call(null,inst_4536);
var state_4559__$1 = state_4559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4559__$1,(7),ch,inst_4539);
} else {
if((state_val_4560 === (13))){
var inst_4553 = (state_4559[(2)]);
var state_4559__$1 = state_4559;
var statearr_4564_4584 = state_4559__$1;
(statearr_4564_4584[(2)] = inst_4553);

(statearr_4564_4584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4560 === (6))){
var inst_4544 = (state_4559[(2)]);
var state_4559__$1 = state_4559;
if(cljs.core.truth_(inst_4544)){
var statearr_4565_4585 = state_4559__$1;
(statearr_4565_4585[(1)] = (8));

} else {
var statearr_4566_4586 = state_4559__$1;
(statearr_4566_4586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4560 === (3))){
var inst_4557 = (state_4559[(2)]);
var state_4559__$1 = state_4559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4559__$1,inst_4557);
} else {
if((state_val_4560 === (12))){
var state_4559__$1 = state_4559;
var statearr_4567_4587 = state_4559__$1;
(statearr_4567_4587[(2)] = null);

(statearr_4567_4587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4560 === (2))){
var inst_4536 = (state_4559[(7)]);
var state_4559__$1 = state_4559;
if(cljs.core.truth_(inst_4536)){
var statearr_4568_4588 = state_4559__$1;
(statearr_4568_4588[(1)] = (4));

} else {
var statearr_4569_4589 = state_4559__$1;
(statearr_4569_4589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4560 === (11))){
var inst_4550 = cljs.core.async.close_BANG_.call(null,ch);
var state_4559__$1 = state_4559;
var statearr_4570_4590 = state_4559__$1;
(statearr_4570_4590[(2)] = inst_4550);

(statearr_4570_4590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4560 === (9))){
var state_4559__$1 = state_4559;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4571_4591 = state_4559__$1;
(statearr_4571_4591[(1)] = (11));

} else {
var statearr_4572_4592 = state_4559__$1;
(statearr_4572_4592[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4560 === (5))){
var inst_4536 = (state_4559[(7)]);
var state_4559__$1 = state_4559;
var statearr_4573_4593 = state_4559__$1;
(statearr_4573_4593[(2)] = inst_4536);

(statearr_4573_4593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4560 === (10))){
var inst_4555 = (state_4559[(2)]);
var state_4559__$1 = state_4559;
var statearr_4574_4594 = state_4559__$1;
(statearr_4574_4594[(2)] = inst_4555);

(statearr_4574_4594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4560 === (8))){
var inst_4536 = (state_4559[(7)]);
var inst_4546 = cljs.core.next.call(null,inst_4536);
var inst_4536__$1 = inst_4546;
var state_4559__$1 = (function (){var statearr_4575 = state_4559;
(statearr_4575[(7)] = inst_4536__$1);

return statearr_4575;
})();
var statearr_4576_4595 = state_4559__$1;
(statearr_4576_4595[(2)] = null);

(statearr_4576_4595[(1)] = (2));


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
});})(c__2151__auto__))
;
return ((function (switch__1996__auto__,c__2151__auto__){
return (function() {
var cljs$core$async$state_machine__1997__auto__ = null;
var cljs$core$async$state_machine__1997__auto____0 = (function (){
var statearr_4577 = [null,null,null,null,null,null,null,null];
(statearr_4577[(0)] = cljs$core$async$state_machine__1997__auto__);

(statearr_4577[(1)] = (1));

return statearr_4577;
});
var cljs$core$async$state_machine__1997__auto____1 = (function (state_4559){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_4559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e4578){if((e4578 instanceof Object)){
var ex__2000__auto__ = e4578;
var statearr_4579_4596 = state_4559;
(statearr_4579_4596[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4597 = state_4559;
state_4559 = G__4597;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$state_machine__1997__auto__ = function(state_4559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1997__auto____1.call(this,state_4559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1997__auto____0;
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1997__auto____1;
return cljs$core$async$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__))
})();
var state__2153__auto__ = (function (){var statearr_4580 = f__2152__auto__.call(null);
(statearr_4580[(6)] = c__2151__auto__);

return statearr_4580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__))
);

return c__2151__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async4598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4598 = (function (ch,cs,meta4599){
this.ch = ch;
this.cs = cs;
this.meta4599 = meta4599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4600,meta4599__$1){
var self__ = this;
var _4600__$1 = this;
return (new cljs.core.async.t_cljs$core$async4598(self__.ch,self__.cs,meta4599__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async4598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4600){
var self__ = this;
var _4600__$1 = this;
return self__.meta4599;
});})(cs))
;

cljs.core.async.t_cljs$core$async4598.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4598.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async4598.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4598.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4598.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4598.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4598.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4599","meta4599",1898542348,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async4598.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4598";

cljs.core.async.t_cljs$core$async4598.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4598");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4598.
 */
cljs.core.async.__GT_t_cljs$core$async4598 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async4598(ch__$1,cs__$1,meta4599){
return (new cljs.core.async.t_cljs$core$async4598(ch__$1,cs__$1,meta4599));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async4598(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__2151__auto___4820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___4820,cs,m,dchan,dctr,done){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___4820,cs,m,dchan,dctr,done){
return (function (state_4735){
var state_val_4736 = (state_4735[(1)]);
if((state_val_4736 === (7))){
var inst_4731 = (state_4735[(2)]);
var state_4735__$1 = state_4735;
var statearr_4737_4821 = state_4735__$1;
(statearr_4737_4821[(2)] = inst_4731);

(statearr_4737_4821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (20))){
var inst_4634 = (state_4735[(7)]);
var inst_4646 = cljs.core.first.call(null,inst_4634);
var inst_4647 = cljs.core.nth.call(null,inst_4646,(0),null);
var inst_4648 = cljs.core.nth.call(null,inst_4646,(1),null);
var state_4735__$1 = (function (){var statearr_4738 = state_4735;
(statearr_4738[(8)] = inst_4647);

return statearr_4738;
})();
if(cljs.core.truth_(inst_4648)){
var statearr_4739_4822 = state_4735__$1;
(statearr_4739_4822[(1)] = (22));

} else {
var statearr_4740_4823 = state_4735__$1;
(statearr_4740_4823[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (27))){
var inst_4683 = (state_4735[(9)]);
var inst_4678 = (state_4735[(10)]);
var inst_4676 = (state_4735[(11)]);
var inst_4603 = (state_4735[(12)]);
var inst_4683__$1 = cljs.core._nth.call(null,inst_4676,inst_4678);
var inst_4684 = cljs.core.async.put_BANG_.call(null,inst_4683__$1,inst_4603,done);
var state_4735__$1 = (function (){var statearr_4741 = state_4735;
(statearr_4741[(9)] = inst_4683__$1);

return statearr_4741;
})();
if(cljs.core.truth_(inst_4684)){
var statearr_4742_4824 = state_4735__$1;
(statearr_4742_4824[(1)] = (30));

} else {
var statearr_4743_4825 = state_4735__$1;
(statearr_4743_4825[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (1))){
var state_4735__$1 = state_4735;
var statearr_4744_4826 = state_4735__$1;
(statearr_4744_4826[(2)] = null);

(statearr_4744_4826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (24))){
var inst_4634 = (state_4735[(7)]);
var inst_4653 = (state_4735[(2)]);
var inst_4654 = cljs.core.next.call(null,inst_4634);
var inst_4612 = inst_4654;
var inst_4613 = null;
var inst_4614 = (0);
var inst_4615 = (0);
var state_4735__$1 = (function (){var statearr_4745 = state_4735;
(statearr_4745[(13)] = inst_4653);

(statearr_4745[(14)] = inst_4614);

(statearr_4745[(15)] = inst_4613);

(statearr_4745[(16)] = inst_4612);

(statearr_4745[(17)] = inst_4615);

return statearr_4745;
})();
var statearr_4746_4827 = state_4735__$1;
(statearr_4746_4827[(2)] = null);

(statearr_4746_4827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (39))){
var state_4735__$1 = state_4735;
var statearr_4750_4828 = state_4735__$1;
(statearr_4750_4828[(2)] = null);

(statearr_4750_4828[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (4))){
var inst_4603 = (state_4735[(12)]);
var inst_4603__$1 = (state_4735[(2)]);
var inst_4604 = (inst_4603__$1 == null);
var state_4735__$1 = (function (){var statearr_4751 = state_4735;
(statearr_4751[(12)] = inst_4603__$1);

return statearr_4751;
})();
if(cljs.core.truth_(inst_4604)){
var statearr_4752_4829 = state_4735__$1;
(statearr_4752_4829[(1)] = (5));

} else {
var statearr_4753_4830 = state_4735__$1;
(statearr_4753_4830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (15))){
var inst_4614 = (state_4735[(14)]);
var inst_4613 = (state_4735[(15)]);
var inst_4612 = (state_4735[(16)]);
var inst_4615 = (state_4735[(17)]);
var inst_4630 = (state_4735[(2)]);
var inst_4631 = (inst_4615 + (1));
var tmp4747 = inst_4614;
var tmp4748 = inst_4613;
var tmp4749 = inst_4612;
var inst_4612__$1 = tmp4749;
var inst_4613__$1 = tmp4748;
var inst_4614__$1 = tmp4747;
var inst_4615__$1 = inst_4631;
var state_4735__$1 = (function (){var statearr_4754 = state_4735;
(statearr_4754[(14)] = inst_4614__$1);

(statearr_4754[(15)] = inst_4613__$1);

(statearr_4754[(18)] = inst_4630);

(statearr_4754[(16)] = inst_4612__$1);

(statearr_4754[(17)] = inst_4615__$1);

return statearr_4754;
})();
var statearr_4755_4831 = state_4735__$1;
(statearr_4755_4831[(2)] = null);

(statearr_4755_4831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (21))){
var inst_4657 = (state_4735[(2)]);
var state_4735__$1 = state_4735;
var statearr_4759_4832 = state_4735__$1;
(statearr_4759_4832[(2)] = inst_4657);

(statearr_4759_4832[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (31))){
var inst_4683 = (state_4735[(9)]);
var inst_4687 = done.call(null,null);
var inst_4688 = cljs.core.async.untap_STAR_.call(null,m,inst_4683);
var state_4735__$1 = (function (){var statearr_4760 = state_4735;
(statearr_4760[(19)] = inst_4687);

return statearr_4760;
})();
var statearr_4761_4833 = state_4735__$1;
(statearr_4761_4833[(2)] = inst_4688);

(statearr_4761_4833[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (32))){
var inst_4678 = (state_4735[(10)]);
var inst_4676 = (state_4735[(11)]);
var inst_4675 = (state_4735[(20)]);
var inst_4677 = (state_4735[(21)]);
var inst_4690 = (state_4735[(2)]);
var inst_4691 = (inst_4678 + (1));
var tmp4756 = inst_4676;
var tmp4757 = inst_4675;
var tmp4758 = inst_4677;
var inst_4675__$1 = tmp4757;
var inst_4676__$1 = tmp4756;
var inst_4677__$1 = tmp4758;
var inst_4678__$1 = inst_4691;
var state_4735__$1 = (function (){var statearr_4762 = state_4735;
(statearr_4762[(22)] = inst_4690);

(statearr_4762[(10)] = inst_4678__$1);

(statearr_4762[(11)] = inst_4676__$1);

(statearr_4762[(20)] = inst_4675__$1);

(statearr_4762[(21)] = inst_4677__$1);

return statearr_4762;
})();
var statearr_4763_4834 = state_4735__$1;
(statearr_4763_4834[(2)] = null);

(statearr_4763_4834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (40))){
var inst_4703 = (state_4735[(23)]);
var inst_4707 = done.call(null,null);
var inst_4708 = cljs.core.async.untap_STAR_.call(null,m,inst_4703);
var state_4735__$1 = (function (){var statearr_4764 = state_4735;
(statearr_4764[(24)] = inst_4707);

return statearr_4764;
})();
var statearr_4765_4835 = state_4735__$1;
(statearr_4765_4835[(2)] = inst_4708);

(statearr_4765_4835[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (33))){
var inst_4694 = (state_4735[(25)]);
var inst_4696 = cljs.core.chunked_seq_QMARK_.call(null,inst_4694);
var state_4735__$1 = state_4735;
if(inst_4696){
var statearr_4766_4836 = state_4735__$1;
(statearr_4766_4836[(1)] = (36));

} else {
var statearr_4767_4837 = state_4735__$1;
(statearr_4767_4837[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (13))){
var inst_4624 = (state_4735[(26)]);
var inst_4627 = cljs.core.async.close_BANG_.call(null,inst_4624);
var state_4735__$1 = state_4735;
var statearr_4768_4838 = state_4735__$1;
(statearr_4768_4838[(2)] = inst_4627);

(statearr_4768_4838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (22))){
var inst_4647 = (state_4735[(8)]);
var inst_4650 = cljs.core.async.close_BANG_.call(null,inst_4647);
var state_4735__$1 = state_4735;
var statearr_4769_4839 = state_4735__$1;
(statearr_4769_4839[(2)] = inst_4650);

(statearr_4769_4839[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (36))){
var inst_4694 = (state_4735[(25)]);
var inst_4698 = cljs.core.chunk_first.call(null,inst_4694);
var inst_4699 = cljs.core.chunk_rest.call(null,inst_4694);
var inst_4700 = cljs.core.count.call(null,inst_4698);
var inst_4675 = inst_4699;
var inst_4676 = inst_4698;
var inst_4677 = inst_4700;
var inst_4678 = (0);
var state_4735__$1 = (function (){var statearr_4770 = state_4735;
(statearr_4770[(10)] = inst_4678);

(statearr_4770[(11)] = inst_4676);

(statearr_4770[(20)] = inst_4675);

(statearr_4770[(21)] = inst_4677);

return statearr_4770;
})();
var statearr_4771_4840 = state_4735__$1;
(statearr_4771_4840[(2)] = null);

(statearr_4771_4840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (41))){
var inst_4694 = (state_4735[(25)]);
var inst_4710 = (state_4735[(2)]);
var inst_4711 = cljs.core.next.call(null,inst_4694);
var inst_4675 = inst_4711;
var inst_4676 = null;
var inst_4677 = (0);
var inst_4678 = (0);
var state_4735__$1 = (function (){var statearr_4772 = state_4735;
(statearr_4772[(27)] = inst_4710);

(statearr_4772[(10)] = inst_4678);

(statearr_4772[(11)] = inst_4676);

(statearr_4772[(20)] = inst_4675);

(statearr_4772[(21)] = inst_4677);

return statearr_4772;
})();
var statearr_4773_4841 = state_4735__$1;
(statearr_4773_4841[(2)] = null);

(statearr_4773_4841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (43))){
var state_4735__$1 = state_4735;
var statearr_4774_4842 = state_4735__$1;
(statearr_4774_4842[(2)] = null);

(statearr_4774_4842[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (29))){
var inst_4719 = (state_4735[(2)]);
var state_4735__$1 = state_4735;
var statearr_4775_4843 = state_4735__$1;
(statearr_4775_4843[(2)] = inst_4719);

(statearr_4775_4843[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (44))){
var inst_4728 = (state_4735[(2)]);
var state_4735__$1 = (function (){var statearr_4776 = state_4735;
(statearr_4776[(28)] = inst_4728);

return statearr_4776;
})();
var statearr_4777_4844 = state_4735__$1;
(statearr_4777_4844[(2)] = null);

(statearr_4777_4844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (6))){
var inst_4667 = (state_4735[(29)]);
var inst_4666 = cljs.core.deref.call(null,cs);
var inst_4667__$1 = cljs.core.keys.call(null,inst_4666);
var inst_4668 = cljs.core.count.call(null,inst_4667__$1);
var inst_4669 = cljs.core.reset_BANG_.call(null,dctr,inst_4668);
var inst_4674 = cljs.core.seq.call(null,inst_4667__$1);
var inst_4675 = inst_4674;
var inst_4676 = null;
var inst_4677 = (0);
var inst_4678 = (0);
var state_4735__$1 = (function (){var statearr_4778 = state_4735;
(statearr_4778[(10)] = inst_4678);

(statearr_4778[(30)] = inst_4669);

(statearr_4778[(11)] = inst_4676);

(statearr_4778[(20)] = inst_4675);

(statearr_4778[(29)] = inst_4667__$1);

(statearr_4778[(21)] = inst_4677);

return statearr_4778;
})();
var statearr_4779_4845 = state_4735__$1;
(statearr_4779_4845[(2)] = null);

(statearr_4779_4845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (28))){
var inst_4694 = (state_4735[(25)]);
var inst_4675 = (state_4735[(20)]);
var inst_4694__$1 = cljs.core.seq.call(null,inst_4675);
var state_4735__$1 = (function (){var statearr_4780 = state_4735;
(statearr_4780[(25)] = inst_4694__$1);

return statearr_4780;
})();
if(inst_4694__$1){
var statearr_4781_4846 = state_4735__$1;
(statearr_4781_4846[(1)] = (33));

} else {
var statearr_4782_4847 = state_4735__$1;
(statearr_4782_4847[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (25))){
var inst_4678 = (state_4735[(10)]);
var inst_4677 = (state_4735[(21)]);
var inst_4680 = (inst_4678 < inst_4677);
var inst_4681 = inst_4680;
var state_4735__$1 = state_4735;
if(cljs.core.truth_(inst_4681)){
var statearr_4783_4848 = state_4735__$1;
(statearr_4783_4848[(1)] = (27));

} else {
var statearr_4784_4849 = state_4735__$1;
(statearr_4784_4849[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (34))){
var state_4735__$1 = state_4735;
var statearr_4785_4850 = state_4735__$1;
(statearr_4785_4850[(2)] = null);

(statearr_4785_4850[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (17))){
var state_4735__$1 = state_4735;
var statearr_4786_4851 = state_4735__$1;
(statearr_4786_4851[(2)] = null);

(statearr_4786_4851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (3))){
var inst_4733 = (state_4735[(2)]);
var state_4735__$1 = state_4735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4735__$1,inst_4733);
} else {
if((state_val_4736 === (12))){
var inst_4662 = (state_4735[(2)]);
var state_4735__$1 = state_4735;
var statearr_4787_4852 = state_4735__$1;
(statearr_4787_4852[(2)] = inst_4662);

(statearr_4787_4852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (2))){
var state_4735__$1 = state_4735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4735__$1,(4),ch);
} else {
if((state_val_4736 === (23))){
var state_4735__$1 = state_4735;
var statearr_4788_4853 = state_4735__$1;
(statearr_4788_4853[(2)] = null);

(statearr_4788_4853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (35))){
var inst_4717 = (state_4735[(2)]);
var state_4735__$1 = state_4735;
var statearr_4789_4854 = state_4735__$1;
(statearr_4789_4854[(2)] = inst_4717);

(statearr_4789_4854[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (19))){
var inst_4634 = (state_4735[(7)]);
var inst_4638 = cljs.core.chunk_first.call(null,inst_4634);
var inst_4639 = cljs.core.chunk_rest.call(null,inst_4634);
var inst_4640 = cljs.core.count.call(null,inst_4638);
var inst_4612 = inst_4639;
var inst_4613 = inst_4638;
var inst_4614 = inst_4640;
var inst_4615 = (0);
var state_4735__$1 = (function (){var statearr_4790 = state_4735;
(statearr_4790[(14)] = inst_4614);

(statearr_4790[(15)] = inst_4613);

(statearr_4790[(16)] = inst_4612);

(statearr_4790[(17)] = inst_4615);

return statearr_4790;
})();
var statearr_4791_4855 = state_4735__$1;
(statearr_4791_4855[(2)] = null);

(statearr_4791_4855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (11))){
var inst_4634 = (state_4735[(7)]);
var inst_4612 = (state_4735[(16)]);
var inst_4634__$1 = cljs.core.seq.call(null,inst_4612);
var state_4735__$1 = (function (){var statearr_4792 = state_4735;
(statearr_4792[(7)] = inst_4634__$1);

return statearr_4792;
})();
if(inst_4634__$1){
var statearr_4793_4856 = state_4735__$1;
(statearr_4793_4856[(1)] = (16));

} else {
var statearr_4794_4857 = state_4735__$1;
(statearr_4794_4857[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (9))){
var inst_4664 = (state_4735[(2)]);
var state_4735__$1 = state_4735;
var statearr_4795_4858 = state_4735__$1;
(statearr_4795_4858[(2)] = inst_4664);

(statearr_4795_4858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (5))){
var inst_4610 = cljs.core.deref.call(null,cs);
var inst_4611 = cljs.core.seq.call(null,inst_4610);
var inst_4612 = inst_4611;
var inst_4613 = null;
var inst_4614 = (0);
var inst_4615 = (0);
var state_4735__$1 = (function (){var statearr_4796 = state_4735;
(statearr_4796[(14)] = inst_4614);

(statearr_4796[(15)] = inst_4613);

(statearr_4796[(16)] = inst_4612);

(statearr_4796[(17)] = inst_4615);

return statearr_4796;
})();
var statearr_4797_4859 = state_4735__$1;
(statearr_4797_4859[(2)] = null);

(statearr_4797_4859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (14))){
var state_4735__$1 = state_4735;
var statearr_4798_4860 = state_4735__$1;
(statearr_4798_4860[(2)] = null);

(statearr_4798_4860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (45))){
var inst_4725 = (state_4735[(2)]);
var state_4735__$1 = state_4735;
var statearr_4799_4861 = state_4735__$1;
(statearr_4799_4861[(2)] = inst_4725);

(statearr_4799_4861[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (26))){
var inst_4667 = (state_4735[(29)]);
var inst_4721 = (state_4735[(2)]);
var inst_4722 = cljs.core.seq.call(null,inst_4667);
var state_4735__$1 = (function (){var statearr_4800 = state_4735;
(statearr_4800[(31)] = inst_4721);

return statearr_4800;
})();
if(inst_4722){
var statearr_4801_4862 = state_4735__$1;
(statearr_4801_4862[(1)] = (42));

} else {
var statearr_4802_4863 = state_4735__$1;
(statearr_4802_4863[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (16))){
var inst_4634 = (state_4735[(7)]);
var inst_4636 = cljs.core.chunked_seq_QMARK_.call(null,inst_4634);
var state_4735__$1 = state_4735;
if(inst_4636){
var statearr_4803_4864 = state_4735__$1;
(statearr_4803_4864[(1)] = (19));

} else {
var statearr_4804_4865 = state_4735__$1;
(statearr_4804_4865[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (38))){
var inst_4714 = (state_4735[(2)]);
var state_4735__$1 = state_4735;
var statearr_4805_4866 = state_4735__$1;
(statearr_4805_4866[(2)] = inst_4714);

(statearr_4805_4866[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (30))){
var state_4735__$1 = state_4735;
var statearr_4806_4867 = state_4735__$1;
(statearr_4806_4867[(2)] = null);

(statearr_4806_4867[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (10))){
var inst_4613 = (state_4735[(15)]);
var inst_4615 = (state_4735[(17)]);
var inst_4623 = cljs.core._nth.call(null,inst_4613,inst_4615);
var inst_4624 = cljs.core.nth.call(null,inst_4623,(0),null);
var inst_4625 = cljs.core.nth.call(null,inst_4623,(1),null);
var state_4735__$1 = (function (){var statearr_4807 = state_4735;
(statearr_4807[(26)] = inst_4624);

return statearr_4807;
})();
if(cljs.core.truth_(inst_4625)){
var statearr_4808_4868 = state_4735__$1;
(statearr_4808_4868[(1)] = (13));

} else {
var statearr_4809_4869 = state_4735__$1;
(statearr_4809_4869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (18))){
var inst_4660 = (state_4735[(2)]);
var state_4735__$1 = state_4735;
var statearr_4810_4870 = state_4735__$1;
(statearr_4810_4870[(2)] = inst_4660);

(statearr_4810_4870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (42))){
var state_4735__$1 = state_4735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4735__$1,(45),dchan);
} else {
if((state_val_4736 === (37))){
var inst_4703 = (state_4735[(23)]);
var inst_4694 = (state_4735[(25)]);
var inst_4603 = (state_4735[(12)]);
var inst_4703__$1 = cljs.core.first.call(null,inst_4694);
var inst_4704 = cljs.core.async.put_BANG_.call(null,inst_4703__$1,inst_4603,done);
var state_4735__$1 = (function (){var statearr_4811 = state_4735;
(statearr_4811[(23)] = inst_4703__$1);

return statearr_4811;
})();
if(cljs.core.truth_(inst_4704)){
var statearr_4812_4871 = state_4735__$1;
(statearr_4812_4871[(1)] = (39));

} else {
var statearr_4813_4872 = state_4735__$1;
(statearr_4813_4872[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4736 === (8))){
var inst_4614 = (state_4735[(14)]);
var inst_4615 = (state_4735[(17)]);
var inst_4617 = (inst_4615 < inst_4614);
var inst_4618 = inst_4617;
var state_4735__$1 = state_4735;
if(cljs.core.truth_(inst_4618)){
var statearr_4814_4873 = state_4735__$1;
(statearr_4814_4873[(1)] = (10));

} else {
var statearr_4815_4874 = state_4735__$1;
(statearr_4815_4874[(1)] = (11));

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
});})(c__2151__auto___4820,cs,m,dchan,dctr,done))
;
return ((function (switch__1996__auto__,c__2151__auto___4820,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__1997__auto__ = null;
var cljs$core$async$mult_$_state_machine__1997__auto____0 = (function (){
var statearr_4816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4816[(0)] = cljs$core$async$mult_$_state_machine__1997__auto__);

(statearr_4816[(1)] = (1));

return statearr_4816;
});
var cljs$core$async$mult_$_state_machine__1997__auto____1 = (function (state_4735){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_4735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e4817){if((e4817 instanceof Object)){
var ex__2000__auto__ = e4817;
var statearr_4818_4875 = state_4735;
(statearr_4818_4875[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4876 = state_4735;
state_4735 = G__4876;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__1997__auto__ = function(state_4735){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__1997__auto____1.call(this,state_4735);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__1997__auto____0;
cljs$core$async$mult_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__1997__auto____1;
return cljs$core$async$mult_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___4820,cs,m,dchan,dctr,done))
})();
var state__2153__auto__ = (function (){var statearr_4819 = f__2152__auto__.call(null);
(statearr_4819[(6)] = c__2151__auto___4820);

return statearr_4819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___4820,cs,m,dchan,dctr,done))
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
var G__4878 = arguments.length;
switch (G__4878) {
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
var len__4497__auto___4890 = arguments.length;
var i__4498__auto___4891 = (0);
while(true){
if((i__4498__auto___4891 < len__4497__auto___4890)){
args__4500__auto__.push((arguments[i__4498__auto___4891]));

var G__4892 = (i__4498__auto___4891 + (1));
i__4498__auto___4891 = G__4892;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4884){
var map__4885 = p__4884;
var map__4885__$1 = ((((!((map__4885 == null)))?(((((map__4885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4885):map__4885);
var opts = map__4885__$1;
var statearr_4887_4893 = state;
(statearr_4887_4893[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__4885,map__4885__$1,opts){
return (function (val){
var statearr_4888_4894 = state;
(statearr_4888_4894[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4885,map__4885__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_4889_4895 = state;
(statearr_4889_4895[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4880){
var G__4881 = cljs.core.first.call(null,seq4880);
var seq4880__$1 = cljs.core.next.call(null,seq4880);
var G__4882 = cljs.core.first.call(null,seq4880__$1);
var seq4880__$2 = cljs.core.next.call(null,seq4880__$1);
var G__4883 = cljs.core.first.call(null,seq4880__$2);
var seq4880__$3 = cljs.core.next.call(null,seq4880__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4881,G__4882,G__4883,seq4880__$3);
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
if(typeof cljs.core.async.t_cljs$core$async4896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4896 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta4897){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta4897 = meta4897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4898,meta4897__$1){
var self__ = this;
var _4898__$1 = this;
return (new cljs.core.async.t_cljs$core$async4896(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta4897__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4898){
var self__ = this;
var _4898__$1 = this;
return self__.meta4897;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4896.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4896.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4896.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4896.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4896.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4896.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4896.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4896.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4896.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta4897","meta4897",-996413624,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4896.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4896";

cljs.core.async.t_cljs$core$async4896.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async4896");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4896.
 */
cljs.core.async.__GT_t_cljs$core$async4896 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async4896(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4897){
return (new cljs.core.async.t_cljs$core$async4896(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4897));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async4896(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2151__auto___5060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___5060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___5060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_5000){
var state_val_5001 = (state_5000[(1)]);
if((state_val_5001 === (7))){
var inst_4915 = (state_5000[(2)]);
var state_5000__$1 = state_5000;
var statearr_5002_5061 = state_5000__$1;
(statearr_5002_5061[(2)] = inst_4915);

(statearr_5002_5061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (20))){
var inst_4927 = (state_5000[(7)]);
var state_5000__$1 = state_5000;
var statearr_5003_5062 = state_5000__$1;
(statearr_5003_5062[(2)] = inst_4927);

(statearr_5003_5062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (27))){
var state_5000__$1 = state_5000;
var statearr_5004_5063 = state_5000__$1;
(statearr_5004_5063[(2)] = null);

(statearr_5004_5063[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (1))){
var inst_4902 = (state_5000[(8)]);
var inst_4902__$1 = calc_state.call(null);
var inst_4904 = (inst_4902__$1 == null);
var inst_4905 = cljs.core.not.call(null,inst_4904);
var state_5000__$1 = (function (){var statearr_5005 = state_5000;
(statearr_5005[(8)] = inst_4902__$1);

return statearr_5005;
})();
if(inst_4905){
var statearr_5006_5064 = state_5000__$1;
(statearr_5006_5064[(1)] = (2));

} else {
var statearr_5007_5065 = state_5000__$1;
(statearr_5007_5065[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (24))){
var inst_4974 = (state_5000[(9)]);
var inst_4951 = (state_5000[(10)]);
var inst_4960 = (state_5000[(11)]);
var inst_4974__$1 = inst_4951.call(null,inst_4960);
var state_5000__$1 = (function (){var statearr_5008 = state_5000;
(statearr_5008[(9)] = inst_4974__$1);

return statearr_5008;
})();
if(cljs.core.truth_(inst_4974__$1)){
var statearr_5009_5066 = state_5000__$1;
(statearr_5009_5066[(1)] = (29));

} else {
var statearr_5010_5067 = state_5000__$1;
(statearr_5010_5067[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (4))){
var inst_4918 = (state_5000[(2)]);
var state_5000__$1 = state_5000;
if(cljs.core.truth_(inst_4918)){
var statearr_5011_5068 = state_5000__$1;
(statearr_5011_5068[(1)] = (8));

} else {
var statearr_5012_5069 = state_5000__$1;
(statearr_5012_5069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (15))){
var inst_4945 = (state_5000[(2)]);
var state_5000__$1 = state_5000;
if(cljs.core.truth_(inst_4945)){
var statearr_5013_5070 = state_5000__$1;
(statearr_5013_5070[(1)] = (19));

} else {
var statearr_5014_5071 = state_5000__$1;
(statearr_5014_5071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (21))){
var inst_4950 = (state_5000[(12)]);
var inst_4950__$1 = (state_5000[(2)]);
var inst_4951 = cljs.core.get.call(null,inst_4950__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4952 = cljs.core.get.call(null,inst_4950__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4953 = cljs.core.get.call(null,inst_4950__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5000__$1 = (function (){var statearr_5015 = state_5000;
(statearr_5015[(13)] = inst_4952);

(statearr_5015[(10)] = inst_4951);

(statearr_5015[(12)] = inst_4950__$1);

return statearr_5015;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5000__$1,(22),inst_4953);
} else {
if((state_val_5001 === (31))){
var inst_4982 = (state_5000[(2)]);
var state_5000__$1 = state_5000;
if(cljs.core.truth_(inst_4982)){
var statearr_5016_5072 = state_5000__$1;
(statearr_5016_5072[(1)] = (32));

} else {
var statearr_5017_5073 = state_5000__$1;
(statearr_5017_5073[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (32))){
var inst_4959 = (state_5000[(14)]);
var state_5000__$1 = state_5000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5000__$1,(35),out,inst_4959);
} else {
if((state_val_5001 === (33))){
var inst_4950 = (state_5000[(12)]);
var inst_4927 = inst_4950;
var state_5000__$1 = (function (){var statearr_5018 = state_5000;
(statearr_5018[(7)] = inst_4927);

return statearr_5018;
})();
var statearr_5019_5074 = state_5000__$1;
(statearr_5019_5074[(2)] = null);

(statearr_5019_5074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (13))){
var inst_4927 = (state_5000[(7)]);
var inst_4934 = inst_4927.cljs$lang$protocol_mask$partition0$;
var inst_4935 = (inst_4934 & (64));
var inst_4936 = inst_4927.cljs$core$ISeq$;
var inst_4937 = (cljs.core.PROTOCOL_SENTINEL === inst_4936);
var inst_4938 = ((inst_4935) || (inst_4937));
var state_5000__$1 = state_5000;
if(cljs.core.truth_(inst_4938)){
var statearr_5020_5075 = state_5000__$1;
(statearr_5020_5075[(1)] = (16));

} else {
var statearr_5021_5076 = state_5000__$1;
(statearr_5021_5076[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (22))){
var inst_4959 = (state_5000[(14)]);
var inst_4960 = (state_5000[(11)]);
var inst_4958 = (state_5000[(2)]);
var inst_4959__$1 = cljs.core.nth.call(null,inst_4958,(0),null);
var inst_4960__$1 = cljs.core.nth.call(null,inst_4958,(1),null);
var inst_4961 = (inst_4959__$1 == null);
var inst_4962 = cljs.core._EQ_.call(null,inst_4960__$1,change);
var inst_4963 = ((inst_4961) || (inst_4962));
var state_5000__$1 = (function (){var statearr_5022 = state_5000;
(statearr_5022[(14)] = inst_4959__$1);

(statearr_5022[(11)] = inst_4960__$1);

return statearr_5022;
})();
if(cljs.core.truth_(inst_4963)){
var statearr_5023_5077 = state_5000__$1;
(statearr_5023_5077[(1)] = (23));

} else {
var statearr_5024_5078 = state_5000__$1;
(statearr_5024_5078[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (36))){
var inst_4950 = (state_5000[(12)]);
var inst_4927 = inst_4950;
var state_5000__$1 = (function (){var statearr_5025 = state_5000;
(statearr_5025[(7)] = inst_4927);

return statearr_5025;
})();
var statearr_5026_5079 = state_5000__$1;
(statearr_5026_5079[(2)] = null);

(statearr_5026_5079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (29))){
var inst_4974 = (state_5000[(9)]);
var state_5000__$1 = state_5000;
var statearr_5027_5080 = state_5000__$1;
(statearr_5027_5080[(2)] = inst_4974);

(statearr_5027_5080[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (6))){
var state_5000__$1 = state_5000;
var statearr_5028_5081 = state_5000__$1;
(statearr_5028_5081[(2)] = false);

(statearr_5028_5081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (28))){
var inst_4970 = (state_5000[(2)]);
var inst_4971 = calc_state.call(null);
var inst_4927 = inst_4971;
var state_5000__$1 = (function (){var statearr_5029 = state_5000;
(statearr_5029[(15)] = inst_4970);

(statearr_5029[(7)] = inst_4927);

return statearr_5029;
})();
var statearr_5030_5082 = state_5000__$1;
(statearr_5030_5082[(2)] = null);

(statearr_5030_5082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (25))){
var inst_4996 = (state_5000[(2)]);
var state_5000__$1 = state_5000;
var statearr_5031_5083 = state_5000__$1;
(statearr_5031_5083[(2)] = inst_4996);

(statearr_5031_5083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (34))){
var inst_4994 = (state_5000[(2)]);
var state_5000__$1 = state_5000;
var statearr_5032_5084 = state_5000__$1;
(statearr_5032_5084[(2)] = inst_4994);

(statearr_5032_5084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (17))){
var state_5000__$1 = state_5000;
var statearr_5033_5085 = state_5000__$1;
(statearr_5033_5085[(2)] = false);

(statearr_5033_5085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (3))){
var state_5000__$1 = state_5000;
var statearr_5034_5086 = state_5000__$1;
(statearr_5034_5086[(2)] = false);

(statearr_5034_5086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (12))){
var inst_4998 = (state_5000[(2)]);
var state_5000__$1 = state_5000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5000__$1,inst_4998);
} else {
if((state_val_5001 === (2))){
var inst_4902 = (state_5000[(8)]);
var inst_4907 = inst_4902.cljs$lang$protocol_mask$partition0$;
var inst_4908 = (inst_4907 & (64));
var inst_4909 = inst_4902.cljs$core$ISeq$;
var inst_4910 = (cljs.core.PROTOCOL_SENTINEL === inst_4909);
var inst_4911 = ((inst_4908) || (inst_4910));
var state_5000__$1 = state_5000;
if(cljs.core.truth_(inst_4911)){
var statearr_5035_5087 = state_5000__$1;
(statearr_5035_5087[(1)] = (5));

} else {
var statearr_5036_5088 = state_5000__$1;
(statearr_5036_5088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (23))){
var inst_4959 = (state_5000[(14)]);
var inst_4965 = (inst_4959 == null);
var state_5000__$1 = state_5000;
if(cljs.core.truth_(inst_4965)){
var statearr_5037_5089 = state_5000__$1;
(statearr_5037_5089[(1)] = (26));

} else {
var statearr_5038_5090 = state_5000__$1;
(statearr_5038_5090[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (35))){
var inst_4985 = (state_5000[(2)]);
var state_5000__$1 = state_5000;
if(cljs.core.truth_(inst_4985)){
var statearr_5039_5091 = state_5000__$1;
(statearr_5039_5091[(1)] = (36));

} else {
var statearr_5040_5092 = state_5000__$1;
(statearr_5040_5092[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (19))){
var inst_4927 = (state_5000[(7)]);
var inst_4947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4927);
var state_5000__$1 = state_5000;
var statearr_5041_5093 = state_5000__$1;
(statearr_5041_5093[(2)] = inst_4947);

(statearr_5041_5093[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (11))){
var inst_4927 = (state_5000[(7)]);
var inst_4931 = (inst_4927 == null);
var inst_4932 = cljs.core.not.call(null,inst_4931);
var state_5000__$1 = state_5000;
if(inst_4932){
var statearr_5042_5094 = state_5000__$1;
(statearr_5042_5094[(1)] = (13));

} else {
var statearr_5043_5095 = state_5000__$1;
(statearr_5043_5095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (9))){
var inst_4902 = (state_5000[(8)]);
var state_5000__$1 = state_5000;
var statearr_5044_5096 = state_5000__$1;
(statearr_5044_5096[(2)] = inst_4902);

(statearr_5044_5096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (5))){
var state_5000__$1 = state_5000;
var statearr_5045_5097 = state_5000__$1;
(statearr_5045_5097[(2)] = true);

(statearr_5045_5097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (14))){
var state_5000__$1 = state_5000;
var statearr_5046_5098 = state_5000__$1;
(statearr_5046_5098[(2)] = false);

(statearr_5046_5098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (26))){
var inst_4960 = (state_5000[(11)]);
var inst_4967 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4960);
var state_5000__$1 = state_5000;
var statearr_5047_5099 = state_5000__$1;
(statearr_5047_5099[(2)] = inst_4967);

(statearr_5047_5099[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (16))){
var state_5000__$1 = state_5000;
var statearr_5048_5100 = state_5000__$1;
(statearr_5048_5100[(2)] = true);

(statearr_5048_5100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (38))){
var inst_4990 = (state_5000[(2)]);
var state_5000__$1 = state_5000;
var statearr_5049_5101 = state_5000__$1;
(statearr_5049_5101[(2)] = inst_4990);

(statearr_5049_5101[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (30))){
var inst_4952 = (state_5000[(13)]);
var inst_4951 = (state_5000[(10)]);
var inst_4960 = (state_5000[(11)]);
var inst_4977 = cljs.core.empty_QMARK_.call(null,inst_4951);
var inst_4978 = inst_4952.call(null,inst_4960);
var inst_4979 = cljs.core.not.call(null,inst_4978);
var inst_4980 = ((inst_4977) && (inst_4979));
var state_5000__$1 = state_5000;
var statearr_5050_5102 = state_5000__$1;
(statearr_5050_5102[(2)] = inst_4980);

(statearr_5050_5102[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (10))){
var inst_4902 = (state_5000[(8)]);
var inst_4923 = (state_5000[(2)]);
var inst_4924 = cljs.core.get.call(null,inst_4923,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4925 = cljs.core.get.call(null,inst_4923,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4926 = cljs.core.get.call(null,inst_4923,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_4927 = inst_4902;
var state_5000__$1 = (function (){var statearr_5051 = state_5000;
(statearr_5051[(16)] = inst_4925);

(statearr_5051[(17)] = inst_4924);

(statearr_5051[(18)] = inst_4926);

(statearr_5051[(7)] = inst_4927);

return statearr_5051;
})();
var statearr_5052_5103 = state_5000__$1;
(statearr_5052_5103[(2)] = null);

(statearr_5052_5103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (18))){
var inst_4942 = (state_5000[(2)]);
var state_5000__$1 = state_5000;
var statearr_5053_5104 = state_5000__$1;
(statearr_5053_5104[(2)] = inst_4942);

(statearr_5053_5104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (37))){
var state_5000__$1 = state_5000;
var statearr_5054_5105 = state_5000__$1;
(statearr_5054_5105[(2)] = null);

(statearr_5054_5105[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5001 === (8))){
var inst_4902 = (state_5000[(8)]);
var inst_4920 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4902);
var state_5000__$1 = state_5000;
var statearr_5055_5106 = state_5000__$1;
(statearr_5055_5106[(2)] = inst_4920);

(statearr_5055_5106[(1)] = (10));


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
});})(c__2151__auto___5060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__1996__auto__,c__2151__auto___5060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__1997__auto__ = null;
var cljs$core$async$mix_$_state_machine__1997__auto____0 = (function (){
var statearr_5056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5056[(0)] = cljs$core$async$mix_$_state_machine__1997__auto__);

(statearr_5056[(1)] = (1));

return statearr_5056;
});
var cljs$core$async$mix_$_state_machine__1997__auto____1 = (function (state_5000){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_5000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e5057){if((e5057 instanceof Object)){
var ex__2000__auto__ = e5057;
var statearr_5058_5107 = state_5000;
(statearr_5058_5107[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5108 = state_5000;
state_5000 = G__5108;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__1997__auto__ = function(state_5000){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__1997__auto____1.call(this,state_5000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__1997__auto____0;
cljs$core$async$mix_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__1997__auto____1;
return cljs$core$async$mix_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___5060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__2153__auto__ = (function (){var statearr_5059 = f__2152__auto__.call(null);
(statearr_5059[(6)] = c__2151__auto___5060);

return statearr_5059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___5060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__5110 = arguments.length;
switch (G__5110) {
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
var G__5114 = arguments.length;
switch (G__5114) {
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
return (function (p1__5112_SHARP_){
if(cljs.core.truth_(p1__5112_SHARP_.call(null,topic))){
return p1__5112_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5112_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async5115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5115 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5116){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5116 = meta5116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5117,meta5116__$1){
var self__ = this;
var _5117__$1 = this;
return (new cljs.core.async.t_cljs$core$async5115(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5116__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5117){
var self__ = this;
var _5117__$1 = this;
return self__.meta5116;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5115.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5115.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5115.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5115.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async5115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5115.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5116","meta5116",-427746528,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5115";

cljs.core.async.t_cljs$core$async5115.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5115");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5115.
 */
cljs.core.async.__GT_t_cljs$core$async5115 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async5115(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5116){
return (new cljs.core.async.t_cljs$core$async5115(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5116));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async5115(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2151__auto___5235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___5235,mults,ensure_mult,p){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___5235,mults,ensure_mult,p){
return (function (state_5189){
var state_val_5190 = (state_5189[(1)]);
if((state_val_5190 === (7))){
var inst_5185 = (state_5189[(2)]);
var state_5189__$1 = state_5189;
var statearr_5191_5236 = state_5189__$1;
(statearr_5191_5236[(2)] = inst_5185);

(statearr_5191_5236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (20))){
var state_5189__$1 = state_5189;
var statearr_5192_5237 = state_5189__$1;
(statearr_5192_5237[(2)] = null);

(statearr_5192_5237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (1))){
var state_5189__$1 = state_5189;
var statearr_5193_5238 = state_5189__$1;
(statearr_5193_5238[(2)] = null);

(statearr_5193_5238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (24))){
var inst_5168 = (state_5189[(7)]);
var inst_5177 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5168);
var state_5189__$1 = state_5189;
var statearr_5194_5239 = state_5189__$1;
(statearr_5194_5239[(2)] = inst_5177);

(statearr_5194_5239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (4))){
var inst_5120 = (state_5189[(8)]);
var inst_5120__$1 = (state_5189[(2)]);
var inst_5121 = (inst_5120__$1 == null);
var state_5189__$1 = (function (){var statearr_5195 = state_5189;
(statearr_5195[(8)] = inst_5120__$1);

return statearr_5195;
})();
if(cljs.core.truth_(inst_5121)){
var statearr_5196_5240 = state_5189__$1;
(statearr_5196_5240[(1)] = (5));

} else {
var statearr_5197_5241 = state_5189__$1;
(statearr_5197_5241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (15))){
var inst_5162 = (state_5189[(2)]);
var state_5189__$1 = state_5189;
var statearr_5198_5242 = state_5189__$1;
(statearr_5198_5242[(2)] = inst_5162);

(statearr_5198_5242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (21))){
var inst_5182 = (state_5189[(2)]);
var state_5189__$1 = (function (){var statearr_5199 = state_5189;
(statearr_5199[(9)] = inst_5182);

return statearr_5199;
})();
var statearr_5200_5243 = state_5189__$1;
(statearr_5200_5243[(2)] = null);

(statearr_5200_5243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (13))){
var inst_5144 = (state_5189[(10)]);
var inst_5146 = cljs.core.chunked_seq_QMARK_.call(null,inst_5144);
var state_5189__$1 = state_5189;
if(inst_5146){
var statearr_5201_5244 = state_5189__$1;
(statearr_5201_5244[(1)] = (16));

} else {
var statearr_5202_5245 = state_5189__$1;
(statearr_5202_5245[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (22))){
var inst_5174 = (state_5189[(2)]);
var state_5189__$1 = state_5189;
if(cljs.core.truth_(inst_5174)){
var statearr_5203_5246 = state_5189__$1;
(statearr_5203_5246[(1)] = (23));

} else {
var statearr_5204_5247 = state_5189__$1;
(statearr_5204_5247[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (6))){
var inst_5170 = (state_5189[(11)]);
var inst_5120 = (state_5189[(8)]);
var inst_5168 = (state_5189[(7)]);
var inst_5168__$1 = topic_fn.call(null,inst_5120);
var inst_5169 = cljs.core.deref.call(null,mults);
var inst_5170__$1 = cljs.core.get.call(null,inst_5169,inst_5168__$1);
var state_5189__$1 = (function (){var statearr_5205 = state_5189;
(statearr_5205[(11)] = inst_5170__$1);

(statearr_5205[(7)] = inst_5168__$1);

return statearr_5205;
})();
if(cljs.core.truth_(inst_5170__$1)){
var statearr_5206_5248 = state_5189__$1;
(statearr_5206_5248[(1)] = (19));

} else {
var statearr_5207_5249 = state_5189__$1;
(statearr_5207_5249[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (25))){
var inst_5179 = (state_5189[(2)]);
var state_5189__$1 = state_5189;
var statearr_5208_5250 = state_5189__$1;
(statearr_5208_5250[(2)] = inst_5179);

(statearr_5208_5250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (17))){
var inst_5144 = (state_5189[(10)]);
var inst_5153 = cljs.core.first.call(null,inst_5144);
var inst_5154 = cljs.core.async.muxch_STAR_.call(null,inst_5153);
var inst_5155 = cljs.core.async.close_BANG_.call(null,inst_5154);
var inst_5156 = cljs.core.next.call(null,inst_5144);
var inst_5130 = inst_5156;
var inst_5131 = null;
var inst_5132 = (0);
var inst_5133 = (0);
var state_5189__$1 = (function (){var statearr_5209 = state_5189;
(statearr_5209[(12)] = inst_5131);

(statearr_5209[(13)] = inst_5132);

(statearr_5209[(14)] = inst_5155);

(statearr_5209[(15)] = inst_5133);

(statearr_5209[(16)] = inst_5130);

return statearr_5209;
})();
var statearr_5210_5251 = state_5189__$1;
(statearr_5210_5251[(2)] = null);

(statearr_5210_5251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (3))){
var inst_5187 = (state_5189[(2)]);
var state_5189__$1 = state_5189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5189__$1,inst_5187);
} else {
if((state_val_5190 === (12))){
var inst_5164 = (state_5189[(2)]);
var state_5189__$1 = state_5189;
var statearr_5211_5252 = state_5189__$1;
(statearr_5211_5252[(2)] = inst_5164);

(statearr_5211_5252[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (2))){
var state_5189__$1 = state_5189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5189__$1,(4),ch);
} else {
if((state_val_5190 === (23))){
var state_5189__$1 = state_5189;
var statearr_5212_5253 = state_5189__$1;
(statearr_5212_5253[(2)] = null);

(statearr_5212_5253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (19))){
var inst_5170 = (state_5189[(11)]);
var inst_5120 = (state_5189[(8)]);
var inst_5172 = cljs.core.async.muxch_STAR_.call(null,inst_5170);
var state_5189__$1 = state_5189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5189__$1,(22),inst_5172,inst_5120);
} else {
if((state_val_5190 === (11))){
var inst_5144 = (state_5189[(10)]);
var inst_5130 = (state_5189[(16)]);
var inst_5144__$1 = cljs.core.seq.call(null,inst_5130);
var state_5189__$1 = (function (){var statearr_5213 = state_5189;
(statearr_5213[(10)] = inst_5144__$1);

return statearr_5213;
})();
if(inst_5144__$1){
var statearr_5214_5254 = state_5189__$1;
(statearr_5214_5254[(1)] = (13));

} else {
var statearr_5215_5255 = state_5189__$1;
(statearr_5215_5255[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (9))){
var inst_5166 = (state_5189[(2)]);
var state_5189__$1 = state_5189;
var statearr_5216_5256 = state_5189__$1;
(statearr_5216_5256[(2)] = inst_5166);

(statearr_5216_5256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (5))){
var inst_5127 = cljs.core.deref.call(null,mults);
var inst_5128 = cljs.core.vals.call(null,inst_5127);
var inst_5129 = cljs.core.seq.call(null,inst_5128);
var inst_5130 = inst_5129;
var inst_5131 = null;
var inst_5132 = (0);
var inst_5133 = (0);
var state_5189__$1 = (function (){var statearr_5217 = state_5189;
(statearr_5217[(12)] = inst_5131);

(statearr_5217[(13)] = inst_5132);

(statearr_5217[(15)] = inst_5133);

(statearr_5217[(16)] = inst_5130);

return statearr_5217;
})();
var statearr_5218_5257 = state_5189__$1;
(statearr_5218_5257[(2)] = null);

(statearr_5218_5257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (14))){
var state_5189__$1 = state_5189;
var statearr_5222_5258 = state_5189__$1;
(statearr_5222_5258[(2)] = null);

(statearr_5222_5258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (16))){
var inst_5144 = (state_5189[(10)]);
var inst_5148 = cljs.core.chunk_first.call(null,inst_5144);
var inst_5149 = cljs.core.chunk_rest.call(null,inst_5144);
var inst_5150 = cljs.core.count.call(null,inst_5148);
var inst_5130 = inst_5149;
var inst_5131 = inst_5148;
var inst_5132 = inst_5150;
var inst_5133 = (0);
var state_5189__$1 = (function (){var statearr_5223 = state_5189;
(statearr_5223[(12)] = inst_5131);

(statearr_5223[(13)] = inst_5132);

(statearr_5223[(15)] = inst_5133);

(statearr_5223[(16)] = inst_5130);

return statearr_5223;
})();
var statearr_5224_5259 = state_5189__$1;
(statearr_5224_5259[(2)] = null);

(statearr_5224_5259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (10))){
var inst_5131 = (state_5189[(12)]);
var inst_5132 = (state_5189[(13)]);
var inst_5133 = (state_5189[(15)]);
var inst_5130 = (state_5189[(16)]);
var inst_5138 = cljs.core._nth.call(null,inst_5131,inst_5133);
var inst_5139 = cljs.core.async.muxch_STAR_.call(null,inst_5138);
var inst_5140 = cljs.core.async.close_BANG_.call(null,inst_5139);
var inst_5141 = (inst_5133 + (1));
var tmp5219 = inst_5131;
var tmp5220 = inst_5132;
var tmp5221 = inst_5130;
var inst_5130__$1 = tmp5221;
var inst_5131__$1 = tmp5219;
var inst_5132__$1 = tmp5220;
var inst_5133__$1 = inst_5141;
var state_5189__$1 = (function (){var statearr_5225 = state_5189;
(statearr_5225[(12)] = inst_5131__$1);

(statearr_5225[(17)] = inst_5140);

(statearr_5225[(13)] = inst_5132__$1);

(statearr_5225[(15)] = inst_5133__$1);

(statearr_5225[(16)] = inst_5130__$1);

return statearr_5225;
})();
var statearr_5226_5260 = state_5189__$1;
(statearr_5226_5260[(2)] = null);

(statearr_5226_5260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (18))){
var inst_5159 = (state_5189[(2)]);
var state_5189__$1 = state_5189;
var statearr_5227_5261 = state_5189__$1;
(statearr_5227_5261[(2)] = inst_5159);

(statearr_5227_5261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5190 === (8))){
var inst_5132 = (state_5189[(13)]);
var inst_5133 = (state_5189[(15)]);
var inst_5135 = (inst_5133 < inst_5132);
var inst_5136 = inst_5135;
var state_5189__$1 = state_5189;
if(cljs.core.truth_(inst_5136)){
var statearr_5228_5262 = state_5189__$1;
(statearr_5228_5262[(1)] = (10));

} else {
var statearr_5229_5263 = state_5189__$1;
(statearr_5229_5263[(1)] = (11));

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
});})(c__2151__auto___5235,mults,ensure_mult,p))
;
return ((function (switch__1996__auto__,c__2151__auto___5235,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__1997__auto__ = null;
var cljs$core$async$state_machine__1997__auto____0 = (function (){
var statearr_5230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5230[(0)] = cljs$core$async$state_machine__1997__auto__);

(statearr_5230[(1)] = (1));

return statearr_5230;
});
var cljs$core$async$state_machine__1997__auto____1 = (function (state_5189){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_5189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e5231){if((e5231 instanceof Object)){
var ex__2000__auto__ = e5231;
var statearr_5232_5264 = state_5189;
(statearr_5232_5264[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5265 = state_5189;
state_5189 = G__5265;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$state_machine__1997__auto__ = function(state_5189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1997__auto____1.call(this,state_5189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1997__auto____0;
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1997__auto____1;
return cljs$core$async$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___5235,mults,ensure_mult,p))
})();
var state__2153__auto__ = (function (){var statearr_5233 = f__2152__auto__.call(null);
(statearr_5233[(6)] = c__2151__auto___5235);

return statearr_5233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___5235,mults,ensure_mult,p))
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
var G__5267 = arguments.length;
switch (G__5267) {
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
var G__5270 = arguments.length;
switch (G__5270) {
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
var G__5273 = arguments.length;
switch (G__5273) {
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
var c__2151__auto___5340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___5340,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___5340,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5312){
var state_val_5313 = (state_5312[(1)]);
if((state_val_5313 === (7))){
var state_5312__$1 = state_5312;
var statearr_5314_5341 = state_5312__$1;
(statearr_5314_5341[(2)] = null);

(statearr_5314_5341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (1))){
var state_5312__$1 = state_5312;
var statearr_5315_5342 = state_5312__$1;
(statearr_5315_5342[(2)] = null);

(statearr_5315_5342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (4))){
var inst_5276 = (state_5312[(7)]);
var inst_5278 = (inst_5276 < cnt);
var state_5312__$1 = state_5312;
if(cljs.core.truth_(inst_5278)){
var statearr_5316_5343 = state_5312__$1;
(statearr_5316_5343[(1)] = (6));

} else {
var statearr_5317_5344 = state_5312__$1;
(statearr_5317_5344[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (15))){
var inst_5308 = (state_5312[(2)]);
var state_5312__$1 = state_5312;
var statearr_5318_5345 = state_5312__$1;
(statearr_5318_5345[(2)] = inst_5308);

(statearr_5318_5345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (13))){
var inst_5301 = cljs.core.async.close_BANG_.call(null,out);
var state_5312__$1 = state_5312;
var statearr_5319_5346 = state_5312__$1;
(statearr_5319_5346[(2)] = inst_5301);

(statearr_5319_5346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (6))){
var state_5312__$1 = state_5312;
var statearr_5320_5347 = state_5312__$1;
(statearr_5320_5347[(2)] = null);

(statearr_5320_5347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (3))){
var inst_5310 = (state_5312[(2)]);
var state_5312__$1 = state_5312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5312__$1,inst_5310);
} else {
if((state_val_5313 === (12))){
var inst_5298 = (state_5312[(8)]);
var inst_5298__$1 = (state_5312[(2)]);
var inst_5299 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5298__$1);
var state_5312__$1 = (function (){var statearr_5321 = state_5312;
(statearr_5321[(8)] = inst_5298__$1);

return statearr_5321;
})();
if(cljs.core.truth_(inst_5299)){
var statearr_5322_5348 = state_5312__$1;
(statearr_5322_5348[(1)] = (13));

} else {
var statearr_5323_5349 = state_5312__$1;
(statearr_5323_5349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (2))){
var inst_5275 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5276 = (0);
var state_5312__$1 = (function (){var statearr_5324 = state_5312;
(statearr_5324[(9)] = inst_5275);

(statearr_5324[(7)] = inst_5276);

return statearr_5324;
})();
var statearr_5325_5350 = state_5312__$1;
(statearr_5325_5350[(2)] = null);

(statearr_5325_5350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (11))){
var inst_5276 = (state_5312[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5312,(10),Object,null,(9));
var inst_5285 = chs__$1.call(null,inst_5276);
var inst_5286 = done.call(null,inst_5276);
var inst_5287 = cljs.core.async.take_BANG_.call(null,inst_5285,inst_5286);
var state_5312__$1 = state_5312;
var statearr_5326_5351 = state_5312__$1;
(statearr_5326_5351[(2)] = inst_5287);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5312__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (9))){
var inst_5276 = (state_5312[(7)]);
var inst_5289 = (state_5312[(2)]);
var inst_5290 = (inst_5276 + (1));
var inst_5276__$1 = inst_5290;
var state_5312__$1 = (function (){var statearr_5327 = state_5312;
(statearr_5327[(7)] = inst_5276__$1);

(statearr_5327[(10)] = inst_5289);

return statearr_5327;
})();
var statearr_5328_5352 = state_5312__$1;
(statearr_5328_5352[(2)] = null);

(statearr_5328_5352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (5))){
var inst_5296 = (state_5312[(2)]);
var state_5312__$1 = (function (){var statearr_5329 = state_5312;
(statearr_5329[(11)] = inst_5296);

return statearr_5329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5312__$1,(12),dchan);
} else {
if((state_val_5313 === (14))){
var inst_5298 = (state_5312[(8)]);
var inst_5303 = cljs.core.apply.call(null,f,inst_5298);
var state_5312__$1 = state_5312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5312__$1,(16),out,inst_5303);
} else {
if((state_val_5313 === (16))){
var inst_5305 = (state_5312[(2)]);
var state_5312__$1 = (function (){var statearr_5330 = state_5312;
(statearr_5330[(12)] = inst_5305);

return statearr_5330;
})();
var statearr_5331_5353 = state_5312__$1;
(statearr_5331_5353[(2)] = null);

(statearr_5331_5353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (10))){
var inst_5280 = (state_5312[(2)]);
var inst_5281 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5312__$1 = (function (){var statearr_5332 = state_5312;
(statearr_5332[(13)] = inst_5280);

return statearr_5332;
})();
var statearr_5333_5354 = state_5312__$1;
(statearr_5333_5354[(2)] = inst_5281);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5312__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5313 === (8))){
var inst_5294 = (state_5312[(2)]);
var state_5312__$1 = state_5312;
var statearr_5334_5355 = state_5312__$1;
(statearr_5334_5355[(2)] = inst_5294);

(statearr_5334_5355[(1)] = (5));


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
});})(c__2151__auto___5340,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__1996__auto__,c__2151__auto___5340,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__1997__auto__ = null;
var cljs$core$async$state_machine__1997__auto____0 = (function (){
var statearr_5335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5335[(0)] = cljs$core$async$state_machine__1997__auto__);

(statearr_5335[(1)] = (1));

return statearr_5335;
});
var cljs$core$async$state_machine__1997__auto____1 = (function (state_5312){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_5312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e5336){if((e5336 instanceof Object)){
var ex__2000__auto__ = e5336;
var statearr_5337_5356 = state_5312;
(statearr_5337_5356[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5357 = state_5312;
state_5312 = G__5357;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$state_machine__1997__auto__ = function(state_5312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1997__auto____1.call(this,state_5312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1997__auto____0;
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1997__auto____1;
return cljs$core$async$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___5340,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__2153__auto__ = (function (){var statearr_5338 = f__2152__auto__.call(null);
(statearr_5338[(6)] = c__2151__auto___5340);

return statearr_5338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___5340,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__5360 = arguments.length;
switch (G__5360) {
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
var c__2151__auto___5414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___5414,out){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___5414,out){
return (function (state_5392){
var state_val_5393 = (state_5392[(1)]);
if((state_val_5393 === (7))){
var inst_5371 = (state_5392[(7)]);
var inst_5372 = (state_5392[(8)]);
var inst_5371__$1 = (state_5392[(2)]);
var inst_5372__$1 = cljs.core.nth.call(null,inst_5371__$1,(0),null);
var inst_5373 = cljs.core.nth.call(null,inst_5371__$1,(1),null);
var inst_5374 = (inst_5372__$1 == null);
var state_5392__$1 = (function (){var statearr_5394 = state_5392;
(statearr_5394[(7)] = inst_5371__$1);

(statearr_5394[(9)] = inst_5373);

(statearr_5394[(8)] = inst_5372__$1);

return statearr_5394;
})();
if(cljs.core.truth_(inst_5374)){
var statearr_5395_5415 = state_5392__$1;
(statearr_5395_5415[(1)] = (8));

} else {
var statearr_5396_5416 = state_5392__$1;
(statearr_5396_5416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (1))){
var inst_5361 = cljs.core.vec.call(null,chs);
var inst_5362 = inst_5361;
var state_5392__$1 = (function (){var statearr_5397 = state_5392;
(statearr_5397[(10)] = inst_5362);

return statearr_5397;
})();
var statearr_5398_5417 = state_5392__$1;
(statearr_5398_5417[(2)] = null);

(statearr_5398_5417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (4))){
var inst_5362 = (state_5392[(10)]);
var state_5392__$1 = state_5392;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5392__$1,(7),inst_5362);
} else {
if((state_val_5393 === (6))){
var inst_5388 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5399_5418 = state_5392__$1;
(statearr_5399_5418[(2)] = inst_5388);

(statearr_5399_5418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (3))){
var inst_5390 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5392__$1,inst_5390);
} else {
if((state_val_5393 === (2))){
var inst_5362 = (state_5392[(10)]);
var inst_5364 = cljs.core.count.call(null,inst_5362);
var inst_5365 = (inst_5364 > (0));
var state_5392__$1 = state_5392;
if(cljs.core.truth_(inst_5365)){
var statearr_5401_5419 = state_5392__$1;
(statearr_5401_5419[(1)] = (4));

} else {
var statearr_5402_5420 = state_5392__$1;
(statearr_5402_5420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (11))){
var inst_5362 = (state_5392[(10)]);
var inst_5381 = (state_5392[(2)]);
var tmp5400 = inst_5362;
var inst_5362__$1 = tmp5400;
var state_5392__$1 = (function (){var statearr_5403 = state_5392;
(statearr_5403[(11)] = inst_5381);

(statearr_5403[(10)] = inst_5362__$1);

return statearr_5403;
})();
var statearr_5404_5421 = state_5392__$1;
(statearr_5404_5421[(2)] = null);

(statearr_5404_5421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (9))){
var inst_5372 = (state_5392[(8)]);
var state_5392__$1 = state_5392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5392__$1,(11),out,inst_5372);
} else {
if((state_val_5393 === (5))){
var inst_5386 = cljs.core.async.close_BANG_.call(null,out);
var state_5392__$1 = state_5392;
var statearr_5405_5422 = state_5392__$1;
(statearr_5405_5422[(2)] = inst_5386);

(statearr_5405_5422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (10))){
var inst_5384 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5406_5423 = state_5392__$1;
(statearr_5406_5423[(2)] = inst_5384);

(statearr_5406_5423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (8))){
var inst_5371 = (state_5392[(7)]);
var inst_5373 = (state_5392[(9)]);
var inst_5372 = (state_5392[(8)]);
var inst_5362 = (state_5392[(10)]);
var inst_5376 = (function (){var cs = inst_5362;
var vec__5367 = inst_5371;
var v = inst_5372;
var c = inst_5373;
return ((function (cs,vec__5367,v,c,inst_5371,inst_5373,inst_5372,inst_5362,state_val_5393,c__2151__auto___5414,out){
return (function (p1__5358_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5358_SHARP_);
});
;})(cs,vec__5367,v,c,inst_5371,inst_5373,inst_5372,inst_5362,state_val_5393,c__2151__auto___5414,out))
})();
var inst_5377 = cljs.core.filterv.call(null,inst_5376,inst_5362);
var inst_5362__$1 = inst_5377;
var state_5392__$1 = (function (){var statearr_5407 = state_5392;
(statearr_5407[(10)] = inst_5362__$1);

return statearr_5407;
})();
var statearr_5408_5424 = state_5392__$1;
(statearr_5408_5424[(2)] = null);

(statearr_5408_5424[(1)] = (2));


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
});})(c__2151__auto___5414,out))
;
return ((function (switch__1996__auto__,c__2151__auto___5414,out){
return (function() {
var cljs$core$async$state_machine__1997__auto__ = null;
var cljs$core$async$state_machine__1997__auto____0 = (function (){
var statearr_5409 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5409[(0)] = cljs$core$async$state_machine__1997__auto__);

(statearr_5409[(1)] = (1));

return statearr_5409;
});
var cljs$core$async$state_machine__1997__auto____1 = (function (state_5392){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_5392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e5410){if((e5410 instanceof Object)){
var ex__2000__auto__ = e5410;
var statearr_5411_5425 = state_5392;
(statearr_5411_5425[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5426 = state_5392;
state_5392 = G__5426;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$state_machine__1997__auto__ = function(state_5392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1997__auto____1.call(this,state_5392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1997__auto____0;
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1997__auto____1;
return cljs$core$async$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___5414,out))
})();
var state__2153__auto__ = (function (){var statearr_5412 = f__2152__auto__.call(null);
(statearr_5412[(6)] = c__2151__auto___5414);

return statearr_5412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___5414,out))
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
var G__5428 = arguments.length;
switch (G__5428) {
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
var c__2151__auto___5473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___5473,out){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___5473,out){
return (function (state_5452){
var state_val_5453 = (state_5452[(1)]);
if((state_val_5453 === (7))){
var inst_5434 = (state_5452[(7)]);
var inst_5434__$1 = (state_5452[(2)]);
var inst_5435 = (inst_5434__$1 == null);
var inst_5436 = cljs.core.not.call(null,inst_5435);
var state_5452__$1 = (function (){var statearr_5454 = state_5452;
(statearr_5454[(7)] = inst_5434__$1);

return statearr_5454;
})();
if(inst_5436){
var statearr_5455_5474 = state_5452__$1;
(statearr_5455_5474[(1)] = (8));

} else {
var statearr_5456_5475 = state_5452__$1;
(statearr_5456_5475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5453 === (1))){
var inst_5429 = (0);
var state_5452__$1 = (function (){var statearr_5457 = state_5452;
(statearr_5457[(8)] = inst_5429);

return statearr_5457;
})();
var statearr_5458_5476 = state_5452__$1;
(statearr_5458_5476[(2)] = null);

(statearr_5458_5476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5453 === (4))){
var state_5452__$1 = state_5452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5452__$1,(7),ch);
} else {
if((state_val_5453 === (6))){
var inst_5447 = (state_5452[(2)]);
var state_5452__$1 = state_5452;
var statearr_5459_5477 = state_5452__$1;
(statearr_5459_5477[(2)] = inst_5447);

(statearr_5459_5477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5453 === (3))){
var inst_5449 = (state_5452[(2)]);
var inst_5450 = cljs.core.async.close_BANG_.call(null,out);
var state_5452__$1 = (function (){var statearr_5460 = state_5452;
(statearr_5460[(9)] = inst_5449);

return statearr_5460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5452__$1,inst_5450);
} else {
if((state_val_5453 === (2))){
var inst_5429 = (state_5452[(8)]);
var inst_5431 = (inst_5429 < n);
var state_5452__$1 = state_5452;
if(cljs.core.truth_(inst_5431)){
var statearr_5461_5478 = state_5452__$1;
(statearr_5461_5478[(1)] = (4));

} else {
var statearr_5462_5479 = state_5452__$1;
(statearr_5462_5479[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5453 === (11))){
var inst_5429 = (state_5452[(8)]);
var inst_5439 = (state_5452[(2)]);
var inst_5440 = (inst_5429 + (1));
var inst_5429__$1 = inst_5440;
var state_5452__$1 = (function (){var statearr_5463 = state_5452;
(statearr_5463[(10)] = inst_5439);

(statearr_5463[(8)] = inst_5429__$1);

return statearr_5463;
})();
var statearr_5464_5480 = state_5452__$1;
(statearr_5464_5480[(2)] = null);

(statearr_5464_5480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5453 === (9))){
var state_5452__$1 = state_5452;
var statearr_5465_5481 = state_5452__$1;
(statearr_5465_5481[(2)] = null);

(statearr_5465_5481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5453 === (5))){
var state_5452__$1 = state_5452;
var statearr_5466_5482 = state_5452__$1;
(statearr_5466_5482[(2)] = null);

(statearr_5466_5482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5453 === (10))){
var inst_5444 = (state_5452[(2)]);
var state_5452__$1 = state_5452;
var statearr_5467_5483 = state_5452__$1;
(statearr_5467_5483[(2)] = inst_5444);

(statearr_5467_5483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5453 === (8))){
var inst_5434 = (state_5452[(7)]);
var state_5452__$1 = state_5452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5452__$1,(11),out,inst_5434);
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
});})(c__2151__auto___5473,out))
;
return ((function (switch__1996__auto__,c__2151__auto___5473,out){
return (function() {
var cljs$core$async$state_machine__1997__auto__ = null;
var cljs$core$async$state_machine__1997__auto____0 = (function (){
var statearr_5468 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5468[(0)] = cljs$core$async$state_machine__1997__auto__);

(statearr_5468[(1)] = (1));

return statearr_5468;
});
var cljs$core$async$state_machine__1997__auto____1 = (function (state_5452){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_5452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e5469){if((e5469 instanceof Object)){
var ex__2000__auto__ = e5469;
var statearr_5470_5484 = state_5452;
(statearr_5470_5484[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5485 = state_5452;
state_5452 = G__5485;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$state_machine__1997__auto__ = function(state_5452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1997__auto____1.call(this,state_5452);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1997__auto____0;
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1997__auto____1;
return cljs$core$async$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___5473,out))
})();
var state__2153__auto__ = (function (){var statearr_5471 = f__2152__auto__.call(null);
(statearr_5471[(6)] = c__2151__auto___5473);

return statearr_5471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___5473,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5487 = (function (f,ch,meta5488){
this.f = f;
this.ch = ch;
this.meta5488 = meta5488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5489,meta5488__$1){
var self__ = this;
var _5489__$1 = this;
return (new cljs.core.async.t_cljs$core$async5487(self__.f,self__.ch,meta5488__$1));
});

cljs.core.async.t_cljs$core$async5487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5489){
var self__ = this;
var _5489__$1 = this;
return self__.meta5488;
});

cljs.core.async.t_cljs$core$async5487.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5487.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5487.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5487.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5487.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async5490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5490 = (function (f,ch,meta5488,_,fn1,meta5491){
this.f = f;
this.ch = ch;
this.meta5488 = meta5488;
this._ = _;
this.fn1 = fn1;
this.meta5491 = meta5491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5492,meta5491__$1){
var self__ = this;
var _5492__$1 = this;
return (new cljs.core.async.t_cljs$core$async5490(self__.f,self__.ch,self__.meta5488,self__._,self__.fn1,meta5491__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async5490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5492){
var self__ = this;
var _5492__$1 = this;
return self__.meta5491;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5490.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5486_SHARP_){
return f1.call(null,(((p1__5486_SHARP_ == null))?null:self__.f.call(null,p1__5486_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async5490.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5488","meta5488",1907949027,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async5487","cljs.core.async/t_cljs$core$async5487",876894620,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5491","meta5491",-2141517002,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5490";

cljs.core.async.t_cljs$core$async5490.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5490");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5490.
 */
cljs.core.async.__GT_t_cljs$core$async5490 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5490(f__$1,ch__$1,meta5488__$1,___$2,fn1__$1,meta5491){
return (new cljs.core.async.t_cljs$core$async5490(f__$1,ch__$1,meta5488__$1,___$2,fn1__$1,meta5491));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async5490(self__.f,self__.ch,self__.meta5488,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async5487.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5487.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async5487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5488","meta5488",1907949027,null)], null);
});

cljs.core.async.t_cljs$core$async5487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5487";

cljs.core.async.t_cljs$core$async5487.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5487");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5487.
 */
cljs.core.async.__GT_t_cljs$core$async5487 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5487(f__$1,ch__$1,meta5488){
return (new cljs.core.async.t_cljs$core$async5487(f__$1,ch__$1,meta5488));
});

}

return (new cljs.core.async.t_cljs$core$async5487(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5493 = (function (f,ch,meta5494){
this.f = f;
this.ch = ch;
this.meta5494 = meta5494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5495,meta5494__$1){
var self__ = this;
var _5495__$1 = this;
return (new cljs.core.async.t_cljs$core$async5493(self__.f,self__.ch,meta5494__$1));
});

cljs.core.async.t_cljs$core$async5493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5495){
var self__ = this;
var _5495__$1 = this;
return self__.meta5494;
});

cljs.core.async.t_cljs$core$async5493.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5493.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5493.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5493.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5493.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5493.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async5493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5494","meta5494",503309499,null)], null);
});

cljs.core.async.t_cljs$core$async5493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5493";

cljs.core.async.t_cljs$core$async5493.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5493");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5493.
 */
cljs.core.async.__GT_t_cljs$core$async5493 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async5493(f__$1,ch__$1,meta5494){
return (new cljs.core.async.t_cljs$core$async5493(f__$1,ch__$1,meta5494));
});

}

return (new cljs.core.async.t_cljs$core$async5493(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async5496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5496 = (function (p,ch,meta5497){
this.p = p;
this.ch = ch;
this.meta5497 = meta5497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5498,meta5497__$1){
var self__ = this;
var _5498__$1 = this;
return (new cljs.core.async.t_cljs$core$async5496(self__.p,self__.ch,meta5497__$1));
});

cljs.core.async.t_cljs$core$async5496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5498){
var self__ = this;
var _5498__$1 = this;
return self__.meta5497;
});

cljs.core.async.t_cljs$core$async5496.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5496.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5496.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5496.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5496.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5496.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5496.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async5496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5497","meta5497",-324335869,null)], null);
});

cljs.core.async.t_cljs$core$async5496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5496";

cljs.core.async.t_cljs$core$async5496.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async5496");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5496.
 */
cljs.core.async.__GT_t_cljs$core$async5496 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async5496(p__$1,ch__$1,meta5497){
return (new cljs.core.async.t_cljs$core$async5496(p__$1,ch__$1,meta5497));
});

}

return (new cljs.core.async.t_cljs$core$async5496(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__5500 = arguments.length;
switch (G__5500) {
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
var c__2151__auto___5540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___5540,out){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___5540,out){
return (function (state_5521){
var state_val_5522 = (state_5521[(1)]);
if((state_val_5522 === (7))){
var inst_5517 = (state_5521[(2)]);
var state_5521__$1 = state_5521;
var statearr_5523_5541 = state_5521__$1;
(statearr_5523_5541[(2)] = inst_5517);

(statearr_5523_5541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5522 === (1))){
var state_5521__$1 = state_5521;
var statearr_5524_5542 = state_5521__$1;
(statearr_5524_5542[(2)] = null);

(statearr_5524_5542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5522 === (4))){
var inst_5503 = (state_5521[(7)]);
var inst_5503__$1 = (state_5521[(2)]);
var inst_5504 = (inst_5503__$1 == null);
var state_5521__$1 = (function (){var statearr_5525 = state_5521;
(statearr_5525[(7)] = inst_5503__$1);

return statearr_5525;
})();
if(cljs.core.truth_(inst_5504)){
var statearr_5526_5543 = state_5521__$1;
(statearr_5526_5543[(1)] = (5));

} else {
var statearr_5527_5544 = state_5521__$1;
(statearr_5527_5544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5522 === (6))){
var inst_5503 = (state_5521[(7)]);
var inst_5508 = p.call(null,inst_5503);
var state_5521__$1 = state_5521;
if(cljs.core.truth_(inst_5508)){
var statearr_5528_5545 = state_5521__$1;
(statearr_5528_5545[(1)] = (8));

} else {
var statearr_5529_5546 = state_5521__$1;
(statearr_5529_5546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5522 === (3))){
var inst_5519 = (state_5521[(2)]);
var state_5521__$1 = state_5521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5521__$1,inst_5519);
} else {
if((state_val_5522 === (2))){
var state_5521__$1 = state_5521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5521__$1,(4),ch);
} else {
if((state_val_5522 === (11))){
var inst_5511 = (state_5521[(2)]);
var state_5521__$1 = state_5521;
var statearr_5530_5547 = state_5521__$1;
(statearr_5530_5547[(2)] = inst_5511);

(statearr_5530_5547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5522 === (9))){
var state_5521__$1 = state_5521;
var statearr_5531_5548 = state_5521__$1;
(statearr_5531_5548[(2)] = null);

(statearr_5531_5548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5522 === (5))){
var inst_5506 = cljs.core.async.close_BANG_.call(null,out);
var state_5521__$1 = state_5521;
var statearr_5532_5549 = state_5521__$1;
(statearr_5532_5549[(2)] = inst_5506);

(statearr_5532_5549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5522 === (10))){
var inst_5514 = (state_5521[(2)]);
var state_5521__$1 = (function (){var statearr_5533 = state_5521;
(statearr_5533[(8)] = inst_5514);

return statearr_5533;
})();
var statearr_5534_5550 = state_5521__$1;
(statearr_5534_5550[(2)] = null);

(statearr_5534_5550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5522 === (8))){
var inst_5503 = (state_5521[(7)]);
var state_5521__$1 = state_5521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5521__$1,(11),out,inst_5503);
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
});})(c__2151__auto___5540,out))
;
return ((function (switch__1996__auto__,c__2151__auto___5540,out){
return (function() {
var cljs$core$async$state_machine__1997__auto__ = null;
var cljs$core$async$state_machine__1997__auto____0 = (function (){
var statearr_5535 = [null,null,null,null,null,null,null,null,null];
(statearr_5535[(0)] = cljs$core$async$state_machine__1997__auto__);

(statearr_5535[(1)] = (1));

return statearr_5535;
});
var cljs$core$async$state_machine__1997__auto____1 = (function (state_5521){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_5521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e5536){if((e5536 instanceof Object)){
var ex__2000__auto__ = e5536;
var statearr_5537_5551 = state_5521;
(statearr_5537_5551[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5552 = state_5521;
state_5521 = G__5552;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$state_machine__1997__auto__ = function(state_5521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1997__auto____1.call(this,state_5521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1997__auto____0;
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1997__auto____1;
return cljs$core$async$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___5540,out))
})();
var state__2153__auto__ = (function (){var statearr_5538 = f__2152__auto__.call(null);
(statearr_5538[(6)] = c__2151__auto___5540);

return statearr_5538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___5540,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__5554 = arguments.length;
switch (G__5554) {
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
var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__){
return (function (state_5617){
var state_val_5618 = (state_5617[(1)]);
if((state_val_5618 === (7))){
var inst_5613 = (state_5617[(2)]);
var state_5617__$1 = state_5617;
var statearr_5619_5657 = state_5617__$1;
(statearr_5619_5657[(2)] = inst_5613);

(statearr_5619_5657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (20))){
var inst_5583 = (state_5617[(7)]);
var inst_5594 = (state_5617[(2)]);
var inst_5595 = cljs.core.next.call(null,inst_5583);
var inst_5569 = inst_5595;
var inst_5570 = null;
var inst_5571 = (0);
var inst_5572 = (0);
var state_5617__$1 = (function (){var statearr_5620 = state_5617;
(statearr_5620[(8)] = inst_5571);

(statearr_5620[(9)] = inst_5570);

(statearr_5620[(10)] = inst_5569);

(statearr_5620[(11)] = inst_5572);

(statearr_5620[(12)] = inst_5594);

return statearr_5620;
})();
var statearr_5621_5658 = state_5617__$1;
(statearr_5621_5658[(2)] = null);

(statearr_5621_5658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (1))){
var state_5617__$1 = state_5617;
var statearr_5622_5659 = state_5617__$1;
(statearr_5622_5659[(2)] = null);

(statearr_5622_5659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (4))){
var inst_5558 = (state_5617[(13)]);
var inst_5558__$1 = (state_5617[(2)]);
var inst_5559 = (inst_5558__$1 == null);
var state_5617__$1 = (function (){var statearr_5623 = state_5617;
(statearr_5623[(13)] = inst_5558__$1);

return statearr_5623;
})();
if(cljs.core.truth_(inst_5559)){
var statearr_5624_5660 = state_5617__$1;
(statearr_5624_5660[(1)] = (5));

} else {
var statearr_5625_5661 = state_5617__$1;
(statearr_5625_5661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (15))){
var state_5617__$1 = state_5617;
var statearr_5629_5662 = state_5617__$1;
(statearr_5629_5662[(2)] = null);

(statearr_5629_5662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (21))){
var state_5617__$1 = state_5617;
var statearr_5630_5663 = state_5617__$1;
(statearr_5630_5663[(2)] = null);

(statearr_5630_5663[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (13))){
var inst_5571 = (state_5617[(8)]);
var inst_5570 = (state_5617[(9)]);
var inst_5569 = (state_5617[(10)]);
var inst_5572 = (state_5617[(11)]);
var inst_5579 = (state_5617[(2)]);
var inst_5580 = (inst_5572 + (1));
var tmp5626 = inst_5571;
var tmp5627 = inst_5570;
var tmp5628 = inst_5569;
var inst_5569__$1 = tmp5628;
var inst_5570__$1 = tmp5627;
var inst_5571__$1 = tmp5626;
var inst_5572__$1 = inst_5580;
var state_5617__$1 = (function (){var statearr_5631 = state_5617;
(statearr_5631[(14)] = inst_5579);

(statearr_5631[(8)] = inst_5571__$1);

(statearr_5631[(9)] = inst_5570__$1);

(statearr_5631[(10)] = inst_5569__$1);

(statearr_5631[(11)] = inst_5572__$1);

return statearr_5631;
})();
var statearr_5632_5664 = state_5617__$1;
(statearr_5632_5664[(2)] = null);

(statearr_5632_5664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (22))){
var state_5617__$1 = state_5617;
var statearr_5633_5665 = state_5617__$1;
(statearr_5633_5665[(2)] = null);

(statearr_5633_5665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (6))){
var inst_5558 = (state_5617[(13)]);
var inst_5567 = f.call(null,inst_5558);
var inst_5568 = cljs.core.seq.call(null,inst_5567);
var inst_5569 = inst_5568;
var inst_5570 = null;
var inst_5571 = (0);
var inst_5572 = (0);
var state_5617__$1 = (function (){var statearr_5634 = state_5617;
(statearr_5634[(8)] = inst_5571);

(statearr_5634[(9)] = inst_5570);

(statearr_5634[(10)] = inst_5569);

(statearr_5634[(11)] = inst_5572);

return statearr_5634;
})();
var statearr_5635_5666 = state_5617__$1;
(statearr_5635_5666[(2)] = null);

(statearr_5635_5666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (17))){
var inst_5583 = (state_5617[(7)]);
var inst_5587 = cljs.core.chunk_first.call(null,inst_5583);
var inst_5588 = cljs.core.chunk_rest.call(null,inst_5583);
var inst_5589 = cljs.core.count.call(null,inst_5587);
var inst_5569 = inst_5588;
var inst_5570 = inst_5587;
var inst_5571 = inst_5589;
var inst_5572 = (0);
var state_5617__$1 = (function (){var statearr_5636 = state_5617;
(statearr_5636[(8)] = inst_5571);

(statearr_5636[(9)] = inst_5570);

(statearr_5636[(10)] = inst_5569);

(statearr_5636[(11)] = inst_5572);

return statearr_5636;
})();
var statearr_5637_5667 = state_5617__$1;
(statearr_5637_5667[(2)] = null);

(statearr_5637_5667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (3))){
var inst_5615 = (state_5617[(2)]);
var state_5617__$1 = state_5617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5617__$1,inst_5615);
} else {
if((state_val_5618 === (12))){
var inst_5603 = (state_5617[(2)]);
var state_5617__$1 = state_5617;
var statearr_5638_5668 = state_5617__$1;
(statearr_5638_5668[(2)] = inst_5603);

(statearr_5638_5668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (2))){
var state_5617__$1 = state_5617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5617__$1,(4),in$);
} else {
if((state_val_5618 === (23))){
var inst_5611 = (state_5617[(2)]);
var state_5617__$1 = state_5617;
var statearr_5639_5669 = state_5617__$1;
(statearr_5639_5669[(2)] = inst_5611);

(statearr_5639_5669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (19))){
var inst_5598 = (state_5617[(2)]);
var state_5617__$1 = state_5617;
var statearr_5640_5670 = state_5617__$1;
(statearr_5640_5670[(2)] = inst_5598);

(statearr_5640_5670[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (11))){
var inst_5583 = (state_5617[(7)]);
var inst_5569 = (state_5617[(10)]);
var inst_5583__$1 = cljs.core.seq.call(null,inst_5569);
var state_5617__$1 = (function (){var statearr_5641 = state_5617;
(statearr_5641[(7)] = inst_5583__$1);

return statearr_5641;
})();
if(inst_5583__$1){
var statearr_5642_5671 = state_5617__$1;
(statearr_5642_5671[(1)] = (14));

} else {
var statearr_5643_5672 = state_5617__$1;
(statearr_5643_5672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (9))){
var inst_5605 = (state_5617[(2)]);
var inst_5606 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_5617__$1 = (function (){var statearr_5644 = state_5617;
(statearr_5644[(15)] = inst_5605);

return statearr_5644;
})();
if(cljs.core.truth_(inst_5606)){
var statearr_5645_5673 = state_5617__$1;
(statearr_5645_5673[(1)] = (21));

} else {
var statearr_5646_5674 = state_5617__$1;
(statearr_5646_5674[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (5))){
var inst_5561 = cljs.core.async.close_BANG_.call(null,out);
var state_5617__$1 = state_5617;
var statearr_5647_5675 = state_5617__$1;
(statearr_5647_5675[(2)] = inst_5561);

(statearr_5647_5675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (14))){
var inst_5583 = (state_5617[(7)]);
var inst_5585 = cljs.core.chunked_seq_QMARK_.call(null,inst_5583);
var state_5617__$1 = state_5617;
if(inst_5585){
var statearr_5648_5676 = state_5617__$1;
(statearr_5648_5676[(1)] = (17));

} else {
var statearr_5649_5677 = state_5617__$1;
(statearr_5649_5677[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (16))){
var inst_5601 = (state_5617[(2)]);
var state_5617__$1 = state_5617;
var statearr_5650_5678 = state_5617__$1;
(statearr_5650_5678[(2)] = inst_5601);

(statearr_5650_5678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5618 === (10))){
var inst_5570 = (state_5617[(9)]);
var inst_5572 = (state_5617[(11)]);
var inst_5577 = cljs.core._nth.call(null,inst_5570,inst_5572);
var state_5617__$1 = state_5617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5617__$1,(13),out,inst_5577);
} else {
if((state_val_5618 === (18))){
var inst_5583 = (state_5617[(7)]);
var inst_5592 = cljs.core.first.call(null,inst_5583);
var state_5617__$1 = state_5617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5617__$1,(20),out,inst_5592);
} else {
if((state_val_5618 === (8))){
var inst_5571 = (state_5617[(8)]);
var inst_5572 = (state_5617[(11)]);
var inst_5574 = (inst_5572 < inst_5571);
var inst_5575 = inst_5574;
var state_5617__$1 = state_5617;
if(cljs.core.truth_(inst_5575)){
var statearr_5651_5679 = state_5617__$1;
(statearr_5651_5679[(1)] = (10));

} else {
var statearr_5652_5680 = state_5617__$1;
(statearr_5652_5680[(1)] = (11));

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
});})(c__2151__auto__))
;
return ((function (switch__1996__auto__,c__2151__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__1997__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__1997__auto____0 = (function (){
var statearr_5653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5653[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__1997__auto__);

(statearr_5653[(1)] = (1));

return statearr_5653;
});
var cljs$core$async$mapcat_STAR__$_state_machine__1997__auto____1 = (function (state_5617){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_5617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e5654){if((e5654 instanceof Object)){
var ex__2000__auto__ = e5654;
var statearr_5655_5681 = state_5617;
(statearr_5655_5681[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5682 = state_5617;
state_5617 = G__5682;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__1997__auto__ = function(state_5617){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__1997__auto____1.call(this,state_5617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__1997__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__1997__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__))
})();
var state__2153__auto__ = (function (){var statearr_5656 = f__2152__auto__.call(null);
(statearr_5656[(6)] = c__2151__auto__);

return statearr_5656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__))
);

return c__2151__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__5684 = arguments.length;
switch (G__5684) {
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
var G__5687 = arguments.length;
switch (G__5687) {
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
var G__5690 = arguments.length;
switch (G__5690) {
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
var c__2151__auto___5737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___5737,out){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___5737,out){
return (function (state_5714){
var state_val_5715 = (state_5714[(1)]);
if((state_val_5715 === (7))){
var inst_5709 = (state_5714[(2)]);
var state_5714__$1 = state_5714;
var statearr_5716_5738 = state_5714__$1;
(statearr_5716_5738[(2)] = inst_5709);

(statearr_5716_5738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5715 === (1))){
var inst_5691 = null;
var state_5714__$1 = (function (){var statearr_5717 = state_5714;
(statearr_5717[(7)] = inst_5691);

return statearr_5717;
})();
var statearr_5718_5739 = state_5714__$1;
(statearr_5718_5739[(2)] = null);

(statearr_5718_5739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5715 === (4))){
var inst_5694 = (state_5714[(8)]);
var inst_5694__$1 = (state_5714[(2)]);
var inst_5695 = (inst_5694__$1 == null);
var inst_5696 = cljs.core.not.call(null,inst_5695);
var state_5714__$1 = (function (){var statearr_5719 = state_5714;
(statearr_5719[(8)] = inst_5694__$1);

return statearr_5719;
})();
if(inst_5696){
var statearr_5720_5740 = state_5714__$1;
(statearr_5720_5740[(1)] = (5));

} else {
var statearr_5721_5741 = state_5714__$1;
(statearr_5721_5741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5715 === (6))){
var state_5714__$1 = state_5714;
var statearr_5722_5742 = state_5714__$1;
(statearr_5722_5742[(2)] = null);

(statearr_5722_5742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5715 === (3))){
var inst_5711 = (state_5714[(2)]);
var inst_5712 = cljs.core.async.close_BANG_.call(null,out);
var state_5714__$1 = (function (){var statearr_5723 = state_5714;
(statearr_5723[(9)] = inst_5711);

return statearr_5723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5714__$1,inst_5712);
} else {
if((state_val_5715 === (2))){
var state_5714__$1 = state_5714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5714__$1,(4),ch);
} else {
if((state_val_5715 === (11))){
var inst_5694 = (state_5714[(8)]);
var inst_5703 = (state_5714[(2)]);
var inst_5691 = inst_5694;
var state_5714__$1 = (function (){var statearr_5724 = state_5714;
(statearr_5724[(7)] = inst_5691);

(statearr_5724[(10)] = inst_5703);

return statearr_5724;
})();
var statearr_5725_5743 = state_5714__$1;
(statearr_5725_5743[(2)] = null);

(statearr_5725_5743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5715 === (9))){
var inst_5694 = (state_5714[(8)]);
var state_5714__$1 = state_5714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5714__$1,(11),out,inst_5694);
} else {
if((state_val_5715 === (5))){
var inst_5691 = (state_5714[(7)]);
var inst_5694 = (state_5714[(8)]);
var inst_5698 = cljs.core._EQ_.call(null,inst_5694,inst_5691);
var state_5714__$1 = state_5714;
if(inst_5698){
var statearr_5727_5744 = state_5714__$1;
(statearr_5727_5744[(1)] = (8));

} else {
var statearr_5728_5745 = state_5714__$1;
(statearr_5728_5745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5715 === (10))){
var inst_5706 = (state_5714[(2)]);
var state_5714__$1 = state_5714;
var statearr_5729_5746 = state_5714__$1;
(statearr_5729_5746[(2)] = inst_5706);

(statearr_5729_5746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5715 === (8))){
var inst_5691 = (state_5714[(7)]);
var tmp5726 = inst_5691;
var inst_5691__$1 = tmp5726;
var state_5714__$1 = (function (){var statearr_5730 = state_5714;
(statearr_5730[(7)] = inst_5691__$1);

return statearr_5730;
})();
var statearr_5731_5747 = state_5714__$1;
(statearr_5731_5747[(2)] = null);

(statearr_5731_5747[(1)] = (2));


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
});})(c__2151__auto___5737,out))
;
return ((function (switch__1996__auto__,c__2151__auto___5737,out){
return (function() {
var cljs$core$async$state_machine__1997__auto__ = null;
var cljs$core$async$state_machine__1997__auto____0 = (function (){
var statearr_5732 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5732[(0)] = cljs$core$async$state_machine__1997__auto__);

(statearr_5732[(1)] = (1));

return statearr_5732;
});
var cljs$core$async$state_machine__1997__auto____1 = (function (state_5714){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_5714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e5733){if((e5733 instanceof Object)){
var ex__2000__auto__ = e5733;
var statearr_5734_5748 = state_5714;
(statearr_5734_5748[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5749 = state_5714;
state_5714 = G__5749;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$state_machine__1997__auto__ = function(state_5714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1997__auto____1.call(this,state_5714);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1997__auto____0;
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1997__auto____1;
return cljs$core$async$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___5737,out))
})();
var state__2153__auto__ = (function (){var statearr_5735 = f__2152__auto__.call(null);
(statearr_5735[(6)] = c__2151__auto___5737);

return statearr_5735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___5737,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__5751 = arguments.length;
switch (G__5751) {
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
var c__2151__auto___5817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___5817,out){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___5817,out){
return (function (state_5789){
var state_val_5790 = (state_5789[(1)]);
if((state_val_5790 === (7))){
var inst_5785 = (state_5789[(2)]);
var state_5789__$1 = state_5789;
var statearr_5791_5818 = state_5789__$1;
(statearr_5791_5818[(2)] = inst_5785);

(statearr_5791_5818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5790 === (1))){
var inst_5752 = (new Array(n));
var inst_5753 = inst_5752;
var inst_5754 = (0);
var state_5789__$1 = (function (){var statearr_5792 = state_5789;
(statearr_5792[(7)] = inst_5754);

(statearr_5792[(8)] = inst_5753);

return statearr_5792;
})();
var statearr_5793_5819 = state_5789__$1;
(statearr_5793_5819[(2)] = null);

(statearr_5793_5819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5790 === (4))){
var inst_5757 = (state_5789[(9)]);
var inst_5757__$1 = (state_5789[(2)]);
var inst_5758 = (inst_5757__$1 == null);
var inst_5759 = cljs.core.not.call(null,inst_5758);
var state_5789__$1 = (function (){var statearr_5794 = state_5789;
(statearr_5794[(9)] = inst_5757__$1);

return statearr_5794;
})();
if(inst_5759){
var statearr_5795_5820 = state_5789__$1;
(statearr_5795_5820[(1)] = (5));

} else {
var statearr_5796_5821 = state_5789__$1;
(statearr_5796_5821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5790 === (15))){
var inst_5779 = (state_5789[(2)]);
var state_5789__$1 = state_5789;
var statearr_5797_5822 = state_5789__$1;
(statearr_5797_5822[(2)] = inst_5779);

(statearr_5797_5822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5790 === (13))){
var state_5789__$1 = state_5789;
var statearr_5798_5823 = state_5789__$1;
(statearr_5798_5823[(2)] = null);

(statearr_5798_5823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5790 === (6))){
var inst_5754 = (state_5789[(7)]);
var inst_5775 = (inst_5754 > (0));
var state_5789__$1 = state_5789;
if(cljs.core.truth_(inst_5775)){
var statearr_5799_5824 = state_5789__$1;
(statearr_5799_5824[(1)] = (12));

} else {
var statearr_5800_5825 = state_5789__$1;
(statearr_5800_5825[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5790 === (3))){
var inst_5787 = (state_5789[(2)]);
var state_5789__$1 = state_5789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5789__$1,inst_5787);
} else {
if((state_val_5790 === (12))){
var inst_5753 = (state_5789[(8)]);
var inst_5777 = cljs.core.vec.call(null,inst_5753);
var state_5789__$1 = state_5789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5789__$1,(15),out,inst_5777);
} else {
if((state_val_5790 === (2))){
var state_5789__$1 = state_5789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5789__$1,(4),ch);
} else {
if((state_val_5790 === (11))){
var inst_5769 = (state_5789[(2)]);
var inst_5770 = (new Array(n));
var inst_5753 = inst_5770;
var inst_5754 = (0);
var state_5789__$1 = (function (){var statearr_5801 = state_5789;
(statearr_5801[(7)] = inst_5754);

(statearr_5801[(8)] = inst_5753);

(statearr_5801[(10)] = inst_5769);

return statearr_5801;
})();
var statearr_5802_5826 = state_5789__$1;
(statearr_5802_5826[(2)] = null);

(statearr_5802_5826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5790 === (9))){
var inst_5753 = (state_5789[(8)]);
var inst_5767 = cljs.core.vec.call(null,inst_5753);
var state_5789__$1 = state_5789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5789__$1,(11),out,inst_5767);
} else {
if((state_val_5790 === (5))){
var inst_5762 = (state_5789[(11)]);
var inst_5757 = (state_5789[(9)]);
var inst_5754 = (state_5789[(7)]);
var inst_5753 = (state_5789[(8)]);
var inst_5761 = (inst_5753[inst_5754] = inst_5757);
var inst_5762__$1 = (inst_5754 + (1));
var inst_5763 = (inst_5762__$1 < n);
var state_5789__$1 = (function (){var statearr_5803 = state_5789;
(statearr_5803[(12)] = inst_5761);

(statearr_5803[(11)] = inst_5762__$1);

return statearr_5803;
})();
if(cljs.core.truth_(inst_5763)){
var statearr_5804_5827 = state_5789__$1;
(statearr_5804_5827[(1)] = (8));

} else {
var statearr_5805_5828 = state_5789__$1;
(statearr_5805_5828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5790 === (14))){
var inst_5782 = (state_5789[(2)]);
var inst_5783 = cljs.core.async.close_BANG_.call(null,out);
var state_5789__$1 = (function (){var statearr_5807 = state_5789;
(statearr_5807[(13)] = inst_5782);

return statearr_5807;
})();
var statearr_5808_5829 = state_5789__$1;
(statearr_5808_5829[(2)] = inst_5783);

(statearr_5808_5829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5790 === (10))){
var inst_5773 = (state_5789[(2)]);
var state_5789__$1 = state_5789;
var statearr_5809_5830 = state_5789__$1;
(statearr_5809_5830[(2)] = inst_5773);

(statearr_5809_5830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5790 === (8))){
var inst_5762 = (state_5789[(11)]);
var inst_5753 = (state_5789[(8)]);
var tmp5806 = inst_5753;
var inst_5753__$1 = tmp5806;
var inst_5754 = inst_5762;
var state_5789__$1 = (function (){var statearr_5810 = state_5789;
(statearr_5810[(7)] = inst_5754);

(statearr_5810[(8)] = inst_5753__$1);

return statearr_5810;
})();
var statearr_5811_5831 = state_5789__$1;
(statearr_5811_5831[(2)] = null);

(statearr_5811_5831[(1)] = (2));


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
});})(c__2151__auto___5817,out))
;
return ((function (switch__1996__auto__,c__2151__auto___5817,out){
return (function() {
var cljs$core$async$state_machine__1997__auto__ = null;
var cljs$core$async$state_machine__1997__auto____0 = (function (){
var statearr_5812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5812[(0)] = cljs$core$async$state_machine__1997__auto__);

(statearr_5812[(1)] = (1));

return statearr_5812;
});
var cljs$core$async$state_machine__1997__auto____1 = (function (state_5789){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_5789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e5813){if((e5813 instanceof Object)){
var ex__2000__auto__ = e5813;
var statearr_5814_5832 = state_5789;
(statearr_5814_5832[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5833 = state_5789;
state_5789 = G__5833;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$state_machine__1997__auto__ = function(state_5789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1997__auto____1.call(this,state_5789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1997__auto____0;
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1997__auto____1;
return cljs$core$async$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___5817,out))
})();
var state__2153__auto__ = (function (){var statearr_5815 = f__2152__auto__.call(null);
(statearr_5815[(6)] = c__2151__auto___5817);

return statearr_5815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___5817,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__5835 = arguments.length;
switch (G__5835) {
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
var c__2151__auto___5905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___5905,out){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___5905,out){
return (function (state_5877){
var state_val_5878 = (state_5877[(1)]);
if((state_val_5878 === (7))){
var inst_5873 = (state_5877[(2)]);
var state_5877__$1 = state_5877;
var statearr_5879_5906 = state_5877__$1;
(statearr_5879_5906[(2)] = inst_5873);

(statearr_5879_5906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5878 === (1))){
var inst_5836 = [];
var inst_5837 = inst_5836;
var inst_5838 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5877__$1 = (function (){var statearr_5880 = state_5877;
(statearr_5880[(7)] = inst_5838);

(statearr_5880[(8)] = inst_5837);

return statearr_5880;
})();
var statearr_5881_5907 = state_5877__$1;
(statearr_5881_5907[(2)] = null);

(statearr_5881_5907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5878 === (4))){
var inst_5841 = (state_5877[(9)]);
var inst_5841__$1 = (state_5877[(2)]);
var inst_5842 = (inst_5841__$1 == null);
var inst_5843 = cljs.core.not.call(null,inst_5842);
var state_5877__$1 = (function (){var statearr_5882 = state_5877;
(statearr_5882[(9)] = inst_5841__$1);

return statearr_5882;
})();
if(inst_5843){
var statearr_5883_5908 = state_5877__$1;
(statearr_5883_5908[(1)] = (5));

} else {
var statearr_5884_5909 = state_5877__$1;
(statearr_5884_5909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5878 === (15))){
var inst_5867 = (state_5877[(2)]);
var state_5877__$1 = state_5877;
var statearr_5885_5910 = state_5877__$1;
(statearr_5885_5910[(2)] = inst_5867);

(statearr_5885_5910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5878 === (13))){
var state_5877__$1 = state_5877;
var statearr_5886_5911 = state_5877__$1;
(statearr_5886_5911[(2)] = null);

(statearr_5886_5911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5878 === (6))){
var inst_5837 = (state_5877[(8)]);
var inst_5862 = inst_5837.length;
var inst_5863 = (inst_5862 > (0));
var state_5877__$1 = state_5877;
if(cljs.core.truth_(inst_5863)){
var statearr_5887_5912 = state_5877__$1;
(statearr_5887_5912[(1)] = (12));

} else {
var statearr_5888_5913 = state_5877__$1;
(statearr_5888_5913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5878 === (3))){
var inst_5875 = (state_5877[(2)]);
var state_5877__$1 = state_5877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5877__$1,inst_5875);
} else {
if((state_val_5878 === (12))){
var inst_5837 = (state_5877[(8)]);
var inst_5865 = cljs.core.vec.call(null,inst_5837);
var state_5877__$1 = state_5877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5877__$1,(15),out,inst_5865);
} else {
if((state_val_5878 === (2))){
var state_5877__$1 = state_5877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5877__$1,(4),ch);
} else {
if((state_val_5878 === (11))){
var inst_5841 = (state_5877[(9)]);
var inst_5845 = (state_5877[(10)]);
var inst_5855 = (state_5877[(2)]);
var inst_5856 = [];
var inst_5857 = inst_5856.push(inst_5841);
var inst_5837 = inst_5856;
var inst_5838 = inst_5845;
var state_5877__$1 = (function (){var statearr_5889 = state_5877;
(statearr_5889[(11)] = inst_5857);

(statearr_5889[(12)] = inst_5855);

(statearr_5889[(7)] = inst_5838);

(statearr_5889[(8)] = inst_5837);

return statearr_5889;
})();
var statearr_5890_5914 = state_5877__$1;
(statearr_5890_5914[(2)] = null);

(statearr_5890_5914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5878 === (9))){
var inst_5837 = (state_5877[(8)]);
var inst_5853 = cljs.core.vec.call(null,inst_5837);
var state_5877__$1 = state_5877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5877__$1,(11),out,inst_5853);
} else {
if((state_val_5878 === (5))){
var inst_5838 = (state_5877[(7)]);
var inst_5841 = (state_5877[(9)]);
var inst_5845 = (state_5877[(10)]);
var inst_5845__$1 = f.call(null,inst_5841);
var inst_5846 = cljs.core._EQ_.call(null,inst_5845__$1,inst_5838);
var inst_5847 = cljs.core.keyword_identical_QMARK_.call(null,inst_5838,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_5848 = ((inst_5846) || (inst_5847));
var state_5877__$1 = (function (){var statearr_5891 = state_5877;
(statearr_5891[(10)] = inst_5845__$1);

return statearr_5891;
})();
if(cljs.core.truth_(inst_5848)){
var statearr_5892_5915 = state_5877__$1;
(statearr_5892_5915[(1)] = (8));

} else {
var statearr_5893_5916 = state_5877__$1;
(statearr_5893_5916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5878 === (14))){
var inst_5870 = (state_5877[(2)]);
var inst_5871 = cljs.core.async.close_BANG_.call(null,out);
var state_5877__$1 = (function (){var statearr_5895 = state_5877;
(statearr_5895[(13)] = inst_5870);

return statearr_5895;
})();
var statearr_5896_5917 = state_5877__$1;
(statearr_5896_5917[(2)] = inst_5871);

(statearr_5896_5917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5878 === (10))){
var inst_5860 = (state_5877[(2)]);
var state_5877__$1 = state_5877;
var statearr_5897_5918 = state_5877__$1;
(statearr_5897_5918[(2)] = inst_5860);

(statearr_5897_5918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5878 === (8))){
var inst_5837 = (state_5877[(8)]);
var inst_5841 = (state_5877[(9)]);
var inst_5845 = (state_5877[(10)]);
var inst_5850 = inst_5837.push(inst_5841);
var tmp5894 = inst_5837;
var inst_5837__$1 = tmp5894;
var inst_5838 = inst_5845;
var state_5877__$1 = (function (){var statearr_5898 = state_5877;
(statearr_5898[(14)] = inst_5850);

(statearr_5898[(7)] = inst_5838);

(statearr_5898[(8)] = inst_5837__$1);

return statearr_5898;
})();
var statearr_5899_5919 = state_5877__$1;
(statearr_5899_5919[(2)] = null);

(statearr_5899_5919[(1)] = (2));


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
});})(c__2151__auto___5905,out))
;
return ((function (switch__1996__auto__,c__2151__auto___5905,out){
return (function() {
var cljs$core$async$state_machine__1997__auto__ = null;
var cljs$core$async$state_machine__1997__auto____0 = (function (){
var statearr_5900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5900[(0)] = cljs$core$async$state_machine__1997__auto__);

(statearr_5900[(1)] = (1));

return statearr_5900;
});
var cljs$core$async$state_machine__1997__auto____1 = (function (state_5877){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_5877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e5901){if((e5901 instanceof Object)){
var ex__2000__auto__ = e5901;
var statearr_5902_5920 = state_5877;
(statearr_5902_5920[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5921 = state_5877;
state_5877 = G__5921;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
cljs$core$async$state_machine__1997__auto__ = function(state_5877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1997__auto____1.call(this,state_5877);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1997__auto____0;
cljs$core$async$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1997__auto____1;
return cljs$core$async$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___5905,out))
})();
var state__2153__auto__ = (function (){var statearr_5903 = f__2152__auto__.call(null);
(statearr_5903[(6)] = c__2151__auto___5905);

return statearr_5903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___5905,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
