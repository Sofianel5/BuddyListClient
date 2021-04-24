goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4110__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4111__i = 0, G__4111__a = new Array(arguments.length -  0);
while (G__4111__i < G__4111__a.length) {G__4111__a[G__4111__i] = arguments[G__4111__i + 0]; ++G__4111__i;}
  args = new cljs.core.IndexedSeq(G__4111__a,0,null);
} 
return G__4110__delegate.call(this,args);};
G__4110.cljs$lang$maxFixedArity = 0;
G__4110.cljs$lang$applyTo = (function (arglist__4112){
var args = cljs.core.seq(arglist__4112);
return G__4110__delegate(args);
});
G__4110.cljs$core$IFn$_invoke$arity$variadic = G__4110__delegate;
return G__4110;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4113__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4114__i = 0, G__4114__a = new Array(arguments.length -  0);
while (G__4114__i < G__4114__a.length) {G__4114__a[G__4114__i] = arguments[G__4114__i + 0]; ++G__4114__i;}
  args = new cljs.core.IndexedSeq(G__4114__a,0,null);
} 
return G__4113__delegate.call(this,args);};
G__4113.cljs$lang$maxFixedArity = 0;
G__4113.cljs$lang$applyTo = (function (arglist__4115){
var args = cljs.core.seq(arglist__4115);
return G__4113__delegate(args);
});
G__4113.cljs$core$IFn$_invoke$arity$variadic = G__4113__delegate;
return G__4113;
})()
);

return null;
});
