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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__6645_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__6645_SHARP_));
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
var seq__6646 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__6647 = null;
var count__6648 = (0);
var i__6649 = (0);
while(true){
if((i__6649 < count__6648)){
var n = cljs.core._nth.call(null,chunk__6647,i__6649);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__6650 = seq__6646;
var G__6651 = chunk__6647;
var G__6652 = count__6648;
var G__6653 = (i__6649 + (1));
seq__6646 = G__6650;
chunk__6647 = G__6651;
count__6648 = G__6652;
i__6649 = G__6653;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__6646);
if(temp__4657__auto__){
var seq__6646__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6646__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__6646__$1);
var G__6654 = cljs.core.chunk_rest.call(null,seq__6646__$1);
var G__6655 = c__4317__auto__;
var G__6656 = cljs.core.count.call(null,c__4317__auto__);
var G__6657 = (0);
seq__6646 = G__6654;
chunk__6647 = G__6655;
count__6648 = G__6656;
i__6649 = G__6657;
continue;
} else {
var n = cljs.core.first.call(null,seq__6646__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__6658 = cljs.core.next.call(null,seq__6646__$1);
var G__6659 = null;
var G__6660 = (0);
var G__6661 = (0);
seq__6646 = G__6658;
chunk__6647 = G__6659;
count__6648 = G__6660;
i__6649 = G__6661;
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

var seq__6671_6679 = cljs.core.seq.call(null,deps);
var chunk__6672_6680 = null;
var count__6673_6681 = (0);
var i__6674_6682 = (0);
while(true){
if((i__6674_6682 < count__6673_6681)){
var dep_6683 = cljs.core._nth.call(null,chunk__6672_6680,i__6674_6682);
topo_sort_helper_STAR_.call(null,dep_6683,(depth + (1)),state);


var G__6684 = seq__6671_6679;
var G__6685 = chunk__6672_6680;
var G__6686 = count__6673_6681;
var G__6687 = (i__6674_6682 + (1));
seq__6671_6679 = G__6684;
chunk__6672_6680 = G__6685;
count__6673_6681 = G__6686;
i__6674_6682 = G__6687;
continue;
} else {
var temp__4657__auto___6688 = cljs.core.seq.call(null,seq__6671_6679);
if(temp__4657__auto___6688){
var seq__6671_6689__$1 = temp__4657__auto___6688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6671_6689__$1)){
var c__4317__auto___6690 = cljs.core.chunk_first.call(null,seq__6671_6689__$1);
var G__6691 = cljs.core.chunk_rest.call(null,seq__6671_6689__$1);
var G__6692 = c__4317__auto___6690;
var G__6693 = cljs.core.count.call(null,c__4317__auto___6690);
var G__6694 = (0);
seq__6671_6679 = G__6691;
chunk__6672_6680 = G__6692;
count__6673_6681 = G__6693;
i__6674_6682 = G__6694;
continue;
} else {
var dep_6695 = cljs.core.first.call(null,seq__6671_6689__$1);
topo_sort_helper_STAR_.call(null,dep_6695,(depth + (1)),state);


var G__6696 = cljs.core.next.call(null,seq__6671_6689__$1);
var G__6697 = null;
var G__6698 = (0);
var G__6699 = (0);
seq__6671_6679 = G__6696;
chunk__6672_6680 = G__6697;
count__6673_6681 = G__6698;
i__6674_6682 = G__6699;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__6675){
var vec__6676 = p__6675;
var seq__6677 = cljs.core.seq.call(null,vec__6676);
var first__6678 = cljs.core.first.call(null,seq__6677);
var seq__6677__$1 = cljs.core.next.call(null,seq__6677);
var x = first__6678;
var xs = seq__6677__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__6676,seq__6677,first__6678,seq__6677__$1,x,xs,get_deps__$1){
return (function (p1__6662_SHARP_){
return clojure.set.difference.call(null,p1__6662_SHARP_,x);
});})(vec__6676,seq__6677,first__6678,seq__6677__$1,x,xs,get_deps__$1))
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
var seq__6700 = cljs.core.seq.call(null,provides);
var chunk__6701 = null;
var count__6702 = (0);
var i__6703 = (0);
while(true){
if((i__6703 < count__6702)){
var prov = cljs.core._nth.call(null,chunk__6701,i__6703);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__6704_6712 = cljs.core.seq.call(null,requires);
var chunk__6705_6713 = null;
var count__6706_6714 = (0);
var i__6707_6715 = (0);
while(true){
if((i__6707_6715 < count__6706_6714)){
var req_6716 = cljs.core._nth.call(null,chunk__6705_6713,i__6707_6715);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_6716,prov);


var G__6717 = seq__6704_6712;
var G__6718 = chunk__6705_6713;
var G__6719 = count__6706_6714;
var G__6720 = (i__6707_6715 + (1));
seq__6704_6712 = G__6717;
chunk__6705_6713 = G__6718;
count__6706_6714 = G__6719;
i__6707_6715 = G__6720;
continue;
} else {
var temp__4657__auto___6721 = cljs.core.seq.call(null,seq__6704_6712);
if(temp__4657__auto___6721){
var seq__6704_6722__$1 = temp__4657__auto___6721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6704_6722__$1)){
var c__4317__auto___6723 = cljs.core.chunk_first.call(null,seq__6704_6722__$1);
var G__6724 = cljs.core.chunk_rest.call(null,seq__6704_6722__$1);
var G__6725 = c__4317__auto___6723;
var G__6726 = cljs.core.count.call(null,c__4317__auto___6723);
var G__6727 = (0);
seq__6704_6712 = G__6724;
chunk__6705_6713 = G__6725;
count__6706_6714 = G__6726;
i__6707_6715 = G__6727;
continue;
} else {
var req_6728 = cljs.core.first.call(null,seq__6704_6722__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_6728,prov);


var G__6729 = cljs.core.next.call(null,seq__6704_6722__$1);
var G__6730 = null;
var G__6731 = (0);
var G__6732 = (0);
seq__6704_6712 = G__6729;
chunk__6705_6713 = G__6730;
count__6706_6714 = G__6731;
i__6707_6715 = G__6732;
continue;
}
} else {
}
}
break;
}


