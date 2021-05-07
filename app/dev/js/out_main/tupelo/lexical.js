// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('tupelo.lexical');
goog.require('cljs.core');
goog.require('tupelo.core.impl');
goog.require('tupelo.schema');
goog.require('schema.core');
cljs.core.enable_console_print_BANG_.call(null);
var output_schema5978_5983 = schema.core.Str;
var input_schema5979_5984 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var ret__3569__auto___5985 = /**
 * Inputs: [x :- s/Any]
 *   Returns: s/Str
 * 
 *   Returns a string specifying the comparison class to be used for sorting a piece of data.
 */
tupelo.lexical.comparison_class = ((function (output_schema5978_5983,input_schema5979_5984){
return (function tupelo$lexical$comparison_class(x){
if((x == null)){
return "";
} else {
if(typeof x === 'number'){
return "Type/Clojure-Number";
} else {
if((x instanceof cljs.core.Keyword)){
return "Type/Clojure-Keyword";
} else {
if(cljs.core.char_QMARK_.call(null,x)){
return "Type/Clojure-Character";
} else {
if(typeof x === 'string'){
return "Type/Clojure-String";
} else {
if(cljs.core.boolean_QMARK_.call(null,x)){
return "Type/Clojure-Boolean";
} else {
if((x instanceof cljs.core.Symbol)){
return "Type/Clojure-Symbol";
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return "Type/Clojure-Sequential";
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var type_str = tupelo.core.impl.type_name_str.call(null,x);
return type_str;
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return "Type/Clojure-IPersistentSet";
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return "Type/Clojure-IPersistentMap";
} else {
if(cljs.core.truth_(tupelo.core.impl.native_array_QMARK_.call(null,x))){
return "Type/Platform-Native-Array";
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition1$ & (2048))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IComparable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IComparable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IComparable,x))){
return tupelo.core.impl.type_name_str.call(null,x);
} else {
throw cljs.core.ex_info.call(null,["cc-cmp does not implement comparison of values with class name=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tupelo.core.impl.type_name_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null));

}
}
}
}
}
}
}
}
}
}
}
}
}
});})(output_schema5978_5983,input_schema5979_5984))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.lexical.comparison_class),schema.core.__GT_FnSchema.call(null,output_schema5978_5983,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema5979_5984], null)));

