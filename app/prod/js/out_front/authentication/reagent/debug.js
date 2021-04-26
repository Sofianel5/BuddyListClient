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
var G__6660__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6661__i = 0, G__6661__a = new Array(arguments.length -  0);
while (G__6661__i < G__6661__a.length) {G__6661__a[G__6661__i] = arguments[G__6661__i + 0]; ++G__6661__i;}
  args = new cljs.core.IndexedSeq(G__6661__a,0,null);
} 
return G__6660__delegate.call(this,args);};
G__6660.cljs$lang$maxFixedArity = 0;
G__6660.cljs$lang$applyTo = (function (arglist__6662){
var args = cljs.core.seq(arglist__6662);
return G__6660__delegate(args);
});
G__6660.cljs$core$IFn$_invoke$arity$variadic = G__6660__delegate;
return G__6660;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__6663__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6664__i = 0, G__6664__a = new Array(arguments.length -  0);
while (G__6664__i < G__6664__a.length) {G__6664__a[G__6664__i] = arguments[G__6664__i + 0]; ++G__6664__i;}
  args = new cljs.core.IndexedSeq(G__6664__a,0,null);
} 
return G__6663__delegate.call(this,args);};
G__6663.cljs$lang$maxFixedArity = 0;
G__6663.cljs$lang$applyTo = (function (arglist__6665){
var args = cljs.core.seq(arglist__6665);
return G__6663__delegate(args);
});
G__6663.cljs$core$IFn$_invoke$arity$variadic = G__6663__delegate;
return G__6663;
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
