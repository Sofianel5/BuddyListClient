// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30326){
var map__30327 = p__30326;
var map__30327__$1 = ((((!((map__30327 == null)))?(((((map__30327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30327):map__30327);
var m = map__30327__$1;
var n = cljs.core.get.call(null,map__30327__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30327__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30329_30351 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30330_30352 = null;
var count__30331_30353 = (0);
var i__30332_30354 = (0);
while(true){
if((i__30332_30354 < count__30331_30353)){
var f_30355 = cljs.core._nth.call(null,chunk__30330_30352,i__30332_30354);
cljs.core.println.call(null,"  ",f_30355);


var G__30356 = seq__30329_30351;
var G__30357 = chunk__30330_30352;
var G__30358 = count__30331_30353;
var G__30359 = (i__30332_30354 + (1));
seq__30329_30351 = G__30356;
chunk__30330_30352 = G__30357;
count__30331_30353 = G__30358;
i__30332_30354 = G__30359;
continue;
} else {
var temp__4657__auto___30360 = cljs.core.seq.call(null,seq__30329_30351);
if(temp__4657__auto___30360){
var seq__30329_30361__$1 = temp__4657__auto___30360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30329_30361__$1)){
var c__4317__auto___30362 = cljs.core.chunk_first.call(null,seq__30329_30361__$1);
var G__30363 = cljs.core.chunk_rest.call(null,seq__30329_30361__$1);
var G__30364 = c__4317__auto___30362;
var G__30365 = cljs.core.count.call(null,c__4317__auto___30362);
var G__30366 = (0);
seq__30329_30351 = G__30363;
chunk__30330_30352 = G__30364;
count__30331_30353 = G__30365;
i__30332_30354 = G__30366;
continue;
} else {
var f_30367 = cljs.core.first.call(null,seq__30329_30361__$1);
cljs.core.println.call(null,"  ",f_30367);


var G__30368 = cljs.core.next.call(null,seq__30329_30361__$1);
var G__30369 = null;
var G__30370 = (0);
var G__30371 = (0);
seq__30329_30351 = G__30368;
chunk__30330_30352 = G__30369;
count__30331_30353 = G__30370;
i__30332_30354 = G__30371;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30372 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30372);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30372)))?cljs.core.second.call(null,arglists_30372):arglists_30372));
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
var seq__30333_30373 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30334_30374 = null;
var count__30335_30375 = (0);
var i__30336_30376 = (0);
while(true){
if((i__30336_30376 < count__30335_30375)){
var vec__30337_30377 = cljs.core._nth.call(null,chunk__30334_30374,i__30336_30376);
var name_30378 = cljs.core.nth.call(null,vec__30337_30377,(0),null);
var map__30340_30379 = cljs.core.nth.call(null,vec__30337_30377,(1),null);
var map__30340_30380__$1 = ((((!((map__30340_30379 == null)))?(((((map__30340_30379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30340_30379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30340_30379):map__30340_30379);
var doc_30381 = cljs.core.get.call(null,map__30340_30380__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30382 = cljs.core.get.call(null,map__30340_30380__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30378);

cljs.core.println.call(null," ",arglists_30382);

if(cljs.core.truth_(doc_30381)){
cljs.core.println.call(null," ",doc_30381);
} else {
}


var G__30383 = seq__30333_30373;
var G__30384 = chunk__30334_30374;
var G__30385 = count__30335_30375;
var G__30386 = (i__30336_30376 + (1));
seq__30333_30373 = G__30383;
chunk__30334_30374 = G__30384;
count__30335_30375 = G__30385;
i__30336_30376 = G__30386;
continue;
} else {
var temp__4657__auto___30387 = cljs.core.seq.call(null,seq__30333_30373);
if(temp__4657__auto___30387){
var seq__30333_30388__$1 = temp__4657__auto___30387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30333_30388__$1)){
var c__4317__auto___30389 = cljs.core.chunk_first.call(null,seq__30333_30388__$1);
var G__30390 = cljs.core.chunk_rest.call(null,seq__30333_30388__$1);
var G__30391 = c__4317__auto___30389;
var G__30392 = cljs.core.count.call(null,c__4317__auto___30389);
var G__30393 = (0);
seq__30333_30373 = G__30390;
chunk__30334_30374 = G__30391;
count__30335_30375 = G__30392;
i__30336_30376 = G__30393;
continue;
} else {
var vec__30342_30394 = cljs.core.first.call(null,seq__30333_30388__$1);
var name_30395 = cljs.core.nth.call(null,vec__30342_30394,(0),null);
var map__30345_30396 = cljs.core.nth.call(null,vec__30342_30394,(1),null);
var map__30345_30397__$1 = ((((!((map__30345_30396 == null)))?(((((map__30345_30396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30345_30396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30345_30396):map__30345_30396);
var doc_30398 = cljs.core.get.call(null,map__30345_30397__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30399 = cljs.core.get.call(null,map__30345_30397__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30395);

cljs.core.println.call(null," ",arglists_30399);

if(cljs.core.truth_(doc_30398)){
cljs.core.println.call(null," ",doc_30398);
} else {
}


var G__30400 = cljs.core.next.call(null,seq__30333_30388__$1);
var G__30401 = null;
var G__30402 = (0);
var G__30403 = (0);
seq__30333_30373 = G__30400;
chunk__30334_30374 = G__30401;
count__30335_30375 = G__30402;
i__30336_30376 = G__30403;
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

var seq__30347 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30348 = null;
var count__30349 = (0);
var i__30350 = (0);
while(true){
if((i__30350 < count__30349)){
var role = cljs.core._nth.call(null,chunk__30348,i__30350);
var temp__4657__auto___30404__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30404__$1)){
var spec_30405 = temp__4657__auto___30404__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30405));
} else {
}


var G__30406 = seq__30347;
var G__30407 = chunk__30348;
var G__30408 = count__30349;
var G__30409 = (i__30350 + (1));
seq__30347 = G__30406;
chunk__30348 = G__30407;
count__30349 = G__30408;
i__30350 = G__30409;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__30347);
if(temp__4657__auto____$1){
var seq__30347__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30347__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__30347__$1);
var G__30410 = cljs.core.chunk_rest.call(null,seq__30347__$1);
var G__30411 = c__4317__auto__;
var G__30412 = cljs.core.count.call(null,c__4317__auto__);
var G__30413 = (0);
seq__30347 = G__30410;
chunk__30348 = G__30411;
count__30349 = G__30412;
i__30350 = G__30413;
continue;
} else {
var role = cljs.core.first.call(null,seq__30347__$1);
var temp__4657__auto___30414__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30414__$2)){
var spec_30415 = temp__4657__auto___30414__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30415));
} else {
}


var G__30416 = cljs.core.next.call(null,seq__30347__$1);
var G__30417 = null;
var G__30418 = (0);
var G__30419 = (0);
seq__30347 = G__30416;
chunk__30348 = G__30417;
count__30349 = G__30418;
i__30350 = G__30419;
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
