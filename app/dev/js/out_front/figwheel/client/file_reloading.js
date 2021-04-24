// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3920__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3920__auto__){
return or__3920__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3920__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28059_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28059_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28060 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28061 = null;
var count__28062 = (0);
var i__28063 = (0);
while(true){
if((i__28063 < count__28062)){
var n = cljs.core._nth.call(null,chunk__28061,i__28063);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28064 = seq__28060;
var G__28065 = chunk__28061;
var G__28066 = count__28062;
var G__28067 = (i__28063 + (1));
seq__28060 = G__28064;
chunk__28061 = G__28065;
count__28062 = G__28066;
i__28063 = G__28067;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28060);
if(temp__4657__auto__){
var seq__28060__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28060__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__28060__$1);
var G__28068 = cljs.core.chunk_rest.call(null,seq__28060__$1);
var G__28069 = c__4317__auto__;
var G__28070 = cljs.core.count.call(null,c__4317__auto__);
var G__28071 = (0);
seq__28060 = G__28068;
chunk__28061 = G__28069;
count__28062 = G__28070;
i__28063 = G__28071;
continue;
} else {
var n = cljs.core.first.call(null,seq__28060__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28072 = cljs.core.next.call(null,seq__28060__$1);
var G__28073 = null;
var G__28074 = (0);
var G__28075 = (0);
seq__28060 = G__28072;
chunk__28061 = G__28073;
count__28062 = G__28074;
i__28063 = G__28075;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28085_28093 = cljs.core.seq.call(null,deps);
var chunk__28086_28094 = null;
var count__28087_28095 = (0);
var i__28088_28096 = (0);
while(true){
if((i__28088_28096 < count__28087_28095)){
var dep_28097 = cljs.core._nth.call(null,chunk__28086_28094,i__28088_28096);
topo_sort_helper_STAR_.call(null,dep_28097,(depth + (1)),state);


var G__28098 = seq__28085_28093;
var G__28099 = chunk__28086_28094;
var G__28100 = count__28087_28095;
var G__28101 = (i__28088_28096 + (1));
seq__28085_28093 = G__28098;
chunk__28086_28094 = G__28099;
count__28087_28095 = G__28100;
i__28088_28096 = G__28101;
continue;
} else {
var temp__4657__auto___28102 = cljs.core.seq.call(null,seq__28085_28093);
if(temp__4657__auto___28102){
var seq__28085_28103__$1 = temp__4657__auto___28102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28085_28103__$1)){
var c__4317__auto___28104 = cljs.core.chunk_first.call(null,seq__28085_28103__$1);
var G__28105 = cljs.core.chunk_rest.call(null,seq__28085_28103__$1);
var G__28106 = c__4317__auto___28104;
var G__28107 = cljs.core.count.call(null,c__4317__auto___28104);
var G__28108 = (0);
seq__28085_28093 = G__28105;
chunk__28086_28094 = G__28106;
count__28087_28095 = G__28107;
i__28088_28096 = G__28108;
continue;
} else {
var dep_28109 = cljs.core.first.call(null,seq__28085_28103__$1);
topo_sort_helper_STAR_.call(null,dep_28109,(depth + (1)),state);


var G__28110 = cljs.core.next.call(null,seq__28085_28103__$1);
var G__28111 = null;
var G__28112 = (0);
var G__28113 = (0);
seq__28085_28093 = G__28110;
chunk__28086_28094 = G__28111;
count__28087_28095 = G__28112;
i__28088_28096 = G__28113;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28089){
var vec__28090 = p__28089;
var seq__28091 = cljs.core.seq.call(null,vec__28090);
var first__28092 = cljs.core.first.call(null,seq__28091);
var seq__28091__$1 = cljs.core.next.call(null,seq__28091);
var x = first__28092;
var xs = seq__28091__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28090,seq__28091,first__28092,seq__28091__$1,x,xs,get_deps__$1){
return (function (p1__28076_SHARP_){
return clojure.set.difference.call(null,p1__28076_SHARP_,x);
});})(vec__28090,seq__28091,first__28092,seq__28091__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28114 = cljs.core.seq.call(null,provides);
var chunk__28115 = null;
var count__28116 = (0);
var i__28117 = (0);
while(true){
if((i__28117 < count__28116)){
var prov = cljs.core._nth.call(null,chunk__28115,i__28117);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28118_28126 = cljs.core.seq.call(null,requires);
var chunk__28119_28127 = null;
var count__28120_28128 = (0);
var i__28121_28129 = (0);
while(true){
if((i__28121_28129 < count__28120_28128)){
var req_28130 = cljs.core._nth.call(null,chunk__28119_28127,i__28121_28129);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28130,prov);


var G__28131 = seq__28118_28126;
var G__28132 = chunk__28119_28127;
var G__28133 = count__28120_28128;
var G__28134 = (i__28121_28129 + (1));
seq__28118_28126 = G__28131;
chunk__28119_28127 = G__28132;
count__28120_28128 = G__28133;
i__28121_28129 = G__28134;
continue;
} else {
var temp__4657__auto___28135 = cljs.core.seq.call(null,seq__28118_28126);
if(temp__4657__auto___28135){
var seq__28118_28136__$1 = temp__4657__auto___28135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28118_28136__$1)){
var c__4317__auto___28137 = cljs.core.chunk_first.call(null,seq__28118_28136__$1);
var G__28138 = cljs.core.chunk_rest.call(null,seq__28118_28136__$1);
var G__28139 = c__4317__auto___28137;
var G__28140 = cljs.core.count.call(null,c__4317__auto___28137);
var G__28141 = (0);
seq__28118_28126 = G__28138;
chunk__28119_28127 = G__28139;
count__28120_28128 = G__28140;
i__28121_28129 = G__28141;
continue;
} else {
var req_28142 = cljs.core.first.call(null,seq__28118_28136__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28142,prov);


var G__28143 = cljs.core.next.call(null,seq__28118_28136__$1);
var G__28144 = null;
var G__28145 = (0);
var G__28146 = (0);
seq__28118_28126 = G__28143;
chunk__28119_28127 = G__28144;
count__28120_28128 = G__28145;
i__28121_28129 = G__28146;
continue;
}
} else {
}
}
break;
}


var G__28147 = seq__28114;
var G__28148 = chunk__28115;
var G__28149 = count__28116;
var G__28150 = (i__28117 + (1));
seq__28114 = G__28147;
chunk__28115 = G__28148;
count__28116 = G__28149;
i__28117 = G__28150;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28114);
if(temp__4657__auto__){
var seq__28114__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28114__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__28114__$1);
var G__28151 = cljs.core.chunk_rest.call(null,seq__28114__$1);
var G__28152 = c__4317__auto__;
var G__28153 = cljs.core.count.call(null,c__4317__auto__);
var G__28154 = (0);
seq__28114 = G__28151;
chunk__28115 = G__28152;
count__28116 = G__28153;
i__28117 = G__28154;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28114__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28122_28155 = cljs.core.seq.call(null,requires);
var chunk__28123_28156 = null;
var count__28124_28157 = (0);
var i__28125_28158 = (0);
while(true){
if((i__28125_28158 < count__28124_28157)){
var req_28159 = cljs.core._nth.call(null,chunk__28123_28156,i__28125_28158);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28159,prov);


var G__28160 = seq__28122_28155;
var G__28161 = chunk__28123_28156;
var G__28162 = count__28124_28157;
var G__28163 = (i__28125_28158 + (1));
seq__28122_28155 = G__28160;
chunk__28123_28156 = G__28161;
count__28124_28157 = G__28162;
i__28125_28158 = G__28163;
continue;
} else {
var temp__4657__auto___28164__$1 = cljs.core.seq.call(null,seq__28122_28155);
if(temp__4657__auto___28164__$1){
var seq__28122_28165__$1 = temp__4657__auto___28164__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28122_28165__$1)){
var c__4317__auto___28166 = cljs.core.chunk_first.call(null,seq__28122_28165__$1);
var G__28167 = cljs.core.chunk_rest.call(null,seq__28122_28165__$1);
var G__28168 = c__4317__auto___28166;
var G__28169 = cljs.core.count.call(null,c__4317__auto___28166);
var G__28170 = (0);
seq__28122_28155 = G__28167;
chunk__28123_28156 = G__28168;
count__28124_28157 = G__28169;
i__28125_28158 = G__28170;
continue;
} else {
var req_28171 = cljs.core.first.call(null,seq__28122_28165__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28171,prov);


var G__28172 = cljs.core.next.call(null,seq__28122_28165__$1);
var G__28173 = null;
var G__28174 = (0);
var G__28175 = (0);
seq__28122_28155 = G__28172;
chunk__28123_28156 = G__28173;
count__28124_28157 = G__28174;
i__28125_28158 = G__28175;
continue;
}
} else {
}
}
break;
}


