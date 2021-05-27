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
var _STAR_always_update_STAR_4966 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_4966){
return (function (){
var _STAR_always_update_STAR_4967 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_4967;
}});})(_STAR_always_update_STAR_4966))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_4966;
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
var G__4969 = arguments.length;
switch (G__4969) {
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

var seq__4971_4975 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__4972_4976 = null;
var count__4973_4977 = (0);
var i__4974_4978 = (0);
while(true){
if((i__4974_4978 < count__4973_4977)){
var v_4979 = cljs.core._nth.call(null,chunk__4972_4976,i__4974_4978);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_4979);


var G__4980 = seq__4971_4975;
var G__4981 = chunk__4972_4976;
var G__4982 = count__4973_4977;
var G__4983 = (i__4974_4978 + (1));
seq__4971_4975 = G__4980;
chunk__4972_4976 = G__4981;
count__4973_4977 = G__4982;
i__4974_4978 = G__4983;
continue;
} else {
var temp__4657__auto___4984 = cljs.core.seq.call(null,seq__4971_4975);
if(temp__4657__auto___4984){
var seq__4971_4985__$1 = temp__4657__auto___4984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4971_4985__$1)){
var c__4317__auto___4986 = cljs.core.chunk_first.call(null,seq__4971_4985__$1);
var G__4987 = cljs.core.chunk_rest.call(null,seq__4971_4985__$1);
var G__4988 = c__4317__auto___4986;
var G__4989 = cljs.core.count.call(null,c__4317__auto___4986);
var G__4990 = (0);
seq__4971_4975 = G__4987;
chunk__4972_4976 = G__4988;
count__4973_4977 = G__4989;
i__4974_4978 = G__4990;
continue;
} else {
var v_4991 = cljs.core.first.call(null,seq__4971_4985__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_4991);


var G__4992 = cljs.core.next.call(null,seq__4971_4985__$1);
var G__4993 = null;
var G__4994 = (0);
var G__4995 = (0);
seq__4971_4975 = G__4992;
chunk__4972_4976 = G__4993;
count__4973_4977 = G__4994;
i__4974_4978 = G__4995;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
