// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.forjure');
goog.require('cljs.core');
var ret__4531__auto___1340 = (function (){
buddylistcljs.forjure.assert_args = (function buddylistcljs$forjure$assert_args(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1341 = arguments.length;
var i__4498__auto___1342 = (0);
while(true){
if((i__4498__auto___1342 < len__4497__auto___1341)){
args__4500__auto__.push((arguments[i__4498__auto___1342]));

var G__1343 = (i__4498__auto___1342 + (1));
i__4498__auto___1342 = G__1343;
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
buddylistcljs.forjure.assert_args.cljs$lang$applyTo = (function (seq1337){
var G__1338 = cljs.core.first.call(null,seq1337);
var seq1337__$1 = cljs.core.next.call(null,seq1337);
var G__1339 = cljs.core.first.call(null,seq1337__$1);
var seq1337__$2 = cljs.core.next.call(null,seq1337__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1338,G__1339,seq1337__$2);
});

return null;
})()
;
buddylistcljs.forjure.assert_args.cljs$lang$macro = true;

var ret__4531__auto___1353 = (function (){
/**
 * 💈
 * if-let but allows multiple items and checks if any are nil
 */
buddylistcljs.forjure.if_let_all = (function buddylistcljs$forjure$if_let_all(var_args){
var G__1352 = arguments.length;
switch (G__1352) {
case 4:
return buddylistcljs.forjure.if_let_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___1355 = arguments.length;
var i__4498__auto___1356 = (0);
while(true){
if((i__4498__auto___1356 < len__4497__auto___1355)){
args_arr__4512__auto__.push((arguments[i__4498__auto___1356]));

var G__1357 = (i__4498__auto___1356 + (1));
i__4498__auto___1356 = G__1357;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1344__auto__","temp__1344__auto__",-82638432,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1344__auto__","temp__1344__auto__",-82638432,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1344__auto__","temp__1344__auto__",-82638432,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
buddylistcljs.forjure.if_let_all.cljs$lang$applyTo = (function (seq1346){
var G__1347 = cljs.core.first.call(null,seq1346);
var seq1346__$1 = cljs.core.next.call(null,seq1346);
var G__1348 = cljs.core.first.call(null,seq1346__$1);
var seq1346__$2 = cljs.core.next.call(null,seq1346__$1);
var G__1349 = cljs.core.first.call(null,seq1346__$2);
var seq1346__$3 = cljs.core.next.call(null,seq1346__$2);
var G__1350 = cljs.core.first.call(null,seq1346__$3);
var seq1346__$4 = cljs.core.next.call(null,seq1346__$3);
var G__1351 = cljs.core.first.call(null,seq1346__$4);
var seq1346__$5 = cljs.core.next.call(null,seq1346__$4);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1347,G__1348,G__1349,G__1350,G__1351,seq1346__$5);
});

buddylistcljs.forjure.if_let_all.cljs$lang$maxFixedArity = (5);

return null;
})()
;
buddylistcljs.forjure.if_let_all.cljs$lang$macro = true;

var ret__4531__auto___1367 = (function (){
/**
 * ✅
 * if-let but allows multiple items and checks if the last item is nil
 */
buddylistcljs.forjure.if_let_last = (function buddylistcljs$forjure$if_let_last(var_args){
var G__1366 = arguments.length;
switch (G__1366) {
case 4:
return buddylistcljs.forjure.if_let_last.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1358__auto__","temp__1358__auto__",-996333066,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1358__auto__","temp__1358__auto__",-996333066,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__1358__auto__","temp__1358__auto__",-996333066,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("buddylistcljs.forjure","bindings","buddylistcljs.forjure/bindings",953004284,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("buddylistcljs.forjure","else","buddylistcljs.forjure/else",-1688874114,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
buddylistcljs.forjure.if_let_last.cljs$lang$applyTo = (function (seq1360){
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

buddylistcljs.forjure.if_let_last.cljs$lang$maxFixedArity = (5);

return null;
})()
;
buddylistcljs.forjure.if_let_last.cljs$lang$macro = true;

var ret__4531__auto___1376 = (function (){
/**
 * Turns a list of variables into a map of their names as keywords to their values
 */
buddylistcljs.forjure.keyword_map = (function buddylistcljs$forjure$keyword_map(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1377 = arguments.length;
var i__4498__auto___1378 = (0);
while(true){
if((i__4498__auto___1378 < len__4497__auto___1377)){
args__4500__auto__.push((arguments[i__4498__auto___1378]));

var G__1379 = (i__4498__auto___1378 + (1));
i__4498__auto___1378 = G__1379;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return buddylistcljs.forjure.keyword_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

buddylistcljs.forjure.keyword_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__1372_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.name.call(null,new cljs.core.Symbol(null,"p1__1372#","p1__1372#",173390858,null))),p1__1372_SHARP_], null));
}),bindings));
});

buddylistcljs.forjure.keyword_map.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
buddylistcljs.forjure.keyword_map.cljs$lang$applyTo = (function (seq1373){
var G__1374 = cljs.core.first.call(null,seq1373);
var seq1373__$1 = cljs.core.next.call(null,seq1373);
var G__1375 = cljs.core.first.call(null,seq1373__$1);
var seq1373__$2 = cljs.core.next.call(null,seq1373__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1374,G__1375,seq1373__$2);
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
var len__4497__auto___1381 = arguments.length;
var i__4498__auto___1382 = (0);
while(true){
if((i__4498__auto___1382 < len__4497__auto___1381)){
args__4500__auto__.push((arguments[i__4498__auto___1382]));

var G__1383 = (i__4498__auto___1382 + (1));
i__4498__auto___1382 = G__1383;
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
buddylistcljs.forjure.none_nil.cljs$lang$applyTo = (function (seq1380){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1380));
});

