// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.forjure');
goog.require('cljs.core');
var ret__4531__auto___5118 = (function (){
buddylistcljs.forjure.assert_args = (function buddylistcljs$forjure$assert_args(var_args){
var args__4500__auto__ = [];
var len__4497__auto___5119 = arguments.length;
var i__4498__auto___5120 = (0);
while(true){
if((i__4498__auto___5120 < len__4497__auto___5119)){
args__4500__auto__.push((arguments[i__4498__auto___5120]));

var G__5121 = (i__4498__auto___5120 + (1));
i__4498__auto___5120 = G__5121;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return buddylistcljs.forjure.assert_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

buddylistcljs.forjure.assert_args.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pairs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,pairs),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"IllegalArgumentException.","IllegalArgumentException.",-1885081185,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," requires ",null,(1),null)),(new cljs.core.List(null,cljs.core.second.call(null,pairs),null,(1),null)),(new cljs.core.List(null," in ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),null,(1),null)),(new cljs.core.List(null,":",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var more = cljs.core.nnext.call(null,pairs);
if(cljs.core.truth_(more)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("buddylistcljs.forjure","assert-args","buddylistcljs.forjure/assert-args",1794218432,null),more);
} else {
return null;
}
})(),null,(1),null)))));
});

buddylistcljs.forjure.assert_args.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
buddylistcljs.forjure.assert_args.cljs$lang$applyTo = (function (seq5115){
var G__5116 = cljs.core.first.call(null,seq5115);
var seq5115__$1 = cljs.core.next.call(null,seq5115);
var G__5117 = cljs.core.first.call(null,seq5115__$1);
var seq5115__$2 = cljs.core.next.call(null,seq5115__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5116,G__5117,seq5115__$2);
});

return null;
})()
;
buddylistcljs.forjure.assert_args.cljs$lang$macro = true;

var ret__4531__auto___5131 = (function (){
/**
 * 💈
 * if-let but allows multiple items and checks if any are nil
 */
buddylistcljs.forjure.if_let_all = (function buddylistcljs$forjure$if_let_all(var_args){
var G__5130 = arguments.length;
switch (G__5130) {
case 4:
return buddylistcljs.forjure.if_let_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___5133 = arguments.length;
var i__4498__auto___5134 = (0);
while(true){
if((i__4498__auto___5134 < len__4497__auto___5133)){
args_arr__4512__auto__.push((arguments[i__4498__auto___5134]));

var G__5135 = (i__4498__auto___5134 + (1));
i__4498__auto___5134 = G__5135;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((5)),(0),null));
return buddylistcljs.forjure.if_let_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4513__auto__);

}
});

buddylistcljs.forjure.if_let_all.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("buddylistcljs.forjure","if-let-all","buddylistcljs.forjure/if-let-all",1996055673,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

buddylistcljs.forjure.if_let_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
buddylistcljs.forjure.assert_args.call(null,cljs.core.vector_QMARK_.call(null,bindings),"a vector for its binding",(oldform == null),"1 or 2 forms after binding vector");

var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5122__auto__","temp__5122__auto__",938973805,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5122__auto__","temp__5122__auto__",938973805,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5122__auto__","temp__5122__auto__",938973805,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
buddylistcljs.forjure.if_let_all.cljs$lang$applyTo = (function (seq5124){
var G__5125 = cljs.core.first.call(null,seq5124);
var seq5124__$1 = cljs.core.next.call(null,seq5124);
var G__5126 = cljs.core.first.call(null,seq5124__$1);
var seq5124__$2 = cljs.core.next.call(null,seq5124__$1);
var G__5127 = cljs.core.first.call(null,seq5124__$2);
var seq5124__$3 = cljs.core.next.call(null,seq5124__$2);
var G__5128 = cljs.core.first.call(null,seq5124__$3);
var seq5124__$4 = cljs.core.next.call(null,seq5124__$3);
var G__5129 = cljs.core.first.call(null,seq5124__$4);
var seq5124__$5 = cljs.core.next.call(null,seq5124__$4);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5125,G__5126,G__5127,G__5128,G__5129,seq5124__$5);
});

buddylistcljs.forjure.if_let_all.cljs$lang$maxFixedArity = (5);

return null;
})()
;
buddylistcljs.forjure.if_let_all.cljs$lang$macro = true;

