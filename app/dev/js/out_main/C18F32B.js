goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4112__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4113__i = 0, G__4113__a = new Array(arguments.length -  0);
while (G__4113__i < G__4113__a.length) {G__4113__a[G__4113__i] = arguments[G__4113__i + 0]; ++G__4113__i;}
  args = new cljs.core.IndexedSeq(G__4113__a,0,null);
} 
return G__4112__delegate.call(this,args);};
G__4112.cljs$lang$maxFixedArity = 0;
G__4112.cljs$lang$applyTo = (function (arglist__4114){
var args = cljs.core.seq(arglist__4114);
return G__4112__delegate(args);
});
G__4112.cljs$core$IFn$_invoke$arity$variadic = G__4112__delegate;
return G__4112;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4115__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4116__i = 0, G__4116__a = new Array(arguments.length -  0);
while (G__4116__i < G__4116__a.length) {G__4116__a[G__4116__i] = arguments[G__4116__i + 0]; ++G__4116__i;}
  args = new cljs.core.IndexedSeq(G__4116__a,0,null);
} 
return G__4115__delegate.call(this,args);};
G__4115.cljs$lang$maxFixedArity = 0;
G__4115.cljs$lang$applyTo = (function (arglist__4117){
var args = cljs.core.seq(arglist__4117);
return G__4115__delegate(args);
});
G__4115.cljs$core$IFn$_invoke$arity$variadic = G__4115__delegate;
return G__4115;
})()
);

return null;
});
