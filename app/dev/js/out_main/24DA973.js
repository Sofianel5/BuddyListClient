goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__2225__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2226__i = 0, G__2226__a = new Array(arguments.length -  0);
while (G__2226__i < G__2226__a.length) {G__2226__a[G__2226__i] = arguments[G__2226__i + 0]; ++G__2226__i;}
  args = new cljs.core.IndexedSeq(G__2226__a,0,null);
} 
return G__2225__delegate.call(this,args);};
G__2225.cljs$lang$maxFixedArity = 0;
G__2225.cljs$lang$applyTo = (function (arglist__2227){
var args = cljs.core.seq(arglist__2227);
return G__2225__delegate(args);
});
G__2225.cljs$core$IFn$_invoke$arity$variadic = G__2225__delegate;
return G__2225;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__2228__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2229__i = 0, G__2229__a = new Array(arguments.length -  0);
while (G__2229__i < G__2229__a.length) {G__2229__a[G__2229__i] = arguments[G__2229__i + 0]; ++G__2229__i;}
  args = new cljs.core.IndexedSeq(G__2229__a,0,null);
} 
return G__2228__delegate.call(this,args);};
G__2228.cljs$lang$maxFixedArity = 0;
G__2228.cljs$lang$applyTo = (function (arglist__2230){
var args = cljs.core.seq(arglist__2230);
return G__2228__delegate(args);
});
G__2228.cljs$core$IFn$_invoke$arity$variadic = G__2228__delegate;
return G__2228;
})()
);

return null;
});
