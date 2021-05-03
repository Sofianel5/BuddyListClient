goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4193__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4194__i = 0, G__4194__a = new Array(arguments.length -  0);
while (G__4194__i < G__4194__a.length) {G__4194__a[G__4194__i] = arguments[G__4194__i + 0]; ++G__4194__i;}
  args = new cljs.core.IndexedSeq(G__4194__a,0,null);
} 
return G__4193__delegate.call(this,args);};
G__4193.cljs$lang$maxFixedArity = 0;
G__4193.cljs$lang$applyTo = (function (arglist__4195){
var args = cljs.core.seq(arglist__4195);
return G__4193__delegate(args);
});
G__4193.cljs$core$IFn$_invoke$arity$variadic = G__4193__delegate;
return G__4193;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4196__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4197__i = 0, G__4197__a = new Array(arguments.length -  0);
while (G__4197__i < G__4197__a.length) {G__4197__a[G__4197__i] = arguments[G__4197__i + 0]; ++G__4197__i;}
  args = new cljs.core.IndexedSeq(G__4197__a,0,null);
} 
return G__4196__delegate.call(this,args);};
G__4196.cljs$lang$maxFixedArity = 0;
G__4196.cljs$lang$applyTo = (function (arglist__4198){
var args = cljs.core.seq(arglist__4198);
return G__4196__delegate(args);
});
G__4196.cljs$core$IFn$_invoke$arity$variadic = G__4196__delegate;
return G__4196;
})()
);

return null;
});
