goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4178__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4179__i = 0, G__4179__a = new Array(arguments.length -  0);
while (G__4179__i < G__4179__a.length) {G__4179__a[G__4179__i] = arguments[G__4179__i + 0]; ++G__4179__i;}
  args = new cljs.core.IndexedSeq(G__4179__a,0,null);
} 
return G__4178__delegate.call(this,args);};
G__4178.cljs$lang$maxFixedArity = 0;
G__4178.cljs$lang$applyTo = (function (arglist__4180){
var args = cljs.core.seq(arglist__4180);
return G__4178__delegate(args);
});
G__4178.cljs$core$IFn$_invoke$arity$variadic = G__4178__delegate;
return G__4178;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4181__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4182__i = 0, G__4182__a = new Array(arguments.length -  0);
while (G__4182__i < G__4182__a.length) {G__4182__a[G__4182__i] = arguments[G__4182__i + 0]; ++G__4182__i;}
  args = new cljs.core.IndexedSeq(G__4182__a,0,null);
} 
return G__4181__delegate.call(this,args);};
G__4181.cljs$lang$maxFixedArity = 0;
G__4181.cljs$lang$applyTo = (function (arglist__4183){
var args = cljs.core.seq(arglist__4183);
return G__4181__delegate(args);
});
G__4181.cljs$core$IFn$_invoke$arity$variadic = G__4181__delegate;
return G__4181;
})()
);

return null;
});
