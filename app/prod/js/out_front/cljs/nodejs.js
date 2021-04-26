// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__1337__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1338__i = 0, G__1338__a = new Array(arguments.length -  0);
while (G__1338__i < G__1338__a.length) {G__1338__a[G__1338__i] = arguments[G__1338__i + 0]; ++G__1338__i;}
  args = new cljs.core.IndexedSeq(G__1338__a,0,null);
} 
return G__1337__delegate.call(this,args);};
G__1337.cljs$lang$maxFixedArity = 0;
G__1337.cljs$lang$applyTo = (function (arglist__1339){
var args = cljs.core.seq(arglist__1339);
return G__1337__delegate(args);
});
G__1337.cljs$core$IFn$_invoke$arity$variadic = G__1337__delegate;
return G__1337;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__1340__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1341__i = 0, G__1341__a = new Array(arguments.length -  0);
while (G__1341__i < G__1341__a.length) {G__1341__a[G__1341__i] = arguments[G__1341__i + 0]; ++G__1341__i;}
  args = new cljs.core.IndexedSeq(G__1341__a,0,null);
} 
return G__1340__delegate.call(this,args);};
G__1340.cljs$lang$maxFixedArity = 0;
G__1340.cljs$lang$applyTo = (function (arglist__1342){
var args = cljs.core.seq(arglist__1342);
return G__1340__delegate(args);
});
G__1340.cljs$core$IFn$_invoke$arity$variadic = G__1340__delegate;
return G__1340;
})()
);

return null;
});
