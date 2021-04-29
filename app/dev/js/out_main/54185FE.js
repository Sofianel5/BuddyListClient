goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4119__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4120__i = 0, G__4120__a = new Array(arguments.length -  0);
while (G__4120__i < G__4120__a.length) {G__4120__a[G__4120__i] = arguments[G__4120__i + 0]; ++G__4120__i;}
  args = new cljs.core.IndexedSeq(G__4120__a,0,null);
} 
return G__4119__delegate.call(this,args);};
G__4119.cljs$lang$maxFixedArity = 0;
G__4119.cljs$lang$applyTo = (function (arglist__4121){
var args = cljs.core.seq(arglist__4121);
return G__4119__delegate(args);
});
G__4119.cljs$core$IFn$_invoke$arity$variadic = G__4119__delegate;
return G__4119;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4122__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4123__i = 0, G__4123__a = new Array(arguments.length -  0);
while (G__4123__i < G__4123__a.length) {G__4123__a[G__4123__i] = arguments[G__4123__i + 0]; ++G__4123__i;}
  args = new cljs.core.IndexedSeq(G__4123__a,0,null);
} 
return G__4122__delegate.call(this,args);};
G__4122.cljs$lang$maxFixedArity = 0;
G__4122.cljs$lang$applyTo = (function (arglist__4124){
var args = cljs.core.seq(arglist__4124);
return G__4122__delegate(args);
});
G__4122.cljs$core$IFn$_invoke$arity$variadic = G__4122__delegate;
return G__4122;
})()
);

return null;
});
