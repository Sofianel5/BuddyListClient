// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined'))){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9259 = arguments.length;
var i__4498__auto___9260 = (0);
while(true){
if((i__4498__auto___9260 < len__4497__auto___9259)){
args__4500__auto__.push((arguments[i__4498__auto___9260]));

var G__9261 = (i__4498__auto___9260 + (1));
i__4498__auto___9260 = G__9261;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq9258){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9258));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined'))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9263 = arguments.length;
var i__4498__auto___9264 = (0);
while(true){
if((i__4498__auto___9264 < len__4497__auto___9263)){
args__4500__auto__.push((arguments[i__4498__auto___9264]));

var G__9265 = (i__4498__auto___9264 + (1));
i__4498__auto___9264 = G__9265;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq9262){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9262));
});

var g_QMARK__9266 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined'))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_9267 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__9266){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined'))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__9266))
,null));
var mkg_9268 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__9266,g_9267){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined'))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__9266,g_9267))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__9266,g_9267,mkg_9268){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__9266).call(null,x);
});})(g_QMARK__9266,g_9267,mkg_9268))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__9266,g_9267,mkg_9268){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_9268).call(null,gfn);
});})(g_QMARK__9266,g_9267,mkg_9268))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__9266,g_9267,mkg_9268){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_9267).call(null,generator);
});})(g_QMARK__9266,g_9267,mkg_9268))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__421__auto___9288 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined'))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__421__auto___9288){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9289 = arguments.length;
var i__4498__auto___9290 = (0);
while(true){
if((i__4498__auto___9290 < len__4497__auto___9289)){
args__4500__auto__.push((arguments[i__4498__auto___9290]));

var G__9291 = (i__4498__auto___9290 + (1));
i__4498__auto___9290 = G__9291;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9288))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9288){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9288),args);
});})(g__421__auto___9288))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__421__auto___9288){
return (function (seq9269){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9269));
});})(g__421__auto___9288))
;


var g__421__auto___9292 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined'))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__421__auto___9292){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9293 = arguments.length;
var i__4498__auto___9294 = (0);
while(true){
if((i__4498__auto___9294 < len__4497__auto___9293)){
args__4500__auto__.push((arguments[i__4498__auto___9294]));

var G__9295 = (i__4498__auto___9294 + (1));
i__4498__auto___9294 = G__9295;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9292))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9292){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9292),args);
});})(g__421__auto___9292))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__421__auto___9292){
return (function (seq9270){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9270));
});})(g__421__auto___9292))
;


var g__421__auto___9296 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined'))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__421__auto___9296){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9297 = arguments.length;
var i__4498__auto___9298 = (0);
while(true){
if((i__4498__auto___9298 < len__4497__auto___9297)){
args__4500__auto__.push((arguments[i__4498__auto___9298]));

var G__9299 = (i__4498__auto___9298 + (1));
i__4498__auto___9298 = G__9299;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9296))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9296){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9296),args);
});})(g__421__auto___9296))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__421__auto___9296){
return (function (seq9271){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9271));
});})(g__421__auto___9296))
;


var g__421__auto___9300 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined'))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__421__auto___9300){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9301 = arguments.length;
var i__4498__auto___9302 = (0);
while(true){
if((i__4498__auto___9302 < len__4497__auto___9301)){
args__4500__auto__.push((arguments[i__4498__auto___9302]));

var G__9303 = (i__4498__auto___9302 + (1));
i__4498__auto___9302 = G__9303;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9300))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9300){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9300),args);
});})(g__421__auto___9300))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__421__auto___9300){
return (function (seq9272){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9272));
});})(g__421__auto___9300))
;


var g__421__auto___9304 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined'))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__421__auto___9304){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9305 = arguments.length;
var i__4498__auto___9306 = (0);
while(true){
if((i__4498__auto___9306 < len__4497__auto___9305)){
args__4500__auto__.push((arguments[i__4498__auto___9306]));

var G__9307 = (i__4498__auto___9306 + (1));
i__4498__auto___9306 = G__9307;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9304))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9304){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9304),args);
});})(g__421__auto___9304))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__421__auto___9304){
return (function (seq9273){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9273));
});})(g__421__auto___9304))
;


