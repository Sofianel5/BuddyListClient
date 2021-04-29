// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12842){
var map__12843 = p__12842;
var map__12843__$1 = ((((!((map__12843 == null)))?(((((map__12843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12843):map__12843);
var m = map__12843__$1;
var n = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12845_12867 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12846_12868 = null;
var count__12847_12869 = (0);
var i__12848_12870 = (0);
while(true){
if((i__12848_12870 < count__12847_12869)){
var f_12871 = cljs.core._nth.call(null,chunk__12846_12868,i__12848_12870);
cljs.core.println.call(null,"  ",f_12871);


var G__12872 = seq__12845_12867;
var G__12873 = chunk__12846_12868;
var G__12874 = count__12847_12869;
var G__12875 = (i__12848_12870 + (1));
seq__12845_12867 = G__12872;
chunk__12846_12868 = G__12873;
count__12847_12869 = G__12874;
i__12848_12870 = G__12875;
continue;
} else {
var temp__4657__auto___12876 = cljs.core.seq.call(null,seq__12845_12867);
if(temp__4657__auto___12876){
var seq__12845_12877__$1 = temp__4657__auto___12876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12845_12877__$1)){
var c__4317__auto___12878 = cljs.core.chunk_first.call(null,seq__12845_12877__$1);
var G__12879 = cljs.core.chunk_rest.call(null,seq__12845_12877__$1);
var G__12880 = c__4317__auto___12878;
var G__12881 = cljs.core.count.call(null,c__4317__auto___12878);
var G__12882 = (0);
seq__12845_12867 = G__12879;
chunk__12846_12868 = G__12880;
count__12847_12869 = G__12881;
i__12848_12870 = G__12882;
continue;
} else {
var f_12883 = cljs.core.first.call(null,seq__12845_12877__$1);
cljs.core.println.call(null,"  ",f_12883);


var G__12884 = cljs.core.next.call(null,seq__12845_12877__$1);
var G__12885 = null;
var G__12886 = (0);
var G__12887 = (0);
seq__12845_12867 = G__12884;
chunk__12846_12868 = G__12885;
count__12847_12869 = G__12886;
i__12848_12870 = G__12887;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12888 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12888);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12888)))?cljs.core.second.call(null,arglists_12888):arglists_12888));
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
var seq__12849_12889 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12850_12890 = null;
var count__12851_12891 = (0);
var i__12852_12892 = (0);
while(true){
if((i__12852_12892 < count__12851_12891)){
var vec__12853_12893 = cljs.core._nth.call(null,chunk__12850_12890,i__12852_12892);
var name_12894 = cljs.core.nth.call(null,vec__12853_12893,(0),null);
var map__12856_12895 = cljs.core.nth.call(null,vec__12853_12893,(1),null);
var map__12856_12896__$1 = ((((!((map__12856_12895 == null)))?(((((map__12856_12895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12856_12895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12856_12895):map__12856_12895);
var doc_12897 = cljs.core.get.call(null,map__12856_12896__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12898 = cljs.core.get.call(null,map__12856_12896__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12894);

cljs.core.println.call(null," ",arglists_12898);

if(cljs.core.truth_(doc_12897)){
cljs.core.println.call(null," ",doc_12897);
} else {
}


var G__12899 = seq__12849_12889;
var G__12900 = chunk__12850_12890;
var G__12901 = count__12851_12891;
var G__12902 = (i__12852_12892 + (1));
seq__12849_12889 = G__12899;
chunk__12850_12890 = G__12900;
count__12851_12891 = G__12901;
i__12852_12892 = G__12902;
continue;
} else {
var temp__4657__auto___12903 = cljs.core.seq.call(null,seq__12849_12889);
if(temp__4657__auto___12903){
var seq__12849_12904__$1 = temp__4657__auto___12903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12849_12904__$1)){
var c__4317__auto___12905 = cljs.core.chunk_first.call(null,seq__12849_12904__$1);
var G__12906 = cljs.core.chunk_rest.call(null,seq__12849_12904__$1);
var G__12907 = c__4317__auto___12905;
var G__12908 = cljs.core.count.call(null,c__4317__auto___12905);
var G__12909 = (0);
seq__12849_12889 = G__12906;
chunk__12850_12890 = G__12907;
count__12851_12891 = G__12908;
i__12852_12892 = G__12909;
continue;
} else {
var vec__12858_12910 = cljs.core.first.call(null,seq__12849_12904__$1);
var name_12911 = cljs.core.nth.call(null,vec__12858_12910,(0),null);
var map__12861_12912 = cljs.core.nth.call(null,vec__12858_12910,(1),null);
var map__12861_12913__$1 = ((((!((map__12861_12912 == null)))?(((((map__12861_12912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12861_12912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12861_12912):map__12861_12912);
var doc_12914 = cljs.core.get.call(null,map__12861_12913__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12915 = cljs.core.get.call(null,map__12861_12913__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12911);

cljs.core.println.call(null," ",arglists_12915);

if(cljs.core.truth_(doc_12914)){
cljs.core.println.call(null," ",doc_12914);
} else {
}


var G__12916 = cljs.core.next.call(null,seq__12849_12904__$1);
var G__12917 = null;
var G__12918 = (0);
var G__12919 = (0);
seq__12849_12889 = G__12916;
chunk__12850_12890 = G__12917;
count__12851_12891 = G__12918;
i__12852_12892 = G__12919;
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

var seq__12863 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12864 = null;
var count__12865 = (0);
var i__12866 = (0);
while(true){
if((i__12866 < count__12865)){
var role = cljs.core._nth.call(null,chunk__12864,i__12866);
var temp__4657__auto___12920__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12920__$1)){
var spec_12921 = temp__4657__auto___12920__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12921));
} else {
}


var G__12922 = seq__12863;
var G__12923 = chunk__12864;
var G__12924 = count__12865;
var G__12925 = (i__12866 + (1));
seq__12863 = G__12922;
chunk__12864 = G__12923;
count__12865 = G__12924;
i__12866 = G__12925;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12863);
if(temp__4657__auto____$1){
var seq__12863__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12863__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__12863__$1);
var G__12926 = cljs.core.chunk_rest.call(null,seq__12863__$1);
var G__12927 = c__4317__auto__;
var G__12928 = cljs.core.count.call(null,c__4317__auto__);
var G__12929 = (0);
seq__12863 = G__12926;
chunk__12864 = G__12927;
count__12865 = G__12928;
i__12866 = G__12929;
continue;
} else {
var role = cljs.core.first.call(null,seq__12863__$1);
var temp__4657__auto___12930__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12930__$2)){
var spec_12931 = temp__4657__auto___12930__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12931));
} else {
}


var G__12932 = cljs.core.next.call(null,seq__12863__$1);
var G__12933 = null;
var G__12934 = (0);
var G__12935 = (0);
seq__12863 = G__12932;
chunk__12864 = G__12933;
count__12865 = G__12934;
i__12866 = G__12935;
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
