// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__11156__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11157__i = 0, G__11157__a = new Array(arguments.length -  0);
while (G__11157__i < G__11157__a.length) {G__11157__a[G__11157__i] = arguments[G__11157__i + 0]; ++G__11157__i;}
  args = new cljs.core.IndexedSeq(G__11157__a,0,null);
} 
return G__11156__delegate.call(this,args);};
G__11156.cljs$lang$maxFixedArity = 0;
G__11156.cljs$lang$applyTo = (function (arglist__11158){
var args = cljs.core.seq(arglist__11158);
return G__11156__delegate(args);
});
G__11156.cljs$core$IFn$_invoke$arity$variadic = G__11156__delegate;
return G__11156;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__11159__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11160__i = 0, G__11160__a = new Array(arguments.length -  0);
while (G__11160__i < G__11160__a.length) {G__11160__a[G__11160__i] = arguments[G__11160__i + 0]; ++G__11160__i;}
  args = new cljs.core.IndexedSeq(G__11160__a,0,null);
} 
return G__11159__delegate.call(this,args);};
G__11159.cljs$lang$maxFixedArity = 0;
G__11159.cljs$lang$applyTo = (function (arglist__11161){
var args = cljs.core.seq(arglist__11161);
return G__11159__delegate(args);
});
G__11159.cljs$core$IFn$_invoke$arity$variadic = G__11159__delegate;
return G__11159;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
