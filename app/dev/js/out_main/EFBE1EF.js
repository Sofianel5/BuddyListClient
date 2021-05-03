goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4152__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4153__i = 0, G__4153__a = new Array(arguments.length -  0);
while (G__4153__i < G__4153__a.length) {G__4153__a[G__4153__i] = arguments[G__4153__i + 0]; ++G__4153__i;}
  args = new cljs.core.IndexedSeq(G__4153__a,0,null);
} 
return G__4152__delegate.call(this,args);};
G__4152.cljs$lang$maxFixedArity = 0;
G__4152.cljs$lang$applyTo = (function (arglist__4154){
var args = cljs.core.seq(arglist__4154);
return G__4152__delegate(args);
});
G__4152.cljs$core$IFn$_invoke$arity$variadic = G__4152__delegate;
return G__4152;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4155__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4156__i = 0, G__4156__a = new Array(arguments.length -  0);
while (G__4156__i < G__4156__a.length) {G__4156__a[G__4156__i] = arguments[G__4156__i + 0]; ++G__4156__i;}
  args = new cljs.core.IndexedSeq(G__4156__a,0,null);
} 
return G__4155__delegate.call(this,args);};
G__4155.cljs$lang$maxFixedArity = 0;
G__4155.cljs$lang$applyTo = (function (arglist__4157){
var args = cljs.core.seq(arglist__4157);
return G__4155__delegate(args);
});
G__4155.cljs$core$IFn$_invoke$arity$variadic = G__4155__delegate;
return G__4155;
})()
);

return null;
});
