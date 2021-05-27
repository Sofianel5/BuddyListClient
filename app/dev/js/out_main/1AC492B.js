goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__1424__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1425__i = 0, G__1425__a = new Array(arguments.length -  0);
while (G__1425__i < G__1425__a.length) {G__1425__a[G__1425__i] = arguments[G__1425__i + 0]; ++G__1425__i;}
  args = new cljs.core.IndexedSeq(G__1425__a,0,null);
} 
return G__1424__delegate.call(this,args);};
G__1424.cljs$lang$maxFixedArity = 0;
G__1424.cljs$lang$applyTo = (function (arglist__1426){
var args = cljs.core.seq(arglist__1426);
return G__1424__delegate(args);
});
G__1424.cljs$core$IFn$_invoke$arity$variadic = G__1424__delegate;
return G__1424;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__1427__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1428__i = 0, G__1428__a = new Array(arguments.length -  0);
while (G__1428__i < G__1428__a.length) {G__1428__a[G__1428__i] = arguments[G__1428__i + 0]; ++G__1428__i;}
  args = new cljs.core.IndexedSeq(G__1428__a,0,null);
} 
return G__1427__delegate.call(this,args);};
G__1427.cljs$lang$maxFixedArity = 0;
G__1427.cljs$lang$applyTo = (function (arglist__1429){
var args = cljs.core.seq(arglist__1429);
return G__1427__delegate(args);
});
G__1427.cljs$core$IFn$_invoke$arity$variadic = G__1427__delegate;
return G__1427;
})()
);

return null;
});
