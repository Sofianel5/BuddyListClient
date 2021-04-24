goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__7394__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7395__i = 0, G__7395__a = new Array(arguments.length -  0);
while (G__7395__i < G__7395__a.length) {G__7395__a[G__7395__i] = arguments[G__7395__i + 0]; ++G__7395__i;}
  args = new cljs.core.IndexedSeq(G__7395__a,0,null);
} 
return G__7394__delegate.call(this,args);};
G__7394.cljs$lang$maxFixedArity = 0;
G__7394.cljs$lang$applyTo = (function (arglist__7396){
var args = cljs.core.seq(arglist__7396);
return G__7394__delegate(args);
});
G__7394.cljs$core$IFn$_invoke$arity$variadic = G__7394__delegate;
return G__7394;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__7397__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7398__i = 0, G__7398__a = new Array(arguments.length -  0);
while (G__7398__i < G__7398__a.length) {G__7398__a[G__7398__i] = arguments[G__7398__i + 0]; ++G__7398__i;}
  args = new cljs.core.IndexedSeq(G__7398__a,0,null);
} 
return G__7397__delegate.call(this,args);};
G__7397.cljs$lang$maxFixedArity = 0;
G__7397.cljs$lang$applyTo = (function (arglist__7399){
var args = cljs.core.seq(arglist__7399);
return G__7397__delegate(args);
});
G__7397.cljs$core$IFn$_invoke$arity$variadic = G__7397__delegate;
return G__7397;
})()
);

return null;
});
