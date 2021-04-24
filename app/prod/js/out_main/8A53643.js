goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6559__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6560__i = 0, G__6560__a = new Array(arguments.length -  0);
while (G__6560__i < G__6560__a.length) {G__6560__a[G__6560__i] = arguments[G__6560__i + 0]; ++G__6560__i;}
  args = new cljs.core.IndexedSeq(G__6560__a,0,null);
} 
return G__6559__delegate.call(this,args);};
G__6559.cljs$lang$maxFixedArity = 0;
G__6559.cljs$lang$applyTo = (function (arglist__6561){
var args = cljs.core.seq(arglist__6561);
return G__6559__delegate(args);
});
G__6559.cljs$core$IFn$_invoke$arity$variadic = G__6559__delegate;
return G__6559;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6562__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6563__i = 0, G__6563__a = new Array(arguments.length -  0);
while (G__6563__i < G__6563__a.length) {G__6563__a[G__6563__i] = arguments[G__6563__i + 0]; ++G__6563__i;}
  args = new cljs.core.IndexedSeq(G__6563__a,0,null);
} 
return G__6562__delegate.call(this,args);};
G__6562.cljs$lang$maxFixedArity = 0;
G__6562.cljs$lang$applyTo = (function (arglist__6564){
var args = cljs.core.seq(arglist__6564);
return G__6562__delegate(args);
});
G__6562.cljs$core$IFn$_invoke$arity$variadic = G__6562__delegate;
return G__6562;
})()
);

return null;
});