var G__6733 = seq__6700;
var G__6734 = chunk__6701;
var G__6735 = count__6702;
var G__6736 = (i__6703 + (1));
seq__6700 = G__6733;
chunk__6701 = G__6734;
count__6702 = G__6735;
i__6703 = G__6736;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__6700);
if(temp__4657__auto__){
var seq__6700__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6700__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__6700__$1);
var G__6737 = cljs.core.chunk_rest.call(null,seq__6700__$1);
var G__6738 = c__4317__auto__;
var G__6739 = cljs.core.count.call(null,c__4317__auto__);
var G__6740 = (0);
seq__6700 = G__6737;
chunk__6701 = G__6738;
count__6702 = G__6739;
i__6703 = G__6740;
continue;
} else {
var prov = cljs.core.first.call(null,seq__6700__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__6708_6741 = cljs.core.seq.call(null,requires);
var chunk__6709_6742 = null;
var count__6710_6743 = (0);
var i__6711_6744 = (0);
while(true){
if((i__6711_6744 < count__6710_6743)){
var req_6745 = cljs.core._nth.call(null,chunk__6709_6742,i__6711_6744);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_6745,prov);


var G__6746 = seq__6708_6741;
var G__6747 = chunk__6709_6742;
var G__6748 = count__6710_6743;
var G__6749 = (i__6711_6744 + (1));
seq__6708_6741 = G__6746;
chunk__6709_6742 = G__6747;
count__6710_6743 = G__6748;
i__6711_6744 = G__6749;
continue;
} else {
var temp__4657__auto___6750__$1 = cljs.core.seq.call(null,seq__6708_6741);
if(temp__4657__auto___6750__$1){
var seq__6708_6751__$1 = temp__4657__auto___6750__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6708_6751__$1)){
var c__4317__auto___6752 = cljs.core.chunk_first.call(null,seq__6708_6751__$1);
var G__6753 = cljs.core.chunk_rest.call(null,seq__6708_6751__$1);
var G__6754 = c__4317__auto___6752;
var G__6755 = cljs.core.count.call(null,c__4317__auto___6752);
var G__6756 = (0);
seq__6708_6741 = G__6753;
chunk__6709_6742 = G__6754;
count__6710_6743 = G__6755;
i__6711_6744 = G__6756;
continue;
} else {
var req_6757 = cljs.core.first.call(null,seq__6708_6751__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_6757,prov);


var G__6758 = cljs.core.next.call(null,seq__6708_6751__$1);
var G__6759 = null;
var G__6760 = (0);
var G__6761 = (0);
seq__6708_6741 = G__6758;
chunk__6709_6742 = G__6759;
count__6710_6743 = G__6760;
i__6711_6744 = G__6761;
continue;
}
} else {
}
}
break;
}


