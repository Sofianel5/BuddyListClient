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
var c__2082__auto___2158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2082__auto___2158){
return (function (){
var f__2083__auto__ = (function (){var switch__2061__auto__ = ((function (c__2082__auto___2158){
return (function (state_2145){
var state_val_2146 = (state_2145[(1)]);
if((state_val_2146 === (1))){
var state_2145__$1 = state_2145;
var statearr_2147_2159 = state_2145__$1;
(statearr_2147_2159[(2)] = null);

(statearr_2147_2159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2146 === (2))){
var state_2145__$1 = state_2145;
var statearr_2148_2160 = state_2145__$1;
(statearr_2148_2160[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2146 === (3))){
var inst_2143 = (state_2145[(2)]);
var state_2145__$1 = state_2145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2145__$1,inst_2143);
} else {
if((state_val_2146 === (4))){
var state_2145__$1 = state_2145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2145__$1,(7),buddylistcljs_front_buddies.core.EVENTCHANNEL);
} else {
if((state_val_2146 === (5))){
var state_2145__$1 = state_2145;
var statearr_2150_2161 = state_2145__$1;
(statearr_2150_2161[(2)] = null);

(statearr_2150_2161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2146 === (6))){
var inst_2141 = (state_2145[(2)]);
var state_2145__$1 = state_2145;
var statearr_2151_2162 = state_2145__$1;
(statearr_2151_2162[(2)] = inst_2141);

(statearr_2151_2162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2146 === (7))){
var inst_2133 = (state_2145[(2)]);
var inst_2134 = cljs.core.nth.call(null,inst_2133,(0),null);
var inst_2135 = cljs.core.nth.call(null,inst_2133,(1),null);
var inst_2136 = inst_2134.call(null,buddylistcljs_front_buddies.core.EVENTS);
var inst_2137 = inst_2136.call(null,inst_2135);
var state_2145__$1 = (function (){var statearr_2152 = state_2145;
(statearr_2152[(7)] = inst_2137);

return statearr_2152;
})();
var statearr_2153_2163 = state_2145__$1;
(statearr_2153_2163[(2)] = null);

(statearr_2153_2163[(1)] = (2));


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
});})(c__2082__auto___2158))
;
return ((function (switch__2061__auto__,c__2082__auto___2158){
return (function() {
var buddylistcljs_front_buddies$core$state_machine__2062__auto__ = null;
var buddylistcljs_front_buddies$core$state_machine__2062__auto____0 = (function (){
var statearr_2154 = [null,null,null,null,null,null,null,null];
(statearr_2154[(0)] = buddylistcljs_front_buddies$core$state_machine__2062__auto__);

(statearr_2154[(1)] = (1));

return statearr_2154;
});
var buddylistcljs_front_buddies$core$state_machine__2062__auto____1 = (function (state_2145){
while(true){
var ret_value__2063__auto__ = (function (){try{while(true){
var result__2064__auto__ = switch__2061__auto__.call(null,state_2145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2064__auto__;
}
break;
}
}catch (e2155){if((e2155 instanceof Object)){
var ex__2065__auto__ = e2155;
var statearr_2156_2164 = state_2145;
(statearr_2156_2164[(5)] = ex__2065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2165 = state_2145;
state_2145 = G__2165;
continue;
} else {
return ret_value__2063__auto__;
}
break;
}
});
buddylistcljs_front_buddies$core$state_machine__2062__auto__ = function(state_2145){
switch(arguments.length){
case 0:
return buddylistcljs_front_buddies$core$state_machine__2062__auto____0.call(this);
case 1:
return buddylistcljs_front_buddies$core$state_machine__2062__auto____1.call(this,state_2145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs_front_buddies$core$state_machine__2062__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs_front_buddies$core$state_machine__2062__auto____0;
buddylistcljs_front_buddies$core$state_machine__2062__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs_front_buddies$core$state_machine__2062__auto____1;
return buddylistcljs_front_buddies$core$state_machine__2062__auto__;
})()
;})(switch__2061__auto__,c__2082__auto___2158))
})();
var state__2084__auto__ = (function (){var statearr_2157 = f__2083__auto__.call(null);
(statearr_2157[(6)] = c__2082__auto___2158);

return statearr_2157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2084__auto__);
});})(c__2082__auto___2158))
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddies-list"], null),(function (){var iter__4290__auto__ = (function buddylistcljs_front_buddies$core$buddies_list_$_iter__2166(s__2167){
return (new cljs.core.LazySeq(null,(function (){
var s__2167__$1 = s__2167;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__2167__$1);
if(temp__4657__auto__){
var s__2167__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2167__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__2167__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__2169 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__2168 = (0);
while(true){
if((i__2168 < size__4289__auto__)){
var buddy = cljs.core._nth.call(null,c__4288__auto__,i__2168);
cljs.core.chunk_append.call(null,b__2169,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddy-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__2168,buddy,c__4288__auto__,size__4289__auto__,b__2169,s__2167__$2,temp__4657__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buddy-clicked","buddy-clicked",-452890766),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null));
});})(i__2168,buddy,c__4288__auto__,size__4289__auto__,b__2169,s__2167__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null),((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy),null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Offline"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null)));

var G__2170 = (i__2168 + (1));
i__2168 = G__2170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2169),buddylistcljs_front_buddies$core$buddies_list_$_iter__2166.call(null,cljs.core.chunk_rest.call(null,s__2167__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2169),null);
}
} else {
var buddy = cljs.core.first.call(null,s__2167__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"buddy-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (buddy,s__2167__$2,temp__4657__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buddy-clicked","buddy-clicked",-452890766),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null));
});})(buddy,s__2167__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null),((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy),null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(buddy)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Offline"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(buddy)], null)),buddylistcljs_front_buddies$core$buddies_list_$_iter__2166.call(null,cljs.core.rest.call(null,s__2167__$2)));
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

buddylistcljs_front_buddies.core.ipc_renderer.send("buddies:new-status",document.getElementById("new-status-input").value);

return document.getElementById("new-status-input").value = "";
});
buddylistcljs_front_buddies.core.status_update = (function buddylistcljs_front_buddies$core$status_update(event_channel){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"status-updater"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__2171_SHARP_){
return buddylistcljs_front_buddies.core.on_new_status_submit.call(null,p1__2171_SHARP_,event_channel);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-status-input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"New status"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null)], null)], null)], null);
});
buddylistcljs_front_buddies.core.on_add_buddy = (function buddylistcljs_front_buddies$core$on_add_buddy(event){
event.preventDefault();

return buddylistcljs_front_buddies.core.ipc_renderer.send("open-addbuddy");
});
buddylistcljs_front_buddies.core.open_add_buddy = (function buddylistcljs_front_buddies$core$open_add_buddy(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__2172_SHARP_){
return buddylistcljs_front_buddies.core.on_add_buddy.call(null,p1__2172_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Add Buddy"], null)], null)], null);
});
buddylistcljs_front_buddies.core.root_component = (function buddylistcljs_front_buddies$core$root_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs_front_buddies.core._STAR_user_STAR_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs_front_buddies.core._STAR_user_STAR_)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_buddies.core.status_update,buddylistcljs_front_buddies.core.EVENTCHANNEL], null),(cljs.core.truth_(cljs.core.deref.call(null,buddylistcljs_front_buddies.core.state))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_buddies.core.buddies_list,buddylistcljs_front_buddies.core.EVENTCHANNEL,cljs.core.deref.call(null,buddylistcljs_front_buddies.core.state)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading buddies..."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_buddies.core.open_add_buddy], null)], null);
});
buddylistcljs_front_buddies.core.mount_root = (function buddylistcljs_front_buddies$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_buddies.core.root_component], null),document.getElementById("app"));
});
buddylistcljs_front_buddies.core.init_BANG_ = (function buddylistcljs_front_buddies$core$init_BANG_(setting){
return buddylistcljs_front_buddies.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map
