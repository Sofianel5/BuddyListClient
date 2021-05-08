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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__13986_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__13986_SHARP_));
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
var seq__13987 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__13988 = null;
var count__13989 = (0);
var i__13990 = (0);
while(true){
if((i__13990 < count__13989)){
var n = cljs.core._nth.call(null,chunk__13988,i__13990);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__13991 = seq__13987;
var G__13992 = chunk__13988;
var G__13993 = count__13989;
var G__13994 = (i__13990 + (1));
seq__13987 = G__13991;
chunk__13988 = G__13992;
count__13989 = G__13993;
i__13990 = G__13994;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13987);
if(temp__4657__auto__){
var seq__13987__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13987__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__13987__$1);
var G__13995 = cljs.core.chunk_rest.call(null,seq__13987__$1);
var G__13996 = c__4317__auto__;
var G__13997 = cljs.core.count.call(null,c__4317__auto__);
var G__13998 = (0);
seq__13987 = G__13995;
chunk__13988 = G__13996;
count__13989 = G__13997;
i__13990 = G__13998;
continue;
} else {
var n = cljs.core.first.call(null,seq__13987__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__13999 = cljs.core.next.call(null,seq__13987__$1);
var G__14000 = null;
var G__14001 = (0);
var G__14002 = (0);
seq__13987 = G__13999;
chunk__13988 = G__14000;
count__13989 = G__14001;
i__13990 = G__14002;
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

var seq__14012_14020 = cljs.core.seq.call(null,deps);
var chunk__14013_14021 = null;
var count__14014_14022 = (0);
var i__14015_14023 = (0);
while(true){
if((i__14015_14023 < count__14014_14022)){
var dep_14024 = cljs.core._nth.call(null,chunk__14013_14021,i__14015_14023);
topo_sort_helper_STAR_.call(null,dep_14024,(depth + (1)),state);


var G__14025 = seq__14012_14020;
var G__14026 = chunk__14013_14021;
var G__14027 = count__14014_14022;
var G__14028 = (i__14015_14023 + (1));
seq__14012_14020 = G__14025;
chunk__14013_14021 = G__14026;
count__14014_14022 = G__14027;
i__14015_14023 = G__14028;
continue;
} else {
var temp__4657__auto___14029 = cljs.core.seq.call(null,seq__14012_14020);
if(temp__4657__auto___14029){
var seq__14012_14030__$1 = temp__4657__auto___14029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14012_14030__$1)){
var c__4317__auto___14031 = cljs.core.chunk_first.call(null,seq__14012_14030__$1);
var G__14032 = cljs.core.chunk_rest.call(null,seq__14012_14030__$1);
var G__14033 = c__4317__auto___14031;
var G__14034 = cljs.core.count.call(null,c__4317__auto___14031);
var G__14035 = (0);
seq__14012_14020 = G__14032;
chunk__14013_14021 = G__14033;
count__14014_14022 = G__14034;
i__14015_14023 = G__14035;
continue;
} else {
var dep_14036 = cljs.core.first.call(null,seq__14012_14030__$1);
topo_sort_helper_STAR_.call(null,dep_14036,(depth + (1)),state);


var G__14037 = cljs.core.next.call(null,seq__14012_14030__$1);
var G__14038 = null;
var G__14039 = (0);
var G__14040 = (0);
seq__14012_14020 = G__14037;
chunk__14013_14021 = G__14038;
count__14014_14022 = G__14039;
i__14015_14023 = G__14040;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__14016){
var vec__14017 = p__14016;
var seq__14018 = cljs.core.seq.call(null,vec__14017);
var first__14019 = cljs.core.first.call(null,seq__14018);
var seq__14018__$1 = cljs.core.next.call(null,seq__14018);
var x = first__14019;
var xs = seq__14018__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__14017,seq__14018,first__14019,seq__14018__$1,x,xs,get_deps__$1){
return (function (p1__14003_SHARP_){
return clojure.set.difference.call(null,p1__14003_SHARP_,x);
});})(vec__14017,seq__14018,first__14019,seq__14018__$1,x,xs,get_deps__$1))
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
var seq__14041 = cljs.core.seq.call(null,provides);
var chunk__14042 = null;
var count__14043 = (0);
var i__14044 = (0);
while(true){
if((i__14044 < count__14043)){
var prov = cljs.core._nth.call(null,chunk__14042,i__14044);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14045_14053 = cljs.core.seq.call(null,requires);
var chunk__14046_14054 = null;
var count__14047_14055 = (0);
var i__14048_14056 = (0);
while(true){
if((i__14048_14056 < count__14047_14055)){
var req_14057 = cljs.core._nth.call(null,chunk__14046_14054,i__14048_14056);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14057,prov);


var G__14058 = seq__14045_14053;
var G__14059 = chunk__14046_14054;
var G__14060 = count__14047_14055;
var G__14061 = (i__14048_14056 + (1));
seq__14045_14053 = G__14058;
chunk__14046_14054 = G__14059;
count__14047_14055 = G__14060;
i__14048_14056 = G__14061;
continue;
} else {
var temp__4657__auto___14062 = cljs.core.seq.call(null,seq__14045_14053);
if(temp__4657__auto___14062){
var seq__14045_14063__$1 = temp__4657__auto___14062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14045_14063__$1)){
var c__4317__auto___14064 = cljs.core.chunk_first.call(null,seq__14045_14063__$1);
var G__14065 = cljs.core.chunk_rest.call(null,seq__14045_14063__$1);
var G__14066 = c__4317__auto___14064;
var G__14067 = cljs.core.count.call(null,c__4317__auto___14064);
var G__14068 = (0);
seq__14045_14053 = G__14065;
chunk__14046_14054 = G__14066;
count__14047_14055 = G__14067;
i__14048_14056 = G__14068;
continue;
} else {
var req_14069 = cljs.core.first.call(null,seq__14045_14063__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14069,prov);


var G__14070 = cljs.core.next.call(null,seq__14045_14063__$1);
var G__14071 = null;
var G__14072 = (0);
var G__14073 = (0);
seq__14045_14053 = G__14070;
chunk__14046_14054 = G__14071;
count__14047_14055 = G__14072;
i__14048_14056 = G__14073;
continue;
}
} else {
}
}
break;
}


