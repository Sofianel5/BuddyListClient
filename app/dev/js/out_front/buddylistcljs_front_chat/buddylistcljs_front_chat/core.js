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
return (function buddylistcljs_front_chat$core$parse_url_$_iter__20182(s__20183){
return (new cljs.core.LazySeq(null,((function (param_strs){
return (function (){
var s__20183__$1 = s__20183;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20183__$1);
if(temp__4657__auto__){
var s__20183__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20183__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__20183__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__20185 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__20184 = (0);
while(true){
if((i__20184 < size__4289__auto__)){
var vec__20186 = cljs.core._nth.call(null,c__4288__auto__,i__20184);
var k = cljs.core.nth.call(null,vec__20186,(0),null);
var v = cljs.core.nth.call(null,vec__20186,(1),null);
cljs.core.chunk_append.call(null,b__20185,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null));

var G__20192 = (i__20184 + (1));
i__20184 = G__20192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20185),buddylistcljs_front_chat$core$parse_url_$_iter__20182.call(null,cljs.core.chunk_rest.call(null,s__20183__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20185),null);
}
} else {
var vec__20189 = cljs.core.first.call(null,s__20183__$2);
var k = cljs.core.nth.call(null,vec__20189,(0),null);
var v = cljs.core.nth.call(null,vec__20189,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null),buddylistcljs_front_chat$core$parse_url_$_iter__20182.call(null,cljs.core.rest.call(null,s__20183__$2)));
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
return (function (p1__20181_SHARP_){
return clojure.string.split.call(null,p1__20181_SHARP_,/=/);
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
return buddylistcljs_front_chat.core.ipc_renderer.send(["chat:sent:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"with-user","with-user",1719589037).cljs$core$IFn$_invoke$arity$1(buddylistcljs_front_chat.core.data))].join(''),message);
})], null);
var c__19683__auto___20224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19683__auto___20224){
return (function (){
var f__19684__auto__ = (function (){var switch__19662__auto__ = ((function (c__19683__auto___20224){
return (function (state_20211){
var state_val_20212 = (state_20211[(1)]);
if((state_val_20212 === (1))){
var state_20211__$1 = state_20211;
var statearr_20213_20225 = state_20211__$1;
(statearr_20213_20225[(2)] = null);

(statearr_20213_20225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (2))){
var state_20211__$1 = state_20211;
var statearr_20214_20226 = state_20211__$1;
(statearr_20214_20226[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (3))){
var inst_20209 = (state_20211[(2)]);
var state_20211__$1 = state_20211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20211__$1,inst_20209);
} else {
if((state_val_20212 === (4))){
var state_20211__$1 = state_20211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20211__$1,(7),buddylistcljs_front_chat.core.EVENTCHANNEL);
} else {
if((state_val_20212 === (5))){
var state_20211__$1 = state_20211;
var statearr_20216_20227 = state_20211__$1;
(statearr_20216_20227[(2)] = null);

(statearr_20216_20227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (6))){
var inst_20207 = (state_20211[(2)]);
var state_20211__$1 = state_20211;
var statearr_20217_20228 = state_20211__$1;
(statearr_20217_20228[(2)] = inst_20207);

(statearr_20217_20228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (7))){
var inst_20199 = (state_20211[(2)]);
var inst_20200 = cljs.core.nth.call(null,inst_20199,(0),null);
var inst_20201 = cljs.core.nth.call(null,inst_20199,(1),null);
var inst_20202 = inst_20200.call(null,buddylistcljs_front_chat.core.EVENTS);
var inst_20203 = inst_20202.call(null,inst_20201);
var state_20211__$1 = (function (){var statearr_20218 = state_20211;
(statearr_20218[(7)] = inst_20203);

return statearr_20218;
})();
var statearr_20219_20229 = state_20211__$1;
(statearr_20219_20229[(2)] = null);

(statearr_20219_20229[(1)] = (2));


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
});})(c__19683__auto___20224))
;
return ((function (switch__19662__auto__,c__19683__auto___20224){
return (function() {
var buddylistcljs_front_chat$core$state_machine__19663__auto__ = null;
var buddylistcljs_front_chat$core$state_machine__19663__auto____0 = (function (){
var statearr_20220 = [null,null,null,null,null,null,null,null];
(statearr_20220[(0)] = buddylistcljs_front_chat$core$state_machine__19663__auto__);

(statearr_20220[(1)] = (1));

return statearr_20220;
});
var buddylistcljs_front_chat$core$state_machine__19663__auto____1 = (function (state_20211){
while(true){
var ret_value__19664__auto__ = (function (){try{while(true){
var result__19665__auto__ = switch__19662__auto__.call(null,state_20211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19665__auto__;
}
break;
}
}catch (e20221){if((e20221 instanceof Object)){
var ex__19666__auto__ = e20221;
var statearr_20222_20230 = state_20211;
(statearr_20222_20230[(5)] = ex__19666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20231 = state_20211;
state_20211 = G__20231;
continue;
} else {
return ret_value__19664__auto__;
}
break;
}
});
buddylistcljs_front_chat$core$state_machine__19663__auto__ = function(state_20211){
switch(arguments.length){
case 0:
return buddylistcljs_front_chat$core$state_machine__19663__auto____0.call(this);
case 1:
return buddylistcljs_front_chat$core$state_machine__19663__auto____1.call(this,state_20211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs_front_chat$core$state_machine__19663__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs_front_chat$core$state_machine__19663__auto____0;
buddylistcljs_front_chat$core$state_machine__19663__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs_front_chat$core$state_machine__19663__auto____1;
return buddylistcljs_front_chat$core$state_machine__19663__auto__;
})()
;})(switch__19662__auto__,c__19683__auto___20224))
})();
var state__19685__auto__ = (function (){var statearr_20223 = f__19684__auto__.call(null);
(statearr_20223[(6)] = c__19683__auto___20224);

return statearr_20223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19685__auto__);
});})(c__19683__auto___20224))
);

buddylistcljs_front_chat.core.ipc_renderer.on("chat:received",(function (_,message){
cljs.core.println.call(null,message);

var parsed = JSON.parse(message);
var messages = cljs.core.js__GT_clj.call(null,parsed,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core._EQ_.call(null,cljs.core.empty.call(null,messages),cljs.core.PersistentVector.EMPTY)){
return cljs.core.swap_BANG_.call(null,buddylistcljs_front_chat.core.state,cljs.core.comp.call(null,cljs.core.vec,cljs.core.flatten,cljs.core.conj),messages);
} else {
return cljs.core.swap_BANG_.call(null,buddylistcljs_front_chat.core.state,cljs.core.conj,messages);
}
}));
buddylistcljs_front_chat.core.message_list = (function buddylistcljs_front_chat$core$message_list(messages){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"message-list"], null),(function (){var iter__4290__auto__ = (function buddylistcljs_front_chat$core$message_list_$_iter__20232(s__20233){
return (new cljs.core.LazySeq(null,(function (){
var s__20233__$1 = s__20233;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20233__$1);
if(temp__4657__auto__){
var s__20233__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20233__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__20233__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__20235 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__20234 = (0);
while(true){
if((i__20234 < size__4289__auto__)){
var message = cljs.core._nth.call(null,c__4288__auto__,i__20234);
cljs.core.chunk_append.call(null,b__20235,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"message-holder"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(message)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(message)], null)));

var G__20236 = (i__20234 + (1));
i__20234 = G__20236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20235),buddylistcljs_front_chat$core$message_list_$_iter__20232.call(null,cljs.core.chunk_rest.call(null,s__20233__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20235),null);
}
} else {
var message = cljs.core.first.call(null,s__20233__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"message-holder"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(message)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(message)], null)),buddylistcljs_front_chat$core$message_list_$_iter__20232.call(null,cljs.core.rest.call(null,s__20233__$2)));
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

return buddylistcljs_front_chat.core.ipc_renderer.send(["chat:sent:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"with-user","with-user",1719589037).cljs$core$IFn$_invoke$arity$1(buddylistcljs_front_chat.core.data))].join(''),message);
});
buddylistcljs_front_chat.core.chat_input = (function buddylistcljs_front_chat$core$chat_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__20237_SHARP_){
return buddylistcljs_front_chat.core.submit_chat.call(null,p1__20237_SHARP_);
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

//# sourceMappingURL=core.js.map
