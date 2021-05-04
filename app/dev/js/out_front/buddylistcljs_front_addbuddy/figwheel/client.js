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
var G__13810 = arguments.length;
switch (G__13810) {
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
var len__4497__auto___13813 = arguments.length;
var i__4498__auto___13814 = (0);
while(true){
if((i__4498__auto___13814 < len__4497__auto___13813)){
args__4500__auto__.push((arguments[i__4498__auto___13814]));

var G__13815 = (i__4498__auto___13814 + (1));
i__4498__auto___13814 = G__13815;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq13812){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13812));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___13817 = arguments.length;
var i__4498__auto___13818 = (0);
while(true){
if((i__4498__auto___13818 < len__4497__auto___13817)){
args__4500__auto__.push((arguments[i__4498__auto___13818]));

var G__13819 = (i__4498__auto___13818 + (1));
i__4498__auto___13818 = G__13819;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq13816){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13816));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__13820){
var map__13821 = p__13820;
var map__13821__$1 = ((((!((map__13821 == null)))?(((((map__13821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13821):map__13821);
var message = cljs.core.get.call(null,map__13821__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__13821__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__2151__auto___13900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___13900,ch){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___13900,ch){
return (function (state_13872){
var state_val_13873 = (state_13872[(1)]);
if((state_val_13873 === (7))){
var inst_13868 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13874_13901 = state_13872__$1;
(statearr_13874_13901[(2)] = inst_13868);

(statearr_13874_13901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (1))){
var state_13872__$1 = state_13872;
var statearr_13875_13902 = state_13872__$1;
(statearr_13875_13902[(2)] = null);

(statearr_13875_13902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (4))){
var inst_13825 = (state_13872[(7)]);
var inst_13825__$1 = (state_13872[(2)]);
var state_13872__$1 = (function (){var statearr_13876 = state_13872;
(statearr_13876[(7)] = inst_13825__$1);

return statearr_13876;
})();
if(cljs.core.truth_(inst_13825__$1)){
var statearr_13877_13903 = state_13872__$1;
(statearr_13877_13903[(1)] = (5));

} else {
var statearr_13878_13904 = state_13872__$1;
(statearr_13878_13904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (15))){
var inst_13832 = (state_13872[(8)]);
var inst_13847 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13832);
var inst_13848 = cljs.core.first.call(null,inst_13847);
var inst_13849 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_13848);
var inst_13850 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13849)].join('');
var inst_13851 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_13850);
var state_13872__$1 = state_13872;
var statearr_13879_13905 = state_13872__$1;
(statearr_13879_13905[(2)] = inst_13851);

(statearr_13879_13905[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (13))){
var inst_13856 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13880_13906 = state_13872__$1;
(statearr_13880_13906[(2)] = inst_13856);

(statearr_13880_13906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (6))){
var state_13872__$1 = state_13872;
var statearr_13881_13907 = state_13872__$1;
(statearr_13881_13907[(2)] = null);

(statearr_13881_13907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (17))){
var inst_13854 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13882_13908 = state_13872__$1;
(statearr_13882_13908[(2)] = inst_13854);

(statearr_13882_13908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (3))){
var inst_13870 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13872__$1,inst_13870);
} else {
if((state_val_13873 === (12))){
var inst_13831 = (state_13872[(9)]);
var inst_13845 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_13831,opts);
var state_13872__$1 = state_13872;
if(cljs.core.truth_(inst_13845)){
var statearr_13883_13909 = state_13872__$1;
(statearr_13883_13909[(1)] = (15));

} else {
var statearr_13884_13910 = state_13872__$1;
(statearr_13884_13910[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (2))){
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13872__$1,(4),ch);
} else {
if((state_val_13873 === (11))){
var inst_13832 = (state_13872[(8)]);
var inst_13837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13838 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_13832);
var inst_13839 = cljs.core.async.timeout.call(null,(1000));
var inst_13840 = [inst_13838,inst_13839];
var inst_13841 = (new cljs.core.PersistentVector(null,2,(5),inst_13837,inst_13840,null));
var state_13872__$1 = state_13872;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13872__$1,(14),inst_13841);
} else {
if((state_val_13873 === (9))){
var inst_13832 = (state_13872[(8)]);
var inst_13858 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_13859 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13832);
var inst_13860 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13859);
var inst_13861 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13860)].join('');
var inst_13862 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_13861);
var state_13872__$1 = (function (){var statearr_13885 = state_13872;
(statearr_13885[(10)] = inst_13858);

return statearr_13885;
})();
var statearr_13886_13911 = state_13872__$1;
(statearr_13886_13911[(2)] = inst_13862);

(statearr_13886_13911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (5))){
var inst_13825 = (state_13872[(7)]);
var inst_13827 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_13828 = (new cljs.core.PersistentArrayMap(null,2,inst_13827,null));
var inst_13829 = (new cljs.core.PersistentHashSet(null,inst_13828,null));
var inst_13830 = figwheel.client.focus_msgs.call(null,inst_13829,inst_13825);
var inst_13831 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_13830);
var inst_13832 = cljs.core.first.call(null,inst_13830);
var inst_13833 = figwheel.client.autoload_QMARK_.call(null);
var state_13872__$1 = (function (){var statearr_13887 = state_13872;
(statearr_13887[(8)] = inst_13832);

(statearr_13887[(9)] = inst_13831);

return statearr_13887;
})();
if(cljs.core.truth_(inst_13833)){
var statearr_13888_13912 = state_13872__$1;
(statearr_13888_13912[(1)] = (8));

} else {
var statearr_13889_13913 = state_13872__$1;
(statearr_13889_13913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (14))){
var inst_13843 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13890_13914 = state_13872__$1;
(statearr_13890_13914[(2)] = inst_13843);

(statearr_13890_13914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (16))){
var state_13872__$1 = state_13872;
var statearr_13891_13915 = state_13872__$1;
(statearr_13891_13915[(2)] = null);

(statearr_13891_13915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (10))){
var inst_13864 = (state_13872[(2)]);
var state_13872__$1 = (function (){var statearr_13892 = state_13872;
(statearr_13892[(11)] = inst_13864);

return statearr_13892;
})();
var statearr_13893_13916 = state_13872__$1;
(statearr_13893_13916[(2)] = null);

(statearr_13893_13916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (8))){
var inst_13831 = (state_13872[(9)]);
var inst_13835 = figwheel.client.reload_file_state_QMARK_.call(null,inst_13831,opts);
var state_13872__$1 = state_13872;
if(cljs.core.truth_(inst_13835)){
var statearr_13894_13917 = state_13872__$1;
(statearr_13894_13917[(1)] = (11));

} else {
var statearr_13895_13918 = state_13872__$1;
(statearr_13895_13918[(1)] = (12));

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
});})(c__2151__auto___13900,ch))
;
return ((function (switch__1996__auto__,c__2151__auto___13900,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0 = (function (){
var statearr_13896 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13896[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__);

(statearr_13896[(1)] = (1));

return statearr_13896;
});
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1 = (function (state_13872){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_13872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e13897){if((e13897 instanceof Object)){
var ex__2000__auto__ = e13897;
var statearr_13898_13919 = state_13872;
(statearr_13898_13919[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13920 = state_13872;
state_13872 = G__13920;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__ = function(state_13872){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1.call(this,state_13872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___13900,ch))
})();
var state__2153__auto__ = (function (){var statearr_13899 = f__2152__auto__.call(null);
(statearr_13899[(6)] = c__2151__auto___13900);

return statearr_13899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___13900,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__13921_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__13921_SHARP_));
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
var base_path_13923 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_13923){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e13922){if((e13922 instanceof Error)){
var e = e13922;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_13923], null));
} else {
var e = e13922;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_13923))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__13924){
var map__13925 = p__13924;
var map__13925__$1 = ((((!((map__13925 == null)))?(((((map__13925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13925):map__13925);
var opts = map__13925__$1;
var build_id = cljs.core.get.call(null,map__13925__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__13925,map__13925__$1,opts,build_id){
return (function (p__13927){
var vec__13928 = p__13927;
var seq__13929 = cljs.core.seq.call(null,vec__13928);
var first__13930 = cljs.core.first.call(null,seq__13929);
var seq__13929__$1 = cljs.core.next.call(null,seq__13929);
var map__13931 = first__13930;
var map__13931__$1 = ((((!((map__13931 == null)))?(((((map__13931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13931):map__13931);
var msg = map__13931__$1;
var msg_name = cljs.core.get.call(null,map__13931__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13929__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__13928,seq__13929,first__13930,seq__13929__$1,map__13931,map__13931__$1,msg,msg_name,_,map__13925,map__13925__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__13928,seq__13929,first__13930,seq__13929__$1,map__13931,map__13931__$1,msg,msg_name,_,map__13925,map__13925__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__13925,map__13925__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__13933){
var vec__13934 = p__13933;
var seq__13935 = cljs.core.seq.call(null,vec__13934);
var first__13936 = cljs.core.first.call(null,seq__13935);
var seq__13935__$1 = cljs.core.next.call(null,seq__13935);
var map__13937 = first__13936;
var map__13937__$1 = ((((!((map__13937 == null)))?(((((map__13937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13937):map__13937);
var msg = map__13937__$1;
var msg_name = cljs.core.get.call(null,map__13937__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13935__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__13939){
var map__13940 = p__13939;
var map__13940__$1 = ((((!((map__13940 == null)))?(((((map__13940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13940):map__13940);
var on_compile_warning = cljs.core.get.call(null,map__13940__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__13940__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__13940,map__13940__$1,on_compile_warning,on_compile_fail){
return (function (p__13942){
var vec__13943 = p__13942;
var seq__13944 = cljs.core.seq.call(null,vec__13943);
var first__13945 = cljs.core.first.call(null,seq__13944);
var seq__13944__$1 = cljs.core.next.call(null,seq__13944);
var map__13946 = first__13945;
var map__13946__$1 = ((((!((map__13946 == null)))?(((((map__13946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13946):map__13946);
var msg = map__13946__$1;
var msg_name = cljs.core.get.call(null,map__13946__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13944__$1;
var pred__13948 = cljs.core._EQ_;
var expr__13949 = msg_name;
if(cljs.core.truth_(pred__13948.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__13949))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__13948.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13949))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__13940,map__13940__$1,on_compile_warning,on_compile_fail))
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
var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__,msg_hist,msg_names,msg){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__,msg_hist,msg_names,msg){
return (function (state_14038){
var state_val_14039 = (state_14038[(1)]);
if((state_val_14039 === (7))){
var inst_13958 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
if(cljs.core.truth_(inst_13958)){
var statearr_14040_14087 = state_14038__$1;
(statearr_14040_14087[(1)] = (8));

} else {
var statearr_14041_14088 = state_14038__$1;
(statearr_14041_14088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (20))){
var inst_14032 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
var statearr_14042_14089 = state_14038__$1;
(statearr_14042_14089[(2)] = inst_14032);

(statearr_14042_14089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (27))){
var inst_14028 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
var statearr_14043_14090 = state_14038__$1;
(statearr_14043_14090[(2)] = inst_14028);

(statearr_14043_14090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (1))){
var inst_13951 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14038__$1 = state_14038;
if(cljs.core.truth_(inst_13951)){
var statearr_14044_14091 = state_14038__$1;
(statearr_14044_14091[(1)] = (2));

} else {
var statearr_14045_14092 = state_14038__$1;
(statearr_14045_14092[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (24))){
var inst_14030 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
var statearr_14046_14093 = state_14038__$1;
(statearr_14046_14093[(2)] = inst_14030);

(statearr_14046_14093[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (4))){
var inst_14036 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14038__$1,inst_14036);
} else {
if((state_val_14039 === (15))){
var inst_14034 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
var statearr_14047_14094 = state_14038__$1;
(statearr_14047_14094[(2)] = inst_14034);

(statearr_14047_14094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (21))){
var inst_13987 = (state_14038[(2)]);
var inst_13988 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13989 = figwheel.client.auto_jump_to_error.call(null,opts,inst_13988);
var state_14038__$1 = (function (){var statearr_14048 = state_14038;
(statearr_14048[(7)] = inst_13987);

return statearr_14048;
})();
var statearr_14049_14095 = state_14038__$1;
(statearr_14049_14095[(2)] = inst_13989);

(statearr_14049_14095[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (31))){
var inst_14017 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14038__$1 = state_14038;
if(cljs.core.truth_(inst_14017)){
var statearr_14050_14096 = state_14038__$1;
(statearr_14050_14096[(1)] = (34));

} else {
var statearr_14051_14097 = state_14038__$1;
(statearr_14051_14097[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (32))){
var inst_14026 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
var statearr_14052_14098 = state_14038__$1;
(statearr_14052_14098[(2)] = inst_14026);

(statearr_14052_14098[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (33))){
var inst_14013 = (state_14038[(2)]);
var inst_14014 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14015 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14014);
var state_14038__$1 = (function (){var statearr_14053 = state_14038;
(statearr_14053[(8)] = inst_14013);

return statearr_14053;
})();
var statearr_14054_14099 = state_14038__$1;
(statearr_14054_14099[(2)] = inst_14015);

(statearr_14054_14099[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (13))){
var inst_13972 = figwheel.client.heads_up.clear.call(null);
var state_14038__$1 = state_14038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14038__$1,(16),inst_13972);
} else {
if((state_val_14039 === (22))){
var inst_13993 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13994 = figwheel.client.heads_up.append_warning_message.call(null,inst_13993);
var state_14038__$1 = state_14038;
var statearr_14055_14100 = state_14038__$1;
(statearr_14055_14100[(2)] = inst_13994);

(statearr_14055_14100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (36))){
var inst_14024 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
var statearr_14056_14101 = state_14038__$1;
(statearr_14056_14101[(2)] = inst_14024);

(statearr_14056_14101[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (29))){
var inst_14004 = (state_14038[(2)]);
var inst_14005 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14006 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14005);
var state_14038__$1 = (function (){var statearr_14057 = state_14038;
(statearr_14057[(9)] = inst_14004);

return statearr_14057;
})();
var statearr_14058_14102 = state_14038__$1;
(statearr_14058_14102[(2)] = inst_14006);

(statearr_14058_14102[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (6))){
var inst_13953 = (state_14038[(10)]);
var state_14038__$1 = state_14038;
var statearr_14059_14103 = state_14038__$1;
(statearr_14059_14103[(2)] = inst_13953);

(statearr_14059_14103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (28))){
var inst_14000 = (state_14038[(2)]);
var inst_14001 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14002 = figwheel.client.heads_up.display_warning.call(null,inst_14001);
var state_14038__$1 = (function (){var statearr_14060 = state_14038;
(statearr_14060[(11)] = inst_14000);

return statearr_14060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14038__$1,(29),inst_14002);
} else {
if((state_val_14039 === (25))){
var inst_13998 = figwheel.client.heads_up.clear.call(null);
var state_14038__$1 = state_14038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14038__$1,(28),inst_13998);
} else {
if((state_val_14039 === (34))){
var inst_14019 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14038__$1 = state_14038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14038__$1,(37),inst_14019);
} else {
if((state_val_14039 === (17))){
var inst_13978 = (state_14038[(2)]);
var inst_13979 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13980 = figwheel.client.auto_jump_to_error.call(null,opts,inst_13979);
var state_14038__$1 = (function (){var statearr_14061 = state_14038;
(statearr_14061[(12)] = inst_13978);

return statearr_14061;
})();
var statearr_14062_14104 = state_14038__$1;
(statearr_14062_14104[(2)] = inst_13980);

(statearr_14062_14104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (3))){
var inst_13970 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14038__$1 = state_14038;
if(cljs.core.truth_(inst_13970)){
var statearr_14063_14105 = state_14038__$1;
(statearr_14063_14105[(1)] = (13));

} else {
var statearr_14064_14106 = state_14038__$1;
(statearr_14064_14106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (12))){
var inst_13966 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
var statearr_14065_14107 = state_14038__$1;
(statearr_14065_14107[(2)] = inst_13966);

(statearr_14065_14107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (2))){
var inst_13953 = (state_14038[(10)]);
var inst_13953__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_14038__$1 = (function (){var statearr_14066 = state_14038;
(statearr_14066[(10)] = inst_13953__$1);

return statearr_14066;
})();
if(cljs.core.truth_(inst_13953__$1)){
var statearr_14067_14108 = state_14038__$1;
(statearr_14067_14108[(1)] = (5));

} else {
var statearr_14068_14109 = state_14038__$1;
(statearr_14068_14109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (23))){
var inst_13996 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14038__$1 = state_14038;
if(cljs.core.truth_(inst_13996)){
var statearr_14069_14110 = state_14038__$1;
(statearr_14069_14110[(1)] = (25));

} else {
var statearr_14070_14111 = state_14038__$1;
(statearr_14070_14111[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (35))){
var state_14038__$1 = state_14038;
var statearr_14071_14112 = state_14038__$1;
(statearr_14071_14112[(2)] = null);

(statearr_14071_14112[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (19))){
var inst_13991 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14038__$1 = state_14038;
if(cljs.core.truth_(inst_13991)){
var statearr_14072_14113 = state_14038__$1;
(statearr_14072_14113[(1)] = (22));

} else {
var statearr_14073_14114 = state_14038__$1;
(statearr_14073_14114[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (11))){
var inst_13962 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
var statearr_14074_14115 = state_14038__$1;
(statearr_14074_14115[(2)] = inst_13962);

(statearr_14074_14115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (9))){
var inst_13964 = figwheel.client.heads_up.clear.call(null);
var state_14038__$1 = state_14038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14038__$1,(12),inst_13964);
} else {
if((state_val_14039 === (5))){
var inst_13955 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_14038__$1 = state_14038;
var statearr_14075_14116 = state_14038__$1;
(statearr_14075_14116[(2)] = inst_13955);

(statearr_14075_14116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (14))){
var inst_13982 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14038__$1 = state_14038;
if(cljs.core.truth_(inst_13982)){
var statearr_14076_14117 = state_14038__$1;
(statearr_14076_14117[(1)] = (18));

} else {
var statearr_14077_14118 = state_14038__$1;
(statearr_14077_14118[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (26))){
var inst_14008 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14038__$1 = state_14038;
if(cljs.core.truth_(inst_14008)){
var statearr_14078_14119 = state_14038__$1;
(statearr_14078_14119[(1)] = (30));

} else {
var statearr_14079_14120 = state_14038__$1;
(statearr_14079_14120[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (16))){
var inst_13974 = (state_14038[(2)]);
var inst_13975 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13976 = figwheel.client.heads_up.display_exception.call(null,inst_13975);
var state_14038__$1 = (function (){var statearr_14080 = state_14038;
(statearr_14080[(13)] = inst_13974);

return statearr_14080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14038__$1,(17),inst_13976);
} else {
if((state_val_14039 === (30))){
var inst_14010 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14011 = figwheel.client.heads_up.display_warning.call(null,inst_14010);
var state_14038__$1 = state_14038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14038__$1,(33),inst_14011);
} else {
if((state_val_14039 === (10))){
var inst_13968 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
var statearr_14081_14121 = state_14038__$1;
(statearr_14081_14121[(2)] = inst_13968);

(statearr_14081_14121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (18))){
var inst_13984 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13985 = figwheel.client.heads_up.display_exception.call(null,inst_13984);
var state_14038__$1 = state_14038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14038__$1,(21),inst_13985);
} else {
if((state_val_14039 === (37))){
var inst_14021 = (state_14038[(2)]);
var state_14038__$1 = state_14038;
var statearr_14082_14122 = state_14038__$1;
(statearr_14082_14122[(2)] = inst_14021);

(statearr_14082_14122[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14039 === (8))){
var inst_13960 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14038__$1 = state_14038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14038__$1,(11),inst_13960);
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
});})(c__2151__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__1996__auto__,c__2151__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____0 = (function (){
var statearr_14083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14083[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__);

(statearr_14083[(1)] = (1));

return statearr_14083;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1 = (function (state_14038){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14084){if((e14084 instanceof Object)){
var ex__2000__auto__ = e14084;
var statearr_14085_14123 = state_14038;
(statearr_14085_14123[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14124 = state_14038;
state_14038 = G__14124;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__ = function(state_14038){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1.call(this,state_14038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,msg_hist,msg_names,msg))
})();
var state__2153__auto__ = (function (){var statearr_14086 = f__2152__auto__.call(null);
(statearr_14086[(6)] = c__2151__auto__);

return statearr_14086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__,msg_hist,msg_names,msg))
);

return c__2151__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__2151__auto___14153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___14153,ch){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___14153,ch){
return (function (state_14139){
var state_val_14140 = (state_14139[(1)]);
if((state_val_14140 === (1))){
var state_14139__$1 = state_14139;
var statearr_14141_14154 = state_14139__$1;
(statearr_14141_14154[(2)] = null);

(statearr_14141_14154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14140 === (2))){
var state_14139__$1 = state_14139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14139__$1,(4),ch);
} else {
if((state_val_14140 === (3))){
var inst_14137 = (state_14139[(2)]);
var state_14139__$1 = state_14139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14139__$1,inst_14137);
} else {
if((state_val_14140 === (4))){
var inst_14127 = (state_14139[(7)]);
var inst_14127__$1 = (state_14139[(2)]);
var state_14139__$1 = (function (){var statearr_14142 = state_14139;
(statearr_14142[(7)] = inst_14127__$1);

return statearr_14142;
})();
if(cljs.core.truth_(inst_14127__$1)){
var statearr_14143_14155 = state_14139__$1;
(statearr_14143_14155[(1)] = (5));

} else {
var statearr_14144_14156 = state_14139__$1;
(statearr_14144_14156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14140 === (5))){
var inst_14127 = (state_14139[(7)]);
var inst_14129 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14127);
var state_14139__$1 = state_14139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14139__$1,(8),inst_14129);
} else {
if((state_val_14140 === (6))){
var state_14139__$1 = state_14139;
var statearr_14145_14157 = state_14139__$1;
(statearr_14145_14157[(2)] = null);

(statearr_14145_14157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14140 === (7))){
var inst_14135 = (state_14139[(2)]);
var state_14139__$1 = state_14139;
var statearr_14146_14158 = state_14139__$1;
(statearr_14146_14158[(2)] = inst_14135);

(statearr_14146_14158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14140 === (8))){
var inst_14131 = (state_14139[(2)]);
var state_14139__$1 = (function (){var statearr_14147 = state_14139;
(statearr_14147[(8)] = inst_14131);

return statearr_14147;
})();
var statearr_14148_14159 = state_14139__$1;
(statearr_14148_14159[(2)] = null);

(statearr_14148_14159[(1)] = (2));


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
});})(c__2151__auto___14153,ch))
;
return ((function (switch__1996__auto__,c__2151__auto___14153,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0 = (function (){
var statearr_14149 = [null,null,null,null,null,null,null,null,null];
(statearr_14149[(0)] = figwheel$client$heads_up_plugin_$_state_machine__1997__auto__);

(statearr_14149[(1)] = (1));

return statearr_14149;
});
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1 = (function (state_14139){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14150){if((e14150 instanceof Object)){
var ex__2000__auto__ = e14150;
var statearr_14151_14160 = state_14139;
(statearr_14151_14160[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14161 = state_14139;
state_14139 = G__14161;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__ = function(state_14139){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1.call(this,state_14139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___14153,ch))
})();
var state__2153__auto__ = (function (){var statearr_14152 = f__2152__auto__.call(null);
(statearr_14152[(6)] = c__2151__auto___14153);

return statearr_14152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___14153,ch))
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
var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__){
return (function (state_14167){
var state_val_14168 = (state_14167[(1)]);
if((state_val_14168 === (1))){
var inst_14162 = cljs.core.async.timeout.call(null,(3000));
var state_14167__$1 = state_14167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14167__$1,(2),inst_14162);
} else {
if((state_val_14168 === (2))){
var inst_14164 = (state_14167[(2)]);
var inst_14165 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14167__$1 = (function (){var statearr_14169 = state_14167;
(statearr_14169[(7)] = inst_14164);

return statearr_14169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14167__$1,inst_14165);
} else {
return null;
}
}
});})(c__2151__auto__))
;
return ((function (switch__1996__auto__,c__2151__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____0 = (function (){
var statearr_14170 = [null,null,null,null,null,null,null,null];
(statearr_14170[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__);

(statearr_14170[(1)] = (1));

return statearr_14170;
});
var figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1 = (function (state_14167){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14171){if((e14171 instanceof Object)){
var ex__2000__auto__ = e14171;
var statearr_14172_14174 = state_14167;
(statearr_14172_14174[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14175 = state_14167;
state_14167 = G__14175;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__ = function(state_14167){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1.call(this,state_14167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__))
})();
var state__2153__auto__ = (function (){var statearr_14173 = f__2152__auto__.call(null);
(statearr_14173[(6)] = c__2151__auto__);

return statearr_14173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__))
);

return c__2151__auto__;
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
var c__2151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto__,figwheel_version,temp__4657__auto__){
return (function (state_14182){
var state_val_14183 = (state_14182[(1)]);
if((state_val_14183 === (1))){
var inst_14176 = cljs.core.async.timeout.call(null,(2000));
var state_14182__$1 = state_14182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14182__$1,(2),inst_14176);
} else {
if((state_val_14183 === (2))){
var inst_14178 = (state_14182[(2)]);
var inst_14179 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_14180 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_14179);
var state_14182__$1 = (function (){var statearr_14184 = state_14182;
(statearr_14184[(7)] = inst_14178);

return statearr_14184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14182__$1,inst_14180);
} else {
return null;
}
}
});})(c__2151__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__1996__auto__,c__2151__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____0 = (function (){
var statearr_14185 = [null,null,null,null,null,null,null,null];
(statearr_14185[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__);

(statearr_14185[(1)] = (1));

return statearr_14185;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1 = (function (state_14182){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14186){if((e14186 instanceof Object)){
var ex__2000__auto__ = e14186;
var statearr_14187_14189 = state_14182;
(statearr_14187_14189[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14190 = state_14182;
state_14182 = G__14190;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__ = function(state_14182){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1.call(this,state_14182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,figwheel_version,temp__4657__auto__))
})();
var state__2153__auto__ = (function (){var statearr_14188 = f__2152__auto__.call(null);
(statearr_14188[(6)] = c__2151__auto__);

return statearr_14188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__,figwheel_version,temp__4657__auto__))
);

return c__2151__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__14191){
var map__14192 = p__14191;
var map__14192__$1 = ((((!((map__14192 == null)))?(((((map__14192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14192):map__14192);
var file = cljs.core.get.call(null,map__14192__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__14192__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__14192__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__14194 = "";
var G__14194__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14194),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__14194);
var G__14194__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14194__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__14194__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14194__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__14194__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__14195){
var map__14196 = p__14195;
var map__14196__$1 = ((((!((map__14196 == null)))?(((((map__14196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14196):map__14196);
var ed = map__14196__$1;
var formatted_exception = cljs.core.get.call(null,map__14196__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__14196__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__14196__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__14198_14202 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14199_14203 = null;
var count__14200_14204 = (0);
var i__14201_14205 = (0);
while(true){
if((i__14201_14205 < count__14200_14204)){
var msg_14206 = cljs.core._nth.call(null,chunk__14199_14203,i__14201_14205);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14206);


var G__14207 = seq__14198_14202;
var G__14208 = chunk__14199_14203;
var G__14209 = count__14200_14204;
var G__14210 = (i__14201_14205 + (1));
seq__14198_14202 = G__14207;
chunk__14199_14203 = G__14208;
count__14200_14204 = G__14209;
i__14201_14205 = G__14210;
continue;
} else {
var temp__4657__auto___14211 = cljs.core.seq.call(null,seq__14198_14202);
if(temp__4657__auto___14211){
var seq__14198_14212__$1 = temp__4657__auto___14211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14198_14212__$1)){
var c__4317__auto___14213 = cljs.core.chunk_first.call(null,seq__14198_14212__$1);
var G__14214 = cljs.core.chunk_rest.call(null,seq__14198_14212__$1);
var G__14215 = c__4317__auto___14213;
var G__14216 = cljs.core.count.call(null,c__4317__auto___14213);
var G__14217 = (0);
seq__14198_14202 = G__14214;
chunk__14199_14203 = G__14215;
count__14200_14204 = G__14216;
i__14201_14205 = G__14217;
continue;
} else {
var msg_14218 = cljs.core.first.call(null,seq__14198_14212__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14218);


var G__14219 = cljs.core.next.call(null,seq__14198_14212__$1);
var G__14220 = null;
var G__14221 = (0);
var G__14222 = (0);
seq__14198_14202 = G__14219;
chunk__14199_14203 = G__14220;
count__14200_14204 = G__14221;
i__14201_14205 = G__14222;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__14223){
var map__14224 = p__14223;
var map__14224__$1 = ((((!((map__14224 == null)))?(((((map__14224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14224):map__14224);
var w = map__14224__$1;
var message = cljs.core.get.call(null,map__14224__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/dev/js/out_front/buddylistcljs_front_addbuddy/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/dev/js/out_front/buddylistcljs_front_addbuddy/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__14226 = cljs.core.seq.call(null,plugins);
var chunk__14227 = null;
var count__14228 = (0);
var i__14229 = (0);
while(true){
if((i__14229 < count__14228)){
var vec__14230 = cljs.core._nth.call(null,chunk__14227,i__14229);
var k = cljs.core.nth.call(null,vec__14230,(0),null);
var plugin = cljs.core.nth.call(null,vec__14230,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14236 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14226,chunk__14227,count__14228,i__14229,pl_14236,vec__14230,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14236.call(null,msg_hist);
});})(seq__14226,chunk__14227,count__14228,i__14229,pl_14236,vec__14230,k,plugin))
);
} else {
}


var G__14237 = seq__14226;
var G__14238 = chunk__14227;
var G__14239 = count__14228;
var G__14240 = (i__14229 + (1));
seq__14226 = G__14237;
chunk__14227 = G__14238;
count__14228 = G__14239;
i__14229 = G__14240;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14226);
if(temp__4657__auto__){
var seq__14226__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14226__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__14226__$1);
var G__14241 = cljs.core.chunk_rest.call(null,seq__14226__$1);
var G__14242 = c__4317__auto__;
var G__14243 = cljs.core.count.call(null,c__4317__auto__);
var G__14244 = (0);
seq__14226 = G__14241;
chunk__14227 = G__14242;
count__14228 = G__14243;
i__14229 = G__14244;
continue;
} else {
var vec__14233 = cljs.core.first.call(null,seq__14226__$1);
var k = cljs.core.nth.call(null,vec__14233,(0),null);
var plugin = cljs.core.nth.call(null,vec__14233,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14245 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14226,chunk__14227,count__14228,i__14229,pl_14245,vec__14233,k,plugin,seq__14226__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14245.call(null,msg_hist);
});})(seq__14226,chunk__14227,count__14228,i__14229,pl_14245,vec__14233,k,plugin,seq__14226__$1,temp__4657__auto__))
);
} else {
}


var G__14246 = cljs.core.next.call(null,seq__14226__$1);
var G__14247 = null;
var G__14248 = (0);
var G__14249 = (0);
seq__14226 = G__14246;
chunk__14227 = G__14247;
count__14228 = G__14248;
i__14229 = G__14249;
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
var G__14251 = arguments.length;
switch (G__14251) {
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

var seq__14252_14257 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__14253_14258 = null;
var count__14254_14259 = (0);
var i__14255_14260 = (0);
while(true){
if((i__14255_14260 < count__14254_14259)){
var msg_14261 = cljs.core._nth.call(null,chunk__14253_14258,i__14255_14260);
figwheel.client.socket.handle_incoming_message.call(null,msg_14261);


var G__14262 = seq__14252_14257;
var G__14263 = chunk__14253_14258;
var G__14264 = count__14254_14259;
var G__14265 = (i__14255_14260 + (1));
seq__14252_14257 = G__14262;
chunk__14253_14258 = G__14263;
count__14254_14259 = G__14264;
i__14255_14260 = G__14265;
continue;
} else {
var temp__4657__auto___14266 = cljs.core.seq.call(null,seq__14252_14257);
if(temp__4657__auto___14266){
var seq__14252_14267__$1 = temp__4657__auto___14266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14252_14267__$1)){
var c__4317__auto___14268 = cljs.core.chunk_first.call(null,seq__14252_14267__$1);
var G__14269 = cljs.core.chunk_rest.call(null,seq__14252_14267__$1);
var G__14270 = c__4317__auto___14268;
var G__14271 = cljs.core.count.call(null,c__4317__auto___14268);
var G__14272 = (0);
seq__14252_14257 = G__14269;
chunk__14253_14258 = G__14270;
count__14254_14259 = G__14271;
i__14255_14260 = G__14272;
continue;
} else {
var msg_14273 = cljs.core.first.call(null,seq__14252_14267__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_14273);


var G__14274 = cljs.core.next.call(null,seq__14252_14267__$1);
var G__14275 = null;
var G__14276 = (0);
var G__14277 = (0);
seq__14252_14257 = G__14274;
chunk__14253_14258 = G__14275;
count__14254_14259 = G__14276;
i__14255_14260 = G__14277;
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
var len__4497__auto___14282 = arguments.length;
var i__4498__auto___14283 = (0);
while(true){
if((i__4498__auto___14283 < len__4497__auto___14282)){
args__4500__auto__.push((arguments[i__4498__auto___14283]));

var G__14284 = (i__4498__auto___14283 + (1));
i__4498__auto___14283 = G__14284;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__14279){
var map__14280 = p__14279;
var map__14280__$1 = ((((!((map__14280 == null)))?(((((map__14280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14280):map__14280);
var opts = map__14280__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq14278){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14278));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e14285){if((e14285 instanceof Error)){
var e = e14285;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e14285;

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
return (function (p__14286){
var map__14287 = p__14286;
var map__14287__$1 = ((((!((map__14287 == null)))?(((((map__14287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14287):map__14287);
var msg_name = cljs.core.get.call(null,map__14287__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
