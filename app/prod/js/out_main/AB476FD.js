goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6649__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6650__i = 0, G__6650__a = new Array(arguments.length -  0);
while (G__6650__i < G__6650__a.length) {G__6650__a[G__6650__i] = arguments[G__6650__i + 0]; ++G__6650__i;}
  args = new cljs.core.IndexedSeq(G__6650__a,0,null);
} 
return G__6649__delegate.call(this,args);};
G__6649.cljs$lang$maxFixedArity = 0;
G__6649.cljs$lang$applyTo = (function (arglist__6651){
var args = cljs.core.seq(arglist__6651);
return G__6649__delegate(args);
});
G__6649.cljs$core$IFn$_invoke$arity$variadic = G__6649__delegate;
return G__6649;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6652__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6653__i = 0, G__6653__a = new Array(arguments.length -  0);
while (G__6653__i < G__6653__a.length) {G__6653__a[G__6653__i] = arguments[G__6653__i + 0]; ++G__6653__i;}
  args = new cljs.core.IndexedSeq(G__6653__a,0,null);
} 
return G__6652__delegate.call(this,args);};
G__6652.cljs$lang$maxFixedArity = 0;
G__6652.cljs$lang$applyTo = (function (arglist__6654){
var args = cljs.core.seq(arglist__6654);
return G__6652__delegate(args);
});
G__6652.cljs$core$IFn$_invoke$arity$variadic = G__6652__delegate;
return G__6652;
})()
);

return null;
});
