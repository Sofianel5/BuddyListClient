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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__8637_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__8637_SHARP_));
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
var seq__8638 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__8639 = null;
var count__8640 = (0);
var i__8641 = (0);
while(true){
if((i__8641 < count__8640)){
var n = cljs.core._nth.call(null,chunk__8639,i__8641);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__8642 = seq__8638;
var G__8643 = chunk__8639;
var G__8644 = count__8640;
var G__8645 = (i__8641 + (1));
seq__8638 = G__8642;
chunk__8639 = G__8643;
count__8640 = G__8644;
i__8641 = G__8645;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8638);
if(temp__4657__auto__){
var seq__8638__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8638__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__8638__$1);
var G__8646 = cljs.core.chunk_rest.call(null,seq__8638__$1);
var G__8647 = c__4317__auto__;
var G__8648 = cljs.core.count.call(null,c__4317__auto__);
var G__8649 = (0);
seq__8638 = G__8646;
chunk__8639 = G__8647;
count__8640 = G__8648;
i__8641 = G__8649;
continue;
} else {
var n = cljs.core.first.call(null,seq__8638__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__8650 = cljs.core.next.call(null,seq__8638__$1);
var G__8651 = null;
var G__8652 = (0);
var G__8653 = (0);
seq__8638 = G__8650;
chunk__8639 = G__8651;
count__8640 = G__8652;
i__8641 = G__8653;
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

var seq__8663_8671 = cljs.core.seq.call(null,deps);
var chunk__8664_8672 = null;
var count__8665_8673 = (0);
var i__8666_8674 = (0);
while(true){
if((i__8666_8674 < count__8665_8673)){
var dep_8675 = cljs.core._nth.call(null,chunk__8664_8672,i__8666_8674);
topo_sort_helper_STAR_.call(null,dep_8675,(depth + (1)),state);


var G__8676 = seq__8663_8671;
var G__8677 = chunk__8664_8672;
var G__8678 = count__8665_8673;
var G__8679 = (i__8666_8674 + (1));
seq__8663_8671 = G__8676;
chunk__8664_8672 = G__8677;
count__8665_8673 = G__8678;
i__8666_8674 = G__8679;
continue;
} else {
var temp__4657__auto___8680 = cljs.core.seq.call(null,seq__8663_8671);
if(temp__4657__auto___8680){
var seq__8663_8681__$1 = temp__4657__auto___8680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8663_8681__$1)){
var c__4317__auto___8682 = cljs.core.chunk_first.call(null,seq__8663_8681__$1);
var G__8683 = cljs.core.chunk_rest.call(null,seq__8663_8681__$1);
var G__8684 = c__4317__auto___8682;
var G__8685 = cljs.core.count.call(null,c__4317__auto___8682);
var G__8686 = (0);
seq__8663_8671 = G__8683;
chunk__8664_8672 = G__8684;
count__8665_8673 = G__8685;
i__8666_8674 = G__8686;
continue;
} else {
var dep_8687 = cljs.core.first.call(null,seq__8663_8681__$1);
topo_sort_helper_STAR_.call(null,dep_8687,(depth + (1)),state);


var G__8688 = cljs.core.next.call(null,seq__8663_8681__$1);
var G__8689 = null;
var G__8690 = (0);
var G__8691 = (0);
seq__8663_8671 = G__8688;
chunk__8664_8672 = G__8689;
count__8665_8673 = G__8690;
i__8666_8674 = G__8691;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__8667){
var vec__8668 = p__8667;
var seq__8669 = cljs.core.seq.call(null,vec__8668);
var first__8670 = cljs.core.first.call(null,seq__8669);
var seq__8669__$1 = cljs.core.next.call(null,seq__8669);
var x = first__8670;
var xs = seq__8669__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__8668,seq__8669,first__8670,seq__8669__$1,x,xs,get_deps__$1){
return (function (p1__8654_SHARP_){
return clojure.set.difference.call(null,p1__8654_SHARP_,x);
});})(vec__8668,seq__8669,first__8670,seq__8669__$1,x,xs,get_deps__$1))
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
var seq__8692 = cljs.core.seq.call(null,provides);
var chunk__8693 = null;
var count__8694 = (0);
var i__8695 = (0);
while(true){
if((i__8695 < count__8694)){
var prov = cljs.core._nth.call(null,chunk__8693,i__8695);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__8696_8704 = cljs.core.seq.call(null,requires);
var chunk__8697_8705 = null;
var count__8698_8706 = (0);
var i__8699_8707 = (0);
while(true){
if((i__8699_8707 < count__8698_8706)){
var req_8708 = cljs.core._nth.call(null,chunk__8697_8705,i__8699_8707);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_8708,prov);


var G__8709 = seq__8696_8704;
var G__8710 = chunk__8697_8705;
var G__8711 = count__8698_8706;
var G__8712 = (i__8699_8707 + (1));
seq__8696_8704 = G__8709;
chunk__8697_8705 = G__8710;
count__8698_8706 = G__8711;
i__8699_8707 = G__8712;
continue;
} else {
var temp__4657__auto___8713 = cljs.core.seq.call(null,seq__8696_8704);
if(temp__4657__auto___8713){
var seq__8696_8714__$1 = temp__4657__auto___8713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8696_8714__$1)){
var c__4317__auto___8715 = cljs.core.chunk_first.call(null,seq__8696_8714__$1);
var G__8716 = cljs.core.chunk_rest.call(null,seq__8696_8714__$1);
var G__8717 = c__4317__auto___8715;
var G__8718 = cljs.core.count.call(null,c__4317__auto___8715);
var G__8719 = (0);
seq__8696_8704 = G__8716;
chunk__8697_8705 = G__8717;
count__8698_8706 = G__8718;
i__8699_8707 = G__8719;
continue;
} else {
var req_8720 = cljs.core.first.call(null,seq__8696_8714__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_8720,prov);


var G__8721 = cljs.core.next.call(null,seq__8696_8714__$1);
var G__8722 = null;
var G__8723 = (0);
var G__8724 = (0);
seq__8696_8704 = G__8721;
chunk__8697_8705 = G__8722;
count__8698_8706 = G__8723;
i__8699_8707 = G__8724;
continue;
}
} else {
}
}
break;
}


