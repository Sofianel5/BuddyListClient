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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__10548_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__10548_SHARP_));
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
var seq__10549 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__10550 = null;
var count__10551 = (0);
var i__10552 = (0);
while(true){
if((i__10552 < count__10551)){
var n = cljs.core._nth.call(null,chunk__10550,i__10552);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__10553 = seq__10549;
var G__10554 = chunk__10550;
var G__10555 = count__10551;
var G__10556 = (i__10552 + (1));
seq__10549 = G__10553;
chunk__10550 = G__10554;
count__10551 = G__10555;
i__10552 = G__10556;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10549);
if(temp__4657__auto__){
var seq__10549__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10549__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__10549__$1);
var G__10557 = cljs.core.chunk_rest.call(null,seq__10549__$1);
var G__10558 = c__4317__auto__;
var G__10559 = cljs.core.count.call(null,c__4317__auto__);
var G__10560 = (0);
seq__10549 = G__10557;
chunk__10550 = G__10558;
count__10551 = G__10559;
i__10552 = G__10560;
continue;
} else {
var n = cljs.core.first.call(null,seq__10549__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__10561 = cljs.core.next.call(null,seq__10549__$1);
var G__10562 = null;
var G__10563 = (0);
var G__10564 = (0);
seq__10549 = G__10561;
chunk__10550 = G__10562;
count__10551 = G__10563;
i__10552 = G__10564;
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

var seq__10574_10582 = cljs.core.seq.call(null,deps);
var chunk__10575_10583 = null;
var count__10576_10584 = (0);
var i__10577_10585 = (0);
while(true){
if((i__10577_10585 < count__10576_10584)){
var dep_10586 = cljs.core._nth.call(null,chunk__10575_10583,i__10577_10585);
topo_sort_helper_STAR_.call(null,dep_10586,(depth + (1)),state);


var G__10587 = seq__10574_10582;
var G__10588 = chunk__10575_10583;
var G__10589 = count__10576_10584;
var G__10590 = (i__10577_10585 + (1));
seq__10574_10582 = G__10587;
chunk__10575_10583 = G__10588;
count__10576_10584 = G__10589;
i__10577_10585 = G__10590;
continue;
} else {
var temp__4657__auto___10591 = cljs.core.seq.call(null,seq__10574_10582);
if(temp__4657__auto___10591){
var seq__10574_10592__$1 = temp__4657__auto___10591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10574_10592__$1)){
var c__4317__auto___10593 = cljs.core.chunk_first.call(null,seq__10574_10592__$1);
var G__10594 = cljs.core.chunk_rest.call(null,seq__10574_10592__$1);
var G__10595 = c__4317__auto___10593;
var G__10596 = cljs.core.count.call(null,c__4317__auto___10593);
var G__10597 = (0);
seq__10574_10582 = G__10594;
chunk__10575_10583 = G__10595;
count__10576_10584 = G__10596;
i__10577_10585 = G__10597;
continue;
} else {
var dep_10598 = cljs.core.first.call(null,seq__10574_10592__$1);
topo_sort_helper_STAR_.call(null,dep_10598,(depth + (1)),state);


var G__10599 = cljs.core.next.call(null,seq__10574_10592__$1);
var G__10600 = null;
var G__10601 = (0);
var G__10602 = (0);
seq__10574_10582 = G__10599;
chunk__10575_10583 = G__10600;
count__10576_10584 = G__10601;
i__10577_10585 = G__10602;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__10578){
var vec__10579 = p__10578;
var seq__10580 = cljs.core.seq.call(null,vec__10579);
var first__10581 = cljs.core.first.call(null,seq__10580);
var seq__10580__$1 = cljs.core.next.call(null,seq__10580);
var x = first__10581;
var xs = seq__10580__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__10579,seq__10580,first__10581,seq__10580__$1,x,xs,get_deps__$1){
return (function (p1__10565_SHARP_){
return clojure.set.difference.call(null,p1__10565_SHARP_,x);
});})(vec__10579,seq__10580,first__10581,seq__10580__$1,x,xs,get_deps__$1))
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
var seq__10603 = cljs.core.seq.call(null,provides);
var chunk__10604 = null;
var count__10605 = (0);
var i__10606 = (0);
while(true){
if((i__10606 < count__10605)){
var prov = cljs.core._nth.call(null,chunk__10604,i__10606);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__10607_10615 = cljs.core.seq.call(null,requires);
var chunk__10608_10616 = null;
var count__10609_10617 = (0);
var i__10610_10618 = (0);
while(true){
if((i__10610_10618 < count__10609_10617)){
var req_10619 = cljs.core._nth.call(null,chunk__10608_10616,i__10610_10618);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10619,prov);


var G__10620 = seq__10607_10615;
var G__10621 = chunk__10608_10616;
var G__10622 = count__10609_10617;
var G__10623 = (i__10610_10618 + (1));
seq__10607_10615 = G__10620;
chunk__10608_10616 = G__10621;
count__10609_10617 = G__10622;
i__10610_10618 = G__10623;
continue;
} else {
var temp__4657__auto___10624 = cljs.core.seq.call(null,seq__10607_10615);
if(temp__4657__auto___10624){
var seq__10607_10625__$1 = temp__4657__auto___10624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10607_10625__$1)){
var c__4317__auto___10626 = cljs.core.chunk_first.call(null,seq__10607_10625__$1);
var G__10627 = cljs.core.chunk_rest.call(null,seq__10607_10625__$1);
var G__10628 = c__4317__auto___10626;
var G__10629 = cljs.core.count.call(null,c__4317__auto___10626);
var G__10630 = (0);
seq__10607_10615 = G__10627;
chunk__10608_10616 = G__10628;
count__10609_10617 = G__10629;
i__10610_10618 = G__10630;
continue;
} else {
var req_10631 = cljs.core.first.call(null,seq__10607_10625__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10631,prov);


var G__10632 = cljs.core.next.call(null,seq__10607_10625__$1);
var G__10633 = null;
var G__10634 = (0);
var G__10635 = (0);
seq__10607_10615 = G__10632;
chunk__10608_10616 = G__10633;
count__10609_10617 = G__10634;
i__10610_10618 = G__10635;
continue;
}
} else {
}
}
break;
}


