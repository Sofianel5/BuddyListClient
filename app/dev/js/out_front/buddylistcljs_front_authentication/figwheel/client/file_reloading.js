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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__10547_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__10547_SHARP_));
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
var seq__10548 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__10549 = null;
var count__10550 = (0);
var i__10551 = (0);
while(true){
if((i__10551 < count__10550)){
var n = cljs.core._nth.call(null,chunk__10549,i__10551);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__10552 = seq__10548;
var G__10553 = chunk__10549;
var G__10554 = count__10550;
var G__10555 = (i__10551 + (1));
seq__10548 = G__10552;
chunk__10549 = G__10553;
count__10550 = G__10554;
i__10551 = G__10555;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10548);
if(temp__4657__auto__){
var seq__10548__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10548__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__10548__$1);
var G__10556 = cljs.core.chunk_rest.call(null,seq__10548__$1);
var G__10557 = c__4317__auto__;
var G__10558 = cljs.core.count.call(null,c__4317__auto__);
var G__10559 = (0);
seq__10548 = G__10556;
chunk__10549 = G__10557;
count__10550 = G__10558;
i__10551 = G__10559;
continue;
} else {
var n = cljs.core.first.call(null,seq__10548__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__10560 = cljs.core.next.call(null,seq__10548__$1);
var G__10561 = null;
var G__10562 = (0);
var G__10563 = (0);
seq__10548 = G__10560;
chunk__10549 = G__10561;
count__10550 = G__10562;
i__10551 = G__10563;
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

var seq__10573_10581 = cljs.core.seq.call(null,deps);
var chunk__10574_10582 = null;
var count__10575_10583 = (0);
var i__10576_10584 = (0);
while(true){
if((i__10576_10584 < count__10575_10583)){
var dep_10585 = cljs.core._nth.call(null,chunk__10574_10582,i__10576_10584);
topo_sort_helper_STAR_.call(null,dep_10585,(depth + (1)),state);


var G__10586 = seq__10573_10581;
var G__10587 = chunk__10574_10582;
var G__10588 = count__10575_10583;
var G__10589 = (i__10576_10584 + (1));
seq__10573_10581 = G__10586;
chunk__10574_10582 = G__10587;
count__10575_10583 = G__10588;
i__10576_10584 = G__10589;
continue;
} else {
var temp__4657__auto___10590 = cljs.core.seq.call(null,seq__10573_10581);
if(temp__4657__auto___10590){
var seq__10573_10591__$1 = temp__4657__auto___10590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10573_10591__$1)){
var c__4317__auto___10592 = cljs.core.chunk_first.call(null,seq__10573_10591__$1);
var G__10593 = cljs.core.chunk_rest.call(null,seq__10573_10591__$1);
var G__10594 = c__4317__auto___10592;
var G__10595 = cljs.core.count.call(null,c__4317__auto___10592);
var G__10596 = (0);
seq__10573_10581 = G__10593;
chunk__10574_10582 = G__10594;
count__10575_10583 = G__10595;
i__10576_10584 = G__10596;
continue;
} else {
var dep_10597 = cljs.core.first.call(null,seq__10573_10591__$1);
topo_sort_helper_STAR_.call(null,dep_10597,(depth + (1)),state);


var G__10598 = cljs.core.next.call(null,seq__10573_10591__$1);
var G__10599 = null;
var G__10600 = (0);
var G__10601 = (0);
seq__10573_10581 = G__10598;
chunk__10574_10582 = G__10599;
count__10575_10583 = G__10600;
i__10576_10584 = G__10601;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__10577){
var vec__10578 = p__10577;
var seq__10579 = cljs.core.seq.call(null,vec__10578);
var first__10580 = cljs.core.first.call(null,seq__10579);
var seq__10579__$1 = cljs.core.next.call(null,seq__10579);
var x = first__10580;
var xs = seq__10579__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__10578,seq__10579,first__10580,seq__10579__$1,x,xs,get_deps__$1){
return (function (p1__10564_SHARP_){
return clojure.set.difference.call(null,p1__10564_SHARP_,x);
});})(vec__10578,seq__10579,first__10580,seq__10579__$1,x,xs,get_deps__$1))
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
var seq__10602 = cljs.core.seq.call(null,provides);
var chunk__10603 = null;
var count__10604 = (0);
var i__10605 = (0);
while(true){
if((i__10605 < count__10604)){
var prov = cljs.core._nth.call(null,chunk__10603,i__10605);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__10606_10614 = cljs.core.seq.call(null,requires);
var chunk__10607_10615 = null;
var count__10608_10616 = (0);
var i__10609_10617 = (0);
while(true){
if((i__10609_10617 < count__10608_10616)){
var req_10618 = cljs.core._nth.call(null,chunk__10607_10615,i__10609_10617);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10618,prov);


var G__10619 = seq__10606_10614;
var G__10620 = chunk__10607_10615;
var G__10621 = count__10608_10616;
var G__10622 = (i__10609_10617 + (1));
seq__10606_10614 = G__10619;
chunk__10607_10615 = G__10620;
count__10608_10616 = G__10621;
i__10609_10617 = G__10622;
continue;
} else {
var temp__4657__auto___10623 = cljs.core.seq.call(null,seq__10606_10614);
if(temp__4657__auto___10623){
var seq__10606_10624__$1 = temp__4657__auto___10623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10606_10624__$1)){
var c__4317__auto___10625 = cljs.core.chunk_first.call(null,seq__10606_10624__$1);
var G__10626 = cljs.core.chunk_rest.call(null,seq__10606_10624__$1);
var G__10627 = c__4317__auto___10625;
var G__10628 = cljs.core.count.call(null,c__4317__auto___10625);
var G__10629 = (0);
seq__10606_10614 = G__10626;
chunk__10607_10615 = G__10627;
count__10608_10616 = G__10628;
i__10609_10617 = G__10629;
continue;
} else {
var req_10630 = cljs.core.first.call(null,seq__10606_10624__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10630,prov);


var G__10631 = cljs.core.next.call(null,seq__10606_10624__$1);
var G__10632 = null;
var G__10633 = (0);
var G__10634 = (0);
seq__10606_10614 = G__10631;
chunk__10607_10615 = G__10632;
count__10608_10616 = G__10633;
i__10609_10617 = G__10634;
continue;
}
} else {
}
}
break;
}


