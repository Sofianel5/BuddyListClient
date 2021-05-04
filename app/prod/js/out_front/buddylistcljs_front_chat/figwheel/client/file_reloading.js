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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__6321_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__6321_SHARP_));
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
var seq__6322 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__6323 = null;
var count__6324 = (0);
var i__6325 = (0);
while(true){
if((i__6325 < count__6324)){
var n = cljs.core._nth.call(null,chunk__6323,i__6325);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__6326 = seq__6322;
var G__6327 = chunk__6323;
var G__6328 = count__6324;
var G__6329 = (i__6325 + (1));
seq__6322 = G__6326;
chunk__6323 = G__6327;
count__6324 = G__6328;
i__6325 = G__6329;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__6322);
if(temp__4657__auto__){
var seq__6322__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6322__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__6322__$1);
var G__6330 = cljs.core.chunk_rest.call(null,seq__6322__$1);
var G__6331 = c__4317__auto__;
var G__6332 = cljs.core.count.call(null,c__4317__auto__);
var G__6333 = (0);
seq__6322 = G__6330;
chunk__6323 = G__6331;
count__6324 = G__6332;
i__6325 = G__6333;
continue;
} else {
var n = cljs.core.first.call(null,seq__6322__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__6334 = cljs.core.next.call(null,seq__6322__$1);
var G__6335 = null;
var G__6336 = (0);
var G__6337 = (0);
seq__6322 = G__6334;
chunk__6323 = G__6335;
count__6324 = G__6336;
i__6325 = G__6337;
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

var seq__6347_6355 = cljs.core.seq.call(null,deps);
var chunk__6348_6356 = null;
var count__6349_6357 = (0);
var i__6350_6358 = (0);
while(true){
if((i__6350_6358 < count__6349_6357)){
var dep_6359 = cljs.core._nth.call(null,chunk__6348_6356,i__6350_6358);
topo_sort_helper_STAR_.call(null,dep_6359,(depth + (1)),state);


var G__6360 = seq__6347_6355;
var G__6361 = chunk__6348_6356;
var G__6362 = count__6349_6357;
var G__6363 = (i__6350_6358 + (1));
seq__6347_6355 = G__6360;
chunk__6348_6356 = G__6361;
count__6349_6357 = G__6362;
i__6350_6358 = G__6363;
continue;
} else {
var temp__4657__auto___6364 = cljs.core.seq.call(null,seq__6347_6355);
if(temp__4657__auto___6364){
var seq__6347_6365__$1 = temp__4657__auto___6364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6347_6365__$1)){
var c__4317__auto___6366 = cljs.core.chunk_first.call(null,seq__6347_6365__$1);
var G__6367 = cljs.core.chunk_rest.call(null,seq__6347_6365__$1);
var G__6368 = c__4317__auto___6366;
var G__6369 = cljs.core.count.call(null,c__4317__auto___6366);
var G__6370 = (0);
seq__6347_6355 = G__6367;
chunk__6348_6356 = G__6368;
count__6349_6357 = G__6369;
i__6350_6358 = G__6370;
continue;
} else {
var dep_6371 = cljs.core.first.call(null,seq__6347_6365__$1);
topo_sort_helper_STAR_.call(null,dep_6371,(depth + (1)),state);


var G__6372 = cljs.core.next.call(null,seq__6347_6365__$1);
var G__6373 = null;
var G__6374 = (0);
var G__6375 = (0);
seq__6347_6355 = G__6372;
chunk__6348_6356 = G__6373;
count__6349_6357 = G__6374;
i__6350_6358 = G__6375;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__6351){
var vec__6352 = p__6351;
var seq__6353 = cljs.core.seq.call(null,vec__6352);
var first__6354 = cljs.core.first.call(null,seq__6353);
var seq__6353__$1 = cljs.core.next.call(null,seq__6353);
var x = first__6354;
var xs = seq__6353__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__6352,seq__6353,first__6354,seq__6353__$1,x,xs,get_deps__$1){
return (function (p1__6338_SHARP_){
return clojure.set.difference.call(null,p1__6338_SHARP_,x);
});})(vec__6352,seq__6353,first__6354,seq__6353__$1,x,xs,get_deps__$1))
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
var seq__6376 = cljs.core.seq.call(null,provides);
var chunk__6377 = null;
var count__6378 = (0);
var i__6379 = (0);
while(true){
if((i__6379 < count__6378)){
var prov = cljs.core._nth.call(null,chunk__6377,i__6379);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__6380_6388 = cljs.core.seq.call(null,requires);
var chunk__6381_6389 = null;
var count__6382_6390 = (0);
var i__6383_6391 = (0);
while(true){
if((i__6383_6391 < count__6382_6390)){
var req_6392 = cljs.core._nth.call(null,chunk__6381_6389,i__6383_6391);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_6392,prov);


var G__6393 = seq__6380_6388;
var G__6394 = chunk__6381_6389;
var G__6395 = count__6382_6390;
var G__6396 = (i__6383_6391 + (1));
seq__6380_6388 = G__6393;
chunk__6381_6389 = G__6394;
count__6382_6390 = G__6395;
i__6383_6391 = G__6396;
continue;
} else {
var temp__4657__auto___6397 = cljs.core.seq.call(null,seq__6380_6388);
if(temp__4657__auto___6397){
var seq__6380_6398__$1 = temp__4657__auto___6397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6380_6398__$1)){
var c__4317__auto___6399 = cljs.core.chunk_first.call(null,seq__6380_6398__$1);
var G__6400 = cljs.core.chunk_rest.call(null,seq__6380_6398__$1);
var G__6401 = c__4317__auto___6399;
var G__6402 = cljs.core.count.call(null,c__4317__auto___6399);
var G__6403 = (0);
seq__6380_6388 = G__6400;
chunk__6381_6389 = G__6401;
count__6382_6390 = G__6402;
i__6383_6391 = G__6403;
continue;
} else {
var req_6404 = cljs.core.first.call(null,seq__6380_6398__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_6404,prov);


var G__6405 = cljs.core.next.call(null,seq__6380_6398__$1);
var G__6406 = null;
var G__6407 = (0);
var G__6408 = (0);
seq__6380_6388 = G__6405;
chunk__6381_6389 = G__6406;
count__6382_6390 = G__6407;
i__6383_6391 = G__6408;
continue;
}
} else {
}
}
break;
}


