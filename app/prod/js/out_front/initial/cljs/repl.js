// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16587){
var map__16588 = p__16587;
var map__16588__$1 = ((((!((map__16588 == null)))?(((((map__16588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16588):map__16588);
var m = map__16588__$1;
var n = cljs.core.get.call(null,map__16588__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16588__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__16590_16612 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16591_16613 = null;
var count__16592_16614 = (0);
var i__16593_16615 = (0);
while(true){
if((i__16593_16615 < count__16592_16614)){
var f_16616 = cljs.core._nth.call(null,chunk__16591_16613,i__16593_16615);
cljs.core.println.call(null,"  ",f_16616);


var G__16617 = seq__16590_16612;
var G__16618 = chunk__16591_16613;
var G__16619 = count__16592_16614;
var G__16620 = (i__16593_16615 + (1));
seq__16590_16612 = G__16617;
chunk__16591_16613 = G__16618;
count__16592_16614 = G__16619;
i__16593_16615 = G__16620;
continue;
} else {
var temp__4657__auto___16621 = cljs.core.seq.call(null,seq__16590_16612);
if(temp__4657__auto___16621){
var seq__16590_16622__$1 = temp__4657__auto___16621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16590_16622__$1)){
var c__4317__auto___16623 = cljs.core.chunk_first.call(null,seq__16590_16622__$1);
var G__16624 = cljs.core.chunk_rest.call(null,seq__16590_16622__$1);
var G__16625 = c__4317__auto___16623;
var G__16626 = cljs.core.count.call(null,c__4317__auto___16623);
var G__16627 = (0);
seq__16590_16612 = G__16624;
chunk__16591_16613 = G__16625;
count__16592_16614 = G__16626;
i__16593_16615 = G__16627;
continue;
} else {
var f_16628 = cljs.core.first.call(null,seq__16590_16622__$1);
cljs.core.println.call(null,"  ",f_16628);


var G__16629 = cljs.core.next.call(null,seq__16590_16622__$1);
var G__16630 = null;
var G__16631 = (0);
var G__16632 = (0);
seq__16590_16612 = G__16629;
chunk__16591_16613 = G__16630;
count__16592_16614 = G__16631;
i__16593_16615 = G__16632;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16633 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16633);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16633)))?cljs.core.second.call(null,arglists_16633):arglists_16633));
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
var seq__16594_16634 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16595_16635 = null;
var count__16596_16636 = (0);
var i__16597_16637 = (0);
while(true){
if((i__16597_16637 < count__16596_16636)){
var vec__16598_16638 = cljs.core._nth.call(null,chunk__16595_16635,i__16597_16637);
var name_16639 = cljs.core.nth.call(null,vec__16598_16638,(0),null);
var map__16601_16640 = cljs.core.nth.call(null,vec__16598_16638,(1),null);
var map__16601_16641__$1 = ((((!((map__16601_16640 == null)))?(((((map__16601_16640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16601_16640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16601_16640):map__16601_16640);
var doc_16642 = cljs.core.get.call(null,map__16601_16641__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16643 = cljs.core.get.call(null,map__16601_16641__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16639);

cljs.core.println.call(null," ",arglists_16643);

if(cljs.core.truth_(doc_16642)){
cljs.core.println.call(null," ",doc_16642);
} else {
}


var G__16644 = seq__16594_16634;
var G__16645 = chunk__16595_16635;
var G__16646 = count__16596_16636;
var G__16647 = (i__16597_16637 + (1));
seq__16594_16634 = G__16644;
chunk__16595_16635 = G__16645;
count__16596_16636 = G__16646;
i__16597_16637 = G__16647;
continue;
} else {
var temp__4657__auto___16648 = cljs.core.seq.call(null,seq__16594_16634);
if(temp__4657__auto___16648){
var seq__16594_16649__$1 = temp__4657__auto___16648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16594_16649__$1)){
var c__4317__auto___16650 = cljs.core.chunk_first.call(null,seq__16594_16649__$1);
var G__16651 = cljs.core.chunk_rest.call(null,seq__16594_16649__$1);
var G__16652 = c__4317__auto___16650;
var G__16653 = cljs.core.count.call(null,c__4317__auto___16650);
var G__16654 = (0);
seq__16594_16634 = G__16651;
chunk__16595_16635 = G__16652;
count__16596_16636 = G__16653;
i__16597_16637 = G__16654;
continue;
} else {
var vec__16603_16655 = cljs.core.first.call(null,seq__16594_16649__$1);
var name_16656 = cljs.core.nth.call(null,vec__16603_16655,(0),null);
var map__16606_16657 = cljs.core.nth.call(null,vec__16603_16655,(1),null);
var map__16606_16658__$1 = ((((!((map__16606_16657 == null)))?(((((map__16606_16657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16606_16657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16606_16657):map__16606_16657);
var doc_16659 = cljs.core.get.call(null,map__16606_16658__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16660 = cljs.core.get.call(null,map__16606_16658__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16656);

cljs.core.println.call(null," ",arglists_16660);

if(cljs.core.truth_(doc_16659)){
cljs.core.println.call(null," ",doc_16659);
} else {
}


var G__16661 = cljs.core.next.call(null,seq__16594_16649__$1);
var G__16662 = null;
var G__16663 = (0);
var G__16664 = (0);
seq__16594_16634 = G__16661;
chunk__16595_16635 = G__16662;
count__16596_16636 = G__16663;
i__16597_16637 = G__16664;
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

var seq__16608 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16609 = null;
var count__16610 = (0);
var i__16611 = (0);
while(true){
if((i__16611 < count__16610)){
var role = cljs.core._nth.call(null,chunk__16609,i__16611);
var temp__4657__auto___16665__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___16665__$1)){
var spec_16666 = temp__4657__auto___16665__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16666));
} else {
}


var G__16667 = seq__16608;
var G__16668 = chunk__16609;
var G__16669 = count__16610;
var G__16670 = (i__16611 + (1));
seq__16608 = G__16667;
chunk__16609 = G__16668;
count__16610 = G__16669;
i__16611 = G__16670;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__16608);
if(temp__4657__auto____$1){
var seq__16608__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16608__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__16608__$1);
var G__16671 = cljs.core.chunk_rest.call(null,seq__16608__$1);
var G__16672 = c__4317__auto__;
var G__16673 = cljs.core.count.call(null,c__4317__auto__);
var G__16674 = (0);
seq__16608 = G__16671;
chunk__16609 = G__16672;
count__16610 = G__16673;
i__16611 = G__16674;
continue;
} else {
var role = cljs.core.first.call(null,seq__16608__$1);
var temp__4657__auto___16675__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___16675__$2)){
var spec_16676 = temp__4657__auto___16675__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16676));
} else {
}


var G__16677 = cljs.core.next.call(null,seq__16608__$1);
var G__16678 = null;
var G__16679 = (0);
var G__16680 = (0);
seq__16608 = G__16677;
chunk__16609 = G__16678;
count__16610 = G__16679;
i__16611 = G__16680;
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
