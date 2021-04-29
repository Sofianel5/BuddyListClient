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
var c__2950__auto___4459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto___4459){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto___4459){
return (function (state_4446){
var state_val_4447 = (state_4446[(1)]);
if((state_val_4447 === (1))){
var state_4446__$1 = state_4446;
var statearr_4448_4460 = state_4446__$1;
(statearr_4448_4460[(2)] = null);

(statearr_4448_4460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4447 === (2))){
var state_4446__$1 = state_4446;
var statearr_4449_4461 = state_4446__$1;
(statearr_4449_4461[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4447 === (3))){
var inst_4444 = (state_4446[(2)]);
var state_4446__$1 = state_4446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4446__$1,inst_4444);
} else {
if((state_val_4447 === (4))){
var state_4446__$1 = state_4446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4446__$1,(7),buddylistcljs_front_buddies.core.EVENTCHANNEL);
} else {
if((state_val_4447 === (5))){
var state_4446__$1 = state_4446;
var statearr_4451_4462 = state_4446__$1;
(statearr_4451_4462[(2)] = null);

(statearr_4451_4462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4447 === (6))){
var inst_4442 = (state_4446[(2)]);
var state_4446__$1 = state_4446;
var statearr_4452_4463 = state_4446__$1;
(statearr_4452_4463[(2)] = inst_4442);

(statearr_4452_4463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4447 === (7))){
var inst_4434 = (state_4446[(2)]);
var inst_4435 = cljs.core.nth.call(null,inst_4434,(0),null);
var inst_4436 = cljs.core.nth.call(null,inst_4434,(1),null);
var inst_4437 = inst_4435.call(null,buddylistcljs_front_buddies.core.EVENTS);
var inst_4438 = inst_4437.call(null,inst_4436);
var state_4446__$1 = (function (){var statearr_4453 = state_4446;
(statearr_4453[(7)] = inst_4438);

return statearr_4453;
})();
var statearr_4454_4464 = state_4446__$1;
(statearr_4454_4464[(2)] = null);

(statearr_4454_4464[(1)] = (2));


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
});})(c__2950__auto___4459))
;
return ((function (switch__2906__auto__,c__2950__auto___4459){
return (function() {
var buddylistcljs_front_buddies$core$state_machine__2907__auto__ = null;
var buddylistcljs_front_buddies$core$state_machine__2907__auto____0 = (function (){
var statearr_4455 = [null,null,null,null,null,null,null,null];
(statearr_4455[(0)] = buddylistcljs_front_buddies$core$state_machine__2907__auto__);

(statearr_4455[(1)] = (1));

return statearr_4455;
});
var buddylistcljs_front_buddies$core$state_machine__2907__auto____1 = (function (state_4446){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_4446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e4456){if((e4456 instanceof Object)){
var ex__2910__auto__ = e4456;
var statearr_4457_4465 = state_4446;
(statearr_4457_4465[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4466 = state_4446;
state_4446 = G__4466;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
buddylistcljs_front_buddies$core$state_machine__2907__auto__ = function(state_4446){
switch(arguments.length){
case 0:
return buddylistcljs_front_buddies$core$state_machine__2907__auto____0.call(this);
case 1:
return buddylistcljs_front_buddies$core$state_machine__2907__auto____1.call(this,state_4446);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs_front_buddies$core$state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs_front_buddies$core$state_machine__2907__auto____0;
buddylistcljs_front_buddies$core$state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs_front_buddies$core$state_machine__2907__auto____1;
return buddylistcljs_front_buddies$core$state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto___4459))
})();
var state__2952__auto__ = (function (){var statearr_4458 = f__2951__auto__.call(null);
(statearr_4458[(6)] = c__2950__auto___4459);

return statearr_4458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto___4459))
);

buddylistcljs_front_buddies.core.ipc_renderer.on("buddies",(function (buddies){
return cljs.core.reset_BANG_.call(null,buddylistcljs_front_buddies.core.state,buddies);
}));
buddylistcljs_front_buddies.core.buddies_list = (function buddylistcljs_front_buddies$core$buddies_list(event_channel,buddies){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddies-list"], null),(function (){var iter__4290__auto__ = (function buddylistcljs_front_buddies$core$buddies_list_$_iter__4467(s__4468){
return (new cljs.core.LazySeq(null,(function (){
var s__4468__$1 = s__4468;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__4468__$1);
if(temp__4657__auto__){
var s__4468__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4468__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__4468__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__4470 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__4469 = (0);
while(true){
if((i__4469 < size__4289__auto__)){
var buddy = cljs.core._nth.call(null,c__4288__auto__,i__4469);
cljs.core.chunk_append.call(null,b__4470,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddy-item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null),((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy),null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null)));

var G__4471 = (i__4469 + (1));
i__4469 = G__4471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4470),buddylistcljs_front_buddies$core$buddies_list_$_iter__4467.call(null,cljs.core.chunk_rest.call(null,s__4468__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4470),null);
}
} else {
var buddy = cljs.core.first.call(null,s__4468__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddy-item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null),((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy),null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null)),buddylistcljs_front_buddies$core$buddies_list_$_iter__4467.call(null,cljs.core.rest.call(null,s__4468__$2)));
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
