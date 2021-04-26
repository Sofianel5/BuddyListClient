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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__11062_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__11062_SHARP_));
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
var seq__11063 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__11064 = null;
var count__11065 = (0);
var i__11066 = (0);
while(true){
if((i__11066 < count__11065)){
var n = cljs.core._nth.call(null,chunk__11064,i__11066);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__11067 = seq__11063;
var G__11068 = chunk__11064;
var G__11069 = count__11065;
var G__11070 = (i__11066 + (1));
seq__11063 = G__11067;
chunk__11064 = G__11068;
count__11065 = G__11069;
i__11066 = G__11070;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11063);
if(temp__4657__auto__){
var seq__11063__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11063__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__11063__$1);
var G__11071 = cljs.core.chunk_rest.call(null,seq__11063__$1);
var G__11072 = c__4317__auto__;
var G__11073 = cljs.core.count.call(null,c__4317__auto__);
var G__11074 = (0);
seq__11063 = G__11071;
chunk__11064 = G__11072;
count__11065 = G__11073;
i__11066 = G__11074;
continue;
} else {
var n = cljs.core.first.call(null,seq__11063__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__11075 = cljs.core.next.call(null,seq__11063__$1);
var G__11076 = null;
var G__11077 = (0);
var G__11078 = (0);
seq__11063 = G__11075;
chunk__11064 = G__11076;
count__11065 = G__11077;
i__11066 = G__11078;
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

var seq__11088_11096 = cljs.core.seq.call(null,deps);
var chunk__11089_11097 = null;
var count__11090_11098 = (0);
var i__11091_11099 = (0);
while(true){
if((i__11091_11099 < count__11090_11098)){
var dep_11100 = cljs.core._nth.call(null,chunk__11089_11097,i__11091_11099);
topo_sort_helper_STAR_.call(null,dep_11100,(depth + (1)),state);


var G__11101 = seq__11088_11096;
var G__11102 = chunk__11089_11097;
var G__11103 = count__11090_11098;
var G__11104 = (i__11091_11099 + (1));
seq__11088_11096 = G__11101;
chunk__11089_11097 = G__11102;
count__11090_11098 = G__11103;
i__11091_11099 = G__11104;
continue;
} else {
var temp__4657__auto___11105 = cljs.core.seq.call(null,seq__11088_11096);
if(temp__4657__auto___11105){
var seq__11088_11106__$1 = temp__4657__auto___11105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11088_11106__$1)){
var c__4317__auto___11107 = cljs.core.chunk_first.call(null,seq__11088_11106__$1);
var G__11108 = cljs.core.chunk_rest.call(null,seq__11088_11106__$1);
var G__11109 = c__4317__auto___11107;
var G__11110 = cljs.core.count.call(null,c__4317__auto___11107);
var G__11111 = (0);
seq__11088_11096 = G__11108;
chunk__11089_11097 = G__11109;
count__11090_11098 = G__11110;
i__11091_11099 = G__11111;
continue;
} else {
var dep_11112 = cljs.core.first.call(null,seq__11088_11106__$1);
topo_sort_helper_STAR_.call(null,dep_11112,(depth + (1)),state);


var G__11113 = cljs.core.next.call(null,seq__11088_11106__$1);
var G__11114 = null;
var G__11115 = (0);
var G__11116 = (0);
seq__11088_11096 = G__11113;
chunk__11089_11097 = G__11114;
count__11090_11098 = G__11115;
i__11091_11099 = G__11116;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__11092){
var vec__11093 = p__11092;
var seq__11094 = cljs.core.seq.call(null,vec__11093);
var first__11095 = cljs.core.first.call(null,seq__11094);
var seq__11094__$1 = cljs.core.next.call(null,seq__11094);
var x = first__11095;
var xs = seq__11094__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__11093,seq__11094,first__11095,seq__11094__$1,x,xs,get_deps__$1){
return (function (p1__11079_SHARP_){
return clojure.set.difference.call(null,p1__11079_SHARP_,x);
});})(vec__11093,seq__11094,first__11095,seq__11094__$1,x,xs,get_deps__$1))
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
var seq__11117 = cljs.core.seq.call(null,provides);
var chunk__11118 = null;
var count__11119 = (0);
var i__11120 = (0);
while(true){
if((i__11120 < count__11119)){
var prov = cljs.core._nth.call(null,chunk__11118,i__11120);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__11121_11129 = cljs.core.seq.call(null,requires);
var chunk__11122_11130 = null;
var count__11123_11131 = (0);
var i__11124_11132 = (0);
while(true){
if((i__11124_11132 < count__11123_11131)){
var req_11133 = cljs.core._nth.call(null,chunk__11122_11130,i__11124_11132);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_11133,prov);


var G__11134 = seq__11121_11129;
var G__11135 = chunk__11122_11130;
var G__11136 = count__11123_11131;
var G__11137 = (i__11124_11132 + (1));
seq__11121_11129 = G__11134;
chunk__11122_11130 = G__11135;
count__11123_11131 = G__11136;
i__11124_11132 = G__11137;
continue;
} else {
var temp__4657__auto___11138 = cljs.core.seq.call(null,seq__11121_11129);
if(temp__4657__auto___11138){
var seq__11121_11139__$1 = temp__4657__auto___11138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11121_11139__$1)){
var c__4317__auto___11140 = cljs.core.chunk_first.call(null,seq__11121_11139__$1);
var G__11141 = cljs.core.chunk_rest.call(null,seq__11121_11139__$1);
var G__11142 = c__4317__auto___11140;
var G__11143 = cljs.core.count.call(null,c__4317__auto___11140);
var G__11144 = (0);
seq__11121_11129 = G__11141;
chunk__11122_11130 = G__11142;
count__11123_11131 = G__11143;
i__11124_11132 = G__11144;
continue;
} else {
var req_11145 = cljs.core.first.call(null,seq__11121_11139__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_11145,prov);


var G__11146 = cljs.core.next.call(null,seq__11121_11139__$1);
var G__11147 = null;
var G__11148 = (0);
var G__11149 = (0);
seq__11121_11129 = G__11146;
chunk__11122_11130 = G__11147;
count__11123_11131 = G__11148;
i__11124_11132 = G__11149;
continue;
}
} else {
}
}
break;
}


