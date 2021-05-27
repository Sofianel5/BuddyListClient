// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__5133__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5134__i = 0, G__5134__a = new Array(arguments.length -  0);
while (G__5134__i < G__5134__a.length) {G__5134__a[G__5134__i] = arguments[G__5134__i + 0]; ++G__5134__i;}
  args = new cljs.core.IndexedSeq(G__5134__a,0,null);
} 
return G__5133__delegate.call(this,args);};
G__5133.cljs$lang$maxFixedArity = 0;
G__5133.cljs$lang$applyTo = (function (arglist__5135){
var args = cljs.core.seq(arglist__5135);
return G__5133__delegate(args);
});
G__5133.cljs$core$IFn$_invoke$arity$variadic = G__5133__delegate;
return G__5133;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__5136__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5137__i = 0, G__5137__a = new Array(arguments.length -  0);
while (G__5137__i < G__5137__a.length) {G__5137__a[G__5137__i] = arguments[G__5137__i + 0]; ++G__5137__i;}
  args = new cljs.core.IndexedSeq(G__5137__a,0,null);
} 
return G__5136__delegate.call(this,args);};
G__5136.cljs$lang$maxFixedArity = 0;
G__5136.cljs$lang$applyTo = (function (arglist__5138){
var args = cljs.core.seq(arglist__5138);
return G__5136__delegate(args);
});
G__5136.cljs$core$IFn$_invoke$arity$variadic = G__5136__delegate;
return G__5136;
})()
);

return null;
});
