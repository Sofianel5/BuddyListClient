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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__9467_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__9467_SHARP_));
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
var seq__9468 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__9469 = null;
var count__9470 = (0);
var i__9471 = (0);
while(true){
if((i__9471 < count__9470)){
var n = cljs.core._nth.call(null,chunk__9469,i__9471);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__9472 = seq__9468;
var G__9473 = chunk__9469;
var G__9474 = count__9470;
var G__9475 = (i__9471 + (1));
seq__9468 = G__9472;
chunk__9469 = G__9473;
count__9470 = G__9474;
i__9471 = G__9475;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9468);
if(temp__4657__auto__){
var seq__9468__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9468__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__9468__$1);
var G__9476 = cljs.core.chunk_rest.call(null,seq__9468__$1);
var G__9477 = c__4317__auto__;
var G__9478 = cljs.core.count.call(null,c__4317__auto__);
var G__9479 = (0);
seq__9468 = G__9476;
chunk__9469 = G__9477;
count__9470 = G__9478;
i__9471 = G__9479;
continue;
} else {
var n = cljs.core.first.call(null,seq__9468__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__9480 = cljs.core.next.call(null,seq__9468__$1);
var G__9481 = null;
var G__9482 = (0);
var G__9483 = (0);
seq__9468 = G__9480;
chunk__9469 = G__9481;
count__9470 = G__9482;
i__9471 = G__9483;
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

var seq__9493_9501 = cljs.core.seq.call(null,deps);
var chunk__9494_9502 = null;
var count__9495_9503 = (0);
var i__9496_9504 = (0);
while(true){
if((i__9496_9504 < count__9495_9503)){
var dep_9505 = cljs.core._nth.call(null,chunk__9494_9502,i__9496_9504);
topo_sort_helper_STAR_.call(null,dep_9505,(depth + (1)),state);


var G__9506 = seq__9493_9501;
var G__9507 = chunk__9494_9502;
var G__9508 = count__9495_9503;
var G__9509 = (i__9496_9504 + (1));
seq__9493_9501 = G__9506;
chunk__9494_9502 = G__9507;
count__9495_9503 = G__9508;
i__9496_9504 = G__9509;
continue;
} else {
var temp__4657__auto___9510 = cljs.core.seq.call(null,seq__9493_9501);
if(temp__4657__auto___9510){
var seq__9493_9511__$1 = temp__4657__auto___9510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9493_9511__$1)){
var c__4317__auto___9512 = cljs.core.chunk_first.call(null,seq__9493_9511__$1);
var G__9513 = cljs.core.chunk_rest.call(null,seq__9493_9511__$1);
var G__9514 = c__4317__auto___9512;
var G__9515 = cljs.core.count.call(null,c__4317__auto___9512);
var G__9516 = (0);
seq__9493_9501 = G__9513;
chunk__9494_9502 = G__9514;
count__9495_9503 = G__9515;
i__9496_9504 = G__9516;
continue;
} else {
var dep_9517 = cljs.core.first.call(null,seq__9493_9511__$1);
topo_sort_helper_STAR_.call(null,dep_9517,(depth + (1)),state);


var G__9518 = cljs.core.next.call(null,seq__9493_9511__$1);
var G__9519 = null;
var G__9520 = (0);
var G__9521 = (0);
seq__9493_9501 = G__9518;
chunk__9494_9502 = G__9519;
count__9495_9503 = G__9520;
i__9496_9504 = G__9521;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__9497){
var vec__9498 = p__9497;
var seq__9499 = cljs.core.seq.call(null,vec__9498);
var first__9500 = cljs.core.first.call(null,seq__9499);
var seq__9499__$1 = cljs.core.next.call(null,seq__9499);
var x = first__9500;
var xs = seq__9499__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__9498,seq__9499,first__9500,seq__9499__$1,x,xs,get_deps__$1){
return (function (p1__9484_SHARP_){
return clojure.set.difference.call(null,p1__9484_SHARP_,x);
});})(vec__9498,seq__9499,first__9500,seq__9499__$1,x,xs,get_deps__$1))
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
var seq__9522 = cljs.core.seq.call(null,provides);
var chunk__9523 = null;
var count__9524 = (0);
var i__9525 = (0);
while(true){
if((i__9525 < count__9524)){
var prov = cljs.core._nth.call(null,chunk__9523,i__9525);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__9526_9534 = cljs.core.seq.call(null,requires);
var chunk__9527_9535 = null;
var count__9528_9536 = (0);
var i__9529_9537 = (0);
while(true){
if((i__9529_9537 < count__9528_9536)){
var req_9538 = cljs.core._nth.call(null,chunk__9527_9535,i__9529_9537);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_9538,prov);


var G__9539 = seq__9526_9534;
var G__9540 = chunk__9527_9535;
var G__9541 = count__9528_9536;
var G__9542 = (i__9529_9537 + (1));
seq__9526_9534 = G__9539;
chunk__9527_9535 = G__9540;
count__9528_9536 = G__9541;
i__9529_9537 = G__9542;
continue;
} else {
var temp__4657__auto___9543 = cljs.core.seq.call(null,seq__9526_9534);
if(temp__4657__auto___9543){
var seq__9526_9544__$1 = temp__4657__auto___9543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9526_9544__$1)){
var c__4317__auto___9545 = cljs.core.chunk_first.call(null,seq__9526_9544__$1);
var G__9546 = cljs.core.chunk_rest.call(null,seq__9526_9544__$1);
var G__9547 = c__4317__auto___9545;
var G__9548 = cljs.core.count.call(null,c__4317__auto___9545);
var G__9549 = (0);
seq__9526_9534 = G__9546;
chunk__9527_9535 = G__9547;
count__9528_9536 = G__9548;
i__9529_9537 = G__9549;
continue;
} else {
var req_9550 = cljs.core.first.call(null,seq__9526_9544__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_9550,prov);


var G__9551 = cljs.core.next.call(null,seq__9526_9544__$1);
var G__9552 = null;
var G__9553 = (0);
var G__9554 = (0);
seq__9526_9534 = G__9551;
chunk__9527_9535 = G__9552;
count__9528_9536 = G__9553;
i__9529_9537 = G__9554;
continue;
}
} else {
}
}
break;
}


