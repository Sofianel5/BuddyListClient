goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__7658__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7659__i = 0, G__7659__a = new Array(arguments.length -  0);
while (G__7659__i < G__7659__a.length) {G__7659__a[G__7659__i] = arguments[G__7659__i + 0]; ++G__7659__i;}
  args = new cljs.core.IndexedSeq(G__7659__a,0,null);
} 
return G__7658__delegate.call(this,args);};
G__7658.cljs$lang$maxFixedArity = 0;
G__7658.cljs$lang$applyTo = (function (arglist__7660){
var args = cljs.core.seq(arglist__7660);
return G__7658__delegate(args);
});
G__7658.cljs$core$IFn$_invoke$arity$variadic = G__7658__delegate;
return G__7658;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__7661__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7662__i = 0, G__7662__a = new Array(arguments.length -  0);
while (G__7662__i < G__7662__a.length) {G__7662__a[G__7662__i] = arguments[G__7662__i + 0]; ++G__7662__i;}
  args = new cljs.core.IndexedSeq(G__7662__a,0,null);
} 
return G__7661__delegate.call(this,args);};
G__7661.cljs$lang$maxFixedArity = 0;
G__7661.cljs$lang$applyTo = (function (arglist__7663){
var args = cljs.core.seq(arglist__7663);
return G__7661__delegate(args);
});
G__7661.cljs$core$IFn$_invoke$arity$variadic = G__7661__delegate;
return G__7661;
})()
);

return null;
});
