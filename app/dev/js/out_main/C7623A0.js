goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4176__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4177__i = 0, G__4177__a = new Array(arguments.length -  0);
while (G__4177__i < G__4177__a.length) {G__4177__a[G__4177__i] = arguments[G__4177__i + 0]; ++G__4177__i;}
  args = new cljs.core.IndexedSeq(G__4177__a,0,null);
} 
return G__4176__delegate.call(this,args);};
G__4176.cljs$lang$maxFixedArity = 0;
G__4176.cljs$lang$applyTo = (function (arglist__4178){
var args = cljs.core.seq(arglist__4178);
return G__4176__delegate(args);
});
G__4176.cljs$core$IFn$_invoke$arity$variadic = G__4176__delegate;
return G__4176;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4179__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4180__i = 0, G__4180__a = new Array(arguments.length -  0);
while (G__4180__i < G__4180__a.length) {G__4180__a[G__4180__i] = arguments[G__4180__i + 0]; ++G__4180__i;}
  args = new cljs.core.IndexedSeq(G__4180__a,0,null);
} 
return G__4179__delegate.call(this,args);};
G__4179.cljs$lang$maxFixedArity = 0;
G__4179.cljs$lang$applyTo = (function (arglist__4181){
var args = cljs.core.seq(arglist__4181);
return G__4179__delegate(args);
});
G__4179.cljs$core$IFn$_invoke$arity$variadic = G__4179__delegate;
return G__4179;
})()
);

return null;
});
