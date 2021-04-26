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
var G__13809 = arguments.length;
switch (G__13809) {
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
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq13811){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13811));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___13816 = arguments.length;
var i__4498__auto___13817 = (0);
while(true){
if((i__4498__auto___13817 < len__4497__auto___13816)){
args__4500__auto__.push((arguments[i__4498__auto___13817]));

var G__13818 = (i__4498__auto___13817 + (1));
i__4498__auto___13817 = G__13818;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq13815){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13815));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__13819){
var map__13820 = p__13819;
var map__13820__$1 = ((((!((map__13820 == null)))?(((((map__13820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13820):map__13820);
var message = cljs.core.get.call(null,map__13820__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__13820__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__2151__auto___13899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___13899,ch){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___13899,ch){
return (function (state_13871){
var state_val_13872 = (state_13871[(1)]);
if((state_val_13872 === (7))){
var inst_13867 = (state_13871[(2)]);
var state_13871__$1 = state_13871;
var statearr_13873_13900 = state_13871__$1;
(statearr_13873_13900[(2)] = inst_13867);

(statearr_13873_13900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (1))){
var state_13871__$1 = state_13871;
var statearr_13874_13901 = state_13871__$1;
(statearr_13874_13901[(2)] = null);

(statearr_13874_13901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (4))){
var inst_13824 = (state_13871[(7)]);
var inst_13824__$1 = (state_13871[(2)]);
var state_13871__$1 = (function (){var statearr_13875 = state_13871;
(statearr_13875[(7)] = inst_13824__$1);

return statearr_13875;
})();
if(cljs.core.truth_(inst_13824__$1)){
var statearr_13876_13902 = state_13871__$1;
(statearr_13876_13902[(1)] = (5));

} else {
var statearr_13877_13903 = state_13871__$1;
(statearr_13877_13903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (15))){
var inst_13831 = (state_13871[(8)]);
var inst_13846 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13831);
var inst_13847 = cljs.core.first.call(null,inst_13846);
var inst_13848 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_13847);
var inst_13849 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13848)].join('');
var inst_13850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_13849);
var state_13871__$1 = state_13871;
var statearr_13878_13904 = state_13871__$1;
(statearr_13878_13904[(2)] = inst_13850);

(statearr_13878_13904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (13))){
var inst_13855 = (state_13871[(2)]);
var state_13871__$1 = state_13871;
var statearr_13879_13905 = state_13871__$1;
(statearr_13879_13905[(2)] = inst_13855);

(statearr_13879_13905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (6))){
var state_13871__$1 = state_13871;
var statearr_13880_13906 = state_13871__$1;
(statearr_13880_13906[(2)] = null);

(statearr_13880_13906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (17))){
var inst_13853 = (state_13871[(2)]);
var state_13871__$1 = state_13871;
var statearr_13881_13907 = state_13871__$1;
(statearr_13881_13907[(2)] = inst_13853);

(statearr_13881_13907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (3))){
var inst_13869 = (state_13871[(2)]);
var state_13871__$1 = state_13871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13871__$1,inst_13869);
} else {
if((state_val_13872 === (12))){
var inst_13830 = (state_13871[(9)]);
var inst_13844 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_13830,opts);
var state_13871__$1 = state_13871;
if(cljs.core.truth_(inst_13844)){
var statearr_13882_13908 = state_13871__$1;
(statearr_13882_13908[(1)] = (15));

} else {
var statearr_13883_13909 = state_13871__$1;
(statearr_13883_13909[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (2))){
var state_13871__$1 = state_13871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13871__$1,(4),ch);
} else {
if((state_val_13872 === (11))){
var inst_13831 = (state_13871[(8)]);
var inst_13836 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13837 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_13831);
var inst_13838 = cljs.core.async.timeout.call(null,(1000));
var inst_13839 = [inst_13837,inst_13838];
var inst_13840 = (new cljs.core.PersistentVector(null,2,(5),inst_13836,inst_13839,null));
var state_13871__$1 = state_13871;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13871__$1,(14),inst_13840);
} else {
if((state_val_13872 === (9))){
var inst_13831 = (state_13871[(8)]);
var inst_13857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_13858 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13831);
var inst_13859 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13858);
var inst_13860 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13859)].join('');
var inst_13861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_13860);
var state_13871__$1 = (function (){var statearr_13884 = state_13871;
(statearr_13884[(10)] = inst_13857);

return statearr_13884;
})();
var statearr_13885_13910 = state_13871__$1;
(statearr_13885_13910[(2)] = inst_13861);

(statearr_13885_13910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (5))){
var inst_13824 = (state_13871[(7)]);
var inst_13826 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_13827 = (new cljs.core.PersistentArrayMap(null,2,inst_13826,null));
var inst_13828 = (new cljs.core.PersistentHashSet(null,inst_13827,null));
var inst_13829 = figwheel.client.focus_msgs.call(null,inst_13828,inst_13824);
var inst_13830 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_13829);
var inst_13831 = cljs.core.first.call(null,inst_13829);
var inst_13832 = figwheel.client.autoload_QMARK_.call(null);
var state_13871__$1 = (function (){var statearr_13886 = state_13871;
(statearr_13886[(9)] = inst_13830);

(statearr_13886[(8)] = inst_13831);

return statearr_13886;
})();
if(cljs.core.truth_(inst_13832)){
var statearr_13887_13911 = state_13871__$1;
(statearr_13887_13911[(1)] = (8));

} else {
var statearr_13888_13912 = state_13871__$1;
(statearr_13888_13912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (14))){
var inst_13842 = (state_13871[(2)]);
var state_13871__$1 = state_13871;
var statearr_13889_13913 = state_13871__$1;
(statearr_13889_13913[(2)] = inst_13842);

(statearr_13889_13913[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (16))){
var state_13871__$1 = state_13871;
var statearr_13890_13914 = state_13871__$1;
(statearr_13890_13914[(2)] = null);

(statearr_13890_13914[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (10))){
var inst_13863 = (state_13871[(2)]);
var state_13871__$1 = (function (){var statearr_13891 = state_13871;
(statearr_13891[(11)] = inst_13863);

return statearr_13891;
})();
var statearr_13892_13915 = state_13871__$1;
(statearr_13892_13915[(2)] = null);

(statearr_13892_13915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (8))){
var inst_13830 = (state_13871[(9)]);
var inst_13834 = figwheel.client.reload_file_state_QMARK_.call(null,inst_13830,opts);
var state_13871__$1 = state_13871;
if(cljs.core.truth_(inst_13834)){
var statearr_13893_13916 = state_13871__$1;
(statearr_13893_13916[(1)] = (11));

} else {
var statearr_13894_13917 = state_13871__$1;
(statearr_13894_13917[(1)] = (12));

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
});})(c__2151__auto___13899,ch))
;
return ((function (switch__1996__auto__,c__2151__auto___13899,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0 = (function (){
var statearr_13895 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13895[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__);

(statearr_13895[(1)] = (1));

return statearr_13895;
});
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1 = (function (state_13871){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_13871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e13896){if((e13896 instanceof Object)){
var ex__2000__auto__ = e13896;
var statearr_13897_13918 = state_13871;
(statearr_13897_13918[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13919 = state_13871;
state_13871 = G__13919;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__ = function(state_13871){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1.call(this,state_13871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___13899,ch))
})();
var state__2153__auto__ = (function (){var statearr_13898 = f__2152__auto__.call(null);
(statearr_13898[(6)] = c__2151__auto___13899);

return statearr_13898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___13899,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__13920_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__13920_SHARP_));
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
var base_path_13922 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_13922){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e13921){if((e13921 instanceof Error)){
var e = e13921;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_13922], null));
} else {
var e = e13921;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_13922))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__13923){
var map__13924 = p__13923;
var map__13924__$1 = ((((!((map__13924 == null)))?(((((map__13924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13924):map__13924);
var opts = map__13924__$1;
var build_id = cljs.core.get.call(null,map__13924__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__13924,map__13924__$1,opts,build_id){
return (function (p__13926){
var vec__13927 = p__13926;
var seq__13928 = cljs.core.seq.call(null,vec__13927);
var first__13929 = cljs.core.first.call(null,seq__13928);
var seq__13928__$1 = cljs.core.next.call(null,seq__13928);
var map__13930 = first__13929;
var map__13930__$1 = ((((!((map__13930 == null)))?(((((map__13930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13930):map__13930);
var msg = map__13930__$1;
var msg_name = cljs.core.get.call(null,map__13930__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13928__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__13927,seq__13928,first__13929,seq__13928__$1,map__13930,map__13930__$1,msg,msg_name,_,map__13924,map__13924__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__13927,seq__13928,first__13929,seq__13928__$1,map__13930,map__13930__$1,msg,msg_name,_,map__13924,map__13924__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__13924,map__13924__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__13932){
var vec__13933 = p__13932;
var seq__13934 = cljs.core.seq.call(null,vec__13933);
var first__13935 = cljs.core.first.call(null,seq__13934);
var seq__13934__$1 = cljs.core.next.call(null,seq__13934);
var map__13936 = first__13935;
var map__13936__$1 = ((((!((map__13936 == null)))?(((((map__13936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13936):map__13936);
var msg = map__13936__$1;
var msg_name = cljs.core.get.call(null,map__13936__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13934__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__13938){
var map__13939 = p__13938;
var map__13939__$1 = ((((!((map__13939 == null)))?(((((map__13939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13939):map__13939);
var on_compile_warning = cljs.core.get.call(null,map__13939__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__13939__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__13939,map__13939__$1,on_compile_warning,on_compile_fail){
return (function (p__13941){
var vec__13942 = p__13941;
var seq__13943 = cljs.core.seq.call(null,vec__13942);
var first__13944 = cljs.core.first.call(null,seq__13943);
var seq__13943__$1 = cljs.core.next.call(null,seq__13943);
var map__13945 = first__13944;
var map__13945__$1 = ((((!((map__13945 == null)))?(((((map__13945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13945):map__13945);
var msg = map__13945__$1;
var msg_name = cljs.core.get.call(null,map__13945__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13943__$1;
var pred__13947 = cljs.core._EQ_;
var expr__13948 = msg_name;
if(cljs.core.truth_(pred__13947.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__13948))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__13947.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13948))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__13939,map__13939__$1,on_compile_warning,on_compile_fail))
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
return (function (state_14037){
var state_val_14038 = (state_14037[(1)]);
if((state_val_14038 === (7))){
var inst_13957 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
if(cljs.core.truth_(inst_13957)){
var statearr_14039_14086 = state_14037__$1;
(statearr_14039_14086[(1)] = (8));

} else {
var statearr_14040_14087 = state_14037__$1;
(statearr_14040_14087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (20))){
var inst_14031 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14041_14088 = state_14037__$1;
(statearr_14041_14088[(2)] = inst_14031);

(statearr_14041_14088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (27))){
var inst_14027 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14042_14089 = state_14037__$1;
(statearr_14042_14089[(2)] = inst_14027);

(statearr_14042_14089[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (1))){
var inst_13950 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14037__$1 = state_14037;
if(cljs.core.truth_(inst_13950)){
var statearr_14043_14090 = state_14037__$1;
(statearr_14043_14090[(1)] = (2));

} else {
var statearr_14044_14091 = state_14037__$1;
(statearr_14044_14091[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (24))){
var inst_14029 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14045_14092 = state_14037__$1;
(statearr_14045_14092[(2)] = inst_14029);

(statearr_14045_14092[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (4))){
var inst_14035 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14037__$1,inst_14035);
} else {
if((state_val_14038 === (15))){
var inst_14033 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14046_14093 = state_14037__$1;
(statearr_14046_14093[(2)] = inst_14033);

(statearr_14046_14093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (21))){
var inst_13986 = (state_14037[(2)]);
var inst_13987 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13988 = figwheel.client.auto_jump_to_error.call(null,opts,inst_13987);
var state_14037__$1 = (function (){var statearr_14047 = state_14037;
(statearr_14047[(7)] = inst_13986);

return statearr_14047;
})();
var statearr_14048_14094 = state_14037__$1;
(statearr_14048_14094[(2)] = inst_13988);

(statearr_14048_14094[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (31))){
var inst_14016 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14037__$1 = state_14037;
if(cljs.core.truth_(inst_14016)){
var statearr_14049_14095 = state_14037__$1;
(statearr_14049_14095[(1)] = (34));

} else {
var statearr_14050_14096 = state_14037__$1;
(statearr_14050_14096[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (32))){
var inst_14025 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14051_14097 = state_14037__$1;
(statearr_14051_14097[(2)] = inst_14025);

(statearr_14051_14097[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (33))){
var inst_14012 = (state_14037[(2)]);
var inst_14013 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14014 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14013);
var state_14037__$1 = (function (){var statearr_14052 = state_14037;
(statearr_14052[(8)] = inst_14012);

return statearr_14052;
})();
var statearr_14053_14098 = state_14037__$1;
(statearr_14053_14098[(2)] = inst_14014);

(statearr_14053_14098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (13))){
var inst_13971 = figwheel.client.heads_up.clear.call(null);
var state_14037__$1 = state_14037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14037__$1,(16),inst_13971);
} else {
if((state_val_14038 === (22))){
var inst_13992 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13993 = figwheel.client.heads_up.append_warning_message.call(null,inst_13992);
var state_14037__$1 = state_14037;
var statearr_14054_14099 = state_14037__$1;
(statearr_14054_14099[(2)] = inst_13993);

(statearr_14054_14099[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (36))){
var inst_14023 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14055_14100 = state_14037__$1;
(statearr_14055_14100[(2)] = inst_14023);

(statearr_14055_14100[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (29))){
var inst_14003 = (state_14037[(2)]);
var inst_14004 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14005 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14004);
var state_14037__$1 = (function (){var statearr_14056 = state_14037;
(statearr_14056[(9)] = inst_14003);

return statearr_14056;
})();
var statearr_14057_14101 = state_14037__$1;
(statearr_14057_14101[(2)] = inst_14005);

(statearr_14057_14101[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (6))){
var inst_13952 = (state_14037[(10)]);
var state_14037__$1 = state_14037;
var statearr_14058_14102 = state_14037__$1;
(statearr_14058_14102[(2)] = inst_13952);

(statearr_14058_14102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (28))){
var inst_13999 = (state_14037[(2)]);
var inst_14000 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14001 = figwheel.client.heads_up.display_warning.call(null,inst_14000);
var state_14037__$1 = (function (){var statearr_14059 = state_14037;
(statearr_14059[(11)] = inst_13999);

return statearr_14059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14037__$1,(29),inst_14001);
} else {
if((state_val_14038 === (25))){
var inst_13997 = figwheel.client.heads_up.clear.call(null);
var state_14037__$1 = state_14037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14037__$1,(28),inst_13997);
} else {
if((state_val_14038 === (34))){
var inst_14018 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14037__$1 = state_14037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14037__$1,(37),inst_14018);
} else {
if((state_val_14038 === (17))){
var inst_13977 = (state_14037[(2)]);
var inst_13978 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13979 = figwheel.client.auto_jump_to_error.call(null,opts,inst_13978);
var state_14037__$1 = (function (){var statearr_14060 = state_14037;
(statearr_14060[(12)] = inst_13977);

return statearr_14060;
})();
var statearr_14061_14103 = state_14037__$1;
(statearr_14061_14103[(2)] = inst_13979);

(statearr_14061_14103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (3))){
var inst_13969 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14037__$1 = state_14037;
if(cljs.core.truth_(inst_13969)){
var statearr_14062_14104 = state_14037__$1;
(statearr_14062_14104[(1)] = (13));

} else {
var statearr_14063_14105 = state_14037__$1;
(statearr_14063_14105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (12))){
var inst_13965 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14064_14106 = state_14037__$1;
(statearr_14064_14106[(2)] = inst_13965);

(statearr_14064_14106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (2))){
var inst_13952 = (state_14037[(10)]);
var inst_13952__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_14037__$1 = (function (){var statearr_14065 = state_14037;
(statearr_14065[(10)] = inst_13952__$1);

return statearr_14065;
})();
if(cljs.core.truth_(inst_13952__$1)){
var statearr_14066_14107 = state_14037__$1;
(statearr_14066_14107[(1)] = (5));

} else {
var statearr_14067_14108 = state_14037__$1;
(statearr_14067_14108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (23))){
var inst_13995 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14037__$1 = state_14037;
if(cljs.core.truth_(inst_13995)){
var statearr_14068_14109 = state_14037__$1;
(statearr_14068_14109[(1)] = (25));

} else {
var statearr_14069_14110 = state_14037__$1;
(statearr_14069_14110[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (35))){
var state_14037__$1 = state_14037;
var statearr_14070_14111 = state_14037__$1;
(statearr_14070_14111[(2)] = null);

(statearr_14070_14111[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (19))){
var inst_13990 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14037__$1 = state_14037;
if(cljs.core.truth_(inst_13990)){
var statearr_14071_14112 = state_14037__$1;
(statearr_14071_14112[(1)] = (22));

} else {
var statearr_14072_14113 = state_14037__$1;
(statearr_14072_14113[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (11))){
var inst_13961 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14073_14114 = state_14037__$1;
(statearr_14073_14114[(2)] = inst_13961);

(statearr_14073_14114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (9))){
var inst_13963 = figwheel.client.heads_up.clear.call(null);
var state_14037__$1 = state_14037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14037__$1,(12),inst_13963);
} else {
if((state_val_14038 === (5))){
var inst_13954 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_14037__$1 = state_14037;
var statearr_14074_14115 = state_14037__$1;
(statearr_14074_14115[(2)] = inst_13954);

(statearr_14074_14115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (14))){
var inst_13981 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14037__$1 = state_14037;
if(cljs.core.truth_(inst_13981)){
var statearr_14075_14116 = state_14037__$1;
(statearr_14075_14116[(1)] = (18));

} else {
var statearr_14076_14117 = state_14037__$1;
(statearr_14076_14117[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (26))){
var inst_14007 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14037__$1 = state_14037;
if(cljs.core.truth_(inst_14007)){
var statearr_14077_14118 = state_14037__$1;
(statearr_14077_14118[(1)] = (30));

} else {
var statearr_14078_14119 = state_14037__$1;
(statearr_14078_14119[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (16))){
var inst_13973 = (state_14037[(2)]);
var inst_13974 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13975 = figwheel.client.heads_up.display_exception.call(null,inst_13974);
var state_14037__$1 = (function (){var statearr_14079 = state_14037;
(statearr_14079[(13)] = inst_13973);

return statearr_14079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14037__$1,(17),inst_13975);
} else {
if((state_val_14038 === (30))){
var inst_14009 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14010 = figwheel.client.heads_up.display_warning.call(null,inst_14009);
var state_14037__$1 = state_14037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14037__$1,(33),inst_14010);
} else {
if((state_val_14038 === (10))){
var inst_13967 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14080_14120 = state_14037__$1;
(statearr_14080_14120[(2)] = inst_13967);

(statearr_14080_14120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (18))){
var inst_13983 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13984 = figwheel.client.heads_up.display_exception.call(null,inst_13983);
var state_14037__$1 = state_14037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14037__$1,(21),inst_13984);
} else {
if((state_val_14038 === (37))){
var inst_14020 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14081_14121 = state_14037__$1;
(statearr_14081_14121[(2)] = inst_14020);

(statearr_14081_14121[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (8))){
var inst_13959 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14037__$1 = state_14037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14037__$1,(11),inst_13959);
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
var statearr_14082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14082[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__);

(statearr_14082[(1)] = (1));

return statearr_14082;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1 = (function (state_14037){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14083){if((e14083 instanceof Object)){
var ex__2000__auto__ = e14083;
var statearr_14084_14122 = state_14037;
(statearr_14084_14122[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14123 = state_14037;
state_14037 = G__14123;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__ = function(state_14037){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1.call(this,state_14037);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,msg_hist,msg_names,msg))
})();
var state__2153__auto__ = (function (){var statearr_14085 = f__2152__auto__.call(null);
(statearr_14085[(6)] = c__2151__auto__);

return statearr_14085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__,msg_hist,msg_names,msg))
);

return c__2151__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__2151__auto___14152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___14152,ch){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___14152,ch){
return (function (state_14138){
var state_val_14139 = (state_14138[(1)]);
if((state_val_14139 === (1))){
var state_14138__$1 = state_14138;
var statearr_14140_14153 = state_14138__$1;
(statearr_14140_14153[(2)] = null);

(statearr_14140_14153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14139 === (2))){
var state_14138__$1 = state_14138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14138__$1,(4),ch);
} else {
if((state_val_14139 === (3))){
var inst_14136 = (state_14138[(2)]);
var state_14138__$1 = state_14138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14138__$1,inst_14136);
} else {
if((state_val_14139 === (4))){
var inst_14126 = (state_14138[(7)]);
var inst_14126__$1 = (state_14138[(2)]);
var state_14138__$1 = (function (){var statearr_14141 = state_14138;
(statearr_14141[(7)] = inst_14126__$1);

return statearr_14141;
})();
if(cljs.core.truth_(inst_14126__$1)){
var statearr_14142_14154 = state_14138__$1;
(statearr_14142_14154[(1)] = (5));

} else {
var statearr_14143_14155 = state_14138__$1;
(statearr_14143_14155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14139 === (5))){
var inst_14126 = (state_14138[(7)]);
var inst_14128 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14126);
var state_14138__$1 = state_14138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14138__$1,(8),inst_14128);
} else {
if((state_val_14139 === (6))){
var state_14138__$1 = state_14138;
var statearr_14144_14156 = state_14138__$1;
(statearr_14144_14156[(2)] = null);

(statearr_14144_14156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14139 === (7))){
var inst_14134 = (state_14138[(2)]);
var state_14138__$1 = state_14138;
var statearr_14145_14157 = state_14138__$1;
(statearr_14145_14157[(2)] = inst_14134);

(statearr_14145_14157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14139 === (8))){
var inst_14130 = (state_14138[(2)]);
var state_14138__$1 = (function (){var statearr_14146 = state_14138;
(statearr_14146[(8)] = inst_14130);

return statearr_14146;
})();
var statearr_14147_14158 = state_14138__$1;
(statearr_14147_14158[(2)] = null);

(statearr_14147_14158[(1)] = (2));


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
});})(c__2151__auto___14152,ch))
;
return ((function (switch__1996__auto__,c__2151__auto___14152,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0 = (function (){
var statearr_14148 = [null,null,null,null,null,null,null,null,null];
(statearr_14148[(0)] = figwheel$client$heads_up_plugin_$_state_machine__1997__auto__);

(statearr_14148[(1)] = (1));

return statearr_14148;
});
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1 = (function (state_14138){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14149){if((e14149 instanceof Object)){
var ex__2000__auto__ = e14149;
var statearr_14150_14159 = state_14138;
(statearr_14150_14159[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14160 = state_14138;
state_14138 = G__14160;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__ = function(state_14138){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1.call(this,state_14138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___14152,ch))
})();
var state__2153__auto__ = (function (){var statearr_14151 = f__2152__auto__.call(null);
(statearr_14151[(6)] = c__2151__auto___14152);

return statearr_14151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___14152,ch))
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
return (function (state_14166){
var state_val_14167 = (state_14166[(1)]);
if((state_val_14167 === (1))){
var inst_14161 = cljs.core.async.timeout.call(null,(3000));
var state_14166__$1 = state_14166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14166__$1,(2),inst_14161);
} else {
if((state_val_14167 === (2))){
var inst_14163 = (state_14166[(2)]);
var inst_14164 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14166__$1 = (function (){var statearr_14168 = state_14166;
(statearr_14168[(7)] = inst_14163);

return statearr_14168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14166__$1,inst_14164);
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
var statearr_14169 = [null,null,null,null,null,null,null,null];
(statearr_14169[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__);

(statearr_14169[(1)] = (1));

return statearr_14169;
});
var figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1 = (function (state_14166){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14170){if((e14170 instanceof Object)){
var ex__2000__auto__ = e14170;
var statearr_14171_14173 = state_14166;
(statearr_14171_14173[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14174 = state_14166;
state_14166 = G__14174;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__ = function(state_14166){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1.call(this,state_14166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__))
})();
var state__2153__auto__ = (function (){var statearr_14172 = f__2152__auto__.call(null);
(statearr_14172[(6)] = c__2151__auto__);

return statearr_14172;
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
return (function (state_14181){
var state_val_14182 = (state_14181[(1)]);
if((state_val_14182 === (1))){
var inst_14175 = cljs.core.async.timeout.call(null,(2000));
var state_14181__$1 = state_14181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14181__$1,(2),inst_14175);
} else {
if((state_val_14182 === (2))){
var inst_14177 = (state_14181[(2)]);
var inst_14178 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_14179 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_14178);
var state_14181__$1 = (function (){var statearr_14183 = state_14181;
(statearr_14183[(7)] = inst_14177);

return statearr_14183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14181__$1,inst_14179);
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
var statearr_14184 = [null,null,null,null,null,null,null,null];
(statearr_14184[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__);

(statearr_14184[(1)] = (1));

return statearr_14184;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1 = (function (state_14181){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14185){if((e14185 instanceof Object)){
var ex__2000__auto__ = e14185;
var statearr_14186_14188 = state_14181;
(statearr_14186_14188[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14189 = state_14181;
state_14181 = G__14189;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__ = function(state_14181){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1.call(this,state_14181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,figwheel_version,temp__4657__auto__))
})();
var state__2153__auto__ = (function (){var statearr_14187 = f__2152__auto__.call(null);
(statearr_14187[(6)] = c__2151__auto__);

return statearr_14187;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__14190){
var map__14191 = p__14190;
var map__14191__$1 = ((((!((map__14191 == null)))?(((((map__14191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14191):map__14191);
var file = cljs.core.get.call(null,map__14191__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__14191__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__14191__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__14193 = "";
var G__14193__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14193),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__14193);
var G__14193__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14193__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__14193__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14193__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__14193__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__14194){
var map__14195 = p__14194;
var map__14195__$1 = ((((!((map__14195 == null)))?(((((map__14195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14195):map__14195);
var ed = map__14195__$1;
var formatted_exception = cljs.core.get.call(null,map__14195__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__14195__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__14195__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__14197_14201 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14198_14202 = null;
var count__14199_14203 = (0);
var i__14200_14204 = (0);
while(true){
if((i__14200_14204 < count__14199_14203)){
var msg_14205 = cljs.core._nth.call(null,chunk__14198_14202,i__14200_14204);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14205);


var G__14206 = seq__14197_14201;
var G__14207 = chunk__14198_14202;
var G__14208 = count__14199_14203;
var G__14209 = (i__14200_14204 + (1));
seq__14197_14201 = G__14206;
chunk__14198_14202 = G__14207;
count__14199_14203 = G__14208;
i__14200_14204 = G__14209;
continue;
} else {
var temp__4657__auto___14210 = cljs.core.seq.call(null,seq__14197_14201);
if(temp__4657__auto___14210){
var seq__14197_14211__$1 = temp__4657__auto___14210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14197_14211__$1)){
var c__4317__auto___14212 = cljs.core.chunk_first.call(null,seq__14197_14211__$1);
var G__14213 = cljs.core.chunk_rest.call(null,seq__14197_14211__$1);
var G__14214 = c__4317__auto___14212;
var G__14215 = cljs.core.count.call(null,c__4317__auto___14212);
var G__14216 = (0);
seq__14197_14201 = G__14213;
chunk__14198_14202 = G__14214;
count__14199_14203 = G__14215;
i__14200_14204 = G__14216;
continue;
} else {
var msg_14217 = cljs.core.first.call(null,seq__14197_14211__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14217);


var G__14218 = cljs.core.next.call(null,seq__14197_14211__$1);
var G__14219 = null;
var G__14220 = (0);
var G__14221 = (0);
seq__14197_14201 = G__14218;
chunk__14198_14202 = G__14219;
count__14199_14203 = G__14220;
i__14200_14204 = G__14221;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__14222){
var map__14223 = p__14222;
var map__14223__$1 = ((((!((map__14223 == null)))?(((((map__14223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14223):map__14223);
var w = map__14223__$1;
var message = cljs.core.get.call(null,map__14223__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/dev/js/out_front/buddylistcljs_front_authentication/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/dev/js/out_front/buddylistcljs_front_authentication/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__14225 = cljs.core.seq.call(null,plugins);
var chunk__14226 = null;
var count__14227 = (0);
var i__14228 = (0);
while(true){
if((i__14228 < count__14227)){
var vec__14229 = cljs.core._nth.call(null,chunk__14226,i__14228);
var k = cljs.core.nth.call(null,vec__14229,(0),null);
var plugin = cljs.core.nth.call(null,vec__14229,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14235 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14225,chunk__14226,count__14227,i__14228,pl_14235,vec__14229,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14235.call(null,msg_hist);
});})(seq__14225,chunk__14226,count__14227,i__14228,pl_14235,vec__14229,k,plugin))
);
} else {
}


var G__14236 = seq__14225;
var G__14237 = chunk__14226;
var G__14238 = count__14227;
var G__14239 = (i__14228 + (1));
seq__14225 = G__14236;
chunk__14226 = G__14237;
count__14227 = G__14238;
i__14228 = G__14239;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14225);
if(temp__4657__auto__){
var seq__14225__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14225__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__14225__$1);
var G__14240 = cljs.core.chunk_rest.call(null,seq__14225__$1);
var G__14241 = c__4317__auto__;
var G__14242 = cljs.core.count.call(null,c__4317__auto__);
var G__14243 = (0);
seq__14225 = G__14240;
chunk__14226 = G__14241;
count__14227 = G__14242;
i__14228 = G__14243;
continue;
} else {
var vec__14232 = cljs.core.first.call(null,seq__14225__$1);
var k = cljs.core.nth.call(null,vec__14232,(0),null);
var plugin = cljs.core.nth.call(null,vec__14232,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14244 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14225,chunk__14226,count__14227,i__14228,pl_14244,vec__14232,k,plugin,seq__14225__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14244.call(null,msg_hist);
});})(seq__14225,chunk__14226,count__14227,i__14228,pl_14244,vec__14232,k,plugin,seq__14225__$1,temp__4657__auto__))
);
} else {
}


var G__14245 = cljs.core.next.call(null,seq__14225__$1);
var G__14246 = null;
var G__14247 = (0);
var G__14248 = (0);
seq__14225 = G__14245;
chunk__14226 = G__14246;
count__14227 = G__14247;
i__14228 = G__14248;
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
var G__14250 = arguments.length;
switch (G__14250) {
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

var seq__14251_14256 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__14252_14257 = null;
var count__14253_14258 = (0);
var i__14254_14259 = (0);
while(true){
if((i__14254_14259 < count__14253_14258)){
var msg_14260 = cljs.core._nth.call(null,chunk__14252_14257,i__14254_14259);
figwheel.client.socket.handle_incoming_message.call(null,msg_14260);


var G__14261 = seq__14251_14256;
var G__14262 = chunk__14252_14257;
var G__14263 = count__14253_14258;
var G__14264 = (i__14254_14259 + (1));
seq__14251_14256 = G__14261;
chunk__14252_14257 = G__14262;
count__14253_14258 = G__14263;
i__14254_14259 = G__14264;
continue;
} else {
var temp__4657__auto___14265 = cljs.core.seq.call(null,seq__14251_14256);
if(temp__4657__auto___14265){
var seq__14251_14266__$1 = temp__4657__auto___14265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14251_14266__$1)){
var c__4317__auto___14267 = cljs.core.chunk_first.call(null,seq__14251_14266__$1);
var G__14268 = cljs.core.chunk_rest.call(null,seq__14251_14266__$1);
var G__14269 = c__4317__auto___14267;
var G__14270 = cljs.core.count.call(null,c__4317__auto___14267);
var G__14271 = (0);
seq__14251_14256 = G__14268;
chunk__14252_14257 = G__14269;
count__14253_14258 = G__14270;
i__14254_14259 = G__14271;
continue;
} else {
var msg_14272 = cljs.core.first.call(null,seq__14251_14266__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_14272);


var G__14273 = cljs.core.next.call(null,seq__14251_14266__$1);
var G__14274 = null;
var G__14275 = (0);
var G__14276 = (0);
seq__14251_14256 = G__14273;
chunk__14252_14257 = G__14274;
count__14253_14258 = G__14275;
i__14254_14259 = G__14276;
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
var len__4497__auto___14281 = arguments.length;
var i__4498__auto___14282 = (0);
while(true){
if((i__4498__auto___14282 < len__4497__auto___14281)){
args__4500__auto__.push((arguments[i__4498__auto___14282]));

var G__14283 = (i__4498__auto___14282 + (1));
i__4498__auto___14282 = G__14283;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__14278){
var map__14279 = p__14278;
var map__14279__$1 = ((((!((map__14279 == null)))?(((((map__14279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14279):map__14279);
var opts = map__14279__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq14277){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14277));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e14284){if((e14284 instanceof Error)){
var e = e14284;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e14284;

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
return (function (p__14285){
var map__14286 = p__14285;
var map__14286__$1 = ((((!((map__14286 == null)))?(((((map__14286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14286):map__14286);
var msg_name = cljs.core.get.call(null,map__14286__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