var G__6409 = seq__6376;
var G__6410 = chunk__6377;
var G__6411 = count__6378;
var G__6412 = (i__6379 + (1));
seq__6376 = G__6409;
chunk__6377 = G__6410;
count__6378 = G__6411;
i__6379 = G__6412;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__6376);
if(temp__4657__auto__){
var seq__6376__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6376__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__6376__$1);
var G__6413 = cljs.core.chunk_rest.call(null,seq__6376__$1);
var G__6414 = c__4317__auto__;
var G__6415 = cljs.core.count.call(null,c__4317__auto__);
var G__6416 = (0);
seq__6376 = G__6413;
chunk__6377 = G__6414;
count__6378 = G__6415;
i__6379 = G__6416;
continue;
} else {
var prov = cljs.core.first.call(null,seq__6376__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__6384_6417 = cljs.core.seq.call(null,requires);
var chunk__6385_6418 = null;
var count__6386_6419 = (0);
var i__6387_6420 = (0);
while(true){
if((i__6387_6420 < count__6386_6419)){
var req_6421 = cljs.core._nth.call(null,chunk__6385_6418,i__6387_6420);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_6421,prov);


var G__6422 = seq__6384_6417;
var G__6423 = chunk__6385_6418;
var G__6424 = count__6386_6419;
var G__6425 = (i__6387_6420 + (1));
seq__6384_6417 = G__6422;
chunk__6385_6418 = G__6423;
count__6386_6419 = G__6424;
i__6387_6420 = G__6425;
continue;
} else {
var temp__4657__auto___6426__$1 = cljs.core.seq.call(null,seq__6384_6417);
if(temp__4657__auto___6426__$1){
var seq__6384_6427__$1 = temp__4657__auto___6426__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6384_6427__$1)){
var c__4317__auto___6428 = cljs.core.chunk_first.call(null,seq__6384_6427__$1);
var G__6429 = cljs.core.chunk_rest.call(null,seq__6384_6427__$1);
var G__6430 = c__4317__auto___6428;
var G__6431 = cljs.core.count.call(null,c__4317__auto___6428);
var G__6432 = (0);
seq__6384_6417 = G__6429;
chunk__6385_6418 = G__6430;
count__6386_6419 = G__6431;
i__6387_6420 = G__6432;
continue;
} else {
var req_6433 = cljs.core.first.call(null,seq__6384_6427__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_6433,prov);


var G__6434 = cljs.core.next.call(null,seq__6384_6427__$1);
var G__6435 = null;
var G__6436 = (0);
var G__6437 = (0);
seq__6384_6417 = G__6434;
chunk__6385_6418 = G__6435;
count__6386_6419 = G__6436;
i__6387_6420 = G__6437;
continue;
}
} else {
}
}
break;
}


