// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('buddylistcljs.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
buddylistcljs.core.path = cljs.nodejs.require.call(null,"path");
buddylistcljs.core.Electron = cljs.nodejs.require.call(null,"electron");
buddylistcljs.core.BrowserWindow = buddylistcljs.core.Electron.BrowserWindow;
buddylistcljs.core.crash_reporter = buddylistcljs.core.Electron.crashReporter;
buddylistcljs.core.Os = cljs.nodejs.require.call(null,"os");
buddylistcljs.core._STAR_win_STAR_ = cljs.core.atom.call(null,null);
buddylistcljs.core.app = buddylistcljs.core.Electron.app;
buddylistcljs.core.login_user = (function buddylistcljs$core$login_user(username,password){
var c__19575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19575__auto__){
return (function (){
var f__19576__auto__ = (function (){var switch__19554__auto__ = ((function (c__19575__auto__){
return (function (state_19679){
var state_val_19680 = (state_19679[(1)]);
if((state_val_19680 === (1))){
var inst_19664 = [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471)];
var inst_19665 = [username,password];
var inst_19666 = cljs.core.PersistentHashMap.fromArrays(inst_19664,inst_19665);
var inst_19667 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_19668 = [inst_19666];
var inst_19669 = cljs.core.PersistentHashMap.fromArrays(inst_19667,inst_19668);
var inst_19670 = cljs_http.client.post.call(null,"http://50.16.117.236:8000/login",inst_19669);
var state_19679__$1 = state_19679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19679__$1,(2),inst_19670);
} else {
if((state_val_19680 === (2))){
var inst_19672 = (state_19679[(2)]);
var inst_19673 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_19672);
var inst_19674 = cljs.core.prn.call(null,inst_19673);
var inst_19675 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19672);
var inst_19676 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_19675);
var inst_19677 = cljs.core.prn.call(null,inst_19676);
var state_19679__$1 = (function (){var statearr_19681 = state_19679;
(statearr_19681[(7)] = inst_19674);

return statearr_19681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19679__$1,inst_19677);
} else {
return null;
}
}
});})(c__19575__auto__))
;
return ((function (switch__19554__auto__,c__19575__auto__){
return (function() {
var buddylistcljs$core$login_user_$_state_machine__19555__auto__ = null;
var buddylistcljs$core$login_user_$_state_machine__19555__auto____0 = (function (){
var statearr_19682 = [null,null,null,null,null,null,null,null];
(statearr_19682[(0)] = buddylistcljs$core$login_user_$_state_machine__19555__auto__);

(statearr_19682[(1)] = (1));

return statearr_19682;
});
var buddylistcljs$core$login_user_$_state_machine__19555__auto____1 = (function (state_19679){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_19679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e19683){if((e19683 instanceof Object)){
var ex__19558__auto__ = e19683;
var statearr_19684_19686 = state_19679;
(statearr_19684_19686[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19687 = state_19679;
state_19679 = G__19687;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
buddylistcljs$core$login_user_$_state_machine__19555__auto__ = function(state_19679){
switch(arguments.length){
case 0:
return buddylistcljs$core$login_user_$_state_machine__19555__auto____0.call(this);
case 1:
return buddylistcljs$core$login_user_$_state_machine__19555__auto____1.call(this,state_19679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs$core$login_user_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs$core$login_user_$_state_machine__19555__auto____0;
buddylistcljs$core$login_user_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs$core$login_user_$_state_machine__19555__auto____1;
return buddylistcljs$core$login_user_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19575__auto__))
})();
var state__19577__auto__ = (function (){var statearr_19685 = f__19576__auto__.call(null);
(statearr_19685[(6)] = c__19575__auto__);

return statearr_19685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19577__auto__);
});})(c__19575__auto__))
);

return c__19575__auto__;
});
buddylistcljs.core.signup_user = (function buddylistcljs$core$signup_user(username,password,phone){
var c__19575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19575__auto__){
return (function (){
var f__19576__auto__ = (function (){var switch__19554__auto__ = ((function (c__19575__auto__){
return (function (state_19703){
var state_val_19704 = (state_19703[(1)]);
if((state_val_19704 === (1))){
var inst_19688 = [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"phone","phone",-763596057)];
var inst_19689 = [username,password,phone];
var inst_19690 = cljs.core.PersistentHashMap.fromArrays(inst_19688,inst_19689);
var inst_19691 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_19692 = [inst_19690];
var inst_19693 = cljs.core.PersistentHashMap.fromArrays(inst_19691,inst_19692);
var inst_19694 = cljs_http.client.post.call(null,"http://50.16.117.236:8000/signup",inst_19693);
var state_19703__$1 = state_19703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19703__$1,(2),inst_19694);
} else {
if((state_val_19704 === (2))){
var inst_19696 = (state_19703[(2)]);
var inst_19697 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_19696);
var inst_19698 = cljs.core.prn.call(null,inst_19697);
var inst_19699 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19696);
var inst_19700 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_19699);
var inst_19701 = cljs.core.prn.call(null,inst_19700);
var state_19703__$1 = (function (){var statearr_19705 = state_19703;
(statearr_19705[(7)] = inst_19698);

return statearr_19705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19703__$1,inst_19701);
} else {
return null;
}
}
});})(c__19575__auto__))
;
return ((function (switch__19554__auto__,c__19575__auto__){
return (function() {
var buddylistcljs$core$signup_user_$_state_machine__19555__auto__ = null;
var buddylistcljs$core$signup_user_$_state_machine__19555__auto____0 = (function (){
var statearr_19706 = [null,null,null,null,null,null,null,null];
(statearr_19706[(0)] = buddylistcljs$core$signup_user_$_state_machine__19555__auto__);

(statearr_19706[(1)] = (1));

return statearr_19706;
});
var buddylistcljs$core$signup_user_$_state_machine__19555__auto____1 = (function (state_19703){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_19703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e19707){if((e19707 instanceof Object)){
var ex__19558__auto__ = e19707;
var statearr_19708_19710 = state_19703;
(statearr_19708_19710[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19711 = state_19703;
state_19703 = G__19711;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
buddylistcljs$core$signup_user_$_state_machine__19555__auto__ = function(state_19703){
switch(arguments.length){
case 0:
return buddylistcljs$core$signup_user_$_state_machine__19555__auto____0.call(this);
case 1:
return buddylistcljs$core$signup_user_$_state_machine__19555__auto____1.call(this,state_19703);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
buddylistcljs$core$signup_user_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = buddylistcljs$core$signup_user_$_state_machine__19555__auto____0;
buddylistcljs$core$signup_user_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = buddylistcljs$core$signup_user_$_state_machine__19555__auto____1;
return buddylistcljs$core$signup_user_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19575__auto__))
})();
var state__19577__auto__ = (function (){var statearr_19709 = f__19576__auto__.call(null);
(statearr_19709[(6)] = c__19575__auto__);

return statearr_19709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19577__auto__);
});})(c__19575__auto__))
);

return c__19575__auto__;
});
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

//# sourceMappingURL=core.js.map