var g__421__auto___9308 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined'))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__421__auto___9308){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9309 = arguments.length;
var i__4498__auto___9310 = (0);
while(true){
if((i__4498__auto___9310 < len__4497__auto___9309)){
args__4500__auto__.push((arguments[i__4498__auto___9310]));

var G__9311 = (i__4498__auto___9310 + (1));
i__4498__auto___9310 = G__9311;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9308))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9308){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9308),args);
});})(g__421__auto___9308))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__421__auto___9308){
return (function (seq9274){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9274));
});})(g__421__auto___9308))
;


var g__421__auto___9312 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined'))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__421__auto___9312){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9313 = arguments.length;
var i__4498__auto___9314 = (0);
while(true){
if((i__4498__auto___9314 < len__4497__auto___9313)){
args__4500__auto__.push((arguments[i__4498__auto___9314]));

var G__9315 = (i__4498__auto___9314 + (1));
i__4498__auto___9314 = G__9315;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9312))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9312){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9312),args);
});})(g__421__auto___9312))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__421__auto___9312){
return (function (seq9275){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9275));
});})(g__421__auto___9312))
;


var g__421__auto___9316 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined'))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__421__auto___9316){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9317 = arguments.length;
var i__4498__auto___9318 = (0);
while(true){
if((i__4498__auto___9318 < len__4497__auto___9317)){
args__4500__auto__.push((arguments[i__4498__auto___9318]));

var G__9319 = (i__4498__auto___9318 + (1));
i__4498__auto___9318 = G__9319;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9316))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9316){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9316),args);
});})(g__421__auto___9316))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__421__auto___9316){
return (function (seq9276){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9276));
});})(g__421__auto___9316))
;


var g__421__auto___9320 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined'))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__421__auto___9320){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9321 = arguments.length;
var i__4498__auto___9322 = (0);
while(true){
if((i__4498__auto___9322 < len__4497__auto___9321)){
args__4500__auto__.push((arguments[i__4498__auto___9322]));

var G__9323 = (i__4498__auto___9322 + (1));
i__4498__auto___9322 = G__9323;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9320))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9320){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9320),args);
});})(g__421__auto___9320))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__421__auto___9320){
return (function (seq9277){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9277));
});})(g__421__auto___9320))
;


var g__421__auto___9324 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined'))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__421__auto___9324){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9325 = arguments.length;
var i__4498__auto___9326 = (0);
while(true){
if((i__4498__auto___9326 < len__4497__auto___9325)){
args__4500__auto__.push((arguments[i__4498__auto___9326]));

var G__9327 = (i__4498__auto___9326 + (1));
i__4498__auto___9326 = G__9327;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9324))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9324){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9324),args);
});})(g__421__auto___9324))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__421__auto___9324){
return (function (seq9278){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9278));
});})(g__421__auto___9324))
;


var g__421__auto___9328 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined'))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__421__auto___9328){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9329 = arguments.length;
var i__4498__auto___9330 = (0);
while(true){
if((i__4498__auto___9330 < len__4497__auto___9329)){
args__4500__auto__.push((arguments[i__4498__auto___9330]));

var G__9331 = (i__4498__auto___9330 + (1));
i__4498__auto___9330 = G__9331;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9328))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9328){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9328),args);
});})(g__421__auto___9328))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__421__auto___9328){
return (function (seq9279){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9279));
});})(g__421__auto___9328))
;


var g__421__auto___9332 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined'))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__421__auto___9332){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9333 = arguments.length;
var i__4498__auto___9334 = (0);
while(true){
if((i__4498__auto___9334 < len__4497__auto___9333)){
args__4500__auto__.push((arguments[i__4498__auto___9334]));

var G__9335 = (i__4498__auto___9334 + (1));
i__4498__auto___9334 = G__9335;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9332))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9332){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9332),args);
});})(g__421__auto___9332))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__421__auto___9332){
return (function (seq9280){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9280));
});})(g__421__auto___9332))
;


