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
var G__23532__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23533__i = 0, G__23533__a = new Array(arguments.length -  0);
while (G__23533__i < G__23533__a.length) {G__23533__a[G__23533__i] = arguments[G__23533__i + 0]; ++G__23533__i;}
  args = new cljs.core.IndexedSeq(G__23533__a,0,null);
} 
return G__23532__delegate.call(this,args);};
G__23532.cljs$lang$maxFixedArity = 0;
G__23532.cljs$lang$applyTo = (function (arglist__23534){
var args = cljs.core.seq(arglist__23534);
return G__23532__delegate(args);
});
G__23532.cljs$core$IFn$_invoke$arity$variadic = G__23532__delegate;
return G__23532;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__23535__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23536__i = 0, G__23536__a = new Array(arguments.length -  0);
while (G__23536__i < G__23536__a.length) {G__23536__a[G__23536__i] = arguments[G__23536__i + 0]; ++G__23536__i;}
  args = new cljs.core.IndexedSeq(G__23536__a,0,null);
} 
return G__23535__delegate.call(this,args);};
G__23535.cljs$lang$maxFixedArity = 0;
G__23535.cljs$lang$applyTo = (function (arglist__23537){
var args = cljs.core.seq(arglist__23537);
return G__23535__delegate(args);
});
G__23535.cljs$core$IFn$_invoke$arity$variadic = G__23535__delegate;
return G__23535;
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
