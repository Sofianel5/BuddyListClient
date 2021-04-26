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
var G__804__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__805__i = 0, G__805__a = new Array(arguments.length -  0);
while (G__805__i < G__805__a.length) {G__805__a[G__805__i] = arguments[G__805__i + 0]; ++G__805__i;}
  args = new cljs.core.IndexedSeq(G__805__a,0,null);
} 
return G__804__delegate.call(this,args);};
G__804.cljs$lang$maxFixedArity = 0;
G__804.cljs$lang$applyTo = (function (arglist__806){
var args = cljs.core.seq(arglist__806);
return G__804__delegate(args);
});
G__804.cljs$core$IFn$_invoke$arity$variadic = G__804__delegate;
return G__804;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__807__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__808__i = 0, G__808__a = new Array(arguments.length -  0);
while (G__808__i < G__808__a.length) {G__808__a[G__808__i] = arguments[G__808__i + 0]; ++G__808__i;}
  args = new cljs.core.IndexedSeq(G__808__a,0,null);
} 
return G__807__delegate.call(this,args);};
G__807.cljs$lang$maxFixedArity = 0;
G__807.cljs$lang$applyTo = (function (arglist__809){
var args = cljs.core.seq(arglist__809);
return G__807__delegate(args);
});
G__807.cljs$core$IFn$_invoke$arity$variadic = G__807__delegate;
return G__807;
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
