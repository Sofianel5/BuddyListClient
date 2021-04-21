goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4926__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4927__i = 0, G__4927__a = new Array(arguments.length -  0);
while (G__4927__i < G__4927__a.length) {G__4927__a[G__4927__i] = arguments[G__4927__i + 0]; ++G__4927__i;}
  args = new cljs.core.IndexedSeq(G__4927__a,0,null);
} 
return G__4926__delegate.call(this,args);};
G__4926.cljs$lang$maxFixedArity = 0;
G__4926.cljs$lang$applyTo = (function (arglist__4928){
var args = cljs.core.seq(arglist__4928);
return G__4926__delegate(args);
});
G__4926.cljs$core$IFn$_invoke$arity$variadic = G__4926__delegate;
return G__4926;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4929__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4930__i = 0, G__4930__a = new Array(arguments.length -  0);
while (G__4930__i < G__4930__a.length) {G__4930__a[G__4930__i] = arguments[G__4930__i + 0]; ++G__4930__i;}
  args = new cljs.core.IndexedSeq(G__4930__a,0,null);
} 
return G__4929__delegate.call(this,args);};
G__4929.cljs$lang$maxFixedArity = 0;
G__4929.cljs$lang$applyTo = (function (arglist__4931){
var args = cljs.core.seq(arglist__4931);
return G__4929__delegate(args);
});
G__4929.cljs$core$IFn$_invoke$arity$variadic = G__4929__delegate;
return G__4929;
})()
);

return null;
});
