goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4174__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4175__i = 0, G__4175__a = new Array(arguments.length -  0);
while (G__4175__i < G__4175__a.length) {G__4175__a[G__4175__i] = arguments[G__4175__i + 0]; ++G__4175__i;}
  args = new cljs.core.IndexedSeq(G__4175__a,0,null);
} 
return G__4174__delegate.call(this,args);};
G__4174.cljs$lang$maxFixedArity = 0;
G__4174.cljs$lang$applyTo = (function (arglist__4176){
var args = cljs.core.seq(arglist__4176);
return G__4174__delegate(args);
});
G__4174.cljs$core$IFn$_invoke$arity$variadic = G__4174__delegate;
return G__4174;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4177__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4178__i = 0, G__4178__a = new Array(arguments.length -  0);
while (G__4178__i < G__4178__a.length) {G__4178__a[G__4178__i] = arguments[G__4178__i + 0]; ++G__4178__i;}
  args = new cljs.core.IndexedSeq(G__4178__a,0,null);
} 
return G__4177__delegate.call(this,args);};
G__4177.cljs$lang$maxFixedArity = 0;
G__4177.cljs$lang$applyTo = (function (arglist__4179){
var args = cljs.core.seq(arglist__4179);
return G__4177__delegate(args);
});
G__4177.cljs$core$IFn$_invoke$arity$variadic = G__4177__delegate;
return G__4177;
})()
);

return null;
});
