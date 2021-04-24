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
var G__23768__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23769__i = 0, G__23769__a = new Array(arguments.length -  0);
while (G__23769__i < G__23769__a.length) {G__23769__a[G__23769__i] = arguments[G__23769__i + 0]; ++G__23769__i;}
  args = new cljs.core.IndexedSeq(G__23769__a,0,null);
} 
return G__23768__delegate.call(this,args);};
G__23768.cljs$lang$maxFixedArity = 0;
G__23768.cljs$lang$applyTo = (function (arglist__23770){
var args = cljs.core.seq(arglist__23770);
return G__23768__delegate(args);
});
G__23768.cljs$core$IFn$_invoke$arity$variadic = G__23768__delegate;
return G__23768;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__23771__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23772__i = 0, G__23772__a = new Array(arguments.length -  0);
while (G__23772__i < G__23772__a.length) {G__23772__a[G__23772__i] = arguments[G__23772__i + 0]; ++G__23772__i;}
  args = new cljs.core.IndexedSeq(G__23772__a,0,null);
} 
return G__23771__delegate.call(this,args);};
G__23771.cljs$lang$maxFixedArity = 0;
G__23771.cljs$lang$applyTo = (function (arglist__23773){
var args = cljs.core.seq(arglist__23773);
return G__23771__delegate(args);
});
G__23771.cljs$core$IFn$_invoke$arity$variadic = G__23771__delegate;
return G__23771;
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
