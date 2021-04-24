goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4158__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4159__i = 0, G__4159__a = new Array(arguments.length -  0);
while (G__4159__i < G__4159__a.length) {G__4159__a[G__4159__i] = arguments[G__4159__i + 0]; ++G__4159__i;}
  args = new cljs.core.IndexedSeq(G__4159__a,0,null);
} 
return G__4158__delegate.call(this,args);};
G__4158.cljs$lang$maxFixedArity = 0;
G__4158.cljs$lang$applyTo = (function (arglist__4160){
var args = cljs.core.seq(arglist__4160);
return G__4158__delegate(args);
});
G__4158.cljs$core$IFn$_invoke$arity$variadic = G__4158__delegate;
return G__4158;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4161__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4162__i = 0, G__4162__a = new Array(arguments.length -  0);
while (G__4162__i < G__4162__a.length) {G__4162__a[G__4162__i] = arguments[G__4162__i + 0]; ++G__4162__i;}
  args = new cljs.core.IndexedSeq(G__4162__a,0,null);
} 
return G__4161__delegate.call(this,args);};
G__4161.cljs$lang$maxFixedArity = 0;
G__4161.cljs$lang$applyTo = (function (arglist__4163){
var args = cljs.core.seq(arglist__4163);
return G__4161__delegate(args);
});
G__4161.cljs$core$IFn$_invoke$arity$variadic = G__4161__delegate;
return G__4161;
})()
);

return null;
});