var G__28176 = cljs.core.next.call(null,seq__28114__$1);
var G__28177 = null;
var G__28178 = (0);
var G__28179 = (0);
seq__28114 = G__28176;
chunk__28115 = G__28177;
count__28116 = G__28178;
i__28117 = G__28179;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28180_28184 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28181_28185 = null;
var count__28182_28186 = (0);
var i__28183_28187 = (0);
while(true){
if((i__28183_28187 < count__28182_28186)){
var ns_28188 = cljs.core._nth.call(null,chunk__28181_28185,i__28183_28187);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28188);


var G__28189 = seq__28180_28184;
var G__28190 = chunk__28181_28185;
var G__28191 = count__28182_28186;
var G__28192 = (i__28183_28187 + (1));
seq__28180_28184 = G__28189;
chunk__28181_28185 = G__28190;
count__28182_28186 = G__28191;
i__28183_28187 = G__28192;
continue;
} else {
var temp__4657__auto___28193 = cljs.core.seq.call(null,seq__28180_28184);
if(temp__4657__auto___28193){
var seq__28180_28194__$1 = temp__4657__auto___28193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28180_28194__$1)){
var c__4317__auto___28195 = cljs.core.chunk_first.call(null,seq__28180_28194__$1);
var G__28196 = cljs.core.chunk_rest.call(null,seq__28180_28194__$1);
var G__28197 = c__4317__auto___28195;
var G__28198 = cljs.core.count.call(null,c__4317__auto___28195);
var G__28199 = (0);
seq__28180_28184 = G__28196;
chunk__28181_28185 = G__28197;
count__28182_28186 = G__28198;
i__28183_28187 = G__28199;
continue;
} else {
var ns_28200 = cljs.core.first.call(null,seq__28180_28194__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28200);


var G__28201 = cljs.core.next.call(null,seq__28180_28194__$1);
var G__28202 = null;
var G__28203 = (0);
var G__28204 = (0);
seq__28180_28184 = G__28201;
chunk__28181_28185 = G__28202;
count__28182_28186 = G__28203;
i__28183_28187 = G__28204;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3920__auto__ = goog.require__;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28205__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28206__i = 0, G__28206__a = new Array(arguments.length -  0);
while (G__28206__i < G__28206__a.length) {G__28206__a[G__28206__i] = arguments[G__28206__i + 0]; ++G__28206__i;}
  args = new cljs.core.IndexedSeq(G__28206__a,0,null);
} 
return G__28205__delegate.call(this,args);};
G__28205.cljs$lang$maxFixedArity = 0;
G__28205.cljs$lang$applyTo = (function (arglist__28207){
var args = cljs.core.seq(arglist__28207);
return G__28205__delegate(args);
});
G__28205.cljs$core$IFn$_invoke$arity$variadic = G__28205__delegate;
return G__28205;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28208 = cljs.core._EQ_;
var expr__28209 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28208.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28209))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__28208,expr__28209){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__28208,expr__28209))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__28208,expr__28209){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28211){if((e28211 instanceof Error)){
var e = e28211;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28211;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__28208,expr__28209))
} else {
if(cljs.core.truth_(pred__28208.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28209))){
return ((function (pred__28208,expr__28209){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__28208,expr__28209){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28208,expr__28209))
);

return deferred.addErrback(((function (deferred,pred__28208,expr__28209){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28208,expr__28209))
);
});
;})(pred__28208,expr__28209))
} else {
if(cljs.core.truth_(pred__28208.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28209))){
return ((function (pred__28208,expr__28209){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28212){if((e28212 instanceof Error)){
var e = e28212;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28212;

}
}})());
});
;})(pred__28208,expr__28209))
} else {
return ((function (pred__28208,expr__28209){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28208,expr__28209))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28213,callback){
var map__28214 = p__28213;
var map__28214__$1 = ((((!((map__28214 == null)))?(((((map__28214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28214):map__28214);
var file_msg = map__28214__$1;
var request_url = cljs.core.get.call(null,map__28214__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28214,map__28214__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28214,map__28214__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto__){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto__){
return (function (state_28238){
var state_val_28239 = (state_28238[(1)]);
if((state_val_28239 === (7))){
var inst_28234 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28240_28257 = state_28238__$1;
(statearr_28240_28257[(2)] = inst_28234);

(statearr_28240_28257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (1))){
var state_28238__$1 = state_28238;
var statearr_28241_28258 = state_28238__$1;
(statearr_28241_28258[(2)] = null);

(statearr_28241_28258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (4))){
var inst_28218 = (state_28238[(7)]);
var inst_28218__$1 = (state_28238[(2)]);
var state_28238__$1 = (function (){var statearr_28242 = state_28238;
(statearr_28242[(7)] = inst_28218__$1);

return statearr_28242;
})();
if(cljs.core.truth_(inst_28218__$1)){
var statearr_28243_28259 = state_28238__$1;
(statearr_28243_28259[(1)] = (5));

} else {
var statearr_28244_28260 = state_28238__$1;
(statearr_28244_28260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (6))){
var state_28238__$1 = state_28238;
var statearr_28245_28261 = state_28238__$1;
(statearr_28245_28261[(2)] = null);

(statearr_28245_28261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (3))){
var inst_28236 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28238__$1,inst_28236);
} else {
if((state_val_28239 === (2))){
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28238__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28239 === (11))){
var inst_28230 = (state_28238[(2)]);
var state_28238__$1 = (function (){var statearr_28246 = state_28238;
(statearr_28246[(8)] = inst_28230);

return statearr_28246;
})();
var statearr_28247_28262 = state_28238__$1;
(statearr_28247_28262[(2)] = null);

(statearr_28247_28262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (9))){
var inst_28224 = (state_28238[(9)]);
var inst_28222 = (state_28238[(10)]);
var inst_28226 = inst_28224.call(null,inst_28222);
var state_28238__$1 = state_28238;
var statearr_28248_28263 = state_28238__$1;
(statearr_28248_28263[(2)] = inst_28226);

(statearr_28248_28263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (5))){
var inst_28218 = (state_28238[(7)]);
var inst_28220 = figwheel.client.file_reloading.blocking_load.call(null,inst_28218);
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28238__$1,(8),inst_28220);
} else {
if((state_val_28239 === (10))){
var inst_28222 = (state_28238[(10)]);
var inst_28228 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28222);
var state_28238__$1 = state_28238;
var statearr_28249_28264 = state_28238__$1;
(statearr_28249_28264[(2)] = inst_28228);

(statearr_28249_28264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (8))){
var inst_28224 = (state_28238[(9)]);
var inst_28218 = (state_28238[(7)]);
var inst_28222 = (state_28238[(2)]);
var inst_28223 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28224__$1 = cljs.core.get.call(null,inst_28223,inst_28218);
var state_28238__$1 = (function (){var statearr_28250 = state_28238;
(statearr_28250[(9)] = inst_28224__$1);

(statearr_28250[(10)] = inst_28222);

return statearr_28250;
})();
if(cljs.core.truth_(inst_28224__$1)){
var statearr_28251_28265 = state_28238__$1;
(statearr_28251_28265[(1)] = (9));

} else {
var statearr_28252_28266 = state_28238__$1;
(statearr_28252_28266[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19618__auto__))
;
return ((function (switch__19597__auto__,c__19618__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19598__auto__ = null;
var figwheel$client$file_reloading$state_machine__19598__auto____0 = (function (){
var statearr_28253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28253[(0)] = figwheel$client$file_reloading$state_machine__19598__auto__);

(statearr_28253[(1)] = (1));

return statearr_28253;
});
var figwheel$client$file_reloading$state_machine__19598__auto____1 = (function (state_28238){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_28238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e28254){if((e28254 instanceof Object)){
var ex__19601__auto__ = e28254;
var statearr_28255_28267 = state_28238;
(statearr_28255_28267[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28268 = state_28238;
state_28238 = G__28268;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19598__auto__ = function(state_28238){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19598__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19598__auto____1.call(this,state_28238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19598__auto____0;
figwheel$client$file_reloading$state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19598__auto____1;
return figwheel$client$file_reloading$state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto__))
})();
var state__19620__auto__ = (function (){var statearr_28256 = f__19619__auto__.call(null);
(statearr_28256[(6)] = c__19618__auto__);

return statearr_28256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto__))
);

return c__19618__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28269,callback){
var map__28270 = p__28269;
var map__28270__$1 = ((((!((map__28270 == null)))?(((((map__28270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28270):map__28270);
var file_msg = map__28270__$1;
var namespace = cljs.core.get.call(null,map__28270__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28270,map__28270__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28270,map__28270__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28272){
var map__28273 = p__28272;
var map__28273__$1 = ((((!((map__28273 == null)))?(((((map__28273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28273):map__28273);
var file_msg = map__28273__$1;
var namespace = cljs.core.get.call(null,map__28273__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28275){
var map__28276 = p__28275;
var map__28276__$1 = ((((!((map__28276 == null)))?(((((map__28276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28276):map__28276);
var file_msg = map__28276__$1;
var namespace = cljs.core.get.call(null,map__28276__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3909__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3909__auto__){
var or__3920__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
var or__3920__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3920__auto____$1)){
return or__3920__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__3909__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28278,callback){
var map__28279 = p__28278;
var map__28279__$1 = ((((!((map__28279 == null)))?(((((map__28279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28279):map__28279);
var file_msg = map__28279__$1;
var request_url = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19618__auto___28329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___28329,out){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___28329,out){
return (function (state_28314){
var state_val_28315 = (state_28314[(1)]);
if((state_val_28315 === (1))){
var inst_28288 = cljs.core.seq.call(null,files);
var inst_28289 = cljs.core.first.call(null,inst_28288);
var inst_28290 = cljs.core.next.call(null,inst_28288);
var inst_28291 = files;
var state_28314__$1 = (function (){var statearr_28316 = state_28314;
(statearr_28316[(7)] = inst_28289);

(statearr_28316[(8)] = inst_28291);

(statearr_28316[(9)] = inst_28290);

return statearr_28316;
})();
var statearr_28317_28330 = state_28314__$1;
(statearr_28317_28330[(2)] = null);

(statearr_28317_28330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28315 === (2))){
var inst_28297 = (state_28314[(10)]);
var inst_28291 = (state_28314[(8)]);
var inst_28296 = cljs.core.seq.call(null,inst_28291);
var inst_28297__$1 = cljs.core.first.call(null,inst_28296);
var inst_28298 = cljs.core.next.call(null,inst_28296);
var inst_28299 = (inst_28297__$1 == null);
var inst_28300 = cljs.core.not.call(null,inst_28299);
var state_28314__$1 = (function (){var statearr_28318 = state_28314;
(statearr_28318[(10)] = inst_28297__$1);

(statearr_28318[(11)] = inst_28298);

return statearr_28318;
})();
if(inst_28300){
var statearr_28319_28331 = state_28314__$1;
(statearr_28319_28331[(1)] = (4));

} else {
var statearr_28320_28332 = state_28314__$1;
(statearr_28320_28332[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28315 === (3))){
var inst_28312 = (state_28314[(2)]);
var state_28314__$1 = state_28314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28314__$1,inst_28312);
} else {
if((state_val_28315 === (4))){
var inst_28297 = (state_28314[(10)]);
var inst_28302 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28297);
var state_28314__$1 = state_28314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28314__$1,(7),inst_28302);
} else {
if((state_val_28315 === (5))){
var inst_28308 = cljs.core.async.close_BANG_.call(null,out);
var state_28314__$1 = state_28314;
var statearr_28321_28333 = state_28314__$1;
(statearr_28321_28333[(2)] = inst_28308);

(statearr_28321_28333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28315 === (6))){
var inst_28310 = (state_28314[(2)]);
var state_28314__$1 = state_28314;
var statearr_28322_28334 = state_28314__$1;
(statearr_28322_28334[(2)] = inst_28310);

(statearr_28322_28334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28315 === (7))){
var inst_28298 = (state_28314[(11)]);
var inst_28304 = (state_28314[(2)]);
var inst_28305 = cljs.core.async.put_BANG_.call(null,out,inst_28304);
var inst_28291 = inst_28298;
var state_28314__$1 = (function (){var statearr_28323 = state_28314;
(statearr_28323[(12)] = inst_28305);

(statearr_28323[(8)] = inst_28291);

return statearr_28323;
})();
var statearr_28324_28335 = state_28314__$1;
(statearr_28324_28335[(2)] = null);

(statearr_28324_28335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19618__auto___28329,out))
;
return ((function (switch__19597__auto__,c__19618__auto___28329,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto____0 = (function (){
var statearr_28325 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28325[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto__);

(statearr_28325[(1)] = (1));

return statearr_28325;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto____1 = (function (state_28314){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_28314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e28326){if((e28326 instanceof Object)){
var ex__19601__auto__ = e28326;
var statearr_28327_28336 = state_28314;
(statearr_28327_28336[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28337 = state_28314;
state_28314 = G__28337;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto__ = function(state_28314){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto____1.call(this,state_28314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___28329,out))
})();
var state__19620__auto__ = (function (){var statearr_28328 = f__19619__auto__.call(null);
(statearr_28328[(6)] = c__19618__auto___28329);

return statearr_28328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___28329,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28338,opts){
var map__28339 = p__28338;
var map__28339__$1 = ((((!((map__28339 == null)))?(((((map__28339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28339):map__28339);
var eval_body = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3909__auto__ = eval_body;
if(cljs.core.truth_(and__3909__auto__)){
return typeof eval_body === 'string';
} else {
return and__3909__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28341){var e = e28341;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28342_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28342_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28343){
var vec__28344 = p__28343;
var k = cljs.core.nth.call(null,vec__28344,(0),null);
var v = cljs.core.nth.call(null,vec__28344,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28347){
var vec__28348 = p__28347;
var k = cljs.core.nth.call(null,vec__28348,(0),null);
var v = cljs.core.nth.call(null,vec__28348,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28354,p__28355){
var map__28356 = p__28354;
var map__28356__$1 = ((((!((map__28356 == null)))?(((((map__28356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28356):map__28356);
var opts = map__28356__$1;
var before_jsload = cljs.core.get.call(null,map__28356__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28356__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28356__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28357 = p__28355;
var map__28357__$1 = ((((!((map__28357 == null)))?(((((map__28357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28357):map__28357);
var msg = map__28357__$1;
var files = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28511){
var state_val_28512 = (state_28511[(1)]);
if((state_val_28512 === (7))){
var inst_28372 = (state_28511[(7)]);
var inst_28373 = (state_28511[(8)]);
var inst_28371 = (state_28511[(9)]);
var inst_28374 = (state_28511[(10)]);
var inst_28379 = cljs.core._nth.call(null,inst_28372,inst_28374);
var inst_28380 = figwheel.client.file_reloading.eval_body.call(null,inst_28379,opts);
var inst_28381 = (inst_28374 + (1));
var tmp28513 = inst_28372;
var tmp28514 = inst_28373;
var tmp28515 = inst_28371;
var inst_28371__$1 = tmp28515;
var inst_28372__$1 = tmp28513;
var inst_28373__$1 = tmp28514;
var inst_28374__$1 = inst_28381;
var state_28511__$1 = (function (){var statearr_28516 = state_28511;
(statearr_28516[(7)] = inst_28372__$1);

(statearr_28516[(8)] = inst_28373__$1);

(statearr_28516[(11)] = inst_28380);

(statearr_28516[(9)] = inst_28371__$1);

(statearr_28516[(10)] = inst_28374__$1);

return statearr_28516;
})();
var statearr_28517_28600 = state_28511__$1;
(statearr_28517_28600[(2)] = null);

(statearr_28517_28600[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (20))){
var inst_28414 = (state_28511[(12)]);
var inst_28422 = figwheel.client.file_reloading.sort_files.call(null,inst_28414);
var state_28511__$1 = state_28511;
var statearr_28518_28601 = state_28511__$1;
(statearr_28518_28601[(2)] = inst_28422);

(statearr_28518_28601[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (27))){
var state_28511__$1 = state_28511;
var statearr_28519_28602 = state_28511__$1;
(statearr_28519_28602[(2)] = null);

(statearr_28519_28602[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (1))){
var inst_28363 = (state_28511[(13)]);
var inst_28360 = before_jsload.call(null,files);
var inst_28361 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28362 = (function (){return ((function (inst_28363,inst_28360,inst_28361,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28351_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28351_SHARP_);
});
;})(inst_28363,inst_28360,inst_28361,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28363__$1 = cljs.core.filter.call(null,inst_28362,files);
var inst_28364 = cljs.core.not_empty.call(null,inst_28363__$1);
var state_28511__$1 = (function (){var statearr_28520 = state_28511;
(statearr_28520[(13)] = inst_28363__$1);

(statearr_28520[(14)] = inst_28361);

(statearr_28520[(15)] = inst_28360);

return statearr_28520;
})();
if(cljs.core.truth_(inst_28364)){
var statearr_28521_28603 = state_28511__$1;
(statearr_28521_28603[(1)] = (2));

} else {
var statearr_28522_28604 = state_28511__$1;
(statearr_28522_28604[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (24))){
var state_28511__$1 = state_28511;
var statearr_28523_28605 = state_28511__$1;
(statearr_28523_28605[(2)] = null);

(statearr_28523_28605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (39))){
var inst_28464 = (state_28511[(16)]);
var state_28511__$1 = state_28511;
var statearr_28524_28606 = state_28511__$1;
(statearr_28524_28606[(2)] = inst_28464);

(statearr_28524_28606[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (46))){
var inst_28506 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
var statearr_28525_28607 = state_28511__$1;
(statearr_28525_28607[(2)] = inst_28506);

(statearr_28525_28607[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (4))){
var inst_28408 = (state_28511[(2)]);
var inst_28409 = cljs.core.List.EMPTY;
var inst_28410 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28409);
var inst_28411 = (function (){return ((function (inst_28408,inst_28409,inst_28410,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28352_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28352_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28352_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28352_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_28408,inst_28409,inst_28410,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28412 = cljs.core.filter.call(null,inst_28411,files);
var inst_28413 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28414 = cljs.core.concat.call(null,inst_28412,inst_28413);
var state_28511__$1 = (function (){var statearr_28526 = state_28511;
(statearr_28526[(12)] = inst_28414);

(statearr_28526[(17)] = inst_28408);

(statearr_28526[(18)] = inst_28410);

return statearr_28526;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28527_28608 = state_28511__$1;
(statearr_28527_28608[(1)] = (16));

} else {
var statearr_28528_28609 = state_28511__$1;
(statearr_28528_28609[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (15))){
var inst_28398 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
var statearr_28529_28610 = state_28511__$1;
(statearr_28529_28610[(2)] = inst_28398);

(statearr_28529_28610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (21))){
var inst_28424 = (state_28511[(19)]);
var inst_28424__$1 = (state_28511[(2)]);
var inst_28425 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28424__$1);
var state_28511__$1 = (function (){var statearr_28530 = state_28511;
(statearr_28530[(19)] = inst_28424__$1);

return statearr_28530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28511__$1,(22),inst_28425);
} else {
if((state_val_28512 === (31))){
var inst_28509 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28511__$1,inst_28509);
} else {
if((state_val_28512 === (32))){
var inst_28464 = (state_28511[(16)]);
var inst_28469 = inst_28464.cljs$lang$protocol_mask$partition0$;
var inst_28470 = (inst_28469 & (64));
var inst_28471 = inst_28464.cljs$core$ISeq$;
var inst_28472 = (cljs.core.PROTOCOL_SENTINEL === inst_28471);
var inst_28473 = ((inst_28470) || (inst_28472));
var state_28511__$1 = state_28511;
if(cljs.core.truth_(inst_28473)){
var statearr_28531_28611 = state_28511__$1;
(statearr_28531_28611[(1)] = (35));

} else {
var statearr_28532_28612 = state_28511__$1;
(statearr_28532_28612[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (40))){
var inst_28486 = (state_28511[(20)]);
var inst_28485 = (state_28511[(2)]);
var inst_28486__$1 = cljs.core.get.call(null,inst_28485,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28487 = cljs.core.get.call(null,inst_28485,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28488 = cljs.core.not_empty.call(null,inst_28486__$1);
var state_28511__$1 = (function (){var statearr_28533 = state_28511;
(statearr_28533[(21)] = inst_28487);

(statearr_28533[(20)] = inst_28486__$1);

return statearr_28533;
})();
if(cljs.core.truth_(inst_28488)){
var statearr_28534_28613 = state_28511__$1;
(statearr_28534_28613[(1)] = (41));

} else {
var statearr_28535_28614 = state_28511__$1;
(statearr_28535_28614[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (33))){
var state_28511__$1 = state_28511;
var statearr_28536_28615 = state_28511__$1;
(statearr_28536_28615[(2)] = false);

(statearr_28536_28615[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (13))){
var inst_28384 = (state_28511[(22)]);
var inst_28388 = cljs.core.chunk_first.call(null,inst_28384);
var inst_28389 = cljs.core.chunk_rest.call(null,inst_28384);
var inst_28390 = cljs.core.count.call(null,inst_28388);
var inst_28371 = inst_28389;
var inst_28372 = inst_28388;
var inst_28373 = inst_28390;
var inst_28374 = (0);
var state_28511__$1 = (function (){var statearr_28537 = state_28511;
(statearr_28537[(7)] = inst_28372);

(statearr_28537[(8)] = inst_28373);

(statearr_28537[(9)] = inst_28371);

(statearr_28537[(10)] = inst_28374);

return statearr_28537;
})();
var statearr_28538_28616 = state_28511__$1;
(statearr_28538_28616[(2)] = null);

(statearr_28538_28616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (22))){
var inst_28424 = (state_28511[(19)]);
var inst_28428 = (state_28511[(23)]);
var inst_28432 = (state_28511[(24)]);
var inst_28427 = (state_28511[(25)]);
var inst_28427__$1 = (state_28511[(2)]);
var inst_28428__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28427__$1);
var inst_28429 = (function (){var all_files = inst_28424;
var res_SINGLEQUOTE_ = inst_28427__$1;
var res = inst_28428__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28424,inst_28428,inst_28432,inst_28427,inst_28427__$1,inst_28428__$1,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28353_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28353_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28424,inst_28428,inst_28432,inst_28427,inst_28427__$1,inst_28428__$1,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28430 = cljs.core.filter.call(null,inst_28429,inst_28427__$1);
var inst_28431 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28432__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28431);
var inst_28433 = cljs.core.not_empty.call(null,inst_28432__$1);
var state_28511__$1 = (function (){var statearr_28539 = state_28511;
(statearr_28539[(23)] = inst_28428__$1);

(statearr_28539[(24)] = inst_28432__$1);

(statearr_28539[(25)] = inst_28427__$1);

(statearr_28539[(26)] = inst_28430);

return statearr_28539;
})();
if(cljs.core.truth_(inst_28433)){
var statearr_28540_28617 = state_28511__$1;
(statearr_28540_28617[(1)] = (23));

} else {
var statearr_28541_28618 = state_28511__$1;
(statearr_28541_28618[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (36))){
var state_28511__$1 = state_28511;
var statearr_28542_28619 = state_28511__$1;
(statearr_28542_28619[(2)] = false);

(statearr_28542_28619[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (41))){
var inst_28486 = (state_28511[(20)]);
var inst_28490 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28491 = cljs.core.map.call(null,inst_28490,inst_28486);
var inst_28492 = cljs.core.pr_str.call(null,inst_28491);
var inst_28493 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28492)].join('');
var inst_28494 = figwheel.client.utils.log.call(null,inst_28493);
var state_28511__$1 = state_28511;
var statearr_28543_28620 = state_28511__$1;
(statearr_28543_28620[(2)] = inst_28494);

(statearr_28543_28620[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (43))){
var inst_28487 = (state_28511[(21)]);
var inst_28497 = (state_28511[(2)]);
var inst_28498 = cljs.core.not_empty.call(null,inst_28487);
var state_28511__$1 = (function (){var statearr_28544 = state_28511;
(statearr_28544[(27)] = inst_28497);

return statearr_28544;
})();
if(cljs.core.truth_(inst_28498)){
var statearr_28545_28621 = state_28511__$1;
(statearr_28545_28621[(1)] = (44));

} else {
var statearr_28546_28622 = state_28511__$1;
(statearr_28546_28622[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (29))){
var inst_28424 = (state_28511[(19)]);
var inst_28428 = (state_28511[(23)]);
var inst_28464 = (state_28511[(16)]);
var inst_28432 = (state_28511[(24)]);
var inst_28427 = (state_28511[(25)]);
var inst_28430 = (state_28511[(26)]);
var inst_28460 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28463 = (function (){var all_files = inst_28424;
var res_SINGLEQUOTE_ = inst_28427;
var res = inst_28428;
var files_not_loaded = inst_28430;
var dependencies_that_loaded = inst_28432;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28424,inst_28428,inst_28464,inst_28432,inst_28427,inst_28430,inst_28460,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28462){
var map__28547 = p__28462;
var map__28547__$1 = ((((!((map__28547 == null)))?(((((map__28547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28547):map__28547);
var namespace = cljs.core.get.call(null,map__28547__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28424,inst_28428,inst_28464,inst_28432,inst_28427,inst_28430,inst_28460,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28464__$1 = cljs.core.group_by.call(null,inst_28463,inst_28430);
var inst_28466 = (inst_28464__$1 == null);
var inst_28467 = cljs.core.not.call(null,inst_28466);
var state_28511__$1 = (function (){var statearr_28549 = state_28511;
(statearr_28549[(28)] = inst_28460);

(statearr_28549[(16)] = inst_28464__$1);

return statearr_28549;
})();
if(inst_28467){
var statearr_28550_28623 = state_28511__$1;
(statearr_28550_28623[(1)] = (32));

} else {
var statearr_28551_28624 = state_28511__$1;
(statearr_28551_28624[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (44))){
var inst_28487 = (state_28511[(21)]);
var inst_28500 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28487);
var inst_28501 = cljs.core.pr_str.call(null,inst_28500);
var inst_28502 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28501)].join('');
var inst_28503 = figwheel.client.utils.log.call(null,inst_28502);
var state_28511__$1 = state_28511;
var statearr_28552_28625 = state_28511__$1;
(statearr_28552_28625[(2)] = inst_28503);

(statearr_28552_28625[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (6))){
var inst_28405 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
var statearr_28553_28626 = state_28511__$1;
(statearr_28553_28626[(2)] = inst_28405);

(statearr_28553_28626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (28))){
var inst_28430 = (state_28511[(26)]);
var inst_28457 = (state_28511[(2)]);
var inst_28458 = cljs.core.not_empty.call(null,inst_28430);
var state_28511__$1 = (function (){var statearr_28554 = state_28511;
(statearr_28554[(29)] = inst_28457);

return statearr_28554;
})();
if(cljs.core.truth_(inst_28458)){
var statearr_28555_28627 = state_28511__$1;
(statearr_28555_28627[(1)] = (29));

} else {
var statearr_28556_28628 = state_28511__$1;
(statearr_28556_28628[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (25))){
var inst_28428 = (state_28511[(23)]);
var inst_28444 = (state_28511[(2)]);
var inst_28445 = cljs.core.not_empty.call(null,inst_28428);
var state_28511__$1 = (function (){var statearr_28557 = state_28511;
(statearr_28557[(30)] = inst_28444);

return statearr_28557;
})();
if(cljs.core.truth_(inst_28445)){
var statearr_28558_28629 = state_28511__$1;
(statearr_28558_28629[(1)] = (26));

} else {
var statearr_28559_28630 = state_28511__$1;
(statearr_28559_28630[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (34))){
var inst_28480 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
if(cljs.core.truth_(inst_28480)){
var statearr_28560_28631 = state_28511__$1;
(statearr_28560_28631[(1)] = (38));

} else {
var statearr_28561_28632 = state_28511__$1;
(statearr_28561_28632[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (17))){
var state_28511__$1 = state_28511;
var statearr_28562_28633 = state_28511__$1;
(statearr_28562_28633[(2)] = recompile_dependents);

(statearr_28562_28633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (3))){
var state_28511__$1 = state_28511;
var statearr_28563_28634 = state_28511__$1;
(statearr_28563_28634[(2)] = null);

(statearr_28563_28634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (12))){
var inst_28401 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
var statearr_28564_28635 = state_28511__$1;
(statearr_28564_28635[(2)] = inst_28401);

(statearr_28564_28635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (2))){
var inst_28363 = (state_28511[(13)]);
var inst_28370 = cljs.core.seq.call(null,inst_28363);
var inst_28371 = inst_28370;
var inst_28372 = null;
var inst_28373 = (0);
var inst_28374 = (0);
var state_28511__$1 = (function (){var statearr_28565 = state_28511;
(statearr_28565[(7)] = inst_28372);

(statearr_28565[(8)] = inst_28373);

(statearr_28565[(9)] = inst_28371);

(statearr_28565[(10)] = inst_28374);

return statearr_28565;
})();
var statearr_28566_28636 = state_28511__$1;
(statearr_28566_28636[(2)] = null);

(statearr_28566_28636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (23))){
var inst_28424 = (state_28511[(19)]);
var inst_28428 = (state_28511[(23)]);
var inst_28432 = (state_28511[(24)]);
var inst_28427 = (state_28511[(25)]);
var inst_28430 = (state_28511[(26)]);
var inst_28435 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28437 = (function (){var all_files = inst_28424;
var res_SINGLEQUOTE_ = inst_28427;
var res = inst_28428;
var files_not_loaded = inst_28430;
var dependencies_that_loaded = inst_28432;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28424,inst_28428,inst_28432,inst_28427,inst_28430,inst_28435,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28436){
var map__28567 = p__28436;
var map__28567__$1 = ((((!((map__28567 == null)))?(((((map__28567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28567):map__28567);
var request_url = cljs.core.get.call(null,map__28567__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28424,inst_28428,inst_28432,inst_28427,inst_28430,inst_28435,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28438 = cljs.core.reverse.call(null,inst_28432);
var inst_28439 = cljs.core.map.call(null,inst_28437,inst_28438);
var inst_28440 = cljs.core.pr_str.call(null,inst_28439);
var inst_28441 = figwheel.client.utils.log.call(null,inst_28440);
var state_28511__$1 = (function (){var statearr_28569 = state_28511;
(statearr_28569[(31)] = inst_28435);

return statearr_28569;
})();
var statearr_28570_28637 = state_28511__$1;
(statearr_28570_28637[(2)] = inst_28441);

(statearr_28570_28637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (35))){
var state_28511__$1 = state_28511;
var statearr_28571_28638 = state_28511__$1;
(statearr_28571_28638[(2)] = true);

(statearr_28571_28638[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (19))){
var inst_28414 = (state_28511[(12)]);
var inst_28420 = figwheel.client.file_reloading.expand_files.call(null,inst_28414);
var state_28511__$1 = state_28511;
var statearr_28572_28639 = state_28511__$1;
(statearr_28572_28639[(2)] = inst_28420);

(statearr_28572_28639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (11))){
var state_28511__$1 = state_28511;
var statearr_28573_28640 = state_28511__$1;
(statearr_28573_28640[(2)] = null);

(statearr_28573_28640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (9))){
var inst_28403 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
var statearr_28574_28641 = state_28511__$1;
(statearr_28574_28641[(2)] = inst_28403);

(statearr_28574_28641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (5))){
var inst_28373 = (state_28511[(8)]);
var inst_28374 = (state_28511[(10)]);
var inst_28376 = (inst_28374 < inst_28373);
var inst_28377 = inst_28376;
var state_28511__$1 = state_28511;
if(cljs.core.truth_(inst_28377)){
var statearr_28575_28642 = state_28511__$1;
(statearr_28575_28642[(1)] = (7));

} else {
var statearr_28576_28643 = state_28511__$1;
(statearr_28576_28643[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (14))){
var inst_28384 = (state_28511[(22)]);
var inst_28393 = cljs.core.first.call(null,inst_28384);
var inst_28394 = figwheel.client.file_reloading.eval_body.call(null,inst_28393,opts);
var inst_28395 = cljs.core.next.call(null,inst_28384);
var inst_28371 = inst_28395;
var inst_28372 = null;
var inst_28373 = (0);
var inst_28374 = (0);
var state_28511__$1 = (function (){var statearr_28577 = state_28511;
(statearr_28577[(7)] = inst_28372);

(statearr_28577[(8)] = inst_28373);

(statearr_28577[(9)] = inst_28371);

(statearr_28577[(10)] = inst_28374);

(statearr_28577[(32)] = inst_28394);

return statearr_28577;
})();
var statearr_28578_28644 = state_28511__$1;
(statearr_28578_28644[(2)] = null);

(statearr_28578_28644[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (45))){
var state_28511__$1 = state_28511;
var statearr_28579_28645 = state_28511__$1;
(statearr_28579_28645[(2)] = null);

(statearr_28579_28645[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (26))){
var inst_28424 = (state_28511[(19)]);
var inst_28428 = (state_28511[(23)]);
var inst_28432 = (state_28511[(24)]);
var inst_28427 = (state_28511[(25)]);
var inst_28430 = (state_28511[(26)]);
var inst_28447 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28449 = (function (){var all_files = inst_28424;
var res_SINGLEQUOTE_ = inst_28427;
var res = inst_28428;
var files_not_loaded = inst_28430;
var dependencies_that_loaded = inst_28432;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28424,inst_28428,inst_28432,inst_28427,inst_28430,inst_28447,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28448){
var map__28580 = p__28448;
var map__28580__$1 = ((((!((map__28580 == null)))?(((((map__28580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28580):map__28580);
var namespace = cljs.core.get.call(null,map__28580__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28424,inst_28428,inst_28432,inst_28427,inst_28430,inst_28447,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28450 = cljs.core.map.call(null,inst_28449,inst_28428);
var inst_28451 = cljs.core.pr_str.call(null,inst_28450);
var inst_28452 = figwheel.client.utils.log.call(null,inst_28451);
var inst_28453 = (function (){var all_files = inst_28424;
var res_SINGLEQUOTE_ = inst_28427;
var res = inst_28428;
var files_not_loaded = inst_28430;
var dependencies_that_loaded = inst_28432;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28424,inst_28428,inst_28432,inst_28427,inst_28430,inst_28447,inst_28449,inst_28450,inst_28451,inst_28452,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28424,inst_28428,inst_28432,inst_28427,inst_28430,inst_28447,inst_28449,inst_28450,inst_28451,inst_28452,state_val_28512,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28454 = setTimeout(inst_28453,(10));
var state_28511__$1 = (function (){var statearr_28582 = state_28511;
(statearr_28582[(33)] = inst_28452);

(statearr_28582[(34)] = inst_28447);

return statearr_28582;
})();
var statearr_28583_28646 = state_28511__$1;
(statearr_28583_28646[(2)] = inst_28454);

(statearr_28583_28646[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (16))){
var state_28511__$1 = state_28511;
var statearr_28584_28647 = state_28511__$1;
(statearr_28584_28647[(2)] = reload_dependents);

(statearr_28584_28647[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (38))){
var inst_28464 = (state_28511[(16)]);
var inst_28482 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28464);
var state_28511__$1 = state_28511;
var statearr_28585_28648 = state_28511__$1;
(statearr_28585_28648[(2)] = inst_28482);

(statearr_28585_28648[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (30))){
var state_28511__$1 = state_28511;
var statearr_28586_28649 = state_28511__$1;
(statearr_28586_28649[(2)] = null);

(statearr_28586_28649[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (10))){
var inst_28384 = (state_28511[(22)]);
var inst_28386 = cljs.core.chunked_seq_QMARK_.call(null,inst_28384);
var state_28511__$1 = state_28511;
if(inst_28386){
var statearr_28587_28650 = state_28511__$1;
(statearr_28587_28650[(1)] = (13));

} else {
var statearr_28588_28651 = state_28511__$1;
(statearr_28588_28651[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (18))){
var inst_28418 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
if(cljs.core.truth_(inst_28418)){
var statearr_28589_28652 = state_28511__$1;
(statearr_28589_28652[(1)] = (19));

} else {
var statearr_28590_28653 = state_28511__$1;
(statearr_28590_28653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (42))){
var state_28511__$1 = state_28511;
var statearr_28591_28654 = state_28511__$1;
(statearr_28591_28654[(2)] = null);

(statearr_28591_28654[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (37))){
var inst_28477 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
var statearr_28592_28655 = state_28511__$1;
(statearr_28592_28655[(2)] = inst_28477);

(statearr_28592_28655[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (8))){
var inst_28384 = (state_28511[(22)]);
var inst_28371 = (state_28511[(9)]);
var inst_28384__$1 = cljs.core.seq.call(null,inst_28371);
var state_28511__$1 = (function (){var statearr_28593 = state_28511;
(statearr_28593[(22)] = inst_28384__$1);

return statearr_28593;
})();
if(inst_28384__$1){
var statearr_28594_28656 = state_28511__$1;
(statearr_28594_28656[(1)] = (10));

} else {
var statearr_28595_28657 = state_28511__$1;
(statearr_28595_28657[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19597__auto__,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto____0 = (function (){
var statearr_28596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28596[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto__);

(statearr_28596[(1)] = (1));

return statearr_28596;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto____1 = (function (state_28511){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_28511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e28597){if((e28597 instanceof Object)){
var ex__19601__auto__ = e28597;
var statearr_28598_28658 = state_28511;
(statearr_28598_28658[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28659 = state_28511;
state_28511 = G__28659;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto__ = function(state_28511){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto____1.call(this,state_28511);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19620__auto__ = (function (){var statearr_28599 = f__19619__auto__.call(null);
(statearr_28599[(6)] = c__19618__auto__);

return statearr_28599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto__,map__28356,map__28356__$1,opts,before_jsload,on_jsload,reload_dependents,map__28357,map__28357__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19618__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28662,link){
var map__28663 = p__28662;
var map__28663__$1 = ((((!((map__28663 == null)))?(((((map__28663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28663):map__28663);
var file = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28663,map__28663__$1,file){
return (function (p1__28660_SHARP_,p2__28661_SHARP_){
if(cljs.core._EQ_.call(null,p1__28660_SHARP_,p2__28661_SHARP_)){
return p1__28660_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28663,map__28663__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28666){
var map__28667 = p__28666;
var map__28667__$1 = ((((!((map__28667 == null)))?(((((map__28667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28667):map__28667);
var match_length = cljs.core.get.call(null,map__28667__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28667__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28665_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28665_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28669_SHARP_,p2__28670_SHARP_){
return cljs.core.assoc.call(null,p1__28669_SHARP_,cljs.core.get.call(null,p2__28670_SHARP_,key),p2__28670_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28671 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28671);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28671);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28672,p__28673){
var map__28674 = p__28672;
var map__28674__$1 = ((((!((map__28674 == null)))?(((((map__28674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28674):map__28674);
var on_cssload = cljs.core.get.call(null,map__28674__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28675 = p__28673;
var map__28675__$1 = ((((!((map__28675 == null)))?(((((map__28675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28675):map__28675);
var files_msg = map__28675__$1;
var files = cljs.core.get.call(null,map__28675__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
