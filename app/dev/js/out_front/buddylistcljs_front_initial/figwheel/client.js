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
var G__31308 = arguments.length;
switch (G__31308) {
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
var len__4497__auto___31311 = arguments.length;
var i__4498__auto___31312 = (0);
while(true){
if((i__4498__auto___31312 < len__4497__auto___31311)){
args__4500__auto__.push((arguments[i__4498__auto___31312]));

var G__31313 = (i__4498__auto___31312 + (1));
i__4498__auto___31312 = G__31313;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31310){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31310));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___31315 = arguments.length;
var i__4498__auto___31316 = (0);
while(true){
if((i__4498__auto___31316 < len__4497__auto___31315)){
args__4500__auto__.push((arguments[i__4498__auto___31316]));

var G__31317 = (i__4498__auto___31316 + (1));
i__4498__auto___31316 = G__31317;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31314){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31314));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31318){
var map__31319 = p__31318;
var map__31319__$1 = ((((!((map__31319 == null)))?(((((map__31319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31319):map__31319);
var message = cljs.core.get.call(null,map__31319__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31319__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19650__auto___31398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___31398,ch){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___31398,ch){
return (function (state_31370){
var state_val_31371 = (state_31370[(1)]);
if((state_val_31371 === (7))){
var inst_31366 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31372_31399 = state_31370__$1;
(statearr_31372_31399[(2)] = inst_31366);

(statearr_31372_31399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (1))){
var state_31370__$1 = state_31370;
var statearr_31373_31400 = state_31370__$1;
(statearr_31373_31400[(2)] = null);

(statearr_31373_31400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (4))){
var inst_31323 = (state_31370[(7)]);
var inst_31323__$1 = (state_31370[(2)]);
var state_31370__$1 = (function (){var statearr_31374 = state_31370;
(statearr_31374[(7)] = inst_31323__$1);

return statearr_31374;
})();
if(cljs.core.truth_(inst_31323__$1)){
var statearr_31375_31401 = state_31370__$1;
(statearr_31375_31401[(1)] = (5));

} else {
var statearr_31376_31402 = state_31370__$1;
(statearr_31376_31402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (15))){
var inst_31330 = (state_31370[(8)]);
var inst_31345 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31330);
var inst_31346 = cljs.core.first.call(null,inst_31345);
var inst_31347 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31346);
var inst_31348 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31347)].join('');
var inst_31349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31348);
var state_31370__$1 = state_31370;
var statearr_31377_31403 = state_31370__$1;
(statearr_31377_31403[(2)] = inst_31349);

(statearr_31377_31403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (13))){
var inst_31354 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31378_31404 = state_31370__$1;
(statearr_31378_31404[(2)] = inst_31354);

(statearr_31378_31404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (6))){
var state_31370__$1 = state_31370;
var statearr_31379_31405 = state_31370__$1;
(statearr_31379_31405[(2)] = null);

(statearr_31379_31405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (17))){
var inst_31352 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31380_31406 = state_31370__$1;
(statearr_31380_31406[(2)] = inst_31352);

(statearr_31380_31406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (3))){
var inst_31368 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31370__$1,inst_31368);
} else {
if((state_val_31371 === (12))){
var inst_31329 = (state_31370[(9)]);
var inst_31343 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31329,opts);
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31343)){
var statearr_31381_31407 = state_31370__$1;
(statearr_31381_31407[(1)] = (15));

} else {
var statearr_31382_31408 = state_31370__$1;
(statearr_31382_31408[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (2))){
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31370__$1,(4),ch);
} else {
if((state_val_31371 === (11))){
var inst_31330 = (state_31370[(8)]);
var inst_31335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31336 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31330);
var inst_31337 = cljs.core.async.timeout.call(null,(1000));
var inst_31338 = [inst_31336,inst_31337];
var inst_31339 = (new cljs.core.PersistentVector(null,2,(5),inst_31335,inst_31338,null));
var state_31370__$1 = state_31370;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31370__$1,(14),inst_31339);
} else {
if((state_val_31371 === (9))){
var inst_31330 = (state_31370[(8)]);
var inst_31356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31357 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31330);
var inst_31358 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31357);
var inst_31359 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31358)].join('');
var inst_31360 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31359);
var state_31370__$1 = (function (){var statearr_31383 = state_31370;
(statearr_31383[(10)] = inst_31356);

return statearr_31383;
})();
var statearr_31384_31409 = state_31370__$1;
(statearr_31384_31409[(2)] = inst_31360);

