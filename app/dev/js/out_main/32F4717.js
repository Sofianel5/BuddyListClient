goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__1419__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1420__i = 0, G__1420__a = new Array(arguments.length -  0);
while (G__1420__i < G__1420__a.length) {G__1420__a[G__1420__i] = arguments[G__1420__i + 0]; ++G__1420__i;}
  args = new cljs.core.IndexedSeq(G__1420__a,0,null);
} 
return G__1419__delegate.call(this,args);};
G__1419.cljs$lang$maxFixedArity = 0;
G__1419.cljs$lang$applyTo = (function (arglist__1421){
var args = cljs.core.seq(arglist__1421);
return G__1419__delegate(args);
});
G__1419.cljs$core$IFn$_invoke$arity$variadic = G__1419__delegate;
return G__1419;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__1422__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1423__i = 0, G__1423__a = new Array(arguments.length -  0);
while (G__1423__i < G__1423__a.length) {G__1423__a[G__1423__i] = arguments[G__1423__i + 0]; ++G__1423__i;}
  args = new cljs.core.IndexedSeq(G__1423__a,0,null);
} 
return G__1422__delegate.call(this,args);};
G__1422.cljs$lang$maxFixedArity = 0;
G__1422.cljs$lang$applyTo = (function (arglist__1424){
var args = cljs.core.seq(arglist__1424);
return G__1422__delegate(args);
});
G__1422.cljs$core$IFn$_invoke$arity$variadic = G__1422__delegate;
return G__1422;
})()
);

return null;
});