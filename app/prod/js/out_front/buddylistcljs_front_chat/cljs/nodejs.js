// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__11159__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11160__i = 0, G__11160__a = new Array(arguments.length -  0);
while (G__11160__i < G__11160__a.length) {G__11160__a[G__11160__i] = arguments[G__11160__i + 0]; ++G__11160__i;}
  args = new cljs.core.IndexedSeq(G__11160__a,0,null);
} 
return G__11159__delegate.call(this,args);};
G__11159.cljs$lang$maxFixedArity = 0;
G__11159.cljs$lang$applyTo = (function (arglist__11161){
var args = cljs.core.seq(arglist__11161);
return G__11159__delegate(args);
});
G__11159.cljs$core$IFn$_invoke$arity$variadic = G__11159__delegate;
return G__11159;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__11162__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11163__i = 0, G__11163__a = new Array(arguments.length -  0);
while (G__11163__i < G__11163__a.length) {G__11163__a[G__11163__i] = arguments[G__11163__i + 0]; ++G__11163__i;}
  args = new cljs.core.IndexedSeq(G__11163__a,0,null);
} 
return G__11162__delegate.call(this,args);};
G__11162.cljs$lang$maxFixedArity = 0;
G__11162.cljs$lang$applyTo = (function (arglist__11164){
var args = cljs.core.seq(arglist__11164);
return G__11162__delegate(args);
});
G__11162.cljs$core$IFn$_invoke$arity$variadic = G__11162__delegate;
return G__11162;
})()
);

return null;
});
