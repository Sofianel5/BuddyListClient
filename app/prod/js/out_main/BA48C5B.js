goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6591__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6592__i = 0, G__6592__a = new Array(arguments.length -  0);
while (G__6592__i < G__6592__a.length) {G__6592__a[G__6592__i] = arguments[G__6592__i + 0]; ++G__6592__i;}
  args = new cljs.core.IndexedSeq(G__6592__a,0,null);
} 
return G__6591__delegate.call(this,args);};
G__6591.cljs$lang$maxFixedArity = 0;
G__6591.cljs$lang$applyTo = (function (arglist__6593){
var args = cljs.core.seq(arglist__6593);
return G__6591__delegate(args);
});
G__6591.cljs$core$IFn$_invoke$arity$variadic = G__6591__delegate;
return G__6591;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6594__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6595__i = 0, G__6595__a = new Array(arguments.length -  0);
while (G__6595__i < G__6595__a.length) {G__6595__a[G__6595__i] = arguments[G__6595__i + 0]; ++G__6595__i;}
  args = new cljs.core.IndexedSeq(G__6595__a,0,null);
} 
return G__6594__delegate.call(this,args);};
G__6594.cljs$lang$maxFixedArity = 0;
G__6594.cljs$lang$applyTo = (function (arglist__6596){
var args = cljs.core.seq(arglist__6596);
return G__6594__delegate(args);
});
G__6594.cljs$core$IFn$_invoke$arity$variadic = G__6594__delegate;
return G__6594;
})()
);

return null;
});
