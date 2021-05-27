// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('garden.types');
goog.require('cljs.core');

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
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4170__auto__,k__4171__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return this__4170__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4171__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4172__auto__,k1338,else__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
var G__1342 = k1338;
var G__1342__$1 = (((G__1342 instanceof cljs.core.Keyword))?G__1342.fqn:null);
switch (G__1342__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1338,else__4173__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4184__auto__,writer__4185__auto__,opts__4186__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
var pr_pair__4187__auto__ = ((function (this__4184__auto____$1){
return (function (keyval__4188__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4185__auto__,cljs.core.pr_writer,""," ","",opts__4186__auto__,keyval__4188__auto__);
});})(this__4184__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4185__auto__,pr_pair__4187__auto__,"#garden.types.CSSUnit{",", ","}",opts__4186__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1337){
var self__ = this;
var G__1337__$1 = this;
return (new cljs.core.RecordIter((0),G__1337__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4165__auto__){
var self__ = this;
var this__4165__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4174__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4166__auto__){
var self__ = this;
var this__4166__auto____$1 = this;
var h__4028__auto__ = self__.__hash;
if(!((h__4028__auto__ == null))){
return h__4028__auto__;
} else {
var h__4028__auto____$1 = ((function (h__4028__auto__,this__4166__auto____$1){
return (function (coll__4167__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll.call(null,coll__4167__auto__));
});})(h__4028__auto__,this__4166__auto____$1))
.call(null,this__4166__auto____$1);
self__.__hash = h__4028__auto____$1;

return h__4028__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1339,other1340){
var self__ = this;
var this1339__$1 = this;
return ((!((other1340 == null))) && ((this1339__$1.constructor === other1340.constructor)) && (cljs.core._EQ_.call(null,this1339__$1.unit,other1340.unit)) && (cljs.core._EQ_.call(null,this1339__$1.magnitude,other1340.magnitude)) && (cljs.core._EQ_.call(null,this1339__$1.__extmap,other1340.__extmap)));
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4179__auto__,k__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__4180__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4179__auto____$1),self__.__meta),k__4180__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4180__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4177__auto__,k__4178__auto__,G__1337){
var self__ = this;
var this__4177__auto____$1 = this;
var pred__1343 = cljs.core.keyword_identical_QMARK_;
var expr__1344 = k__4178__auto__;
if(cljs.core.truth_(pred__1343.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__1344))){
return (new garden.types.CSSUnit(G__1337,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1343.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__1344))){
return (new garden.types.CSSUnit(self__.unit,G__1337,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4178__auto__,G__1337),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4182__auto__){
var self__ = this;
var this__4182__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4169__auto__,G__1337){
var self__ = this;
var this__4169__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__1337,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4175__auto__,entry__4176__auto__){
var self__ = this;
var this__4175__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4176__auto__)){
return this__4175__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4176__auto__,(0)),cljs.core._nth.call(null,entry__4176__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4175__auto____$1,entry__4176__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4206__auto__){
return (new cljs.core.List(null,"garden.types/CSSUnit",null,(1),null));
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4206__auto__,writer__4207__auto__){
return cljs.core._write.call(null,writer__4207__auto__,"garden.types/CSSUnit");
});

/**
 * Positional factory function for garden.types/CSSUnit.
 */
garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for garden.types/CSSUnit, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__1341){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__1341),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__1341),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__1341,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222))),null));
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
garden.types.CSSFunction = (function (f,args,__meta,__extmap,__hash){
this.f = f;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4170__auto__,k__4171__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return this__4170__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4171__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4172__auto__,k1348,else__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
var G__1352 = k1348;
var G__1352__$1 = (((G__1352 instanceof cljs.core.Keyword))?G__1352.fqn:null);
switch (G__1352__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1348,else__4173__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4184__auto__,writer__4185__auto__,opts__4186__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
var pr_pair__4187__auto__ = ((function (this__4184__auto____$1){
return (function (keyval__4188__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4185__auto__,cljs.core.pr_writer,""," ","",opts__4186__auto__,keyval__4188__auto__);
});})(this__4184__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4185__auto__,pr_pair__4187__auto__,"#garden.types.CSSFunction{",", ","}",opts__4186__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1347){
var self__ = this;
var G__1347__$1 = this;
return (new cljs.core.RecordIter((0),G__1347__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4165__auto__){
var self__ = this;
var this__4165__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4174__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4166__auto__){
var self__ = this;
var this__4166__auto____$1 = this;
var h__4028__auto__ = self__.__hash;
if(!((h__4028__auto__ == null))){
return h__4028__auto__;
} else {
var h__4028__auto____$1 = ((function (h__4028__auto__,this__4166__auto____$1){
return (function (coll__4167__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll.call(null,coll__4167__auto__));
});})(h__4028__auto__,this__4166__auto____$1))
.call(null,this__4166__auto____$1);
self__.__hash = h__4028__auto____$1;

return h__4028__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1349,other1350){
var self__ = this;
var this1349__$1 = this;
return ((!((other1350 == null))) && ((this1349__$1.constructor === other1350.constructor)) && (cljs.core._EQ_.call(null,this1349__$1.f,other1350.f)) && (cljs.core._EQ_.call(null,this1349__$1.args,other1350.args)) && (cljs.core._EQ_.call(null,this1349__$1.__extmap,other1350.__extmap)));
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4179__auto__,k__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__4180__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4179__auto____$1),self__.__meta),k__4180__auto__);
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4180__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4177__auto__,k__4178__auto__,G__1347){
var self__ = this;
var this__4177__auto____$1 = this;
var pred__1353 = cljs.core.keyword_identical_QMARK_;
var expr__1354 = k__4178__auto__;
if(cljs.core.truth_(pred__1353.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__1354))){
return (new garden.types.CSSFunction(G__1347,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1353.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__1354))){
return (new garden.types.CSSFunction(self__.f,G__1347,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4178__auto__,G__1347),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4182__auto__){
var self__ = this;
var this__4182__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4169__auto__,G__1347){
var self__ = this;
var this__4169__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,G__1347,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4175__auto__,entry__4176__auto__){
var self__ = this;
var this__4175__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4176__auto__)){
return this__4175__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4176__auto__,(0)),cljs.core._nth.call(null,entry__4176__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4175__auto____$1,entry__4176__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4206__auto__){
return (new cljs.core.List(null,"garden.types/CSSFunction",null,(1),null));
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4206__auto__,writer__4207__auto__){
return cljs.core._write.call(null,writer__4207__auto__,"garden.types/CSSFunction");
});

/**
 * Positional factory function for garden.types/CSSFunction.
 */
garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(f,args){
return (new garden.types.CSSFunction(f,args,null,null,null));
});

