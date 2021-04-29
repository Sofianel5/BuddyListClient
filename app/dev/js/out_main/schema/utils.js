// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.object');
goog.require('goog.string');
goog.require('clojure.string');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1891 = arguments.length;
var i__4498__auto___1892 = (0);
while(true){
if((i__4498__auto___1892 < len__4497__auto___1891)){
args__4500__auto__.push((arguments[i__4498__auto___1892]));

var G__1893 = (i__4498__auto___1892 + (1));
i__4498__auto___1892 = G__1893;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){

return cljs.core.into.call(null,(function (){var or__3920__auto__ = m;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4290__auto__ = (function schema$utils$iter__1881(s__1882){
return (new cljs.core.LazySeq(null,(function (){
var s__1882__$1 = s__1882;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__1882__$1);
if(temp__4657__auto__){
var s__1882__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1882__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__1882__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__1884 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__1883 = (0);
while(true){
if((i__1883 < size__4289__auto__)){
var vec__1885 = cljs.core._nth.call(null,c__4288__auto__,i__1883);
var k = cljs.core.nth.call(null,vec__1885,(0),null);
var v = cljs.core.nth.call(null,vec__1885,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__1884,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__1894 = (i__1883 + (1));
i__1883 = G__1894;
continue;
} else {
var G__1895 = (i__1883 + (1));
i__1883 = G__1895;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884),schema$utils$iter__1881.call(null,cljs.core.chunk_rest.call(null,s__1882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884),null);
}
} else {
var vec__1888 = cljs.core.first.call(null,s__1882__$2);
var k = cljs.core.nth.call(null,vec__1888,(0),null);
var v = cljs.core.nth.call(null,vec__1888,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__1881.call(null,cljs.core.rest.call(null,s__1882__$2)));
} else {
var G__1896 = cljs.core.rest.call(null,s__1882__$2);
s__1882__$1 = G__1896;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4290__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
schema.utils.assoc_when.cljs$lang$applyTo = (function (seq1879){
var G__1880 = cljs.core.first.call(null,seq1879);
var seq1879__$1 = cljs.core.next.call(null,seq1879);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1880,seq1879__$1);
});

schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___1899 = arguments.length;
var i__4498__auto___1900 = (0);
while(true){
if((i__4498__auto___1900 < len__4497__auto___1899)){
args__4500__auto__.push((arguments[i__4498__auto___1900]));

var G__1901 = (i__4498__auto___1900 + (1));
i__4498__auto___1900 = G__1901;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq1897){
var G__1898 = cljs.core.first.call(null,seq1897);
var seq1897__$1 = cljs.core.next.call(null,seq1897);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1898,seq1897__$1);
});

schema.utils.max_value_length = cljs.core.atom.call(null,(19));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of.call(null,value);
if((cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')) <= cljs.core.deref.call(null,schema.utils.max_value_length))){
return value;
} else {
return cljs.core.symbol.call(null,["a-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
}
});
/**
 * TODO: eventually use built in demunge in latest cljs.
 */
schema.utils.unmunge = (function schema$utils$unmunge(s){
return cljs.core.reduce.call(null,(function (s__$1,p__1903){
var vec__1904 = p__1903;
var to = cljs.core.nth.call(null,vec__1904,(0),null);
var from = cljs.core.nth.call(null,vec__1904,(1),null);
return clojure.string.replace.call(null,s__$1,from,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)].join(''));
}),s,cljs.core.sort_by.call(null,(function (p1__1902_SHARP_){
return (- cljs.core.count.call(null,cljs.core.second.call(null,p1__1902_SHARP_)));
}),cljs.core.PersistentHashMap.fromArrays(["@","!","\"","#","%","&","'","*","+","-","/",":","[","{","<","\\","|","=","]","}",">","^","~","?"],["_CIRCA_","_BANG_","_DOUBLEQUOTE_","_SHARP_","_PERCENT_","_AMPERSAND_","_SINGLEQUOTE_","_STAR_","_PLUS_","_","_SLASH_","_COLON_","_LBRACK_","_LBRACE_","_LT_","_BSLASH_","_BAR_","_EQ_","_RBRACK_","_RBRACE_","_GT_","_CARET_","_TILDE_","_QMARK_"])));
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
var vec__1907 = cljs.core.re_matches.call(null,/#object\[(.*)\]/,cljs.core.pr_str.call(null,f));
var _ = cljs.core.nth.call(null,vec__1907,(0),null);
var s = cljs.core.nth.call(null,vec__1907,(1),null);
if(cljs.core._EQ_.call(null,"Function",s)){
return "function";
} else {
return cljs.core.re_find.call(null,/[^\/]+(?:$|(?=\/+$))/,cljs.core.demunge.call(null,s));
}
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if(!((x == null))){
if((((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IRecord$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.validation_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"expectation-delay","expectation-delay",-1886214669,null),new cljs.core.Symbol(null,"fail-explanation","fail-explanation",530278923,null)], null);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"schema.utils/ValidationError");
});

/**
 * Positional factory function for schema.utils/ValidationError.
 */
schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return (new cljs.core.List(null,(function (){var or__3920__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})(),(new cljs.core.List(null,cljs.core.deref.call(null,err.expectation_delay),null,(1),null)),(2),null));
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.named_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"schema.utils/NamedError");
});

/**
 * Positional factory function for schema.utils/NamedError.
 */
schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"named","named",1218138048,null),(new cljs.core.List(null,err.error,(new cljs.core.List(null,err.name,null,(1),null)),(2),null)),(3),null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4170__auto__,k__4171__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return this__4170__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4171__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4172__auto__,k1912,else__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
var G__1916 = k1912;
var G__1916__$1 = (((G__1916 instanceof cljs.core.Keyword))?G__1916.fqn:null);
switch (G__1916__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1912,else__4173__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4184__auto__,writer__4185__auto__,opts__4186__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
var pr_pair__4187__auto__ = ((function (this__4184__auto____$1){
return (function (keyval__4188__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4185__auto__,cljs.core.pr_writer,""," ","",opts__4186__auto__,keyval__4188__auto__);
});})(this__4184__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4185__auto__,pr_pair__4187__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__4186__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1911){
var self__ = this;
var G__1911__$1 = this;
return (new cljs.core.RecordIter((0),G__1911__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4165__auto__){
var self__ = this;
var this__4165__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4174__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4166__auto__){
var self__ = this;
var this__4166__auto____$1 = this;
var h__4028__auto__ = self__.__hash;
if(!((h__4028__auto__ == null))){
return h__4028__auto__;
} else {
var h__4028__auto____$1 = ((function (h__4028__auto__,this__4166__auto____$1){
return (function (coll__4167__auto__){
return (1172277899 ^ cljs.core.hash_unordered_coll.call(null,coll__4167__auto__));
});})(h__4028__auto__,this__4166__auto____$1))
.call(null,this__4166__auto____$1);
self__.__hash = h__4028__auto____$1;

return h__4028__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1913,other1914){
var self__ = this;
var this1913__$1 = this;
return ((!((other1914 == null))) && ((this1913__$1.constructor === other1914.constructor)) && (cljs.core._EQ_.call(null,this1913__$1.error,other1914.error)) && (cljs.core._EQ_.call(null,this1913__$1.__extmap,other1914.__extmap)));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4179__auto__,k__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__4180__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4179__auto____$1),self__.__meta),k__4180__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4180__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4177__auto__,k__4178__auto__,G__1911){
var self__ = this;
var this__4177__auto____$1 = this;
var pred__1917 = cljs.core.keyword_identical_QMARK_;
var expr__1918 = k__4178__auto__;
if(cljs.core.truth_(pred__1917.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__1918))){
return (new schema.utils.ErrorContainer(G__1911,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4178__auto__,G__1911),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4182__auto__){
var self__ = this;
var this__4182__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4169__auto__,G__1911){
var self__ = this;
var this__4169__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__1911,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4175__auto__,entry__4176__auto__){
var self__ = this;
var this__4175__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4176__auto__)){
return this__4175__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4176__auto__,(0)),cljs.core._nth.call(null,entry__4176__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4175__auto____$1,entry__4176__auto__);
}
});

schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__4206__auto__){
return (new cljs.core.List(null,"schema.utils/ErrorContainer",null,(1),null));
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__4206__auto__,writer__4207__auto__){
return cljs.core._write.call(null,writer__4207__auto__,"schema.utils/ErrorContainer");
});

/**
 * Positional factory function for schema.utils/ErrorContainer.
 */
schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

/**
 * Factory function for schema.utils/ErrorContainer, taking a map of keywords to field values.
 */
schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__1915){
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__1915),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__1915,new cljs.core.Keyword(null,"error","error",-978969032))),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){

return schema.utils.__GT_ErrorContainer.call(null,x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,x))){
return x.error;
} else {
return null;
}
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return goog.object.set(klass,"schema$utils$schema",schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return goog.object.get(klass,"schema$utils$schema");
});
/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = cljs.core.atom.call(null,false);
