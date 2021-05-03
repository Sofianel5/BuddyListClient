goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4169__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4170__i = 0, G__4170__a = new Array(arguments.length -  0);
while (G__4170__i < G__4170__a.length) {G__4170__a[G__4170__i] = arguments[G__4170__i + 0]; ++G__4170__i;}
  args = new cljs.core.IndexedSeq(G__4170__a,0,null);
} 
return G__4169__delegate.call(this,args);};
G__4169.cljs$lang$maxFixedArity = 0;
G__4169.cljs$lang$applyTo = (function (arglist__4171){
var args = cljs.core.seq(arglist__4171);
return G__4169__delegate(args);
});
G__4169.cljs$core$IFn$_invoke$arity$variadic = G__4169__delegate;
return G__4169;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4172__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4173__i = 0, G__4173__a = new Array(arguments.length -  0);
while (G__4173__i < G__4173__a.length) {G__4173__a[G__4173__i] = arguments[G__4173__i + 0]; ++G__4173__i;}
  args = new cljs.core.IndexedSeq(G__4173__a,0,null);
} 
return G__4172__delegate.call(this,args);};
G__4172.cljs$lang$maxFixedArity = 0;
G__4172.cljs$lang$applyTo = (function (arglist__4174){
var args = cljs.core.seq(arglist__4174);
return G__4172__delegate(args);
});
G__4172.cljs$core$IFn$_invoke$arity$variadic = G__4172__delegate;
return G__4172;
})()
);

return null;
});
