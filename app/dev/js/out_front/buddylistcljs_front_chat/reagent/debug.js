// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__6033__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6034__i = 0, G__6034__a = new Array(arguments.length -  0);
while (G__6034__i < G__6034__a.length) {G__6034__a[G__6034__i] = arguments[G__6034__i + 0]; ++G__6034__i;}
  args = new cljs.core.IndexedSeq(G__6034__a,0,null);
} 
return G__6033__delegate.call(this,args);};
G__6033.cljs$lang$maxFixedArity = 0;
G__6033.cljs$lang$applyTo = (function (arglist__6035){
var args = cljs.core.seq(arglist__6035);
return G__6033__delegate(args);
});
G__6033.cljs$core$IFn$_invoke$arity$variadic = G__6033__delegate;
return G__6033;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__6036__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6037__i = 0, G__6037__a = new Array(arguments.length -  0);
while (G__6037__i < G__6037__a.length) {G__6037__a[G__6037__i] = arguments[G__6037__i + 0]; ++G__6037__i;}
  args = new cljs.core.IndexedSeq(G__6037__a,0,null);
} 
return G__6036__delegate.call(this,args);};
G__6036.cljs$lang$maxFixedArity = 0;
G__6036.cljs$lang$applyTo = (function (arglist__6038){
var args = cljs.core.seq(arglist__6038);
return G__6036__delegate(args);
});
G__6036.cljs$core$IFn$_invoke$arity$variadic = G__6036__delegate;
return G__6036;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