(statearr_31384_31409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (5))){
var inst_31323 = (state_31370[(7)]);
var inst_31325 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31326 = (new cljs.core.PersistentArrayMap(null,2,inst_31325,null));
var inst_31327 = (new cljs.core.PersistentHashSet(null,inst_31326,null));
var inst_31328 = figwheel.client.focus_msgs.call(null,inst_31327,inst_31323);
var inst_31329 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31328);
var inst_31330 = cljs.core.first.call(null,inst_31328);
var inst_31331 = figwheel.client.autoload_QMARK_.call(null);
var state_31370__$1 = (function (){var statearr_31385 = state_31370;
(statearr_31385[(8)] = inst_31330);

(statearr_31385[(9)] = inst_31329);

return statearr_31385;
})();
if(cljs.core.truth_(inst_31331)){
var statearr_31386_31410 = state_31370__$1;
(statearr_31386_31410[(1)] = (8));

} else {
var statearr_31387_31411 = state_31370__$1;
(statearr_31387_31411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (14))){
var inst_31341 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31388_31412 = state_31370__$1;
(statearr_31388_31412[(2)] = inst_31341);

(statearr_31388_31412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (16))){
var state_31370__$1 = state_31370;
var statearr_31389_31413 = state_31370__$1;
(statearr_31389_31413[(2)] = null);

(statearr_31389_31413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (10))){
var inst_31362 = (state_31370[(2)]);
var state_31370__$1 = (function (){var statearr_31390 = state_31370;
(statearr_31390[(11)] = inst_31362);

return statearr_31390;
})();
var statearr_31391_31414 = state_31370__$1;
(statearr_31391_31414[(2)] = null);

(statearr_31391_31414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (8))){
var inst_31329 = (state_31370[(9)]);
var inst_31333 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31329,opts);
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31333)){
var statearr_31392_31415 = state_31370__$1;
(statearr_31392_31415[(1)] = (11));

} else {
var statearr_31393_31416 = state_31370__$1;
(statearr_31393_31416[(1)] = (12));

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
});})(c__19650__auto___31398,ch))
;
return ((function (switch__19495__auto__,c__19650__auto___31398,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19496__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19496__auto____0 = (function (){
var statearr_31394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31394[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19496__auto__);

(statearr_31394[(1)] = (1));

return statearr_31394;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19496__auto____1 = (function (state_31370){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_31370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e31395){if((e31395 instanceof Object)){
var ex__19499__auto__ = e31395;
var statearr_31396_31417 = state_31370;
(statearr_31396_31417[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31418 = state_31370;
state_31370 = G__31418;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19496__auto__ = function(state_31370){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19496__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19496__auto____1.call(this,state_31370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19496__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19496__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___31398,ch))
})();
var state__19652__auto__ = (function (){var statearr_31397 = f__19651__auto__.call(null);
(statearr_31397[(6)] = c__19650__auto___31398);

return statearr_31397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___31398,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31419_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31419_SHARP_));
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
var base_path_31421 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31421){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31420){if((e31420 instanceof Error)){
var e = e31420;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31421], null));
} else {
var e = e31420;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31421))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31422){
var map__31423 = p__31422;
var map__31423__$1 = ((((!((map__31423 == null)))?(((((map__31423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31423):map__31423);
var opts = map__31423__$1;
var build_id = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31423,map__31423__$1,opts,build_id){
return (function (p__31425){
var vec__31426 = p__31425;
var seq__31427 = cljs.core.seq.call(null,vec__31426);
var first__31428 = cljs.core.first.call(null,seq__31427);
var seq__31427__$1 = cljs.core.next.call(null,seq__31427);
var map__31429 = first__31428;
var map__31429__$1 = ((((!((map__31429 == null)))?(((((map__31429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31429):map__31429);
var msg = map__31429__$1;
var msg_name = cljs.core.get.call(null,map__31429__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31427__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31426,seq__31427,first__31428,seq__31427__$1,map__31429,map__31429__$1,msg,msg_name,_,map__31423,map__31423__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31426,seq__31427,first__31428,seq__31427__$1,map__31429,map__31429__$1,msg,msg_name,_,map__31423,map__31423__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31423,map__31423__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31431){
var vec__31432 = p__31431;
var seq__31433 = cljs.core.seq.call(null,vec__31432);
var first__31434 = cljs.core.first.call(null,seq__31433);
var seq__31433__$1 = cljs.core.next.call(null,seq__31433);
var map__31435 = first__31434;
var map__31435__$1 = ((((!((map__31435 == null)))?(((((map__31435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31435):map__31435);
var msg = map__31435__$1;
var msg_name = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31433__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31437){
var map__31438 = p__31437;
var map__31438__$1 = ((((!((map__31438 == null)))?(((((map__31438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31438):map__31438);
var on_compile_warning = cljs.core.get.call(null,map__31438__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31438__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31438,map__31438__$1,on_compile_warning,on_compile_fail){
return (function (p__31440){
var vec__31441 = p__31440;
var seq__31442 = cljs.core.seq.call(null,vec__31441);
var first__31443 = cljs.core.first.call(null,seq__31442);
var seq__31442__$1 = cljs.core.next.call(null,seq__31442);
var map__31444 = first__31443;
var map__31444__$1 = ((((!((map__31444 == null)))?(((((map__31444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31444):map__31444);
var msg = map__31444__$1;
var msg_name = cljs.core.get.call(null,map__31444__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31442__$1;
var pred__31446 = cljs.core._EQ_;
var expr__31447 = msg_name;
if(cljs.core.truth_(pred__31446.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31447))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31446.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31447))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31438,map__31438__$1,on_compile_warning,on_compile_fail))
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
var c__19650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto__,msg_hist,msg_names,msg){
return (function (state_31536){
var state_val_31537 = (state_31536[(1)]);
if((state_val_31537 === (7))){
var inst_31456 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
if(cljs.core.truth_(inst_31456)){
var statearr_31538_31585 = state_31536__$1;
(statearr_31538_31585[(1)] = (8));

} else {
var statearr_31539_31586 = state_31536__$1;
(statearr_31539_31586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (20))){
var inst_31530 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31540_31587 = state_31536__$1;
(statearr_31540_31587[(2)] = inst_31530);

(statearr_31540_31587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (27))){
var inst_31526 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31541_31588 = state_31536__$1;
(statearr_31541_31588[(2)] = inst_31526);

(statearr_31541_31588[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (1))){
var inst_31449 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31536__$1 = state_31536;
if(cljs.core.truth_(inst_31449)){
var statearr_31542_31589 = state_31536__$1;
(statearr_31542_31589[(1)] = (2));

} else {
var statearr_31543_31590 = state_31536__$1;
(statearr_31543_31590[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (24))){
var inst_31528 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31544_31591 = state_31536__$1;
(statearr_31544_31591[(2)] = inst_31528);

(statearr_31544_31591[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (4))){
var inst_31534 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31536__$1,inst_31534);
} else {
if((state_val_31537 === (15))){
var inst_31532 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31545_31592 = state_31536__$1;
(statearr_31545_31592[(2)] = inst_31532);

(statearr_31545_31592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (21))){
var inst_31485 = (state_31536[(2)]);
var inst_31486 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31487 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31486);
var state_31536__$1 = (function (){var statearr_31546 = state_31536;
(statearr_31546[(7)] = inst_31485);

return statearr_31546;
})();
var statearr_31547_31593 = state_31536__$1;
(statearr_31547_31593[(2)] = inst_31487);

(statearr_31547_31593[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (31))){
var inst_31515 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31536__$1 = state_31536;
if(cljs.core.truth_(inst_31515)){
var statearr_31548_31594 = state_31536__$1;
(statearr_31548_31594[(1)] = (34));

} else {
var statearr_31549_31595 = state_31536__$1;
(statearr_31549_31595[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (32))){
var inst_31524 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31550_31596 = state_31536__$1;
(statearr_31550_31596[(2)] = inst_31524);

(statearr_31550_31596[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (33))){
var inst_31511 = (state_31536[(2)]);
var inst_31512 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31513 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31512);
var state_31536__$1 = (function (){var statearr_31551 = state_31536;
(statearr_31551[(8)] = inst_31511);

return statearr_31551;
})();
var statearr_31552_31597 = state_31536__$1;
(statearr_31552_31597[(2)] = inst_31513);

(statearr_31552_31597[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (13))){
var inst_31470 = figwheel.client.heads_up.clear.call(null);
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,(16),inst_31470);
} else {
if((state_val_31537 === (22))){
var inst_31491 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31492 = figwheel.client.heads_up.append_warning_message.call(null,inst_31491);
var state_31536__$1 = state_31536;
var statearr_31553_31598 = state_31536__$1;
(statearr_31553_31598[(2)] = inst_31492);

(statearr_31553_31598[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (36))){
var inst_31522 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31554_31599 = state_31536__$1;
(statearr_31554_31599[(2)] = inst_31522);

(statearr_31554_31599[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (29))){
var inst_31502 = (state_31536[(2)]);
var inst_31503 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31504 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31503);
var state_31536__$1 = (function (){var statearr_31555 = state_31536;
(statearr_31555[(9)] = inst_31502);

return statearr_31555;
})();
var statearr_31556_31600 = state_31536__$1;
(statearr_31556_31600[(2)] = inst_31504);

(statearr_31556_31600[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (6))){
var inst_31451 = (state_31536[(10)]);
var state_31536__$1 = state_31536;
var statearr_31557_31601 = state_31536__$1;
(statearr_31557_31601[(2)] = inst_31451);

(statearr_31557_31601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (28))){
var inst_31498 = (state_31536[(2)]);
var inst_31499 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31500 = figwheel.client.heads_up.display_warning.call(null,inst_31499);
var state_31536__$1 = (function (){var statearr_31558 = state_31536;
(statearr_31558[(11)] = inst_31498);

return statearr_31558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,(29),inst_31500);
} else {
if((state_val_31537 === (25))){
var inst_31496 = figwheel.client.heads_up.clear.call(null);
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,(28),inst_31496);
} else {
if((state_val_31537 === (34))){
var inst_31517 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,(37),inst_31517);
} else {
if((state_val_31537 === (17))){
var inst_31476 = (state_31536[(2)]);
var inst_31477 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31478 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31477);
var state_31536__$1 = (function (){var statearr_31559 = state_31536;
(statearr_31559[(12)] = inst_31476);

return statearr_31559;
})();
var statearr_31560_31602 = state_31536__$1;
(statearr_31560_31602[(2)] = inst_31478);

(statearr_31560_31602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (3))){
var inst_31468 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31536__$1 = state_31536;
if(cljs.core.truth_(inst_31468)){
var statearr_31561_31603 = state_31536__$1;
(statearr_31561_31603[(1)] = (13));

} else {
var statearr_31562_31604 = state_31536__$1;
(statearr_31562_31604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (12))){
var inst_31464 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31563_31605 = state_31536__$1;
(statearr_31563_31605[(2)] = inst_31464);

(statearr_31563_31605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (2))){
var inst_31451 = (state_31536[(10)]);
var inst_31451__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31536__$1 = (function (){var statearr_31564 = state_31536;
(statearr_31564[(10)] = inst_31451__$1);

return statearr_31564;
})();
if(cljs.core.truth_(inst_31451__$1)){
var statearr_31565_31606 = state_31536__$1;
(statearr_31565_31606[(1)] = (5));

} else {
var statearr_31566_31607 = state_31536__$1;
(statearr_31566_31607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (23))){
var inst_31494 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31536__$1 = state_31536;
if(cljs.core.truth_(inst_31494)){
var statearr_31567_31608 = state_31536__$1;
(statearr_31567_31608[(1)] = (25));

} else {
var statearr_31568_31609 = state_31536__$1;
(statearr_31568_31609[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (35))){
var state_31536__$1 = state_31536;
var statearr_31569_31610 = state_31536__$1;
(statearr_31569_31610[(2)] = null);

(statearr_31569_31610[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (19))){
var inst_31489 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31536__$1 = state_31536;
if(cljs.core.truth_(inst_31489)){
var statearr_31570_31611 = state_31536__$1;
(statearr_31570_31611[(1)] = (22));

} else {
var statearr_31571_31612 = state_31536__$1;
(statearr_31571_31612[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (11))){
var inst_31460 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31572_31613 = state_31536__$1;
(statearr_31572_31613[(2)] = inst_31460);

(statearr_31572_31613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (9))){
var inst_31462 = figwheel.client.heads_up.clear.call(null);
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,(12),inst_31462);
} else {
if((state_val_31537 === (5))){
var inst_31453 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31536__$1 = state_31536;
var statearr_31573_31614 = state_31536__$1;
(statearr_31573_31614[(2)] = inst_31453);

(statearr_31573_31614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (14))){
var inst_31480 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31536__$1 = state_31536;
if(cljs.core.truth_(inst_31480)){
var statearr_31574_31615 = state_31536__$1;
(statearr_31574_31615[(1)] = (18));

} else {
var statearr_31575_31616 = state_31536__$1;
(statearr_31575_31616[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (26))){
var inst_31506 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31536__$1 = state_31536;
if(cljs.core.truth_(inst_31506)){
var statearr_31576_31617 = state_31536__$1;
(statearr_31576_31617[(1)] = (30));

} else {
var statearr_31577_31618 = state_31536__$1;
(statearr_31577_31618[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (16))){
var inst_31472 = (state_31536[(2)]);
var inst_31473 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31474 = figwheel.client.heads_up.display_exception.call(null,inst_31473);
var state_31536__$1 = (function (){var statearr_31578 = state_31536;
(statearr_31578[(13)] = inst_31472);

return statearr_31578;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,(17),inst_31474);
} else {
if((state_val_31537 === (30))){
var inst_31508 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31509 = figwheel.client.heads_up.display_warning.call(null,inst_31508);
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,(33),inst_31509);
} else {
if((state_val_31537 === (10))){
var inst_31466 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31579_31619 = state_31536__$1;
(statearr_31579_31619[(2)] = inst_31466);

(statearr_31579_31619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (18))){
var inst_31482 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31483 = figwheel.client.heads_up.display_exception.call(null,inst_31482);
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,(21),inst_31483);
} else {
if((state_val_31537 === (37))){
var inst_31519 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31580_31620 = state_31536__$1;
(statearr_31580_31620[(2)] = inst_31519);

(statearr_31580_31620[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (8))){
var inst_31458 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,(11),inst_31458);
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
});})(c__19650__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19495__auto__,c__19650__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto____0 = (function (){
var statearr_31581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31581[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto__);

(statearr_31581[(1)] = (1));

return statearr_31581;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto____1 = (function (state_31536){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_31536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e31582){if((e31582 instanceof Object)){
var ex__19499__auto__ = e31582;
var statearr_31583_31621 = state_31536;
(statearr_31583_31621[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31622 = state_31536;
state_31536 = G__31622;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto__ = function(state_31536){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto____1.call(this,state_31536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto__,msg_hist,msg_names,msg))
})();
var state__19652__auto__ = (function (){var statearr_31584 = f__19651__auto__.call(null);
(statearr_31584[(6)] = c__19650__auto__);

return statearr_31584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto__,msg_hist,msg_names,msg))
);

return c__19650__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19650__auto___31651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto___31651,ch){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto___31651,ch){
return (function (state_31637){
var state_val_31638 = (state_31637[(1)]);
if((state_val_31638 === (1))){
var state_31637__$1 = state_31637;
var statearr_31639_31652 = state_31637__$1;
(statearr_31639_31652[(2)] = null);

(statearr_31639_31652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (2))){
var state_31637__$1 = state_31637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31637__$1,(4),ch);
} else {
if((state_val_31638 === (3))){
var inst_31635 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31637__$1,inst_31635);
} else {
if((state_val_31638 === (4))){
var inst_31625 = (state_31637[(7)]);
var inst_31625__$1 = (state_31637[(2)]);
var state_31637__$1 = (function (){var statearr_31640 = state_31637;
(statearr_31640[(7)] = inst_31625__$1);

return statearr_31640;
})();
if(cljs.core.truth_(inst_31625__$1)){
var statearr_31641_31653 = state_31637__$1;
(statearr_31641_31653[(1)] = (5));

} else {
var statearr_31642_31654 = state_31637__$1;
(statearr_31642_31654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (5))){
var inst_31625 = (state_31637[(7)]);
var inst_31627 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31625);
var state_31637__$1 = state_31637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31637__$1,(8),inst_31627);
} else {
if((state_val_31638 === (6))){
var state_31637__$1 = state_31637;
var statearr_31643_31655 = state_31637__$1;
(statearr_31643_31655[(2)] = null);

(statearr_31643_31655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (7))){
var inst_31633 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
var statearr_31644_31656 = state_31637__$1;
(statearr_31644_31656[(2)] = inst_31633);

(statearr_31644_31656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (8))){
var inst_31629 = (state_31637[(2)]);
var state_31637__$1 = (function (){var statearr_31645 = state_31637;
(statearr_31645[(8)] = inst_31629);

return statearr_31645;
})();
var statearr_31646_31657 = state_31637__$1;
(statearr_31646_31657[(2)] = null);

(statearr_31646_31657[(1)] = (2));


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
});})(c__19650__auto___31651,ch))
;
return ((function (switch__19495__auto__,c__19650__auto___31651,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19496__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19496__auto____0 = (function (){
var statearr_31647 = [null,null,null,null,null,null,null,null,null];
(statearr_31647[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19496__auto__);

(statearr_31647[(1)] = (1));

return statearr_31647;
});
var figwheel$client$heads_up_plugin_$_state_machine__19496__auto____1 = (function (state_31637){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_31637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e31648){if((e31648 instanceof Object)){
var ex__19499__auto__ = e31648;
var statearr_31649_31658 = state_31637;
(statearr_31649_31658[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31659 = state_31637;
state_31637 = G__31659;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19496__auto__ = function(state_31637){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19496__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19496__auto____1.call(this,state_31637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19496__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19496__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto___31651,ch))
})();
var state__19652__auto__ = (function (){var statearr_31650 = f__19651__auto__.call(null);
(statearr_31650[(6)] = c__19650__auto___31651);

return statearr_31650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto___31651,ch))
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
var c__19650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto__){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto__){
return (function (state_31665){
var state_val_31666 = (state_31665[(1)]);
if((state_val_31666 === (1))){
var inst_31660 = cljs.core.async.timeout.call(null,(3000));
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31665__$1,(2),inst_31660);
} else {
if((state_val_31666 === (2))){
var inst_31662 = (state_31665[(2)]);
var inst_31663 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31665__$1 = (function (){var statearr_31667 = state_31665;
(statearr_31667[(7)] = inst_31662);

return statearr_31667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31665__$1,inst_31663);
} else {
return null;
}
}
});})(c__19650__auto__))
;
return ((function (switch__19495__auto__,c__19650__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19496__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19496__auto____0 = (function (){
var statearr_31668 = [null,null,null,null,null,null,null,null];
(statearr_31668[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19496__auto__);

(statearr_31668[(1)] = (1));

return statearr_31668;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19496__auto____1 = (function (state_31665){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_31665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e31669){if((e31669 instanceof Object)){
var ex__19499__auto__ = e31669;
var statearr_31670_31672 = state_31665;
(statearr_31670_31672[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31673 = state_31665;
state_31665 = G__31673;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19496__auto__ = function(state_31665){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19496__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19496__auto____1.call(this,state_31665);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19496__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19496__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto__))
})();
var state__19652__auto__ = (function (){var statearr_31671 = f__19651__auto__.call(null);
(statearr_31671[(6)] = c__19650__auto__);

return statearr_31671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto__))
);

return c__19650__auto__;
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
var c__19650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19650__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__19651__auto__ = (function (){var switch__19495__auto__ = ((function (c__19650__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31680){
var state_val_31681 = (state_31680[(1)]);
if((state_val_31681 === (1))){
var inst_31674 = cljs.core.async.timeout.call(null,(2000));
var state_31680__$1 = state_31680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31680__$1,(2),inst_31674);
} else {
if((state_val_31681 === (2))){
var inst_31676 = (state_31680[(2)]);
var inst_31677 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31678 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31677);
var state_31680__$1 = (function (){var statearr_31682 = state_31680;
(statearr_31682[(7)] = inst_31676);

return statearr_31682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31680__$1,inst_31678);
} else {
return null;
}
}
});})(c__19650__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__19495__auto__,c__19650__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto____0 = (function (){
var statearr_31683 = [null,null,null,null,null,null,null,null];
(statearr_31683[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto__);

(statearr_31683[(1)] = (1));

return statearr_31683;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto____1 = (function (state_31680){
while(true){
var ret_value__19497__auto__ = (function (){try{while(true){
var result__19498__auto__ = switch__19495__auto__.call(null,state_31680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19498__auto__;
}
break;
}
}catch (e31684){if((e31684 instanceof Object)){
var ex__19499__auto__ = e31684;
var statearr_31685_31687 = state_31680;
(statearr_31685_31687[(5)] = ex__19499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31688 = state_31680;
state_31680 = G__31688;
continue;
} else {
return ret_value__19497__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto__ = function(state_31680){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto____1.call(this,state_31680);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__19496__auto__;
})()
;})(switch__19495__auto__,c__19650__auto__,figwheel_version,temp__4657__auto__))
})();
var state__19652__auto__ = (function (){var statearr_31686 = f__19651__auto__.call(null);
(statearr_31686[(6)] = c__19650__auto__);

return statearr_31686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19652__auto__);
});})(c__19650__auto__,figwheel_version,temp__4657__auto__))
);

return c__19650__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31689){
var map__31690 = p__31689;
var map__31690__$1 = ((((!((map__31690 == null)))?(((((map__31690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31690):map__31690);
var file = cljs.core.get.call(null,map__31690__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31690__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31690__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31692 = "";
var G__31692__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31692),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31692);
var G__31692__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31692__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31692__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31692__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31692__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31693){
var map__31694 = p__31693;
var map__31694__$1 = ((((!((map__31694 == null)))?(((((map__31694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31694):map__31694);
var ed = map__31694__$1;
var formatted_exception = cljs.core.get.call(null,map__31694__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31694__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31694__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31696_31700 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31697_31701 = null;
var count__31698_31702 = (0);
var i__31699_31703 = (0);
while(true){
if((i__31699_31703 < count__31698_31702)){
var msg_31704 = cljs.core._nth.call(null,chunk__31697_31701,i__31699_31703);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31704);


var G__31705 = seq__31696_31700;
var G__31706 = chunk__31697_31701;
var G__31707 = count__31698_31702;
var G__31708 = (i__31699_31703 + (1));
seq__31696_31700 = G__31705;
chunk__31697_31701 = G__31706;
count__31698_31702 = G__31707;
i__31699_31703 = G__31708;
continue;
} else {
var temp__4657__auto___31709 = cljs.core.seq.call(null,seq__31696_31700);
if(temp__4657__auto___31709){
var seq__31696_31710__$1 = temp__4657__auto___31709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31696_31710__$1)){
var c__4317__auto___31711 = cljs.core.chunk_first.call(null,seq__31696_31710__$1);
var G__31712 = cljs.core.chunk_rest.call(null,seq__31696_31710__$1);
var G__31713 = c__4317__auto___31711;
var G__31714 = cljs.core.count.call(null,c__4317__auto___31711);
var G__31715 = (0);
seq__31696_31700 = G__31712;
chunk__31697_31701 = G__31713;
count__31698_31702 = G__31714;
i__31699_31703 = G__31715;
continue;
} else {
var msg_31716 = cljs.core.first.call(null,seq__31696_31710__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31716);


var G__31717 = cljs.core.next.call(null,seq__31696_31710__$1);
var G__31718 = null;
var G__31719 = (0);
var G__31720 = (0);
seq__31696_31700 = G__31717;
chunk__31697_31701 = G__31718;
count__31698_31702 = G__31719;
i__31699_31703 = G__31720;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31721){
var map__31722 = p__31721;
var map__31722__$1 = ((((!((map__31722 == null)))?(((((map__31722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31722):map__31722);
var w = map__31722__$1;
var message = cljs.core.get.call(null,map__31722__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/dev/js/out_front/buddylistcljs_front_initial/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/dev/js/out_front/buddylistcljs_front_initial/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__31724 = cljs.core.seq.call(null,plugins);
var chunk__31725 = null;
var count__31726 = (0);
var i__31727 = (0);
while(true){
if((i__31727 < count__31726)){
var vec__31728 = cljs.core._nth.call(null,chunk__31725,i__31727);
var k = cljs.core.nth.call(null,vec__31728,(0),null);
var plugin = cljs.core.nth.call(null,vec__31728,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31734 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31724,chunk__31725,count__31726,i__31727,pl_31734,vec__31728,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31734.call(null,msg_hist);
});})(seq__31724,chunk__31725,count__31726,i__31727,pl_31734,vec__31728,k,plugin))
);
} else {
}


var G__31735 = seq__31724;
var G__31736 = chunk__31725;
var G__31737 = count__31726;
var G__31738 = (i__31727 + (1));
seq__31724 = G__31735;
chunk__31725 = G__31736;
count__31726 = G__31737;
i__31727 = G__31738;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31724);
if(temp__4657__auto__){
var seq__31724__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31724__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__31724__$1);
var G__31739 = cljs.core.chunk_rest.call(null,seq__31724__$1);
var G__31740 = c__4317__auto__;
var G__31741 = cljs.core.count.call(null,c__4317__auto__);
var G__31742 = (0);
seq__31724 = G__31739;
chunk__31725 = G__31740;
count__31726 = G__31741;
i__31727 = G__31742;
continue;
} else {
var vec__31731 = cljs.core.first.call(null,seq__31724__$1);
var k = cljs.core.nth.call(null,vec__31731,(0),null);
var plugin = cljs.core.nth.call(null,vec__31731,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31743 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31724,chunk__31725,count__31726,i__31727,pl_31743,vec__31731,k,plugin,seq__31724__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31743.call(null,msg_hist);
});})(seq__31724,chunk__31725,count__31726,i__31727,pl_31743,vec__31731,k,plugin,seq__31724__$1,temp__4657__auto__))
);
} else {
}


var G__31744 = cljs.core.next.call(null,seq__31724__$1);
var G__31745 = null;
var G__31746 = (0);
var G__31747 = (0);
seq__31724 = G__31744;
chunk__31725 = G__31745;
count__31726 = G__31746;
i__31727 = G__31747;
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
var G__31749 = arguments.length;
switch (G__31749) {
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

var seq__31750_31755 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31751_31756 = null;
var count__31752_31757 = (0);
var i__31753_31758 = (0);
while(true){
if((i__31753_31758 < count__31752_31757)){
var msg_31759 = cljs.core._nth.call(null,chunk__31751_31756,i__31753_31758);
figwheel.client.socket.handle_incoming_message.call(null,msg_31759);


var G__31760 = seq__31750_31755;
var G__31761 = chunk__31751_31756;
var G__31762 = count__31752_31757;
var G__31763 = (i__31753_31758 + (1));
seq__31750_31755 = G__31760;
chunk__31751_31756 = G__31761;
count__31752_31757 = G__31762;
i__31753_31758 = G__31763;
continue;
} else {
var temp__4657__auto___31764 = cljs.core.seq.call(null,seq__31750_31755);
if(temp__4657__auto___31764){
var seq__31750_31765__$1 = temp__4657__auto___31764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31750_31765__$1)){
var c__4317__auto___31766 = cljs.core.chunk_first.call(null,seq__31750_31765__$1);
var G__31767 = cljs.core.chunk_rest.call(null,seq__31750_31765__$1);
var G__31768 = c__4317__auto___31766;
var G__31769 = cljs.core.count.call(null,c__4317__auto___31766);
var G__31770 = (0);
seq__31750_31755 = G__31767;
chunk__31751_31756 = G__31768;
count__31752_31757 = G__31769;
i__31753_31758 = G__31770;
continue;
} else {
var msg_31771 = cljs.core.first.call(null,seq__31750_31765__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31771);


var G__31772 = cljs.core.next.call(null,seq__31750_31765__$1);
var G__31773 = null;
var G__31774 = (0);
var G__31775 = (0);
seq__31750_31755 = G__31772;
chunk__31751_31756 = G__31773;
count__31752_31757 = G__31774;
i__31753_31758 = G__31775;
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
var len__4497__auto___31780 = arguments.length;
var i__4498__auto___31781 = (0);
while(true){
if((i__4498__auto___31781 < len__4497__auto___31780)){
args__4500__auto__.push((arguments[i__4498__auto___31781]));

var G__31782 = (i__4498__auto___31781 + (1));
i__4498__auto___31781 = G__31782;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31777){
var map__31778 = p__31777;
var map__31778__$1 = ((((!((map__31778 == null)))?(((((map__31778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31778):map__31778);
var opts = map__31778__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31776){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31776));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31783){if((e31783 instanceof Error)){
var e = e31783;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31783;

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
return (function (p__31784){
var map__31785 = p__31784;
var map__31785__$1 = ((((!((map__31785 == null)))?(((((map__31785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31785):map__31785);
var msg_name = cljs.core.get.call(null,map__31785__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
