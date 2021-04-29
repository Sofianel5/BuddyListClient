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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__10527_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__10527_SHARP_));
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
var seq__10528 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__10529 = null;
var count__10530 = (0);
var i__10531 = (0);
while(true){
if((i__10531 < count__10530)){
var n = cljs.core._nth.call(null,chunk__10529,i__10531);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__10532 = seq__10528;
var G__10533 = chunk__10529;
var G__10534 = count__10530;
var G__10535 = (i__10531 + (1));
seq__10528 = G__10532;
chunk__10529 = G__10533;
count__10530 = G__10534;
i__10531 = G__10535;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10528);
if(temp__4657__auto__){
var seq__10528__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10528__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__10528__$1);
var G__10536 = cljs.core.chunk_rest.call(null,seq__10528__$1);
var G__10537 = c__4317__auto__;
var G__10538 = cljs.core.count.call(null,c__4317__auto__);
var G__10539 = (0);
seq__10528 = G__10536;
chunk__10529 = G__10537;
count__10530 = G__10538;
i__10531 = G__10539;
continue;
} else {
var n = cljs.core.first.call(null,seq__10528__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__10540 = cljs.core.next.call(null,seq__10528__$1);
var G__10541 = null;
var G__10542 = (0);
var G__10543 = (0);
seq__10528 = G__10540;
chunk__10529 = G__10541;
count__10530 = G__10542;
i__10531 = G__10543;
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

var seq__10553_10561 = cljs.core.seq.call(null,deps);
var chunk__10554_10562 = null;
var count__10555_10563 = (0);
var i__10556_10564 = (0);
while(true){
if((i__10556_10564 < count__10555_10563)){
var dep_10565 = cljs.core._nth.call(null,chunk__10554_10562,i__10556_10564);
topo_sort_helper_STAR_.call(null,dep_10565,(depth + (1)),state);


var G__10566 = seq__10553_10561;
var G__10567 = chunk__10554_10562;
var G__10568 = count__10555_10563;
var G__10569 = (i__10556_10564 + (1));
seq__10553_10561 = G__10566;
chunk__10554_10562 = G__10567;
count__10555_10563 = G__10568;
i__10556_10564 = G__10569;
continue;
} else {
var temp__4657__auto___10570 = cljs.core.seq.call(null,seq__10553_10561);
if(temp__4657__auto___10570){
var seq__10553_10571__$1 = temp__4657__auto___10570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10553_10571__$1)){
var c__4317__auto___10572 = cljs.core.chunk_first.call(null,seq__10553_10571__$1);
var G__10573 = cljs.core.chunk_rest.call(null,seq__10553_10571__$1);
var G__10574 = c__4317__auto___10572;
var G__10575 = cljs.core.count.call(null,c__4317__auto___10572);
var G__10576 = (0);
seq__10553_10561 = G__10573;
chunk__10554_10562 = G__10574;
count__10555_10563 = G__10575;
i__10556_10564 = G__10576;
continue;
} else {
var dep_10577 = cljs.core.first.call(null,seq__10553_10571__$1);
topo_sort_helper_STAR_.call(null,dep_10577,(depth + (1)),state);


var G__10578 = cljs.core.next.call(null,seq__10553_10571__$1);
var G__10579 = null;
var G__10580 = (0);
var G__10581 = (0);
seq__10553_10561 = G__10578;
chunk__10554_10562 = G__10579;
count__10555_10563 = G__10580;
i__10556_10564 = G__10581;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__10557){
var vec__10558 = p__10557;
var seq__10559 = cljs.core.seq.call(null,vec__10558);
var first__10560 = cljs.core.first.call(null,seq__10559);
var seq__10559__$1 = cljs.core.next.call(null,seq__10559);
var x = first__10560;
var xs = seq__10559__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__10558,seq__10559,first__10560,seq__10559__$1,x,xs,get_deps__$1){
return (function (p1__10544_SHARP_){
return clojure.set.difference.call(null,p1__10544_SHARP_,x);
});})(vec__10558,seq__10559,first__10560,seq__10559__$1,x,xs,get_deps__$1))
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
var seq__10582 = cljs.core.seq.call(null,provides);
var chunk__10583 = null;
var count__10584 = (0);
var i__10585 = (0);
while(true){
if((i__10585 < count__10584)){
var prov = cljs.core._nth.call(null,chunk__10583,i__10585);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__10586_10594 = cljs.core.seq.call(null,requires);
var chunk__10587_10595 = null;
var count__10588_10596 = (0);
var i__10589_10597 = (0);
while(true){
if((i__10589_10597 < count__10588_10596)){
var req_10598 = cljs.core._nth.call(null,chunk__10587_10595,i__10589_10597);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10598,prov);


var G__10599 = seq__10586_10594;
var G__10600 = chunk__10587_10595;
var G__10601 = count__10588_10596;
var G__10602 = (i__10589_10597 + (1));
seq__10586_10594 = G__10599;
chunk__10587_10595 = G__10600;
count__10588_10596 = G__10601;
i__10589_10597 = G__10602;
continue;
} else {
var temp__4657__auto___10603 = cljs.core.seq.call(null,seq__10586_10594);
if(temp__4657__auto___10603){
var seq__10586_10604__$1 = temp__4657__auto___10603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10586_10604__$1)){
var c__4317__auto___10605 = cljs.core.chunk_first.call(null,seq__10586_10604__$1);
var G__10606 = cljs.core.chunk_rest.call(null,seq__10586_10604__$1);
var G__10607 = c__4317__auto___10605;
var G__10608 = cljs.core.count.call(null,c__4317__auto___10605);
var G__10609 = (0);
seq__10586_10594 = G__10606;
chunk__10587_10595 = G__10607;
count__10588_10596 = G__10608;
i__10589_10597 = G__10609;
continue;
} else {
var req_10610 = cljs.core.first.call(null,seq__10586_10604__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10610,prov);


var G__10611 = cljs.core.next.call(null,seq__10586_10604__$1);
var G__10612 = null;
var G__10613 = (0);
var G__10614 = (0);
seq__10586_10594 = G__10611;
chunk__10587_10595 = G__10612;
count__10588_10596 = G__10613;
i__10589_10597 = G__10614;
continue;
}
} else {
}
}
break;
}


