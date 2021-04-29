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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__13966_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__13966_SHARP_));
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
var seq__13967 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__13968 = null;
var count__13969 = (0);
var i__13970 = (0);
while(true){
if((i__13970 < count__13969)){
var n = cljs.core._nth.call(null,chunk__13968,i__13970);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__13971 = seq__13967;
var G__13972 = chunk__13968;
var G__13973 = count__13969;
var G__13974 = (i__13970 + (1));
seq__13967 = G__13971;
chunk__13968 = G__13972;
count__13969 = G__13973;
i__13970 = G__13974;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13967);
if(temp__4657__auto__){
var seq__13967__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13967__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__13967__$1);
var G__13975 = cljs.core.chunk_rest.call(null,seq__13967__$1);
var G__13976 = c__4317__auto__;
var G__13977 = cljs.core.count.call(null,c__4317__auto__);
var G__13978 = (0);
seq__13967 = G__13975;
chunk__13968 = G__13976;
count__13969 = G__13977;
i__13970 = G__13978;
continue;
} else {
var n = cljs.core.first.call(null,seq__13967__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__13979 = cljs.core.next.call(null,seq__13967__$1);
var G__13980 = null;
var G__13981 = (0);
var G__13982 = (0);
seq__13967 = G__13979;
chunk__13968 = G__13980;
count__13969 = G__13981;
i__13970 = G__13982;
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

var seq__13992_14000 = cljs.core.seq.call(null,deps);
var chunk__13993_14001 = null;
var count__13994_14002 = (0);
var i__13995_14003 = (0);
while(true){
if((i__13995_14003 < count__13994_14002)){
var dep_14004 = cljs.core._nth.call(null,chunk__13993_14001,i__13995_14003);
topo_sort_helper_STAR_.call(null,dep_14004,(depth + (1)),state);


var G__14005 = seq__13992_14000;
var G__14006 = chunk__13993_14001;
var G__14007 = count__13994_14002;
var G__14008 = (i__13995_14003 + (1));
seq__13992_14000 = G__14005;
chunk__13993_14001 = G__14006;
count__13994_14002 = G__14007;
i__13995_14003 = G__14008;
continue;
} else {
var temp__4657__auto___14009 = cljs.core.seq.call(null,seq__13992_14000);
if(temp__4657__auto___14009){
var seq__13992_14010__$1 = temp__4657__auto___14009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13992_14010__$1)){
var c__4317__auto___14011 = cljs.core.chunk_first.call(null,seq__13992_14010__$1);
var G__14012 = cljs.core.chunk_rest.call(null,seq__13992_14010__$1);
var G__14013 = c__4317__auto___14011;
var G__14014 = cljs.core.count.call(null,c__4317__auto___14011);
var G__14015 = (0);
seq__13992_14000 = G__14012;
chunk__13993_14001 = G__14013;
count__13994_14002 = G__14014;
i__13995_14003 = G__14015;
continue;
} else {
var dep_14016 = cljs.core.first.call(null,seq__13992_14010__$1);
topo_sort_helper_STAR_.call(null,dep_14016,(depth + (1)),state);


var G__14017 = cljs.core.next.call(null,seq__13992_14010__$1);
var G__14018 = null;
var G__14019 = (0);
var G__14020 = (0);
seq__13992_14000 = G__14017;
chunk__13993_14001 = G__14018;
count__13994_14002 = G__14019;
i__13995_14003 = G__14020;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__13996){
var vec__13997 = p__13996;
var seq__13998 = cljs.core.seq.call(null,vec__13997);
var first__13999 = cljs.core.first.call(null,seq__13998);
var seq__13998__$1 = cljs.core.next.call(null,seq__13998);
var x = first__13999;
var xs = seq__13998__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__13997,seq__13998,first__13999,seq__13998__$1,x,xs,get_deps__$1){
return (function (p1__13983_SHARP_){
return clojure.set.difference.call(null,p1__13983_SHARP_,x);
});})(vec__13997,seq__13998,first__13999,seq__13998__$1,x,xs,get_deps__$1))
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
var seq__14021 = cljs.core.seq.call(null,provides);
var chunk__14022 = null;
var count__14023 = (0);
var i__14024 = (0);
while(true){
if((i__14024 < count__14023)){
var prov = cljs.core._nth.call(null,chunk__14022,i__14024);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14025_14033 = cljs.core.seq.call(null,requires);
var chunk__14026_14034 = null;
var count__14027_14035 = (0);
var i__14028_14036 = (0);
while(true){
if((i__14028_14036 < count__14027_14035)){
var req_14037 = cljs.core._nth.call(null,chunk__14026_14034,i__14028_14036);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14037,prov);


var G__14038 = seq__14025_14033;
var G__14039 = chunk__14026_14034;
var G__14040 = count__14027_14035;
var G__14041 = (i__14028_14036 + (1));
seq__14025_14033 = G__14038;
chunk__14026_14034 = G__14039;
count__14027_14035 = G__14040;
i__14028_14036 = G__14041;
continue;
} else {
var temp__4657__auto___14042 = cljs.core.seq.call(null,seq__14025_14033);
if(temp__4657__auto___14042){
var seq__14025_14043__$1 = temp__4657__auto___14042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14025_14043__$1)){
var c__4317__auto___14044 = cljs.core.chunk_first.call(null,seq__14025_14043__$1);
var G__14045 = cljs.core.chunk_rest.call(null,seq__14025_14043__$1);
var G__14046 = c__4317__auto___14044;
var G__14047 = cljs.core.count.call(null,c__4317__auto___14044);
var G__14048 = (0);
seq__14025_14033 = G__14045;
chunk__14026_14034 = G__14046;
count__14027_14035 = G__14047;
i__14028_14036 = G__14048;
continue;
} else {
var req_14049 = cljs.core.first.call(null,seq__14025_14043__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14049,prov);


var G__14050 = cljs.core.next.call(null,seq__14025_14043__$1);
var G__14051 = null;
var G__14052 = (0);
var G__14053 = (0);
seq__14025_14033 = G__14050;
chunk__14026_14034 = G__14051;
count__14027_14035 = G__14052;
i__14028_14036 = G__14053;
continue;
}
} else {
}
}
break;
}


