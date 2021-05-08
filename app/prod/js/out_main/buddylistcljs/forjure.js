// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.forjure');
goog.require('cljs.core');
goog.require('clojure.string');
var ret__4531__auto___1354 = (function (){
buddylistcljs.forjure.assert_args = (function buddylistcljs$forjure$assert_args(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1355 = arguments.length;
var i__4498__auto___1356 = (0);
while(true){
if((i__4498__auto___1356 < len__4497__auto___1355)){
args__4500__auto__.push((arguments[i__4498__auto___1356]));

var G__1357 = (i__4498__auto___1356 + (1));
i__4498__auto___1356 = G__1357;
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
buddylistcljs.forjure.assert_args.cljs$lang$applyTo = (function (seq1351){
var G__1352 = cljs.core.first.call(null,seq1351);
var seq1351__$1 = cljs.core.next.call(null,seq1351);
var G__1353 = cljs.core.first.call(null,seq1351__$1);
var seq1351__$2 = cljs.core.next.call(null,seq1351__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1352,G__1353,seq1351__$2);
});

return null;
})()
;
buddylistcljs.forjure.assert_args.cljs$lang$macro = true;

var ret__4531__auto___1367 = (function (){
/**
 * 💈
 * if-let but allows multiple items and checks if any are nil
 */
buddylistcljs.forjure.if_let_all = (function buddylistcljs$forjure$if_let_all(var_args){
var G__1366 = arguments.length;
switch (G__1366) {
case 4:
return buddylistcljs.forjure.if_let_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___1369 = arguments.length;
var i__4498__auto___1370 = (0);
while(true){
if((i__4498__auto___1370 < len__4497__auto___1369)){
args_arr__4512__auto__.push((arguments[i__4498__auto___1370]));

var G__1371 = (i__4498__auto___1370 + (1));
i__4498__auto___1370 = G__1371;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1358__auto__","temp__1358__auto__",-996333066,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1358__auto__","temp__1358__auto__",-996333066,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1358__auto__","temp__1358__auto__",-996333066,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
buddylistcljs.forjure.if_let_all.cljs$lang$applyTo = (function (seq1360){
var G__1361 = cljs.core.first.call(null,seq1360);
var seq1360__$1 = cljs.core.next.call(null,seq1360);
var G__1362 = cljs.core.first.call(null,seq1360__$1);
var seq1360__$2 = cljs.core.next.call(null,seq1360__$1);
var G__1363 = cljs.core.first.call(null,seq1360__$2);
var seq1360__$3 = cljs.core.next.call(null,seq1360__$2);
var G__1364 = cljs.core.first.call(null,seq1360__$3);
var seq1360__$4 = cljs.core.next.call(null,seq1360__$3);
var G__1365 = cljs.core.first.call(null,seq1360__$4);
var seq1360__$5 = cljs.core.next.call(null,seq1360__$4);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1361,G__1362,G__1363,G__1364,G__1365,seq1360__$5);
});

buddylistcljs.forjure.if_let_all.cljs$lang$maxFixedArity = (5);

return null;
})()
;
buddylistcljs.forjure.if_let_all.cljs$lang$macro = true;

var ret__4531__auto___1381 = (function (){
/**
 * ✅
 * if-let but allows multiple items and checks if the last item is nil
 */
buddylistcljs.forjure.if_let_last = (function buddylistcljs$forjure$if_let_last(var_args){
var G__1380 = arguments.length;
switch (G__1380) {
case 4:
return buddylistcljs.forjure.if_let_last.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___1383 = arguments.length;
var i__4498__auto___1384 = (0);
while(true){
if((i__4498__auto___1384 < len__4497__auto___1383)){
args_arr__4512__auto__.push((arguments[i__4498__auto___1384]));

var G__1385 = (i__4498__auto___1384 + (1));
i__4498__auto___1384 = G__1385;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1372__auto__","temp__1372__auto__",1940740279,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1372__auto__","temp__1372__auto__",1940740279,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1372__auto__","temp__1372__auto__",1940740279,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("buddylistcljs.forjure","bindings","buddylistcljs.forjure/bindings",953004284,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("buddylistcljs.forjure","else","buddylistcljs.forjure/else",-1688874114,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
buddylistcljs.forjure.if_let_last.cljs$lang$applyTo = (function (seq1374){
var G__1375 = cljs.core.first.call(null,seq1374);
var seq1374__$1 = cljs.core.next.call(null,seq1374);
var G__1376 = cljs.core.first.call(null,seq1374__$1);
var seq1374__$2 = cljs.core.next.call(null,seq1374__$1);
var G__1377 = cljs.core.first.call(null,seq1374__$2);
var seq1374__$3 = cljs.core.next.call(null,seq1374__$2);
var G__1378 = cljs.core.first.call(null,seq1374__$3);
var seq1374__$4 = cljs.core.next.call(null,seq1374__$3);
var G__1379 = cljs.core.first.call(null,seq1374__$4);
var seq1374__$5 = cljs.core.next.call(null,seq1374__$4);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1375,G__1376,G__1377,G__1378,G__1379,seq1374__$5);
});

buddylistcljs.forjure.if_let_last.cljs$lang$maxFixedArity = (5);

return null;
})()
;
buddylistcljs.forjure.if_let_last.cljs$lang$macro = true;

var ret__4531__auto___1390 = (function (){
/**
 * Turns a list of variables into a map of their names as keywords to their values
 */
buddylistcljs.forjure.keyword_map = (function buddylistcljs$forjure$keyword_map(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1391 = arguments.length;
var i__4498__auto___1392 = (0);
while(true){
if((i__4498__auto___1392 < len__4497__auto___1391)){
args__4500__auto__.push((arguments[i__4498__auto___1392]));

var G__1393 = (i__4498__auto___1392 + (1));
i__4498__auto___1392 = G__1393;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return buddylistcljs.forjure.keyword_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

buddylistcljs.forjure.keyword_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__1386_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.name.call(null,new cljs.core.Symbol(null,"p1__1386#","p1__1386#",1528663664,null))),p1__1386_SHARP_], null));
}),bindings));
});

buddylistcljs.forjure.keyword_map.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
buddylistcljs.forjure.keyword_map.cljs$lang$applyTo = (function (seq1387){
var G__1388 = cljs.core.first.call(null,seq1387);
var seq1387__$1 = cljs.core.next.call(null,seq1387);
var G__1389 = cljs.core.first.call(null,seq1387__$1);
var seq1387__$2 = cljs.core.next.call(null,seq1387__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1388,G__1389,seq1387__$2);
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
var len__4497__auto___1395 = arguments.length;
var i__4498__auto___1396 = (0);
while(true){
if((i__4498__auto___1396 < len__4497__auto___1395)){
args__4500__auto__.push((arguments[i__4498__auto___1396]));

var G__1397 = (i__4498__auto___1396 + (1));
i__4498__auto___1396 = G__1397;
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
buddylistcljs.forjure.none_nil.cljs$lang$applyTo = (function (seq1394){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1394));
});

var ret__4531__auto___1398 = /**
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
buddylistcljs.forjure.dissoc_in = (function buddylistcljs$forjure$dissoc_in(m,p__1399){
var vec__1400 = p__1399;
var seq__1401 = cljs.core.seq.call(null,vec__1400);
var first__1402 = cljs.core.first.call(null,seq__1401);
var seq__1401__$1 = cljs.core.next.call(null,seq__1401);
var k = first__1402;
var ks = seq__1401__$1;
var keys = vec__1400;
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
return (function buddylistcljs$forjure$parse_url_$_iter__1404(s__1405){
return (new cljs.core.LazySeq(null,((function (param_strs){
return (function (){
var s__1405__$1 = s__1405;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__1405__$1);
if(temp__4657__auto__){
var s__1405__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1405__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__1405__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__1407 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__1406 = (0);
while(true){
if((i__1406 < size__4289__auto__)){
var vec__1408 = cljs.core._nth.call(null,c__4288__auto__,i__1406);
var k = cljs.core.nth.call(null,vec__1408,(0),null);
var v = cljs.core.nth.call(null,vec__1408,(1),null);
cljs.core.chunk_append.call(null,b__1407,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null));

var G__1414 = (i__1406 + (1));
i__1406 = G__1414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1407),buddylistcljs$forjure$parse_url_$_iter__1404.call(null,cljs.core.chunk_rest.call(null,s__1405__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1407),null);
}
} else {
var vec__1411 = cljs.core.first.call(null,s__1405__$2);
var k = cljs.core.nth.call(null,vec__1411,(0),null);
var v = cljs.core.nth.call(null,vec__1411,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null),buddylistcljs$forjure$parse_url_$_iter__1404.call(null,cljs.core.rest.call(null,s__1405__$2)));
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
return (function (p1__1403_SHARP_){
return clojure.string.split.call(null,p1__1403_SHARP_,/=/);
});})(iter__4290__auto__,param_strs))
,param_strs));
})());
});
