// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__10975__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10976__i = 0, G__10976__a = new Array(arguments.length -  0);
while (G__10976__i < G__10976__a.length) {G__10976__a[G__10976__i] = arguments[G__10976__i + 0]; ++G__10976__i;}
  args = new cljs.core.IndexedSeq(G__10976__a,0,null);
} 
return G__10975__delegate.call(this,args);};
G__10975.cljs$lang$maxFixedArity = 0;
G__10975.cljs$lang$applyTo = (function (arglist__10977){
var args = cljs.core.seq(arglist__10977);
return G__10975__delegate(args);
});
G__10975.cljs$core$IFn$_invoke$arity$variadic = G__10975__delegate;
return G__10975;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__10978__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10979__i = 0, G__10979__a = new Array(arguments.length -  0);
while (G__10979__i < G__10979__a.length) {G__10979__a[G__10979__i] = arguments[G__10979__i + 0]; ++G__10979__i;}
  args = new cljs.core.IndexedSeq(G__10979__a,0,null);
} 
return G__10978__delegate.call(this,args);};
G__10978.cljs$lang$maxFixedArity = 0;
G__10978.cljs$lang$applyTo = (function (arglist__10980){
var args = cljs.core.seq(arglist__10980);
return G__10978__delegate(args);
});
G__10978.cljs$core$IFn$_invoke$arity$variadic = G__10978__delegate;
return G__10978;
})()
);

return null;
});