var G__14074 = seq__14041;
var G__14075 = chunk__14042;
var G__14076 = count__14043;
var G__14077 = (i__14044 + (1));
seq__14041 = G__14074;
chunk__14042 = G__14075;
count__14043 = G__14076;
i__14044 = G__14077;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14041);
if(temp__4657__auto__){
var seq__14041__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14041__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__14041__$1);
var G__14078 = cljs.core.chunk_rest.call(null,seq__14041__$1);
var G__14079 = c__4317__auto__;
var G__14080 = cljs.core.count.call(null,c__4317__auto__);
var G__14081 = (0);
seq__14041 = G__14078;
chunk__14042 = G__14079;
count__14043 = G__14080;
i__14044 = G__14081;
continue;
} else {
var prov = cljs.core.first.call(null,seq__14041__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14049_14082 = cljs.core.seq.call(null,requires);
var chunk__14050_14083 = null;
var count__14051_14084 = (0);
var i__14052_14085 = (0);
while(true){
if((i__14052_14085 < count__14051_14084)){
var req_14086 = cljs.core._nth.call(null,chunk__14050_14083,i__14052_14085);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14086,prov);


var G__14087 = seq__14049_14082;
var G__14088 = chunk__14050_14083;
var G__14089 = count__14051_14084;
var G__14090 = (i__14052_14085 + (1));
seq__14049_14082 = G__14087;
chunk__14050_14083 = G__14088;
count__14051_14084 = G__14089;
i__14052_14085 = G__14090;
continue;
} else {
var temp__4657__auto___14091__$1 = cljs.core.seq.call(null,seq__14049_14082);
if(temp__4657__auto___14091__$1){
var seq__14049_14092__$1 = temp__4657__auto___14091__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14049_14092__$1)){
var c__4317__auto___14093 = cljs.core.chunk_first.call(null,seq__14049_14092__$1);
var G__14094 = cljs.core.chunk_rest.call(null,seq__14049_14092__$1);
var G__14095 = c__4317__auto___14093;
var G__14096 = cljs.core.count.call(null,c__4317__auto___14093);
var G__14097 = (0);
seq__14049_14082 = G__14094;
chunk__14050_14083 = G__14095;
count__14051_14084 = G__14096;
i__14052_14085 = G__14097;
continue;
} else {
var req_14098 = cljs.core.first.call(null,seq__14049_14092__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14098,prov);


var G__14099 = cljs.core.next.call(null,seq__14049_14092__$1);
var G__14100 = null;
var G__14101 = (0);
var G__14102 = (0);
seq__14049_14082 = G__14099;
chunk__14050_14083 = G__14100;
count__14051_14084 = G__14101;
i__14052_14085 = G__14102;
continue;
}
} else {
}
}
break;
}


