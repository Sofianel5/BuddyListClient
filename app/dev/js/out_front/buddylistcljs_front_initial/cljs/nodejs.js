// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__25037__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25038__i = 0, G__25038__a = new Array(arguments.length -  0);
while (G__25038__i < G__25038__a.length) {G__25038__a[G__25038__i] = arguments[G__25038__i + 0]; ++G__25038__i;}
  args = new cljs.core.IndexedSeq(G__25038__a,0,null);
} 
return G__25037__delegate.call(this,args);};
G__25037.cljs$lang$maxFixedArity = 0;
G__25037.cljs$lang$applyTo = (function (arglist__25039){
var args = cljs.core.seq(arglist__25039);
return G__25037__delegate(args);
});
G__25037.cljs$core$IFn$_invoke$arity$variadic = G__25037__delegate;
return G__25037;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__25040__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25041__i = 0, G__25041__a = new Array(arguments.length -  0);
while (G__25041__i < G__25041__a.length) {G__25041__a[G__25041__i] = arguments[G__25041__i + 0]; ++G__25041__i;}
  args = new cljs.core.IndexedSeq(G__25041__a,0,null);
} 
return G__25040__delegate.call(this,args);};
G__25040.cljs$lang$maxFixedArity = 0;
G__25040.cljs$lang$applyTo = (function (arglist__25042){
var args = cljs.core.seq(arglist__25042);
return G__25040__delegate(args);
});
G__25040.cljs$core$IFn$_invoke$arity$variadic = G__25040__delegate;
return G__25040;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
