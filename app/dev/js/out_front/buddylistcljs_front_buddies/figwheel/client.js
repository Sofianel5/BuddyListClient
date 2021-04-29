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
var G__13805 = arguments.length;
switch (G__13805) {
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
var len__4497__auto___13808 = arguments.length;
var i__4498__auto___13809 = (0);
while(true){
if((i__4498__auto___13809 < len__4497__auto___13808)){
args__4500__auto__.push((arguments[i__4498__auto___13809]));

var G__13810 = (i__4498__auto___13809 + (1));
i__4498__auto___13809 = G__13810;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq13807){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13807));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___13812 = arguments.length;
var i__4498__auto___13813 = (0);
while(true){
if((i__4498__auto___13813 < len__4497__auto___13812)){
args__4500__auto__.push((arguments[i__4498__auto___13813]));

var G__13814 = (i__4498__auto___13813 + (1));
i__4498__auto___13813 = G__13814;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq13811){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13811));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__13815){
var map__13816 = p__13815;
var map__13816__$1 = ((((!((map__13816 == null)))?(((((map__13816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13816):map__13816);
var message = cljs.core.get.call(null,map__13816__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__13816__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__2151__auto___13895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___13895,ch){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___13895,ch){
return (function (state_13867){
var state_val_13868 = (state_13867[(1)]);
if((state_val_13868 === (7))){
var inst_13863 = (state_13867[(2)]);
var state_13867__$1 = state_13867;
var statearr_13869_13896 = state_13867__$1;
(statearr_13869_13896[(2)] = inst_13863);

(statearr_13869_13896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (1))){
var state_13867__$1 = state_13867;
var statearr_13870_13897 = state_13867__$1;
(statearr_13870_13897[(2)] = null);

(statearr_13870_13897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (4))){
var inst_13820 = (state_13867[(7)]);
var inst_13820__$1 = (state_13867[(2)]);
var state_13867__$1 = (function (){var statearr_13871 = state_13867;
(statearr_13871[(7)] = inst_13820__$1);

return statearr_13871;
})();
if(cljs.core.truth_(inst_13820__$1)){
var statearr_13872_13898 = state_13867__$1;
(statearr_13872_13898[(1)] = (5));

} else {
var statearr_13873_13899 = state_13867__$1;
(statearr_13873_13899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (15))){
var inst_13827 = (state_13867[(8)]);
var inst_13842 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13827);
var inst_13843 = cljs.core.first.call(null,inst_13842);
var inst_13844 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_13843);
var inst_13845 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13844)].join('');
var inst_13846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_13845);
var state_13867__$1 = state_13867;
var statearr_13874_13900 = state_13867__$1;
(statearr_13874_13900[(2)] = inst_13846);

(statearr_13874_13900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (13))){
var inst_13851 = (state_13867[(2)]);
var state_13867__$1 = state_13867;
var statearr_13875_13901 = state_13867__$1;
(statearr_13875_13901[(2)] = inst_13851);

(statearr_13875_13901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (6))){
var state_13867__$1 = state_13867;
var statearr_13876_13902 = state_13867__$1;
(statearr_13876_13902[(2)] = null);

(statearr_13876_13902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (17))){
var inst_13849 = (state_13867[(2)]);
var state_13867__$1 = state_13867;
var statearr_13877_13903 = state_13867__$1;
(statearr_13877_13903[(2)] = inst_13849);

(statearr_13877_13903[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (3))){
var inst_13865 = (state_13867[(2)]);
var state_13867__$1 = state_13867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13867__$1,inst_13865);
} else {
if((state_val_13868 === (12))){
var inst_13826 = (state_13867[(9)]);
var inst_13840 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_13826,opts);
var state_13867__$1 = state_13867;
if(cljs.core.truth_(inst_13840)){
var statearr_13878_13904 = state_13867__$1;
(statearr_13878_13904[(1)] = (15));

} else {
var statearr_13879_13905 = state_13867__$1;
(statearr_13879_13905[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (2))){
var state_13867__$1 = state_13867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13867__$1,(4),ch);
} else {
if((state_val_13868 === (11))){
var inst_13827 = (state_13867[(8)]);
var inst_13832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13833 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_13827);
var inst_13834 = cljs.core.async.timeout.call(null,(1000));
var inst_13835 = [inst_13833,inst_13834];
var inst_13836 = (new cljs.core.PersistentVector(null,2,(5),inst_13832,inst_13835,null));
var state_13867__$1 = state_13867;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13867__$1,(14),inst_13836);
} else {
if((state_val_13868 === (9))){
var inst_13827 = (state_13867[(8)]);
var inst_13853 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_13854 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13827);
var inst_13855 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13854);
var inst_13856 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13855)].join('');
var inst_13857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_13856);
var state_13867__$1 = (function (){var statearr_13880 = state_13867;
(statearr_13880[(10)] = inst_13853);

return statearr_13880;
})();
var statearr_13881_13906 = state_13867__$1;
(statearr_13881_13906[(2)] = inst_13857);

(statearr_13881_13906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (5))){
var inst_13820 = (state_13867[(7)]);
var inst_13822 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_13823 = (new cljs.core.PersistentArrayMap(null,2,inst_13822,null));
var inst_13824 = (new cljs.core.PersistentHashSet(null,inst_13823,null));
var inst_13825 = figwheel.client.focus_msgs.call(null,inst_13824,inst_13820);
var inst_13826 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_13825);
var inst_13827 = cljs.core.first.call(null,inst_13825);
var inst_13828 = figwheel.client.autoload_QMARK_.call(null);
var state_13867__$1 = (function (){var statearr_13882 = state_13867;
(statearr_13882[(8)] = inst_13827);

(statearr_13882[(9)] = inst_13826);

return statearr_13882;
})();
if(cljs.core.truth_(inst_13828)){
var statearr_13883_13907 = state_13867__$1;
(statearr_13883_13907[(1)] = (8));

} else {
var statearr_13884_13908 = state_13867__$1;
(statearr_13884_13908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (14))){
var inst_13838 = (state_13867[(2)]);
var state_13867__$1 = state_13867;
var statearr_13885_13909 = state_13867__$1;
(statearr_13885_13909[(2)] = inst_13838);

(statearr_13885_13909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (16))){
var state_13867__$1 = state_13867;
var statearr_13886_13910 = state_13867__$1;
(statearr_13886_13910[(2)] = null);

(statearr_13886_13910[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (10))){
var inst_13859 = (state_13867[(2)]);
var state_13867__$1 = (function (){var statearr_13887 = state_13867;
(statearr_13887[(11)] = inst_13859);

return statearr_13887;
})();
var statearr_13888_13911 = state_13867__$1;
(statearr_13888_13911[(2)] = null);

(statearr_13888_13911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (8))){
var inst_13826 = (state_13867[(9)]);
var inst_13830 = figwheel.client.reload_file_state_QMARK_.call(null,inst_13826,opts);
var state_13867__$1 = state_13867;
if(cljs.core.truth_(inst_13830)){
var statearr_13889_13912 = state_13867__$1;
(statearr_13889_13912[(1)] = (11));

} else {
var statearr_13890_13913 = state_13867__$1;
(statearr_13890_13913[(1)] = (12));

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
});})(c__2151__auto___13895,ch))
;
return ((function (switch__1996__auto__,c__2151__auto___13895,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0 = (function (){
var statearr_13891 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13891[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__);

(statearr_13891[(1)] = (1));

return statearr_13891;
});
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1 = (function (state_13867){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_13867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e13892){if((e13892 instanceof Object)){
var ex__2000__auto__ = e13892;
var statearr_13893_13914 = state_13867;
(statearr_13893_13914[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13915 = state_13867;
state_13867 = G__13915;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__ = function(state_13867){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1.call(this,state_13867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___13895,ch))
})();
var state__2153__auto__ = (function (){var statearr_13894 = f__2152__auto__.call(null);
(statearr_13894[(6)] = c__2151__auto___13895);

return statearr_13894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___13895,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__13916_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__13916_SHARP_));
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
var base_path_13918 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_13918){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e13917){if((e13917 instanceof Error)){
var e = e13917;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_13918], null));
} else {
var e = e13917;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_13918))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__13919){
var map__13920 = p__13919;
var map__13920__$1 = ((((!((map__13920 == null)))?(((((map__13920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13920):map__13920);
var opts = map__13920__$1;
var build_id = cljs.core.get.call(null,map__13920__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__13920,map__13920__$1,opts,build_id){
return (function (p__13922){
var vec__13923 = p__13922;
var seq__13924 = cljs.core.seq.call(null,vec__13923);
var first__13925 = cljs.core.first.call(null,seq__13924);
var seq__13924__$1 = cljs.core.next.call(null,seq__13924);
var map__13926 = first__13925;
var map__13926__$1 = ((((!((map__13926 == null)))?(((((map__13926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13926):map__13926);
var msg = map__13926__$1;
var msg_name = cljs.core.get.call(null,map__13926__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13924__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__13923,seq__13924,first__13925,seq__13924__$1,map__13926,map__13926__$1,msg,msg_name,_,map__13920,map__13920__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__13923,seq__13924,first__13925,seq__13924__$1,map__13926,map__13926__$1,msg,msg_name,_,map__13920,map__13920__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__13920,map__13920__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__13928){
var vec__13929 = p__13928;
var seq__13930 = cljs.core.seq.call(null,vec__13929);
var first__13931 = cljs.core.first.call(null,seq__13930);
var seq__13930__$1 = cljs.core.next.call(null,seq__13930);
var map__13932 = first__13931;
var map__13932__$1 = ((((!((map__13932 == null)))?(((((map__13932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13932):map__13932);
var msg = map__13932__$1;
var msg_name = cljs.core.get.call(null,map__13932__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13930__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__13934){
var map__13935 = p__13934;
var map__13935__$1 = ((((!((map__13935 == null)))?(((((map__13935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13935):map__13935);
var on_compile_warning = cljs.core.get.call(null,map__13935__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__13935__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__13935,map__13935__$1,on_compile_warning,on_compile_fail){
return (function (p__13937){
var vec__13938 = p__13937;
var seq__13939 = cljs.core.seq.call(null,vec__13938);
var first__13940 = cljs.core.first.call(null,seq__13939);
var seq__13939__$1 = cljs.core.next.call(null,seq__13939);
var map__13941 = first__13940;
var map__13941__$1 = ((((!((map__13941 == null)))?(((((map__13941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13941):map__13941);
var msg = map__13941__$1;
var msg_name = cljs.core.get.call(null,map__13941__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13939__$1;
var pred__13943 = cljs.core._EQ_;
var expr__13944 = msg_name;
if(cljs.core.truth_(pred__13943.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__13944))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__13943.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13944))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__13935,map__13935__$1,on_compile_warning,on_compile_fail))
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
return (function (state_14033){
var state_val_14034 = (state_14033[(1)]);
if((state_val_14034 === (7))){
var inst_13953 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
if(cljs.core.truth_(inst_13953)){
var statearr_14035_14082 = state_14033__$1;
(statearr_14035_14082[(1)] = (8));

} else {
var statearr_14036_14083 = state_14033__$1;
(statearr_14036_14083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (20))){
var inst_14027 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14037_14084 = state_14033__$1;
(statearr_14037_14084[(2)] = inst_14027);

(statearr_14037_14084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (27))){
var inst_14023 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14038_14085 = state_14033__$1;
(statearr_14038_14085[(2)] = inst_14023);

(statearr_14038_14085[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (1))){
var inst_13946 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14033__$1 = state_14033;
if(cljs.core.truth_(inst_13946)){
var statearr_14039_14086 = state_14033__$1;
(statearr_14039_14086[(1)] = (2));

} else {
var statearr_14040_14087 = state_14033__$1;
(statearr_14040_14087[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (24))){
var inst_14025 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14041_14088 = state_14033__$1;
(statearr_14041_14088[(2)] = inst_14025);

(statearr_14041_14088[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (4))){
var inst_14031 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14033__$1,inst_14031);
} else {
if((state_val_14034 === (15))){
var inst_14029 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14042_14089 = state_14033__$1;
(statearr_14042_14089[(2)] = inst_14029);

(statearr_14042_14089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (21))){
var inst_13982 = (state_14033[(2)]);
var inst_13983 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13984 = figwheel.client.auto_jump_to_error.call(null,opts,inst_13983);
var state_14033__$1 = (function (){var statearr_14043 = state_14033;
(statearr_14043[(7)] = inst_13982);

return statearr_14043;
})();
var statearr_14044_14090 = state_14033__$1;
(statearr_14044_14090[(2)] = inst_13984);

(statearr_14044_14090[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (31))){
var inst_14012 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14033__$1 = state_14033;
if(cljs.core.truth_(inst_14012)){
var statearr_14045_14091 = state_14033__$1;
(statearr_14045_14091[(1)] = (34));

} else {
var statearr_14046_14092 = state_14033__$1;
(statearr_14046_14092[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (32))){
var inst_14021 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14047_14093 = state_14033__$1;
(statearr_14047_14093[(2)] = inst_14021);

(statearr_14047_14093[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (33))){
var inst_14008 = (state_14033[(2)]);
var inst_14009 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14010 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14009);
var state_14033__$1 = (function (){var statearr_14048 = state_14033;
(statearr_14048[(8)] = inst_14008);

return statearr_14048;
})();
var statearr_14049_14094 = state_14033__$1;
(statearr_14049_14094[(2)] = inst_14010);

(statearr_14049_14094[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (13))){
var inst_13967 = figwheel.client.heads_up.clear.call(null);
var state_14033__$1 = state_14033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14033__$1,(16),inst_13967);
} else {
if((state_val_14034 === (22))){
var inst_13988 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13989 = figwheel.client.heads_up.append_warning_message.call(null,inst_13988);
var state_14033__$1 = state_14033;
var statearr_14050_14095 = state_14033__$1;
(statearr_14050_14095[(2)] = inst_13989);

(statearr_14050_14095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (36))){
var inst_14019 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14051_14096 = state_14033__$1;
(statearr_14051_14096[(2)] = inst_14019);

(statearr_14051_14096[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (29))){
var inst_13999 = (state_14033[(2)]);
var inst_14000 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14001 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14000);
var state_14033__$1 = (function (){var statearr_14052 = state_14033;
(statearr_14052[(9)] = inst_13999);

return statearr_14052;
})();
var statearr_14053_14097 = state_14033__$1;
(statearr_14053_14097[(2)] = inst_14001);

(statearr_14053_14097[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (6))){
var inst_13948 = (state_14033[(10)]);
var state_14033__$1 = state_14033;
var statearr_14054_14098 = state_14033__$1;
(statearr_14054_14098[(2)] = inst_13948);

(statearr_14054_14098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (28))){
var inst_13995 = (state_14033[(2)]);
var inst_13996 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13997 = figwheel.client.heads_up.display_warning.call(null,inst_13996);
var state_14033__$1 = (function (){var statearr_14055 = state_14033;
(statearr_14055[(11)] = inst_13995);

return statearr_14055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14033__$1,(29),inst_13997);
} else {
if((state_val_14034 === (25))){
var inst_13993 = figwheel.client.heads_up.clear.call(null);
var state_14033__$1 = state_14033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14033__$1,(28),inst_13993);
} else {
if((state_val_14034 === (34))){
var inst_14014 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14033__$1 = state_14033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14033__$1,(37),inst_14014);
} else {
if((state_val_14034 === (17))){
var inst_13973 = (state_14033[(2)]);
var inst_13974 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13975 = figwheel.client.auto_jump_to_error.call(null,opts,inst_13974);
var state_14033__$1 = (function (){var statearr_14056 = state_14033;
(statearr_14056[(12)] = inst_13973);

return statearr_14056;
})();
var statearr_14057_14099 = state_14033__$1;
(statearr_14057_14099[(2)] = inst_13975);

(statearr_14057_14099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (3))){
var inst_13965 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14033__$1 = state_14033;
if(cljs.core.truth_(inst_13965)){
var statearr_14058_14100 = state_14033__$1;
(statearr_14058_14100[(1)] = (13));

} else {
var statearr_14059_14101 = state_14033__$1;
(statearr_14059_14101[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (12))){
var inst_13961 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14060_14102 = state_14033__$1;
(statearr_14060_14102[(2)] = inst_13961);

(statearr_14060_14102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (2))){
var inst_13948 = (state_14033[(10)]);
var inst_13948__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_14033__$1 = (function (){var statearr_14061 = state_14033;
(statearr_14061[(10)] = inst_13948__$1);

return statearr_14061;
})();
if(cljs.core.truth_(inst_13948__$1)){
var statearr_14062_14103 = state_14033__$1;
(statearr_14062_14103[(1)] = (5));

} else {
var statearr_14063_14104 = state_14033__$1;
(statearr_14063_14104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (23))){
var inst_13991 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14033__$1 = state_14033;
if(cljs.core.truth_(inst_13991)){
var statearr_14064_14105 = state_14033__$1;
(statearr_14064_14105[(1)] = (25));

} else {
var statearr_14065_14106 = state_14033__$1;
(statearr_14065_14106[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (35))){
var state_14033__$1 = state_14033;
var statearr_14066_14107 = state_14033__$1;
(statearr_14066_14107[(2)] = null);

(statearr_14066_14107[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (19))){
var inst_13986 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14033__$1 = state_14033;
if(cljs.core.truth_(inst_13986)){
var statearr_14067_14108 = state_14033__$1;
(statearr_14067_14108[(1)] = (22));

} else {
var statearr_14068_14109 = state_14033__$1;
(statearr_14068_14109[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (11))){
var inst_13957 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14069_14110 = state_14033__$1;
(statearr_14069_14110[(2)] = inst_13957);

(statearr_14069_14110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (9))){
var inst_13959 = figwheel.client.heads_up.clear.call(null);
var state_14033__$1 = state_14033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14033__$1,(12),inst_13959);
} else {
if((state_val_14034 === (5))){
var inst_13950 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_14033__$1 = state_14033;
var statearr_14070_14111 = state_14033__$1;
(statearr_14070_14111[(2)] = inst_13950);

(statearr_14070_14111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (14))){
var inst_13977 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14033__$1 = state_14033;
if(cljs.core.truth_(inst_13977)){
var statearr_14071_14112 = state_14033__$1;
(statearr_14071_14112[(1)] = (18));

} else {
var statearr_14072_14113 = state_14033__$1;
(statearr_14072_14113[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (26))){
var inst_14003 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14033__$1 = state_14033;
if(cljs.core.truth_(inst_14003)){
var statearr_14073_14114 = state_14033__$1;
(statearr_14073_14114[(1)] = (30));

} else {
var statearr_14074_14115 = state_14033__$1;
(statearr_14074_14115[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (16))){
var inst_13969 = (state_14033[(2)]);
var inst_13970 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13971 = figwheel.client.heads_up.display_exception.call(null,inst_13970);
var state_14033__$1 = (function (){var statearr_14075 = state_14033;
(statearr_14075[(13)] = inst_13969);

return statearr_14075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14033__$1,(17),inst_13971);
} else {
if((state_val_14034 === (30))){
var inst_14005 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14006 = figwheel.client.heads_up.display_warning.call(null,inst_14005);
var state_14033__$1 = state_14033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14033__$1,(33),inst_14006);
} else {
if((state_val_14034 === (10))){
var inst_13963 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14076_14116 = state_14033__$1;
(statearr_14076_14116[(2)] = inst_13963);

(statearr_14076_14116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (18))){
var inst_13979 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13980 = figwheel.client.heads_up.display_exception.call(null,inst_13979);
var state_14033__$1 = state_14033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14033__$1,(21),inst_13980);
} else {
if((state_val_14034 === (37))){
var inst_14016 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14077_14117 = state_14033__$1;
(statearr_14077_14117[(2)] = inst_14016);

(statearr_14077_14117[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14034 === (8))){
var inst_13955 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14033__$1 = state_14033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14033__$1,(11),inst_13955);
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
var statearr_14078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14078[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__);

(statearr_14078[(1)] = (1));

return statearr_14078;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1 = (function (state_14033){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14079){if((e14079 instanceof Object)){
var ex__2000__auto__ = e14079;
var statearr_14080_14118 = state_14033;
(statearr_14080_14118[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14119 = state_14033;
state_14033 = G__14119;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__ = function(state_14033){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1.call(this,state_14033);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,msg_hist,msg_names,msg))
})();
var state__2153__auto__ = (function (){var statearr_14081 = f__2152__auto__.call(null);
(statearr_14081[(6)] = c__2151__auto__);

return statearr_14081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__,msg_hist,msg_names,msg))
);

return c__2151__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__2151__auto___14148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___14148,ch){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___14148,ch){
return (function (state_14134){
var state_val_14135 = (state_14134[(1)]);
if((state_val_14135 === (1))){
var state_14134__$1 = state_14134;
var statearr_14136_14149 = state_14134__$1;
(statearr_14136_14149[(2)] = null);

(statearr_14136_14149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (2))){
var state_14134__$1 = state_14134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14134__$1,(4),ch);
} else {
if((state_val_14135 === (3))){
var inst_14132 = (state_14134[(2)]);
var state_14134__$1 = state_14134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14134__$1,inst_14132);
} else {
if((state_val_14135 === (4))){
var inst_14122 = (state_14134[(7)]);
var inst_14122__$1 = (state_14134[(2)]);
var state_14134__$1 = (function (){var statearr_14137 = state_14134;
(statearr_14137[(7)] = inst_14122__$1);

return statearr_14137;
})();
if(cljs.core.truth_(inst_14122__$1)){
var statearr_14138_14150 = state_14134__$1;
(statearr_14138_14150[(1)] = (5));

} else {
var statearr_14139_14151 = state_14134__$1;
(statearr_14139_14151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (5))){
var inst_14122 = (state_14134[(7)]);
var inst_14124 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14122);
var state_14134__$1 = state_14134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14134__$1,(8),inst_14124);
} else {
if((state_val_14135 === (6))){
var state_14134__$1 = state_14134;
var statearr_14140_14152 = state_14134__$1;
(statearr_14140_14152[(2)] = null);

(statearr_14140_14152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (7))){
var inst_14130 = (state_14134[(2)]);
var state_14134__$1 = state_14134;
var statearr_14141_14153 = state_14134__$1;
(statearr_14141_14153[(2)] = inst_14130);

(statearr_14141_14153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (8))){
var inst_14126 = (state_14134[(2)]);
var state_14134__$1 = (function (){var statearr_14142 = state_14134;
(statearr_14142[(8)] = inst_14126);

return statearr_14142;
})();
var statearr_14143_14154 = state_14134__$1;
(statearr_14143_14154[(2)] = null);

(statearr_14143_14154[(1)] = (2));


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
});})(c__2151__auto___14148,ch))
;
return ((function (switch__1996__auto__,c__2151__auto___14148,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0 = (function (){
var statearr_14144 = [null,null,null,null,null,null,null,null,null];
(statearr_14144[(0)] = figwheel$client$heads_up_plugin_$_state_machine__1997__auto__);

(statearr_14144[(1)] = (1));

return statearr_14144;
});
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1 = (function (state_14134){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14145){if((e14145 instanceof Object)){
var ex__2000__auto__ = e14145;
var statearr_14146_14155 = state_14134;
(statearr_14146_14155[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14156 = state_14134;
state_14134 = G__14156;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__ = function(state_14134){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1.call(this,state_14134);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___14148,ch))
})();
var state__2153__auto__ = (function (){var statearr_14147 = f__2152__auto__.call(null);
(statearr_14147[(6)] = c__2151__auto___14148);

return statearr_14147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___14148,ch))
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
return (function (state_14162){
var state_val_14163 = (state_14162[(1)]);
if((state_val_14163 === (1))){
var inst_14157 = cljs.core.async.timeout.call(null,(3000));
var state_14162__$1 = state_14162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14162__$1,(2),inst_14157);
} else {
if((state_val_14163 === (2))){
var inst_14159 = (state_14162[(2)]);
var inst_14160 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14162__$1 = (function (){var statearr_14164 = state_14162;
(statearr_14164[(7)] = inst_14159);

return statearr_14164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14162__$1,inst_14160);
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
var statearr_14165 = [null,null,null,null,null,null,null,null];
(statearr_14165[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__);

(statearr_14165[(1)] = (1));

return statearr_14165;
});
var figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1 = (function (state_14162){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14166){if((e14166 instanceof Object)){
var ex__2000__auto__ = e14166;
var statearr_14167_14169 = state_14162;
(statearr_14167_14169[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14170 = state_14162;
state_14162 = G__14170;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__ = function(state_14162){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1.call(this,state_14162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__))
})();
var state__2153__auto__ = (function (){var statearr_14168 = f__2152__auto__.call(null);
(statearr_14168[(6)] = c__2151__auto__);

return statearr_14168;
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
return (function (state_14177){
var state_val_14178 = (state_14177[(1)]);
if((state_val_14178 === (1))){
var inst_14171 = cljs.core.async.timeout.call(null,(2000));
var state_14177__$1 = state_14177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14177__$1,(2),inst_14171);
} else {
if((state_val_14178 === (2))){
var inst_14173 = (state_14177[(2)]);
var inst_14174 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_14175 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_14174);
var state_14177__$1 = (function (){var statearr_14179 = state_14177;
(statearr_14179[(7)] = inst_14173);

return statearr_14179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14177__$1,inst_14175);
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
var statearr_14180 = [null,null,null,null,null,null,null,null];
(statearr_14180[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__);

(statearr_14180[(1)] = (1));

return statearr_14180;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1 = (function (state_14177){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14181){if((e14181 instanceof Object)){
var ex__2000__auto__ = e14181;
var statearr_14182_14184 = state_14177;
(statearr_14182_14184[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14185 = state_14177;
state_14177 = G__14185;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__ = function(state_14177){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1.call(this,state_14177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,figwheel_version,temp__4657__auto__))
})();
var state__2153__auto__ = (function (){var statearr_14183 = f__2152__auto__.call(null);
(statearr_14183[(6)] = c__2151__auto__);

return statearr_14183;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__14186){
var map__14187 = p__14186;
var map__14187__$1 = ((((!((map__14187 == null)))?(((((map__14187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14187):map__14187);
var file = cljs.core.get.call(null,map__14187__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__14187__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__14187__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__14189 = "";
var G__14189__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14189),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__14189);
var G__14189__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14189__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__14189__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14189__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__14189__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__14190){
var map__14191 = p__14190;
var map__14191__$1 = ((((!((map__14191 == null)))?(((((map__14191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14191):map__14191);
var ed = map__14191__$1;
var formatted_exception = cljs.core.get.call(null,map__14191__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__14191__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__14191__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__14193_14197 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14194_14198 = null;
var count__14195_14199 = (0);
var i__14196_14200 = (0);
while(true){
if((i__14196_14200 < count__14195_14199)){
var msg_14201 = cljs.core._nth.call(null,chunk__14194_14198,i__14196_14200);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14201);


var G__14202 = seq__14193_14197;
var G__14203 = chunk__14194_14198;
var G__14204 = count__14195_14199;
var G__14205 = (i__14196_14200 + (1));
seq__14193_14197 = G__14202;
chunk__14194_14198 = G__14203;
count__14195_14199 = G__14204;
i__14196_14200 = G__14205;
continue;
} else {
var temp__4657__auto___14206 = cljs.core.seq.call(null,seq__14193_14197);
if(temp__4657__auto___14206){
var seq__14193_14207__$1 = temp__4657__auto___14206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14193_14207__$1)){
var c__4317__auto___14208 = cljs.core.chunk_first.call(null,seq__14193_14207__$1);
var G__14209 = cljs.core.chunk_rest.call(null,seq__14193_14207__$1);
var G__14210 = c__4317__auto___14208;
var G__14211 = cljs.core.count.call(null,c__4317__auto___14208);
var G__14212 = (0);
seq__14193_14197 = G__14209;
chunk__14194_14198 = G__14210;
count__14195_14199 = G__14211;
i__14196_14200 = G__14212;
continue;
} else {
var msg_14213 = cljs.core.first.call(null,seq__14193_14207__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14213);


var G__14214 = cljs.core.next.call(null,seq__14193_14207__$1);
var G__14215 = null;
var G__14216 = (0);
var G__14217 = (0);
seq__14193_14197 = G__14214;
chunk__14194_14198 = G__14215;
count__14195_14199 = G__14216;
i__14196_14200 = G__14217;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__14218){
var map__14219 = p__14218;
var map__14219__$1 = ((((!((map__14219 == null)))?(((((map__14219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14219):map__14219);
var w = map__14219__$1;
var message = cljs.core.get.call(null,map__14219__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/dev/js/out_front/buddylistcljs_front_buddies/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/dev/js/out_front/buddylistcljs_front_buddies/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__14221 = cljs.core.seq.call(null,plugins);
var chunk__14222 = null;
var count__14223 = (0);
var i__14224 = (0);
while(true){
if((i__14224 < count__14223)){
var vec__14225 = cljs.core._nth.call(null,chunk__14222,i__14224);
var k = cljs.core.nth.call(null,vec__14225,(0),null);
var plugin = cljs.core.nth.call(null,vec__14225,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14231 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14221,chunk__14222,count__14223,i__14224,pl_14231,vec__14225,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14231.call(null,msg_hist);
});})(seq__14221,chunk__14222,count__14223,i__14224,pl_14231,vec__14225,k,plugin))
);
} else {
}


var G__14232 = seq__14221;
var G__14233 = chunk__14222;
var G__14234 = count__14223;
var G__14235 = (i__14224 + (1));
seq__14221 = G__14232;
chunk__14222 = G__14233;
count__14223 = G__14234;
i__14224 = G__14235;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14221);
if(temp__4657__auto__){
var seq__14221__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14221__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__14221__$1);
var G__14236 = cljs.core.chunk_rest.call(null,seq__14221__$1);
var G__14237 = c__4317__auto__;
var G__14238 = cljs.core.count.call(null,c__4317__auto__);
var G__14239 = (0);
seq__14221 = G__14236;
chunk__14222 = G__14237;
count__14223 = G__14238;
i__14224 = G__14239;
continue;
} else {
var vec__14228 = cljs.core.first.call(null,seq__14221__$1);
var k = cljs.core.nth.call(null,vec__14228,(0),null);
var plugin = cljs.core.nth.call(null,vec__14228,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14240 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14221,chunk__14222,count__14223,i__14224,pl_14240,vec__14228,k,plugin,seq__14221__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14240.call(null,msg_hist);
});})(seq__14221,chunk__14222,count__14223,i__14224,pl_14240,vec__14228,k,plugin,seq__14221__$1,temp__4657__auto__))
);
} else {
}


var G__14241 = cljs.core.next.call(null,seq__14221__$1);
var G__14242 = null;
var G__14243 = (0);
var G__14244 = (0);
seq__14221 = G__14241;
chunk__14222 = G__14242;
count__14223 = G__14243;
i__14224 = G__14244;
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
var G__14246 = arguments.length;
switch (G__14246) {
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

var seq__14247_14252 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__14248_14253 = null;
var count__14249_14254 = (0);
var i__14250_14255 = (0);
while(true){
if((i__14250_14255 < count__14249_14254)){
var msg_14256 = cljs.core._nth.call(null,chunk__14248_14253,i__14250_14255);
figwheel.client.socket.handle_incoming_message.call(null,msg_14256);


var G__14257 = seq__14247_14252;
var G__14258 = chunk__14248_14253;
var G__14259 = count__14249_14254;
var G__14260 = (i__14250_14255 + (1));
seq__14247_14252 = G__14257;
chunk__14248_14253 = G__14258;
count__14249_14254 = G__14259;
i__14250_14255 = G__14260;
continue;
} else {
var temp__4657__auto___14261 = cljs.core.seq.call(null,seq__14247_14252);
if(temp__4657__auto___14261){
var seq__14247_14262__$1 = temp__4657__auto___14261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14247_14262__$1)){
var c__4317__auto___14263 = cljs.core.chunk_first.call(null,seq__14247_14262__$1);
var G__14264 = cljs.core.chunk_rest.call(null,seq__14247_14262__$1);
var G__14265 = c__4317__auto___14263;
var G__14266 = cljs.core.count.call(null,c__4317__auto___14263);
var G__14267 = (0);
seq__14247_14252 = G__14264;
chunk__14248_14253 = G__14265;
count__14249_14254 = G__14266;
i__14250_14255 = G__14267;
continue;
} else {
var msg_14268 = cljs.core.first.call(null,seq__14247_14262__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_14268);


var G__14269 = cljs.core.next.call(null,seq__14247_14262__$1);
var G__14270 = null;
var G__14271 = (0);
var G__14272 = (0);
seq__14247_14252 = G__14269;
chunk__14248_14253 = G__14270;
count__14249_14254 = G__14271;
i__14250_14255 = G__14272;
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
var len__4497__auto___14277 = arguments.length;
var i__4498__auto___14278 = (0);
while(true){
if((i__4498__auto___14278 < len__4497__auto___14277)){
args__4500__auto__.push((arguments[i__4498__auto___14278]));

var G__14279 = (i__4498__auto___14278 + (1));
i__4498__auto___14278 = G__14279;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__14274){
var map__14275 = p__14274;
var map__14275__$1 = ((((!((map__14275 == null)))?(((((map__14275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14275):map__14275);
var opts = map__14275__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq14273){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14273));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e14280){if((e14280 instanceof Error)){
var e = e14280;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e14280;

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
return (function (p__14281){
var map__14282 = p__14281;
var map__14282__$1 = ((((!((map__14282 == null)))?(((((map__14282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14282):map__14282);
var msg_name = cljs.core.get.call(null,map__14282__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
