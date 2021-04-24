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
var G__31321 = arguments.length;
switch (G__31321) {
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
var len__4497__auto___31324 = arguments.length;
var i__4498__auto___31325 = (0);
while(true){
if((i__4498__auto___31325 < len__4497__auto___31324)){
args__4500__auto__.push((arguments[i__4498__auto___31325]));

var G__31326 = (i__4498__auto___31325 + (1));
i__4498__auto___31325 = G__31326;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31323){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31323));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___31328 = arguments.length;
var i__4498__auto___31329 = (0);
while(true){
if((i__4498__auto___31329 < len__4497__auto___31328)){
args__4500__auto__.push((arguments[i__4498__auto___31329]));

var G__31330 = (i__4498__auto___31329 + (1));
i__4498__auto___31329 = G__31330;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31327){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31327));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31331){
var map__31332 = p__31331;
var map__31332__$1 = ((((!((map__31332 == null)))?(((((map__31332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31332):map__31332);
var message = cljs.core.get.call(null,map__31332__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31332__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19618__auto___31411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___31411,ch){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___31411,ch){
return (function (state_31383){
var state_val_31384 = (state_31383[(1)]);
if((state_val_31384 === (7))){
var inst_31379 = (state_31383[(2)]);
var state_31383__$1 = state_31383;
var statearr_31385_31412 = state_31383__$1;
(statearr_31385_31412[(2)] = inst_31379);

(statearr_31385_31412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (1))){
var state_31383__$1 = state_31383;
var statearr_31386_31413 = state_31383__$1;
(statearr_31386_31413[(2)] = null);

(statearr_31386_31413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (4))){
var inst_31336 = (state_31383[(7)]);
var inst_31336__$1 = (state_31383[(2)]);
var state_31383__$1 = (function (){var statearr_31387 = state_31383;
(statearr_31387[(7)] = inst_31336__$1);

return statearr_31387;
})();
if(cljs.core.truth_(inst_31336__$1)){
var statearr_31388_31414 = state_31383__$1;
(statearr_31388_31414[(1)] = (5));

} else {
var statearr_31389_31415 = state_31383__$1;
(statearr_31389_31415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (15))){
var inst_31343 = (state_31383[(8)]);
var inst_31358 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31343);
var inst_31359 = cljs.core.first.call(null,inst_31358);
var inst_31360 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31359);
var inst_31361 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31360)].join('');
var inst_31362 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31361);
var state_31383__$1 = state_31383;
var statearr_31390_31416 = state_31383__$1;
(statearr_31390_31416[(2)] = inst_31362);

(statearr_31390_31416[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (13))){
var inst_31367 = (state_31383[(2)]);
var state_31383__$1 = state_31383;
var statearr_31391_31417 = state_31383__$1;
(statearr_31391_31417[(2)] = inst_31367);

(statearr_31391_31417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (6))){
var state_31383__$1 = state_31383;
var statearr_31392_31418 = state_31383__$1;
(statearr_31392_31418[(2)] = null);

(statearr_31392_31418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (17))){
var inst_31365 = (state_31383[(2)]);
var state_31383__$1 = state_31383;
var statearr_31393_31419 = state_31383__$1;
(statearr_31393_31419[(2)] = inst_31365);

(statearr_31393_31419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (3))){
var inst_31381 = (state_31383[(2)]);
var state_31383__$1 = state_31383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31383__$1,inst_31381);
} else {
if((state_val_31384 === (12))){
var inst_31342 = (state_31383[(9)]);
var inst_31356 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31342,opts);
var state_31383__$1 = state_31383;
if(cljs.core.truth_(inst_31356)){
var statearr_31394_31420 = state_31383__$1;
(statearr_31394_31420[(1)] = (15));

} else {
var statearr_31395_31421 = state_31383__$1;
(statearr_31395_31421[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (2))){
var state_31383__$1 = state_31383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31383__$1,(4),ch);
} else {
if((state_val_31384 === (11))){
var inst_31343 = (state_31383[(8)]);
var inst_31348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31349 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31343);
var inst_31350 = cljs.core.async.timeout.call(null,(1000));
var inst_31351 = [inst_31349,inst_31350];
var inst_31352 = (new cljs.core.PersistentVector(null,2,(5),inst_31348,inst_31351,null));
var state_31383__$1 = state_31383;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31383__$1,(14),inst_31352);
} else {
if((state_val_31384 === (9))){
var inst_31343 = (state_31383[(8)]);
var inst_31369 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31370 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31343);
var inst_31371 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31370);
var inst_31372 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31371)].join('');
var inst_31373 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31372);
var state_31383__$1 = (function (){var statearr_31396 = state_31383;
(statearr_31396[(10)] = inst_31369);

return statearr_31396;
})();
var statearr_31397_31422 = state_31383__$1;
(statearr_31397_31422[(2)] = inst_31373);

(statearr_31397_31422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (5))){
var inst_31336 = (state_31383[(7)]);
var inst_31338 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31339 = (new cljs.core.PersistentArrayMap(null,2,inst_31338,null));
var inst_31340 = (new cljs.core.PersistentHashSet(null,inst_31339,null));
var inst_31341 = figwheel.client.focus_msgs.call(null,inst_31340,inst_31336);
var inst_31342 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31341);
var inst_31343 = cljs.core.first.call(null,inst_31341);
var inst_31344 = figwheel.client.autoload_QMARK_.call(null);
var state_31383__$1 = (function (){var statearr_31398 = state_31383;
(statearr_31398[(9)] = inst_31342);

(statearr_31398[(8)] = inst_31343);

return statearr_31398;
})();
if(cljs.core.truth_(inst_31344)){
var statearr_31399_31423 = state_31383__$1;
(statearr_31399_31423[(1)] = (8));

} else {
var statearr_31400_31424 = state_31383__$1;
(statearr_31400_31424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (14))){
var inst_31354 = (state_31383[(2)]);
var state_31383__$1 = state_31383;
var statearr_31401_31425 = state_31383__$1;
(statearr_31401_31425[(2)] = inst_31354);

(statearr_31401_31425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (16))){
var state_31383__$1 = state_31383;
var statearr_31402_31426 = state_31383__$1;
(statearr_31402_31426[(2)] = null);

(statearr_31402_31426[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (10))){
var inst_31375 = (state_31383[(2)]);
var state_31383__$1 = (function (){var statearr_31403 = state_31383;
(statearr_31403[(11)] = inst_31375);

return statearr_31403;
})();
var statearr_31404_31427 = state_31383__$1;
(statearr_31404_31427[(2)] = null);

(statearr_31404_31427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (8))){
var inst_31342 = (state_31383[(9)]);
var inst_31346 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31342,opts);
var state_31383__$1 = state_31383;
if(cljs.core.truth_(inst_31346)){
var statearr_31405_31428 = state_31383__$1;
(statearr_31405_31428[(1)] = (11));

} else {
var statearr_31406_31429 = state_31383__$1;
(statearr_31406_31429[(1)] = (12));

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
});})(c__19618__auto___31411,ch))
;
return ((function (switch__19597__auto__,c__19618__auto___31411,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19598__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19598__auto____0 = (function (){
var statearr_31407 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31407[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19598__auto__);

(statearr_31407[(1)] = (1));

return statearr_31407;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19598__auto____1 = (function (state_31383){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_31383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e31408){if((e31408 instanceof Object)){
var ex__19601__auto__ = e31408;
var statearr_31409_31430 = state_31383;
(statearr_31409_31430[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31431 = state_31383;
state_31383 = G__31431;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19598__auto__ = function(state_31383){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19598__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19598__auto____1.call(this,state_31383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19598__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19598__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___31411,ch))
})();
var state__19620__auto__ = (function (){var statearr_31410 = f__19619__auto__.call(null);
(statearr_31410[(6)] = c__19618__auto___31411);

return statearr_31410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___31411,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31432_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31432_SHARP_));
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
var base_path_31434 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31434){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31433){if((e31433 instanceof Error)){
var e = e31433;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31434], null));
} else {
var e = e31433;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31434))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31435){
var map__31436 = p__31435;
var map__31436__$1 = ((((!((map__31436 == null)))?(((((map__31436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31436):map__31436);
var opts = map__31436__$1;
var build_id = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31436,map__31436__$1,opts,build_id){
return (function (p__31438){
var vec__31439 = p__31438;
var seq__31440 = cljs.core.seq.call(null,vec__31439);
var first__31441 = cljs.core.first.call(null,seq__31440);
var seq__31440__$1 = cljs.core.next.call(null,seq__31440);
var map__31442 = first__31441;
var map__31442__$1 = ((((!((map__31442 == null)))?(((((map__31442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31442):map__31442);
var msg = map__31442__$1;
var msg_name = cljs.core.get.call(null,map__31442__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31440__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31439,seq__31440,first__31441,seq__31440__$1,map__31442,map__31442__$1,msg,msg_name,_,map__31436,map__31436__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31439,seq__31440,first__31441,seq__31440__$1,map__31442,map__31442__$1,msg,msg_name,_,map__31436,map__31436__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31436,map__31436__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31444){
var vec__31445 = p__31444;
var seq__31446 = cljs.core.seq.call(null,vec__31445);
var first__31447 = cljs.core.first.call(null,seq__31446);
var seq__31446__$1 = cljs.core.next.call(null,seq__31446);
var map__31448 = first__31447;
var map__31448__$1 = ((((!((map__31448 == null)))?(((((map__31448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31448):map__31448);
var msg = map__31448__$1;
var msg_name = cljs.core.get.call(null,map__31448__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31446__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31450){
var map__31451 = p__31450;
var map__31451__$1 = ((((!((map__31451 == null)))?(((((map__31451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31451):map__31451);
var on_compile_warning = cljs.core.get.call(null,map__31451__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31451__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31451,map__31451__$1,on_compile_warning,on_compile_fail){
return (function (p__31453){
var vec__31454 = p__31453;
var seq__31455 = cljs.core.seq.call(null,vec__31454);
var first__31456 = cljs.core.first.call(null,seq__31455);
var seq__31455__$1 = cljs.core.next.call(null,seq__31455);
var map__31457 = first__31456;
var map__31457__$1 = ((((!((map__31457 == null)))?(((((map__31457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31457):map__31457);
var msg = map__31457__$1;
var msg_name = cljs.core.get.call(null,map__31457__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31455__$1;
var pred__31459 = cljs.core._EQ_;
var expr__31460 = msg_name;
if(cljs.core.truth_(pred__31459.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31460))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31459.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31460))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31451,map__31451__$1,on_compile_warning,on_compile_fail))
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
var c__19618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto__,msg_hist,msg_names,msg){
return (function (state_31549){
var state_val_31550 = (state_31549[(1)]);
if((state_val_31550 === (7))){
var inst_31469 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
if(cljs.core.truth_(inst_31469)){
var statearr_31551_31598 = state_31549__$1;
(statearr_31551_31598[(1)] = (8));

} else {
var statearr_31552_31599 = state_31549__$1;
(statearr_31552_31599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (20))){
var inst_31543 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31553_31600 = state_31549__$1;
(statearr_31553_31600[(2)] = inst_31543);

(statearr_31553_31600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (27))){
var inst_31539 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31554_31601 = state_31549__$1;
(statearr_31554_31601[(2)] = inst_31539);

(statearr_31554_31601[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (1))){
var inst_31462 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31549__$1 = state_31549;
if(cljs.core.truth_(inst_31462)){
var statearr_31555_31602 = state_31549__$1;
(statearr_31555_31602[(1)] = (2));

} else {
var statearr_31556_31603 = state_31549__$1;
(statearr_31556_31603[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (24))){
var inst_31541 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31557_31604 = state_31549__$1;
(statearr_31557_31604[(2)] = inst_31541);

(statearr_31557_31604[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (4))){
var inst_31547 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31549__$1,inst_31547);
} else {
if((state_val_31550 === (15))){
var inst_31545 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31558_31605 = state_31549__$1;
(statearr_31558_31605[(2)] = inst_31545);

(statearr_31558_31605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (21))){
var inst_31498 = (state_31549[(2)]);
var inst_31499 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31500 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31499);
var state_31549__$1 = (function (){var statearr_31559 = state_31549;
(statearr_31559[(7)] = inst_31498);

return statearr_31559;
})();
var statearr_31560_31606 = state_31549__$1;
(statearr_31560_31606[(2)] = inst_31500);

(statearr_31560_31606[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (31))){
var inst_31528 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31549__$1 = state_31549;
if(cljs.core.truth_(inst_31528)){
var statearr_31561_31607 = state_31549__$1;
(statearr_31561_31607[(1)] = (34));

} else {
var statearr_31562_31608 = state_31549__$1;
(statearr_31562_31608[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (32))){
var inst_31537 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31563_31609 = state_31549__$1;
(statearr_31563_31609[(2)] = inst_31537);

(statearr_31563_31609[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (33))){
var inst_31524 = (state_31549[(2)]);
var inst_31525 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31526 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31525);
var state_31549__$1 = (function (){var statearr_31564 = state_31549;
(statearr_31564[(8)] = inst_31524);

return statearr_31564;
})();
var statearr_31565_31610 = state_31549__$1;
(statearr_31565_31610[(2)] = inst_31526);

(statearr_31565_31610[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (13))){
var inst_31483 = figwheel.client.heads_up.clear.call(null);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(16),inst_31483);
} else {
if((state_val_31550 === (22))){
var inst_31504 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31505 = figwheel.client.heads_up.append_warning_message.call(null,inst_31504);
var state_31549__$1 = state_31549;
var statearr_31566_31611 = state_31549__$1;
(statearr_31566_31611[(2)] = inst_31505);

(statearr_31566_31611[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (36))){
var inst_31535 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31567_31612 = state_31549__$1;
(statearr_31567_31612[(2)] = inst_31535);

(statearr_31567_31612[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (29))){
var inst_31515 = (state_31549[(2)]);
var inst_31516 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31517 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31516);
var state_31549__$1 = (function (){var statearr_31568 = state_31549;
(statearr_31568[(9)] = inst_31515);

return statearr_31568;
})();
var statearr_31569_31613 = state_31549__$1;
(statearr_31569_31613[(2)] = inst_31517);

(statearr_31569_31613[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (6))){
var inst_31464 = (state_31549[(10)]);
var state_31549__$1 = state_31549;
var statearr_31570_31614 = state_31549__$1;
(statearr_31570_31614[(2)] = inst_31464);

(statearr_31570_31614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (28))){
var inst_31511 = (state_31549[(2)]);
var inst_31512 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31513 = figwheel.client.heads_up.display_warning.call(null,inst_31512);
var state_31549__$1 = (function (){var statearr_31571 = state_31549;
(statearr_31571[(11)] = inst_31511);

return statearr_31571;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(29),inst_31513);
} else {
if((state_val_31550 === (25))){
var inst_31509 = figwheel.client.heads_up.clear.call(null);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(28),inst_31509);
} else {
if((state_val_31550 === (34))){
var inst_31530 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(37),inst_31530);
} else {
if((state_val_31550 === (17))){
var inst_31489 = (state_31549[(2)]);
var inst_31490 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31491 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31490);
var state_31549__$1 = (function (){var statearr_31572 = state_31549;
(statearr_31572[(12)] = inst_31489);

return statearr_31572;
})();
var statearr_31573_31615 = state_31549__$1;
(statearr_31573_31615[(2)] = inst_31491);

(statearr_31573_31615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (3))){
var inst_31481 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31549__$1 = state_31549;
if(cljs.core.truth_(inst_31481)){
var statearr_31574_31616 = state_31549__$1;
(statearr_31574_31616[(1)] = (13));

} else {
var statearr_31575_31617 = state_31549__$1;
(statearr_31575_31617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (12))){
var inst_31477 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31576_31618 = state_31549__$1;
(statearr_31576_31618[(2)] = inst_31477);

(statearr_31576_31618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (2))){
var inst_31464 = (state_31549[(10)]);
var inst_31464__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31549__$1 = (function (){var statearr_31577 = state_31549;
(statearr_31577[(10)] = inst_31464__$1);

return statearr_31577;
})();
if(cljs.core.truth_(inst_31464__$1)){
var statearr_31578_31619 = state_31549__$1;
(statearr_31578_31619[(1)] = (5));

} else {
var statearr_31579_31620 = state_31549__$1;
(statearr_31579_31620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (23))){
var inst_31507 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31549__$1 = state_31549;
if(cljs.core.truth_(inst_31507)){
var statearr_31580_31621 = state_31549__$1;
(statearr_31580_31621[(1)] = (25));

} else {
var statearr_31581_31622 = state_31549__$1;
(statearr_31581_31622[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (35))){
var state_31549__$1 = state_31549;
var statearr_31582_31623 = state_31549__$1;
(statearr_31582_31623[(2)] = null);

(statearr_31582_31623[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (19))){
var inst_31502 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31549__$1 = state_31549;
if(cljs.core.truth_(inst_31502)){
var statearr_31583_31624 = state_31549__$1;
(statearr_31583_31624[(1)] = (22));

} else {
var statearr_31584_31625 = state_31549__$1;
(statearr_31584_31625[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (11))){
var inst_31473 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31585_31626 = state_31549__$1;
(statearr_31585_31626[(2)] = inst_31473);

(statearr_31585_31626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (9))){
var inst_31475 = figwheel.client.heads_up.clear.call(null);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(12),inst_31475);
} else {
if((state_val_31550 === (5))){
var inst_31466 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31549__$1 = state_31549;
var statearr_31586_31627 = state_31549__$1;
(statearr_31586_31627[(2)] = inst_31466);

(statearr_31586_31627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (14))){
var inst_31493 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31549__$1 = state_31549;
if(cljs.core.truth_(inst_31493)){
var statearr_31587_31628 = state_31549__$1;
(statearr_31587_31628[(1)] = (18));

} else {
var statearr_31588_31629 = state_31549__$1;
(statearr_31588_31629[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (26))){
var inst_31519 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31549__$1 = state_31549;
if(cljs.core.truth_(inst_31519)){
var statearr_31589_31630 = state_31549__$1;
(statearr_31589_31630[(1)] = (30));

} else {
var statearr_31590_31631 = state_31549__$1;
(statearr_31590_31631[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (16))){
var inst_31485 = (state_31549[(2)]);
var inst_31486 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31487 = figwheel.client.heads_up.display_exception.call(null,inst_31486);
var state_31549__$1 = (function (){var statearr_31591 = state_31549;
(statearr_31591[(13)] = inst_31485);

return statearr_31591;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(17),inst_31487);
} else {
if((state_val_31550 === (30))){
var inst_31521 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31522 = figwheel.client.heads_up.display_warning.call(null,inst_31521);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(33),inst_31522);
} else {
if((state_val_31550 === (10))){
var inst_31479 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31592_31632 = state_31549__$1;
(statearr_31592_31632[(2)] = inst_31479);

(statearr_31592_31632[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (18))){
var inst_31495 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31496 = figwheel.client.heads_up.display_exception.call(null,inst_31495);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(21),inst_31496);
} else {
if((state_val_31550 === (37))){
var inst_31532 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31593_31633 = state_31549__$1;
(statearr_31593_31633[(2)] = inst_31532);

(statearr_31593_31633[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (8))){
var inst_31471 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(11),inst_31471);
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
});})(c__19618__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19597__auto__,c__19618__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto____0 = (function (){
var statearr_31594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31594[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto__);

(statearr_31594[(1)] = (1));

return statearr_31594;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto____1 = (function (state_31549){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_31549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e31595){if((e31595 instanceof Object)){
var ex__19601__auto__ = e31595;
var statearr_31596_31634 = state_31549;
(statearr_31596_31634[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31635 = state_31549;
state_31549 = G__31635;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto__ = function(state_31549){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto____1.call(this,state_31549);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto__,msg_hist,msg_names,msg))
})();
var state__19620__auto__ = (function (){var statearr_31597 = f__19619__auto__.call(null);
(statearr_31597[(6)] = c__19618__auto__);

return statearr_31597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto__,msg_hist,msg_names,msg))
);

return c__19618__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19618__auto___31664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto___31664,ch){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto___31664,ch){
return (function (state_31650){
var state_val_31651 = (state_31650[(1)]);
if((state_val_31651 === (1))){
var state_31650__$1 = state_31650;
var statearr_31652_31665 = state_31650__$1;
(statearr_31652_31665[(2)] = null);

(statearr_31652_31665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (2))){
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31650__$1,(4),ch);
} else {
if((state_val_31651 === (3))){
var inst_31648 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31650__$1,inst_31648);
} else {
if((state_val_31651 === (4))){
var inst_31638 = (state_31650[(7)]);
var inst_31638__$1 = (state_31650[(2)]);
var state_31650__$1 = (function (){var statearr_31653 = state_31650;
(statearr_31653[(7)] = inst_31638__$1);

return statearr_31653;
})();
if(cljs.core.truth_(inst_31638__$1)){
var statearr_31654_31666 = state_31650__$1;
(statearr_31654_31666[(1)] = (5));

} else {
var statearr_31655_31667 = state_31650__$1;
(statearr_31655_31667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (5))){
var inst_31638 = (state_31650[(7)]);
var inst_31640 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31638);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31650__$1,(8),inst_31640);
} else {
if((state_val_31651 === (6))){
var state_31650__$1 = state_31650;
var statearr_31656_31668 = state_31650__$1;
(statearr_31656_31668[(2)] = null);

(statearr_31656_31668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (7))){
var inst_31646 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31657_31669 = state_31650__$1;
(statearr_31657_31669[(2)] = inst_31646);

(statearr_31657_31669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (8))){
var inst_31642 = (state_31650[(2)]);
var state_31650__$1 = (function (){var statearr_31658 = state_31650;
(statearr_31658[(8)] = inst_31642);

return statearr_31658;
})();
var statearr_31659_31670 = state_31650__$1;
(statearr_31659_31670[(2)] = null);

(statearr_31659_31670[(1)] = (2));


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
});})(c__19618__auto___31664,ch))
;
return ((function (switch__19597__auto__,c__19618__auto___31664,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19598__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19598__auto____0 = (function (){
var statearr_31660 = [null,null,null,null,null,null,null,null,null];
(statearr_31660[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19598__auto__);

(statearr_31660[(1)] = (1));

return statearr_31660;
});
var figwheel$client$heads_up_plugin_$_state_machine__19598__auto____1 = (function (state_31650){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_31650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e31661){if((e31661 instanceof Object)){
var ex__19601__auto__ = e31661;
var statearr_31662_31671 = state_31650;
(statearr_31662_31671[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31672 = state_31650;
state_31650 = G__31672;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19598__auto__ = function(state_31650){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19598__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19598__auto____1.call(this,state_31650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19598__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19598__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto___31664,ch))
})();
var state__19620__auto__ = (function (){var statearr_31663 = f__19619__auto__.call(null);
(statearr_31663[(6)] = c__19618__auto___31664);

return statearr_31663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto___31664,ch))
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
var c__19618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto__){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto__){
return (function (state_31678){
var state_val_31679 = (state_31678[(1)]);
if((state_val_31679 === (1))){
var inst_31673 = cljs.core.async.timeout.call(null,(3000));
var state_31678__$1 = state_31678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31678__$1,(2),inst_31673);
} else {
if((state_val_31679 === (2))){
var inst_31675 = (state_31678[(2)]);
var inst_31676 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31678__$1 = (function (){var statearr_31680 = state_31678;
(statearr_31680[(7)] = inst_31675);

return statearr_31680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31678__$1,inst_31676);
} else {
return null;
}
}
});})(c__19618__auto__))
;
return ((function (switch__19597__auto__,c__19618__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19598__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19598__auto____0 = (function (){
var statearr_31681 = [null,null,null,null,null,null,null,null];
(statearr_31681[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19598__auto__);

(statearr_31681[(1)] = (1));

return statearr_31681;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19598__auto____1 = (function (state_31678){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_31678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e31682){if((e31682 instanceof Object)){
var ex__19601__auto__ = e31682;
var statearr_31683_31685 = state_31678;
(statearr_31683_31685[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31686 = state_31678;
state_31678 = G__31686;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19598__auto__ = function(state_31678){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19598__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19598__auto____1.call(this,state_31678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19598__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19598__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto__))
})();
var state__19620__auto__ = (function (){var statearr_31684 = f__19619__auto__.call(null);
(statearr_31684[(6)] = c__19618__auto__);

return statearr_31684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto__))
);

return c__19618__auto__;
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
var c__19618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19618__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__19619__auto__ = (function (){var switch__19597__auto__ = ((function (c__19618__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31693){
var state_val_31694 = (state_31693[(1)]);
if((state_val_31694 === (1))){
var inst_31687 = cljs.core.async.timeout.call(null,(2000));
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(2),inst_31687);
} else {
if((state_val_31694 === (2))){
var inst_31689 = (state_31693[(2)]);
var inst_31690 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31691 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31690);
var state_31693__$1 = (function (){var statearr_31695 = state_31693;
(statearr_31695[(7)] = inst_31689);

return statearr_31695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31693__$1,inst_31691);
} else {
return null;
}
}
});})(c__19618__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__19597__auto__,c__19618__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto____0 = (function (){
var statearr_31696 = [null,null,null,null,null,null,null,null];
(statearr_31696[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto__);

(statearr_31696[(1)] = (1));

return statearr_31696;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto____1 = (function (state_31693){
while(true){
var ret_value__19599__auto__ = (function (){try{while(true){
var result__19600__auto__ = switch__19597__auto__.call(null,state_31693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19600__auto__;
}
break;
}
}catch (e31697){if((e31697 instanceof Object)){
var ex__19601__auto__ = e31697;
var statearr_31698_31700 = state_31693;
(statearr_31698_31700[(5)] = ex__19601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31701 = state_31693;
state_31693 = G__31701;
continue;
} else {
return ret_value__19599__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto__ = function(state_31693){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto____1.call(this,state_31693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19598__auto__;
})()
;})(switch__19597__auto__,c__19618__auto__,figwheel_version,temp__4657__auto__))
})();
var state__19620__auto__ = (function (){var statearr_31699 = f__19619__auto__.call(null);
(statearr_31699[(6)] = c__19618__auto__);

return statearr_31699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19620__auto__);
});})(c__19618__auto__,figwheel_version,temp__4657__auto__))
);

return c__19618__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31702){
var map__31703 = p__31702;
var map__31703__$1 = ((((!((map__31703 == null)))?(((((map__31703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31703):map__31703);
var file = cljs.core.get.call(null,map__31703__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31703__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31703__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31705 = "";
var G__31705__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31705),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31705);
var G__31705__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31705__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31705__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31705__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31705__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31706){
var map__31707 = p__31706;
var map__31707__$1 = ((((!((map__31707 == null)))?(((((map__31707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31707):map__31707);
var ed = map__31707__$1;
var formatted_exception = cljs.core.get.call(null,map__31707__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31707__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31707__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31709_31713 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31710_31714 = null;
var count__31711_31715 = (0);
var i__31712_31716 = (0);
while(true){
if((i__31712_31716 < count__31711_31715)){
var msg_31717 = cljs.core._nth.call(null,chunk__31710_31714,i__31712_31716);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31717);


var G__31718 = seq__31709_31713;
var G__31719 = chunk__31710_31714;
var G__31720 = count__31711_31715;
var G__31721 = (i__31712_31716 + (1));
seq__31709_31713 = G__31718;
chunk__31710_31714 = G__31719;
count__31711_31715 = G__31720;
i__31712_31716 = G__31721;
continue;
} else {
var temp__4657__auto___31722 = cljs.core.seq.call(null,seq__31709_31713);
if(temp__4657__auto___31722){
var seq__31709_31723__$1 = temp__4657__auto___31722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31709_31723__$1)){
var c__4317__auto___31724 = cljs.core.chunk_first.call(null,seq__31709_31723__$1);
var G__31725 = cljs.core.chunk_rest.call(null,seq__31709_31723__$1);
var G__31726 = c__4317__auto___31724;
var G__31727 = cljs.core.count.call(null,c__4317__auto___31724);
var G__31728 = (0);
seq__31709_31713 = G__31725;
chunk__31710_31714 = G__31726;
count__31711_31715 = G__31727;
i__31712_31716 = G__31728;
continue;
} else {
var msg_31729 = cljs.core.first.call(null,seq__31709_31723__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31729);


var G__31730 = cljs.core.next.call(null,seq__31709_31723__$1);
var G__31731 = null;
var G__31732 = (0);
var G__31733 = (0);
seq__31709_31713 = G__31730;
chunk__31710_31714 = G__31731;
count__31711_31715 = G__31732;
i__31712_31716 = G__31733;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31734){
var map__31735 = p__31734;
var map__31735__$1 = ((((!((map__31735 == null)))?(((((map__31735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31735):map__31735);
var w = map__31735__$1;
var message = cljs.core.get.call(null,map__31735__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31737 = cljs.core.seq.call(null,plugins);
var chunk__31738 = null;
var count__31739 = (0);
var i__31740 = (0);
while(true){
if((i__31740 < count__31739)){
var vec__31741 = cljs.core._nth.call(null,chunk__31738,i__31740);
var k = cljs.core.nth.call(null,vec__31741,(0),null);
var plugin = cljs.core.nth.call(null,vec__31741,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31747 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31737,chunk__31738,count__31739,i__31740,pl_31747,vec__31741,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31747.call(null,msg_hist);
});})(seq__31737,chunk__31738,count__31739,i__31740,pl_31747,vec__31741,k,plugin))
);
} else {
}


var G__31748 = seq__31737;
var G__31749 = chunk__31738;
var G__31750 = count__31739;
var G__31751 = (i__31740 + (1));
seq__31737 = G__31748;
chunk__31738 = G__31749;
count__31739 = G__31750;
i__31740 = G__31751;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31737);
if(temp__4657__auto__){
var seq__31737__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31737__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__31737__$1);
var G__31752 = cljs.core.chunk_rest.call(null,seq__31737__$1);
var G__31753 = c__4317__auto__;
var G__31754 = cljs.core.count.call(null,c__4317__auto__);
var G__31755 = (0);
seq__31737 = G__31752;
chunk__31738 = G__31753;
count__31739 = G__31754;
i__31740 = G__31755;
continue;
} else {
var vec__31744 = cljs.core.first.call(null,seq__31737__$1);
var k = cljs.core.nth.call(null,vec__31744,(0),null);
var plugin = cljs.core.nth.call(null,vec__31744,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31756 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31737,chunk__31738,count__31739,i__31740,pl_31756,vec__31744,k,plugin,seq__31737__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31756.call(null,msg_hist);
});})(seq__31737,chunk__31738,count__31739,i__31740,pl_31756,vec__31744,k,plugin,seq__31737__$1,temp__4657__auto__))
);
} else {
}


var G__31757 = cljs.core.next.call(null,seq__31737__$1);
var G__31758 = null;
var G__31759 = (0);
var G__31760 = (0);
seq__31737 = G__31757;
chunk__31738 = G__31758;
count__31739 = G__31759;
i__31740 = G__31760;
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
var G__31762 = arguments.length;
switch (G__31762) {
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

var seq__31763_31768 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31764_31769 = null;
var count__31765_31770 = (0);
var i__31766_31771 = (0);
while(true){
if((i__31766_31771 < count__31765_31770)){
var msg_31772 = cljs.core._nth.call(null,chunk__31764_31769,i__31766_31771);
figwheel.client.socket.handle_incoming_message.call(null,msg_31772);


var G__31773 = seq__31763_31768;
var G__31774 = chunk__31764_31769;
var G__31775 = count__31765_31770;
var G__31776 = (i__31766_31771 + (1));
seq__31763_31768 = G__31773;
chunk__31764_31769 = G__31774;
count__31765_31770 = G__31775;
i__31766_31771 = G__31776;
continue;
} else {
var temp__4657__auto___31777 = cljs.core.seq.call(null,seq__31763_31768);
if(temp__4657__auto___31777){
var seq__31763_31778__$1 = temp__4657__auto___31777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31763_31778__$1)){
var c__4317__auto___31779 = cljs.core.chunk_first.call(null,seq__31763_31778__$1);
var G__31780 = cljs.core.chunk_rest.call(null,seq__31763_31778__$1);
var G__31781 = c__4317__auto___31779;
var G__31782 = cljs.core.count.call(null,c__4317__auto___31779);
var G__31783 = (0);
seq__31763_31768 = G__31780;
chunk__31764_31769 = G__31781;
count__31765_31770 = G__31782;
i__31766_31771 = G__31783;
continue;
} else {
var msg_31784 = cljs.core.first.call(null,seq__31763_31778__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31784);


var G__31785 = cljs.core.next.call(null,seq__31763_31778__$1);
var G__31786 = null;
var G__31787 = (0);
var G__31788 = (0);
seq__31763_31768 = G__31785;
chunk__31764_31769 = G__31786;
count__31765_31770 = G__31787;
i__31766_31771 = G__31788;
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
var len__4497__auto___31793 = arguments.length;
var i__4498__auto___31794 = (0);
while(true){
if((i__4498__auto___31794 < len__4497__auto___31793)){
args__4500__auto__.push((arguments[i__4498__auto___31794]));

var G__31795 = (i__4498__auto___31794 + (1));
i__4498__auto___31794 = G__31795;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31790){
var map__31791 = p__31790;
var map__31791__$1 = ((((!((map__31791 == null)))?(((((map__31791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31791):map__31791);
var opts = map__31791__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31789){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31789));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31796){if((e31796 instanceof Error)){
var e = e31796;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31796;

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
return (function (p__31797){
var map__31798 = p__31797;
var map__31798__$1 = ((((!((map__31798 == null)))?(((((map__31798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31798):map__31798);
var msg_name = cljs.core.get.call(null,map__31798__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