var G__10615 = seq__10582;
var G__10616 = chunk__10583;
var G__10617 = count__10584;
var G__10618 = (i__10585 + (1));
seq__10582 = G__10615;
chunk__10583 = G__10616;
count__10584 = G__10617;
i__10585 = G__10618;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10582);
if(temp__4657__auto__){
var seq__10582__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10582__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__10582__$1);
var G__10619 = cljs.core.chunk_rest.call(null,seq__10582__$1);
var G__10620 = c__4317__auto__;
var G__10621 = cljs.core.count.call(null,c__4317__auto__);
var G__10622 = (0);
seq__10582 = G__10619;
chunk__10583 = G__10620;
count__10584 = G__10621;
i__10585 = G__10622;
continue;
} else {
var prov = cljs.core.first.call(null,seq__10582__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__10590_10623 = cljs.core.seq.call(null,requires);
var chunk__10591_10624 = null;
var count__10592_10625 = (0);
var i__10593_10626 = (0);
while(true){
if((i__10593_10626 < count__10592_10625)){
var req_10627 = cljs.core._nth.call(null,chunk__10591_10624,i__10593_10626);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10627,prov);


var G__10628 = seq__10590_10623;
var G__10629 = chunk__10591_10624;
var G__10630 = count__10592_10625;
var G__10631 = (i__10593_10626 + (1));
seq__10590_10623 = G__10628;
chunk__10591_10624 = G__10629;
count__10592_10625 = G__10630;
i__10593_10626 = G__10631;
continue;
} else {
var temp__4657__auto___10632__$1 = cljs.core.seq.call(null,seq__10590_10623);
if(temp__4657__auto___10632__$1){
var seq__10590_10633__$1 = temp__4657__auto___10632__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10590_10633__$1)){
var c__4317__auto___10634 = cljs.core.chunk_first.call(null,seq__10590_10633__$1);
var G__10635 = cljs.core.chunk_rest.call(null,seq__10590_10633__$1);
var G__10636 = c__4317__auto___10634;
var G__10637 = cljs.core.count.call(null,c__4317__auto___10634);
var G__10638 = (0);
seq__10590_10623 = G__10635;
chunk__10591_10624 = G__10636;
count__10592_10625 = G__10637;
i__10593_10626 = G__10638;
continue;
} else {
var req_10639 = cljs.core.first.call(null,seq__10590_10633__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10639,prov);


var G__10640 = cljs.core.next.call(null,seq__10590_10633__$1);
var G__10641 = null;
var G__10642 = (0);
var G__10643 = (0);
seq__10590_10623 = G__10640;
chunk__10591_10624 = G__10641;
count__10592_10625 = G__10642;
i__10593_10626 = G__10643;
continue;
}
} else {
}
}
break;
}