/**
 * Factory function for garden.types/CSSFunction, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__1351){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__1351),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__1351),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__1351,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576))),null));
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
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4170__auto__,k__4171__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return this__4170__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4171__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4172__auto__,k1358,else__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
var G__1362 = k1358;
var G__1362__$1 = (((G__1362 instanceof cljs.core.Keyword))?G__1362.fqn:null);
switch (G__1362__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1358,else__4173__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4184__auto__,writer__4185__auto__,opts__4186__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
var pr_pair__4187__auto__ = ((function (this__4184__auto____$1){
return (function (keyval__4188__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4185__auto__,cljs.core.pr_writer,""," ","",opts__4186__auto__,keyval__4188__auto__);
});})(this__4184__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4185__auto__,pr_pair__4187__auto__,"#garden.types.CSSAtRule{",", ","}",opts__4186__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1357){
var self__ = this;
var G__1357__$1 = this;
return (new cljs.core.RecordIter((0),G__1357__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4165__auto__){
var self__ = this;
var this__4165__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4174__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4166__auto__){
var self__ = this;
var this__4166__auto____$1 = this;
var h__4028__auto__ = self__.__hash;
if(!((h__4028__auto__ == null))){
return h__4028__auto__;
} else {
var h__4028__auto____$1 = ((function (h__4028__auto__,this__4166__auto____$1){
return (function (coll__4167__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll.call(null,coll__4167__auto__));
});})(h__4028__auto__,this__4166__auto____$1))
.call(null,this__4166__auto____$1);
self__.__hash = h__4028__auto____$1;

return h__4028__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1359,other1360){
var self__ = this;
var this1359__$1 = this;
return ((!((other1360 == null))) && ((this1359__$1.constructor === other1360.constructor)) && (cljs.core._EQ_.call(null,this1359__$1.identifier,other1360.identifier)) && (cljs.core._EQ_.call(null,this1359__$1.value,other1360.value)) && (cljs.core._EQ_.call(null,this1359__$1.__extmap,other1360.__extmap)));
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4179__auto__,k__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__4180__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4179__auto____$1),self__.__meta),k__4180__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4180__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4177__auto__,k__4178__auto__,G__1357){
var self__ = this;
var this__4177__auto____$1 = this;
var pred__1363 = cljs.core.keyword_identical_QMARK_;
var expr__1364 = k__4178__auto__;
if(cljs.core.truth_(pred__1363.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__1364))){
return (new garden.types.CSSAtRule(G__1357,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1363.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__1364))){
return (new garden.types.CSSAtRule(self__.identifier,G__1357,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4178__auto__,G__1357),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4182__auto__){
var self__ = this;
var this__4182__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4169__auto__,G__1357){
var self__ = this;
var this__4169__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__1357,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4175__auto__,entry__4176__auto__){
var self__ = this;
var this__4175__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4176__auto__)){
return this__4175__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4176__auto__,(0)),cljs.core._nth.call(null,entry__4176__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4175__auto____$1,entry__4176__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4206__auto__){
return (new cljs.core.List(null,"garden.types/CSSAtRule",null,(1),null));
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4206__auto__,writer__4207__auto__){
return cljs.core._write.call(null,writer__4207__auto__,"garden.types/CSSAtRule");
});

/**
 * Positional factory function for garden.types/CSSAtRule.
 */
garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for garden.types/CSSAtRule, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__1361){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__1361),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__1361),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__1361,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217))),null));
});

