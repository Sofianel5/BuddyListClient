goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4168__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4169__i = 0, G__4169__a = new Array(arguments.length -  0);
while (G__4169__i < G__4169__a.length) {G__4169__a[G__4169__i] = arguments[G__4169__i + 0]; ++G__4169__i;}
  args = new cljs.core.IndexedSeq(G__4169__a,0,null);
} 
return G__4168__delegate.call(this,args);};
G__4168.cljs$lang$maxFixedArity = 0;
G__4168.cljs$lang$applyTo = (function (arglist__4170){
var args = cljs.core.seq(arglist__4170);
return G__4168__delegate(args);
});
G__4168.cljs$core$IFn$_invoke$arity$variadic = G__4168__delegate;
return G__4168;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4171__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4172__i = 0, G__4172__a = new Array(arguments.length -  0);
while (G__4172__i < G__4172__a.length) {G__4172__a[G__4172__i] = arguments[G__4172__i + 0]; ++G__4172__i;}
  args = new cljs.core.IndexedSeq(G__4172__a,0,null);
} 
return G__4171__delegate.call(this,args);};
G__4171.cljs$lang$maxFixedArity = 0;
G__4171.cljs$lang$applyTo = (function (arglist__4173){
var args = cljs.core.seq(arglist__4173);
return G__4171__delegate(args);
});
G__4171.cljs$core$IFn$_invoke$arity$variadic = G__4171__delegate;
return G__4171;
})()
);

return null;
});
