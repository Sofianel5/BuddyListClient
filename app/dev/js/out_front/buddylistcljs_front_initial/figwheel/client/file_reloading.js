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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28046_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28046_SHARP_));
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
var seq__28047 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28048 = null;
var count__28049 = (0);
var i__28050 = (0);
while(true){
if((i__28050 < count__28049)){
var n = cljs.core._nth.call(null,chunk__28048,i__28050);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28051 = seq__28047;
var G__28052 = chunk__28048;
var G__28053 = count__28049;
var G__28054 = (i__28050 + (1));
seq__28047 = G__28051;
chunk__28048 = G__28052;
count__28049 = G__28053;
i__28050 = G__28054;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28047);
if(temp__4657__auto__){
var seq__28047__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28047__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__28047__$1);
var G__28055 = cljs.core.chunk_rest.call(null,seq__28047__$1);
var G__28056 = c__4317__auto__;
var G__28057 = cljs.core.count.call(null,c__4317__auto__);
var G__28058 = (0);
seq__28047 = G__28055;
chunk__28048 = G__28056;
count__28049 = G__28057;
i__28050 = G__28058;
continue;
} else {
var n = cljs.core.first.call(null,seq__28047__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28059 = cljs.core.next.call(null,seq__28047__$1);
var G__28060 = null;
var G__28061 = (0);
var G__28062 = (0);
seq__28047 = G__28059;
chunk__28048 = G__28060;
count__28049 = G__28061;
i__28050 = G__28062;
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

var seq__28072_28080 = cljs.core.seq.call(null,deps);
var chunk__28073_28081 = null;
var count__28074_28082 = (0);
var i__28075_28083 = (0);
while(true){
if((i__28075_28083 < count__28074_28082)){
var dep_28084 = cljs.core._nth.call(null,chunk__28073_28081,i__28075_28083);
topo_sort_helper_STAR_.call(null,dep_28084,(depth + (1)),state);


var G__28085 = seq__28072_28080;
var G__28086 = chunk__28073_28081;
var G__28087 = count__28074_28082;
var G__28088 = (i__28075_28083 + (1));
seq__28072_28080 = G__28085;
chunk__28073_28081 = G__28086;
count__28074_28082 = G__28087;
i__28075_28083 = G__28088;
continue;
} else {
var temp__4657__auto___28089 = cljs.core.seq.call(null,seq__28072_28080);
if(temp__4657__auto___28089){
var seq__28072_28090__$1 = temp__4657__auto___28089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28072_28090__$1)){
var c__4317__auto___28091 = cljs.core.chunk_first.call(null,seq__28072_28090__$1);
var G__28092 = cljs.core.chunk_rest.call(null,seq__28072_28090__$1);
var G__28093 = c__4317__auto___28091;
var G__28094 = cljs.core.count.call(null,c__4317__auto___28091);
var G__28095 = (0);
seq__28072_28080 = G__28092;
chunk__28073_28081 = G__28093;
count__28074_28082 = G__28094;
i__28075_28083 = G__28095;
continue;
} else {
var dep_28096 = cljs.core.first.call(null,seq__28072_28090__$1);
topo_sort_helper_STAR_.call(null,dep_28096,(depth + (1)),state);


var G__28097 = cljs.core.next.call(null,seq__28072_28090__$1);
var G__28098 = null;
var G__28099 = (0);
var G__28100 = (0);
seq__28072_28080 = G__28097;
chunk__28073_28081 = G__28098;
count__28074_28082 = G__28099;
i__28075_28083 = G__28100;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28076){
var vec__28077 = p__28076;
var seq__28078 = cljs.core.seq.call(null,vec__28077);
var first__28079 = cljs.core.first.call(null,seq__28078);
var seq__28078__$1 = cljs.core.next.call(null,seq__28078);
var x = first__28079;
var xs = seq__28078__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28077,seq__28078,first__28079,seq__28078__$1,x,xs,get_deps__$1){
return (function (p1__28063_SHARP_){
return clojure.set.difference.call(null,p1__28063_SHARP_,x);
});})(vec__28077,seq__28078,first__28079,seq__28078__$1,x,xs,get_deps__$1))
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
var seq__28101 = cljs.core.seq.call(null,provides);
var chunk__28102 = null;
var count__28103 = (0);
var i__28104 = (0);
while(true){
if((i__28104 < count__28103)){
var prov = cljs.core._nth.call(null,chunk__28102,i__28104);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28105_28113 = cljs.core.seq.call(null,requires);
var chunk__28106_28114 = null;
var count__28107_28115 = (0);
var i__28108_28116 = (0);
while(true){
if((i__28108_28116 < count__28107_28115)){
var req_28117 = cljs.core._nth.call(null,chunk__28106_28114,i__28108_28116);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28117,prov);


var G__28118 = seq__28105_28113;
var G__28119 = chunk__28106_28114;
var G__28120 = count__28107_28115;
var G__28121 = (i__28108_28116 + (1));
seq__28105_28113 = G__28118;
chunk__28106_28114 = G__28119;
count__28107_28115 = G__28120;
i__28108_28116 = G__28121;
continue;
} else {
var temp__4657__auto___28122 = cljs.core.seq.call(null,seq__28105_28113);
if(temp__4657__auto___28122){
var seq__28105_28123__$1 = temp__4657__auto___28122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28105_28123__$1)){
var c__4317__auto___28124 = cljs.core.chunk_first.call(null,seq__28105_28123__$1);
var G__28125 = cljs.core.chunk_rest.call(null,seq__28105_28123__$1);
var G__28126 = c__4317__auto___28124;
var G__28127 = cljs.core.count.call(null,c__4317__auto___28124);
var G__28128 = (0);
seq__28105_28113 = G__28125;
chunk__28106_28114 = G__28126;
count__28107_28115 = G__28127;
i__28108_28116 = G__28128;
continue;
} else {
var req_28129 = cljs.core.first.call(null,seq__28105_28123__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28129,prov);


var G__28130 = cljs.core.next.call(null,seq__28105_28123__$1);
var G__28131 = null;
var G__28132 = (0);
var G__28133 = (0);
seq__28105_28113 = G__28130;
chunk__28106_28114 = G__28131;
count__28107_28115 = G__28132;
i__28108_28116 = G__28133;
continue;
}
} else {
}
}
break;
}