var ret__4531__auto___5145 = (function (){
/**
 * ✅
 * if-let but allows multiple items and checks if the last item is nil
 */
buddylistcljs.forjure.if_let_last = (function buddylistcljs$forjure$if_let_last(var_args){
var G__5144 = arguments.length;
switch (G__5144) {
case 4:
return buddylistcljs.forjure.if_let_last.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___5147 = arguments.length;
var i__4498__auto___5148 = (0);
while(true){
if((i__4498__auto___5148 < len__4497__auto___5147)){
args_arr__4512__auto__.push((arguments[i__4498__auto___5148]));

var G__5149 = (i__4498__auto___5148 + (1));
i__4498__auto___5148 = G__5149;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((5)),(0),null));
return buddylistcljs.forjure.if_let_last.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4513__auto__);

}
});

buddylistcljs.forjure.if_let_last.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("buddylistcljs.forjure","if-let-last","buddylistcljs.forjure/if-let-last",-907862359,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

buddylistcljs.forjure.if_let_last.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
buddylistcljs.forjure.assert_args.call(null,cljs.core.vector_QMARK_.call(null,bindings),"a vector for its binding",(oldform == null),"1 or 2 forms after binding vector");

var form = cljs.core.last.call(null,cljs.core.pop.call(null,bindings));
var tst = cljs.core.last.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5136__auto__","temp__5136__auto__",-1137373800,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5136__auto__","temp__5136__auto__",-1137373800,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5136__auto__","temp__5136__auto__",-1137373800,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("buddylistcljs.forjure","bindings","buddylistcljs.forjure/bindings",953004284,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("buddylistcljs.forjure","else","buddylistcljs.forjure/else",-1688874114,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
buddylistcljs.forjure.if_let_last.cljs$lang$applyTo = (function (seq5138){
var G__5139 = cljs.core.first.call(null,seq5138);
var seq5138__$1 = cljs.core.next.call(null,seq5138);
var G__5140 = cljs.core.first.call(null,seq5138__$1);
var seq5138__$2 = cljs.core.next.call(null,seq5138__$1);
var G__5141 = cljs.core.first.call(null,seq5138__$2);
var seq5138__$3 = cljs.core.next.call(null,seq5138__$2);
var G__5142 = cljs.core.first.call(null,seq5138__$3);
var seq5138__$4 = cljs.core.next.call(null,seq5138__$3);
var G__5143 = cljs.core.first.call(null,seq5138__$4);
var seq5138__$5 = cljs.core.next.call(null,seq5138__$4);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5139,G__5140,G__5141,G__5142,G__5143,seq5138__$5);
});

buddylistcljs.forjure.if_let_last.cljs$lang$maxFixedArity = (5);

return null;
})()
;
buddylistcljs.forjure.if_let_last.cljs$lang$macro = true;

var ret__4531__auto___5154 = (function (){
/**
 * Turns a list of variables into a map of their names as keywords to their values
 */
buddylistcljs.forjure.keyword_map = (function buddylistcljs$forjure$keyword_map(var_args){
var args__4500__auto__ = [];
var len__4497__auto___5155 = arguments.length;
var i__4498__auto___5156 = (0);
while(true){
if((i__4498__auto___5156 < len__4497__auto___5155)){
args__4500__auto__.push((arguments[i__4498__auto___5156]));

var G__5157 = (i__4498__auto___5156 + (1));
i__4498__auto___5156 = G__5157;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return buddylistcljs.forjure.keyword_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

buddylistcljs.forjure.keyword_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__5150_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.name.call(null,new cljs.core.Symbol(null,"p1__5150#","p1__5150#",-358681750,null))),p1__5150_SHARP_], null));
}),bindings));
});

buddylistcljs.forjure.keyword_map.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
buddylistcljs.forjure.keyword_map.cljs$lang$applyTo = (function (seq5151){
var G__5152 = cljs.core.first.call(null,seq5151);
var seq5151__$1 = cljs.core.next.call(null,seq5151);
var G__5153 = cljs.core.first.call(null,seq5151__$1);
var seq5151__$2 = cljs.core.next.call(null,seq5151__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5152,G__5153,seq5151__$2);
});

return null;
})()
;
buddylistcljs.forjure.keyword_map.cljs$lang$macro = true;

/**
 * returns true if none of the items provided are nill
 */
buddylistcljs.forjure.none_nil = (function buddylistcljs$forjure$none_nil(var_args){
var args__4500__auto__ = [];
var len__4497__auto___5159 = arguments.length;
var i__4498__auto___5160 = (0);
while(true){
if((i__4498__auto___5160 < len__4497__auto___5159)){
args__4500__auto__.push((arguments[i__4498__auto___5160]));

var G__5161 = (i__4498__auto___5160 + (1));
i__4498__auto___5160 = G__5161;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return buddylistcljs.forjure.none_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

buddylistcljs.forjure.none_nil.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.nil_QMARK_,items));
});

buddylistcljs.forjure.none_nil.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
buddylistcljs.forjure.none_nil.cljs$lang$applyTo = (function (seq5158){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5158));
});

