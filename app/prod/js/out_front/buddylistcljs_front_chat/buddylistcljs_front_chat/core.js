// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('buddylistcljs_front_chat.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
buddylistcljs_front_chat.core.Electron = cljs.nodejs.require.call(null,"electron");
/**
 * Parse URL parameters into a hashmap
 */
buddylistcljs_front_chat.core.parse_url = (function buddylistcljs_front_chat$core$parse_url(s){
var param_strs = clojure.string.split.call(null,cljs.core.last.call(null,clojure.string.split.call(null,s,/\?/)),/\&/);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4290__auto__ = ((function (param_strs){
return (function buddylistcljs_front_chat$core$parse_url_$_iter__4429(s__4430){
return (new cljs.core.LazySeq(null,((function (param_strs){
return (function (){
var s__4430__$1 = s__4430;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__4430__$1);
if(temp__4657__auto__){
var s__4430__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4430__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__4430__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__4432 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__4431 = (0);
while(true){
if((i__4431 < size__4289__auto__)){
var vec__4433 = cljs.core._nth.call(null,c__4288__auto__,i__4431);
var k = cljs.core.nth.call(null,vec__4433,(0),null);
var v = cljs.core.nth.call(null,vec__4433,(1),null);
cljs.core.chunk_append.call(null,b__4432,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null));

var G__4439 = (i__4431 + (1));
i__4431 = G__4439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4432),buddylistcljs_front_chat$core$parse_url_$_iter__4429.call(null,cljs.core.chunk_rest.call(null,s__4430__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4432),null);
}
} else {
var vec__4436 = cljs.core.first.call(null,s__4430__$2);
var k = cljs.core.nth.call(null,vec__4436,(0),null);
var v = cljs.core.nth.call(null,vec__4436,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null),buddylistcljs_front_chat$core$parse_url_$_iter__4429.call(null,cljs.core.rest.call(null,s__4430__$2)));
}
} else {
return null;
}
break;
}
});})(param_strs))
,null,null));
});})(param_strs))
;
return iter__4290__auto__.call(null,cljs.core.map.call(null,((function (iter__4290__auto__,param_strs){
return (function (p1__4428_SHARP_){
return clojure.string.split.call(null,p1__4428_SHARP_,/=/);
});})(iter__4290__auto__,param_strs))
,param_strs));
})());
});
buddylistcljs_front_chat.core.data = buddylistcljs_front_chat.core.parse_url.call(null,global.location.search);
buddylistcljs_front_chat.core.ipc_renderer = buddylistcljs_front_chat.core.Electron.ipcRenderer;
if(typeof buddylistcljs_front_chat.core.state !== 'undefined'){
} else {
buddylistcljs_front_chat.core.state = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
buddylistcljs_front_chat.core.EVENTCHANNEL = cljs.core.async.chan.call(null);
buddylistcljs_front_chat.core.EVENTS = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message-sent","message-sent",1107637548),(function (message){
return buddylistcljs_front_chat.core.ipc_renderer.send("chat:sent",new cljs.core.Keyword(null,"with-user","with-user",1719589037).cljs$core$IFn$_invoke$arity$1(buddylistcljs_front_chat.core.data),message);
})], null);
var c__2950__auto___4471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto___4471){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto___4471){
return (function (state_4458){
var state_val_4459 = (state_4458[(1)]);
if((state_val_4459 === (1))){
var state_4458__$1 = state_4458;
var statearr_4460_4472 = state_4458__$1;
(statearr_4460_4472[(2)] = null);

(statearr_4460_4472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4459 === (2))){
var state_4458__$1 = state_4458;
var statearr_4461_4473 = state_4458__$1;
(statearr_4461_4473[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4459 === (3))){
var inst_4456 = (state_4458[(2)]);
var state_4458__$1 = state_4458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4458__$1,inst_4456);
} else {
if((state_val_4459 === (4))){
var state_4458__$1 = state_4458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4458__$1,(7),buddylistcljs_front_chat.core.EVENTCHANNEL);
} else {
if((state_val_4459 === (5))){
var state_4458__$1 = state_4458;
var statearr_4463_4474 = state_4458__$1;
(statearr_4463_4474[(2)] = null);

(statearr_4463_4474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4459 === (6))){
var inst_4454 = (state_4458[(2)]);
var state_4458__$1 = state_4458;
var statearr_4464_4475 = state_4458__$1;
(statearr_4464_4475[(2)] = inst_4454);

(statearr_4464_4475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4459 === (7))){
var inst_4446 = (state_4458[(2)]);
var inst_4447 = cljs.core.nth.call(null,inst_4446,(0),null);
var inst_4448 = cljs.core.nth.call(null,inst_4446,(1),null);
var inst_4449 = inst_4447.call(null,buddylistcljs_front_chat.core.EVENTS);
var inst_4450 = inst_4449.call(null,inst_4448);
var state_4458__$1 = (function (){var statearr_4465 = state_4458;
(statearr_4465[(7)] = inst_4450);

return statearr_4465;
})();
var statearr_4466_4476 = state_4458__$1;
(statearr_4466_4476[(2)] = null);

(statearr_4466_4476[(1)] = (2));


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
});})(c__2950__auto___4471))
;
return ((function (switch__2906__auto__,c__2950__auto___4471){
return (function() {
var buddylistcljs_front_chat$core$state_machine__2907__auto__ = null;
var buddylistcljs_front_chat$core$state_machine__2907__auto____0 = (function (){
var statearr_4467 = [null,null,null,null,null,null,null,null];
(statearr_4467[(0)] = buddylistcljs_front_chat$core$state_machine__2907__auto__);

(statearr_4467[(1)] = (1));

return statearr_4467;
});
var buddylistcljs_front_chat$core$state_machine__2907__auto____1 = (function (state_4458){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_4458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e4468){if((e4468 instanceof Object)){
var ex__2910__auto__ = e4468;
var statearr_4469_4477 = state_4458;
(statearr_4469_4477[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4478 = state_4458;
state_4458 = G__4478;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
buddylistcljs_front_chat$core$state_machine__2907__auto__ = function(state_4458){
switch(arguments.length){
case 0:
return buddylistcljs_front_chat$core$state_machine__2907__auto____0.call(this);
case 1:
return buddylistcljs_front_chat$core$state_machine__2907__auto____1.call(this,state_4458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs_front_chat$core$state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs_front_chat$core$state_machine__2907__auto____0;
buddylistcljs_front_chat$core$state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs_front_chat$core$state_machine__2907__auto____1;
return buddylistcljs_front_chat$core$state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto___4471))
})();
var state__2952__auto__ = (function (){var statearr_4470 = f__2951__auto__.call(null);
(statearr_4470[(6)] = c__2950__auto___4471);

return statearr_4470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto___4471))
);

buddylistcljs_front_chat.core.ipc_renderer.on("chat:received",(function (_,message){
cljs.core.println.call(null,message);

var parsed = JSON.parse(message);
var message__$1 = cljs.core.js__GT_clj.call(null,parsed,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
cljs.core.swap_BANG_.call(null,buddylistcljs_front_chat.core.state,cljs.core.conj,message__$1);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(message__$1),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(buddylistcljs_front_chat.core.data))){
return (new Audio("../assets/imsend.wav")).play();
} else {
return null;
}
}));
buddylistcljs_front_chat.core.ipc_renderer.on("chat:loaded-history",(function (_,parsed){
var messages = cljs.core.js__GT_clj.call(null,parsed,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return cljs.core.swap_BANG_.call(null,buddylistcljs_front_chat.core.state,cljs.core.comp.call(null,cljs.core.vec,cljs.core.flatten,cljs.core.conj),messages);
}));
buddylistcljs_front_chat.core.message_list = (function buddylistcljs_front_chat$core$message_list(messages){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"message-list"], null),(function (){var iter__4290__auto__ = (function buddylistcljs_front_chat$core$message_list_$_iter__4479(s__4480){
return (new cljs.core.LazySeq(null,(function (){
var s__4480__$1 = s__4480;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__4480__$1);
if(temp__4657__auto__){
var s__4480__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4480__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__4480__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__4482 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__4481 = (0);
while(true){
if((i__4481 < size__4289__auto__)){
var message = cljs.core._nth.call(null,c__4288__auto__,i__4481);
cljs.core.chunk_append.call(null,b__4482,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"message-holder"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(message)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(message)], null)));

var G__4483 = (i__4481 + (1));
i__4481 = G__4483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4482),buddylistcljs_front_chat$core$message_list_$_iter__4479.call(null,cljs.core.chunk_rest.call(null,s__4480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4482),null);
}
} else {
var message = cljs.core.first.call(null,s__4480__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"message-holder"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(message)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(message)], null)),buddylistcljs_front_chat$core$message_list_$_iter__4479.call(null,cljs.core.rest.call(null,s__4480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4290__auto__.call(null,messages);
})()], null);
});
buddylistcljs_front_chat.core.submit_chat = (function buddylistcljs_front_chat$core$submit_chat(event){
event.preventDefault();

var message = document.getElementById("chat-input").value;
console.log(message);

buddylistcljs_front_chat.core.ipc_renderer.send("chat:sent",new cljs.core.Keyword(null,"with-user","with-user",1719589037).cljs$core$IFn$_invoke$arity$1(buddylistcljs_front_chat.core.data),message);

return document.getElementById("chat-input").value = "";
});
buddylistcljs_front_chat.core.chat_input = (function buddylistcljs_front_chat$core$chat_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__4484_SHARP_){
return buddylistcljs_front_chat.core.submit_chat.call(null,p1__4484_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"chat-input",new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null)], null)], null);
});
buddylistcljs_front_chat.core.root_component = (function buddylistcljs_front_chat$core$root_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),["Conversation with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"with-user","with-user",1719589037).cljs$core$IFn$_invoke$arity$1(buddylistcljs_front_chat.core.data))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_chat.core.message_list,cljs.core.deref.call(null,buddylistcljs_front_chat.core.state)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_chat.core.chat_input], null)], null);
});
buddylistcljs_front_chat.core.mount_root = (function buddylistcljs_front_chat$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buddylistcljs_front_chat.core.root_component], null),document.getElementById("app"));
});
buddylistcljs_front_chat.core.init_BANG_ = (function buddylistcljs_front_chat$core$init_BANG_(setting){
return buddylistcljs_front_chat.core.mount_root.call(null,setting);
});
