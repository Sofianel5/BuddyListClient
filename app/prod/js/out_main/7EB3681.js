goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6543__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6544__i = 0, G__6544__a = new Array(arguments.length -  0);
while (G__6544__i < G__6544__a.length) {G__6544__a[G__6544__i] = arguments[G__6544__i + 0]; ++G__6544__i;}
  args = new cljs.core.IndexedSeq(G__6544__a,0,null);
} 
return G__6543__delegate.call(this,args);};
G__6543.cljs$lang$maxFixedArity = 0;
G__6543.cljs$lang$applyTo = (function (arglist__6545){
var args = cljs.core.seq(arglist__6545);
return G__6543__delegate(args);
});
G__6543.cljs$core$IFn$_invoke$arity$variadic = G__6543__delegate;
return G__6543;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6546__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6547__i = 0, G__6547__a = new Array(arguments.length -  0);
while (G__6547__i < G__6547__a.length) {G__6547__a[G__6547__i] = arguments[G__6547__i + 0]; ++G__6547__i;}
  args = new cljs.core.IndexedSeq(G__6547__a,0,null);
} 
return G__6546__delegate.call(this,args);};
G__6546.cljs$lang$maxFixedArity = 0;
G__6546.cljs$lang$applyTo = (function (arglist__6548){
var args = cljs.core.seq(arglist__6548);
return G__6546__delegate(args);
});
G__6546.cljs$core$IFn$_invoke$arity$variadic = G__6546__delegate;
return G__6546;
})()
);

return null;
});
