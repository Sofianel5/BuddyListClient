// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12883){
var map__12884 = p__12883;
var map__12884__$1 = ((((!((map__12884 == null)))?(((((map__12884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12884):map__12884);
var m = map__12884__$1;
var n = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12886_12908 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12887_12909 = null;
var count__12888_12910 = (0);
var i__12889_12911 = (0);
while(true){
if((i__12889_12911 < count__12888_12910)){
var f_12912 = cljs.core._nth.call(null,chunk__12887_12909,i__12889_12911);
cljs.core.println.call(null,"  ",f_12912);


var G__12913 = seq__12886_12908;
var G__12914 = chunk__12887_12909;
var G__12915 = count__12888_12910;
var G__12916 = (i__12889_12911 + (1));
seq__12886_12908 = G__12913;
chunk__12887_12909 = G__12914;
count__12888_12910 = G__12915;
i__12889_12911 = G__12916;
continue;
} else {
var temp__4657__auto___12917 = cljs.core.seq.call(null,seq__12886_12908);
if(temp__4657__auto___12917){
var seq__12886_12918__$1 = temp__4657__auto___12917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12886_12918__$1)){
var c__4317__auto___12919 = cljs.core.chunk_first.call(null,seq__12886_12918__$1);
var G__12920 = cljs.core.chunk_rest.call(null,seq__12886_12918__$1);
var G__12921 = c__4317__auto___12919;
var G__12922 = cljs.core.count.call(null,c__4317__auto___12919);
var G__12923 = (0);
seq__12886_12908 = G__12920;
chunk__12887_12909 = G__12921;
count__12888_12910 = G__12922;
i__12889_12911 = G__12923;
continue;
} else {
var f_12924 = cljs.core.first.call(null,seq__12886_12918__$1);
cljs.core.println.call(null,"  ",f_12924);


var G__12925 = cljs.core.next.call(null,seq__12886_12918__$1);
var G__12926 = null;
var G__12927 = (0);
var G__12928 = (0);
seq__12886_12908 = G__12925;
chunk__12887_12909 = G__12926;
count__12888_12910 = G__12927;
i__12889_12911 = G__12928;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12929 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12929);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12929)))?cljs.core.second.call(null,arglists_12929):arglists_12929));
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
var seq__12890_12930 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12891_12931 = null;
var count__12892_12932 = (0);
var i__12893_12933 = (0);
while(true){
if((i__12893_12933 < count__12892_12932)){
var vec__12894_12934 = cljs.core._nth.call(null,chunk__12891_12931,i__12893_12933);
var name_12935 = cljs.core.nth.call(null,vec__12894_12934,(0),null);
var map__12897_12936 = cljs.core.nth.call(null,vec__12894_12934,(1),null);
var map__12897_12937__$1 = ((((!((map__12897_12936 == null)))?(((((map__12897_12936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12897_12936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12897_12936):map__12897_12936);
var doc_12938 = cljs.core.get.call(null,map__12897_12937__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12939 = cljs.core.get.call(null,map__12897_12937__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12935);

cljs.core.println.call(null," ",arglists_12939);

if(cljs.core.truth_(doc_12938)){
cljs.core.println.call(null," ",doc_12938);
} else {
}


var G__12940 = seq__12890_12930;
var G__12941 = chunk__12891_12931;
var G__12942 = count__12892_12932;
var G__12943 = (i__12893_12933 + (1));
seq__12890_12930 = G__12940;
chunk__12891_12931 = G__12941;
count__12892_12932 = G__12942;
i__12893_12933 = G__12943;
continue;
} else {
var temp__4657__auto___12944 = cljs.core.seq.call(null,seq__12890_12930);
if(temp__4657__auto___12944){
var seq__12890_12945__$1 = temp__4657__auto___12944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12890_12945__$1)){
var c__4317__auto___12946 = cljs.core.chunk_first.call(null,seq__12890_12945__$1);
var G__12947 = cljs.core.chunk_rest.call(null,seq__12890_12945__$1);
var G__12948 = c__4317__auto___12946;
var G__12949 = cljs.core.count.call(null,c__4317__auto___12946);
var G__12950 = (0);
seq__12890_12930 = G__12947;
chunk__12891_12931 = G__12948;
count__12892_12932 = G__12949;
i__12893_12933 = G__12950;
continue;
} else {
var vec__12899_12951 = cljs.core.first.call(null,seq__12890_12945__$1);
var name_12952 = cljs.core.nth.call(null,vec__12899_12951,(0),null);
var map__12902_12953 = cljs.core.nth.call(null,vec__12899_12951,(1),null);
var map__12902_12954__$1 = ((((!((map__12902_12953 == null)))?(((((map__12902_12953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12902_12953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12902_12953):map__12902_12953);
var doc_12955 = cljs.core.get.call(null,map__12902_12954__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12956 = cljs.core.get.call(null,map__12902_12954__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12952);

cljs.core.println.call(null," ",arglists_12956);

if(cljs.core.truth_(doc_12955)){
cljs.core.println.call(null," ",doc_12955);
} else {
}


var G__12957 = cljs.core.next.call(null,seq__12890_12945__$1);
var G__12958 = null;
var G__12959 = (0);
var G__12960 = (0);
seq__12890_12930 = G__12957;
chunk__12891_12931 = G__12958;
count__12892_12932 = G__12959;
i__12893_12933 = G__12960;
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

var seq__12904 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12905 = null;
var count__12906 = (0);
var i__12907 = (0);
while(true){
if((i__12907 < count__12906)){
var role = cljs.core._nth.call(null,chunk__12905,i__12907);
var temp__4657__auto___12961__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12961__$1)){
var spec_12962 = temp__4657__auto___12961__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12962));
} else {
}


var G__12963 = seq__12904;
var G__12964 = chunk__12905;
var G__12965 = count__12906;
var G__12966 = (i__12907 + (1));
seq__12904 = G__12963;
chunk__12905 = G__12964;
count__12906 = G__12965;
i__12907 = G__12966;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12904);
if(temp__4657__auto____$1){
var seq__12904__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12904__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__12904__$1);
var G__12967 = cljs.core.chunk_rest.call(null,seq__12904__$1);
var G__12968 = c__4317__auto__;
var G__12969 = cljs.core.count.call(null,c__4317__auto__);
var G__12970 = (0);
seq__12904 = G__12967;
chunk__12905 = G__12968;
count__12906 = G__12969;
i__12907 = G__12970;
continue;
} else {
var role = cljs.core.first.call(null,seq__12904__$1);
var temp__4657__auto___12971__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12971__$2)){
var spec_12972 = temp__4657__auto___12971__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12972));
} else {
}


var G__12973 = cljs.core.next.call(null,seq__12904__$1);
var G__12974 = null;
var G__12975 = (0);
var G__12976 = (0);
seq__12904 = G__12973;
chunk__12905 = G__12974;
count__12906 = G__12975;
i__12907 = G__12976;
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
