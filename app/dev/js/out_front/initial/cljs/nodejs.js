// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__7538__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7539__i = 0, G__7539__a = new Array(arguments.length -  0);
while (G__7539__i < G__7539__a.length) {G__7539__a[G__7539__i] = arguments[G__7539__i + 0]; ++G__7539__i;}
  args = new cljs.core.IndexedSeq(G__7539__a,0,null);
} 
return G__7538__delegate.call(this,args);};
G__7538.cljs$lang$maxFixedArity = 0;
G__7538.cljs$lang$applyTo = (function (arglist__7540){
var args = cljs.core.seq(arglist__7540);
return G__7538__delegate(args);
});
G__7538.cljs$core$IFn$_invoke$arity$variadic = G__7538__delegate;
return G__7538;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__7541__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7542__i = 0, G__7542__a = new Array(arguments.length -  0);
while (G__7542__i < G__7542__a.length) {G__7542__a[G__7542__i] = arguments[G__7542__i + 0]; ++G__7542__i;}
  args = new cljs.core.IndexedSeq(G__7542__a,0,null);
} 
return G__7541__delegate.call(this,args);};
G__7541.cljs$lang$maxFixedArity = 0;
G__7541.cljs$lang$applyTo = (function (arglist__7543){
var args = cljs.core.seq(arglist__7543);
return G__7541__delegate(args);
});
G__7541.cljs$core$IFn$_invoke$arity$variadic = G__7541__delegate;
return G__7541;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