var G__14054 = seq__14021;
var G__14055 = chunk__14022;
var G__14056 = count__14023;
var G__14057 = (i__14024 + (1));
seq__14021 = G__14054;
chunk__14022 = G__14055;
count__14023 = G__14056;
i__14024 = G__14057;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14021);
if(temp__4657__auto__){
var seq__14021__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14021__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__14021__$1);
var G__14058 = cljs.core.chunk_rest.call(null,seq__14021__$1);
var G__14059 = c__4317__auto__;
var G__14060 = cljs.core.count.call(null,c__4317__auto__);
var G__14061 = (0);
seq__14021 = G__14058;
chunk__14022 = G__14059;
count__14023 = G__14060;
i__14024 = G__14061;
continue;
} else {
var prov = cljs.core.first.call(null,seq__14021__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14029_14062 = cljs.core.seq.call(null,requires);
var chunk__14030_14063 = null;
var count__14031_14064 = (0);
var i__14032_14065 = (0);
while(true){
if((i__14032_14065 < count__14031_14064)){
var req_14066 = cljs.core._nth.call(null,chunk__14030_14063,i__14032_14065);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14066,prov);


var G__14067 = seq__14029_14062;
var G__14068 = chunk__14030_14063;
var G__14069 = count__14031_14064;
var G__14070 = (i__14032_14065 + (1));
seq__14029_14062 = G__14067;
chunk__14030_14063 = G__14068;
count__14031_14064 = G__14069;
i__14032_14065 = G__14070;
continue;
} else {
var temp__4657__auto___14071__$1 = cljs.core.seq.call(null,seq__14029_14062);
if(temp__4657__auto___14071__$1){
var seq__14029_14072__$1 = temp__4657__auto___14071__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14029_14072__$1)){
var c__4317__auto___14073 = cljs.core.chunk_first.call(null,seq__14029_14072__$1);
var G__14074 = cljs.core.chunk_rest.call(null,seq__14029_14072__$1);
var G__14075 = c__4317__auto___14073;
var G__14076 = cljs.core.count.call(null,c__4317__auto___14073);
var G__14077 = (0);
seq__14029_14062 = G__14074;
chunk__14030_14063 = G__14075;
count__14031_14064 = G__14076;
i__14032_14065 = G__14077;
continue;
} else {
var req_14078 = cljs.core.first.call(null,seq__14029_14072__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14078,prov);


var G__14079 = cljs.core.next.call(null,seq__14029_14072__$1);
var G__14080 = null;
var G__14081 = (0);
var G__14082 = (0);
seq__14029_14062 = G__14079;
chunk__14030_14063 = G__14080;
count__14031_14064 = G__14081;
i__14032_14065 = G__14082;
continue;
}
} else {
}
}
break;
}


