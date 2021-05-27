goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__1431__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1432__i = 0, G__1432__a = new Array(arguments.length -  0);
while (G__1432__i < G__1432__a.length) {G__1432__a[G__1432__i] = arguments[G__1432__i + 0]; ++G__1432__i;}
  args = new cljs.core.IndexedSeq(G__1432__a,0,null);
} 
return G__1431__delegate.call(this,args);};
G__1431.cljs$lang$maxFixedArity = 0;
G__1431.cljs$lang$applyTo = (function (arglist__1433){
var args = cljs.core.seq(arglist__1433);
return G__1431__delegate(args);
});
G__1431.cljs$core$IFn$_invoke$arity$variadic = G__1431__delegate;
return G__1431;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__1434__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1435__i = 0, G__1435__a = new Array(arguments.length -  0);
while (G__1435__i < G__1435__a.length) {G__1435__a[G__1435__i] = arguments[G__1435__i + 0]; ++G__1435__i;}
  args = new cljs.core.IndexedSeq(G__1435__a,0,null);
} 
return G__1434__delegate.call(this,args);};
G__1434.cljs$lang$maxFixedArity = 0;
G__1434.cljs$lang$applyTo = (function (arglist__1436){
var args = cljs.core.seq(arglist__1436);
return G__1434__delegate(args);
});
G__1434.cljs$core$IFn$_invoke$arity$variadic = G__1434__delegate;
return G__1434;
})()
);

return null;
});
