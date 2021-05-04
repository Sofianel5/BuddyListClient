// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12847){
var map__12848 = p__12847;
var map__12848__$1 = ((((!((map__12848 == null)))?(((((map__12848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12848):map__12848);
var m = map__12848__$1;
var n = cljs.core.get.call(null,map__12848__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12848__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12850_12872 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12851_12873 = null;
var count__12852_12874 = (0);
var i__12853_12875 = (0);
while(true){
if((i__12853_12875 < count__12852_12874)){
var f_12876 = cljs.core._nth.call(null,chunk__12851_12873,i__12853_12875);
cljs.core.println.call(null,"  ",f_12876);


var G__12877 = seq__12850_12872;
var G__12878 = chunk__12851_12873;
var G__12879 = count__12852_12874;
var G__12880 = (i__12853_12875 + (1));
seq__12850_12872 = G__12877;
chunk__12851_12873 = G__12878;
count__12852_12874 = G__12879;
i__12853_12875 = G__12880;
continue;
} else {
var temp__4657__auto___12881 = cljs.core.seq.call(null,seq__12850_12872);
if(temp__4657__auto___12881){
var seq__12850_12882__$1 = temp__4657__auto___12881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12850_12882__$1)){
var c__4317__auto___12883 = cljs.core.chunk_first.call(null,seq__12850_12882__$1);
var G__12884 = cljs.core.chunk_rest.call(null,seq__12850_12882__$1);
var G__12885 = c__4317__auto___12883;
var G__12886 = cljs.core.count.call(null,c__4317__auto___12883);
var G__12887 = (0);
seq__12850_12872 = G__12884;
chunk__12851_12873 = G__12885;
count__12852_12874 = G__12886;
i__12853_12875 = G__12887;
continue;
} else {
var f_12888 = cljs.core.first.call(null,seq__12850_12882__$1);
cljs.core.println.call(null,"  ",f_12888);


var G__12889 = cljs.core.next.call(null,seq__12850_12882__$1);
var G__12890 = null;
var G__12891 = (0);
var G__12892 = (0);
seq__12850_12872 = G__12889;
chunk__12851_12873 = G__12890;
count__12852_12874 = G__12891;
i__12853_12875 = G__12892;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12893 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12893);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12893)))?cljs.core.second.call(null,arglists_12893):arglists_12893));
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
var seq__12854_12894 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12855_12895 = null;
var count__12856_12896 = (0);
var i__12857_12897 = (0);
while(true){
if((i__12857_12897 < count__12856_12896)){
var vec__12858_12898 = cljs.core._nth.call(null,chunk__12855_12895,i__12857_12897);
var name_12899 = cljs.core.nth.call(null,vec__12858_12898,(0),null);
var map__12861_12900 = cljs.core.nth.call(null,vec__12858_12898,(1),null);
var map__12861_12901__$1 = ((((!((map__12861_12900 == null)))?(((((map__12861_12900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12861_12900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12861_12900):map__12861_12900);
var doc_12902 = cljs.core.get.call(null,map__12861_12901__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12903 = cljs.core.get.call(null,map__12861_12901__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12899);

cljs.core.println.call(null," ",arglists_12903);

if(cljs.core.truth_(doc_12902)){
cljs.core.println.call(null," ",doc_12902);
} else {
}


var G__12904 = seq__12854_12894;
var G__12905 = chunk__12855_12895;
var G__12906 = count__12856_12896;
var G__12907 = (i__12857_12897 + (1));
seq__12854_12894 = G__12904;
chunk__12855_12895 = G__12905;
count__12856_12896 = G__12906;
i__12857_12897 = G__12907;
continue;
} else {
var temp__4657__auto___12908 = cljs.core.seq.call(null,seq__12854_12894);
if(temp__4657__auto___12908){
var seq__12854_12909__$1 = temp__4657__auto___12908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12854_12909__$1)){
var c__4317__auto___12910 = cljs.core.chunk_first.call(null,seq__12854_12909__$1);
var G__12911 = cljs.core.chunk_rest.call(null,seq__12854_12909__$1);
var G__12912 = c__4317__auto___12910;
var G__12913 = cljs.core.count.call(null,c__4317__auto___12910);
var G__12914 = (0);
seq__12854_12894 = G__12911;
chunk__12855_12895 = G__12912;
count__12856_12896 = G__12913;
i__12857_12897 = G__12914;
continue;
} else {
var vec__12863_12915 = cljs.core.first.call(null,seq__12854_12909__$1);
var name_12916 = cljs.core.nth.call(null,vec__12863_12915,(0),null);
var map__12866_12917 = cljs.core.nth.call(null,vec__12863_12915,(1),null);
var map__12866_12918__$1 = ((((!((map__12866_12917 == null)))?(((((map__12866_12917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12866_12917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12866_12917):map__12866_12917);
var doc_12919 = cljs.core.get.call(null,map__12866_12918__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12920 = cljs.core.get.call(null,map__12866_12918__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12916);

cljs.core.println.call(null," ",arglists_12920);

if(cljs.core.truth_(doc_12919)){
cljs.core.println.call(null," ",doc_12919);
} else {
}


var G__12921 = cljs.core.next.call(null,seq__12854_12909__$1);
var G__12922 = null;
var G__12923 = (0);
var G__12924 = (0);
seq__12854_12894 = G__12921;
chunk__12855_12895 = G__12922;
count__12856_12896 = G__12923;
i__12857_12897 = G__12924;
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

var seq__12868 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12869 = null;
var count__12870 = (0);
var i__12871 = (0);
while(true){
if((i__12871 < count__12870)){
var role = cljs.core._nth.call(null,chunk__12869,i__12871);
var temp__4657__auto___12925__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12925__$1)){
var spec_12926 = temp__4657__auto___12925__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12926));
} else {
}


var G__12927 = seq__12868;
var G__12928 = chunk__12869;
var G__12929 = count__12870;
var G__12930 = (i__12871 + (1));
seq__12868 = G__12927;
chunk__12869 = G__12928;
count__12870 = G__12929;
i__12871 = G__12930;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12868);
if(temp__4657__auto____$1){
var seq__12868__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12868__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__12868__$1);
var G__12931 = cljs.core.chunk_rest.call(null,seq__12868__$1);
var G__12932 = c__4317__auto__;
var G__12933 = cljs.core.count.call(null,c__4317__auto__);
var G__12934 = (0);
seq__12868 = G__12931;
chunk__12869 = G__12932;
count__12870 = G__12933;
i__12871 = G__12934;
continue;
} else {
var role = cljs.core.first.call(null,seq__12868__$1);
var temp__4657__auto___12935__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12935__$2)){
var spec_12936 = temp__4657__auto___12935__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12936));
} else {
}


var G__12937 = cljs.core.next.call(null,seq__12868__$1);
var G__12938 = null;
var G__12939 = (0);
var G__12940 = (0);
seq__12868 = G__12937;
chunk__12869 = G__12938;
count__12870 = G__12939;
i__12871 = G__12940;
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