var G__11150 = seq__11117;
var G__11151 = chunk__11118;
var G__11152 = count__11119;
var G__11153 = (i__11120 + (1));
seq__11117 = G__11150;
chunk__11118 = G__11151;
count__11119 = G__11152;
i__11120 = G__11153;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11117);
if(temp__4657__auto__){
var seq__11117__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11117__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__11117__$1);
var G__11154 = cljs.core.chunk_rest.call(null,seq__11117__$1);
var G__11155 = c__4317__auto__;
var G__11156 = cljs.core.count.call(null,c__4317__auto__);
var G__11157 = (0);
seq__11117 = G__11154;
chunk__11118 = G__11155;
count__11119 = G__11156;
i__11120 = G__11157;
continue;
} else {
var prov = cljs.core.first.call(null,seq__11117__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__11125_11158 = cljs.core.seq.call(null,requires);
var chunk__11126_11159 = null;
var count__11127_11160 = (0);
var i__11128_11161 = (0);
while(true){
if((i__11128_11161 < count__11127_11160)){
var req_11162 = cljs.core._nth.call(null,chunk__11126_11159,i__11128_11161);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_11162,prov);


var G__11163 = seq__11125_11158;
var G__11164 = chunk__11126_11159;
var G__11165 = count__11127_11160;
var G__11166 = (i__11128_11161 + (1));
seq__11125_11158 = G__11163;
chunk__11126_11159 = G__11164;
count__11127_11160 = G__11165;
i__11128_11161 = G__11166;
continue;
} else {
var temp__4657__auto___11167__$1 = cljs.core.seq.call(null,seq__11125_11158);
if(temp__4657__auto___11167__$1){
var seq__11125_11168__$1 = temp__4657__auto___11167__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11125_11168__$1)){
var c__4317__auto___11169 = cljs.core.chunk_first.call(null,seq__11125_11168__$1);
var G__11170 = cljs.core.chunk_rest.call(null,seq__11125_11168__$1);
var G__11171 = c__4317__auto___11169;
var G__11172 = cljs.core.count.call(null,c__4317__auto___11169);
var G__11173 = (0);
seq__11125_11158 = G__11170;
chunk__11126_11159 = G__11171;
count__11127_11160 = G__11172;
i__11128_11161 = G__11173;
continue;
} else {
var req_11174 = cljs.core.first.call(null,seq__11125_11168__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_11174,prov);


var G__11175 = cljs.core.next.call(null,seq__11125_11168__$1);
var G__11176 = null;
var G__11177 = (0);
var G__11178 = (0);
seq__11125_11158 = G__11175;
chunk__11126_11159 = G__11176;
count__11127_11160 = G__11177;
i__11128_11161 = G__11178;
continue;
}
} else {
}
}
break;
}


