// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30345){
var map__30346 = p__30345;
var map__30346__$1 = ((((!((map__30346 == null)))?(((((map__30346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30346):map__30346);
var m = map__30346__$1;
var n = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30348_30370 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30349_30371 = null;
var count__30350_30372 = (0);
var i__30351_30373 = (0);
while(true){
if((i__30351_30373 < count__30350_30372)){
var f_30374 = cljs.core._nth.call(null,chunk__30349_30371,i__30351_30373);
cljs.core.println.call(null,"  ",f_30374);


var G__30375 = seq__30348_30370;
var G__30376 = chunk__30349_30371;
var G__30377 = count__30350_30372;
var G__30378 = (i__30351_30373 + (1));
seq__30348_30370 = G__30375;
chunk__30349_30371 = G__30376;
count__30350_30372 = G__30377;
i__30351_30373 = G__30378;
continue;
} else {
var temp__4657__auto___30379 = cljs.core.seq.call(null,seq__30348_30370);
if(temp__4657__auto___30379){
var seq__30348_30380__$1 = temp__4657__auto___30379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30348_30380__$1)){
var c__4317__auto___30381 = cljs.core.chunk_first.call(null,seq__30348_30380__$1);
var G__30382 = cljs.core.chunk_rest.call(null,seq__30348_30380__$1);
var G__30383 = c__4317__auto___30381;
var G__30384 = cljs.core.count.call(null,c__4317__auto___30381);
var G__30385 = (0);
seq__30348_30370 = G__30382;
chunk__30349_30371 = G__30383;
count__30350_30372 = G__30384;
i__30351_30373 = G__30385;
continue;
} else {
var f_30386 = cljs.core.first.call(null,seq__30348_30380__$1);
cljs.core.println.call(null,"  ",f_30386);


var G__30387 = cljs.core.next.call(null,seq__30348_30380__$1);
var G__30388 = null;
var G__30389 = (0);
var G__30390 = (0);
seq__30348_30370 = G__30387;
chunk__30349_30371 = G__30388;
count__30350_30372 = G__30389;
i__30351_30373 = G__30390;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30391 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30391);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30391)))?cljs.core.second.call(null,arglists_30391):arglists_30391));
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
var seq__30352_30392 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30353_30393 = null;
var count__30354_30394 = (0);
var i__30355_30395 = (0);
while(true){
if((i__30355_30395 < count__30354_30394)){
var vec__30356_30396 = cljs.core._nth.call(null,chunk__30353_30393,i__30355_30395);
var name_30397 = cljs.core.nth.call(null,vec__30356_30396,(0),null);
var map__30359_30398 = cljs.core.nth.call(null,vec__30356_30396,(1),null);
var map__30359_30399__$1 = ((((!((map__30359_30398 == null)))?(((((map__30359_30398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30359_30398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30359_30398):map__30359_30398);
var doc_30400 = cljs.core.get.call(null,map__30359_30399__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30401 = cljs.core.get.call(null,map__30359_30399__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30397);

cljs.core.println.call(null," ",arglists_30401);

if(cljs.core.truth_(doc_30400)){
cljs.core.println.call(null," ",doc_30400);
} else {
}


var G__30402 = seq__30352_30392;
var G__30403 = chunk__30353_30393;
var G__30404 = count__30354_30394;
var G__30405 = (i__30355_30395 + (1));
seq__30352_30392 = G__30402;
chunk__30353_30393 = G__30403;
count__30354_30394 = G__30404;
i__30355_30395 = G__30405;
continue;
} else {
var temp__4657__auto___30406 = cljs.core.seq.call(null,seq__30352_30392);
if(temp__4657__auto___30406){
var seq__30352_30407__$1 = temp__4657__auto___30406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30352_30407__$1)){
var c__4317__auto___30408 = cljs.core.chunk_first.call(null,seq__30352_30407__$1);
var G__30409 = cljs.core.chunk_rest.call(null,seq__30352_30407__$1);
var G__30410 = c__4317__auto___30408;
var G__30411 = cljs.core.count.call(null,c__4317__auto___30408);
var G__30412 = (0);
seq__30352_30392 = G__30409;
chunk__30353_30393 = G__30410;
count__30354_30394 = G__30411;
i__30355_30395 = G__30412;
continue;
} else {
var vec__30361_30413 = cljs.core.first.call(null,seq__30352_30407__$1);
var name_30414 = cljs.core.nth.call(null,vec__30361_30413,(0),null);
var map__30364_30415 = cljs.core.nth.call(null,vec__30361_30413,(1),null);
var map__30364_30416__$1 = ((((!((map__30364_30415 == null)))?(((((map__30364_30415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30364_30415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30364_30415):map__30364_30415);
var doc_30417 = cljs.core.get.call(null,map__30364_30416__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30418 = cljs.core.get.call(null,map__30364_30416__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30414);

cljs.core.println.call(null," ",arglists_30418);

if(cljs.core.truth_(doc_30417)){
cljs.core.println.call(null," ",doc_30417);
} else {
}


var G__30419 = cljs.core.next.call(null,seq__30352_30407__$1);
var G__30420 = null;
var G__30421 = (0);
var G__30422 = (0);
seq__30352_30392 = G__30419;
chunk__30353_30393 = G__30420;
count__30354_30394 = G__30421;
i__30355_30395 = G__30422;
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

var seq__30366 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30367 = null;
var count__30368 = (0);
var i__30369 = (0);
while(true){
if((i__30369 < count__30368)){
var role = cljs.core._nth.call(null,chunk__30367,i__30369);
var temp__4657__auto___30423__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30423__$1)){
var spec_30424 = temp__4657__auto___30423__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30424));
} else {
}


var G__30425 = seq__30366;
var G__30426 = chunk__30367;
var G__30427 = count__30368;
var G__30428 = (i__30369 + (1));
seq__30366 = G__30425;
chunk__30367 = G__30426;
count__30368 = G__30427;
i__30369 = G__30428;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__30366);
if(temp__4657__auto____$1){
var seq__30366__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30366__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__30366__$1);
var G__30429 = cljs.core.chunk_rest.call(null,seq__30366__$1);
var G__30430 = c__4317__auto__;
var G__30431 = cljs.core.count.call(null,c__4317__auto__);
var G__30432 = (0);
seq__30366 = G__30429;
chunk__30367 = G__30430;
count__30368 = G__30431;
i__30369 = G__30432;
continue;
} else {
var role = cljs.core.first.call(null,seq__30366__$1);
var temp__4657__auto___30433__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30433__$2)){
var spec_30434 = temp__4657__auto___30433__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30434));
} else {
}


var G__30435 = cljs.core.next.call(null,seq__30366__$1);
var G__30436 = null;
var G__30437 = (0);
var G__30438 = (0);
seq__30366 = G__30435;
chunk__30367 = G__30436;
count__30368 = G__30437;
i__30369 = G__30438;
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