var G__10635 = seq__10602;
var G__10636 = chunk__10603;
var G__10637 = count__10604;
var G__10638 = (i__10605 + (1));
seq__10602 = G__10635;
chunk__10603 = G__10636;
count__10604 = G__10637;
i__10605 = G__10638;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10602);
if(temp__4657__auto__){
var seq__10602__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10602__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__10602__$1);
var G__10639 = cljs.core.chunk_rest.call(null,seq__10602__$1);
var G__10640 = c__4317__auto__;
var G__10641 = cljs.core.count.call(null,c__4317__auto__);
var G__10642 = (0);
seq__10602 = G__10639;
chunk__10603 = G__10640;
count__10604 = G__10641;
i__10605 = G__10642;
continue;
} else {
var prov = cljs.core.first.call(null,seq__10602__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__10610_10643 = cljs.core.seq.call(null,requires);
var chunk__10611_10644 = null;
var count__10612_10645 = (0);
var i__10613_10646 = (0);
while(true){
if((i__10613_10646 < count__10612_10645)){
var req_10647 = cljs.core._nth.call(null,chunk__10611_10644,i__10613_10646);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10647,prov);


var G__10648 = seq__10610_10643;
var G__10649 = chunk__10611_10644;
var G__10650 = count__10612_10645;
var G__10651 = (i__10613_10646 + (1));
seq__10610_10643 = G__10648;
chunk__10611_10644 = G__10649;
count__10612_10645 = G__10650;
i__10613_10646 = G__10651;
continue;
} else {
var temp__4657__auto___10652__$1 = cljs.core.seq.call(null,seq__10610_10643);
if(temp__4657__auto___10652__$1){
var seq__10610_10653__$1 = temp__4657__auto___10652__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10610_10653__$1)){
var c__4317__auto___10654 = cljs.core.chunk_first.call(null,seq__10610_10653__$1);
var G__10655 = cljs.core.chunk_rest.call(null,seq__10610_10653__$1);
var G__10656 = c__4317__auto___10654;
var G__10657 = cljs.core.count.call(null,c__4317__auto___10654);
var G__10658 = (0);
seq__10610_10643 = G__10655;
chunk__10611_10644 = G__10656;
count__10612_10645 = G__10657;
i__10613_10646 = G__10658;
continue;
} else {
var req_10659 = cljs.core.first.call(null,seq__10610_10653__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10659,prov);


var G__10660 = cljs.core.next.call(null,seq__10610_10653__$1);
var G__10661 = null;
var G__10662 = (0);
var G__10663 = (0);
seq__10610_10643 = G__10660;
chunk__10611_10644 = G__10661;
count__10612_10645 = G__10662;
i__10613_10646 = G__10663;
continue;
}
} else {
}
}
break;
}


