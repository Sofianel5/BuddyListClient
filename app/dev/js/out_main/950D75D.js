goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4129__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4130__i = 0, G__4130__a = new Array(arguments.length -  0);
while (G__4130__i < G__4130__a.length) {G__4130__a[G__4130__i] = arguments[G__4130__i + 0]; ++G__4130__i;}
  args = new cljs.core.IndexedSeq(G__4130__a,0,null);
} 
return G__4129__delegate.call(this,args);};
G__4129.cljs$lang$maxFixedArity = 0;
G__4129.cljs$lang$applyTo = (function (arglist__4131){
var args = cljs.core.seq(arglist__4131);
return G__4129__delegate(args);
});
G__4129.cljs$core$IFn$_invoke$arity$variadic = G__4129__delegate;
return G__4129;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4132__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4133__i = 0, G__4133__a = new Array(arguments.length -  0);
while (G__4133__i < G__4133__a.length) {G__4133__a[G__4133__i] = arguments[G__4133__i + 0]; ++G__4133__i;}
  args = new cljs.core.IndexedSeq(G__4133__a,0,null);
} 
return G__4132__delegate.call(this,args);};
G__4132.cljs$lang$maxFixedArity = 0;
G__4132.cljs$lang$applyTo = (function (arglist__4134){
var args = cljs.core.seq(arglist__4134);
return G__4132__delegate(args);
});
G__4132.cljs$core$IFn$_invoke$arity$variadic = G__4132__delegate;
return G__4132;
})()
);

return null;
});
