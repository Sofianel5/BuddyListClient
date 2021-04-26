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
var G__12810 = arguments.length;
switch (G__12810) {
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
var len__4497__auto___12813 = arguments.length;
var i__4498__auto___12814 = (0);
while(true){
if((i__4498__auto___12814 < len__4497__auto___12813)){
args__4500__auto__.push((arguments[i__4498__auto___12814]));

var G__12815 = (i__4498__auto___12814 + (1));
i__4498__auto___12814 = G__12815;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq12812){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12812));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___12817 = arguments.length;
var i__4498__auto___12818 = (0);
while(true){
if((i__4498__auto___12818 < len__4497__auto___12817)){
args__4500__auto__.push((arguments[i__4498__auto___12818]));

var G__12819 = (i__4498__auto___12818 + (1));
i__4498__auto___12818 = G__12819;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq12816){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12816));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__12820){
var map__12821 = p__12820;
var map__12821__$1 = ((((!((map__12821 == null)))?(((((map__12821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12821):map__12821);
var message = cljs.core.get.call(null,map__12821__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__12821__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__2788__auto___12900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___12900,ch){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___12900,ch){
return (function (state_12872){
var state_val_12873 = (state_12872[(1)]);
if((state_val_12873 === (7))){
var inst_12868 = (state_12872[(2)]);
var state_12872__$1 = state_12872;
var statearr_12874_12901 = state_12872__$1;
(statearr_12874_12901[(2)] = inst_12868);

(statearr_12874_12901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (1))){
var state_12872__$1 = state_12872;
var statearr_12875_12902 = state_12872__$1;
(statearr_12875_12902[(2)] = null);

(statearr_12875_12902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (4))){
var inst_12825 = (state_12872[(7)]);
var inst_12825__$1 = (state_12872[(2)]);
var state_12872__$1 = (function (){var statearr_12876 = state_12872;
(statearr_12876[(7)] = inst_12825__$1);

return statearr_12876;
})();
if(cljs.core.truth_(inst_12825__$1)){
var statearr_12877_12903 = state_12872__$1;
(statearr_12877_12903[(1)] = (5));

} else {
var statearr_12878_12904 = state_12872__$1;
(statearr_12878_12904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (15))){
var inst_12832 = (state_12872[(8)]);
var inst_12847 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_12832);
var inst_12848 = cljs.core.first.call(null,inst_12847);
var inst_12849 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_12848);
var inst_12850 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12849)].join('');
var inst_12851 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_12850);
var state_12872__$1 = state_12872;
var statearr_12879_12905 = state_12872__$1;
(statearr_12879_12905[(2)] = inst_12851);

(statearr_12879_12905[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (13))){
var inst_12856 = (state_12872[(2)]);
var state_12872__$1 = state_12872;
var statearr_12880_12906 = state_12872__$1;
(statearr_12880_12906[(2)] = inst_12856);

(statearr_12880_12906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (6))){
var state_12872__$1 = state_12872;
var statearr_12881_12907 = state_12872__$1;
(statearr_12881_12907[(2)] = null);

(statearr_12881_12907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (17))){
var inst_12854 = (state_12872[(2)]);
var state_12872__$1 = state_12872;
var statearr_12882_12908 = state_12872__$1;
(statearr_12882_12908[(2)] = inst_12854);

(statearr_12882_12908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (3))){
var inst_12870 = (state_12872[(2)]);
var state_12872__$1 = state_12872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12872__$1,inst_12870);
} else {
if((state_val_12873 === (12))){
var inst_12831 = (state_12872[(9)]);
var inst_12845 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_12831,opts);
var state_12872__$1 = state_12872;
if(cljs.core.truth_(inst_12845)){
var statearr_12883_12909 = state_12872__$1;
(statearr_12883_12909[(1)] = (15));

} else {
var statearr_12884_12910 = state_12872__$1;
(statearr_12884_12910[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (2))){
var state_12872__$1 = state_12872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12872__$1,(4),ch);
} else {
if((state_val_12873 === (11))){
var inst_12832 = (state_12872[(8)]);
var inst_12837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12838 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_12832);
var inst_12839 = cljs.core.async.timeout.call(null,(1000));
var inst_12840 = [inst_12838,inst_12839];
var inst_12841 = (new cljs.core.PersistentVector(null,2,(5),inst_12837,inst_12840,null));
var state_12872__$1 = state_12872;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12872__$1,(14),inst_12841);
} else {
if((state_val_12873 === (9))){
var inst_12832 = (state_12872[(8)]);
var inst_12858 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_12859 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_12832);
var inst_12860 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_12859);
var inst_12861 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12860)].join('');
var inst_12862 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_12861);
var state_12872__$1 = (function (){var statearr_12885 = state_12872;
(statearr_12885[(10)] = inst_12858);

return statearr_12885;
})();
var statearr_12886_12911 = state_12872__$1;
(statearr_12886_12911[(2)] = inst_12862);

(statearr_12886_12911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (5))){
var inst_12825 = (state_12872[(7)]);
var inst_12827 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_12828 = (new cljs.core.PersistentArrayMap(null,2,inst_12827,null));
var inst_12829 = (new cljs.core.PersistentHashSet(null,inst_12828,null));
var inst_12830 = figwheel.client.focus_msgs.call(null,inst_12829,inst_12825);
var inst_12831 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_12830);
var inst_12832 = cljs.core.first.call(null,inst_12830);
var inst_12833 = figwheel.client.autoload_QMARK_.call(null);
var state_12872__$1 = (function (){var statearr_12887 = state_12872;
(statearr_12887[(8)] = inst_12832);

(statearr_12887[(9)] = inst_12831);

return statearr_12887;
})();
if(cljs.core.truth_(inst_12833)){
var statearr_12888_12912 = state_12872__$1;
(statearr_12888_12912[(1)] = (8));

} else {
var statearr_12889_12913 = state_12872__$1;
(statearr_12889_12913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (14))){
var inst_12843 = (state_12872[(2)]);
var state_12872__$1 = state_12872;
var statearr_12890_12914 = state_12872__$1;
(statearr_12890_12914[(2)] = inst_12843);

(statearr_12890_12914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (16))){
var state_12872__$1 = state_12872;
var statearr_12891_12915 = state_12872__$1;
(statearr_12891_12915[(2)] = null);

(statearr_12891_12915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (10))){
var inst_12864 = (state_12872[(2)]);
var state_12872__$1 = (function (){var statearr_12892 = state_12872;
(statearr_12892[(11)] = inst_12864);

return statearr_12892;
})();
var statearr_12893_12916 = state_12872__$1;
(statearr_12893_12916[(2)] = null);

(statearr_12893_12916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (8))){
var inst_12831 = (state_12872[(9)]);
var inst_12835 = figwheel.client.reload_file_state_QMARK_.call(null,inst_12831,opts);
var state_12872__$1 = state_12872;
if(cljs.core.truth_(inst_12835)){
var statearr_12894_12917 = state_12872__$1;
(statearr_12894_12917[(1)] = (11));

} else {
var statearr_12895_12918 = state_12872__$1;
(statearr_12895_12918[(1)] = (12));

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
});})(c__2788__auto___12900,ch))
;
return ((function (switch__2633__auto__,c__2788__auto___12900,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____0 = (function (){
var statearr_12896 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12896[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__);

(statearr_12896[(1)] = (1));

return statearr_12896;
});
var figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____1 = (function (state_12872){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_12872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e12897){if((e12897 instanceof Object)){
var ex__2637__auto__ = e12897;
var statearr_12898_12919 = state_12872;
(statearr_12898_12919[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12920 = state_12872;
state_12872 = G__12920;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__ = function(state_12872){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____1.call(this,state_12872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__2634__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___12900,ch))
})();
var state__2790__auto__ = (function (){var statearr_12899 = f__2789__auto__.call(null);
(statearr_12899[(6)] = c__2788__auto___12900);

return statearr_12899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___12900,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__12921_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__12921_SHARP_));
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
var base_path_12923 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_12923){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e12922){if((e12922 instanceof Error)){
var e = e12922;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_12923], null));
} else {
var e = e12922;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_12923))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__12924){
var map__12925 = p__12924;
var map__12925__$1 = ((((!((map__12925 == null)))?(((((map__12925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12925):map__12925);
var opts = map__12925__$1;
var build_id = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__12925,map__12925__$1,opts,build_id){
return (function (p__12927){
var vec__12928 = p__12927;
var seq__12929 = cljs.core.seq.call(null,vec__12928);
var first__12930 = cljs.core.first.call(null,seq__12929);
var seq__12929__$1 = cljs.core.next.call(null,seq__12929);
var map__12931 = first__12930;
var map__12931__$1 = ((((!((map__12931 == null)))?(((((map__12931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12931):map__12931);
var msg = map__12931__$1;
var msg_name = cljs.core.get.call(null,map__12931__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__12929__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__12928,seq__12929,first__12930,seq__12929__$1,map__12931,map__12931__$1,msg,msg_name,_,map__12925,map__12925__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__12928,seq__12929,first__12930,seq__12929__$1,map__12931,map__12931__$1,msg,msg_name,_,map__12925,map__12925__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__12925,map__12925__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__12933){
var vec__12934 = p__12933;
var seq__12935 = cljs.core.seq.call(null,vec__12934);
var first__12936 = cljs.core.first.call(null,seq__12935);
var seq__12935__$1 = cljs.core.next.call(null,seq__12935);
var map__12937 = first__12936;
var map__12937__$1 = ((((!((map__12937 == null)))?(((((map__12937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12937):map__12937);
var msg = map__12937__$1;
var msg_name = cljs.core.get.call(null,map__12937__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__12935__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__12939){
var map__12940 = p__12939;
var map__12940__$1 = ((((!((map__12940 == null)))?(((((map__12940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12940):map__12940);
var on_compile_warning = cljs.core.get.call(null,map__12940__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__12940__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__12940,map__12940__$1,on_compile_warning,on_compile_fail){
return (function (p__12942){
var vec__12943 = p__12942;
var seq__12944 = cljs.core.seq.call(null,vec__12943);
var first__12945 = cljs.core.first.call(null,seq__12944);
var seq__12944__$1 = cljs.core.next.call(null,seq__12944);
var map__12946 = first__12945;
var map__12946__$1 = ((((!((map__12946 == null)))?(((((map__12946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12946):map__12946);
var msg = map__12946__$1;
var msg_name = cljs.core.get.call(null,map__12946__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__12944__$1;
var pred__12948 = cljs.core._EQ_;
var expr__12949 = msg_name;
if(cljs.core.truth_(pred__12948.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__12949))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__12948.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__12949))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__12940,map__12940__$1,on_compile_warning,on_compile_fail))
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
return (function (state_13038){
var state_val_13039 = (state_13038[(1)]);
if((state_val_13039 === (7))){
var inst_12958 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
if(cljs.core.truth_(inst_12958)){
var statearr_13040_13087 = state_13038__$1;
(statearr_13040_13087[(1)] = (8));

} else {
var statearr_13041_13088 = state_13038__$1;
(statearr_13041_13088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (20))){
var inst_13032 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
var statearr_13042_13089 = state_13038__$1;
(statearr_13042_13089[(2)] = inst_13032);

(statearr_13042_13089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (27))){
var inst_13028 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
var statearr_13043_13090 = state_13038__$1;
(statearr_13043_13090[(2)] = inst_13028);

(statearr_13043_13090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (1))){
var inst_12951 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_13038__$1 = state_13038;
if(cljs.core.truth_(inst_12951)){
var statearr_13044_13091 = state_13038__$1;
(statearr_13044_13091[(1)] = (2));

} else {
var statearr_13045_13092 = state_13038__$1;
(statearr_13045_13092[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (24))){
var inst_13030 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
var statearr_13046_13093 = state_13038__$1;
(statearr_13046_13093[(2)] = inst_13030);

(statearr_13046_13093[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (4))){
var inst_13036 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13038__$1,inst_13036);
} else {
if((state_val_13039 === (15))){
var inst_13034 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
var statearr_13047_13094 = state_13038__$1;
(statearr_13047_13094[(2)] = inst_13034);

(statearr_13047_13094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (21))){
var inst_12987 = (state_13038[(2)]);
var inst_12988 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12989 = figwheel.client.auto_jump_to_error.call(null,opts,inst_12988);
var state_13038__$1 = (function (){var statearr_13048 = state_13038;
(statearr_13048[(7)] = inst_12987);

return statearr_13048;
})();
var statearr_13049_13095 = state_13038__$1;
(statearr_13049_13095[(2)] = inst_12989);

(statearr_13049_13095[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (31))){
var inst_13017 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_13038__$1 = state_13038;
if(cljs.core.truth_(inst_13017)){
var statearr_13050_13096 = state_13038__$1;
(statearr_13050_13096[(1)] = (34));

} else {
var statearr_13051_13097 = state_13038__$1;
(statearr_13051_13097[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (32))){
var inst_13026 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
var statearr_13052_13098 = state_13038__$1;
(statearr_13052_13098[(2)] = inst_13026);

(statearr_13052_13098[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (33))){
var inst_13013 = (state_13038[(2)]);
var inst_13014 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13015 = figwheel.client.auto_jump_to_error.call(null,opts,inst_13014);
var state_13038__$1 = (function (){var statearr_13053 = state_13038;
(statearr_13053[(8)] = inst_13013);

return statearr_13053;
})();
var statearr_13054_13099 = state_13038__$1;
(statearr_13054_13099[(2)] = inst_13015);

(statearr_13054_13099[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (13))){
var inst_12972 = figwheel.client.heads_up.clear.call(null);
var state_13038__$1 = state_13038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13038__$1,(16),inst_12972);
} else {
if((state_val_13039 === (22))){
var inst_12993 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12994 = figwheel.client.heads_up.append_warning_message.call(null,inst_12993);
var state_13038__$1 = state_13038;
var statearr_13055_13100 = state_13038__$1;
(statearr_13055_13100[(2)] = inst_12994);

(statearr_13055_13100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (36))){
var inst_13024 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
var statearr_13056_13101 = state_13038__$1;
(statearr_13056_13101[(2)] = inst_13024);

(statearr_13056_13101[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (29))){
var inst_13004 = (state_13038[(2)]);
var inst_13005 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13006 = figwheel.client.auto_jump_to_error.call(null,opts,inst_13005);
var state_13038__$1 = (function (){var statearr_13057 = state_13038;
(statearr_13057[(9)] = inst_13004);

return statearr_13057;
})();
var statearr_13058_13102 = state_13038__$1;
(statearr_13058_13102[(2)] = inst_13006);

(statearr_13058_13102[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (6))){
var inst_12953 = (state_13038[(10)]);
var state_13038__$1 = state_13038;
var statearr_13059_13103 = state_13038__$1;
(statearr_13059_13103[(2)] = inst_12953);

(statearr_13059_13103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (28))){
var inst_13000 = (state_13038[(2)]);
var inst_13001 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13002 = figwheel.client.heads_up.display_warning.call(null,inst_13001);
var state_13038__$1 = (function (){var statearr_13060 = state_13038;
(statearr_13060[(11)] = inst_13000);

return statearr_13060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13038__$1,(29),inst_13002);
} else {
if((state_val_13039 === (25))){
var inst_12998 = figwheel.client.heads_up.clear.call(null);
var state_13038__$1 = state_13038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13038__$1,(28),inst_12998);
} else {
if((state_val_13039 === (34))){
var inst_13019 = figwheel.client.heads_up.flash_loaded.call(null);
var state_13038__$1 = state_13038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13038__$1,(37),inst_13019);
} else {
if((state_val_13039 === (17))){
var inst_12978 = (state_13038[(2)]);
var inst_12979 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12980 = figwheel.client.auto_jump_to_error.call(null,opts,inst_12979);
var state_13038__$1 = (function (){var statearr_13061 = state_13038;
(statearr_13061[(12)] = inst_12978);

return statearr_13061;
})();
var statearr_13062_13104 = state_13038__$1;
(statearr_13062_13104[(2)] = inst_12980);

(statearr_13062_13104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (3))){
var inst_12970 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_13038__$1 = state_13038;
if(cljs.core.truth_(inst_12970)){
var statearr_13063_13105 = state_13038__$1;
(statearr_13063_13105[(1)] = (13));

} else {
var statearr_13064_13106 = state_13038__$1;
(statearr_13064_13106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (12))){
var inst_12966 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
var statearr_13065_13107 = state_13038__$1;
(statearr_13065_13107[(2)] = inst_12966);

(statearr_13065_13107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (2))){
var inst_12953 = (state_13038[(10)]);
var inst_12953__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_13038__$1 = (function (){var statearr_13066 = state_13038;
(statearr_13066[(10)] = inst_12953__$1);

return statearr_13066;
})();
if(cljs.core.truth_(inst_12953__$1)){
var statearr_13067_13108 = state_13038__$1;
(statearr_13067_13108[(1)] = (5));

} else {
var statearr_13068_13109 = state_13038__$1;
(statearr_13068_13109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (23))){
var inst_12996 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_13038__$1 = state_13038;
if(cljs.core.truth_(inst_12996)){
var statearr_13069_13110 = state_13038__$1;
(statearr_13069_13110[(1)] = (25));

} else {
var statearr_13070_13111 = state_13038__$1;
(statearr_13070_13111[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (35))){
var state_13038__$1 = state_13038;
var statearr_13071_13112 = state_13038__$1;
(statearr_13071_13112[(2)] = null);

(statearr_13071_13112[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (19))){
var inst_12991 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_13038__$1 = state_13038;
if(cljs.core.truth_(inst_12991)){
var statearr_13072_13113 = state_13038__$1;
(statearr_13072_13113[(1)] = (22));

} else {
var statearr_13073_13114 = state_13038__$1;
(statearr_13073_13114[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (11))){
var inst_12962 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
var statearr_13074_13115 = state_13038__$1;
(statearr_13074_13115[(2)] = inst_12962);

(statearr_13074_13115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (9))){
var inst_12964 = figwheel.client.heads_up.clear.call(null);
var state_13038__$1 = state_13038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13038__$1,(12),inst_12964);
} else {
if((state_val_13039 === (5))){
var inst_12955 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_13038__$1 = state_13038;
var statearr_13075_13116 = state_13038__$1;
(statearr_13075_13116[(2)] = inst_12955);

(statearr_13075_13116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (14))){
var inst_12982 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_13038__$1 = state_13038;
if(cljs.core.truth_(inst_12982)){
var statearr_13076_13117 = state_13038__$1;
(statearr_13076_13117[(1)] = (18));

} else {
var statearr_13077_13118 = state_13038__$1;
(statearr_13077_13118[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (26))){
var inst_13008 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_13038__$1 = state_13038;
if(cljs.core.truth_(inst_13008)){
var statearr_13078_13119 = state_13038__$1;
(statearr_13078_13119[(1)] = (30));

} else {
var statearr_13079_13120 = state_13038__$1;
(statearr_13079_13120[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (16))){
var inst_12974 = (state_13038[(2)]);
var inst_12975 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12976 = figwheel.client.heads_up.display_exception.call(null,inst_12975);
var state_13038__$1 = (function (){var statearr_13080 = state_13038;
(statearr_13080[(13)] = inst_12974);

return statearr_13080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13038__$1,(17),inst_12976);
} else {
if((state_val_13039 === (30))){
var inst_13010 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13011 = figwheel.client.heads_up.display_warning.call(null,inst_13010);
var state_13038__$1 = state_13038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13038__$1,(33),inst_13011);
} else {
if((state_val_13039 === (10))){
var inst_12968 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
var statearr_13081_13121 = state_13038__$1;
(statearr_13081_13121[(2)] = inst_12968);

(statearr_13081_13121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (18))){
var inst_12984 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12985 = figwheel.client.heads_up.display_exception.call(null,inst_12984);
var state_13038__$1 = state_13038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13038__$1,(21),inst_12985);
} else {
if((state_val_13039 === (37))){
var inst_13021 = (state_13038[(2)]);
var state_13038__$1 = state_13038;
var statearr_13082_13122 = state_13038__$1;
(statearr_13082_13122[(2)] = inst_13021);

(statearr_13082_13122[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13039 === (8))){
var inst_12960 = figwheel.client.heads_up.flash_loaded.call(null);
var state_13038__$1 = state_13038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13038__$1,(11),inst_12960);
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
var statearr_13083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13083[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto__);

(statearr_13083[(1)] = (1));

return statearr_13083;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto____1 = (function (state_13038){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_13038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e13084){if((e13084 instanceof Object)){
var ex__2637__auto__ = e13084;
var statearr_13085_13123 = state_13038;
(statearr_13085_13123[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13124 = state_13038;
state_13038 = G__13124;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto__ = function(state_13038){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto____1.call(this,state_13038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__,msg_hist,msg_names,msg))
})();
var state__2790__auto__ = (function (){var statearr_13086 = f__2789__auto__.call(null);
(statearr_13086[(6)] = c__2788__auto__);

return statearr_13086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto__,msg_hist,msg_names,msg))
);

return c__2788__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__2788__auto___13153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2788__auto___13153,ch){
return (function (){
var f__2789__auto__ = (function (){var switch__2633__auto__ = ((function (c__2788__auto___13153,ch){
return (function (state_13139){
var state_val_13140 = (state_13139[(1)]);
if((state_val_13140 === (1))){
var state_13139__$1 = state_13139;
var statearr_13141_13154 = state_13139__$1;
(statearr_13141_13154[(2)] = null);

(statearr_13141_13154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13140 === (2))){
var state_13139__$1 = state_13139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13139__$1,(4),ch);
} else {
if((state_val_13140 === (3))){
var inst_13137 = (state_13139[(2)]);
var state_13139__$1 = state_13139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13139__$1,inst_13137);
} else {
if((state_val_13140 === (4))){
var inst_13127 = (state_13139[(7)]);
var inst_13127__$1 = (state_13139[(2)]);
var state_13139__$1 = (function (){var statearr_13142 = state_13139;
(statearr_13142[(7)] = inst_13127__$1);

return statearr_13142;
})();
if(cljs.core.truth_(inst_13127__$1)){
var statearr_13143_13155 = state_13139__$1;
(statearr_13143_13155[(1)] = (5));

} else {
var statearr_13144_13156 = state_13139__$1;
(statearr_13144_13156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13140 === (5))){
var inst_13127 = (state_13139[(7)]);
var inst_13129 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_13127);
var state_13139__$1 = state_13139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13139__$1,(8),inst_13129);
} else {
if((state_val_13140 === (6))){
var state_13139__$1 = state_13139;
var statearr_13145_13157 = state_13139__$1;
(statearr_13145_13157[(2)] = null);

(statearr_13145_13157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13140 === (7))){
var inst_13135 = (state_13139[(2)]);
var state_13139__$1 = state_13139;
var statearr_13146_13158 = state_13139__$1;
(statearr_13146_13158[(2)] = inst_13135);

(statearr_13146_13158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13140 === (8))){
var inst_13131 = (state_13139[(2)]);
var state_13139__$1 = (function (){var statearr_13147 = state_13139;
(statearr_13147[(8)] = inst_13131);

return statearr_13147;
})();
var statearr_13148_13159 = state_13139__$1;
(statearr_13148_13159[(2)] = null);

(statearr_13148_13159[(1)] = (2));


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
});})(c__2788__auto___13153,ch))
;
return ((function (switch__2633__auto__,c__2788__auto___13153,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__2634__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__2634__auto____0 = (function (){
var statearr_13149 = [null,null,null,null,null,null,null,null,null];
(statearr_13149[(0)] = figwheel$client$heads_up_plugin_$_state_machine__2634__auto__);

(statearr_13149[(1)] = (1));

return statearr_13149;
});
var figwheel$client$heads_up_plugin_$_state_machine__2634__auto____1 = (function (state_13139){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_13139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e13150){if((e13150 instanceof Object)){
var ex__2637__auto__ = e13150;
var statearr_13151_13160 = state_13139;
(statearr_13151_13160[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13161 = state_13139;
state_13139 = G__13161;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__2634__auto__ = function(state_13139){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__2634__auto____1.call(this,state_13139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__2634__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__2634__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto___13153,ch))
})();
var state__2790__auto__ = (function (){var statearr_13152 = f__2789__auto__.call(null);
(statearr_13152[(6)] = c__2788__auto___13153);

return statearr_13152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2790__auto__);
});})(c__2788__auto___13153,ch))
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
return (function (state_13167){
var state_val_13168 = (state_13167[(1)]);
if((state_val_13168 === (1))){
var inst_13162 = cljs.core.async.timeout.call(null,(3000));
var state_13167__$1 = state_13167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13167__$1,(2),inst_13162);
} else {
if((state_val_13168 === (2))){
var inst_13164 = (state_13167[(2)]);
var inst_13165 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_13167__$1 = (function (){var statearr_13169 = state_13167;
(statearr_13169[(7)] = inst_13164);

return statearr_13169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13167__$1,inst_13165);
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
var statearr_13170 = [null,null,null,null,null,null,null,null];
(statearr_13170[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__2634__auto__);

(statearr_13170[(1)] = (1));

return statearr_13170;
});
var figwheel$client$enforce_project_plugin_$_state_machine__2634__auto____1 = (function (state_13167){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_13167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e13171){if((e13171 instanceof Object)){
var ex__2637__auto__ = e13171;
var statearr_13172_13174 = state_13167;
(statearr_13172_13174[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_13167;
state_13167 = G__13175;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__2634__auto__ = function(state_13167){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__2634__auto____1.call(this,state_13167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__2634__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__2634__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__))
})();
var state__2790__auto__ = (function (){var statearr_13173 = f__2789__auto__.call(null);
(statearr_13173[(6)] = c__2788__auto__);

return statearr_13173;
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
return (function (state_13182){
var state_val_13183 = (state_13182[(1)]);
if((state_val_13183 === (1))){
var inst_13176 = cljs.core.async.timeout.call(null,(2000));
var state_13182__$1 = state_13182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13182__$1,(2),inst_13176);
} else {
if((state_val_13183 === (2))){
var inst_13178 = (state_13182[(2)]);
var inst_13179 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_13180 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_13179);
var state_13182__$1 = (function (){var statearr_13184 = state_13182;
(statearr_13184[(7)] = inst_13178);

return statearr_13184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13182__$1,inst_13180);
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
var statearr_13185 = [null,null,null,null,null,null,null,null];
(statearr_13185[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto__);

(statearr_13185[(1)] = (1));

return statearr_13185;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto____1 = (function (state_13182){
while(true){
var ret_value__2635__auto__ = (function (){try{while(true){
var result__2636__auto__ = switch__2633__auto__.call(null,state_13182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2636__auto__;
}
break;
}
}catch (e13186){if((e13186 instanceof Object)){
var ex__2637__auto__ = e13186;
var statearr_13187_13189 = state_13182;
(statearr_13187_13189[(5)] = ex__2637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13190 = state_13182;
state_13182 = G__13190;
continue;
} else {
return ret_value__2635__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto__ = function(state_13182){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto____1.call(this,state_13182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2634__auto__;
})()
;})(switch__2633__auto__,c__2788__auto__,figwheel_version,temp__4657__auto__))
})();
var state__2790__auto__ = (function (){var statearr_13188 = f__2789__auto__.call(null);
(statearr_13188[(6)] = c__2788__auto__);

return statearr_13188;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__13191){
var map__13192 = p__13191;
var map__13192__$1 = ((((!((map__13192 == null)))?(((((map__13192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13192):map__13192);
var file = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__13194 = "";
var G__13194__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13194),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__13194);
var G__13194__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13194__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__13194__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13194__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__13194__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__13195){
var map__13196 = p__13195;
var map__13196__$1 = ((((!((map__13196 == null)))?(((((map__13196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13196):map__13196);
var ed = map__13196__$1;
var formatted_exception = cljs.core.get.call(null,map__13196__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__13196__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__13196__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__13198_13202 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__13199_13203 = null;
var count__13200_13204 = (0);
var i__13201_13205 = (0);
while(true){
if((i__13201_13205 < count__13200_13204)){
var msg_13206 = cljs.core._nth.call(null,chunk__13199_13203,i__13201_13205);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_13206);


var G__13207 = seq__13198_13202;
var G__13208 = chunk__13199_13203;
var G__13209 = count__13200_13204;
var G__13210 = (i__13201_13205 + (1));
seq__13198_13202 = G__13207;
chunk__13199_13203 = G__13208;
count__13200_13204 = G__13209;
i__13201_13205 = G__13210;
continue;
} else {
var temp__4657__auto___13211 = cljs.core.seq.call(null,seq__13198_13202);
if(temp__4657__auto___13211){
var seq__13198_13212__$1 = temp__4657__auto___13211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13198_13212__$1)){
var c__4317__auto___13213 = cljs.core.chunk_first.call(null,seq__13198_13212__$1);
var G__13214 = cljs.core.chunk_rest.call(null,seq__13198_13212__$1);
var G__13215 = c__4317__auto___13213;
var G__13216 = cljs.core.count.call(null,c__4317__auto___13213);
var G__13217 = (0);
seq__13198_13202 = G__13214;
chunk__13199_13203 = G__13215;
count__13200_13204 = G__13216;
i__13201_13205 = G__13217;
continue;
} else {
var msg_13218 = cljs.core.first.call(null,seq__13198_13212__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_13218);


var G__13219 = cljs.core.next.call(null,seq__13198_13212__$1);
var G__13220 = null;
var G__13221 = (0);
var G__13222 = (0);
seq__13198_13202 = G__13219;
chunk__13199_13203 = G__13220;
count__13200_13204 = G__13221;
i__13201_13205 = G__13222;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__13223){
var map__13224 = p__13223;
var map__13224__$1 = ((((!((map__13224 == null)))?(((((map__13224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13224):map__13224);
var w = map__13224__$1;
var message = cljs.core.get.call(null,map__13224__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/prod/js/out_front/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/prod/js/out_front/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__13226 = cljs.core.seq.call(null,plugins);
var chunk__13227 = null;
var count__13228 = (0);
var i__13229 = (0);
while(true){
if((i__13229 < count__13228)){
var vec__13230 = cljs.core._nth.call(null,chunk__13227,i__13229);
var k = cljs.core.nth.call(null,vec__13230,(0),null);
var plugin = cljs.core.nth.call(null,vec__13230,(1),null);
if(cljs.core.truth_(plugin)){
var pl_13236 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__13226,chunk__13227,count__13228,i__13229,pl_13236,vec__13230,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_13236.call(null,msg_hist);
});})(seq__13226,chunk__13227,count__13228,i__13229,pl_13236,vec__13230,k,plugin))
);
} else {
}


var G__13237 = seq__13226;
var G__13238 = chunk__13227;
var G__13239 = count__13228;
var G__13240 = (i__13229 + (1));
seq__13226 = G__13237;
chunk__13227 = G__13238;
count__13228 = G__13239;
i__13229 = G__13240;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13226);
if(temp__4657__auto__){
var seq__13226__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13226__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__13226__$1);
var G__13241 = cljs.core.chunk_rest.call(null,seq__13226__$1);
var G__13242 = c__4317__auto__;
var G__13243 = cljs.core.count.call(null,c__4317__auto__);
var G__13244 = (0);
seq__13226 = G__13241;
chunk__13227 = G__13242;
count__13228 = G__13243;
i__13229 = G__13244;
continue;
} else {
var vec__13233 = cljs.core.first.call(null,seq__13226__$1);
var k = cljs.core.nth.call(null,vec__13233,(0),null);
var plugin = cljs.core.nth.call(null,vec__13233,(1),null);
if(cljs.core.truth_(plugin)){
var pl_13245 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__13226,chunk__13227,count__13228,i__13229,pl_13245,vec__13233,k,plugin,seq__13226__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_13245.call(null,msg_hist);
});})(seq__13226,chunk__13227,count__13228,i__13229,pl_13245,vec__13233,k,plugin,seq__13226__$1,temp__4657__auto__))
);
} else {
}


var G__13246 = cljs.core.next.call(null,seq__13226__$1);
var G__13247 = null;
var G__13248 = (0);
var G__13249 = (0);
seq__13226 = G__13246;
chunk__13227 = G__13247;
count__13228 = G__13248;
i__13229 = G__13249;
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
var G__13251 = arguments.length;
switch (G__13251) {
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

var seq__13252_13257 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__13253_13258 = null;
var count__13254_13259 = (0);
var i__13255_13260 = (0);
while(true){
if((i__13255_13260 < count__13254_13259)){
var msg_13261 = cljs.core._nth.call(null,chunk__13253_13258,i__13255_13260);
figwheel.client.socket.handle_incoming_message.call(null,msg_13261);


var G__13262 = seq__13252_13257;
var G__13263 = chunk__13253_13258;
var G__13264 = count__13254_13259;
var G__13265 = (i__13255_13260 + (1));
seq__13252_13257 = G__13262;
chunk__13253_13258 = G__13263;
count__13254_13259 = G__13264;
i__13255_13260 = G__13265;
continue;
} else {
var temp__4657__auto___13266 = cljs.core.seq.call(null,seq__13252_13257);
if(temp__4657__auto___13266){
var seq__13252_13267__$1 = temp__4657__auto___13266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13252_13267__$1)){
var c__4317__auto___13268 = cljs.core.chunk_first.call(null,seq__13252_13267__$1);
var G__13269 = cljs.core.chunk_rest.call(null,seq__13252_13267__$1);
var G__13270 = c__4317__auto___13268;
var G__13271 = cljs.core.count.call(null,c__4317__auto___13268);
var G__13272 = (0);
seq__13252_13257 = G__13269;
chunk__13253_13258 = G__13270;
count__13254_13259 = G__13271;
i__13255_13260 = G__13272;
continue;
} else {
var msg_13273 = cljs.core.first.call(null,seq__13252_13267__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_13273);


var G__13274 = cljs.core.next.call(null,seq__13252_13267__$1);
var G__13275 = null;
var G__13276 = (0);
var G__13277 = (0);
seq__13252_13257 = G__13274;
chunk__13253_13258 = G__13275;
count__13254_13259 = G__13276;
i__13255_13260 = G__13277;
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
var len__4497__auto___13282 = arguments.length;
var i__4498__auto___13283 = (0);
while(true){
if((i__4498__auto___13283 < len__4497__auto___13282)){
args__4500__auto__.push((arguments[i__4498__auto___13283]));

var G__13284 = (i__4498__auto___13283 + (1));
i__4498__auto___13283 = G__13284;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__13279){
var map__13280 = p__13279;
var map__13280__$1 = ((((!((map__13280 == null)))?(((((map__13280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13280):map__13280);
var opts = map__13280__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq13278){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13278));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e13285){if((e13285 instanceof Error)){
var e = e13285;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e13285;

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
return (function (p__13286){
var map__13287 = p__13286;
var map__13287__$1 = ((((!((map__13287 == null)))?(((((map__13287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13287):map__13287);
var msg_name = cljs.core.get.call(null,map__13287__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});
