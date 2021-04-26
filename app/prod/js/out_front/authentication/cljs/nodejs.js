// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__8051__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8052__i = 0, G__8052__a = new Array(arguments.length -  0);
while (G__8052__i < G__8052__a.length) {G__8052__a[G__8052__i] = arguments[G__8052__i + 0]; ++G__8052__i;}
  args = new cljs.core.IndexedSeq(G__8052__a,0,null);
} 
return G__8051__delegate.call(this,args);};
G__8051.cljs$lang$maxFixedArity = 0;
G__8051.cljs$lang$applyTo = (function (arglist__8053){
var args = cljs.core.seq(arglist__8053);
return G__8051__delegate(args);
});
G__8051.cljs$core$IFn$_invoke$arity$variadic = G__8051__delegate;
return G__8051;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__8054__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8055__i = 0, G__8055__a = new Array(arguments.length -  0);
while (G__8055__i < G__8055__a.length) {G__8055__a[G__8055__i] = arguments[G__8055__i + 0]; ++G__8055__i;}
  args = new cljs.core.IndexedSeq(G__8055__a,0,null);
} 
return G__8054__delegate.call(this,args);};
G__8054.cljs$lang$maxFixedArity = 0;
G__8054.cljs$lang$applyTo = (function (arglist__8056){
var args = cljs.core.seq(arglist__8056);
return G__8054__delegate(args);
});
G__8054.cljs$core$IFn$_invoke$arity$variadic = G__8054__delegate;
return G__8054;
})()
);

return null;
});
