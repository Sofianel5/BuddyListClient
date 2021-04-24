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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28027_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28027_SHARP_));
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
var seq__28028 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28029 = null;
var count__28030 = (0);
var i__28031 = (0);
while(true){
if((i__28031 < count__28030)){
var n = cljs.core._nth.call(null,chunk__28029,i__28031);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28032 = seq__28028;
var G__28033 = chunk__28029;
var G__28034 = count__28030;
var G__28035 = (i__28031 + (1));
seq__28028 = G__28032;
chunk__28029 = G__28033;
count__28030 = G__28034;
i__28031 = G__28035;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28028);
if(temp__4657__auto__){
var seq__28028__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28028__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__28028__$1);
var G__28036 = cljs.core.chunk_rest.call(null,seq__28028__$1);
var G__28037 = c__4317__auto__;
var G__28038 = cljs.core.count.call(null,c__4317__auto__);
var G__28039 = (0);
seq__28028 = G__28036;
chunk__28029 = G__28037;
count__28030 = G__28038;
i__28031 = G__28039;
continue;
} else {
var n = cljs.core.first.call(null,seq__28028__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28040 = cljs.core.next.call(null,seq__28028__$1);
var G__28041 = null;
var G__28042 = (0);
var G__28043 = (0);
seq__28028 = G__28040;
chunk__28029 = G__28041;
count__28030 = G__28042;
i__28031 = G__28043;
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

var seq__28053_28061 = cljs.core.seq.call(null,deps);
var chunk__28054_28062 = null;
var count__28055_28063 = (0);
var i__28056_28064 = (0);
while(true){
if((i__28056_28064 < count__28055_28063)){
var dep_28065 = cljs.core._nth.call(null,chunk__28054_28062,i__28056_28064);
topo_sort_helper_STAR_.call(null,dep_28065,(depth + (1)),state);


var G__28066 = seq__28053_28061;
var G__28067 = chunk__28054_28062;
var G__28068 = count__28055_28063;
var G__28069 = (i__28056_28064 + (1));
seq__28053_28061 = G__28066;
chunk__28054_28062 = G__28067;
count__28055_28063 = G__28068;
i__28056_28064 = G__28069;
continue;
} else {
var temp__4657__auto___28070 = cljs.core.seq.call(null,seq__28053_28061);
if(temp__4657__auto___28070){
var seq__28053_28071__$1 = temp__4657__auto___28070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28053_28071__$1)){
var c__4317__auto___28072 = cljs.core.chunk_first.call(null,seq__28053_28071__$1);
var G__28073 = cljs.core.chunk_rest.call(null,seq__28053_28071__$1);
var G__28074 = c__4317__auto___28072;
var G__28075 = cljs.core.count.call(null,c__4317__auto___28072);
var G__28076 = (0);
seq__28053_28061 = G__28073;
chunk__28054_28062 = G__28074;
count__28055_28063 = G__28075;
i__28056_28064 = G__28076;
continue;
} else {
var dep_28077 = cljs.core.first.call(null,seq__28053_28071__$1);
topo_sort_helper_STAR_.call(null,dep_28077,(depth + (1)),state);


var G__28078 = cljs.core.next.call(null,seq__28053_28071__$1);
var G__28079 = null;
var G__28080 = (0);
var G__28081 = (0);
seq__28053_28061 = G__28078;
chunk__28054_28062 = G__28079;
count__28055_28063 = G__28080;
i__28056_28064 = G__28081;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28057){
var vec__28058 = p__28057;
var seq__28059 = cljs.core.seq.call(null,vec__28058);
var first__28060 = cljs.core.first.call(null,seq__28059);
var seq__28059__$1 = cljs.core.next.call(null,seq__28059);
var x = first__28060;
var xs = seq__28059__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28058,seq__28059,first__28060,seq__28059__$1,x,xs,get_deps__$1){
return (function (p1__28044_SHARP_){
return clojure.set.difference.call(null,p1__28044_SHARP_,x);
});})(vec__28058,seq__28059,first__28060,seq__28059__$1,x,xs,get_deps__$1))
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
var seq__28082 = cljs.core.seq.call(null,provides);
var chunk__28083 = null;
var count__28084 = (0);
var i__28085 = (0);
while(true){
if((i__28085 < count__28084)){
var prov = cljs.core._nth.call(null,chunk__28083,i__28085);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28086_28094 = cljs.core.seq.call(null,requires);
var chunk__28087_28095 = null;
var count__28088_28096 = (0);
var i__28089_28097 = (0);
while(true){
if((i__28089_28097 < count__28088_28096)){
var req_28098 = cljs.core._nth.call(null,chunk__28087_28095,i__28089_28097);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28098,prov);


var G__28099 = seq__28086_28094;
var G__28100 = chunk__28087_28095;
var G__28101 = count__28088_28096;
var G__28102 = (i__28089_28097 + (1));
seq__28086_28094 = G__28099;
chunk__28087_28095 = G__28100;
count__28088_28096 = G__28101;
i__28089_28097 = G__28102;
continue;
} else {
var temp__4657__auto___28103 = cljs.core.seq.call(null,seq__28086_28094);
if(temp__4657__auto___28103){
var seq__28086_28104__$1 = temp__4657__auto___28103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28086_28104__$1)){
var c__4317__auto___28105 = cljs.core.chunk_first.call(null,seq__28086_28104__$1);
var G__28106 = cljs.core.chunk_rest.call(null,seq__28086_28104__$1);
var G__28107 = c__4317__auto___28105;
var G__28108 = cljs.core.count.call(null,c__4317__auto___28105);
var G__28109 = (0);
seq__28086_28094 = G__28106;
chunk__28087_28095 = G__28107;
count__28088_28096 = G__28108;
i__28089_28097 = G__28109;
continue;
} else {
var req_28110 = cljs.core.first.call(null,seq__28086_28104__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28110,prov);


var G__28111 = cljs.core.next.call(null,seq__28086_28104__$1);
var G__28112 = null;
var G__28113 = (0);
var G__28114 = (0);
seq__28086_28094 = G__28111;
chunk__28087_28095 = G__28112;
count__28088_28096 = G__28113;
i__28089_28097 = G__28114;
continue;
}
} else {
}
}
break;
}