var G__10664 = cljs.core.next.call(null,seq__10602__$1);
var G__10665 = null;
var G__10666 = (0);
var G__10667 = (0);
seq__10602 = G__10664;
chunk__10603 = G__10665;
count__10604 = G__10666;
i__10605 = G__10667;
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
var seq__10668_10672 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__10669_10673 = null;
var count__10670_10674 = (0);
var i__10671_10675 = (0);
while(true){
if((i__10671_10675 < count__10670_10674)){
var ns_10676 = cljs.core._nth.call(null,chunk__10669_10673,i__10671_10675);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_10676);


var G__10677 = seq__10668_10672;
var G__10678 = chunk__10669_10673;
var G__10679 = count__10670_10674;
var G__10680 = (i__10671_10675 + (1));
seq__10668_10672 = G__10677;
chunk__10669_10673 = G__10678;
count__10670_10674 = G__10679;
i__10671_10675 = G__10680;
continue;
} else {
var temp__4657__auto___10681 = cljs.core.seq.call(null,seq__10668_10672);
if(temp__4657__auto___10681){
var seq__10668_10682__$1 = temp__4657__auto___10681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10668_10682__$1)){
var c__4317__auto___10683 = cljs.core.chunk_first.call(null,seq__10668_10682__$1);
var G__10684 = cljs.core.chunk_rest.call(null,seq__10668_10682__$1);
var G__10685 = c__4317__auto___10683;
var G__10686 = cljs.core.count.call(null,c__4317__auto___10683);
var G__10687 = (0);
seq__10668_10672 = G__10684;
chunk__10669_10673 = G__10685;
count__10670_10674 = G__10686;
i__10671_10675 = G__10687;
continue;
} else {
var ns_10688 = cljs.core.first.call(null,seq__10668_10682__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_10688);


var G__10689 = cljs.core.next.call(null,seq__10668_10682__$1);
var G__10690 = null;
var G__10691 = (0);
var G__10692 = (0);
seq__10668_10672 = G__10689;
chunk__10669_10673 = G__10690;
count__10670_10674 = G__10691;
i__10671_10675 = G__10692;
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
var G__10693__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__10693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10694__i = 0, G__10694__a = new Array(arguments.length -  0);
while (G__10694__i < G__10694__a.length) {G__10694__a[G__10694__i] = arguments[G__10694__i + 0]; ++G__10694__i;}
  args = new cljs.core.IndexedSeq(G__10694__a,0,null);
} 
return G__10693__delegate.call(this,args);};
G__10693.cljs$lang$maxFixedArity = 0;
G__10693.cljs$lang$applyTo = (function (arglist__10695){
var args = cljs.core.seq(arglist__10695);
return G__10693__delegate(args);
});
G__10693.cljs$core$IFn$_invoke$arity$variadic = G__10693__delegate;
return G__10693;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__10696 = cljs.core._EQ_;
var expr__10697 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__10696.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__10697))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__10696,expr__10697){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__10696,expr__10697))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__10696,expr__10697){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e10699){if((e10699 instanceof Error)){
var e = e10699;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e10699;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__10696,expr__10697))
} else {
if(cljs.core.truth_(pred__10696.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__10697))){
return ((function (pred__10696,expr__10697){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__10696,expr__10697){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__10696,expr__10697))
);

return deferred.addErrback(((function (deferred,pred__10696,expr__10697){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__10696,expr__10697))
);
});
;})(pred__10696,expr__10697))
} else {
if(cljs.core.truth_(pred__10696.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__10697))){
return ((function (pred__10696,expr__10697){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e10700){if((e10700 instanceof Error)){
var e = e10700;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e10700;

}
}})());
});
;})(pred__10696,expr__10697))
} else {
return ((function (pred__10696,expr__10697){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__10696,expr__10697))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__10701,callback){
var map__10702 = p__10701;
var map__10702__$1 = ((((!((map__10702 == null)))?(((((map__10702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10702):map__10702);
var file_msg = map__10702__$1;
var request_url = cljs.core.get.call(null,map__10702__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__10702,map__10702__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__10702,map__10702__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__){
return (function (state_10726){
var state_val_10727 = (state_10726[(1)]);
if((state_val_10727 === (7))){
var inst_10722 = (state_10726[(2)]);
var state_10726__$1 = state_10726;
var statearr_10728_10745 = state_10726__$1;
(statearr_10728_10745[(2)] = inst_10722);

(statearr_10728_10745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10727 === (1))){
var state_10726__$1 = state_10726;
var statearr_10729_10746 = state_10726__$1;
(statearr_10729_10746[(2)] = null);

(statearr_10729_10746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10727 === (4))){
var inst_10706 = (state_10726[(7)]);
var inst_10706__$1 = (state_10726[(2)]);
var state_10726__$1 = (function (){var statearr_10730 = state_10726;
(statearr_10730[(7)] = inst_10706__$1);

return statearr_10730;
})();
if(cljs.core.truth_(inst_10706__$1)){
var statearr_10731_10747 = state_10726__$1;
(statearr_10731_10747[(1)] = (5));

} else {
var statearr_10732_10748 = state_10726__$1;
(statearr_10732_10748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10727 === (6))){
var state_10726__$1 = state_10726;
var statearr_10733_10749 = state_10726__$1;
(statearr_10733_10749[(2)] = null);

(statearr_10733_10749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10727 === (3))){
var inst_10724 = (state_10726[(2)]);
var state_10726__$1 = state_10726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10726__$1,inst_10724);
} else {
if((state_val_10727 === (2))){
var state_10726__$1 = state_10726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10726__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_10727 === (11))){
var inst_10718 = (state_10726[(2)]);
var state_10726__$1 = (function (){var statearr_10734 = state_10726;
(statearr_10734[(8)] = inst_10718);

return statearr_10734;
})();
var statearr_10735_10750 = state_10726__$1;
(statearr_10735_10750[(2)] = null);

(statearr_10735_10750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10727 === (9))){
var inst_10710 = (state_10726[(9)]);
var inst_10712 = (state_10726[(10)]);
var inst_10714 = inst_10712.call(null,inst_10710);
var state_10726__$1 = state_10726;
var statearr_10736_10751 = state_10726__$1;
(statearr_10736_10751[(2)] = inst_10714);

(statearr_10736_10751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10727 === (5))){
var inst_10706 = (state_10726[(7)]);
var inst_10708 = figwheel.client.file_reloading.blocking_load.call(null,inst_10706);
var state_10726__$1 = state_10726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10726__$1,(8),inst_10708);
} else {
if((state_val_10727 === (10))){
var inst_10710 = (state_10726[(9)]);
var inst_10716 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_10710);
var state_10726__$1 = state_10726;
var statearr_10737_10752 = state_10726__$1;
(statearr_10737_10752[(2)] = inst_10716);

(statearr_10737_10752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10727 === (8))){
var inst_10706 = (state_10726[(7)]);
var inst_10712 = (state_10726[(10)]);
var inst_10710 = (state_10726[(2)]);
var inst_10711 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_10712__$1 = cljs.core.get.call(null,inst_10711,inst_10706);
var state_10726__$1 = (function (){var statearr_10738 = state_10726;
(statearr_10738[(9)] = inst_10710);

(statearr_10738[(10)] = inst_10712__$1);

return statearr_10738;
})();
if(cljs.core.truth_(inst_10712__$1)){
var statearr_10739_10753 = state_10726__$1;
(statearr_10739_10753[(1)] = (9));

} else {
var statearr_10740_10754 = state_10726__$1;
(statearr_10740_10754[(1)] = (10));

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
});})(c__2151__auto__))
;
return ((function (switch__1996__auto__,c__2151__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__1997__auto__ = null;
var figwheel$client$file_reloading$state_machine__1997__auto____0 = (function (){
var statearr_10741 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10741[(0)] = figwheel$client$file_reloading$state_machine__1997__auto__);

(statearr_10741[(1)] = (1));

return statearr_10741;
});
var figwheel$client$file_reloading$state_machine__1997__auto____1 = (function (state_10726){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_10726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e10742){if((e10742 instanceof Object)){
var ex__2000__auto__ = e10742;
var statearr_10743_10755 = state_10726;
(statearr_10743_10755[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10756 = state_10726;
state_10726 = G__10756;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__1997__auto__ = function(state_10726){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__1997__auto____1.call(this,state_10726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__1997__auto____0;
figwheel$client$file_reloading$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__1997__auto____1;
return figwheel$client$file_reloading$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__))
})();
var state__2153__auto__ = (function (){var statearr_10744 = f__2152__auto__.call(null);
(statearr_10744[(6)] = c__2151__auto__);

return statearr_10744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__))
);

return c__2151__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__10757,callback){
var map__10758 = p__10757;
var map__10758__$1 = ((((!((map__10758 == null)))?(((((map__10758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10758):map__10758);
var file_msg = map__10758__$1;
var namespace = cljs.core.get.call(null,map__10758__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__10758,map__10758__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__10758,map__10758__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__10760){
var map__10761 = p__10760;
var map__10761__$1 = ((((!((map__10761 == null)))?(((((map__10761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10761):map__10761);
var file_msg = map__10761__$1;
var namespace = cljs.core.get.call(null,map__10761__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__10763){
var map__10764 = p__10763;
var map__10764__$1 = ((((!((map__10764 == null)))?(((((map__10764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10764):map__10764);
var file_msg = map__10764__$1;
var namespace = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__10766,callback){
var map__10767 = p__10766;
var map__10767__$1 = ((((!((map__10767 == null)))?(((((map__10767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10767):map__10767);
var file_msg = map__10767__$1;
var request_url = cljs.core.get.call(null,map__10767__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__10767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__2151__auto___10817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___10817,out){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___10817,out){
return (function (state_10802){
var state_val_10803 = (state_10802[(1)]);
if((state_val_10803 === (1))){
var inst_10776 = cljs.core.seq.call(null,files);
var inst_10777 = cljs.core.first.call(null,inst_10776);
var inst_10778 = cljs.core.next.call(null,inst_10776);
var inst_10779 = files;
var state_10802__$1 = (function (){var statearr_10804 = state_10802;
(statearr_10804[(7)] = inst_10779);

(statearr_10804[(8)] = inst_10778);

(statearr_10804[(9)] = inst_10777);

return statearr_10804;
})();
var statearr_10805_10818 = state_10802__$1;
(statearr_10805_10818[(2)] = null);

(statearr_10805_10818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10803 === (2))){
var inst_10785 = (state_10802[(10)]);
var inst_10779 = (state_10802[(7)]);
var inst_10784 = cljs.core.seq.call(null,inst_10779);
var inst_10785__$1 = cljs.core.first.call(null,inst_10784);
var inst_10786 = cljs.core.next.call(null,inst_10784);
var inst_10787 = (inst_10785__$1 == null);
var inst_10788 = cljs.core.not.call(null,inst_10787);
var state_10802__$1 = (function (){var statearr_10806 = state_10802;
(statearr_10806[(11)] = inst_10786);

(statearr_10806[(10)] = inst_10785__$1);

return statearr_10806;
})();
if(inst_10788){
var statearr_10807_10819 = state_10802__$1;
(statearr_10807_10819[(1)] = (4));

} else {
var statearr_10808_10820 = state_10802__$1;
(statearr_10808_10820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10803 === (3))){
var inst_10800 = (state_10802[(2)]);
var state_10802__$1 = state_10802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10802__$1,inst_10800);
} else {
if((state_val_10803 === (4))){
var inst_10785 = (state_10802[(10)]);
var inst_10790 = figwheel.client.file_reloading.reload_js_file.call(null,inst_10785);
var state_10802__$1 = state_10802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10802__$1,(7),inst_10790);
} else {
if((state_val_10803 === (5))){
var inst_10796 = cljs.core.async.close_BANG_.call(null,out);
var state_10802__$1 = state_10802;
var statearr_10809_10821 = state_10802__$1;
(statearr_10809_10821[(2)] = inst_10796);

(statearr_10809_10821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10803 === (6))){
var inst_10798 = (state_10802[(2)]);
var state_10802__$1 = state_10802;
var statearr_10810_10822 = state_10802__$1;
(statearr_10810_10822[(2)] = inst_10798);

(statearr_10810_10822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10803 === (7))){
var inst_10786 = (state_10802[(11)]);
var inst_10792 = (state_10802[(2)]);
var inst_10793 = cljs.core.async.put_BANG_.call(null,out,inst_10792);
var inst_10779 = inst_10786;
var state_10802__$1 = (function (){var statearr_10811 = state_10802;
(statearr_10811[(12)] = inst_10793);

(statearr_10811[(7)] = inst_10779);

return statearr_10811;
})();
var statearr_10812_10823 = state_10802__$1;
(statearr_10812_10823[(2)] = null);

(statearr_10812_10823[(1)] = (2));


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
});})(c__2151__auto___10817,out))
;
return ((function (switch__1996__auto__,c__2151__auto___10817,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0 = (function (){
var statearr_10813 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10813[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__);

(statearr_10813[(1)] = (1));

return statearr_10813;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1 = (function (state_10802){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_10802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e10814){if((e10814 instanceof Object)){
var ex__2000__auto__ = e10814;
var statearr_10815_10824 = state_10802;
(statearr_10815_10824[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10825 = state_10802;
state_10802 = G__10825;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__ = function(state_10802){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1.call(this,state_10802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___10817,out))
})();
var state__2153__auto__ = (function (){var statearr_10816 = f__2152__auto__.call(null);
(statearr_10816[(6)] = c__2151__auto___10817);

return statearr_10816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___10817,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__10826,opts){
var map__10827 = p__10826;
var map__10827__$1 = ((((!((map__10827 == null)))?(((((map__10827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10827):map__10827);
var eval_body = cljs.core.get.call(null,map__10827__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__10827__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e10829){var e = e10829;
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
return (function (p1__10830_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__10830_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__10831){
var vec__10832 = p__10831;
var k = cljs.core.nth.call(null,vec__10832,(0),null);
var v = cljs.core.nth.call(null,vec__10832,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__10835){
var vec__10836 = p__10835;
var k = cljs.core.nth.call(null,vec__10836,(0),null);
var v = cljs.core.nth.call(null,vec__10836,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__10842,p__10843){
var map__10844 = p__10842;
var map__10844__$1 = ((((!((map__10844 == null)))?(((((map__10844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10844):map__10844);
var opts = map__10844__$1;
var before_jsload = cljs.core.get.call(null,map__10844__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__10844__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__10844__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__10845 = p__10843;
var map__10845__$1 = ((((!((map__10845 == null)))?(((((map__10845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10845):map__10845);
var msg = map__10845__$1;
var files = cljs.core.get.call(null,map__10845__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__10845__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__10845__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_10999){
var state_val_11000 = (state_10999[(1)]);
if((state_val_11000 === (7))){
var inst_10862 = (state_10999[(7)]);
var inst_10861 = (state_10999[(8)]);
var inst_10860 = (state_10999[(9)]);
var inst_10859 = (state_10999[(10)]);
var inst_10867 = cljs.core._nth.call(null,inst_10860,inst_10862);
var inst_10868 = figwheel.client.file_reloading.eval_body.call(null,inst_10867,opts);
var inst_10869 = (inst_10862 + (1));
var tmp11001 = inst_10861;
var tmp11002 = inst_10860;
var tmp11003 = inst_10859;
var inst_10859__$1 = tmp11003;
var inst_10860__$1 = tmp11002;
var inst_10861__$1 = tmp11001;
var inst_10862__$1 = inst_10869;
var state_10999__$1 = (function (){var statearr_11004 = state_10999;
(statearr_11004[(7)] = inst_10862__$1);

(statearr_11004[(8)] = inst_10861__$1);

(statearr_11004[(9)] = inst_10860__$1);

(statearr_11004[(10)] = inst_10859__$1);

(statearr_11004[(11)] = inst_10868);

return statearr_11004;
})();
var statearr_11005_11088 = state_10999__$1;
(statearr_11005_11088[(2)] = null);

(statearr_11005_11088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (20))){
var inst_10902 = (state_10999[(12)]);
var inst_10910 = figwheel.client.file_reloading.sort_files.call(null,inst_10902);
var state_10999__$1 = state_10999;
var statearr_11006_11089 = state_10999__$1;
(statearr_11006_11089[(2)] = inst_10910);

(statearr_11006_11089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (27))){
var state_10999__$1 = state_10999;
var statearr_11007_11090 = state_10999__$1;
(statearr_11007_11090[(2)] = null);

(statearr_11007_11090[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (1))){
var inst_10851 = (state_10999[(13)]);
var inst_10848 = before_jsload.call(null,files);
var inst_10849 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_10850 = (function (){return ((function (inst_10851,inst_10848,inst_10849,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10839_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__10839_SHARP_);
});
;})(inst_10851,inst_10848,inst_10849,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10851__$1 = cljs.core.filter.call(null,inst_10850,files);
var inst_10852 = cljs.core.not_empty.call(null,inst_10851__$1);
var state_10999__$1 = (function (){var statearr_11008 = state_10999;
(statearr_11008[(14)] = inst_10849);

(statearr_11008[(15)] = inst_10848);

(statearr_11008[(13)] = inst_10851__$1);

return statearr_11008;
})();
if(cljs.core.truth_(inst_10852)){
var statearr_11009_11091 = state_10999__$1;
(statearr_11009_11091[(1)] = (2));

} else {
var statearr_11010_11092 = state_10999__$1;
(statearr_11010_11092[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (24))){
var state_10999__$1 = state_10999;
var statearr_11011_11093 = state_10999__$1;
(statearr_11011_11093[(2)] = null);

(statearr_11011_11093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (39))){
var inst_10952 = (state_10999[(16)]);
var state_10999__$1 = state_10999;
var statearr_11012_11094 = state_10999__$1;
(statearr_11012_11094[(2)] = inst_10952);

(statearr_11012_11094[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (46))){
var inst_10994 = (state_10999[(2)]);
var state_10999__$1 = state_10999;
var statearr_11013_11095 = state_10999__$1;
(statearr_11013_11095[(2)] = inst_10994);

(statearr_11013_11095[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (4))){
var inst_10896 = (state_10999[(2)]);
var inst_10897 = cljs.core.List.EMPTY;
var inst_10898 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_10897);
var inst_10899 = (function (){return ((function (inst_10896,inst_10897,inst_10898,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10840_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__10840_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__10840_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__10840_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_10896,inst_10897,inst_10898,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10900 = cljs.core.filter.call(null,inst_10899,files);
var inst_10901 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_10902 = cljs.core.concat.call(null,inst_10900,inst_10901);
var state_10999__$1 = (function (){var statearr_11014 = state_10999;
(statearr_11014[(17)] = inst_10896);

(statearr_11014[(12)] = inst_10902);

(statearr_11014[(18)] = inst_10898);

return statearr_11014;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_11015_11096 = state_10999__$1;
(statearr_11015_11096[(1)] = (16));

} else {
var statearr_11016_11097 = state_10999__$1;
(statearr_11016_11097[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (15))){
var inst_10886 = (state_10999[(2)]);
var state_10999__$1 = state_10999;
var statearr_11017_11098 = state_10999__$1;
(statearr_11017_11098[(2)] = inst_10886);

(statearr_11017_11098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (21))){
var inst_10912 = (state_10999[(19)]);
var inst_10912__$1 = (state_10999[(2)]);
var inst_10913 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_10912__$1);
var state_10999__$1 = (function (){var statearr_11018 = state_10999;
(statearr_11018[(19)] = inst_10912__$1);

return statearr_11018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10999__$1,(22),inst_10913);
} else {
if((state_val_11000 === (31))){
var inst_10997 = (state_10999[(2)]);
var state_10999__$1 = state_10999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10999__$1,inst_10997);
} else {
if((state_val_11000 === (32))){
var inst_10952 = (state_10999[(16)]);
var inst_10957 = inst_10952.cljs$lang$protocol_mask$partition0$;
var inst_10958 = (inst_10957 & (64));
var inst_10959 = inst_10952.cljs$core$ISeq$;
var inst_10960 = (cljs.core.PROTOCOL_SENTINEL === inst_10959);
var inst_10961 = ((inst_10958) || (inst_10960));
var state_10999__$1 = state_10999;
if(cljs.core.truth_(inst_10961)){
var statearr_11019_11099 = state_10999__$1;
(statearr_11019_11099[(1)] = (35));

} else {
var statearr_11020_11100 = state_10999__$1;
(statearr_11020_11100[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (40))){
var inst_10974 = (state_10999[(20)]);
var inst_10973 = (state_10999[(2)]);
var inst_10974__$1 = cljs.core.get.call(null,inst_10973,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_10975 = cljs.core.get.call(null,inst_10973,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_10976 = cljs.core.not_empty.call(null,inst_10974__$1);
var state_10999__$1 = (function (){var statearr_11021 = state_10999;
(statearr_11021[(20)] = inst_10974__$1);

(statearr_11021[(21)] = inst_10975);

return statearr_11021;
})();
if(cljs.core.truth_(inst_10976)){
var statearr_11022_11101 = state_10999__$1;
(statearr_11022_11101[(1)] = (41));

} else {
var statearr_11023_11102 = state_10999__$1;
(statearr_11023_11102[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (33))){
var state_10999__$1 = state_10999;
var statearr_11024_11103 = state_10999__$1;
(statearr_11024_11103[(2)] = false);

(statearr_11024_11103[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (13))){
var inst_10872 = (state_10999[(22)]);
var inst_10876 = cljs.core.chunk_first.call(null,inst_10872);
var inst_10877 = cljs.core.chunk_rest.call(null,inst_10872);
var inst_10878 = cljs.core.count.call(null,inst_10876);
var inst_10859 = inst_10877;
var inst_10860 = inst_10876;
var inst_10861 = inst_10878;
var inst_10862 = (0);
var state_10999__$1 = (function (){var statearr_11025 = state_10999;
(statearr_11025[(7)] = inst_10862);

(statearr_11025[(8)] = inst_10861);

(statearr_11025[(9)] = inst_10860);

(statearr_11025[(10)] = inst_10859);

return statearr_11025;
})();
var statearr_11026_11104 = state_10999__$1;
(statearr_11026_11104[(2)] = null);

(statearr_11026_11104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (22))){
var inst_10916 = (state_10999[(23)]);
var inst_10920 = (state_10999[(24)]);
var inst_10915 = (state_10999[(25)]);
var inst_10912 = (state_10999[(19)]);
var inst_10915__$1 = (state_10999[(2)]);
var inst_10916__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_10915__$1);
var inst_10917 = (function (){var all_files = inst_10912;
var res_SINGLEQUOTE_ = inst_10915__$1;
var res = inst_10916__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_10916,inst_10920,inst_10915,inst_10912,inst_10915__$1,inst_10916__$1,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10841_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__10841_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_10916,inst_10920,inst_10915,inst_10912,inst_10915__$1,inst_10916__$1,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10918 = cljs.core.filter.call(null,inst_10917,inst_10915__$1);
var inst_10919 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_10920__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_10919);
var inst_10921 = cljs.core.not_empty.call(null,inst_10920__$1);
var state_10999__$1 = (function (){var statearr_11027 = state_10999;
(statearr_11027[(23)] = inst_10916__$1);

(statearr_11027[(24)] = inst_10920__$1);

(statearr_11027[(26)] = inst_10918);

(statearr_11027[(25)] = inst_10915__$1);

return statearr_11027;
})();
if(cljs.core.truth_(inst_10921)){
var statearr_11028_11105 = state_10999__$1;
(statearr_11028_11105[(1)] = (23));

} else {
var statearr_11029_11106 = state_10999__$1;
(statearr_11029_11106[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (36))){
var state_10999__$1 = state_10999;
var statearr_11030_11107 = state_10999__$1;
(statearr_11030_11107[(2)] = false);

(statearr_11030_11107[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (41))){
var inst_10974 = (state_10999[(20)]);
var inst_10978 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_10979 = cljs.core.map.call(null,inst_10978,inst_10974);
var inst_10980 = cljs.core.pr_str.call(null,inst_10979);
var inst_10981 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10980)].join('');
var inst_10982 = figwheel.client.utils.log.call(null,inst_10981);
var state_10999__$1 = state_10999;
var statearr_11031_11108 = state_10999__$1;
(statearr_11031_11108[(2)] = inst_10982);

(statearr_11031_11108[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (43))){
var inst_10975 = (state_10999[(21)]);
var inst_10985 = (state_10999[(2)]);
var inst_10986 = cljs.core.not_empty.call(null,inst_10975);
var state_10999__$1 = (function (){var statearr_11032 = state_10999;
(statearr_11032[(27)] = inst_10985);

return statearr_11032;
})();
if(cljs.core.truth_(inst_10986)){
var statearr_11033_11109 = state_10999__$1;
(statearr_11033_11109[(1)] = (44));

} else {
var statearr_11034_11110 = state_10999__$1;
(statearr_11034_11110[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (29))){
var inst_10916 = (state_10999[(23)]);
var inst_10920 = (state_10999[(24)]);
var inst_10918 = (state_10999[(26)]);
var inst_10915 = (state_10999[(25)]);
var inst_10952 = (state_10999[(16)]);
var inst_10912 = (state_10999[(19)]);
var inst_10948 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_10951 = (function (){var all_files = inst_10912;
var res_SINGLEQUOTE_ = inst_10915;
var res = inst_10916;
var files_not_loaded = inst_10918;
var dependencies_that_loaded = inst_10920;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10916,inst_10920,inst_10918,inst_10915,inst_10952,inst_10912,inst_10948,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10950){
var map__11035 = p__10950;
var map__11035__$1 = ((((!((map__11035 == null)))?(((((map__11035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11035):map__11035);
var namespace = cljs.core.get.call(null,map__11035__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10916,inst_10920,inst_10918,inst_10915,inst_10952,inst_10912,inst_10948,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10952__$1 = cljs.core.group_by.call(null,inst_10951,inst_10918);
var inst_10954 = (inst_10952__$1 == null);
var inst_10955 = cljs.core.not.call(null,inst_10954);
var state_10999__$1 = (function (){var statearr_11037 = state_10999;
(statearr_11037[(28)] = inst_10948);

(statearr_11037[(16)] = inst_10952__$1);

return statearr_11037;
})();
if(inst_10955){
var statearr_11038_11111 = state_10999__$1;
(statearr_11038_11111[(1)] = (32));

} else {
var statearr_11039_11112 = state_10999__$1;
(statearr_11039_11112[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (44))){
var inst_10975 = (state_10999[(21)]);
var inst_10988 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_10975);
var inst_10989 = cljs.core.pr_str.call(null,inst_10988);
var inst_10990 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10989)].join('');
var inst_10991 = figwheel.client.utils.log.call(null,inst_10990);
var state_10999__$1 = state_10999;
var statearr_11040_11113 = state_10999__$1;
(statearr_11040_11113[(2)] = inst_10991);

(statearr_11040_11113[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (6))){
var inst_10893 = (state_10999[(2)]);
var state_10999__$1 = state_10999;
var statearr_11041_11114 = state_10999__$1;
(statearr_11041_11114[(2)] = inst_10893);

(statearr_11041_11114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (28))){
var inst_10918 = (state_10999[(26)]);
var inst_10945 = (state_10999[(2)]);
var inst_10946 = cljs.core.not_empty.call(null,inst_10918);
var state_10999__$1 = (function (){var statearr_11042 = state_10999;
(statearr_11042[(29)] = inst_10945);

return statearr_11042;
})();
if(cljs.core.truth_(inst_10946)){
var statearr_11043_11115 = state_10999__$1;
(statearr_11043_11115[(1)] = (29));

} else {
var statearr_11044_11116 = state_10999__$1;
(statearr_11044_11116[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (25))){
var inst_10916 = (state_10999[(23)]);
var inst_10932 = (state_10999[(2)]);
var inst_10933 = cljs.core.not_empty.call(null,inst_10916);
var state_10999__$1 = (function (){var statearr_11045 = state_10999;
(statearr_11045[(30)] = inst_10932);

return statearr_11045;
})();
if(cljs.core.truth_(inst_10933)){
var statearr_11046_11117 = state_10999__$1;
(statearr_11046_11117[(1)] = (26));

} else {
var statearr_11047_11118 = state_10999__$1;
(statearr_11047_11118[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (34))){
var inst_10968 = (state_10999[(2)]);
var state_10999__$1 = state_10999;
if(cljs.core.truth_(inst_10968)){
var statearr_11048_11119 = state_10999__$1;
(statearr_11048_11119[(1)] = (38));

} else {
var statearr_11049_11120 = state_10999__$1;
(statearr_11049_11120[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (17))){
var state_10999__$1 = state_10999;
var statearr_11050_11121 = state_10999__$1;
(statearr_11050_11121[(2)] = recompile_dependents);

(statearr_11050_11121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (3))){
var state_10999__$1 = state_10999;
var statearr_11051_11122 = state_10999__$1;
(statearr_11051_11122[(2)] = null);

(statearr_11051_11122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (12))){
var inst_10889 = (state_10999[(2)]);
var state_10999__$1 = state_10999;
var statearr_11052_11123 = state_10999__$1;
(statearr_11052_11123[(2)] = inst_10889);

(statearr_11052_11123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (2))){
var inst_10851 = (state_10999[(13)]);
var inst_10858 = cljs.core.seq.call(null,inst_10851);
var inst_10859 = inst_10858;
var inst_10860 = null;
var inst_10861 = (0);
var inst_10862 = (0);
var state_10999__$1 = (function (){var statearr_11053 = state_10999;
(statearr_11053[(7)] = inst_10862);

(statearr_11053[(8)] = inst_10861);

(statearr_11053[(9)] = inst_10860);

(statearr_11053[(10)] = inst_10859);

return statearr_11053;
})();
var statearr_11054_11124 = state_10999__$1;
(statearr_11054_11124[(2)] = null);

(statearr_11054_11124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (23))){
var inst_10916 = (state_10999[(23)]);
var inst_10920 = (state_10999[(24)]);
var inst_10918 = (state_10999[(26)]);
var inst_10915 = (state_10999[(25)]);
var inst_10912 = (state_10999[(19)]);
var inst_10923 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_10925 = (function (){var all_files = inst_10912;
var res_SINGLEQUOTE_ = inst_10915;
var res = inst_10916;
var files_not_loaded = inst_10918;
var dependencies_that_loaded = inst_10920;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10916,inst_10920,inst_10918,inst_10915,inst_10912,inst_10923,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10924){
var map__11055 = p__10924;
var map__11055__$1 = ((((!((map__11055 == null)))?(((((map__11055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11055):map__11055);
var request_url = cljs.core.get.call(null,map__11055__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10916,inst_10920,inst_10918,inst_10915,inst_10912,inst_10923,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10926 = cljs.core.reverse.call(null,inst_10920);
var inst_10927 = cljs.core.map.call(null,inst_10925,inst_10926);
var inst_10928 = cljs.core.pr_str.call(null,inst_10927);
var inst_10929 = figwheel.client.utils.log.call(null,inst_10928);
var state_10999__$1 = (function (){var statearr_11057 = state_10999;
(statearr_11057[(31)] = inst_10923);

return statearr_11057;
})();
var statearr_11058_11125 = state_10999__$1;
(statearr_11058_11125[(2)] = inst_10929);

(statearr_11058_11125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (35))){
var state_10999__$1 = state_10999;
var statearr_11059_11126 = state_10999__$1;
(statearr_11059_11126[(2)] = true);

(statearr_11059_11126[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (19))){
var inst_10902 = (state_10999[(12)]);
var inst_10908 = figwheel.client.file_reloading.expand_files.call(null,inst_10902);
var state_10999__$1 = state_10999;
var statearr_11060_11127 = state_10999__$1;
(statearr_11060_11127[(2)] = inst_10908);

(statearr_11060_11127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (11))){
var state_10999__$1 = state_10999;
var statearr_11061_11128 = state_10999__$1;
(statearr_11061_11128[(2)] = null);

(statearr_11061_11128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (9))){
var inst_10891 = (state_10999[(2)]);
var state_10999__$1 = state_10999;
var statearr_11062_11129 = state_10999__$1;
(statearr_11062_11129[(2)] = inst_10891);

(statearr_11062_11129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (5))){
var inst_10862 = (state_10999[(7)]);
var inst_10861 = (state_10999[(8)]);
var inst_10864 = (inst_10862 < inst_10861);
var inst_10865 = inst_10864;
var state_10999__$1 = state_10999;
if(cljs.core.truth_(inst_10865)){
var statearr_11063_11130 = state_10999__$1;
(statearr_11063_11130[(1)] = (7));

} else {
var statearr_11064_11131 = state_10999__$1;
(statearr_11064_11131[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (14))){
var inst_10872 = (state_10999[(22)]);
var inst_10881 = cljs.core.first.call(null,inst_10872);
var inst_10882 = figwheel.client.file_reloading.eval_body.call(null,inst_10881,opts);
var inst_10883 = cljs.core.next.call(null,inst_10872);
var inst_10859 = inst_10883;
var inst_10860 = null;
var inst_10861 = (0);
var inst_10862 = (0);
var state_10999__$1 = (function (){var statearr_11065 = state_10999;
(statearr_11065[(7)] = inst_10862);

(statearr_11065[(32)] = inst_10882);

(statearr_11065[(8)] = inst_10861);

(statearr_11065[(9)] = inst_10860);

(statearr_11065[(10)] = inst_10859);

return statearr_11065;
})();
var statearr_11066_11132 = state_10999__$1;
(statearr_11066_11132[(2)] = null);

(statearr_11066_11132[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (45))){
var state_10999__$1 = state_10999;
var statearr_11067_11133 = state_10999__$1;
(statearr_11067_11133[(2)] = null);

(statearr_11067_11133[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (26))){
var inst_10916 = (state_10999[(23)]);
var inst_10920 = (state_10999[(24)]);
var inst_10918 = (state_10999[(26)]);
var inst_10915 = (state_10999[(25)]);
var inst_10912 = (state_10999[(19)]);
var inst_10935 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_10937 = (function (){var all_files = inst_10912;
var res_SINGLEQUOTE_ = inst_10915;
var res = inst_10916;
var files_not_loaded = inst_10918;
var dependencies_that_loaded = inst_10920;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10916,inst_10920,inst_10918,inst_10915,inst_10912,inst_10935,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10936){
var map__11068 = p__10936;
var map__11068__$1 = ((((!((map__11068 == null)))?(((((map__11068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11068):map__11068);
var namespace = cljs.core.get.call(null,map__11068__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__11068__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10916,inst_10920,inst_10918,inst_10915,inst_10912,inst_10935,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10938 = cljs.core.map.call(null,inst_10937,inst_10916);
var inst_10939 = cljs.core.pr_str.call(null,inst_10938);
var inst_10940 = figwheel.client.utils.log.call(null,inst_10939);
var inst_10941 = (function (){var all_files = inst_10912;
var res_SINGLEQUOTE_ = inst_10915;
var res = inst_10916;
var files_not_loaded = inst_10918;
var dependencies_that_loaded = inst_10920;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10916,inst_10920,inst_10918,inst_10915,inst_10912,inst_10935,inst_10937,inst_10938,inst_10939,inst_10940,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10916,inst_10920,inst_10918,inst_10915,inst_10912,inst_10935,inst_10937,inst_10938,inst_10939,inst_10940,state_val_11000,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10942 = setTimeout(inst_10941,(10));
var state_10999__$1 = (function (){var statearr_11070 = state_10999;
(statearr_11070[(33)] = inst_10940);

(statearr_11070[(34)] = inst_10935);

return statearr_11070;
})();
var statearr_11071_11134 = state_10999__$1;
(statearr_11071_11134[(2)] = inst_10942);

(statearr_11071_11134[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (16))){
var state_10999__$1 = state_10999;
var statearr_11072_11135 = state_10999__$1;
(statearr_11072_11135[(2)] = reload_dependents);

(statearr_11072_11135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (38))){
var inst_10952 = (state_10999[(16)]);
var inst_10970 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10952);
var state_10999__$1 = state_10999;
var statearr_11073_11136 = state_10999__$1;
(statearr_11073_11136[(2)] = inst_10970);

(statearr_11073_11136[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (30))){
var state_10999__$1 = state_10999;
var statearr_11074_11137 = state_10999__$1;
(statearr_11074_11137[(2)] = null);

(statearr_11074_11137[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (10))){
var inst_10872 = (state_10999[(22)]);
var inst_10874 = cljs.core.chunked_seq_QMARK_.call(null,inst_10872);
var state_10999__$1 = state_10999;
if(inst_10874){
var statearr_11075_11138 = state_10999__$1;
(statearr_11075_11138[(1)] = (13));

} else {
var statearr_11076_11139 = state_10999__$1;
(statearr_11076_11139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (18))){
var inst_10906 = (state_10999[(2)]);
var state_10999__$1 = state_10999;
if(cljs.core.truth_(inst_10906)){
var statearr_11077_11140 = state_10999__$1;
(statearr_11077_11140[(1)] = (19));

} else {
var statearr_11078_11141 = state_10999__$1;
(statearr_11078_11141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (42))){
var state_10999__$1 = state_10999;
var statearr_11079_11142 = state_10999__$1;
(statearr_11079_11142[(2)] = null);

(statearr_11079_11142[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (37))){
var inst_10965 = (state_10999[(2)]);
var state_10999__$1 = state_10999;
var statearr_11080_11143 = state_10999__$1;
(statearr_11080_11143[(2)] = inst_10965);

(statearr_11080_11143[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11000 === (8))){
var inst_10872 = (state_10999[(22)]);
var inst_10859 = (state_10999[(10)]);
var inst_10872__$1 = cljs.core.seq.call(null,inst_10859);
var state_10999__$1 = (function (){var statearr_11081 = state_10999;
(statearr_11081[(22)] = inst_10872__$1);

return statearr_11081;
})();
if(inst_10872__$1){
var statearr_11082_11144 = state_10999__$1;
(statearr_11082_11144[(1)] = (10));

} else {
var statearr_11083_11145 = state_10999__$1;
(statearr_11083_11145[(1)] = (11));

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
});})(c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__1996__auto__,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0 = (function (){
var statearr_11084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11084[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__);

(statearr_11084[(1)] = (1));

return statearr_11084;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1 = (function (state_10999){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_10999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e11085){if((e11085 instanceof Object)){
var ex__2000__auto__ = e11085;
var statearr_11086_11146 = state_10999;
(statearr_11086_11146[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11147 = state_10999;
state_10999 = G__11147;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__ = function(state_10999){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1.call(this,state_10999);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__2153__auto__ = (function (){var statearr_11087 = f__2152__auto__.call(null);
(statearr_11087[(6)] = c__2151__auto__);

return statearr_11087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__,map__10844,map__10844__$1,opts,before_jsload,on_jsload,reload_dependents,map__10845,map__10845__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__2151__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__11150,link){
var map__11151 = p__11150;
var map__11151__$1 = ((((!((map__11151 == null)))?(((((map__11151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11151):map__11151);
var file = cljs.core.get.call(null,map__11151__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__11151,map__11151__$1,file){
return (function (p1__11148_SHARP_,p2__11149_SHARP_){
if(cljs.core._EQ_.call(null,p1__11148_SHARP_,p2__11149_SHARP_)){
return p1__11148_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__11151,map__11151__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__11154){
var map__11155 = p__11154;
var map__11155__$1 = ((((!((map__11155 == null)))?(((((map__11155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11155):map__11155);
var match_length = cljs.core.get.call(null,map__11155__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__11155__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__11153_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__11153_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__11157_SHARP_,p2__11158_SHARP_){
return cljs.core.assoc.call(null,p1__11157_SHARP_,cljs.core.get.call(null,p2__11158_SHARP_,key),p2__11158_SHARP_);
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
var loaded_f_datas_11159 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_11159);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_11159);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__11160,p__11161){
var map__11162 = p__11160;
var map__11162__$1 = ((((!((map__11162 == null)))?(((((map__11162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11162):map__11162);
var on_cssload = cljs.core.get.call(null,map__11162__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__11163 = p__11161;
var map__11163__$1 = ((((!((map__11163 == null)))?(((((map__11163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11163):map__11163);
var files_msg = map__11163__$1;
var files = cljs.core.get.call(null,map__11163__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
