goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6547__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6548__i = 0, G__6548__a = new Array(arguments.length -  0);
while (G__6548__i < G__6548__a.length) {G__6548__a[G__6548__i] = arguments[G__6548__i + 0]; ++G__6548__i;}
  args = new cljs.core.IndexedSeq(G__6548__a,0,null);
} 
return G__6547__delegate.call(this,args);};
G__6547.cljs$lang$maxFixedArity = 0;
G__6547.cljs$lang$applyTo = (function (arglist__6549){
var args = cljs.core.seq(arglist__6549);
return G__6547__delegate(args);
});
G__6547.cljs$core$IFn$_invoke$arity$variadic = G__6547__delegate;
return G__6547;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6550__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6551__i = 0, G__6551__a = new Array(arguments.length -  0);
while (G__6551__i < G__6551__a.length) {G__6551__a[G__6551__i] = arguments[G__6551__i + 0]; ++G__6551__i;}
  args = new cljs.core.IndexedSeq(G__6551__a,0,null);
} 
return G__6550__delegate.call(this,args);};
G__6550.cljs$lang$maxFixedArity = 0;
G__6550.cljs$lang$applyTo = (function (arglist__6552){
var args = cljs.core.seq(arglist__6552);
return G__6550__delegate(args);
});
G__6550.cljs$core$IFn$_invoke$arity$variadic = G__6550__delegate;
return G__6550;
})()
);

return null;
});