var G__28115 = seq__28082;
var G__28116 = chunk__28083;
var G__28117 = count__28084;
var G__28118 = (i__28085 + (1));
seq__28082 = G__28115;
chunk__28083 = G__28116;
count__28084 = G__28117;
i__28085 = G__28118;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28082);
if(temp__4657__auto__){
var seq__28082__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28082__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__28082__$1);
var G__28119 = cljs.core.chunk_rest.call(null,seq__28082__$1);
var G__28120 = c__4317__auto__;
var G__28121 = cljs.core.count.call(null,c__4317__auto__);
var G__28122 = (0);
seq__28082 = G__28119;
chunk__28083 = G__28120;
count__28084 = G__28121;
i__28085 = G__28122;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28082__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28090_28123 = cljs.core.seq.call(null,requires);
var chunk__28091_28124 = null;
var count__28092_28125 = (0);
var i__28093_28126 = (0);
while(true){
if((i__28093_28126 < count__28092_28125)){
var req_28127 = cljs.core._nth.call(null,chunk__28091_28124,i__28093_28126);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28127,prov);


var G__28128 = seq__28090_28123;
var G__28129 = chunk__28091_28124;
var G__28130 = count__28092_28125;
var G__28131 = (i__28093_28126 + (1));
seq__28090_28123 = G__28128;
chunk__28091_28124 = G__28129;
count__28092_28125 = G__28130;
i__28093_28126 = G__28131;
continue;
} else {
var temp__4657__auto___28132__$1 = cljs.core.seq.call(null,seq__28090_28123);
if(temp__4657__auto___28132__$1){
var seq__28090_28133__$1 = temp__4657__auto___28132__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28090_28133__$1)){
var c__4317__auto___28134 = cljs.core.chunk_first.call(null,seq__28090_28133__$1);
var G__28135 = cljs.core.chunk_rest.call(null,seq__28090_28133__$1);
var G__28136 = c__4317__auto___28134;
var G__28137 = cljs.core.count.call(null,c__4317__auto___28134);
var G__28138 = (0);
seq__28090_28123 = G__28135;
chunk__28091_28124 = G__28136;
count__28092_28125 = G__28137;
i__28093_28126 = G__28138;
continue;
} else {
var req_28139 = cljs.core.first.call(null,seq__28090_28133__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28139,prov);


var G__28140 = cljs.core.next.call(null,seq__28090_28133__$1);
var G__28141 = null;
var G__28142 = (0);
var G__28143 = (0);
seq__28090_28123 = G__28140;
chunk__28091_28124 = G__28141;
count__28092_28125 = G__28142;
i__28093_28126 = G__28143;
continue;
}
} else {
}
}
break;
}


