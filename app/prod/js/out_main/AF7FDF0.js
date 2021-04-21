goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__8143__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8144__i = 0, G__8144__a = new Array(arguments.length -  0);
while (G__8144__i < G__8144__a.length) {G__8144__a[G__8144__i] = arguments[G__8144__i + 0]; ++G__8144__i;}
  args = new cljs.core.IndexedSeq(G__8144__a,0,null);
} 
return G__8143__delegate.call(this,args);};
G__8143.cljs$lang$maxFixedArity = 0;
G__8143.cljs$lang$applyTo = (function (arglist__8145){
var args = cljs.core.seq(arglist__8145);
return G__8143__delegate(args);
});
G__8143.cljs$core$IFn$_invoke$arity$variadic = G__8143__delegate;
return G__8143;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__8146__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8147__i = 0, G__8147__a = new Array(arguments.length -  0);
while (G__8147__i < G__8147__a.length) {G__8147__a[G__8147__i] = arguments[G__8147__i + 0]; ++G__8147__i;}
  args = new cljs.core.IndexedSeq(G__8147__a,0,null);
} 
return G__8146__delegate.call(this,args);};
G__8146.cljs$lang$maxFixedArity = 0;
G__8146.cljs$lang$applyTo = (function (arglist__8148){
var args = cljs.core.seq(arglist__8148);
return G__8146__delegate(args);
});
G__8146.cljs$core$IFn$_invoke$arity$variadic = G__8146__delegate;
return G__8146;
})()
);

return null;
});
