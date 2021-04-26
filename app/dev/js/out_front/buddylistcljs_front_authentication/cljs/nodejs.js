// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__7536__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7537__i = 0, G__7537__a = new Array(arguments.length -  0);
while (G__7537__i < G__7537__a.length) {G__7537__a[G__7537__i] = arguments[G__7537__i + 0]; ++G__7537__i;}
  args = new cljs.core.IndexedSeq(G__7537__a,0,null);
} 
return G__7536__delegate.call(this,args);};
G__7536.cljs$lang$maxFixedArity = 0;
G__7536.cljs$lang$applyTo = (function (arglist__7538){
var args = cljs.core.seq(arglist__7538);
return G__7536__delegate(args);
});
G__7536.cljs$core$IFn$_invoke$arity$variadic = G__7536__delegate;
return G__7536;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__7539__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7540__i = 0, G__7540__a = new Array(arguments.length -  0);
while (G__7540__i < G__7540__a.length) {G__7540__a[G__7540__i] = arguments[G__7540__i + 0]; ++G__7540__i;}
  args = new cljs.core.IndexedSeq(G__7540__a,0,null);
} 
return G__7539__delegate.call(this,args);};
G__7539.cljs$lang$maxFixedArity = 0;
G__7539.cljs$lang$applyTo = (function (arglist__7541){
var args = cljs.core.seq(arglist__7541);
return G__7539__delegate(args);
});
G__7539.cljs$core$IFn$_invoke$arity$variadic = G__7539__delegate;
return G__7539;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
