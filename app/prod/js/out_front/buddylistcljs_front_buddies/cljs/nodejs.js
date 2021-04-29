// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__14595__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14596__i = 0, G__14596__a = new Array(arguments.length -  0);
while (G__14596__i < G__14596__a.length) {G__14596__a[G__14596__i] = arguments[G__14596__i + 0]; ++G__14596__i;}
  args = new cljs.core.IndexedSeq(G__14596__a,0,null);
} 
return G__14595__delegate.call(this,args);};
G__14595.cljs$lang$maxFixedArity = 0;
G__14595.cljs$lang$applyTo = (function (arglist__14597){
var args = cljs.core.seq(arglist__14597);
return G__14595__delegate(args);
});
G__14595.cljs$core$IFn$_invoke$arity$variadic = G__14595__delegate;
return G__14595;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__14598__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14599__i = 0, G__14599__a = new Array(arguments.length -  0);
while (G__14599__i < G__14599__a.length) {G__14599__a[G__14599__i] = arguments[G__14599__i + 0]; ++G__14599__i;}
  args = new cljs.core.IndexedSeq(G__14599__a,0,null);
} 
return G__14598__delegate.call(this,args);};
G__14598.cljs$lang$maxFixedArity = 0;
G__14598.cljs$lang$applyTo = (function (arglist__14600){
var args = cljs.core.seq(arglist__14600);
return G__14598__delegate(args);
});
G__14598.cljs$core$IFn$_invoke$arity$variadic = G__14598__delegate;
return G__14598;
})()
);

return null;
});
