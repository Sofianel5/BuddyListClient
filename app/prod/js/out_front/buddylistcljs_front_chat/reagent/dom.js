// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__3920__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_10992 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_10992){
return (function (){
var _STAR_always_update_STAR_10993 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10993;
}});})(_STAR_always_update_STAR_10992))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10992;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__10995 = arguments.length;
switch (G__10995) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__10997_11001 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__10998_11002 = null;
var count__10999_11003 = (0);
var i__11000_11004 = (0);
while(true){
if((i__11000_11004 < count__10999_11003)){
var v_11005 = cljs.core._nth.call(null,chunk__10998_11002,i__11000_11004);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_11005);


var G__11006 = seq__10997_11001;
var G__11007 = chunk__10998_11002;
var G__11008 = count__10999_11003;
var G__11009 = (i__11000_11004 + (1));
seq__10997_11001 = G__11006;
chunk__10998_11002 = G__11007;
count__10999_11003 = G__11008;
i__11000_11004 = G__11009;
continue;
} else {
var temp__4657__auto___11010 = cljs.core.seq.call(null,seq__10997_11001);
if(temp__4657__auto___11010){
var seq__10997_11011__$1 = temp__4657__auto___11010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10997_11011__$1)){
var c__4317__auto___11012 = cljs.core.chunk_first.call(null,seq__10997_11011__$1);
var G__11013 = cljs.core.chunk_rest.call(null,seq__10997_11011__$1);
var G__11014 = c__4317__auto___11012;
var G__11015 = cljs.core.count.call(null,c__4317__auto___11012);
var G__11016 = (0);
seq__10997_11001 = G__11013;
chunk__10998_11002 = G__11014;
count__10999_11003 = G__11015;
i__11000_11004 = G__11016;
continue;
} else {
var v_11017 = cljs.core.first.call(null,seq__10997_11011__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_11017);


var G__11018 = cljs.core.next.call(null,seq__10997_11011__$1);
var G__11019 = null;
var G__11020 = (0);
var G__11021 = (0);
seq__10997_11001 = G__11018;
chunk__10998_11002 = G__11019;
count__10999_11003 = G__11020;
i__11000_11004 = G__11021;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
