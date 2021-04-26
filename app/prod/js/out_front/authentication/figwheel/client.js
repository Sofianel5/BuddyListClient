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
var G__14405 = arguments.length;
switch (G__14405) {
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
var len__4497__auto___14408 = arguments.length;
var i__4498__auto___14409 = (0);
while(true){
if((i__4498__auto___14409 < len__4497__auto___14408)){
args__4500__auto__.push((arguments[i__4498__auto___14409]));

var G__14410 = (i__4498__auto___14409 + (1));
i__4498__auto___14409 = G__14410;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq14407){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14407));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___14412 = arguments.length;
var i__4498__auto___14413 = (0);
while(true){
if((i__4498__auto___14413 < len__4497__auto___14412)){
args__4500__auto__.push((arguments[i__4498__auto___14413]));

var G__14414 = (i__4498__auto___14413 + (1));
i__4498__auto___14413 = G__14414;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq14411){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14411));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__14415){
var map__14416 = p__14415;
var map__14416__$1 = ((((!((map__14416 == null)))?(((((map__14416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14416):map__14416);
var message = cljs.core.get.call(null,map__14416__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__14416__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__2788__auto___14495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___14495,ch){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___14495,ch){
return (function (state_14467){
var state_val_14468 = (state_14467[(1)]);
if((state_val_14468 === (7))){
var inst_14463 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14469_14496 = state_14467__$1;
(statearr_14469_14496[(2)] = inst_14463);

(statearr_14469_14496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (1))){
var state_14467__$1 = state_14467;
var statearr_14470_14497 = state_14467__$1;
(statearr_14470_14497[(2)] = null);

(statearr_14470_14497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (4))){
var inst_14420 = (state_14467[(7)]);
var inst_14420__$1 = (state_14467[(2)]);
var state_14467__$1 = (function (){var statearr_14471 = state_14467;
(statearr_14471[(7)] = inst_14420__$1);

return statearr_14471;
})();
if(cljs.core.truth_(inst_14420__$1)){
var statearr_14472_14498 = state_14467__$1;
(statearr_14472_14498[(1)] = (5));

} else {
var statearr_14473_14499 = state_14467__$1;
(statearr_14473_14499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (15))){
var inst_14427 = (state_14467[(8)]);
var inst_14442 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_14427);
var inst_14443 = cljs.core.first.call(null,inst_14442);
var inst_14444 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_14443);
var inst_14445 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14444)].join('');
var inst_14446 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_14445);
var state_14467__$1 = state_14467;
var statearr_14474_14500 = state_14467__$1;
(statearr_14474_14500[(2)] = inst_14446);

(statearr_14474_14500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (13))){
var inst_14451 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14475_14501 = state_14467__$1;
(statearr_14475_14501[(2)] = inst_14451);

(statearr_14475_14501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (6))){
var state_14467__$1 = state_14467;
var statearr_14476_14502 = state_14467__$1;
(statearr_14476_14502[(2)] = null);

(statearr_14476_14502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (17))){
var inst_14449 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14477_14503 = state_14467__$1;
(statearr_14477_14503[(2)] = inst_14449);

(statearr_14477_14503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (3))){
var inst_14465 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14467__$1,inst_14465);
} else {
if((state_val_14468 === (12))){
var inst_14426 = (state_14467[(9)]);
var inst_14440 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_14426,opts);
var state_14467__$1 = state_14467;
if(cljs.core.truth_(inst_14440)){
var statearr_14478_14504 = state_14467__$1;
(statearr_14478_14504[(1)] = (15));

} else {
var statearr_14479_14505 = state_14467__$1;
(statearr_14479_14505[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (2))){
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14467__$1,(4),ch);
} else {
if((state_val_14468 === (11))){
var inst_14427 = (state_14467[(8)]);
var inst_14432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14433 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_14427);
var inst_14434 = cljs.core.async.timeout.call(null,(1000));
var inst_14435 = [inst_14433,inst_14434];
var inst_14436 = (new cljs.core.PersistentVector(null,2,(5),inst_14432,inst_14435,null));
var state_14467__$1 = state_14467;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14467__$1,(14),inst_14436);
} else {
if((state_val_14468 === (9))){
var inst_14427 = (state_14467[(8)]);
var inst_14453 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_14454 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_14427);
var inst_14455 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14454);
var inst_14456 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14455)].join('');
var inst_14457 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_14456);
var state_14467__$1 = (function (){var statearr_14480 = state_14467;
(statearr_14480[(10)] = inst_14453);

return statearr_14480;
})();
var statearr_14481_14506 = state_14467__$1;
(statearr_14481_14506[(2)] = inst_14457);

(statearr_14481_14506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (5))){
var inst_14420 = (state_14467[(7)]);
var inst_14422 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_14423 = (new cljs.core.PersistentArrayMap(null,2,inst_14422,null));
var inst_14424 = (new cljs.core.PersistentHashSet(null,inst_14423,null));
var inst_14425 = figwheel.client.focus_msgs.call(null,inst_14424,inst_14420);
var inst_14426 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_14425);
var inst_14427 = cljs.core.first.call(null,inst_14425);
var inst_14428 = figwheel.client.autoload_QMARK_.call(null);
var state_14467__$1 = (function (){var statearr_14482 = state_14467;
(statearr_14482[(9)] = inst_14426);

(statearr_14482[(8)] = inst_14427);

return statearr_14482;
})();
if(cljs.core.truth_(inst_14428)){
var statearr_14483_14507 = state_14467__$1;
(statearr_14483_14507[(1)] = (8));

} else {
var statearr_14484_14508 = state_14467__$1;
(statearr_14484_14508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (14))){
var inst_14438 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14485_14509 = state_14467__$1;
(statearr_14485_14509[(2)] = inst_14438);

(statearr_14485_14509[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (16))){
var state_14467__$1 = state_14467;
var statearr_14486_14510 = state_14467__$1;
(statearr_14486_14510[(2)] = null);

(statearr_14486_14510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (10))){
var inst_14459 = (state_14467[(2)]);
var state_14467__$1 = (function (){var statearr_14487 = state_14467;
(statearr_14487[(11)] = inst_14459);

return statearr_14487;
})();
var statearr_14488_14511 = state_14467__$1;
(statearr_14488_14511[(2)] = null);

(statearr_14488_14511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (8))){
var inst_14426 = (state_14467[(9)]);
var inst_14430 = figwheel.client.reload_file_state_QMARK_.call(null,inst_14426,opts);
var state_14467__$1 = state_14467;
if(cljs.core.truth_(inst_14430)){
var statearr_14489_14512 = state_14467__$1;
(statearr_14489_14512[(1)] = (11));

} else {
var statearr_14490_14513 = state_14467__$1;
(statearr_14490_14513[(1)] = (12));

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
});})(c__2788__auto___14495,ch))
;
return ((function (switch__2633__auto__,c__2788__auto___14495,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____0 = (function (){
var statearr_14491 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14491[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__);

(statearr_14491[(1)] = (1));

return statearr_14491;
});
var figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____1 = (function (state_14467){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_14467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e14492){if((e14492 instanceof Object)){
var ex__2637__auto__ = e14492;
var statearr_14493_14514 = state_14467;
(statearr_14493_14514[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14515 = state_14467;
state_14467 = G__14515;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__ = function(state_14467){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____1.call(this,state_14467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___14495,ch))
})();
var state__2790__auto__ = (function (){var statearr_14494 = f__2789__auto__.call(null);
(statearr_14494[(6)] = c__2788__auto___14495);

return statearr_14494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___14495,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__14516_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__14516_SHARP_));
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
var base_path_14518 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_14518){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e14517){if((e14517 instanceof Error)){
var e = e14517;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_14518], null));
} else {
var e = e14517;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_14518))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__14519){
var map__14520 = p__14519;
var map__14520__$1 = ((((!((map__14520 == null)))?(((((map__14520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14520):map__14520);
var opts = map__14520__$1;
var build_id = cljs.core.get.call(null,map__14520__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__14520,map__14520__$1,opts,build_id){
return (function (p__14522){
var vec__14523 = p__14522;
var seq__14524 = cljs.core.seq.call(null,vec__14523);
var first__14525 = cljs.core.first.call(null,seq__14524);
var seq__14524__$1 = cljs.core.next.call(null,seq__14524);
var map__14526 = first__14525;
var map__14526__$1 = ((((!((map__14526 == null)))?(((((map__14526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14526):map__14526);
var msg = map__14526__$1;
var msg_name = cljs.core.get.call(null,map__14526__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__14524__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__14523,seq__14524,first__14525,seq__14524__$1,map__14526,map__14526__$1,msg,msg_name,_,map__14520,map__14520__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__14523,seq__14524,first__14525,seq__14524__$1,map__14526,map__14526__$1,msg,msg_name,_,map__14520,map__14520__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__14520,map__14520__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__14528){
var vec__14529 = p__14528;
var seq__14530 = cljs.core.seq.call(null,vec__14529);
var first__14531 = cljs.core.first.call(null,seq__14530);
var seq__14530__$1 = cljs.core.next.call(null,seq__14530);
var map__14532 = first__14531;
var map__14532__$1 = ((((!((map__14532 == null)))?(((((map__14532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14532):map__14532);
var msg = map__14532__$1;
var msg_name = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__14530__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__14534){
var map__14535 = p__14534;
var map__14535__$1 = ((((!((map__14535 == null)))?(((((map__14535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14535):map__14535);
var on_compile_warning = cljs.core.get.call(null,map__14535__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__14535__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__14535,map__14535__$1,on_compile_warning,on_compile_fail){
return (function (p__14537){
var vec__14538 = p__14537;
var seq__14539 = cljs.core.seq.call(null,vec__14538);
var first__14540 = cljs.core.first.call(null,seq__14539);
var seq__14539__$1 = cljs.core.next.call(null,seq__14539);
var map__14541 = first__14540;
var map__14541__$1 = ((((!((map__14541 == null)))?(((((map__14541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14541):map__14541);
var msg = map__14541__$1;
var msg_name = cljs.core.get.call(null,map__14541__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__14539__$1;
var pred__14543 = cljs.core._EQ_;
var expr__14544 = msg_name;
if(cljs.core.truth_(pred__14543.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__14544))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__14543.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__14544))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__14535,map__14535__$1,on_compile_warning,on_compile_fail))
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
var c__2788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto__,msg_hist,msg_names,msg){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto__,msg_hist,msg_names,msg){
return (function (state_14633){
var state_val_14634 = (state_14633[(1)]);
if((state_val_14634 === (7))){
var inst_14553 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14553)){
var statearr_14635_14682 = state_14633__$1;
(statearr_14635_14682[(1)] = (8));

} else {
var statearr_14636_14683 = state_14633__$1;
(statearr_14636_14683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (20))){
var inst_14627 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14637_14684 = state_14633__$1;
(statearr_14637_14684[(2)] = inst_14627);

(statearr_14637_14684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (27))){
var inst_14623 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14638_14685 = state_14633__$1;
(statearr_14638_14685[(2)] = inst_14623);

(statearr_14638_14685[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (1))){
var inst_14546 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14546)){
var statearr_14639_14686 = state_14633__$1;
(statearr_14639_14686[(1)] = (2));

} else {
var statearr_14640_14687 = state_14633__$1;
(statearr_14640_14687[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (24))){
var inst_14625 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14641_14688 = state_14633__$1;
(statearr_14641_14688[(2)] = inst_14625);

(statearr_14641_14688[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (4))){
var inst_14631 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14633__$1,inst_14631);
} else {
if((state_val_14634 === (15))){
var inst_14629 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14642_14689 = state_14633__$1;
(statearr_14642_14689[(2)] = inst_14629);

(statearr_14642_14689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (21))){
var inst_14582 = (state_14633[(2)]);
var inst_14583 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14584 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14583);
var state_14633__$1 = (function (){var statearr_14643 = state_14633;
(statearr_14643[(7)] = inst_14582);

return statearr_14643;
})();
var statearr_14644_14690 = state_14633__$1;
(statearr_14644_14690[(2)] = inst_14584);

(statearr_14644_14690[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (31))){
var inst_14612 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14612)){
var statearr_14645_14691 = state_14633__$1;
(statearr_14645_14691[(1)] = (34));

} else {
var statearr_14646_14692 = state_14633__$1;
(statearr_14646_14692[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (32))){
var inst_14621 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14647_14693 = state_14633__$1;
(statearr_14647_14693[(2)] = inst_14621);

(statearr_14647_14693[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (33))){
var inst_14608 = (state_14633[(2)]);
var inst_14609 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14610 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14609);
var state_14633__$1 = (function (){var statearr_14648 = state_14633;
(statearr_14648[(8)] = inst_14608);

return statearr_14648;
})();
var statearr_14649_14694 = state_14633__$1;
(statearr_14649_14694[(2)] = inst_14610);

(statearr_14649_14694[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (13))){
var inst_14567 = figwheel.client.heads_up.clear.call(null);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(16),inst_14567);
} else {
if((state_val_14634 === (22))){
var inst_14588 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14589 = figwheel.client.heads_up.append_warning_message.call(null,inst_14588);
var state_14633__$1 = state_14633;
var statearr_14650_14695 = state_14633__$1;
(statearr_14650_14695[(2)] = inst_14589);

(statearr_14650_14695[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (36))){
var inst_14619 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14651_14696 = state_14633__$1;
(statearr_14651_14696[(2)] = inst_14619);

(statearr_14651_14696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (29))){
var inst_14599 = (state_14633[(2)]);
var inst_14600 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14601 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14600);
var state_14633__$1 = (function (){var statearr_14652 = state_14633;
(statearr_14652[(9)] = inst_14599);

return statearr_14652;
})();
var statearr_14653_14697 = state_14633__$1;
(statearr_14653_14697[(2)] = inst_14601);

(statearr_14653_14697[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (6))){
var inst_14548 = (state_14633[(10)]);
var state_14633__$1 = state_14633;
var statearr_14654_14698 = state_14633__$1;
(statearr_14654_14698[(2)] = inst_14548);

(statearr_14654_14698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (28))){
var inst_14595 = (state_14633[(2)]);
var inst_14596 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14597 = figwheel.client.heads_up.display_warning.call(null,inst_14596);
var state_14633__$1 = (function (){var statearr_14655 = state_14633;
(statearr_14655[(11)] = inst_14595);

return statearr_14655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(29),inst_14597);
} else {
if((state_val_14634 === (25))){
var inst_14593 = figwheel.client.heads_up.clear.call(null);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(28),inst_14593);
} else {
if((state_val_14634 === (34))){
var inst_14614 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(37),inst_14614);
} else {
if((state_val_14634 === (17))){
var inst_14573 = (state_14633[(2)]);
var inst_14574 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14575 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14574);
var state_14633__$1 = (function (){var statearr_14656 = state_14633;
(statearr_14656[(12)] = inst_14573);

return statearr_14656;
})();
var statearr_14657_14699 = state_14633__$1;
(statearr_14657_14699[(2)] = inst_14575);

(statearr_14657_14699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (3))){
var inst_14565 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14565)){
var statearr_14658_14700 = state_14633__$1;
(statearr_14658_14700[(1)] = (13));

} else {
var statearr_14659_14701 = state_14633__$1;
(statearr_14659_14701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (12))){
var inst_14561 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14660_14702 = state_14633__$1;
(statearr_14660_14702[(2)] = inst_14561);

(statearr_14660_14702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (2))){
var inst_14548 = (state_14633[(10)]);
var inst_14548__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_14633__$1 = (function (){var statearr_14661 = state_14633;
(statearr_14661[(10)] = inst_14548__$1);

return statearr_14661;
})();
if(cljs.core.truth_(inst_14548__$1)){
var statearr_14662_14703 = state_14633__$1;
(statearr_14662_14703[(1)] = (5));

} else {
var statearr_14663_14704 = state_14633__$1;
(statearr_14663_14704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (23))){
var inst_14591 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14591)){
var statearr_14664_14705 = state_14633__$1;
(statearr_14664_14705[(1)] = (25));

} else {
var statearr_14665_14706 = state_14633__$1;
(statearr_14665_14706[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (35))){
var state_14633__$1 = state_14633;
var statearr_14666_14707 = state_14633__$1;
(statearr_14666_14707[(2)] = null);

(statearr_14666_14707[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (19))){
var inst_14586 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14586)){
var statearr_14667_14708 = state_14633__$1;
(statearr_14667_14708[(1)] = (22));

} else {
var statearr_14668_14709 = state_14633__$1;
(statearr_14668_14709[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (11))){
var inst_14557 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14669_14710 = state_14633__$1;
(statearr_14669_14710[(2)] = inst_14557);

(statearr_14669_14710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (9))){
var inst_14559 = figwheel.client.heads_up.clear.call(null);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(12),inst_14559);
} else {
if((state_val_14634 === (5))){
var inst_14550 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_14633__$1 = state_14633;
var statearr_14670_14711 = state_14633__$1;
(statearr_14670_14711[(2)] = inst_14550);

(statearr_14670_14711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (14))){
var inst_14577 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14577)){
var statearr_14671_14712 = state_14633__$1;
(statearr_14671_14712[(1)] = (18));

} else {
var statearr_14672_14713 = state_14633__$1;
(statearr_14672_14713[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (26))){
var inst_14603 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14603)){
var statearr_14673_14714 = state_14633__$1;
(statearr_14673_14714[(1)] = (30));

} else {
var statearr_14674_14715 = state_14633__$1;
(statearr_14674_14715[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (16))){
var inst_14569 = (state_14633[(2)]);
var inst_14570 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14571 = figwheel.client.heads_up.display_exception.call(null,inst_14570);
var state_14633__$1 = (function (){var statearr_14675 = state_14633;
(statearr_14675[(13)] = inst_14569);

return statearr_14675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(17),inst_14571);
} else {
if((state_val_14634 === (30))){
var inst_14605 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14606 = figwheel.client.heads_up.display_warning.call(null,inst_14605);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(33),inst_14606);
} else {
if((state_val_14634 === (10))){
var inst_14563 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14676_14716 = state_14633__$1;
(statearr_14676_14716[(2)] = inst_14563);

(statearr_14676_14716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (18))){
var inst_14579 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14580 = figwheel.client.heads_up.display_exception.call(null,inst_14579);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(21),inst_14580);
} else {
if((state_val_14634 === (37))){
var inst_14616 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14677_14717 = state_14633__$1;
(statearr_14677_14717[(2)] = inst_14616);

(statearr_14677_14717[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (8))){
var inst_14555 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(11),inst_14555);
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
});})(c__2788__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__2633__auto__,c__2788__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto____0 = (function (){
var statearr_14678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14678[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto__);

(statearr_14678[(1)] = (1));

return statearr_14678;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto____1 = (function (state_14633){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_14633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e14679){if((e14679 instanceof Object)){
var ex__2637__auto__ = e14679;
var statearr_14680_14718 = state_14633;
(statearr_14680_14718[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14719 = state_14633;
state_14633 = G__14719;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto__ = function(state_14633){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto____1.call(this,state_14633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__,msg_hist,msg_names,msg))
})();
var state__2790__auto__ = (function (){var statearr_14681 = f__2789__auto__.call(null);
(statearr_14681[(6)] = c__2788__auto__);

return statearr_14681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__,msg_hist,msg_names,msg))
);

return c__2788__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__2788__auto___14748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___14748,ch){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___14748,ch){
return (function (state_14734){
var state_val_14735 = (state_14734[(1)]);
if((state_val_14735 === (1))){
var state_14734__$1 = state_14734;
var statearr_14736_14749 = state_14734__$1;
(statearr_14736_14749[(2)] = null);

(statearr_14736_14749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14735 === (2))){
var state_14734__$1 = state_14734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14734__$1,(4),ch);
} else {
if((state_val_14735 === (3))){
var inst_14732 = (state_14734[(2)]);
var state_14734__$1 = state_14734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14734__$1,inst_14732);
} else {
if((state_val_14735 === (4))){
var inst_14722 = (state_14734[(7)]);
var inst_14722__$1 = (state_14734[(2)]);
var state_14734__$1 = (function (){var statearr_14737 = state_14734;
(statearr_14737[(7)] = inst_14722__$1);

return statearr_14737;
})();
if(cljs.core.truth_(inst_14722__$1)){
var statearr_14738_14750 = state_14734__$1;
(statearr_14738_14750[(1)] = (5));

} else {
var statearr_14739_14751 = state_14734__$1;
(statearr_14739_14751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14735 === (5))){
var inst_14722 = (state_14734[(7)]);
var inst_14724 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14722);
var state_14734__$1 = state_14734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14734__$1,(8),inst_14724);
} else {
if((state_val_14735 === (6))){
var state_14734__$1 = state_14734;
var statearr_14740_14752 = state_14734__$1;
(statearr_14740_14752[(2)] = null);

(statearr_14740_14752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14735 === (7))){
var inst_14730 = (state_14734[(2)]);
var state_14734__$1 = state_14734;
var statearr_14741_14753 = state_14734__$1;
(statearr_14741_14753[(2)] = inst_14730);

(statearr_14741_14753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14735 === (8))){
var inst_14726 = (state_14734[(2)]);
var state_14734__$1 = (function (){var statearr_14742 = state_14734;
(statearr_14742[(8)] = inst_14726);

return statearr_14742;
})();
var statearr_14743_14754 = state_14734__$1;
(statearr_14743_14754[(2)] = null);

(statearr_14743_14754[(1)] = (2));


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
});})(c__2788__auto___14748,ch))
;
return ((function (switch__2633__auto__,c__2788__auto___14748,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__2634__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__2634__auto____0 = (function (){
var statearr_14744 = [null,null,null,null,null,null,null,null,null];
(statearr_14744[(0)] = figwheel$client$heads_up_plugin_$_state_machine__2634__auto__);

(statearr_14744[(1)] = (1));

return statearr_14744;
});
var figwheel$client$heads_up_plugin_$_state_machine__2634__auto____1 = (function (state_14734){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_14734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e14745){if((e14745 instanceof Object)){
var ex__2637__auto__ = e14745;
var statearr_14746_14755 = state_14734;
(statearr_14746_14755[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14756 = state_14734;
state_14734 = G__14756;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__2634__auto__ = function(state_14734){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__2634__auto____1.call(this,state_14734);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__2634__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__2634__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___14748,ch))
})();
var state__2790__auto__ = (function (){var statearr_14747 = f__2789__auto__.call(null);
(statearr_14747[(6)] = c__2788__auto___14748);

return statearr_14747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___14748,ch))
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
var c__2788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto__){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto__){
return (function (state_14762){
var state_val_14763 = (state_14762[(1)]);
if((state_val_14763 === (1))){
var inst_14757 = cljs.core.async.timeout.call(null,(3000));
var state_14762__$1 = state_14762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14762__$1,(2),inst_14757);
} else {
if((state_val_14763 === (2))){
var inst_14759 = (state_14762[(2)]);
var inst_14760 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14762__$1 = (function (){var statearr_14764 = state_14762;
(statearr_14764[(7)] = inst_14759);

return statearr_14764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14762__$1,inst_14760);
} else {
return null;
}
}
});})(c__2788__auto__))
;
return ((function (switch__2633__auto__,c__2788__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__2634__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__2634__auto____0 = (function (){
var statearr_14765 = [null,null,null,null,null,null,null,null];
(statearr_14765[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__2634__auto__);

(statearr_14765[(1)] = (1));

return statearr_14765;
});
var figwheel$client$enforce_project_plugin_$_state_machine__2634__auto____1 = (function (state_14762){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_14762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e14766){if((e14766 instanceof Object)){
var ex__2637__auto__ = e14766;
var statearr_14767_14769 = state_14762;
(statearr_14767_14769[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14770 = state_14762;
state_14762 = G__14770;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__2634__auto__ = function(state_14762){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__2634__auto____1.call(this,state_14762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__2634__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__2634__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__))
})();
var state__2790__auto__ = (function (){var statearr_14768 = f__2789__auto__.call(null);
(statearr_14768[(6)] = c__2788__auto__);

return statearr_14768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__))
);

return c__2788__auto__;
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
var c__2788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto__,figwheel_version,temp__4657__auto__){
return (function (state_14777){
var state_val_14778 = (state_14777[(1)]);
if((state_val_14778 === (1))){
var inst_14771 = cljs.core.async.timeout.call(null,(2000));
var state_14777__$1 = state_14777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14777__$1,(2),inst_14771);
} else {
if((state_val_14778 === (2))){
var inst_14773 = (state_14777[(2)]);
var inst_14774 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_14775 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_14774);
var state_14777__$1 = (function (){var statearr_14779 = state_14777;
(statearr_14779[(7)] = inst_14773);

return statearr_14779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14777__$1,inst_14775);
} else {
return null;
}
}
});})(c__2788__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__2633__auto__,c__2788__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto____0 = (function (){
var statearr_14780 = [null,null,null,null,null,null,null,null];
(statearr_14780[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto__);

(statearr_14780[(1)] = (1));

return statearr_14780;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto____1 = (function (state_14777){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_14777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e14781){if((e14781 instanceof Object)){
var ex__2637__auto__ = e14781;
var statearr_14782_14784 = state_14777;
(statearr_14782_14784[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14785 = state_14777;
state_14777 = G__14785;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto__ = function(state_14777){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto____1.call(this,state_14777);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__,figwheel_version,temp__4657__auto__))
})();
var state__2790__auto__ = (function (){var statearr_14783 = f__2789__auto__.call(null);
(statearr_14783[(6)] = c__2788__auto__);

return statearr_14783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__,figwheel_version,temp__4657__auto__))
);

return c__2788__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__14786){
var map__14787 = p__14786;
var map__14787__$1 = ((((!((map__14787 == null)))?(((((map__14787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14787):map__14787);
var file = cljs.core.get.call(null,map__14787__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__14787__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__14787__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__14789 = "";
var G__14789__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14789),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__14789);
var G__14789__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14789__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__14789__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14789__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__14789__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__14790){
var map__14791 = p__14790;
var map__14791__$1 = ((((!((map__14791 == null)))?(((((map__14791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14791):map__14791);
var ed = map__14791__$1;
var formatted_exception = cljs.core.get.call(null,map__14791__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__14791__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__14791__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__14793_14797 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14794_14798 = null;
var count__14795_14799 = (0);
var i__14796_14800 = (0);
while(true){
if((i__14796_14800 < count__14795_14799)){
var msg_14801 = cljs.core._nth.call(null,chunk__14794_14798,i__14796_14800);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14801);


var G__14802 = seq__14793_14797;
var G__14803 = chunk__14794_14798;
var G__14804 = count__14795_14799;
var G__14805 = (i__14796_14800 + (1));
seq__14793_14797 = G__14802;
chunk__14794_14798 = G__14803;
count__14795_14799 = G__14804;
i__14796_14800 = G__14805;
continue;
} else {
var temp__4657__auto___14806 = cljs.core.seq.call(null,seq__14793_14797);
if(temp__4657__auto___14806){
var seq__14793_14807__$1 = temp__4657__auto___14806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14793_14807__$1)){
var c__4317__auto___14808 = cljs.core.chunk_first.call(null,seq__14793_14807__$1);
var G__14809 = cljs.core.chunk_rest.call(null,seq__14793_14807__$1);
var G__14810 = c__4317__auto___14808;
var G__14811 = cljs.core.count.call(null,c__4317__auto___14808);
var G__14812 = (0);
seq__14793_14797 = G__14809;
chunk__14794_14798 = G__14810;
count__14795_14799 = G__14811;
i__14796_14800 = G__14812;
continue;
} else {
var msg_14813 = cljs.core.first.call(null,seq__14793_14807__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14813);


var G__14814 = cljs.core.next.call(null,seq__14793_14807__$1);
var G__14815 = null;
var G__14816 = (0);
var G__14817 = (0);
seq__14793_14797 = G__14814;
chunk__14794_14798 = G__14815;
count__14795_14799 = G__14816;
i__14796_14800 = G__14817;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__14818){
var map__14819 = p__14818;
var map__14819__$1 = ((((!((map__14819 == null)))?(((((map__14819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14819):map__14819);
var w = map__14819__$1;
var message = cljs.core.get.call(null,map__14819__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/prod/js/out_front/authentication/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/prod/js/out_front/authentication/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__14821 = cljs.core.seq.call(null,plugins);
var chunk__14822 = null;
var count__14823 = (0);
var i__14824 = (0);
while(true){
if((i__14824 < count__14823)){
var vec__14825 = cljs.core._nth.call(null,chunk__14822,i__14824);
var k = cljs.core.nth.call(null,vec__14825,(0),null);
var plugin = cljs.core.nth.call(null,vec__14825,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14831 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14821,chunk__14822,count__14823,i__14824,pl_14831,vec__14825,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14831.call(null,msg_hist);
});})(seq__14821,chunk__14822,count__14823,i__14824,pl_14831,vec__14825,k,plugin))
);
} else {
}


var G__14832 = seq__14821;
var G__14833 = chunk__14822;
var G__14834 = count__14823;
var G__14835 = (i__14824 + (1));
seq__14821 = G__14832;
chunk__14822 = G__14833;
count__14823 = G__14834;
i__14824 = G__14835;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14821);
if(temp__4657__auto__){
var seq__14821__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14821__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__14821__$1);
var G__14836 = cljs.core.chunk_rest.call(null,seq__14821__$1);
var G__14837 = c__4317__auto__;
var G__14838 = cljs.core.count.call(null,c__4317__auto__);
var G__14839 = (0);
seq__14821 = G__14836;
chunk__14822 = G__14837;
count__14823 = G__14838;
i__14824 = G__14839;
continue;
} else {
var vec__14828 = cljs.core.first.call(null,seq__14821__$1);
var k = cljs.core.nth.call(null,vec__14828,(0),null);
var plugin = cljs.core.nth.call(null,vec__14828,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14840 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14821,chunk__14822,count__14823,i__14824,pl_14840,vec__14828,k,plugin,seq__14821__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14840.call(null,msg_hist);
});})(seq__14821,chunk__14822,count__14823,i__14824,pl_14840,vec__14828,k,plugin,seq__14821__$1,temp__4657__auto__))
);
} else {
}


var G__14841 = cljs.core.next.call(null,seq__14821__$1);
var G__14842 = null;
var G__14843 = (0);
var G__14844 = (0);
seq__14821 = G__14841;
chunk__14822 = G__14842;
count__14823 = G__14843;
i__14824 = G__14844;
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
var G__14846 = arguments.length;
switch (G__14846) {
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

var seq__14847_14852 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__14848_14853 = null;
var count__14849_14854 = (0);
var i__14850_14855 = (0);
while(true){
if((i__14850_14855 < count__14849_14854)){
var msg_14856 = cljs.core._nth.call(null,chunk__14848_14853,i__14850_14855);
figwheel.client.socket.handle_incoming_message.call(null,msg_14856);


var G__14857 = seq__14847_14852;
var G__14858 = chunk__14848_14853;
var G__14859 = count__14849_14854;
var G__14860 = (i__14850_14855 + (1));
seq__14847_14852 = G__14857;
chunk__14848_14853 = G__14858;
count__14849_14854 = G__14859;
i__14850_14855 = G__14860;
continue;
} else {
var temp__4657__auto___14861 = cljs.core.seq.call(null,seq__14847_14852);
if(temp__4657__auto___14861){
var seq__14847_14862__$1 = temp__4657__auto___14861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14847_14862__$1)){
var c__4317__auto___14863 = cljs.core.chunk_first.call(null,seq__14847_14862__$1);
var G__14864 = cljs.core.chunk_rest.call(null,seq__14847_14862__$1);
var G__14865 = c__4317__auto___14863;
var G__14866 = cljs.core.count.call(null,c__4317__auto___14863);
var G__14867 = (0);
seq__14847_14852 = G__14864;
chunk__14848_14853 = G__14865;
count__14849_14854 = G__14866;
i__14850_14855 = G__14867;
continue;
} else {
var msg_14868 = cljs.core.first.call(null,seq__14847_14862__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_14868);


var G__14869 = cljs.core.next.call(null,seq__14847_14862__$1);
var G__14870 = null;
var G__14871 = (0);
var G__14872 = (0);
seq__14847_14852 = G__14869;
chunk__14848_14853 = G__14870;
count__14849_14854 = G__14871;
i__14850_14855 = G__14872;
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
var len__4497__auto___14877 = arguments.length;
var i__4498__auto___14878 = (0);
while(true){
if((i__4498__auto___14878 < len__4497__auto___14877)){
args__4500__auto__.push((arguments[i__4498__auto___14878]));

var G__14879 = (i__4498__auto___14878 + (1));
i__4498__auto___14878 = G__14879;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__14874){
var map__14875 = p__14874;
var map__14875__$1 = ((((!((map__14875 == null)))?(((((map__14875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14875):map__14875);
var opts = map__14875__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq14873){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14873));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e14880){if((e14880 instanceof Error)){
var e = e14880;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e14880;

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
return (function (p__14881){
var map__14882 = p__14881;
var map__14882__$1 = ((((!((map__14882 == null)))?(((((map__14882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14882):map__14882);
var msg_name = cljs.core.get.call(null,map__14882__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});