var g__421__auto___9336 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined'))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__421__auto___9336){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9337 = arguments.length;
var i__4498__auto___9338 = (0);
while(true){
if((i__4498__auto___9338 < len__4497__auto___9337)){
args__4500__auto__.push((arguments[i__4498__auto___9338]));

var G__9339 = (i__4498__auto___9338 + (1));
i__4498__auto___9338 = G__9339;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9336))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9336){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9336),args);
});})(g__421__auto___9336))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__421__auto___9336){
return (function (seq9281){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9281));
});})(g__421__auto___9336))
;


var g__421__auto___9340 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined'))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__421__auto___9340){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9341 = arguments.length;
var i__4498__auto___9342 = (0);
while(true){
if((i__4498__auto___9342 < len__4497__auto___9341)){
args__4500__auto__.push((arguments[i__4498__auto___9342]));

var G__9343 = (i__4498__auto___9342 + (1));
i__4498__auto___9342 = G__9343;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9340))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9340){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9340),args);
});})(g__421__auto___9340))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__421__auto___9340){
return (function (seq9282){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9282));
});})(g__421__auto___9340))
;


var g__421__auto___9344 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined'))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__421__auto___9344){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9345 = arguments.length;
var i__4498__auto___9346 = (0);
while(true){
if((i__4498__auto___9346 < len__4497__auto___9345)){
args__4500__auto__.push((arguments[i__4498__auto___9346]));

var G__9347 = (i__4498__auto___9346 + (1));
i__4498__auto___9346 = G__9347;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9344))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9344){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9344),args);
});})(g__421__auto___9344))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__421__auto___9344){
return (function (seq9283){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9283));
});})(g__421__auto___9344))
;


var g__421__auto___9348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined'))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__421__auto___9348){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9349 = arguments.length;
var i__4498__auto___9350 = (0);
while(true){
if((i__4498__auto___9350 < len__4497__auto___9349)){
args__4500__auto__.push((arguments[i__4498__auto___9350]));

var G__9351 = (i__4498__auto___9350 + (1));
i__4498__auto___9350 = G__9351;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9348))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9348){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9348),args);
});})(g__421__auto___9348))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__421__auto___9348){
return (function (seq9284){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9284));
});})(g__421__auto___9348))
;


var g__421__auto___9352 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined'))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__421__auto___9352){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9353 = arguments.length;
var i__4498__auto___9354 = (0);
while(true){
if((i__4498__auto___9354 < len__4497__auto___9353)){
args__4500__auto__.push((arguments[i__4498__auto___9354]));

var G__9355 = (i__4498__auto___9354 + (1));
i__4498__auto___9354 = G__9355;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9352))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9352){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9352),args);
});})(g__421__auto___9352))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__421__auto___9352){
return (function (seq9285){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9285));
});})(g__421__auto___9352))
;


var g__421__auto___9356 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined'))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__421__auto___9356){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9357 = arguments.length;
var i__4498__auto___9358 = (0);
while(true){
if((i__4498__auto___9358 < len__4497__auto___9357)){
args__4500__auto__.push((arguments[i__4498__auto___9358]));

var G__9359 = (i__4498__auto___9358 + (1));
i__4498__auto___9358 = G__9359;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9356))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9356){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9356),args);
});})(g__421__auto___9356))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__421__auto___9356){
return (function (seq9286){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9286));
});})(g__421__auto___9356))
;


var g__421__auto___9360 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined'))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__421__auto___9360){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9361 = arguments.length;
var i__4498__auto___9362 = (0);
while(true){
if((i__4498__auto___9362 < len__4497__auto___9361)){
args__4500__auto__.push((arguments[i__4498__auto___9362]));

var G__9363 = (i__4498__auto___9362 + (1));
i__4498__auto___9362 = G__9363;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__421__auto___9360))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__421__auto___9360){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__421__auto___9360),args);
});})(g__421__auto___9360))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__421__auto___9360){
return (function (seq9287){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9287));
});})(g__421__auto___9360))
;

