goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4114__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4115__i = 0, G__4115__a = new Array(arguments.length -  0);
while (G__4115__i < G__4115__a.length) {G__4115__a[G__4115__i] = arguments[G__4115__i + 0]; ++G__4115__i;}
  args = new cljs.core.IndexedSeq(G__4115__a,0,null);
} 
return G__4114__delegate.call(this,args);};
G__4114.cljs$lang$maxFixedArity = 0;
G__4114.cljs$lang$applyTo = (function (arglist__4116){
var args = cljs.core.seq(arglist__4116);
return G__4114__delegate(args);
});
G__4114.cljs$core$IFn$_invoke$arity$variadic = G__4114__delegate;
return G__4114;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4117__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4118__i = 0, G__4118__a = new Array(arguments.length -  0);
while (G__4118__i < G__4118__a.length) {G__4118__a[G__4118__i] = arguments[G__4118__i + 0]; ++G__4118__i;}
  args = new cljs.core.IndexedSeq(G__4118__a,0,null);
} 
return G__4117__delegate.call(this,args);};
G__4117.cljs$lang$maxFixedArity = 0;
G__4117.cljs$lang$applyTo = (function (arglist__4119){
var args = cljs.core.seq(arglist__4119);
return G__4117__delegate(args);
});
G__4117.cljs$core$IFn$_invoke$arity$variadic = G__4117__delegate;
return G__4117;
})()
);

return null;
});