var G__10644 = cljs.core.next.call(null,seq__10582__$1);
var G__10645 = null;
var G__10646 = (0);
var G__10647 = (0);
seq__10582 = G__10644;
chunk__10583 = G__10645;
count__10584 = G__10646;
i__10585 = G__10647;
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
var seq__10648_10652 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__10649_10653 = null;
var count__10650_10654 = (0);
var i__10651_10655 = (0);
while(true){
if((i__10651_10655 < count__10650_10654)){
var ns_10656 = cljs.core._nth.call(null,chunk__10649_10653,i__10651_10655);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_10656);


var G__10657 = seq__10648_10652;
var G__10658 = chunk__10649_10653;
var G__10659 = count__10650_10654;
var G__10660 = (i__10651_10655 + (1));
seq__10648_10652 = G__10657;
chunk__10649_10653 = G__10658;
count__10650_10654 = G__10659;
i__10651_10655 = G__10660;
continue;
} else {
var temp__4657__auto___10661 = cljs.core.seq.call(null,seq__10648_10652);
if(temp__4657__auto___10661){
var seq__10648_10662__$1 = temp__4657__auto___10661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10648_10662__$1)){
var c__4317__auto___10663 = cljs.core.chunk_first.call(null,seq__10648_10662__$1);
var G__10664 = cljs.core.chunk_rest.call(null,seq__10648_10662__$1);
var G__10665 = c__4317__auto___10663;
var G__10666 = cljs.core.count.call(null,c__4317__auto___10663);
var G__10667 = (0);
seq__10648_10652 = G__10664;
chunk__10649_10653 = G__10665;
count__10650_10654 = G__10666;
i__10651_10655 = G__10667;
continue;
} else {
var ns_10668 = cljs.core.first.call(null,seq__10648_10662__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_10668);


var G__10669 = cljs.core.next.call(null,seq__10648_10662__$1);
var G__10670 = null;
var G__10671 = (0);
var G__10672 = (0);
seq__10648_10652 = G__10669;
chunk__10649_10653 = G__10670;
count__10650_10654 = G__10671;
i__10651_10655 = G__10672;
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
var G__10673__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__10673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10674__i = 0, G__10674__a = new Array(arguments.length -  0);
while (G__10674__i < G__10674__a.length) {G__10674__a[G__10674__i] = arguments[G__10674__i + 0]; ++G__10674__i;}
  args = new cljs.core.IndexedSeq(G__10674__a,0,null);
} 
return G__10673__delegate.call(this,args);};
G__10673.cljs$lang$maxFixedArity = 0;
G__10673.cljs$lang$applyTo = (function (arglist__10675){
var args = cljs.core.seq(arglist__10675);
return G__10673__delegate(args);
});
G__10673.cljs$core$IFn$_invoke$arity$variadic = G__10673__delegate;
return G__10673;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__10676 = cljs.core._EQ_;
var expr__10677 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__10676.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__10677))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__10676,expr__10677){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__10676,expr__10677))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__10676,expr__10677){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e10679){if((e10679 instanceof Error)){
var e = e10679;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e10679;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__10676,expr__10677))
} else {
if(cljs.core.truth_(pred__10676.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__10677))){
return ((function (pred__10676,expr__10677){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__10676,expr__10677){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__10676,expr__10677))
);

return deferred.addErrback(((function (deferred,pred__10676,expr__10677){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__10676,expr__10677))
);
});
;})(pred__10676,expr__10677))
} else {
if(cljs.core.truth_(pred__10676.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__10677))){
return ((function (pred__10676,expr__10677){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e10680){if((e10680 instanceof Error)){
var e = e10680;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e10680;

}
}})());
});
;})(pred__10676,expr__10677))
} else {
return ((function (pred__10676,expr__10677){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__10676,expr__10677))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__10681,callback){
var map__10682 = p__10681;
var map__10682__$1 = ((((!((map__10682 == null)))?(((((map__10682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10682):map__10682);
var file_msg = map__10682__$1;
var request_url = cljs.core.get.call(null,map__10682__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__10682,map__10682__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__10682,map__10682__$1,file_msg,request_url))
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
return (function (state_10706){
var state_val_10707 = (state_10706[(1)]);
if((state_val_10707 === (7))){
var inst_10702 = (state_10706[(2)]);
var state_10706__$1 = state_10706;
var statearr_10708_10725 = state_10706__$1;
(statearr_10708_10725[(2)] = inst_10702);

(statearr_10708_10725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10707 === (1))){
var state_10706__$1 = state_10706;
var statearr_10709_10726 = state_10706__$1;
(statearr_10709_10726[(2)] = null);

(statearr_10709_10726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10707 === (4))){
var inst_10686 = (state_10706[(7)]);
var inst_10686__$1 = (state_10706[(2)]);
var state_10706__$1 = (function (){var statearr_10710 = state_10706;
(statearr_10710[(7)] = inst_10686__$1);

return statearr_10710;
})();
if(cljs.core.truth_(inst_10686__$1)){
var statearr_10711_10727 = state_10706__$1;
(statearr_10711_10727[(1)] = (5));

} else {
var statearr_10712_10728 = state_10706__$1;
(statearr_10712_10728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10707 === (6))){
var state_10706__$1 = state_10706;
var statearr_10713_10729 = state_10706__$1;
(statearr_10713_10729[(2)] = null);

(statearr_10713_10729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10707 === (3))){
var inst_10704 = (state_10706[(2)]);
var state_10706__$1 = state_10706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10706__$1,inst_10704);
} else {
if((state_val_10707 === (2))){
var state_10706__$1 = state_10706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10706__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_10707 === (11))){
var inst_10698 = (state_10706[(2)]);
var state_10706__$1 = (function (){var statearr_10714 = state_10706;
(statearr_10714[(8)] = inst_10698);

return statearr_10714;
})();
var statearr_10715_10730 = state_10706__$1;
(statearr_10715_10730[(2)] = null);

(statearr_10715_10730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10707 === (9))){
var inst_10692 = (state_10706[(9)]);
var inst_10690 = (state_10706[(10)]);
var inst_10694 = inst_10692.call(null,inst_10690);
var state_10706__$1 = state_10706;
var statearr_10716_10731 = state_10706__$1;
(statearr_10716_10731[(2)] = inst_10694);

(statearr_10716_10731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10707 === (5))){
var inst_10686 = (state_10706[(7)]);
var inst_10688 = figwheel.client.file_reloading.blocking_load.call(null,inst_10686);
var state_10706__$1 = state_10706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10706__$1,(8),inst_10688);
} else {
if((state_val_10707 === (10))){
var inst_10690 = (state_10706[(10)]);
var inst_10696 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_10690);
var state_10706__$1 = state_10706;
var statearr_10717_10732 = state_10706__$1;
(statearr_10717_10732[(2)] = inst_10696);

(statearr_10717_10732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10707 === (8))){
var inst_10686 = (state_10706[(7)]);
var inst_10692 = (state_10706[(9)]);
var inst_10690 = (state_10706[(2)]);
var inst_10691 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_10692__$1 = cljs.core.get.call(null,inst_10691,inst_10686);
var state_10706__$1 = (function (){var statearr_10718 = state_10706;
(statearr_10718[(9)] = inst_10692__$1);

(statearr_10718[(10)] = inst_10690);

return statearr_10718;
})();
if(cljs.core.truth_(inst_10692__$1)){
var statearr_10719_10733 = state_10706__$1;
(statearr_10719_10733[(1)] = (9));

} else {
var statearr_10720_10734 = state_10706__$1;
(statearr_10720_10734[(1)] = (10));

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
var statearr_10721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10721[(0)] = figwheel$client$file_reloading$state_machine__1997__auto__);

(statearr_10721[(1)] = (1));

return statearr_10721;
});
var figwheel$client$file_reloading$state_machine__1997__auto____1 = (function (state_10706){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_10706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e10722){if((e10722 instanceof Object)){
var ex__2000__auto__ = e10722;
var statearr_10723_10735 = state_10706;
(statearr_10723_10735[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10736 = state_10706;
state_10706 = G__10736;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__1997__auto__ = function(state_10706){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__1997__auto____1.call(this,state_10706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__1997__auto____0;
figwheel$client$file_reloading$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__1997__auto____1;
return figwheel$client$file_reloading$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__))
})();
var state__2153__auto__ = (function (){var statearr_10724 = f__2152__auto__.call(null);
(statearr_10724[(6)] = c__2151__auto__);

return statearr_10724;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__10737,callback){
var map__10738 = p__10737;
var map__10738__$1 = ((((!((map__10738 == null)))?(((((map__10738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10738):map__10738);
var file_msg = map__10738__$1;
var namespace = cljs.core.get.call(null,map__10738__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__10738,map__10738__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__10738,map__10738__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__10740){
var map__10741 = p__10740;
var map__10741__$1 = ((((!((map__10741 == null)))?(((((map__10741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10741):map__10741);
var file_msg = map__10741__$1;
var namespace = cljs.core.get.call(null,map__10741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__10743){
var map__10744 = p__10743;
var map__10744__$1 = ((((!((map__10744 == null)))?(((((map__10744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10744):map__10744);
var file_msg = map__10744__$1;
var namespace = cljs.core.get.call(null,map__10744__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__10746,callback){
var map__10747 = p__10746;
var map__10747__$1 = ((((!((map__10747 == null)))?(((((map__10747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10747):map__10747);
var file_msg = map__10747__$1;
var request_url = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__2151__auto___10797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___10797,out){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___10797,out){
return (function (state_10782){
var state_val_10783 = (state_10782[(1)]);
if((state_val_10783 === (1))){
var inst_10756 = cljs.core.seq.call(null,files);
var inst_10757 = cljs.core.first.call(null,inst_10756);
var inst_10758 = cljs.core.next.call(null,inst_10756);
var inst_10759 = files;
var state_10782__$1 = (function (){var statearr_10784 = state_10782;
(statearr_10784[(7)] = inst_10758);

(statearr_10784[(8)] = inst_10757);

(statearr_10784[(9)] = inst_10759);

return statearr_10784;
})();
var statearr_10785_10798 = state_10782__$1;
(statearr_10785_10798[(2)] = null);

(statearr_10785_10798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10783 === (2))){
var inst_10765 = (state_10782[(10)]);
var inst_10759 = (state_10782[(9)]);
var inst_10764 = cljs.core.seq.call(null,inst_10759);
var inst_10765__$1 = cljs.core.first.call(null,inst_10764);
var inst_10766 = cljs.core.next.call(null,inst_10764);
var inst_10767 = (inst_10765__$1 == null);
var inst_10768 = cljs.core.not.call(null,inst_10767);
var state_10782__$1 = (function (){var statearr_10786 = state_10782;
(statearr_10786[(11)] = inst_10766);

(statearr_10786[(10)] = inst_10765__$1);

return statearr_10786;
})();
if(inst_10768){
var statearr_10787_10799 = state_10782__$1;
(statearr_10787_10799[(1)] = (4));

} else {
var statearr_10788_10800 = state_10782__$1;
(statearr_10788_10800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10783 === (3))){
var inst_10780 = (state_10782[(2)]);
var state_10782__$1 = state_10782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10782__$1,inst_10780);
} else {
if((state_val_10783 === (4))){
var inst_10765 = (state_10782[(10)]);
var inst_10770 = figwheel.client.file_reloading.reload_js_file.call(null,inst_10765);
var state_10782__$1 = state_10782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10782__$1,(7),inst_10770);
} else {
if((state_val_10783 === (5))){
var inst_10776 = cljs.core.async.close_BANG_.call(null,out);
var state_10782__$1 = state_10782;
var statearr_10789_10801 = state_10782__$1;
(statearr_10789_10801[(2)] = inst_10776);

(statearr_10789_10801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10783 === (6))){
var inst_10778 = (state_10782[(2)]);
var state_10782__$1 = state_10782;
var statearr_10790_10802 = state_10782__$1;
(statearr_10790_10802[(2)] = inst_10778);

(statearr_10790_10802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10783 === (7))){
var inst_10766 = (state_10782[(11)]);
var inst_10772 = (state_10782[(2)]);
var inst_10773 = cljs.core.async.put_BANG_.call(null,out,inst_10772);
var inst_10759 = inst_10766;
var state_10782__$1 = (function (){var statearr_10791 = state_10782;
(statearr_10791[(12)] = inst_10773);

(statearr_10791[(9)] = inst_10759);

return statearr_10791;
})();
var statearr_10792_10803 = state_10782__$1;
(statearr_10792_10803[(2)] = null);

(statearr_10792_10803[(1)] = (2));


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
});})(c__2151__auto___10797,out))
;
return ((function (switch__1996__auto__,c__2151__auto___10797,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0 = (function (){
var statearr_10793 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10793[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__);

(statearr_10793[(1)] = (1));

return statearr_10793;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1 = (function (state_10782){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_10782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e10794){if((e10794 instanceof Object)){
var ex__2000__auto__ = e10794;
var statearr_10795_10804 = state_10782;
(statearr_10795_10804[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10805 = state_10782;
state_10782 = G__10805;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__ = function(state_10782){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1.call(this,state_10782);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___10797,out))
})();
var state__2153__auto__ = (function (){var statearr_10796 = f__2152__auto__.call(null);
(statearr_10796[(6)] = c__2151__auto___10797);

return statearr_10796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___10797,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__10806,opts){
var map__10807 = p__10806;
var map__10807__$1 = ((((!((map__10807 == null)))?(((((map__10807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10807):map__10807);
var eval_body = cljs.core.get.call(null,map__10807__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__10807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e10809){var e = e10809;
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
return (function (p1__10810_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__10810_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__10811){
var vec__10812 = p__10811;
var k = cljs.core.nth.call(null,vec__10812,(0),null);
var v = cljs.core.nth.call(null,vec__10812,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__10815){
var vec__10816 = p__10815;
var k = cljs.core.nth.call(null,vec__10816,(0),null);
var v = cljs.core.nth.call(null,vec__10816,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__10822,p__10823){
var map__10824 = p__10822;
var map__10824__$1 = ((((!((map__10824 == null)))?(((((map__10824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10824):map__10824);
var opts = map__10824__$1;
var before_jsload = cljs.core.get.call(null,map__10824__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__10824__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__10824__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__10825 = p__10823;
var map__10825__$1 = ((((!((map__10825 == null)))?(((((map__10825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10825):map__10825);
var msg = map__10825__$1;
var files = cljs.core.get.call(null,map__10825__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__10825__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__10825__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_10979){
var state_val_10980 = (state_10979[(1)]);
if((state_val_10980 === (7))){
var inst_10842 = (state_10979[(7)]);
var inst_10840 = (state_10979[(8)]);
var inst_10839 = (state_10979[(9)]);
var inst_10841 = (state_10979[(10)]);
var inst_10847 = cljs.core._nth.call(null,inst_10840,inst_10842);
var inst_10848 = figwheel.client.file_reloading.eval_body.call(null,inst_10847,opts);
var inst_10849 = (inst_10842 + (1));
var tmp10981 = inst_10840;
var tmp10982 = inst_10839;
var tmp10983 = inst_10841;
var inst_10839__$1 = tmp10982;
var inst_10840__$1 = tmp10981;
var inst_10841__$1 = tmp10983;
var inst_10842__$1 = inst_10849;
var state_10979__$1 = (function (){var statearr_10984 = state_10979;
(statearr_10984[(7)] = inst_10842__$1);

(statearr_10984[(8)] = inst_10840__$1);

(statearr_10984[(11)] = inst_10848);

(statearr_10984[(9)] = inst_10839__$1);

(statearr_10984[(10)] = inst_10841__$1);

return statearr_10984;
})();
var statearr_10985_11068 = state_10979__$1;
(statearr_10985_11068[(2)] = null);

(statearr_10985_11068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (20))){
var inst_10882 = (state_10979[(12)]);
var inst_10890 = figwheel.client.file_reloading.sort_files.call(null,inst_10882);
var state_10979__$1 = state_10979;
var statearr_10986_11069 = state_10979__$1;
(statearr_10986_11069[(2)] = inst_10890);

(statearr_10986_11069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (27))){
var state_10979__$1 = state_10979;
var statearr_10987_11070 = state_10979__$1;
(statearr_10987_11070[(2)] = null);

(statearr_10987_11070[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (1))){
var inst_10831 = (state_10979[(13)]);
var inst_10828 = before_jsload.call(null,files);
var inst_10829 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_10830 = (function (){return ((function (inst_10831,inst_10828,inst_10829,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10819_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__10819_SHARP_);
});
;})(inst_10831,inst_10828,inst_10829,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10831__$1 = cljs.core.filter.call(null,inst_10830,files);
var inst_10832 = cljs.core.not_empty.call(null,inst_10831__$1);
var state_10979__$1 = (function (){var statearr_10988 = state_10979;
(statearr_10988[(14)] = inst_10828);

(statearr_10988[(15)] = inst_10829);

(statearr_10988[(13)] = inst_10831__$1);

return statearr_10988;
})();
if(cljs.core.truth_(inst_10832)){
var statearr_10989_11071 = state_10979__$1;
(statearr_10989_11071[(1)] = (2));

} else {
var statearr_10990_11072 = state_10979__$1;
(statearr_10990_11072[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (24))){
var state_10979__$1 = state_10979;
var statearr_10991_11073 = state_10979__$1;
(statearr_10991_11073[(2)] = null);

(statearr_10991_11073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (39))){
var inst_10932 = (state_10979[(16)]);
var state_10979__$1 = state_10979;
var statearr_10992_11074 = state_10979__$1;
(statearr_10992_11074[(2)] = inst_10932);

(statearr_10992_11074[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (46))){
var inst_10974 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_10993_11075 = state_10979__$1;
(statearr_10993_11075[(2)] = inst_10974);

(statearr_10993_11075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (4))){
var inst_10876 = (state_10979[(2)]);
var inst_10877 = cljs.core.List.EMPTY;
var inst_10878 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_10877);
var inst_10879 = (function (){return ((function (inst_10876,inst_10877,inst_10878,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10820_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__10820_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__10820_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__10820_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_10876,inst_10877,inst_10878,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10880 = cljs.core.filter.call(null,inst_10879,files);
var inst_10881 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_10882 = cljs.core.concat.call(null,inst_10880,inst_10881);
var state_10979__$1 = (function (){var statearr_10994 = state_10979;
(statearr_10994[(12)] = inst_10882);

(statearr_10994[(17)] = inst_10878);

(statearr_10994[(18)] = inst_10876);

return statearr_10994;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_10995_11076 = state_10979__$1;
(statearr_10995_11076[(1)] = (16));

} else {
var statearr_10996_11077 = state_10979__$1;
(statearr_10996_11077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (15))){
var inst_10866 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_10997_11078 = state_10979__$1;
(statearr_10997_11078[(2)] = inst_10866);

(statearr_10997_11078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (21))){
var inst_10892 = (state_10979[(19)]);
var inst_10892__$1 = (state_10979[(2)]);
var inst_10893 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_10892__$1);
var state_10979__$1 = (function (){var statearr_10998 = state_10979;
(statearr_10998[(19)] = inst_10892__$1);

return statearr_10998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10979__$1,(22),inst_10893);
} else {
if((state_val_10980 === (31))){
var inst_10977 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10979__$1,inst_10977);
} else {
if((state_val_10980 === (32))){
var inst_10932 = (state_10979[(16)]);
var inst_10937 = inst_10932.cljs$lang$protocol_mask$partition0$;
var inst_10938 = (inst_10937 & (64));
var inst_10939 = inst_10932.cljs$core$ISeq$;
var inst_10940 = (cljs.core.PROTOCOL_SENTINEL === inst_10939);
var inst_10941 = ((inst_10938) || (inst_10940));
var state_10979__$1 = state_10979;
if(cljs.core.truth_(inst_10941)){
var statearr_10999_11079 = state_10979__$1;
(statearr_10999_11079[(1)] = (35));

} else {
var statearr_11000_11080 = state_10979__$1;
(statearr_11000_11080[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (40))){
var inst_10954 = (state_10979[(20)]);
var inst_10953 = (state_10979[(2)]);
var inst_10954__$1 = cljs.core.get.call(null,inst_10953,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_10955 = cljs.core.get.call(null,inst_10953,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_10956 = cljs.core.not_empty.call(null,inst_10954__$1);
var state_10979__$1 = (function (){var statearr_11001 = state_10979;
(statearr_11001[(21)] = inst_10955);

(statearr_11001[(20)] = inst_10954__$1);

return statearr_11001;
})();
if(cljs.core.truth_(inst_10956)){
var statearr_11002_11081 = state_10979__$1;
(statearr_11002_11081[(1)] = (41));

} else {
var statearr_11003_11082 = state_10979__$1;
(statearr_11003_11082[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (33))){
var state_10979__$1 = state_10979;
var statearr_11004_11083 = state_10979__$1;
(statearr_11004_11083[(2)] = false);

(statearr_11004_11083[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (13))){
var inst_10852 = (state_10979[(22)]);
var inst_10856 = cljs.core.chunk_first.call(null,inst_10852);
var inst_10857 = cljs.core.chunk_rest.call(null,inst_10852);
var inst_10858 = cljs.core.count.call(null,inst_10856);
var inst_10839 = inst_10857;
var inst_10840 = inst_10856;
var inst_10841 = inst_10858;
var inst_10842 = (0);
var state_10979__$1 = (function (){var statearr_11005 = state_10979;
(statearr_11005[(7)] = inst_10842);

(statearr_11005[(8)] = inst_10840);

(statearr_11005[(9)] = inst_10839);

(statearr_11005[(10)] = inst_10841);

return statearr_11005;
})();
var statearr_11006_11084 = state_10979__$1;
(statearr_11006_11084[(2)] = null);

(statearr_11006_11084[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (22))){
var inst_10900 = (state_10979[(23)]);
var inst_10896 = (state_10979[(24)]);
var inst_10892 = (state_10979[(19)]);
var inst_10895 = (state_10979[(25)]);
var inst_10895__$1 = (state_10979[(2)]);
var inst_10896__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_10895__$1);
var inst_10897 = (function (){var all_files = inst_10892;
var res_SINGLEQUOTE_ = inst_10895__$1;
var res = inst_10896__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_10900,inst_10896,inst_10892,inst_10895,inst_10895__$1,inst_10896__$1,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10821_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__10821_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_10900,inst_10896,inst_10892,inst_10895,inst_10895__$1,inst_10896__$1,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10898 = cljs.core.filter.call(null,inst_10897,inst_10895__$1);
var inst_10899 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_10900__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_10899);
var inst_10901 = cljs.core.not_empty.call(null,inst_10900__$1);
var state_10979__$1 = (function (){var statearr_11007 = state_10979;
(statearr_11007[(23)] = inst_10900__$1);

(statearr_11007[(24)] = inst_10896__$1);

(statearr_11007[(26)] = inst_10898);

(statearr_11007[(25)] = inst_10895__$1);

return statearr_11007;
})();
if(cljs.core.truth_(inst_10901)){
var statearr_11008_11085 = state_10979__$1;
(statearr_11008_11085[(1)] = (23));

} else {
var statearr_11009_11086 = state_10979__$1;
(statearr_11009_11086[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (36))){
var state_10979__$1 = state_10979;
var statearr_11010_11087 = state_10979__$1;
(statearr_11010_11087[(2)] = false);

(statearr_11010_11087[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (41))){
var inst_10954 = (state_10979[(20)]);
var inst_10958 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_10959 = cljs.core.map.call(null,inst_10958,inst_10954);
var inst_10960 = cljs.core.pr_str.call(null,inst_10959);
var inst_10961 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10960)].join('');
var inst_10962 = figwheel.client.utils.log.call(null,inst_10961);
var state_10979__$1 = state_10979;
var statearr_11011_11088 = state_10979__$1;
(statearr_11011_11088[(2)] = inst_10962);

(statearr_11011_11088[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (43))){
var inst_10955 = (state_10979[(21)]);
var inst_10965 = (state_10979[(2)]);
var inst_10966 = cljs.core.not_empty.call(null,inst_10955);
var state_10979__$1 = (function (){var statearr_11012 = state_10979;
(statearr_11012[(27)] = inst_10965);

return statearr_11012;
})();
if(cljs.core.truth_(inst_10966)){
var statearr_11013_11089 = state_10979__$1;
(statearr_11013_11089[(1)] = (44));

} else {
var statearr_11014_11090 = state_10979__$1;
(statearr_11014_11090[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (29))){
var inst_10932 = (state_10979[(16)]);
var inst_10900 = (state_10979[(23)]);
var inst_10896 = (state_10979[(24)]);
var inst_10892 = (state_10979[(19)]);
var inst_10898 = (state_10979[(26)]);
var inst_10895 = (state_10979[(25)]);
var inst_10928 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_10931 = (function (){var all_files = inst_10892;
var res_SINGLEQUOTE_ = inst_10895;
var res = inst_10896;
var files_not_loaded = inst_10898;
var dependencies_that_loaded = inst_10900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10932,inst_10900,inst_10896,inst_10892,inst_10898,inst_10895,inst_10928,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10930){
var map__11015 = p__10930;
var map__11015__$1 = ((((!((map__11015 == null)))?(((((map__11015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11015):map__11015);
var namespace = cljs.core.get.call(null,map__11015__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10932,inst_10900,inst_10896,inst_10892,inst_10898,inst_10895,inst_10928,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10932__$1 = cljs.core.group_by.call(null,inst_10931,inst_10898);
var inst_10934 = (inst_10932__$1 == null);
var inst_10935 = cljs.core.not.call(null,inst_10934);
var state_10979__$1 = (function (){var statearr_11017 = state_10979;
(statearr_11017[(28)] = inst_10928);

(statearr_11017[(16)] = inst_10932__$1);

return statearr_11017;
})();
if(inst_10935){
var statearr_11018_11091 = state_10979__$1;
(statearr_11018_11091[(1)] = (32));

} else {
var statearr_11019_11092 = state_10979__$1;
(statearr_11019_11092[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (44))){
var inst_10955 = (state_10979[(21)]);
var inst_10968 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_10955);
var inst_10969 = cljs.core.pr_str.call(null,inst_10968);
var inst_10970 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10969)].join('');
var inst_10971 = figwheel.client.utils.log.call(null,inst_10970);
var state_10979__$1 = state_10979;
var statearr_11020_11093 = state_10979__$1;
(statearr_11020_11093[(2)] = inst_10971);

(statearr_11020_11093[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (6))){
var inst_10873 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_11021_11094 = state_10979__$1;
(statearr_11021_11094[(2)] = inst_10873);

(statearr_11021_11094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (28))){
var inst_10898 = (state_10979[(26)]);
var inst_10925 = (state_10979[(2)]);
var inst_10926 = cljs.core.not_empty.call(null,inst_10898);
var state_10979__$1 = (function (){var statearr_11022 = state_10979;
(statearr_11022[(29)] = inst_10925);

return statearr_11022;
})();
if(cljs.core.truth_(inst_10926)){
var statearr_11023_11095 = state_10979__$1;
(statearr_11023_11095[(1)] = (29));

} else {
var statearr_11024_11096 = state_10979__$1;
(statearr_11024_11096[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (25))){
var inst_10896 = (state_10979[(24)]);
var inst_10912 = (state_10979[(2)]);
var inst_10913 = cljs.core.not_empty.call(null,inst_10896);
var state_10979__$1 = (function (){var statearr_11025 = state_10979;
(statearr_11025[(30)] = inst_10912);

return statearr_11025;
})();
if(cljs.core.truth_(inst_10913)){
var statearr_11026_11097 = state_10979__$1;
(statearr_11026_11097[(1)] = (26));

} else {
var statearr_11027_11098 = state_10979__$1;
(statearr_11027_11098[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (34))){
var inst_10948 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
if(cljs.core.truth_(inst_10948)){
var statearr_11028_11099 = state_10979__$1;
(statearr_11028_11099[(1)] = (38));

} else {
var statearr_11029_11100 = state_10979__$1;
(statearr_11029_11100[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (17))){
var state_10979__$1 = state_10979;
var statearr_11030_11101 = state_10979__$1;
(statearr_11030_11101[(2)] = recompile_dependents);

(statearr_11030_11101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (3))){
var state_10979__$1 = state_10979;
var statearr_11031_11102 = state_10979__$1;
(statearr_11031_11102[(2)] = null);

(statearr_11031_11102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (12))){
var inst_10869 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_11032_11103 = state_10979__$1;
(statearr_11032_11103[(2)] = inst_10869);

(statearr_11032_11103[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (2))){
var inst_10831 = (state_10979[(13)]);
var inst_10838 = cljs.core.seq.call(null,inst_10831);
var inst_10839 = inst_10838;
var inst_10840 = null;
var inst_10841 = (0);
var inst_10842 = (0);
var state_10979__$1 = (function (){var statearr_11033 = state_10979;
(statearr_11033[(7)] = inst_10842);

(statearr_11033[(8)] = inst_10840);

(statearr_11033[(9)] = inst_10839);

(statearr_11033[(10)] = inst_10841);

return statearr_11033;
})();
var statearr_11034_11104 = state_10979__$1;
(statearr_11034_11104[(2)] = null);

(statearr_11034_11104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (23))){
var inst_10900 = (state_10979[(23)]);
var inst_10896 = (state_10979[(24)]);
var inst_10892 = (state_10979[(19)]);
var inst_10898 = (state_10979[(26)]);
var inst_10895 = (state_10979[(25)]);
var inst_10903 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_10905 = (function (){var all_files = inst_10892;
var res_SINGLEQUOTE_ = inst_10895;
var res = inst_10896;
var files_not_loaded = inst_10898;
var dependencies_that_loaded = inst_10900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10900,inst_10896,inst_10892,inst_10898,inst_10895,inst_10903,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10904){
var map__11035 = p__10904;
var map__11035__$1 = ((((!((map__11035 == null)))?(((((map__11035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11035):map__11035);
var request_url = cljs.core.get.call(null,map__11035__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10900,inst_10896,inst_10892,inst_10898,inst_10895,inst_10903,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10906 = cljs.core.reverse.call(null,inst_10900);
var inst_10907 = cljs.core.map.call(null,inst_10905,inst_10906);
var inst_10908 = cljs.core.pr_str.call(null,inst_10907);
var inst_10909 = figwheel.client.utils.log.call(null,inst_10908);
var state_10979__$1 = (function (){var statearr_11037 = state_10979;
(statearr_11037[(31)] = inst_10903);

return statearr_11037;
})();
var statearr_11038_11105 = state_10979__$1;
(statearr_11038_11105[(2)] = inst_10909);

(statearr_11038_11105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (35))){
var state_10979__$1 = state_10979;
var statearr_11039_11106 = state_10979__$1;
(statearr_11039_11106[(2)] = true);

(statearr_11039_11106[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (19))){
var inst_10882 = (state_10979[(12)]);
var inst_10888 = figwheel.client.file_reloading.expand_files.call(null,inst_10882);
var state_10979__$1 = state_10979;
var statearr_11040_11107 = state_10979__$1;
(statearr_11040_11107[(2)] = inst_10888);

(statearr_11040_11107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (11))){
var state_10979__$1 = state_10979;
var statearr_11041_11108 = state_10979__$1;
(statearr_11041_11108[(2)] = null);

(statearr_11041_11108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (9))){
var inst_10871 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_11042_11109 = state_10979__$1;
(statearr_11042_11109[(2)] = inst_10871);

(statearr_11042_11109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (5))){
var inst_10842 = (state_10979[(7)]);
var inst_10841 = (state_10979[(10)]);
var inst_10844 = (inst_10842 < inst_10841);
var inst_10845 = inst_10844;
var state_10979__$1 = state_10979;
if(cljs.core.truth_(inst_10845)){
var statearr_11043_11110 = state_10979__$1;
(statearr_11043_11110[(1)] = (7));

} else {
var statearr_11044_11111 = state_10979__$1;
(statearr_11044_11111[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (14))){
var inst_10852 = (state_10979[(22)]);
var inst_10861 = cljs.core.first.call(null,inst_10852);
var inst_10862 = figwheel.client.file_reloading.eval_body.call(null,inst_10861,opts);
var inst_10863 = cljs.core.next.call(null,inst_10852);
var inst_10839 = inst_10863;
var inst_10840 = null;
var inst_10841 = (0);
var inst_10842 = (0);
var state_10979__$1 = (function (){var statearr_11045 = state_10979;
(statearr_11045[(32)] = inst_10862);

(statearr_11045[(7)] = inst_10842);

(statearr_11045[(8)] = inst_10840);

(statearr_11045[(9)] = inst_10839);

(statearr_11045[(10)] = inst_10841);

return statearr_11045;
})();
var statearr_11046_11112 = state_10979__$1;
(statearr_11046_11112[(2)] = null);

(statearr_11046_11112[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (45))){
var state_10979__$1 = state_10979;
var statearr_11047_11113 = state_10979__$1;
(statearr_11047_11113[(2)] = null);

(statearr_11047_11113[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (26))){
var inst_10900 = (state_10979[(23)]);
var inst_10896 = (state_10979[(24)]);
var inst_10892 = (state_10979[(19)]);
var inst_10898 = (state_10979[(26)]);
var inst_10895 = (state_10979[(25)]);
var inst_10915 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_10917 = (function (){var all_files = inst_10892;
var res_SINGLEQUOTE_ = inst_10895;
var res = inst_10896;
var files_not_loaded = inst_10898;
var dependencies_that_loaded = inst_10900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10900,inst_10896,inst_10892,inst_10898,inst_10895,inst_10915,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10916){
var map__11048 = p__10916;
var map__11048__$1 = ((((!((map__11048 == null)))?(((((map__11048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11048):map__11048);
var namespace = cljs.core.get.call(null,map__11048__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__11048__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10900,inst_10896,inst_10892,inst_10898,inst_10895,inst_10915,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10918 = cljs.core.map.call(null,inst_10917,inst_10896);
var inst_10919 = cljs.core.pr_str.call(null,inst_10918);
var inst_10920 = figwheel.client.utils.log.call(null,inst_10919);
var inst_10921 = (function (){var all_files = inst_10892;
var res_SINGLEQUOTE_ = inst_10895;
var res = inst_10896;
var files_not_loaded = inst_10898;
var dependencies_that_loaded = inst_10900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10900,inst_10896,inst_10892,inst_10898,inst_10895,inst_10915,inst_10917,inst_10918,inst_10919,inst_10920,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10900,inst_10896,inst_10892,inst_10898,inst_10895,inst_10915,inst_10917,inst_10918,inst_10919,inst_10920,state_val_10980,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10922 = setTimeout(inst_10921,(10));
var state_10979__$1 = (function (){var statearr_11050 = state_10979;
(statearr_11050[(33)] = inst_10920);

(statearr_11050[(34)] = inst_10915);

return statearr_11050;
})();
var statearr_11051_11114 = state_10979__$1;
(statearr_11051_11114[(2)] = inst_10922);

(statearr_11051_11114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (16))){
var state_10979__$1 = state_10979;
var statearr_11052_11115 = state_10979__$1;
(statearr_11052_11115[(2)] = reload_dependents);

(statearr_11052_11115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (38))){
var inst_10932 = (state_10979[(16)]);
var inst_10950 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10932);
var state_10979__$1 = state_10979;
var statearr_11053_11116 = state_10979__$1;
(statearr_11053_11116[(2)] = inst_10950);

(statearr_11053_11116[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (30))){
var state_10979__$1 = state_10979;
var statearr_11054_11117 = state_10979__$1;
(statearr_11054_11117[(2)] = null);

(statearr_11054_11117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (10))){
var inst_10852 = (state_10979[(22)]);
var inst_10854 = cljs.core.chunked_seq_QMARK_.call(null,inst_10852);
var state_10979__$1 = state_10979;
if(inst_10854){
var statearr_11055_11118 = state_10979__$1;
(statearr_11055_11118[(1)] = (13));

} else {
var statearr_11056_11119 = state_10979__$1;
(statearr_11056_11119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (18))){
var inst_10886 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
if(cljs.core.truth_(inst_10886)){
var statearr_11057_11120 = state_10979__$1;
(statearr_11057_11120[(1)] = (19));

} else {
var statearr_11058_11121 = state_10979__$1;
(statearr_11058_11121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (42))){
var state_10979__$1 = state_10979;
var statearr_11059_11122 = state_10979__$1;
(statearr_11059_11122[(2)] = null);

(statearr_11059_11122[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (37))){
var inst_10945 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_11060_11123 = state_10979__$1;
(statearr_11060_11123[(2)] = inst_10945);

(statearr_11060_11123[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (8))){
var inst_10852 = (state_10979[(22)]);
var inst_10839 = (state_10979[(9)]);
var inst_10852__$1 = cljs.core.seq.call(null,inst_10839);
var state_10979__$1 = (function (){var statearr_11061 = state_10979;
(statearr_11061[(22)] = inst_10852__$1);

return statearr_11061;
})();
if(inst_10852__$1){
var statearr_11062_11124 = state_10979__$1;
(statearr_11062_11124[(1)] = (10));

} else {
var statearr_11063_11125 = state_10979__$1;
(statearr_11063_11125[(1)] = (11));

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
});})(c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__1996__auto__,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0 = (function (){
var statearr_11064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11064[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__);

(statearr_11064[(1)] = (1));

return statearr_11064;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1 = (function (state_10979){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_10979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e11065){if((e11065 instanceof Object)){
var ex__2000__auto__ = e11065;
var statearr_11066_11126 = state_10979;
(statearr_11066_11126[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11127 = state_10979;
state_10979 = G__11127;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__ = function(state_10979){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1.call(this,state_10979);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__2153__auto__ = (function (){var statearr_11067 = f__2152__auto__.call(null);
(statearr_11067[(6)] = c__2151__auto__);

return statearr_11067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__,map__10824,map__10824__$1,opts,before_jsload,on_jsload,reload_dependents,map__10825,map__10825__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__2151__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__11130,link){
var map__11131 = p__11130;
var map__11131__$1 = ((((!((map__11131 == null)))?(((((map__11131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11131):map__11131);
var file = cljs.core.get.call(null,map__11131__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__11131,map__11131__$1,file){
return (function (p1__11128_SHARP_,p2__11129_SHARP_){
if(cljs.core._EQ_.call(null,p1__11128_SHARP_,p2__11129_SHARP_)){
return p1__11128_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__11131,map__11131__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__11134){
var map__11135 = p__11134;
var map__11135__$1 = ((((!((map__11135 == null)))?(((((map__11135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11135):map__11135);
var match_length = cljs.core.get.call(null,map__11135__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__11135__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__11133_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__11133_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__11137_SHARP_,p2__11138_SHARP_){
return cljs.core.assoc.call(null,p1__11137_SHARP_,cljs.core.get.call(null,p2__11138_SHARP_,key),p2__11138_SHARP_);
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
var loaded_f_datas_11139 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_11139);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_11139);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__11140,p__11141){
var map__11142 = p__11140;
var map__11142__$1 = ((((!((map__11142 == null)))?(((((map__11142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11142):map__11142);
var on_cssload = cljs.core.get.call(null,map__11142__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__11143 = p__11141;
var map__11143__$1 = ((((!((map__11143 == null)))?(((((map__11143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11143):map__11143);
var files_msg = map__11143__$1;
var files = cljs.core.get.call(null,map__11143__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
