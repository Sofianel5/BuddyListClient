goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6597__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6598__i = 0, G__6598__a = new Array(arguments.length -  0);
while (G__6598__i < G__6598__a.length) {G__6598__a[G__6598__i] = arguments[G__6598__i + 0]; ++G__6598__i;}
  args = new cljs.core.IndexedSeq(G__6598__a,0,null);
} 
return G__6597__delegate.call(this,args);};
G__6597.cljs$lang$maxFixedArity = 0;
G__6597.cljs$lang$applyTo = (function (arglist__6599){
var args = cljs.core.seq(arglist__6599);
return G__6597__delegate(args);
});
G__6597.cljs$core$IFn$_invoke$arity$variadic = G__6597__delegate;
return G__6597;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6600__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6601__i = 0, G__6601__a = new Array(arguments.length -  0);
while (G__6601__i < G__6601__a.length) {G__6601__a[G__6601__i] = arguments[G__6601__i + 0]; ++G__6601__i;}
  args = new cljs.core.IndexedSeq(G__6601__a,0,null);
} 
return G__6600__delegate.call(this,args);};
G__6600.cljs$lang$maxFixedArity = 0;
G__6600.cljs$lang$applyTo = (function (arglist__6602){
var args = cljs.core.seq(arglist__6602);
return G__6600__delegate(args);
});
G__6600.cljs$core$IFn$_invoke$arity$variadic = G__6600__delegate;
return G__6600;
})()
);

return null;
});
