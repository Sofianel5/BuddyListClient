// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('wscljs.format');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
 * Protocol used to define encoding format for socket messages.
 * @interface
 */
wscljs.format.Format = function(){};

wscljs.format.read = (function wscljs$format$read(formatter,string){
if(((!((formatter == null))) && (!((formatter.wscljs$format$Format$read$arity$2 == null))))){
return formatter.wscljs$format$Format$read$arity$2(formatter,string);
} else {
var x__4209__auto__ = (((formatter == null))?null:formatter);
var m__4210__auto__ = (wscljs.format.read[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,formatter,string);
} else {
var m__4210__auto____$1 = (wscljs.format.read["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,formatter,string);
} else {
throw cljs.core.missing_protocol.call(null,"Format.read",formatter);
}
}
}
});

wscljs.format.write = (function wscljs$format$write(formatter,value){
if(((!((formatter == null))) && (!((formatter.wscljs$format$Format$write$arity$2 == null))))){
return formatter.wscljs$format$Format$write$arity$2(formatter,value);
} else {
var x__4209__auto__ = (((formatter == null))?null:formatter);
var m__4210__auto__ = (wscljs.format.write[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,formatter,value);
} else {
var m__4210__auto____$1 = (wscljs.format.write["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,formatter,value);
} else {
throw cljs.core.missing_protocol.call(null,"Format.write",formatter);
}
}
}
});

/**
 * The identity formatter. Does nothing to the input or output.
 */
wscljs.format.identity = (function (){
if(typeof wscljs.format.t_wscljs$format1604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format1604 = (function (meta1605){
this.meta1605 = meta1605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
wscljs.format.t_wscljs$format1604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1606,meta1605__$1){
var self__ = this;
var _1606__$1 = this;
return (new wscljs.format.t_wscljs$format1604(meta1605__$1));
});

wscljs.format.t_wscljs$format1604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1606){
var self__ = this;
var _1606__$1 = this;
return self__.meta1605;
});

wscljs.format.t_wscljs$format1604.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL;

wscljs.format.t_wscljs$format1604.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return s;
});

wscljs.format.t_wscljs$format1604.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return v;
});

wscljs.format.t_wscljs$format1604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1605","meta1605",-714126229,null)], null);
});

wscljs.format.t_wscljs$format1604.cljs$lang$type = true;

wscljs.format.t_wscljs$format1604.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format1604";

wscljs.format.t_wscljs$format1604.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"wscljs.format/t_wscljs$format1604");
});

/**
 * Positional factory function for wscljs.format/t_wscljs$format1604.
 */
wscljs.format.__GT_t_wscljs$format1604 = (function wscljs$format$__GT_t_wscljs$format1604(meta1605){
return (new wscljs.format.t_wscljs$format1604(meta1605));
});

}

return (new wscljs.format.t_wscljs$format1604(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data encoded in JSON.
 */
wscljs.format.json = (function (){
if(typeof wscljs.format.t_wscljs$format1607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format1607 = (function (meta1608){
this.meta1608 = meta1608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
wscljs.format.t_wscljs$format1607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1609,meta1608__$1){
var self__ = this;
var _1609__$1 = this;
return (new wscljs.format.t_wscljs$format1607(meta1608__$1));
});

wscljs.format.t_wscljs$format1607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1609){
var self__ = this;
var _1609__$1 = this;
return self__.meta1608;
});

wscljs.format.t_wscljs$format1607.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL;

wscljs.format.t_wscljs$format1607.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

wscljs.format.t_wscljs$format1607.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,v));
});

wscljs.format.t_wscljs$format1607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1608","meta1608",1087469814,null)], null);
});

wscljs.format.t_wscljs$format1607.cljs$lang$type = true;

wscljs.format.t_wscljs$format1607.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format1607";

wscljs.format.t_wscljs$format1607.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"wscljs.format/t_wscljs$format1607");
});

/**
 * Positional factory function for wscljs.format/t_wscljs$format1607.
 */
wscljs.format.__GT_t_wscljs$format1607 = (function wscljs$format$__GT_t_wscljs$format1607(meta1608){
return (new wscljs.format.t_wscljs$format1607(meta1608));
});

}

return (new wscljs.format.t_wscljs$format1607(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data serialized as EDN.
 */
wscljs.format.edn = (function (){
if(typeof wscljs.format.t_wscljs$format1610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format1610 = (function (meta1611){
this.meta1611 = meta1611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
wscljs.format.t_wscljs$format1610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1612,meta1611__$1){
var self__ = this;
var _1612__$1 = this;
return (new wscljs.format.t_wscljs$format1610(meta1611__$1));
});

wscljs.format.t_wscljs$format1610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1612){
var self__ = this;
var _1612__$1 = this;
return self__.meta1611;
});

wscljs.format.t_wscljs$format1610.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL;

wscljs.format.t_wscljs$format1610.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.reader.read_string.call(null,s);
});

wscljs.format.t_wscljs$format1610.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.prn_str.call(null,v);
});

wscljs.format.t_wscljs$format1610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1611","meta1611",439873381,null)], null);
});

wscljs.format.t_wscljs$format1610.cljs$lang$type = true;

wscljs.format.t_wscljs$format1610.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format1610";

wscljs.format.t_wscljs$format1610.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"wscljs.format/t_wscljs$format1610");
});

/**
 * Positional factory function for wscljs.format/t_wscljs$format1610.
 */
wscljs.format.__GT_t_wscljs$format1610 = (function wscljs$format$__GT_t_wscljs$format1610(meta1611){
return (new wscljs.format.t_wscljs$format1610(meta1611));
});

}

return (new wscljs.format.t_wscljs$format1610(cljs.core.PersistentArrayMap.EMPTY));
})()
;
