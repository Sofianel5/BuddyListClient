goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4170__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4171__i = 0, G__4171__a = new Array(arguments.length -  0);
while (G__4171__i < G__4171__a.length) {G__4171__a[G__4171__i] = arguments[G__4171__i + 0]; ++G__4171__i;}
  args = new cljs.core.IndexedSeq(G__4171__a,0,null);
} 
return G__4170__delegate.call(this,args);};
G__4170.cljs$lang$maxFixedArity = 0;
G__4170.cljs$lang$applyTo = (function (arglist__4172){
var args = cljs.core.seq(arglist__4172);
return G__4170__delegate(args);
});
G__4170.cljs$core$IFn$_invoke$arity$variadic = G__4170__delegate;
return G__4170;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4173__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4174__i = 0, G__4174__a = new Array(arguments.length -  0);
while (G__4174__i < G__4174__a.length) {G__4174__a[G__4174__i] = arguments[G__4174__i + 0]; ++G__4174__i;}
  args = new cljs.core.IndexedSeq(G__4174__a,0,null);
} 
return G__4173__delegate.call(this,args);};
G__4173.cljs$lang$maxFixedArity = 0;
G__4173.cljs$lang$applyTo = (function (arglist__4175){
var args = cljs.core.seq(arglist__4175);
return G__4173__delegate(args);
});
G__4173.cljs$core$IFn$_invoke$arity$variadic = G__4173__delegate;
return G__4173;
})()
);

return null;
});
