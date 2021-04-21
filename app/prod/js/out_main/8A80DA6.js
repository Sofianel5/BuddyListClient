goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6593__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6594__i = 0, G__6594__a = new Array(arguments.length -  0);
while (G__6594__i < G__6594__a.length) {G__6594__a[G__6594__i] = arguments[G__6594__i + 0]; ++G__6594__i;}
  args = new cljs.core.IndexedSeq(G__6594__a,0,null);
} 
return G__6593__delegate.call(this,args);};
G__6593.cljs$lang$maxFixedArity = 0;
G__6593.cljs$lang$applyTo = (function (arglist__6595){
var args = cljs.core.seq(arglist__6595);
return G__6593__delegate(args);
});
G__6593.cljs$core$IFn$_invoke$arity$variadic = G__6593__delegate;
return G__6593;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6596__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6597__i = 0, G__6597__a = new Array(arguments.length -  0);
while (G__6597__i < G__6597__a.length) {G__6597__a[G__6597__i] = arguments[G__6597__i + 0]; ++G__6597__i;}
  args = new cljs.core.IndexedSeq(G__6597__a,0,null);
} 
return G__6596__delegate.call(this,args);};
G__6596.cljs$lang$maxFixedArity = 0;
G__6596.cljs$lang$applyTo = (function (arglist__6598){
var args = cljs.core.seq(arglist__6598);
return G__6596__delegate(args);
});
G__6596.cljs$core$IFn$_invoke$arity$variadic = G__6596__delegate;
return G__6596;
})()
);

return null;
});
