goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4150__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4151__i = 0, G__4151__a = new Array(arguments.length -  0);
while (G__4151__i < G__4151__a.length) {G__4151__a[G__4151__i] = arguments[G__4151__i + 0]; ++G__4151__i;}
  args = new cljs.core.IndexedSeq(G__4151__a,0,null);
} 
return G__4150__delegate.call(this,args);};
G__4150.cljs$lang$maxFixedArity = 0;
G__4150.cljs$lang$applyTo = (function (arglist__4152){
var args = cljs.core.seq(arglist__4152);
return G__4150__delegate(args);
});
G__4150.cljs$core$IFn$_invoke$arity$variadic = G__4150__delegate;
return G__4150;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4153__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4154__i = 0, G__4154__a = new Array(arguments.length -  0);
while (G__4154__i < G__4154__a.length) {G__4154__a[G__4154__i] = arguments[G__4154__i + 0]; ++G__4154__i;}
  args = new cljs.core.IndexedSeq(G__4154__a,0,null);
} 
return G__4153__delegate.call(this,args);};
G__4153.cljs$lang$maxFixedArity = 0;
G__4153.cljs$lang$applyTo = (function (arglist__4155){
var args = cljs.core.seq(arglist__4155);
return G__4153__delegate(args);
});
G__4153.cljs$core$IFn$_invoke$arity$variadic = G__4153__delegate;
return G__4153;
})()
);

return null;
});
