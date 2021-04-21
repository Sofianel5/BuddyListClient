goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4130__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4131__i = 0, G__4131__a = new Array(arguments.length -  0);
while (G__4131__i < G__4131__a.length) {G__4131__a[G__4131__i] = arguments[G__4131__i + 0]; ++G__4131__i;}
  args = new cljs.core.IndexedSeq(G__4131__a,0,null);
} 
return G__4130__delegate.call(this,args);};
G__4130.cljs$lang$maxFixedArity = 0;
G__4130.cljs$lang$applyTo = (function (arglist__4132){
var args = cljs.core.seq(arglist__4132);
return G__4130__delegate(args);
});
G__4130.cljs$core$IFn$_invoke$arity$variadic = G__4130__delegate;
return G__4130;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4133__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4134__i = 0, G__4134__a = new Array(arguments.length -  0);
while (G__4134__i < G__4134__a.length) {G__4134__a[G__4134__i] = arguments[G__4134__i + 0]; ++G__4134__i;}
  args = new cljs.core.IndexedSeq(G__4134__a,0,null);
} 
return G__4133__delegate.call(this,args);};
G__4133.cljs$lang$maxFixedArity = 0;
G__4133.cljs$lang$applyTo = (function (arglist__4135){
var args = cljs.core.seq(arglist__4135);
return G__4133__delegate(args);
});
G__4133.cljs$core$IFn$_invoke$arity$variadic = G__4133__delegate;
return G__4133;
})()
);

return null;
});