var g__434__auto___9385 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined'))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__434__auto___9385){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9386 = arguments.length;
var i__4498__auto___9387 = (0);
while(true){
if((i__4498__auto___9387 < len__4497__auto___9386)){
args__4500__auto__.push((arguments[i__4498__auto___9387]));

var G__9388 = (i__4498__auto___9387 + (1));
i__4498__auto___9387 = G__9388;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9385))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9385){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9385);
});})(g__434__auto___9385))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__434__auto___9385){
return (function (seq9364){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9364));
});})(g__434__auto___9385))
;


var g__434__auto___9389 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined'))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__434__auto___9389){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9390 = arguments.length;
var i__4498__auto___9391 = (0);
while(true){
if((i__4498__auto___9391 < len__4497__auto___9390)){
args__4500__auto__.push((arguments[i__4498__auto___9391]));

var G__9392 = (i__4498__auto___9391 + (1));
i__4498__auto___9391 = G__9392;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9389))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9389){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9389);
});})(g__434__auto___9389))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__434__auto___9389){
return (function (seq9365){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9365));
});})(g__434__auto___9389))
;


var g__434__auto___9393 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined'))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__434__auto___9393){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9394 = arguments.length;
var i__4498__auto___9395 = (0);
while(true){
if((i__4498__auto___9395 < len__4497__auto___9394)){
args__4500__auto__.push((arguments[i__4498__auto___9395]));

var G__9396 = (i__4498__auto___9395 + (1));
i__4498__auto___9395 = G__9396;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9393))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9393){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9393);
});})(g__434__auto___9393))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__434__auto___9393){
return (function (seq9366){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9366));
});})(g__434__auto___9393))
;


var g__434__auto___9397 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined'))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__434__auto___9397){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9398 = arguments.length;
var i__4498__auto___9399 = (0);
while(true){
if((i__4498__auto___9399 < len__4497__auto___9398)){
args__4500__auto__.push((arguments[i__4498__auto___9399]));

var G__9400 = (i__4498__auto___9399 + (1));
i__4498__auto___9399 = G__9400;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9397))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9397){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9397);
});})(g__434__auto___9397))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__434__auto___9397){
return (function (seq9367){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9367));
});})(g__434__auto___9397))
;


var g__434__auto___9401 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined'))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__434__auto___9401){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9402 = arguments.length;
var i__4498__auto___9403 = (0);
while(true){
if((i__4498__auto___9403 < len__4497__auto___9402)){
args__4500__auto__.push((arguments[i__4498__auto___9403]));

var G__9404 = (i__4498__auto___9403 + (1));
i__4498__auto___9403 = G__9404;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9401))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9401){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9401);
});})(g__434__auto___9401))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__434__auto___9401){
return (function (seq9368){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9368));
});})(g__434__auto___9401))
;


var g__434__auto___9405 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__434__auto___9405){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9406 = arguments.length;
var i__4498__auto___9407 = (0);
while(true){
if((i__4498__auto___9407 < len__4497__auto___9406)){
args__4500__auto__.push((arguments[i__4498__auto___9407]));

var G__9408 = (i__4498__auto___9407 + (1));
i__4498__auto___9407 = G__9408;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9405))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9405){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9405);
});})(g__434__auto___9405))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__434__auto___9405){
return (function (seq9369){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9369));
});})(g__434__auto___9405))
;


var g__434__auto___9409 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined'))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__434__auto___9409){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9410 = arguments.length;
var i__4498__auto___9411 = (0);
while(true){
if((i__4498__auto___9411 < len__4497__auto___9410)){
args__4500__auto__.push((arguments[i__4498__auto___9411]));

var G__9412 = (i__4498__auto___9411 + (1));
i__4498__auto___9411 = G__9412;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9409))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9409){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9409);
});})(g__434__auto___9409))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__434__auto___9409){
return (function (seq9370){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9370));
});})(g__434__auto___9409))
;


