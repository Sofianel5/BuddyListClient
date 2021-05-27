// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1432 = arguments.length;
var i__4498__auto___1433 = (0);
while(true){
if((i__4498__auto___1433 < len__4497__auto___1432)){
args__4500__auto__.push((arguments[i__4498__auto___1433]));

var G__1434 = (i__4498__auto___1433 + (1));
i__4498__auto___1433 = G__1434;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.format.cljs$lang$applyTo = (function (seq1430){
var G__1431 = cljs.core.first.call(null,seq1430);
var seq1430__$1 = cljs.core.next.call(null,seq1430);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1431,seq1430__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if(((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null))))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4209__auto__ = (((this$ == null))?null:this$);
var m__4210__auto__ = (garden.util.to_str[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,this$);
} else {
var m__4210__auto____$1 = (garden.util.to_str["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

goog.object.set(garden.util.ToString,"_",true);

goog.object.set(garden.util.to_str,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

goog.object.set(garden.util.ToString,"null",true);

goog.object.set(garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1436 = arguments.length;
var i__4498__auto___1437 = (0);
while(true){
if((i__4498__auto___1437 < len__4497__auto___1436)){
args__4500__auto__.push((arguments[i__4498__auto___1437]));

var G__1438 = (i__4498__auto___1437 + (1));
i__4498__auto___1437 = G__1438;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.util.as_str.cljs$lang$applyTo = (function (seq1435){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1435));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1445 = arguments.length;
var i__4498__auto___1446 = (0);
while(true){
if((i__4498__auto___1446 < len__4497__auto___1445)){
args__4500__auto__.push((arguments[i__4498__auto___1446]));

var G__1447 = (i__4498__auto___1446 + (1));
i__4498__auto___1446 = G__1447;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__1441){
var vec__1442 = p__1441;
var radix = cljs.core.nth.call(null,vec__1442,(0),null);
var radix__$1 = (function (){var or__3920__auto__ = radix;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.string__GT_int.cljs$lang$applyTo = (function (seq1439){
var G__1440 = cljs.core.first.call(null,seq1439);
var seq1439__$1 = cljs.core.next.call(null,seq1439);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1440,seq1439__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1454 = arguments.length;
var i__4498__auto___1455 = (0);
while(true){
if((i__4498__auto___1455 < len__4497__auto___1454)){
args__4500__auto__.push((arguments[i__4498__auto___1455]));

var G__1456 = (i__4498__auto___1455 + (1));
i__4498__auto___1455 = G__1456;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__1450){
var vec__1451 = p__1450;
var radix = cljs.core.nth.call(null,vec__1451,(0),null);
var radix__$1 = (function (){var or__3920__auto__ = radix;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.int__GT_string.cljs$lang$applyTo = (function (seq1448){
var G__1449 = cljs.core.first.call(null,seq1448);
var seq1448__$1 = cljs.core.next.call(null,seq1448);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1449,seq1448__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__4290__auto__ = (function garden$util$comma_join_$_iter__1457(s__1458){
return (new cljs.core.LazySeq(null,(function (){
var s__1458__$1 = s__1458;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__1458__$1);
if(temp__4657__auto__){
var s__1458__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1458__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__1458__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__1460 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__1459 = (0);
while(true){
if((i__1459 < size__4289__auto__)){
var x = cljs.core._nth.call(null,c__4288__auto__,i__1459);
cljs.core.chunk_append.call(null,b__1460,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__1461 = (i__1459 + (1));
i__1459 = G__1461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1460),garden$util$comma_join_$_iter__1457.call(null,cljs.core.chunk_rest.call(null,s__1458__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1460),null);
}
} else {
var x = cljs.core.first.call(null,s__1458__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__1457.call(null,cljs.core.rest.call(null,s__1458__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4290__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x))));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__3909__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__3909__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__3909__auto__;
}
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
garden.util.at_supports_QMARK_ = (function garden$util$at_supports_QMARK_(x){
var and__3909__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__3909__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652));
} else {
return and__3909__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__3909__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__3909__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__3909__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__3909__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__3909__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__3909__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_.call(null,n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4007__auto__ = a;
var y__4008__auto__ = b;
return ((x__4007__auto__ < y__4008__auto__) ? x__4007__auto__ : y__4008__auto__);
})();
var top = (function (){var x__4004__auto__ = a;
var y__4005__auto__ = b;
return ((x__4004__auto__ > y__4005__auto__) ? x__4004__auto__ : y__4005__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__1462 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__1462,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__1462,(1),null);
var x__4004__auto__ = a__$1;
var y__4005__auto__ = (function (){var x__4007__auto__ = b__$1;
var y__4008__auto__ = n;
return ((x__4007__auto__ < y__4008__auto__) ? x__4007__auto__ : y__4008__auto__);
})();
return ((x__4004__auto__ > y__4005__auto__) ? x__4004__auto__ : y__4005__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1468 = arguments.length;
var i__4498__auto___1469 = (0);
while(true){
if((i__4498__auto___1469 < len__4497__auto___1468)){
args__4500__auto__.push((arguments[i__4498__auto___1469]));

var G__1470 = (i__4498__auto___1469 + (1));
i__4498__auto___1469 = G__1470;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
garden.util.average.cljs$lang$applyTo = (function (seq1465){
var G__1466 = cljs.core.first.call(null,seq1465);
var seq1465__$1 = cljs.core.next.call(null,seq1465);
var G__1467 = cljs.core.first.call(null,seq1465__$1);
var seq1465__$2 = cljs.core.next.call(null,seq1465__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1466,G__1467,seq1465__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1472 = arguments.length;
var i__4498__auto___1473 = (0);
while(true){
if((i__4498__auto___1473 < len__4497__auto___1472)){
args__4500__auto__.push((arguments[i__4498__auto___1473]));

var G__1474 = (i__4498__auto___1473 + (1));
i__4498__auto___1473 = G__1474;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__4655__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4655__auto__){
var rst = temp__4655__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__1475 = (i - (1));
var G__1476 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__1475;
v_seqs__$2 = G__1476;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.util.cartesian_product.cljs$lang$applyTo = (function (seq1471){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1471));
});

