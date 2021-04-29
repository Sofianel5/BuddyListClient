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
var G__9472__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9473__i = 0, G__9473__a = new Array(arguments.length -  0);
while (G__9473__i < G__9473__a.length) {G__9473__a[G__9473__i] = arguments[G__9473__i + 0]; ++G__9473__i;}
  args = new cljs.core.IndexedSeq(G__9473__a,0,null);
} 
return G__9472__delegate.call(this,args);};
G__9472.cljs$lang$maxFixedArity = 0;
G__9472.cljs$lang$applyTo = (function (arglist__9474){
var args = cljs.core.seq(arglist__9474);
return G__9472__delegate(args);
});
G__9472.cljs$core$IFn$_invoke$arity$variadic = G__9472__delegate;
return G__9472;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9475__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9476__i = 0, G__9476__a = new Array(arguments.length -  0);
while (G__9476__i < G__9476__a.length) {G__9476__a[G__9476__i] = arguments[G__9476__i + 0]; ++G__9476__i;}
  args = new cljs.core.IndexedSeq(G__9476__a,0,null);
} 
return G__9475__delegate.call(this,args);};
G__9475.cljs$lang$maxFixedArity = 0;
G__9475.cljs$lang$applyTo = (function (arglist__9477){
var args = cljs.core.seq(arglist__9477);
return G__9475__delegate(args);
});
G__9475.cljs$core$IFn$_invoke$arity$variadic = G__9475__delegate;
return G__9475;
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