var g__434__auto___9413 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined'))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__434__auto___9413){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9414 = arguments.length;
var i__4498__auto___9415 = (0);
while(true){
if((i__4498__auto___9415 < len__4497__auto___9414)){
args__4500__auto__.push((arguments[i__4498__auto___9415]));

var G__9416 = (i__4498__auto___9415 + (1));
i__4498__auto___9415 = G__9416;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9413))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9413){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9413);
});})(g__434__auto___9413))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__434__auto___9413){
return (function (seq9371){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9371));
});})(g__434__auto___9413))
;


var g__434__auto___9417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined'))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__434__auto___9417){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9418 = arguments.length;
var i__4498__auto___9419 = (0);
while(true){
if((i__4498__auto___9419 < len__4497__auto___9418)){
args__4500__auto__.push((arguments[i__4498__auto___9419]));

var G__9420 = (i__4498__auto___9419 + (1));
i__4498__auto___9419 = G__9420;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9417))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9417){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9417);
});})(g__434__auto___9417))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__434__auto___9417){
return (function (seq9372){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9372));
});})(g__434__auto___9417))
;


var g__434__auto___9421 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined'))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__434__auto___9421){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9422 = arguments.length;
var i__4498__auto___9423 = (0);
while(true){
if((i__4498__auto___9423 < len__4497__auto___9422)){
args__4500__auto__.push((arguments[i__4498__auto___9423]));

var G__9424 = (i__4498__auto___9423 + (1));
i__4498__auto___9423 = G__9424;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9421))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9421){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9421);
});})(g__434__auto___9421))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__434__auto___9421){
return (function (seq9373){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9373));
});})(g__434__auto___9421))
;


var g__434__auto___9425 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined'))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__434__auto___9425){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9426 = arguments.length;
var i__4498__auto___9427 = (0);
while(true){
if((i__4498__auto___9427 < len__4497__auto___9426)){
args__4500__auto__.push((arguments[i__4498__auto___9427]));

var G__9428 = (i__4498__auto___9427 + (1));
i__4498__auto___9427 = G__9428;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9425))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9425){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9425);
});})(g__434__auto___9425))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__434__auto___9425){
return (function (seq9374){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9374));
});})(g__434__auto___9425))
;


var g__434__auto___9429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined'))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__434__auto___9429){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9430 = arguments.length;
var i__4498__auto___9431 = (0);
while(true){
if((i__4498__auto___9431 < len__4497__auto___9430)){
args__4500__auto__.push((arguments[i__4498__auto___9431]));

var G__9432 = (i__4498__auto___9431 + (1));
i__4498__auto___9431 = G__9432;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9429))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9429){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9429);
});})(g__434__auto___9429))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__434__auto___9429){
return (function (seq9375){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9375));
});})(g__434__auto___9429))
;


var g__434__auto___9433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined'))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__434__auto___9433){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9434 = arguments.length;
var i__4498__auto___9435 = (0);
while(true){
if((i__4498__auto___9435 < len__4497__auto___9434)){
args__4500__auto__.push((arguments[i__4498__auto___9435]));

var G__9436 = (i__4498__auto___9435 + (1));
i__4498__auto___9435 = G__9436;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9433))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9433){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9433);
});})(g__434__auto___9433))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__434__auto___9433){
return (function (seq9376){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9376));
});})(g__434__auto___9433))
;


var g__434__auto___9437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined'))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__434__auto___9437){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9438 = arguments.length;
var i__4498__auto___9439 = (0);
while(true){
if((i__4498__auto___9439 < len__4497__auto___9438)){
args__4500__auto__.push((arguments[i__4498__auto___9439]));

var G__9440 = (i__4498__auto___9439 + (1));
i__4498__auto___9439 = G__9440;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9437))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9437){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9437);
});})(g__434__auto___9437))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__434__auto___9437){
return (function (seq9377){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9377));
});})(g__434__auto___9437))
;


var g__434__auto___9441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined'))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__434__auto___9441){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9442 = arguments.length;
var i__4498__auto___9443 = (0);
while(true){
if((i__4498__auto___9443 < len__4497__auto___9442)){
args__4500__auto__.push((arguments[i__4498__auto___9443]));

var G__9444 = (i__4498__auto___9443 + (1));
i__4498__auto___9443 = G__9444;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9441))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9441){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9441);
});})(g__434__auto___9441))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__434__auto___9441){
return (function (seq9378){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9378));
});})(g__434__auto___9441))
;


