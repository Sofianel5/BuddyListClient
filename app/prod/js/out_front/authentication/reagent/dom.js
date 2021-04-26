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
var _STAR_always_update_STAR_7892 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_7892){
return (function (){
var _STAR_always_update_STAR_7893 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7893;
}});})(_STAR_always_update_STAR_7892))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7892;
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
var G__7895 = arguments.length;
switch (G__7895) {
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

var seq__7897_7901 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__7898_7902 = null;
var count__7899_7903 = (0);
var i__7900_7904 = (0);
while(true){
if((i__7900_7904 < count__7899_7903)){
var v_7905 = cljs.core._nth.call(null,chunk__7898_7902,i__7900_7904);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_7905);


var G__7906 = seq__7897_7901;
var G__7907 = chunk__7898_7902;
var G__7908 = count__7899_7903;
var G__7909 = (i__7900_7904 + (1));
seq__7897_7901 = G__7906;
chunk__7898_7902 = G__7907;
count__7899_7903 = G__7908;
i__7900_7904 = G__7909;
continue;
} else {
var temp__4657__auto___7910 = cljs.core.seq.call(null,seq__7897_7901);
if(temp__4657__auto___7910){
var seq__7897_7911__$1 = temp__4657__auto___7910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7897_7911__$1)){
var c__4317__auto___7912 = cljs.core.chunk_first.call(null,seq__7897_7911__$1);
var G__7913 = cljs.core.chunk_rest.call(null,seq__7897_7911__$1);
var G__7914 = c__4317__auto___7912;
var G__7915 = cljs.core.count.call(null,c__4317__auto___7912);
var G__7916 = (0);
seq__7897_7901 = G__7913;
chunk__7898_7902 = G__7914;
count__7899_7903 = G__7915;
i__7900_7904 = G__7916;
continue;
} else {
var v_7917 = cljs.core.first.call(null,seq__7897_7911__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_7917);


var G__7918 = cljs.core.next.call(null,seq__7897_7911__$1);
var G__7919 = null;
var G__7920 = (0);
var G__7921 = (0);
seq__7897_7901 = G__7918;
chunk__7898_7902 = G__7919;
count__7899_7903 = G__7920;
i__7900_7904 = G__7921;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
