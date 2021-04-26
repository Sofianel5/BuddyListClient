// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__1696__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1697__i = 0, G__1697__a = new Array(arguments.length -  0);
while (G__1697__i < G__1697__a.length) {G__1697__a[G__1697__i] = arguments[G__1697__i + 0]; ++G__1697__i;}
  args = new cljs.core.IndexedSeq(G__1697__a,0,null);
} 
return G__1696__delegate.call(this,args);};
G__1696.cljs$lang$maxFixedArity = 0;
G__1696.cljs$lang$applyTo = (function (arglist__1698){
var args = cljs.core.seq(arglist__1698);
return G__1696__delegate(args);
});
G__1696.cljs$core$IFn$_invoke$arity$variadic = G__1696__delegate;
return G__1696;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__1699__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1700__i = 0, G__1700__a = new Array(arguments.length -  0);
while (G__1700__i < G__1700__a.length) {G__1700__a[G__1700__i] = arguments[G__1700__i + 0]; ++G__1700__i;}
  args = new cljs.core.IndexedSeq(G__1700__a,0,null);
} 
return G__1699__delegate.call(this,args);};
G__1699.cljs$lang$maxFixedArity = 0;
G__1699.cljs$lang$applyTo = (function (arglist__1701){
var args = cljs.core.seq(arglist__1701);
return G__1699__delegate(args);
});
G__1699.cljs$core$IFn$_invoke$arity$variadic = G__1699__delegate;
return G__1699;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
