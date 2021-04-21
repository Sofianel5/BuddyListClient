// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__20664__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20665__i = 0, G__20665__a = new Array(arguments.length -  0);
while (G__20665__i < G__20665__a.length) {G__20665__a[G__20665__i] = arguments[G__20665__i + 0]; ++G__20665__i;}
  args = new cljs.core.IndexedSeq(G__20665__a,0,null);
} 
return G__20664__delegate.call(this,args);};
G__20664.cljs$lang$maxFixedArity = 0;
G__20664.cljs$lang$applyTo = (function (arglist__20666){
var args = cljs.core.seq(arglist__20666);
return G__20664__delegate(args);
});
G__20664.cljs$core$IFn$_invoke$arity$variadic = G__20664__delegate;
return G__20664;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__20667__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20668__i = 0, G__20668__a = new Array(arguments.length -  0);
while (G__20668__i < G__20668__a.length) {G__20668__a[G__20668__i] = arguments[G__20668__i + 0]; ++G__20668__i;}
  args = new cljs.core.IndexedSeq(G__20668__a,0,null);
} 
return G__20667__delegate.call(this,args);};
G__20667.cljs$lang$maxFixedArity = 0;
G__20667.cljs$lang$applyTo = (function (arglist__20669){
var args = cljs.core.seq(arglist__20669);
return G__20667__delegate(args);
});
G__20667.cljs$core$IFn$_invoke$arity$variadic = G__20667__delegate;
return G__20667;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
