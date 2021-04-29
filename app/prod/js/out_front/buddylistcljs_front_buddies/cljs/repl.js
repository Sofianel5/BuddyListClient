// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16583){
var map__16584 = p__16583;
var map__16584__$1 = ((((!((map__16584 == null)))?(((((map__16584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16584):map__16584);
var m = map__16584__$1;
var n = cljs.core.get.call(null,map__16584__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16584__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__16586_16608 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16587_16609 = null;
var count__16588_16610 = (0);
var i__16589_16611 = (0);
while(true){
if((i__16589_16611 < count__16588_16610)){
var f_16612 = cljs.core._nth.call(null,chunk__16587_16609,i__16589_16611);
cljs.core.println.call(null,"  ",f_16612);


var G__16613 = seq__16586_16608;
var G__16614 = chunk__16587_16609;
var G__16615 = count__16588_16610;
var G__16616 = (i__16589_16611 + (1));
seq__16586_16608 = G__16613;
chunk__16587_16609 = G__16614;
count__16588_16610 = G__16615;
i__16589_16611 = G__16616;
continue;
} else {
var temp__4657__auto___16617 = cljs.core.seq.call(null,seq__16586_16608);
if(temp__4657__auto___16617){
var seq__16586_16618__$1 = temp__4657__auto___16617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16586_16618__$1)){
var c__4317__auto___16619 = cljs.core.chunk_first.call(null,seq__16586_16618__$1);
var G__16620 = cljs.core.chunk_rest.call(null,seq__16586_16618__$1);
var G__16621 = c__4317__auto___16619;
var G__16622 = cljs.core.count.call(null,c__4317__auto___16619);
var G__16623 = (0);
seq__16586_16608 = G__16620;
chunk__16587_16609 = G__16621;
count__16588_16610 = G__16622;
i__16589_16611 = G__16623;
continue;
} else {
var f_16624 = cljs.core.first.call(null,seq__16586_16618__$1);
cljs.core.println.call(null,"  ",f_16624);


var G__16625 = cljs.core.next.call(null,seq__16586_16618__$1);
var G__16626 = null;
var G__16627 = (0);
var G__16628 = (0);
seq__16586_16608 = G__16625;
chunk__16587_16609 = G__16626;
count__16588_16610 = G__16627;
i__16589_16611 = G__16628;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16629 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16629);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16629)))?cljs.core.second.call(null,arglists_16629):arglists_16629));
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
var seq__16590_16630 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16591_16631 = null;
var count__16592_16632 = (0);
var i__16593_16633 = (0);
while(true){
if((i__16593_16633 < count__16592_16632)){
var vec__16594_16634 = cljs.core._nth.call(null,chunk__16591_16631,i__16593_16633);
var name_16635 = cljs.core.nth.call(null,vec__16594_16634,(0),null);
var map__16597_16636 = cljs.core.nth.call(null,vec__16594_16634,(1),null);
var map__16597_16637__$1 = ((((!((map__16597_16636 == null)))?(((((map__16597_16636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16597_16636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16597_16636):map__16597_16636);
var doc_16638 = cljs.core.get.call(null,map__16597_16637__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16639 = cljs.core.get.call(null,map__16597_16637__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16635);

cljs.core.println.call(null," ",arglists_16639);

if(cljs.core.truth_(doc_16638)){
cljs.core.println.call(null," ",doc_16638);
} else {
}


var G__16640 = seq__16590_16630;
var G__16641 = chunk__16591_16631;
var G__16642 = count__16592_16632;
var G__16643 = (i__16593_16633 + (1));
seq__16590_16630 = G__16640;
chunk__16591_16631 = G__16641;
count__16592_16632 = G__16642;
i__16593_16633 = G__16643;
continue;
} else {
var temp__4657__auto___16644 = cljs.core.seq.call(null,seq__16590_16630);
if(temp__4657__auto___16644){
var seq__16590_16645__$1 = temp__4657__auto___16644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16590_16645__$1)){
var c__4317__auto___16646 = cljs.core.chunk_first.call(null,seq__16590_16645__$1);
var G__16647 = cljs.core.chunk_rest.call(null,seq__16590_16645__$1);
var G__16648 = c__4317__auto___16646;
var G__16649 = cljs.core.count.call(null,c__4317__auto___16646);
var G__16650 = (0);
seq__16590_16630 = G__16647;
chunk__16591_16631 = G__16648;
count__16592_16632 = G__16649;
i__16593_16633 = G__16650;
continue;
} else {
var vec__16599_16651 = cljs.core.first.call(null,seq__16590_16645__$1);
var name_16652 = cljs.core.nth.call(null,vec__16599_16651,(0),null);
var map__16602_16653 = cljs.core.nth.call(null,vec__16599_16651,(1),null);
var map__16602_16654__$1 = ((((!((map__16602_16653 == null)))?(((((map__16602_16653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16602_16653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16602_16653):map__16602_16653);
var doc_16655 = cljs.core.get.call(null,map__16602_16654__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16656 = cljs.core.get.call(null,map__16602_16654__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16652);

cljs.core.println.call(null," ",arglists_16656);

if(cljs.core.truth_(doc_16655)){
cljs.core.println.call(null," ",doc_16655);
} else {
}


var G__16657 = cljs.core.next.call(null,seq__16590_16645__$1);
var G__16658 = null;
var G__16659 = (0);
var G__16660 = (0);
seq__16590_16630 = G__16657;
chunk__16591_16631 = G__16658;
count__16592_16632 = G__16659;
i__16593_16633 = G__16660;
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

var seq__16604 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16605 = null;
var count__16606 = (0);
var i__16607 = (0);
while(true){
if((i__16607 < count__16606)){
var role = cljs.core._nth.call(null,chunk__16605,i__16607);
var temp__4657__auto___16661__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___16661__$1)){
var spec_16662 = temp__4657__auto___16661__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16662));
} else {
}


var G__16663 = seq__16604;
var G__16664 = chunk__16605;
var G__16665 = count__16606;
var G__16666 = (i__16607 + (1));
seq__16604 = G__16663;
chunk__16605 = G__16664;
count__16606 = G__16665;
i__16607 = G__16666;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__16604);
if(temp__4657__auto____$1){
var seq__16604__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16604__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__16604__$1);
var G__16667 = cljs.core.chunk_rest.call(null,seq__16604__$1);
var G__16668 = c__4317__auto__;
var G__16669 = cljs.core.count.call(null,c__4317__auto__);
var G__16670 = (0);
seq__16604 = G__16667;
chunk__16605 = G__16668;
count__16606 = G__16669;
i__16607 = G__16670;
continue;
} else {
var role = cljs.core.first.call(null,seq__16604__$1);
var temp__4657__auto___16671__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___16671__$2)){
var spec_16672 = temp__4657__auto___16671__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16672));
} else {
}


var G__16673 = cljs.core.next.call(null,seq__16604__$1);
var G__16674 = null;
var G__16675 = (0);
var G__16676 = (0);
seq__16604 = G__16673;
chunk__16605 = G__16674;
count__16606 = G__16675;
i__16607 = G__16676;
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