var G__8725 = seq__8692;
var G__8726 = chunk__8693;
var G__8727 = count__8694;
var G__8728 = (i__8695 + (1));
seq__8692 = G__8725;
chunk__8693 = G__8726;
count__8694 = G__8727;
i__8695 = G__8728;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8692);
if(temp__4657__auto__){
var seq__8692__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8692__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__8692__$1);
var G__8729 = cljs.core.chunk_rest.call(null,seq__8692__$1);
var G__8730 = c__4317__auto__;
var G__8731 = cljs.core.count.call(null,c__4317__auto__);
var G__8732 = (0);
seq__8692 = G__8729;
chunk__8693 = G__8730;
count__8694 = G__8731;
i__8695 = G__8732;
continue;
} else {
var prov = cljs.core.first.call(null,seq__8692__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__8700_8733 = cljs.core.seq.call(null,requires);
var chunk__8701_8734 = null;
var count__8702_8735 = (0);
var i__8703_8736 = (0);
while(true){
if((i__8703_8736 < count__8702_8735)){
var req_8737 = cljs.core._nth.call(null,chunk__8701_8734,i__8703_8736);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_8737,prov);


var G__8738 = seq__8700_8733;
var G__8739 = chunk__8701_8734;
var G__8740 = count__8702_8735;
var G__8741 = (i__8703_8736 + (1));
seq__8700_8733 = G__8738;
chunk__8701_8734 = G__8739;
count__8702_8735 = G__8740;
i__8703_8736 = G__8741;
continue;
} else {
var temp__4657__auto___8742__$1 = cljs.core.seq.call(null,seq__8700_8733);
if(temp__4657__auto___8742__$1){
var seq__8700_8743__$1 = temp__4657__auto___8742__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8700_8743__$1)){
var c__4317__auto___8744 = cljs.core.chunk_first.call(null,seq__8700_8743__$1);
var G__8745 = cljs.core.chunk_rest.call(null,seq__8700_8743__$1);
var G__8746 = c__4317__auto___8744;
var G__8747 = cljs.core.count.call(null,c__4317__auto___8744);
var G__8748 = (0);
seq__8700_8733 = G__8745;
chunk__8701_8734 = G__8746;
count__8702_8735 = G__8747;
i__8703_8736 = G__8748;
continue;
} else {
var req_8749 = cljs.core.first.call(null,seq__8700_8743__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_8749,prov);


var G__8750 = cljs.core.next.call(null,seq__8700_8743__$1);
var G__8751 = null;
var G__8752 = (0);
var G__8753 = (0);
seq__8700_8733 = G__8750;
chunk__8701_8734 = G__8751;
count__8702_8735 = G__8752;
i__8703_8736 = G__8753;
continue;
}
} else {
}
}
break;
}