var G__9555 = seq__9522;
var G__9556 = chunk__9523;
var G__9557 = count__9524;
var G__9558 = (i__9525 + (1));
seq__9522 = G__9555;
chunk__9523 = G__9556;
count__9524 = G__9557;
i__9525 = G__9558;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9522);
if(temp__4657__auto__){
var seq__9522__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9522__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__9522__$1);
var G__9559 = cljs.core.chunk_rest.call(null,seq__9522__$1);
var G__9560 = c__4317__auto__;
var G__9561 = cljs.core.count.call(null,c__4317__auto__);
var G__9562 = (0);
seq__9522 = G__9559;
chunk__9523 = G__9560;
count__9524 = G__9561;
i__9525 = G__9562;
continue;
} else {
var prov = cljs.core.first.call(null,seq__9522__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__9530_9563 = cljs.core.seq.call(null,requires);
var chunk__9531_9564 = null;
var count__9532_9565 = (0);
var i__9533_9566 = (0);
while(true){
if((i__9533_9566 < count__9532_9565)){
var req_9567 = cljs.core._nth.call(null,chunk__9531_9564,i__9533_9566);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_9567,prov);


var G__9568 = seq__9530_9563;
var G__9569 = chunk__9531_9564;
var G__9570 = count__9532_9565;
var G__9571 = (i__9533_9566 + (1));
seq__9530_9563 = G__9568;
chunk__9531_9564 = G__9569;
count__9532_9565 = G__9570;
i__9533_9566 = G__9571;
continue;
} else {
var temp__4657__auto___9572__$1 = cljs.core.seq.call(null,seq__9530_9563);
if(temp__4657__auto___9572__$1){
var seq__9530_9573__$1 = temp__4657__auto___9572__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9530_9573__$1)){
var c__4317__auto___9574 = cljs.core.chunk_first.call(null,seq__9530_9573__$1);
var G__9575 = cljs.core.chunk_rest.call(null,seq__9530_9573__$1);
var G__9576 = c__4317__auto___9574;
var G__9577 = cljs.core.count.call(null,c__4317__auto___9574);
var G__9578 = (0);
seq__9530_9563 = G__9575;
chunk__9531_9564 = G__9576;
count__9532_9565 = G__9577;
i__9533_9566 = G__9578;
continue;
} else {
var req_9579 = cljs.core.first.call(null,seq__9530_9573__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_9579,prov);


var G__9580 = cljs.core.next.call(null,seq__9530_9573__$1);
var G__9581 = null;
var G__9582 = (0);
var G__9583 = (0);
seq__9530_9563 = G__9580;
chunk__9531_9564 = G__9581;
count__9532_9565 = G__9582;
i__9533_9566 = G__9583;
continue;
}
} else {
}
}
break;
}


