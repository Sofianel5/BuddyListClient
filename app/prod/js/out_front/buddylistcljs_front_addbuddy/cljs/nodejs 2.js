// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__5135__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5136__i = 0, G__5136__a = new Array(arguments.length -  0);
while (G__5136__i < G__5136__a.length) {G__5136__a[G__5136__i] = arguments[G__5136__i + 0]; ++G__5136__i;}
  args = new cljs.core.IndexedSeq(G__5136__a,0,null);
} 
return G__5135__delegate.call(this,args);};
G__5135.cljs$lang$maxFixedArity = 0;
G__5135.cljs$lang$applyTo = (function (arglist__5137){
var args = cljs.core.seq(arglist__5137);
return G__5135__delegate(args);
});
G__5135.cljs$core$IFn$_invoke$arity$variadic = G__5135__delegate;
return G__5135;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__5138__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5139__i = 0, G__5139__a = new Array(arguments.length -  0);
while (G__5139__i < G__5139__a.length) {G__5139__a[G__5139__i] = arguments[G__5139__i + 0]; ++G__5139__i;}
  args = new cljs.core.IndexedSeq(G__5139__a,0,null);
} 
return G__5138__delegate.call(this,args);};
G__5138.cljs$lang$maxFixedArity = 0;
G__5138.cljs$lang$applyTo = (function (arglist__5140){
var args = cljs.core.seq(arglist__5140);
return G__5138__delegate(args);
});
G__5138.cljs$core$IFn$_invoke$arity$variadic = G__5138__delegate;
return G__5138;
})()
);

return null;
});
