// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('buddylistcljs_front_buddies.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
buddylistcljs_front_buddies.core.Electron = cljs.nodejs.require.call(null,"electron");
buddylistcljs_front_buddies.core.ipc_renderer = buddylistcljs_front_buddies.core.Electron.ipcRenderer;
if(typeof buddylistcljs_front_buddies.core.state !== 'undefined'){
} else {
buddylistcljs_front_buddies.core.state = reagent.core.atom.call(null,null);
}
buddylistcljs_front_buddies.core.EVENTCHANNEL = cljs.core.async.chan.call(null);
buddylistcljs_front_buddies.core.EVENTS = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buddy-clicked","buddy-clicked",-452890766),(function (username){
return buddylistcljs_front_buddies.core.ipc_renderer.send("buddies:selected",username);
})], null);
var c__19684__auto___20364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19684__auto___20364){
return (function (){
var f__19685__auto__ = (function (){var switch__19663__auto__ = ((function (c__19684__auto___20364){
return (function (state_20351){
var state_val_20352 = (state_20351[(1)]);
if((state_val_20352 === (1))){
var state_20351__$1 = state_20351;
var statearr_20353_20365 = state_20351__$1;
(statearr_20353_20365[(2)] = null);

(statearr_20353_20365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (2))){
var state_20351__$1 = state_20351;
var statearr_20354_20366 = state_20351__$1;
(statearr_20354_20366[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (3))){
var inst_20349 = (state_20351[(2)]);
var state_20351__$1 = state_20351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20351__$1,inst_20349);
} else {
if((state_val_20352 === (4))){
var state_20351__$1 = state_20351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20351__$1,(7),buddylistcljs_front_buddies.core.EVENTCHANNEL);
} else {
if((state_val_20352 === (5))){
var state_20351__$1 = state_20351;
var statearr_20356_20367 = state_20351__$1;
(statearr_20356_20367[(2)] = null);

(statearr_20356_20367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (6))){
var inst_20347 = (state_20351[(2)]);
var state_20351__$1 = state_20351;
var statearr_20357_20368 = state_20351__$1;
(statearr_20357_20368[(2)] = inst_20347);

(statearr_20357_20368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (7))){
var inst_20339 = (state_20351[(2)]);
var inst_20340 = cljs.core.nth.call(null,inst_20339,(0),null);
var inst_20341 = cljs.core.nth.call(null,inst_20339,(1),null);
var inst_20342 = inst_20340.call(null,buddylistcljs_front_buddies.core.EVENTS);
var inst_20343 = inst_20342.call(null,inst_20341);
var state_20351__$1 = (function (){var statearr_20358 = state_20351;
(statearr_20358[(7)] = inst_20343);

return statearr_20358;
})();
var statearr_20359_20369 = state_20351__$1;
(statearr_20359_20369[(2)] = null);

(statearr_20359_20369[(1)] = (2));


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
});})(c__19684__auto___20364))
;
return ((function (switch__19663__auto__,c__19684__auto___20364){
return (function() {
var buddylistcljs_front_buddies$core$state_machine__19664__auto__ = null;
var buddylistcljs_front_buddies$core$state_machine__19664__auto____0 = (function (){
var statearr_20360 = [null,null,null,null,null,null,null,null];
(statearr_20360[(0)] = buddylistcljs_front_buddies$core$state_machine__19664__auto__);

(statearr_20360[(1)] = (1));

return statearr_20360;
});
var buddylistcljs_front_buddies$core$state_machine__19664__auto____1 = (function (state_20351){
while(true){
var ret_value__19665__auto__ = (function (){try{while(true){
var result__19666__auto__ = switch__19663__auto__.call(null,state_20351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19666__auto__;
}
break;
}
}catch (e20361){if((e20361 instanceof Object)){
var ex__19667__auto__ = e20361;
var statearr_20362_20370 = state_20351;
(statearr_20362_20370[(5)] = ex__19667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20371 = state_20351;
state_20351 = G__20371;
continue;
} else {
return ret_value__19665__auto__;
}
break;
}
});
buddylistcljs_front_buddies$core$state_machine__19664__auto__ = function(state_20351){
switch(arguments.length){
case 0:
return buddylistcljs_front_buddies$core$state_machine__19664__auto____0.call(this);
case 1:
return buddylistcljs_front_buddies$core$state_machine__19664__auto____1.call(this,state_20351);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs_front_buddies$core$state_machine__19664__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs_front_buddies$core$state_machine__19664__auto____0;
buddylistcljs_front_buddies$core$state_machine__19664__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs_front_buddies$core$state_machine__19664__auto____1;
return buddylistcljs_front_buddies$core$state_machine__19664__auto__;
})()
;})(switch__19663__auto__,c__19684__auto___20364))
})();
var state__19686__auto__ = (function (){var statearr_20363 = f__19685__auto__.call(null);
(statearr_20363[(6)] = c__19684__auto___20364);

return statearr_20363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19686__auto__);
});})(c__19684__auto___20364))
);

buddylistcljs_front_buddies.core.ipc_renderer.on("buddies",(function (event,message){
console.log("ipc-render recieved");

var parsed = JSON.parse(message);
var buddies = cljs.core.js__GT_clj.call(null,parsed,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
console.log(buddies);

console.log(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,buddies)));

return cljs.core.reset_BANG_.call(null,buddylistcljs_front_buddies.core.state,buddies);
}));
buddylistcljs_front_buddies.core.buddies_list = (function buddylistcljs_front_buddies$core$buddies_list(event_channel,buddies){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddies-list"], null),(function (){var iter__4290__auto__ = (function buddylistcljs_front_buddies$core$buddies_list_$_iter__20372(s__20373){
return (new cljs.core.LazySeq(null,(function (){
var s__20373__$1 = s__20373;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20373__$1);
if(temp__4657__auto__){
var s__20373__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20373__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__20373__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__20375 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__20374 = (0);
while(true){
if((i__20374 < size__4289__auto__)){
var buddy = cljs.core._nth.call(null,c__4288__auto__,i__20374);
cljs.core.chunk_append.call(null,b__20375,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddy-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20374,buddy,c__4288__auto__,size__4289__auto__,b__20375,s__20373__$2,temp__4657__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buddy-clicked","buddy-clicked",-452890766),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null));
});})(i__20374,buddy,c__4288__auto__,size__4289__auto__,b__20375,s__20373__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null),((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy),null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Offline"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null)));

var G__20376 = (i__20374 + (1));
i__20374 = G__20376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20375),buddylistcljs_front_buddies$core$buddies_list_$_iter__20372.call(null,cljs.core.chunk_rest.call(null,s__20373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20375),null);
}
} else {
var buddy = cljs.core.first.call(null,s__20373__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddy-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (buddy,s__20373__$2,temp__4657__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buddy-clicked","buddy-clicked",-452890766),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null));
});})(buddy,s__20373__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null),((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy),null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Offline"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null)),buddylistcljs_front_buddies$core$buddies_list_$_iter__20372.call(null,cljs.core.rest.call(null,s__20373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4290__auto__.call(null,buddies);
})()], null);
});
buddylistcljs_front_buddies.core.root_component = (function buddylistcljs_front_buddies$core$root_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_buddies.core.buddies_list,buddylistcljs_front_buddies.core.EVENTCHANNEL,cljs.core.deref.call(null,buddylistcljs_front_buddies.core.state)], null)], null);
});
buddylistcljs_front_buddies.core.mount_root = (function buddylistcljs_front_buddies$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_buddies.core.root_component], null),document.getElementById("app"));
});
buddylistcljs_front_buddies.core.init_BANG_ = (function buddylistcljs_front_buddies$core$init_BANG_(setting){
return buddylistcljs_front_buddies.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map
