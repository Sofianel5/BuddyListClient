goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4107__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4108__i = 0, G__4108__a = new Array(arguments.length -  0);
while (G__4108__i < G__4108__a.length) {G__4108__a[G__4108__i] = arguments[G__4108__i + 0]; ++G__4108__i;}
  args = new cljs.core.IndexedSeq(G__4108__a,0,null);
} 
return G__4107__delegate.call(this,args);};
G__4107.cljs$lang$maxFixedArity = 0;
G__4107.cljs$lang$applyTo = (function (arglist__4109){
var args = cljs.core.seq(arglist__4109);
return G__4107__delegate(args);
});
G__4107.cljs$core$IFn$_invoke$arity$variadic = G__4107__delegate;
return G__4107;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4110__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4111__i = 0, G__4111__a = new Array(arguments.length -  0);
while (G__4111__i < G__4111__a.length) {G__4111__a[G__4111__i] = arguments[G__4111__i + 0]; ++G__4111__i;}
  args = new cljs.core.IndexedSeq(G__4111__a,0,null);
} 
return G__4110__delegate.call(this,args);};
G__4110.cljs$lang$maxFixedArity = 0;
G__4110.cljs$lang$applyTo = (function (arglist__4112){
var args = cljs.core.seq(arglist__4112);
return G__4110__delegate(args);
});
G__4110.cljs$core$IFn$_invoke$arity$variadic = G__4110__delegate;
return G__4110;
})()
);

return null;
});