var G__10636 = seq__10603;
var G__10637 = chunk__10604;
var G__10638 = count__10605;
var G__10639 = (i__10606 + (1));
seq__10603 = G__10636;
chunk__10604 = G__10637;
count__10605 = G__10638;
i__10606 = G__10639;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10603);
if(temp__4657__auto__){
var seq__10603__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10603__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__10603__$1);
var G__10640 = cljs.core.chunk_rest.call(null,seq__10603__$1);
var G__10641 = c__4317__auto__;
var G__10642 = cljs.core.count.call(null,c__4317__auto__);
var G__10643 = (0);
seq__10603 = G__10640;
chunk__10604 = G__10641;
count__10605 = G__10642;
i__10606 = G__10643;
continue;
} else {
var prov = cljs.core.first.call(null,seq__10603__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__10611_10644 = cljs.core.seq.call(null,requires);
var chunk__10612_10645 = null;
var count__10613_10646 = (0);
var i__10614_10647 = (0);
while(true){
if((i__10614_10647 < count__10613_10646)){
var req_10648 = cljs.core._nth.call(null,chunk__10612_10645,i__10614_10647);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10648,prov);


var G__10649 = seq__10611_10644;
var G__10650 = chunk__10612_10645;
var G__10651 = count__10613_10646;
var G__10652 = (i__10614_10647 + (1));
seq__10611_10644 = G__10649;
chunk__10612_10645 = G__10650;
count__10613_10646 = G__10651;
i__10614_10647 = G__10652;
continue;
} else {
var temp__4657__auto___10653__$1 = cljs.core.seq.call(null,seq__10611_10644);
if(temp__4657__auto___10653__$1){
var seq__10611_10654__$1 = temp__4657__auto___10653__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10611_10654__$1)){
var c__4317__auto___10655 = cljs.core.chunk_first.call(null,seq__10611_10654__$1);
var G__10656 = cljs.core.chunk_rest.call(null,seq__10611_10654__$1);
var G__10657 = c__4317__auto___10655;
var G__10658 = cljs.core.count.call(null,c__4317__auto___10655);
var G__10659 = (0);
seq__10611_10644 = G__10656;
chunk__10612_10645 = G__10657;
count__10613_10646 = G__10658;
i__10614_10647 = G__10659;
continue;
} else {
var req_10660 = cljs.core.first.call(null,seq__10611_10654__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10660,prov);


var G__10661 = cljs.core.next.call(null,seq__10611_10654__$1);
var G__10662 = null;
var G__10663 = (0);
var G__10664 = (0);
seq__10611_10644 = G__10661;
chunk__10612_10645 = G__10662;
count__10613_10646 = G__10663;
i__10614_10647 = G__10664;
continue;
}
} else {
}
}
break;
}