var G__6438 = cljs.core.next.call(null,seq__6376__$1);
var G__6439 = null;
var G__6440 = (0);
var G__6441 = (0);
seq__6376 = G__6438;
chunk__6377 = G__6439;
count__6378 = G__6440;
i__6379 = G__6441;
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
var seq__6442_6446 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__6443_6447 = null;
var count__6444_6448 = (0);
var i__6445_6449 = (0);
while(true){
if((i__6445_6449 < count__6444_6448)){
var ns_6450 = cljs.core._nth.call(null,chunk__6443_6447,i__6445_6449);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_6450);


var G__6451 = seq__6442_6446;
var G__6452 = chunk__6443_6447;
var G__6453 = count__6444_6448;
var G__6454 = (i__6445_6449 + (1));
seq__6442_6446 = G__6451;
chunk__6443_6447 = G__6452;
count__6444_6448 = G__6453;
i__6445_6449 = G__6454;
continue;
} else {
var temp__4657__auto___6455 = cljs.core.seq.call(null,seq__6442_6446);
if(temp__4657__auto___6455){
var seq__6442_6456__$1 = temp__4657__auto___6455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6442_6456__$1)){
var c__4317__auto___6457 = cljs.core.chunk_first.call(null,seq__6442_6456__$1);
var G__6458 = cljs.core.chunk_rest.call(null,seq__6442_6456__$1);
var G__6459 = c__4317__auto___6457;
var G__6460 = cljs.core.count.call(null,c__4317__auto___6457);
var G__6461 = (0);
seq__6442_6446 = G__6458;
chunk__6443_6447 = G__6459;
count__6444_6448 = G__6460;
i__6445_6449 = G__6461;
continue;
} else {
var ns_6462 = cljs.core.first.call(null,seq__6442_6456__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_6462);


var G__6463 = cljs.core.next.call(null,seq__6442_6456__$1);
var G__6464 = null;
var G__6465 = (0);
var G__6466 = (0);
seq__6442_6446 = G__6463;
chunk__6443_6447 = G__6464;
count__6444_6448 = G__6465;
i__6445_6449 = G__6466;
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
var G__6467__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__6467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6468__i = 0, G__6468__a = new Array(arguments.length -  0);
while (G__6468__i < G__6468__a.length) {G__6468__a[G__6468__i] = arguments[G__6468__i + 0]; ++G__6468__i;}
  args = new cljs.core.IndexedSeq(G__6468__a,0,null);
} 
return G__6467__delegate.call(this,args);};
G__6467.cljs$lang$maxFixedArity = 0;
G__6467.cljs$lang$applyTo = (function (arglist__6469){
var args = cljs.core.seq(arglist__6469);
return G__6467__delegate(args);
});
G__6467.cljs$core$IFn$_invoke$arity$variadic = G__6467__delegate;
return G__6467;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__6470 = cljs.core._EQ_;
var expr__6471 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__6470.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__6471))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__6470,expr__6471){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__6470,expr__6471))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__6470,expr__6471){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e6473){if((e6473 instanceof Error)){
var e = e6473;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e6473;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__6470,expr__6471))
} else {
if(cljs.core.truth_(pred__6470.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__6471))){
return ((function (pred__6470,expr__6471){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__6470,expr__6471){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__6470,expr__6471))
);

return deferred.addErrback(((function (deferred,pred__6470,expr__6471){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__6470,expr__6471))
);
});
;})(pred__6470,expr__6471))
} else {
if(cljs.core.truth_(pred__6470.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__6471))){
return ((function (pred__6470,expr__6471){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e6474){if((e6474 instanceof Error)){
var e = e6474;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e6474;

}
}})());
});
;})(pred__6470,expr__6471))
} else {
return ((function (pred__6470,expr__6471){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__6470,expr__6471))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__6475,callback){
var map__6476 = p__6475;
var map__6476__$1 = ((((!((map__6476 == null)))?(((((map__6476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6476):map__6476);
var file_msg = map__6476__$1;
var request_url = cljs.core.get.call(null,map__6476__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__6476,map__6476__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__6476,map__6476__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__4186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4186__auto__){
return (function (){
var f__4187__auto__ = (function (){var switch__4142__auto__ = ((function (c__4186__auto__){
return (function (state_6500){
var state_val_6501 = (state_6500[(1)]);
if((state_val_6501 === (7))){
var inst_6496 = (state_6500[(2)]);
var state_6500__$1 = state_6500;
var statearr_6502_6519 = state_6500__$1;
(statearr_6502_6519[(2)] = inst_6496);

(statearr_6502_6519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6501 === (1))){
var state_6500__$1 = state_6500;
var statearr_6503_6520 = state_6500__$1;
(statearr_6503_6520[(2)] = null);

(statearr_6503_6520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6501 === (4))){
var inst_6480 = (state_6500[(7)]);
var inst_6480__$1 = (state_6500[(2)]);
var state_6500__$1 = (function (){var statearr_6504 = state_6500;
(statearr_6504[(7)] = inst_6480__$1);

return statearr_6504;
})();
if(cljs.core.truth_(inst_6480__$1)){
var statearr_6505_6521 = state_6500__$1;
(statearr_6505_6521[(1)] = (5));

} else {
var statearr_6506_6522 = state_6500__$1;
(statearr_6506_6522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6501 === (6))){
var state_6500__$1 = state_6500;
var statearr_6507_6523 = state_6500__$1;
(statearr_6507_6523[(2)] = null);

(statearr_6507_6523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6501 === (3))){
var inst_6498 = (state_6500[(2)]);
var state_6500__$1 = state_6500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6500__$1,inst_6498);
} else {
if((state_val_6501 === (2))){
var state_6500__$1 = state_6500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6500__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_6501 === (11))){
var inst_6492 = (state_6500[(2)]);
var state_6500__$1 = (function (){var statearr_6508 = state_6500;
(statearr_6508[(8)] = inst_6492);

return statearr_6508;
})();
var statearr_6509_6524 = state_6500__$1;
(statearr_6509_6524[(2)] = null);

(statearr_6509_6524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6501 === (9))){
var inst_6486 = (state_6500[(9)]);
var inst_6484 = (state_6500[(10)]);
var inst_6488 = inst_6486.call(null,inst_6484);
var state_6500__$1 = state_6500;
var statearr_6510_6525 = state_6500__$1;
(statearr_6510_6525[(2)] = inst_6488);

(statearr_6510_6525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6501 === (5))){
var inst_6480 = (state_6500[(7)]);
var inst_6482 = figwheel.client.file_reloading.blocking_load.call(null,inst_6480);
var state_6500__$1 = state_6500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6500__$1,(8),inst_6482);
} else {
if((state_val_6501 === (10))){
var inst_6484 = (state_6500[(10)]);
var inst_6490 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_6484);
var state_6500__$1 = state_6500;
var statearr_6511_6526 = state_6500__$1;
(statearr_6511_6526[(2)] = inst_6490);

(statearr_6511_6526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6501 === (8))){
var inst_6486 = (state_6500[(9)]);
var inst_6480 = (state_6500[(7)]);
var inst_6484 = (state_6500[(2)]);
var inst_6485 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_6486__$1 = cljs.core.get.call(null,inst_6485,inst_6480);
var state_6500__$1 = (function (){var statearr_6512 = state_6500;
(statearr_6512[(9)] = inst_6486__$1);

(statearr_6512[(10)] = inst_6484);

return statearr_6512;
})();
if(cljs.core.truth_(inst_6486__$1)){
var statearr_6513_6527 = state_6500__$1;
(statearr_6513_6527[(1)] = (9));

} else {
var statearr_6514_6528 = state_6500__$1;
(statearr_6514_6528[(1)] = (10));

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
});})(c__4186__auto__))
;
return ((function (switch__4142__auto__,c__4186__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__4143__auto__ = null;
var figwheel$client$file_reloading$state_machine__4143__auto____0 = (function (){
var statearr_6515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6515[(0)] = figwheel$client$file_reloading$state_machine__4143__auto__);

(statearr_6515[(1)] = (1));

return statearr_6515;
});
var figwheel$client$file_reloading$state_machine__4143__auto____1 = (function (state_6500){
while(true){
var ret_value__4144__auto__ = (function (){try{while(true){
var result__4145__auto__ = switch__4142__auto__.call(null,state_6500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4145__auto__;
}
break;
}
}catch (e6516){if((e6516 instanceof Object)){
var ex__4146__auto__ = e6516;
var statearr_6517_6529 = state_6500;
(statearr_6517_6529[(5)] = ex__4146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6530 = state_6500;
state_6500 = G__6530;
continue;
} else {
return ret_value__4144__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__4143__auto__ = function(state_6500){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__4143__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__4143__auto____1.call(this,state_6500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__4143__auto____0;
figwheel$client$file_reloading$state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__4143__auto____1;
return figwheel$client$file_reloading$state_machine__4143__auto__;
})()
;})(switch__4142__auto__,c__4186__auto__))
})();
var state__4188__auto__ = (function (){var statearr_6518 = f__4187__auto__.call(null);
(statearr_6518[(6)] = c__4186__auto__);

return statearr_6518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4188__auto__);
});})(c__4186__auto__))
);

return c__4186__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__6531,callback){
var map__6532 = p__6531;
var map__6532__$1 = ((((!((map__6532 == null)))?(((((map__6532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6532):map__6532);
var file_msg = map__6532__$1;
var namespace = cljs.core.get.call(null,map__6532__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__6532,map__6532__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__6532,map__6532__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__6534){
var map__6535 = p__6534;
var map__6535__$1 = ((((!((map__6535 == null)))?(((((map__6535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6535):map__6535);
var file_msg = map__6535__$1;
var namespace = cljs.core.get.call(null,map__6535__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__6537){
var map__6538 = p__6537;
var map__6538__$1 = ((((!((map__6538 == null)))?(((((map__6538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6538):map__6538);
var file_msg = map__6538__$1;
var namespace = cljs.core.get.call(null,map__6538__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__6540,callback){
var map__6541 = p__6540;
var map__6541__$1 = ((((!((map__6541 == null)))?(((((map__6541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6541):map__6541);
var file_msg = map__6541__$1;
var request_url = cljs.core.get.call(null,map__6541__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__6541__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__4186__auto___6591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4186__auto___6591,out){
return (function (){
var f__4187__auto__ = (function (){var switch__4142__auto__ = ((function (c__4186__auto___6591,out){
return (function (state_6576){
var state_val_6577 = (state_6576[(1)]);
if((state_val_6577 === (1))){
var inst_6550 = cljs.core.seq.call(null,files);
var inst_6551 = cljs.core.first.call(null,inst_6550);
var inst_6552 = cljs.core.next.call(null,inst_6550);
var inst_6553 = files;
var state_6576__$1 = (function (){var statearr_6578 = state_6576;
(statearr_6578[(7)] = inst_6551);

(statearr_6578[(8)] = inst_6552);

(statearr_6578[(9)] = inst_6553);

return statearr_6578;
})();
var statearr_6579_6592 = state_6576__$1;
(statearr_6579_6592[(2)] = null);

(statearr_6579_6592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6577 === (2))){
var inst_6559 = (state_6576[(10)]);
var inst_6553 = (state_6576[(9)]);
var inst_6558 = cljs.core.seq.call(null,inst_6553);
var inst_6559__$1 = cljs.core.first.call(null,inst_6558);
var inst_6560 = cljs.core.next.call(null,inst_6558);
var inst_6561 = (inst_6559__$1 == null);
var inst_6562 = cljs.core.not.call(null,inst_6561);
var state_6576__$1 = (function (){var statearr_6580 = state_6576;
(statearr_6580[(11)] = inst_6560);

(statearr_6580[(10)] = inst_6559__$1);

return statearr_6580;
})();
if(inst_6562){
var statearr_6581_6593 = state_6576__$1;
(statearr_6581_6593[(1)] = (4));

} else {
var statearr_6582_6594 = state_6576__$1;
(statearr_6582_6594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6577 === (3))){
var inst_6574 = (state_6576[(2)]);
var state_6576__$1 = state_6576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6576__$1,inst_6574);
} else {
if((state_val_6577 === (4))){
var inst_6559 = (state_6576[(10)]);
var inst_6564 = figwheel.client.file_reloading.reload_js_file.call(null,inst_6559);
var state_6576__$1 = state_6576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6576__$1,(7),inst_6564);
} else {
if((state_val_6577 === (5))){
var inst_6570 = cljs.core.async.close_BANG_.call(null,out);
var state_6576__$1 = state_6576;
var statearr_6583_6595 = state_6576__$1;
(statearr_6583_6595[(2)] = inst_6570);

(statearr_6583_6595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6577 === (6))){
var inst_6572 = (state_6576[(2)]);
var state_6576__$1 = state_6576;
var statearr_6584_6596 = state_6576__$1;
(statearr_6584_6596[(2)] = inst_6572);

(statearr_6584_6596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6577 === (7))){
var inst_6560 = (state_6576[(11)]);
var inst_6566 = (state_6576[(2)]);
var inst_6567 = cljs.core.async.put_BANG_.call(null,out,inst_6566);
var inst_6553 = inst_6560;
var state_6576__$1 = (function (){var statearr_6585 = state_6576;
(statearr_6585[(12)] = inst_6567);

(statearr_6585[(9)] = inst_6553);

return statearr_6585;
})();
var statearr_6586_6597 = state_6576__$1;
(statearr_6586_6597[(2)] = null);

(statearr_6586_6597[(1)] = (2));


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
});})(c__4186__auto___6591,out))
;
return ((function (switch__4142__auto__,c__4186__auto___6591,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto____0 = (function (){
var statearr_6587 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6587[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto__);

(statearr_6587[(1)] = (1));

return statearr_6587;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto____1 = (function (state_6576){
while(true){
var ret_value__4144__auto__ = (function (){try{while(true){
var result__4145__auto__ = switch__4142__auto__.call(null,state_6576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4145__auto__;
}
break;
}
}catch (e6588){if((e6588 instanceof Object)){
var ex__4146__auto__ = e6588;
var statearr_6589_6598 = state_6576;
(statearr_6589_6598[(5)] = ex__4146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6599 = state_6576;
state_6576 = G__6599;
continue;
} else {
return ret_value__4144__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto__ = function(state_6576){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto____1.call(this,state_6576);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__4143__auto__;
})()
;})(switch__4142__auto__,c__4186__auto___6591,out))
})();
var state__4188__auto__ = (function (){var statearr_6590 = f__4187__auto__.call(null);
(statearr_6590[(6)] = c__4186__auto___6591);

return statearr_6590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4188__auto__);
});})(c__4186__auto___6591,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__6600,opts){
var map__6601 = p__6600;
var map__6601__$1 = ((((!((map__6601 == null)))?(((((map__6601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6601):map__6601);
var eval_body = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e6603){var e = e6603;
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
return (function (p1__6604_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__6604_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__6605){
var vec__6606 = p__6605;
var k = cljs.core.nth.call(null,vec__6606,(0),null);
var v = cljs.core.nth.call(null,vec__6606,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__6609){
var vec__6610 = p__6609;
var k = cljs.core.nth.call(null,vec__6610,(0),null);
var v = cljs.core.nth.call(null,vec__6610,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__6616,p__6617){
var map__6618 = p__6616;
var map__6618__$1 = ((((!((map__6618 == null)))?(((((map__6618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6618):map__6618);
var opts = map__6618__$1;
var before_jsload = cljs.core.get.call(null,map__6618__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__6618__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__6618__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__6619 = p__6617;
var map__6619__$1 = ((((!((map__6619 == null)))?(((((map__6619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6619):map__6619);
var msg = map__6619__$1;
var files = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__4186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__4187__auto__ = (function (){var switch__4142__auto__ = ((function (c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_6773){
var state_val_6774 = (state_6773[(1)]);
if((state_val_6774 === (7))){
var inst_6633 = (state_6773[(7)]);
var inst_6635 = (state_6773[(8)]);
var inst_6634 = (state_6773[(9)]);
var inst_6636 = (state_6773[(10)]);
var inst_6641 = cljs.core._nth.call(null,inst_6634,inst_6636);
var inst_6642 = figwheel.client.file_reloading.eval_body.call(null,inst_6641,opts);
var inst_6643 = (inst_6636 + (1));
var tmp6775 = inst_6633;
var tmp6776 = inst_6635;
var tmp6777 = inst_6634;
var inst_6633__$1 = tmp6775;
var inst_6634__$1 = tmp6777;
var inst_6635__$1 = tmp6776;
var inst_6636__$1 = inst_6643;
var state_6773__$1 = (function (){var statearr_6778 = state_6773;
(statearr_6778[(11)] = inst_6642);

(statearr_6778[(7)] = inst_6633__$1);

(statearr_6778[(8)] = inst_6635__$1);

(statearr_6778[(9)] = inst_6634__$1);

(statearr_6778[(10)] = inst_6636__$1);

return statearr_6778;
})();
var statearr_6779_6862 = state_6773__$1;
(statearr_6779_6862[(2)] = null);

(statearr_6779_6862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (20))){
var inst_6676 = (state_6773[(12)]);
var inst_6684 = figwheel.client.file_reloading.sort_files.call(null,inst_6676);
var state_6773__$1 = state_6773;
var statearr_6780_6863 = state_6773__$1;
(statearr_6780_6863[(2)] = inst_6684);

(statearr_6780_6863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (27))){
var state_6773__$1 = state_6773;
var statearr_6781_6864 = state_6773__$1;
(statearr_6781_6864[(2)] = null);

(statearr_6781_6864[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (1))){
var inst_6625 = (state_6773[(13)]);
var inst_6622 = before_jsload.call(null,files);
var inst_6623 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_6624 = (function (){return ((function (inst_6625,inst_6622,inst_6623,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__6613_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__6613_SHARP_);
});
;})(inst_6625,inst_6622,inst_6623,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_6625__$1 = cljs.core.filter.call(null,inst_6624,files);
var inst_6626 = cljs.core.not_empty.call(null,inst_6625__$1);
var state_6773__$1 = (function (){var statearr_6782 = state_6773;
(statearr_6782[(14)] = inst_6622);

(statearr_6782[(15)] = inst_6623);

(statearr_6782[(13)] = inst_6625__$1);

return statearr_6782;
})();
if(cljs.core.truth_(inst_6626)){
var statearr_6783_6865 = state_6773__$1;
(statearr_6783_6865[(1)] = (2));

} else {
var statearr_6784_6866 = state_6773__$1;
(statearr_6784_6866[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (24))){
var state_6773__$1 = state_6773;
var statearr_6785_6867 = state_6773__$1;
(statearr_6785_6867[(2)] = null);

(statearr_6785_6867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (39))){
var inst_6726 = (state_6773[(16)]);
var state_6773__$1 = state_6773;
var statearr_6786_6868 = state_6773__$1;
(statearr_6786_6868[(2)] = inst_6726);

(statearr_6786_6868[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (46))){
var inst_6768 = (state_6773[(2)]);
var state_6773__$1 = state_6773;
var statearr_6787_6869 = state_6773__$1;
(statearr_6787_6869[(2)] = inst_6768);

(statearr_6787_6869[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (4))){
var inst_6670 = (state_6773[(2)]);
var inst_6671 = cljs.core.List.EMPTY;
var inst_6672 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_6671);
var inst_6673 = (function (){return ((function (inst_6670,inst_6671,inst_6672,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__6614_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__6614_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__6614_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__6614_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_6670,inst_6671,inst_6672,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_6674 = cljs.core.filter.call(null,inst_6673,files);
var inst_6675 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_6676 = cljs.core.concat.call(null,inst_6674,inst_6675);
var state_6773__$1 = (function (){var statearr_6788 = state_6773;
(statearr_6788[(17)] = inst_6672);

(statearr_6788[(12)] = inst_6676);

(statearr_6788[(18)] = inst_6670);

return statearr_6788;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_6789_6870 = state_6773__$1;
(statearr_6789_6870[(1)] = (16));

} else {
var statearr_6790_6871 = state_6773__$1;
(statearr_6790_6871[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (15))){
var inst_6660 = (state_6773[(2)]);
var state_6773__$1 = state_6773;
var statearr_6791_6872 = state_6773__$1;
(statearr_6791_6872[(2)] = inst_6660);

(statearr_6791_6872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (21))){
var inst_6686 = (state_6773[(19)]);
var inst_6686__$1 = (state_6773[(2)]);
var inst_6687 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_6686__$1);
var state_6773__$1 = (function (){var statearr_6792 = state_6773;
(statearr_6792[(19)] = inst_6686__$1);

return statearr_6792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6773__$1,(22),inst_6687);
} else {
if((state_val_6774 === (31))){
var inst_6771 = (state_6773[(2)]);
var state_6773__$1 = state_6773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6773__$1,inst_6771);
} else {
if((state_val_6774 === (32))){
var inst_6726 = (state_6773[(16)]);
var inst_6731 = inst_6726.cljs$lang$protocol_mask$partition0$;
var inst_6732 = (inst_6731 & (64));
var inst_6733 = inst_6726.cljs$core$ISeq$;
var inst_6734 = (cljs.core.PROTOCOL_SENTINEL === inst_6733);
var inst_6735 = ((inst_6732) || (inst_6734));
var state_6773__$1 = state_6773;
if(cljs.core.truth_(inst_6735)){
var statearr_6793_6873 = state_6773__$1;
(statearr_6793_6873[(1)] = (35));

} else {
var statearr_6794_6874 = state_6773__$1;
(statearr_6794_6874[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (40))){
var inst_6748 = (state_6773[(20)]);
var inst_6747 = (state_6773[(2)]);
var inst_6748__$1 = cljs.core.get.call(null,inst_6747,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_6749 = cljs.core.get.call(null,inst_6747,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_6750 = cljs.core.not_empty.call(null,inst_6748__$1);
var state_6773__$1 = (function (){var statearr_6795 = state_6773;
(statearr_6795[(20)] = inst_6748__$1);

(statearr_6795[(21)] = inst_6749);

return statearr_6795;
})();
if(cljs.core.truth_(inst_6750)){
var statearr_6796_6875 = state_6773__$1;
(statearr_6796_6875[(1)] = (41));

} else {
var statearr_6797_6876 = state_6773__$1;
(statearr_6797_6876[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (33))){
var state_6773__$1 = state_6773;
var statearr_6798_6877 = state_6773__$1;
(statearr_6798_6877[(2)] = false);

(statearr_6798_6877[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (13))){
var inst_6646 = (state_6773[(22)]);
var inst_6650 = cljs.core.chunk_first.call(null,inst_6646);
var inst_6651 = cljs.core.chunk_rest.call(null,inst_6646);
var inst_6652 = cljs.core.count.call(null,inst_6650);
var inst_6633 = inst_6651;
var inst_6634 = inst_6650;
var inst_6635 = inst_6652;
var inst_6636 = (0);
var state_6773__$1 = (function (){var statearr_6799 = state_6773;
(statearr_6799[(7)] = inst_6633);

(statearr_6799[(8)] = inst_6635);

(statearr_6799[(9)] = inst_6634);

(statearr_6799[(10)] = inst_6636);

return statearr_6799;
})();
var statearr_6800_6878 = state_6773__$1;
(statearr_6800_6878[(2)] = null);

(statearr_6800_6878[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (22))){
var inst_6694 = (state_6773[(23)]);
var inst_6686 = (state_6773[(19)]);
var inst_6689 = (state_6773[(24)]);
var inst_6690 = (state_6773[(25)]);
var inst_6689__$1 = (state_6773[(2)]);
var inst_6690__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_6689__$1);
var inst_6691 = (function (){var all_files = inst_6686;
var res_SINGLEQUOTE_ = inst_6689__$1;
var res = inst_6690__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_6694,inst_6686,inst_6689,inst_6690,inst_6689__$1,inst_6690__$1,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__6615_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__6615_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_6694,inst_6686,inst_6689,inst_6690,inst_6689__$1,inst_6690__$1,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_6692 = cljs.core.filter.call(null,inst_6691,inst_6689__$1);
var inst_6693 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_6694__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_6693);
var inst_6695 = cljs.core.not_empty.call(null,inst_6694__$1);
var state_6773__$1 = (function (){var statearr_6801 = state_6773;
(statearr_6801[(23)] = inst_6694__$1);

(statearr_6801[(24)] = inst_6689__$1);

(statearr_6801[(25)] = inst_6690__$1);

(statearr_6801[(26)] = inst_6692);

return statearr_6801;
})();
if(cljs.core.truth_(inst_6695)){
var statearr_6802_6879 = state_6773__$1;
(statearr_6802_6879[(1)] = (23));

} else {
var statearr_6803_6880 = state_6773__$1;
(statearr_6803_6880[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (36))){
var state_6773__$1 = state_6773;
var statearr_6804_6881 = state_6773__$1;
(statearr_6804_6881[(2)] = false);

(statearr_6804_6881[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (41))){
var inst_6748 = (state_6773[(20)]);
var inst_6752 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_6753 = cljs.core.map.call(null,inst_6752,inst_6748);
var inst_6754 = cljs.core.pr_str.call(null,inst_6753);
var inst_6755 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_6754)].join('');
var inst_6756 = figwheel.client.utils.log.call(null,inst_6755);
var state_6773__$1 = state_6773;
var statearr_6805_6882 = state_6773__$1;
(statearr_6805_6882[(2)] = inst_6756);

(statearr_6805_6882[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (43))){
var inst_6749 = (state_6773[(21)]);
var inst_6759 = (state_6773[(2)]);
var inst_6760 = cljs.core.not_empty.call(null,inst_6749);
var state_6773__$1 = (function (){var statearr_6806 = state_6773;
(statearr_6806[(27)] = inst_6759);

return statearr_6806;
})();
if(cljs.core.truth_(inst_6760)){
var statearr_6807_6883 = state_6773__$1;
(statearr_6807_6883[(1)] = (44));

} else {
var statearr_6808_6884 = state_6773__$1;
(statearr_6808_6884[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (29))){
var inst_6694 = (state_6773[(23)]);
var inst_6686 = (state_6773[(19)]);
var inst_6689 = (state_6773[(24)]);
var inst_6690 = (state_6773[(25)]);
var inst_6726 = (state_6773[(16)]);
var inst_6692 = (state_6773[(26)]);
var inst_6722 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_6725 = (function (){var all_files = inst_6686;
var res_SINGLEQUOTE_ = inst_6689;
var res = inst_6690;
var files_not_loaded = inst_6692;
var dependencies_that_loaded = inst_6694;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_6694,inst_6686,inst_6689,inst_6690,inst_6726,inst_6692,inst_6722,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__6724){
var map__6809 = p__6724;
var map__6809__$1 = ((((!((map__6809 == null)))?(((((map__6809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6809):map__6809);
var namespace = cljs.core.get.call(null,map__6809__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_6694,inst_6686,inst_6689,inst_6690,inst_6726,inst_6692,inst_6722,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_6726__$1 = cljs.core.group_by.call(null,inst_6725,inst_6692);
var inst_6728 = (inst_6726__$1 == null);
var inst_6729 = cljs.core.not.call(null,inst_6728);
var state_6773__$1 = (function (){var statearr_6811 = state_6773;
(statearr_6811[(28)] = inst_6722);

(statearr_6811[(16)] = inst_6726__$1);

return statearr_6811;
})();
if(inst_6729){
var statearr_6812_6885 = state_6773__$1;
(statearr_6812_6885[(1)] = (32));

} else {
var statearr_6813_6886 = state_6773__$1;
(statearr_6813_6886[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (44))){
var inst_6749 = (state_6773[(21)]);
var inst_6762 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_6749);
var inst_6763 = cljs.core.pr_str.call(null,inst_6762);
var inst_6764 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_6763)].join('');
var inst_6765 = figwheel.client.utils.log.call(null,inst_6764);
var state_6773__$1 = state_6773;
var statearr_6814_6887 = state_6773__$1;
(statearr_6814_6887[(2)] = inst_6765);

(statearr_6814_6887[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (6))){
var inst_6667 = (state_6773[(2)]);
var state_6773__$1 = state_6773;
var statearr_6815_6888 = state_6773__$1;
(statearr_6815_6888[(2)] = inst_6667);

(statearr_6815_6888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (28))){
var inst_6692 = (state_6773[(26)]);
var inst_6719 = (state_6773[(2)]);
var inst_6720 = cljs.core.not_empty.call(null,inst_6692);
var state_6773__$1 = (function (){var statearr_6816 = state_6773;
(statearr_6816[(29)] = inst_6719);

return statearr_6816;
})();
if(cljs.core.truth_(inst_6720)){
var statearr_6817_6889 = state_6773__$1;
(statearr_6817_6889[(1)] = (29));

} else {
var statearr_6818_6890 = state_6773__$1;
(statearr_6818_6890[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (25))){
var inst_6690 = (state_6773[(25)]);
var inst_6706 = (state_6773[(2)]);
var inst_6707 = cljs.core.not_empty.call(null,inst_6690);
var state_6773__$1 = (function (){var statearr_6819 = state_6773;
(statearr_6819[(30)] = inst_6706);

return statearr_6819;
})();
if(cljs.core.truth_(inst_6707)){
var statearr_6820_6891 = state_6773__$1;
(statearr_6820_6891[(1)] = (26));

} else {
var statearr_6821_6892 = state_6773__$1;
(statearr_6821_6892[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (34))){
var inst_6742 = (state_6773[(2)]);
var state_6773__$1 = state_6773;
if(cljs.core.truth_(inst_6742)){
var statearr_6822_6893 = state_6773__$1;
(statearr_6822_6893[(1)] = (38));

} else {
var statearr_6823_6894 = state_6773__$1;
(statearr_6823_6894[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (17))){
var state_6773__$1 = state_6773;
var statearr_6824_6895 = state_6773__$1;
(statearr_6824_6895[(2)] = recompile_dependents);

(statearr_6824_6895[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (3))){
var state_6773__$1 = state_6773;
var statearr_6825_6896 = state_6773__$1;
(statearr_6825_6896[(2)] = null);

(statearr_6825_6896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (12))){
var inst_6663 = (state_6773[(2)]);
var state_6773__$1 = state_6773;
var statearr_6826_6897 = state_6773__$1;
(statearr_6826_6897[(2)] = inst_6663);

(statearr_6826_6897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (2))){
var inst_6625 = (state_6773[(13)]);
var inst_6632 = cljs.core.seq.call(null,inst_6625);
var inst_6633 = inst_6632;
var inst_6634 = null;
var inst_6635 = (0);
var inst_6636 = (0);
var state_6773__$1 = (function (){var statearr_6827 = state_6773;
(statearr_6827[(7)] = inst_6633);

(statearr_6827[(8)] = inst_6635);

(statearr_6827[(9)] = inst_6634);

(statearr_6827[(10)] = inst_6636);

return statearr_6827;
})();
var statearr_6828_6898 = state_6773__$1;
(statearr_6828_6898[(2)] = null);

(statearr_6828_6898[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (23))){
var inst_6694 = (state_6773[(23)]);
var inst_6686 = (state_6773[(19)]);
var inst_6689 = (state_6773[(24)]);
var inst_6690 = (state_6773[(25)]);
var inst_6692 = (state_6773[(26)]);
var inst_6697 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_6699 = (function (){var all_files = inst_6686;
var res_SINGLEQUOTE_ = inst_6689;
var res = inst_6690;
var files_not_loaded = inst_6692;
var dependencies_that_loaded = inst_6694;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_6694,inst_6686,inst_6689,inst_6690,inst_6692,inst_6697,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__6698){
var map__6829 = p__6698;
var map__6829__$1 = ((((!((map__6829 == null)))?(((((map__6829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6829):map__6829);
var request_url = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_6694,inst_6686,inst_6689,inst_6690,inst_6692,inst_6697,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_6700 = cljs.core.reverse.call(null,inst_6694);
var inst_6701 = cljs.core.map.call(null,inst_6699,inst_6700);
var inst_6702 = cljs.core.pr_str.call(null,inst_6701);
var inst_6703 = figwheel.client.utils.log.call(null,inst_6702);
var state_6773__$1 = (function (){var statearr_6831 = state_6773;
(statearr_6831[(31)] = inst_6697);

return statearr_6831;
})();
var statearr_6832_6899 = state_6773__$1;
(statearr_6832_6899[(2)] = inst_6703);

(statearr_6832_6899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (35))){
var state_6773__$1 = state_6773;
var statearr_6833_6900 = state_6773__$1;
(statearr_6833_6900[(2)] = true);

(statearr_6833_6900[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (19))){
var inst_6676 = (state_6773[(12)]);
var inst_6682 = figwheel.client.file_reloading.expand_files.call(null,inst_6676);
var state_6773__$1 = state_6773;
var statearr_6834_6901 = state_6773__$1;
(statearr_6834_6901[(2)] = inst_6682);

(statearr_6834_6901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (11))){
var state_6773__$1 = state_6773;
var statearr_6835_6902 = state_6773__$1;
(statearr_6835_6902[(2)] = null);

(statearr_6835_6902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (9))){
var inst_6665 = (state_6773[(2)]);
var state_6773__$1 = state_6773;
var statearr_6836_6903 = state_6773__$1;
(statearr_6836_6903[(2)] = inst_6665);

(statearr_6836_6903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (5))){
var inst_6635 = (state_6773[(8)]);
var inst_6636 = (state_6773[(10)]);
var inst_6638 = (inst_6636 < inst_6635);
var inst_6639 = inst_6638;
var state_6773__$1 = state_6773;
if(cljs.core.truth_(inst_6639)){
var statearr_6837_6904 = state_6773__$1;
(statearr_6837_6904[(1)] = (7));

} else {
var statearr_6838_6905 = state_6773__$1;
(statearr_6838_6905[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (14))){
var inst_6646 = (state_6773[(22)]);
var inst_6655 = cljs.core.first.call(null,inst_6646);
var inst_6656 = figwheel.client.file_reloading.eval_body.call(null,inst_6655,opts);
var inst_6657 = cljs.core.next.call(null,inst_6646);
var inst_6633 = inst_6657;
var inst_6634 = null;
var inst_6635 = (0);
var inst_6636 = (0);
var state_6773__$1 = (function (){var statearr_6839 = state_6773;
(statearr_6839[(7)] = inst_6633);

(statearr_6839[(8)] = inst_6635);

(statearr_6839[(32)] = inst_6656);

(statearr_6839[(9)] = inst_6634);

(statearr_6839[(10)] = inst_6636);

return statearr_6839;
})();
var statearr_6840_6906 = state_6773__$1;
(statearr_6840_6906[(2)] = null);

(statearr_6840_6906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (45))){
var state_6773__$1 = state_6773;
var statearr_6841_6907 = state_6773__$1;
(statearr_6841_6907[(2)] = null);

(statearr_6841_6907[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (26))){
var inst_6694 = (state_6773[(23)]);
var inst_6686 = (state_6773[(19)]);
var inst_6689 = (state_6773[(24)]);
var inst_6690 = (state_6773[(25)]);
var inst_6692 = (state_6773[(26)]);
var inst_6709 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_6711 = (function (){var all_files = inst_6686;
var res_SINGLEQUOTE_ = inst_6689;
var res = inst_6690;
var files_not_loaded = inst_6692;
var dependencies_that_loaded = inst_6694;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_6694,inst_6686,inst_6689,inst_6690,inst_6692,inst_6709,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__6710){
var map__6842 = p__6710;
var map__6842__$1 = ((((!((map__6842 == null)))?(((((map__6842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6842):map__6842);
var namespace = cljs.core.get.call(null,map__6842__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__6842__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_6694,inst_6686,inst_6689,inst_6690,inst_6692,inst_6709,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_6712 = cljs.core.map.call(null,inst_6711,inst_6690);
var inst_6713 = cljs.core.pr_str.call(null,inst_6712);
var inst_6714 = figwheel.client.utils.log.call(null,inst_6713);
var inst_6715 = (function (){var all_files = inst_6686;
var res_SINGLEQUOTE_ = inst_6689;
var res = inst_6690;
var files_not_loaded = inst_6692;
var dependencies_that_loaded = inst_6694;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_6694,inst_6686,inst_6689,inst_6690,inst_6692,inst_6709,inst_6711,inst_6712,inst_6713,inst_6714,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_6694,inst_6686,inst_6689,inst_6690,inst_6692,inst_6709,inst_6711,inst_6712,inst_6713,inst_6714,state_val_6774,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_6716 = setTimeout(inst_6715,(10));
var state_6773__$1 = (function (){var statearr_6844 = state_6773;
(statearr_6844[(33)] = inst_6714);

(statearr_6844[(34)] = inst_6709);

return statearr_6844;
})();
var statearr_6845_6908 = state_6773__$1;
(statearr_6845_6908[(2)] = inst_6716);

(statearr_6845_6908[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (16))){
var state_6773__$1 = state_6773;
var statearr_6846_6909 = state_6773__$1;
(statearr_6846_6909[(2)] = reload_dependents);

(statearr_6846_6909[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (38))){
var inst_6726 = (state_6773[(16)]);
var inst_6744 = cljs.core.apply.call(null,cljs.core.hash_map,inst_6726);
var state_6773__$1 = state_6773;
var statearr_6847_6910 = state_6773__$1;
(statearr_6847_6910[(2)] = inst_6744);

(statearr_6847_6910[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (30))){
var state_6773__$1 = state_6773;
var statearr_6848_6911 = state_6773__$1;
(statearr_6848_6911[(2)] = null);

(statearr_6848_6911[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (10))){
var inst_6646 = (state_6773[(22)]);
var inst_6648 = cljs.core.chunked_seq_QMARK_.call(null,inst_6646);
var state_6773__$1 = state_6773;
if(inst_6648){
var statearr_6849_6912 = state_6773__$1;
(statearr_6849_6912[(1)] = (13));

} else {
var statearr_6850_6913 = state_6773__$1;
(statearr_6850_6913[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (18))){
var inst_6680 = (state_6773[(2)]);
var state_6773__$1 = state_6773;
if(cljs.core.truth_(inst_6680)){
var statearr_6851_6914 = state_6773__$1;
(statearr_6851_6914[(1)] = (19));

} else {
var statearr_6852_6915 = state_6773__$1;
(statearr_6852_6915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (42))){
var state_6773__$1 = state_6773;
var statearr_6853_6916 = state_6773__$1;
(statearr_6853_6916[(2)] = null);

(statearr_6853_6916[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (37))){
var inst_6739 = (state_6773[(2)]);
var state_6773__$1 = state_6773;
var statearr_6854_6917 = state_6773__$1;
(statearr_6854_6917[(2)] = inst_6739);

(statearr_6854_6917[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6774 === (8))){
var inst_6633 = (state_6773[(7)]);
var inst_6646 = (state_6773[(22)]);
var inst_6646__$1 = cljs.core.seq.call(null,inst_6633);
var state_6773__$1 = (function (){var statearr_6855 = state_6773;
(statearr_6855[(22)] = inst_6646__$1);

return statearr_6855;
})();
if(inst_6646__$1){
var statearr_6856_6918 = state_6773__$1;
(statearr_6856_6918[(1)] = (10));

} else {
var statearr_6857_6919 = state_6773__$1;
(statearr_6857_6919[(1)] = (11));

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
});})(c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__4142__auto__,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto____0 = (function (){
var statearr_6858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6858[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto__);

(statearr_6858[(1)] = (1));

return statearr_6858;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto____1 = (function (state_6773){
while(true){
var ret_value__4144__auto__ = (function (){try{while(true){
var result__4145__auto__ = switch__4142__auto__.call(null,state_6773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4145__auto__;
}
break;
}
}catch (e6859){if((e6859 instanceof Object)){
var ex__4146__auto__ = e6859;
var statearr_6860_6920 = state_6773;
(statearr_6860_6920[(5)] = ex__4146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6921 = state_6773;
state_6773 = G__6921;
continue;
} else {
return ret_value__4144__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto__ = function(state_6773){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto____1.call(this,state_6773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__4143__auto__;
})()
;})(switch__4142__auto__,c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__4188__auto__ = (function (){var statearr_6861 = f__4187__auto__.call(null);
(statearr_6861[(6)] = c__4186__auto__);

return statearr_6861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4188__auto__);
});})(c__4186__auto__,map__6618,map__6618__$1,opts,before_jsload,on_jsload,reload_dependents,map__6619,map__6619__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__4186__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__6924,link){
var map__6925 = p__6924;
var map__6925__$1 = ((((!((map__6925 == null)))?(((((map__6925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6925):map__6925);
var file = cljs.core.get.call(null,map__6925__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__6925,map__6925__$1,file){
return (function (p1__6922_SHARP_,p2__6923_SHARP_){
if(cljs.core._EQ_.call(null,p1__6922_SHARP_,p2__6923_SHARP_)){
return p1__6922_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__6925,map__6925__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__6928){
var map__6929 = p__6928;
var map__6929__$1 = ((((!((map__6929 == null)))?(((((map__6929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6929):map__6929);
var match_length = cljs.core.get.call(null,map__6929__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__6929__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__6927_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__6927_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__6931_SHARP_,p2__6932_SHARP_){
return cljs.core.assoc.call(null,p1__6931_SHARP_,cljs.core.get.call(null,p2__6932_SHARP_,key),p2__6932_SHARP_);
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
var loaded_f_datas_6933 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_6933);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_6933);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__6934,p__6935){
var map__6936 = p__6934;
var map__6936__$1 = ((((!((map__6936 == null)))?(((((map__6936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6936):map__6936);
var on_cssload = cljs.core.get.call(null,map__6936__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__6937 = p__6935;
var map__6937__$1 = ((((!((map__6937 == null)))?(((((map__6937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6937):map__6937);
var files_msg = map__6937__$1;
var files = cljs.core.get.call(null,map__6937__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