var G__28134 = seq__28101;
var G__28135 = chunk__28102;
var G__28136 = count__28103;
var G__28137 = (i__28104 + (1));
seq__28101 = G__28134;
chunk__28102 = G__28135;
count__28103 = G__28136;
i__28104 = G__28137;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28101);
if(temp__4657__auto__){
var seq__28101__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28101__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__28101__$1);
var G__28138 = cljs.core.chunk_rest.call(null,seq__28101__$1);
var G__28139 = c__4317__auto__;
var G__28140 = cljs.core.count.call(null,c__4317__auto__);
var G__28141 = (0);
seq__28101 = G__28138;
chunk__28102 = G__28139;
count__28103 = G__28140;
i__28104 = G__28141;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28101__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28109_28142 = cljs.core.seq.call(null,requires);
var chunk__28110_28143 = null;
var count__28111_28144 = (0);
var i__28112_28145 = (0);
while(true){
if((i__28112_28145 < count__28111_28144)){
var req_28146 = cljs.core._nth.call(null,chunk__28110_28143,i__28112_28145);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28146,prov);


var G__28147 = seq__28109_28142;
var G__28148 = chunk__28110_28143;
var G__28149 = count__28111_28144;
var G__28150 = (i__28112_28145 + (1));
seq__28109_28142 = G__28147;
chunk__28110_28143 = G__28148;
count__28111_28144 = G__28149;
i__28112_28145 = G__28150;
continue;
} else {
var temp__4657__auto___28151__$1 = cljs.core.seq.call(null,seq__28109_28142);
if(temp__4657__auto___28151__$1){
var seq__28109_28152__$1 = temp__4657__auto___28151__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28109_28152__$1)){
var c__4317__auto___28153 = cljs.core.chunk_first.call(null,seq__28109_28152__$1);
var G__28154 = cljs.core.chunk_rest.call(null,seq__28109_28152__$1);
var G__28155 = c__4317__auto___28153;
var G__28156 = cljs.core.count.call(null,c__4317__auto___28153);
var G__28157 = (0);
seq__28109_28142 = G__28154;
chunk__28110_28143 = G__28155;
count__28111_28144 = G__28156;
i__28112_28145 = G__28157;
continue;
} else {
var req_28158 = cljs.core.first.call(null,seq__28109_28152__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28158,prov);


var G__28159 = cljs.core.next.call(null,seq__28109_28152__$1);
var G__28160 = null;
var G__28161 = (0);
var G__28162 = (0);
seq__28109_28142 = G__28159;
chunk__28110_28143 = G__28160;
count__28111_28144 = G__28161;
i__28112_28145 = G__28162;
continue;
}
} else {
}
}
break;
}


