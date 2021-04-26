// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13442){
var map__13443 = p__13442;
var map__13443__$1 = ((((!((map__13443 == null)))?(((((map__13443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13443):map__13443);
var m = map__13443__$1;
var n = cljs.core.get.call(null,map__13443__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13443__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__13445_13467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13446_13468 = null;
var count__13447_13469 = (0);
var i__13448_13470 = (0);
while(true){
if((i__13448_13470 < count__13447_13469)){
var f_13471 = cljs.core._nth.call(null,chunk__13446_13468,i__13448_13470);
cljs.core.println.call(null,"  ",f_13471);


var G__13472 = seq__13445_13467;
var G__13473 = chunk__13446_13468;
var G__13474 = count__13447_13469;
var G__13475 = (i__13448_13470 + (1));
seq__13445_13467 = G__13472;
chunk__13446_13468 = G__13473;
count__13447_13469 = G__13474;
i__13448_13470 = G__13475;
continue;
} else {
var temp__4657__auto___13476 = cljs.core.seq.call(null,seq__13445_13467);
if(temp__4657__auto___13476){
var seq__13445_13477__$1 = temp__4657__auto___13476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13445_13477__$1)){
var c__4317__auto___13478 = cljs.core.chunk_first.call(null,seq__13445_13477__$1);
var G__13479 = cljs.core.chunk_rest.call(null,seq__13445_13477__$1);
var G__13480 = c__4317__auto___13478;
var G__13481 = cljs.core.count.call(null,c__4317__auto___13478);
var G__13482 = (0);
seq__13445_13467 = G__13479;
chunk__13446_13468 = G__13480;
count__13447_13469 = G__13481;
i__13448_13470 = G__13482;
continue;
} else {
var f_13483 = cljs.core.first.call(null,seq__13445_13477__$1);
cljs.core.println.call(null,"  ",f_13483);


var G__13484 = cljs.core.next.call(null,seq__13445_13477__$1);
var G__13485 = null;
var G__13486 = (0);
var G__13487 = (0);
seq__13445_13467 = G__13484;
chunk__13446_13468 = G__13485;
count__13447_13469 = G__13486;
i__13448_13470 = G__13487;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13488 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13488);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13488)))?cljs.core.second.call(null,arglists_13488):arglists_13488));
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
var seq__13449_13489 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13450_13490 = null;
var count__13451_13491 = (0);
var i__13452_13492 = (0);
while(true){
if((i__13452_13492 < count__13451_13491)){
var vec__13453_13493 = cljs.core._nth.call(null,chunk__13450_13490,i__13452_13492);
var name_13494 = cljs.core.nth.call(null,vec__13453_13493,(0),null);
var map__13456_13495 = cljs.core.nth.call(null,vec__13453_13493,(1),null);
var map__13456_13496__$1 = ((((!((map__13456_13495 == null)))?(((((map__13456_13495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13456_13495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13456_13495):map__13456_13495);
var doc_13497 = cljs.core.get.call(null,map__13456_13496__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13498 = cljs.core.get.call(null,map__13456_13496__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13494);

cljs.core.println.call(null," ",arglists_13498);

if(cljs.core.truth_(doc_13497)){
cljs.core.println.call(null," ",doc_13497);
} else {
}


var G__13499 = seq__13449_13489;
var G__13500 = chunk__13450_13490;
var G__13501 = count__13451_13491;
var G__13502 = (i__13452_13492 + (1));
seq__13449_13489 = G__13499;
chunk__13450_13490 = G__13500;
count__13451_13491 = G__13501;
i__13452_13492 = G__13502;
continue;
} else {
var temp__4657__auto___13503 = cljs.core.seq.call(null,seq__13449_13489);
if(temp__4657__auto___13503){
var seq__13449_13504__$1 = temp__4657__auto___13503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13449_13504__$1)){
var c__4317__auto___13505 = cljs.core.chunk_first.call(null,seq__13449_13504__$1);
var G__13506 = cljs.core.chunk_rest.call(null,seq__13449_13504__$1);
var G__13507 = c__4317__auto___13505;
var G__13508 = cljs.core.count.call(null,c__4317__auto___13505);
var G__13509 = (0);
seq__13449_13489 = G__13506;
chunk__13450_13490 = G__13507;
count__13451_13491 = G__13508;
i__13452_13492 = G__13509;
continue;
} else {
var vec__13458_13510 = cljs.core.first.call(null,seq__13449_13504__$1);
var name_13511 = cljs.core.nth.call(null,vec__13458_13510,(0),null);
var map__13461_13512 = cljs.core.nth.call(null,vec__13458_13510,(1),null);
var map__13461_13513__$1 = ((((!((map__13461_13512 == null)))?(((((map__13461_13512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13461_13512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13461_13512):map__13461_13512);
var doc_13514 = cljs.core.get.call(null,map__13461_13513__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13515 = cljs.core.get.call(null,map__13461_13513__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13511);

cljs.core.println.call(null," ",arglists_13515);

if(cljs.core.truth_(doc_13514)){
cljs.core.println.call(null," ",doc_13514);
} else {
}


var G__13516 = cljs.core.next.call(null,seq__13449_13504__$1);
var G__13517 = null;
var G__13518 = (0);
var G__13519 = (0);
seq__13449_13489 = G__13516;
chunk__13450_13490 = G__13517;
count__13451_13491 = G__13518;
i__13452_13492 = G__13519;
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

var seq__13463 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13464 = null;
var count__13465 = (0);
var i__13466 = (0);
while(true){
if((i__13466 < count__13465)){
var role = cljs.core._nth.call(null,chunk__13464,i__13466);
var temp__4657__auto___13520__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13520__$1)){
var spec_13521 = temp__4657__auto___13520__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13521));
} else {
}


var G__13522 = seq__13463;
var G__13523 = chunk__13464;
var G__13524 = count__13465;
var G__13525 = (i__13466 + (1));
seq__13463 = G__13522;
chunk__13464 = G__13523;
count__13465 = G__13524;
i__13466 = G__13525;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13463);
if(temp__4657__auto____$1){
var seq__13463__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13463__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__13463__$1);
var G__13526 = cljs.core.chunk_rest.call(null,seq__13463__$1);
var G__13527 = c__4317__auto__;
var G__13528 = cljs.core.count.call(null,c__4317__auto__);
var G__13529 = (0);
seq__13463 = G__13526;
chunk__13464 = G__13527;
count__13465 = G__13528;
i__13466 = G__13529;
continue;
} else {
var role = cljs.core.first.call(null,seq__13463__$1);
var temp__4657__auto___13530__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13530__$2)){
var spec_13531 = temp__4657__auto___13530__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13531));
} else {
}


var G__13532 = cljs.core.next.call(null,seq__13463__$1);
var G__13533 = null;
var G__13534 = (0);
var G__13535 = (0);
seq__13463 = G__13532;
chunk__13464 = G__13533;
count__13465 = G__13534;
i__13466 = G__13535;
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