var G__6762 = cljs.core.next.call(null,seq__6700__$1);
var G__6763 = null;
var G__6764 = (0);
var G__6765 = (0);
seq__6700 = G__6762;
chunk__6701 = G__6763;
count__6702 = G__6764;
i__6703 = G__6765;
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
var seq__6766_6770 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__6767_6771 = null;
var count__6768_6772 = (0);
var i__6769_6773 = (0);
while(true){
if((i__6769_6773 < count__6768_6772)){
var ns_6774 = cljs.core._nth.call(null,chunk__6767_6771,i__6769_6773);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_6774);


var G__6775 = seq__6766_6770;
var G__6776 = chunk__6767_6771;
var G__6777 = count__6768_6772;
var G__6778 = (i__6769_6773 + (1));
seq__6766_6770 = G__6775;
chunk__6767_6771 = G__6776;
count__6768_6772 = G__6777;
i__6769_6773 = G__6778;
continue;
} else {
var temp__4657__auto___6779 = cljs.core.seq.call(null,seq__6766_6770);
if(temp__4657__auto___6779){
var seq__6766_6780__$1 = temp__4657__auto___6779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6766_6780__$1)){
var c__4317__auto___6781 = cljs.core.chunk_first.call(null,seq__6766_6780__$1);
var G__6782 = cljs.core.chunk_rest.call(null,seq__6766_6780__$1);
var G__6783 = c__4317__auto___6781;
var G__6784 = cljs.core.count.call(null,c__4317__auto___6781);
var G__6785 = (0);
seq__6766_6770 = G__6782;
chunk__6767_6771 = G__6783;
count__6768_6772 = G__6784;
i__6769_6773 = G__6785;
continue;
} else {
var ns_6786 = cljs.core.first.call(null,seq__6766_6780__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_6786);


var G__6787 = cljs.core.next.call(null,seq__6766_6780__$1);
var G__6788 = null;
var G__6789 = (0);
var G__6790 = (0);
seq__6766_6770 = G__6787;
chunk__6767_6771 = G__6788;
count__6768_6772 = G__6789;
i__6769_6773 = G__6790;
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
var G__6791__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__6791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6792__i = 0, G__6792__a = new Array(arguments.length -  0);
while (G__6792__i < G__6792__a.length) {G__6792__a[G__6792__i] = arguments[G__6792__i + 0]; ++G__6792__i;}
  args = new cljs.core.IndexedSeq(G__6792__a,0,null);
} 
return G__6791__delegate.call(this,args);};
G__6791.cljs$lang$maxFixedArity = 0;
G__6791.cljs$lang$applyTo = (function (arglist__6793){
var args = cljs.core.seq(arglist__6793);
return G__6791__delegate(args);
});
G__6791.cljs$core$IFn$_invoke$arity$variadic = G__6791__delegate;
return G__6791;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__6794 = cljs.core._EQ_;
var expr__6795 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__6794.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__6795))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__6794,expr__6795){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__6794,expr__6795))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__6794,expr__6795){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e6797){if((e6797 instanceof Error)){
var e = e6797;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e6797;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__6794,expr__6795))
} else {
if(cljs.core.truth_(pred__6794.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__6795))){
return ((function (pred__6794,expr__6795){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__6794,expr__6795){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__6794,expr__6795))
);

return deferred.addErrback(((function (deferred,pred__6794,expr__6795){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__6794,expr__6795))
);
});
;})(pred__6794,expr__6795))
} else {
if(cljs.core.truth_(pred__6794.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__6795))){
return ((function (pred__6794,expr__6795){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e6798){if((e6798 instanceof Error)){
var e = e6798;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e6798;

}
}})());
});
;})(pred__6794,expr__6795))
} else {
return ((function (pred__6794,expr__6795){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__6794,expr__6795))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__6799,callback){
var map__6800 = p__6799;
var map__6800__$1 = ((((!((map__6800 == null)))?(((((map__6800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6800):map__6800);
var file_msg = map__6800__$1;
var request_url = cljs.core.get.call(null,map__6800__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__6800,map__6800__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__6800,map__6800__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__2950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto__){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto__){
return (function (state_6824){
var state_val_6825 = (state_6824[(1)]);
if((state_val_6825 === (7))){
var inst_6820 = (state_6824[(2)]);
var state_6824__$1 = state_6824;
var statearr_6826_6843 = state_6824__$1;
(statearr_6826_6843[(2)] = inst_6820);

(statearr_6826_6843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6825 === (1))){
var state_6824__$1 = state_6824;
var statearr_6827_6844 = state_6824__$1;
(statearr_6827_6844[(2)] = null);

(statearr_6827_6844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6825 === (4))){
var inst_6804 = (state_6824[(7)]);
var inst_6804__$1 = (state_6824[(2)]);
var state_6824__$1 = (function (){var statearr_6828 = state_6824;
(statearr_6828[(7)] = inst_6804__$1);

return statearr_6828;
})();
if(cljs.core.truth_(inst_6804__$1)){
var statearr_6829_6845 = state_6824__$1;
(statearr_6829_6845[(1)] = (5));

} else {
var statearr_6830_6846 = state_6824__$1;
(statearr_6830_6846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6825 === (6))){
var state_6824__$1 = state_6824;
var statearr_6831_6847 = state_6824__$1;
(statearr_6831_6847[(2)] = null);

(statearr_6831_6847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6825 === (3))){
var inst_6822 = (state_6824[(2)]);
var state_6824__$1 = state_6824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6824__$1,inst_6822);
} else {
if((state_val_6825 === (2))){
var state_6824__$1 = state_6824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6824__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_6825 === (11))){
var inst_6816 = (state_6824[(2)]);
var state_6824__$1 = (function (){var statearr_6832 = state_6824;
(statearr_6832[(8)] = inst_6816);

return statearr_6832;
})();
var statearr_6833_6848 = state_6824__$1;
(statearr_6833_6848[(2)] = null);

(statearr_6833_6848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6825 === (9))){
var inst_6810 = (state_6824[(9)]);
var inst_6808 = (state_6824[(10)]);
var inst_6812 = inst_6810.call(null,inst_6808);
var state_6824__$1 = state_6824;
var statearr_6834_6849 = state_6824__$1;
(statearr_6834_6849[(2)] = inst_6812);

(statearr_6834_6849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6825 === (5))){
var inst_6804 = (state_6824[(7)]);
var inst_6806 = figwheel.client.file_reloading.blocking_load.call(null,inst_6804);
var state_6824__$1 = state_6824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6824__$1,(8),inst_6806);
} else {
if((state_val_6825 === (10))){
var inst_6808 = (state_6824[(10)]);
var inst_6814 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_6808);
var state_6824__$1 = state_6824;
var statearr_6835_6850 = state_6824__$1;
(statearr_6835_6850[(2)] = inst_6814);

(statearr_6835_6850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6825 === (8))){
var inst_6810 = (state_6824[(9)]);
var inst_6804 = (state_6824[(7)]);
var inst_6808 = (state_6824[(2)]);
var inst_6809 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_6810__$1 = cljs.core.get.call(null,inst_6809,inst_6804);
var state_6824__$1 = (function (){var statearr_6836 = state_6824;
(statearr_6836[(9)] = inst_6810__$1);

(statearr_6836[(10)] = inst_6808);

return statearr_6836;
})();
if(cljs.core.truth_(inst_6810__$1)){
var statearr_6837_6851 = state_6824__$1;
(statearr_6837_6851[(1)] = (9));

} else {
var statearr_6838_6852 = state_6824__$1;
(statearr_6838_6852[(1)] = (10));

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
});})(c__2950__auto__))
;
return ((function (switch__2906__auto__,c__2950__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__2907__auto__ = null;
var figwheel$client$file_reloading$state_machine__2907__auto____0 = (function (){
var statearr_6839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6839[(0)] = figwheel$client$file_reloading$state_machine__2907__auto__);

(statearr_6839[(1)] = (1));

return statearr_6839;
});
var figwheel$client$file_reloading$state_machine__2907__auto____1 = (function (state_6824){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_6824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e6840){if((e6840 instanceof Object)){
var ex__2910__auto__ = e6840;
var statearr_6841_6853 = state_6824;
(statearr_6841_6853[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6854 = state_6824;
state_6824 = G__6854;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__2907__auto__ = function(state_6824){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__2907__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__2907__auto____1.call(this,state_6824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__2907__auto____0;
figwheel$client$file_reloading$state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__2907__auto____1;
return figwheel$client$file_reloading$state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto__))
})();
var state__2952__auto__ = (function (){var statearr_6842 = f__2951__auto__.call(null);
(statearr_6842[(6)] = c__2950__auto__);

return statearr_6842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto__))
);

return c__2950__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__6855,callback){
var map__6856 = p__6855;
var map__6856__$1 = ((((!((map__6856 == null)))?(((((map__6856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6856):map__6856);
var file_msg = map__6856__$1;
var namespace = cljs.core.get.call(null,map__6856__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__6856,map__6856__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__6856,map__6856__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__6858){
var map__6859 = p__6858;
var map__6859__$1 = ((((!((map__6859 == null)))?(((((map__6859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6859):map__6859);
var file_msg = map__6859__$1;
var namespace = cljs.core.get.call(null,map__6859__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__6861){
var map__6862 = p__6861;
var map__6862__$1 = ((((!((map__6862 == null)))?(((((map__6862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6862):map__6862);
var file_msg = map__6862__$1;
var namespace = cljs.core.get.call(null,map__6862__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__6864,callback){
var map__6865 = p__6864;
var map__6865__$1 = ((((!((map__6865 == null)))?(((((map__6865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6865):map__6865);
var file_msg = map__6865__$1;
var request_url = cljs.core.get.call(null,map__6865__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__6865__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__2950__auto___6915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto___6915,out){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto___6915,out){
return (function (state_6900){
var state_val_6901 = (state_6900[(1)]);
if((state_val_6901 === (1))){
var inst_6874 = cljs.core.seq.call(null,files);
var inst_6875 = cljs.core.first.call(null,inst_6874);
var inst_6876 = cljs.core.next.call(null,inst_6874);
var inst_6877 = files;
var state_6900__$1 = (function (){var statearr_6902 = state_6900;
(statearr_6902[(7)] = inst_6876);

(statearr_6902[(8)] = inst_6877);

(statearr_6902[(9)] = inst_6875);

return statearr_6902;
})();
var statearr_6903_6916 = state_6900__$1;
(statearr_6903_6916[(2)] = null);

(statearr_6903_6916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6901 === (2))){
var inst_6877 = (state_6900[(8)]);
var inst_6883 = (state_6900[(10)]);
var inst_6882 = cljs.core.seq.call(null,inst_6877);
var inst_6883__$1 = cljs.core.first.call(null,inst_6882);
var inst_6884 = cljs.core.next.call(null,inst_6882);
var inst_6885 = (inst_6883__$1 == null);
var inst_6886 = cljs.core.not.call(null,inst_6885);
var state_6900__$1 = (function (){var statearr_6904 = state_6900;
(statearr_6904[(11)] = inst_6884);

(statearr_6904[(10)] = inst_6883__$1);

return statearr_6904;
})();
if(inst_6886){
var statearr_6905_6917 = state_6900__$1;
(statearr_6905_6917[(1)] = (4));

} else {
var statearr_6906_6918 = state_6900__$1;
(statearr_6906_6918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6901 === (3))){
var inst_6898 = (state_6900[(2)]);
var state_6900__$1 = state_6900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6900__$1,inst_6898);
} else {
if((state_val_6901 === (4))){
var inst_6883 = (state_6900[(10)]);
var inst_6888 = figwheel.client.file_reloading.reload_js_file.call(null,inst_6883);
var state_6900__$1 = state_6900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6900__$1,(7),inst_6888);
} else {
if((state_val_6901 === (5))){
var inst_6894 = cljs.core.async.close_BANG_.call(null,out);
var state_6900__$1 = state_6900;
var statearr_6907_6919 = state_6900__$1;
(statearr_6907_6919[(2)] = inst_6894);

(statearr_6907_6919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6901 === (6))){
var inst_6896 = (state_6900[(2)]);
var state_6900__$1 = state_6900;
var statearr_6908_6920 = state_6900__$1;
(statearr_6908_6920[(2)] = inst_6896);

(statearr_6908_6920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6901 === (7))){
var inst_6884 = (state_6900[(11)]);
var inst_6890 = (state_6900[(2)]);
var inst_6891 = cljs.core.async.put_BANG_.call(null,out,inst_6890);
var inst_6877 = inst_6884;
var state_6900__$1 = (function (){var statearr_6909 = state_6900;
(statearr_6909[(8)] = inst_6877);

(statearr_6909[(12)] = inst_6891);

return statearr_6909;
})();
var statearr_6910_6921 = state_6900__$1;
(statearr_6910_6921[(2)] = null);

(statearr_6910_6921[(1)] = (2));


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
});})(c__2950__auto___6915,out))
;
return ((function (switch__2906__auto__,c__2950__auto___6915,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto____0 = (function (){
var statearr_6911 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6911[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto__);

(statearr_6911[(1)] = (1));

return statearr_6911;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto____1 = (function (state_6900){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_6900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e6912){if((e6912 instanceof Object)){
var ex__2910__auto__ = e6912;
var statearr_6913_6922 = state_6900;
(statearr_6913_6922[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6923 = state_6900;
state_6900 = G__6923;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto__ = function(state_6900){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto____1.call(this,state_6900);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto___6915,out))
})();
var state__2952__auto__ = (function (){var statearr_6914 = f__2951__auto__.call(null);
(statearr_6914[(6)] = c__2950__auto___6915);

return statearr_6914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto___6915,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__6924,opts){
var map__6925 = p__6924;
var map__6925__$1 = ((((!((map__6925 == null)))?(((((map__6925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6925):map__6925);
var eval_body = cljs.core.get.call(null,map__6925__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__6925__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e6927){var e = e6927;
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
return (function (p1__6928_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__6928_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__6929){
var vec__6930 = p__6929;
var k = cljs.core.nth.call(null,vec__6930,(0),null);
var v = cljs.core.nth.call(null,vec__6930,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__6933){
var vec__6934 = p__6933;
var k = cljs.core.nth.call(null,vec__6934,(0),null);
var v = cljs.core.nth.call(null,vec__6934,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__6940,p__6941){
var map__6942 = p__6940;
var map__6942__$1 = ((((!((map__6942 == null)))?(((((map__6942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6942):map__6942);
var opts = map__6942__$1;
var before_jsload = cljs.core.get.call(null,map__6942__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__6942__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__6942__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__6943 = p__6941;
var map__6943__$1 = ((((!((map__6943 == null)))?(((((map__6943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6943):map__6943);
var msg = map__6943__$1;
var files = cljs.core.get.call(null,map__6943__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__6943__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__6943__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__2950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_7097){
var state_val_7098 = (state_7097[(1)]);
if((state_val_7098 === (7))){
var inst_6957 = (state_7097[(7)]);
var inst_6960 = (state_7097[(8)]);
var inst_6959 = (state_7097[(9)]);
var inst_6958 = (state_7097[(10)]);
var inst_6965 = cljs.core._nth.call(null,inst_6958,inst_6960);
var inst_6966 = figwheel.client.file_reloading.eval_body.call(null,inst_6965,opts);
var inst_6967 = (inst_6960 + (1));
var tmp7099 = inst_6957;
var tmp7100 = inst_6959;
var tmp7101 = inst_6958;
var inst_6957__$1 = tmp7099;
var inst_6958__$1 = tmp7101;
var inst_6959__$1 = tmp7100;
var inst_6960__$1 = inst_6967;
var state_7097__$1 = (function (){var statearr_7102 = state_7097;
(statearr_7102[(7)] = inst_6957__$1);

(statearr_7102[(8)] = inst_6960__$1);

(statearr_7102[(9)] = inst_6959__$1);

(statearr_7102[(10)] = inst_6958__$1);

(statearr_7102[(11)] = inst_6966);

return statearr_7102;
})();
var statearr_7103_7186 = state_7097__$1;
(statearr_7103_7186[(2)] = null);

(statearr_7103_7186[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (20))){
var inst_7000 = (state_7097[(12)]);
var inst_7008 = figwheel.client.file_reloading.sort_files.call(null,inst_7000);
var state_7097__$1 = state_7097;
var statearr_7104_7187 = state_7097__$1;
(statearr_7104_7187[(2)] = inst_7008);

(statearr_7104_7187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (27))){
var state_7097__$1 = state_7097;
var statearr_7105_7188 = state_7097__$1;
(statearr_7105_7188[(2)] = null);

(statearr_7105_7188[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (1))){
var inst_6949 = (state_7097[(13)]);
var inst_6946 = before_jsload.call(null,files);
var inst_6947 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_6948 = (function (){return ((function (inst_6949,inst_6946,inst_6947,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__6937_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__6937_SHARP_);
});
;})(inst_6949,inst_6946,inst_6947,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_6949__$1 = cljs.core.filter.call(null,inst_6948,files);
var inst_6950 = cljs.core.not_empty.call(null,inst_6949__$1);
var state_7097__$1 = (function (){var statearr_7106 = state_7097;
(statearr_7106[(14)] = inst_6947);

(statearr_7106[(13)] = inst_6949__$1);

(statearr_7106[(15)] = inst_6946);

return statearr_7106;
})();
if(cljs.core.truth_(inst_6950)){
var statearr_7107_7189 = state_7097__$1;
(statearr_7107_7189[(1)] = (2));

} else {
var statearr_7108_7190 = state_7097__$1;
(statearr_7108_7190[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (24))){
var state_7097__$1 = state_7097;
var statearr_7109_7191 = state_7097__$1;
(statearr_7109_7191[(2)] = null);

(statearr_7109_7191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (39))){
var inst_7050 = (state_7097[(16)]);
var state_7097__$1 = state_7097;
var statearr_7110_7192 = state_7097__$1;
(statearr_7110_7192[(2)] = inst_7050);

(statearr_7110_7192[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (46))){
var inst_7092 = (state_7097[(2)]);
var state_7097__$1 = state_7097;
var statearr_7111_7193 = state_7097__$1;
(statearr_7111_7193[(2)] = inst_7092);

(statearr_7111_7193[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (4))){
var inst_6994 = (state_7097[(2)]);
var inst_6995 = cljs.core.List.EMPTY;
var inst_6996 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_6995);
var inst_6997 = (function (){return ((function (inst_6994,inst_6995,inst_6996,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__6938_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__6938_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__6938_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__6938_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_6994,inst_6995,inst_6996,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_6998 = cljs.core.filter.call(null,inst_6997,files);
var inst_6999 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_7000 = cljs.core.concat.call(null,inst_6998,inst_6999);
var state_7097__$1 = (function (){var statearr_7112 = state_7097;
(statearr_7112[(17)] = inst_6996);

(statearr_7112[(12)] = inst_7000);

(statearr_7112[(18)] = inst_6994);

return statearr_7112;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_7113_7194 = state_7097__$1;
(statearr_7113_7194[(1)] = (16));

} else {
var statearr_7114_7195 = state_7097__$1;
(statearr_7114_7195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (15))){
var inst_6984 = (state_7097[(2)]);
var state_7097__$1 = state_7097;
var statearr_7115_7196 = state_7097__$1;
(statearr_7115_7196[(2)] = inst_6984);

(statearr_7115_7196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (21))){
var inst_7010 = (state_7097[(19)]);
var inst_7010__$1 = (state_7097[(2)]);
var inst_7011 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_7010__$1);
var state_7097__$1 = (function (){var statearr_7116 = state_7097;
(statearr_7116[(19)] = inst_7010__$1);

return statearr_7116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7097__$1,(22),inst_7011);
} else {
if((state_val_7098 === (31))){
var inst_7095 = (state_7097[(2)]);
var state_7097__$1 = state_7097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7097__$1,inst_7095);
} else {
if((state_val_7098 === (32))){
var inst_7050 = (state_7097[(16)]);
var inst_7055 = inst_7050.cljs$lang$protocol_mask$partition0$;
var inst_7056 = (inst_7055 & (64));
var inst_7057 = inst_7050.cljs$core$ISeq$;
var inst_7058 = (cljs.core.PROTOCOL_SENTINEL === inst_7057);
var inst_7059 = ((inst_7056) || (inst_7058));
var state_7097__$1 = state_7097;
if(cljs.core.truth_(inst_7059)){
var statearr_7117_7197 = state_7097__$1;
(statearr_7117_7197[(1)] = (35));

} else {
var statearr_7118_7198 = state_7097__$1;
(statearr_7118_7198[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (40))){
var inst_7072 = (state_7097[(20)]);
var inst_7071 = (state_7097[(2)]);
var inst_7072__$1 = cljs.core.get.call(null,inst_7071,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_7073 = cljs.core.get.call(null,inst_7071,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_7074 = cljs.core.not_empty.call(null,inst_7072__$1);
var state_7097__$1 = (function (){var statearr_7119 = state_7097;
(statearr_7119[(20)] = inst_7072__$1);

(statearr_7119[(21)] = inst_7073);

return statearr_7119;
})();
if(cljs.core.truth_(inst_7074)){
var statearr_7120_7199 = state_7097__$1;
(statearr_7120_7199[(1)] = (41));

} else {
var statearr_7121_7200 = state_7097__$1;
(statearr_7121_7200[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (33))){
var state_7097__$1 = state_7097;
var statearr_7122_7201 = state_7097__$1;
(statearr_7122_7201[(2)] = false);

(statearr_7122_7201[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (13))){
var inst_6970 = (state_7097[(22)]);
var inst_6974 = cljs.core.chunk_first.call(null,inst_6970);
var inst_6975 = cljs.core.chunk_rest.call(null,inst_6970);
var inst_6976 = cljs.core.count.call(null,inst_6974);
var inst_6957 = inst_6975;
var inst_6958 = inst_6974;
var inst_6959 = inst_6976;
var inst_6960 = (0);
var state_7097__$1 = (function (){var statearr_7123 = state_7097;
(statearr_7123[(7)] = inst_6957);

(statearr_7123[(8)] = inst_6960);

(statearr_7123[(9)] = inst_6959);

(statearr_7123[(10)] = inst_6958);

return statearr_7123;
})();
var statearr_7124_7202 = state_7097__$1;
(statearr_7124_7202[(2)] = null);

(statearr_7124_7202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (22))){
var inst_7014 = (state_7097[(23)]);
var inst_7010 = (state_7097[(19)]);
var inst_7018 = (state_7097[(24)]);
var inst_7013 = (state_7097[(25)]);
var inst_7013__$1 = (state_7097[(2)]);
var inst_7014__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_7013__$1);
var inst_7015 = (function (){var all_files = inst_7010;
var res_SINGLEQUOTE_ = inst_7013__$1;
var res = inst_7014__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_7014,inst_7010,inst_7018,inst_7013,inst_7013__$1,inst_7014__$1,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__6939_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__6939_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_7014,inst_7010,inst_7018,inst_7013,inst_7013__$1,inst_7014__$1,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_7016 = cljs.core.filter.call(null,inst_7015,inst_7013__$1);
var inst_7017 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_7018__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_7017);
var inst_7019 = cljs.core.not_empty.call(null,inst_7018__$1);
var state_7097__$1 = (function (){var statearr_7125 = state_7097;
(statearr_7125[(23)] = inst_7014__$1);

(statearr_7125[(24)] = inst_7018__$1);

(statearr_7125[(25)] = inst_7013__$1);

(statearr_7125[(26)] = inst_7016);

return statearr_7125;
})();
if(cljs.core.truth_(inst_7019)){
var statearr_7126_7203 = state_7097__$1;
(statearr_7126_7203[(1)] = (23));

} else {
var statearr_7127_7204 = state_7097__$1;
(statearr_7127_7204[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (36))){
var state_7097__$1 = state_7097;
var statearr_7128_7205 = state_7097__$1;
(statearr_7128_7205[(2)] = false);

(statearr_7128_7205[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (41))){
var inst_7072 = (state_7097[(20)]);
var inst_7076 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_7077 = cljs.core.map.call(null,inst_7076,inst_7072);
var inst_7078 = cljs.core.pr_str.call(null,inst_7077);
var inst_7079 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_7078)].join('');
var inst_7080 = figwheel.client.utils.log.call(null,inst_7079);
var state_7097__$1 = state_7097;
var statearr_7129_7206 = state_7097__$1;
(statearr_7129_7206[(2)] = inst_7080);

(statearr_7129_7206[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (43))){
var inst_7073 = (state_7097[(21)]);
var inst_7083 = (state_7097[(2)]);
var inst_7084 = cljs.core.not_empty.call(null,inst_7073);
var state_7097__$1 = (function (){var statearr_7130 = state_7097;
(statearr_7130[(27)] = inst_7083);

return statearr_7130;
})();
if(cljs.core.truth_(inst_7084)){
var statearr_7131_7207 = state_7097__$1;
(statearr_7131_7207[(1)] = (44));

} else {
var statearr_7132_7208 = state_7097__$1;
(statearr_7132_7208[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (29))){
var inst_7014 = (state_7097[(23)]);
var inst_7010 = (state_7097[(19)]);
var inst_7018 = (state_7097[(24)]);
var inst_7013 = (state_7097[(25)]);
var inst_7016 = (state_7097[(26)]);
var inst_7050 = (state_7097[(16)]);
var inst_7046 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_7049 = (function (){var all_files = inst_7010;
var res_SINGLEQUOTE_ = inst_7013;
var res = inst_7014;
var files_not_loaded = inst_7016;
var dependencies_that_loaded = inst_7018;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_7014,inst_7010,inst_7018,inst_7013,inst_7016,inst_7050,inst_7046,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__7048){
var map__7133 = p__7048;
var map__7133__$1 = ((((!((map__7133 == null)))?(((((map__7133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7133):map__7133);
var namespace = cljs.core.get.call(null,map__7133__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_7014,inst_7010,inst_7018,inst_7013,inst_7016,inst_7050,inst_7046,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_7050__$1 = cljs.core.group_by.call(null,inst_7049,inst_7016);
var inst_7052 = (inst_7050__$1 == null);
var inst_7053 = cljs.core.not.call(null,inst_7052);
var state_7097__$1 = (function (){var statearr_7135 = state_7097;
(statearr_7135[(28)] = inst_7046);

(statearr_7135[(16)] = inst_7050__$1);

return statearr_7135;
})();
if(inst_7053){
var statearr_7136_7209 = state_7097__$1;
(statearr_7136_7209[(1)] = (32));

} else {
var statearr_7137_7210 = state_7097__$1;
(statearr_7137_7210[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (44))){
var inst_7073 = (state_7097[(21)]);
var inst_7086 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_7073);
var inst_7087 = cljs.core.pr_str.call(null,inst_7086);
var inst_7088 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_7087)].join('');
var inst_7089 = figwheel.client.utils.log.call(null,inst_7088);
var state_7097__$1 = state_7097;
var statearr_7138_7211 = state_7097__$1;
(statearr_7138_7211[(2)] = inst_7089);

(statearr_7138_7211[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (6))){
var inst_6991 = (state_7097[(2)]);
var state_7097__$1 = state_7097;
var statearr_7139_7212 = state_7097__$1;
(statearr_7139_7212[(2)] = inst_6991);

(statearr_7139_7212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (28))){
var inst_7016 = (state_7097[(26)]);
var inst_7043 = (state_7097[(2)]);
var inst_7044 = cljs.core.not_empty.call(null,inst_7016);
var state_7097__$1 = (function (){var statearr_7140 = state_7097;
(statearr_7140[(29)] = inst_7043);

return statearr_7140;
})();
if(cljs.core.truth_(inst_7044)){
var statearr_7141_7213 = state_7097__$1;
(statearr_7141_7213[(1)] = (29));

} else {
var statearr_7142_7214 = state_7097__$1;
(statearr_7142_7214[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (25))){
var inst_7014 = (state_7097[(23)]);
var inst_7030 = (state_7097[(2)]);
var inst_7031 = cljs.core.not_empty.call(null,inst_7014);
var state_7097__$1 = (function (){var statearr_7143 = state_7097;
(statearr_7143[(30)] = inst_7030);

return statearr_7143;
})();
if(cljs.core.truth_(inst_7031)){
var statearr_7144_7215 = state_7097__$1;
(statearr_7144_7215[(1)] = (26));

} else {
var statearr_7145_7216 = state_7097__$1;
(statearr_7145_7216[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (34))){
var inst_7066 = (state_7097[(2)]);
var state_7097__$1 = state_7097;
if(cljs.core.truth_(inst_7066)){
var statearr_7146_7217 = state_7097__$1;
(statearr_7146_7217[(1)] = (38));

} else {
var statearr_7147_7218 = state_7097__$1;
(statearr_7147_7218[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (17))){
var state_7097__$1 = state_7097;
var statearr_7148_7219 = state_7097__$1;
(statearr_7148_7219[(2)] = recompile_dependents);

(statearr_7148_7219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (3))){
var state_7097__$1 = state_7097;
var statearr_7149_7220 = state_7097__$1;
(statearr_7149_7220[(2)] = null);

(statearr_7149_7220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (12))){
var inst_6987 = (state_7097[(2)]);
var state_7097__$1 = state_7097;
var statearr_7150_7221 = state_7097__$1;
(statearr_7150_7221[(2)] = inst_6987);

(statearr_7150_7221[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (2))){
var inst_6949 = (state_7097[(13)]);
var inst_6956 = cljs.core.seq.call(null,inst_6949);
var inst_6957 = inst_6956;
var inst_6958 = null;
var inst_6959 = (0);
var inst_6960 = (0);
var state_7097__$1 = (function (){var statearr_7151 = state_7097;
(statearr_7151[(7)] = inst_6957);

(statearr_7151[(8)] = inst_6960);

(statearr_7151[(9)] = inst_6959);

(statearr_7151[(10)] = inst_6958);

return statearr_7151;
})();
var statearr_7152_7222 = state_7097__$1;
(statearr_7152_7222[(2)] = null);

(statearr_7152_7222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (23))){
var inst_7014 = (state_7097[(23)]);
var inst_7010 = (state_7097[(19)]);
var inst_7018 = (state_7097[(24)]);
var inst_7013 = (state_7097[(25)]);
var inst_7016 = (state_7097[(26)]);
var inst_7021 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_7023 = (function (){var all_files = inst_7010;
var res_SINGLEQUOTE_ = inst_7013;
var res = inst_7014;
var files_not_loaded = inst_7016;
var dependencies_that_loaded = inst_7018;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_7014,inst_7010,inst_7018,inst_7013,inst_7016,inst_7021,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__7022){
var map__7153 = p__7022;
var map__7153__$1 = ((((!((map__7153 == null)))?(((((map__7153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7153):map__7153);
var request_url = cljs.core.get.call(null,map__7153__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_7014,inst_7010,inst_7018,inst_7013,inst_7016,inst_7021,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_7024 = cljs.core.reverse.call(null,inst_7018);
var inst_7025 = cljs.core.map.call(null,inst_7023,inst_7024);
var inst_7026 = cljs.core.pr_str.call(null,inst_7025);
var inst_7027 = figwheel.client.utils.log.call(null,inst_7026);
var state_7097__$1 = (function (){var statearr_7155 = state_7097;
(statearr_7155[(31)] = inst_7021);

return statearr_7155;
})();
var statearr_7156_7223 = state_7097__$1;
(statearr_7156_7223[(2)] = inst_7027);

(statearr_7156_7223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (35))){
var state_7097__$1 = state_7097;
var statearr_7157_7224 = state_7097__$1;
(statearr_7157_7224[(2)] = true);

(statearr_7157_7224[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (19))){
var inst_7000 = (state_7097[(12)]);
var inst_7006 = figwheel.client.file_reloading.expand_files.call(null,inst_7000);
var state_7097__$1 = state_7097;
var statearr_7158_7225 = state_7097__$1;
(statearr_7158_7225[(2)] = inst_7006);

(statearr_7158_7225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (11))){
var state_7097__$1 = state_7097;
var statearr_7159_7226 = state_7097__$1;
(statearr_7159_7226[(2)] = null);

(statearr_7159_7226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (9))){
var inst_6989 = (state_7097[(2)]);
var state_7097__$1 = state_7097;
var statearr_7160_7227 = state_7097__$1;
(statearr_7160_7227[(2)] = inst_6989);

(statearr_7160_7227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (5))){
var inst_6960 = (state_7097[(8)]);
var inst_6959 = (state_7097[(9)]);
var inst_6962 = (inst_6960 < inst_6959);
var inst_6963 = inst_6962;
var state_7097__$1 = state_7097;
if(cljs.core.truth_(inst_6963)){
var statearr_7161_7228 = state_7097__$1;
(statearr_7161_7228[(1)] = (7));

} else {
var statearr_7162_7229 = state_7097__$1;
(statearr_7162_7229[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (14))){
var inst_6970 = (state_7097[(22)]);
var inst_6979 = cljs.core.first.call(null,inst_6970);
var inst_6980 = figwheel.client.file_reloading.eval_body.call(null,inst_6979,opts);
var inst_6981 = cljs.core.next.call(null,inst_6970);
var inst_6957 = inst_6981;
var inst_6958 = null;
var inst_6959 = (0);
var inst_6960 = (0);
var state_7097__$1 = (function (){var statearr_7163 = state_7097;
(statearr_7163[(7)] = inst_6957);

(statearr_7163[(8)] = inst_6960);

(statearr_7163[(32)] = inst_6980);

(statearr_7163[(9)] = inst_6959);

(statearr_7163[(10)] = inst_6958);

return statearr_7163;
})();
var statearr_7164_7230 = state_7097__$1;
(statearr_7164_7230[(2)] = null);

(statearr_7164_7230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (45))){
var state_7097__$1 = state_7097;
var statearr_7165_7231 = state_7097__$1;
(statearr_7165_7231[(2)] = null);

(statearr_7165_7231[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (26))){
var inst_7014 = (state_7097[(23)]);
var inst_7010 = (state_7097[(19)]);
var inst_7018 = (state_7097[(24)]);
var inst_7013 = (state_7097[(25)]);
var inst_7016 = (state_7097[(26)]);
var inst_7033 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_7035 = (function (){var all_files = inst_7010;
var res_SINGLEQUOTE_ = inst_7013;
var res = inst_7014;
var files_not_loaded = inst_7016;
var dependencies_that_loaded = inst_7018;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_7014,inst_7010,inst_7018,inst_7013,inst_7016,inst_7033,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__7034){
var map__7166 = p__7034;
var map__7166__$1 = ((((!((map__7166 == null)))?(((((map__7166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7166):map__7166);
var namespace = cljs.core.get.call(null,map__7166__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__7166__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_7014,inst_7010,inst_7018,inst_7013,inst_7016,inst_7033,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_7036 = cljs.core.map.call(null,inst_7035,inst_7014);
var inst_7037 = cljs.core.pr_str.call(null,inst_7036);
var inst_7038 = figwheel.client.utils.log.call(null,inst_7037);
var inst_7039 = (function (){var all_files = inst_7010;
var res_SINGLEQUOTE_ = inst_7013;
var res = inst_7014;
var files_not_loaded = inst_7016;
var dependencies_that_loaded = inst_7018;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_7014,inst_7010,inst_7018,inst_7013,inst_7016,inst_7033,inst_7035,inst_7036,inst_7037,inst_7038,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_7014,inst_7010,inst_7018,inst_7013,inst_7016,inst_7033,inst_7035,inst_7036,inst_7037,inst_7038,state_val_7098,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_7040 = setTimeout(inst_7039,(10));
var state_7097__$1 = (function (){var statearr_7168 = state_7097;
(statearr_7168[(33)] = inst_7033);

(statearr_7168[(34)] = inst_7038);

return statearr_7168;
})();
var statearr_7169_7232 = state_7097__$1;
(statearr_7169_7232[(2)] = inst_7040);

(statearr_7169_7232[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (16))){
var state_7097__$1 = state_7097;
var statearr_7170_7233 = state_7097__$1;
(statearr_7170_7233[(2)] = reload_dependents);

(statearr_7170_7233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (38))){
var inst_7050 = (state_7097[(16)]);
var inst_7068 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7050);
var state_7097__$1 = state_7097;
var statearr_7171_7234 = state_7097__$1;
(statearr_7171_7234[(2)] = inst_7068);

(statearr_7171_7234[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (30))){
var state_7097__$1 = state_7097;
var statearr_7172_7235 = state_7097__$1;
(statearr_7172_7235[(2)] = null);

(statearr_7172_7235[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (10))){
var inst_6970 = (state_7097[(22)]);
var inst_6972 = cljs.core.chunked_seq_QMARK_.call(null,inst_6970);
var state_7097__$1 = state_7097;
if(inst_6972){
var statearr_7173_7236 = state_7097__$1;
(statearr_7173_7236[(1)] = (13));

} else {
var statearr_7174_7237 = state_7097__$1;
(statearr_7174_7237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (18))){
var inst_7004 = (state_7097[(2)]);
var state_7097__$1 = state_7097;
if(cljs.core.truth_(inst_7004)){
var statearr_7175_7238 = state_7097__$1;
(statearr_7175_7238[(1)] = (19));

} else {
var statearr_7176_7239 = state_7097__$1;
(statearr_7176_7239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (42))){
var state_7097__$1 = state_7097;
var statearr_7177_7240 = state_7097__$1;
(statearr_7177_7240[(2)] = null);

(statearr_7177_7240[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (37))){
var inst_7063 = (state_7097[(2)]);
var state_7097__$1 = state_7097;
var statearr_7178_7241 = state_7097__$1;
(statearr_7178_7241[(2)] = inst_7063);

(statearr_7178_7241[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7098 === (8))){
var inst_6957 = (state_7097[(7)]);
var inst_6970 = (state_7097[(22)]);
var inst_6970__$1 = cljs.core.seq.call(null,inst_6957);
var state_7097__$1 = (function (){var statearr_7179 = state_7097;
(statearr_7179[(22)] = inst_6970__$1);

return statearr_7179;
})();
if(inst_6970__$1){
var statearr_7180_7242 = state_7097__$1;
(statearr_7180_7242[(1)] = (10));

} else {
var statearr_7181_7243 = state_7097__$1;
(statearr_7181_7243[(1)] = (11));

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
});})(c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__2906__auto__,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto____0 = (function (){
var statearr_7182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7182[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto__);

(statearr_7182[(1)] = (1));

return statearr_7182;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto____1 = (function (state_7097){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_7097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e7183){if((e7183 instanceof Object)){
var ex__2910__auto__ = e7183;
var statearr_7184_7244 = state_7097;
(statearr_7184_7244[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7245 = state_7097;
state_7097 = G__7245;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto__ = function(state_7097){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto____1.call(this,state_7097);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__2952__auto__ = (function (){var statearr_7185 = f__2951__auto__.call(null);
(statearr_7185[(6)] = c__2950__auto__);

return statearr_7185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto__,map__6942,map__6942__$1,opts,before_jsload,on_jsload,reload_dependents,map__6943,map__6943__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__2950__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__7248,link){
var map__7249 = p__7248;
var map__7249__$1 = ((((!((map__7249 == null)))?(((((map__7249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7249):map__7249);
var file = cljs.core.get.call(null,map__7249__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__7249,map__7249__$1,file){
return (function (p1__7246_SHARP_,p2__7247_SHARP_){
if(cljs.core._EQ_.call(null,p1__7246_SHARP_,p2__7247_SHARP_)){
return p1__7246_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__7249,map__7249__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__7252){
var map__7253 = p__7252;
var map__7253__$1 = ((((!((map__7253 == null)))?(((((map__7253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7253):map__7253);
var match_length = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__7251_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__7251_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__7255_SHARP_,p2__7256_SHARP_){
return cljs.core.assoc.call(null,p1__7255_SHARP_,cljs.core.get.call(null,p2__7256_SHARP_,key),p2__7256_SHARP_);
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
var loaded_f_datas_7257 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_7257);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_7257);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__7258,p__7259){
var map__7260 = p__7258;
var map__7260__$1 = ((((!((map__7260 == null)))?(((((map__7260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7260):map__7260);
var on_cssload = cljs.core.get.call(null,map__7260__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__7261 = p__7259;
var map__7261__$1 = ((((!((map__7261 == null)))?(((((map__7261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7261):map__7261);
var files_msg = map__7261__$1;
var files = cljs.core.get.call(null,map__7261__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
