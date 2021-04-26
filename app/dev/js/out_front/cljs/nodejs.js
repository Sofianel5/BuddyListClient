// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__695__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__696__i = 0, G__696__a = new Array(arguments.length -  0);
while (G__696__i < G__696__a.length) {G__696__a[G__696__i] = arguments[G__696__i + 0]; ++G__696__i;}
  args = new cljs.core.IndexedSeq(G__696__a,0,null);
} 
return G__695__delegate.call(this,args);};
G__695.cljs$lang$maxFixedArity = 0;
G__695.cljs$lang$applyTo = (function (arglist__697){
var args = cljs.core.seq(arglist__697);
return G__695__delegate(args);
});
G__695.cljs$core$IFn$_invoke$arity$variadic = G__695__delegate;
return G__695;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__698__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__699__i = 0, G__699__a = new Array(arguments.length -  0);
while (G__699__i < G__699__a.length) {G__699__a[G__699__i] = arguments[G__699__i + 0]; ++G__699__i;}
  args = new cljs.core.IndexedSeq(G__699__a,0,null);
} 
return G__698__delegate.call(this,args);};
G__698.cljs$lang$maxFixedArity = 0;
G__698.cljs$lang$applyTo = (function (arglist__700){
var args = cljs.core.seq(arglist__700);
return G__698__delegate(args);
});
G__698.cljs$core$IFn$_invoke$arity$variadic = G__698__delegate;
return G__698;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
