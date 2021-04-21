goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__11246__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11247__i = 0, G__11247__a = new Array(arguments.length -  0);
while (G__11247__i < G__11247__a.length) {G__11247__a[G__11247__i] = arguments[G__11247__i + 0]; ++G__11247__i;}
  args = new cljs.core.IndexedSeq(G__11247__a,0,null);
} 
return G__11246__delegate.call(this,args);};
G__11246.cljs$lang$maxFixedArity = 0;
G__11246.cljs$lang$applyTo = (function (arglist__11248){
var args = cljs.core.seq(arglist__11248);
return G__11246__delegate(args);
});
G__11246.cljs$core$IFn$_invoke$arity$variadic = G__11246__delegate;
return G__11246;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__11249__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11250__i = 0, G__11250__a = new Array(arguments.length -  0);
while (G__11250__i < G__11250__a.length) {G__11250__a[G__11250__i] = arguments[G__11250__i + 0]; ++G__11250__i;}
  args = new cljs.core.IndexedSeq(G__11250__a,0,null);
} 
return G__11249__delegate.call(this,args);};
G__11249.cljs$lang$maxFixedArity = 0;
G__11249.cljs$lang$applyTo = (function (arglist__11251){
var args = cljs.core.seq(arglist__11251);
return G__11249__delegate(args);
});
G__11249.cljs$core$IFn$_invoke$arity$variadic = G__11249__delegate;
return G__11249;
})()
);

return null;
});