var G__28163 = cljs.core.next.call(null,seq__28101__$1);
var G__28164 = null;
var G__28165 = (0);
var G__28166 = (0);
seq__28101 = G__28163;
chunk__28102 = G__28164;
count__28103 = G__28165;
i__28104 = G__28166;
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
var seq__28167_28171 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28168_28172 = null;
var count__28169_28173 = (0);
var i__28170_28174 = (0);
while(true){
if((i__28170_28174 < count__28169_28173)){
var ns_28175 = cljs.core._nth.call(null,chunk__28168_28172,i__28170_28174);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28175);


var G__28176 = seq__28167_28171;
var G__28177 = chunk__28168_28172;
var G__28178 = count__28169_28173;
var G__28179 = (i__28170_28174 + (1));
seq__28167_28171 = G__28176;
chunk__28168_28172 = G__28177;
count__28169_28173 = G__28178;
i__28170_28174 = G__28179;
continue;
} else {
var temp__4657__auto___28180 = cljs.core.seq.call(null,seq__28167_28171);
if(temp__4657__auto___28180){
var seq__28167_28181__$1 = temp__4657__auto___28180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28167_28181__$1)){
var c__4317__auto___28182 = cljs.core.chunk_first.call(null,seq__28167_28181__$1);
var G__28183 = cljs.core.chunk_rest.call(null,seq__28167_28181__$1);
var G__28184 = c__4317__auto___28182;
var G__28185 = cljs.core.count.call(null,c__4317__auto___28182);
var G__28186 = (0);
seq__28167_28171 = G__28183;
chunk__28168_28172 = G__28184;
count__28169_28173 = G__28185;
i__28170_28174 = G__28186;
continue;
} else {
var ns_28187 = cljs.core.first.call(null,seq__28167_28181__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28187);


var G__28188 = cljs.core.next.call(null,seq__28167_28181__$1);
var G__28189 = null;
var G__28190 = (0);
var G__28191 = (0);
seq__28167_28171 = G__28188;
chunk__28168_28172 = G__28189;
count__28169_28173 = G__28190;
i__28170_28174 = G__28191;
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
var G__28192__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28193__i = 0, G__28193__a = new Array(arguments.length -  0);
while (G__28193__i < G__28193__a.length) {G__28193__a[G__28193__i] = arguments[G__28193__i + 0]; ++G__28193__i;}
  args = new cljs.core.IndexedSeq(G__28193__a,0,null);
} 
return G__28192__delegate.call(this,args);};
G__28192.cljs$lang$maxFixedArity = 0;
G__28192.cljs$lang$applyTo = (function (arglist__28194){
var args = cljs.core.seq(arglist__28194);
return G__28192__delegate(args);
});
G__28192.cljs$core$IFn$_invoke$arity$variadic = G__28192__delegate;
return G__28192;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28195 = cljs.core._EQ_;
var expr__28196 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28195.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28196))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__28195,expr__28196){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__28195,expr__28196))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__28195,expr__28196){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28198){if((e28198 instanceof Error)){
var e = e28198;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28198;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__28195,expr__28196))
} else {
if(cljs.core.truth_(pred__28195.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28196))){
return ((function (pred__28195,expr__28196){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__28195,expr__28196){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28195,expr__28196))
);

return deferred.addErrback(((function (deferred,pred__28195,expr__28196){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28195,expr__28196))
);
});
;})(pred__28195,expr__28196))
} else {
if(cljs.core.truth_(pred__28195.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28196))){
return ((function (pred__28195,expr__28196){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28199){if((e28199 instanceof Error)){
var e = e28199;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28199;

}
}})());
});
;})(pred__28195,expr__28196))
} else {
return ((function (pred__28195,expr__28196){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28195,expr__28196))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28200,callback){
var map__28201 = p__28200;
var map__28201__$1 = ((((!((map__28201 == null)))?(((((map__28201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28201):map__28201);
var file_msg = map__28201__$1;
var request_url = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28201,map__28201__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28201,map__28201__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto__){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto__){
return (function (state_28225){
var state_val_28226 = (state_28225[(1)]);
if((state_val_28226 === (7))){
var inst_28221 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
var statearr_28227_28244 = state_28225__$1;
(statearr_28227_28244[(2)] = inst_28221);

(statearr_28227_28244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (1))){
var state_28225__$1 = state_28225;
var statearr_28228_28245 = state_28225__$1;
(statearr_28228_28245[(2)] = null);

(statearr_28228_28245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (4))){
var inst_28205 = (state_28225[(7)]);
var inst_28205__$1 = (state_28225[(2)]);
var state_28225__$1 = (function (){var statearr_28229 = state_28225;
(statearr_28229[(7)] = inst_28205__$1);

return statearr_28229;
})();
if(cljs.core.truth_(inst_28205__$1)){
var statearr_28230_28246 = state_28225__$1;
(statearr_28230_28246[(1)] = (5));

} else {
var statearr_28231_28247 = state_28225__$1;
(statearr_28231_28247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (6))){
var state_28225__$1 = state_28225;
var statearr_28232_28248 = state_28225__$1;
(statearr_28232_28248[(2)] = null);

(statearr_28232_28248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (3))){
var inst_28223 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28225__$1,inst_28223);
} else {
if((state_val_28226 === (2))){
var state_28225__$1 = state_28225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28225__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28226 === (11))){
var inst_28217 = (state_28225[(2)]);
var state_28225__$1 = (function (){var statearr_28233 = state_28225;
(statearr_28233[(8)] = inst_28217);

return statearr_28233;
})();
var statearr_28234_28249 = state_28225__$1;
(statearr_28234_28249[(2)] = null);

(statearr_28234_28249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (9))){
var inst_28209 = (state_28225[(9)]);
var inst_28211 = (state_28225[(10)]);
var inst_28213 = inst_28211.call(null,inst_28209);
var state_28225__$1 = state_28225;
var statearr_28235_28250 = state_28225__$1;
(statearr_28235_28250[(2)] = inst_28213);

(statearr_28235_28250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (5))){
var inst_28205 = (state_28225[(7)]);
var inst_28207 = figwheel.client.file_reloading.blocking_load.call(null,inst_28205);
var state_28225__$1 = state_28225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28225__$1,(8),inst_28207);
} else {
if((state_val_28226 === (10))){
var inst_28209 = (state_28225[(9)]);
var inst_28215 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28209);
var state_28225__$1 = state_28225;
var statearr_28236_28251 = state_28225__$1;
(statearr_28236_28251[(2)] = inst_28215);

(statearr_28236_28251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (8))){
var inst_28205 = (state_28225[(7)]);
var inst_28211 = (state_28225[(10)]);
var inst_28209 = (state_28225[(2)]);
var inst_28210 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28211__$1 = cljs.core.get.call(null,inst_28210,inst_28205);
var state_28225__$1 = (function (){var statearr_28237 = state_28225;
(statearr_28237[(9)] = inst_28209);

(statearr_28237[(10)] = inst_28211__$1);

return statearr_28237;
})();
if(cljs.core.truth_(inst_28211__$1)){
var statearr_28238_28252 = state_28225__$1;
(statearr_28238_28252[(1)] = (9));

} else {
var statearr_28239_28253 = state_28225__$1;
(statearr_28239_28253[(1)] = (10));

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
});})(c__19650__auto__))
;
return ((function (switch__19495__auto__,c__19650__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19496__auto__ = null;
var figwheel$client$file_reloading$state_machine__19496__auto____0 = (function (){
var statearr_28240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28240[(0)] = figwheel$client$file_reloading$state_machine__19496__auto__);

(statearr_28240[(1)] = (1));

return statearr_28240;
});
var figwheel$client$file_reloading$state_machine__19496__auto____1 = (function (state_28225){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_28225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e28241){if((e28241 instanceof Object)){
var ex__19499__auto__ = e28241;
var statearr_28242_28254 = state_28225;
(statearr_28242_28254[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28255 = state_28225;
state_28225 = G__28255;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19496__auto__ = function(state_28225){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19496__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19496__auto____1.call(this,state_28225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19496__auto____0;
figwheel$client$file_reloading$state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19496__auto____1;
return figwheel$client$file_reloading$state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto__))
})();
var state__19652__auto__ = (function (){var statearr_28243 = f__19651__auto__.call(null);
(statearr_28243[(6)] = c__19650__auto__);

return statearr_28243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto__))
);

return c__19650__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28256,callback){
var map__28257 = p__28256;
var map__28257__$1 = ((((!((map__28257 == null)))?(((((map__28257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28257):map__28257);
var file_msg = map__28257__$1;
var namespace = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28257,map__28257__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28257,map__28257__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28259){
var map__28260 = p__28259;
var map__28260__$1 = ((((!((map__28260 == null)))?(((((map__28260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28260):map__28260);
var file_msg = map__28260__$1;
var namespace = cljs.core.get.call(null,map__28260__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28262){
var map__28263 = p__28262;
var map__28263__$1 = ((((!((map__28263 == null)))?(((((map__28263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28263):map__28263);
var file_msg = map__28263__$1;
var namespace = cljs.core.get.call(null,map__28263__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28265,callback){
var map__28266 = p__28265;
var map__28266__$1 = ((((!((map__28266 == null)))?(((((map__28266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28266):map__28266);
var file_msg = map__28266__$1;
var request_url = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19650__auto___28316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___28316,out){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___28316,out){
return (function (state_28301){
var state_val_28302 = (state_28301[(1)]);
if((state_val_28302 === (1))){
var inst_28275 = cljs.core.seq.call(null,files);
var inst_28276 = cljs.core.first.call(null,inst_28275);
var inst_28277 = cljs.core.next.call(null,inst_28275);
var inst_28278 = files;
var state_28301__$1 = (function (){var statearr_28303 = state_28301;
(statearr_28303[(7)] = inst_28276);

(statearr_28303[(8)] = inst_28278);

(statearr_28303[(9)] = inst_28277);

return statearr_28303;
})();
var statearr_28304_28317 = state_28301__$1;
(statearr_28304_28317[(2)] = null);

(statearr_28304_28317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (2))){
var inst_28284 = (state_28301[(10)]);
var inst_28278 = (state_28301[(8)]);
var inst_28283 = cljs.core.seq.call(null,inst_28278);
var inst_28284__$1 = cljs.core.first.call(null,inst_28283);
var inst_28285 = cljs.core.next.call(null,inst_28283);
var inst_28286 = (inst_28284__$1 == null);
var inst_28287 = cljs.core.not.call(null,inst_28286);
var state_28301__$1 = (function (){var statearr_28305 = state_28301;
(statearr_28305[(11)] = inst_28285);

(statearr_28305[(10)] = inst_28284__$1);

return statearr_28305;
})();
if(inst_28287){
var statearr_28306_28318 = state_28301__$1;
(statearr_28306_28318[(1)] = (4));

} else {
var statearr_28307_28319 = state_28301__$1;
(statearr_28307_28319[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (3))){
var inst_28299 = (state_28301[(2)]);
var state_28301__$1 = state_28301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28301__$1,inst_28299);
} else {
if((state_val_28302 === (4))){
var inst_28284 = (state_28301[(10)]);
var inst_28289 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28284);
var state_28301__$1 = state_28301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28301__$1,(7),inst_28289);
} else {
if((state_val_28302 === (5))){
var inst_28295 = cljs.core.async.close_BANG_.call(null,out);
var state_28301__$1 = state_28301;
var statearr_28308_28320 = state_28301__$1;
(statearr_28308_28320[(2)] = inst_28295);

(statearr_28308_28320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (6))){
var inst_28297 = (state_28301[(2)]);
var state_28301__$1 = state_28301;
var statearr_28309_28321 = state_28301__$1;
(statearr_28309_28321[(2)] = inst_28297);

(statearr_28309_28321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (7))){
var inst_28285 = (state_28301[(11)]);
var inst_28291 = (state_28301[(2)]);
var inst_28292 = cljs.core.async.put_BANG_.call(null,out,inst_28291);
var inst_28278 = inst_28285;
var state_28301__$1 = (function (){var statearr_28310 = state_28301;
(statearr_28310[(12)] = inst_28292);

(statearr_28310[(8)] = inst_28278);

return statearr_28310;
})();
var statearr_28311_28322 = state_28301__$1;
(statearr_28311_28322[(2)] = null);

(statearr_28311_28322[(1)] = (2));


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
});})(c__19650__auto___28316,out))
;
return ((function (switch__19495__auto__,c__19650__auto___28316,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto____0 = (function (){
var statearr_28312 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28312[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto__);

(statearr_28312[(1)] = (1));

return statearr_28312;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto____1 = (function (state_28301){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_28301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e28313){if((e28313 instanceof Object)){
var ex__19499__auto__ = e28313;
var statearr_28314_28323 = state_28301;
(statearr_28314_28323[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28324 = state_28301;
state_28301 = G__28324;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto__ = function(state_28301){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto____1.call(this,state_28301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___28316,out))
})();
var state__19652__auto__ = (function (){var statearr_28315 = f__19651__auto__.call(null);
(statearr_28315[(6)] = c__19650__auto___28316);

return statearr_28315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___28316,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28325,opts){
var map__28326 = p__28325;
var map__28326__$1 = ((((!((map__28326 == null)))?(((((map__28326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28326):map__28326);
var eval_body = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28328){var e = e28328;
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
return (function (p1__28329_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28329_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28330){
var vec__28331 = p__28330;
var k = cljs.core.nth.call(null,vec__28331,(0),null);
var v = cljs.core.nth.call(null,vec__28331,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28334){
var vec__28335 = p__28334;
var k = cljs.core.nth.call(null,vec__28335,(0),null);
var v = cljs.core.nth.call(null,vec__28335,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28341,p__28342){
var map__28343 = p__28341;
var map__28343__$1 = ((((!((map__28343 == null)))?(((((map__28343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28343):map__28343);
var opts = map__28343__$1;
var before_jsload = cljs.core.get.call(null,map__28343__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28343__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28343__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28344 = p__28342;
var map__28344__$1 = ((((!((map__28344 == null)))?(((((map__28344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28344):map__28344);
var msg = map__28344__$1;
var files = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28498){
var state_val_28499 = (state_28498[(1)]);
if((state_val_28499 === (7))){
var inst_28361 = (state_28498[(7)]);
var inst_28360 = (state_28498[(8)]);
var inst_28359 = (state_28498[(9)]);
var inst_28358 = (state_28498[(10)]);
var inst_28366 = cljs.core._nth.call(null,inst_28359,inst_28361);
var inst_28367 = figwheel.client.file_reloading.eval_body.call(null,inst_28366,opts);
var inst_28368 = (inst_28361 + (1));
var tmp28500 = inst_28360;
var tmp28501 = inst_28359;
var tmp28502 = inst_28358;
var inst_28358__$1 = tmp28502;
var inst_28359__$1 = tmp28501;
var inst_28360__$1 = tmp28500;
var inst_28361__$1 = inst_28368;
var state_28498__$1 = (function (){var statearr_28503 = state_28498;
(statearr_28503[(7)] = inst_28361__$1);

(statearr_28503[(11)] = inst_28367);

(statearr_28503[(8)] = inst_28360__$1);

(statearr_28503[(9)] = inst_28359__$1);

(statearr_28503[(10)] = inst_28358__$1);

return statearr_28503;
})();
var statearr_28504_28587 = state_28498__$1;
(statearr_28504_28587[(2)] = null);

(statearr_28504_28587[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (20))){
var inst_28401 = (state_28498[(12)]);
var inst_28409 = figwheel.client.file_reloading.sort_files.call(null,inst_28401);
var state_28498__$1 = state_28498;
var statearr_28505_28588 = state_28498__$1;
(statearr_28505_28588[(2)] = inst_28409);

(statearr_28505_28588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (27))){
var state_28498__$1 = state_28498;
var statearr_28506_28589 = state_28498__$1;
(statearr_28506_28589[(2)] = null);

(statearr_28506_28589[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (1))){
var inst_28350 = (state_28498[(13)]);
var inst_28347 = before_jsload.call(null,files);
var inst_28348 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28349 = (function (){return ((function (inst_28350,inst_28347,inst_28348,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28338_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28338_SHARP_);
});
;})(inst_28350,inst_28347,inst_28348,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28350__$1 = cljs.core.filter.call(null,inst_28349,files);
var inst_28351 = cljs.core.not_empty.call(null,inst_28350__$1);
var state_28498__$1 = (function (){var statearr_28507 = state_28498;
(statearr_28507[(13)] = inst_28350__$1);

(statearr_28507[(14)] = inst_28347);

(statearr_28507[(15)] = inst_28348);

return statearr_28507;
})();
if(cljs.core.truth_(inst_28351)){
var statearr_28508_28590 = state_28498__$1;
(statearr_28508_28590[(1)] = (2));

} else {
var statearr_28509_28591 = state_28498__$1;
(statearr_28509_28591[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (24))){
var state_28498__$1 = state_28498;
var statearr_28510_28592 = state_28498__$1;
(statearr_28510_28592[(2)] = null);

(statearr_28510_28592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (39))){
var inst_28451 = (state_28498[(16)]);
var state_28498__$1 = state_28498;
var statearr_28511_28593 = state_28498__$1;
(statearr_28511_28593[(2)] = inst_28451);

(statearr_28511_28593[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (46))){
var inst_28493 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28512_28594 = state_28498__$1;
(statearr_28512_28594[(2)] = inst_28493);

(statearr_28512_28594[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (4))){
var inst_28395 = (state_28498[(2)]);
var inst_28396 = cljs.core.List.EMPTY;
var inst_28397 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28396);
var inst_28398 = (function (){return ((function (inst_28395,inst_28396,inst_28397,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28339_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28339_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28339_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28339_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_28395,inst_28396,inst_28397,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28399 = cljs.core.filter.call(null,inst_28398,files);
var inst_28400 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28401 = cljs.core.concat.call(null,inst_28399,inst_28400);
var state_28498__$1 = (function (){var statearr_28513 = state_28498;
(statearr_28513[(17)] = inst_28397);

(statearr_28513[(12)] = inst_28401);

(statearr_28513[(18)] = inst_28395);

return statearr_28513;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28514_28595 = state_28498__$1;
(statearr_28514_28595[(1)] = (16));

} else {
var statearr_28515_28596 = state_28498__$1;
(statearr_28515_28596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (15))){
var inst_28385 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28516_28597 = state_28498__$1;
(statearr_28516_28597[(2)] = inst_28385);

(statearr_28516_28597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (21))){
var inst_28411 = (state_28498[(19)]);
var inst_28411__$1 = (state_28498[(2)]);
var inst_28412 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28411__$1);
var state_28498__$1 = (function (){var statearr_28517 = state_28498;
(statearr_28517[(19)] = inst_28411__$1);

return statearr_28517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28498__$1,(22),inst_28412);
} else {
if((state_val_28499 === (31))){
var inst_28496 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28498__$1,inst_28496);
} else {
if((state_val_28499 === (32))){
var inst_28451 = (state_28498[(16)]);
var inst_28456 = inst_28451.cljs$lang$protocol_mask$partition0$;
var inst_28457 = (inst_28456 & (64));
var inst_28458 = inst_28451.cljs$core$ISeq$;
var inst_28459 = (cljs.core.PROTOCOL_SENTINEL === inst_28458);
var inst_28460 = ((inst_28457) || (inst_28459));
var state_28498__$1 = state_28498;
if(cljs.core.truth_(inst_28460)){
var statearr_28518_28598 = state_28498__$1;
(statearr_28518_28598[(1)] = (35));

} else {
var statearr_28519_28599 = state_28498__$1;
(statearr_28519_28599[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (40))){
var inst_28473 = (state_28498[(20)]);
var inst_28472 = (state_28498[(2)]);
var inst_28473__$1 = cljs.core.get.call(null,inst_28472,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28474 = cljs.core.get.call(null,inst_28472,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28475 = cljs.core.not_empty.call(null,inst_28473__$1);
var state_28498__$1 = (function (){var statearr_28520 = state_28498;
(statearr_28520[(21)] = inst_28474);

(statearr_28520[(20)] = inst_28473__$1);

return statearr_28520;
})();
if(cljs.core.truth_(inst_28475)){
var statearr_28521_28600 = state_28498__$1;
(statearr_28521_28600[(1)] = (41));

} else {
var statearr_28522_28601 = state_28498__$1;
(statearr_28522_28601[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (33))){
var state_28498__$1 = state_28498;
var statearr_28523_28602 = state_28498__$1;
(statearr_28523_28602[(2)] = false);

(statearr_28523_28602[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (13))){
var inst_28371 = (state_28498[(22)]);
var inst_28375 = cljs.core.chunk_first.call(null,inst_28371);
var inst_28376 = cljs.core.chunk_rest.call(null,inst_28371);
var inst_28377 = cljs.core.count.call(null,inst_28375);
var inst_28358 = inst_28376;
var inst_28359 = inst_28375;
var inst_28360 = inst_28377;
var inst_28361 = (0);
var state_28498__$1 = (function (){var statearr_28524 = state_28498;
(statearr_28524[(7)] = inst_28361);

(statearr_28524[(8)] = inst_28360);

(statearr_28524[(9)] = inst_28359);

(statearr_28524[(10)] = inst_28358);

return statearr_28524;
})();
var statearr_28525_28603 = state_28498__$1;
(statearr_28525_28603[(2)] = null);

(statearr_28525_28603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (22))){
var inst_28414 = (state_28498[(23)]);
var inst_28411 = (state_28498[(19)]);
var inst_28419 = (state_28498[(24)]);
var inst_28415 = (state_28498[(25)]);
var inst_28414__$1 = (state_28498[(2)]);
var inst_28415__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28414__$1);
var inst_28416 = (function (){var all_files = inst_28411;
var res_SINGLEQUOTE_ = inst_28414__$1;
var res = inst_28415__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28414,inst_28411,inst_28419,inst_28415,inst_28414__$1,inst_28415__$1,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28340_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28340_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28414,inst_28411,inst_28419,inst_28415,inst_28414__$1,inst_28415__$1,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28417 = cljs.core.filter.call(null,inst_28416,inst_28414__$1);
var inst_28418 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28419__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28418);
var inst_28420 = cljs.core.not_empty.call(null,inst_28419__$1);
var state_28498__$1 = (function (){var statearr_28526 = state_28498;
(statearr_28526[(26)] = inst_28417);

(statearr_28526[(23)] = inst_28414__$1);

(statearr_28526[(24)] = inst_28419__$1);

(statearr_28526[(25)] = inst_28415__$1);

return statearr_28526;
})();
if(cljs.core.truth_(inst_28420)){
var statearr_28527_28604 = state_28498__$1;
(statearr_28527_28604[(1)] = (23));

} else {
var statearr_28528_28605 = state_28498__$1;
(statearr_28528_28605[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (36))){
var state_28498__$1 = state_28498;
var statearr_28529_28606 = state_28498__$1;
(statearr_28529_28606[(2)] = false);

(statearr_28529_28606[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (41))){
var inst_28473 = (state_28498[(20)]);
var inst_28477 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28478 = cljs.core.map.call(null,inst_28477,inst_28473);
var inst_28479 = cljs.core.pr_str.call(null,inst_28478);
var inst_28480 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28479)].join('');
var inst_28481 = figwheel.client.utils.log.call(null,inst_28480);
var state_28498__$1 = state_28498;
var statearr_28530_28607 = state_28498__$1;
(statearr_28530_28607[(2)] = inst_28481);

(statearr_28530_28607[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (43))){
var inst_28474 = (state_28498[(21)]);
var inst_28484 = (state_28498[(2)]);
var inst_28485 = cljs.core.not_empty.call(null,inst_28474);
var state_28498__$1 = (function (){var statearr_28531 = state_28498;
(statearr_28531[(27)] = inst_28484);

return statearr_28531;
})();
if(cljs.core.truth_(inst_28485)){
var statearr_28532_28608 = state_28498__$1;
(statearr_28532_28608[(1)] = (44));

} else {
var statearr_28533_28609 = state_28498__$1;
(statearr_28533_28609[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (29))){
var inst_28417 = (state_28498[(26)]);
var inst_28414 = (state_28498[(23)]);
var inst_28451 = (state_28498[(16)]);
var inst_28411 = (state_28498[(19)]);
var inst_28419 = (state_28498[(24)]);
var inst_28415 = (state_28498[(25)]);
var inst_28447 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28450 = (function (){var all_files = inst_28411;
var res_SINGLEQUOTE_ = inst_28414;
var res = inst_28415;
var files_not_loaded = inst_28417;
var dependencies_that_loaded = inst_28419;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28417,inst_28414,inst_28451,inst_28411,inst_28419,inst_28415,inst_28447,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28449){
var map__28534 = p__28449;
var map__28534__$1 = ((((!((map__28534 == null)))?(((((map__28534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28534):map__28534);
var namespace = cljs.core.get.call(null,map__28534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28417,inst_28414,inst_28451,inst_28411,inst_28419,inst_28415,inst_28447,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28451__$1 = cljs.core.group_by.call(null,inst_28450,inst_28417);
var inst_28453 = (inst_28451__$1 == null);
var inst_28454 = cljs.core.not.call(null,inst_28453);
var state_28498__$1 = (function (){var statearr_28536 = state_28498;
(statearr_28536[(16)] = inst_28451__$1);

(statearr_28536[(28)] = inst_28447);

return statearr_28536;
})();
if(inst_28454){
var statearr_28537_28610 = state_28498__$1;
(statearr_28537_28610[(1)] = (32));

} else {
var statearr_28538_28611 = state_28498__$1;
(statearr_28538_28611[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (44))){
var inst_28474 = (state_28498[(21)]);
var inst_28487 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28474);
var inst_28488 = cljs.core.pr_str.call(null,inst_28487);
var inst_28489 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28488)].join('');
var inst_28490 = figwheel.client.utils.log.call(null,inst_28489);
var state_28498__$1 = state_28498;
var statearr_28539_28612 = state_28498__$1;
(statearr_28539_28612[(2)] = inst_28490);

(statearr_28539_28612[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (6))){
var inst_28392 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28540_28613 = state_28498__$1;
(statearr_28540_28613[(2)] = inst_28392);

(statearr_28540_28613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (28))){
var inst_28417 = (state_28498[(26)]);
var inst_28444 = (state_28498[(2)]);
var inst_28445 = cljs.core.not_empty.call(null,inst_28417);
var state_28498__$1 = (function (){var statearr_28541 = state_28498;
(statearr_28541[(29)] = inst_28444);

return statearr_28541;
})();
if(cljs.core.truth_(inst_28445)){
var statearr_28542_28614 = state_28498__$1;
(statearr_28542_28614[(1)] = (29));

} else {
var statearr_28543_28615 = state_28498__$1;
(statearr_28543_28615[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (25))){
var inst_28415 = (state_28498[(25)]);
var inst_28431 = (state_28498[(2)]);
var inst_28432 = cljs.core.not_empty.call(null,inst_28415);
var state_28498__$1 = (function (){var statearr_28544 = state_28498;
(statearr_28544[(30)] = inst_28431);

return statearr_28544;
})();
if(cljs.core.truth_(inst_28432)){
var statearr_28545_28616 = state_28498__$1;
(statearr_28545_28616[(1)] = (26));

} else {
var statearr_28546_28617 = state_28498__$1;
(statearr_28546_28617[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (34))){
var inst_28467 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
if(cljs.core.truth_(inst_28467)){
var statearr_28547_28618 = state_28498__$1;
(statearr_28547_28618[(1)] = (38));

} else {
var statearr_28548_28619 = state_28498__$1;
(statearr_28548_28619[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (17))){
var state_28498__$1 = state_28498;
var statearr_28549_28620 = state_28498__$1;
(statearr_28549_28620[(2)] = recompile_dependents);

(statearr_28549_28620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (3))){
var state_28498__$1 = state_28498;
var statearr_28550_28621 = state_28498__$1;
(statearr_28550_28621[(2)] = null);

(statearr_28550_28621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (12))){
var inst_28388 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28551_28622 = state_28498__$1;
(statearr_28551_28622[(2)] = inst_28388);

(statearr_28551_28622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (2))){
var inst_28350 = (state_28498[(13)]);
var inst_28357 = cljs.core.seq.call(null,inst_28350);
var inst_28358 = inst_28357;
var inst_28359 = null;
var inst_28360 = (0);
var inst_28361 = (0);
var state_28498__$1 = (function (){var statearr_28552 = state_28498;
(statearr_28552[(7)] = inst_28361);

(statearr_28552[(8)] = inst_28360);

(statearr_28552[(9)] = inst_28359);

(statearr_28552[(10)] = inst_28358);

return statearr_28552;
})();
var statearr_28553_28623 = state_28498__$1;
(statearr_28553_28623[(2)] = null);

(statearr_28553_28623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (23))){
var inst_28417 = (state_28498[(26)]);
var inst_28414 = (state_28498[(23)]);
var inst_28411 = (state_28498[(19)]);
var inst_28419 = (state_28498[(24)]);
var inst_28415 = (state_28498[(25)]);
var inst_28422 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28424 = (function (){var all_files = inst_28411;
var res_SINGLEQUOTE_ = inst_28414;
var res = inst_28415;
var files_not_loaded = inst_28417;
var dependencies_that_loaded = inst_28419;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28417,inst_28414,inst_28411,inst_28419,inst_28415,inst_28422,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28423){
var map__28554 = p__28423;
var map__28554__$1 = ((((!((map__28554 == null)))?(((((map__28554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28554):map__28554);
var request_url = cljs.core.get.call(null,map__28554__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28417,inst_28414,inst_28411,inst_28419,inst_28415,inst_28422,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28425 = cljs.core.reverse.call(null,inst_28419);
var inst_28426 = cljs.core.map.call(null,inst_28424,inst_28425);
var inst_28427 = cljs.core.pr_str.call(null,inst_28426);
var inst_28428 = figwheel.client.utils.log.call(null,inst_28427);
var state_28498__$1 = (function (){var statearr_28556 = state_28498;
(statearr_28556[(31)] = inst_28422);

return statearr_28556;
})();
var statearr_28557_28624 = state_28498__$1;
(statearr_28557_28624[(2)] = inst_28428);

(statearr_28557_28624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (35))){
var state_28498__$1 = state_28498;
var statearr_28558_28625 = state_28498__$1;
(statearr_28558_28625[(2)] = true);

(statearr_28558_28625[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (19))){
var inst_28401 = (state_28498[(12)]);
var inst_28407 = figwheel.client.file_reloading.expand_files.call(null,inst_28401);
var state_28498__$1 = state_28498;
var statearr_28559_28626 = state_28498__$1;
(statearr_28559_28626[(2)] = inst_28407);

(statearr_28559_28626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (11))){
var state_28498__$1 = state_28498;
var statearr_28560_28627 = state_28498__$1;
(statearr_28560_28627[(2)] = null);

(statearr_28560_28627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (9))){
var inst_28390 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28561_28628 = state_28498__$1;
(statearr_28561_28628[(2)] = inst_28390);

(statearr_28561_28628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (5))){
var inst_28361 = (state_28498[(7)]);
var inst_28360 = (state_28498[(8)]);
var inst_28363 = (inst_28361 < inst_28360);
var inst_28364 = inst_28363;
var state_28498__$1 = state_28498;
if(cljs.core.truth_(inst_28364)){
var statearr_28562_28629 = state_28498__$1;
(statearr_28562_28629[(1)] = (7));

} else {
var statearr_28563_28630 = state_28498__$1;
(statearr_28563_28630[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (14))){
var inst_28371 = (state_28498[(22)]);
var inst_28380 = cljs.core.first.call(null,inst_28371);
var inst_28381 = figwheel.client.file_reloading.eval_body.call(null,inst_28380,opts);
var inst_28382 = cljs.core.next.call(null,inst_28371);
var inst_28358 = inst_28382;
var inst_28359 = null;
var inst_28360 = (0);
var inst_28361 = (0);
var state_28498__$1 = (function (){var statearr_28564 = state_28498;
(statearr_28564[(7)] = inst_28361);

(statearr_28564[(8)] = inst_28360);

(statearr_28564[(32)] = inst_28381);

(statearr_28564[(9)] = inst_28359);

(statearr_28564[(10)] = inst_28358);

return statearr_28564;
})();
var statearr_28565_28631 = state_28498__$1;
(statearr_28565_28631[(2)] = null);

(statearr_28565_28631[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (45))){
var state_28498__$1 = state_28498;
var statearr_28566_28632 = state_28498__$1;
(statearr_28566_28632[(2)] = null);

(statearr_28566_28632[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (26))){
var inst_28417 = (state_28498[(26)]);
var inst_28414 = (state_28498[(23)]);
var inst_28411 = (state_28498[(19)]);
var inst_28419 = (state_28498[(24)]);
var inst_28415 = (state_28498[(25)]);
var inst_28434 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28436 = (function (){var all_files = inst_28411;
var res_SINGLEQUOTE_ = inst_28414;
var res = inst_28415;
var files_not_loaded = inst_28417;
var dependencies_that_loaded = inst_28419;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28417,inst_28414,inst_28411,inst_28419,inst_28415,inst_28434,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28435){
var map__28567 = p__28435;
var map__28567__$1 = ((((!((map__28567 == null)))?(((((map__28567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28567):map__28567);
var namespace = cljs.core.get.call(null,map__28567__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28567__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28417,inst_28414,inst_28411,inst_28419,inst_28415,inst_28434,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28437 = cljs.core.map.call(null,inst_28436,inst_28415);
var inst_28438 = cljs.core.pr_str.call(null,inst_28437);
var inst_28439 = figwheel.client.utils.log.call(null,inst_28438);
var inst_28440 = (function (){var all_files = inst_28411;
var res_SINGLEQUOTE_ = inst_28414;
var res = inst_28415;
var files_not_loaded = inst_28417;
var dependencies_that_loaded = inst_28419;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28417,inst_28414,inst_28411,inst_28419,inst_28415,inst_28434,inst_28436,inst_28437,inst_28438,inst_28439,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28417,inst_28414,inst_28411,inst_28419,inst_28415,inst_28434,inst_28436,inst_28437,inst_28438,inst_28439,state_val_28499,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28441 = setTimeout(inst_28440,(10));
var state_28498__$1 = (function (){var statearr_28569 = state_28498;
(statearr_28569[(33)] = inst_28434);

(statearr_28569[(34)] = inst_28439);

return statearr_28569;
})();
var statearr_28570_28633 = state_28498__$1;
(statearr_28570_28633[(2)] = inst_28441);

(statearr_28570_28633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (16))){
var state_28498__$1 = state_28498;
var statearr_28571_28634 = state_28498__$1;
(statearr_28571_28634[(2)] = reload_dependents);

(statearr_28571_28634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (38))){
var inst_28451 = (state_28498[(16)]);
var inst_28469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28451);
var state_28498__$1 = state_28498;
var statearr_28572_28635 = state_28498__$1;
(statearr_28572_28635[(2)] = inst_28469);

(statearr_28572_28635[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (30))){
var state_28498__$1 = state_28498;
var statearr_28573_28636 = state_28498__$1;
(statearr_28573_28636[(2)] = null);

(statearr_28573_28636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (10))){
var inst_28371 = (state_28498[(22)]);
var inst_28373 = cljs.core.chunked_seq_QMARK_.call(null,inst_28371);
var state_28498__$1 = state_28498;
if(inst_28373){
var statearr_28574_28637 = state_28498__$1;
(statearr_28574_28637[(1)] = (13));

} else {
var statearr_28575_28638 = state_28498__$1;
(statearr_28575_28638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (18))){
var inst_28405 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
if(cljs.core.truth_(inst_28405)){
var statearr_28576_28639 = state_28498__$1;
(statearr_28576_28639[(1)] = (19));

} else {
var statearr_28577_28640 = state_28498__$1;
(statearr_28577_28640[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (42))){
var state_28498__$1 = state_28498;
var statearr_28578_28641 = state_28498__$1;
(statearr_28578_28641[(2)] = null);

(statearr_28578_28641[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (37))){
var inst_28464 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28579_28642 = state_28498__$1;
(statearr_28579_28642[(2)] = inst_28464);

(statearr_28579_28642[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (8))){
var inst_28371 = (state_28498[(22)]);
var inst_28358 = (state_28498[(10)]);
var inst_28371__$1 = cljs.core.seq.call(null,inst_28358);
var state_28498__$1 = (function (){var statearr_28580 = state_28498;
(statearr_28580[(22)] = inst_28371__$1);

return statearr_28580;
})();
if(inst_28371__$1){
var statearr_28581_28643 = state_28498__$1;
(statearr_28581_28643[(1)] = (10));

} else {
var statearr_28582_28644 = state_28498__$1;
(statearr_28582_28644[(1)] = (11));

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
});})(c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19495__auto__,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto____0 = (function (){
var statearr_28583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28583[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto__);

(statearr_28583[(1)] = (1));

return statearr_28583;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto____1 = (function (state_28498){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_28498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e28584){if((e28584 instanceof Object)){
var ex__19499__auto__ = e28584;
var statearr_28585_28645 = state_28498;
(statearr_28585_28645[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28646 = state_28498;
state_28498 = G__28646;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto__ = function(state_28498){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto____1.call(this,state_28498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19652__auto__ = (function (){var statearr_28586 = f__19651__auto__.call(null);
(statearr_28586[(6)] = c__19650__auto__);

return statearr_28586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto__,map__28343,map__28343__$1,opts,before_jsload,on_jsload,reload_dependents,map__28344,map__28344__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19650__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28649,link){
var map__28650 = p__28649;
var map__28650__$1 = ((((!((map__28650 == null)))?(((((map__28650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28650):map__28650);
var file = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28650,map__28650__$1,file){
return (function (p1__28647_SHARP_,p2__28648_SHARP_){
if(cljs.core._EQ_.call(null,p1__28647_SHARP_,p2__28648_SHARP_)){
return p1__28647_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28650,map__28650__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28653){
var map__28654 = p__28653;
var map__28654__$1 = ((((!((map__28654 == null)))?(((((map__28654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28654):map__28654);
var match_length = cljs.core.get.call(null,map__28654__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28654__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28652_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28652_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28656_SHARP_,p2__28657_SHARP_){
return cljs.core.assoc.call(null,p1__28656_SHARP_,cljs.core.get.call(null,p2__28657_SHARP_,key),p2__28657_SHARP_);
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
var loaded_f_datas_28658 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28658);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28658);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28659,p__28660){
var map__28661 = p__28659;
var map__28661__$1 = ((((!((map__28661 == null)))?(((((map__28661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28661):map__28661);
var on_cssload = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28662 = p__28660;
var map__28662__$1 = ((((!((map__28662 == null)))?(((((map__28662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28662):map__28662);
var files_msg = map__28662__$1;
var files = cljs.core.get.call(null,map__28662__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
