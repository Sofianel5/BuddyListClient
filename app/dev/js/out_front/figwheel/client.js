// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31289 = arguments.length;
switch (G__31289) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___31292 = arguments.length;
var i__4498__auto___31293 = (0);
while(true){
if((i__4498__auto___31293 < len__4497__auto___31292)){
args__4500__auto__.push((arguments[i__4498__auto___31293]));

var G__31294 = (i__4498__auto___31293 + (1));
i__4498__auto___31293 = G__31294;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31291){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31291));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___31296 = arguments.length;
var i__4498__auto___31297 = (0);
while(true){
if((i__4498__auto___31297 < len__4497__auto___31296)){
args__4500__auto__.push((arguments[i__4498__auto___31297]));

var G__31298 = (i__4498__auto___31297 + (1));
i__4498__auto___31297 = G__31298;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31295){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31295));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31299){
var map__31300 = p__31299;
var map__31300__$1 = ((((!((map__31300 == null)))?(((((map__31300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31300):map__31300);
var message = cljs.core.get.call(null,map__31300__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31300__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3920__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3909__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3909__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3909__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19649__auto___31379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___31379,ch){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___31379,ch){
return (function (state_31351){
var state_val_31352 = (state_31351[(1)]);
if((state_val_31352 === (7))){
var inst_31347 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
var statearr_31353_31380 = state_31351__$1;
(statearr_31353_31380[(2)] = inst_31347);

(statearr_31353_31380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (1))){
var state_31351__$1 = state_31351;
var statearr_31354_31381 = state_31351__$1;
(statearr_31354_31381[(2)] = null);

(statearr_31354_31381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (4))){
var inst_31304 = (state_31351[(7)]);
var inst_31304__$1 = (state_31351[(2)]);
var state_31351__$1 = (function (){var statearr_31355 = state_31351;
(statearr_31355[(7)] = inst_31304__$1);

return statearr_31355;
})();
if(cljs.core.truth_(inst_31304__$1)){
var statearr_31356_31382 = state_31351__$1;
(statearr_31356_31382[(1)] = (5));

} else {
var statearr_31357_31383 = state_31351__$1;
(statearr_31357_31383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (15))){
var inst_31311 = (state_31351[(8)]);
var inst_31326 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31311);
var inst_31327 = cljs.core.first.call(null,inst_31326);
var inst_31328 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31327);
var inst_31329 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31328)].join('');
var inst_31330 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31329);
var state_31351__$1 = state_31351;
var statearr_31358_31384 = state_31351__$1;
(statearr_31358_31384[(2)] = inst_31330);

(statearr_31358_31384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (13))){
var inst_31335 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
var statearr_31359_31385 = state_31351__$1;
(statearr_31359_31385[(2)] = inst_31335);

(statearr_31359_31385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (6))){
var state_31351__$1 = state_31351;
var statearr_31360_31386 = state_31351__$1;
(statearr_31360_31386[(2)] = null);

(statearr_31360_31386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (17))){
var inst_31333 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
var statearr_31361_31387 = state_31351__$1;
(statearr_31361_31387[(2)] = inst_31333);

(statearr_31361_31387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (3))){
var inst_31349 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31351__$1,inst_31349);
} else {
if((state_val_31352 === (12))){
var inst_31310 = (state_31351[(9)]);
var inst_31324 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31310,opts);
var state_31351__$1 = state_31351;
if(cljs.core.truth_(inst_31324)){
var statearr_31362_31388 = state_31351__$1;
(statearr_31362_31388[(1)] = (15));

} else {
var statearr_31363_31389 = state_31351__$1;
(statearr_31363_31389[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (2))){
var state_31351__$1 = state_31351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31351__$1,(4),ch);
} else {
if((state_val_31352 === (11))){
var inst_31311 = (state_31351[(8)]);
var inst_31316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31317 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31311);
var inst_31318 = cljs.core.async.timeout.call(null,(1000));
var inst_31319 = [inst_31317,inst_31318];
var inst_31320 = (new cljs.core.PersistentVector(null,2,(5),inst_31316,inst_31319,null));
var state_31351__$1 = state_31351;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31351__$1,(14),inst_31320);
} else {
if((state_val_31352 === (9))){
var inst_31311 = (state_31351[(8)]);
var inst_31337 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31338 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31311);
var inst_31339 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31338);
var inst_31340 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31339)].join('');
var inst_31341 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31340);
var state_31351__$1 = (function (){var statearr_31364 = state_31351;
(statearr_31364[(10)] = inst_31337);

return statearr_31364;
})();
var statearr_31365_31390 = state_31351__$1;
(statearr_31365_31390[(2)] = inst_31341);

(statearr_31365_31390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (5))){
var inst_31304 = (state_31351[(7)]);
var inst_31306 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31307 = (new cljs.core.PersistentArrayMap(null,2,inst_31306,null));
var inst_31308 = (new cljs.core.PersistentHashSet(null,inst_31307,null));
var inst_31309 = figwheel.client.focus_msgs.call(null,inst_31308,inst_31304);
var inst_31310 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31309);
var inst_31311 = cljs.core.first.call(null,inst_31309);
var inst_31312 = figwheel.client.autoload_QMARK_.call(null);
var state_31351__$1 = (function (){var statearr_31366 = state_31351;
(statearr_31366[(9)] = inst_31310);

(statearr_31366[(8)] = inst_31311);

return statearr_31366;
})();
if(cljs.core.truth_(inst_31312)){
var statearr_31367_31391 = state_31351__$1;
(statearr_31367_31391[(1)] = (8));

} else {
var statearr_31368_31392 = state_31351__$1;
(statearr_31368_31392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (14))){
var inst_31322 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
var statearr_31369_31393 = state_31351__$1;
(statearr_31369_31393[(2)] = inst_31322);

(statearr_31369_31393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (16))){
var state_31351__$1 = state_31351;
var statearr_31370_31394 = state_31351__$1;
(statearr_31370_31394[(2)] = null);

(statearr_31370_31394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (10))){
var inst_31343 = (state_31351[(2)]);
var state_31351__$1 = (function (){var statearr_31371 = state_31351;
(statearr_31371[(11)] = inst_31343);

return statearr_31371;
})();
var statearr_31372_31395 = state_31351__$1;
(statearr_31372_31395[(2)] = null);

(statearr_31372_31395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (8))){
var inst_31310 = (state_31351[(9)]);
var inst_31314 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31310,opts);
var state_31351__$1 = state_31351;
if(cljs.core.truth_(inst_31314)){
var statearr_31373_31396 = state_31351__$1;
(statearr_31373_31396[(1)] = (11));

} else {
var statearr_31374_31397 = state_31351__$1;
(statearr_31374_31397[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto___31379,ch))
;
return ((function (switch__19494__auto__,c__19649__auto___31379,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19495__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19495__auto____0 = (function (){
var statearr_31375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31375[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19495__auto__);

(statearr_31375[(1)] = (1));

return statearr_31375;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19495__auto____1 = (function (state_31351){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_31351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e31376){if((e31376 instanceof Object)){
var ex__19498__auto__ = e31376;
var statearr_31377_31398 = state_31351;
(statearr_31377_31398[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31399 = state_31351;
state_31351 = G__31399;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19495__auto__ = function(state_31351){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19495__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19495__auto____1.call(this,state_31351);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19495__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19495__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___31379,ch))
})();
var state__19651__auto__ = (function (){var statearr_31378 = f__19650__auto__.call(null);
(statearr_31378[(6)] = c__19649__auto___31379);

return statearr_31378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___31379,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31400_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31400_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31402 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31402){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31401){if((e31401 instanceof Error)){
var e = e31401;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31402], null));
} else {
var e = e31401;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31402))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31403){
var map__31404 = p__31403;
var map__31404__$1 = ((((!((map__31404 == null)))?(((((map__31404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31404):map__31404);
var opts = map__31404__$1;
var build_id = cljs.core.get.call(null,map__31404__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31404,map__31404__$1,opts,build_id){
return (function (p__31406){
var vec__31407 = p__31406;
var seq__31408 = cljs.core.seq.call(null,vec__31407);
var first__31409 = cljs.core.first.call(null,seq__31408);
var seq__31408__$1 = cljs.core.next.call(null,seq__31408);
var map__31410 = first__31409;
var map__31410__$1 = ((((!((map__31410 == null)))?(((((map__31410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31410):map__31410);
var msg = map__31410__$1;
var msg_name = cljs.core.get.call(null,map__31410__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31408__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31407,seq__31408,first__31409,seq__31408__$1,map__31410,map__31410__$1,msg,msg_name,_,map__31404,map__31404__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31407,seq__31408,first__31409,seq__31408__$1,map__31410,map__31410__$1,msg,msg_name,_,map__31404,map__31404__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31404,map__31404__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31412){
var vec__31413 = p__31412;
var seq__31414 = cljs.core.seq.call(null,vec__31413);
var first__31415 = cljs.core.first.call(null,seq__31414);
var seq__31414__$1 = cljs.core.next.call(null,seq__31414);
var map__31416 = first__31415;
var map__31416__$1 = ((((!((map__31416 == null)))?(((((map__31416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31416):map__31416);
var msg = map__31416__$1;
var msg_name = cljs.core.get.call(null,map__31416__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31414__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31418){
var map__31419 = p__31418;
var map__31419__$1 = ((((!((map__31419 == null)))?(((((map__31419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31419):map__31419);
var on_compile_warning = cljs.core.get.call(null,map__31419__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31419__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31419,map__31419__$1,on_compile_warning,on_compile_fail){
return (function (p__31421){
var vec__31422 = p__31421;
var seq__31423 = cljs.core.seq.call(null,vec__31422);
var first__31424 = cljs.core.first.call(null,seq__31423);
var seq__31423__$1 = cljs.core.next.call(null,seq__31423);
var map__31425 = first__31424;
var map__31425__$1 = ((((!((map__31425 == null)))?(((((map__31425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31425):map__31425);
var msg = map__31425__$1;
var msg_name = cljs.core.get.call(null,map__31425__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31423__$1;
var pred__31427 = cljs.core._EQ_;
var expr__31428 = msg_name;
if(cljs.core.truth_(pred__31427.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31428))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31427.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31428))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31419,map__31419__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto__,msg_hist,msg_names,msg){
return (function (state_31517){
var state_val_31518 = (state_31517[(1)]);
if((state_val_31518 === (7))){
var inst_31437 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
if(cljs.core.truth_(inst_31437)){
var statearr_31519_31566 = state_31517__$1;
(statearr_31519_31566[(1)] = (8));

} else {
var statearr_31520_31567 = state_31517__$1;
(statearr_31520_31567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (20))){
var inst_31511 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31521_31568 = state_31517__$1;
(statearr_31521_31568[(2)] = inst_31511);

(statearr_31521_31568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (27))){
var inst_31507 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31522_31569 = state_31517__$1;
(statearr_31522_31569[(2)] = inst_31507);

(statearr_31522_31569[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (1))){
var inst_31430 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31517__$1 = state_31517;
if(cljs.core.truth_(inst_31430)){
var statearr_31523_31570 = state_31517__$1;
(statearr_31523_31570[(1)] = (2));

} else {
var statearr_31524_31571 = state_31517__$1;
(statearr_31524_31571[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (24))){
var inst_31509 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31525_31572 = state_31517__$1;
(statearr_31525_31572[(2)] = inst_31509);

(statearr_31525_31572[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (4))){
var inst_31515 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31517__$1,inst_31515);
} else {
if((state_val_31518 === (15))){
var inst_31513 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31526_31573 = state_31517__$1;
(statearr_31526_31573[(2)] = inst_31513);

(statearr_31526_31573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (21))){
var inst_31466 = (state_31517[(2)]);
var inst_31467 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31468 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31467);
var state_31517__$1 = (function (){var statearr_31527 = state_31517;
(statearr_31527[(7)] = inst_31466);

return statearr_31527;
})();
var statearr_31528_31574 = state_31517__$1;
(statearr_31528_31574[(2)] = inst_31468);

(statearr_31528_31574[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (31))){
var inst_31496 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31517__$1 = state_31517;
if(cljs.core.truth_(inst_31496)){
var statearr_31529_31575 = state_31517__$1;
(statearr_31529_31575[(1)] = (34));

} else {
var statearr_31530_31576 = state_31517__$1;
(statearr_31530_31576[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (32))){
var inst_31505 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31531_31577 = state_31517__$1;
(statearr_31531_31577[(2)] = inst_31505);

(statearr_31531_31577[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (33))){
var inst_31492 = (state_31517[(2)]);
var inst_31493 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31494 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31493);
var state_31517__$1 = (function (){var statearr_31532 = state_31517;
(statearr_31532[(8)] = inst_31492);

return statearr_31532;
})();
var statearr_31533_31578 = state_31517__$1;
(statearr_31533_31578[(2)] = inst_31494);

(statearr_31533_31578[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (13))){
var inst_31451 = figwheel.client.heads_up.clear.call(null);
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31517__$1,(16),inst_31451);
} else {
if((state_val_31518 === (22))){
var inst_31472 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31473 = figwheel.client.heads_up.append_warning_message.call(null,inst_31472);
var state_31517__$1 = state_31517;
var statearr_31534_31579 = state_31517__$1;
(statearr_31534_31579[(2)] = inst_31473);

(statearr_31534_31579[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (36))){
var inst_31503 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31535_31580 = state_31517__$1;
(statearr_31535_31580[(2)] = inst_31503);

(statearr_31535_31580[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (29))){
var inst_31483 = (state_31517[(2)]);
var inst_31484 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31485 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31484);
var state_31517__$1 = (function (){var statearr_31536 = state_31517;
(statearr_31536[(9)] = inst_31483);

return statearr_31536;
})();
var statearr_31537_31581 = state_31517__$1;
(statearr_31537_31581[(2)] = inst_31485);

(statearr_31537_31581[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (6))){
var inst_31432 = (state_31517[(10)]);
var state_31517__$1 = state_31517;
var statearr_31538_31582 = state_31517__$1;
(statearr_31538_31582[(2)] = inst_31432);

(statearr_31538_31582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (28))){
var inst_31479 = (state_31517[(2)]);
var inst_31480 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31481 = figwheel.client.heads_up.display_warning.call(null,inst_31480);
var state_31517__$1 = (function (){var statearr_31539 = state_31517;
(statearr_31539[(11)] = inst_31479);

return statearr_31539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31517__$1,(29),inst_31481);
} else {
if((state_val_31518 === (25))){
var inst_31477 = figwheel.client.heads_up.clear.call(null);
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31517__$1,(28),inst_31477);
} else {
if((state_val_31518 === (34))){
var inst_31498 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31517__$1,(37),inst_31498);
} else {
if((state_val_31518 === (17))){
var inst_31457 = (state_31517[(2)]);
var inst_31458 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31459 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31458);
var state_31517__$1 = (function (){var statearr_31540 = state_31517;
(statearr_31540[(12)] = inst_31457);

return statearr_31540;
})();
var statearr_31541_31583 = state_31517__$1;
(statearr_31541_31583[(2)] = inst_31459);

(statearr_31541_31583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (3))){
var inst_31449 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31517__$1 = state_31517;
if(cljs.core.truth_(inst_31449)){
var statearr_31542_31584 = state_31517__$1;
(statearr_31542_31584[(1)] = (13));

} else {
var statearr_31543_31585 = state_31517__$1;
(statearr_31543_31585[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (12))){
var inst_31445 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31544_31586 = state_31517__$1;
(statearr_31544_31586[(2)] = inst_31445);

(statearr_31544_31586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (2))){
var inst_31432 = (state_31517[(10)]);
var inst_31432__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31517__$1 = (function (){var statearr_31545 = state_31517;
(statearr_31545[(10)] = inst_31432__$1);

return statearr_31545;
})();
if(cljs.core.truth_(inst_31432__$1)){
var statearr_31546_31587 = state_31517__$1;
(statearr_31546_31587[(1)] = (5));

} else {
var statearr_31547_31588 = state_31517__$1;
(statearr_31547_31588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (23))){
var inst_31475 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31517__$1 = state_31517;
if(cljs.core.truth_(inst_31475)){
var statearr_31548_31589 = state_31517__$1;
(statearr_31548_31589[(1)] = (25));

} else {
var statearr_31549_31590 = state_31517__$1;
(statearr_31549_31590[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (35))){
var state_31517__$1 = state_31517;
var statearr_31550_31591 = state_31517__$1;
(statearr_31550_31591[(2)] = null);

(statearr_31550_31591[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (19))){
var inst_31470 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31517__$1 = state_31517;
if(cljs.core.truth_(inst_31470)){
var statearr_31551_31592 = state_31517__$1;
(statearr_31551_31592[(1)] = (22));

} else {
var statearr_31552_31593 = state_31517__$1;
(statearr_31552_31593[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (11))){
var inst_31441 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31553_31594 = state_31517__$1;
(statearr_31553_31594[(2)] = inst_31441);

(statearr_31553_31594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (9))){
var inst_31443 = figwheel.client.heads_up.clear.call(null);
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31517__$1,(12),inst_31443);
} else {
if((state_val_31518 === (5))){
var inst_31434 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31517__$1 = state_31517;
var statearr_31554_31595 = state_31517__$1;
(statearr_31554_31595[(2)] = inst_31434);

(statearr_31554_31595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (14))){
var inst_31461 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31517__$1 = state_31517;
if(cljs.core.truth_(inst_31461)){
var statearr_31555_31596 = state_31517__$1;
(statearr_31555_31596[(1)] = (18));

} else {
var statearr_31556_31597 = state_31517__$1;
(statearr_31556_31597[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (26))){
var inst_31487 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31517__$1 = state_31517;
if(cljs.core.truth_(inst_31487)){
var statearr_31557_31598 = state_31517__$1;
(statearr_31557_31598[(1)] = (30));

} else {
var statearr_31558_31599 = state_31517__$1;
(statearr_31558_31599[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (16))){
var inst_31453 = (state_31517[(2)]);
var inst_31454 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31455 = figwheel.client.heads_up.display_exception.call(null,inst_31454);
var state_31517__$1 = (function (){var statearr_31559 = state_31517;
(statearr_31559[(13)] = inst_31453);

return statearr_31559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31517__$1,(17),inst_31455);
} else {
if((state_val_31518 === (30))){
var inst_31489 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31490 = figwheel.client.heads_up.display_warning.call(null,inst_31489);
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31517__$1,(33),inst_31490);
} else {
if((state_val_31518 === (10))){
var inst_31447 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31560_31600 = state_31517__$1;
(statearr_31560_31600[(2)] = inst_31447);

(statearr_31560_31600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (18))){
var inst_31463 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31464 = figwheel.client.heads_up.display_exception.call(null,inst_31463);
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31517__$1,(21),inst_31464);
} else {
if((state_val_31518 === (37))){
var inst_31500 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31561_31601 = state_31517__$1;
(statearr_31561_31601[(2)] = inst_31500);

(statearr_31561_31601[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (8))){
var inst_31439 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31517__$1,(11),inst_31439);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19649__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19494__auto__,c__19649__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto____0 = (function (){
var statearr_31562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31562[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto__);

(statearr_31562[(1)] = (1));

return statearr_31562;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto____1 = (function (state_31517){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_31517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e31563){if((e31563 instanceof Object)){
var ex__19498__auto__ = e31563;
var statearr_31564_31602 = state_31517;
(statearr_31564_31602[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31603 = state_31517;
state_31517 = G__31603;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto__ = function(state_31517){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto____1.call(this,state_31517);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto__,msg_hist,msg_names,msg))
})();
var state__19651__auto__ = (function (){var statearr_31565 = f__19650__auto__.call(null);
(statearr_31565[(6)] = c__19649__auto__);

return statearr_31565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__,msg_hist,msg_names,msg))
);

return c__19649__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19649__auto___31632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto___31632,ch){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto___31632,ch){
return (function (state_31618){
var state_val_31619 = (state_31618[(1)]);
if((state_val_31619 === (1))){
var state_31618__$1 = state_31618;
var statearr_31620_31633 = state_31618__$1;
(statearr_31620_31633[(2)] = null);

(statearr_31620_31633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (2))){
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31618__$1,(4),ch);
} else {
if((state_val_31619 === (3))){
var inst_31616 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31618__$1,inst_31616);
} else {
if((state_val_31619 === (4))){
var inst_31606 = (state_31618[(7)]);
var inst_31606__$1 = (state_31618[(2)]);
var state_31618__$1 = (function (){var statearr_31621 = state_31618;
(statearr_31621[(7)] = inst_31606__$1);

return statearr_31621;
})();
if(cljs.core.truth_(inst_31606__$1)){
var statearr_31622_31634 = state_31618__$1;
(statearr_31622_31634[(1)] = (5));

} else {
var statearr_31623_31635 = state_31618__$1;
(statearr_31623_31635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (5))){
var inst_31606 = (state_31618[(7)]);
var inst_31608 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31606);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31618__$1,(8),inst_31608);
} else {
if((state_val_31619 === (6))){
var state_31618__$1 = state_31618;
var statearr_31624_31636 = state_31618__$1;
(statearr_31624_31636[(2)] = null);

(statearr_31624_31636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (7))){
var inst_31614 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31625_31637 = state_31618__$1;
(statearr_31625_31637[(2)] = inst_31614);

(statearr_31625_31637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (8))){
var inst_31610 = (state_31618[(2)]);
var state_31618__$1 = (function (){var statearr_31626 = state_31618;
(statearr_31626[(8)] = inst_31610);

return statearr_31626;
})();
var statearr_31627_31638 = state_31618__$1;
(statearr_31627_31638[(2)] = null);

(statearr_31627_31638[(1)] = (2));


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
}
});})(c__19649__auto___31632,ch))
;
return ((function (switch__19494__auto__,c__19649__auto___31632,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19495__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19495__auto____0 = (function (){
var statearr_31628 = [null,null,null,null,null,null,null,null,null];
(statearr_31628[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19495__auto__);

(statearr_31628[(1)] = (1));

return statearr_31628;
});
var figwheel$client$heads_up_plugin_$_state_machine__19495__auto____1 = (function (state_31618){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_31618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e31629){if((e31629 instanceof Object)){
var ex__19498__auto__ = e31629;
var statearr_31630_31639 = state_31618;
(statearr_31630_31639[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31640 = state_31618;
state_31618 = G__31640;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19495__auto__ = function(state_31618){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19495__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19495__auto____1.call(this,state_31618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19495__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19495__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto___31632,ch))
})();
var state__19651__auto__ = (function (){var statearr_31631 = f__19650__auto__.call(null);
(statearr_31631[(6)] = c__19649__auto___31632);

return statearr_31631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto___31632,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto__){
return (function (state_31646){
var state_val_31647 = (state_31646[(1)]);
if((state_val_31647 === (1))){
var inst_31641 = cljs.core.async.timeout.call(null,(3000));
var state_31646__$1 = state_31646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31646__$1,(2),inst_31641);
} else {
if((state_val_31647 === (2))){
var inst_31643 = (state_31646[(2)]);
var inst_31644 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31646__$1 = (function (){var statearr_31648 = state_31646;
(statearr_31648[(7)] = inst_31643);

return statearr_31648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31646__$1,inst_31644);
} else {
return null;
}
}
});})(c__19649__auto__))
;
return ((function (switch__19494__auto__,c__19649__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19495__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19495__auto____0 = (function (){
var statearr_31649 = [null,null,null,null,null,null,null,null];
(statearr_31649[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19495__auto__);

(statearr_31649[(1)] = (1));

return statearr_31649;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19495__auto____1 = (function (state_31646){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_31646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e31650){if((e31650 instanceof Object)){
var ex__19498__auto__ = e31650;
var statearr_31651_31653 = state_31646;
(statearr_31651_31653[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31654 = state_31646;
state_31646 = G__31654;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19495__auto__ = function(state_31646){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19495__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19495__auto____1.call(this,state_31646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19495__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19495__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto__))
})();
var state__19651__auto__ = (function (){var statearr_31652 = f__19650__auto__.call(null);
(statearr_31652[(6)] = c__19649__auto__);

return statearr_31652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__))
);

return c__19649__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19649__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__19650__auto__ = (function (){var switch__19494__auto__ = ((function (c__19649__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31661){
var state_val_31662 = (state_31661[(1)]);
if((state_val_31662 === (1))){
var inst_31655 = cljs.core.async.timeout.call(null,(2000));
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31661__$1,(2),inst_31655);
} else {
if((state_val_31662 === (2))){
var inst_31657 = (state_31661[(2)]);
var inst_31658 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31659 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31658);
var state_31661__$1 = (function (){var statearr_31663 = state_31661;
(statearr_31663[(7)] = inst_31657);

return statearr_31663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31661__$1,inst_31659);
} else {
return null;
}
}
});})(c__19649__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__19494__auto__,c__19649__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto____0 = (function (){
var statearr_31664 = [null,null,null,null,null,null,null,null];
(statearr_31664[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto__);

(statearr_31664[(1)] = (1));

return statearr_31664;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto____1 = (function (state_31661){
while(true){
var ret_value__19496__auto__ = (function (){try{while(true){
var result__19497__auto__ = switch__19494__auto__.call(null,state_31661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19497__auto__;
}
break;
}
}catch (e31665){if((e31665 instanceof Object)){
var ex__19498__auto__ = e31665;
var statearr_31666_31668 = state_31661;
(statearr_31666_31668[(5)] = ex__19498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31669 = state_31661;
state_31661 = G__31669;
continue;
} else {
return ret_value__19496__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto__ = function(state_31661){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto____1.call(this,state_31661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19495__auto__;
})()
;})(switch__19494__auto__,c__19649__auto__,figwheel_version,temp__4657__auto__))
})();
var state__19651__auto__ = (function (){var statearr_31667 = f__19650__auto__.call(null);
(statearr_31667[(6)] = c__19649__auto__);

return statearr_31667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19651__auto__);
});})(c__19649__auto__,figwheel_version,temp__4657__auto__))
);

return c__19649__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31670){
var map__31671 = p__31670;
var map__31671__$1 = ((((!((map__31671 == null)))?(((((map__31671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31671):map__31671);
var file = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31673 = "";
var G__31673__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31673),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31673);
var G__31673__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31673__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31673__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31673__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31673__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31674){
var map__31675 = p__31674;
var map__31675__$1 = ((((!((map__31675 == null)))?(((((map__31675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31675):map__31675);
var ed = map__31675__$1;
var formatted_exception = cljs.core.get.call(null,map__31675__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31675__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31675__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31677_31681 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31678_31682 = null;
var count__31679_31683 = (0);
var i__31680_31684 = (0);
while(true){
if((i__31680_31684 < count__31679_31683)){
var msg_31685 = cljs.core._nth.call(null,chunk__31678_31682,i__31680_31684);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31685);


var G__31686 = seq__31677_31681;
var G__31687 = chunk__31678_31682;
var G__31688 = count__31679_31683;
var G__31689 = (i__31680_31684 + (1));
seq__31677_31681 = G__31686;
chunk__31678_31682 = G__31687;
count__31679_31683 = G__31688;
i__31680_31684 = G__31689;
continue;
} else {
var temp__4657__auto___31690 = cljs.core.seq.call(null,seq__31677_31681);
if(temp__4657__auto___31690){
var seq__31677_31691__$1 = temp__4657__auto___31690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31677_31691__$1)){
var c__4317__auto___31692 = cljs.core.chunk_first.call(null,seq__31677_31691__$1);
var G__31693 = cljs.core.chunk_rest.call(null,seq__31677_31691__$1);
var G__31694 = c__4317__auto___31692;
var G__31695 = cljs.core.count.call(null,c__4317__auto___31692);
var G__31696 = (0);
seq__31677_31681 = G__31693;
chunk__31678_31682 = G__31694;
count__31679_31683 = G__31695;
i__31680_31684 = G__31696;
continue;
} else {
var msg_31697 = cljs.core.first.call(null,seq__31677_31691__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31697);


var G__31698 = cljs.core.next.call(null,seq__31677_31691__$1);
var G__31699 = null;
var G__31700 = (0);
var G__31701 = (0);
seq__31677_31681 = G__31698;
chunk__31678_31682 = G__31699;
count__31679_31683 = G__31700;
i__31680_31684 = G__31701;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31702){
var map__31703 = p__31702;
var map__31703__$1 = ((((!((map__31703 == null)))?(((((map__31703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31703):map__31703);
var w = map__31703__$1;
var message = cljs.core.get.call(null,map__31703__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/dev/js/out_front/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/dev/js/out_front/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3909__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3909__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31705 = cljs.core.seq.call(null,plugins);
var chunk__31706 = null;
var count__31707 = (0);
var i__31708 = (0);
while(true){
if((i__31708 < count__31707)){
var vec__31709 = cljs.core._nth.call(null,chunk__31706,i__31708);
var k = cljs.core.nth.call(null,vec__31709,(0),null);
var plugin = cljs.core.nth.call(null,vec__31709,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31715 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31705,chunk__31706,count__31707,i__31708,pl_31715,vec__31709,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31715.call(null,msg_hist);
});})(seq__31705,chunk__31706,count__31707,i__31708,pl_31715,vec__31709,k,plugin))
);
} else {
}


var G__31716 = seq__31705;
var G__31717 = chunk__31706;
var G__31718 = count__31707;
var G__31719 = (i__31708 + (1));
seq__31705 = G__31716;
chunk__31706 = G__31717;
count__31707 = G__31718;
i__31708 = G__31719;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31705);
if(temp__4657__auto__){
var seq__31705__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31705__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__31705__$1);
var G__31720 = cljs.core.chunk_rest.call(null,seq__31705__$1);
var G__31721 = c__4317__auto__;
var G__31722 = cljs.core.count.call(null,c__4317__auto__);
var G__31723 = (0);
seq__31705 = G__31720;
chunk__31706 = G__31721;
count__31707 = G__31722;
i__31708 = G__31723;
continue;
} else {
var vec__31712 = cljs.core.first.call(null,seq__31705__$1);
var k = cljs.core.nth.call(null,vec__31712,(0),null);
var plugin = cljs.core.nth.call(null,vec__31712,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31724 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31705,chunk__31706,count__31707,i__31708,pl_31724,vec__31712,k,plugin,seq__31705__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31724.call(null,msg_hist);
});})(seq__31705,chunk__31706,count__31707,i__31708,pl_31724,vec__31712,k,plugin,seq__31705__$1,temp__4657__auto__))
);
} else {
}


var G__31725 = cljs.core.next.call(null,seq__31705__$1);
var G__31726 = null;
var G__31727 = (0);
var G__31728 = (0);
seq__31705 = G__31725;
chunk__31706 = G__31726;
count__31707 = G__31727;
i__31708 = G__31728;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31730 = arguments.length;
switch (G__31730) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31731_31736 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31732_31737 = null;
var count__31733_31738 = (0);
var i__31734_31739 = (0);
while(true){
if((i__31734_31739 < count__31733_31738)){
var msg_31740 = cljs.core._nth.call(null,chunk__31732_31737,i__31734_31739);
figwheel.client.socket.handle_incoming_message.call(null,msg_31740);


var G__31741 = seq__31731_31736;
var G__31742 = chunk__31732_31737;
var G__31743 = count__31733_31738;
var G__31744 = (i__31734_31739 + (1));
seq__31731_31736 = G__31741;
chunk__31732_31737 = G__31742;
count__31733_31738 = G__31743;
i__31734_31739 = G__31744;
continue;
} else {
var temp__4657__auto___31745 = cljs.core.seq.call(null,seq__31731_31736);
if(temp__4657__auto___31745){
var seq__31731_31746__$1 = temp__4657__auto___31745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31731_31746__$1)){
var c__4317__auto___31747 = cljs.core.chunk_first.call(null,seq__31731_31746__$1);
var G__31748 = cljs.core.chunk_rest.call(null,seq__31731_31746__$1);
var G__31749 = c__4317__auto___31747;
var G__31750 = cljs.core.count.call(null,c__4317__auto___31747);
var G__31751 = (0);
seq__31731_31736 = G__31748;
chunk__31732_31737 = G__31749;
count__31733_31738 = G__31750;
i__31734_31739 = G__31751;
continue;
} else {
var msg_31752 = cljs.core.first.call(null,seq__31731_31746__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31752);


var G__31753 = cljs.core.next.call(null,seq__31731_31746__$1);
var G__31754 = null;
var G__31755 = (0);
var G__31756 = (0);
seq__31731_31736 = G__31753;
chunk__31732_31737 = G__31754;
count__31733_31738 = G__31755;
i__31734_31739 = G__31756;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4500__auto__ = [];
var len__4497__auto___31761 = arguments.length;
var i__4498__auto___31762 = (0);
while(true){
if((i__4498__auto___31762 < len__4497__auto___31761)){
args__4500__auto__.push((arguments[i__4498__auto___31762]));

var G__31763 = (i__4498__auto___31762 + (1));
i__4498__auto___31762 = G__31763;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31758){
var map__31759 = p__31758;
var map__31759__$1 = ((((!((map__31759 == null)))?(((((map__31759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31759):map__31759);
var opts = map__31759__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31757){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31757));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31764){if((e31764 instanceof Error)){
var e = e31764;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31764;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31765){
var map__31766 = p__31765;
var map__31766__$1 = ((((!((map__31766 == null)))?(((((map__31766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31766):map__31766);
var msg_name = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
