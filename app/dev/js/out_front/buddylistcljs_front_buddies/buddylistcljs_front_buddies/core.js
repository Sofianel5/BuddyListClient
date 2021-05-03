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
buddylistcljs_front_buddies.core._STAR_user_STAR_ = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
buddylistcljs_front_buddies.core.EVENTCHANNEL = cljs.core.async.chan.call(null);
buddylistcljs_front_buddies.core.EVENTS = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buddy-clicked","buddy-clicked",-452890766),(function (username){
return buddylistcljs_front_buddies.core.ipc_renderer.send("buddies:selected",username);
}),new cljs.core.Keyword(null,"status-updated","status-updated",476359058),(function (new_status){
cljs.core.println.call(null,"sending new-status",new_status);

return buddylistcljs_front_buddies.core.ipc_renderer.send("buddies:new-status",new_status);
})], null);
var c__19683__auto___20136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19683__auto___20136){
return (function (){
var f__19684__auto__ = (function (){var switch__19662__auto__ = ((function (c__19683__auto___20136){
return (function (state_20123){
var state_val_20124 = (state_20123[(1)]);
if((state_val_20124 === (1))){
var state_20123__$1 = state_20123;
var statearr_20125_20137 = state_20123__$1;
(statearr_20125_20137[(2)] = null);

(statearr_20125_20137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (2))){
var state_20123__$1 = state_20123;
var statearr_20126_20138 = state_20123__$1;
(statearr_20126_20138[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (3))){
var inst_20121 = (state_20123[(2)]);
var state_20123__$1 = state_20123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20123__$1,inst_20121);
} else {
if((state_val_20124 === (4))){
var state_20123__$1 = state_20123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20123__$1,(7),buddylistcljs_front_buddies.core.EVENTCHANNEL);
} else {
if((state_val_20124 === (5))){
var state_20123__$1 = state_20123;
var statearr_20128_20139 = state_20123__$1;
(statearr_20128_20139[(2)] = null);

(statearr_20128_20139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (6))){
var inst_20119 = (state_20123[(2)]);
var state_20123__$1 = state_20123;
var statearr_20129_20140 = state_20123__$1;
(statearr_20129_20140[(2)] = inst_20119);

(statearr_20129_20140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (7))){
var inst_20111 = (state_20123[(2)]);
var inst_20112 = cljs.core.nth.call(null,inst_20111,(0),null);
var inst_20113 = cljs.core.nth.call(null,inst_20111,(1),null);
var inst_20114 = inst_20112.call(null,buddylistcljs_front_buddies.core.EVENTS);
var inst_20115 = inst_20114.call(null,inst_20113);
var state_20123__$1 = (function (){var statearr_20130 = state_20123;
(statearr_20130[(7)] = inst_20115);

return statearr_20130;
})();
var statearr_20131_20141 = state_20123__$1;
(statearr_20131_20141[(2)] = null);

(statearr_20131_20141[(1)] = (2));


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
});})(c__19683__auto___20136))
;
return ((function (switch__19662__auto__,c__19683__auto___20136){
return (function() {
var buddylistcljs_front_buddies$core$state_machine__19663__auto__ = null;
var buddylistcljs_front_buddies$core$state_machine__19663__auto____0 = (function (){
var statearr_20132 = [null,null,null,null,null,null,null,null];
(statearr_20132[(0)] = buddylistcljs_front_buddies$core$state_machine__19663__auto__);

(statearr_20132[(1)] = (1));

return statearr_20132;
});
var buddylistcljs_front_buddies$core$state_machine__19663__auto____1 = (function (state_20123){
while(true){
var ret_value__19664__auto__ = (function (){try{while(true){
var result__19665__auto__ = switch__19662__auto__.call(null,state_20123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19665__auto__;
}
break;
}
}catch (e20133){if((e20133 instanceof Object)){
var ex__19666__auto__ = e20133;
var statearr_20134_20142 = state_20123;
(statearr_20134_20142[(5)] = ex__19666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20143 = state_20123;
state_20123 = G__20143;
continue;
} else {
return ret_value__19664__auto__;
}
break;
}
});
buddylistcljs_front_buddies$core$state_machine__19663__auto__ = function(state_20123){
switch(arguments.length){
case 0:
return buddylistcljs_front_buddies$core$state_machine__19663__auto____0.call(this);
case 1:
return buddylistcljs_front_buddies$core$state_machine__19663__auto____1.call(this,state_20123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs_front_buddies$core$state_machine__19663__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs_front_buddies$core$state_machine__19663__auto____0;
buddylistcljs_front_buddies$core$state_machine__19663__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs_front_buddies$core$state_machine__19663__auto____1;
return buddylistcljs_front_buddies$core$state_machine__19663__auto__;
})()
;})(switch__19662__auto__,c__19683__auto___20136))
})();
var state__19685__auto__ = (function (){var statearr_20135 = f__19684__auto__.call(null);
(statearr_20135[(6)] = c__19683__auto___20136);

return statearr_20135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19685__auto__);
});})(c__19683__auto___20136))
);

buddylistcljs_front_buddies.core.ipc_renderer.on("buddies",(function (_,message){
var parsed = JSON.parse(message);
var buddies = cljs.core.js__GT_clj.call(null,parsed,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
console.log(buddies);

console.log(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,buddies)));

return cljs.core.reset_BANG_.call(null,buddylistcljs_front_buddies.core.state,buddies);
}));
buddylistcljs_front_buddies.core.ipc_renderer.on("user",(function (_,user_str){
cljs.core.println.call(null,"received user-str",user_str);

cljs.core.reset_BANG_.call(null,buddylistcljs_front_buddies.core._STAR_user_STAR_,cljs.core.js__GT_clj.call(null,JSON.parse(user_str),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));

return cljs.core.println.call(null,"parsed",cljs.core.deref.call(null,buddylistcljs_front_buddies.core._STAR_user_STAR_),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs_front_buddies.core._STAR_user_STAR_)),cljs.core.get.call(null,cljs.core.deref.call(null,buddylistcljs_front_buddies.core._STAR_user_STAR_),"username"));
}));
buddylistcljs_front_buddies.core.buddies_list = (function buddylistcljs_front_buddies$core$buddies_list(event_channel,buddies){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddies-list"], null),(function (){var iter__4290__auto__ = (function buddylistcljs_front_buddies$core$buddies_list_$_iter__20144(s__20145){
return (new cljs.core.LazySeq(null,(function (){
var s__20145__$1 = s__20145;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20145__$1);
if(temp__4657__auto__){
var s__20145__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20145__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__20145__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__20147 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__20146 = (0);
while(true){
if((i__20146 < size__4289__auto__)){
var buddy = cljs.core._nth.call(null,c__4288__auto__,i__20146);
cljs.core.chunk_append.call(null,b__20147,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddy-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20146,buddy,c__4288__auto__,size__4289__auto__,b__20147,s__20145__$2,temp__4657__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buddy-clicked","buddy-clicked",-452890766),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null));
});})(i__20146,buddy,c__4288__auto__,size__4289__auto__,b__20147,s__20145__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null),((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy),null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Offline"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null)));

var G__20148 = (i__20146 + (1));
i__20146 = G__20148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20147),buddylistcljs_front_buddies$core$buddies_list_$_iter__20144.call(null,cljs.core.chunk_rest.call(null,s__20145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20147),null);
}
} else {
var buddy = cljs.core.first.call(null,s__20145__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddy-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (buddy,s__20145__$2,temp__4657__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buddy-clicked","buddy-clicked",-452890766),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null));
});})(buddy,s__20145__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null),((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy),null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Offline"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null)),buddylistcljs_front_buddies$core$buddies_list_$_iter__20144.call(null,cljs.core.rest.call(null,s__20145__$2)));
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
buddylistcljs_front_buddies.core.on_new_status_submit = (function buddylistcljs_front_buddies$core$on_new_status_submit(e,event_channel){
e.preventDefault();

return buddylistcljs_front_buddies.core.ipc_renderer.send("buddies:new-status",document.getElementById("new-status-input").value);
});
buddylistcljs_front_buddies.core.status_update = (function buddylistcljs_front_buddies$core$status_update(event_channel){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"status-updater"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__20149_SHARP_){
return buddylistcljs_front_buddies.core.on_new_status_submit.call(null,p1__20149_SHARP_,event_channel);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-status-input"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null)], null)], null)], null);
});
buddylistcljs_front_buddies.core.root_component = (function buddylistcljs_front_buddies$core$root_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs_front_buddies.core._STAR_user_STAR_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs_front_buddies.core._STAR_user_STAR_)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_buddies.core.status_update,buddylistcljs_front_buddies.core.EVENTCHANNEL], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_buddies.core.buddies_list,buddylistcljs_front_buddies.core.EVENTCHANNEL,cljs.core.deref.call(null,buddylistcljs_front_buddies.core.state)], null)], null);
});
buddylistcljs_front_buddies.core.mount_root = (function buddylistcljs_front_buddies$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_buddies.core.root_component], null),document.getElementById("app"));
});
buddylistcljs_front_buddies.core.init_BANG_ = (function buddylistcljs_front_buddies$core$init_BANG_(setting){
return buddylistcljs_front_buddies.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map