var G__14103 = cljs.core.next.call(null,seq__14041__$1);
var G__14104 = null;
var G__14105 = (0);
var G__14106 = (0);
seq__14041 = G__14103;
chunk__14042 = G__14104;
count__14043 = G__14105;
i__14044 = G__14106;
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
var seq__14107_14111 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__14108_14112 = null;
var count__14109_14113 = (0);
var i__14110_14114 = (0);
while(true){
if((i__14110_14114 < count__14109_14113)){
var ns_14115 = cljs.core._nth.call(null,chunk__14108_14112,i__14110_14114);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14115);


var G__14116 = seq__14107_14111;
var G__14117 = chunk__14108_14112;
var G__14118 = count__14109_14113;
var G__14119 = (i__14110_14114 + (1));
seq__14107_14111 = G__14116;
chunk__14108_14112 = G__14117;
count__14109_14113 = G__14118;
i__14110_14114 = G__14119;
continue;
} else {
var temp__4657__auto___14120 = cljs.core.seq.call(null,seq__14107_14111);
if(temp__4657__auto___14120){
var seq__14107_14121__$1 = temp__4657__auto___14120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14107_14121__$1)){
var c__4317__auto___14122 = cljs.core.chunk_first.call(null,seq__14107_14121__$1);
var G__14123 = cljs.core.chunk_rest.call(null,seq__14107_14121__$1);
var G__14124 = c__4317__auto___14122;
var G__14125 = cljs.core.count.call(null,c__4317__auto___14122);
var G__14126 = (0);
seq__14107_14111 = G__14123;
chunk__14108_14112 = G__14124;
count__14109_14113 = G__14125;
i__14110_14114 = G__14126;
continue;
} else {
var ns_14127 = cljs.core.first.call(null,seq__14107_14121__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14127);


var G__14128 = cljs.core.next.call(null,seq__14107_14121__$1);
var G__14129 = null;
var G__14130 = (0);
var G__14131 = (0);
seq__14107_14111 = G__14128;
chunk__14108_14112 = G__14129;
count__14109_14113 = G__14130;
i__14110_14114 = G__14131;
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
var G__14132__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__14132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14133__i = 0, G__14133__a = new Array(arguments.length -  0);
while (G__14133__i < G__14133__a.length) {G__14133__a[G__14133__i] = arguments[G__14133__i + 0]; ++G__14133__i;}
  args = new cljs.core.IndexedSeq(G__14133__a,0,null);
} 
return G__14132__delegate.call(this,args);};
G__14132.cljs$lang$maxFixedArity = 0;
G__14132.cljs$lang$applyTo = (function (arglist__14134){
var args = cljs.core.seq(arglist__14134);
return G__14132__delegate(args);
});
G__14132.cljs$core$IFn$_invoke$arity$variadic = G__14132__delegate;
return G__14132;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__14135 = cljs.core._EQ_;
var expr__14136 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__14135.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__14136))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__14135,expr__14136){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__14135,expr__14136))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__14135,expr__14136){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e14138){if((e14138 instanceof Error)){
var e = e14138;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14138;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__14135,expr__14136))
} else {
if(cljs.core.truth_(pred__14135.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__14136))){
return ((function (pred__14135,expr__14136){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__14135,expr__14136){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__14135,expr__14136))
);

return deferred.addErrback(((function (deferred,pred__14135,expr__14136){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__14135,expr__14136))
);
});
;})(pred__14135,expr__14136))
} else {
if(cljs.core.truth_(pred__14135.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__14136))){
return ((function (pred__14135,expr__14136){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e14139){if((e14139 instanceof Error)){
var e = e14139;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14139;

}
}})());
});
;})(pred__14135,expr__14136))
} else {
return ((function (pred__14135,expr__14136){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__14135,expr__14136))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__14140,callback){
var map__14141 = p__14140;
var map__14141__$1 = ((((!((map__14141 == null)))?(((((map__14141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14141):map__14141);
var file_msg = map__14141__$1;
var request_url = cljs.core.get.call(null,map__14141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__14141,map__14141__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__14141,map__14141__$1,file_msg,request_url))
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
return (function (state_14165){
var state_val_14166 = (state_14165[(1)]);
if((state_val_14166 === (7))){
var inst_14161 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
var statearr_14167_14184 = state_14165__$1;
(statearr_14167_14184[(2)] = inst_14161);

(statearr_14167_14184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (1))){
var state_14165__$1 = state_14165;
var statearr_14168_14185 = state_14165__$1;
(statearr_14168_14185[(2)] = null);

(statearr_14168_14185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (4))){
var inst_14145 = (state_14165[(7)]);
var inst_14145__$1 = (state_14165[(2)]);
var state_14165__$1 = (function (){var statearr_14169 = state_14165;
(statearr_14169[(7)] = inst_14145__$1);

return statearr_14169;
})();
if(cljs.core.truth_(inst_14145__$1)){
var statearr_14170_14186 = state_14165__$1;
(statearr_14170_14186[(1)] = (5));

} else {
var statearr_14171_14187 = state_14165__$1;
(statearr_14171_14187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (6))){
var state_14165__$1 = state_14165;
var statearr_14172_14188 = state_14165__$1;
(statearr_14172_14188[(2)] = null);

(statearr_14172_14188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (3))){
var inst_14163 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14165__$1,inst_14163);
} else {
if((state_val_14166 === (2))){
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14165__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_14166 === (11))){
var inst_14157 = (state_14165[(2)]);
var state_14165__$1 = (function (){var statearr_14173 = state_14165;
(statearr_14173[(8)] = inst_14157);

return statearr_14173;
})();
var statearr_14174_14189 = state_14165__$1;
(statearr_14174_14189[(2)] = null);

(statearr_14174_14189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (9))){
var inst_14149 = (state_14165[(9)]);
var inst_14151 = (state_14165[(10)]);
var inst_14153 = inst_14151.call(null,inst_14149);
var state_14165__$1 = state_14165;
var statearr_14175_14190 = state_14165__$1;
(statearr_14175_14190[(2)] = inst_14153);

(statearr_14175_14190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (5))){
var inst_14145 = (state_14165[(7)]);
var inst_14147 = figwheel.client.file_reloading.blocking_load.call(null,inst_14145);
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14165__$1,(8),inst_14147);
} else {
if((state_val_14166 === (10))){
var inst_14149 = (state_14165[(9)]);
var inst_14155 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_14149);
var state_14165__$1 = state_14165;
var statearr_14176_14191 = state_14165__$1;
(statearr_14176_14191[(2)] = inst_14155);

(statearr_14176_14191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (8))){
var inst_14151 = (state_14165[(10)]);
var inst_14145 = (state_14165[(7)]);
var inst_14149 = (state_14165[(2)]);
var inst_14150 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_14151__$1 = cljs.core.get.call(null,inst_14150,inst_14145);
var state_14165__$1 = (function (){var statearr_14177 = state_14165;
(statearr_14177[(9)] = inst_14149);

(statearr_14177[(10)] = inst_14151__$1);

return statearr_14177;
})();
if(cljs.core.truth_(inst_14151__$1)){
var statearr_14178_14192 = state_14165__$1;
(statearr_14178_14192[(1)] = (9));

} else {
var statearr_14179_14193 = state_14165__$1;
(statearr_14179_14193[(1)] = (10));

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
var statearr_14180 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14180[(0)] = figwheel$client$file_reloading$state_machine__5436__auto__);

(statearr_14180[(1)] = (1));

return statearr_14180;
});
var figwheel$client$file_reloading$state_machine__5436__auto____1 = (function (state_14165){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_14165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e14181){if((e14181 instanceof Object)){
var ex__5439__auto__ = e14181;
var statearr_14182_14194 = state_14165;
(statearr_14182_14194[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14195 = state_14165;
state_14165 = G__14195;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__5436__auto__ = function(state_14165){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__5436__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__5436__auto____1.call(this,state_14165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__5436__auto____0;
figwheel$client$file_reloading$state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__5436__auto____1;
return figwheel$client$file_reloading$state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_14183 = f__5591__auto__.call(null);
(statearr_14183[(6)] = c__5590__auto__);

return statearr_14183;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__14196,callback){
var map__14197 = p__14196;
var map__14197__$1 = ((((!((map__14197 == null)))?(((((map__14197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14197):map__14197);
var file_msg = map__14197__$1;
var namespace = cljs.core.get.call(null,map__14197__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__14197,map__14197__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__14197,map__14197__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__14199){
var map__14200 = p__14199;
var map__14200__$1 = ((((!((map__14200 == null)))?(((((map__14200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14200):map__14200);
var file_msg = map__14200__$1;
var namespace = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__14202){
var map__14203 = p__14202;
var map__14203__$1 = ((((!((map__14203 == null)))?(((((map__14203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14203):map__14203);
var file_msg = map__14203__$1;
var namespace = cljs.core.get.call(null,map__14203__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__14205,callback){
var map__14206 = p__14205;
var map__14206__$1 = ((((!((map__14206 == null)))?(((((map__14206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14206):map__14206);
var file_msg = map__14206__$1;
var request_url = cljs.core.get.call(null,map__14206__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__14206__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__5590__auto___14256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___14256,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___14256,out){
return (function (state_14241){
var state_val_14242 = (state_14241[(1)]);
if((state_val_14242 === (1))){
var inst_14215 = cljs.core.seq.call(null,files);
var inst_14216 = cljs.core.first.call(null,inst_14215);
var inst_14217 = cljs.core.next.call(null,inst_14215);
var inst_14218 = files;
var state_14241__$1 = (function (){var statearr_14243 = state_14241;
(statearr_14243[(7)] = inst_14216);

(statearr_14243[(8)] = inst_14217);

(statearr_14243[(9)] = inst_14218);

return statearr_14243;
})();
var statearr_14244_14257 = state_14241__$1;
(statearr_14244_14257[(2)] = null);

(statearr_14244_14257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14242 === (2))){
var inst_14224 = (state_14241[(10)]);
var inst_14218 = (state_14241[(9)]);
var inst_14223 = cljs.core.seq.call(null,inst_14218);
var inst_14224__$1 = cljs.core.first.call(null,inst_14223);
var inst_14225 = cljs.core.next.call(null,inst_14223);
var inst_14226 = (inst_14224__$1 == null);
var inst_14227 = cljs.core.not.call(null,inst_14226);
var state_14241__$1 = (function (){var statearr_14245 = state_14241;
(statearr_14245[(11)] = inst_14225);

(statearr_14245[(10)] = inst_14224__$1);

return statearr_14245;
})();
if(inst_14227){
var statearr_14246_14258 = state_14241__$1;
(statearr_14246_14258[(1)] = (4));

} else {
var statearr_14247_14259 = state_14241__$1;
(statearr_14247_14259[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14242 === (3))){
var inst_14239 = (state_14241[(2)]);
var state_14241__$1 = state_14241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14241__$1,inst_14239);
} else {
if((state_val_14242 === (4))){
var inst_14224 = (state_14241[(10)]);
var inst_14229 = figwheel.client.file_reloading.reload_js_file.call(null,inst_14224);
var state_14241__$1 = state_14241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14241__$1,(7),inst_14229);
} else {
if((state_val_14242 === (5))){
var inst_14235 = cljs.core.async.close_BANG_.call(null,out);
var state_14241__$1 = state_14241;
var statearr_14248_14260 = state_14241__$1;
(statearr_14248_14260[(2)] = inst_14235);

(statearr_14248_14260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14242 === (6))){
var inst_14237 = (state_14241[(2)]);
var state_14241__$1 = state_14241;
var statearr_14249_14261 = state_14241__$1;
(statearr_14249_14261[(2)] = inst_14237);

(statearr_14249_14261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14242 === (7))){
var inst_14225 = (state_14241[(11)]);
var inst_14231 = (state_14241[(2)]);
var inst_14232 = cljs.core.async.put_BANG_.call(null,out,inst_14231);
var inst_14218 = inst_14225;
var state_14241__$1 = (function (){var statearr_14250 = state_14241;
(statearr_14250[(12)] = inst_14232);

(statearr_14250[(9)] = inst_14218);

return statearr_14250;
})();
var statearr_14251_14262 = state_14241__$1;
(statearr_14251_14262[(2)] = null);

(statearr_14251_14262[(1)] = (2));


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
});})(c__5590__auto___14256,out))
;
return ((function (switch__5435__auto__,c__5590__auto___14256,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____0 = (function (){
var statearr_14252 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14252[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__);

(statearr_14252[(1)] = (1));

return statearr_14252;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____1 = (function (state_14241){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_14241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e14253){if((e14253 instanceof Object)){
var ex__5439__auto__ = e14253;
var statearr_14254_14263 = state_14241;
(statearr_14254_14263[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14264 = state_14241;
state_14241 = G__14264;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__ = function(state_14241){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____1.call(this,state_14241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___14256,out))
})();
var state__5592__auto__ = (function (){var statearr_14255 = f__5591__auto__.call(null);
(statearr_14255[(6)] = c__5590__auto___14256);

return statearr_14255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___14256,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__14265,opts){
var map__14266 = p__14265;
var map__14266__$1 = ((((!((map__14266 == null)))?(((((map__14266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14266):map__14266);
var eval_body = cljs.core.get.call(null,map__14266__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__14266__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e14268){var e = e14268;
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
return (function (p1__14269_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__14269_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__14270){
var vec__14271 = p__14270;
var k = cljs.core.nth.call(null,vec__14271,(0),null);
var v = cljs.core.nth.call(null,vec__14271,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__14274){
var vec__14275 = p__14274;
var k = cljs.core.nth.call(null,vec__14275,(0),null);
var v = cljs.core.nth.call(null,vec__14275,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__14281,p__14282){
var map__14283 = p__14281;
var map__14283__$1 = ((((!((map__14283 == null)))?(((((map__14283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14283):map__14283);
var opts = map__14283__$1;
var before_jsload = cljs.core.get.call(null,map__14283__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__14283__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__14283__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__14284 = p__14282;
var map__14284__$1 = ((((!((map__14284 == null)))?(((((map__14284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14284):map__14284);
var msg = map__14284__$1;
var files = cljs.core.get.call(null,map__14284__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__14284__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__14284__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_14438){
var state_val_14439 = (state_14438[(1)]);
if((state_val_14439 === (7))){
var inst_14298 = (state_14438[(7)]);
var inst_14301 = (state_14438[(8)]);
var inst_14299 = (state_14438[(9)]);
var inst_14300 = (state_14438[(10)]);
var inst_14306 = cljs.core._nth.call(null,inst_14299,inst_14301);
var inst_14307 = figwheel.client.file_reloading.eval_body.call(null,inst_14306,opts);
var inst_14308 = (inst_14301 + (1));
var tmp14440 = inst_14298;
var tmp14441 = inst_14299;
var tmp14442 = inst_14300;
var inst_14298__$1 = tmp14440;
var inst_14299__$1 = tmp14441;
var inst_14300__$1 = tmp14442;
var inst_14301__$1 = inst_14308;
var state_14438__$1 = (function (){var statearr_14443 = state_14438;
(statearr_14443[(11)] = inst_14307);

(statearr_14443[(7)] = inst_14298__$1);

(statearr_14443[(8)] = inst_14301__$1);

(statearr_14443[(9)] = inst_14299__$1);

(statearr_14443[(10)] = inst_14300__$1);

return statearr_14443;
})();
var statearr_14444_14527 = state_14438__$1;
(statearr_14444_14527[(2)] = null);

(statearr_14444_14527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (20))){
var inst_14341 = (state_14438[(12)]);
var inst_14349 = figwheel.client.file_reloading.sort_files.call(null,inst_14341);
var state_14438__$1 = state_14438;
var statearr_14445_14528 = state_14438__$1;
(statearr_14445_14528[(2)] = inst_14349);

(statearr_14445_14528[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (27))){
var state_14438__$1 = state_14438;
var statearr_14446_14529 = state_14438__$1;
(statearr_14446_14529[(2)] = null);

(statearr_14446_14529[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (1))){
var inst_14290 = (state_14438[(13)]);
var inst_14287 = before_jsload.call(null,files);
var inst_14288 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_14289 = (function (){return ((function (inst_14290,inst_14287,inst_14288,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14278_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14278_SHARP_);
});
;})(inst_14290,inst_14287,inst_14288,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14290__$1 = cljs.core.filter.call(null,inst_14289,files);
var inst_14291 = cljs.core.not_empty.call(null,inst_14290__$1);
var state_14438__$1 = (function (){var statearr_14447 = state_14438;
(statearr_14447[(14)] = inst_14287);

(statearr_14447[(13)] = inst_14290__$1);

(statearr_14447[(15)] = inst_14288);

return statearr_14447;
})();
if(cljs.core.truth_(inst_14291)){
var statearr_14448_14530 = state_14438__$1;
(statearr_14448_14530[(1)] = (2));

} else {
var statearr_14449_14531 = state_14438__$1;
(statearr_14449_14531[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (24))){
var state_14438__$1 = state_14438;
var statearr_14450_14532 = state_14438__$1;
(statearr_14450_14532[(2)] = null);

(statearr_14450_14532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (39))){
var inst_14391 = (state_14438[(16)]);
var state_14438__$1 = state_14438;
var statearr_14451_14533 = state_14438__$1;
(statearr_14451_14533[(2)] = inst_14391);

(statearr_14451_14533[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (46))){
var inst_14433 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14452_14534 = state_14438__$1;
(statearr_14452_14534[(2)] = inst_14433);

(statearr_14452_14534[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (4))){
var inst_14335 = (state_14438[(2)]);
var inst_14336 = cljs.core.List.EMPTY;
var inst_14337 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_14336);
var inst_14338 = (function (){return ((function (inst_14335,inst_14336,inst_14337,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14279_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__14279_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14279_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__14279_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_14335,inst_14336,inst_14337,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14339 = cljs.core.filter.call(null,inst_14338,files);
var inst_14340 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_14341 = cljs.core.concat.call(null,inst_14339,inst_14340);
var state_14438__$1 = (function (){var statearr_14453 = state_14438;
(statearr_14453[(17)] = inst_14337);

(statearr_14453[(12)] = inst_14341);

(statearr_14453[(18)] = inst_14335);

return statearr_14453;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_14454_14535 = state_14438__$1;
(statearr_14454_14535[(1)] = (16));

} else {
var statearr_14455_14536 = state_14438__$1;
(statearr_14455_14536[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (15))){
var inst_14325 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14456_14537 = state_14438__$1;
(statearr_14456_14537[(2)] = inst_14325);

(statearr_14456_14537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (21))){
var inst_14351 = (state_14438[(19)]);
var inst_14351__$1 = (state_14438[(2)]);
var inst_14352 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_14351__$1);
var state_14438__$1 = (function (){var statearr_14457 = state_14438;
(statearr_14457[(19)] = inst_14351__$1);

return statearr_14457;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14438__$1,(22),inst_14352);
} else {
if((state_val_14439 === (31))){
var inst_14436 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14438__$1,inst_14436);
} else {
if((state_val_14439 === (32))){
var inst_14391 = (state_14438[(16)]);
var inst_14396 = inst_14391.cljs$lang$protocol_mask$partition0$;
var inst_14397 = (inst_14396 & (64));
var inst_14398 = inst_14391.cljs$core$ISeq$;
var inst_14399 = (cljs.core.PROTOCOL_SENTINEL === inst_14398);
var inst_14400 = ((inst_14397) || (inst_14399));
var state_14438__$1 = state_14438;
if(cljs.core.truth_(inst_14400)){
var statearr_14458_14538 = state_14438__$1;
(statearr_14458_14538[(1)] = (35));

} else {
var statearr_14459_14539 = state_14438__$1;
(statearr_14459_14539[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (40))){
var inst_14413 = (state_14438[(20)]);
var inst_14412 = (state_14438[(2)]);
var inst_14413__$1 = cljs.core.get.call(null,inst_14412,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_14414 = cljs.core.get.call(null,inst_14412,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_14415 = cljs.core.not_empty.call(null,inst_14413__$1);
var state_14438__$1 = (function (){var statearr_14460 = state_14438;
(statearr_14460[(20)] = inst_14413__$1);

(statearr_14460[(21)] = inst_14414);

return statearr_14460;
})();
if(cljs.core.truth_(inst_14415)){
var statearr_14461_14540 = state_14438__$1;
(statearr_14461_14540[(1)] = (41));

} else {
var statearr_14462_14541 = state_14438__$1;
(statearr_14462_14541[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (33))){
var state_14438__$1 = state_14438;
var statearr_14463_14542 = state_14438__$1;
(statearr_14463_14542[(2)] = false);

(statearr_14463_14542[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (13))){
var inst_14311 = (state_14438[(22)]);
var inst_14315 = cljs.core.chunk_first.call(null,inst_14311);
var inst_14316 = cljs.core.chunk_rest.call(null,inst_14311);
var inst_14317 = cljs.core.count.call(null,inst_14315);
var inst_14298 = inst_14316;
var inst_14299 = inst_14315;
var inst_14300 = inst_14317;
var inst_14301 = (0);
var state_14438__$1 = (function (){var statearr_14464 = state_14438;
(statearr_14464[(7)] = inst_14298);

(statearr_14464[(8)] = inst_14301);

(statearr_14464[(9)] = inst_14299);

(statearr_14464[(10)] = inst_14300);

return statearr_14464;
})();
var statearr_14465_14543 = state_14438__$1;
(statearr_14465_14543[(2)] = null);

(statearr_14465_14543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (22))){
var inst_14351 = (state_14438[(19)]);
var inst_14355 = (state_14438[(23)]);
var inst_14359 = (state_14438[(24)]);
var inst_14354 = (state_14438[(25)]);
var inst_14354__$1 = (state_14438[(2)]);
var inst_14355__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14354__$1);
var inst_14356 = (function (){var all_files = inst_14351;
var res_SINGLEQUOTE_ = inst_14354__$1;
var res = inst_14355__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_14351,inst_14355,inst_14359,inst_14354,inst_14354__$1,inst_14355__$1,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14280_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__14280_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_14351,inst_14355,inst_14359,inst_14354,inst_14354__$1,inst_14355__$1,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14357 = cljs.core.filter.call(null,inst_14356,inst_14354__$1);
var inst_14358 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_14359__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14358);
var inst_14360 = cljs.core.not_empty.call(null,inst_14359__$1);
var state_14438__$1 = (function (){var statearr_14466 = state_14438;
(statearr_14466[(23)] = inst_14355__$1);

(statearr_14466[(24)] = inst_14359__$1);

(statearr_14466[(26)] = inst_14357);

(statearr_14466[(25)] = inst_14354__$1);

return statearr_14466;
})();
if(cljs.core.truth_(inst_14360)){
var statearr_14467_14544 = state_14438__$1;
(statearr_14467_14544[(1)] = (23));

} else {
var statearr_14468_14545 = state_14438__$1;
(statearr_14468_14545[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (36))){
var state_14438__$1 = state_14438;
var statearr_14469_14546 = state_14438__$1;
(statearr_14469_14546[(2)] = false);

(statearr_14469_14546[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (41))){
var inst_14413 = (state_14438[(20)]);
var inst_14417 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_14418 = cljs.core.map.call(null,inst_14417,inst_14413);
var inst_14419 = cljs.core.pr_str.call(null,inst_14418);
var inst_14420 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14419)].join('');
var inst_14421 = figwheel.client.utils.log.call(null,inst_14420);
var state_14438__$1 = state_14438;
var statearr_14470_14547 = state_14438__$1;
(statearr_14470_14547[(2)] = inst_14421);

(statearr_14470_14547[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (43))){
var inst_14414 = (state_14438[(21)]);
var inst_14424 = (state_14438[(2)]);
var inst_14425 = cljs.core.not_empty.call(null,inst_14414);
var state_14438__$1 = (function (){var statearr_14471 = state_14438;
(statearr_14471[(27)] = inst_14424);

return statearr_14471;
})();
if(cljs.core.truth_(inst_14425)){
var statearr_14472_14548 = state_14438__$1;
(statearr_14472_14548[(1)] = (44));

} else {
var statearr_14473_14549 = state_14438__$1;
(statearr_14473_14549[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (29))){
var inst_14351 = (state_14438[(19)]);
var inst_14355 = (state_14438[(23)]);
var inst_14391 = (state_14438[(16)]);
var inst_14359 = (state_14438[(24)]);
var inst_14357 = (state_14438[(26)]);
var inst_14354 = (state_14438[(25)]);
var inst_14387 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_14390 = (function (){var all_files = inst_14351;
var res_SINGLEQUOTE_ = inst_14354;
var res = inst_14355;
var files_not_loaded = inst_14357;
var dependencies_that_loaded = inst_14359;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14351,inst_14355,inst_14391,inst_14359,inst_14357,inst_14354,inst_14387,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14389){
var map__14474 = p__14389;
var map__14474__$1 = ((((!((map__14474 == null)))?(((((map__14474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14474):map__14474);
var namespace = cljs.core.get.call(null,map__14474__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14351,inst_14355,inst_14391,inst_14359,inst_14357,inst_14354,inst_14387,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14391__$1 = cljs.core.group_by.call(null,inst_14390,inst_14357);
var inst_14393 = (inst_14391__$1 == null);
var inst_14394 = cljs.core.not.call(null,inst_14393);
var state_14438__$1 = (function (){var statearr_14476 = state_14438;
(statearr_14476[(16)] = inst_14391__$1);

(statearr_14476[(28)] = inst_14387);

return statearr_14476;
})();
if(inst_14394){
var statearr_14477_14550 = state_14438__$1;
(statearr_14477_14550[(1)] = (32));

} else {
var statearr_14478_14551 = state_14438__$1;
(statearr_14478_14551[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (44))){
var inst_14414 = (state_14438[(21)]);
var inst_14427 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14414);
var inst_14428 = cljs.core.pr_str.call(null,inst_14427);
var inst_14429 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14428)].join('');
var inst_14430 = figwheel.client.utils.log.call(null,inst_14429);
var state_14438__$1 = state_14438;
var statearr_14479_14552 = state_14438__$1;
(statearr_14479_14552[(2)] = inst_14430);

(statearr_14479_14552[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (6))){
var inst_14332 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14480_14553 = state_14438__$1;
(statearr_14480_14553[(2)] = inst_14332);

(statearr_14480_14553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (28))){
var inst_14357 = (state_14438[(26)]);
var inst_14384 = (state_14438[(2)]);
var inst_14385 = cljs.core.not_empty.call(null,inst_14357);
var state_14438__$1 = (function (){var statearr_14481 = state_14438;
(statearr_14481[(29)] = inst_14384);

return statearr_14481;
})();
if(cljs.core.truth_(inst_14385)){
var statearr_14482_14554 = state_14438__$1;
(statearr_14482_14554[(1)] = (29));

} else {
var statearr_14483_14555 = state_14438__$1;
(statearr_14483_14555[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (25))){
var inst_14355 = (state_14438[(23)]);
var inst_14371 = (state_14438[(2)]);
var inst_14372 = cljs.core.not_empty.call(null,inst_14355);
var state_14438__$1 = (function (){var statearr_14484 = state_14438;
(statearr_14484[(30)] = inst_14371);

return statearr_14484;
})();
if(cljs.core.truth_(inst_14372)){
var statearr_14485_14556 = state_14438__$1;
(statearr_14485_14556[(1)] = (26));

} else {
var statearr_14486_14557 = state_14438__$1;
(statearr_14486_14557[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (34))){
var inst_14407 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
if(cljs.core.truth_(inst_14407)){
var statearr_14487_14558 = state_14438__$1;
(statearr_14487_14558[(1)] = (38));

} else {
var statearr_14488_14559 = state_14438__$1;
(statearr_14488_14559[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (17))){
var state_14438__$1 = state_14438;
var statearr_14489_14560 = state_14438__$1;
(statearr_14489_14560[(2)] = recompile_dependents);

(statearr_14489_14560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (3))){
var state_14438__$1 = state_14438;
var statearr_14490_14561 = state_14438__$1;
(statearr_14490_14561[(2)] = null);

(statearr_14490_14561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (12))){
var inst_14328 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14491_14562 = state_14438__$1;
(statearr_14491_14562[(2)] = inst_14328);

(statearr_14491_14562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (2))){
var inst_14290 = (state_14438[(13)]);
var inst_14297 = cljs.core.seq.call(null,inst_14290);
var inst_14298 = inst_14297;
var inst_14299 = null;
var inst_14300 = (0);
var inst_14301 = (0);
var state_14438__$1 = (function (){var statearr_14492 = state_14438;
(statearr_14492[(7)] = inst_14298);

(statearr_14492[(8)] = inst_14301);

(statearr_14492[(9)] = inst_14299);

(statearr_14492[(10)] = inst_14300);

return statearr_14492;
})();
var statearr_14493_14563 = state_14438__$1;
(statearr_14493_14563[(2)] = null);

(statearr_14493_14563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (23))){
var inst_14351 = (state_14438[(19)]);
var inst_14355 = (state_14438[(23)]);
var inst_14359 = (state_14438[(24)]);
var inst_14357 = (state_14438[(26)]);
var inst_14354 = (state_14438[(25)]);
var inst_14362 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_14364 = (function (){var all_files = inst_14351;
var res_SINGLEQUOTE_ = inst_14354;
var res = inst_14355;
var files_not_loaded = inst_14357;
var dependencies_that_loaded = inst_14359;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14351,inst_14355,inst_14359,inst_14357,inst_14354,inst_14362,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14363){
var map__14494 = p__14363;
var map__14494__$1 = ((((!((map__14494 == null)))?(((((map__14494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14494):map__14494);
var request_url = cljs.core.get.call(null,map__14494__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14351,inst_14355,inst_14359,inst_14357,inst_14354,inst_14362,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14365 = cljs.core.reverse.call(null,inst_14359);
var inst_14366 = cljs.core.map.call(null,inst_14364,inst_14365);
var inst_14367 = cljs.core.pr_str.call(null,inst_14366);
var inst_14368 = figwheel.client.utils.log.call(null,inst_14367);
var state_14438__$1 = (function (){var statearr_14496 = state_14438;
(statearr_14496[(31)] = inst_14362);

return statearr_14496;
})();
var statearr_14497_14564 = state_14438__$1;
(statearr_14497_14564[(2)] = inst_14368);

(statearr_14497_14564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (35))){
var state_14438__$1 = state_14438;
var statearr_14498_14565 = state_14438__$1;
(statearr_14498_14565[(2)] = true);

(statearr_14498_14565[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (19))){
var inst_14341 = (state_14438[(12)]);
var inst_14347 = figwheel.client.file_reloading.expand_files.call(null,inst_14341);
var state_14438__$1 = state_14438;
var statearr_14499_14566 = state_14438__$1;
(statearr_14499_14566[(2)] = inst_14347);

(statearr_14499_14566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (11))){
var state_14438__$1 = state_14438;
var statearr_14500_14567 = state_14438__$1;
(statearr_14500_14567[(2)] = null);

(statearr_14500_14567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (9))){
var inst_14330 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14501_14568 = state_14438__$1;
(statearr_14501_14568[(2)] = inst_14330);

(statearr_14501_14568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (5))){
var inst_14301 = (state_14438[(8)]);
var inst_14300 = (state_14438[(10)]);
var inst_14303 = (inst_14301 < inst_14300);
var inst_14304 = inst_14303;
var state_14438__$1 = state_14438;
if(cljs.core.truth_(inst_14304)){
var statearr_14502_14569 = state_14438__$1;
(statearr_14502_14569[(1)] = (7));

} else {
var statearr_14503_14570 = state_14438__$1;
(statearr_14503_14570[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (14))){
var inst_14311 = (state_14438[(22)]);
var inst_14320 = cljs.core.first.call(null,inst_14311);
var inst_14321 = figwheel.client.file_reloading.eval_body.call(null,inst_14320,opts);
var inst_14322 = cljs.core.next.call(null,inst_14311);
var inst_14298 = inst_14322;
var inst_14299 = null;
var inst_14300 = (0);
var inst_14301 = (0);
var state_14438__$1 = (function (){var statearr_14504 = state_14438;
(statearr_14504[(7)] = inst_14298);

(statearr_14504[(8)] = inst_14301);

(statearr_14504[(32)] = inst_14321);

(statearr_14504[(9)] = inst_14299);

(statearr_14504[(10)] = inst_14300);

return statearr_14504;
})();
var statearr_14505_14571 = state_14438__$1;
(statearr_14505_14571[(2)] = null);

(statearr_14505_14571[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (45))){
var state_14438__$1 = state_14438;
var statearr_14506_14572 = state_14438__$1;
(statearr_14506_14572[(2)] = null);

(statearr_14506_14572[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (26))){
var inst_14351 = (state_14438[(19)]);
var inst_14355 = (state_14438[(23)]);
var inst_14359 = (state_14438[(24)]);
var inst_14357 = (state_14438[(26)]);
var inst_14354 = (state_14438[(25)]);
var inst_14374 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_14376 = (function (){var all_files = inst_14351;
var res_SINGLEQUOTE_ = inst_14354;
var res = inst_14355;
var files_not_loaded = inst_14357;
var dependencies_that_loaded = inst_14359;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14351,inst_14355,inst_14359,inst_14357,inst_14354,inst_14374,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14375){
var map__14507 = p__14375;
var map__14507__$1 = ((((!((map__14507 == null)))?(((((map__14507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14507):map__14507);
var namespace = cljs.core.get.call(null,map__14507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__14507__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14351,inst_14355,inst_14359,inst_14357,inst_14354,inst_14374,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14377 = cljs.core.map.call(null,inst_14376,inst_14355);
var inst_14378 = cljs.core.pr_str.call(null,inst_14377);
var inst_14379 = figwheel.client.utils.log.call(null,inst_14378);
var inst_14380 = (function (){var all_files = inst_14351;
var res_SINGLEQUOTE_ = inst_14354;
var res = inst_14355;
var files_not_loaded = inst_14357;
var dependencies_that_loaded = inst_14359;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14351,inst_14355,inst_14359,inst_14357,inst_14354,inst_14374,inst_14376,inst_14377,inst_14378,inst_14379,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14351,inst_14355,inst_14359,inst_14357,inst_14354,inst_14374,inst_14376,inst_14377,inst_14378,inst_14379,state_val_14439,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14381 = setTimeout(inst_14380,(10));
var state_14438__$1 = (function (){var statearr_14509 = state_14438;
(statearr_14509[(33)] = inst_14374);

(statearr_14509[(34)] = inst_14379);

return statearr_14509;
})();
var statearr_14510_14573 = state_14438__$1;
(statearr_14510_14573[(2)] = inst_14381);

(statearr_14510_14573[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (16))){
var state_14438__$1 = state_14438;
var statearr_14511_14574 = state_14438__$1;
(statearr_14511_14574[(2)] = reload_dependents);

(statearr_14511_14574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (38))){
var inst_14391 = (state_14438[(16)]);
var inst_14409 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14391);
var state_14438__$1 = state_14438;
var statearr_14512_14575 = state_14438__$1;
(statearr_14512_14575[(2)] = inst_14409);

(statearr_14512_14575[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (30))){
var state_14438__$1 = state_14438;
var statearr_14513_14576 = state_14438__$1;
(statearr_14513_14576[(2)] = null);

(statearr_14513_14576[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (10))){
var inst_14311 = (state_14438[(22)]);
var inst_14313 = cljs.core.chunked_seq_QMARK_.call(null,inst_14311);
var state_14438__$1 = state_14438;
if(inst_14313){
var statearr_14514_14577 = state_14438__$1;
(statearr_14514_14577[(1)] = (13));

} else {
var statearr_14515_14578 = state_14438__$1;
(statearr_14515_14578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (18))){
var inst_14345 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
if(cljs.core.truth_(inst_14345)){
var statearr_14516_14579 = state_14438__$1;
(statearr_14516_14579[(1)] = (19));

} else {
var statearr_14517_14580 = state_14438__$1;
(statearr_14517_14580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (42))){
var state_14438__$1 = state_14438;
var statearr_14518_14581 = state_14438__$1;
(statearr_14518_14581[(2)] = null);

(statearr_14518_14581[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (37))){
var inst_14404 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14519_14582 = state_14438__$1;
(statearr_14519_14582[(2)] = inst_14404);

(statearr_14519_14582[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (8))){
var inst_14311 = (state_14438[(22)]);
var inst_14298 = (state_14438[(7)]);
var inst_14311__$1 = cljs.core.seq.call(null,inst_14298);
var state_14438__$1 = (function (){var statearr_14520 = state_14438;
(statearr_14520[(22)] = inst_14311__$1);

return statearr_14520;
})();
if(inst_14311__$1){
var statearr_14521_14583 = state_14438__$1;
(statearr_14521_14583[(1)] = (10));

} else {
var statearr_14522_14584 = state_14438__$1;
(statearr_14522_14584[(1)] = (11));

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
});})(c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__5435__auto__,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____0 = (function (){
var statearr_14523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14523[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__);

(statearr_14523[(1)] = (1));

return statearr_14523;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____1 = (function (state_14438){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_14438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e14524){if((e14524 instanceof Object)){
var ex__5439__auto__ = e14524;
var statearr_14525_14585 = state_14438;
(statearr_14525_14585[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14586 = state_14438;
state_14438 = G__14586;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__ = function(state_14438){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____1.call(this,state_14438);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__5592__auto__ = (function (){var statearr_14526 = f__5591__auto__.call(null);
(statearr_14526[(6)] = c__5590__auto__);

return statearr_14526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__,map__14283,map__14283__$1,opts,before_jsload,on_jsload,reload_dependents,map__14284,map__14284__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__5590__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__14589,link){
var map__14590 = p__14589;
var map__14590__$1 = ((((!((map__14590 == null)))?(((((map__14590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14590):map__14590);
var file = cljs.core.get.call(null,map__14590__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__14590,map__14590__$1,file){
return (function (p1__14587_SHARP_,p2__14588_SHARP_){
if(cljs.core._EQ_.call(null,p1__14587_SHARP_,p2__14588_SHARP_)){
return p1__14587_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__14590,map__14590__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__14593){
var map__14594 = p__14593;
var map__14594__$1 = ((((!((map__14594 == null)))?(((((map__14594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14594):map__14594);
var match_length = cljs.core.get.call(null,map__14594__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__14594__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__14592_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__14592_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__14596_SHARP_,p2__14597_SHARP_){
return cljs.core.assoc.call(null,p1__14596_SHARP_,cljs.core.get.call(null,p2__14597_SHARP_,key),p2__14597_SHARP_);
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
var loaded_f_datas_14598 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_14598);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_14598);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__14599,p__14600){
var map__14601 = p__14599;
var map__14601__$1 = ((((!((map__14601 == null)))?(((((map__14601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14601):map__14601);
var on_cssload = cljs.core.get.call(null,map__14601__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__14602 = p__14600;
var map__14602__$1 = ((((!((map__14602 == null)))?(((((map__14602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14602):map__14602);
var files_msg = map__14602__$1;
var files = cljs.core.get.call(null,map__14602__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
