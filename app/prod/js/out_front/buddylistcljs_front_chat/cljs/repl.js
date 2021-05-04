// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17417){
var map__17418 = p__17417;
var map__17418__$1 = ((((!((map__17418 == null)))?(((((map__17418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17418):map__17418);
var m = map__17418__$1;
var n = cljs.core.get.call(null,map__17418__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17418__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__17420_17442 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17421_17443 = null;
var count__17422_17444 = (0);
var i__17423_17445 = (0);
while(true){
if((i__17423_17445 < count__17422_17444)){
var f_17446 = cljs.core._nth.call(null,chunk__17421_17443,i__17423_17445);
cljs.core.println.call(null,"  ",f_17446);


var G__17447 = seq__17420_17442;
var G__17448 = chunk__17421_17443;
var G__17449 = count__17422_17444;
var G__17450 = (i__17423_17445 + (1));
seq__17420_17442 = G__17447;
chunk__17421_17443 = G__17448;
count__17422_17444 = G__17449;
i__17423_17445 = G__17450;
continue;
} else {
var temp__4657__auto___17451 = cljs.core.seq.call(null,seq__17420_17442);
if(temp__4657__auto___17451){
var seq__17420_17452__$1 = temp__4657__auto___17451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17420_17452__$1)){
var c__4317__auto___17453 = cljs.core.chunk_first.call(null,seq__17420_17452__$1);
var G__17454 = cljs.core.chunk_rest.call(null,seq__17420_17452__$1);
var G__17455 = c__4317__auto___17453;
var G__17456 = cljs.core.count.call(null,c__4317__auto___17453);
var G__17457 = (0);
seq__17420_17442 = G__17454;
chunk__17421_17443 = G__17455;
count__17422_17444 = G__17456;
i__17423_17445 = G__17457;
continue;
} else {
var f_17458 = cljs.core.first.call(null,seq__17420_17452__$1);
cljs.core.println.call(null,"  ",f_17458);


var G__17459 = cljs.core.next.call(null,seq__17420_17452__$1);
var G__17460 = null;
var G__17461 = (0);
var G__17462 = (0);
seq__17420_17442 = G__17459;
chunk__17421_17443 = G__17460;
count__17422_17444 = G__17461;
i__17423_17445 = G__17462;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17463 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17463);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17463)))?cljs.core.second.call(null,arglists_17463):arglists_17463));
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
var seq__17424_17464 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17425_17465 = null;
var count__17426_17466 = (0);
var i__17427_17467 = (0);
while(true){
if((i__17427_17467 < count__17426_17466)){
var vec__17428_17468 = cljs.core._nth.call(null,chunk__17425_17465,i__17427_17467);
var name_17469 = cljs.core.nth.call(null,vec__17428_17468,(0),null);
var map__17431_17470 = cljs.core.nth.call(null,vec__17428_17468,(1),null);
var map__17431_17471__$1 = ((((!((map__17431_17470 == null)))?(((((map__17431_17470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17431_17470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17431_17470):map__17431_17470);
var doc_17472 = cljs.core.get.call(null,map__17431_17471__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17473 = cljs.core.get.call(null,map__17431_17471__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17469);

cljs.core.println.call(null," ",arglists_17473);

if(cljs.core.truth_(doc_17472)){
cljs.core.println.call(null," ",doc_17472);
} else {
}


var G__17474 = seq__17424_17464;
var G__17475 = chunk__17425_17465;
var G__17476 = count__17426_17466;
var G__17477 = (i__17427_17467 + (1));
seq__17424_17464 = G__17474;
chunk__17425_17465 = G__17475;
count__17426_17466 = G__17476;
i__17427_17467 = G__17477;
continue;
} else {
var temp__4657__auto___17478 = cljs.core.seq.call(null,seq__17424_17464);
if(temp__4657__auto___17478){
var seq__17424_17479__$1 = temp__4657__auto___17478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17424_17479__$1)){
var c__4317__auto___17480 = cljs.core.chunk_first.call(null,seq__17424_17479__$1);
var G__17481 = cljs.core.chunk_rest.call(null,seq__17424_17479__$1);
var G__17482 = c__4317__auto___17480;
var G__17483 = cljs.core.count.call(null,c__4317__auto___17480);
var G__17484 = (0);
seq__17424_17464 = G__17481;
chunk__17425_17465 = G__17482;
count__17426_17466 = G__17483;
i__17427_17467 = G__17484;
continue;
} else {
var vec__17433_17485 = cljs.core.first.call(null,seq__17424_17479__$1);
var name_17486 = cljs.core.nth.call(null,vec__17433_17485,(0),null);
var map__17436_17487 = cljs.core.nth.call(null,vec__17433_17485,(1),null);
var map__17436_17488__$1 = ((((!((map__17436_17487 == null)))?(((((map__17436_17487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17436_17487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17436_17487):map__17436_17487);
var doc_17489 = cljs.core.get.call(null,map__17436_17488__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17490 = cljs.core.get.call(null,map__17436_17488__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17486);

cljs.core.println.call(null," ",arglists_17490);

if(cljs.core.truth_(doc_17489)){
cljs.core.println.call(null," ",doc_17489);
} else {
}


var G__17491 = cljs.core.next.call(null,seq__17424_17479__$1);
var G__17492 = null;
var G__17493 = (0);
var G__17494 = (0);
seq__17424_17464 = G__17491;
chunk__17425_17465 = G__17492;
count__17426_17466 = G__17493;
i__17427_17467 = G__17494;
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

var seq__17438 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17439 = null;
var count__17440 = (0);
var i__17441 = (0);
while(true){
if((i__17441 < count__17440)){
var role = cljs.core._nth.call(null,chunk__17439,i__17441);
var temp__4657__auto___17495__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17495__$1)){
var spec_17496 = temp__4657__auto___17495__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17496));
} else {
}


var G__17497 = seq__17438;
var G__17498 = chunk__17439;
var G__17499 = count__17440;
var G__17500 = (i__17441 + (1));
seq__17438 = G__17497;
chunk__17439 = G__17498;
count__17440 = G__17499;
i__17441 = G__17500;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__17438);
if(temp__4657__auto____$1){
var seq__17438__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17438__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__17438__$1);
var G__17501 = cljs.core.chunk_rest.call(null,seq__17438__$1);
var G__17502 = c__4317__auto__;
var G__17503 = cljs.core.count.call(null,c__4317__auto__);
var G__17504 = (0);
seq__17438 = G__17501;
chunk__17439 = G__17502;
count__17440 = G__17503;
i__17441 = G__17504;
continue;
} else {
var role = cljs.core.first.call(null,seq__17438__$1);
var temp__4657__auto___17505__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17505__$2)){
var spec_17506 = temp__4657__auto___17505__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17506));
} else {
}


var G__17507 = cljs.core.next.call(null,seq__17438__$1);
var G__17508 = null;
var G__17509 = (0);
var G__17510 = (0);
seq__17438 = G__17507;
chunk__17439 = G__17508;
count__17440 = G__17509;
i__17441 = G__17510;
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