var G__11179 = cljs.core.next.call(null,seq__11117__$1);
var G__11180 = null;
var G__11181 = (0);
var G__11182 = (0);
seq__11117 = G__11179;
chunk__11118 = G__11180;
count__11119 = G__11181;
i__11120 = G__11182;
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
var seq__11183_11187 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__11184_11188 = null;
var count__11185_11189 = (0);
var i__11186_11190 = (0);
while(true){
if((i__11186_11190 < count__11185_11189)){
var ns_11191 = cljs.core._nth.call(null,chunk__11184_11188,i__11186_11190);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_11191);


var G__11192 = seq__11183_11187;
var G__11193 = chunk__11184_11188;
var G__11194 = count__11185_11189;
var G__11195 = (i__11186_11190 + (1));
seq__11183_11187 = G__11192;
chunk__11184_11188 = G__11193;
count__11185_11189 = G__11194;
i__11186_11190 = G__11195;
continue;
} else {
var temp__4657__auto___11196 = cljs.core.seq.call(null,seq__11183_11187);
if(temp__4657__auto___11196){
var seq__11183_11197__$1 = temp__4657__auto___11196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11183_11197__$1)){
var c__4317__auto___11198 = cljs.core.chunk_first.call(null,seq__11183_11197__$1);
var G__11199 = cljs.core.chunk_rest.call(null,seq__11183_11197__$1);
var G__11200 = c__4317__auto___11198;
var G__11201 = cljs.core.count.call(null,c__4317__auto___11198);
var G__11202 = (0);
seq__11183_11187 = G__11199;
chunk__11184_11188 = G__11200;
count__11185_11189 = G__11201;
i__11186_11190 = G__11202;
continue;
} else {
var ns_11203 = cljs.core.first.call(null,seq__11183_11197__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_11203);


var G__11204 = cljs.core.next.call(null,seq__11183_11197__$1);
var G__11205 = null;
var G__11206 = (0);
var G__11207 = (0);
seq__11183_11187 = G__11204;
chunk__11184_11188 = G__11205;
count__11185_11189 = G__11206;
i__11186_11190 = G__11207;
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
var G__11208__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__11208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11209__i = 0, G__11209__a = new Array(arguments.length -  0);
while (G__11209__i < G__11209__a.length) {G__11209__a[G__11209__i] = arguments[G__11209__i + 0]; ++G__11209__i;}
  args = new cljs.core.IndexedSeq(G__11209__a,0,null);
} 
return G__11208__delegate.call(this,args);};
G__11208.cljs$lang$maxFixedArity = 0;
G__11208.cljs$lang$applyTo = (function (arglist__11210){
var args = cljs.core.seq(arglist__11210);
return G__11208__delegate(args);
});
G__11208.cljs$core$IFn$_invoke$arity$variadic = G__11208__delegate;
return G__11208;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__11211 = cljs.core._EQ_;
var expr__11212 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__11211.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__11212))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__11211,expr__11212){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__11211,expr__11212))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__11211,expr__11212){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e11214){if((e11214 instanceof Error)){
var e = e11214;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e11214;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__11211,expr__11212))
} else {
if(cljs.core.truth_(pred__11211.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__11212))){
return ((function (pred__11211,expr__11212){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__11211,expr__11212){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__11211,expr__11212))
);

return deferred.addErrback(((function (deferred,pred__11211,expr__11212){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__11211,expr__11212))
);
});
;})(pred__11211,expr__11212))
} else {
if(cljs.core.truth_(pred__11211.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__11212))){
return ((function (pred__11211,expr__11212){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e11215){if((e11215 instanceof Error)){
var e = e11215;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e11215;

}
}})());
});
;})(pred__11211,expr__11212))
} else {
return ((function (pred__11211,expr__11212){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__11211,expr__11212))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__11216,callback){
var map__11217 = p__11216;
var map__11217__$1 = ((((!((map__11217 == null)))?(((((map__11217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11217):map__11217);
var file_msg = map__11217__$1;
var request_url = cljs.core.get.call(null,map__11217__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__11217,map__11217__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__11217,map__11217__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__2788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto__){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto__){
return (function (state_11241){
var state_val_11242 = (state_11241[(1)]);
if((state_val_11242 === (7))){
var inst_11237 = (state_11241[(2)]);
var state_11241__$1 = state_11241;
var statearr_11243_11260 = state_11241__$1;
(statearr_11243_11260[(2)] = inst_11237);

(statearr_11243_11260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (1))){
var state_11241__$1 = state_11241;
var statearr_11244_11261 = state_11241__$1;
(statearr_11244_11261[(2)] = null);

(statearr_11244_11261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (4))){
var inst_11221 = (state_11241[(7)]);
var inst_11221__$1 = (state_11241[(2)]);
var state_11241__$1 = (function (){var statearr_11245 = state_11241;
(statearr_11245[(7)] = inst_11221__$1);

return statearr_11245;
})();
if(cljs.core.truth_(inst_11221__$1)){
var statearr_11246_11262 = state_11241__$1;
(statearr_11246_11262[(1)] = (5));

} else {
var statearr_11247_11263 = state_11241__$1;
(statearr_11247_11263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (6))){
var state_11241__$1 = state_11241;
var statearr_11248_11264 = state_11241__$1;
(statearr_11248_11264[(2)] = null);

(statearr_11248_11264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (3))){
var inst_11239 = (state_11241[(2)]);
var state_11241__$1 = state_11241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11241__$1,inst_11239);
} else {
if((state_val_11242 === (2))){
var state_11241__$1 = state_11241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11241__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_11242 === (11))){
var inst_11233 = (state_11241[(2)]);
var state_11241__$1 = (function (){var statearr_11249 = state_11241;
(statearr_11249[(8)] = inst_11233);

return statearr_11249;
})();
var statearr_11250_11265 = state_11241__$1;
(statearr_11250_11265[(2)] = null);

(statearr_11250_11265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (9))){
var inst_11225 = (state_11241[(9)]);
var inst_11227 = (state_11241[(10)]);
var inst_11229 = inst_11227.call(null,inst_11225);
var state_11241__$1 = state_11241;
var statearr_11251_11266 = state_11241__$1;
(statearr_11251_11266[(2)] = inst_11229);

(statearr_11251_11266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (5))){
var inst_11221 = (state_11241[(7)]);
var inst_11223 = figwheel.client.file_reloading.blocking_load.call(null,inst_11221);
var state_11241__$1 = state_11241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11241__$1,(8),inst_11223);
} else {
if((state_val_11242 === (10))){
var inst_11225 = (state_11241[(9)]);
var inst_11231 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_11225);
var state_11241__$1 = state_11241;
var statearr_11252_11267 = state_11241__$1;
(statearr_11252_11267[(2)] = inst_11231);

(statearr_11252_11267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (8))){
var inst_11227 = (state_11241[(10)]);
var inst_11221 = (state_11241[(7)]);
var inst_11225 = (state_11241[(2)]);
var inst_11226 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_11227__$1 = cljs.core.get.call(null,inst_11226,inst_11221);
var state_11241__$1 = (function (){var statearr_11253 = state_11241;
(statearr_11253[(9)] = inst_11225);

(statearr_11253[(10)] = inst_11227__$1);

return statearr_11253;
})();
if(cljs.core.truth_(inst_11227__$1)){
var statearr_11254_11268 = state_11241__$1;
(statearr_11254_11268[(1)] = (9));

} else {
var statearr_11255_11269 = state_11241__$1;
(statearr_11255_11269[(1)] = (10));

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
});})(c__2788__auto__))
;
return ((function (switch__2633__auto__,c__2788__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__2634__auto__ = null;
var figwheel$client$file_reloading$state_machine__2634__auto____0 = (function (){
var statearr_11256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11256[(0)] = figwheel$client$file_reloading$state_machine__2634__auto__);

(statearr_11256[(1)] = (1));

return statearr_11256;
});
var figwheel$client$file_reloading$state_machine__2634__auto____1 = (function (state_11241){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_11241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e11257){if((e11257 instanceof Object)){
var ex__2637__auto__ = e11257;
var statearr_11258_11270 = state_11241;
(statearr_11258_11270[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11271 = state_11241;
state_11241 = G__11271;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__2634__auto__ = function(state_11241){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__2634__auto____1.call(this,state_11241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__2634__auto____0;
figwheel$client$file_reloading$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__2634__auto____1;
return figwheel$client$file_reloading$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__))
})();
var state__2790__auto__ = (function (){var statearr_11259 = f__2789__auto__.call(null);
(statearr_11259[(6)] = c__2788__auto__);

return statearr_11259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__))
);

return c__2788__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__11272,callback){
var map__11273 = p__11272;
var map__11273__$1 = ((((!((map__11273 == null)))?(((((map__11273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11273):map__11273);
var file_msg = map__11273__$1;
var namespace = cljs.core.get.call(null,map__11273__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__11273,map__11273__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__11273,map__11273__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__11275){
var map__11276 = p__11275;
var map__11276__$1 = ((((!((map__11276 == null)))?(((((map__11276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11276):map__11276);
var file_msg = map__11276__$1;
var namespace = cljs.core.get.call(null,map__11276__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__11278){
var map__11279 = p__11278;
var map__11279__$1 = ((((!((map__11279 == null)))?(((((map__11279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11279):map__11279);
var file_msg = map__11279__$1;
var namespace = cljs.core.get.call(null,map__11279__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__11281,callback){
var map__11282 = p__11281;
var map__11282__$1 = ((((!((map__11282 == null)))?(((((map__11282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11282):map__11282);
var file_msg = map__11282__$1;
var request_url = cljs.core.get.call(null,map__11282__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__11282__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__2788__auto___11332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___11332,out){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___11332,out){
return (function (state_11317){
var state_val_11318 = (state_11317[(1)]);
if((state_val_11318 === (1))){
var inst_11291 = cljs.core.seq.call(null,files);
var inst_11292 = cljs.core.first.call(null,inst_11291);
var inst_11293 = cljs.core.next.call(null,inst_11291);
var inst_11294 = files;
var state_11317__$1 = (function (){var statearr_11319 = state_11317;
(statearr_11319[(7)] = inst_11292);

(statearr_11319[(8)] = inst_11294);

(statearr_11319[(9)] = inst_11293);

return statearr_11319;
})();
var statearr_11320_11333 = state_11317__$1;
(statearr_11320_11333[(2)] = null);

(statearr_11320_11333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11318 === (2))){
var inst_11294 = (state_11317[(8)]);
var inst_11300 = (state_11317[(10)]);
var inst_11299 = cljs.core.seq.call(null,inst_11294);
var inst_11300__$1 = cljs.core.first.call(null,inst_11299);
var inst_11301 = cljs.core.next.call(null,inst_11299);
var inst_11302 = (inst_11300__$1 == null);
var inst_11303 = cljs.core.not.call(null,inst_11302);
var state_11317__$1 = (function (){var statearr_11321 = state_11317;
(statearr_11321[(11)] = inst_11301);

(statearr_11321[(10)] = inst_11300__$1);

return statearr_11321;
})();
if(inst_11303){
var statearr_11322_11334 = state_11317__$1;
(statearr_11322_11334[(1)] = (4));

} else {
var statearr_11323_11335 = state_11317__$1;
(statearr_11323_11335[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11318 === (3))){
var inst_11315 = (state_11317[(2)]);
var state_11317__$1 = state_11317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11317__$1,inst_11315);
} else {
if((state_val_11318 === (4))){
var inst_11300 = (state_11317[(10)]);
var inst_11305 = figwheel.client.file_reloading.reload_js_file.call(null,inst_11300);
var state_11317__$1 = state_11317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11317__$1,(7),inst_11305);
} else {
if((state_val_11318 === (5))){
var inst_11311 = cljs.core.async.close_BANG_.call(null,out);
var state_11317__$1 = state_11317;
var statearr_11324_11336 = state_11317__$1;
(statearr_11324_11336[(2)] = inst_11311);

(statearr_11324_11336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11318 === (6))){
var inst_11313 = (state_11317[(2)]);
var state_11317__$1 = state_11317;
var statearr_11325_11337 = state_11317__$1;
(statearr_11325_11337[(2)] = inst_11313);

(statearr_11325_11337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11318 === (7))){
var inst_11301 = (state_11317[(11)]);
var inst_11307 = (state_11317[(2)]);
var inst_11308 = cljs.core.async.put_BANG_.call(null,out,inst_11307);
var inst_11294 = inst_11301;
var state_11317__$1 = (function (){var statearr_11326 = state_11317;
(statearr_11326[(8)] = inst_11294);

(statearr_11326[(12)] = inst_11308);

return statearr_11326;
})();
var statearr_11327_11338 = state_11317__$1;
(statearr_11327_11338[(2)] = null);

(statearr_11327_11338[(1)] = (2));


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
});})(c__2788__auto___11332,out))
;
return ((function (switch__2633__auto__,c__2788__auto___11332,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____0 = (function (){
var statearr_11328 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11328[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__);

(statearr_11328[(1)] = (1));

return statearr_11328;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____1 = (function (state_11317){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_11317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e11329){if((e11329 instanceof Object)){
var ex__2637__auto__ = e11329;
var statearr_11330_11339 = state_11317;
(statearr_11330_11339[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11340 = state_11317;
state_11317 = G__11340;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__ = function(state_11317){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____1.call(this,state_11317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___11332,out))
})();
var state__2790__auto__ = (function (){var statearr_11331 = f__2789__auto__.call(null);
(statearr_11331[(6)] = c__2788__auto___11332);

return statearr_11331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___11332,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__11341,opts){
var map__11342 = p__11341;
var map__11342__$1 = ((((!((map__11342 == null)))?(((((map__11342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11342):map__11342);
var eval_body = cljs.core.get.call(null,map__11342__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__11342__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e11344){var e = e11344;
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
return (function (p1__11345_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__11345_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__11346){
var vec__11347 = p__11346;
var k = cljs.core.nth.call(null,vec__11347,(0),null);
var v = cljs.core.nth.call(null,vec__11347,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__11350){
var vec__11351 = p__11350;
var k = cljs.core.nth.call(null,vec__11351,(0),null);
var v = cljs.core.nth.call(null,vec__11351,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__11357,p__11358){
var map__11359 = p__11357;
var map__11359__$1 = ((((!((map__11359 == null)))?(((((map__11359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11359):map__11359);
var opts = map__11359__$1;
var before_jsload = cljs.core.get.call(null,map__11359__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__11359__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__11359__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__11360 = p__11358;
var map__11360__$1 = ((((!((map__11360 == null)))?(((((map__11360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11360):map__11360);
var msg = map__11360__$1;
var files = cljs.core.get.call(null,map__11360__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__11360__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__11360__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__2788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_11514){
var state_val_11515 = (state_11514[(1)]);
if((state_val_11515 === (7))){
var inst_11377 = (state_11514[(7)]);
var inst_11374 = (state_11514[(8)]);
var inst_11376 = (state_11514[(9)]);
var inst_11375 = (state_11514[(10)]);
var inst_11382 = cljs.core._nth.call(null,inst_11375,inst_11377);
var inst_11383 = figwheel.client.file_reloading.eval_body.call(null,inst_11382,opts);
var inst_11384 = (inst_11377 + (1));
var tmp11516 = inst_11374;
var tmp11517 = inst_11376;
var tmp11518 = inst_11375;
var inst_11374__$1 = tmp11516;
var inst_11375__$1 = tmp11518;
var inst_11376__$1 = tmp11517;
var inst_11377__$1 = inst_11384;
var state_11514__$1 = (function (){var statearr_11519 = state_11514;
(statearr_11519[(7)] = inst_11377__$1);

(statearr_11519[(8)] = inst_11374__$1);

(statearr_11519[(11)] = inst_11383);

(statearr_11519[(9)] = inst_11376__$1);

(statearr_11519[(10)] = inst_11375__$1);

return statearr_11519;
})();
var statearr_11520_11603 = state_11514__$1;
(statearr_11520_11603[(2)] = null);

(statearr_11520_11603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (20))){
var inst_11417 = (state_11514[(12)]);
var inst_11425 = figwheel.client.file_reloading.sort_files.call(null,inst_11417);
var state_11514__$1 = state_11514;
var statearr_11521_11604 = state_11514__$1;
(statearr_11521_11604[(2)] = inst_11425);

(statearr_11521_11604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (27))){
var state_11514__$1 = state_11514;
var statearr_11522_11605 = state_11514__$1;
(statearr_11522_11605[(2)] = null);

(statearr_11522_11605[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (1))){
var inst_11366 = (state_11514[(13)]);
var inst_11363 = before_jsload.call(null,files);
var inst_11364 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_11365 = (function (){return ((function (inst_11366,inst_11363,inst_11364,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__11354_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__11354_SHARP_);
});
;})(inst_11366,inst_11363,inst_11364,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_11366__$1 = cljs.core.filter.call(null,inst_11365,files);
var inst_11367 = cljs.core.not_empty.call(null,inst_11366__$1);
var state_11514__$1 = (function (){var statearr_11523 = state_11514;
(statearr_11523[(14)] = inst_11364);

(statearr_11523[(13)] = inst_11366__$1);

(statearr_11523[(15)] = inst_11363);

return statearr_11523;
})();
if(cljs.core.truth_(inst_11367)){
var statearr_11524_11606 = state_11514__$1;
(statearr_11524_11606[(1)] = (2));

} else {
var statearr_11525_11607 = state_11514__$1;
(statearr_11525_11607[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (24))){
var state_11514__$1 = state_11514;
var statearr_11526_11608 = state_11514__$1;
(statearr_11526_11608[(2)] = null);

(statearr_11526_11608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (39))){
var inst_11467 = (state_11514[(16)]);
var state_11514__$1 = state_11514;
var statearr_11527_11609 = state_11514__$1;
(statearr_11527_11609[(2)] = inst_11467);

(statearr_11527_11609[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (46))){
var inst_11509 = (state_11514[(2)]);
var state_11514__$1 = state_11514;
var statearr_11528_11610 = state_11514__$1;
(statearr_11528_11610[(2)] = inst_11509);

(statearr_11528_11610[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (4))){
var inst_11411 = (state_11514[(2)]);
var inst_11412 = cljs.core.List.EMPTY;
var inst_11413 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_11412);
var inst_11414 = (function (){return ((function (inst_11411,inst_11412,inst_11413,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__11355_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__11355_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__11355_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__11355_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_11411,inst_11412,inst_11413,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_11415 = cljs.core.filter.call(null,inst_11414,files);
var inst_11416 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_11417 = cljs.core.concat.call(null,inst_11415,inst_11416);
var state_11514__$1 = (function (){var statearr_11529 = state_11514;
(statearr_11529[(17)] = inst_11411);

(statearr_11529[(18)] = inst_11413);

(statearr_11529[(12)] = inst_11417);

return statearr_11529;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_11530_11611 = state_11514__$1;
(statearr_11530_11611[(1)] = (16));

} else {
var statearr_11531_11612 = state_11514__$1;
(statearr_11531_11612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (15))){
var inst_11401 = (state_11514[(2)]);
var state_11514__$1 = state_11514;
var statearr_11532_11613 = state_11514__$1;
(statearr_11532_11613[(2)] = inst_11401);

(statearr_11532_11613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (21))){
var inst_11427 = (state_11514[(19)]);
var inst_11427__$1 = (state_11514[(2)]);
var inst_11428 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_11427__$1);
var state_11514__$1 = (function (){var statearr_11533 = state_11514;
(statearr_11533[(19)] = inst_11427__$1);

return statearr_11533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11514__$1,(22),inst_11428);
} else {
if((state_val_11515 === (31))){
var inst_11512 = (state_11514[(2)]);
var state_11514__$1 = state_11514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11514__$1,inst_11512);
} else {
if((state_val_11515 === (32))){
var inst_11467 = (state_11514[(16)]);
var inst_11472 = inst_11467.cljs$lang$protocol_mask$partition0$;
var inst_11473 = (inst_11472 & (64));
var inst_11474 = inst_11467.cljs$core$ISeq$;
var inst_11475 = (cljs.core.PROTOCOL_SENTINEL === inst_11474);
var inst_11476 = ((inst_11473) || (inst_11475));
var state_11514__$1 = state_11514;
if(cljs.core.truth_(inst_11476)){
var statearr_11534_11614 = state_11514__$1;
(statearr_11534_11614[(1)] = (35));

} else {
var statearr_11535_11615 = state_11514__$1;
(statearr_11535_11615[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (40))){
var inst_11489 = (state_11514[(20)]);
var inst_11488 = (state_11514[(2)]);
var inst_11489__$1 = cljs.core.get.call(null,inst_11488,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_11490 = cljs.core.get.call(null,inst_11488,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_11491 = cljs.core.not_empty.call(null,inst_11489__$1);
var state_11514__$1 = (function (){var statearr_11536 = state_11514;
(statearr_11536[(21)] = inst_11490);

(statearr_11536[(20)] = inst_11489__$1);

return statearr_11536;
})();
if(cljs.core.truth_(inst_11491)){
var statearr_11537_11616 = state_11514__$1;
(statearr_11537_11616[(1)] = (41));

} else {
var statearr_11538_11617 = state_11514__$1;
(statearr_11538_11617[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (33))){
var state_11514__$1 = state_11514;
var statearr_11539_11618 = state_11514__$1;
(statearr_11539_11618[(2)] = false);

(statearr_11539_11618[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (13))){
var inst_11387 = (state_11514[(22)]);
var inst_11391 = cljs.core.chunk_first.call(null,inst_11387);
var inst_11392 = cljs.core.chunk_rest.call(null,inst_11387);
var inst_11393 = cljs.core.count.call(null,inst_11391);
var inst_11374 = inst_11392;
var inst_11375 = inst_11391;
var inst_11376 = inst_11393;
var inst_11377 = (0);
var state_11514__$1 = (function (){var statearr_11540 = state_11514;
(statearr_11540[(7)] = inst_11377);

(statearr_11540[(8)] = inst_11374);

(statearr_11540[(9)] = inst_11376);

(statearr_11540[(10)] = inst_11375);

return statearr_11540;
})();
var statearr_11541_11619 = state_11514__$1;
(statearr_11541_11619[(2)] = null);

(statearr_11541_11619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (22))){
var inst_11431 = (state_11514[(23)]);
var inst_11427 = (state_11514[(19)]);
var inst_11435 = (state_11514[(24)]);
var inst_11430 = (state_11514[(25)]);
var inst_11430__$1 = (state_11514[(2)]);
var inst_11431__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_11430__$1);
var inst_11432 = (function (){var all_files = inst_11427;
var res_SINGLEQUOTE_ = inst_11430__$1;
var res = inst_11431__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_11431,inst_11427,inst_11435,inst_11430,inst_11430__$1,inst_11431__$1,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__11356_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__11356_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_11431,inst_11427,inst_11435,inst_11430,inst_11430__$1,inst_11431__$1,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_11433 = cljs.core.filter.call(null,inst_11432,inst_11430__$1);
var inst_11434 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_11435__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_11434);
var inst_11436 = cljs.core.not_empty.call(null,inst_11435__$1);
var state_11514__$1 = (function (){var statearr_11542 = state_11514;
(statearr_11542[(23)] = inst_11431__$1);

(statearr_11542[(24)] = inst_11435__$1);

(statearr_11542[(26)] = inst_11433);

(statearr_11542[(25)] = inst_11430__$1);

return statearr_11542;
})();
if(cljs.core.truth_(inst_11436)){
var statearr_11543_11620 = state_11514__$1;
(statearr_11543_11620[(1)] = (23));

} else {
var statearr_11544_11621 = state_11514__$1;
(statearr_11544_11621[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (36))){
var state_11514__$1 = state_11514;
var statearr_11545_11622 = state_11514__$1;
(statearr_11545_11622[(2)] = false);

(statearr_11545_11622[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (41))){
var inst_11489 = (state_11514[(20)]);
var inst_11493 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_11494 = cljs.core.map.call(null,inst_11493,inst_11489);
var inst_11495 = cljs.core.pr_str.call(null,inst_11494);
var inst_11496 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11495)].join('');
var inst_11497 = figwheel.client.utils.log.call(null,inst_11496);
var state_11514__$1 = state_11514;
var statearr_11546_11623 = state_11514__$1;
(statearr_11546_11623[(2)] = inst_11497);

(statearr_11546_11623[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (43))){
var inst_11490 = (state_11514[(21)]);
var inst_11500 = (state_11514[(2)]);
var inst_11501 = cljs.core.not_empty.call(null,inst_11490);
var state_11514__$1 = (function (){var statearr_11547 = state_11514;
(statearr_11547[(27)] = inst_11500);

return statearr_11547;
})();
if(cljs.core.truth_(inst_11501)){
var statearr_11548_11624 = state_11514__$1;
(statearr_11548_11624[(1)] = (44));

} else {
var statearr_11549_11625 = state_11514__$1;
(statearr_11549_11625[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (29))){
var inst_11431 = (state_11514[(23)]);
var inst_11427 = (state_11514[(19)]);
var inst_11435 = (state_11514[(24)]);
var inst_11433 = (state_11514[(26)]);
var inst_11430 = (state_11514[(25)]);
var inst_11467 = (state_11514[(16)]);
var inst_11463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_11466 = (function (){var all_files = inst_11427;
var res_SINGLEQUOTE_ = inst_11430;
var res = inst_11431;
var files_not_loaded = inst_11433;
var dependencies_that_loaded = inst_11435;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_11431,inst_11427,inst_11435,inst_11433,inst_11430,inst_11467,inst_11463,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__11465){
var map__11550 = p__11465;
var map__11550__$1 = ((((!((map__11550 == null)))?(((((map__11550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11550):map__11550);
var namespace = cljs.core.get.call(null,map__11550__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_11431,inst_11427,inst_11435,inst_11433,inst_11430,inst_11467,inst_11463,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_11467__$1 = cljs.core.group_by.call(null,inst_11466,inst_11433);
var inst_11469 = (inst_11467__$1 == null);
var inst_11470 = cljs.core.not.call(null,inst_11469);
var state_11514__$1 = (function (){var statearr_11552 = state_11514;
(statearr_11552[(28)] = inst_11463);

(statearr_11552[(16)] = inst_11467__$1);

return statearr_11552;
})();
if(inst_11470){
var statearr_11553_11626 = state_11514__$1;
(statearr_11553_11626[(1)] = (32));

} else {
var statearr_11554_11627 = state_11514__$1;
(statearr_11554_11627[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (44))){
var inst_11490 = (state_11514[(21)]);
var inst_11503 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_11490);
var inst_11504 = cljs.core.pr_str.call(null,inst_11503);
var inst_11505 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11504)].join('');
var inst_11506 = figwheel.client.utils.log.call(null,inst_11505);
var state_11514__$1 = state_11514;
var statearr_11555_11628 = state_11514__$1;
(statearr_11555_11628[(2)] = inst_11506);

(statearr_11555_11628[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (6))){
var inst_11408 = (state_11514[(2)]);
var state_11514__$1 = state_11514;
var statearr_11556_11629 = state_11514__$1;
(statearr_11556_11629[(2)] = inst_11408);

(statearr_11556_11629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (28))){
var inst_11433 = (state_11514[(26)]);
var inst_11460 = (state_11514[(2)]);
var inst_11461 = cljs.core.not_empty.call(null,inst_11433);
var state_11514__$1 = (function (){var statearr_11557 = state_11514;
(statearr_11557[(29)] = inst_11460);

return statearr_11557;
})();
if(cljs.core.truth_(inst_11461)){
var statearr_11558_11630 = state_11514__$1;
(statearr_11558_11630[(1)] = (29));

} else {
var statearr_11559_11631 = state_11514__$1;
(statearr_11559_11631[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (25))){
var inst_11431 = (state_11514[(23)]);
var inst_11447 = (state_11514[(2)]);
var inst_11448 = cljs.core.not_empty.call(null,inst_11431);
var state_11514__$1 = (function (){var statearr_11560 = state_11514;
(statearr_11560[(30)] = inst_11447);

return statearr_11560;
})();
if(cljs.core.truth_(inst_11448)){
var statearr_11561_11632 = state_11514__$1;
(statearr_11561_11632[(1)] = (26));

} else {
var statearr_11562_11633 = state_11514__$1;
(statearr_11562_11633[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (34))){
var inst_11483 = (state_11514[(2)]);
var state_11514__$1 = state_11514;
if(cljs.core.truth_(inst_11483)){
var statearr_11563_11634 = state_11514__$1;
(statearr_11563_11634[(1)] = (38));

} else {
var statearr_11564_11635 = state_11514__$1;
(statearr_11564_11635[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (17))){
var state_11514__$1 = state_11514;
var statearr_11565_11636 = state_11514__$1;
(statearr_11565_11636[(2)] = recompile_dependents);

(statearr_11565_11636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (3))){
var state_11514__$1 = state_11514;
var statearr_11566_11637 = state_11514__$1;
(statearr_11566_11637[(2)] = null);

(statearr_11566_11637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (12))){
var inst_11404 = (state_11514[(2)]);
var state_11514__$1 = state_11514;
var statearr_11567_11638 = state_11514__$1;
(statearr_11567_11638[(2)] = inst_11404);

(statearr_11567_11638[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (2))){
var inst_11366 = (state_11514[(13)]);
var inst_11373 = cljs.core.seq.call(null,inst_11366);
var inst_11374 = inst_11373;
var inst_11375 = null;
var inst_11376 = (0);
var inst_11377 = (0);
var state_11514__$1 = (function (){var statearr_11568 = state_11514;
(statearr_11568[(7)] = inst_11377);

(statearr_11568[(8)] = inst_11374);

(statearr_11568[(9)] = inst_11376);

(statearr_11568[(10)] = inst_11375);

return statearr_11568;
})();
var statearr_11569_11639 = state_11514__$1;
(statearr_11569_11639[(2)] = null);

(statearr_11569_11639[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (23))){
var inst_11431 = (state_11514[(23)]);
var inst_11427 = (state_11514[(19)]);
var inst_11435 = (state_11514[(24)]);
var inst_11433 = (state_11514[(26)]);
var inst_11430 = (state_11514[(25)]);
var inst_11438 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_11440 = (function (){var all_files = inst_11427;
var res_SINGLEQUOTE_ = inst_11430;
var res = inst_11431;
var files_not_loaded = inst_11433;
var dependencies_that_loaded = inst_11435;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_11431,inst_11427,inst_11435,inst_11433,inst_11430,inst_11438,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__11439){
var map__11570 = p__11439;
var map__11570__$1 = ((((!((map__11570 == null)))?(((((map__11570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11570):map__11570);
var request_url = cljs.core.get.call(null,map__11570__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_11431,inst_11427,inst_11435,inst_11433,inst_11430,inst_11438,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_11441 = cljs.core.reverse.call(null,inst_11435);
var inst_11442 = cljs.core.map.call(null,inst_11440,inst_11441);
var inst_11443 = cljs.core.pr_str.call(null,inst_11442);
var inst_11444 = figwheel.client.utils.log.call(null,inst_11443);
var state_11514__$1 = (function (){var statearr_11572 = state_11514;
(statearr_11572[(31)] = inst_11438);

return statearr_11572;
})();
var statearr_11573_11640 = state_11514__$1;
(statearr_11573_11640[(2)] = inst_11444);

(statearr_11573_11640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (35))){
var state_11514__$1 = state_11514;
var statearr_11574_11641 = state_11514__$1;
(statearr_11574_11641[(2)] = true);

(statearr_11574_11641[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (19))){
var inst_11417 = (state_11514[(12)]);
var inst_11423 = figwheel.client.file_reloading.expand_files.call(null,inst_11417);
var state_11514__$1 = state_11514;
var statearr_11575_11642 = state_11514__$1;
(statearr_11575_11642[(2)] = inst_11423);

(statearr_11575_11642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (11))){
var state_11514__$1 = state_11514;
var statearr_11576_11643 = state_11514__$1;
(statearr_11576_11643[(2)] = null);

(statearr_11576_11643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (9))){
var inst_11406 = (state_11514[(2)]);
var state_11514__$1 = state_11514;
var statearr_11577_11644 = state_11514__$1;
(statearr_11577_11644[(2)] = inst_11406);

(statearr_11577_11644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (5))){
var inst_11377 = (state_11514[(7)]);
var inst_11376 = (state_11514[(9)]);
var inst_11379 = (inst_11377 < inst_11376);
var inst_11380 = inst_11379;
var state_11514__$1 = state_11514;
if(cljs.core.truth_(inst_11380)){
var statearr_11578_11645 = state_11514__$1;
(statearr_11578_11645[(1)] = (7));

} else {
var statearr_11579_11646 = state_11514__$1;
(statearr_11579_11646[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (14))){
var inst_11387 = (state_11514[(22)]);
var inst_11396 = cljs.core.first.call(null,inst_11387);
var inst_11397 = figwheel.client.file_reloading.eval_body.call(null,inst_11396,opts);
var inst_11398 = cljs.core.next.call(null,inst_11387);
var inst_11374 = inst_11398;
var inst_11375 = null;
var inst_11376 = (0);
var inst_11377 = (0);
var state_11514__$1 = (function (){var statearr_11580 = state_11514;
(statearr_11580[(7)] = inst_11377);

(statearr_11580[(8)] = inst_11374);

(statearr_11580[(9)] = inst_11376);

(statearr_11580[(10)] = inst_11375);

(statearr_11580[(32)] = inst_11397);

return statearr_11580;
})();
var statearr_11581_11647 = state_11514__$1;
(statearr_11581_11647[(2)] = null);

(statearr_11581_11647[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (45))){
var state_11514__$1 = state_11514;
var statearr_11582_11648 = state_11514__$1;
(statearr_11582_11648[(2)] = null);

(statearr_11582_11648[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (26))){
var inst_11431 = (state_11514[(23)]);
var inst_11427 = (state_11514[(19)]);
var inst_11435 = (state_11514[(24)]);
var inst_11433 = (state_11514[(26)]);
var inst_11430 = (state_11514[(25)]);
var inst_11450 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_11452 = (function (){var all_files = inst_11427;
var res_SINGLEQUOTE_ = inst_11430;
var res = inst_11431;
var files_not_loaded = inst_11433;
var dependencies_that_loaded = inst_11435;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_11431,inst_11427,inst_11435,inst_11433,inst_11430,inst_11450,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__11451){
var map__11583 = p__11451;
var map__11583__$1 = ((((!((map__11583 == null)))?(((((map__11583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11583):map__11583);
var namespace = cljs.core.get.call(null,map__11583__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__11583__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_11431,inst_11427,inst_11435,inst_11433,inst_11430,inst_11450,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_11453 = cljs.core.map.call(null,inst_11452,inst_11431);
var inst_11454 = cljs.core.pr_str.call(null,inst_11453);
var inst_11455 = figwheel.client.utils.log.call(null,inst_11454);
var inst_11456 = (function (){var all_files = inst_11427;
var res_SINGLEQUOTE_ = inst_11430;
var res = inst_11431;
var files_not_loaded = inst_11433;
var dependencies_that_loaded = inst_11435;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_11431,inst_11427,inst_11435,inst_11433,inst_11430,inst_11450,inst_11452,inst_11453,inst_11454,inst_11455,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_11431,inst_11427,inst_11435,inst_11433,inst_11430,inst_11450,inst_11452,inst_11453,inst_11454,inst_11455,state_val_11515,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_11457 = setTimeout(inst_11456,(10));
var state_11514__$1 = (function (){var statearr_11585 = state_11514;
(statearr_11585[(33)] = inst_11450);

(statearr_11585[(34)] = inst_11455);

return statearr_11585;
})();
var statearr_11586_11649 = state_11514__$1;
(statearr_11586_11649[(2)] = inst_11457);

(statearr_11586_11649[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (16))){
var state_11514__$1 = state_11514;
var statearr_11587_11650 = state_11514__$1;
(statearr_11587_11650[(2)] = reload_dependents);

(statearr_11587_11650[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (38))){
var inst_11467 = (state_11514[(16)]);
var inst_11485 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11467);
var state_11514__$1 = state_11514;
var statearr_11588_11651 = state_11514__$1;
(statearr_11588_11651[(2)] = inst_11485);

(statearr_11588_11651[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (30))){
var state_11514__$1 = state_11514;
var statearr_11589_11652 = state_11514__$1;
(statearr_11589_11652[(2)] = null);

(statearr_11589_11652[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (10))){
var inst_11387 = (state_11514[(22)]);
var inst_11389 = cljs.core.chunked_seq_QMARK_.call(null,inst_11387);
var state_11514__$1 = state_11514;
if(inst_11389){
var statearr_11590_11653 = state_11514__$1;
(statearr_11590_11653[(1)] = (13));

} else {
var statearr_11591_11654 = state_11514__$1;
(statearr_11591_11654[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (18))){
var inst_11421 = (state_11514[(2)]);
var state_11514__$1 = state_11514;
if(cljs.core.truth_(inst_11421)){
var statearr_11592_11655 = state_11514__$1;
(statearr_11592_11655[(1)] = (19));

} else {
var statearr_11593_11656 = state_11514__$1;
(statearr_11593_11656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (42))){
var state_11514__$1 = state_11514;
var statearr_11594_11657 = state_11514__$1;
(statearr_11594_11657[(2)] = null);

(statearr_11594_11657[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (37))){
var inst_11480 = (state_11514[(2)]);
var state_11514__$1 = state_11514;
var statearr_11595_11658 = state_11514__$1;
(statearr_11595_11658[(2)] = inst_11480);

(statearr_11595_11658[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11515 === (8))){
var inst_11374 = (state_11514[(8)]);
var inst_11387 = (state_11514[(22)]);
var inst_11387__$1 = cljs.core.seq.call(null,inst_11374);
var state_11514__$1 = (function (){var statearr_11596 = state_11514;
(statearr_11596[(22)] = inst_11387__$1);

return statearr_11596;
})();
if(inst_11387__$1){
var statearr_11597_11659 = state_11514__$1;
(statearr_11597_11659[(1)] = (10));

} else {
var statearr_11598_11660 = state_11514__$1;
(statearr_11598_11660[(1)] = (11));

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
});})(c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__2633__auto__,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____0 = (function (){
var statearr_11599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11599[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__);

(statearr_11599[(1)] = (1));

return statearr_11599;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____1 = (function (state_11514){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_11514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e11600){if((e11600 instanceof Object)){
var ex__2637__auto__ = e11600;
var statearr_11601_11661 = state_11514;
(statearr_11601_11661[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11662 = state_11514;
state_11514 = G__11662;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__ = function(state_11514){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____1.call(this,state_11514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__2790__auto__ = (function (){var statearr_11602 = f__2789__auto__.call(null);
(statearr_11602[(6)] = c__2788__auto__);

return statearr_11602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__,map__11359,map__11359__$1,opts,before_jsload,on_jsload,reload_dependents,map__11360,map__11360__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__2788__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__11665,link){
var map__11666 = p__11665;
var map__11666__$1 = ((((!((map__11666 == null)))?(((((map__11666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11666):map__11666);
var file = cljs.core.get.call(null,map__11666__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__11666,map__11666__$1,file){
return (function (p1__11663_SHARP_,p2__11664_SHARP_){
if(cljs.core._EQ_.call(null,p1__11663_SHARP_,p2__11664_SHARP_)){
return p1__11663_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__11666,map__11666__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__11669){
var map__11670 = p__11669;
var map__11670__$1 = ((((!((map__11670 == null)))?(((((map__11670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11670):map__11670);
var match_length = cljs.core.get.call(null,map__11670__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__11670__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__11668_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__11668_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__11672_SHARP_,p2__11673_SHARP_){
return cljs.core.assoc.call(null,p1__11672_SHARP_,cljs.core.get.call(null,p2__11673_SHARP_,key),p2__11673_SHARP_);
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
var loaded_f_datas_11674 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_11674);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_11674);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__11675,p__11676){
var map__11677 = p__11675;
var map__11677__$1 = ((((!((map__11677 == null)))?(((((map__11677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11677):map__11677);
var on_cssload = cljs.core.get.call(null,map__11677__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__11678 = p__11676;
var map__11678__$1 = ((((!((map__11678 == null)))?(((((map__11678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11678):map__11678);
var files_msg = map__11678__$1;
var files = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
