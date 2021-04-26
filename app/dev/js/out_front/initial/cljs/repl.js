// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12846){
var map__12847 = p__12846;
var map__12847__$1 = ((((!((map__12847 == null)))?(((((map__12847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12847):map__12847);
var m = map__12847__$1;
var n = cljs.core.get.call(null,map__12847__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12847__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12849_12871 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12850_12872 = null;
var count__12851_12873 = (0);
var i__12852_12874 = (0);
while(true){
if((i__12852_12874 < count__12851_12873)){
var f_12875 = cljs.core._nth.call(null,chunk__12850_12872,i__12852_12874);
cljs.core.println.call(null,"  ",f_12875);


var G__12876 = seq__12849_12871;
var G__12877 = chunk__12850_12872;
var G__12878 = count__12851_12873;
var G__12879 = (i__12852_12874 + (1));
seq__12849_12871 = G__12876;
chunk__12850_12872 = G__12877;
count__12851_12873 = G__12878;
i__12852_12874 = G__12879;
continue;
} else {
var temp__4657__auto___12880 = cljs.core.seq.call(null,seq__12849_12871);
if(temp__4657__auto___12880){
var seq__12849_12881__$1 = temp__4657__auto___12880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12849_12881__$1)){
var c__4317__auto___12882 = cljs.core.chunk_first.call(null,seq__12849_12881__$1);
var G__12883 = cljs.core.chunk_rest.call(null,seq__12849_12881__$1);
var G__12884 = c__4317__auto___12882;
var G__12885 = cljs.core.count.call(null,c__4317__auto___12882);
var G__12886 = (0);
seq__12849_12871 = G__12883;
chunk__12850_12872 = G__12884;
count__12851_12873 = G__12885;
i__12852_12874 = G__12886;
continue;
} else {
var f_12887 = cljs.core.first.call(null,seq__12849_12881__$1);
cljs.core.println.call(null,"  ",f_12887);


var G__12888 = cljs.core.next.call(null,seq__12849_12881__$1);
var G__12889 = null;
var G__12890 = (0);
var G__12891 = (0);
seq__12849_12871 = G__12888;
chunk__12850_12872 = G__12889;
count__12851_12873 = G__12890;
i__12852_12874 = G__12891;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12892 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12892);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12892)))?cljs.core.second.call(null,arglists_12892):arglists_12892));
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
var seq__12853_12893 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12854_12894 = null;
var count__12855_12895 = (0);
var i__12856_12896 = (0);
while(true){
if((i__12856_12896 < count__12855_12895)){
var vec__12857_12897 = cljs.core._nth.call(null,chunk__12854_12894,i__12856_12896);
var name_12898 = cljs.core.nth.call(null,vec__12857_12897,(0),null);
var map__12860_12899 = cljs.core.nth.call(null,vec__12857_12897,(1),null);
var map__12860_12900__$1 = ((((!((map__12860_12899 == null)))?(((((map__12860_12899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12860_12899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12860_12899):map__12860_12899);
var doc_12901 = cljs.core.get.call(null,map__12860_12900__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12902 = cljs.core.get.call(null,map__12860_12900__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12898);

cljs.core.println.call(null," ",arglists_12902);

if(cljs.core.truth_(doc_12901)){
cljs.core.println.call(null," ",doc_12901);
} else {
}


var G__12903 = seq__12853_12893;
var G__12904 = chunk__12854_12894;
var G__12905 = count__12855_12895;
var G__12906 = (i__12856_12896 + (1));
seq__12853_12893 = G__12903;
chunk__12854_12894 = G__12904;
count__12855_12895 = G__12905;
i__12856_12896 = G__12906;
continue;
} else {
var temp__4657__auto___12907 = cljs.core.seq.call(null,seq__12853_12893);
if(temp__4657__auto___12907){
var seq__12853_12908__$1 = temp__4657__auto___12907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12853_12908__$1)){
var c__4317__auto___12909 = cljs.core.chunk_first.call(null,seq__12853_12908__$1);
var G__12910 = cljs.core.chunk_rest.call(null,seq__12853_12908__$1);
var G__12911 = c__4317__auto___12909;
var G__12912 = cljs.core.count.call(null,c__4317__auto___12909);
var G__12913 = (0);
seq__12853_12893 = G__12910;
chunk__12854_12894 = G__12911;
count__12855_12895 = G__12912;
i__12856_12896 = G__12913;
continue;
} else {
var vec__12862_12914 = cljs.core.first.call(null,seq__12853_12908__$1);
var name_12915 = cljs.core.nth.call(null,vec__12862_12914,(0),null);
var map__12865_12916 = cljs.core.nth.call(null,vec__12862_12914,(1),null);
var map__12865_12917__$1 = ((((!((map__12865_12916 == null)))?(((((map__12865_12916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12865_12916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12865_12916):map__12865_12916);
var doc_12918 = cljs.core.get.call(null,map__12865_12917__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12919 = cljs.core.get.call(null,map__12865_12917__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12915);

cljs.core.println.call(null," ",arglists_12919);

if(cljs.core.truth_(doc_12918)){
cljs.core.println.call(null," ",doc_12918);
} else {
}


var G__12920 = cljs.core.next.call(null,seq__12853_12908__$1);
var G__12921 = null;
var G__12922 = (0);
var G__12923 = (0);
seq__12853_12893 = G__12920;
chunk__12854_12894 = G__12921;
count__12855_12895 = G__12922;
i__12856_12896 = G__12923;
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

var seq__12867 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12868 = null;
var count__12869 = (0);
var i__12870 = (0);
while(true){
if((i__12870 < count__12869)){
var role = cljs.core._nth.call(null,chunk__12868,i__12870);
var temp__4657__auto___12924__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12924__$1)){
var spec_12925 = temp__4657__auto___12924__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12925));
} else {
}


var G__12926 = seq__12867;
var G__12927 = chunk__12868;
var G__12928 = count__12869;
var G__12929 = (i__12870 + (1));
seq__12867 = G__12926;
chunk__12868 = G__12927;
count__12869 = G__12928;
i__12870 = G__12929;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12867);
if(temp__4657__auto____$1){
var seq__12867__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12867__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__12867__$1);
var G__12930 = cljs.core.chunk_rest.call(null,seq__12867__$1);
var G__12931 = c__4317__auto__;
var G__12932 = cljs.core.count.call(null,c__4317__auto__);
var G__12933 = (0);
seq__12867 = G__12930;
chunk__12868 = G__12931;
count__12869 = G__12932;
i__12870 = G__12933;
continue;
} else {
var role = cljs.core.first.call(null,seq__12867__$1);
var temp__4657__auto___12934__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12934__$2)){
var spec_12935 = temp__4657__auto___12934__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12935));
} else {
}


var G__12936 = cljs.core.next.call(null,seq__12867__$1);
var G__12937 = null;
var G__12938 = (0);
var G__12939 = (0);
seq__12867 = G__12936;
chunk__12868 = G__12937;
count__12869 = G__12938;
i__12870 = G__12939;
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
