// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
buddylistcljs.core.path = cljs.nodejs.require.call(null,"path");
buddylistcljs.core.http = cljs.nodejs.require.call(null,"http");
buddylistcljs.core.http.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"host","host",-1558485167),"50.16.117.236",new cljs.core.Keyword(null,"port","port",1534937262),"8000",new cljs.core.Keyword(null,"path","path",-188191168),"/login",new cljs.core.Keyword(null,"method","method",55703592),"POST"], null),(function (p1__6558_SHARP_){
return cljs.core.println.call(null,p1__6558_SHARP_);
}));
buddylistcljs.core.Electron = cljs.nodejs.require.call(null,"electron");
buddylistcljs.core.BrowserWindow = buddylistcljs.core.Electron.BrowserWindow;
buddylistcljs.core.crash_reporter = buddylistcljs.core.Electron.crashReporter;
buddylistcljs.core.Os = cljs.nodejs.require.call(null,"os");
buddylistcljs.core._STAR_win_STAR_ = cljs.core.atom.call(null,null);
buddylistcljs.core.app = buddylistcljs.core.Electron.app;
buddylistcljs.core.login_user = (function buddylistcljs$core$login_user(username,password){
return buddylistcljs.core.GET.call(null,"http://50.16.117.236:8000/login",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null));
});
buddylistcljs.core.login_user.call(null,"sofiane","password");
buddylistcljs.core.signup_user = (function buddylistcljs$core$signup_user(username,password,phone){
var c__2617__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2617__auto__){
return (function (){
var f__2618__auto__ = (function (){var switch__2573__auto__ = ((function (c__2617__auto__){
return (function (state_6574){
var state_val_6575 = (state_6574[(1)]);
if((state_val_6575 === (1))){
var inst_6559 = [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"phone","phone",-763596057)];
var inst_6560 = [username,password,phone];
var inst_6561 = cljs.core.PersistentHashMap.fromArrays(inst_6559,inst_6560);
var inst_6562 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_6563 = [inst_6561];
var inst_6564 = cljs.core.PersistentHashMap.fromArrays(inst_6562,inst_6563);
var inst_6565 = buddylistcljs.core.node$module$http.post.call(null,"http://50.16.117.236:8000/signup",inst_6564);
var state_6574__$1 = state_6574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6574__$1,(2),inst_6565);
} else {
if((state_val_6575 === (2))){
var inst_6567 = (state_6574[(2)]);
var inst_6568 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_6567);
var inst_6569 = cljs.core.prn.call(null,inst_6568);
var inst_6570 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_6567);
var inst_6571 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_6570);
var inst_6572 = cljs.core.prn.call(null,inst_6571);
var state_6574__$1 = (function (){var statearr_6576 = state_6574;
(statearr_6576[(7)] = inst_6569);

return statearr_6576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6574__$1,inst_6572);
} else {
return null;
}
}
});})(c__2617__auto__))
;
return ((function (switch__2573__auto__,c__2617__auto__){
return (function() {
var buddylistcljs$core$signup_user_$_state_machine__2574__auto__ = null;
var buddylistcljs$core$signup_user_$_state_machine__2574__auto____0 = (function (){
var statearr_6577 = [null,null,null,null,null,null,null,null];
(statearr_6577[(0)] = buddylistcljs$core$signup_user_$_state_machine__2574__auto__);

(statearr_6577[(1)] = (1));

return statearr_6577;
});
var buddylistcljs$core$signup_user_$_state_machine__2574__auto____1 = (function (state_6574){
while(true){
var ret_value__2575__auto__ = (function (){try{while(true){
var result__2576__auto__ = switch__2573__auto__.call(null,state_6574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2576__auto__;
}
break;
}
}catch (e6578){if((e6578 instanceof Object)){
var ex__2577__auto__ = e6578;
var statearr_6579_6581 = state_6574;
(statearr_6579_6581[(5)] = ex__2577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6582 = state_6574;
state_6574 = G__6582;
continue;
} else {
return ret_value__2575__auto__;
}
break;
}
});
buddylistcljs$core$signup_user_$_state_machine__2574__auto__ = function(state_6574){
switch(arguments.length){
case 0:
return buddylistcljs$core$signup_user_$_state_machine__2574__auto____0.call(this);
case 1:
return buddylistcljs$core$signup_user_$_state_machine__2574__auto____1.call(this,state_6574);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs$core$signup_user_$_state_machine__2574__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs$core$signup_user_$_state_machine__2574__auto____0;
buddylistcljs$core$signup_user_$_state_machine__2574__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs$core$signup_user_$_state_machine__2574__auto____1;
return buddylistcljs$core$signup_user_$_state_machine__2574__auto__;
})()
;})(switch__2573__auto__,c__2617__auto__))
})();
var state__2619__auto__ = (function (){var statearr_6580 = f__2618__auto__.call(null);
(statearr_6580[(6)] = c__2617__auto__);

return statearr_6580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2619__auto__);
});})(c__2617__auto__))
);

return c__2617__auto__;
});
buddylistcljs.core.signup_user.call(null,"user1000","password","1234567890");
buddylistcljs.core._main = (function buddylistcljs$core$_main(){
buddylistcljs.core.crash_reporter.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"companyName","companyName",2030952346),"BuddyList",new cljs.core.Keyword(null,"submitURL","submitURL",-169159433),"http://buddylistapp.com"], null)));

cljs.nodejs.process.on("error",(function (err){
return console.log(err);
}));

buddylistcljs.core.app.on("window-all-closed",(function (){
if(cljs.core.not_EQ_.call(null,cljs.nodejs.process.platform,"darwin")){
return buddylistcljs.core.app.quit();
} else {
return null;
}
}));

return buddylistcljs.core.app.on("ready",(function (){
cljs.core.reset_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)))));

cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.path.resolve(__dirname,"../index.html"))].join(''));

return cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,null);
}));
}));
});
cljs.nodejs.enable_util_print_BANG_.call(null);
console.log(["Start descjop application on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.Os.type()),"."].join(''));
cljs.core._STAR_main_cli_fn_STAR_ = buddylistcljs.core._main;
