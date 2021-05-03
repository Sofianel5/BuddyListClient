goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4145__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4146__i = 0, G__4146__a = new Array(arguments.length -  0);
while (G__4146__i < G__4146__a.length) {G__4146__a[G__4146__i] = arguments[G__4146__i + 0]; ++G__4146__i;}
  args = new cljs.core.IndexedSeq(G__4146__a,0,null);
} 
return G__4145__delegate.call(this,args);};
G__4145.cljs$lang$maxFixedArity = 0;
G__4145.cljs$lang$applyTo = (function (arglist__4147){
var args = cljs.core.seq(arglist__4147);
return G__4145__delegate(args);
});
G__4145.cljs$core$IFn$_invoke$arity$variadic = G__4145__delegate;
return G__4145;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4148__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4149__i = 0, G__4149__a = new Array(arguments.length -  0);
while (G__4149__i < G__4149__a.length) {G__4149__a[G__4149__i] = arguments[G__4149__i + 0]; ++G__4149__i;}
  args = new cljs.core.IndexedSeq(G__4149__a,0,null);
} 
return G__4148__delegate.call(this,args);};
G__4148.cljs$lang$maxFixedArity = 0;
G__4148.cljs$lang$applyTo = (function (arglist__4150){
var args = cljs.core.seq(arglist__4150);
return G__4148__delegate(args);
});
G__4148.cljs$core$IFn$_invoke$arity$variadic = G__4148__delegate;
return G__4148;
})()
);

return null;
});
