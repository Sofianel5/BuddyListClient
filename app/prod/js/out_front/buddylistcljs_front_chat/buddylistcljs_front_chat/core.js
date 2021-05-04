// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('buddylistcljs_front_chat.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
buddylistcljs_front_chat.core.Electron = cljs.nodejs.require.call(null,"electron");
buddylistcljs_front_chat.core.ipc_renderer = buddylistcljs_front_chat.core.Electron.ipcRenderer;
if(typeof buddylistcljs_front_chat.core.state !== 'undefined'){
} else {
buddylistcljs_front_chat.core.state = reagent.core.atom.call(null,null);
}
buddylistcljs_front_chat.core.EVENTCHANNEL = cljs.core.async.chan.call(null);
buddylistcljs_front_chat.core.EVENTS = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buddy-clicked","buddy-clicked",-452890766),(function (username){
return buddylistcljs_front_chat.core.ipc_renderer.send("buddies:selected",username);
})], null);
var c__6387__auto___11198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6387__auto___11198){
return (function (){
var f__6388__auto__ = (function (){var switch__6232__auto__ = ((function (c__6387__auto___11198){
return (function (state_11185){
var state_val_11186 = (state_11185[(1)]);
if((state_val_11186 === (1))){
var state_11185__$1 = state_11185;
var statearr_11187_11199 = state_11185__$1;
(statearr_11187_11199[(2)] = null);

(statearr_11187_11199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (2))){
var state_11185__$1 = state_11185;
var statearr_11188_11200 = state_11185__$1;
(statearr_11188_11200[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (3))){
var inst_11183 = (state_11185[(2)]);
var state_11185__$1 = state_11185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11185__$1,inst_11183);
} else {
if((state_val_11186 === (4))){
var state_11185__$1 = state_11185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11185__$1,(7),buddylistcljs_front_chat.core.EVENTCHANNEL);
} else {
if((state_val_11186 === (5))){
var state_11185__$1 = state_11185;
var statearr_11190_11201 = state_11185__$1;
(statearr_11190_11201[(2)] = null);

(statearr_11190_11201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (6))){
var inst_11181 = (state_11185[(2)]);
var state_11185__$1 = state_11185;
var statearr_11191_11202 = state_11185__$1;
(statearr_11191_11202[(2)] = inst_11181);

(statearr_11191_11202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (7))){
var inst_11173 = (state_11185[(2)]);
var inst_11174 = cljs.core.nth.call(null,inst_11173,(0),null);
var inst_11175 = cljs.core.nth.call(null,inst_11173,(1),null);
var inst_11176 = inst_11174.call(null,buddylistcljs_front_chat.core.EVENTS);
var inst_11177 = inst_11176.call(null,inst_11175);
var state_11185__$1 = (function (){var statearr_11192 = state_11185;
(statearr_11192[(7)] = inst_11177);

return statearr_11192;
})();
var statearr_11193_11203 = state_11185__$1;
(statearr_11193_11203[(2)] = null);

(statearr_11193_11203[(1)] = (2));


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
});})(c__6387__auto___11198))
;
return ((function (switch__6232__auto__,c__6387__auto___11198){
return (function() {
var buddylistcljs_front_chat$core$state_machine__6233__auto__ = null;
var buddylistcljs_front_chat$core$state_machine__6233__auto____0 = (function (){
var statearr_11194 = [null,null,null,null,null,null,null,null];
(statearr_11194[(0)] = buddylistcljs_front_chat$core$state_machine__6233__auto__);

(statearr_11194[(1)] = (1));

return statearr_11194;
});
var buddylistcljs_front_chat$core$state_machine__6233__auto____1 = (function (state_11185){
while(true){
var ret_value__6234__auto__ = (function (){try{while(true){
var result__6235__auto__ = switch__6232__auto__.call(null,state_11185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6235__auto__;
}
break;
}
}catch (e11195){if((e11195 instanceof Object)){
var ex__6236__auto__ = e11195;
var statearr_11196_11204 = state_11185;
(statearr_11196_11204[(5)] = ex__6236__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11205 = state_11185;
state_11185 = G__11205;
continue;
} else {
return ret_value__6234__auto__;
}
break;
}
});
buddylistcljs_front_chat$core$state_machine__6233__auto__ = function(state_11185){
switch(arguments.length){
case 0:
return buddylistcljs_front_chat$core$state_machine__6233__auto____0.call(this);
case 1:
return buddylistcljs_front_chat$core$state_machine__6233__auto____1.call(this,state_11185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs_front_chat$core$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs_front_chat$core$state_machine__6233__auto____0;
buddylistcljs_front_chat$core$state_machine__6233__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs_front_chat$core$state_machine__6233__auto____1;
return buddylistcljs_front_chat$core$state_machine__6233__auto__;
})()
;})(switch__6232__auto__,c__6387__auto___11198))
})();
var state__6389__auto__ = (function (){var statearr_11197 = f__6388__auto__.call(null);
(statearr_11197[(6)] = c__6387__auto___11198);

return statearr_11197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6389__auto__);
});})(c__6387__auto___11198))
);

buddylistcljs_front_chat.core.ipc_renderer.on("",(function (event,message){
return cljs.core.println.call(null,event,message);
}));
buddylistcljs_front_chat.core.root_component = (function buddylistcljs_front_chat$core$root_component(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
buddylistcljs_front_chat.core.mount_root = (function buddylistcljs_front_chat$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_chat.core.root_component], null),document.getElementById("app"));
});
buddylistcljs_front_chat.core.init_BANG_ = (function buddylistcljs_front_chat$core$init_BANG_(setting){
return buddylistcljs_front_chat.core.mount_root.call(null,setting);
});
