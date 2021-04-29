goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__1345__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1346__i = 0, G__1346__a = new Array(arguments.length -  0);
while (G__1346__i < G__1346__a.length) {G__1346__a[G__1346__i] = arguments[G__1346__i + 0]; ++G__1346__i;}
  args = new cljs.core.IndexedSeq(G__1346__a,0,null);
} 
return G__1345__delegate.call(this,args);};
G__1345.cljs$lang$maxFixedArity = 0;
G__1345.cljs$lang$applyTo = (function (arglist__1347){
var args = cljs.core.seq(arglist__1347);
return G__1345__delegate(args);
});
G__1345.cljs$core$IFn$_invoke$arity$variadic = G__1345__delegate;
return G__1345;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__1348__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1349__i = 0, G__1349__a = new Array(arguments.length -  0);
while (G__1349__i < G__1349__a.length) {G__1349__a[G__1349__i] = arguments[G__1349__i + 0]; ++G__1349__i;}
  args = new cljs.core.IndexedSeq(G__1349__a,0,null);
} 
return G__1348__delegate.call(this,args);};
G__1348.cljs$lang$maxFixedArity = 0;
G__1348.cljs$lang$applyTo = (function (arglist__1350){
var args = cljs.core.seq(arglist__1350);
return G__1348__delegate(args);
});
G__1348.cljs$core$IFn$_invoke$arity$variadic = G__1348__delegate;
return G__1348;
})()
);

return null;
});