var G__14083 = cljs.core.next.call(null,seq__14021__$1);
var G__14084 = null;
var G__14085 = (0);
var G__14086 = (0);
seq__14021 = G__14083;
chunk__14022 = G__14084;
count__14023 = G__14085;
i__14024 = G__14086;
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
var seq__14087_14091 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__14088_14092 = null;
var count__14089_14093 = (0);
var i__14090_14094 = (0);
while(true){
if((i__14090_14094 < count__14089_14093)){
var ns_14095 = cljs.core._nth.call(null,chunk__14088_14092,i__14090_14094);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14095);


var G__14096 = seq__14087_14091;
var G__14097 = chunk__14088_14092;
var G__14098 = count__14089_14093;
var G__14099 = (i__14090_14094 + (1));
seq__14087_14091 = G__14096;
chunk__14088_14092 = G__14097;
count__14089_14093 = G__14098;
i__14090_14094 = G__14099;
continue;
} else {
var temp__4657__auto___14100 = cljs.core.seq.call(null,seq__14087_14091);
if(temp__4657__auto___14100){
var seq__14087_14101__$1 = temp__4657__auto___14100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14087_14101__$1)){
var c__4317__auto___14102 = cljs.core.chunk_first.call(null,seq__14087_14101__$1);
var G__14103 = cljs.core.chunk_rest.call(null,seq__14087_14101__$1);
var G__14104 = c__4317__auto___14102;
var G__14105 = cljs.core.count.call(null,c__4317__auto___14102);
var G__14106 = (0);
seq__14087_14091 = G__14103;
chunk__14088_14092 = G__14104;
count__14089_14093 = G__14105;
i__14090_14094 = G__14106;
continue;
} else {
var ns_14107 = cljs.core.first.call(null,seq__14087_14101__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14107);


var G__14108 = cljs.core.next.call(null,seq__14087_14101__$1);
var G__14109 = null;
var G__14110 = (0);
var G__14111 = (0);
seq__14087_14091 = G__14108;
chunk__14088_14092 = G__14109;
count__14089_14093 = G__14110;
i__14090_14094 = G__14111;
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
var G__14112__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__14112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14113__i = 0, G__14113__a = new Array(arguments.length -  0);
while (G__14113__i < G__14113__a.length) {G__14113__a[G__14113__i] = arguments[G__14113__i + 0]; ++G__14113__i;}
  args = new cljs.core.IndexedSeq(G__14113__a,0,null);
} 
return G__14112__delegate.call(this,args);};
G__14112.cljs$lang$maxFixedArity = 0;
G__14112.cljs$lang$applyTo = (function (arglist__14114){
var args = cljs.core.seq(arglist__14114);
return G__14112__delegate(args);
});
G__14112.cljs$core$IFn$_invoke$arity$variadic = G__14112__delegate;
return G__14112;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__14115 = cljs.core._EQ_;
var expr__14116 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__14115.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__14116))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__14115,expr__14116){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__14115,expr__14116))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__14115,expr__14116){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e14118){if((e14118 instanceof Error)){
var e = e14118;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14118;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__14115,expr__14116))
} else {
if(cljs.core.truth_(pred__14115.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__14116))){
return ((function (pred__14115,expr__14116){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__14115,expr__14116){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__14115,expr__14116))
);

return deferred.addErrback(((function (deferred,pred__14115,expr__14116){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__14115,expr__14116))
);
});
;})(pred__14115,expr__14116))
} else {
if(cljs.core.truth_(pred__14115.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__14116))){
return ((function (pred__14115,expr__14116){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e14119){if((e14119 instanceof Error)){
var e = e14119;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14119;

}
}})());
});
;})(pred__14115,expr__14116))
} else {
return ((function (pred__14115,expr__14116){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__14115,expr__14116))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__14120,callback){
var map__14121 = p__14120;
var map__14121__$1 = ((((!((map__14121 == null)))?(((((map__14121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14121):map__14121);
var file_msg = map__14121__$1;
var request_url = cljs.core.get.call(null,map__14121__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__14121,map__14121__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__14121,map__14121__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__){
return (function (state_14145){
var state_val_14146 = (state_14145[(1)]);
if((state_val_14146 === (7))){
var inst_14141 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
var statearr_14147_14164 = state_14145__$1;
(statearr_14147_14164[(2)] = inst_14141);

(statearr_14147_14164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (1))){
var state_14145__$1 = state_14145;
var statearr_14148_14165 = state_14145__$1;
(statearr_14148_14165[(2)] = null);

(statearr_14148_14165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (4))){
var inst_14125 = (state_14145[(7)]);
var inst_14125__$1 = (state_14145[(2)]);
var state_14145__$1 = (function (){var statearr_14149 = state_14145;
(statearr_14149[(7)] = inst_14125__$1);

return statearr_14149;
})();
if(cljs.core.truth_(inst_14125__$1)){
var statearr_14150_14166 = state_14145__$1;
(statearr_14150_14166[(1)] = (5));

} else {
var statearr_14151_14167 = state_14145__$1;
(statearr_14151_14167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (6))){
var state_14145__$1 = state_14145;
var statearr_14152_14168 = state_14145__$1;
(statearr_14152_14168[(2)] = null);

(statearr_14152_14168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (3))){
var inst_14143 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14145__$1,inst_14143);
} else {
if((state_val_14146 === (2))){
var state_14145__$1 = state_14145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14145__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_14146 === (11))){
var inst_14137 = (state_14145[(2)]);
var state_14145__$1 = (function (){var statearr_14153 = state_14145;
(statearr_14153[(8)] = inst_14137);

return statearr_14153;
})();
var statearr_14154_14169 = state_14145__$1;
(statearr_14154_14169[(2)] = null);

(statearr_14154_14169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (9))){
var inst_14129 = (state_14145[(9)]);
var inst_14131 = (state_14145[(10)]);
var inst_14133 = inst_14131.call(null,inst_14129);
var state_14145__$1 = state_14145;
var statearr_14155_14170 = state_14145__$1;
(statearr_14155_14170[(2)] = inst_14133);

(statearr_14155_14170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (5))){
var inst_14125 = (state_14145[(7)]);
var inst_14127 = figwheel.client.file_reloading.blocking_load.call(null,inst_14125);
var state_14145__$1 = state_14145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14145__$1,(8),inst_14127);
} else {
if((state_val_14146 === (10))){
var inst_14129 = (state_14145[(9)]);
var inst_14135 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_14129);
var state_14145__$1 = state_14145;
var statearr_14156_14171 = state_14145__$1;
(statearr_14156_14171[(2)] = inst_14135);

(statearr_14156_14171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (8))){
var inst_14125 = (state_14145[(7)]);
var inst_14131 = (state_14145[(10)]);
var inst_14129 = (state_14145[(2)]);
var inst_14130 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_14131__$1 = cljs.core.get.call(null,inst_14130,inst_14125);
var state_14145__$1 = (function (){var statearr_14157 = state_14145;
(statearr_14157[(9)] = inst_14129);

(statearr_14157[(10)] = inst_14131__$1);

return statearr_14157;
})();
if(cljs.core.truth_(inst_14131__$1)){
var statearr_14158_14172 = state_14145__$1;
(statearr_14158_14172[(1)] = (9));

} else {
var statearr_14159_14173 = state_14145__$1;
(statearr_14159_14173[(1)] = (10));

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
});})(c__5590__auto__))
;
return ((function (switch__5435__auto__,c__5590__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__5436__auto__ = null;
var figwheel$client$file_reloading$state_machine__5436__auto____0 = (function (){
var statearr_14160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14160[(0)] = figwheel$client$file_reloading$state_machine__5436__auto__);

(statearr_14160[(1)] = (1));

return statearr_14160;
});
var figwheel$client$file_reloading$state_machine__5436__auto____1 = (function (state_14145){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_14145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e14161){if((e14161 instanceof Object)){
var ex__5439__auto__ = e14161;
var statearr_14162_14174 = state_14145;
(statearr_14162_14174[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14175 = state_14145;
state_14145 = G__14175;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__5436__auto__ = function(state_14145){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__5436__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__5436__auto____1.call(this,state_14145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__5436__auto____0;
figwheel$client$file_reloading$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__5436__auto____1;
return figwheel$client$file_reloading$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_14163 = f__5591__auto__.call(null);
(statearr_14163[(6)] = c__5590__auto__);

return statearr_14163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__))
);

return c__5590__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__14176,callback){
var map__14177 = p__14176;
var map__14177__$1 = ((((!((map__14177 == null)))?(((((map__14177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14177):map__14177);
var file_msg = map__14177__$1;
var namespace = cljs.core.get.call(null,map__14177__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__14177,map__14177__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__14177,map__14177__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__14179){
var map__14180 = p__14179;
var map__14180__$1 = ((((!((map__14180 == null)))?(((((map__14180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14180):map__14180);
var file_msg = map__14180__$1;
var namespace = cljs.core.get.call(null,map__14180__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__14182){
var map__14183 = p__14182;
var map__14183__$1 = ((((!((map__14183 == null)))?(((((map__14183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14183):map__14183);
var file_msg = map__14183__$1;
var namespace = cljs.core.get.call(null,map__14183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__14185,callback){
var map__14186 = p__14185;
var map__14186__$1 = ((((!((map__14186 == null)))?(((((map__14186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14186):map__14186);
var file_msg = map__14186__$1;
var request_url = cljs.core.get.call(null,map__14186__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__14186__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__5590__auto___14236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___14236,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___14236,out){
return (function (state_14221){
var state_val_14222 = (state_14221[(1)]);
if((state_val_14222 === (1))){
var inst_14195 = cljs.core.seq.call(null,files);
var inst_14196 = cljs.core.first.call(null,inst_14195);
var inst_14197 = cljs.core.next.call(null,inst_14195);
var inst_14198 = files;
var state_14221__$1 = (function (){var statearr_14223 = state_14221;
(statearr_14223[(7)] = inst_14196);

(statearr_14223[(8)] = inst_14197);

(statearr_14223[(9)] = inst_14198);

return statearr_14223;
})();
var statearr_14224_14237 = state_14221__$1;
(statearr_14224_14237[(2)] = null);

(statearr_14224_14237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (2))){
var inst_14198 = (state_14221[(9)]);
var inst_14204 = (state_14221[(10)]);
var inst_14203 = cljs.core.seq.call(null,inst_14198);
var inst_14204__$1 = cljs.core.first.call(null,inst_14203);
var inst_14205 = cljs.core.next.call(null,inst_14203);
var inst_14206 = (inst_14204__$1 == null);
var inst_14207 = cljs.core.not.call(null,inst_14206);
var state_14221__$1 = (function (){var statearr_14225 = state_14221;
(statearr_14225[(11)] = inst_14205);

(statearr_14225[(10)] = inst_14204__$1);

return statearr_14225;
})();
if(inst_14207){
var statearr_14226_14238 = state_14221__$1;
(statearr_14226_14238[(1)] = (4));

} else {
var statearr_14227_14239 = state_14221__$1;
(statearr_14227_14239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (3))){
var inst_14219 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14221__$1,inst_14219);
} else {
if((state_val_14222 === (4))){
var inst_14204 = (state_14221[(10)]);
var inst_14209 = figwheel.client.file_reloading.reload_js_file.call(null,inst_14204);
var state_14221__$1 = state_14221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14221__$1,(7),inst_14209);
} else {
if((state_val_14222 === (5))){
var inst_14215 = cljs.core.async.close_BANG_.call(null,out);
var state_14221__$1 = state_14221;
var statearr_14228_14240 = state_14221__$1;
(statearr_14228_14240[(2)] = inst_14215);

(statearr_14228_14240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (6))){
var inst_14217 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
var statearr_14229_14241 = state_14221__$1;
(statearr_14229_14241[(2)] = inst_14217);

(statearr_14229_14241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (7))){
var inst_14205 = (state_14221[(11)]);
var inst_14211 = (state_14221[(2)]);
var inst_14212 = cljs.core.async.put_BANG_.call(null,out,inst_14211);
var inst_14198 = inst_14205;
var state_14221__$1 = (function (){var statearr_14230 = state_14221;
(statearr_14230[(9)] = inst_14198);

(statearr_14230[(12)] = inst_14212);

return statearr_14230;
})();
var statearr_14231_14242 = state_14221__$1;
(statearr_14231_14242[(2)] = null);

(statearr_14231_14242[(1)] = (2));


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
});})(c__5590__auto___14236,out))
;
return ((function (switch__5435__auto__,c__5590__auto___14236,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____0 = (function (){
var statearr_14232 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14232[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__);

(statearr_14232[(1)] = (1));

return statearr_14232;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____1 = (function (state_14221){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_14221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e14233){if((e14233 instanceof Object)){
var ex__5439__auto__ = e14233;
var statearr_14234_14243 = state_14221;
(statearr_14234_14243[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14244 = state_14221;
state_14221 = G__14244;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__ = function(state_14221){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____1.call(this,state_14221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___14236,out))
})();
var state__5592__auto__ = (function (){var statearr_14235 = f__5591__auto__.call(null);
(statearr_14235[(6)] = c__5590__auto___14236);

return statearr_14235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___14236,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__14245,opts){
var map__14246 = p__14245;
var map__14246__$1 = ((((!((map__14246 == null)))?(((((map__14246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14246):map__14246);
var eval_body = cljs.core.get.call(null,map__14246__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__14246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e14248){var e = e14248;
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
return (function (p1__14249_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__14249_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__14250){
var vec__14251 = p__14250;
var k = cljs.core.nth.call(null,vec__14251,(0),null);
var v = cljs.core.nth.call(null,vec__14251,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__14254){
var vec__14255 = p__14254;
var k = cljs.core.nth.call(null,vec__14255,(0),null);
var v = cljs.core.nth.call(null,vec__14255,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__14261,p__14262){
var map__14263 = p__14261;
var map__14263__$1 = ((((!((map__14263 == null)))?(((((map__14263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14263):map__14263);
var opts = map__14263__$1;
var before_jsload = cljs.core.get.call(null,map__14263__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__14263__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__14263__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__14264 = p__14262;
var map__14264__$1 = ((((!((map__14264 == null)))?(((((map__14264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14264):map__14264);
var msg = map__14264__$1;
var files = cljs.core.get.call(null,map__14264__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__14264__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__14264__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_14418){
var state_val_14419 = (state_14418[(1)]);
if((state_val_14419 === (7))){
var inst_14278 = (state_14418[(7)]);
var inst_14279 = (state_14418[(8)]);
var inst_14281 = (state_14418[(9)]);
var inst_14280 = (state_14418[(10)]);
var inst_14286 = cljs.core._nth.call(null,inst_14279,inst_14281);
var inst_14287 = figwheel.client.file_reloading.eval_body.call(null,inst_14286,opts);
var inst_14288 = (inst_14281 + (1));
var tmp14420 = inst_14278;
var tmp14421 = inst_14279;
var tmp14422 = inst_14280;
var inst_14278__$1 = tmp14420;
var inst_14279__$1 = tmp14421;
var inst_14280__$1 = tmp14422;
var inst_14281__$1 = inst_14288;
var state_14418__$1 = (function (){var statearr_14423 = state_14418;
(statearr_14423[(7)] = inst_14278__$1);

(statearr_14423[(8)] = inst_14279__$1);

(statearr_14423[(11)] = inst_14287);

(statearr_14423[(9)] = inst_14281__$1);

(statearr_14423[(10)] = inst_14280__$1);

return statearr_14423;
})();
var statearr_14424_14507 = state_14418__$1;
(statearr_14424_14507[(2)] = null);

(statearr_14424_14507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (20))){
var inst_14321 = (state_14418[(12)]);
var inst_14329 = figwheel.client.file_reloading.sort_files.call(null,inst_14321);
var state_14418__$1 = state_14418;
var statearr_14425_14508 = state_14418__$1;
(statearr_14425_14508[(2)] = inst_14329);

(statearr_14425_14508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (27))){
var state_14418__$1 = state_14418;
var statearr_14426_14509 = state_14418__$1;
(statearr_14426_14509[(2)] = null);

(statearr_14426_14509[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (1))){
var inst_14270 = (state_14418[(13)]);
var inst_14267 = before_jsload.call(null,files);
var inst_14268 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_14269 = (function (){return ((function (inst_14270,inst_14267,inst_14268,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14258_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14258_SHARP_);
});
;})(inst_14270,inst_14267,inst_14268,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14270__$1 = cljs.core.filter.call(null,inst_14269,files);
var inst_14271 = cljs.core.not_empty.call(null,inst_14270__$1);
var state_14418__$1 = (function (){var statearr_14427 = state_14418;
(statearr_14427[(14)] = inst_14268);

(statearr_14427[(13)] = inst_14270__$1);

(statearr_14427[(15)] = inst_14267);

return statearr_14427;
})();
if(cljs.core.truth_(inst_14271)){
var statearr_14428_14510 = state_14418__$1;
(statearr_14428_14510[(1)] = (2));

} else {
var statearr_14429_14511 = state_14418__$1;
(statearr_14429_14511[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (24))){
var state_14418__$1 = state_14418;
var statearr_14430_14512 = state_14418__$1;
(statearr_14430_14512[(2)] = null);

(statearr_14430_14512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (39))){
var inst_14371 = (state_14418[(16)]);
var state_14418__$1 = state_14418;
var statearr_14431_14513 = state_14418__$1;
(statearr_14431_14513[(2)] = inst_14371);

(statearr_14431_14513[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (46))){
var inst_14413 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
var statearr_14432_14514 = state_14418__$1;
(statearr_14432_14514[(2)] = inst_14413);

(statearr_14432_14514[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (4))){
var inst_14315 = (state_14418[(2)]);
var inst_14316 = cljs.core.List.EMPTY;
var inst_14317 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_14316);
var inst_14318 = (function (){return ((function (inst_14315,inst_14316,inst_14317,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14259_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__14259_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14259_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__14259_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_14315,inst_14316,inst_14317,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14319 = cljs.core.filter.call(null,inst_14318,files);
var inst_14320 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_14321 = cljs.core.concat.call(null,inst_14319,inst_14320);
var state_14418__$1 = (function (){var statearr_14433 = state_14418;
(statearr_14433[(12)] = inst_14321);

(statearr_14433[(17)] = inst_14317);

(statearr_14433[(18)] = inst_14315);

return statearr_14433;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_14434_14515 = state_14418__$1;
(statearr_14434_14515[(1)] = (16));

} else {
var statearr_14435_14516 = state_14418__$1;
(statearr_14435_14516[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (15))){
var inst_14305 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
var statearr_14436_14517 = state_14418__$1;
(statearr_14436_14517[(2)] = inst_14305);

(statearr_14436_14517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (21))){
var inst_14331 = (state_14418[(19)]);
var inst_14331__$1 = (state_14418[(2)]);
var inst_14332 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_14331__$1);
var state_14418__$1 = (function (){var statearr_14437 = state_14418;
(statearr_14437[(19)] = inst_14331__$1);

return statearr_14437;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14418__$1,(22),inst_14332);
} else {
if((state_val_14419 === (31))){
var inst_14416 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14418__$1,inst_14416);
} else {
if((state_val_14419 === (32))){
var inst_14371 = (state_14418[(16)]);
var inst_14376 = inst_14371.cljs$lang$protocol_mask$partition0$;
var inst_14377 = (inst_14376 & (64));
var inst_14378 = inst_14371.cljs$core$ISeq$;
var inst_14379 = (cljs.core.PROTOCOL_SENTINEL === inst_14378);
var inst_14380 = ((inst_14377) || (inst_14379));
var state_14418__$1 = state_14418;
if(cljs.core.truth_(inst_14380)){
var statearr_14438_14518 = state_14418__$1;
(statearr_14438_14518[(1)] = (35));

} else {
var statearr_14439_14519 = state_14418__$1;
(statearr_14439_14519[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (40))){
var inst_14393 = (state_14418[(20)]);
var inst_14392 = (state_14418[(2)]);
var inst_14393__$1 = cljs.core.get.call(null,inst_14392,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_14394 = cljs.core.get.call(null,inst_14392,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_14395 = cljs.core.not_empty.call(null,inst_14393__$1);
var state_14418__$1 = (function (){var statearr_14440 = state_14418;
(statearr_14440[(21)] = inst_14394);

(statearr_14440[(20)] = inst_14393__$1);

return statearr_14440;
})();
if(cljs.core.truth_(inst_14395)){
var statearr_14441_14520 = state_14418__$1;
(statearr_14441_14520[(1)] = (41));

} else {
var statearr_14442_14521 = state_14418__$1;
(statearr_14442_14521[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (33))){
var state_14418__$1 = state_14418;
var statearr_14443_14522 = state_14418__$1;
(statearr_14443_14522[(2)] = false);

(statearr_14443_14522[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (13))){
var inst_14291 = (state_14418[(22)]);
var inst_14295 = cljs.core.chunk_first.call(null,inst_14291);
var inst_14296 = cljs.core.chunk_rest.call(null,inst_14291);
var inst_14297 = cljs.core.count.call(null,inst_14295);
var inst_14278 = inst_14296;
var inst_14279 = inst_14295;
var inst_14280 = inst_14297;
var inst_14281 = (0);
var state_14418__$1 = (function (){var statearr_14444 = state_14418;
(statearr_14444[(7)] = inst_14278);

(statearr_14444[(8)] = inst_14279);

(statearr_14444[(9)] = inst_14281);

(statearr_14444[(10)] = inst_14280);

return statearr_14444;
})();
var statearr_14445_14523 = state_14418__$1;
(statearr_14445_14523[(2)] = null);

(statearr_14445_14523[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (22))){
var inst_14331 = (state_14418[(19)]);
var inst_14334 = (state_14418[(23)]);
var inst_14339 = (state_14418[(24)]);
var inst_14335 = (state_14418[(25)]);
var inst_14334__$1 = (state_14418[(2)]);
var inst_14335__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14334__$1);
var inst_14336 = (function (){var all_files = inst_14331;
var res_SINGLEQUOTE_ = inst_14334__$1;
var res = inst_14335__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_14331,inst_14334,inst_14339,inst_14335,inst_14334__$1,inst_14335__$1,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14260_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__14260_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_14331,inst_14334,inst_14339,inst_14335,inst_14334__$1,inst_14335__$1,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14337 = cljs.core.filter.call(null,inst_14336,inst_14334__$1);
var inst_14338 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_14339__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14338);
var inst_14340 = cljs.core.not_empty.call(null,inst_14339__$1);
var state_14418__$1 = (function (){var statearr_14446 = state_14418;
(statearr_14446[(26)] = inst_14337);

(statearr_14446[(23)] = inst_14334__$1);

(statearr_14446[(24)] = inst_14339__$1);

(statearr_14446[(25)] = inst_14335__$1);

return statearr_14446;
})();
if(cljs.core.truth_(inst_14340)){
var statearr_14447_14524 = state_14418__$1;
(statearr_14447_14524[(1)] = (23));

} else {
var statearr_14448_14525 = state_14418__$1;
(statearr_14448_14525[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (36))){
var state_14418__$1 = state_14418;
var statearr_14449_14526 = state_14418__$1;
(statearr_14449_14526[(2)] = false);

(statearr_14449_14526[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (41))){
var inst_14393 = (state_14418[(20)]);
var inst_14397 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_14398 = cljs.core.map.call(null,inst_14397,inst_14393);
var inst_14399 = cljs.core.pr_str.call(null,inst_14398);
var inst_14400 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14399)].join('');
var inst_14401 = figwheel.client.utils.log.call(null,inst_14400);
var state_14418__$1 = state_14418;
var statearr_14450_14527 = state_14418__$1;
(statearr_14450_14527[(2)] = inst_14401);

(statearr_14450_14527[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (43))){
var inst_14394 = (state_14418[(21)]);
var inst_14404 = (state_14418[(2)]);
var inst_14405 = cljs.core.not_empty.call(null,inst_14394);
var state_14418__$1 = (function (){var statearr_14451 = state_14418;
(statearr_14451[(27)] = inst_14404);

return statearr_14451;
})();
if(cljs.core.truth_(inst_14405)){
var statearr_14452_14528 = state_14418__$1;
(statearr_14452_14528[(1)] = (44));

} else {
var statearr_14453_14529 = state_14418__$1;
(statearr_14453_14529[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (29))){
var inst_14371 = (state_14418[(16)]);
var inst_14331 = (state_14418[(19)]);
var inst_14337 = (state_14418[(26)]);
var inst_14334 = (state_14418[(23)]);
var inst_14339 = (state_14418[(24)]);
var inst_14335 = (state_14418[(25)]);
var inst_14367 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_14370 = (function (){var all_files = inst_14331;
var res_SINGLEQUOTE_ = inst_14334;
var res = inst_14335;
var files_not_loaded = inst_14337;
var dependencies_that_loaded = inst_14339;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14371,inst_14331,inst_14337,inst_14334,inst_14339,inst_14335,inst_14367,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14369){
var map__14454 = p__14369;
var map__14454__$1 = ((((!((map__14454 == null)))?(((((map__14454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14454):map__14454);
var namespace = cljs.core.get.call(null,map__14454__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14371,inst_14331,inst_14337,inst_14334,inst_14339,inst_14335,inst_14367,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14371__$1 = cljs.core.group_by.call(null,inst_14370,inst_14337);
var inst_14373 = (inst_14371__$1 == null);
var inst_14374 = cljs.core.not.call(null,inst_14373);
var state_14418__$1 = (function (){var statearr_14456 = state_14418;
(statearr_14456[(16)] = inst_14371__$1);

(statearr_14456[(28)] = inst_14367);

return statearr_14456;
})();
if(inst_14374){
var statearr_14457_14530 = state_14418__$1;
(statearr_14457_14530[(1)] = (32));

} else {
var statearr_14458_14531 = state_14418__$1;
(statearr_14458_14531[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (44))){
var inst_14394 = (state_14418[(21)]);
var inst_14407 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14394);
var inst_14408 = cljs.core.pr_str.call(null,inst_14407);
var inst_14409 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14408)].join('');
var inst_14410 = figwheel.client.utils.log.call(null,inst_14409);
var state_14418__$1 = state_14418;
var statearr_14459_14532 = state_14418__$1;
(statearr_14459_14532[(2)] = inst_14410);

(statearr_14459_14532[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (6))){
var inst_14312 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
var statearr_14460_14533 = state_14418__$1;
(statearr_14460_14533[(2)] = inst_14312);

(statearr_14460_14533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (28))){
var inst_14337 = (state_14418[(26)]);
var inst_14364 = (state_14418[(2)]);
var inst_14365 = cljs.core.not_empty.call(null,inst_14337);
var state_14418__$1 = (function (){var statearr_14461 = state_14418;
(statearr_14461[(29)] = inst_14364);

return statearr_14461;
})();
if(cljs.core.truth_(inst_14365)){
var statearr_14462_14534 = state_14418__$1;
(statearr_14462_14534[(1)] = (29));

} else {
var statearr_14463_14535 = state_14418__$1;
(statearr_14463_14535[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (25))){
var inst_14335 = (state_14418[(25)]);
var inst_14351 = (state_14418[(2)]);
var inst_14352 = cljs.core.not_empty.call(null,inst_14335);
var state_14418__$1 = (function (){var statearr_14464 = state_14418;
(statearr_14464[(30)] = inst_14351);

return statearr_14464;
})();
if(cljs.core.truth_(inst_14352)){
var statearr_14465_14536 = state_14418__$1;
(statearr_14465_14536[(1)] = (26));

} else {
var statearr_14466_14537 = state_14418__$1;
(statearr_14466_14537[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (34))){
var inst_14387 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
if(cljs.core.truth_(inst_14387)){
var statearr_14467_14538 = state_14418__$1;
(statearr_14467_14538[(1)] = (38));

} else {
var statearr_14468_14539 = state_14418__$1;
(statearr_14468_14539[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (17))){
var state_14418__$1 = state_14418;
var statearr_14469_14540 = state_14418__$1;
(statearr_14469_14540[(2)] = recompile_dependents);

(statearr_14469_14540[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (3))){
var state_14418__$1 = state_14418;
var statearr_14470_14541 = state_14418__$1;
(statearr_14470_14541[(2)] = null);

(statearr_14470_14541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (12))){
var inst_14308 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
var statearr_14471_14542 = state_14418__$1;
(statearr_14471_14542[(2)] = inst_14308);

(statearr_14471_14542[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (2))){
var inst_14270 = (state_14418[(13)]);
var inst_14277 = cljs.core.seq.call(null,inst_14270);
var inst_14278 = inst_14277;
var inst_14279 = null;
var inst_14280 = (0);
var inst_14281 = (0);
var state_14418__$1 = (function (){var statearr_14472 = state_14418;
(statearr_14472[(7)] = inst_14278);

(statearr_14472[(8)] = inst_14279);

(statearr_14472[(9)] = inst_14281);

(statearr_14472[(10)] = inst_14280);

return statearr_14472;
})();
var statearr_14473_14543 = state_14418__$1;
(statearr_14473_14543[(2)] = null);

(statearr_14473_14543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (23))){
var inst_14331 = (state_14418[(19)]);
var inst_14337 = (state_14418[(26)]);
var inst_14334 = (state_14418[(23)]);
var inst_14339 = (state_14418[(24)]);
var inst_14335 = (state_14418[(25)]);
var inst_14342 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_14344 = (function (){var all_files = inst_14331;
var res_SINGLEQUOTE_ = inst_14334;
var res = inst_14335;
var files_not_loaded = inst_14337;
var dependencies_that_loaded = inst_14339;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14331,inst_14337,inst_14334,inst_14339,inst_14335,inst_14342,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14343){
var map__14474 = p__14343;
var map__14474__$1 = ((((!((map__14474 == null)))?(((((map__14474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14474):map__14474);
var request_url = cljs.core.get.call(null,map__14474__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14331,inst_14337,inst_14334,inst_14339,inst_14335,inst_14342,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14345 = cljs.core.reverse.call(null,inst_14339);
var inst_14346 = cljs.core.map.call(null,inst_14344,inst_14345);
var inst_14347 = cljs.core.pr_str.call(null,inst_14346);
var inst_14348 = figwheel.client.utils.log.call(null,inst_14347);
var state_14418__$1 = (function (){var statearr_14476 = state_14418;
(statearr_14476[(31)] = inst_14342);

return statearr_14476;
})();
var statearr_14477_14544 = state_14418__$1;
(statearr_14477_14544[(2)] = inst_14348);

(statearr_14477_14544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (35))){
var state_14418__$1 = state_14418;
var statearr_14478_14545 = state_14418__$1;
(statearr_14478_14545[(2)] = true);

(statearr_14478_14545[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (19))){
var inst_14321 = (state_14418[(12)]);
var inst_14327 = figwheel.client.file_reloading.expand_files.call(null,inst_14321);
var state_14418__$1 = state_14418;
var statearr_14479_14546 = state_14418__$1;
(statearr_14479_14546[(2)] = inst_14327);

(statearr_14479_14546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (11))){
var state_14418__$1 = state_14418;
var statearr_14480_14547 = state_14418__$1;
(statearr_14480_14547[(2)] = null);

(statearr_14480_14547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (9))){
var inst_14310 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
var statearr_14481_14548 = state_14418__$1;
(statearr_14481_14548[(2)] = inst_14310);

(statearr_14481_14548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (5))){
var inst_14281 = (state_14418[(9)]);
var inst_14280 = (state_14418[(10)]);
var inst_14283 = (inst_14281 < inst_14280);
var inst_14284 = inst_14283;
var state_14418__$1 = state_14418;
if(cljs.core.truth_(inst_14284)){
var statearr_14482_14549 = state_14418__$1;
(statearr_14482_14549[(1)] = (7));

} else {
var statearr_14483_14550 = state_14418__$1;
(statearr_14483_14550[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (14))){
var inst_14291 = (state_14418[(22)]);
var inst_14300 = cljs.core.first.call(null,inst_14291);
var inst_14301 = figwheel.client.file_reloading.eval_body.call(null,inst_14300,opts);
var inst_14302 = cljs.core.next.call(null,inst_14291);
var inst_14278 = inst_14302;
var inst_14279 = null;
var inst_14280 = (0);
var inst_14281 = (0);
var state_14418__$1 = (function (){var statearr_14484 = state_14418;
(statearr_14484[(32)] = inst_14301);

(statearr_14484[(7)] = inst_14278);

(statearr_14484[(8)] = inst_14279);

(statearr_14484[(9)] = inst_14281);

(statearr_14484[(10)] = inst_14280);

return statearr_14484;
})();
var statearr_14485_14551 = state_14418__$1;
(statearr_14485_14551[(2)] = null);

(statearr_14485_14551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (45))){
var state_14418__$1 = state_14418;
var statearr_14486_14552 = state_14418__$1;
(statearr_14486_14552[(2)] = null);

(statearr_14486_14552[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (26))){
var inst_14331 = (state_14418[(19)]);
var inst_14337 = (state_14418[(26)]);
var inst_14334 = (state_14418[(23)]);
var inst_14339 = (state_14418[(24)]);
var inst_14335 = (state_14418[(25)]);
var inst_14354 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_14356 = (function (){var all_files = inst_14331;
var res_SINGLEQUOTE_ = inst_14334;
var res = inst_14335;
var files_not_loaded = inst_14337;
var dependencies_that_loaded = inst_14339;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14331,inst_14337,inst_14334,inst_14339,inst_14335,inst_14354,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14355){
var map__14487 = p__14355;
var map__14487__$1 = ((((!((map__14487 == null)))?(((((map__14487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14487):map__14487);
var namespace = cljs.core.get.call(null,map__14487__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__14487__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14331,inst_14337,inst_14334,inst_14339,inst_14335,inst_14354,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14357 = cljs.core.map.call(null,inst_14356,inst_14335);
var inst_14358 = cljs.core.pr_str.call(null,inst_14357);
var inst_14359 = figwheel.client.utils.log.call(null,inst_14358);
var inst_14360 = (function (){var all_files = inst_14331;
var res_SINGLEQUOTE_ = inst_14334;
var res = inst_14335;
var files_not_loaded = inst_14337;
var dependencies_that_loaded = inst_14339;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14331,inst_14337,inst_14334,inst_14339,inst_14335,inst_14354,inst_14356,inst_14357,inst_14358,inst_14359,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14331,inst_14337,inst_14334,inst_14339,inst_14335,inst_14354,inst_14356,inst_14357,inst_14358,inst_14359,state_val_14419,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14361 = setTimeout(inst_14360,(10));
var state_14418__$1 = (function (){var statearr_14489 = state_14418;
(statearr_14489[(33)] = inst_14359);

(statearr_14489[(34)] = inst_14354);

return statearr_14489;
})();
var statearr_14490_14553 = state_14418__$1;
(statearr_14490_14553[(2)] = inst_14361);

(statearr_14490_14553[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (16))){
var state_14418__$1 = state_14418;
var statearr_14491_14554 = state_14418__$1;
(statearr_14491_14554[(2)] = reload_dependents);

(statearr_14491_14554[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (38))){
var inst_14371 = (state_14418[(16)]);
var inst_14389 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14371);
var state_14418__$1 = state_14418;
var statearr_14492_14555 = state_14418__$1;
(statearr_14492_14555[(2)] = inst_14389);

(statearr_14492_14555[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (30))){
var state_14418__$1 = state_14418;
var statearr_14493_14556 = state_14418__$1;
(statearr_14493_14556[(2)] = null);

(statearr_14493_14556[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (10))){
var inst_14291 = (state_14418[(22)]);
var inst_14293 = cljs.core.chunked_seq_QMARK_.call(null,inst_14291);
var state_14418__$1 = state_14418;
if(inst_14293){
var statearr_14494_14557 = state_14418__$1;
(statearr_14494_14557[(1)] = (13));

} else {
var statearr_14495_14558 = state_14418__$1;
(statearr_14495_14558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (18))){
var inst_14325 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
if(cljs.core.truth_(inst_14325)){
var statearr_14496_14559 = state_14418__$1;
(statearr_14496_14559[(1)] = (19));

} else {
var statearr_14497_14560 = state_14418__$1;
(statearr_14497_14560[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (42))){
var state_14418__$1 = state_14418;
var statearr_14498_14561 = state_14418__$1;
(statearr_14498_14561[(2)] = null);

(statearr_14498_14561[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (37))){
var inst_14384 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
var statearr_14499_14562 = state_14418__$1;
(statearr_14499_14562[(2)] = inst_14384);

(statearr_14499_14562[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (8))){
var inst_14278 = (state_14418[(7)]);
var inst_14291 = (state_14418[(22)]);
var inst_14291__$1 = cljs.core.seq.call(null,inst_14278);
var state_14418__$1 = (function (){var statearr_14500 = state_14418;
(statearr_14500[(22)] = inst_14291__$1);

return statearr_14500;
})();
if(inst_14291__$1){
var statearr_14501_14563 = state_14418__$1;
(statearr_14501_14563[(1)] = (10));

} else {
var statearr_14502_14564 = state_14418__$1;
(statearr_14502_14564[(1)] = (11));

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
});})(c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__5435__auto__,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____0 = (function (){
var statearr_14503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14503[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__);

(statearr_14503[(1)] = (1));

return statearr_14503;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____1 = (function (state_14418){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_14418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e14504){if((e14504 instanceof Object)){
var ex__5439__auto__ = e14504;
var statearr_14505_14565 = state_14418;
(statearr_14505_14565[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14566 = state_14418;
state_14418 = G__14566;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__ = function(state_14418){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____1.call(this,state_14418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__5592__auto__ = (function (){var statearr_14506 = f__5591__auto__.call(null);
(statearr_14506[(6)] = c__5590__auto__);

return statearr_14506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__,map__14263,map__14263__$1,opts,before_jsload,on_jsload,reload_dependents,map__14264,map__14264__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__5590__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__14569,link){
var map__14570 = p__14569;
var map__14570__$1 = ((((!((map__14570 == null)))?(((((map__14570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14570):map__14570);
var file = cljs.core.get.call(null,map__14570__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__14570,map__14570__$1,file){
return (function (p1__14567_SHARP_,p2__14568_SHARP_){
if(cljs.core._EQ_.call(null,p1__14567_SHARP_,p2__14568_SHARP_)){
return p1__14567_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__14570,map__14570__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__14573){
var map__14574 = p__14573;
var map__14574__$1 = ((((!((map__14574 == null)))?(((((map__14574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14574):map__14574);
var match_length = cljs.core.get.call(null,map__14574__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__14574__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__14572_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__14572_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__14576_SHARP_,p2__14577_SHARP_){
return cljs.core.assoc.call(null,p1__14576_SHARP_,cljs.core.get.call(null,p2__14577_SHARP_,key),p2__14577_SHARP_);
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
var loaded_f_datas_14578 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_14578);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_14578);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__14579,p__14580){
var map__14581 = p__14579;
var map__14581__$1 = ((((!((map__14581 == null)))?(((((map__14581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14581):map__14581);
var on_cssload = cljs.core.get.call(null,map__14581__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__14582 = p__14580;
var map__14582__$1 = ((((!((map__14582 == null)))?(((((map__14582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14582):map__14582);
var files_msg = map__14582__$1;
var files = cljs.core.get.call(null,map__14582__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
