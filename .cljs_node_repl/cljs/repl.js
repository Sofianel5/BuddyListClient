// Compiled by ClojureScript 1.10.191 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__7829){
var map__7830 = p__7829;
var map__7830__$1 = ((((!((map__7830 == null)))?(((((map__7830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7830):map__7830);
var m = map__7830__$1;
var n = cljs.core.get.call(null,map__7830__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__7830__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__7832_7854 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7833_7855 = null;
var count__7834_7856 = (0);
var i__7835_7857 = (0);
while(true){
if((i__7835_7857 < count__7834_7856)){
var f_7858 = cljs.core._nth.call(null,chunk__7833_7855,i__7835_7857);
cljs.core.println.call(null,"  ",f_7858);


var G__7859 = seq__7832_7854;
var G__7860 = chunk__7833_7855;
var G__7861 = count__7834_7856;
var G__7862 = (i__7835_7857 + (1));
seq__7832_7854 = G__7859;
chunk__7833_7855 = G__7860;
count__7834_7856 = G__7861;
i__7835_7857 = G__7862;
continue;
} else {
var temp__4657__auto___7863 = cljs.core.seq.call(null,seq__7832_7854);
if(temp__4657__auto___7863){
var seq__7832_7864__$1 = temp__4657__auto___7863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7832_7864__$1)){
var c__4317__auto___7865 = cljs.core.chunk_first.call(null,seq__7832_7864__$1);
var G__7866 = cljs.core.chunk_rest.call(null,seq__7832_7864__$1);
var G__7867 = c__4317__auto___7865;
var G__7868 = cljs.core.count.call(null,c__4317__auto___7865);
var G__7869 = (0);
seq__7832_7854 = G__7866;
chunk__7833_7855 = G__7867;
count__7834_7856 = G__7868;
i__7835_7857 = G__7869;
continue;
} else {
var f_7870 = cljs.core.first.call(null,seq__7832_7864__$1);
cljs.core.println.call(null,"  ",f_7870);


var G__7871 = cljs.core.next.call(null,seq__7832_7864__$1);
var G__7872 = null;
var G__7873 = (0);
var G__7874 = (0);
seq__7832_7854 = G__7871;
chunk__7833_7855 = G__7872;
count__7834_7856 = G__7873;
i__7835_7857 = G__7874;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7875 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7875);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7875)))?cljs.core.second.call(null,arglists_7875):arglists_7875));
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
var seq__7836_7876 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7837_7877 = null;
var count__7838_7878 = (0);
var i__7839_7879 = (0);
while(true){
if((i__7839_7879 < count__7838_7878)){
var vec__7840_7880 = cljs.core._nth.call(null,chunk__7837_7877,i__7839_7879);
var name_7881 = cljs.core.nth.call(null,vec__7840_7880,(0),null);
var map__7843_7882 = cljs.core.nth.call(null,vec__7840_7880,(1),null);
var map__7843_7883__$1 = ((((!((map__7843_7882 == null)))?(((((map__7843_7882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7843_7882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7843_7882):map__7843_7882);
var doc_7884 = cljs.core.get.call(null,map__7843_7883__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7885 = cljs.core.get.call(null,map__7843_7883__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7881);

cljs.core.println.call(null," ",arglists_7885);

if(cljs.core.truth_(doc_7884)){
cljs.core.println.call(null," ",doc_7884);
} else {
}


var G__7886 = seq__7836_7876;
var G__7887 = chunk__7837_7877;
var G__7888 = count__7838_7878;
var G__7889 = (i__7839_7879 + (1));
seq__7836_7876 = G__7886;
chunk__7837_7877 = G__7887;
count__7838_7878 = G__7888;
i__7839_7879 = G__7889;
continue;
} else {
var temp__4657__auto___7890 = cljs.core.seq.call(null,seq__7836_7876);
if(temp__4657__auto___7890){
var seq__7836_7891__$1 = temp__4657__auto___7890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7836_7891__$1)){
var c__4317__auto___7892 = cljs.core.chunk_first.call(null,seq__7836_7891__$1);
var G__7893 = cljs.core.chunk_rest.call(null,seq__7836_7891__$1);
var G__7894 = c__4317__auto___7892;
var G__7895 = cljs.core.count.call(null,c__4317__auto___7892);
var G__7896 = (0);
seq__7836_7876 = G__7893;
chunk__7837_7877 = G__7894;
count__7838_7878 = G__7895;
i__7839_7879 = G__7896;
continue;
} else {
var vec__7845_7897 = cljs.core.first.call(null,seq__7836_7891__$1);
var name_7898 = cljs.core.nth.call(null,vec__7845_7897,(0),null);
var map__7848_7899 = cljs.core.nth.call(null,vec__7845_7897,(1),null);
var map__7848_7900__$1 = ((((!((map__7848_7899 == null)))?(((((map__7848_7899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7848_7899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7848_7899):map__7848_7899);
var doc_7901 = cljs.core.get.call(null,map__7848_7900__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7902 = cljs.core.get.call(null,map__7848_7900__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7898);

cljs.core.println.call(null," ",arglists_7902);

if(cljs.core.truth_(doc_7901)){
cljs.core.println.call(null," ",doc_7901);
} else {
}


var G__7903 = cljs.core.next.call(null,seq__7836_7891__$1);
var G__7904 = null;
var G__7905 = (0);
var G__7906 = (0);
seq__7836_7876 = G__7903;
chunk__7837_7877 = G__7904;
count__7838_7878 = G__7905;
i__7839_7879 = G__7906;
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

var seq__7850 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__7851 = null;
var count__7852 = (0);
var i__7853 = (0);
while(true){
if((i__7853 < count__7852)){
var role = cljs.core._nth.call(null,chunk__7851,i__7853);
var temp__4657__auto___7907__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___7907__$1)){
var spec_7908 = temp__4657__auto___7907__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7908));
} else {
}


var G__7909 = seq__7850;
var G__7910 = chunk__7851;
var G__7911 = count__7852;
var G__7912 = (i__7853 + (1));
seq__7850 = G__7909;
chunk__7851 = G__7910;
count__7852 = G__7911;
i__7853 = G__7912;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__7850);
if(temp__4657__auto____$1){
var seq__7850__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7850__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__7850__$1);
var G__7913 = cljs.core.chunk_rest.call(null,seq__7850__$1);
var G__7914 = c__4317__auto__;
var G__7915 = cljs.core.count.call(null,c__4317__auto__);
var G__7916 = (0);
seq__7850 = G__7913;
chunk__7851 = G__7914;
count__7852 = G__7915;
i__7853 = G__7916;
continue;
} else {
var role = cljs.core.first.call(null,seq__7850__$1);
var temp__4657__auto___7917__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___7917__$2)){
var spec_7918 = temp__4657__auto___7917__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7918));
} else {
}


var G__7919 = cljs.core.next.call(null,seq__7850__$1);
var G__7920 = null;
var G__7921 = (0);
var G__7922 = (0);
seq__7850 = G__7919;
chunk__7851 = G__7920;
count__7852 = G__7921;
i__7853 = G__7922;
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