var G__9584 = cljs.core.next.call(null,seq__9522__$1);
var G__9585 = null;
var G__9586 = (0);
var G__9587 = (0);
seq__9522 = G__9584;
chunk__9523 = G__9585;
count__9524 = G__9586;
i__9525 = G__9587;
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
var seq__9588_9592 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__9589_9593 = null;
var count__9590_9594 = (0);
var i__9591_9595 = (0);
while(true){
if((i__9591_9595 < count__9590_9594)){
var ns_9596 = cljs.core._nth.call(null,chunk__9589_9593,i__9591_9595);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_9596);


var G__9597 = seq__9588_9592;
var G__9598 = chunk__9589_9593;
var G__9599 = count__9590_9594;
var G__9600 = (i__9591_9595 + (1));
seq__9588_9592 = G__9597;
chunk__9589_9593 = G__9598;
count__9590_9594 = G__9599;
i__9591_9595 = G__9600;
continue;
} else {
var temp__4657__auto___9601 = cljs.core.seq.call(null,seq__9588_9592);
if(temp__4657__auto___9601){
var seq__9588_9602__$1 = temp__4657__auto___9601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9588_9602__$1)){
var c__4317__auto___9603 = cljs.core.chunk_first.call(null,seq__9588_9602__$1);
var G__9604 = cljs.core.chunk_rest.call(null,seq__9588_9602__$1);
var G__9605 = c__4317__auto___9603;
var G__9606 = cljs.core.count.call(null,c__4317__auto___9603);
var G__9607 = (0);
seq__9588_9592 = G__9604;
chunk__9589_9593 = G__9605;
count__9590_9594 = G__9606;
i__9591_9595 = G__9607;
continue;
} else {
var ns_9608 = cljs.core.first.call(null,seq__9588_9602__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_9608);


var G__9609 = cljs.core.next.call(null,seq__9588_9602__$1);
var G__9610 = null;
var G__9611 = (0);
var G__9612 = (0);
seq__9588_9592 = G__9609;
chunk__9589_9593 = G__9610;
count__9590_9594 = G__9611;
i__9591_9595 = G__9612;
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
var G__9613__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__9613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9614__i = 0, G__9614__a = new Array(arguments.length -  0);
while (G__9614__i < G__9614__a.length) {G__9614__a[G__9614__i] = arguments[G__9614__i + 0]; ++G__9614__i;}
  args = new cljs.core.IndexedSeq(G__9614__a,0,null);
} 
return G__9613__delegate.call(this,args);};
G__9613.cljs$lang$maxFixedArity = 0;
G__9613.cljs$lang$applyTo = (function (arglist__9615){
var args = cljs.core.seq(arglist__9615);
return G__9613__delegate(args);
});
G__9613.cljs$core$IFn$_invoke$arity$variadic = G__9613__delegate;
return G__9613;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__9616 = cljs.core._EQ_;
var expr__9617 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__9616.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__9617))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__9616,expr__9617){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__9616,expr__9617))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__9616,expr__9617){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e9619){if((e9619 instanceof Error)){
var e = e9619;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e9619;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__9616,expr__9617))
} else {
if(cljs.core.truth_(pred__9616.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__9617))){
return ((function (pred__9616,expr__9617){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__9616,expr__9617){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__9616,expr__9617))
);

return deferred.addErrback(((function (deferred,pred__9616,expr__9617){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__9616,expr__9617))
);
});
;})(pred__9616,expr__9617))
} else {
if(cljs.core.truth_(pred__9616.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__9617))){
return ((function (pred__9616,expr__9617){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e9620){if((e9620 instanceof Error)){
var e = e9620;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e9620;

}
}})());
});
;})(pred__9616,expr__9617))
} else {
return ((function (pred__9616,expr__9617){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__9616,expr__9617))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__9621,callback){
var map__9622 = p__9621;
var map__9622__$1 = ((((!((map__9622 == null)))?(((((map__9622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9622):map__9622);
var file_msg = map__9622__$1;
var request_url = cljs.core.get.call(null,map__9622__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__9622,map__9622__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__9622,map__9622__$1,file_msg,request_url))
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
return (function (state_9646){
var state_val_9647 = (state_9646[(1)]);
if((state_val_9647 === (7))){
var inst_9642 = (state_9646[(2)]);
var state_9646__$1 = state_9646;
var statearr_9648_9665 = state_9646__$1;
(statearr_9648_9665[(2)] = inst_9642);

(statearr_9648_9665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9647 === (1))){
var state_9646__$1 = state_9646;
var statearr_9649_9666 = state_9646__$1;
(statearr_9649_9666[(2)] = null);

(statearr_9649_9666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9647 === (4))){
var inst_9626 = (state_9646[(7)]);
var inst_9626__$1 = (state_9646[(2)]);
var state_9646__$1 = (function (){var statearr_9650 = state_9646;
(statearr_9650[(7)] = inst_9626__$1);

return statearr_9650;
})();
if(cljs.core.truth_(inst_9626__$1)){
var statearr_9651_9667 = state_9646__$1;
(statearr_9651_9667[(1)] = (5));

} else {
var statearr_9652_9668 = state_9646__$1;
(statearr_9652_9668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9647 === (6))){
var state_9646__$1 = state_9646;
var statearr_9653_9669 = state_9646__$1;
(statearr_9653_9669[(2)] = null);

(statearr_9653_9669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9647 === (3))){
var inst_9644 = (state_9646[(2)]);
var state_9646__$1 = state_9646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9646__$1,inst_9644);
} else {
if((state_val_9647 === (2))){
var state_9646__$1 = state_9646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9646__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_9647 === (11))){
var inst_9638 = (state_9646[(2)]);
var state_9646__$1 = (function (){var statearr_9654 = state_9646;
(statearr_9654[(8)] = inst_9638);

return statearr_9654;
})();
var statearr_9655_9670 = state_9646__$1;
(statearr_9655_9670[(2)] = null);

(statearr_9655_9670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9647 === (9))){
var inst_9632 = (state_9646[(9)]);
var inst_9630 = (state_9646[(10)]);
var inst_9634 = inst_9632.call(null,inst_9630);
var state_9646__$1 = state_9646;
var statearr_9656_9671 = state_9646__$1;
(statearr_9656_9671[(2)] = inst_9634);

(statearr_9656_9671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9647 === (5))){
var inst_9626 = (state_9646[(7)]);
var inst_9628 = figwheel.client.file_reloading.blocking_load.call(null,inst_9626);
var state_9646__$1 = state_9646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9646__$1,(8),inst_9628);
} else {
if((state_val_9647 === (10))){
var inst_9630 = (state_9646[(10)]);
var inst_9636 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_9630);
var state_9646__$1 = state_9646;
var statearr_9657_9672 = state_9646__$1;
(statearr_9657_9672[(2)] = inst_9636);

(statearr_9657_9672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9647 === (8))){
var inst_9632 = (state_9646[(9)]);
var inst_9626 = (state_9646[(7)]);
var inst_9630 = (state_9646[(2)]);
var inst_9631 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_9632__$1 = cljs.core.get.call(null,inst_9631,inst_9626);
var state_9646__$1 = (function (){var statearr_9658 = state_9646;
(statearr_9658[(9)] = inst_9632__$1);

(statearr_9658[(10)] = inst_9630);

return statearr_9658;
})();
if(cljs.core.truth_(inst_9632__$1)){
var statearr_9659_9673 = state_9646__$1;
(statearr_9659_9673[(1)] = (9));

} else {
var statearr_9660_9674 = state_9646__$1;
(statearr_9660_9674[(1)] = (10));

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
var statearr_9661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9661[(0)] = figwheel$client$file_reloading$state_machine__2634__auto__);

(statearr_9661[(1)] = (1));

return statearr_9661;
});
var figwheel$client$file_reloading$state_machine__2634__auto____1 = (function (state_9646){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_9646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e9662){if((e9662 instanceof Object)){
var ex__2637__auto__ = e9662;
var statearr_9663_9675 = state_9646;
(statearr_9663_9675[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9676 = state_9646;
state_9646 = G__9676;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__2634__auto__ = function(state_9646){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__2634__auto____1.call(this,state_9646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__2634__auto____0;
figwheel$client$file_reloading$state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__2634__auto____1;
return figwheel$client$file_reloading$state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__))
})();
var state__2790__auto__ = (function (){var statearr_9664 = f__2789__auto__.call(null);
(statearr_9664[(6)] = c__2788__auto__);

return statearr_9664;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__9677,callback){
var map__9678 = p__9677;
var map__9678__$1 = ((((!((map__9678 == null)))?(((((map__9678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9678):map__9678);
var file_msg = map__9678__$1;
var namespace = cljs.core.get.call(null,map__9678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__9678,map__9678__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__9678,map__9678__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__9680){
var map__9681 = p__9680;
var map__9681__$1 = ((((!((map__9681 == null)))?(((((map__9681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9681):map__9681);
var file_msg = map__9681__$1;
var namespace = cljs.core.get.call(null,map__9681__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__9683){
var map__9684 = p__9683;
var map__9684__$1 = ((((!((map__9684 == null)))?(((((map__9684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9684):map__9684);
var file_msg = map__9684__$1;
var namespace = cljs.core.get.call(null,map__9684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__9686,callback){
var map__9687 = p__9686;
var map__9687__$1 = ((((!((map__9687 == null)))?(((((map__9687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9687):map__9687);
var file_msg = map__9687__$1;
var request_url = cljs.core.get.call(null,map__9687__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__9687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__2788__auto___9737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___9737,out){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___9737,out){
return (function (state_9722){
var state_val_9723 = (state_9722[(1)]);
if((state_val_9723 === (1))){
var inst_9696 = cljs.core.seq.call(null,files);
var inst_9697 = cljs.core.first.call(null,inst_9696);
var inst_9698 = cljs.core.next.call(null,inst_9696);
var inst_9699 = files;
var state_9722__$1 = (function (){var statearr_9724 = state_9722;
(statearr_9724[(7)] = inst_9698);

(statearr_9724[(8)] = inst_9699);

(statearr_9724[(9)] = inst_9697);

return statearr_9724;
})();
var statearr_9725_9738 = state_9722__$1;
(statearr_9725_9738[(2)] = null);

(statearr_9725_9738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9723 === (2))){
var inst_9705 = (state_9722[(10)]);
var inst_9699 = (state_9722[(8)]);
var inst_9704 = cljs.core.seq.call(null,inst_9699);
var inst_9705__$1 = cljs.core.first.call(null,inst_9704);
var inst_9706 = cljs.core.next.call(null,inst_9704);
var inst_9707 = (inst_9705__$1 == null);
var inst_9708 = cljs.core.not.call(null,inst_9707);
var state_9722__$1 = (function (){var statearr_9726 = state_9722;
(statearr_9726[(10)] = inst_9705__$1);

(statearr_9726[(11)] = inst_9706);

return statearr_9726;
})();
if(inst_9708){
var statearr_9727_9739 = state_9722__$1;
(statearr_9727_9739[(1)] = (4));

} else {
var statearr_9728_9740 = state_9722__$1;
(statearr_9728_9740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9723 === (3))){
var inst_9720 = (state_9722[(2)]);
var state_9722__$1 = state_9722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9722__$1,inst_9720);
} else {
if((state_val_9723 === (4))){
var inst_9705 = (state_9722[(10)]);
var inst_9710 = figwheel.client.file_reloading.reload_js_file.call(null,inst_9705);
var state_9722__$1 = state_9722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9722__$1,(7),inst_9710);
} else {
if((state_val_9723 === (5))){
var inst_9716 = cljs.core.async.close_BANG_.call(null,out);
var state_9722__$1 = state_9722;
var statearr_9729_9741 = state_9722__$1;
(statearr_9729_9741[(2)] = inst_9716);

(statearr_9729_9741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9723 === (6))){
var inst_9718 = (state_9722[(2)]);
var state_9722__$1 = state_9722;
var statearr_9730_9742 = state_9722__$1;
(statearr_9730_9742[(2)] = inst_9718);

(statearr_9730_9742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9723 === (7))){
var inst_9706 = (state_9722[(11)]);
var inst_9712 = (state_9722[(2)]);
var inst_9713 = cljs.core.async.put_BANG_.call(null,out,inst_9712);
var inst_9699 = inst_9706;
var state_9722__$1 = (function (){var statearr_9731 = state_9722;
(statearr_9731[(12)] = inst_9713);

(statearr_9731[(8)] = inst_9699);

return statearr_9731;
})();
var statearr_9732_9743 = state_9722__$1;
(statearr_9732_9743[(2)] = null);

(statearr_9732_9743[(1)] = (2));


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
});})(c__2788__auto___9737,out))
;
return ((function (switch__2633__auto__,c__2788__auto___9737,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____0 = (function (){
var statearr_9733 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9733[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__);

(statearr_9733[(1)] = (1));

return statearr_9733;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____1 = (function (state_9722){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_9722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e9734){if((e9734 instanceof Object)){
var ex__2637__auto__ = e9734;
var statearr_9735_9744 = state_9722;
(statearr_9735_9744[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9745 = state_9722;
state_9722 = G__9745;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__ = function(state_9722){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____1.call(this,state_9722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___9737,out))
})();
var state__2790__auto__ = (function (){var statearr_9736 = f__2789__auto__.call(null);
(statearr_9736[(6)] = c__2788__auto___9737);

return statearr_9736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___9737,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__9746,opts){
var map__9747 = p__9746;
var map__9747__$1 = ((((!((map__9747 == null)))?(((((map__9747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9747):map__9747);
var eval_body = cljs.core.get.call(null,map__9747__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__9747__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e9749){var e = e9749;
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
return (function (p1__9750_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__9750_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__9751){
var vec__9752 = p__9751;
var k = cljs.core.nth.call(null,vec__9752,(0),null);
var v = cljs.core.nth.call(null,vec__9752,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__9755){
var vec__9756 = p__9755;
var k = cljs.core.nth.call(null,vec__9756,(0),null);
var v = cljs.core.nth.call(null,vec__9756,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__9762,p__9763){
var map__9764 = p__9762;
var map__9764__$1 = ((((!((map__9764 == null)))?(((((map__9764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9764):map__9764);
var opts = map__9764__$1;
var before_jsload = cljs.core.get.call(null,map__9764__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__9764__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__9764__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__9765 = p__9763;
var map__9765__$1 = ((((!((map__9765 == null)))?(((((map__9765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9765):map__9765);
var msg = map__9765__$1;
var files = cljs.core.get.call(null,map__9765__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__9765__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__9765__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__2788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_9919){
var state_val_9920 = (state_9919[(1)]);
if((state_val_9920 === (7))){
var inst_9781 = (state_9919[(7)]);
var inst_9780 = (state_9919[(8)]);
var inst_9779 = (state_9919[(9)]);
var inst_9782 = (state_9919[(10)]);
var inst_9787 = cljs.core._nth.call(null,inst_9780,inst_9782);
var inst_9788 = figwheel.client.file_reloading.eval_body.call(null,inst_9787,opts);
var inst_9789 = (inst_9782 + (1));
var tmp9921 = inst_9781;
var tmp9922 = inst_9780;
var tmp9923 = inst_9779;
var inst_9779__$1 = tmp9923;
var inst_9780__$1 = tmp9922;
var inst_9781__$1 = tmp9921;
var inst_9782__$1 = inst_9789;
var state_9919__$1 = (function (){var statearr_9924 = state_9919;
(statearr_9924[(7)] = inst_9781__$1);

(statearr_9924[(8)] = inst_9780__$1);

(statearr_9924[(11)] = inst_9788);

(statearr_9924[(9)] = inst_9779__$1);

(statearr_9924[(10)] = inst_9782__$1);

return statearr_9924;
})();
var statearr_9925_10008 = state_9919__$1;
(statearr_9925_10008[(2)] = null);

(statearr_9925_10008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (20))){
var inst_9822 = (state_9919[(12)]);
var inst_9830 = figwheel.client.file_reloading.sort_files.call(null,inst_9822);
var state_9919__$1 = state_9919;
var statearr_9926_10009 = state_9919__$1;
(statearr_9926_10009[(2)] = inst_9830);

(statearr_9926_10009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (27))){
var state_9919__$1 = state_9919;
var statearr_9927_10010 = state_9919__$1;
(statearr_9927_10010[(2)] = null);

(statearr_9927_10010[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (1))){
var inst_9771 = (state_9919[(13)]);
var inst_9768 = before_jsload.call(null,files);
var inst_9769 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_9770 = (function (){return ((function (inst_9771,inst_9768,inst_9769,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__9759_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__9759_SHARP_);
});
;})(inst_9771,inst_9768,inst_9769,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9771__$1 = cljs.core.filter.call(null,inst_9770,files);
var inst_9772 = cljs.core.not_empty.call(null,inst_9771__$1);
var state_9919__$1 = (function (){var statearr_9928 = state_9919;
(statearr_9928[(13)] = inst_9771__$1);

(statearr_9928[(14)] = inst_9769);

(statearr_9928[(15)] = inst_9768);

return statearr_9928;
})();
if(cljs.core.truth_(inst_9772)){
var statearr_9929_10011 = state_9919__$1;
(statearr_9929_10011[(1)] = (2));

} else {
var statearr_9930_10012 = state_9919__$1;
(statearr_9930_10012[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (24))){
var state_9919__$1 = state_9919;
var statearr_9931_10013 = state_9919__$1;
(statearr_9931_10013[(2)] = null);

(statearr_9931_10013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (39))){
var inst_9872 = (state_9919[(16)]);
var state_9919__$1 = state_9919;
var statearr_9932_10014 = state_9919__$1;
(statearr_9932_10014[(2)] = inst_9872);

(statearr_9932_10014[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (46))){
var inst_9914 = (state_9919[(2)]);
var state_9919__$1 = state_9919;
var statearr_9933_10015 = state_9919__$1;
(statearr_9933_10015[(2)] = inst_9914);

(statearr_9933_10015[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (4))){
var inst_9816 = (state_9919[(2)]);
var inst_9817 = cljs.core.List.EMPTY;
var inst_9818 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_9817);
var inst_9819 = (function (){return ((function (inst_9816,inst_9817,inst_9818,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__9760_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__9760_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__9760_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__9760_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_9816,inst_9817,inst_9818,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9820 = cljs.core.filter.call(null,inst_9819,files);
var inst_9821 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_9822 = cljs.core.concat.call(null,inst_9820,inst_9821);
var state_9919__$1 = (function (){var statearr_9934 = state_9919;
(statearr_9934[(17)] = inst_9818);

(statearr_9934[(12)] = inst_9822);

(statearr_9934[(18)] = inst_9816);

return statearr_9934;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_9935_10016 = state_9919__$1;
(statearr_9935_10016[(1)] = (16));

} else {
var statearr_9936_10017 = state_9919__$1;
(statearr_9936_10017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (15))){
var inst_9806 = (state_9919[(2)]);
var state_9919__$1 = state_9919;
var statearr_9937_10018 = state_9919__$1;
(statearr_9937_10018[(2)] = inst_9806);

(statearr_9937_10018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (21))){
var inst_9832 = (state_9919[(19)]);
var inst_9832__$1 = (state_9919[(2)]);
var inst_9833 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_9832__$1);
var state_9919__$1 = (function (){var statearr_9938 = state_9919;
(statearr_9938[(19)] = inst_9832__$1);

return statearr_9938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9919__$1,(22),inst_9833);
} else {
if((state_val_9920 === (31))){
var inst_9917 = (state_9919[(2)]);
var state_9919__$1 = state_9919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9919__$1,inst_9917);
} else {
if((state_val_9920 === (32))){
var inst_9872 = (state_9919[(16)]);
var inst_9877 = inst_9872.cljs$lang$protocol_mask$partition0$;
var inst_9878 = (inst_9877 & (64));
var inst_9879 = inst_9872.cljs$core$ISeq$;
var inst_9880 = (cljs.core.PROTOCOL_SENTINEL === inst_9879);
var inst_9881 = ((inst_9878) || (inst_9880));
var state_9919__$1 = state_9919;
if(cljs.core.truth_(inst_9881)){
var statearr_9939_10019 = state_9919__$1;
(statearr_9939_10019[(1)] = (35));

} else {
var statearr_9940_10020 = state_9919__$1;
(statearr_9940_10020[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (40))){
var inst_9894 = (state_9919[(20)]);
var inst_9893 = (state_9919[(2)]);
var inst_9894__$1 = cljs.core.get.call(null,inst_9893,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_9895 = cljs.core.get.call(null,inst_9893,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_9896 = cljs.core.not_empty.call(null,inst_9894__$1);
var state_9919__$1 = (function (){var statearr_9941 = state_9919;
(statearr_9941[(20)] = inst_9894__$1);

(statearr_9941[(21)] = inst_9895);

return statearr_9941;
})();
if(cljs.core.truth_(inst_9896)){
var statearr_9942_10021 = state_9919__$1;
(statearr_9942_10021[(1)] = (41));

} else {
var statearr_9943_10022 = state_9919__$1;
(statearr_9943_10022[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (33))){
var state_9919__$1 = state_9919;
var statearr_9944_10023 = state_9919__$1;
(statearr_9944_10023[(2)] = false);

(statearr_9944_10023[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (13))){
var inst_9792 = (state_9919[(22)]);
var inst_9796 = cljs.core.chunk_first.call(null,inst_9792);
var inst_9797 = cljs.core.chunk_rest.call(null,inst_9792);
var inst_9798 = cljs.core.count.call(null,inst_9796);
var inst_9779 = inst_9797;
var inst_9780 = inst_9796;
var inst_9781 = inst_9798;
var inst_9782 = (0);
var state_9919__$1 = (function (){var statearr_9945 = state_9919;
(statearr_9945[(7)] = inst_9781);

(statearr_9945[(8)] = inst_9780);

(statearr_9945[(9)] = inst_9779);

(statearr_9945[(10)] = inst_9782);

return statearr_9945;
})();
var statearr_9946_10024 = state_9919__$1;
(statearr_9946_10024[(2)] = null);

(statearr_9946_10024[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (22))){
var inst_9835 = (state_9919[(23)]);
var inst_9840 = (state_9919[(24)]);
var inst_9836 = (state_9919[(25)]);
var inst_9832 = (state_9919[(19)]);
var inst_9835__$1 = (state_9919[(2)]);
var inst_9836__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_9835__$1);
var inst_9837 = (function (){var all_files = inst_9832;
var res_SINGLEQUOTE_ = inst_9835__$1;
var res = inst_9836__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_9835,inst_9840,inst_9836,inst_9832,inst_9835__$1,inst_9836__$1,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__9761_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__9761_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_9835,inst_9840,inst_9836,inst_9832,inst_9835__$1,inst_9836__$1,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9838 = cljs.core.filter.call(null,inst_9837,inst_9835__$1);
var inst_9839 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_9840__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_9839);
var inst_9841 = cljs.core.not_empty.call(null,inst_9840__$1);
var state_9919__$1 = (function (){var statearr_9947 = state_9919;
(statearr_9947[(26)] = inst_9838);

(statearr_9947[(23)] = inst_9835__$1);

(statearr_9947[(24)] = inst_9840__$1);

(statearr_9947[(25)] = inst_9836__$1);

return statearr_9947;
})();
if(cljs.core.truth_(inst_9841)){
var statearr_9948_10025 = state_9919__$1;
(statearr_9948_10025[(1)] = (23));

} else {
var statearr_9949_10026 = state_9919__$1;
(statearr_9949_10026[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (36))){
var state_9919__$1 = state_9919;
var statearr_9950_10027 = state_9919__$1;
(statearr_9950_10027[(2)] = false);

(statearr_9950_10027[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (41))){
var inst_9894 = (state_9919[(20)]);
var inst_9898 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_9899 = cljs.core.map.call(null,inst_9898,inst_9894);
var inst_9900 = cljs.core.pr_str.call(null,inst_9899);
var inst_9901 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9900)].join('');
var inst_9902 = figwheel.client.utils.log.call(null,inst_9901);
var state_9919__$1 = state_9919;
var statearr_9951_10028 = state_9919__$1;
(statearr_9951_10028[(2)] = inst_9902);

(statearr_9951_10028[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (43))){
var inst_9895 = (state_9919[(21)]);
var inst_9905 = (state_9919[(2)]);
var inst_9906 = cljs.core.not_empty.call(null,inst_9895);
var state_9919__$1 = (function (){var statearr_9952 = state_9919;
(statearr_9952[(27)] = inst_9905);

return statearr_9952;
})();
if(cljs.core.truth_(inst_9906)){
var statearr_9953_10029 = state_9919__$1;
(statearr_9953_10029[(1)] = (44));

} else {
var statearr_9954_10030 = state_9919__$1;
(statearr_9954_10030[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (29))){
var inst_9838 = (state_9919[(26)]);
var inst_9835 = (state_9919[(23)]);
var inst_9840 = (state_9919[(24)]);
var inst_9836 = (state_9919[(25)]);
var inst_9832 = (state_9919[(19)]);
var inst_9872 = (state_9919[(16)]);
var inst_9868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_9871 = (function (){var all_files = inst_9832;
var res_SINGLEQUOTE_ = inst_9835;
var res = inst_9836;
var files_not_loaded = inst_9838;
var dependencies_that_loaded = inst_9840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9838,inst_9835,inst_9840,inst_9836,inst_9832,inst_9872,inst_9868,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__9870){
var map__9955 = p__9870;
var map__9955__$1 = ((((!((map__9955 == null)))?(((((map__9955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9955):map__9955);
var namespace = cljs.core.get.call(null,map__9955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9838,inst_9835,inst_9840,inst_9836,inst_9832,inst_9872,inst_9868,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9872__$1 = cljs.core.group_by.call(null,inst_9871,inst_9838);
var inst_9874 = (inst_9872__$1 == null);
var inst_9875 = cljs.core.not.call(null,inst_9874);
var state_9919__$1 = (function (){var statearr_9957 = state_9919;
(statearr_9957[(28)] = inst_9868);

(statearr_9957[(16)] = inst_9872__$1);

return statearr_9957;
})();
if(inst_9875){
var statearr_9958_10031 = state_9919__$1;
(statearr_9958_10031[(1)] = (32));

} else {
var statearr_9959_10032 = state_9919__$1;
(statearr_9959_10032[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (44))){
var inst_9895 = (state_9919[(21)]);
var inst_9908 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_9895);
var inst_9909 = cljs.core.pr_str.call(null,inst_9908);
var inst_9910 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9909)].join('');
var inst_9911 = figwheel.client.utils.log.call(null,inst_9910);
var state_9919__$1 = state_9919;
var statearr_9960_10033 = state_9919__$1;
(statearr_9960_10033[(2)] = inst_9911);

(statearr_9960_10033[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (6))){
var inst_9813 = (state_9919[(2)]);
var state_9919__$1 = state_9919;
var statearr_9961_10034 = state_9919__$1;
(statearr_9961_10034[(2)] = inst_9813);

(statearr_9961_10034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (28))){
var inst_9838 = (state_9919[(26)]);
var inst_9865 = (state_9919[(2)]);
var inst_9866 = cljs.core.not_empty.call(null,inst_9838);
var state_9919__$1 = (function (){var statearr_9962 = state_9919;
(statearr_9962[(29)] = inst_9865);

return statearr_9962;
})();
if(cljs.core.truth_(inst_9866)){
var statearr_9963_10035 = state_9919__$1;
(statearr_9963_10035[(1)] = (29));

} else {
var statearr_9964_10036 = state_9919__$1;
(statearr_9964_10036[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (25))){
var inst_9836 = (state_9919[(25)]);
var inst_9852 = (state_9919[(2)]);
var inst_9853 = cljs.core.not_empty.call(null,inst_9836);
var state_9919__$1 = (function (){var statearr_9965 = state_9919;
(statearr_9965[(30)] = inst_9852);

return statearr_9965;
})();
if(cljs.core.truth_(inst_9853)){
var statearr_9966_10037 = state_9919__$1;
(statearr_9966_10037[(1)] = (26));

} else {
var statearr_9967_10038 = state_9919__$1;
(statearr_9967_10038[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (34))){
var inst_9888 = (state_9919[(2)]);
var state_9919__$1 = state_9919;
if(cljs.core.truth_(inst_9888)){
var statearr_9968_10039 = state_9919__$1;
(statearr_9968_10039[(1)] = (38));

} else {
var statearr_9969_10040 = state_9919__$1;
(statearr_9969_10040[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (17))){
var state_9919__$1 = state_9919;
var statearr_9970_10041 = state_9919__$1;
(statearr_9970_10041[(2)] = recompile_dependents);

(statearr_9970_10041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (3))){
var state_9919__$1 = state_9919;
var statearr_9971_10042 = state_9919__$1;
(statearr_9971_10042[(2)] = null);

(statearr_9971_10042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (12))){
var inst_9809 = (state_9919[(2)]);
var state_9919__$1 = state_9919;
var statearr_9972_10043 = state_9919__$1;
(statearr_9972_10043[(2)] = inst_9809);

(statearr_9972_10043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (2))){
var inst_9771 = (state_9919[(13)]);
var inst_9778 = cljs.core.seq.call(null,inst_9771);
var inst_9779 = inst_9778;
var inst_9780 = null;
var inst_9781 = (0);
var inst_9782 = (0);
var state_9919__$1 = (function (){var statearr_9973 = state_9919;
(statearr_9973[(7)] = inst_9781);

(statearr_9973[(8)] = inst_9780);

(statearr_9973[(9)] = inst_9779);

(statearr_9973[(10)] = inst_9782);

return statearr_9973;
})();
var statearr_9974_10044 = state_9919__$1;
(statearr_9974_10044[(2)] = null);

(statearr_9974_10044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (23))){
var inst_9838 = (state_9919[(26)]);
var inst_9835 = (state_9919[(23)]);
var inst_9840 = (state_9919[(24)]);
var inst_9836 = (state_9919[(25)]);
var inst_9832 = (state_9919[(19)]);
var inst_9843 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_9845 = (function (){var all_files = inst_9832;
var res_SINGLEQUOTE_ = inst_9835;
var res = inst_9836;
var files_not_loaded = inst_9838;
var dependencies_that_loaded = inst_9840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9838,inst_9835,inst_9840,inst_9836,inst_9832,inst_9843,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__9844){
var map__9975 = p__9844;
var map__9975__$1 = ((((!((map__9975 == null)))?(((((map__9975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9975):map__9975);
var request_url = cljs.core.get.call(null,map__9975__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9838,inst_9835,inst_9840,inst_9836,inst_9832,inst_9843,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9846 = cljs.core.reverse.call(null,inst_9840);
var inst_9847 = cljs.core.map.call(null,inst_9845,inst_9846);
var inst_9848 = cljs.core.pr_str.call(null,inst_9847);
var inst_9849 = figwheel.client.utils.log.call(null,inst_9848);
var state_9919__$1 = (function (){var statearr_9977 = state_9919;
(statearr_9977[(31)] = inst_9843);

return statearr_9977;
})();
var statearr_9978_10045 = state_9919__$1;
(statearr_9978_10045[(2)] = inst_9849);

(statearr_9978_10045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (35))){
var state_9919__$1 = state_9919;
var statearr_9979_10046 = state_9919__$1;
(statearr_9979_10046[(2)] = true);

(statearr_9979_10046[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (19))){
var inst_9822 = (state_9919[(12)]);
var inst_9828 = figwheel.client.file_reloading.expand_files.call(null,inst_9822);
var state_9919__$1 = state_9919;
var statearr_9980_10047 = state_9919__$1;
(statearr_9980_10047[(2)] = inst_9828);

(statearr_9980_10047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (11))){
var state_9919__$1 = state_9919;
var statearr_9981_10048 = state_9919__$1;
(statearr_9981_10048[(2)] = null);

(statearr_9981_10048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (9))){
var inst_9811 = (state_9919[(2)]);
var state_9919__$1 = state_9919;
var statearr_9982_10049 = state_9919__$1;
(statearr_9982_10049[(2)] = inst_9811);

(statearr_9982_10049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (5))){
var inst_9781 = (state_9919[(7)]);
var inst_9782 = (state_9919[(10)]);
var inst_9784 = (inst_9782 < inst_9781);
var inst_9785 = inst_9784;
var state_9919__$1 = state_9919;
if(cljs.core.truth_(inst_9785)){
var statearr_9983_10050 = state_9919__$1;
(statearr_9983_10050[(1)] = (7));

} else {
var statearr_9984_10051 = state_9919__$1;
(statearr_9984_10051[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (14))){
var inst_9792 = (state_9919[(22)]);
var inst_9801 = cljs.core.first.call(null,inst_9792);
var inst_9802 = figwheel.client.file_reloading.eval_body.call(null,inst_9801,opts);
var inst_9803 = cljs.core.next.call(null,inst_9792);
var inst_9779 = inst_9803;
var inst_9780 = null;
var inst_9781 = (0);
var inst_9782 = (0);
var state_9919__$1 = (function (){var statearr_9985 = state_9919;
(statearr_9985[(32)] = inst_9802);

(statearr_9985[(7)] = inst_9781);

(statearr_9985[(8)] = inst_9780);

(statearr_9985[(9)] = inst_9779);

(statearr_9985[(10)] = inst_9782);

return statearr_9985;
})();
var statearr_9986_10052 = state_9919__$1;
(statearr_9986_10052[(2)] = null);

(statearr_9986_10052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (45))){
var state_9919__$1 = state_9919;
var statearr_9987_10053 = state_9919__$1;
(statearr_9987_10053[(2)] = null);

(statearr_9987_10053[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (26))){
var inst_9838 = (state_9919[(26)]);
var inst_9835 = (state_9919[(23)]);
var inst_9840 = (state_9919[(24)]);
var inst_9836 = (state_9919[(25)]);
var inst_9832 = (state_9919[(19)]);
var inst_9855 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_9857 = (function (){var all_files = inst_9832;
var res_SINGLEQUOTE_ = inst_9835;
var res = inst_9836;
var files_not_loaded = inst_9838;
var dependencies_that_loaded = inst_9840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9838,inst_9835,inst_9840,inst_9836,inst_9832,inst_9855,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__9856){
var map__9988 = p__9856;
var map__9988__$1 = ((((!((map__9988 == null)))?(((((map__9988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9988):map__9988);
var namespace = cljs.core.get.call(null,map__9988__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__9988__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9838,inst_9835,inst_9840,inst_9836,inst_9832,inst_9855,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9858 = cljs.core.map.call(null,inst_9857,inst_9836);
var inst_9859 = cljs.core.pr_str.call(null,inst_9858);
var inst_9860 = figwheel.client.utils.log.call(null,inst_9859);
var inst_9861 = (function (){var all_files = inst_9832;
var res_SINGLEQUOTE_ = inst_9835;
var res = inst_9836;
var files_not_loaded = inst_9838;
var dependencies_that_loaded = inst_9840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9838,inst_9835,inst_9840,inst_9836,inst_9832,inst_9855,inst_9857,inst_9858,inst_9859,inst_9860,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9838,inst_9835,inst_9840,inst_9836,inst_9832,inst_9855,inst_9857,inst_9858,inst_9859,inst_9860,state_val_9920,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9862 = setTimeout(inst_9861,(10));
var state_9919__$1 = (function (){var statearr_9990 = state_9919;
(statearr_9990[(33)] = inst_9860);

(statearr_9990[(34)] = inst_9855);

return statearr_9990;
})();
var statearr_9991_10054 = state_9919__$1;
(statearr_9991_10054[(2)] = inst_9862);

(statearr_9991_10054[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (16))){
var state_9919__$1 = state_9919;
var statearr_9992_10055 = state_9919__$1;
(statearr_9992_10055[(2)] = reload_dependents);

(statearr_9992_10055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (38))){
var inst_9872 = (state_9919[(16)]);
var inst_9890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9872);
var state_9919__$1 = state_9919;
var statearr_9993_10056 = state_9919__$1;
(statearr_9993_10056[(2)] = inst_9890);

(statearr_9993_10056[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (30))){
var state_9919__$1 = state_9919;
var statearr_9994_10057 = state_9919__$1;
(statearr_9994_10057[(2)] = null);

(statearr_9994_10057[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (10))){
var inst_9792 = (state_9919[(22)]);
var inst_9794 = cljs.core.chunked_seq_QMARK_.call(null,inst_9792);
var state_9919__$1 = state_9919;
if(inst_9794){
var statearr_9995_10058 = state_9919__$1;
(statearr_9995_10058[(1)] = (13));

} else {
var statearr_9996_10059 = state_9919__$1;
(statearr_9996_10059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (18))){
var inst_9826 = (state_9919[(2)]);
var state_9919__$1 = state_9919;
if(cljs.core.truth_(inst_9826)){
var statearr_9997_10060 = state_9919__$1;
(statearr_9997_10060[(1)] = (19));

} else {
var statearr_9998_10061 = state_9919__$1;
(statearr_9998_10061[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (42))){
var state_9919__$1 = state_9919;
var statearr_9999_10062 = state_9919__$1;
(statearr_9999_10062[(2)] = null);

(statearr_9999_10062[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (37))){
var inst_9885 = (state_9919[(2)]);
var state_9919__$1 = state_9919;
var statearr_10000_10063 = state_9919__$1;
(statearr_10000_10063[(2)] = inst_9885);

(statearr_10000_10063[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (8))){
var inst_9792 = (state_9919[(22)]);
var inst_9779 = (state_9919[(9)]);
var inst_9792__$1 = cljs.core.seq.call(null,inst_9779);
var state_9919__$1 = (function (){var statearr_10001 = state_9919;
(statearr_10001[(22)] = inst_9792__$1);

return statearr_10001;
})();
if(inst_9792__$1){
var statearr_10002_10064 = state_9919__$1;
(statearr_10002_10064[(1)] = (10));

} else {
var statearr_10003_10065 = state_9919__$1;
(statearr_10003_10065[(1)] = (11));

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
});})(c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__2633__auto__,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____0 = (function (){
var statearr_10004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10004[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__);

(statearr_10004[(1)] = (1));

return statearr_10004;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____1 = (function (state_9919){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_9919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e10005){if((e10005 instanceof Object)){
var ex__2637__auto__ = e10005;
var statearr_10006_10066 = state_9919;
(statearr_10006_10066[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10067 = state_9919;
state_9919 = G__10067;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__ = function(state_9919){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____1.call(this,state_9919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__2790__auto__ = (function (){var statearr_10007 = f__2789__auto__.call(null);
(statearr_10007[(6)] = c__2788__auto__);

return statearr_10007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__,map__9764,map__9764__$1,opts,before_jsload,on_jsload,reload_dependents,map__9765,map__9765__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__2788__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__10070,link){
var map__10071 = p__10070;
var map__10071__$1 = ((((!((map__10071 == null)))?(((((map__10071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10071):map__10071);
var file = cljs.core.get.call(null,map__10071__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__10071,map__10071__$1,file){
return (function (p1__10068_SHARP_,p2__10069_SHARP_){
if(cljs.core._EQ_.call(null,p1__10068_SHARP_,p2__10069_SHARP_)){
return p1__10068_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__10071,map__10071__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__10074){
var map__10075 = p__10074;
var map__10075__$1 = ((((!((map__10075 == null)))?(((((map__10075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10075):map__10075);
var match_length = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__10073_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__10073_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__10077_SHARP_,p2__10078_SHARP_){
return cljs.core.assoc.call(null,p1__10077_SHARP_,cljs.core.get.call(null,p2__10078_SHARP_,key),p2__10078_SHARP_);
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
var loaded_f_datas_10079 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_10079);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_10079);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__10080,p__10081){
var map__10082 = p__10080;
var map__10082__$1 = ((((!((map__10082 == null)))?(((((map__10082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10082):map__10082);
var on_cssload = cljs.core.get.call(null,map__10082__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__10083 = p__10081;
var map__10083__$1 = ((((!((map__10083 == null)))?(((((map__10083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10083):map__10083);
var files_msg = map__10083__$1;
var files = cljs.core.get.call(null,map__10083__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
