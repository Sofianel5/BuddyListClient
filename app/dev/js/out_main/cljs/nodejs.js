// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__11178__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11179__i = 0, G__11179__a = new Array(arguments.length -  0);
while (G__11179__i < G__11179__a.length) {G__11179__a[G__11179__i] = arguments[G__11179__i + 0]; ++G__11179__i;}
  args = new cljs.core.IndexedSeq(G__11179__a,0,null);
} 
return G__11178__delegate.call(this,args);};
G__11178.cljs$lang$maxFixedArity = 0;
G__11178.cljs$lang$applyTo = (function (arglist__11180){
var args = cljs.core.seq(arglist__11180);
return G__11178__delegate(args);
});
G__11178.cljs$core$IFn$_invoke$arity$variadic = G__11178__delegate;
return G__11178;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__11181__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11182__i = 0, G__11182__a = new Array(arguments.length -  0);
while (G__11182__i < G__11182__a.length) {G__11182__a[G__11182__i] = arguments[G__11182__i + 0]; ++G__11182__i;}
  args = new cljs.core.IndexedSeq(G__11182__a,0,null);
} 
return G__11181__delegate.call(this,args);};
G__11181.cljs$lang$maxFixedArity = 0;
G__11181.cljs$lang$applyTo = (function (arglist__11183){
var args = cljs.core.seq(arglist__11183);
return G__11181__delegate(args);
});
G__11181.cljs$core$IFn$_invoke$arity$variadic = G__11181__delegate;
return G__11181;
})()
);

return null;
});
