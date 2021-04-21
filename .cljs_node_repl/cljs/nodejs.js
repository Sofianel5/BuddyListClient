// Compiled by ClojureScript 1.10.191 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__14183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14184__i = 0, G__14184__a = new Array(arguments.length -  0);
while (G__14184__i < G__14184__a.length) {G__14184__a[G__14184__i] = arguments[G__14184__i + 0]; ++G__14184__i;}
  args = new cljs.core.IndexedSeq(G__14184__a,0,null);
} 
return G__14183__delegate.call(this,args);};
G__14183.cljs$lang$maxFixedArity = 0;
G__14183.cljs$lang$applyTo = (function (arglist__14185){
var args = cljs.core.seq(arglist__14185);
return G__14183__delegate(args);
});
G__14183.cljs$core$IFn$_invoke$arity$variadic = G__14183__delegate;
return G__14183;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__14186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14187__i = 0, G__14187__a = new Array(arguments.length -  0);
while (G__14187__i < G__14187__a.length) {G__14187__a[G__14187__i] = arguments[G__14187__i + 0]; ++G__14187__i;}
  args = new cljs.core.IndexedSeq(G__14187__a,0,null);
} 
return G__14186__delegate.call(this,args);};
G__14186.cljs$lang$maxFixedArity = 0;
G__14186.cljs$lang$applyTo = (function (arglist__14188){
var args = cljs.core.seq(arglist__14188);
return G__14186__delegate(args);
});
G__14186.cljs$core$IFn$_invoke$arity$variadic = G__14186__delegate;
return G__14186;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