var G__10665 = cljs.core.next.call(null,seq__10603__$1);
var G__10666 = null;
var G__10667 = (0);
var G__10668 = (0);
seq__10603 = G__10665;
chunk__10604 = G__10666;
count__10605 = G__10667;
i__10606 = G__10668;
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
var seq__10669_10673 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__10670_10674 = null;
var count__10671_10675 = (0);
var i__10672_10676 = (0);
while(true){
if((i__10672_10676 < count__10671_10675)){
var ns_10677 = cljs.core._nth.call(null,chunk__10670_10674,i__10672_10676);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_10677);


var G__10678 = seq__10669_10673;
var G__10679 = chunk__10670_10674;
var G__10680 = count__10671_10675;
var G__10681 = (i__10672_10676 + (1));
seq__10669_10673 = G__10678;
chunk__10670_10674 = G__10679;
count__10671_10675 = G__10680;
i__10672_10676 = G__10681;
continue;
} else {
var temp__4657__auto___10682 = cljs.core.seq.call(null,seq__10669_10673);
if(temp__4657__auto___10682){
var seq__10669_10683__$1 = temp__4657__auto___10682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10669_10683__$1)){
var c__4317__auto___10684 = cljs.core.chunk_first.call(null,seq__10669_10683__$1);
var G__10685 = cljs.core.chunk_rest.call(null,seq__10669_10683__$1);
var G__10686 = c__4317__auto___10684;
var G__10687 = cljs.core.count.call(null,c__4317__auto___10684);
var G__10688 = (0);
seq__10669_10673 = G__10685;
chunk__10670_10674 = G__10686;
count__10671_10675 = G__10687;
i__10672_10676 = G__10688;
continue;
} else {
var ns_10689 = cljs.core.first.call(null,seq__10669_10683__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_10689);


var G__10690 = cljs.core.next.call(null,seq__10669_10683__$1);
var G__10691 = null;
var G__10692 = (0);
var G__10693 = (0);
seq__10669_10673 = G__10690;
chunk__10670_10674 = G__10691;
count__10671_10675 = G__10692;
i__10672_10676 = G__10693;
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
var G__10694__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__10694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10695__i = 0, G__10695__a = new Array(arguments.length -  0);
while (G__10695__i < G__10695__a.length) {G__10695__a[G__10695__i] = arguments[G__10695__i + 0]; ++G__10695__i;}
  args = new cljs.core.IndexedSeq(G__10695__a,0,null);
} 
return G__10694__delegate.call(this,args);};
G__10694.cljs$lang$maxFixedArity = 0;
G__10694.cljs$lang$applyTo = (function (arglist__10696){
var args = cljs.core.seq(arglist__10696);
return G__10694__delegate(args);
});
G__10694.cljs$core$IFn$_invoke$arity$variadic = G__10694__delegate;
return G__10694;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__10697 = cljs.core._EQ_;
var expr__10698 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__10697.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__10698))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__10697,expr__10698){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__10697,expr__10698))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__10697,expr__10698){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e10700){if((e10700 instanceof Error)){
var e = e10700;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e10700;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__10697,expr__10698))
} else {
if(cljs.core.truth_(pred__10697.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__10698))){
return ((function (pred__10697,expr__10698){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__10697,expr__10698){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__10697,expr__10698))
);

return deferred.addErrback(((function (deferred,pred__10697,expr__10698){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__10697,expr__10698))
);
});
;})(pred__10697,expr__10698))
} else {
if(cljs.core.truth_(pred__10697.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__10698))){
return ((function (pred__10697,expr__10698){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e10701){if((e10701 instanceof Error)){
var e = e10701;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e10701;

}
}})());
});
;})(pred__10697,expr__10698))
} else {
return ((function (pred__10697,expr__10698){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__10697,expr__10698))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__10702,callback){
var map__10703 = p__10702;
var map__10703__$1 = ((((!((map__10703 == null)))?(((((map__10703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10703):map__10703);
var file_msg = map__10703__$1;
var request_url = cljs.core.get.call(null,map__10703__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__10703,map__10703__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__10703,map__10703__$1,file_msg,request_url))
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
return (function (state_10727){
var state_val_10728 = (state_10727[(1)]);
if((state_val_10728 === (7))){
var inst_10723 = (state_10727[(2)]);
var state_10727__$1 = state_10727;
var statearr_10729_10746 = state_10727__$1;
(statearr_10729_10746[(2)] = inst_10723);

(statearr_10729_10746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10728 === (1))){
var state_10727__$1 = state_10727;
var statearr_10730_10747 = state_10727__$1;
(statearr_10730_10747[(2)] = null);

(statearr_10730_10747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10728 === (4))){
var inst_10707 = (state_10727[(7)]);
var inst_10707__$1 = (state_10727[(2)]);
var state_10727__$1 = (function (){var statearr_10731 = state_10727;
(statearr_10731[(7)] = inst_10707__$1);

return statearr_10731;
})();
if(cljs.core.truth_(inst_10707__$1)){
var statearr_10732_10748 = state_10727__$1;
(statearr_10732_10748[(1)] = (5));

} else {
var statearr_10733_10749 = state_10727__$1;
(statearr_10733_10749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10728 === (6))){
var state_10727__$1 = state_10727;
var statearr_10734_10750 = state_10727__$1;
(statearr_10734_10750[(2)] = null);

(statearr_10734_10750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10728 === (3))){
var inst_10725 = (state_10727[(2)]);
var state_10727__$1 = state_10727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10727__$1,inst_10725);
} else {
if((state_val_10728 === (2))){
var state_10727__$1 = state_10727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10727__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_10728 === (11))){
var inst_10719 = (state_10727[(2)]);
var state_10727__$1 = (function (){var statearr_10735 = state_10727;
(statearr_10735[(8)] = inst_10719);

return statearr_10735;
})();
var statearr_10736_10751 = state_10727__$1;
(statearr_10736_10751[(2)] = null);

(statearr_10736_10751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10728 === (9))){
var inst_10713 = (state_10727[(9)]);
var inst_10711 = (state_10727[(10)]);
var inst_10715 = inst_10713.call(null,inst_10711);
var state_10727__$1 = state_10727;
var statearr_10737_10752 = state_10727__$1;
(statearr_10737_10752[(2)] = inst_10715);

(statearr_10737_10752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10728 === (5))){
var inst_10707 = (state_10727[(7)]);
var inst_10709 = figwheel.client.file_reloading.blocking_load.call(null,inst_10707);
var state_10727__$1 = state_10727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10727__$1,(8),inst_10709);
} else {
if((state_val_10728 === (10))){
var inst_10711 = (state_10727[(10)]);
var inst_10717 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_10711);
var state_10727__$1 = state_10727;
var statearr_10738_10753 = state_10727__$1;
(statearr_10738_10753[(2)] = inst_10717);

(statearr_10738_10753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10728 === (8))){
var inst_10713 = (state_10727[(9)]);
var inst_10707 = (state_10727[(7)]);
var inst_10711 = (state_10727[(2)]);
var inst_10712 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_10713__$1 = cljs.core.get.call(null,inst_10712,inst_10707);
var state_10727__$1 = (function (){var statearr_10739 = state_10727;
(statearr_10739[(9)] = inst_10713__$1);

(statearr_10739[(10)] = inst_10711);

return statearr_10739;
})();
if(cljs.core.truth_(inst_10713__$1)){
var statearr_10740_10754 = state_10727__$1;
(statearr_10740_10754[(1)] = (9));

} else {
var statearr_10741_10755 = state_10727__$1;
(statearr_10741_10755[(1)] = (10));

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
var statearr_10742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10742[(0)] = figwheel$client$file_reloading$state_machine__1997__auto__);

(statearr_10742[(1)] = (1));

return statearr_10742;
});
var figwheel$client$file_reloading$state_machine__1997__auto____1 = (function (state_10727){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_10727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e10743){if((e10743 instanceof Object)){
var ex__2000__auto__ = e10743;
var statearr_10744_10756 = state_10727;
(statearr_10744_10756[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10757 = state_10727;
state_10727 = G__10757;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__1997__auto__ = function(state_10727){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__1997__auto____1.call(this,state_10727);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__1997__auto____0;
figwheel$client$file_reloading$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__1997__auto____1;
return figwheel$client$file_reloading$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__))
})();
var state__2153__auto__ = (function (){var statearr_10745 = f__2152__auto__.call(null);
(statearr_10745[(6)] = c__2151__auto__);

return statearr_10745;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__10758,callback){
var map__10759 = p__10758;
var map__10759__$1 = ((((!((map__10759 == null)))?(((((map__10759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10759):map__10759);
var file_msg = map__10759__$1;
var namespace = cljs.core.get.call(null,map__10759__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__10759,map__10759__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__10759,map__10759__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__10761){
var map__10762 = p__10761;
var map__10762__$1 = ((((!((map__10762 == null)))?(((((map__10762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10762):map__10762);
var file_msg = map__10762__$1;
var namespace = cljs.core.get.call(null,map__10762__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__10764){
var map__10765 = p__10764;
var map__10765__$1 = ((((!((map__10765 == null)))?(((((map__10765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10765):map__10765);
var file_msg = map__10765__$1;
var namespace = cljs.core.get.call(null,map__10765__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__10767,callback){
var map__10768 = p__10767;
var map__10768__$1 = ((((!((map__10768 == null)))?(((((map__10768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10768):map__10768);
var file_msg = map__10768__$1;
var request_url = cljs.core.get.call(null,map__10768__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__10768__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__2151__auto___10818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___10818,out){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___10818,out){
return (function (state_10803){
var state_val_10804 = (state_10803[(1)]);
if((state_val_10804 === (1))){
var inst_10777 = cljs.core.seq.call(null,files);
var inst_10778 = cljs.core.first.call(null,inst_10777);
var inst_10779 = cljs.core.next.call(null,inst_10777);
var inst_10780 = files;
var state_10803__$1 = (function (){var statearr_10805 = state_10803;
(statearr_10805[(7)] = inst_10779);

(statearr_10805[(8)] = inst_10780);

(statearr_10805[(9)] = inst_10778);

return statearr_10805;
})();
var statearr_10806_10819 = state_10803__$1;
(statearr_10806_10819[(2)] = null);

(statearr_10806_10819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10804 === (2))){
var inst_10786 = (state_10803[(10)]);
var inst_10780 = (state_10803[(8)]);
var inst_10785 = cljs.core.seq.call(null,inst_10780);
var inst_10786__$1 = cljs.core.first.call(null,inst_10785);
var inst_10787 = cljs.core.next.call(null,inst_10785);
var inst_10788 = (inst_10786__$1 == null);
var inst_10789 = cljs.core.not.call(null,inst_10788);
var state_10803__$1 = (function (){var statearr_10807 = state_10803;
(statearr_10807[(10)] = inst_10786__$1);

(statearr_10807[(11)] = inst_10787);

return statearr_10807;
})();
if(inst_10789){
var statearr_10808_10820 = state_10803__$1;
(statearr_10808_10820[(1)] = (4));

} else {
var statearr_10809_10821 = state_10803__$1;
(statearr_10809_10821[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10804 === (3))){
var inst_10801 = (state_10803[(2)]);
var state_10803__$1 = state_10803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10803__$1,inst_10801);
} else {
if((state_val_10804 === (4))){
var inst_10786 = (state_10803[(10)]);
var inst_10791 = figwheel.client.file_reloading.reload_js_file.call(null,inst_10786);
var state_10803__$1 = state_10803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10803__$1,(7),inst_10791);
} else {
if((state_val_10804 === (5))){
var inst_10797 = cljs.core.async.close_BANG_.call(null,out);
var state_10803__$1 = state_10803;
var statearr_10810_10822 = state_10803__$1;
(statearr_10810_10822[(2)] = inst_10797);

(statearr_10810_10822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10804 === (6))){
var inst_10799 = (state_10803[(2)]);
var state_10803__$1 = state_10803;
var statearr_10811_10823 = state_10803__$1;
(statearr_10811_10823[(2)] = inst_10799);

(statearr_10811_10823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10804 === (7))){
var inst_10787 = (state_10803[(11)]);
var inst_10793 = (state_10803[(2)]);
var inst_10794 = cljs.core.async.put_BANG_.call(null,out,inst_10793);
var inst_10780 = inst_10787;
var state_10803__$1 = (function (){var statearr_10812 = state_10803;
(statearr_10812[(8)] = inst_10780);

(statearr_10812[(12)] = inst_10794);

return statearr_10812;
})();
var statearr_10813_10824 = state_10803__$1;
(statearr_10813_10824[(2)] = null);

(statearr_10813_10824[(1)] = (2));


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
});})(c__2151__auto___10818,out))
;
return ((function (switch__1996__auto__,c__2151__auto___10818,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0 = (function (){
var statearr_10814 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10814[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__);

(statearr_10814[(1)] = (1));

return statearr_10814;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1 = (function (state_10803){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_10803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e10815){if((e10815 instanceof Object)){
var ex__2000__auto__ = e10815;
var statearr_10816_10825 = state_10803;
(statearr_10816_10825[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10826 = state_10803;
state_10803 = G__10826;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__ = function(state_10803){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1.call(this,state_10803);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___10818,out))
})();
var state__2153__auto__ = (function (){var statearr_10817 = f__2152__auto__.call(null);
(statearr_10817[(6)] = c__2151__auto___10818);

return statearr_10817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___10818,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__10827,opts){
var map__10828 = p__10827;
var map__10828__$1 = ((((!((map__10828 == null)))?(((((map__10828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10828):map__10828);
var eval_body = cljs.core.get.call(null,map__10828__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__10828__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e10830){var e = e10830;
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
return (function (p1__10831_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__10831_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__10832){
var vec__10833 = p__10832;
var k = cljs.core.nth.call(null,vec__10833,(0),null);
var v = cljs.core.nth.call(null,vec__10833,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__10836){
var vec__10837 = p__10836;
var k = cljs.core.nth.call(null,vec__10837,(0),null);
var v = cljs.core.nth.call(null,vec__10837,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__10843,p__10844){
var map__10845 = p__10843;
var map__10845__$1 = ((((!((map__10845 == null)))?(((((map__10845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10845):map__10845);
var opts = map__10845__$1;
var before_jsload = cljs.core.get.call(null,map__10845__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__10845__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__10845__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__10846 = p__10844;
var map__10846__$1 = ((((!((map__10846 == null)))?(((((map__10846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10846):map__10846);
var msg = map__10846__$1;
var files = cljs.core.get.call(null,map__10846__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__10846__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__10846__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_11000){
var state_val_11001 = (state_11000[(1)]);
if((state_val_11001 === (7))){
var inst_10862 = (state_11000[(7)]);
var inst_10863 = (state_11000[(8)]);
var inst_10861 = (state_11000[(9)]);
var inst_10860 = (state_11000[(10)]);
var inst_10868 = cljs.core._nth.call(null,inst_10861,inst_10863);
var inst_10869 = figwheel.client.file_reloading.eval_body.call(null,inst_10868,opts);
var inst_10870 = (inst_10863 + (1));
var tmp11002 = inst_10862;
var tmp11003 = inst_10861;
var tmp11004 = inst_10860;
var inst_10860__$1 = tmp11004;
var inst_10861__$1 = tmp11003;
var inst_10862__$1 = tmp11002;
var inst_10863__$1 = inst_10870;
var state_11000__$1 = (function (){var statearr_11005 = state_11000;
(statearr_11005[(7)] = inst_10862__$1);

(statearr_11005[(8)] = inst_10863__$1);

(statearr_11005[(9)] = inst_10861__$1);

(statearr_11005[(10)] = inst_10860__$1);

(statearr_11005[(11)] = inst_10869);

return statearr_11005;
})();
var statearr_11006_11089 = state_11000__$1;
(statearr_11006_11089[(2)] = null);

(statearr_11006_11089[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (20))){
var inst_10903 = (state_11000[(12)]);
var inst_10911 = figwheel.client.file_reloading.sort_files.call(null,inst_10903);
var state_11000__$1 = state_11000;
var statearr_11007_11090 = state_11000__$1;
(statearr_11007_11090[(2)] = inst_10911);

(statearr_11007_11090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (27))){
var state_11000__$1 = state_11000;
var statearr_11008_11091 = state_11000__$1;
(statearr_11008_11091[(2)] = null);

(statearr_11008_11091[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (1))){
var inst_10852 = (state_11000[(13)]);
var inst_10849 = before_jsload.call(null,files);
var inst_10850 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_10851 = (function (){return ((function (inst_10852,inst_10849,inst_10850,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10840_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__10840_SHARP_);
});
;})(inst_10852,inst_10849,inst_10850,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10852__$1 = cljs.core.filter.call(null,inst_10851,files);
var inst_10853 = cljs.core.not_empty.call(null,inst_10852__$1);
var state_11000__$1 = (function (){var statearr_11009 = state_11000;
(statearr_11009[(14)] = inst_10850);

(statearr_11009[(15)] = inst_10849);

(statearr_11009[(13)] = inst_10852__$1);

return statearr_11009;
})();
if(cljs.core.truth_(inst_10853)){
var statearr_11010_11092 = state_11000__$1;
(statearr_11010_11092[(1)] = (2));

} else {
var statearr_11011_11093 = state_11000__$1;
(statearr_11011_11093[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (24))){
var state_11000__$1 = state_11000;
var statearr_11012_11094 = state_11000__$1;
(statearr_11012_11094[(2)] = null);

(statearr_11012_11094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (39))){
var inst_10953 = (state_11000[(16)]);
var state_11000__$1 = state_11000;
var statearr_11013_11095 = state_11000__$1;
(statearr_11013_11095[(2)] = inst_10953);

(statearr_11013_11095[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (46))){
var inst_10995 = (state_11000[(2)]);
var state_11000__$1 = state_11000;
var statearr_11014_11096 = state_11000__$1;
(statearr_11014_11096[(2)] = inst_10995);

(statearr_11014_11096[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (4))){
var inst_10897 = (state_11000[(2)]);
var inst_10898 = cljs.core.List.EMPTY;
var inst_10899 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_10898);
var inst_10900 = (function (){return ((function (inst_10897,inst_10898,inst_10899,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10841_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__10841_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__10841_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__10841_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_10897,inst_10898,inst_10899,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10901 = cljs.core.filter.call(null,inst_10900,files);
var inst_10902 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_10903 = cljs.core.concat.call(null,inst_10901,inst_10902);
var state_11000__$1 = (function (){var statearr_11015 = state_11000;
(statearr_11015[(12)] = inst_10903);

(statearr_11015[(17)] = inst_10897);

(statearr_11015[(18)] = inst_10899);

return statearr_11015;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_11016_11097 = state_11000__$1;
(statearr_11016_11097[(1)] = (16));

} else {
var statearr_11017_11098 = state_11000__$1;
(statearr_11017_11098[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (15))){
var inst_10887 = (state_11000[(2)]);
var state_11000__$1 = state_11000;
var statearr_11018_11099 = state_11000__$1;
(statearr_11018_11099[(2)] = inst_10887);

(statearr_11018_11099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (21))){
var inst_10913 = (state_11000[(19)]);
var inst_10913__$1 = (state_11000[(2)]);
var inst_10914 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_10913__$1);
var state_11000__$1 = (function (){var statearr_11019 = state_11000;
(statearr_11019[(19)] = inst_10913__$1);

return statearr_11019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11000__$1,(22),inst_10914);
} else {
if((state_val_11001 === (31))){
var inst_10998 = (state_11000[(2)]);
var state_11000__$1 = state_11000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11000__$1,inst_10998);
} else {
if((state_val_11001 === (32))){
var inst_10953 = (state_11000[(16)]);
var inst_10958 = inst_10953.cljs$lang$protocol_mask$partition0$;
var inst_10959 = (inst_10958 & (64));
var inst_10960 = inst_10953.cljs$core$ISeq$;
var inst_10961 = (cljs.core.PROTOCOL_SENTINEL === inst_10960);
var inst_10962 = ((inst_10959) || (inst_10961));
var state_11000__$1 = state_11000;
if(cljs.core.truth_(inst_10962)){
var statearr_11020_11100 = state_11000__$1;
(statearr_11020_11100[(1)] = (35));

} else {
var statearr_11021_11101 = state_11000__$1;
(statearr_11021_11101[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (40))){
var inst_10975 = (state_11000[(20)]);
var inst_10974 = (state_11000[(2)]);
var inst_10975__$1 = cljs.core.get.call(null,inst_10974,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_10976 = cljs.core.get.call(null,inst_10974,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_10977 = cljs.core.not_empty.call(null,inst_10975__$1);
var state_11000__$1 = (function (){var statearr_11022 = state_11000;
(statearr_11022[(21)] = inst_10976);

(statearr_11022[(20)] = inst_10975__$1);

return statearr_11022;
})();
if(cljs.core.truth_(inst_10977)){
var statearr_11023_11102 = state_11000__$1;
(statearr_11023_11102[(1)] = (41));

} else {
var statearr_11024_11103 = state_11000__$1;
(statearr_11024_11103[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (33))){
var state_11000__$1 = state_11000;
var statearr_11025_11104 = state_11000__$1;
(statearr_11025_11104[(2)] = false);

(statearr_11025_11104[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (13))){
var inst_10873 = (state_11000[(22)]);
var inst_10877 = cljs.core.chunk_first.call(null,inst_10873);
var inst_10878 = cljs.core.chunk_rest.call(null,inst_10873);
var inst_10879 = cljs.core.count.call(null,inst_10877);
var inst_10860 = inst_10878;
var inst_10861 = inst_10877;
var inst_10862 = inst_10879;
var inst_10863 = (0);
var state_11000__$1 = (function (){var statearr_11026 = state_11000;
(statearr_11026[(7)] = inst_10862);

(statearr_11026[(8)] = inst_10863);

(statearr_11026[(9)] = inst_10861);

(statearr_11026[(10)] = inst_10860);

return statearr_11026;
})();
var statearr_11027_11105 = state_11000__$1;
(statearr_11027_11105[(2)] = null);

(statearr_11027_11105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (22))){
var inst_10921 = (state_11000[(23)]);
var inst_10917 = (state_11000[(24)]);
var inst_10916 = (state_11000[(25)]);
var inst_10913 = (state_11000[(19)]);
var inst_10916__$1 = (state_11000[(2)]);
var inst_10917__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_10916__$1);
var inst_10918 = (function (){var all_files = inst_10913;
var res_SINGLEQUOTE_ = inst_10916__$1;
var res = inst_10917__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_10921,inst_10917,inst_10916,inst_10913,inst_10916__$1,inst_10917__$1,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10842_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__10842_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_10921,inst_10917,inst_10916,inst_10913,inst_10916__$1,inst_10917__$1,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10919 = cljs.core.filter.call(null,inst_10918,inst_10916__$1);
var inst_10920 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_10921__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_10920);
var inst_10922 = cljs.core.not_empty.call(null,inst_10921__$1);
var state_11000__$1 = (function (){var statearr_11028 = state_11000;
(statearr_11028[(23)] = inst_10921__$1);

(statearr_11028[(24)] = inst_10917__$1);

(statearr_11028[(25)] = inst_10916__$1);

(statearr_11028[(26)] = inst_10919);

return statearr_11028;
})();
if(cljs.core.truth_(inst_10922)){
var statearr_11029_11106 = state_11000__$1;
(statearr_11029_11106[(1)] = (23));

} else {
var statearr_11030_11107 = state_11000__$1;
(statearr_11030_11107[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (36))){
var state_11000__$1 = state_11000;
var statearr_11031_11108 = state_11000__$1;
(statearr_11031_11108[(2)] = false);

(statearr_11031_11108[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (41))){
var inst_10975 = (state_11000[(20)]);
var inst_10979 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_10980 = cljs.core.map.call(null,inst_10979,inst_10975);
var inst_10981 = cljs.core.pr_str.call(null,inst_10980);
var inst_10982 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10981)].join('');
var inst_10983 = figwheel.client.utils.log.call(null,inst_10982);
var state_11000__$1 = state_11000;
var statearr_11032_11109 = state_11000__$1;
(statearr_11032_11109[(2)] = inst_10983);

(statearr_11032_11109[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (43))){
var inst_10976 = (state_11000[(21)]);
var inst_10986 = (state_11000[(2)]);
var inst_10987 = cljs.core.not_empty.call(null,inst_10976);
var state_11000__$1 = (function (){var statearr_11033 = state_11000;
(statearr_11033[(27)] = inst_10986);

return statearr_11033;
})();
if(cljs.core.truth_(inst_10987)){
var statearr_11034_11110 = state_11000__$1;
(statearr_11034_11110[(1)] = (44));

} else {
var statearr_11035_11111 = state_11000__$1;
(statearr_11035_11111[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (29))){
var inst_10921 = (state_11000[(23)]);
var inst_10917 = (state_11000[(24)]);
var inst_10916 = (state_11000[(25)]);
var inst_10953 = (state_11000[(16)]);
var inst_10913 = (state_11000[(19)]);
var inst_10919 = (state_11000[(26)]);
var inst_10949 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_10952 = (function (){var all_files = inst_10913;
var res_SINGLEQUOTE_ = inst_10916;
var res = inst_10917;
var files_not_loaded = inst_10919;
var dependencies_that_loaded = inst_10921;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10921,inst_10917,inst_10916,inst_10953,inst_10913,inst_10919,inst_10949,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10951){
var map__11036 = p__10951;
var map__11036__$1 = ((((!((map__11036 == null)))?(((((map__11036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11036):map__11036);
var namespace = cljs.core.get.call(null,map__11036__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10921,inst_10917,inst_10916,inst_10953,inst_10913,inst_10919,inst_10949,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10953__$1 = cljs.core.group_by.call(null,inst_10952,inst_10919);
var inst_10955 = (inst_10953__$1 == null);
var inst_10956 = cljs.core.not.call(null,inst_10955);
var state_11000__$1 = (function (){var statearr_11038 = state_11000;
(statearr_11038[(28)] = inst_10949);

(statearr_11038[(16)] = inst_10953__$1);

return statearr_11038;
})();
if(inst_10956){
var statearr_11039_11112 = state_11000__$1;
(statearr_11039_11112[(1)] = (32));

} else {
var statearr_11040_11113 = state_11000__$1;
(statearr_11040_11113[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (44))){
var inst_10976 = (state_11000[(21)]);
var inst_10989 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_10976);
var inst_10990 = cljs.core.pr_str.call(null,inst_10989);
var inst_10991 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10990)].join('');
var inst_10992 = figwheel.client.utils.log.call(null,inst_10991);
var state_11000__$1 = state_11000;
var statearr_11041_11114 = state_11000__$1;
(statearr_11041_11114[(2)] = inst_10992);

(statearr_11041_11114[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (6))){
var inst_10894 = (state_11000[(2)]);
var state_11000__$1 = state_11000;
var statearr_11042_11115 = state_11000__$1;
(statearr_11042_11115[(2)] = inst_10894);

(statearr_11042_11115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (28))){
var inst_10919 = (state_11000[(26)]);
var inst_10946 = (state_11000[(2)]);
var inst_10947 = cljs.core.not_empty.call(null,inst_10919);
var state_11000__$1 = (function (){var statearr_11043 = state_11000;
(statearr_11043[(29)] = inst_10946);

return statearr_11043;
})();
if(cljs.core.truth_(inst_10947)){
var statearr_11044_11116 = state_11000__$1;
(statearr_11044_11116[(1)] = (29));

} else {
var statearr_11045_11117 = state_11000__$1;
(statearr_11045_11117[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (25))){
var inst_10917 = (state_11000[(24)]);
var inst_10933 = (state_11000[(2)]);
var inst_10934 = cljs.core.not_empty.call(null,inst_10917);
var state_11000__$1 = (function (){var statearr_11046 = state_11000;
(statearr_11046[(30)] = inst_10933);

return statearr_11046;
})();
if(cljs.core.truth_(inst_10934)){
var statearr_11047_11118 = state_11000__$1;
(statearr_11047_11118[(1)] = (26));

} else {
var statearr_11048_11119 = state_11000__$1;
(statearr_11048_11119[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (34))){
var inst_10969 = (state_11000[(2)]);
var state_11000__$1 = state_11000;
if(cljs.core.truth_(inst_10969)){
var statearr_11049_11120 = state_11000__$1;
(statearr_11049_11120[(1)] = (38));

} else {
var statearr_11050_11121 = state_11000__$1;
(statearr_11050_11121[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (17))){
var state_11000__$1 = state_11000;
var statearr_11051_11122 = state_11000__$1;
(statearr_11051_11122[(2)] = recompile_dependents);

(statearr_11051_11122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (3))){
var state_11000__$1 = state_11000;
var statearr_11052_11123 = state_11000__$1;
(statearr_11052_11123[(2)] = null);

(statearr_11052_11123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (12))){
var inst_10890 = (state_11000[(2)]);
var state_11000__$1 = state_11000;
var statearr_11053_11124 = state_11000__$1;
(statearr_11053_11124[(2)] = inst_10890);

(statearr_11053_11124[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (2))){
var inst_10852 = (state_11000[(13)]);
var inst_10859 = cljs.core.seq.call(null,inst_10852);
var inst_10860 = inst_10859;
var inst_10861 = null;
var inst_10862 = (0);
var inst_10863 = (0);
var state_11000__$1 = (function (){var statearr_11054 = state_11000;
(statearr_11054[(7)] = inst_10862);

(statearr_11054[(8)] = inst_10863);

(statearr_11054[(9)] = inst_10861);

(statearr_11054[(10)] = inst_10860);

return statearr_11054;
})();
var statearr_11055_11125 = state_11000__$1;
(statearr_11055_11125[(2)] = null);

(statearr_11055_11125[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (23))){
var inst_10921 = (state_11000[(23)]);
var inst_10917 = (state_11000[(24)]);
var inst_10916 = (state_11000[(25)]);
var inst_10913 = (state_11000[(19)]);
var inst_10919 = (state_11000[(26)]);
var inst_10924 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_10926 = (function (){var all_files = inst_10913;
var res_SINGLEQUOTE_ = inst_10916;
var res = inst_10917;
var files_not_loaded = inst_10919;
var dependencies_that_loaded = inst_10921;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10921,inst_10917,inst_10916,inst_10913,inst_10919,inst_10924,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10925){
var map__11056 = p__10925;
var map__11056__$1 = ((((!((map__11056 == null)))?(((((map__11056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11056):map__11056);
var request_url = cljs.core.get.call(null,map__11056__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10921,inst_10917,inst_10916,inst_10913,inst_10919,inst_10924,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10927 = cljs.core.reverse.call(null,inst_10921);
var inst_10928 = cljs.core.map.call(null,inst_10926,inst_10927);
var inst_10929 = cljs.core.pr_str.call(null,inst_10928);
var inst_10930 = figwheel.client.utils.log.call(null,inst_10929);
var state_11000__$1 = (function (){var statearr_11058 = state_11000;
(statearr_11058[(31)] = inst_10924);

return statearr_11058;
})();
var statearr_11059_11126 = state_11000__$1;
(statearr_11059_11126[(2)] = inst_10930);

(statearr_11059_11126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (35))){
var state_11000__$1 = state_11000;
var statearr_11060_11127 = state_11000__$1;
(statearr_11060_11127[(2)] = true);

(statearr_11060_11127[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (19))){
var inst_10903 = (state_11000[(12)]);
var inst_10909 = figwheel.client.file_reloading.expand_files.call(null,inst_10903);
var state_11000__$1 = state_11000;
var statearr_11061_11128 = state_11000__$1;
(statearr_11061_11128[(2)] = inst_10909);

(statearr_11061_11128[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (11))){
var state_11000__$1 = state_11000;
var statearr_11062_11129 = state_11000__$1;
(statearr_11062_11129[(2)] = null);

(statearr_11062_11129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (9))){
var inst_10892 = (state_11000[(2)]);
var state_11000__$1 = state_11000;
var statearr_11063_11130 = state_11000__$1;
(statearr_11063_11130[(2)] = inst_10892);

(statearr_11063_11130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (5))){
var inst_10862 = (state_11000[(7)]);
var inst_10863 = (state_11000[(8)]);
var inst_10865 = (inst_10863 < inst_10862);
var inst_10866 = inst_10865;
var state_11000__$1 = state_11000;
if(cljs.core.truth_(inst_10866)){
var statearr_11064_11131 = state_11000__$1;
(statearr_11064_11131[(1)] = (7));

} else {
var statearr_11065_11132 = state_11000__$1;
(statearr_11065_11132[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (14))){
var inst_10873 = (state_11000[(22)]);
var inst_10882 = cljs.core.first.call(null,inst_10873);
var inst_10883 = figwheel.client.file_reloading.eval_body.call(null,inst_10882,opts);
var inst_10884 = cljs.core.next.call(null,inst_10873);
var inst_10860 = inst_10884;
var inst_10861 = null;
var inst_10862 = (0);
var inst_10863 = (0);
var state_11000__$1 = (function (){var statearr_11066 = state_11000;
(statearr_11066[(7)] = inst_10862);

(statearr_11066[(8)] = inst_10863);

(statearr_11066[(9)] = inst_10861);

(statearr_11066[(10)] = inst_10860);

(statearr_11066[(32)] = inst_10883);

return statearr_11066;
})();
var statearr_11067_11133 = state_11000__$1;
(statearr_11067_11133[(2)] = null);

(statearr_11067_11133[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (45))){
var state_11000__$1 = state_11000;
var statearr_11068_11134 = state_11000__$1;
(statearr_11068_11134[(2)] = null);

(statearr_11068_11134[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (26))){
var inst_10921 = (state_11000[(23)]);
var inst_10917 = (state_11000[(24)]);
var inst_10916 = (state_11000[(25)]);
var inst_10913 = (state_11000[(19)]);
var inst_10919 = (state_11000[(26)]);
var inst_10936 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_10938 = (function (){var all_files = inst_10913;
var res_SINGLEQUOTE_ = inst_10916;
var res = inst_10917;
var files_not_loaded = inst_10919;
var dependencies_that_loaded = inst_10921;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10921,inst_10917,inst_10916,inst_10913,inst_10919,inst_10936,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10937){
var map__11069 = p__10937;
var map__11069__$1 = ((((!((map__11069 == null)))?(((((map__11069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11069):map__11069);
var namespace = cljs.core.get.call(null,map__11069__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__11069__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10921,inst_10917,inst_10916,inst_10913,inst_10919,inst_10936,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10939 = cljs.core.map.call(null,inst_10938,inst_10917);
var inst_10940 = cljs.core.pr_str.call(null,inst_10939);
var inst_10941 = figwheel.client.utils.log.call(null,inst_10940);
var inst_10942 = (function (){var all_files = inst_10913;
var res_SINGLEQUOTE_ = inst_10916;
var res = inst_10917;
var files_not_loaded = inst_10919;
var dependencies_that_loaded = inst_10921;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10921,inst_10917,inst_10916,inst_10913,inst_10919,inst_10936,inst_10938,inst_10939,inst_10940,inst_10941,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10921,inst_10917,inst_10916,inst_10913,inst_10919,inst_10936,inst_10938,inst_10939,inst_10940,inst_10941,state_val_11001,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10943 = setTimeout(inst_10942,(10));
var state_11000__$1 = (function (){var statearr_11071 = state_11000;
(statearr_11071[(33)] = inst_10936);

(statearr_11071[(34)] = inst_10941);

return statearr_11071;
})();
var statearr_11072_11135 = state_11000__$1;
(statearr_11072_11135[(2)] = inst_10943);

(statearr_11072_11135[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (16))){
var state_11000__$1 = state_11000;
var statearr_11073_11136 = state_11000__$1;
(statearr_11073_11136[(2)] = reload_dependents);

(statearr_11073_11136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (38))){
var inst_10953 = (state_11000[(16)]);
var inst_10971 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10953);
var state_11000__$1 = state_11000;
var statearr_11074_11137 = state_11000__$1;
(statearr_11074_11137[(2)] = inst_10971);

(statearr_11074_11137[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (30))){
var state_11000__$1 = state_11000;
var statearr_11075_11138 = state_11000__$1;
(statearr_11075_11138[(2)] = null);

(statearr_11075_11138[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (10))){
var inst_10873 = (state_11000[(22)]);
var inst_10875 = cljs.core.chunked_seq_QMARK_.call(null,inst_10873);
var state_11000__$1 = state_11000;
if(inst_10875){
var statearr_11076_11139 = state_11000__$1;
(statearr_11076_11139[(1)] = (13));

} else {
var statearr_11077_11140 = state_11000__$1;
(statearr_11077_11140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (18))){
var inst_10907 = (state_11000[(2)]);
var state_11000__$1 = state_11000;
if(cljs.core.truth_(inst_10907)){
var statearr_11078_11141 = state_11000__$1;
(statearr_11078_11141[(1)] = (19));

} else {
var statearr_11079_11142 = state_11000__$1;
(statearr_11079_11142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (42))){
var state_11000__$1 = state_11000;
var statearr_11080_11143 = state_11000__$1;
(statearr_11080_11143[(2)] = null);

(statearr_11080_11143[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (37))){
var inst_10966 = (state_11000[(2)]);
var state_11000__$1 = state_11000;
var statearr_11081_11144 = state_11000__$1;
(statearr_11081_11144[(2)] = inst_10966);

(statearr_11081_11144[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (8))){
var inst_10860 = (state_11000[(10)]);
var inst_10873 = (state_11000[(22)]);
var inst_10873__$1 = cljs.core.seq.call(null,inst_10860);
var state_11000__$1 = (function (){var statearr_11082 = state_11000;
(statearr_11082[(22)] = inst_10873__$1);

return statearr_11082;
})();
if(inst_10873__$1){
var statearr_11083_11145 = state_11000__$1;
(statearr_11083_11145[(1)] = (10));

} else {
var statearr_11084_11146 = state_11000__$1;
(statearr_11084_11146[(1)] = (11));

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
});})(c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__1996__auto__,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0 = (function (){
var statearr_11085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11085[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__);

(statearr_11085[(1)] = (1));

return statearr_11085;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1 = (function (state_11000){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_11000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e11086){if((e11086 instanceof Object)){
var ex__2000__auto__ = e11086;
var statearr_11087_11147 = state_11000;
(statearr_11087_11147[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11148 = state_11000;
state_11000 = G__11148;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__ = function(state_11000){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1.call(this,state_11000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__2153__auto__ = (function (){var statearr_11088 = f__2152__auto__.call(null);
(statearr_11088[(6)] = c__2151__auto__);

return statearr_11088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__,map__10845,map__10845__$1,opts,before_jsload,on_jsload,reload_dependents,map__10846,map__10846__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__2151__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__11151,link){
var map__11152 = p__11151;
var map__11152__$1 = ((((!((map__11152 == null)))?(((((map__11152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11152):map__11152);
var file = cljs.core.get.call(null,map__11152__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__11152,map__11152__$1,file){
return (function (p1__11149_SHARP_,p2__11150_SHARP_){
if(cljs.core._EQ_.call(null,p1__11149_SHARP_,p2__11150_SHARP_)){
return p1__11149_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__11152,map__11152__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__11155){
var map__11156 = p__11155;
var map__11156__$1 = ((((!((map__11156 == null)))?(((((map__11156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11156):map__11156);
var match_length = cljs.core.get.call(null,map__11156__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__11156__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__11154_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__11154_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__11158_SHARP_,p2__11159_SHARP_){
return cljs.core.assoc.call(null,p1__11158_SHARP_,cljs.core.get.call(null,p2__11159_SHARP_,key),p2__11159_SHARP_);
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
var loaded_f_datas_11160 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_11160);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_11160);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__11161,p__11162){
var map__11163 = p__11161;
var map__11163__$1 = ((((!((map__11163 == null)))?(((((map__11163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11163):map__11163);
var on_cssload = cljs.core.get.call(null,map__11163__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__11164 = p__11162;
var map__11164__$1 = ((((!((map__11164 == null)))?(((((map__11164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11164):map__11164);
var files_msg = map__11164__$1;
var files = cljs.core.get.call(null,map__11164__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
