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
return (function buddylistcljs_front_chat$core$parse_url_$_iter__2128(s__2129){
return (new cljs.core.LazySeq(null,((function (param_strs){
return (function (){
var s__2129__$1 = s__2129;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__2129__$1);
if(temp__4657__auto__){
var s__2129__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2129__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__2129__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__2131 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__2130 = (0);
while(true){
if((i__2130 < size__4289__auto__)){
var vec__2132 = cljs.core._nth.call(null,c__4288__auto__,i__2130);
var k = cljs.core.nth.call(null,vec__2132,(0),null);
var v = cljs.core.nth.call(null,vec__2132,(1),null);
cljs.core.chunk_append.call(null,b__2131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null));

var G__2138 = (i__2130 + (1));
i__2130 = G__2138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2131),buddylistcljs_front_chat$core$parse_url_$_iter__2128.call(null,cljs.core.chunk_rest.call(null,s__2129__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2131),null);
}
} else {
var vec__2135 = cljs.core.first.call(null,s__2129__$2);
var k = cljs.core.nth.call(null,vec__2135,(0),null);
var v = cljs.core.nth.call(null,vec__2135,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null),buddylistcljs_front_chat$core$parse_url_$_iter__2128.call(null,cljs.core.rest.call(null,s__2129__$2)));
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
return (function (p1__2127_SHARP_){
return clojure.string.split.call(null,p1__2127_SHARP_,/=/);
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
var c__2082__auto___2170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2082__auto___2170){
return (function (){
var f__2083__auto__ = (function (){var switch__2061__auto__ = ((function (c__2082__auto___2170){
return (function (state_2157){
var state_val_2158 = (state_2157[(1)]);
if((state_val_2158 === (1))){
var state_2157__$1 = state_2157;
var statearr_2159_2171 = state_2157__$1;
(statearr_2159_2171[(2)] = null);

(statearr_2159_2171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2158 === (2))){
var state_2157__$1 = state_2157;
var statearr_2160_2172 = state_2157__$1;
(statearr_2160_2172[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2158 === (3))){
var inst_2155 = (state_2157[(2)]);
var state_2157__$1 = state_2157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2157__$1,inst_2155);
} else {
if((state_val_2158 === (4))){
var state_2157__$1 = state_2157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2157__$1,(7),buddylistcljs_front_chat.core.EVENTCHANNEL);
} else {
if((state_val_2158 === (5))){
var state_2157__$1 = state_2157;
var statearr_2162_2173 = state_2157__$1;
(statearr_2162_2173[(2)] = null);

(statearr_2162_2173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2158 === (6))){
var inst_2153 = (state_2157[(2)]);
var state_2157__$1 = state_2157;
var statearr_2163_2174 = state_2157__$1;
(statearr_2163_2174[(2)] = inst_2153);

(statearr_2163_2174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2158 === (7))){
var inst_2145 = (state_2157[(2)]);
var inst_2146 = cljs.core.nth.call(null,inst_2145,(0),null);
var inst_2147 = cljs.core.nth.call(null,inst_2145,(1),null);
var inst_2148 = inst_2146.call(null,buddylistcljs_front_chat.core.EVENTS);
var inst_2149 = inst_2148.call(null,inst_2147);
var state_2157__$1 = (function (){var statearr_2164 = state_2157;
(statearr_2164[(7)] = inst_2149);

return statearr_2164;
})();
var statearr_2165_2175 = state_2157__$1;
(statearr_2165_2175[(2)] = null);

(statearr_2165_2175[(1)] = (2));


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
});})(c__2082__auto___2170))
;
return ((function (switch__2061__auto__,c__2082__auto___2170){
return (function() {
var buddylistcljs_front_chat$core$state_machine__2062__auto__ = null;
var buddylistcljs_front_chat$core$state_machine__2062__auto____0 = (function (){
var statearr_2166 = [null,null,null,null,null,null,null,null];
(statearr_2166[(0)] = buddylistcljs_front_chat$core$state_machine__2062__auto__);

(statearr_2166[(1)] = (1));

return statearr_2166;
});
var buddylistcljs_front_chat$core$state_machine__2062__auto____1 = (function (state_2157){
while(true){
var ret_value__2063__auto__ = (function (){try{while(true){
var result__2064__auto__ = switch__2061__auto__.call(null,state_2157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2064__auto__;
}
break;
}
}catch (e2167){if((e2167 instanceof Object)){
var ex__2065__auto__ = e2167;
var statearr_2168_2176 = state_2157;
(statearr_2168_2176[(5)] = ex__2065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2177 = state_2157;
state_2157 = G__2177;
continue;
} else {
return ret_value__2063__auto__;
}
break;
}
});
buddylistcljs_front_chat$core$state_machine__2062__auto__ = function(state_2157){
switch(arguments.length){
case 0:
return buddylistcljs_front_chat$core$state_machine__2062__auto____0.call(this);
case 1:
return buddylistcljs_front_chat$core$state_machine__2062__auto____1.call(this,state_2157);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs_front_chat$core$state_machine__2062__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs_front_chat$core$state_machine__2062__auto____0;
buddylistcljs_front_chat$core$state_machine__2062__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs_front_chat$core$state_machine__2062__auto____1;
return buddylistcljs_front_chat$core$state_machine__2062__auto__;
})()
;})(switch__2061__auto__,c__2082__auto___2170))
})();
var state__2084__auto__ = (function (){var statearr_2169 = f__2083__auto__.call(null);
(statearr_2169[(6)] = c__2082__auto___2170);

return statearr_2169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2084__auto__);
});})(c__2082__auto___2170))
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"message-list"], null),(function (){var iter__4290__auto__ = (function buddylistcljs_front_chat$core$message_list_$_iter__2178(s__2179){
return (new cljs.core.LazySeq(null,(function (){
var s__2179__$1 = s__2179;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__2179__$1);
if(temp__4657__auto__){
var s__2179__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2179__$2)){
var c__4288__auto__ = cljs.core.chunk_first.call(null,s__2179__$2);
var size__4289__auto__ = cljs.core.count.call(null,c__4288__auto__);
var b__2181 = cljs.core.chunk_buffer.call(null,size__4289__auto__);
if((function (){var i__2180 = (0);
while(true){
if((i__2180 < size__4289__auto__)){
var message = cljs.core._nth.call(null,c__4288__auto__,i__2180);
cljs.core.chunk_append.call(null,b__2181,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"message-holder"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(message)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(message)], null)));

var G__2182 = (i__2180 + (1));
i__2180 = G__2182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2181),buddylistcljs_front_chat$core$message_list_$_iter__2178.call(null,cljs.core.chunk_rest.call(null,s__2179__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2181),null);
}
} else {
var message = cljs.core.first.call(null,s__2179__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"message-holder"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(message)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(message)], null)),buddylistcljs_front_chat$core$message_list_$_iter__2178.call(null,cljs.core.rest.call(null,s__2179__$2)));
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

buddylistcljs_front_chat.core.ipc_renderer.send(["chat:sent:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"with-user","with-user",1719589037).cljs$core$IFn$_invoke$arity$1(buddylistcljs_front_chat.core.data))].join(''),message);

return document.getElementById("chat-input").value = "";
});
buddylistcljs_front_chat.core.chat_input = (function buddylistcljs_front_chat$core$chat_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__2183_SHARP_){
return buddylistcljs_front_chat.core.submit_chat.call(null,p1__2183_SHARP_);
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
