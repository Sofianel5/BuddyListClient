goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6599__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6600__i = 0, G__6600__a = new Array(arguments.length -  0);
while (G__6600__i < G__6600__a.length) {G__6600__a[G__6600__i] = arguments[G__6600__i + 0]; ++G__6600__i;}
  args = new cljs.core.IndexedSeq(G__6600__a,0,null);
} 
return G__6599__delegate.call(this,args);};
G__6599.cljs$lang$maxFixedArity = 0;
G__6599.cljs$lang$applyTo = (function (arglist__6601){
var args = cljs.core.seq(arglist__6601);
return G__6599__delegate(args);
});
G__6599.cljs$core$IFn$_invoke$arity$variadic = G__6599__delegate;
return G__6599;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6602__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6603__i = 0, G__6603__a = new Array(arguments.length -  0);
while (G__6603__i < G__6603__a.length) {G__6603__a[G__6603__i] = arguments[G__6603__i + 0]; ++G__6603__i;}
  args = new cljs.core.IndexedSeq(G__6603__a,0,null);
} 
return G__6602__delegate.call(this,args);};
G__6602.cljs$lang$maxFixedArity = 0;
G__6602.cljs$lang$applyTo = (function (arglist__6604){
var args = cljs.core.seq(arglist__6604);
return G__6602__delegate(args);
});
G__6602.cljs$core$IFn$_invoke$arity$variadic = G__6602__delegate;
return G__6602;
})()
);

return null;
});
