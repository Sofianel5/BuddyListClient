goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4175__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4176__i = 0, G__4176__a = new Array(arguments.length -  0);
while (G__4176__i < G__4176__a.length) {G__4176__a[G__4176__i] = arguments[G__4176__i + 0]; ++G__4176__i;}
  args = new cljs.core.IndexedSeq(G__4176__a,0,null);
} 
return G__4175__delegate.call(this,args);};
G__4175.cljs$lang$maxFixedArity = 0;
G__4175.cljs$lang$applyTo = (function (arglist__4177){
var args = cljs.core.seq(arglist__4177);
return G__4175__delegate(args);
});
G__4175.cljs$core$IFn$_invoke$arity$variadic = G__4175__delegate;
return G__4175;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4178__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
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

return null;
});
