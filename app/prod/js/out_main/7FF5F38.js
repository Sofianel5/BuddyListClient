goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6092__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6093__i = 0, G__6093__a = new Array(arguments.length -  0);
while (G__6093__i < G__6093__a.length) {G__6093__a[G__6093__i] = arguments[G__6093__i + 0]; ++G__6093__i;}
  args = new cljs.core.IndexedSeq(G__6093__a,0,null);
} 
return G__6092__delegate.call(this,args);};
G__6092.cljs$lang$maxFixedArity = 0;
G__6092.cljs$lang$applyTo = (function (arglist__6094){
var args = cljs.core.seq(arglist__6094);
return G__6092__delegate(args);
});
G__6092.cljs$core$IFn$_invoke$arity$variadic = G__6092__delegate;
return G__6092;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6095__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6095 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6096__i = 0, G__6096__a = new Array(arguments.length -  0);
while (G__6096__i < G__6096__a.length) {G__6096__a[G__6096__i] = arguments[G__6096__i + 0]; ++G__6096__i;}
  args = new cljs.core.IndexedSeq(G__6096__a,0,null);
} 
return G__6095__delegate.call(this,args);};
G__6095.cljs$lang$maxFixedArity = 0;
G__6095.cljs$lang$applyTo = (function (arglist__6097){
var args = cljs.core.seq(arglist__6097);
return G__6095__delegate(args);
});
G__6095.cljs$core$IFn$_invoke$arity$variadic = G__6095__delegate;
return G__6095;
})()
);

return null;
});
