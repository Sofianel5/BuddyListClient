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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__10584_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__10584_SHARP_));
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
var seq__10585 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__10586 = null;
var count__10587 = (0);
var i__10588 = (0);
while(true){
if((i__10588 < count__10587)){
var n = cljs.core._nth.call(null,chunk__10586,i__10588);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__10589 = seq__10585;
var G__10590 = chunk__10586;
var G__10591 = count__10587;
var G__10592 = (i__10588 + (1));
seq__10585 = G__10589;
chunk__10586 = G__10590;
count__10587 = G__10591;
i__10588 = G__10592;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10585);
if(temp__4657__auto__){
var seq__10585__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10585__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__10585__$1);
var G__10593 = cljs.core.chunk_rest.call(null,seq__10585__$1);
var G__10594 = c__4317__auto__;
var G__10595 = cljs.core.count.call(null,c__4317__auto__);
var G__10596 = (0);
seq__10585 = G__10593;
chunk__10586 = G__10594;
count__10587 = G__10595;
i__10588 = G__10596;
continue;
} else {
var n = cljs.core.first.call(null,seq__10585__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__10597 = cljs.core.next.call(null,seq__10585__$1);
var G__10598 = null;
var G__10599 = (0);
var G__10600 = (0);
seq__10585 = G__10597;
chunk__10586 = G__10598;
count__10587 = G__10599;
i__10588 = G__10600;
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

var seq__10610_10618 = cljs.core.seq.call(null,deps);
var chunk__10611_10619 = null;
var count__10612_10620 = (0);
var i__10613_10621 = (0);
while(true){
if((i__10613_10621 < count__10612_10620)){
var dep_10622 = cljs.core._nth.call(null,chunk__10611_10619,i__10613_10621);
topo_sort_helper_STAR_.call(null,dep_10622,(depth + (1)),state);


var G__10623 = seq__10610_10618;
var G__10624 = chunk__10611_10619;
var G__10625 = count__10612_10620;
var G__10626 = (i__10613_10621 + (1));
seq__10610_10618 = G__10623;
chunk__10611_10619 = G__10624;
count__10612_10620 = G__10625;
i__10613_10621 = G__10626;
continue;
} else {
var temp__4657__auto___10627 = cljs.core.seq.call(null,seq__10610_10618);
if(temp__4657__auto___10627){
var seq__10610_10628__$1 = temp__4657__auto___10627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10610_10628__$1)){
var c__4317__auto___10629 = cljs.core.chunk_first.call(null,seq__10610_10628__$1);
var G__10630 = cljs.core.chunk_rest.call(null,seq__10610_10628__$1);
var G__10631 = c__4317__auto___10629;
var G__10632 = cljs.core.count.call(null,c__4317__auto___10629);
var G__10633 = (0);
seq__10610_10618 = G__10630;
chunk__10611_10619 = G__10631;
count__10612_10620 = G__10632;
i__10613_10621 = G__10633;
continue;
} else {
var dep_10634 = cljs.core.first.call(null,seq__10610_10628__$1);
topo_sort_helper_STAR_.call(null,dep_10634,(depth + (1)),state);


var G__10635 = cljs.core.next.call(null,seq__10610_10628__$1);
var G__10636 = null;
var G__10637 = (0);
var G__10638 = (0);
seq__10610_10618 = G__10635;
chunk__10611_10619 = G__10636;
count__10612_10620 = G__10637;
i__10613_10621 = G__10638;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__10614){
var vec__10615 = p__10614;
var seq__10616 = cljs.core.seq.call(null,vec__10615);
var first__10617 = cljs.core.first.call(null,seq__10616);
var seq__10616__$1 = cljs.core.next.call(null,seq__10616);
var x = first__10617;
var xs = seq__10616__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__10615,seq__10616,first__10617,seq__10616__$1,x,xs,get_deps__$1){
return (function (p1__10601_SHARP_){
return clojure.set.difference.call(null,p1__10601_SHARP_,x);
});})(vec__10615,seq__10616,first__10617,seq__10616__$1,x,xs,get_deps__$1))
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
var seq__10639 = cljs.core.seq.call(null,provides);
var chunk__10640 = null;
var count__10641 = (0);
var i__10642 = (0);
while(true){
if((i__10642 < count__10641)){
var prov = cljs.core._nth.call(null,chunk__10640,i__10642);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__10643_10651 = cljs.core.seq.call(null,requires);
var chunk__10644_10652 = null;
var count__10645_10653 = (0);
var i__10646_10654 = (0);
while(true){
if((i__10646_10654 < count__10645_10653)){
var req_10655 = cljs.core._nth.call(null,chunk__10644_10652,i__10646_10654);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10655,prov);


var G__10656 = seq__10643_10651;
var G__10657 = chunk__10644_10652;
var G__10658 = count__10645_10653;
var G__10659 = (i__10646_10654 + (1));
seq__10643_10651 = G__10656;
chunk__10644_10652 = G__10657;
count__10645_10653 = G__10658;
i__10646_10654 = G__10659;
continue;
} else {
var temp__4657__auto___10660 = cljs.core.seq.call(null,seq__10643_10651);
if(temp__4657__auto___10660){
var seq__10643_10661__$1 = temp__4657__auto___10660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10643_10661__$1)){
var c__4317__auto___10662 = cljs.core.chunk_first.call(null,seq__10643_10661__$1);
var G__10663 = cljs.core.chunk_rest.call(null,seq__10643_10661__$1);
var G__10664 = c__4317__auto___10662;
var G__10665 = cljs.core.count.call(null,c__4317__auto___10662);
var G__10666 = (0);
seq__10643_10651 = G__10663;
chunk__10644_10652 = G__10664;
count__10645_10653 = G__10665;
i__10646_10654 = G__10666;
continue;
} else {
var req_10667 = cljs.core.first.call(null,seq__10643_10661__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10667,prov);


var G__10668 = cljs.core.next.call(null,seq__10643_10661__$1);
var G__10669 = null;
var G__10670 = (0);
var G__10671 = (0);
seq__10643_10651 = G__10668;
chunk__10644_10652 = G__10669;
count__10645_10653 = G__10670;
i__10646_10654 = G__10671;
continue;
}
} else {
}
}
break;
}


