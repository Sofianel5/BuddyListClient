// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (){
});

reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(){
return (new reagent.impl.template.NativeWrapper());
});

reagent.impl.template.named_QMARK_ = (function reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.template.named_QMARK_.call(null,x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof reagent.impl.template.NativeWrapper)));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.template.named_QMARK_.call(null,k)){
var temp__4659__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__4659__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__4659__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.js_val_QMARK_ = (function reagent$impl$template$js_val_QMARK_(x){
return !(("object" === goog.typeOf(x)));
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__6911 = o;
(G__6911[reagent.impl.template.cached_prop_name.call(null,k)] = reagent.impl.template.convert_prop_value.call(null,v));

return G__6911;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__6912__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__6912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6913__i = 0, G__6913__a = new Array(arguments.length -  0);
while (G__6913__i < G__6913__a.length) {G__6913__a[G__6913__i] = arguments[G__6913__i + 0]; ++G__6913__i;}
  args = new cljs.core.IndexedSeq(G__6913__a,0,null);
} 
return G__6912__delegate.call(this,args);};
G__6912.cljs$lang$maxFixedArity = 0;
G__6912.cljs$lang$applyTo = (function (arglist__6914){
var args = cljs.core.seq(arglist__6914);
return G__6912__delegate(args);
});
G__6912.cljs$core$IFn$_invoke$arity$variadic = G__6912__delegate;
return G__6912;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
reagent.impl.template.oset = (function reagent$impl$template$oset(o,k,v){
var G__6915 = (((o == null))?({}):o);
(G__6915[k] = v);

return G__6915;
});
reagent.impl.template.oget = (function reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(p,id_class){
var id = (id_class["id"]);
var p__$1 = ((((!((id == null))) && ((reagent.impl.template.oget.call(null,p,"id") == null))))?reagent.impl.template.oset.call(null,p,"id",id):p);
var temp__4659__auto__ = (id_class["className"]);
if((temp__4659__auto__ == null)){
return p__$1;
} else {
var class$ = temp__4659__auto__;
var old = reagent.impl.template.oget.call(null,p__$1,"className");
return reagent.impl.template.oset.call(null,p__$1,"className",(((old == null))?class$:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old)].join('')));
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
return reagent.impl.template.set_id_class.call(null,reagent.impl.template.convert_prop_value.call(null,props),id_class);
});
reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.template.has_selection_api_QMARK_ = (function reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,reagent.impl.template.these_inputs_have_selection_api,input_type);
});
reagent.impl.template.input_set_value = (function reagent$impl$template$input_set_value(this$){
var temp__4661__auto__ = (this$["cljsInputElement"]);
if((temp__4661__auto__ == null)){
return null;
} else {
var node = temp__4661__auto__;
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
if(cljs.core.not_EQ_.call(null,rendered_value,dom_value)){
if(!((((node === (document["activeElement"]))) && (reagent.impl.template.has_selection_api_QMARK_.call(null,(node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string')))){
(this$["cljsDOMValue"] = rendered_value);

return (node["value"] = rendered_value);
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.call(null,node_value,dom_value)){
return reagent.impl.batching.do_after_render.call(null,((function (node_value,rendered_value,dom_value,node,temp__4661__auto__){
return (function (){
return reagent.impl.template.input_set_value.call(null,this$);
});})(node_value,rendered_value,dom_value,node,temp__4661__auto__))
);
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count.call(null,rendered_value) - existing_offset_from_end);
(this$["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
} else {
return null;
}
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_after_render.call(null,(function (){
return reagent.impl.template.input_set_value.call(null,this$);
}));
}

return on_change.call(null,e);
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__3909__auto__ = !((jsprops == null));
if(and__3909__auto__){
var and__3909__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__3909__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__3909__auto____$1;
}
} else {
return and__3909__auto__;
}
})())){
var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
if(((this$["cljsInputElement"]) == null)){
(this$["cljsDOMValue"] = value);
} else {
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__6918 = jsprops;
(G__6918["defaultValue"] = value);

(G__6918["onChange"] = ((function (G__6918,v,value,on_change){
return (function (p1__6916_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__6916_SHARP_);
});})(G__6918,v,value,on_change))
);

(G__6918["ref"] = ((function (G__6918,v,value,on_change){
return (function (p1__6917_SHARP_){
return (this$["cljsInputElement"] = p1__6917_SHARP_);
});})(G__6918,v,value,on_change))
);

return G__6918;
} else {
return null;
}
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
var G__6919 = x;
switch (G__6919) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_set_value,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class.call(null,reagent.impl.template.input_spec);
} else {
}

return reagent.impl.template.reagent_input_class;
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__6921 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__6921,(0),null);
var id = cljs.core.nth.call(null,vec__6921,(1),null);
var class$ = cljs.core.nth.call(null,vec__6921,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace.call(null,class$,/\./," "));

return ({"name": tag, "id": id, "className": class$__$1});
});
reagent.impl.template.try_get_key = (function reagent$impl$template$try_get_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e6924){var e = e6924;
return null;
}});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return reagent.impl.template.try_get_key.call(null,x);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__4659__auto__ = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));
if((temp__4659__auto__ == null)){
return reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else {
var k = temp__4659__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.component.as_class.call(null,tag);
var jsprops = ({"argv": v});
var temp__4661__auto___6925 = reagent.impl.template.key_from_vec.call(null,v);
if((temp__4661__auto___6925 == null)){
} else {
var key_6926 = temp__4661__auto___6925;
(jsprops["key"] = key_6926);
}

return (reagent.impl.util.react["createElement"])(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
var G__6927 = (new reagent.impl.template.NativeWrapper());
(G__6927["name"] = c);

(G__6927["id"] = null);

(G__6927["class"] = null);

return G__6927;
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__4659__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.tag_name_cache,x);
if((temp__4659__auto__ == null)){
return (reagent.impl.template.tag_name_cache[x] = reagent.impl.template.parse_tag.call(null,x));
} else {
var s = temp__4659__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.template.input_component_QMARK_.call(null,comp)){
return reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input.call(null),argv,comp,jsprops,first_child], null),cljs.core.meta.call(null,argv)));
} else {
var key = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,argv));
var p = (((key == null))?jsprops:reagent.impl.template.oset.call(null,jsprops,"key",key));
return reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
});
reagent.impl.template.str_coll = (function reagent$impl$template$str_coll(coll){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)].join('');

});
reagent.impl.template.hiccup_err = (function reagent$impl$template$hiccup_err(var_args){
var args__4500__auto__ = [];
var len__4497__auto___6931 = arguments.length;
var i__4498__auto___6932 = (0);
while(true){
if((i__4498__auto___6932 < len__4497__auto___6931)){
args__4500__auto__.push((arguments[i__4498__auto___6932]));

var G__6933 = (i__4498__auto___6932 + (1));
i__4498__auto___6932 = G__6933;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,msg)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.str_coll.call(null,v)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))].join('');
});

reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq6929){
var G__6930 = cljs.core.first.call(null,seq6929);
var seq6929__$1 = cljs.core.next.call(null,seq6929);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6930,seq6929__$1);
});

reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
while(true){

var tag = cljs.core.nth.call(null,v,(0),null);

if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
var G__6934 = pos;
switch (G__6934) {
case (-1):
return reagent.impl.template.native_element.call(null,reagent.impl.template.cached_parse.call(null,n),v,(1));

break;
case (0):
var comp = cljs.core.nth.call(null,v,(1),null);


return reagent.impl.template.native_element.call(null,({"name": comp}),v,(2));

break;
default:
var G__6936 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,v,(0),cljs.core.subs.call(null,n,(pos + (1))))], null);
v = G__6936;
continue;

}
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element.call(null,tag,v,(1));
} else {
return reagent.impl.template.reag_element.call(null,tag,v);

}
}
break;
}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return reagent.impl.template.expand_seq.call(null,x);

} else {
if(reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.call(null,x);
} else {
return x;

}
}
}
}
}
});
reagent.impl.component.as_element = reagent.impl.template.as_element;
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.call(null,s);
var n__4374__auto___6938 = a.length;
var i_6939 = (0);
while(true){
if((i_6939 < n__4374__auto___6938)){
(a[i_6939] = reagent.impl.template.as_element.call(null,(a[i_6939])));

var G__6940 = (i_6939 + (1));
i_6939 = G__6940;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.call(null,s);
var n__4374__auto___6941 = a.length;
var i_6942 = (0);
while(true){
if((i_6942 < n__4374__auto___6941)){
var val_6943 = (a[i_6942]);
if(((cljs.core.vector_QMARK_.call(null,val_6943)) && ((reagent.impl.template.key_from_vec.call(null,val_6943) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_6942] = reagent.impl.template.as_element.call(null,val_6943));

var G__6944 = (i_6942 + (1));
i_6942 = G__6944;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__6945 = reagent.ratom.check_derefs.call(null,((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx);
});})(ctx))
);
var res = cljs.core.nth.call(null,vec__6945,(0),null);
var derefed = cljs.core.nth.call(null,vec__6945,(1),null);
if(cljs.core.truth_(derefed)){
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__6948 = (cljs.core.count.call(null,argv) - first_child);
switch (G__6948) {
case (0):
return (reagent.impl.util.react["createElement"])(comp,jsprops);

break;
case (1):
return (reagent.impl.util.react["createElement"])(comp,jsprops,reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return (reagent.impl.util.react["createElement"]).apply(null,cljs.core.reduce_kv.call(null,((function (G__6948){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
});})(G__6948))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=template.js.map
