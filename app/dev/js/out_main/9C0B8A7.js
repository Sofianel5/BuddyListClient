goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4680__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4681__i = 0, G__4681__a = new Array(arguments.length -  0);
while (G__4681__i < G__4681__a.length) {G__4681__a[G__4681__i] = arguments[G__4681__i + 0]; ++G__4681__i;}
  args = new cljs.core.IndexedSeq(G__4681__a,0,null);
} 
return G__4680__delegate.call(this,args);};
G__4680.cljs$lang$maxFixedArity = 0;
G__4680.cljs$lang$applyTo = (function (arglist__4682){
var args = cljs.core.seq(arglist__4682);
return G__4680__delegate(args);
});
G__4680.cljs$core$IFn$_invoke$arity$variadic = G__4680__delegate;
return G__4680;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4683__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4684__i = 0, G__4684__a = new Array(arguments.length -  0);
while (G__4684__i < G__4684__a.length) {G__4684__a[G__4684__i] = arguments[G__4684__i + 0]; ++G__4684__i;}
  args = new cljs.core.IndexedSeq(G__4684__a,0,null);
} 
return G__4683__delegate.call(this,args);};
G__4683.cljs$lang$maxFixedArity = 0;
G__4683.cljs$lang$applyTo = (function (arglist__4685){
var args = cljs.core.seq(arglist__4685);
return G__4683__delegate(args);
});
G__4683.cljs$core$IFn$_invoke$arity$variadic = G__4683__delegate;
return G__4683;
})()
);

return null;
});
