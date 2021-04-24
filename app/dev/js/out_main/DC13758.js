goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4105__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4106__i = 0, G__4106__a = new Array(arguments.length -  0);
while (G__4106__i < G__4106__a.length) {G__4106__a[G__4106__i] = arguments[G__4106__i + 0]; ++G__4106__i;}
  args = new cljs.core.IndexedSeq(G__4106__a,0,null);
} 
return G__4105__delegate.call(this,args);};
G__4105.cljs$lang$maxFixedArity = 0;
G__4105.cljs$lang$applyTo = (function (arglist__4107){
var args = cljs.core.seq(arglist__4107);
return G__4105__delegate(args);
});
G__4105.cljs$core$IFn$_invoke$arity$variadic = G__4105__delegate;
return G__4105;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4108__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4109__i = 0, G__4109__a = new Array(arguments.length -  0);
while (G__4109__i < G__4109__a.length) {G__4109__a[G__4109__i] = arguments[G__4109__i + 0]; ++G__4109__i;}
  args = new cljs.core.IndexedSeq(G__4109__a,0,null);
} 
return G__4108__delegate.call(this,args);};
G__4108.cljs$lang$maxFixedArity = 0;
G__4108.cljs$lang$applyTo = (function (arglist__4110){
var args = cljs.core.seq(arglist__4110);
return G__4108__delegate(args);
});
G__4108.cljs$core$IFn$_invoke$arity$variadic = G__4108__delegate;
return G__4108;
})()
);

return null;
});
