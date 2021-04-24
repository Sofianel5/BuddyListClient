goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6575__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6576__i = 0, G__6576__a = new Array(arguments.length -  0);
while (G__6576__i < G__6576__a.length) {G__6576__a[G__6576__i] = arguments[G__6576__i + 0]; ++G__6576__i;}
  args = new cljs.core.IndexedSeq(G__6576__a,0,null);
} 
return G__6575__delegate.call(this,args);};
G__6575.cljs$lang$maxFixedArity = 0;
G__6575.cljs$lang$applyTo = (function (arglist__6577){
var args = cljs.core.seq(arglist__6577);
return G__6575__delegate(args);
});
G__6575.cljs$core$IFn$_invoke$arity$variadic = G__6575__delegate;
return G__6575;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6578__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6579__i = 0, G__6579__a = new Array(arguments.length -  0);
while (G__6579__i < G__6579__a.length) {G__6579__a[G__6579__i] = arguments[G__6579__i + 0]; ++G__6579__i;}
  args = new cljs.core.IndexedSeq(G__6579__a,0,null);
} 
return G__6578__delegate.call(this,args);};
G__6578.cljs$lang$maxFixedArity = 0;
G__6578.cljs$lang$applyTo = (function (arglist__6580){
var args = cljs.core.seq(arglist__6580);
return G__6578__delegate(args);
});
G__6578.cljs$core$IFn$_invoke$arity$variadic = G__6578__delegate;
return G__6578;
})()
);

return null;
});
