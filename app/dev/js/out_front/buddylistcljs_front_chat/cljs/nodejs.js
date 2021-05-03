// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6923__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6924__i = 0, G__6924__a = new Array(arguments.length -  0);
while (G__6924__i < G__6924__a.length) {G__6924__a[G__6924__i] = arguments[G__6924__i + 0]; ++G__6924__i;}
  args = new cljs.core.IndexedSeq(G__6924__a,0,null);
} 
return G__6923__delegate.call(this,args);};
G__6923.cljs$lang$maxFixedArity = 0;
G__6923.cljs$lang$applyTo = (function (arglist__6925){
var args = cljs.core.seq(arglist__6925);
return G__6923__delegate(args);
});
G__6923.cljs$core$IFn$_invoke$arity$variadic = G__6923__delegate;
return G__6923;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6926__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6927__i = 0, G__6927__a = new Array(arguments.length -  0);
while (G__6927__i < G__6927__a.length) {G__6927__a[G__6927__i] = arguments[G__6927__i + 0]; ++G__6927__i;}
  args = new cljs.core.IndexedSeq(G__6927__a,0,null);
} 
return G__6926__delegate.call(this,args);};
G__6926.cljs$lang$maxFixedArity = 0;
G__6926.cljs$lang$applyTo = (function (arglist__6928){
var args = cljs.core.seq(arglist__6928);
return G__6926__delegate(args);
});
G__6926.cljs$core$IFn$_invoke$arity$variadic = G__6926__delegate;
return G__6926;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