var g__434__auto___9445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined'))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__434__auto___9445){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9446 = arguments.length;
var i__4498__auto___9447 = (0);
while(true){
if((i__4498__auto___9447 < len__4497__auto___9446)){
args__4500__auto__.push((arguments[i__4498__auto___9447]));

var G__9448 = (i__4498__auto___9447 + (1));
i__4498__auto___9447 = G__9448;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9445))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9445){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9445);
});})(g__434__auto___9445))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__434__auto___9445){
return (function (seq9379){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9379));
});})(g__434__auto___9445))
;


var g__434__auto___9449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined'))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__434__auto___9449){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9450 = arguments.length;
var i__4498__auto___9451 = (0);
while(true){
if((i__4498__auto___9451 < len__4497__auto___9450)){
args__4500__auto__.push((arguments[i__4498__auto___9451]));

var G__9452 = (i__4498__auto___9451 + (1));
i__4498__auto___9451 = G__9452;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9449))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9449){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9449);
});})(g__434__auto___9449))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__434__auto___9449){
return (function (seq9380){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9380));
});})(g__434__auto___9449))
;


var g__434__auto___9453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__434__auto___9453){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9454 = arguments.length;
var i__4498__auto___9455 = (0);
while(true){
if((i__4498__auto___9455 < len__4497__auto___9454)){
args__4500__auto__.push((arguments[i__4498__auto___9455]));

var G__9456 = (i__4498__auto___9455 + (1));
i__4498__auto___9455 = G__9456;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9453))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9453){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9453);
});})(g__434__auto___9453))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__434__auto___9453){
return (function (seq9381){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9381));
});})(g__434__auto___9453))
;


var g__434__auto___9457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined'))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__434__auto___9457){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9458 = arguments.length;
var i__4498__auto___9459 = (0);
while(true){
if((i__4498__auto___9459 < len__4497__auto___9458)){
args__4500__auto__.push((arguments[i__4498__auto___9459]));

var G__9460 = (i__4498__auto___9459 + (1));
i__4498__auto___9459 = G__9460;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9457))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9457){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9457);
});})(g__434__auto___9457))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__434__auto___9457){
return (function (seq9382){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9382));
});})(g__434__auto___9457))
;


var g__434__auto___9461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined'))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__434__auto___9461){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9462 = arguments.length;
var i__4498__auto___9463 = (0);
while(true){
if((i__4498__auto___9463 < len__4497__auto___9462)){
args__4500__auto__.push((arguments[i__4498__auto___9463]));

var G__9464 = (i__4498__auto___9463 + (1));
i__4498__auto___9463 = G__9464;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9461))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9461){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9461);
});})(g__434__auto___9461))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__434__auto___9461){
return (function (seq9383){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9383));
});})(g__434__auto___9461))
;


var g__434__auto___9465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined'))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__434__auto___9465){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9466 = arguments.length;
var i__4498__auto___9467 = (0);
while(true){
if((i__4498__auto___9467 < len__4497__auto___9466)){
args__4500__auto__.push((arguments[i__4498__auto___9467]));

var G__9468 = (i__4498__auto___9467 + (1));
i__4498__auto___9467 = G__9468;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(g__434__auto___9465))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__434__auto___9465){
return (function (args){
return cljs.core.deref.call(null,g__434__auto___9465);
});})(g__434__auto___9465))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__434__auto___9465){
return (function (seq9384){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9384));
});})(g__434__auto___9465))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4500__auto__ = [];
var len__4497__auto___9471 = arguments.length;
var i__4498__auto___9472 = (0);
while(true){
if((i__4498__auto___9472 < len__4497__auto___9471)){
args__4500__auto__.push((arguments[i__4498__auto___9472]));

var G__9473 = (i__4498__auto___9472 + (1));
i__4498__auto___9472 = G__9473;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__9469_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__9469_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq9470){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9470));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__9474_SHARP_){
return (new Date(p1__9474_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
