// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30358){
var map__30359 = p__30358;
var map__30359__$1 = ((((!((map__30359 == null)))?(((((map__30359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30359):map__30359);
var m = map__30359__$1;
var n = cljs.core.get.call(null,map__30359__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30359__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30361_30383 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30362_30384 = null;
var count__30363_30385 = (0);
var i__30364_30386 = (0);
while(true){
if((i__30364_30386 < count__30363_30385)){
var f_30387 = cljs.core._nth.call(null,chunk__30362_30384,i__30364_30386);
cljs.core.println.call(null,"  ",f_30387);


var G__30388 = seq__30361_30383;
var G__30389 = chunk__30362_30384;
var G__30390 = count__30363_30385;
var G__30391 = (i__30364_30386 + (1));
seq__30361_30383 = G__30388;
chunk__30362_30384 = G__30389;
count__30363_30385 = G__30390;
i__30364_30386 = G__30391;
continue;
} else {
var temp__4657__auto___30392 = cljs.core.seq.call(null,seq__30361_30383);
if(temp__4657__auto___30392){
var seq__30361_30393__$1 = temp__4657__auto___30392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30361_30393__$1)){
var c__4317__auto___30394 = cljs.core.chunk_first.call(null,seq__30361_30393__$1);
var G__30395 = cljs.core.chunk_rest.call(null,seq__30361_30393__$1);
var G__30396 = c__4317__auto___30394;
var G__30397 = cljs.core.count.call(null,c__4317__auto___30394);
var G__30398 = (0);
seq__30361_30383 = G__30395;
chunk__30362_30384 = G__30396;
count__30363_30385 = G__30397;
i__30364_30386 = G__30398;
continue;
} else {
var f_30399 = cljs.core.first.call(null,seq__30361_30393__$1);
cljs.core.println.call(null,"  ",f_30399);


var G__30400 = cljs.core.next.call(null,seq__30361_30393__$1);
var G__30401 = null;
var G__30402 = (0);
var G__30403 = (0);
seq__30361_30383 = G__30400;
chunk__30362_30384 = G__30401;
count__30363_30385 = G__30402;
i__30364_30386 = G__30403;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30404 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30404);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30404)))?cljs.core.second.call(null,arglists_30404):arglists_30404));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30365_30405 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30366_30406 = null;
var count__30367_30407 = (0);
var i__30368_30408 = (0);
while(true){
if((i__30368_30408 < count__30367_30407)){
var vec__30369_30409 = cljs.core._nth.call(null,chunk__30366_30406,i__30368_30408);
var name_30410 = cljs.core.nth.call(null,vec__30369_30409,(0),null);
var map__30372_30411 = cljs.core.nth.call(null,vec__30369_30409,(1),null);
var map__30372_30412__$1 = ((((!((map__30372_30411 == null)))?(((((map__30372_30411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30372_30411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30372_30411):map__30372_30411);
var doc_30413 = cljs.core.get.call(null,map__30372_30412__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30414 = cljs.core.get.call(null,map__30372_30412__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30410);

cljs.core.println.call(null," ",arglists_30414);

if(cljs.core.truth_(doc_30413)){
cljs.core.println.call(null," ",doc_30413);
} else {
}


var G__30415 = seq__30365_30405;
var G__30416 = chunk__30366_30406;
var G__30417 = count__30367_30407;
var G__30418 = (i__30368_30408 + (1));
seq__30365_30405 = G__30415;
chunk__30366_30406 = G__30416;
count__30367_30407 = G__30417;
i__30368_30408 = G__30418;
continue;
} else {
var temp__4657__auto___30419 = cljs.core.seq.call(null,seq__30365_30405);
if(temp__4657__auto___30419){
var seq__30365_30420__$1 = temp__4657__auto___30419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30365_30420__$1)){
var c__4317__auto___30421 = cljs.core.chunk_first.call(null,seq__30365_30420__$1);
var G__30422 = cljs.core.chunk_rest.call(null,seq__30365_30420__$1);
var G__30423 = c__4317__auto___30421;
var G__30424 = cljs.core.count.call(null,c__4317__auto___30421);
var G__30425 = (0);
seq__30365_30405 = G__30422;
chunk__30366_30406 = G__30423;
count__30367_30407 = G__30424;
i__30368_30408 = G__30425;
continue;
} else {
var vec__30374_30426 = cljs.core.first.call(null,seq__30365_30420__$1);
var name_30427 = cljs.core.nth.call(null,vec__30374_30426,(0),null);
var map__30377_30428 = cljs.core.nth.call(null,vec__30374_30426,(1),null);
var map__30377_30429__$1 = ((((!((map__30377_30428 == null)))?(((((map__30377_30428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30377_30428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30377_30428):map__30377_30428);
var doc_30430 = cljs.core.get.call(null,map__30377_30429__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30431 = cljs.core.get.call(null,map__30377_30429__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30427);

cljs.core.println.call(null," ",arglists_30431);

if(cljs.core.truth_(doc_30430)){
cljs.core.println.call(null," ",doc_30430);
} else {
}


var G__30432 = cljs.core.next.call(null,seq__30365_30420__$1);
var G__30433 = null;
var G__30434 = (0);
var G__30435 = (0);
seq__30365_30405 = G__30432;
chunk__30366_30406 = G__30433;
count__30367_30407 = G__30434;
i__30368_30408 = G__30435;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__30379 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30380 = null;
var count__30381 = (0);
var i__30382 = (0);
while(true){
if((i__30382 < count__30381)){
var role = cljs.core._nth.call(null,chunk__30380,i__30382);
var temp__4657__auto___30436__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30436__$1)){
var spec_30437 = temp__4657__auto___30436__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30437));
} else {
}


var G__30438 = seq__30379;
var G__30439 = chunk__30380;
var G__30440 = count__30381;
var G__30441 = (i__30382 + (1));
seq__30379 = G__30438;
chunk__30380 = G__30439;
count__30381 = G__30440;
i__30382 = G__30441;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__30379);
if(temp__4657__auto____$1){
var seq__30379__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30379__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__30379__$1);
var G__30442 = cljs.core.chunk_rest.call(null,seq__30379__$1);
var G__30443 = c__4317__auto__;
var G__30444 = cljs.core.count.call(null,c__4317__auto__);
var G__30445 = (0);
seq__30379 = G__30442;
chunk__30380 = G__30443;
count__30381 = G__30444;
i__30382 = G__30445;
continue;
} else {
var role = cljs.core.first.call(null,seq__30379__$1);
var temp__4657__auto___30446__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30446__$2)){
var spec_30447 = temp__4657__auto___30446__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30447));
} else {
}


var G__30448 = cljs.core.next.call(null,seq__30379__$1);
var G__30449 = null;
var G__30450 = (0);
var G__30451 = (0);
seq__30379 = G__30448;
chunk__30380 = G__30449;
count__30381 = G__30450;
i__30382 = G__30451;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
