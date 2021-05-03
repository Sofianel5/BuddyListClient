// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.forjure');
goog.require('cljs.core');
goog.require('clojure.string');
var ret__4531__auto___1352 = (function (){
buddylistcljs.forjure.assert_args = (function buddylistcljs$forjure$assert_args(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1353 = arguments.length;
var i__4498__auto___1354 = (0);
while(true){
if((i__4498__auto___1354 < len__4497__auto___1353)){
args__4500__auto__.push((arguments[i__4498__auto___1354]));

var G__1355 = (i__4498__auto___1354 + (1));
i__4498__auto___1354 = G__1355;
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
buddylistcljs.forjure.assert_args.cljs$lang$applyTo = (function (seq1349){
var G__1350 = cljs.core.first.call(null,seq1349);
var seq1349__$1 = cljs.core.next.call(null,seq1349);
var G__1351 = cljs.core.first.call(null,seq1349__$1);
var seq1349__$2 = cljs.core.next.call(null,seq1349__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1350,G__1351,seq1349__$2);
});

return null;
})()
;
buddylistcljs.forjure.assert_args.cljs$lang$macro = true;

var ret__4531__auto___1365 = (function (){
/**
 * 💈
 * if-let but allows multiple items and checks if any are nil
 */
buddylistcljs.forjure.if_let_all = (function buddylistcljs$forjure$if_let_all(var_args){
var G__1364 = arguments.length;
switch (G__1364) {
case 4:
return buddylistcljs.forjure.if_let_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___1367 = arguments.length;
var i__4498__auto___1368 = (0);
while(true){
if((i__4498__auto___1368 < len__4497__auto___1367)){
args_arr__4512__auto__.push((arguments[i__4498__auto___1368]));

var G__1369 = (i__4498__auto___1368 + (1));
i__4498__auto___1368 = G__1369;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1356__auto__","temp__1356__auto__",1985468547,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1356__auto__","temp__1356__auto__",1985468547,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1356__auto__","temp__1356__auto__",1985468547,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
buddylistcljs.forjure.if_let_all.cljs$lang$applyTo = (function (seq1358){
var G__1359 = cljs.core.first.call(null,seq1358);
var seq1358__$1 = cljs.core.next.call(null,seq1358);
var G__1360 = cljs.core.first.call(null,seq1358__$1);
var seq1358__$2 = cljs.core.next.call(null,seq1358__$1);
var G__1361 = cljs.core.first.call(null,seq1358__$2);
var seq1358__$3 = cljs.core.next.call(null,seq1358__$2);
var G__1362 = cljs.core.first.call(null,seq1358__$3);
var seq1358__$4 = cljs.core.next.call(null,seq1358__$3);
var G__1363 = cljs.core.first.call(null,seq1358__$4);
var seq1358__$5 = cljs.core.next.call(null,seq1358__$4);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1359,G__1360,G__1361,G__1362,G__1363,seq1358__$5);
});

buddylistcljs.forjure.if_let_all.cljs$lang$maxFixedArity = (5);

return null;
})()
;
buddylistcljs.forjure.if_let_all.cljs$lang$macro = true;

var ret__4531__auto___1379 = (function (){
/**
 * ✅
 * if-let but allows multiple items and checks if the last item is nil
 */
buddylistcljs.forjure.if_let_last = (function buddylistcljs$forjure$if_let_last(var_args){
var G__1378 = arguments.length;
switch (G__1378) {
case 4:
return buddylistcljs.forjure.if_let_last.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___1381 = arguments.length;
var i__4498__auto___1382 = (0);
while(true){
if((i__4498__auto___1382 < len__4497__auto___1381)){
args_arr__4512__auto__.push((arguments[i__4498__auto___1382]));

var G__1383 = (i__4498__auto___1382 + (1));
i__4498__auto___1382 = G__1383;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1370__auto__","temp__1370__auto__",-395920534,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1370__auto__","temp__1370__auto__",-395920534,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1370__auto__","temp__1370__auto__",-395920534,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("buddylistcljs.forjure","bindings","buddylistcljs.forjure/bindings",953004284,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("buddylistcljs.forjure","else","buddylistcljs.forjure/else",-1688874114,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
buddylistcljs.forjure.if_let_last.cljs$lang$applyTo = (function (seq1372){
var G__1373 = cljs.core.first.call(null,seq1372);
var seq1372__$1 = cljs.core.next.call(null,seq1372);
var G__1374 = cljs.core.first.call(null,seq1372__$1);
var seq1372__$2 = cljs.core.next.call(null,seq1372__$1);
var G__1375 = cljs.core.first.call(null,seq1372__$2);
var seq1372__$3 = cljs.core.next.call(null,seq1372__$2);
var G__1376 = cljs.core.first.call(null,seq1372__$3);
var seq1372__$4 = cljs.core.next.call(null,seq1372__$3);
var G__1377 = cljs.core.first.call(null,seq1372__$4);
var seq1372__$5 = cljs.core.next.call(null,seq1372__$4);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1373,G__1374,G__1375,G__1376,G__1377,seq1372__$5);
});

buddylistcljs.forjure.if_let_last.cljs$lang$maxFixedArity = (5);

return null;
})()
;
buddylistcljs.forjure.if_let_last.cljs$lang$macro = true;

var ret__4531__auto___1388 = (function (){
/**
 * Turns a list of variables into a map of their names as keywords to their values
 */
buddylistcljs.forjure.keyword_map = (function buddylistcljs$forjure$keyword_map(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1389 = arguments.length;
var i__4498__auto___1390 = (0);
while(true){
if((i__4498__auto___1390 < len__4497__auto___1389)){
args__4500__auto__.push((arguments[i__4498__auto___1390]));

var G__1391 = (i__4498__auto___1390 + (1));
i__4498__auto___1390 = G__1391;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return buddylistcljs.forjure.keyword_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

buddylistcljs.forjure.keyword_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__1384_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.name.call(null,new cljs.core.Symbol(null,"p1__1384#","p1__1384#",-1163828937,null))),p1__1384_SHARP_], null));
}),bindings));
});

buddylistcljs.forjure.keyword_map.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
buddylistcljs.forjure.keyword_map.cljs$lang$applyTo = (function (seq1385){
var G__1386 = cljs.core.first.call(null,seq1385);
var seq1385__$1 = cljs.core.next.call(null,seq1385);
var G__1387 = cljs.core.first.call(null,seq1385__$1);
var seq1385__$2 = cljs.core.next.call(null,seq1385__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1386,G__1387,seq1385__$2);
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
var len__4497__auto___1393 = arguments.length;
var i__4498__auto___1394 = (0);
while(true){
if((i__4498__auto___1394 < len__4497__auto___1393)){
args__4500__auto__.push((arguments[i__4498__auto___1394]));

var G__1395 = (i__4498__auto___1394 + (1));
i__4498__auto___1394 = G__1395;
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
buddylistcljs.forjure.none_nil.cljs$lang$applyTo = (function (seq1392){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1392));
});

var ret__4531__auto___1396 = /**
 * recieves a list of boolean expressions followed by a default value to return if the expression prior to it is false
 */
buddylistcljs.forjure.if_assert = (function buddylistcljs$forjure$if_assert(_AMPERSAND_form,_AMPERSAND_env,bindings){
return cljs.core.deref.call(null,bindings);
});
buddylistcljs.forjure.if_assert.cljs$lang$macro = true;

/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
buddylistcljs.forjure.dissoc_in = (function buddylistcljs$forjure$dissoc_in(m,p__1397){
var vec__1398 = p__1397;
var seq__1399 = cljs.core.seq.call(null,vec__1398);
var first__1400 = cljs.core.first.call(null,seq__1399);
var seq__1399__$1 = cljs.core.next.call(null,seq__1399);
var k = first__1400;
var ks = seq__1399__$1;
var keys = vec__1398;
if(ks){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var newmap = buddylistcljs.forjure.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
/**
 * Parse URL parameters into a hashmap
 */
buddylistcljs.forjure.parse_url = (function buddylistcljs$forjure$parse_url(){
var param_strs = clojure.string.split.call(null,cljs.core.last.call(null,clojure.string.split.call(null,window.location,/\?/)),/\&/);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4290__auto__ = ((function (param_strs){
return (function buddylistcljs$forjure$parse_url_$_iter__1402(s__1403){
return (new cljs.core.LazySeq(null,((function (param_strs){
return (function (){
var s__1403__$1 = s__1403;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__1403__$1);
if(temp__4657__auto__){
var s__1403__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1403__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__1403__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__1405 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__1404 = (0);
while(true){
if((i__1404 < size__4289__auto__)){
var vec__1406 = cljs.core._nth.call(null,c__4288__auto__,i__1404);
var k = cljs.core.nth.call(null,vec__1406,(0),null);
var v = cljs.core.nth.call(null,vec__1406,(1),null);
cljs.core.chunk_append.call(null,b__1405,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null));

var G__1412 = (i__1404 + (1));
i__1404 = G__1412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1405),buddylistcljs$forjure$parse_url_$_iter__1402.call(null,cljs.core.chunk_rest.call(null,s__1403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1405),null);
}
} else {
var vec__1409 = cljs.core.first.call(null,s__1403__$2);
var k = cljs.core.nth.call(null,vec__1409,(0),null);
var v = cljs.core.nth.call(null,vec__1409,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null),buddylistcljs$forjure$parse_url_$_iter__1402.call(null,cljs.core.rest.call(null,s__1403__$2)));
}
} else {
return null;
}
break;
}
});})(param_strs))
,null,null));
});})(param_strs))
;
return iter__4290__auto__.call(null,cljs.core.map.call(null,((function (iter__4290__auto__,param_strs){
return (function (p1__1401_SHARP_){
return clojure.string.split.call(null,p1__1401_SHARP_,/=/);
});})(iter__4290__auto__,param_strs))
,param_strs));
})());
});
