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
var G__10269__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10270__i = 0, G__10270__a = new Array(arguments.length -  0);
while (G__10270__i < G__10270__a.length) {G__10270__a[G__10270__i] = arguments[G__10270__i + 0]; ++G__10270__i;}
  args = new cljs.core.IndexedSeq(G__10270__a,0,null);
} 
return G__10269__delegate.call(this,args);};
G__10269.cljs$lang$maxFixedArity = 0;
G__10269.cljs$lang$applyTo = (function (arglist__10271){
var args = cljs.core.seq(arglist__10271);
return G__10269__delegate(args);
});
G__10269.cljs$core$IFn$_invoke$arity$variadic = G__10269__delegate;
return G__10269;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10272__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10273__i = 0, G__10273__a = new Array(arguments.length -  0);
while (G__10273__i < G__10273__a.length) {G__10273__a[G__10273__i] = arguments[G__10273__i + 0]; ++G__10273__i;}
  args = new cljs.core.IndexedSeq(G__10273__a,0,null);
} 
return G__10272__delegate.call(this,args);};
G__10272.cljs$lang$maxFixedArity = 0;
G__10272.cljs$lang$applyTo = (function (arglist__10274){
var args = cljs.core.seq(arglist__10274);
return G__10272__delegate(args);
});
G__10272.cljs$core$IFn$_invoke$arity$variadic = G__10272__delegate;
return G__10272;
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
