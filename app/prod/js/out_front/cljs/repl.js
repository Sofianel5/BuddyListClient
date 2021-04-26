// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11847){
var map__11848 = p__11847;
var map__11848__$1 = ((((!((map__11848 == null)))?(((((map__11848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11848):map__11848);
var m = map__11848__$1;
var n = cljs.core.get.call(null,map__11848__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11848__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__11850_11872 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11851_11873 = null;
var count__11852_11874 = (0);
var i__11853_11875 = (0);
while(true){
if((i__11853_11875 < count__11852_11874)){
var f_11876 = cljs.core._nth.call(null,chunk__11851_11873,i__11853_11875);
cljs.core.println.call(null,"  ",f_11876);


var G__11877 = seq__11850_11872;
var G__11878 = chunk__11851_11873;
var G__11879 = count__11852_11874;
var G__11880 = (i__11853_11875 + (1));
seq__11850_11872 = G__11877;
chunk__11851_11873 = G__11878;
count__11852_11874 = G__11879;
i__11853_11875 = G__11880;
continue;
} else {
var temp__4657__auto___11881 = cljs.core.seq.call(null,seq__11850_11872);
if(temp__4657__auto___11881){
var seq__11850_11882__$1 = temp__4657__auto___11881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11850_11882__$1)){
var c__4317__auto___11883 = cljs.core.chunk_first.call(null,seq__11850_11882__$1);
var G__11884 = cljs.core.chunk_rest.call(null,seq__11850_11882__$1);
var G__11885 = c__4317__auto___11883;
var G__11886 = cljs.core.count.call(null,c__4317__auto___11883);
var G__11887 = (0);
seq__11850_11872 = G__11884;
chunk__11851_11873 = G__11885;
count__11852_11874 = G__11886;
i__11853_11875 = G__11887;
continue;
} else {
var f_11888 = cljs.core.first.call(null,seq__11850_11882__$1);
cljs.core.println.call(null,"  ",f_11888);


var G__11889 = cljs.core.next.call(null,seq__11850_11882__$1);
var G__11890 = null;
var G__11891 = (0);
var G__11892 = (0);
seq__11850_11872 = G__11889;
chunk__11851_11873 = G__11890;
count__11852_11874 = G__11891;
i__11853_11875 = G__11892;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11893 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11893);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11893)))?cljs.core.second.call(null,arglists_11893):arglists_11893));
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
var seq__11854_11894 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11855_11895 = null;
var count__11856_11896 = (0);
var i__11857_11897 = (0);
while(true){
if((i__11857_11897 < count__11856_11896)){
var vec__11858_11898 = cljs.core._nth.call(null,chunk__11855_11895,i__11857_11897);
var name_11899 = cljs.core.nth.call(null,vec__11858_11898,(0),null);
var map__11861_11900 = cljs.core.nth.call(null,vec__11858_11898,(1),null);
var map__11861_11901__$1 = ((((!((map__11861_11900 == null)))?(((((map__11861_11900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11861_11900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11861_11900):map__11861_11900);
var doc_11902 = cljs.core.get.call(null,map__11861_11901__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11903 = cljs.core.get.call(null,map__11861_11901__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11899);

cljs.core.println.call(null," ",arglists_11903);

if(cljs.core.truth_(doc_11902)){
cljs.core.println.call(null," ",doc_11902);
} else {
}


var G__11904 = seq__11854_11894;
var G__11905 = chunk__11855_11895;
var G__11906 = count__11856_11896;
var G__11907 = (i__11857_11897 + (1));
seq__11854_11894 = G__11904;
chunk__11855_11895 = G__11905;
count__11856_11896 = G__11906;
i__11857_11897 = G__11907;
continue;
} else {
var temp__4657__auto___11908 = cljs.core.seq.call(null,seq__11854_11894);
if(temp__4657__auto___11908){
var seq__11854_11909__$1 = temp__4657__auto___11908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11854_11909__$1)){
var c__4317__auto___11910 = cljs.core.chunk_first.call(null,seq__11854_11909__$1);
var G__11911 = cljs.core.chunk_rest.call(null,seq__11854_11909__$1);
var G__11912 = c__4317__auto___11910;
var G__11913 = cljs.core.count.call(null,c__4317__auto___11910);
var G__11914 = (0);
seq__11854_11894 = G__11911;
chunk__11855_11895 = G__11912;
count__11856_11896 = G__11913;
i__11857_11897 = G__11914;
continue;
} else {
var vec__11863_11915 = cljs.core.first.call(null,seq__11854_11909__$1);
var name_11916 = cljs.core.nth.call(null,vec__11863_11915,(0),null);
var map__11866_11917 = cljs.core.nth.call(null,vec__11863_11915,(1),null);
var map__11866_11918__$1 = ((((!((map__11866_11917 == null)))?(((((map__11866_11917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11866_11917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11866_11917):map__11866_11917);
var doc_11919 = cljs.core.get.call(null,map__11866_11918__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11920 = cljs.core.get.call(null,map__11866_11918__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11916);

cljs.core.println.call(null," ",arglists_11920);

if(cljs.core.truth_(doc_11919)){
cljs.core.println.call(null," ",doc_11919);
} else {
}


var G__11921 = cljs.core.next.call(null,seq__11854_11909__$1);
var G__11922 = null;
var G__11923 = (0);
var G__11924 = (0);
seq__11854_11894 = G__11921;
chunk__11855_11895 = G__11922;
count__11856_11896 = G__11923;
i__11857_11897 = G__11924;
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

var seq__11868 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11869 = null;
var count__11870 = (0);
var i__11871 = (0);
while(true){
if((i__11871 < count__11870)){
var role = cljs.core._nth.call(null,chunk__11869,i__11871);
var temp__4657__auto___11925__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11925__$1)){
var spec_11926 = temp__4657__auto___11925__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11926));
} else {
}


var G__11927 = seq__11868;
var G__11928 = chunk__11869;
var G__11929 = count__11870;
var G__11930 = (i__11871 + (1));
seq__11868 = G__11927;
chunk__11869 = G__11928;
count__11870 = G__11929;
i__11871 = G__11930;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__11868);
if(temp__4657__auto____$1){
var seq__11868__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11868__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__11868__$1);
var G__11931 = cljs.core.chunk_rest.call(null,seq__11868__$1);
var G__11932 = c__4317__auto__;
var G__11933 = cljs.core.count.call(null,c__4317__auto__);
var G__11934 = (0);
seq__11868 = G__11931;
chunk__11869 = G__11932;
count__11870 = G__11933;
i__11871 = G__11934;
continue;
} else {
var role = cljs.core.first.call(null,seq__11868__$1);
var temp__4657__auto___11935__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11935__$2)){
var spec_11936 = temp__4657__auto___11935__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11936));
} else {
}


var G__11937 = cljs.core.next.call(null,seq__11868__$1);
var G__11938 = null;
var G__11939 = (0);
var G__11940 = (0);
seq__11868 = G__11937;
chunk__11869 = G__11938;
count__11870 = G__11939;
i__11871 = G__11940;
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
