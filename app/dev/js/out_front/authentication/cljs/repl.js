// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10715){
var map__10716 = p__10715;
var map__10716__$1 = ((((!((map__10716 == null)))?(((((map__10716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10716):map__10716);
var m = map__10716__$1;
var n = cljs.core.get.call(null,map__10716__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10716__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__10718_10740 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10719_10741 = null;
var count__10720_10742 = (0);
var i__10721_10743 = (0);
while(true){
if((i__10721_10743 < count__10720_10742)){
var f_10744 = cljs.core._nth.call(null,chunk__10719_10741,i__10721_10743);
cljs.core.println.call(null,"  ",f_10744);


var G__10745 = seq__10718_10740;
var G__10746 = chunk__10719_10741;
var G__10747 = count__10720_10742;
var G__10748 = (i__10721_10743 + (1));
seq__10718_10740 = G__10745;
chunk__10719_10741 = G__10746;
count__10720_10742 = G__10747;
i__10721_10743 = G__10748;
continue;
} else {
var temp__4657__auto___10749 = cljs.core.seq.call(null,seq__10718_10740);
if(temp__4657__auto___10749){
var seq__10718_10750__$1 = temp__4657__auto___10749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10718_10750__$1)){
var c__4317__auto___10751 = cljs.core.chunk_first.call(null,seq__10718_10750__$1);
var G__10752 = cljs.core.chunk_rest.call(null,seq__10718_10750__$1);
var G__10753 = c__4317__auto___10751;
var G__10754 = cljs.core.count.call(null,c__4317__auto___10751);
var G__10755 = (0);
seq__10718_10740 = G__10752;
chunk__10719_10741 = G__10753;
count__10720_10742 = G__10754;
i__10721_10743 = G__10755;
continue;
} else {
var f_10756 = cljs.core.first.call(null,seq__10718_10750__$1);
cljs.core.println.call(null,"  ",f_10756);


var G__10757 = cljs.core.next.call(null,seq__10718_10750__$1);
var G__10758 = null;
var G__10759 = (0);
var G__10760 = (0);
seq__10718_10740 = G__10757;
chunk__10719_10741 = G__10758;
count__10720_10742 = G__10759;
i__10721_10743 = G__10760;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10761 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10761);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10761)))?cljs.core.second.call(null,arglists_10761):arglists_10761));
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
var seq__10722_10762 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10723_10763 = null;
var count__10724_10764 = (0);
var i__10725_10765 = (0);
while(true){
if((i__10725_10765 < count__10724_10764)){
var vec__10726_10766 = cljs.core._nth.call(null,chunk__10723_10763,i__10725_10765);
var name_10767 = cljs.core.nth.call(null,vec__10726_10766,(0),null);
var map__10729_10768 = cljs.core.nth.call(null,vec__10726_10766,(1),null);
var map__10729_10769__$1 = ((((!((map__10729_10768 == null)))?(((((map__10729_10768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10729_10768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10729_10768):map__10729_10768);
var doc_10770 = cljs.core.get.call(null,map__10729_10769__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10771 = cljs.core.get.call(null,map__10729_10769__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10767);

cljs.core.println.call(null," ",arglists_10771);

if(cljs.core.truth_(doc_10770)){
cljs.core.println.call(null," ",doc_10770);
} else {
}


var G__10772 = seq__10722_10762;
var G__10773 = chunk__10723_10763;
var G__10774 = count__10724_10764;
var G__10775 = (i__10725_10765 + (1));
seq__10722_10762 = G__10772;
chunk__10723_10763 = G__10773;
count__10724_10764 = G__10774;
i__10725_10765 = G__10775;
continue;
} else {
var temp__4657__auto___10776 = cljs.core.seq.call(null,seq__10722_10762);
if(temp__4657__auto___10776){
var seq__10722_10777__$1 = temp__4657__auto___10776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10722_10777__$1)){
var c__4317__auto___10778 = cljs.core.chunk_first.call(null,seq__10722_10777__$1);
var G__10779 = cljs.core.chunk_rest.call(null,seq__10722_10777__$1);
var G__10780 = c__4317__auto___10778;
var G__10781 = cljs.core.count.call(null,c__4317__auto___10778);
var G__10782 = (0);
seq__10722_10762 = G__10779;
chunk__10723_10763 = G__10780;
count__10724_10764 = G__10781;
i__10725_10765 = G__10782;
continue;
} else {
var vec__10731_10783 = cljs.core.first.call(null,seq__10722_10777__$1);
var name_10784 = cljs.core.nth.call(null,vec__10731_10783,(0),null);
var map__10734_10785 = cljs.core.nth.call(null,vec__10731_10783,(1),null);
var map__10734_10786__$1 = ((((!((map__10734_10785 == null)))?(((((map__10734_10785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10734_10785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10734_10785):map__10734_10785);
var doc_10787 = cljs.core.get.call(null,map__10734_10786__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10788 = cljs.core.get.call(null,map__10734_10786__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10784);

cljs.core.println.call(null," ",arglists_10788);

if(cljs.core.truth_(doc_10787)){
cljs.core.println.call(null," ",doc_10787);
} else {
}


var G__10789 = cljs.core.next.call(null,seq__10722_10777__$1);
var G__10790 = null;
var G__10791 = (0);
var G__10792 = (0);
seq__10722_10762 = G__10789;
chunk__10723_10763 = G__10790;
count__10724_10764 = G__10791;
i__10725_10765 = G__10792;
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

var seq__10736 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10737 = null;
var count__10738 = (0);
var i__10739 = (0);
while(true){
if((i__10739 < count__10738)){
var role = cljs.core._nth.call(null,chunk__10737,i__10739);
var temp__4657__auto___10793__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10793__$1)){
var spec_10794 = temp__4657__auto___10793__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10794));
} else {
}


var G__10795 = seq__10736;
var G__10796 = chunk__10737;
var G__10797 = count__10738;
var G__10798 = (i__10739 + (1));
seq__10736 = G__10795;
chunk__10737 = G__10796;
count__10738 = G__10797;
i__10739 = G__10798;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__10736);
if(temp__4657__auto____$1){
var seq__10736__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10736__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__10736__$1);
var G__10799 = cljs.core.chunk_rest.call(null,seq__10736__$1);
var G__10800 = c__4317__auto__;
var G__10801 = cljs.core.count.call(null,c__4317__auto__);
var G__10802 = (0);
seq__10736 = G__10799;
chunk__10737 = G__10800;
count__10738 = G__10801;
i__10739 = G__10802;
continue;
} else {
var role = cljs.core.first.call(null,seq__10736__$1);
var temp__4657__auto___10803__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10803__$2)){
var spec_10804 = temp__4657__auto___10803__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10804));
} else {
}


var G__10805 = cljs.core.next.call(null,seq__10736__$1);
var G__10806 = null;
var G__10807 = (0);
var G__10808 = (0);
seq__10736 = G__10805;
chunk__10737 = G__10806;
count__10738 = G__10807;
i__10739 = G__10808;
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