var G__10672 = seq__10639;
var G__10673 = chunk__10640;
var G__10674 = count__10641;
var G__10675 = (i__10642 + (1));
seq__10639 = G__10672;
chunk__10640 = G__10673;
count__10641 = G__10674;
i__10642 = G__10675;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10639);
if(temp__4657__auto__){
var seq__10639__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10639__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__10639__$1);
var G__10676 = cljs.core.chunk_rest.call(null,seq__10639__$1);
var G__10677 = c__4317__auto__;
var G__10678 = cljs.core.count.call(null,c__4317__auto__);
var G__10679 = (0);
seq__10639 = G__10676;
chunk__10640 = G__10677;
count__10641 = G__10678;
i__10642 = G__10679;
continue;
} else {
var prov = cljs.core.first.call(null,seq__10639__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__10647_10680 = cljs.core.seq.call(null,requires);
var chunk__10648_10681 = null;
var count__10649_10682 = (0);
var i__10650_10683 = (0);
while(true){
if((i__10650_10683 < count__10649_10682)){
var req_10684 = cljs.core._nth.call(null,chunk__10648_10681,i__10650_10683);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10684,prov);


var G__10685 = seq__10647_10680;
var G__10686 = chunk__10648_10681;
var G__10687 = count__10649_10682;
var G__10688 = (i__10650_10683 + (1));
seq__10647_10680 = G__10685;
chunk__10648_10681 = G__10686;
count__10649_10682 = G__10687;
i__10650_10683 = G__10688;
continue;
} else {
var temp__4657__auto___10689__$1 = cljs.core.seq.call(null,seq__10647_10680);
if(temp__4657__auto___10689__$1){
var seq__10647_10690__$1 = temp__4657__auto___10689__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10647_10690__$1)){
var c__4317__auto___10691 = cljs.core.chunk_first.call(null,seq__10647_10690__$1);
var G__10692 = cljs.core.chunk_rest.call(null,seq__10647_10690__$1);
var G__10693 = c__4317__auto___10691;
var G__10694 = cljs.core.count.call(null,c__4317__auto___10691);
var G__10695 = (0);
seq__10647_10680 = G__10692;
chunk__10648_10681 = G__10693;
count__10649_10682 = G__10694;
i__10650_10683 = G__10695;
continue;
} else {
var req_10696 = cljs.core.first.call(null,seq__10647_10690__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10696,prov);


var G__10697 = cljs.core.next.call(null,seq__10647_10690__$1);
var G__10698 = null;
var G__10699 = (0);
var G__10700 = (0);
seq__10647_10680 = G__10697;
chunk__10648_10681 = G__10698;
count__10649_10682 = G__10699;
i__10650_10683 = G__10700;
continue;
}
} else {
}
}
break;
}


