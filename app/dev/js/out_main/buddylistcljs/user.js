// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.user');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
buddylistcljs.user.login_user = (function buddylistcljs$user$login_user(username,password){
var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__){
return (function (state_11201){
var state_val_11202 = (state_11201[(1)]);
if((state_val_11202 === (1))){
var inst_11186 = [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471)];
var inst_11187 = [username,password];
var inst_11188 = cljs.core.PersistentHashMap.fromArrays(inst_11186,inst_11187);
var inst_11189 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_11190 = [inst_11188];
var inst_11191 = cljs.core.PersistentHashMap.fromArrays(inst_11189,inst_11190);
var inst_11192 = cljs_http.client.post.call(null,"http://50.16.117.236:8000/login",inst_11191);
var state_11201__$1 = state_11201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11201__$1,(2),inst_11192);
} else {
if((state_val_11202 === (2))){
var inst_11194 = (state_11201[(2)]);
var inst_11195 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_11194);
var inst_11196 = cljs.core.prn.call(null,inst_11195);
var inst_11197 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_11194);
var inst_11198 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_11197);
var inst_11199 = cljs.core.prn.call(null,inst_11198);
var state_11201__$1 = (function (){var statearr_11203 = state_11201;
(statearr_11203[(7)] = inst_11196);

return statearr_11203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11201__$1,inst_11199);
} else {
return null;
}
}
});})(c__5590__auto__))
;
return ((function (switch__5435__auto__,c__5590__auto__){
return (function() {
var buddylistcljs$user$login_user_$_state_machine__5436__auto__ = null;
var buddylistcljs$user$login_user_$_state_machine__5436__auto____0 = (function (){
var statearr_11204 = [null,null,null,null,null,null,null,null];
(statearr_11204[(0)] = buddylistcljs$user$login_user_$_state_machine__5436__auto__);

(statearr_11204[(1)] = (1));

return statearr_11204;
});
var buddylistcljs$user$login_user_$_state_machine__5436__auto____1 = (function (state_11201){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_11201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e11205){if((e11205 instanceof Object)){
var ex__5439__auto__ = e11205;
var statearr_11206_11208 = state_11201;
(statearr_11206_11208[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11209 = state_11201;
state_11201 = G__11209;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
buddylistcljs$user$login_user_$_state_machine__5436__auto__ = function(state_11201){
switch(arguments.length){
case 0:
return buddylistcljs$user$login_user_$_state_machine__5436__auto____0.call(this);
case 1:
return buddylistcljs$user$login_user_$_state_machine__5436__auto____1.call(this,state_11201);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs$user$login_user_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs$user$login_user_$_state_machine__5436__auto____0;
buddylistcljs$user$login_user_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs$user$login_user_$_state_machine__5436__auto____1;
return buddylistcljs$user$login_user_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_11207 = f__5591__auto__.call(null);
(statearr_11207[(6)] = c__5590__auto__);

return statearr_11207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__))
);

return c__5590__auto__;
});
buddylistcljs.user.signup_user = (function buddylistcljs$user$signup_user(username,password,phone){
var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__){
return (function (state_11225){
var state_val_11226 = (state_11225[(1)]);
if((state_val_11226 === (1))){
var inst_11210 = [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"phone","phone",-763596057)];
var inst_11211 = [username,password,phone];
var inst_11212 = cljs.core.PersistentHashMap.fromArrays(inst_11210,inst_11211);
var inst_11213 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_11214 = [inst_11212];
var inst_11215 = cljs.core.PersistentHashMap.fromArrays(inst_11213,inst_11214);
var inst_11216 = cljs_http.client.post.call(null,"http://50.16.117.236:8000/signup",inst_11215);
var state_11225__$1 = state_11225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11225__$1,(2),inst_11216);
} else {
if((state_val_11226 === (2))){
var inst_11218 = (state_11225[(2)]);
var inst_11219 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_11218);
var inst_11220 = cljs.core.prn.call(null,inst_11219);
var inst_11221 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_11218);
var inst_11222 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_11221);
var inst_11223 = cljs.core.prn.call(null,inst_11222);
var state_11225__$1 = (function (){var statearr_11227 = state_11225;
(statearr_11227[(7)] = inst_11220);

return statearr_11227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11225__$1,inst_11223);
} else {
return null;
}
}
});})(c__5590__auto__))
;
return ((function (switch__5435__auto__,c__5590__auto__){
return (function() {
var buddylistcljs$user$signup_user_$_state_machine__5436__auto__ = null;
var buddylistcljs$user$signup_user_$_state_machine__5436__auto____0 = (function (){
var statearr_11228 = [null,null,null,null,null,null,null,null];
(statearr_11228[(0)] = buddylistcljs$user$signup_user_$_state_machine__5436__auto__);

(statearr_11228[(1)] = (1));

return statearr_11228;
});
var buddylistcljs$user$signup_user_$_state_machine__5436__auto____1 = (function (state_11225){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_11225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e11229){if((e11229 instanceof Object)){
var ex__5439__auto__ = e11229;
var statearr_11230_11232 = state_11225;
(statearr_11230_11232[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11233 = state_11225;
state_11225 = G__11233;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
buddylistcljs$user$signup_user_$_state_machine__5436__auto__ = function(state_11225){
switch(arguments.length){
case 0:
return buddylistcljs$user$signup_user_$_state_machine__5436__auto____0.call(this);
case 1:
return buddylistcljs$user$signup_user_$_state_machine__5436__auto____1.call(this,state_11225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs$user$signup_user_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs$user$signup_user_$_state_machine__5436__auto____0;
buddylistcljs$user$signup_user_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs$user$signup_user_$_state_machine__5436__auto____1;
return buddylistcljs$user$signup_user_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_11231 = f__5591__auto__.call(null);
(statearr_11231[(6)] = c__5590__auto__);

return statearr_11231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__))
);

return c__5590__auto__;
});
