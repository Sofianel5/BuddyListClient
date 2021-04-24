goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4106__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4106 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4107__i = 0, G__4107__a = new Array(arguments.length -  0);
while (G__4107__i < G__4107__a.length) {G__4107__a[G__4107__i] = arguments[G__4107__i + 0]; ++G__4107__i;}
  args = new cljs.core.IndexedSeq(G__4107__a,0,null);
} 
return G__4106__delegate.call(this,args);};
G__4106.cljs$lang$maxFixedArity = 0;
G__4106.cljs$lang$applyTo = (function (arglist__4108){
var args = cljs.core.seq(arglist__4108);
return G__4106__delegate(args);
});
G__4106.cljs$core$IFn$_invoke$arity$variadic = G__4106__delegate;
return G__4106;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4109__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4110__i = 0, G__4110__a = new Array(arguments.length -  0);
while (G__4110__i < G__4110__a.length) {G__4110__a[G__4110__i] = arguments[G__4110__i + 0]; ++G__4110__i;}
  args = new cljs.core.IndexedSeq(G__4110__a,0,null);
} 
return G__4109__delegate.call(this,args);};
G__4109.cljs$lang$maxFixedArity = 0;
G__4109.cljs$lang$applyTo = (function (arglist__4111){
var args = cljs.core.seq(arglist__4111);
return G__4109__delegate(args);
});
G__4109.cljs$core$IFn$_invoke$arity$variadic = G__4109__delegate;
return G__4109;
})()
);

return null;
});
