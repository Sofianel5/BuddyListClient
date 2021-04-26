goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4111__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4112__i = 0, G__4112__a = new Array(arguments.length -  0);
while (G__4112__i < G__4112__a.length) {G__4112__a[G__4112__i] = arguments[G__4112__i + 0]; ++G__4112__i;}
  args = new cljs.core.IndexedSeq(G__4112__a,0,null);
} 
return G__4111__delegate.call(this,args);};
G__4111.cljs$lang$maxFixedArity = 0;
G__4111.cljs$lang$applyTo = (function (arglist__4113){
var args = cljs.core.seq(arglist__4113);
return G__4111__delegate(args);
});
G__4111.cljs$core$IFn$_invoke$arity$variadic = G__4111__delegate;
return G__4111;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4114__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4115__i = 0, G__4115__a = new Array(arguments.length -  0);
while (G__4115__i < G__4115__a.length) {G__4115__a[G__4115__i] = arguments[G__4115__i + 0]; ++G__4115__i;}
  args = new cljs.core.IndexedSeq(G__4115__a,0,null);
} 
return G__4114__delegate.call(this,args);};
G__4114.cljs$lang$maxFixedArity = 0;
G__4114.cljs$lang$applyTo = (function (arglist__4116){
var args = cljs.core.seq(arglist__4116);
return G__4114__delegate(args);
});
G__4114.cljs$core$IFn$_invoke$arity$variadic = G__4114__delegate;
return G__4114;
})()
);

return null;
});