tupelo.lexical.compare_seq_lexi = (function tupelo$lexical$compare_seq_lexi(cmpr_fn,x,y){
var x__$1 = x;
var y__$1 = y;
while(true){
if(cljs.core.seq.call(null,x__$1)){
if(cljs.core.seq.call(null,y__$1)){
var c = cmpr_fn.call(null,cljs.core.first.call(null,x__$1),cljs.core.first.call(null,y__$1));
if((c === (0))){
var G__5986 = cljs.core.rest.call(null,x__$1);
var G__5987 = cljs.core.rest.call(null,y__$1);
x__$1 = G__5986;
y__$1 = G__5987;
continue;
} else {
return c;
}
} else {
return (1);
}
} else {
if(cljs.core.seq.call(null,y__$1)){
return (-1);
} else {
return (0);
}
}
break;
}
});
tupelo.lexical.compare_vec_lexi = (function tupelo$lexical$compare_vec_lexi(cmpr_fn,x,y){
var x_len = cljs.core.count.call(null,x);
var y_len = cljs.core.count.call(null,y);
var len = (function (){var x__4007__auto__ = x_len;
var y__4008__auto__ = y_len;
return ((x__4007__auto__ < y__4008__auto__) ? x__4007__auto__ : y__4008__auto__);
})();
var i = (0);
while(true){
if((i === len)){
return cljs.core.compare.call(null,x_len,y_len);
} else {
var c = cmpr_fn.call(null,x.call(null,i),y.call(null,i));
if((c === (0))){
var G__5988 = (i + (1));
i = G__5988;
continue;
} else {
return c;
}
}
break;
}
});
tupelo.lexical.compare_array_lexi = (function tupelo$lexical$compare_array_lexi(cmpr_fn,x,y){
var x_len = x.length;
var y_len = y.length;
var len = (function (){var x__4007__auto__ = x_len;
var y__4008__auto__ = y_len;
return ((x__4007__auto__ < y__4008__auto__) ? x__4007__auto__ : y__4008__auto__);
})();
var i = (0);
while(true){
if((i === len)){
return cljs.core.compare.call(null,x_len,y_len);
} else {
var c = cmpr_fn.call(null,(x[i]),(y[i]));
if((c === (0))){
var G__5989 = (i + (1));
i = G__5989;
continue;
} else {
return c;
}
}
break;
}
});
tupelo.lexical.compare_generic = (function tupelo$lexical$compare_generic(x,y){
var x_class_str = tupelo.lexical.comparison_class.call(null,x);
var y_class_str = tupelo.lexical.comparison_class.call(null,y);
var compare_result = cljs.core.compare.call(null,x_class_str,y_class_str);
if(cljs.core.not_EQ_.call(null,compare_result,(0))){
return compare_result;
} else {
if(cljs.core._EQ_.call(null,x_class_str,"Type/Clojure-IPersistentSet")){
return tupelo.lexical.compare_seq_lexi.call(null,tupelo.lexical.compare_generic,cljs.core.sort.call(null,tupelo.lexical.compare_generic,x),cljs.core.sort.call(null,tupelo.lexical.compare_generic,y));
} else {
if(cljs.core.record_QMARK_.call(null,x)){
return tupelo.lexical.compare_seq_lexi.call(null,tupelo.lexical.compare_generic,cljs.core.sort_by.call(null,cljs.core.key,tupelo.lexical.compare_generic,cljs.core.seq.call(null,x)),cljs.core.sort_by.call(null,cljs.core.key,tupelo.lexical.compare_generic,cljs.core.seq.call(null,y)));
} else {
if(cljs.core._EQ_.call(null,x_class_str,"Type/Clojure-IPersistentMap")){
return tupelo.lexical.compare_seq_lexi.call(null,tupelo.lexical.compare_generic,cljs.core.sort_by.call(null,cljs.core.key,tupelo.lexical.compare_generic,cljs.core.seq.call(null,x)),cljs.core.sort_by.call(null,cljs.core.key,tupelo.lexical.compare_generic,cljs.core.seq.call(null,y)));
} else {
if(cljs.core._EQ_.call(null,x_class_str,"Type/Platform-Native-Array")){
return tupelo.lexical.compare_array_lexi.call(null,tupelo.lexical.compare_generic,x,y);
} else {
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core.vector_QMARK_.call(null,y)))){
return tupelo.lexical.compare_vec_lexi.call(null,tupelo.lexical.compare_generic,x,y);
} else {
if(cljs.core._EQ_.call(null,x_class_str,"Type/Clojure-Sequential")){
return tupelo.lexical.compare_seq_lexi.call(null,tupelo.lexical.compare_generic,x,y);
} else {
return cljs.core.compare.call(null,x,y);

}
}
}
}
}
}
}
});
var output_schema5990_5994 = schema.core.Int;
var input_schema5991_5995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Vec,cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null))),schema.core.one.call(null,tupelo.schema.Vec,cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null)))], null);
var ret__3569__auto___5996 = /**
 * Inputs: [a :- tsk/Vec b :- tsk/Vec]
 *   Returns: s/Int
 */
tupelo.lexical.compare_lex = ((function (output_schema5990_5994,input_schema5991_5995){
return (function tupelo$lexical$compare_lex(a,b){
return tupelo.lexical.compare_generic.call(null,a,b);
});})(output_schema5990_5994,input_schema5991_5995))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.lexical.compare_lex),schema.core.__GT_FnSchema.call(null,output_schema5990_5994,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema5991_5995], null)));