var G__28144 = cljs.core.next.call(null,seq__28082__$1);
var G__28145 = null;
var G__28146 = (0);
var G__28147 = (0);
seq__28082 = G__28144;
chunk__28083 = G__28145;
count__28084 = G__28146;
i__28085 = G__28147;
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
var seq__28148_28152 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28149_28153 = null;
var count__28150_28154 = (0);
var i__28151_28155 = (0);
while(true){
if((i__28151_28155 < count__28150_28154)){
var ns_28156 = cljs.core._nth.call(null,chunk__28149_28153,i__28151_28155);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28156);


var G__28157 = seq__28148_28152;
var G__28158 = chunk__28149_28153;
var G__28159 = count__28150_28154;
var G__28160 = (i__28151_28155 + (1));
seq__28148_28152 = G__28157;
chunk__28149_28153 = G__28158;
count__28150_28154 = G__28159;
i__28151_28155 = G__28160;
continue;
} else {
var temp__4657__auto___28161 = cljs.core.seq.call(null,seq__28148_28152);
if(temp__4657__auto___28161){
var seq__28148_28162__$1 = temp__4657__auto___28161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28148_28162__$1)){
var c__4317__auto___28163 = cljs.core.chunk_first.call(null,seq__28148_28162__$1);
var G__28164 = cljs.core.chunk_rest.call(null,seq__28148_28162__$1);
var G__28165 = c__4317__auto___28163;
var G__28166 = cljs.core.count.call(null,c__4317__auto___28163);
var G__28167 = (0);
seq__28148_28152 = G__28164;
chunk__28149_28153 = G__28165;
count__28150_28154 = G__28166;
i__28151_28155 = G__28167;
continue;
} else {
var ns_28168 = cljs.core.first.call(null,seq__28148_28162__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28168);


var G__28169 = cljs.core.next.call(null,seq__28148_28162__$1);
var G__28170 = null;
var G__28171 = (0);
var G__28172 = (0);
seq__28148_28152 = G__28169;
chunk__28149_28153 = G__28170;
count__28150_28154 = G__28171;
i__28151_28155 = G__28172;
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
var G__28173__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28174__i = 0, G__28174__a = new Array(arguments.length -  0);
while (G__28174__i < G__28174__a.length) {G__28174__a[G__28174__i] = arguments[G__28174__i + 0]; ++G__28174__i;}
  args = new cljs.core.IndexedSeq(G__28174__a,0,null);
} 
return G__28173__delegate.call(this,args);};
G__28173.cljs$lang$maxFixedArity = 0;
G__28173.cljs$lang$applyTo = (function (arglist__28175){
var args = cljs.core.seq(arglist__28175);
return G__28173__delegate(args);
});
G__28173.cljs$core$IFn$_invoke$arity$variadic = G__28173__delegate;
return G__28173;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28176 = cljs.core._EQ_;
var expr__28177 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28176.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28177))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__28176,expr__28177){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__28176,expr__28177))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__28176,expr__28177){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28179){if((e28179 instanceof Error)){
var e = e28179;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28179;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__28176,expr__28177))
} else {
if(cljs.core.truth_(pred__28176.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28177))){
return ((function (pred__28176,expr__28177){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__28176,expr__28177){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28176,expr__28177))
);

return deferred.addErrback(((function (deferred,pred__28176,expr__28177){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28176,expr__28177))
);
});
;})(pred__28176,expr__28177))
} else {
if(cljs.core.truth_(pred__28176.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28177))){
return ((function (pred__28176,expr__28177){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28180){if((e28180 instanceof Error)){
var e = e28180;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28180;

}
}})());
});
;})(pred__28176,expr__28177))
} else {
return ((function (pred__28176,expr__28177){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28176,expr__28177))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28181,callback){
var map__28182 = p__28181;
var map__28182__$1 = ((((!((map__28182 == null)))?(((((map__28182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28182):map__28182);
var file_msg = map__28182__$1;
var request_url = cljs.core.get.call(null,map__28182__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28182,map__28182__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28182,map__28182__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto__){
return (function (state_28206){
var state_val_28207 = (state_28206[(1)]);
if((state_val_28207 === (7))){
var inst_28202 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28208_28225 = state_28206__$1;
(statearr_28208_28225[(2)] = inst_28202);

(statearr_28208_28225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (1))){
var state_28206__$1 = state_28206;
var statearr_28209_28226 = state_28206__$1;
(statearr_28209_28226[(2)] = null);

(statearr_28209_28226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (4))){
var inst_28186 = (state_28206[(7)]);
var inst_28186__$1 = (state_28206[(2)]);
var state_28206__$1 = (function (){var statearr_28210 = state_28206;
(statearr_28210[(7)] = inst_28186__$1);

return statearr_28210;
})();
if(cljs.core.truth_(inst_28186__$1)){
var statearr_28211_28227 = state_28206__$1;
(statearr_28211_28227[(1)] = (5));

} else {
var statearr_28212_28228 = state_28206__$1;
(statearr_28212_28228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (6))){
var state_28206__$1 = state_28206;
var statearr_28213_28229 = state_28206__$1;
(statearr_28213_28229[(2)] = null);

(statearr_28213_28229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (3))){
var inst_28204 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28206__$1,inst_28204);
} else {
if((state_val_28207 === (2))){
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28207 === (11))){
var inst_28198 = (state_28206[(2)]);
var state_28206__$1 = (function (){var statearr_28214 = state_28206;
(statearr_28214[(8)] = inst_28198);

return statearr_28214;
})();
var statearr_28215_28230 = state_28206__$1;
(statearr_28215_28230[(2)] = null);

(statearr_28215_28230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (9))){
var inst_28190 = (state_28206[(9)]);
var inst_28192 = (state_28206[(10)]);
var inst_28194 = inst_28192.call(null,inst_28190);
var state_28206__$1 = state_28206;
var statearr_28216_28231 = state_28206__$1;
(statearr_28216_28231[(2)] = inst_28194);

(statearr_28216_28231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (5))){
var inst_28186 = (state_28206[(7)]);
var inst_28188 = figwheel.client.file_reloading.blocking_load.call(null,inst_28186);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(8),inst_28188);
} else {
if((state_val_28207 === (10))){
var inst_28190 = (state_28206[(9)]);
var inst_28196 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28190);
var state_28206__$1 = state_28206;
var statearr_28217_28232 = state_28206__$1;
(statearr_28217_28232[(2)] = inst_28196);

(statearr_28217_28232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (8))){
var inst_28186 = (state_28206[(7)]);
var inst_28192 = (state_28206[(10)]);
var inst_28190 = (state_28206[(2)]);
var inst_28191 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28192__$1 = cljs.core.get.call(null,inst_28191,inst_28186);
var state_28206__$1 = (function (){var statearr_28218 = state_28206;
(statearr_28218[(9)] = inst_28190);

(statearr_28218[(10)] = inst_28192__$1);

return statearr_28218;
})();
if(cljs.core.truth_(inst_28192__$1)){
var statearr_28219_28233 = state_28206__$1;
(statearr_28219_28233[(1)] = (9));

} else {
var statearr_28220_28234 = state_28206__$1;
(statearr_28220_28234[(1)] = (10));

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
});})(c__19649__auto__))
;
return ((function (switch__19494__auto__,c__19649__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19495__auto__ = null;
var figwheel$client$file_reloading$state_machine__19495__auto____0 = (function (){
var statearr_28221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28221[(0)] = figwheel$client$file_reloading$state_machine__19495__auto__);

(statearr_28221[(1)] = (1));

return statearr_28221;
});
var figwheel$client$file_reloading$state_machine__19495__auto____1 = (function (state_28206){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_28206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e28222){if((e28222 instanceof Object)){
var ex__19498__auto__ = e28222;
var statearr_28223_28235 = state_28206;
(statearr_28223_28235[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28236 = state_28206;
state_28206 = G__28236;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19495__auto__ = function(state_28206){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19495__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19495__auto____1.call(this,state_28206);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19495__auto____0;
figwheel$client$file_reloading$state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19495__auto____1;
return figwheel$client$file_reloading$state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto__))
})();
var state__19651__auto__ = (function (){var statearr_28224 = f__19650__auto__.call(null);
(statearr_28224[(6)] = c__19649__auto__);

return statearr_28224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__))
);

return c__19649__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28237,callback){
var map__28238 = p__28237;
var map__28238__$1 = ((((!((map__28238 == null)))?(((((map__28238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28238):map__28238);
var file_msg = map__28238__$1;
var namespace = cljs.core.get.call(null,map__28238__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28238,map__28238__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28238,map__28238__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28240){
var map__28241 = p__28240;
var map__28241__$1 = ((((!((map__28241 == null)))?(((((map__28241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28241):map__28241);
var file_msg = map__28241__$1;
var namespace = cljs.core.get.call(null,map__28241__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28243){
var map__28244 = p__28243;
var map__28244__$1 = ((((!((map__28244 == null)))?(((((map__28244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28244):map__28244);
var file_msg = map__28244__$1;
var namespace = cljs.core.get.call(null,map__28244__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28246,callback){
var map__28247 = p__28246;
var map__28247__$1 = ((((!((map__28247 == null)))?(((((map__28247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28247):map__28247);
var file_msg = map__28247__$1;
var request_url = cljs.core.get.call(null,map__28247__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28247__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19649__auto___28297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___28297,out){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___28297,out){
return (function (state_28282){
var state_val_28283 = (state_28282[(1)]);
if((state_val_28283 === (1))){
var inst_28256 = cljs.core.seq.call(null,files);
var inst_28257 = cljs.core.first.call(null,inst_28256);
var inst_28258 = cljs.core.next.call(null,inst_28256);
var inst_28259 = files;
var state_28282__$1 = (function (){var statearr_28284 = state_28282;
(statearr_28284[(7)] = inst_28258);

(statearr_28284[(8)] = inst_28259);

(statearr_28284[(9)] = inst_28257);

return statearr_28284;
})();
var statearr_28285_28298 = state_28282__$1;
(statearr_28285_28298[(2)] = null);

(statearr_28285_28298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (2))){
var inst_28259 = (state_28282[(8)]);
var inst_28265 = (state_28282[(10)]);
var inst_28264 = cljs.core.seq.call(null,inst_28259);
var inst_28265__$1 = cljs.core.first.call(null,inst_28264);
var inst_28266 = cljs.core.next.call(null,inst_28264);
var inst_28267 = (inst_28265__$1 == null);
var inst_28268 = cljs.core.not.call(null,inst_28267);
var state_28282__$1 = (function (){var statearr_28286 = state_28282;
(statearr_28286[(10)] = inst_28265__$1);

(statearr_28286[(11)] = inst_28266);

return statearr_28286;
})();
if(inst_28268){
var statearr_28287_28299 = state_28282__$1;
(statearr_28287_28299[(1)] = (4));

} else {
var statearr_28288_28300 = state_28282__$1;
(statearr_28288_28300[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (3))){
var inst_28280 = (state_28282[(2)]);
var state_28282__$1 = state_28282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28282__$1,inst_28280);
} else {
if((state_val_28283 === (4))){
var inst_28265 = (state_28282[(10)]);
var inst_28270 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28265);
var state_28282__$1 = state_28282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28282__$1,(7),inst_28270);
} else {
if((state_val_28283 === (5))){
var inst_28276 = cljs.core.async.close_BANG_.call(null,out);
var state_28282__$1 = state_28282;
var statearr_28289_28301 = state_28282__$1;
(statearr_28289_28301[(2)] = inst_28276);

(statearr_28289_28301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (6))){
var inst_28278 = (state_28282[(2)]);
var state_28282__$1 = state_28282;
var statearr_28290_28302 = state_28282__$1;
(statearr_28290_28302[(2)] = inst_28278);

(statearr_28290_28302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (7))){
var inst_28266 = (state_28282[(11)]);
var inst_28272 = (state_28282[(2)]);
var inst_28273 = cljs.core.async.put_BANG_.call(null,out,inst_28272);
var inst_28259 = inst_28266;
var state_28282__$1 = (function (){var statearr_28291 = state_28282;
(statearr_28291[(8)] = inst_28259);

(statearr_28291[(12)] = inst_28273);

return statearr_28291;
})();
var statearr_28292_28303 = state_28282__$1;
(statearr_28292_28303[(2)] = null);

(statearr_28292_28303[(1)] = (2));


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
});})(c__19649__auto___28297,out))
;
return ((function (switch__19494__auto__,c__19649__auto___28297,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto____0 = (function (){
var statearr_28293 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28293[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto__);

(statearr_28293[(1)] = (1));

return statearr_28293;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto____1 = (function (state_28282){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_28282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e28294){if((e28294 instanceof Object)){
var ex__19498__auto__ = e28294;
var statearr_28295_28304 = state_28282;
(statearr_28295_28304[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28305 = state_28282;
state_28282 = G__28305;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto__ = function(state_28282){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto____1.call(this,state_28282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___28297,out))
})();
var state__19651__auto__ = (function (){var statearr_28296 = f__19650__auto__.call(null);
(statearr_28296[(6)] = c__19649__auto___28297);

return statearr_28296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___28297,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28306,opts){
var map__28307 = p__28306;
var map__28307__$1 = ((((!((map__28307 == null)))?(((((map__28307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28307):map__28307);
var eval_body = cljs.core.get.call(null,map__28307__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28309){var e = e28309;
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
return (function (p1__28310_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28310_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28311){
var vec__28312 = p__28311;
var k = cljs.core.nth.call(null,vec__28312,(0),null);
var v = cljs.core.nth.call(null,vec__28312,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28315){
var vec__28316 = p__28315;
var k = cljs.core.nth.call(null,vec__28316,(0),null);
var v = cljs.core.nth.call(null,vec__28316,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28322,p__28323){
var map__28324 = p__28322;
var map__28324__$1 = ((((!((map__28324 == null)))?(((((map__28324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28324):map__28324);
var opts = map__28324__$1;
var before_jsload = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28325 = p__28323;
var map__28325__$1 = ((((!((map__28325 == null)))?(((((map__28325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28325):map__28325);
var msg = map__28325__$1;
var files = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28479){
var state_val_28480 = (state_28479[(1)]);
if((state_val_28480 === (7))){
var inst_28342 = (state_28479[(7)]);
var inst_28341 = (state_28479[(8)]);
var inst_28339 = (state_28479[(9)]);
var inst_28340 = (state_28479[(10)]);
var inst_28347 = cljs.core._nth.call(null,inst_28340,inst_28342);
var inst_28348 = figwheel.client.file_reloading.eval_body.call(null,inst_28347,opts);
var inst_28349 = (inst_28342 + (1));
var tmp28481 = inst_28341;
var tmp28482 = inst_28339;
var tmp28483 = inst_28340;
var inst_28339__$1 = tmp28482;
var inst_28340__$1 = tmp28483;
var inst_28341__$1 = tmp28481;
var inst_28342__$1 = inst_28349;
var state_28479__$1 = (function (){var statearr_28484 = state_28479;
(statearr_28484[(7)] = inst_28342__$1);

(statearr_28484[(8)] = inst_28341__$1);

(statearr_28484[(11)] = inst_28348);

(statearr_28484[(9)] = inst_28339__$1);

(statearr_28484[(10)] = inst_28340__$1);

return statearr_28484;
})();
var statearr_28485_28568 = state_28479__$1;
(statearr_28485_28568[(2)] = null);

(statearr_28485_28568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (20))){
var inst_28382 = (state_28479[(12)]);
var inst_28390 = figwheel.client.file_reloading.sort_files.call(null,inst_28382);
var state_28479__$1 = state_28479;
var statearr_28486_28569 = state_28479__$1;
(statearr_28486_28569[(2)] = inst_28390);

(statearr_28486_28569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (27))){
var state_28479__$1 = state_28479;
var statearr_28487_28570 = state_28479__$1;
(statearr_28487_28570[(2)] = null);

(statearr_28487_28570[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (1))){
var inst_28331 = (state_28479[(13)]);
var inst_28328 = before_jsload.call(null,files);
var inst_28329 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28330 = (function (){return ((function (inst_28331,inst_28328,inst_28329,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28319_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28319_SHARP_);
});
;})(inst_28331,inst_28328,inst_28329,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28331__$1 = cljs.core.filter.call(null,inst_28330,files);
var inst_28332 = cljs.core.not_empty.call(null,inst_28331__$1);
var state_28479__$1 = (function (){var statearr_28488 = state_28479;
(statearr_28488[(13)] = inst_28331__$1);

(statearr_28488[(14)] = inst_28329);

(statearr_28488[(15)] = inst_28328);

return statearr_28488;
})();
if(cljs.core.truth_(inst_28332)){
var statearr_28489_28571 = state_28479__$1;
(statearr_28489_28571[(1)] = (2));

} else {
var statearr_28490_28572 = state_28479__$1;
(statearr_28490_28572[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (24))){
var state_28479__$1 = state_28479;
var statearr_28491_28573 = state_28479__$1;
(statearr_28491_28573[(2)] = null);

(statearr_28491_28573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (39))){
var inst_28432 = (state_28479[(16)]);
var state_28479__$1 = state_28479;
var statearr_28492_28574 = state_28479__$1;
(statearr_28492_28574[(2)] = inst_28432);

(statearr_28492_28574[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (46))){
var inst_28474 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
var statearr_28493_28575 = state_28479__$1;
(statearr_28493_28575[(2)] = inst_28474);

(statearr_28493_28575[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (4))){
var inst_28376 = (state_28479[(2)]);
var inst_28377 = cljs.core.List.EMPTY;
var inst_28378 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28377);
var inst_28379 = (function (){return ((function (inst_28376,inst_28377,inst_28378,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28320_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28320_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28320_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28320_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_28376,inst_28377,inst_28378,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28380 = cljs.core.filter.call(null,inst_28379,files);
var inst_28381 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28382 = cljs.core.concat.call(null,inst_28380,inst_28381);
var state_28479__$1 = (function (){var statearr_28494 = state_28479;
(statearr_28494[(12)] = inst_28382);

(statearr_28494[(17)] = inst_28378);

(statearr_28494[(18)] = inst_28376);

return statearr_28494;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28495_28576 = state_28479__$1;
(statearr_28495_28576[(1)] = (16));

} else {
var statearr_28496_28577 = state_28479__$1;
(statearr_28496_28577[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (15))){
var inst_28366 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
var statearr_28497_28578 = state_28479__$1;
(statearr_28497_28578[(2)] = inst_28366);

(statearr_28497_28578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (21))){
var inst_28392 = (state_28479[(19)]);
var inst_28392__$1 = (state_28479[(2)]);
var inst_28393 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28392__$1);
var state_28479__$1 = (function (){var statearr_28498 = state_28479;
(statearr_28498[(19)] = inst_28392__$1);

return statearr_28498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28479__$1,(22),inst_28393);
} else {
if((state_val_28480 === (31))){
var inst_28477 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28479__$1,inst_28477);
} else {
if((state_val_28480 === (32))){
var inst_28432 = (state_28479[(16)]);
var inst_28437 = inst_28432.cljs$lang$protocol_mask$partition0$;
var inst_28438 = (inst_28437 & (64));
var inst_28439 = inst_28432.cljs$core$ISeq$;
var inst_28440 = (cljs.core.PROTOCOL_SENTINEL === inst_28439);
var inst_28441 = ((inst_28438) || (inst_28440));
var state_28479__$1 = state_28479;
if(cljs.core.truth_(inst_28441)){
var statearr_28499_28579 = state_28479__$1;
(statearr_28499_28579[(1)] = (35));

} else {
var statearr_28500_28580 = state_28479__$1;
(statearr_28500_28580[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (40))){
var inst_28454 = (state_28479[(20)]);
var inst_28453 = (state_28479[(2)]);
var inst_28454__$1 = cljs.core.get.call(null,inst_28453,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28455 = cljs.core.get.call(null,inst_28453,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28456 = cljs.core.not_empty.call(null,inst_28454__$1);
var state_28479__$1 = (function (){var statearr_28501 = state_28479;
(statearr_28501[(21)] = inst_28455);

(statearr_28501[(20)] = inst_28454__$1);

return statearr_28501;
})();
if(cljs.core.truth_(inst_28456)){
var statearr_28502_28581 = state_28479__$1;
(statearr_28502_28581[(1)] = (41));

} else {
var statearr_28503_28582 = state_28479__$1;
(statearr_28503_28582[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (33))){
var state_28479__$1 = state_28479;
var statearr_28504_28583 = state_28479__$1;
(statearr_28504_28583[(2)] = false);

(statearr_28504_28583[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (13))){
var inst_28352 = (state_28479[(22)]);
var inst_28356 = cljs.core.chunk_first.call(null,inst_28352);
var inst_28357 = cljs.core.chunk_rest.call(null,inst_28352);
var inst_28358 = cljs.core.count.call(null,inst_28356);
var inst_28339 = inst_28357;
var inst_28340 = inst_28356;
var inst_28341 = inst_28358;
var inst_28342 = (0);
var state_28479__$1 = (function (){var statearr_28505 = state_28479;
(statearr_28505[(7)] = inst_28342);

(statearr_28505[(8)] = inst_28341);

(statearr_28505[(9)] = inst_28339);

(statearr_28505[(10)] = inst_28340);

return statearr_28505;
})();
var statearr_28506_28584 = state_28479__$1;
(statearr_28506_28584[(2)] = null);

(statearr_28506_28584[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (22))){
var inst_28396 = (state_28479[(23)]);
var inst_28395 = (state_28479[(24)]);
var inst_28400 = (state_28479[(25)]);
var inst_28392 = (state_28479[(19)]);
var inst_28395__$1 = (state_28479[(2)]);
var inst_28396__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28395__$1);
var inst_28397 = (function (){var all_files = inst_28392;
var res_SINGLEQUOTE_ = inst_28395__$1;
var res = inst_28396__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28396,inst_28395,inst_28400,inst_28392,inst_28395__$1,inst_28396__$1,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28321_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28321_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28396,inst_28395,inst_28400,inst_28392,inst_28395__$1,inst_28396__$1,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28398 = cljs.core.filter.call(null,inst_28397,inst_28395__$1);
var inst_28399 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28400__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28399);
var inst_28401 = cljs.core.not_empty.call(null,inst_28400__$1);
var state_28479__$1 = (function (){var statearr_28507 = state_28479;
(statearr_28507[(26)] = inst_28398);

(statearr_28507[(23)] = inst_28396__$1);

(statearr_28507[(24)] = inst_28395__$1);

(statearr_28507[(25)] = inst_28400__$1);

return statearr_28507;
})();
if(cljs.core.truth_(inst_28401)){
var statearr_28508_28585 = state_28479__$1;
(statearr_28508_28585[(1)] = (23));

} else {
var statearr_28509_28586 = state_28479__$1;
(statearr_28509_28586[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (36))){
var state_28479__$1 = state_28479;
var statearr_28510_28587 = state_28479__$1;
(statearr_28510_28587[(2)] = false);

(statearr_28510_28587[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (41))){
var inst_28454 = (state_28479[(20)]);
var inst_28458 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28459 = cljs.core.map.call(null,inst_28458,inst_28454);
var inst_28460 = cljs.core.pr_str.call(null,inst_28459);
var inst_28461 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28460)].join('');
var inst_28462 = figwheel.client.utils.log.call(null,inst_28461);
var state_28479__$1 = state_28479;
var statearr_28511_28588 = state_28479__$1;
(statearr_28511_28588[(2)] = inst_28462);

(statearr_28511_28588[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (43))){
var inst_28455 = (state_28479[(21)]);
var inst_28465 = (state_28479[(2)]);
var inst_28466 = cljs.core.not_empty.call(null,inst_28455);
var state_28479__$1 = (function (){var statearr_28512 = state_28479;
(statearr_28512[(27)] = inst_28465);

return statearr_28512;
})();
if(cljs.core.truth_(inst_28466)){
var statearr_28513_28589 = state_28479__$1;
(statearr_28513_28589[(1)] = (44));

} else {
var statearr_28514_28590 = state_28479__$1;
(statearr_28514_28590[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (29))){
var inst_28398 = (state_28479[(26)]);
var inst_28396 = (state_28479[(23)]);
var inst_28432 = (state_28479[(16)]);
var inst_28395 = (state_28479[(24)]);
var inst_28400 = (state_28479[(25)]);
var inst_28392 = (state_28479[(19)]);
var inst_28428 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28431 = (function (){var all_files = inst_28392;
var res_SINGLEQUOTE_ = inst_28395;
var res = inst_28396;
var files_not_loaded = inst_28398;
var dependencies_that_loaded = inst_28400;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28432,inst_28395,inst_28400,inst_28392,inst_28428,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28430){
var map__28515 = p__28430;
var map__28515__$1 = ((((!((map__28515 == null)))?(((((map__28515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28515):map__28515);
var namespace = cljs.core.get.call(null,map__28515__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28432,inst_28395,inst_28400,inst_28392,inst_28428,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28432__$1 = cljs.core.group_by.call(null,inst_28431,inst_28398);
var inst_28434 = (inst_28432__$1 == null);
var inst_28435 = cljs.core.not.call(null,inst_28434);
var state_28479__$1 = (function (){var statearr_28517 = state_28479;
(statearr_28517[(28)] = inst_28428);

(statearr_28517[(16)] = inst_28432__$1);

return statearr_28517;
})();
if(inst_28435){
var statearr_28518_28591 = state_28479__$1;
(statearr_28518_28591[(1)] = (32));

} else {
var statearr_28519_28592 = state_28479__$1;
(statearr_28519_28592[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (44))){
var inst_28455 = (state_28479[(21)]);
var inst_28468 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28455);
var inst_28469 = cljs.core.pr_str.call(null,inst_28468);
var inst_28470 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28469)].join('');
var inst_28471 = figwheel.client.utils.log.call(null,inst_28470);
var state_28479__$1 = state_28479;
var statearr_28520_28593 = state_28479__$1;
(statearr_28520_28593[(2)] = inst_28471);

(statearr_28520_28593[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (6))){
var inst_28373 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
var statearr_28521_28594 = state_28479__$1;
(statearr_28521_28594[(2)] = inst_28373);

(statearr_28521_28594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (28))){
var inst_28398 = (state_28479[(26)]);
var inst_28425 = (state_28479[(2)]);
var inst_28426 = cljs.core.not_empty.call(null,inst_28398);
var state_28479__$1 = (function (){var statearr_28522 = state_28479;
(statearr_28522[(29)] = inst_28425);

return statearr_28522;
})();
if(cljs.core.truth_(inst_28426)){
var statearr_28523_28595 = state_28479__$1;
(statearr_28523_28595[(1)] = (29));

} else {
var statearr_28524_28596 = state_28479__$1;
(statearr_28524_28596[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (25))){
var inst_28396 = (state_28479[(23)]);
var inst_28412 = (state_28479[(2)]);
var inst_28413 = cljs.core.not_empty.call(null,inst_28396);
var state_28479__$1 = (function (){var statearr_28525 = state_28479;
(statearr_28525[(30)] = inst_28412);

return statearr_28525;
})();
if(cljs.core.truth_(inst_28413)){
var statearr_28526_28597 = state_28479__$1;
(statearr_28526_28597[(1)] = (26));

} else {
var statearr_28527_28598 = state_28479__$1;
(statearr_28527_28598[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (34))){
var inst_28448 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
if(cljs.core.truth_(inst_28448)){
var statearr_28528_28599 = state_28479__$1;
(statearr_28528_28599[(1)] = (38));

} else {
var statearr_28529_28600 = state_28479__$1;
(statearr_28529_28600[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (17))){
var state_28479__$1 = state_28479;
var statearr_28530_28601 = state_28479__$1;
(statearr_28530_28601[(2)] = recompile_dependents);

(statearr_28530_28601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (3))){
var state_28479__$1 = state_28479;
var statearr_28531_28602 = state_28479__$1;
(statearr_28531_28602[(2)] = null);

(statearr_28531_28602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (12))){
var inst_28369 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
var statearr_28532_28603 = state_28479__$1;
(statearr_28532_28603[(2)] = inst_28369);

(statearr_28532_28603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (2))){
var inst_28331 = (state_28479[(13)]);
var inst_28338 = cljs.core.seq.call(null,inst_28331);
var inst_28339 = inst_28338;
var inst_28340 = null;
var inst_28341 = (0);
var inst_28342 = (0);
var state_28479__$1 = (function (){var statearr_28533 = state_28479;
(statearr_28533[(7)] = inst_28342);

(statearr_28533[(8)] = inst_28341);

(statearr_28533[(9)] = inst_28339);

(statearr_28533[(10)] = inst_28340);

return statearr_28533;
})();
var statearr_28534_28604 = state_28479__$1;
(statearr_28534_28604[(2)] = null);

(statearr_28534_28604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (23))){
var inst_28398 = (state_28479[(26)]);
var inst_28396 = (state_28479[(23)]);
var inst_28395 = (state_28479[(24)]);
var inst_28400 = (state_28479[(25)]);
var inst_28392 = (state_28479[(19)]);
var inst_28403 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28405 = (function (){var all_files = inst_28392;
var res_SINGLEQUOTE_ = inst_28395;
var res = inst_28396;
var files_not_loaded = inst_28398;
var dependencies_that_loaded = inst_28400;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28403,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28404){
var map__28535 = p__28404;
var map__28535__$1 = ((((!((map__28535 == null)))?(((((map__28535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28535):map__28535);
var request_url = cljs.core.get.call(null,map__28535__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28403,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28406 = cljs.core.reverse.call(null,inst_28400);
var inst_28407 = cljs.core.map.call(null,inst_28405,inst_28406);
var inst_28408 = cljs.core.pr_str.call(null,inst_28407);
var inst_28409 = figwheel.client.utils.log.call(null,inst_28408);
var state_28479__$1 = (function (){var statearr_28537 = state_28479;
(statearr_28537[(31)] = inst_28403);

return statearr_28537;
})();
var statearr_28538_28605 = state_28479__$1;
(statearr_28538_28605[(2)] = inst_28409);

(statearr_28538_28605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (35))){
var state_28479__$1 = state_28479;
var statearr_28539_28606 = state_28479__$1;
(statearr_28539_28606[(2)] = true);

(statearr_28539_28606[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (19))){
var inst_28382 = (state_28479[(12)]);
var inst_28388 = figwheel.client.file_reloading.expand_files.call(null,inst_28382);
var state_28479__$1 = state_28479;
var statearr_28540_28607 = state_28479__$1;
(statearr_28540_28607[(2)] = inst_28388);

(statearr_28540_28607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (11))){
var state_28479__$1 = state_28479;
var statearr_28541_28608 = state_28479__$1;
(statearr_28541_28608[(2)] = null);

(statearr_28541_28608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (9))){
var inst_28371 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
var statearr_28542_28609 = state_28479__$1;
(statearr_28542_28609[(2)] = inst_28371);

(statearr_28542_28609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (5))){
var inst_28342 = (state_28479[(7)]);
var inst_28341 = (state_28479[(8)]);
var inst_28344 = (inst_28342 < inst_28341);
var inst_28345 = inst_28344;
var state_28479__$1 = state_28479;
if(cljs.core.truth_(inst_28345)){
var statearr_28543_28610 = state_28479__$1;
(statearr_28543_28610[(1)] = (7));

} else {
var statearr_28544_28611 = state_28479__$1;
(statearr_28544_28611[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (14))){
var inst_28352 = (state_28479[(22)]);
var inst_28361 = cljs.core.first.call(null,inst_28352);
var inst_28362 = figwheel.client.file_reloading.eval_body.call(null,inst_28361,opts);
var inst_28363 = cljs.core.next.call(null,inst_28352);
var inst_28339 = inst_28363;
var inst_28340 = null;
var inst_28341 = (0);
var inst_28342 = (0);
var state_28479__$1 = (function (){var statearr_28545 = state_28479;
(statearr_28545[(7)] = inst_28342);

(statearr_28545[(8)] = inst_28341);

(statearr_28545[(32)] = inst_28362);

(statearr_28545[(9)] = inst_28339);

(statearr_28545[(10)] = inst_28340);

return statearr_28545;
})();
var statearr_28546_28612 = state_28479__$1;
(statearr_28546_28612[(2)] = null);

(statearr_28546_28612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (45))){
var state_28479__$1 = state_28479;
var statearr_28547_28613 = state_28479__$1;
(statearr_28547_28613[(2)] = null);

(statearr_28547_28613[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (26))){
var inst_28398 = (state_28479[(26)]);
var inst_28396 = (state_28479[(23)]);
var inst_28395 = (state_28479[(24)]);
var inst_28400 = (state_28479[(25)]);
var inst_28392 = (state_28479[(19)]);
var inst_28415 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28417 = (function (){var all_files = inst_28392;
var res_SINGLEQUOTE_ = inst_28395;
var res = inst_28396;
var files_not_loaded = inst_28398;
var dependencies_that_loaded = inst_28400;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28415,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28416){
var map__28548 = p__28416;
var map__28548__$1 = ((((!((map__28548 == null)))?(((((map__28548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28548):map__28548);
var namespace = cljs.core.get.call(null,map__28548__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28548__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28415,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28418 = cljs.core.map.call(null,inst_28417,inst_28396);
var inst_28419 = cljs.core.pr_str.call(null,inst_28418);
var inst_28420 = figwheel.client.utils.log.call(null,inst_28419);
var inst_28421 = (function (){var all_files = inst_28392;
var res_SINGLEQUOTE_ = inst_28395;
var res = inst_28396;
var files_not_loaded = inst_28398;
var dependencies_that_loaded = inst_28400;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28415,inst_28417,inst_28418,inst_28419,inst_28420,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28415,inst_28417,inst_28418,inst_28419,inst_28420,state_val_28480,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28422 = setTimeout(inst_28421,(10));
var state_28479__$1 = (function (){var statearr_28550 = state_28479;
(statearr_28550[(33)] = inst_28420);

(statearr_28550[(34)] = inst_28415);

return statearr_28550;
})();
var statearr_28551_28614 = state_28479__$1;
(statearr_28551_28614[(2)] = inst_28422);

(statearr_28551_28614[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (16))){
var state_28479__$1 = state_28479;
var statearr_28552_28615 = state_28479__$1;
(statearr_28552_28615[(2)] = reload_dependents);

(statearr_28552_28615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (38))){
var inst_28432 = (state_28479[(16)]);
var inst_28450 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28432);
var state_28479__$1 = state_28479;
var statearr_28553_28616 = state_28479__$1;
(statearr_28553_28616[(2)] = inst_28450);

(statearr_28553_28616[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (30))){
var state_28479__$1 = state_28479;
var statearr_28554_28617 = state_28479__$1;
(statearr_28554_28617[(2)] = null);

(statearr_28554_28617[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (10))){
var inst_28352 = (state_28479[(22)]);
var inst_28354 = cljs.core.chunked_seq_QMARK_.call(null,inst_28352);
var state_28479__$1 = state_28479;
if(inst_28354){
var statearr_28555_28618 = state_28479__$1;
(statearr_28555_28618[(1)] = (13));

} else {
var statearr_28556_28619 = state_28479__$1;
(statearr_28556_28619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (18))){
var inst_28386 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
if(cljs.core.truth_(inst_28386)){
var statearr_28557_28620 = state_28479__$1;
(statearr_28557_28620[(1)] = (19));

} else {
var statearr_28558_28621 = state_28479__$1;
(statearr_28558_28621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (42))){
var state_28479__$1 = state_28479;
var statearr_28559_28622 = state_28479__$1;
(statearr_28559_28622[(2)] = null);

(statearr_28559_28622[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (37))){
var inst_28445 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
var statearr_28560_28623 = state_28479__$1;
(statearr_28560_28623[(2)] = inst_28445);

(statearr_28560_28623[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (8))){
var inst_28352 = (state_28479[(22)]);
var inst_28339 = (state_28479[(9)]);
var inst_28352__$1 = cljs.core.seq.call(null,inst_28339);
var state_28479__$1 = (function (){var statearr_28561 = state_28479;
(statearr_28561[(22)] = inst_28352__$1);

return statearr_28561;
})();
if(inst_28352__$1){
var statearr_28562_28624 = state_28479__$1;
(statearr_28562_28624[(1)] = (10));

} else {
var statearr_28563_28625 = state_28479__$1;
(statearr_28563_28625[(1)] = (11));

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
});})(c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19494__auto__,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto____0 = (function (){
var statearr_28564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28564[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto__);

(statearr_28564[(1)] = (1));

return statearr_28564;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto____1 = (function (state_28479){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_28479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e28565){if((e28565 instanceof Object)){
var ex__19498__auto__ = e28565;
var statearr_28566_28626 = state_28479;
(statearr_28566_28626[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28627 = state_28479;
state_28479 = G__28627;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto__ = function(state_28479){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto____1.call(this,state_28479);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19651__auto__ = (function (){var statearr_28567 = f__19650__auto__.call(null);
(statearr_28567[(6)] = c__19649__auto__);

return statearr_28567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19649__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28630,link){
var map__28631 = p__28630;
var map__28631__$1 = ((((!((map__28631 == null)))?(((((map__28631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28631):map__28631);
var file = cljs.core.get.call(null,map__28631__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28631,map__28631__$1,file){
return (function (p1__28628_SHARP_,p2__28629_SHARP_){
if(cljs.core._EQ_.call(null,p1__28628_SHARP_,p2__28629_SHARP_)){
return p1__28628_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28631,map__28631__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28634){
var map__28635 = p__28634;
var map__28635__$1 = ((((!((map__28635 == null)))?(((((map__28635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28635):map__28635);
var match_length = cljs.core.get.call(null,map__28635__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28635__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28633_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28633_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28637_SHARP_,p2__28638_SHARP_){
return cljs.core.assoc.call(null,p1__28637_SHARP_,cljs.core.get.call(null,p2__28638_SHARP_,key),p2__28638_SHARP_);
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
var loaded_f_datas_28639 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28639);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28639);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28640,p__28641){
var map__28642 = p__28640;
var map__28642__$1 = ((((!((map__28642 == null)))?(((((map__28642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28642):map__28642);
var on_cssload = cljs.core.get.call(null,map__28642__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28643 = p__28641;
var map__28643__$1 = ((((!((map__28643 == null)))?(((((map__28643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28643):map__28643);
var files_msg = map__28643__$1;
var files = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
