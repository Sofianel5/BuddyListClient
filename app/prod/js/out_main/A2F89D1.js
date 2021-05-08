goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4203__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4204__i = 0, G__4204__a = new Array(arguments.length -  0);
while (G__4204__i < G__4204__a.length) {G__4204__a[G__4204__i] = arguments[G__4204__i + 0]; ++G__4204__i;}
  args = new cljs.core.IndexedSeq(G__4204__a,0,null);
} 
return G__4203__delegate.call(this,args);};
G__4203.cljs$lang$maxFixedArity = 0;
G__4203.cljs$lang$applyTo = (function (arglist__4205){
var args = cljs.core.seq(arglist__4205);
return G__4203__delegate(args);
});
G__4203.cljs$core$IFn$_invoke$arity$variadic = G__4203__delegate;
return G__4203;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4206__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4207__i = 0, G__4207__a = new Array(arguments.length -  0);
while (G__4207__i < G__4207__a.length) {G__4207__a[G__4207__i] = arguments[G__4207__i + 0]; ++G__4207__i;}
  args = new cljs.core.IndexedSeq(G__4207__a,0,null);
} 
return G__4206__delegate.call(this,args);};
G__4206.cljs$lang$maxFixedArity = 0;
G__4206.cljs$lang$applyTo = (function (arglist__4208){
var args = cljs.core.seq(arglist__4208);
return G__4206__delegate(args);
});
G__4206.cljs$core$IFn$_invoke$arity$variadic = G__4206__delegate;
return G__4206;
})()
);

return null;
});