var G__10701 = cljs.core.next.call(null,seq__10639__$1);
var G__10702 = null;
var G__10703 = (0);
var G__10704 = (0);
seq__10639 = G__10701;
chunk__10640 = G__10702;
count__10641 = G__10703;
i__10642 = G__10704;
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
var seq__10705_10709 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__10706_10710 = null;
var count__10707_10711 = (0);
var i__10708_10712 = (0);
while(true){
if((i__10708_10712 < count__10707_10711)){
var ns_10713 = cljs.core._nth.call(null,chunk__10706_10710,i__10708_10712);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_10713);


var G__10714 = seq__10705_10709;
var G__10715 = chunk__10706_10710;
var G__10716 = count__10707_10711;
var G__10717 = (i__10708_10712 + (1));
seq__10705_10709 = G__10714;
chunk__10706_10710 = G__10715;
count__10707_10711 = G__10716;
i__10708_10712 = G__10717;
continue;
} else {
var temp__4657__auto___10718 = cljs.core.seq.call(null,seq__10705_10709);
if(temp__4657__auto___10718){
var seq__10705_10719__$1 = temp__4657__auto___10718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10705_10719__$1)){
var c__4317__auto___10720 = cljs.core.chunk_first.call(null,seq__10705_10719__$1);
var G__10721 = cljs.core.chunk_rest.call(null,seq__10705_10719__$1);
var G__10722 = c__4317__auto___10720;
var G__10723 = cljs.core.count.call(null,c__4317__auto___10720);
var G__10724 = (0);
seq__10705_10709 = G__10721;
chunk__10706_10710 = G__10722;
count__10707_10711 = G__10723;
i__10708_10712 = G__10724;
continue;
} else {
var ns_10725 = cljs.core.first.call(null,seq__10705_10719__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_10725);


var G__10726 = cljs.core.next.call(null,seq__10705_10719__$1);
var G__10727 = null;
var G__10728 = (0);
var G__10729 = (0);
seq__10705_10709 = G__10726;
chunk__10706_10710 = G__10727;
count__10707_10711 = G__10728;
i__10708_10712 = G__10729;
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
var G__10730__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__10730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10731__i = 0, G__10731__a = new Array(arguments.length -  0);
while (G__10731__i < G__10731__a.length) {G__10731__a[G__10731__i] = arguments[G__10731__i + 0]; ++G__10731__i;}
  args = new cljs.core.IndexedSeq(G__10731__a,0,null);
} 
return G__10730__delegate.call(this,args);};
G__10730.cljs$lang$maxFixedArity = 0;
G__10730.cljs$lang$applyTo = (function (arglist__10732){
var args = cljs.core.seq(arglist__10732);
return G__10730__delegate(args);
});
G__10730.cljs$core$IFn$_invoke$arity$variadic = G__10730__delegate;
return G__10730;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__10733 = cljs.core._EQ_;
var expr__10734 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__10733.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__10734))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__10733,expr__10734){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__10733,expr__10734))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__10733,expr__10734){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e10736){if((e10736 instanceof Error)){
var e = e10736;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e10736;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__10733,expr__10734))
} else {
if(cljs.core.truth_(pred__10733.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__10734))){
return ((function (pred__10733,expr__10734){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__10733,expr__10734){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__10733,expr__10734))
);

return deferred.addErrback(((function (deferred,pred__10733,expr__10734){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__10733,expr__10734))
);
});
;})(pred__10733,expr__10734))
} else {
if(cljs.core.truth_(pred__10733.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__10734))){
return ((function (pred__10733,expr__10734){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e10737){if((e10737 instanceof Error)){
var e = e10737;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e10737;

}
}})());
});
;})(pred__10733,expr__10734))
} else {
return ((function (pred__10733,expr__10734){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__10733,expr__10734))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__10738,callback){
var map__10739 = p__10738;
var map__10739__$1 = ((((!((map__10739 == null)))?(((((map__10739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10739):map__10739);
var file_msg = map__10739__$1;
var request_url = cljs.core.get.call(null,map__10739__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__10739,map__10739__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__10739,map__10739__$1,file_msg,request_url))
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
return (function (state_10763){
var state_val_10764 = (state_10763[(1)]);
if((state_val_10764 === (7))){
var inst_10759 = (state_10763[(2)]);
var state_10763__$1 = state_10763;
var statearr_10765_10782 = state_10763__$1;
(statearr_10765_10782[(2)] = inst_10759);

(statearr_10765_10782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10764 === (1))){
var state_10763__$1 = state_10763;
var statearr_10766_10783 = state_10763__$1;
(statearr_10766_10783[(2)] = null);

(statearr_10766_10783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10764 === (4))){
var inst_10743 = (state_10763[(7)]);
var inst_10743__$1 = (state_10763[(2)]);
var state_10763__$1 = (function (){var statearr_10767 = state_10763;
(statearr_10767[(7)] = inst_10743__$1);

return statearr_10767;
})();
if(cljs.core.truth_(inst_10743__$1)){
var statearr_10768_10784 = state_10763__$1;
(statearr_10768_10784[(1)] = (5));

} else {
var statearr_10769_10785 = state_10763__$1;
(statearr_10769_10785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10764 === (6))){
var state_10763__$1 = state_10763;
var statearr_10770_10786 = state_10763__$1;
(statearr_10770_10786[(2)] = null);

(statearr_10770_10786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10764 === (3))){
var inst_10761 = (state_10763[(2)]);
var state_10763__$1 = state_10763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10763__$1,inst_10761);
} else {
if((state_val_10764 === (2))){
var state_10763__$1 = state_10763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10763__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_10764 === (11))){
var inst_10755 = (state_10763[(2)]);
var state_10763__$1 = (function (){var statearr_10771 = state_10763;
(statearr_10771[(8)] = inst_10755);

return statearr_10771;
})();
var statearr_10772_10787 = state_10763__$1;
(statearr_10772_10787[(2)] = null);

(statearr_10772_10787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10764 === (9))){
var inst_10747 = (state_10763[(9)]);
var inst_10749 = (state_10763[(10)]);
var inst_10751 = inst_10749.call(null,inst_10747);
var state_10763__$1 = state_10763;
var statearr_10773_10788 = state_10763__$1;
(statearr_10773_10788[(2)] = inst_10751);

(statearr_10773_10788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10764 === (5))){
var inst_10743 = (state_10763[(7)]);
var inst_10745 = figwheel.client.file_reloading.blocking_load.call(null,inst_10743);
var state_10763__$1 = state_10763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10763__$1,(8),inst_10745);
} else {
if((state_val_10764 === (10))){
var inst_10747 = (state_10763[(9)]);
var inst_10753 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_10747);
var state_10763__$1 = state_10763;
var statearr_10774_10789 = state_10763__$1;
(statearr_10774_10789[(2)] = inst_10753);

(statearr_10774_10789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10764 === (8))){
var inst_10749 = (state_10763[(10)]);
var inst_10743 = (state_10763[(7)]);
var inst_10747 = (state_10763[(2)]);
var inst_10748 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_10749__$1 = cljs.core.get.call(null,inst_10748,inst_10743);
var state_10763__$1 = (function (){var statearr_10775 = state_10763;
(statearr_10775[(9)] = inst_10747);

(statearr_10775[(10)] = inst_10749__$1);

return statearr_10775;
})();
if(cljs.core.truth_(inst_10749__$1)){
var statearr_10776_10790 = state_10763__$1;
(statearr_10776_10790[(1)] = (9));

} else {
var statearr_10777_10791 = state_10763__$1;
(statearr_10777_10791[(1)] = (10));

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
var statearr_10778 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10778[(0)] = figwheel$client$file_reloading$state_machine__1997__auto__);

(statearr_10778[(1)] = (1));

return statearr_10778;
});
var figwheel$client$file_reloading$state_machine__1997__auto____1 = (function (state_10763){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_10763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e10779){if((e10779 instanceof Object)){
var ex__2000__auto__ = e10779;
var statearr_10780_10792 = state_10763;
(statearr_10780_10792[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10793 = state_10763;
state_10763 = G__10793;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__1997__auto__ = function(state_10763){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__1997__auto____1.call(this,state_10763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__1997__auto____0;
figwheel$client$file_reloading$state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__1997__auto____1;
return figwheel$client$file_reloading$state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__))
})();
var state__2153__auto__ = (function (){var statearr_10781 = f__2152__auto__.call(null);
(statearr_10781[(6)] = c__2151__auto__);

return statearr_10781;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__10794,callback){
var map__10795 = p__10794;
var map__10795__$1 = ((((!((map__10795 == null)))?(((((map__10795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10795):map__10795);
var file_msg = map__10795__$1;
var namespace = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__10795,map__10795__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__10795,map__10795__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__10797){
var map__10798 = p__10797;
var map__10798__$1 = ((((!((map__10798 == null)))?(((((map__10798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10798):map__10798);
var file_msg = map__10798__$1;
var namespace = cljs.core.get.call(null,map__10798__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__10800){
var map__10801 = p__10800;
var map__10801__$1 = ((((!((map__10801 == null)))?(((((map__10801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10801):map__10801);
var file_msg = map__10801__$1;
var namespace = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__10803,callback){
var map__10804 = p__10803;
var map__10804__$1 = ((((!((map__10804 == null)))?(((((map__10804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10804):map__10804);
var file_msg = map__10804__$1;
var request_url = cljs.core.get.call(null,map__10804__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__10804__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__2151__auto___10854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___10854,out){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___10854,out){
return (function (state_10839){
var state_val_10840 = (state_10839[(1)]);
if((state_val_10840 === (1))){
var inst_10813 = cljs.core.seq.call(null,files);
var inst_10814 = cljs.core.first.call(null,inst_10813);
var inst_10815 = cljs.core.next.call(null,inst_10813);
var inst_10816 = files;
var state_10839__$1 = (function (){var statearr_10841 = state_10839;
(statearr_10841[(7)] = inst_10815);

(statearr_10841[(8)] = inst_10816);

(statearr_10841[(9)] = inst_10814);

return statearr_10841;
})();
var statearr_10842_10855 = state_10839__$1;
(statearr_10842_10855[(2)] = null);

(statearr_10842_10855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10840 === (2))){
var inst_10822 = (state_10839[(10)]);
var inst_10816 = (state_10839[(8)]);
var inst_10821 = cljs.core.seq.call(null,inst_10816);
var inst_10822__$1 = cljs.core.first.call(null,inst_10821);
var inst_10823 = cljs.core.next.call(null,inst_10821);
var inst_10824 = (inst_10822__$1 == null);
var inst_10825 = cljs.core.not.call(null,inst_10824);
var state_10839__$1 = (function (){var statearr_10843 = state_10839;
(statearr_10843[(10)] = inst_10822__$1);

(statearr_10843[(11)] = inst_10823);

return statearr_10843;
})();
if(inst_10825){
var statearr_10844_10856 = state_10839__$1;
(statearr_10844_10856[(1)] = (4));

} else {
var statearr_10845_10857 = state_10839__$1;
(statearr_10845_10857[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10840 === (3))){
var inst_10837 = (state_10839[(2)]);
var state_10839__$1 = state_10839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10839__$1,inst_10837);
} else {
if((state_val_10840 === (4))){
var inst_10822 = (state_10839[(10)]);
var inst_10827 = figwheel.client.file_reloading.reload_js_file.call(null,inst_10822);
var state_10839__$1 = state_10839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10839__$1,(7),inst_10827);
} else {
if((state_val_10840 === (5))){
var inst_10833 = cljs.core.async.close_BANG_.call(null,out);
var state_10839__$1 = state_10839;
var statearr_10846_10858 = state_10839__$1;
(statearr_10846_10858[(2)] = inst_10833);

(statearr_10846_10858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10840 === (6))){
var inst_10835 = (state_10839[(2)]);
var state_10839__$1 = state_10839;
var statearr_10847_10859 = state_10839__$1;
(statearr_10847_10859[(2)] = inst_10835);

(statearr_10847_10859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10840 === (7))){
var inst_10823 = (state_10839[(11)]);
var inst_10829 = (state_10839[(2)]);
var inst_10830 = cljs.core.async.put_BANG_.call(null,out,inst_10829);
var inst_10816 = inst_10823;
var state_10839__$1 = (function (){var statearr_10848 = state_10839;
(statearr_10848[(12)] = inst_10830);

(statearr_10848[(8)] = inst_10816);

return statearr_10848;
})();
var statearr_10849_10860 = state_10839__$1;
(statearr_10849_10860[(2)] = null);

(statearr_10849_10860[(1)] = (2));


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
});})(c__2151__auto___10854,out))
;
return ((function (switch__1996__auto__,c__2151__auto___10854,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0 = (function (){
var statearr_10850 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10850[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__);

(statearr_10850[(1)] = (1));

return statearr_10850;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1 = (function (state_10839){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_10839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e10851){if((e10851 instanceof Object)){
var ex__2000__auto__ = e10851;
var statearr_10852_10861 = state_10839;
(statearr_10852_10861[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10862 = state_10839;
state_10839 = G__10862;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__ = function(state_10839){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1.call(this,state_10839);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___10854,out))
})();
var state__2153__auto__ = (function (){var statearr_10853 = f__2152__auto__.call(null);
(statearr_10853[(6)] = c__2151__auto___10854);

return statearr_10853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___10854,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__10863,opts){
var map__10864 = p__10863;
var map__10864__$1 = ((((!((map__10864 == null)))?(((((map__10864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10864):map__10864);
var eval_body = cljs.core.get.call(null,map__10864__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__10864__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e10866){var e = e10866;
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
return (function (p1__10867_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__10867_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__10868){
var vec__10869 = p__10868;
var k = cljs.core.nth.call(null,vec__10869,(0),null);
var v = cljs.core.nth.call(null,vec__10869,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__10872){
var vec__10873 = p__10872;
var k = cljs.core.nth.call(null,vec__10873,(0),null);
var v = cljs.core.nth.call(null,vec__10873,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__10879,p__10880){
var map__10881 = p__10879;
var map__10881__$1 = ((((!((map__10881 == null)))?(((((map__10881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10881):map__10881);
var opts = map__10881__$1;
var before_jsload = cljs.core.get.call(null,map__10881__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__10881__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__10881__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__10882 = p__10880;
var map__10882__$1 = ((((!((map__10882 == null)))?(((((map__10882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10882):map__10882);
var msg = map__10882__$1;
var files = cljs.core.get.call(null,map__10882__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__10882__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__10882__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_11036){
var state_val_11037 = (state_11036[(1)]);
if((state_val_11037 === (7))){
var inst_10896 = (state_11036[(7)]);
var inst_10897 = (state_11036[(8)]);
var inst_10899 = (state_11036[(9)]);
var inst_10898 = (state_11036[(10)]);
var inst_10904 = cljs.core._nth.call(null,inst_10897,inst_10899);
var inst_10905 = figwheel.client.file_reloading.eval_body.call(null,inst_10904,opts);
var inst_10906 = (inst_10899 + (1));
var tmp11038 = inst_10896;
var tmp11039 = inst_10897;
var tmp11040 = inst_10898;
var inst_10896__$1 = tmp11038;
var inst_10897__$1 = tmp11039;
var inst_10898__$1 = tmp11040;
var inst_10899__$1 = inst_10906;
var state_11036__$1 = (function (){var statearr_11041 = state_11036;
(statearr_11041[(11)] = inst_10905);

(statearr_11041[(7)] = inst_10896__$1);

(statearr_11041[(8)] = inst_10897__$1);

(statearr_11041[(9)] = inst_10899__$1);

(statearr_11041[(10)] = inst_10898__$1);

return statearr_11041;
})();
var statearr_11042_11125 = state_11036__$1;
(statearr_11042_11125[(2)] = null);

(statearr_11042_11125[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (20))){
var inst_10939 = (state_11036[(12)]);
var inst_10947 = figwheel.client.file_reloading.sort_files.call(null,inst_10939);
var state_11036__$1 = state_11036;
var statearr_11043_11126 = state_11036__$1;
(statearr_11043_11126[(2)] = inst_10947);

(statearr_11043_11126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (27))){
var state_11036__$1 = state_11036;
var statearr_11044_11127 = state_11036__$1;
(statearr_11044_11127[(2)] = null);

(statearr_11044_11127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (1))){
var inst_10888 = (state_11036[(13)]);
var inst_10885 = before_jsload.call(null,files);
var inst_10886 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_10887 = (function (){return ((function (inst_10888,inst_10885,inst_10886,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10876_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__10876_SHARP_);
});
;})(inst_10888,inst_10885,inst_10886,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10888__$1 = cljs.core.filter.call(null,inst_10887,files);
var inst_10889 = cljs.core.not_empty.call(null,inst_10888__$1);
var state_11036__$1 = (function (){var statearr_11045 = state_11036;
(statearr_11045[(14)] = inst_10886);

(statearr_11045[(15)] = inst_10885);

(statearr_11045[(13)] = inst_10888__$1);

return statearr_11045;
})();
if(cljs.core.truth_(inst_10889)){
var statearr_11046_11128 = state_11036__$1;
(statearr_11046_11128[(1)] = (2));

} else {
var statearr_11047_11129 = state_11036__$1;
(statearr_11047_11129[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (24))){
var state_11036__$1 = state_11036;
var statearr_11048_11130 = state_11036__$1;
(statearr_11048_11130[(2)] = null);

(statearr_11048_11130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (39))){
var inst_10989 = (state_11036[(16)]);
var state_11036__$1 = state_11036;
var statearr_11049_11131 = state_11036__$1;
(statearr_11049_11131[(2)] = inst_10989);

(statearr_11049_11131[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (46))){
var inst_11031 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
var statearr_11050_11132 = state_11036__$1;
(statearr_11050_11132[(2)] = inst_11031);

(statearr_11050_11132[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (4))){
var inst_10933 = (state_11036[(2)]);
var inst_10934 = cljs.core.List.EMPTY;
var inst_10935 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_10934);
var inst_10936 = (function (){return ((function (inst_10933,inst_10934,inst_10935,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10877_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__10877_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__10877_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__10877_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_10933,inst_10934,inst_10935,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10937 = cljs.core.filter.call(null,inst_10936,files);
var inst_10938 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_10939 = cljs.core.concat.call(null,inst_10937,inst_10938);
var state_11036__$1 = (function (){var statearr_11051 = state_11036;
(statearr_11051[(12)] = inst_10939);

(statearr_11051[(17)] = inst_10933);

(statearr_11051[(18)] = inst_10935);

return statearr_11051;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_11052_11133 = state_11036__$1;
(statearr_11052_11133[(1)] = (16));

} else {
var statearr_11053_11134 = state_11036__$1;
(statearr_11053_11134[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (15))){
var inst_10923 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
var statearr_11054_11135 = state_11036__$1;
(statearr_11054_11135[(2)] = inst_10923);

(statearr_11054_11135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (21))){
var inst_10949 = (state_11036[(19)]);
var inst_10949__$1 = (state_11036[(2)]);
var inst_10950 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_10949__$1);
var state_11036__$1 = (function (){var statearr_11055 = state_11036;
(statearr_11055[(19)] = inst_10949__$1);

return statearr_11055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11036__$1,(22),inst_10950);
} else {
if((state_val_11037 === (31))){
var inst_11034 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11036__$1,inst_11034);
} else {
if((state_val_11037 === (32))){
var inst_10989 = (state_11036[(16)]);
var inst_10994 = inst_10989.cljs$lang$protocol_mask$partition0$;
var inst_10995 = (inst_10994 & (64));
var inst_10996 = inst_10989.cljs$core$ISeq$;
var inst_10997 = (cljs.core.PROTOCOL_SENTINEL === inst_10996);
var inst_10998 = ((inst_10995) || (inst_10997));
var state_11036__$1 = state_11036;
if(cljs.core.truth_(inst_10998)){
var statearr_11056_11136 = state_11036__$1;
(statearr_11056_11136[(1)] = (35));

} else {
var statearr_11057_11137 = state_11036__$1;
(statearr_11057_11137[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (40))){
var inst_11011 = (state_11036[(20)]);
var inst_11010 = (state_11036[(2)]);
var inst_11011__$1 = cljs.core.get.call(null,inst_11010,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_11012 = cljs.core.get.call(null,inst_11010,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_11013 = cljs.core.not_empty.call(null,inst_11011__$1);
var state_11036__$1 = (function (){var statearr_11058 = state_11036;
(statearr_11058[(21)] = inst_11012);

(statearr_11058[(20)] = inst_11011__$1);

return statearr_11058;
})();
if(cljs.core.truth_(inst_11013)){
var statearr_11059_11138 = state_11036__$1;
(statearr_11059_11138[(1)] = (41));

} else {
var statearr_11060_11139 = state_11036__$1;
(statearr_11060_11139[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (33))){
var state_11036__$1 = state_11036;
var statearr_11061_11140 = state_11036__$1;
(statearr_11061_11140[(2)] = false);

(statearr_11061_11140[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (13))){
var inst_10909 = (state_11036[(22)]);
var inst_10913 = cljs.core.chunk_first.call(null,inst_10909);
var inst_10914 = cljs.core.chunk_rest.call(null,inst_10909);
var inst_10915 = cljs.core.count.call(null,inst_10913);
var inst_10896 = inst_10914;
var inst_10897 = inst_10913;
var inst_10898 = inst_10915;
var inst_10899 = (0);
var state_11036__$1 = (function (){var statearr_11062 = state_11036;
(statearr_11062[(7)] = inst_10896);

(statearr_11062[(8)] = inst_10897);

(statearr_11062[(9)] = inst_10899);

(statearr_11062[(10)] = inst_10898);

return statearr_11062;
})();
var statearr_11063_11141 = state_11036__$1;
(statearr_11063_11141[(2)] = null);

(statearr_11063_11141[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (22))){
var inst_10949 = (state_11036[(19)]);
var inst_10953 = (state_11036[(23)]);
var inst_10952 = (state_11036[(24)]);
var inst_10957 = (state_11036[(25)]);
var inst_10952__$1 = (state_11036[(2)]);
var inst_10953__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_10952__$1);
var inst_10954 = (function (){var all_files = inst_10949;
var res_SINGLEQUOTE_ = inst_10952__$1;
var res = inst_10953__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_10949,inst_10953,inst_10952,inst_10957,inst_10952__$1,inst_10953__$1,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10878_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__10878_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_10949,inst_10953,inst_10952,inst_10957,inst_10952__$1,inst_10953__$1,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10955 = cljs.core.filter.call(null,inst_10954,inst_10952__$1);
var inst_10956 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_10957__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_10956);
var inst_10958 = cljs.core.not_empty.call(null,inst_10957__$1);
var state_11036__$1 = (function (){var statearr_11064 = state_11036;
(statearr_11064[(26)] = inst_10955);

(statearr_11064[(23)] = inst_10953__$1);

(statearr_11064[(24)] = inst_10952__$1);

(statearr_11064[(25)] = inst_10957__$1);

return statearr_11064;
})();
if(cljs.core.truth_(inst_10958)){
var statearr_11065_11142 = state_11036__$1;
(statearr_11065_11142[(1)] = (23));

} else {
var statearr_11066_11143 = state_11036__$1;
(statearr_11066_11143[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (36))){
var state_11036__$1 = state_11036;
var statearr_11067_11144 = state_11036__$1;
(statearr_11067_11144[(2)] = false);

(statearr_11067_11144[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (41))){
var inst_11011 = (state_11036[(20)]);
var inst_11015 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_11016 = cljs.core.map.call(null,inst_11015,inst_11011);
var inst_11017 = cljs.core.pr_str.call(null,inst_11016);
var inst_11018 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11017)].join('');
var inst_11019 = figwheel.client.utils.log.call(null,inst_11018);
var state_11036__$1 = state_11036;
var statearr_11068_11145 = state_11036__$1;
(statearr_11068_11145[(2)] = inst_11019);

(statearr_11068_11145[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (43))){
var inst_11012 = (state_11036[(21)]);
var inst_11022 = (state_11036[(2)]);
var inst_11023 = cljs.core.not_empty.call(null,inst_11012);
var state_11036__$1 = (function (){var statearr_11069 = state_11036;
(statearr_11069[(27)] = inst_11022);

return statearr_11069;
})();
if(cljs.core.truth_(inst_11023)){
var statearr_11070_11146 = state_11036__$1;
(statearr_11070_11146[(1)] = (44));

} else {
var statearr_11071_11147 = state_11036__$1;
(statearr_11071_11147[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (29))){
var inst_10955 = (state_11036[(26)]);
var inst_10949 = (state_11036[(19)]);
var inst_10953 = (state_11036[(23)]);
var inst_10989 = (state_11036[(16)]);
var inst_10952 = (state_11036[(24)]);
var inst_10957 = (state_11036[(25)]);
var inst_10985 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_10988 = (function (){var all_files = inst_10949;
var res_SINGLEQUOTE_ = inst_10952;
var res = inst_10953;
var files_not_loaded = inst_10955;
var dependencies_that_loaded = inst_10957;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10955,inst_10949,inst_10953,inst_10989,inst_10952,inst_10957,inst_10985,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10987){
var map__11072 = p__10987;
var map__11072__$1 = ((((!((map__11072 == null)))?(((((map__11072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11072):map__11072);
var namespace = cljs.core.get.call(null,map__11072__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10955,inst_10949,inst_10953,inst_10989,inst_10952,inst_10957,inst_10985,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10989__$1 = cljs.core.group_by.call(null,inst_10988,inst_10955);
var inst_10991 = (inst_10989__$1 == null);
var inst_10992 = cljs.core.not.call(null,inst_10991);
var state_11036__$1 = (function (){var statearr_11074 = state_11036;
(statearr_11074[(16)] = inst_10989__$1);

(statearr_11074[(28)] = inst_10985);

return statearr_11074;
})();
if(inst_10992){
var statearr_11075_11148 = state_11036__$1;
(statearr_11075_11148[(1)] = (32));

} else {
var statearr_11076_11149 = state_11036__$1;
(statearr_11076_11149[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (44))){
var inst_11012 = (state_11036[(21)]);
var inst_11025 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_11012);
var inst_11026 = cljs.core.pr_str.call(null,inst_11025);
var inst_11027 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11026)].join('');
var inst_11028 = figwheel.client.utils.log.call(null,inst_11027);
var state_11036__$1 = state_11036;
var statearr_11077_11150 = state_11036__$1;
(statearr_11077_11150[(2)] = inst_11028);

(statearr_11077_11150[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (6))){
var inst_10930 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
var statearr_11078_11151 = state_11036__$1;
(statearr_11078_11151[(2)] = inst_10930);

(statearr_11078_11151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (28))){
var inst_10955 = (state_11036[(26)]);
var inst_10982 = (state_11036[(2)]);
var inst_10983 = cljs.core.not_empty.call(null,inst_10955);
var state_11036__$1 = (function (){var statearr_11079 = state_11036;
(statearr_11079[(29)] = inst_10982);

return statearr_11079;
})();
if(cljs.core.truth_(inst_10983)){
var statearr_11080_11152 = state_11036__$1;
(statearr_11080_11152[(1)] = (29));

} else {
var statearr_11081_11153 = state_11036__$1;
(statearr_11081_11153[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (25))){
var inst_10953 = (state_11036[(23)]);
var inst_10969 = (state_11036[(2)]);
var inst_10970 = cljs.core.not_empty.call(null,inst_10953);
var state_11036__$1 = (function (){var statearr_11082 = state_11036;
(statearr_11082[(30)] = inst_10969);

return statearr_11082;
})();
if(cljs.core.truth_(inst_10970)){
var statearr_11083_11154 = state_11036__$1;
(statearr_11083_11154[(1)] = (26));

} else {
var statearr_11084_11155 = state_11036__$1;
(statearr_11084_11155[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (34))){
var inst_11005 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
if(cljs.core.truth_(inst_11005)){
var statearr_11085_11156 = state_11036__$1;
(statearr_11085_11156[(1)] = (38));

} else {
var statearr_11086_11157 = state_11036__$1;
(statearr_11086_11157[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (17))){
var state_11036__$1 = state_11036;
var statearr_11087_11158 = state_11036__$1;
(statearr_11087_11158[(2)] = recompile_dependents);

(statearr_11087_11158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (3))){
var state_11036__$1 = state_11036;
var statearr_11088_11159 = state_11036__$1;
(statearr_11088_11159[(2)] = null);

(statearr_11088_11159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (12))){
var inst_10926 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
var statearr_11089_11160 = state_11036__$1;
(statearr_11089_11160[(2)] = inst_10926);

(statearr_11089_11160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (2))){
var inst_10888 = (state_11036[(13)]);
var inst_10895 = cljs.core.seq.call(null,inst_10888);
var inst_10896 = inst_10895;
var inst_10897 = null;
var inst_10898 = (0);
var inst_10899 = (0);
var state_11036__$1 = (function (){var statearr_11090 = state_11036;
(statearr_11090[(7)] = inst_10896);

(statearr_11090[(8)] = inst_10897);

(statearr_11090[(9)] = inst_10899);

(statearr_11090[(10)] = inst_10898);

return statearr_11090;
})();
var statearr_11091_11161 = state_11036__$1;
(statearr_11091_11161[(2)] = null);

(statearr_11091_11161[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (23))){
var inst_10955 = (state_11036[(26)]);
var inst_10949 = (state_11036[(19)]);
var inst_10953 = (state_11036[(23)]);
var inst_10952 = (state_11036[(24)]);
var inst_10957 = (state_11036[(25)]);
var inst_10960 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_10962 = (function (){var all_files = inst_10949;
var res_SINGLEQUOTE_ = inst_10952;
var res = inst_10953;
var files_not_loaded = inst_10955;
var dependencies_that_loaded = inst_10957;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10955,inst_10949,inst_10953,inst_10952,inst_10957,inst_10960,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10961){
var map__11092 = p__10961;
var map__11092__$1 = ((((!((map__11092 == null)))?(((((map__11092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11092):map__11092);
var request_url = cljs.core.get.call(null,map__11092__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10955,inst_10949,inst_10953,inst_10952,inst_10957,inst_10960,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10963 = cljs.core.reverse.call(null,inst_10957);
var inst_10964 = cljs.core.map.call(null,inst_10962,inst_10963);
var inst_10965 = cljs.core.pr_str.call(null,inst_10964);
var inst_10966 = figwheel.client.utils.log.call(null,inst_10965);
var state_11036__$1 = (function (){var statearr_11094 = state_11036;
(statearr_11094[(31)] = inst_10960);

return statearr_11094;
})();
var statearr_11095_11162 = state_11036__$1;
(statearr_11095_11162[(2)] = inst_10966);

(statearr_11095_11162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (35))){
var state_11036__$1 = state_11036;
var statearr_11096_11163 = state_11036__$1;
(statearr_11096_11163[(2)] = true);

(statearr_11096_11163[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (19))){
var inst_10939 = (state_11036[(12)]);
var inst_10945 = figwheel.client.file_reloading.expand_files.call(null,inst_10939);
var state_11036__$1 = state_11036;
var statearr_11097_11164 = state_11036__$1;
(statearr_11097_11164[(2)] = inst_10945);

(statearr_11097_11164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (11))){
var state_11036__$1 = state_11036;
var statearr_11098_11165 = state_11036__$1;
(statearr_11098_11165[(2)] = null);

(statearr_11098_11165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (9))){
var inst_10928 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
var statearr_11099_11166 = state_11036__$1;
(statearr_11099_11166[(2)] = inst_10928);

(statearr_11099_11166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (5))){
var inst_10899 = (state_11036[(9)]);
var inst_10898 = (state_11036[(10)]);
var inst_10901 = (inst_10899 < inst_10898);
var inst_10902 = inst_10901;
var state_11036__$1 = state_11036;
if(cljs.core.truth_(inst_10902)){
var statearr_11100_11167 = state_11036__$1;
(statearr_11100_11167[(1)] = (7));

} else {
var statearr_11101_11168 = state_11036__$1;
(statearr_11101_11168[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (14))){
var inst_10909 = (state_11036[(22)]);
var inst_10918 = cljs.core.first.call(null,inst_10909);
var inst_10919 = figwheel.client.file_reloading.eval_body.call(null,inst_10918,opts);
var inst_10920 = cljs.core.next.call(null,inst_10909);
var inst_10896 = inst_10920;
var inst_10897 = null;
var inst_10898 = (0);
var inst_10899 = (0);
var state_11036__$1 = (function (){var statearr_11102 = state_11036;
(statearr_11102[(7)] = inst_10896);

(statearr_11102[(8)] = inst_10897);

(statearr_11102[(9)] = inst_10899);

(statearr_11102[(10)] = inst_10898);

(statearr_11102[(32)] = inst_10919);

return statearr_11102;
})();
var statearr_11103_11169 = state_11036__$1;
(statearr_11103_11169[(2)] = null);

(statearr_11103_11169[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (45))){
var state_11036__$1 = state_11036;
var statearr_11104_11170 = state_11036__$1;
(statearr_11104_11170[(2)] = null);

(statearr_11104_11170[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (26))){
var inst_10955 = (state_11036[(26)]);
var inst_10949 = (state_11036[(19)]);
var inst_10953 = (state_11036[(23)]);
var inst_10952 = (state_11036[(24)]);
var inst_10957 = (state_11036[(25)]);
var inst_10972 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_10974 = (function (){var all_files = inst_10949;
var res_SINGLEQUOTE_ = inst_10952;
var res = inst_10953;
var files_not_loaded = inst_10955;
var dependencies_that_loaded = inst_10957;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10955,inst_10949,inst_10953,inst_10952,inst_10957,inst_10972,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10973){
var map__11105 = p__10973;
var map__11105__$1 = ((((!((map__11105 == null)))?(((((map__11105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11105):map__11105);
var namespace = cljs.core.get.call(null,map__11105__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__11105__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10955,inst_10949,inst_10953,inst_10952,inst_10957,inst_10972,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10975 = cljs.core.map.call(null,inst_10974,inst_10953);
var inst_10976 = cljs.core.pr_str.call(null,inst_10975);
var inst_10977 = figwheel.client.utils.log.call(null,inst_10976);
var inst_10978 = (function (){var all_files = inst_10949;
var res_SINGLEQUOTE_ = inst_10952;
var res = inst_10953;
var files_not_loaded = inst_10955;
var dependencies_that_loaded = inst_10957;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10955,inst_10949,inst_10953,inst_10952,inst_10957,inst_10972,inst_10974,inst_10975,inst_10976,inst_10977,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10955,inst_10949,inst_10953,inst_10952,inst_10957,inst_10972,inst_10974,inst_10975,inst_10976,inst_10977,state_val_11037,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10979 = setTimeout(inst_10978,(10));
var state_11036__$1 = (function (){var statearr_11107 = state_11036;
(statearr_11107[(33)] = inst_10972);

(statearr_11107[(34)] = inst_10977);

return statearr_11107;
})();
var statearr_11108_11171 = state_11036__$1;
(statearr_11108_11171[(2)] = inst_10979);

(statearr_11108_11171[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (16))){
var state_11036__$1 = state_11036;
var statearr_11109_11172 = state_11036__$1;
(statearr_11109_11172[(2)] = reload_dependents);

(statearr_11109_11172[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (38))){
var inst_10989 = (state_11036[(16)]);
var inst_11007 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10989);
var state_11036__$1 = state_11036;
var statearr_11110_11173 = state_11036__$1;
(statearr_11110_11173[(2)] = inst_11007);

(statearr_11110_11173[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (30))){
var state_11036__$1 = state_11036;
var statearr_11111_11174 = state_11036__$1;
(statearr_11111_11174[(2)] = null);

(statearr_11111_11174[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (10))){
var inst_10909 = (state_11036[(22)]);
var inst_10911 = cljs.core.chunked_seq_QMARK_.call(null,inst_10909);
var state_11036__$1 = state_11036;
if(inst_10911){
var statearr_11112_11175 = state_11036__$1;
(statearr_11112_11175[(1)] = (13));

} else {
var statearr_11113_11176 = state_11036__$1;
(statearr_11113_11176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (18))){
var inst_10943 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
if(cljs.core.truth_(inst_10943)){
var statearr_11114_11177 = state_11036__$1;
(statearr_11114_11177[(1)] = (19));

} else {
var statearr_11115_11178 = state_11036__$1;
(statearr_11115_11178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (42))){
var state_11036__$1 = state_11036;
var statearr_11116_11179 = state_11036__$1;
(statearr_11116_11179[(2)] = null);

(statearr_11116_11179[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (37))){
var inst_11002 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
var statearr_11117_11180 = state_11036__$1;
(statearr_11117_11180[(2)] = inst_11002);

(statearr_11117_11180[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11037 === (8))){
var inst_10909 = (state_11036[(22)]);
var inst_10896 = (state_11036[(7)]);
var inst_10909__$1 = cljs.core.seq.call(null,inst_10896);
var state_11036__$1 = (function (){var statearr_11118 = state_11036;
(statearr_11118[(22)] = inst_10909__$1);

return statearr_11118;
})();
if(inst_10909__$1){
var statearr_11119_11181 = state_11036__$1;
(statearr_11119_11181[(1)] = (10));

} else {
var statearr_11120_11182 = state_11036__$1;
(statearr_11120_11182[(1)] = (11));

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
});})(c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__1996__auto__,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0 = (function (){
var statearr_11121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11121[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__);

(statearr_11121[(1)] = (1));

return statearr_11121;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1 = (function (state_11036){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_11036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e11122){if((e11122 instanceof Object)){
var ex__2000__auto__ = e11122;
var statearr_11123_11183 = state_11036;
(statearr_11123_11183[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11184 = state_11036;
state_11036 = G__11184;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__ = function(state_11036){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1.call(this,state_11036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__2153__auto__ = (function (){var statearr_11124 = f__2152__auto__.call(null);
(statearr_11124[(6)] = c__2151__auto__);

return statearr_11124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__,map__10881,map__10881__$1,opts,before_jsload,on_jsload,reload_dependents,map__10882,map__10882__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__2151__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__11187,link){
var map__11188 = p__11187;
var map__11188__$1 = ((((!((map__11188 == null)))?(((((map__11188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11188):map__11188);
var file = cljs.core.get.call(null,map__11188__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__11188,map__11188__$1,file){
return (function (p1__11185_SHARP_,p2__11186_SHARP_){
if(cljs.core._EQ_.call(null,p1__11185_SHARP_,p2__11186_SHARP_)){
return p1__11185_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__11188,map__11188__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__11191){
var map__11192 = p__11191;
var map__11192__$1 = ((((!((map__11192 == null)))?(((((map__11192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11192):map__11192);
var match_length = cljs.core.get.call(null,map__11192__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__11192__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__11190_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__11190_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__11194_SHARP_,p2__11195_SHARP_){
return cljs.core.assoc.call(null,p1__11194_SHARP_,cljs.core.get.call(null,p2__11195_SHARP_,key),p2__11195_SHARP_);
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
var loaded_f_datas_11196 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_11196);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_11196);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__11197,p__11198){
var map__11199 = p__11197;
var map__11199__$1 = ((((!((map__11199 == null)))?(((((map__11199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11199):map__11199);
var on_cssload = cljs.core.get.call(null,map__11199__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__11200 = p__11198;
var map__11200__$1 = ((((!((map__11200 == null)))?(((((map__11200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11200):map__11200);
var files_msg = map__11200__$1;
var files = cljs.core.get.call(null,map__11200__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
