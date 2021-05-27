goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__1423__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1424__i = 0, G__1424__a = new Array(arguments.length -  0);
while (G__1424__i < G__1424__a.length) {G__1424__a[G__1424__i] = arguments[G__1424__i + 0]; ++G__1424__i;}
  args = new cljs.core.IndexedSeq(G__1424__a,0,null);
} 
return G__1423__delegate.call(this,args);};
G__1423.cljs$lang$maxFixedArity = 0;
G__1423.cljs$lang$applyTo = (function (arglist__1425){
var args = cljs.core.seq(arglist__1425);
return G__1423__delegate(args);
});
G__1423.cljs$core$IFn$_invoke$arity$variadic = G__1423__delegate;
return G__1423;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__1426__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1427__i = 0, G__1427__a = new Array(arguments.length -  0);
while (G__1427__i < G__1427__a.length) {G__1427__a[G__1427__i] = arguments[G__1427__i + 0]; ++G__1427__i;}
  args = new cljs.core.IndexedSeq(G__1427__a,0,null);
} 
return G__1426__delegate.call(this,args);};
G__1426.cljs$lang$maxFixedArity = 0;
G__1426.cljs$lang$applyTo = (function (arglist__1428){
var args = cljs.core.seq(arglist__1428);
return G__1426__delegate(args);
});
G__1426.cljs$core$IFn$_invoke$arity$variadic = G__1426__delegate;
return G__1426;
})()
);

return null;
});