var G__8754 = cljs.core.next.call(null,seq__8692__$1);
var G__8755 = null;
var G__8756 = (0);
var G__8757 = (0);
seq__8692 = G__8754;
chunk__8693 = G__8755;
count__8694 = G__8756;
i__8695 = G__8757;
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
var seq__8758_8762 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__8759_8763 = null;
var count__8760_8764 = (0);
var i__8761_8765 = (0);
while(true){
if((i__8761_8765 < count__8760_8764)){
var ns_8766 = cljs.core._nth.call(null,chunk__8759_8763,i__8761_8765);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_8766);


var G__8767 = seq__8758_8762;
var G__8768 = chunk__8759_8763;
var G__8769 = count__8760_8764;
var G__8770 = (i__8761_8765 + (1));
seq__8758_8762 = G__8767;
chunk__8759_8763 = G__8768;
count__8760_8764 = G__8769;
i__8761_8765 = G__8770;
continue;
} else {
var temp__4657__auto___8771 = cljs.core.seq.call(null,seq__8758_8762);
if(temp__4657__auto___8771){
var seq__8758_8772__$1 = temp__4657__auto___8771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8758_8772__$1)){
var c__4317__auto___8773 = cljs.core.chunk_first.call(null,seq__8758_8772__$1);
var G__8774 = cljs.core.chunk_rest.call(null,seq__8758_8772__$1);
var G__8775 = c__4317__auto___8773;
var G__8776 = cljs.core.count.call(null,c__4317__auto___8773);
var G__8777 = (0);
seq__8758_8762 = G__8774;
chunk__8759_8763 = G__8775;
count__8760_8764 = G__8776;
i__8761_8765 = G__8777;
continue;
} else {
var ns_8778 = cljs.core.first.call(null,seq__8758_8772__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_8778);


var G__8779 = cljs.core.next.call(null,seq__8758_8772__$1);
var G__8780 = null;
var G__8781 = (0);
var G__8782 = (0);
seq__8758_8762 = G__8779;
chunk__8759_8763 = G__8780;
count__8760_8764 = G__8781;
i__8761_8765 = G__8782;
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
var G__8783__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__8783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8784__i = 0, G__8784__a = new Array(arguments.length -  0);
while (G__8784__i < G__8784__a.length) {G__8784__a[G__8784__i] = arguments[G__8784__i + 0]; ++G__8784__i;}
  args = new cljs.core.IndexedSeq(G__8784__a,0,null);
} 
return G__8783__delegate.call(this,args);};
G__8783.cljs$lang$maxFixedArity = 0;
G__8783.cljs$lang$applyTo = (function (arglist__8785){
var args = cljs.core.seq(arglist__8785);
return G__8783__delegate(args);
});
G__8783.cljs$core$IFn$_invoke$arity$variadic = G__8783__delegate;
return G__8783;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__8786 = cljs.core._EQ_;
var expr__8787 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__8786.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__8787))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__8786,expr__8787){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__8786,expr__8787))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__8786,expr__8787){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e8789){if((e8789 instanceof Error)){
var e = e8789;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e8789;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__8786,expr__8787))
} else {
if(cljs.core.truth_(pred__8786.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__8787))){
return ((function (pred__8786,expr__8787){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__8786,expr__8787){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__8786,expr__8787))
);

return deferred.addErrback(((function (deferred,pred__8786,expr__8787){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__8786,expr__8787))
);
});
;})(pred__8786,expr__8787))
} else {
if(cljs.core.truth_(pred__8786.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__8787))){
return ((function (pred__8786,expr__8787){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e8790){if((e8790 instanceof Error)){
var e = e8790;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e8790;

}
}})());
});
;})(pred__8786,expr__8787))
} else {
return ((function (pred__8786,expr__8787){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__8786,expr__8787))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__8791,callback){
var map__8792 = p__8791;
var map__8792__$1 = ((((!((map__8792 == null)))?(((((map__8792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8792):map__8792);
var file_msg = map__8792__$1;
var request_url = cljs.core.get.call(null,map__8792__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__8792,map__8792__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__8792,map__8792__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__){
return (function (state_8816){
var state_val_8817 = (state_8816[(1)]);
if((state_val_8817 === (7))){
var inst_8812 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
var statearr_8818_8835 = state_8816__$1;
(statearr_8818_8835[(2)] = inst_8812);

(statearr_8818_8835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (1))){
var state_8816__$1 = state_8816;
var statearr_8819_8836 = state_8816__$1;
(statearr_8819_8836[(2)] = null);

(statearr_8819_8836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (4))){
var inst_8796 = (state_8816[(7)]);
var inst_8796__$1 = (state_8816[(2)]);
var state_8816__$1 = (function (){var statearr_8820 = state_8816;
(statearr_8820[(7)] = inst_8796__$1);

return statearr_8820;
})();
if(cljs.core.truth_(inst_8796__$1)){
var statearr_8821_8837 = state_8816__$1;
(statearr_8821_8837[(1)] = (5));

} else {
var statearr_8822_8838 = state_8816__$1;
(statearr_8822_8838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (6))){
var state_8816__$1 = state_8816;
var statearr_8823_8839 = state_8816__$1;
(statearr_8823_8839[(2)] = null);

(statearr_8823_8839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (3))){
var inst_8814 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8816__$1,inst_8814);
} else {
if((state_val_8817 === (2))){
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8816__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_8817 === (11))){
var inst_8808 = (state_8816[(2)]);
var state_8816__$1 = (function (){var statearr_8824 = state_8816;
(statearr_8824[(8)] = inst_8808);

return statearr_8824;
})();
var statearr_8825_8840 = state_8816__$1;
(statearr_8825_8840[(2)] = null);

(statearr_8825_8840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (9))){
var inst_8800 = (state_8816[(9)]);
var inst_8802 = (state_8816[(10)]);
var inst_8804 = inst_8802.call(null,inst_8800);
var state_8816__$1 = state_8816;
var statearr_8826_8841 = state_8816__$1;
(statearr_8826_8841[(2)] = inst_8804);

(statearr_8826_8841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (5))){
var inst_8796 = (state_8816[(7)]);
var inst_8798 = figwheel.client.file_reloading.blocking_load.call(null,inst_8796);
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8816__$1,(8),inst_8798);
} else {
if((state_val_8817 === (10))){
var inst_8800 = (state_8816[(9)]);
var inst_8806 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_8800);
var state_8816__$1 = state_8816;
var statearr_8827_8842 = state_8816__$1;
(statearr_8827_8842[(2)] = inst_8806);

(statearr_8827_8842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (8))){
var inst_8796 = (state_8816[(7)]);
var inst_8802 = (state_8816[(10)]);
var inst_8800 = (state_8816[(2)]);
var inst_8801 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_8802__$1 = cljs.core.get.call(null,inst_8801,inst_8796);
var state_8816__$1 = (function (){var statearr_8828 = state_8816;
(statearr_8828[(9)] = inst_8800);

(statearr_8828[(10)] = inst_8802__$1);

return statearr_8828;
})();
if(cljs.core.truth_(inst_8802__$1)){
var statearr_8829_8843 = state_8816__$1;
(statearr_8829_8843[(1)] = (9));

} else {
var statearr_8830_8844 = state_8816__$1;
(statearr_8830_8844[(1)] = (10));

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
});})(c__2146__auto__))
;
return ((function (switch__1991__auto__,c__2146__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__1992__auto__ = null;
var figwheel$client$file_reloading$state_machine__1992__auto____0 = (function (){
var statearr_8831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8831[(0)] = figwheel$client$file_reloading$state_machine__1992__auto__);

(statearr_8831[(1)] = (1));

return statearr_8831;
});
var figwheel$client$file_reloading$state_machine__1992__auto____1 = (function (state_8816){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_8816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e8832){if((e8832 instanceof Object)){
var ex__1995__auto__ = e8832;
var statearr_8833_8845 = state_8816;
(statearr_8833_8845[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8846 = state_8816;
state_8816 = G__8846;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__1992__auto__ = function(state_8816){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__1992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__1992__auto____1.call(this,state_8816);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__1992__auto____0;
figwheel$client$file_reloading$state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__1992__auto____1;
return figwheel$client$file_reloading$state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__))
})();
var state__2148__auto__ = (function (){var statearr_8834 = f__2147__auto__.call(null);
(statearr_8834[(6)] = c__2146__auto__);

return statearr_8834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__))
);

return c__2146__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__8847,callback){
var map__8848 = p__8847;
var map__8848__$1 = ((((!((map__8848 == null)))?(((((map__8848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8848):map__8848);
var file_msg = map__8848__$1;
var namespace = cljs.core.get.call(null,map__8848__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__8848,map__8848__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__8848,map__8848__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__8850){
var map__8851 = p__8850;
var map__8851__$1 = ((((!((map__8851 == null)))?(((((map__8851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8851):map__8851);
var file_msg = map__8851__$1;
var namespace = cljs.core.get.call(null,map__8851__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__8853){
var map__8854 = p__8853;
var map__8854__$1 = ((((!((map__8854 == null)))?(((((map__8854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8854):map__8854);
var file_msg = map__8854__$1;
var namespace = cljs.core.get.call(null,map__8854__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__8856,callback){
var map__8857 = p__8856;
var map__8857__$1 = ((((!((map__8857 == null)))?(((((map__8857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8857):map__8857);
var file_msg = map__8857__$1;
var request_url = cljs.core.get.call(null,map__8857__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__8857__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__2146__auto___8907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___8907,out){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___8907,out){
return (function (state_8892){
var state_val_8893 = (state_8892[(1)]);
if((state_val_8893 === (1))){
var inst_8866 = cljs.core.seq.call(null,files);
var inst_8867 = cljs.core.first.call(null,inst_8866);
var inst_8868 = cljs.core.next.call(null,inst_8866);
var inst_8869 = files;
var state_8892__$1 = (function (){var statearr_8894 = state_8892;
(statearr_8894[(7)] = inst_8869);

(statearr_8894[(8)] = inst_8868);

(statearr_8894[(9)] = inst_8867);

return statearr_8894;
})();
var statearr_8895_8908 = state_8892__$1;
(statearr_8895_8908[(2)] = null);

(statearr_8895_8908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8893 === (2))){
var inst_8875 = (state_8892[(10)]);
var inst_8869 = (state_8892[(7)]);
var inst_8874 = cljs.core.seq.call(null,inst_8869);
var inst_8875__$1 = cljs.core.first.call(null,inst_8874);
var inst_8876 = cljs.core.next.call(null,inst_8874);
var inst_8877 = (inst_8875__$1 == null);
var inst_8878 = cljs.core.not.call(null,inst_8877);
var state_8892__$1 = (function (){var statearr_8896 = state_8892;
(statearr_8896[(11)] = inst_8876);

(statearr_8896[(10)] = inst_8875__$1);

return statearr_8896;
})();
if(inst_8878){
var statearr_8897_8909 = state_8892__$1;
(statearr_8897_8909[(1)] = (4));

} else {
var statearr_8898_8910 = state_8892__$1;
(statearr_8898_8910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8893 === (3))){
var inst_8890 = (state_8892[(2)]);
var state_8892__$1 = state_8892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8892__$1,inst_8890);
} else {
if((state_val_8893 === (4))){
var inst_8875 = (state_8892[(10)]);
var inst_8880 = figwheel.client.file_reloading.reload_js_file.call(null,inst_8875);
var state_8892__$1 = state_8892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8892__$1,(7),inst_8880);
} else {
if((state_val_8893 === (5))){
var inst_8886 = cljs.core.async.close_BANG_.call(null,out);
var state_8892__$1 = state_8892;
var statearr_8899_8911 = state_8892__$1;
(statearr_8899_8911[(2)] = inst_8886);

(statearr_8899_8911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8893 === (6))){
var inst_8888 = (state_8892[(2)]);
var state_8892__$1 = state_8892;
var statearr_8900_8912 = state_8892__$1;
(statearr_8900_8912[(2)] = inst_8888);

(statearr_8900_8912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8893 === (7))){
var inst_8876 = (state_8892[(11)]);
var inst_8882 = (state_8892[(2)]);
var inst_8883 = cljs.core.async.put_BANG_.call(null,out,inst_8882);
var inst_8869 = inst_8876;
var state_8892__$1 = (function (){var statearr_8901 = state_8892;
(statearr_8901[(12)] = inst_8883);

(statearr_8901[(7)] = inst_8869);

return statearr_8901;
})();
var statearr_8902_8913 = state_8892__$1;
(statearr_8902_8913[(2)] = null);

(statearr_8902_8913[(1)] = (2));


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
});})(c__2146__auto___8907,out))
;
return ((function (switch__1991__auto__,c__2146__auto___8907,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto____0 = (function (){
var statearr_8903 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8903[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto__);

(statearr_8903[(1)] = (1));

return statearr_8903;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto____1 = (function (state_8892){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_8892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e8904){if((e8904 instanceof Object)){
var ex__1995__auto__ = e8904;
var statearr_8905_8914 = state_8892;
(statearr_8905_8914[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8915 = state_8892;
state_8892 = G__8915;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto__ = function(state_8892){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto____1.call(this,state_8892);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___8907,out))
})();
var state__2148__auto__ = (function (){var statearr_8906 = f__2147__auto__.call(null);
(statearr_8906[(6)] = c__2146__auto___8907);

return statearr_8906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___8907,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__8916,opts){
var map__8917 = p__8916;
var map__8917__$1 = ((((!((map__8917 == null)))?(((((map__8917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8917):map__8917);
var eval_body = cljs.core.get.call(null,map__8917__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__8917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e8919){var e = e8919;
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
return (function (p1__8920_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__8920_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__8921){
var vec__8922 = p__8921;
var k = cljs.core.nth.call(null,vec__8922,(0),null);
var v = cljs.core.nth.call(null,vec__8922,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__8925){
var vec__8926 = p__8925;
var k = cljs.core.nth.call(null,vec__8926,(0),null);
var v = cljs.core.nth.call(null,vec__8926,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__8932,p__8933){
var map__8934 = p__8932;
var map__8934__$1 = ((((!((map__8934 == null)))?(((((map__8934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8934):map__8934);
var opts = map__8934__$1;
var before_jsload = cljs.core.get.call(null,map__8934__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__8934__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__8934__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__8935 = p__8933;
var map__8935__$1 = ((((!((map__8935 == null)))?(((((map__8935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8935):map__8935);
var msg = map__8935__$1;
var files = cljs.core.get.call(null,map__8935__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__8935__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__8935__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_9089){
var state_val_9090 = (state_9089[(1)]);
if((state_val_9090 === (7))){
var inst_8952 = (state_9089[(7)]);
var inst_8949 = (state_9089[(8)]);
var inst_8951 = (state_9089[(9)]);
var inst_8950 = (state_9089[(10)]);
var inst_8957 = cljs.core._nth.call(null,inst_8950,inst_8952);
var inst_8958 = figwheel.client.file_reloading.eval_body.call(null,inst_8957,opts);
var inst_8959 = (inst_8952 + (1));
var tmp9091 = inst_8949;
var tmp9092 = inst_8951;
var tmp9093 = inst_8950;
var inst_8949__$1 = tmp9091;
var inst_8950__$1 = tmp9093;
var inst_8951__$1 = tmp9092;
var inst_8952__$1 = inst_8959;
var state_9089__$1 = (function (){var statearr_9094 = state_9089;
(statearr_9094[(7)] = inst_8952__$1);

(statearr_9094[(8)] = inst_8949__$1);

(statearr_9094[(11)] = inst_8958);

(statearr_9094[(9)] = inst_8951__$1);

(statearr_9094[(10)] = inst_8950__$1);

return statearr_9094;
})();
var statearr_9095_9178 = state_9089__$1;
(statearr_9095_9178[(2)] = null);

(statearr_9095_9178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (20))){
var inst_8992 = (state_9089[(12)]);
var inst_9000 = figwheel.client.file_reloading.sort_files.call(null,inst_8992);
var state_9089__$1 = state_9089;
var statearr_9096_9179 = state_9089__$1;
(statearr_9096_9179[(2)] = inst_9000);

(statearr_9096_9179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (27))){
var state_9089__$1 = state_9089;
var statearr_9097_9180 = state_9089__$1;
(statearr_9097_9180[(2)] = null);

(statearr_9097_9180[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (1))){
var inst_8941 = (state_9089[(13)]);
var inst_8938 = before_jsload.call(null,files);
var inst_8939 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_8940 = (function (){return ((function (inst_8941,inst_8938,inst_8939,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__8929_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__8929_SHARP_);
});
;})(inst_8941,inst_8938,inst_8939,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_8941__$1 = cljs.core.filter.call(null,inst_8940,files);
var inst_8942 = cljs.core.not_empty.call(null,inst_8941__$1);
var state_9089__$1 = (function (){var statearr_9098 = state_9089;
(statearr_9098[(14)] = inst_8938);

(statearr_9098[(15)] = inst_8939);

(statearr_9098[(13)] = inst_8941__$1);

return statearr_9098;
})();
if(cljs.core.truth_(inst_8942)){
var statearr_9099_9181 = state_9089__$1;
(statearr_9099_9181[(1)] = (2));

} else {
var statearr_9100_9182 = state_9089__$1;
(statearr_9100_9182[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (24))){
var state_9089__$1 = state_9089;
var statearr_9101_9183 = state_9089__$1;
(statearr_9101_9183[(2)] = null);

(statearr_9101_9183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (39))){
var inst_9042 = (state_9089[(16)]);
var state_9089__$1 = state_9089;
var statearr_9102_9184 = state_9089__$1;
(statearr_9102_9184[(2)] = inst_9042);

(statearr_9102_9184[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (46))){
var inst_9084 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
var statearr_9103_9185 = state_9089__$1;
(statearr_9103_9185[(2)] = inst_9084);

(statearr_9103_9185[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (4))){
var inst_8986 = (state_9089[(2)]);
var inst_8987 = cljs.core.List.EMPTY;
var inst_8988 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_8987);
var inst_8989 = (function (){return ((function (inst_8986,inst_8987,inst_8988,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__8930_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__8930_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__8930_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__8930_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_8986,inst_8987,inst_8988,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_8990 = cljs.core.filter.call(null,inst_8989,files);
var inst_8991 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_8992 = cljs.core.concat.call(null,inst_8990,inst_8991);
var state_9089__$1 = (function (){var statearr_9104 = state_9089;
(statearr_9104[(17)] = inst_8988);

(statearr_9104[(12)] = inst_8992);

(statearr_9104[(18)] = inst_8986);

return statearr_9104;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_9105_9186 = state_9089__$1;
(statearr_9105_9186[(1)] = (16));

} else {
var statearr_9106_9187 = state_9089__$1;
(statearr_9106_9187[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (15))){
var inst_8976 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
var statearr_9107_9188 = state_9089__$1;
(statearr_9107_9188[(2)] = inst_8976);

(statearr_9107_9188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (21))){
var inst_9002 = (state_9089[(19)]);
var inst_9002__$1 = (state_9089[(2)]);
var inst_9003 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_9002__$1);
var state_9089__$1 = (function (){var statearr_9108 = state_9089;
(statearr_9108[(19)] = inst_9002__$1);

return statearr_9108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9089__$1,(22),inst_9003);
} else {
if((state_val_9090 === (31))){
var inst_9087 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9089__$1,inst_9087);
} else {
if((state_val_9090 === (32))){
var inst_9042 = (state_9089[(16)]);
var inst_9047 = inst_9042.cljs$lang$protocol_mask$partition0$;
var inst_9048 = (inst_9047 & (64));
var inst_9049 = inst_9042.cljs$core$ISeq$;
var inst_9050 = (cljs.core.PROTOCOL_SENTINEL === inst_9049);
var inst_9051 = ((inst_9048) || (inst_9050));
var state_9089__$1 = state_9089;
if(cljs.core.truth_(inst_9051)){
var statearr_9109_9189 = state_9089__$1;
(statearr_9109_9189[(1)] = (35));

} else {
var statearr_9110_9190 = state_9089__$1;
(statearr_9110_9190[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (40))){
var inst_9064 = (state_9089[(20)]);
var inst_9063 = (state_9089[(2)]);
var inst_9064__$1 = cljs.core.get.call(null,inst_9063,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_9065 = cljs.core.get.call(null,inst_9063,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_9066 = cljs.core.not_empty.call(null,inst_9064__$1);
var state_9089__$1 = (function (){var statearr_9111 = state_9089;
(statearr_9111[(21)] = inst_9065);

(statearr_9111[(20)] = inst_9064__$1);

return statearr_9111;
})();
if(cljs.core.truth_(inst_9066)){
var statearr_9112_9191 = state_9089__$1;
(statearr_9112_9191[(1)] = (41));

} else {
var statearr_9113_9192 = state_9089__$1;
(statearr_9113_9192[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (33))){
var state_9089__$1 = state_9089;
var statearr_9114_9193 = state_9089__$1;
(statearr_9114_9193[(2)] = false);

(statearr_9114_9193[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (13))){
var inst_8962 = (state_9089[(22)]);
var inst_8966 = cljs.core.chunk_first.call(null,inst_8962);
var inst_8967 = cljs.core.chunk_rest.call(null,inst_8962);
var inst_8968 = cljs.core.count.call(null,inst_8966);
var inst_8949 = inst_8967;
var inst_8950 = inst_8966;
var inst_8951 = inst_8968;
var inst_8952 = (0);
var state_9089__$1 = (function (){var statearr_9115 = state_9089;
(statearr_9115[(7)] = inst_8952);

(statearr_9115[(8)] = inst_8949);

(statearr_9115[(9)] = inst_8951);

(statearr_9115[(10)] = inst_8950);

return statearr_9115;
})();
var statearr_9116_9194 = state_9089__$1;
(statearr_9116_9194[(2)] = null);

(statearr_9116_9194[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (22))){
var inst_9005 = (state_9089[(23)]);
var inst_9010 = (state_9089[(24)]);
var inst_9006 = (state_9089[(25)]);
var inst_9002 = (state_9089[(19)]);
var inst_9005__$1 = (state_9089[(2)]);
var inst_9006__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_9005__$1);
var inst_9007 = (function (){var all_files = inst_9002;
var res_SINGLEQUOTE_ = inst_9005__$1;
var res = inst_9006__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_9005,inst_9010,inst_9006,inst_9002,inst_9005__$1,inst_9006__$1,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__8931_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__8931_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_9005,inst_9010,inst_9006,inst_9002,inst_9005__$1,inst_9006__$1,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9008 = cljs.core.filter.call(null,inst_9007,inst_9005__$1);
var inst_9009 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_9010__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_9009);
var inst_9011 = cljs.core.not_empty.call(null,inst_9010__$1);
var state_9089__$1 = (function (){var statearr_9117 = state_9089;
(statearr_9117[(23)] = inst_9005__$1);

(statearr_9117[(24)] = inst_9010__$1);

(statearr_9117[(25)] = inst_9006__$1);

(statearr_9117[(26)] = inst_9008);

return statearr_9117;
})();
if(cljs.core.truth_(inst_9011)){
var statearr_9118_9195 = state_9089__$1;
(statearr_9118_9195[(1)] = (23));

} else {
var statearr_9119_9196 = state_9089__$1;
(statearr_9119_9196[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (36))){
var state_9089__$1 = state_9089;
var statearr_9120_9197 = state_9089__$1;
(statearr_9120_9197[(2)] = false);

(statearr_9120_9197[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (41))){
var inst_9064 = (state_9089[(20)]);
var inst_9068 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_9069 = cljs.core.map.call(null,inst_9068,inst_9064);
var inst_9070 = cljs.core.pr_str.call(null,inst_9069);
var inst_9071 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9070)].join('');
var inst_9072 = figwheel.client.utils.log.call(null,inst_9071);
var state_9089__$1 = state_9089;
var statearr_9121_9198 = state_9089__$1;
(statearr_9121_9198[(2)] = inst_9072);

(statearr_9121_9198[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (43))){
var inst_9065 = (state_9089[(21)]);
var inst_9075 = (state_9089[(2)]);
var inst_9076 = cljs.core.not_empty.call(null,inst_9065);
var state_9089__$1 = (function (){var statearr_9122 = state_9089;
(statearr_9122[(27)] = inst_9075);

return statearr_9122;
})();
if(cljs.core.truth_(inst_9076)){
var statearr_9123_9199 = state_9089__$1;
(statearr_9123_9199[(1)] = (44));

} else {
var statearr_9124_9200 = state_9089__$1;
(statearr_9124_9200[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (29))){
var inst_9005 = (state_9089[(23)]);
var inst_9010 = (state_9089[(24)]);
var inst_9006 = (state_9089[(25)]);
var inst_9008 = (state_9089[(26)]);
var inst_9002 = (state_9089[(19)]);
var inst_9042 = (state_9089[(16)]);
var inst_9038 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_9041 = (function (){var all_files = inst_9002;
var res_SINGLEQUOTE_ = inst_9005;
var res = inst_9006;
var files_not_loaded = inst_9008;
var dependencies_that_loaded = inst_9010;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9005,inst_9010,inst_9006,inst_9008,inst_9002,inst_9042,inst_9038,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__9040){
var map__9125 = p__9040;
var map__9125__$1 = ((((!((map__9125 == null)))?(((((map__9125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9125):map__9125);
var namespace = cljs.core.get.call(null,map__9125__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9005,inst_9010,inst_9006,inst_9008,inst_9002,inst_9042,inst_9038,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9042__$1 = cljs.core.group_by.call(null,inst_9041,inst_9008);
var inst_9044 = (inst_9042__$1 == null);
var inst_9045 = cljs.core.not.call(null,inst_9044);
var state_9089__$1 = (function (){var statearr_9127 = state_9089;
(statearr_9127[(28)] = inst_9038);

(statearr_9127[(16)] = inst_9042__$1);

return statearr_9127;
})();
if(inst_9045){
var statearr_9128_9201 = state_9089__$1;
(statearr_9128_9201[(1)] = (32));

} else {
var statearr_9129_9202 = state_9089__$1;
(statearr_9129_9202[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (44))){
var inst_9065 = (state_9089[(21)]);
var inst_9078 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_9065);
var inst_9079 = cljs.core.pr_str.call(null,inst_9078);
var inst_9080 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9079)].join('');
var inst_9081 = figwheel.client.utils.log.call(null,inst_9080);
var state_9089__$1 = state_9089;
var statearr_9130_9203 = state_9089__$1;
(statearr_9130_9203[(2)] = inst_9081);

(statearr_9130_9203[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (6))){
var inst_8983 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
var statearr_9131_9204 = state_9089__$1;
(statearr_9131_9204[(2)] = inst_8983);

(statearr_9131_9204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (28))){
var inst_9008 = (state_9089[(26)]);
var inst_9035 = (state_9089[(2)]);
var inst_9036 = cljs.core.not_empty.call(null,inst_9008);
var state_9089__$1 = (function (){var statearr_9132 = state_9089;
(statearr_9132[(29)] = inst_9035);

return statearr_9132;
})();
if(cljs.core.truth_(inst_9036)){
var statearr_9133_9205 = state_9089__$1;
(statearr_9133_9205[(1)] = (29));

} else {
var statearr_9134_9206 = state_9089__$1;
(statearr_9134_9206[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (25))){
var inst_9006 = (state_9089[(25)]);
var inst_9022 = (state_9089[(2)]);
var inst_9023 = cljs.core.not_empty.call(null,inst_9006);
var state_9089__$1 = (function (){var statearr_9135 = state_9089;
(statearr_9135[(30)] = inst_9022);

return statearr_9135;
})();
if(cljs.core.truth_(inst_9023)){
var statearr_9136_9207 = state_9089__$1;
(statearr_9136_9207[(1)] = (26));

} else {
var statearr_9137_9208 = state_9089__$1;
(statearr_9137_9208[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (34))){
var inst_9058 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
if(cljs.core.truth_(inst_9058)){
var statearr_9138_9209 = state_9089__$1;
(statearr_9138_9209[(1)] = (38));

} else {
var statearr_9139_9210 = state_9089__$1;
(statearr_9139_9210[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (17))){
var state_9089__$1 = state_9089;
var statearr_9140_9211 = state_9089__$1;
(statearr_9140_9211[(2)] = recompile_dependents);

(statearr_9140_9211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (3))){
var state_9089__$1 = state_9089;
var statearr_9141_9212 = state_9089__$1;
(statearr_9141_9212[(2)] = null);

(statearr_9141_9212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (12))){
var inst_8979 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
var statearr_9142_9213 = state_9089__$1;
(statearr_9142_9213[(2)] = inst_8979);

(statearr_9142_9213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (2))){
var inst_8941 = (state_9089[(13)]);
var inst_8948 = cljs.core.seq.call(null,inst_8941);
var inst_8949 = inst_8948;
var inst_8950 = null;
var inst_8951 = (0);
var inst_8952 = (0);
var state_9089__$1 = (function (){var statearr_9143 = state_9089;
(statearr_9143[(7)] = inst_8952);

(statearr_9143[(8)] = inst_8949);

(statearr_9143[(9)] = inst_8951);

(statearr_9143[(10)] = inst_8950);

return statearr_9143;
})();
var statearr_9144_9214 = state_9089__$1;
(statearr_9144_9214[(2)] = null);

(statearr_9144_9214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (23))){
var inst_9005 = (state_9089[(23)]);
var inst_9010 = (state_9089[(24)]);
var inst_9006 = (state_9089[(25)]);
var inst_9008 = (state_9089[(26)]);
var inst_9002 = (state_9089[(19)]);
var inst_9013 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_9015 = (function (){var all_files = inst_9002;
var res_SINGLEQUOTE_ = inst_9005;
var res = inst_9006;
var files_not_loaded = inst_9008;
var dependencies_that_loaded = inst_9010;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9005,inst_9010,inst_9006,inst_9008,inst_9002,inst_9013,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__9014){
var map__9145 = p__9014;
var map__9145__$1 = ((((!((map__9145 == null)))?(((((map__9145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9145):map__9145);
var request_url = cljs.core.get.call(null,map__9145__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9005,inst_9010,inst_9006,inst_9008,inst_9002,inst_9013,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9016 = cljs.core.reverse.call(null,inst_9010);
var inst_9017 = cljs.core.map.call(null,inst_9015,inst_9016);
var inst_9018 = cljs.core.pr_str.call(null,inst_9017);
var inst_9019 = figwheel.client.utils.log.call(null,inst_9018);
var state_9089__$1 = (function (){var statearr_9147 = state_9089;
(statearr_9147[(31)] = inst_9013);

return statearr_9147;
})();
var statearr_9148_9215 = state_9089__$1;
(statearr_9148_9215[(2)] = inst_9019);

(statearr_9148_9215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (35))){
var state_9089__$1 = state_9089;
var statearr_9149_9216 = state_9089__$1;
(statearr_9149_9216[(2)] = true);

(statearr_9149_9216[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (19))){
var inst_8992 = (state_9089[(12)]);
var inst_8998 = figwheel.client.file_reloading.expand_files.call(null,inst_8992);
var state_9089__$1 = state_9089;
var statearr_9150_9217 = state_9089__$1;
(statearr_9150_9217[(2)] = inst_8998);

(statearr_9150_9217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (11))){
var state_9089__$1 = state_9089;
var statearr_9151_9218 = state_9089__$1;
(statearr_9151_9218[(2)] = null);

(statearr_9151_9218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (9))){
var inst_8981 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
var statearr_9152_9219 = state_9089__$1;
(statearr_9152_9219[(2)] = inst_8981);

(statearr_9152_9219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (5))){
var inst_8952 = (state_9089[(7)]);
var inst_8951 = (state_9089[(9)]);
var inst_8954 = (inst_8952 < inst_8951);
var inst_8955 = inst_8954;
var state_9089__$1 = state_9089;
if(cljs.core.truth_(inst_8955)){
var statearr_9153_9220 = state_9089__$1;
(statearr_9153_9220[(1)] = (7));

} else {
var statearr_9154_9221 = state_9089__$1;
(statearr_9154_9221[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (14))){
var inst_8962 = (state_9089[(22)]);
var inst_8971 = cljs.core.first.call(null,inst_8962);
var inst_8972 = figwheel.client.file_reloading.eval_body.call(null,inst_8971,opts);
var inst_8973 = cljs.core.next.call(null,inst_8962);
var inst_8949 = inst_8973;
var inst_8950 = null;
var inst_8951 = (0);
var inst_8952 = (0);
var state_9089__$1 = (function (){var statearr_9155 = state_9089;
(statearr_9155[(7)] = inst_8952);

(statearr_9155[(8)] = inst_8949);

(statearr_9155[(9)] = inst_8951);

(statearr_9155[(32)] = inst_8972);

(statearr_9155[(10)] = inst_8950);

return statearr_9155;
})();
var statearr_9156_9222 = state_9089__$1;
(statearr_9156_9222[(2)] = null);

(statearr_9156_9222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (45))){
var state_9089__$1 = state_9089;
var statearr_9157_9223 = state_9089__$1;
(statearr_9157_9223[(2)] = null);

(statearr_9157_9223[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (26))){
var inst_9005 = (state_9089[(23)]);
var inst_9010 = (state_9089[(24)]);
var inst_9006 = (state_9089[(25)]);
var inst_9008 = (state_9089[(26)]);
var inst_9002 = (state_9089[(19)]);
var inst_9025 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_9027 = (function (){var all_files = inst_9002;
var res_SINGLEQUOTE_ = inst_9005;
var res = inst_9006;
var files_not_loaded = inst_9008;
var dependencies_that_loaded = inst_9010;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9005,inst_9010,inst_9006,inst_9008,inst_9002,inst_9025,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__9026){
var map__9158 = p__9026;
var map__9158__$1 = ((((!((map__9158 == null)))?(((((map__9158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9158):map__9158);
var namespace = cljs.core.get.call(null,map__9158__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__9158__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9005,inst_9010,inst_9006,inst_9008,inst_9002,inst_9025,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9028 = cljs.core.map.call(null,inst_9027,inst_9006);
var inst_9029 = cljs.core.pr_str.call(null,inst_9028);
var inst_9030 = figwheel.client.utils.log.call(null,inst_9029);
var inst_9031 = (function (){var all_files = inst_9002;
var res_SINGLEQUOTE_ = inst_9005;
var res = inst_9006;
var files_not_loaded = inst_9008;
var dependencies_that_loaded = inst_9010;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9005,inst_9010,inst_9006,inst_9008,inst_9002,inst_9025,inst_9027,inst_9028,inst_9029,inst_9030,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9005,inst_9010,inst_9006,inst_9008,inst_9002,inst_9025,inst_9027,inst_9028,inst_9029,inst_9030,state_val_9090,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9032 = setTimeout(inst_9031,(10));
var state_9089__$1 = (function (){var statearr_9160 = state_9089;
(statearr_9160[(33)] = inst_9030);

(statearr_9160[(34)] = inst_9025);

return statearr_9160;
})();
var statearr_9161_9224 = state_9089__$1;
(statearr_9161_9224[(2)] = inst_9032);

(statearr_9161_9224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (16))){
var state_9089__$1 = state_9089;
var statearr_9162_9225 = state_9089__$1;
(statearr_9162_9225[(2)] = reload_dependents);

(statearr_9162_9225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (38))){
var inst_9042 = (state_9089[(16)]);
var inst_9060 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9042);
var state_9089__$1 = state_9089;
var statearr_9163_9226 = state_9089__$1;
(statearr_9163_9226[(2)] = inst_9060);

(statearr_9163_9226[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (30))){
var state_9089__$1 = state_9089;
var statearr_9164_9227 = state_9089__$1;
(statearr_9164_9227[(2)] = null);

(statearr_9164_9227[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (10))){
var inst_8962 = (state_9089[(22)]);
var inst_8964 = cljs.core.chunked_seq_QMARK_.call(null,inst_8962);
var state_9089__$1 = state_9089;
if(inst_8964){
var statearr_9165_9228 = state_9089__$1;
(statearr_9165_9228[(1)] = (13));

} else {
var statearr_9166_9229 = state_9089__$1;
(statearr_9166_9229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (18))){
var inst_8996 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
if(cljs.core.truth_(inst_8996)){
var statearr_9167_9230 = state_9089__$1;
(statearr_9167_9230[(1)] = (19));

} else {
var statearr_9168_9231 = state_9089__$1;
(statearr_9168_9231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (42))){
var state_9089__$1 = state_9089;
var statearr_9169_9232 = state_9089__$1;
(statearr_9169_9232[(2)] = null);

(statearr_9169_9232[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (37))){
var inst_9055 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
var statearr_9170_9233 = state_9089__$1;
(statearr_9170_9233[(2)] = inst_9055);

(statearr_9170_9233[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (8))){
var inst_8949 = (state_9089[(8)]);
var inst_8962 = (state_9089[(22)]);
var inst_8962__$1 = cljs.core.seq.call(null,inst_8949);
var state_9089__$1 = (function (){var statearr_9171 = state_9089;
(statearr_9171[(22)] = inst_8962__$1);

return statearr_9171;
})();
if(inst_8962__$1){
var statearr_9172_9234 = state_9089__$1;
(statearr_9172_9234[(1)] = (10));

} else {
var statearr_9173_9235 = state_9089__$1;
(statearr_9173_9235[(1)] = (11));

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
});})(c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__1991__auto__,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto____0 = (function (){
var statearr_9174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9174[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto__);

(statearr_9174[(1)] = (1));

return statearr_9174;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto____1 = (function (state_9089){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_9089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e9175){if((e9175 instanceof Object)){
var ex__1995__auto__ = e9175;
var statearr_9176_9236 = state_9089;
(statearr_9176_9236[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9237 = state_9089;
state_9089 = G__9237;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto__ = function(state_9089){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto____1.call(this,state_9089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__2148__auto__ = (function (){var statearr_9177 = f__2147__auto__.call(null);
(statearr_9177[(6)] = c__2146__auto__);

return statearr_9177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__,map__8934,map__8934__$1,opts,before_jsload,on_jsload,reload_dependents,map__8935,map__8935__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__2146__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__9240,link){
var map__9241 = p__9240;
var map__9241__$1 = ((((!((map__9241 == null)))?(((((map__9241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9241):map__9241);
var file = cljs.core.get.call(null,map__9241__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__9241,map__9241__$1,file){
return (function (p1__9238_SHARP_,p2__9239_SHARP_){
if(cljs.core._EQ_.call(null,p1__9238_SHARP_,p2__9239_SHARP_)){
return p1__9238_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__9241,map__9241__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__9244){
var map__9245 = p__9244;
var map__9245__$1 = ((((!((map__9245 == null)))?(((((map__9245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9245):map__9245);
var match_length = cljs.core.get.call(null,map__9245__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__9245__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__9243_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__9243_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__9247_SHARP_,p2__9248_SHARP_){
return cljs.core.assoc.call(null,p1__9247_SHARP_,cljs.core.get.call(null,p2__9248_SHARP_,key),p2__9248_SHARP_);
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
var loaded_f_datas_9249 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_9249);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_9249);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__9250,p__9251){
var map__9252 = p__9250;
var map__9252__$1 = ((((!((map__9252 == null)))?(((((map__9252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9252):map__9252);
var on_cssload = cljs.core.get.call(null,map__9252__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__9253 = p__9251;
var map__9253__$1 = ((((!((map__9253 == null)))?(((((map__9253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9253):map__9253);
var files_msg = map__9253__$1;
var files = cljs.core.get.call(null,map__9253__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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
