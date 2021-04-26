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
var G__11678 = arguments.length;
switch (G__11678) {
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
var len__4497__auto___11681 = arguments.length;
var i__4498__auto___11682 = (0);
while(true){
if((i__4498__auto___11682 < len__4497__auto___11681)){
args__4500__auto__.push((arguments[i__4498__auto___11682]));

var G__11683 = (i__4498__auto___11682 + (1));
i__4498__auto___11682 = G__11683;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq11680){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11680));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___11685 = arguments.length;
var i__4498__auto___11686 = (0);
while(true){
if((i__4498__auto___11686 < len__4497__auto___11685)){
args__4500__auto__.push((arguments[i__4498__auto___11686]));

var G__11687 = (i__4498__auto___11686 + (1));
i__4498__auto___11686 = G__11687;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq11684){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11684));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__11688){
var map__11689 = p__11688;
var map__11689__$1 = ((((!((map__11689 == null)))?(((((map__11689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11689):map__11689);
var message = cljs.core.get.call(null,map__11689__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__11689__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__2146__auto___11768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___11768,ch){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___11768,ch){
return (function (state_11740){
var state_val_11741 = (state_11740[(1)]);
if((state_val_11741 === (7))){
var inst_11736 = (state_11740[(2)]);
var state_11740__$1 = state_11740;
var statearr_11742_11769 = state_11740__$1;
(statearr_11742_11769[(2)] = inst_11736);

(statearr_11742_11769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (1))){
var state_11740__$1 = state_11740;
var statearr_11743_11770 = state_11740__$1;
(statearr_11743_11770[(2)] = null);

(statearr_11743_11770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (4))){
var inst_11693 = (state_11740[(7)]);
var inst_11693__$1 = (state_11740[(2)]);
var state_11740__$1 = (function (){var statearr_11744 = state_11740;
(statearr_11744[(7)] = inst_11693__$1);

return statearr_11744;
})();
if(cljs.core.truth_(inst_11693__$1)){
var statearr_11745_11771 = state_11740__$1;
(statearr_11745_11771[(1)] = (5));

} else {
var statearr_11746_11772 = state_11740__$1;
(statearr_11746_11772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (15))){
var inst_11700 = (state_11740[(8)]);
var inst_11715 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_11700);
var inst_11716 = cljs.core.first.call(null,inst_11715);
var inst_11717 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_11716);
var inst_11718 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11717)].join('');
var inst_11719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_11718);
var state_11740__$1 = state_11740;
var statearr_11747_11773 = state_11740__$1;
(statearr_11747_11773[(2)] = inst_11719);

(statearr_11747_11773[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (13))){
var inst_11724 = (state_11740[(2)]);
var state_11740__$1 = state_11740;
var statearr_11748_11774 = state_11740__$1;
(statearr_11748_11774[(2)] = inst_11724);

(statearr_11748_11774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (6))){
var state_11740__$1 = state_11740;
var statearr_11749_11775 = state_11740__$1;
(statearr_11749_11775[(2)] = null);

(statearr_11749_11775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (17))){
var inst_11722 = (state_11740[(2)]);
var state_11740__$1 = state_11740;
var statearr_11750_11776 = state_11740__$1;
(statearr_11750_11776[(2)] = inst_11722);

(statearr_11750_11776[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (3))){
var inst_11738 = (state_11740[(2)]);
var state_11740__$1 = state_11740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11740__$1,inst_11738);
} else {
if((state_val_11741 === (12))){
var inst_11699 = (state_11740[(9)]);
var inst_11713 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_11699,opts);
var state_11740__$1 = state_11740;
if(cljs.core.truth_(inst_11713)){
var statearr_11751_11777 = state_11740__$1;
(statearr_11751_11777[(1)] = (15));

} else {
var statearr_11752_11778 = state_11740__$1;
(statearr_11752_11778[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (2))){
var state_11740__$1 = state_11740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11740__$1,(4),ch);
} else {
if((state_val_11741 === (11))){
var inst_11700 = (state_11740[(8)]);
var inst_11705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11706 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_11700);
var inst_11707 = cljs.core.async.timeout.call(null,(1000));
var inst_11708 = [inst_11706,inst_11707];
var inst_11709 = (new cljs.core.PersistentVector(null,2,(5),inst_11705,inst_11708,null));
var state_11740__$1 = state_11740;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11740__$1,(14),inst_11709);
} else {
if((state_val_11741 === (9))){
var inst_11700 = (state_11740[(8)]);
var inst_11726 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_11727 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_11700);
var inst_11728 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_11727);
var inst_11729 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11728)].join('');
var inst_11730 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_11729);
var state_11740__$1 = (function (){var statearr_11753 = state_11740;
(statearr_11753[(10)] = inst_11726);

return statearr_11753;
})();
var statearr_11754_11779 = state_11740__$1;
(statearr_11754_11779[(2)] = inst_11730);

(statearr_11754_11779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (5))){
var inst_11693 = (state_11740[(7)]);
var inst_11695 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_11696 = (new cljs.core.PersistentArrayMap(null,2,inst_11695,null));
var inst_11697 = (new cljs.core.PersistentHashSet(null,inst_11696,null));
var inst_11698 = figwheel.client.focus_msgs.call(null,inst_11697,inst_11693);
var inst_11699 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_11698);
var inst_11700 = cljs.core.first.call(null,inst_11698);
var inst_11701 = figwheel.client.autoload_QMARK_.call(null);
var state_11740__$1 = (function (){var statearr_11755 = state_11740;
(statearr_11755[(9)] = inst_11699);

(statearr_11755[(8)] = inst_11700);

return statearr_11755;
})();
if(cljs.core.truth_(inst_11701)){
var statearr_11756_11780 = state_11740__$1;
(statearr_11756_11780[(1)] = (8));

} else {
var statearr_11757_11781 = state_11740__$1;
(statearr_11757_11781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (14))){
var inst_11711 = (state_11740[(2)]);
var state_11740__$1 = state_11740;
var statearr_11758_11782 = state_11740__$1;
(statearr_11758_11782[(2)] = inst_11711);

(statearr_11758_11782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (16))){
var state_11740__$1 = state_11740;
var statearr_11759_11783 = state_11740__$1;
(statearr_11759_11783[(2)] = null);

(statearr_11759_11783[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (10))){
var inst_11732 = (state_11740[(2)]);
var state_11740__$1 = (function (){var statearr_11760 = state_11740;
(statearr_11760[(11)] = inst_11732);

return statearr_11760;
})();
var statearr_11761_11784 = state_11740__$1;
(statearr_11761_11784[(2)] = null);

(statearr_11761_11784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (8))){
var inst_11699 = (state_11740[(9)]);
var inst_11703 = figwheel.client.reload_file_state_QMARK_.call(null,inst_11699,opts);
var state_11740__$1 = state_11740;
if(cljs.core.truth_(inst_11703)){
var statearr_11762_11785 = state_11740__$1;
(statearr_11762_11785[(1)] = (11));

} else {
var statearr_11763_11786 = state_11740__$1;
(statearr_11763_11786[(1)] = (12));

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
});})(c__2146__auto___11768,ch))
;
return ((function (switch__1991__auto__,c__2146__auto___11768,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__1992__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__1992__auto____0 = (function (){
var statearr_11764 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11764[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__1992__auto__);

(statearr_11764[(1)] = (1));

return statearr_11764;
});
var figwheel$client$file_reloader_plugin_$_state_machine__1992__auto____1 = (function (state_11740){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_11740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e11765){if((e11765 instanceof Object)){
var ex__1995__auto__ = e11765;
var statearr_11766_11787 = state_11740;
(statearr_11766_11787[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11788 = state_11740;
state_11740 = G__11788;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__1992__auto__ = function(state_11740){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__1992__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__1992__auto____1.call(this,state_11740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__1992__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__1992__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___11768,ch))
})();
var state__2148__auto__ = (function (){var statearr_11767 = f__2147__auto__.call(null);
(statearr_11767[(6)] = c__2146__auto___11768);

return statearr_11767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___11768,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__11789_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__11789_SHARP_));
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
var base_path_11791 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_11791){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e11790){if((e11790 instanceof Error)){
var e = e11790;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_11791], null));
} else {
var e = e11790;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_11791))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__11792){
var map__11793 = p__11792;
var map__11793__$1 = ((((!((map__11793 == null)))?(((((map__11793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11793):map__11793);
var opts = map__11793__$1;
var build_id = cljs.core.get.call(null,map__11793__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__11793,map__11793__$1,opts,build_id){
return (function (p__11795){
var vec__11796 = p__11795;
var seq__11797 = cljs.core.seq.call(null,vec__11796);
var first__11798 = cljs.core.first.call(null,seq__11797);
var seq__11797__$1 = cljs.core.next.call(null,seq__11797);
var map__11799 = first__11798;
var map__11799__$1 = ((((!((map__11799 == null)))?(((((map__11799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11799):map__11799);
var msg = map__11799__$1;
var msg_name = cljs.core.get.call(null,map__11799__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__11797__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__11796,seq__11797,first__11798,seq__11797__$1,map__11799,map__11799__$1,msg,msg_name,_,map__11793,map__11793__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__11796,seq__11797,first__11798,seq__11797__$1,map__11799,map__11799__$1,msg,msg_name,_,map__11793,map__11793__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__11793,map__11793__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__11801){
var vec__11802 = p__11801;
var seq__11803 = cljs.core.seq.call(null,vec__11802);
var first__11804 = cljs.core.first.call(null,seq__11803);
var seq__11803__$1 = cljs.core.next.call(null,seq__11803);
var map__11805 = first__11804;
var map__11805__$1 = ((((!((map__11805 == null)))?(((((map__11805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11805):map__11805);
var msg = map__11805__$1;
var msg_name = cljs.core.get.call(null,map__11805__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__11803__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__11807){
var map__11808 = p__11807;
var map__11808__$1 = ((((!((map__11808 == null)))?(((((map__11808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11808):map__11808);
var on_compile_warning = cljs.core.get.call(null,map__11808__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__11808__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__11808,map__11808__$1,on_compile_warning,on_compile_fail){
return (function (p__11810){
var vec__11811 = p__11810;
var seq__11812 = cljs.core.seq.call(null,vec__11811);
var first__11813 = cljs.core.first.call(null,seq__11812);
var seq__11812__$1 = cljs.core.next.call(null,seq__11812);
var map__11814 = first__11813;
var map__11814__$1 = ((((!((map__11814 == null)))?(((((map__11814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11814):map__11814);
var msg = map__11814__$1;
var msg_name = cljs.core.get.call(null,map__11814__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__11812__$1;
var pred__11816 = cljs.core._EQ_;
var expr__11817 = msg_name;
if(cljs.core.truth_(pred__11816.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__11817))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__11816.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__11817))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__11808,map__11808__$1,on_compile_warning,on_compile_fail))
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
var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__,msg_hist,msg_names,msg){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__,msg_hist,msg_names,msg){
return (function (state_11906){
var state_val_11907 = (state_11906[(1)]);
if((state_val_11907 === (7))){
var inst_11826 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
if(cljs.core.truth_(inst_11826)){
var statearr_11908_11955 = state_11906__$1;
(statearr_11908_11955[(1)] = (8));

} else {
var statearr_11909_11956 = state_11906__$1;
(statearr_11909_11956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (20))){
var inst_11900 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11910_11957 = state_11906__$1;
(statearr_11910_11957[(2)] = inst_11900);

(statearr_11910_11957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (27))){
var inst_11896 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11911_11958 = state_11906__$1;
(statearr_11911_11958[(2)] = inst_11896);

(statearr_11911_11958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (1))){
var inst_11819 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_11906__$1 = state_11906;
if(cljs.core.truth_(inst_11819)){
var statearr_11912_11959 = state_11906__$1;
(statearr_11912_11959[(1)] = (2));

} else {
var statearr_11913_11960 = state_11906__$1;
(statearr_11913_11960[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (24))){
var inst_11898 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11914_11961 = state_11906__$1;
(statearr_11914_11961[(2)] = inst_11898);

(statearr_11914_11961[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (4))){
var inst_11904 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11906__$1,inst_11904);
} else {
if((state_val_11907 === (15))){
var inst_11902 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11915_11962 = state_11906__$1;
(statearr_11915_11962[(2)] = inst_11902);

(statearr_11915_11962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (21))){
var inst_11855 = (state_11906[(2)]);
var inst_11856 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11857 = figwheel.client.auto_jump_to_error.call(null,opts,inst_11856);
var state_11906__$1 = (function (){var statearr_11916 = state_11906;
(statearr_11916[(7)] = inst_11855);

return statearr_11916;
})();
var statearr_11917_11963 = state_11906__$1;
(statearr_11917_11963[(2)] = inst_11857);

(statearr_11917_11963[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (31))){
var inst_11885 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_11906__$1 = state_11906;
if(cljs.core.truth_(inst_11885)){
var statearr_11918_11964 = state_11906__$1;
(statearr_11918_11964[(1)] = (34));

} else {
var statearr_11919_11965 = state_11906__$1;
(statearr_11919_11965[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (32))){
var inst_11894 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11920_11966 = state_11906__$1;
(statearr_11920_11966[(2)] = inst_11894);

(statearr_11920_11966[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (33))){
var inst_11881 = (state_11906[(2)]);
var inst_11882 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11883 = figwheel.client.auto_jump_to_error.call(null,opts,inst_11882);
var state_11906__$1 = (function (){var statearr_11921 = state_11906;
(statearr_11921[(8)] = inst_11881);

return statearr_11921;
})();
var statearr_11922_11967 = state_11906__$1;
(statearr_11922_11967[(2)] = inst_11883);

(statearr_11922_11967[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (13))){
var inst_11840 = figwheel.client.heads_up.clear.call(null);
var state_11906__$1 = state_11906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(16),inst_11840);
} else {
if((state_val_11907 === (22))){
var inst_11861 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11862 = figwheel.client.heads_up.append_warning_message.call(null,inst_11861);
var state_11906__$1 = state_11906;
var statearr_11923_11968 = state_11906__$1;
(statearr_11923_11968[(2)] = inst_11862);

(statearr_11923_11968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (36))){
var inst_11892 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11924_11969 = state_11906__$1;
(statearr_11924_11969[(2)] = inst_11892);

(statearr_11924_11969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (29))){
var inst_11872 = (state_11906[(2)]);
var inst_11873 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11874 = figwheel.client.auto_jump_to_error.call(null,opts,inst_11873);
var state_11906__$1 = (function (){var statearr_11925 = state_11906;
(statearr_11925[(9)] = inst_11872);

return statearr_11925;
})();
var statearr_11926_11970 = state_11906__$1;
(statearr_11926_11970[(2)] = inst_11874);

(statearr_11926_11970[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (6))){
var inst_11821 = (state_11906[(10)]);
var state_11906__$1 = state_11906;
var statearr_11927_11971 = state_11906__$1;
(statearr_11927_11971[(2)] = inst_11821);

(statearr_11927_11971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (28))){
var inst_11868 = (state_11906[(2)]);
var inst_11869 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11870 = figwheel.client.heads_up.display_warning.call(null,inst_11869);
var state_11906__$1 = (function (){var statearr_11928 = state_11906;
(statearr_11928[(11)] = inst_11868);

return statearr_11928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(29),inst_11870);
} else {
if((state_val_11907 === (25))){
var inst_11866 = figwheel.client.heads_up.clear.call(null);
var state_11906__$1 = state_11906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(28),inst_11866);
} else {
if((state_val_11907 === (34))){
var inst_11887 = figwheel.client.heads_up.flash_loaded.call(null);
var state_11906__$1 = state_11906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(37),inst_11887);
} else {
if((state_val_11907 === (17))){
var inst_11846 = (state_11906[(2)]);
var inst_11847 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11848 = figwheel.client.auto_jump_to_error.call(null,opts,inst_11847);
var state_11906__$1 = (function (){var statearr_11929 = state_11906;
(statearr_11929[(12)] = inst_11846);

return statearr_11929;
})();
var statearr_11930_11972 = state_11906__$1;
(statearr_11930_11972[(2)] = inst_11848);

(statearr_11930_11972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (3))){
var inst_11838 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_11906__$1 = state_11906;
if(cljs.core.truth_(inst_11838)){
var statearr_11931_11973 = state_11906__$1;
(statearr_11931_11973[(1)] = (13));

} else {
var statearr_11932_11974 = state_11906__$1;
(statearr_11932_11974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (12))){
var inst_11834 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11933_11975 = state_11906__$1;
(statearr_11933_11975[(2)] = inst_11834);

(statearr_11933_11975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (2))){
var inst_11821 = (state_11906[(10)]);
var inst_11821__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_11906__$1 = (function (){var statearr_11934 = state_11906;
(statearr_11934[(10)] = inst_11821__$1);

return statearr_11934;
})();
if(cljs.core.truth_(inst_11821__$1)){
var statearr_11935_11976 = state_11906__$1;
(statearr_11935_11976[(1)] = (5));

} else {
var statearr_11936_11977 = state_11906__$1;
(statearr_11936_11977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (23))){
var inst_11864 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_11906__$1 = state_11906;
if(cljs.core.truth_(inst_11864)){
var statearr_11937_11978 = state_11906__$1;
(statearr_11937_11978[(1)] = (25));

} else {
var statearr_11938_11979 = state_11906__$1;
(statearr_11938_11979[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (35))){
var state_11906__$1 = state_11906;
var statearr_11939_11980 = state_11906__$1;
(statearr_11939_11980[(2)] = null);

(statearr_11939_11980[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (19))){
var inst_11859 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_11906__$1 = state_11906;
if(cljs.core.truth_(inst_11859)){
var statearr_11940_11981 = state_11906__$1;
(statearr_11940_11981[(1)] = (22));

} else {
var statearr_11941_11982 = state_11906__$1;
(statearr_11941_11982[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (11))){
var inst_11830 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11942_11983 = state_11906__$1;
(statearr_11942_11983[(2)] = inst_11830);

(statearr_11942_11983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (9))){
var inst_11832 = figwheel.client.heads_up.clear.call(null);
var state_11906__$1 = state_11906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(12),inst_11832);
} else {
if((state_val_11907 === (5))){
var inst_11823 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_11906__$1 = state_11906;
var statearr_11943_11984 = state_11906__$1;
(statearr_11943_11984[(2)] = inst_11823);

(statearr_11943_11984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (14))){
var inst_11850 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_11906__$1 = state_11906;
if(cljs.core.truth_(inst_11850)){
var statearr_11944_11985 = state_11906__$1;
(statearr_11944_11985[(1)] = (18));

} else {
var statearr_11945_11986 = state_11906__$1;
(statearr_11945_11986[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (26))){
var inst_11876 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_11906__$1 = state_11906;
if(cljs.core.truth_(inst_11876)){
var statearr_11946_11987 = state_11906__$1;
(statearr_11946_11987[(1)] = (30));

} else {
var statearr_11947_11988 = state_11906__$1;
(statearr_11947_11988[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (16))){
var inst_11842 = (state_11906[(2)]);
var inst_11843 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11844 = figwheel.client.heads_up.display_exception.call(null,inst_11843);
var state_11906__$1 = (function (){var statearr_11948 = state_11906;
(statearr_11948[(13)] = inst_11842);

return statearr_11948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(17),inst_11844);
} else {
if((state_val_11907 === (30))){
var inst_11878 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11879 = figwheel.client.heads_up.display_warning.call(null,inst_11878);
var state_11906__$1 = state_11906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(33),inst_11879);
} else {
if((state_val_11907 === (10))){
var inst_11836 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11949_11989 = state_11906__$1;
(statearr_11949_11989[(2)] = inst_11836);

(statearr_11949_11989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (18))){
var inst_11852 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11853 = figwheel.client.heads_up.display_exception.call(null,inst_11852);
var state_11906__$1 = state_11906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(21),inst_11853);
} else {
if((state_val_11907 === (37))){
var inst_11889 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11950_11990 = state_11906__$1;
(statearr_11950_11990[(2)] = inst_11889);

(statearr_11950_11990[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (8))){
var inst_11828 = figwheel.client.heads_up.flash_loaded.call(null);
var state_11906__$1 = state_11906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(11),inst_11828);
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
});})(c__2146__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__1991__auto__,c__2146__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto____0 = (function (){
var statearr_11951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11951[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto__);

(statearr_11951[(1)] = (1));

return statearr_11951;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto____1 = (function (state_11906){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_11906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e11952){if((e11952 instanceof Object)){
var ex__1995__auto__ = e11952;
var statearr_11953_11991 = state_11906;
(statearr_11953_11991[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11992 = state_11906;
state_11906 = G__11992;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto__ = function(state_11906){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto____1.call(this,state_11906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__,msg_hist,msg_names,msg))
})();
var state__2148__auto__ = (function (){var statearr_11954 = f__2147__auto__.call(null);
(statearr_11954[(6)] = c__2146__auto__);

return statearr_11954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__,msg_hist,msg_names,msg))
);

return c__2146__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__2146__auto___12021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto___12021,ch){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto___12021,ch){
return (function (state_12007){
var state_val_12008 = (state_12007[(1)]);
if((state_val_12008 === (1))){
var state_12007__$1 = state_12007;
var statearr_12009_12022 = state_12007__$1;
(statearr_12009_12022[(2)] = null);

(statearr_12009_12022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12008 === (2))){
var state_12007__$1 = state_12007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12007__$1,(4),ch);
} else {
if((state_val_12008 === (3))){
var inst_12005 = (state_12007[(2)]);
var state_12007__$1 = state_12007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12007__$1,inst_12005);
} else {
if((state_val_12008 === (4))){
var inst_11995 = (state_12007[(7)]);
var inst_11995__$1 = (state_12007[(2)]);
var state_12007__$1 = (function (){var statearr_12010 = state_12007;
(statearr_12010[(7)] = inst_11995__$1);

return statearr_12010;
})();
if(cljs.core.truth_(inst_11995__$1)){
var statearr_12011_12023 = state_12007__$1;
(statearr_12011_12023[(1)] = (5));

} else {
var statearr_12012_12024 = state_12007__$1;
(statearr_12012_12024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12008 === (5))){
var inst_11995 = (state_12007[(7)]);
var inst_11997 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_11995);
var state_12007__$1 = state_12007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12007__$1,(8),inst_11997);
} else {
if((state_val_12008 === (6))){
var state_12007__$1 = state_12007;
var statearr_12013_12025 = state_12007__$1;
(statearr_12013_12025[(2)] = null);

(statearr_12013_12025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12008 === (7))){
var inst_12003 = (state_12007[(2)]);
var state_12007__$1 = state_12007;
var statearr_12014_12026 = state_12007__$1;
(statearr_12014_12026[(2)] = inst_12003);

(statearr_12014_12026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12008 === (8))){
var inst_11999 = (state_12007[(2)]);
var state_12007__$1 = (function (){var statearr_12015 = state_12007;
(statearr_12015[(8)] = inst_11999);

return statearr_12015;
})();
var statearr_12016_12027 = state_12007__$1;
(statearr_12016_12027[(2)] = null);

(statearr_12016_12027[(1)] = (2));


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
});})(c__2146__auto___12021,ch))
;
return ((function (switch__1991__auto__,c__2146__auto___12021,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__1992__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__1992__auto____0 = (function (){
var statearr_12017 = [null,null,null,null,null,null,null,null,null];
(statearr_12017[(0)] = figwheel$client$heads_up_plugin_$_state_machine__1992__auto__);

(statearr_12017[(1)] = (1));

return statearr_12017;
});
var figwheel$client$heads_up_plugin_$_state_machine__1992__auto____1 = (function (state_12007){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_12007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e12018){if((e12018 instanceof Object)){
var ex__1995__auto__ = e12018;
var statearr_12019_12028 = state_12007;
(statearr_12019_12028[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12029 = state_12007;
state_12007 = G__12029;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__1992__auto__ = function(state_12007){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__1992__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__1992__auto____1.call(this,state_12007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__1992__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__1992__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto___12021,ch))
})();
var state__2148__auto__ = (function (){var statearr_12020 = f__2147__auto__.call(null);
(statearr_12020[(6)] = c__2146__auto___12021);

return statearr_12020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto___12021,ch))
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
var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__){
return (function (state_12035){
var state_val_12036 = (state_12035[(1)]);
if((state_val_12036 === (1))){
var inst_12030 = cljs.core.async.timeout.call(null,(3000));
var state_12035__$1 = state_12035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12035__$1,(2),inst_12030);
} else {
if((state_val_12036 === (2))){
var inst_12032 = (state_12035[(2)]);
var inst_12033 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_12035__$1 = (function (){var statearr_12037 = state_12035;
(statearr_12037[(7)] = inst_12032);

return statearr_12037;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12035__$1,inst_12033);
} else {
return null;
}
}
});})(c__2146__auto__))
;
return ((function (switch__1991__auto__,c__2146__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__1992__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__1992__auto____0 = (function (){
var statearr_12038 = [null,null,null,null,null,null,null,null];
(statearr_12038[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__1992__auto__);

(statearr_12038[(1)] = (1));

return statearr_12038;
});
var figwheel$client$enforce_project_plugin_$_state_machine__1992__auto____1 = (function (state_12035){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_12035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e12039){if((e12039 instanceof Object)){
var ex__1995__auto__ = e12039;
var statearr_12040_12042 = state_12035;
(statearr_12040_12042[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12043 = state_12035;
state_12035 = G__12043;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__1992__auto__ = function(state_12035){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__1992__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__1992__auto____1.call(this,state_12035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__1992__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__1992__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__))
})();
var state__2148__auto__ = (function (){var statearr_12041 = f__2147__auto__.call(null);
(statearr_12041[(6)] = c__2146__auto__);

return statearr_12041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__))
);

return c__2146__auto__;
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
var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__,figwheel_version,temp__4657__auto__){
return (function (state_12050){
var state_val_12051 = (state_12050[(1)]);
if((state_val_12051 === (1))){
var inst_12044 = cljs.core.async.timeout.call(null,(2000));
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12050__$1,(2),inst_12044);
} else {
if((state_val_12051 === (2))){
var inst_12046 = (state_12050[(2)]);
var inst_12047 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_12048 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_12047);
var state_12050__$1 = (function (){var statearr_12052 = state_12050;
(statearr_12052[(7)] = inst_12046);

return statearr_12052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12050__$1,inst_12048);
} else {
return null;
}
}
});})(c__2146__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__1991__auto__,c__2146__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto____0 = (function (){
var statearr_12053 = [null,null,null,null,null,null,null,null];
(statearr_12053[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto__);

(statearr_12053[(1)] = (1));

return statearr_12053;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto____1 = (function (state_12050){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_12050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e12054){if((e12054 instanceof Object)){
var ex__1995__auto__ = e12054;
var statearr_12055_12057 = state_12050;
(statearr_12055_12057[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12058 = state_12050;
state_12050 = G__12058;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto__ = function(state_12050){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto____1.call(this,state_12050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__,figwheel_version,temp__4657__auto__))
})();
var state__2148__auto__ = (function (){var statearr_12056 = f__2147__auto__.call(null);
(statearr_12056[(6)] = c__2146__auto__);

return statearr_12056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__,figwheel_version,temp__4657__auto__))
);

return c__2146__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__12059){
var map__12060 = p__12059;
var map__12060__$1 = ((((!((map__12060 == null)))?(((((map__12060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12060):map__12060);
var file = cljs.core.get.call(null,map__12060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12060__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12060__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__12062 = "";
var G__12062__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12062),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__12062);
var G__12062__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12062__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__12062__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12062__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__12062__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__12063){
var map__12064 = p__12063;
var map__12064__$1 = ((((!((map__12064 == null)))?(((((map__12064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12064):map__12064);
var ed = map__12064__$1;
var formatted_exception = cljs.core.get.call(null,map__12064__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__12064__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__12064__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__12066_12070 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__12067_12071 = null;
var count__12068_12072 = (0);
var i__12069_12073 = (0);
while(true){
if((i__12069_12073 < count__12068_12072)){
var msg_12074 = cljs.core._nth.call(null,chunk__12067_12071,i__12069_12073);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12074);


var G__12075 = seq__12066_12070;
var G__12076 = chunk__12067_12071;
var G__12077 = count__12068_12072;
var G__12078 = (i__12069_12073 + (1));
seq__12066_12070 = G__12075;
chunk__12067_12071 = G__12076;
count__12068_12072 = G__12077;
i__12069_12073 = G__12078;
continue;
} else {
var temp__4657__auto___12079 = cljs.core.seq.call(null,seq__12066_12070);
if(temp__4657__auto___12079){
var seq__12066_12080__$1 = temp__4657__auto___12079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12066_12080__$1)){
var c__4317__auto___12081 = cljs.core.chunk_first.call(null,seq__12066_12080__$1);
var G__12082 = cljs.core.chunk_rest.call(null,seq__12066_12080__$1);
var G__12083 = c__4317__auto___12081;
var G__12084 = cljs.core.count.call(null,c__4317__auto___12081);
var G__12085 = (0);
seq__12066_12070 = G__12082;
chunk__12067_12071 = G__12083;
count__12068_12072 = G__12084;
i__12069_12073 = G__12085;
continue;
} else {
var msg_12086 = cljs.core.first.call(null,seq__12066_12080__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12086);


var G__12087 = cljs.core.next.call(null,seq__12066_12080__$1);
var G__12088 = null;
var G__12089 = (0);
var G__12090 = (0);
seq__12066_12070 = G__12087;
chunk__12067_12071 = G__12088;
count__12068_12072 = G__12089;
i__12069_12073 = G__12090;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__12091){
var map__12092 = p__12091;
var map__12092__$1 = ((((!((map__12092 == null)))?(((((map__12092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12092):map__12092);
var w = map__12092__$1;
var message = cljs.core.get.call(null,map__12092__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/dev/js/out_front/authentication/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/dev/js/out_front/authentication/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__12094 = cljs.core.seq.call(null,plugins);
var chunk__12095 = null;
var count__12096 = (0);
var i__12097 = (0);
while(true){
if((i__12097 < count__12096)){
var vec__12098 = cljs.core._nth.call(null,chunk__12095,i__12097);
var k = cljs.core.nth.call(null,vec__12098,(0),null);
var plugin = cljs.core.nth.call(null,vec__12098,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12104 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12094,chunk__12095,count__12096,i__12097,pl_12104,vec__12098,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_12104.call(null,msg_hist);
});})(seq__12094,chunk__12095,count__12096,i__12097,pl_12104,vec__12098,k,plugin))
);
} else {
}


var G__12105 = seq__12094;
var G__12106 = chunk__12095;
var G__12107 = count__12096;
var G__12108 = (i__12097 + (1));
seq__12094 = G__12105;
chunk__12095 = G__12106;
count__12096 = G__12107;
i__12097 = G__12108;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12094);
if(temp__4657__auto__){
var seq__12094__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12094__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__12094__$1);
var G__12109 = cljs.core.chunk_rest.call(null,seq__12094__$1);
var G__12110 = c__4317__auto__;
var G__12111 = cljs.core.count.call(null,c__4317__auto__);
var G__12112 = (0);
seq__12094 = G__12109;
chunk__12095 = G__12110;
count__12096 = G__12111;
i__12097 = G__12112;
continue;
} else {
var vec__12101 = cljs.core.first.call(null,seq__12094__$1);
var k = cljs.core.nth.call(null,vec__12101,(0),null);
var plugin = cljs.core.nth.call(null,vec__12101,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12113 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12094,chunk__12095,count__12096,i__12097,pl_12113,vec__12101,k,plugin,seq__12094__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_12113.call(null,msg_hist);
});})(seq__12094,chunk__12095,count__12096,i__12097,pl_12113,vec__12101,k,plugin,seq__12094__$1,temp__4657__auto__))
);
} else {
}


var G__12114 = cljs.core.next.call(null,seq__12094__$1);
var G__12115 = null;
var G__12116 = (0);
var G__12117 = (0);
seq__12094 = G__12114;
chunk__12095 = G__12115;
count__12096 = G__12116;
i__12097 = G__12117;
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
var G__12119 = arguments.length;
switch (G__12119) {
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

var seq__12120_12125 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__12121_12126 = null;
var count__12122_12127 = (0);
var i__12123_12128 = (0);
while(true){
if((i__12123_12128 < count__12122_12127)){
var msg_12129 = cljs.core._nth.call(null,chunk__12121_12126,i__12123_12128);
figwheel.client.socket.handle_incoming_message.call(null,msg_12129);


var G__12130 = seq__12120_12125;
var G__12131 = chunk__12121_12126;
var G__12132 = count__12122_12127;
var G__12133 = (i__12123_12128 + (1));
seq__12120_12125 = G__12130;
chunk__12121_12126 = G__12131;
count__12122_12127 = G__12132;
i__12123_12128 = G__12133;
continue;
} else {
var temp__4657__auto___12134 = cljs.core.seq.call(null,seq__12120_12125);
if(temp__4657__auto___12134){
var seq__12120_12135__$1 = temp__4657__auto___12134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12120_12135__$1)){
var c__4317__auto___12136 = cljs.core.chunk_first.call(null,seq__12120_12135__$1);
var G__12137 = cljs.core.chunk_rest.call(null,seq__12120_12135__$1);
var G__12138 = c__4317__auto___12136;
var G__12139 = cljs.core.count.call(null,c__4317__auto___12136);
var G__12140 = (0);
seq__12120_12125 = G__12137;
chunk__12121_12126 = G__12138;
count__12122_12127 = G__12139;
i__12123_12128 = G__12140;
continue;
} else {
var msg_12141 = cljs.core.first.call(null,seq__12120_12135__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_12141);


var G__12142 = cljs.core.next.call(null,seq__12120_12135__$1);
var G__12143 = null;
var G__12144 = (0);
var G__12145 = (0);
seq__12120_12125 = G__12142;
chunk__12121_12126 = G__12143;
count__12122_12127 = G__12144;
i__12123_12128 = G__12145;
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
var len__4497__auto___12150 = arguments.length;
var i__4498__auto___12151 = (0);
while(true){
if((i__4498__auto___12151 < len__4497__auto___12150)){
args__4500__auto__.push((arguments[i__4498__auto___12151]));

var G__12152 = (i__4498__auto___12151 + (1));
i__4498__auto___12151 = G__12152;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__12147){
var map__12148 = p__12147;
var map__12148__$1 = ((((!((map__12148 == null)))?(((((map__12148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12148):map__12148);
var opts = map__12148__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq12146){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12146));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e12153){if((e12153 instanceof Error)){
var e = e12153;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e12153;

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
return (function (p__12154){
var map__12155 = p__12154;
var map__12155__$1 = ((((!((map__12155 == null)))?(((((map__12155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12155):map__12155);
var msg_name = cljs.core.get.call(null,map__12155__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
