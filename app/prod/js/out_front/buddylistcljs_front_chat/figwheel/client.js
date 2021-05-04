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
var G__8580 = arguments.length;
switch (G__8580) {
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
var len__4497__auto___8583 = arguments.length;
var i__4498__auto___8584 = (0);
while(true){
if((i__4498__auto___8584 < len__4497__auto___8583)){
args__4500__auto__.push((arguments[i__4498__auto___8584]));

var G__8585 = (i__4498__auto___8584 + (1));
i__4498__auto___8584 = G__8585;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq8582){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8582));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___8587 = arguments.length;
var i__4498__auto___8588 = (0);
while(true){
if((i__4498__auto___8588 < len__4497__auto___8587)){
args__4500__auto__.push((arguments[i__4498__auto___8588]));

var G__8589 = (i__4498__auto___8588 + (1));
i__4498__auto___8588 = G__8589;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq8586){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8586));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__8590){
var map__8591 = p__8590;
var map__8591__$1 = ((((!((map__8591 == null)))?(((((map__8591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8591):map__8591);
var message = cljs.core.get.call(null,map__8591__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__8591__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__4186__auto___8670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4186__auto___8670,ch){
return (function (){
var f__4187__auto__ = (function (){var switch__4142__auto__ = ((function (c__4186__auto___8670,ch){
return (function (state_8642){
var state_val_8643 = (state_8642[(1)]);
if((state_val_8643 === (7))){
var inst_8638 = (state_8642[(2)]);
var state_8642__$1 = state_8642;
var statearr_8644_8671 = state_8642__$1;
(statearr_8644_8671[(2)] = inst_8638);

(statearr_8644_8671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (1))){
var state_8642__$1 = state_8642;
var statearr_8645_8672 = state_8642__$1;
(statearr_8645_8672[(2)] = null);

(statearr_8645_8672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (4))){
var inst_8595 = (state_8642[(7)]);
var inst_8595__$1 = (state_8642[(2)]);
var state_8642__$1 = (function (){var statearr_8646 = state_8642;
(statearr_8646[(7)] = inst_8595__$1);

return statearr_8646;
})();
if(cljs.core.truth_(inst_8595__$1)){
var statearr_8647_8673 = state_8642__$1;
(statearr_8647_8673[(1)] = (5));

} else {
var statearr_8648_8674 = state_8642__$1;
(statearr_8648_8674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (15))){
var inst_8602 = (state_8642[(8)]);
var inst_8617 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_8602);
var inst_8618 = cljs.core.first.call(null,inst_8617);
var inst_8619 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_8618);
var inst_8620 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_8619)].join('');
var inst_8621 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_8620);
var state_8642__$1 = state_8642;
var statearr_8649_8675 = state_8642__$1;
(statearr_8649_8675[(2)] = inst_8621);

(statearr_8649_8675[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (13))){
var inst_8626 = (state_8642[(2)]);
var state_8642__$1 = state_8642;
var statearr_8650_8676 = state_8642__$1;
(statearr_8650_8676[(2)] = inst_8626);

(statearr_8650_8676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (6))){
var state_8642__$1 = state_8642;
var statearr_8651_8677 = state_8642__$1;
(statearr_8651_8677[(2)] = null);

(statearr_8651_8677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (17))){
var inst_8624 = (state_8642[(2)]);
var state_8642__$1 = state_8642;
var statearr_8652_8678 = state_8642__$1;
(statearr_8652_8678[(2)] = inst_8624);

(statearr_8652_8678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (3))){
var inst_8640 = (state_8642[(2)]);
var state_8642__$1 = state_8642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8642__$1,inst_8640);
} else {
if((state_val_8643 === (12))){
var inst_8601 = (state_8642[(9)]);
var inst_8615 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_8601,opts);
var state_8642__$1 = state_8642;
if(cljs.core.truth_(inst_8615)){
var statearr_8653_8679 = state_8642__$1;
(statearr_8653_8679[(1)] = (15));

} else {
var statearr_8654_8680 = state_8642__$1;
(statearr_8654_8680[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (2))){
var state_8642__$1 = state_8642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8642__$1,(4),ch);
} else {
if((state_val_8643 === (11))){
var inst_8602 = (state_8642[(8)]);
var inst_8607 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8608 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_8602);
var inst_8609 = cljs.core.async.timeout.call(null,(1000));
var inst_8610 = [inst_8608,inst_8609];
var inst_8611 = (new cljs.core.PersistentVector(null,2,(5),inst_8607,inst_8610,null));
var state_8642__$1 = state_8642;
return cljs.core.async.ioc_alts_BANG_.call(null,state_8642__$1,(14),inst_8611);
} else {
if((state_val_8643 === (9))){
var inst_8602 = (state_8642[(8)]);
var inst_8628 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_8629 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_8602);
var inst_8630 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_8629);
var inst_8631 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_8630)].join('');
var inst_8632 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_8631);
var state_8642__$1 = (function (){var statearr_8655 = state_8642;
(statearr_8655[(10)] = inst_8628);

return statearr_8655;
})();
var statearr_8656_8681 = state_8642__$1;
(statearr_8656_8681[(2)] = inst_8632);

(statearr_8656_8681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (5))){
var inst_8595 = (state_8642[(7)]);
var inst_8597 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_8598 = (new cljs.core.PersistentArrayMap(null,2,inst_8597,null));
var inst_8599 = (new cljs.core.PersistentHashSet(null,inst_8598,null));
var inst_8600 = figwheel.client.focus_msgs.call(null,inst_8599,inst_8595);
var inst_8601 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_8600);
var inst_8602 = cljs.core.first.call(null,inst_8600);
var inst_8603 = figwheel.client.autoload_QMARK_.call(null);
var state_8642__$1 = (function (){var statearr_8657 = state_8642;
(statearr_8657[(8)] = inst_8602);

(statearr_8657[(9)] = inst_8601);

return statearr_8657;
})();
if(cljs.core.truth_(inst_8603)){
var statearr_8658_8682 = state_8642__$1;
(statearr_8658_8682[(1)] = (8));

} else {
var statearr_8659_8683 = state_8642__$1;
(statearr_8659_8683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (14))){
var inst_8613 = (state_8642[(2)]);
var state_8642__$1 = state_8642;
var statearr_8660_8684 = state_8642__$1;
(statearr_8660_8684[(2)] = inst_8613);

(statearr_8660_8684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (16))){
var state_8642__$1 = state_8642;
var statearr_8661_8685 = state_8642__$1;
(statearr_8661_8685[(2)] = null);

(statearr_8661_8685[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (10))){
var inst_8634 = (state_8642[(2)]);
var state_8642__$1 = (function (){var statearr_8662 = state_8642;
(statearr_8662[(11)] = inst_8634);

return statearr_8662;
})();
var statearr_8663_8686 = state_8642__$1;
(statearr_8663_8686[(2)] = null);

(statearr_8663_8686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8643 === (8))){
var inst_8601 = (state_8642[(9)]);
var inst_8605 = figwheel.client.reload_file_state_QMARK_.call(null,inst_8601,opts);
var state_8642__$1 = state_8642;
if(cljs.core.truth_(inst_8605)){
var statearr_8664_8687 = state_8642__$1;
(statearr_8664_8687[(1)] = (11));

} else {
var statearr_8665_8688 = state_8642__$1;
(statearr_8665_8688[(1)] = (12));

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
});})(c__4186__auto___8670,ch))
;
return ((function (switch__4142__auto__,c__4186__auto___8670,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__4143__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__4143__auto____0 = (function (){
var statearr_8666 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8666[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__4143__auto__);

(statearr_8666[(1)] = (1));

return statearr_8666;
});
var figwheel$client$file_reloader_plugin_$_state_machine__4143__auto____1 = (function (state_8642){
while(true){
var ret_value__4144__auto__ = (function (){try{while(true){
var result__4145__auto__ = switch__4142__auto__.call(null,state_8642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4145__auto__;
}
break;
}
}catch (e8667){if((e8667 instanceof Object)){
var ex__4146__auto__ = e8667;
var statearr_8668_8689 = state_8642;
(statearr_8668_8689[(5)] = ex__4146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8690 = state_8642;
state_8642 = G__8690;
continue;
} else {
return ret_value__4144__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__4143__auto__ = function(state_8642){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__4143__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__4143__auto____1.call(this,state_8642);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__4143__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__4143__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__4143__auto__;
})()
;})(switch__4142__auto__,c__4186__auto___8670,ch))
})();
var state__4188__auto__ = (function (){var statearr_8669 = f__4187__auto__.call(null);
(statearr_8669[(6)] = c__4186__auto___8670);

return statearr_8669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4188__auto__);
});})(c__4186__auto___8670,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__8691_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__8691_SHARP_));
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
var base_path_8693 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_8693){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e8692){if((e8692 instanceof Error)){
var e = e8692;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_8693], null));
} else {
var e = e8692;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_8693))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__8694){
var map__8695 = p__8694;
var map__8695__$1 = ((((!((map__8695 == null)))?(((((map__8695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8695):map__8695);
var opts = map__8695__$1;
var build_id = cljs.core.get.call(null,map__8695__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__8695,map__8695__$1,opts,build_id){
return (function (p__8697){
var vec__8698 = p__8697;
var seq__8699 = cljs.core.seq.call(null,vec__8698);
var first__8700 = cljs.core.first.call(null,seq__8699);
var seq__8699__$1 = cljs.core.next.call(null,seq__8699);
var map__8701 = first__8700;
var map__8701__$1 = ((((!((map__8701 == null)))?(((((map__8701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8701):map__8701);
var msg = map__8701__$1;
var msg_name = cljs.core.get.call(null,map__8701__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__8699__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__8698,seq__8699,first__8700,seq__8699__$1,map__8701,map__8701__$1,msg,msg_name,_,map__8695,map__8695__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__8698,seq__8699,first__8700,seq__8699__$1,map__8701,map__8701__$1,msg,msg_name,_,map__8695,map__8695__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__8695,map__8695__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__8703){
var vec__8704 = p__8703;
var seq__8705 = cljs.core.seq.call(null,vec__8704);
var first__8706 = cljs.core.first.call(null,seq__8705);
var seq__8705__$1 = cljs.core.next.call(null,seq__8705);
var map__8707 = first__8706;
var map__8707__$1 = ((((!((map__8707 == null)))?(((((map__8707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8707):map__8707);
var msg = map__8707__$1;
var msg_name = cljs.core.get.call(null,map__8707__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__8705__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__8709){
var map__8710 = p__8709;
var map__8710__$1 = ((((!((map__8710 == null)))?(((((map__8710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8710):map__8710);
var on_compile_warning = cljs.core.get.call(null,map__8710__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__8710__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__8710,map__8710__$1,on_compile_warning,on_compile_fail){
return (function (p__8712){
var vec__8713 = p__8712;
var seq__8714 = cljs.core.seq.call(null,vec__8713);
var first__8715 = cljs.core.first.call(null,seq__8714);
var seq__8714__$1 = cljs.core.next.call(null,seq__8714);
var map__8716 = first__8715;
var map__8716__$1 = ((((!((map__8716 == null)))?(((((map__8716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8716):map__8716);
var msg = map__8716__$1;
var msg_name = cljs.core.get.call(null,map__8716__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__8714__$1;
var pred__8718 = cljs.core._EQ_;
var expr__8719 = msg_name;
if(cljs.core.truth_(pred__8718.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__8719))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__8718.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__8719))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__8710,map__8710__$1,on_compile_warning,on_compile_fail))
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
var c__4186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4186__auto__,msg_hist,msg_names,msg){
return (function (){
var f__4187__auto__ = (function (){var switch__4142__auto__ = ((function (c__4186__auto__,msg_hist,msg_names,msg){
return (function (state_8808){
var state_val_8809 = (state_8808[(1)]);
if((state_val_8809 === (7))){
var inst_8728 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
if(cljs.core.truth_(inst_8728)){
var statearr_8810_8857 = state_8808__$1;
(statearr_8810_8857[(1)] = (8));

} else {
var statearr_8811_8858 = state_8808__$1;
(statearr_8811_8858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (20))){
var inst_8802 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8812_8859 = state_8808__$1;
(statearr_8812_8859[(2)] = inst_8802);

(statearr_8812_8859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (27))){
var inst_8798 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8813_8860 = state_8808__$1;
(statearr_8813_8860[(2)] = inst_8798);

(statearr_8813_8860[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (1))){
var inst_8721 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_8808__$1 = state_8808;
if(cljs.core.truth_(inst_8721)){
var statearr_8814_8861 = state_8808__$1;
(statearr_8814_8861[(1)] = (2));

} else {
var statearr_8815_8862 = state_8808__$1;
(statearr_8815_8862[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (24))){
var inst_8800 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8816_8863 = state_8808__$1;
(statearr_8816_8863[(2)] = inst_8800);

(statearr_8816_8863[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (4))){
var inst_8806 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8808__$1,inst_8806);
} else {
if((state_val_8809 === (15))){
var inst_8804 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8817_8864 = state_8808__$1;
(statearr_8817_8864[(2)] = inst_8804);

(statearr_8817_8864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (21))){
var inst_8757 = (state_8808[(2)]);
var inst_8758 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_8759 = figwheel.client.auto_jump_to_error.call(null,opts,inst_8758);
var state_8808__$1 = (function (){var statearr_8818 = state_8808;
(statearr_8818[(7)] = inst_8757);

return statearr_8818;
})();
var statearr_8819_8865 = state_8808__$1;
(statearr_8819_8865[(2)] = inst_8759);

(statearr_8819_8865[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (31))){
var inst_8787 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_8808__$1 = state_8808;
if(cljs.core.truth_(inst_8787)){
var statearr_8820_8866 = state_8808__$1;
(statearr_8820_8866[(1)] = (34));

} else {
var statearr_8821_8867 = state_8808__$1;
(statearr_8821_8867[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (32))){
var inst_8796 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8822_8868 = state_8808__$1;
(statearr_8822_8868[(2)] = inst_8796);

(statearr_8822_8868[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (33))){
var inst_8783 = (state_8808[(2)]);
var inst_8784 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_8785 = figwheel.client.auto_jump_to_error.call(null,opts,inst_8784);
var state_8808__$1 = (function (){var statearr_8823 = state_8808;
(statearr_8823[(8)] = inst_8783);

return statearr_8823;
})();
var statearr_8824_8869 = state_8808__$1;
(statearr_8824_8869[(2)] = inst_8785);

(statearr_8824_8869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (13))){
var inst_8742 = figwheel.client.heads_up.clear.call(null);
var state_8808__$1 = state_8808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8808__$1,(16),inst_8742);
} else {
if((state_val_8809 === (22))){
var inst_8763 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_8764 = figwheel.client.heads_up.append_warning_message.call(null,inst_8763);
var state_8808__$1 = state_8808;
var statearr_8825_8870 = state_8808__$1;
(statearr_8825_8870[(2)] = inst_8764);

(statearr_8825_8870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (36))){
var inst_8794 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8826_8871 = state_8808__$1;
(statearr_8826_8871[(2)] = inst_8794);

(statearr_8826_8871[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (29))){
var inst_8774 = (state_8808[(2)]);
var inst_8775 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_8776 = figwheel.client.auto_jump_to_error.call(null,opts,inst_8775);
var state_8808__$1 = (function (){var statearr_8827 = state_8808;
(statearr_8827[(9)] = inst_8774);

return statearr_8827;
})();
var statearr_8828_8872 = state_8808__$1;
(statearr_8828_8872[(2)] = inst_8776);

(statearr_8828_8872[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (6))){
var inst_8723 = (state_8808[(10)]);
var state_8808__$1 = state_8808;
var statearr_8829_8873 = state_8808__$1;
(statearr_8829_8873[(2)] = inst_8723);

(statearr_8829_8873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (28))){
var inst_8770 = (state_8808[(2)]);
var inst_8771 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_8772 = figwheel.client.heads_up.display_warning.call(null,inst_8771);
var state_8808__$1 = (function (){var statearr_8830 = state_8808;
(statearr_8830[(11)] = inst_8770);

return statearr_8830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8808__$1,(29),inst_8772);
} else {
if((state_val_8809 === (25))){
var inst_8768 = figwheel.client.heads_up.clear.call(null);
var state_8808__$1 = state_8808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8808__$1,(28),inst_8768);
} else {
if((state_val_8809 === (34))){
var inst_8789 = figwheel.client.heads_up.flash_loaded.call(null);
var state_8808__$1 = state_8808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8808__$1,(37),inst_8789);
} else {
if((state_val_8809 === (17))){
var inst_8748 = (state_8808[(2)]);
var inst_8749 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_8750 = figwheel.client.auto_jump_to_error.call(null,opts,inst_8749);
var state_8808__$1 = (function (){var statearr_8831 = state_8808;
(statearr_8831[(12)] = inst_8748);

return statearr_8831;
})();
var statearr_8832_8874 = state_8808__$1;
(statearr_8832_8874[(2)] = inst_8750);

(statearr_8832_8874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (3))){
var inst_8740 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_8808__$1 = state_8808;
if(cljs.core.truth_(inst_8740)){
var statearr_8833_8875 = state_8808__$1;
(statearr_8833_8875[(1)] = (13));

} else {
var statearr_8834_8876 = state_8808__$1;
(statearr_8834_8876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (12))){
var inst_8736 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8835_8877 = state_8808__$1;
(statearr_8835_8877[(2)] = inst_8736);

(statearr_8835_8877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (2))){
var inst_8723 = (state_8808[(10)]);
var inst_8723__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_8808__$1 = (function (){var statearr_8836 = state_8808;
(statearr_8836[(10)] = inst_8723__$1);

return statearr_8836;
})();
if(cljs.core.truth_(inst_8723__$1)){
var statearr_8837_8878 = state_8808__$1;
(statearr_8837_8878[(1)] = (5));

} else {
var statearr_8838_8879 = state_8808__$1;
(statearr_8838_8879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (23))){
var inst_8766 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_8808__$1 = state_8808;
if(cljs.core.truth_(inst_8766)){
var statearr_8839_8880 = state_8808__$1;
(statearr_8839_8880[(1)] = (25));

} else {
var statearr_8840_8881 = state_8808__$1;
(statearr_8840_8881[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (35))){
var state_8808__$1 = state_8808;
var statearr_8841_8882 = state_8808__$1;
(statearr_8841_8882[(2)] = null);

(statearr_8841_8882[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (19))){
var inst_8761 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_8808__$1 = state_8808;
if(cljs.core.truth_(inst_8761)){
var statearr_8842_8883 = state_8808__$1;
(statearr_8842_8883[(1)] = (22));

} else {
var statearr_8843_8884 = state_8808__$1;
(statearr_8843_8884[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (11))){
var inst_8732 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8844_8885 = state_8808__$1;
(statearr_8844_8885[(2)] = inst_8732);

(statearr_8844_8885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (9))){
var inst_8734 = figwheel.client.heads_up.clear.call(null);
var state_8808__$1 = state_8808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8808__$1,(12),inst_8734);
} else {
if((state_val_8809 === (5))){
var inst_8725 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_8808__$1 = state_8808;
var statearr_8845_8886 = state_8808__$1;
(statearr_8845_8886[(2)] = inst_8725);

(statearr_8845_8886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (14))){
var inst_8752 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_8808__$1 = state_8808;
if(cljs.core.truth_(inst_8752)){
var statearr_8846_8887 = state_8808__$1;
(statearr_8846_8887[(1)] = (18));

} else {
var statearr_8847_8888 = state_8808__$1;
(statearr_8847_8888[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (26))){
var inst_8778 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_8808__$1 = state_8808;
if(cljs.core.truth_(inst_8778)){
var statearr_8848_8889 = state_8808__$1;
(statearr_8848_8889[(1)] = (30));

} else {
var statearr_8849_8890 = state_8808__$1;
(statearr_8849_8890[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (16))){
var inst_8744 = (state_8808[(2)]);
var inst_8745 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_8746 = figwheel.client.heads_up.display_exception.call(null,inst_8745);
var state_8808__$1 = (function (){var statearr_8850 = state_8808;
(statearr_8850[(13)] = inst_8744);

return statearr_8850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8808__$1,(17),inst_8746);
} else {
if((state_val_8809 === (30))){
var inst_8780 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_8781 = figwheel.client.heads_up.display_warning.call(null,inst_8780);
var state_8808__$1 = state_8808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8808__$1,(33),inst_8781);
} else {
if((state_val_8809 === (10))){
var inst_8738 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8851_8891 = state_8808__$1;
(statearr_8851_8891[(2)] = inst_8738);

(statearr_8851_8891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (18))){
var inst_8754 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_8755 = figwheel.client.heads_up.display_exception.call(null,inst_8754);
var state_8808__$1 = state_8808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8808__$1,(21),inst_8755);
} else {
if((state_val_8809 === (37))){
var inst_8791 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8852_8892 = state_8808__$1;
(statearr_8852_8892[(2)] = inst_8791);

(statearr_8852_8892[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (8))){
var inst_8730 = figwheel.client.heads_up.flash_loaded.call(null);
var state_8808__$1 = state_8808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8808__$1,(11),inst_8730);
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
});})(c__4186__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__4142__auto__,c__4186__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto____0 = (function (){
var statearr_8853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8853[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto__);

(statearr_8853[(1)] = (1));

return statearr_8853;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto____1 = (function (state_8808){
while(true){
var ret_value__4144__auto__ = (function (){try{while(true){
var result__4145__auto__ = switch__4142__auto__.call(null,state_8808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4145__auto__;
}
break;
}
}catch (e8854){if((e8854 instanceof Object)){
var ex__4146__auto__ = e8854;
var statearr_8855_8893 = state_8808;
(statearr_8855_8893[(5)] = ex__4146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8894 = state_8808;
state_8808 = G__8894;
continue;
} else {
return ret_value__4144__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto__ = function(state_8808){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto____1.call(this,state_8808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__4143__auto__;
})()
;})(switch__4142__auto__,c__4186__auto__,msg_hist,msg_names,msg))
})();
var state__4188__auto__ = (function (){var statearr_8856 = f__4187__auto__.call(null);
(statearr_8856[(6)] = c__4186__auto__);

return statearr_8856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4188__auto__);
});})(c__4186__auto__,msg_hist,msg_names,msg))
);

return c__4186__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__4186__auto___8923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4186__auto___8923,ch){
return (function (){
var f__4187__auto__ = (function (){var switch__4142__auto__ = ((function (c__4186__auto___8923,ch){
return (function (state_8909){
var state_val_8910 = (state_8909[(1)]);
if((state_val_8910 === (1))){
var state_8909__$1 = state_8909;
var statearr_8911_8924 = state_8909__$1;
(statearr_8911_8924[(2)] = null);

(statearr_8911_8924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (2))){
var state_8909__$1 = state_8909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8909__$1,(4),ch);
} else {
if((state_val_8910 === (3))){
var inst_8907 = (state_8909[(2)]);
var state_8909__$1 = state_8909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8909__$1,inst_8907);
} else {
if((state_val_8910 === (4))){
var inst_8897 = (state_8909[(7)]);
var inst_8897__$1 = (state_8909[(2)]);
var state_8909__$1 = (function (){var statearr_8912 = state_8909;
(statearr_8912[(7)] = inst_8897__$1);

return statearr_8912;
})();
if(cljs.core.truth_(inst_8897__$1)){
var statearr_8913_8925 = state_8909__$1;
(statearr_8913_8925[(1)] = (5));

} else {
var statearr_8914_8926 = state_8909__$1;
(statearr_8914_8926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (5))){
var inst_8897 = (state_8909[(7)]);
var inst_8899 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_8897);
var state_8909__$1 = state_8909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8909__$1,(8),inst_8899);
} else {
if((state_val_8910 === (6))){
var state_8909__$1 = state_8909;
var statearr_8915_8927 = state_8909__$1;
(statearr_8915_8927[(2)] = null);

(statearr_8915_8927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (7))){
var inst_8905 = (state_8909[(2)]);
var state_8909__$1 = state_8909;
var statearr_8916_8928 = state_8909__$1;
(statearr_8916_8928[(2)] = inst_8905);

(statearr_8916_8928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (8))){
var inst_8901 = (state_8909[(2)]);
var state_8909__$1 = (function (){var statearr_8917 = state_8909;
(statearr_8917[(8)] = inst_8901);

return statearr_8917;
})();
var statearr_8918_8929 = state_8909__$1;
(statearr_8918_8929[(2)] = null);

(statearr_8918_8929[(1)] = (2));


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
});})(c__4186__auto___8923,ch))
;
return ((function (switch__4142__auto__,c__4186__auto___8923,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__4143__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__4143__auto____0 = (function (){
var statearr_8919 = [null,null,null,null,null,null,null,null,null];
(statearr_8919[(0)] = figwheel$client$heads_up_plugin_$_state_machine__4143__auto__);

(statearr_8919[(1)] = (1));

return statearr_8919;
});
var figwheel$client$heads_up_plugin_$_state_machine__4143__auto____1 = (function (state_8909){
while(true){
var ret_value__4144__auto__ = (function (){try{while(true){
var result__4145__auto__ = switch__4142__auto__.call(null,state_8909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4145__auto__;
}
break;
}
}catch (e8920){if((e8920 instanceof Object)){
var ex__4146__auto__ = e8920;
var statearr_8921_8930 = state_8909;
(statearr_8921_8930[(5)] = ex__4146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8931 = state_8909;
state_8909 = G__8931;
continue;
} else {
return ret_value__4144__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__4143__auto__ = function(state_8909){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__4143__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__4143__auto____1.call(this,state_8909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__4143__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__4143__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__4143__auto__;
})()
;})(switch__4142__auto__,c__4186__auto___8923,ch))
})();
var state__4188__auto__ = (function (){var statearr_8922 = f__4187__auto__.call(null);
(statearr_8922[(6)] = c__4186__auto___8923);

return statearr_8922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4188__auto__);
});})(c__4186__auto___8923,ch))
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
var c__4186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4186__auto__){
return (function (){
var f__4187__auto__ = (function (){var switch__4142__auto__ = ((function (c__4186__auto__){
return (function (state_8937){
var state_val_8938 = (state_8937[(1)]);
if((state_val_8938 === (1))){
var inst_8932 = cljs.core.async.timeout.call(null,(3000));
var state_8937__$1 = state_8937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8937__$1,(2),inst_8932);
} else {
if((state_val_8938 === (2))){
var inst_8934 = (state_8937[(2)]);
var inst_8935 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_8937__$1 = (function (){var statearr_8939 = state_8937;
(statearr_8939[(7)] = inst_8934);

return statearr_8939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8937__$1,inst_8935);
} else {
return null;
}
}
});})(c__4186__auto__))
;
return ((function (switch__4142__auto__,c__4186__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__4143__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__4143__auto____0 = (function (){
var statearr_8940 = [null,null,null,null,null,null,null,null];
(statearr_8940[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__4143__auto__);

(statearr_8940[(1)] = (1));

return statearr_8940;
});
var figwheel$client$enforce_project_plugin_$_state_machine__4143__auto____1 = (function (state_8937){
while(true){
var ret_value__4144__auto__ = (function (){try{while(true){
var result__4145__auto__ = switch__4142__auto__.call(null,state_8937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4145__auto__;
}
break;
}
}catch (e8941){if((e8941 instanceof Object)){
var ex__4146__auto__ = e8941;
var statearr_8942_8944 = state_8937;
(statearr_8942_8944[(5)] = ex__4146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8945 = state_8937;
state_8937 = G__8945;
continue;
} else {
return ret_value__4144__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__4143__auto__ = function(state_8937){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__4143__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__4143__auto____1.call(this,state_8937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__4143__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__4143__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__4143__auto__;
})()
;})(switch__4142__auto__,c__4186__auto__))
})();
var state__4188__auto__ = (function (){var statearr_8943 = f__4187__auto__.call(null);
(statearr_8943[(6)] = c__4186__auto__);

return statearr_8943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4188__auto__);
});})(c__4186__auto__))
);

return c__4186__auto__;
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
var c__4186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4186__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__4187__auto__ = (function (){var switch__4142__auto__ = ((function (c__4186__auto__,figwheel_version,temp__4657__auto__){
return (function (state_8952){
var state_val_8953 = (state_8952[(1)]);
if((state_val_8953 === (1))){
var inst_8946 = cljs.core.async.timeout.call(null,(2000));
var state_8952__$1 = state_8952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8952__$1,(2),inst_8946);
} else {
if((state_val_8953 === (2))){
var inst_8948 = (state_8952[(2)]);
var inst_8949 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_8950 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_8949);
var state_8952__$1 = (function (){var statearr_8954 = state_8952;
(statearr_8954[(7)] = inst_8948);

return statearr_8954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8952__$1,inst_8950);
} else {
return null;
}
}
});})(c__4186__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__4142__auto__,c__4186__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto____0 = (function (){
var statearr_8955 = [null,null,null,null,null,null,null,null];
(statearr_8955[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto__);

(statearr_8955[(1)] = (1));

return statearr_8955;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto____1 = (function (state_8952){
while(true){
var ret_value__4144__auto__ = (function (){try{while(true){
var result__4145__auto__ = switch__4142__auto__.call(null,state_8952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4145__auto__;
}
break;
}
}catch (e8956){if((e8956 instanceof Object)){
var ex__4146__auto__ = e8956;
var statearr_8957_8959 = state_8952;
(statearr_8957_8959[(5)] = ex__4146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8960 = state_8952;
state_8952 = G__8960;
continue;
} else {
return ret_value__4144__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto__ = function(state_8952){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto____1.call(this,state_8952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__4143__auto__;
})()
;})(switch__4142__auto__,c__4186__auto__,figwheel_version,temp__4657__auto__))
})();
var state__4188__auto__ = (function (){var statearr_8958 = f__4187__auto__.call(null);
(statearr_8958[(6)] = c__4186__auto__);

return statearr_8958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4188__auto__);
});})(c__4186__auto__,figwheel_version,temp__4657__auto__))
);

return c__4186__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__8961){
var map__8962 = p__8961;
var map__8962__$1 = ((((!((map__8962 == null)))?(((((map__8962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8962):map__8962);
var file = cljs.core.get.call(null,map__8962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__8962__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__8962__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__8964 = "";
var G__8964__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8964),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__8964);
var G__8964__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8964__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__8964__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8964__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__8964__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__8965){
var map__8966 = p__8965;
var map__8966__$1 = ((((!((map__8966 == null)))?(((((map__8966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8966):map__8966);
var ed = map__8966__$1;
var formatted_exception = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__8968_8972 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__8969_8973 = null;
var count__8970_8974 = (0);
var i__8971_8975 = (0);
while(true){
if((i__8971_8975 < count__8970_8974)){
var msg_8976 = cljs.core._nth.call(null,chunk__8969_8973,i__8971_8975);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_8976);


var G__8977 = seq__8968_8972;
var G__8978 = chunk__8969_8973;
var G__8979 = count__8970_8974;
var G__8980 = (i__8971_8975 + (1));
seq__8968_8972 = G__8977;
chunk__8969_8973 = G__8978;
count__8970_8974 = G__8979;
i__8971_8975 = G__8980;
continue;
} else {
var temp__4657__auto___8981 = cljs.core.seq.call(null,seq__8968_8972);
if(temp__4657__auto___8981){
var seq__8968_8982__$1 = temp__4657__auto___8981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8968_8982__$1)){
var c__4317__auto___8983 = cljs.core.chunk_first.call(null,seq__8968_8982__$1);
var G__8984 = cljs.core.chunk_rest.call(null,seq__8968_8982__$1);
var G__8985 = c__4317__auto___8983;
var G__8986 = cljs.core.count.call(null,c__4317__auto___8983);
var G__8987 = (0);
seq__8968_8972 = G__8984;
chunk__8969_8973 = G__8985;
count__8970_8974 = G__8986;
i__8971_8975 = G__8987;
continue;
} else {
var msg_8988 = cljs.core.first.call(null,seq__8968_8982__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_8988);


var G__8989 = cljs.core.next.call(null,seq__8968_8982__$1);
var G__8990 = null;
var G__8991 = (0);
var G__8992 = (0);
seq__8968_8972 = G__8989;
chunk__8969_8973 = G__8990;
count__8970_8974 = G__8991;
i__8971_8975 = G__8992;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__8993){
var map__8994 = p__8993;
var map__8994__$1 = ((((!((map__8994 == null)))?(((((map__8994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8994):map__8994);
var w = map__8994__$1;
var message = cljs.core.get.call(null,map__8994__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/prod/js/out_front/buddylistcljs_front_chat/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/prod/js/out_front/buddylistcljs_front_chat/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__8996 = cljs.core.seq.call(null,plugins);
var chunk__8997 = null;
var count__8998 = (0);
var i__8999 = (0);
while(true){
if((i__8999 < count__8998)){
var vec__9000 = cljs.core._nth.call(null,chunk__8997,i__8999);
var k = cljs.core.nth.call(null,vec__9000,(0),null);
var plugin = cljs.core.nth.call(null,vec__9000,(1),null);
if(cljs.core.truth_(plugin)){
var pl_9006 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__8996,chunk__8997,count__8998,i__8999,pl_9006,vec__9000,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_9006.call(null,msg_hist);
});})(seq__8996,chunk__8997,count__8998,i__8999,pl_9006,vec__9000,k,plugin))
);
} else {
}


var G__9007 = seq__8996;
var G__9008 = chunk__8997;
var G__9009 = count__8998;
var G__9010 = (i__8999 + (1));
seq__8996 = G__9007;
chunk__8997 = G__9008;
count__8998 = G__9009;
i__8999 = G__9010;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8996);
if(temp__4657__auto__){
var seq__8996__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8996__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__8996__$1);
var G__9011 = cljs.core.chunk_rest.call(null,seq__8996__$1);
var G__9012 = c__4317__auto__;
var G__9013 = cljs.core.count.call(null,c__4317__auto__);
var G__9014 = (0);
seq__8996 = G__9011;
chunk__8997 = G__9012;
count__8998 = G__9013;
i__8999 = G__9014;
continue;
} else {
var vec__9003 = cljs.core.first.call(null,seq__8996__$1);
var k = cljs.core.nth.call(null,vec__9003,(0),null);
var plugin = cljs.core.nth.call(null,vec__9003,(1),null);
if(cljs.core.truth_(plugin)){
var pl_9015 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__8996,chunk__8997,count__8998,i__8999,pl_9015,vec__9003,k,plugin,seq__8996__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_9015.call(null,msg_hist);
});})(seq__8996,chunk__8997,count__8998,i__8999,pl_9015,vec__9003,k,plugin,seq__8996__$1,temp__4657__auto__))
);
} else {
}


var G__9016 = cljs.core.next.call(null,seq__8996__$1);
var G__9017 = null;
var G__9018 = (0);
var G__9019 = (0);
seq__8996 = G__9016;
chunk__8997 = G__9017;
count__8998 = G__9018;
i__8999 = G__9019;
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
var G__9021 = arguments.length;
switch (G__9021) {
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

var seq__9022_9027 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__9023_9028 = null;
var count__9024_9029 = (0);
var i__9025_9030 = (0);
while(true){
if((i__9025_9030 < count__9024_9029)){
var msg_9031 = cljs.core._nth.call(null,chunk__9023_9028,i__9025_9030);
figwheel.client.socket.handle_incoming_message.call(null,msg_9031);


var G__9032 = seq__9022_9027;
var G__9033 = chunk__9023_9028;
var G__9034 = count__9024_9029;
var G__9035 = (i__9025_9030 + (1));
seq__9022_9027 = G__9032;
chunk__9023_9028 = G__9033;
count__9024_9029 = G__9034;
i__9025_9030 = G__9035;
continue;
} else {
var temp__4657__auto___9036 = cljs.core.seq.call(null,seq__9022_9027);
if(temp__4657__auto___9036){
var seq__9022_9037__$1 = temp__4657__auto___9036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9022_9037__$1)){
var c__4317__auto___9038 = cljs.core.chunk_first.call(null,seq__9022_9037__$1);
var G__9039 = cljs.core.chunk_rest.call(null,seq__9022_9037__$1);
var G__9040 = c__4317__auto___9038;
var G__9041 = cljs.core.count.call(null,c__4317__auto___9038);
var G__9042 = (0);
seq__9022_9027 = G__9039;
chunk__9023_9028 = G__9040;
count__9024_9029 = G__9041;
i__9025_9030 = G__9042;
continue;
} else {
var msg_9043 = cljs.core.first.call(null,seq__9022_9037__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_9043);


var G__9044 = cljs.core.next.call(null,seq__9022_9037__$1);
var G__9045 = null;
var G__9046 = (0);
var G__9047 = (0);
seq__9022_9027 = G__9044;
chunk__9023_9028 = G__9045;
count__9024_9029 = G__9046;
i__9025_9030 = G__9047;
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
var len__4497__auto___9052 = arguments.length;
var i__4498__auto___9053 = (0);
while(true){
if((i__4498__auto___9053 < len__4497__auto___9052)){
args__4500__auto__.push((arguments[i__4498__auto___9053]));

var G__9054 = (i__4498__auto___9053 + (1));
i__4498__auto___9053 = G__9054;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__9049){
var map__9050 = p__9049;
var map__9050__$1 = ((((!((map__9050 == null)))?(((((map__9050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9050):map__9050);
var opts = map__9050__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq9048){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9048));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e9055){if((e9055 instanceof Error)){
var e = e9055;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e9055;

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
return (function (p__9056){
var map__9057 = p__9056;
var map__9057__$1 = ((((!((map__9057 == null)))?(((((map__9057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9057):map__9057);
var msg_name = cljs.core.get.call(null,map__9057__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});
