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
var G__13846 = arguments.length;
switch (G__13846) {
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
var len__4497__auto___13849 = arguments.length;
var i__4498__auto___13850 = (0);
while(true){
if((i__4498__auto___13850 < len__4497__auto___13849)){
args__4500__auto__.push((arguments[i__4498__auto___13850]));

var G__13851 = (i__4498__auto___13850 + (1));
i__4498__auto___13850 = G__13851;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq13848){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13848));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___13853 = arguments.length;
var i__4498__auto___13854 = (0);
while(true){
if((i__4498__auto___13854 < len__4497__auto___13853)){
args__4500__auto__.push((arguments[i__4498__auto___13854]));

var G__13855 = (i__4498__auto___13854 + (1));
i__4498__auto___13854 = G__13855;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq13852){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13852));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__13856){
var map__13857 = p__13856;
var map__13857__$1 = ((((!((map__13857 == null)))?(((((map__13857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13857):map__13857);
var message = cljs.core.get.call(null,map__13857__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__13857__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__2151__auto___13936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___13936,ch){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___13936,ch){
return (function (state_13908){
var state_val_13909 = (state_13908[(1)]);
if((state_val_13909 === (7))){
var inst_13904 = (state_13908[(2)]);
var state_13908__$1 = state_13908;
var statearr_13910_13937 = state_13908__$1;
(statearr_13910_13937[(2)] = inst_13904);

(statearr_13910_13937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (1))){
var state_13908__$1 = state_13908;
var statearr_13911_13938 = state_13908__$1;
(statearr_13911_13938[(2)] = null);

(statearr_13911_13938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (4))){
var inst_13861 = (state_13908[(7)]);
var inst_13861__$1 = (state_13908[(2)]);
var state_13908__$1 = (function (){var statearr_13912 = state_13908;
(statearr_13912[(7)] = inst_13861__$1);

return statearr_13912;
})();
if(cljs.core.truth_(inst_13861__$1)){
var statearr_13913_13939 = state_13908__$1;
(statearr_13913_13939[(1)] = (5));

} else {
var statearr_13914_13940 = state_13908__$1;
(statearr_13914_13940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (15))){
var inst_13868 = (state_13908[(8)]);
var inst_13883 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13868);
var inst_13884 = cljs.core.first.call(null,inst_13883);
var inst_13885 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_13884);
var inst_13886 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13885)].join('');
var inst_13887 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_13886);
var state_13908__$1 = state_13908;
var statearr_13915_13941 = state_13908__$1;
(statearr_13915_13941[(2)] = inst_13887);

(statearr_13915_13941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (13))){
var inst_13892 = (state_13908[(2)]);
var state_13908__$1 = state_13908;
var statearr_13916_13942 = state_13908__$1;
(statearr_13916_13942[(2)] = inst_13892);

(statearr_13916_13942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (6))){
var state_13908__$1 = state_13908;
var statearr_13917_13943 = state_13908__$1;
(statearr_13917_13943[(2)] = null);

(statearr_13917_13943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (17))){
var inst_13890 = (state_13908[(2)]);
var state_13908__$1 = state_13908;
var statearr_13918_13944 = state_13908__$1;
(statearr_13918_13944[(2)] = inst_13890);

(statearr_13918_13944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (3))){
var inst_13906 = (state_13908[(2)]);
var state_13908__$1 = state_13908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13908__$1,inst_13906);
} else {
if((state_val_13909 === (12))){
var inst_13867 = (state_13908[(9)]);
var inst_13881 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_13867,opts);
var state_13908__$1 = state_13908;
if(cljs.core.truth_(inst_13881)){
var statearr_13919_13945 = state_13908__$1;
(statearr_13919_13945[(1)] = (15));

} else {
var statearr_13920_13946 = state_13908__$1;
(statearr_13920_13946[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (2))){
var state_13908__$1 = state_13908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13908__$1,(4),ch);
} else {
if((state_val_13909 === (11))){
var inst_13868 = (state_13908[(8)]);
var inst_13873 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13874 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_13868);
var inst_13875 = cljs.core.async.timeout.call(null,(1000));
var inst_13876 = [inst_13874,inst_13875];
var inst_13877 = (new cljs.core.PersistentVector(null,2,(5),inst_13873,inst_13876,null));
var state_13908__$1 = state_13908;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13908__$1,(14),inst_13877);
} else {
if((state_val_13909 === (9))){
var inst_13868 = (state_13908[(8)]);
var inst_13894 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_13895 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13868);
var inst_13896 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13895);
var inst_13897 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13896)].join('');
var inst_13898 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_13897);
var state_13908__$1 = (function (){var statearr_13921 = state_13908;
(statearr_13921[(10)] = inst_13894);

return statearr_13921;
})();
var statearr_13922_13947 = state_13908__$1;
(statearr_13922_13947[(2)] = inst_13898);

(statearr_13922_13947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (5))){
var inst_13861 = (state_13908[(7)]);
var inst_13863 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_13864 = (new cljs.core.PersistentArrayMap(null,2,inst_13863,null));
var inst_13865 = (new cljs.core.PersistentHashSet(null,inst_13864,null));
var inst_13866 = figwheel.client.focus_msgs.call(null,inst_13865,inst_13861);
var inst_13867 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_13866);
var inst_13868 = cljs.core.first.call(null,inst_13866);
var inst_13869 = figwheel.client.autoload_QMARK_.call(null);
var state_13908__$1 = (function (){var statearr_13923 = state_13908;
(statearr_13923[(9)] = inst_13867);

(statearr_13923[(8)] = inst_13868);

return statearr_13923;
})();
if(cljs.core.truth_(inst_13869)){
var statearr_13924_13948 = state_13908__$1;
(statearr_13924_13948[(1)] = (8));

} else {
var statearr_13925_13949 = state_13908__$1;
(statearr_13925_13949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (14))){
var inst_13879 = (state_13908[(2)]);
var state_13908__$1 = state_13908;
var statearr_13926_13950 = state_13908__$1;
(statearr_13926_13950[(2)] = inst_13879);

(statearr_13926_13950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (16))){
var state_13908__$1 = state_13908;
var statearr_13927_13951 = state_13908__$1;
(statearr_13927_13951[(2)] = null);

(statearr_13927_13951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (10))){
var inst_13900 = (state_13908[(2)]);
var state_13908__$1 = (function (){var statearr_13928 = state_13908;
(statearr_13928[(11)] = inst_13900);

return statearr_13928;
})();
var statearr_13929_13952 = state_13908__$1;
(statearr_13929_13952[(2)] = null);

(statearr_13929_13952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13909 === (8))){
var inst_13867 = (state_13908[(9)]);
var inst_13871 = figwheel.client.reload_file_state_QMARK_.call(null,inst_13867,opts);
var state_13908__$1 = state_13908;
if(cljs.core.truth_(inst_13871)){
var statearr_13930_13953 = state_13908__$1;
(statearr_13930_13953[(1)] = (11));

} else {
var statearr_13931_13954 = state_13908__$1;
(statearr_13931_13954[(1)] = (12));

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
});})(c__2151__auto___13936,ch))
;
return ((function (switch__1996__auto__,c__2151__auto___13936,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0 = (function (){
var statearr_13932 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13932[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__);

(statearr_13932[(1)] = (1));

return statearr_13932;
});
var figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1 = (function (state_13908){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_13908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e13933){if((e13933 instanceof Object)){
var ex__2000__auto__ = e13933;
var statearr_13934_13955 = state_13908;
(statearr_13934_13955[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13956 = state_13908;
state_13908 = G__13956;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__ = function(state_13908){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1.call(this,state_13908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__1997__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___13936,ch))
})();
var state__2153__auto__ = (function (){var statearr_13935 = f__2152__auto__.call(null);
(statearr_13935[(6)] = c__2151__auto___13936);

return statearr_13935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___13936,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__13957_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__13957_SHARP_));
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
var base_path_13959 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_13959){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e13958){if((e13958 instanceof Error)){
var e = e13958;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_13959], null));
} else {
var e = e13958;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_13959))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__13960){
var map__13961 = p__13960;
var map__13961__$1 = ((((!((map__13961 == null)))?(((((map__13961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13961):map__13961);
var opts = map__13961__$1;
var build_id = cljs.core.get.call(null,map__13961__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__13961,map__13961__$1,opts,build_id){
return (function (p__13963){
var vec__13964 = p__13963;
var seq__13965 = cljs.core.seq.call(null,vec__13964);
var first__13966 = cljs.core.first.call(null,seq__13965);
var seq__13965__$1 = cljs.core.next.call(null,seq__13965);
var map__13967 = first__13966;
var map__13967__$1 = ((((!((map__13967 == null)))?(((((map__13967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13967):map__13967);
var msg = map__13967__$1;
var msg_name = cljs.core.get.call(null,map__13967__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13965__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__13964,seq__13965,first__13966,seq__13965__$1,map__13967,map__13967__$1,msg,msg_name,_,map__13961,map__13961__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__13964,seq__13965,first__13966,seq__13965__$1,map__13967,map__13967__$1,msg,msg_name,_,map__13961,map__13961__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__13961,map__13961__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__13969){
var vec__13970 = p__13969;
var seq__13971 = cljs.core.seq.call(null,vec__13970);
var first__13972 = cljs.core.first.call(null,seq__13971);
var seq__13971__$1 = cljs.core.next.call(null,seq__13971);
var map__13973 = first__13972;
var map__13973__$1 = ((((!((map__13973 == null)))?(((((map__13973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13973):map__13973);
var msg = map__13973__$1;
var msg_name = cljs.core.get.call(null,map__13973__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13971__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__13975){
var map__13976 = p__13975;
var map__13976__$1 = ((((!((map__13976 == null)))?(((((map__13976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13976):map__13976);
var on_compile_warning = cljs.core.get.call(null,map__13976__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__13976__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__13976,map__13976__$1,on_compile_warning,on_compile_fail){
return (function (p__13978){
var vec__13979 = p__13978;
var seq__13980 = cljs.core.seq.call(null,vec__13979);
var first__13981 = cljs.core.first.call(null,seq__13980);
var seq__13980__$1 = cljs.core.next.call(null,seq__13980);
var map__13982 = first__13981;
var map__13982__$1 = ((((!((map__13982 == null)))?(((((map__13982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13982):map__13982);
var msg = map__13982__$1;
var msg_name = cljs.core.get.call(null,map__13982__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__13980__$1;
var pred__13984 = cljs.core._EQ_;
var expr__13985 = msg_name;
if(cljs.core.truth_(pred__13984.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__13985))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__13984.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13985))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__13976,map__13976__$1,on_compile_warning,on_compile_fail))
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
return (function (state_14074){
var state_val_14075 = (state_14074[(1)]);
if((state_val_14075 === (7))){
var inst_13994 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
if(cljs.core.truth_(inst_13994)){
var statearr_14076_14123 = state_14074__$1;
(statearr_14076_14123[(1)] = (8));

} else {
var statearr_14077_14124 = state_14074__$1;
(statearr_14077_14124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (20))){
var inst_14068 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14078_14125 = state_14074__$1;
(statearr_14078_14125[(2)] = inst_14068);

(statearr_14078_14125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (27))){
var inst_14064 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14079_14126 = state_14074__$1;
(statearr_14079_14126[(2)] = inst_14064);

(statearr_14079_14126[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (1))){
var inst_13987 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14074__$1 = state_14074;
if(cljs.core.truth_(inst_13987)){
var statearr_14080_14127 = state_14074__$1;
(statearr_14080_14127[(1)] = (2));

} else {
var statearr_14081_14128 = state_14074__$1;
(statearr_14081_14128[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (24))){
var inst_14066 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14082_14129 = state_14074__$1;
(statearr_14082_14129[(2)] = inst_14066);

(statearr_14082_14129[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (4))){
var inst_14072 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14074__$1,inst_14072);
} else {
if((state_val_14075 === (15))){
var inst_14070 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14083_14130 = state_14074__$1;
(statearr_14083_14130[(2)] = inst_14070);

(statearr_14083_14130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (21))){
var inst_14023 = (state_14074[(2)]);
var inst_14024 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14025 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14024);
var state_14074__$1 = (function (){var statearr_14084 = state_14074;
(statearr_14084[(7)] = inst_14023);

return statearr_14084;
})();
var statearr_14085_14131 = state_14074__$1;
(statearr_14085_14131[(2)] = inst_14025);

(statearr_14085_14131[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (31))){
var inst_14053 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14074__$1 = state_14074;
if(cljs.core.truth_(inst_14053)){
var statearr_14086_14132 = state_14074__$1;
(statearr_14086_14132[(1)] = (34));

} else {
var statearr_14087_14133 = state_14074__$1;
(statearr_14087_14133[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (32))){
var inst_14062 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14088_14134 = state_14074__$1;
(statearr_14088_14134[(2)] = inst_14062);

(statearr_14088_14134[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (33))){
var inst_14049 = (state_14074[(2)]);
var inst_14050 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14051 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14050);
var state_14074__$1 = (function (){var statearr_14089 = state_14074;
(statearr_14089[(8)] = inst_14049);

return statearr_14089;
})();
var statearr_14090_14135 = state_14074__$1;
(statearr_14090_14135[(2)] = inst_14051);

(statearr_14090_14135[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (13))){
var inst_14008 = figwheel.client.heads_up.clear.call(null);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14074__$1,(16),inst_14008);
} else {
if((state_val_14075 === (22))){
var inst_14029 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14030 = figwheel.client.heads_up.append_warning_message.call(null,inst_14029);
var state_14074__$1 = state_14074;
var statearr_14091_14136 = state_14074__$1;
(statearr_14091_14136[(2)] = inst_14030);

(statearr_14091_14136[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (36))){
var inst_14060 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14092_14137 = state_14074__$1;
(statearr_14092_14137[(2)] = inst_14060);

(statearr_14092_14137[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (29))){
var inst_14040 = (state_14074[(2)]);
var inst_14041 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14042 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14041);
var state_14074__$1 = (function (){var statearr_14093 = state_14074;
(statearr_14093[(9)] = inst_14040);

return statearr_14093;
})();
var statearr_14094_14138 = state_14074__$1;
(statearr_14094_14138[(2)] = inst_14042);

(statearr_14094_14138[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (6))){
var inst_13989 = (state_14074[(10)]);
var state_14074__$1 = state_14074;
var statearr_14095_14139 = state_14074__$1;
(statearr_14095_14139[(2)] = inst_13989);

(statearr_14095_14139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (28))){
var inst_14036 = (state_14074[(2)]);
var inst_14037 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14038 = figwheel.client.heads_up.display_warning.call(null,inst_14037);
var state_14074__$1 = (function (){var statearr_14096 = state_14074;
(statearr_14096[(11)] = inst_14036);

return statearr_14096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14074__$1,(29),inst_14038);
} else {
if((state_val_14075 === (25))){
var inst_14034 = figwheel.client.heads_up.clear.call(null);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14074__$1,(28),inst_14034);
} else {
if((state_val_14075 === (34))){
var inst_14055 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14074__$1,(37),inst_14055);
} else {
if((state_val_14075 === (17))){
var inst_14014 = (state_14074[(2)]);
var inst_14015 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14016 = figwheel.client.auto_jump_to_error.call(null,opts,inst_14015);
var state_14074__$1 = (function (){var statearr_14097 = state_14074;
(statearr_14097[(12)] = inst_14014);

return statearr_14097;
})();
var statearr_14098_14140 = state_14074__$1;
(statearr_14098_14140[(2)] = inst_14016);

(statearr_14098_14140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (3))){
var inst_14006 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14074__$1 = state_14074;
if(cljs.core.truth_(inst_14006)){
var statearr_14099_14141 = state_14074__$1;
(statearr_14099_14141[(1)] = (13));

} else {
var statearr_14100_14142 = state_14074__$1;
(statearr_14100_14142[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (12))){
var inst_14002 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14101_14143 = state_14074__$1;
(statearr_14101_14143[(2)] = inst_14002);

(statearr_14101_14143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (2))){
var inst_13989 = (state_14074[(10)]);
var inst_13989__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_14074__$1 = (function (){var statearr_14102 = state_14074;
(statearr_14102[(10)] = inst_13989__$1);

return statearr_14102;
})();
if(cljs.core.truth_(inst_13989__$1)){
var statearr_14103_14144 = state_14074__$1;
(statearr_14103_14144[(1)] = (5));

} else {
var statearr_14104_14145 = state_14074__$1;
(statearr_14104_14145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (23))){
var inst_14032 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14074__$1 = state_14074;
if(cljs.core.truth_(inst_14032)){
var statearr_14105_14146 = state_14074__$1;
(statearr_14105_14146[(1)] = (25));

} else {
var statearr_14106_14147 = state_14074__$1;
(statearr_14106_14147[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (35))){
var state_14074__$1 = state_14074;
var statearr_14107_14148 = state_14074__$1;
(statearr_14107_14148[(2)] = null);

(statearr_14107_14148[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (19))){
var inst_14027 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14074__$1 = state_14074;
if(cljs.core.truth_(inst_14027)){
var statearr_14108_14149 = state_14074__$1;
(statearr_14108_14149[(1)] = (22));

} else {
var statearr_14109_14150 = state_14074__$1;
(statearr_14109_14150[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (11))){
var inst_13998 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14110_14151 = state_14074__$1;
(statearr_14110_14151[(2)] = inst_13998);

(statearr_14110_14151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (9))){
var inst_14000 = figwheel.client.heads_up.clear.call(null);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14074__$1,(12),inst_14000);
} else {
if((state_val_14075 === (5))){
var inst_13991 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_14074__$1 = state_14074;
var statearr_14111_14152 = state_14074__$1;
(statearr_14111_14152[(2)] = inst_13991);

(statearr_14111_14152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (14))){
var inst_14018 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14074__$1 = state_14074;
if(cljs.core.truth_(inst_14018)){
var statearr_14112_14153 = state_14074__$1;
(statearr_14112_14153[(1)] = (18));

} else {
var statearr_14113_14154 = state_14074__$1;
(statearr_14113_14154[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (26))){
var inst_14044 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14074__$1 = state_14074;
if(cljs.core.truth_(inst_14044)){
var statearr_14114_14155 = state_14074__$1;
(statearr_14114_14155[(1)] = (30));

} else {
var statearr_14115_14156 = state_14074__$1;
(statearr_14115_14156[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (16))){
var inst_14010 = (state_14074[(2)]);
var inst_14011 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14012 = figwheel.client.heads_up.display_exception.call(null,inst_14011);
var state_14074__$1 = (function (){var statearr_14116 = state_14074;
(statearr_14116[(13)] = inst_14010);

return statearr_14116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14074__$1,(17),inst_14012);
} else {
if((state_val_14075 === (30))){
var inst_14046 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14047 = figwheel.client.heads_up.display_warning.call(null,inst_14046);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14074__$1,(33),inst_14047);
} else {
if((state_val_14075 === (10))){
var inst_14004 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14117_14157 = state_14074__$1;
(statearr_14117_14157[(2)] = inst_14004);

(statearr_14117_14157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (18))){
var inst_14020 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14021 = figwheel.client.heads_up.display_exception.call(null,inst_14020);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14074__$1,(21),inst_14021);
} else {
if((state_val_14075 === (37))){
var inst_14057 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14118_14158 = state_14074__$1;
(statearr_14118_14158[(2)] = inst_14057);

(statearr_14118_14158[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (8))){
var inst_13996 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14074__$1,(11),inst_13996);
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
var statearr_14119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14119[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__);

(statearr_14119[(1)] = (1));

return statearr_14119;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1 = (function (state_14074){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14120){if((e14120 instanceof Object)){
var ex__2000__auto__ = e14120;
var statearr_14121_14159 = state_14074;
(statearr_14121_14159[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14160 = state_14074;
state_14074 = G__14160;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__ = function(state_14074){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1.call(this,state_14074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,msg_hist,msg_names,msg))
})();
var state__2153__auto__ = (function (){var statearr_14122 = f__2152__auto__.call(null);
(statearr_14122[(6)] = c__2151__auto__);

return statearr_14122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto__,msg_hist,msg_names,msg))
);

return c__2151__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__2151__auto___14189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2151__auto___14189,ch){
return (function (){
var f__2152__auto__ = (function (){var switch__1996__auto__ = ((function (c__2151__auto___14189,ch){
return (function (state_14175){
var state_val_14176 = (state_14175[(1)]);
if((state_val_14176 === (1))){
var state_14175__$1 = state_14175;
var statearr_14177_14190 = state_14175__$1;
(statearr_14177_14190[(2)] = null);

(statearr_14177_14190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14176 === (2))){
var state_14175__$1 = state_14175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14175__$1,(4),ch);
} else {
if((state_val_14176 === (3))){
var inst_14173 = (state_14175[(2)]);
var state_14175__$1 = state_14175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14175__$1,inst_14173);
} else {
if((state_val_14176 === (4))){
var inst_14163 = (state_14175[(7)]);
var inst_14163__$1 = (state_14175[(2)]);
var state_14175__$1 = (function (){var statearr_14178 = state_14175;
(statearr_14178[(7)] = inst_14163__$1);

return statearr_14178;
})();
if(cljs.core.truth_(inst_14163__$1)){
var statearr_14179_14191 = state_14175__$1;
(statearr_14179_14191[(1)] = (5));

} else {
var statearr_14180_14192 = state_14175__$1;
(statearr_14180_14192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14176 === (5))){
var inst_14163 = (state_14175[(7)]);
var inst_14165 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14163);
var state_14175__$1 = state_14175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14175__$1,(8),inst_14165);
} else {
if((state_val_14176 === (6))){
var state_14175__$1 = state_14175;
var statearr_14181_14193 = state_14175__$1;
(statearr_14181_14193[(2)] = null);

(statearr_14181_14193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14176 === (7))){
var inst_14171 = (state_14175[(2)]);
var state_14175__$1 = state_14175;
var statearr_14182_14194 = state_14175__$1;
(statearr_14182_14194[(2)] = inst_14171);

(statearr_14182_14194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14176 === (8))){
var inst_14167 = (state_14175[(2)]);
var state_14175__$1 = (function (){var statearr_14183 = state_14175;
(statearr_14183[(8)] = inst_14167);

return statearr_14183;
})();
var statearr_14184_14195 = state_14175__$1;
(statearr_14184_14195[(2)] = null);

(statearr_14184_14195[(1)] = (2));


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
});})(c__2151__auto___14189,ch))
;
return ((function (switch__1996__auto__,c__2151__auto___14189,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0 = (function (){
var statearr_14185 = [null,null,null,null,null,null,null,null,null];
(statearr_14185[(0)] = figwheel$client$heads_up_plugin_$_state_machine__1997__auto__);

(statearr_14185[(1)] = (1));

return statearr_14185;
});
var figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1 = (function (state_14175){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14186){if((e14186 instanceof Object)){
var ex__2000__auto__ = e14186;
var statearr_14187_14196 = state_14175;
(statearr_14187_14196[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14197 = state_14175;
state_14175 = G__14197;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__ = function(state_14175){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1.call(this,state_14175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__1997__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__1997__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto___14189,ch))
})();
var state__2153__auto__ = (function (){var statearr_14188 = f__2152__auto__.call(null);
(statearr_14188[(6)] = c__2151__auto___14189);

return statearr_14188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2153__auto__);
});})(c__2151__auto___14189,ch))
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
return (function (state_14203){
var state_val_14204 = (state_14203[(1)]);
if((state_val_14204 === (1))){
var inst_14198 = cljs.core.async.timeout.call(null,(3000));
var state_14203__$1 = state_14203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14203__$1,(2),inst_14198);
} else {
if((state_val_14204 === (2))){
var inst_14200 = (state_14203[(2)]);
var inst_14201 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14203__$1 = (function (){var statearr_14205 = state_14203;
(statearr_14205[(7)] = inst_14200);

return statearr_14205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14203__$1,inst_14201);
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
var statearr_14206 = [null,null,null,null,null,null,null,null];
(statearr_14206[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__);

(statearr_14206[(1)] = (1));

return statearr_14206;
});
var figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1 = (function (state_14203){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14207){if((e14207 instanceof Object)){
var ex__2000__auto__ = e14207;
var statearr_14208_14210 = state_14203;
(statearr_14208_14210[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14211 = state_14203;
state_14203 = G__14211;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__ = function(state_14203){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1.call(this,state_14203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__1997__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__))
})();
var state__2153__auto__ = (function (){var statearr_14209 = f__2152__auto__.call(null);
(statearr_14209[(6)] = c__2151__auto__);

return statearr_14209;
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
return (function (state_14218){
var state_val_14219 = (state_14218[(1)]);
if((state_val_14219 === (1))){
var inst_14212 = cljs.core.async.timeout.call(null,(2000));
var state_14218__$1 = state_14218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14218__$1,(2),inst_14212);
} else {
if((state_val_14219 === (2))){
var inst_14214 = (state_14218[(2)]);
var inst_14215 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_14216 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_14215);
var state_14218__$1 = (function (){var statearr_14220 = state_14218;
(statearr_14220[(7)] = inst_14214);

return statearr_14220;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14218__$1,inst_14216);
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
var statearr_14221 = [null,null,null,null,null,null,null,null];
(statearr_14221[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__);

(statearr_14221[(1)] = (1));

return statearr_14221;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1 = (function (state_14218){
while(true){
var ret_value__1998__auto__ = (function (){try{while(true){
var result__1999__auto__ = switch__1996__auto__.call(null,state_14218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1999__auto__;
}
break;
}
}catch (e14222){if((e14222 instanceof Object)){
var ex__2000__auto__ = e14222;
var statearr_14223_14225 = state_14218;
(statearr_14223_14225[(5)] = ex__2000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14226 = state_14218;
state_14218 = G__14226;
continue;
} else {
return ret_value__1998__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__ = function(state_14218){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1.call(this,state_14218);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__1997__auto__;
})()
;})(switch__1996__auto__,c__2151__auto__,figwheel_version,temp__4657__auto__))
})();
var state__2153__auto__ = (function (){var statearr_14224 = f__2152__auto__.call(null);
(statearr_14224[(6)] = c__2151__auto__);

return statearr_14224;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__14227){
var map__14228 = p__14227;
var map__14228__$1 = ((((!((map__14228 == null)))?(((((map__14228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14228):map__14228);
var file = cljs.core.get.call(null,map__14228__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__14228__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__14228__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__14230 = "";
var G__14230__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14230),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__14230);
var G__14230__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14230__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__14230__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14230__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__14230__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__14231){
var map__14232 = p__14231;
var map__14232__$1 = ((((!((map__14232 == null)))?(((((map__14232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14232):map__14232);
var ed = map__14232__$1;
var formatted_exception = cljs.core.get.call(null,map__14232__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__14232__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__14232__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__14234_14238 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14235_14239 = null;
var count__14236_14240 = (0);
var i__14237_14241 = (0);
while(true){
if((i__14237_14241 < count__14236_14240)){
var msg_14242 = cljs.core._nth.call(null,chunk__14235_14239,i__14237_14241);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14242);


var G__14243 = seq__14234_14238;
var G__14244 = chunk__14235_14239;
var G__14245 = count__14236_14240;
var G__14246 = (i__14237_14241 + (1));
seq__14234_14238 = G__14243;
chunk__14235_14239 = G__14244;
count__14236_14240 = G__14245;
i__14237_14241 = G__14246;
continue;
} else {
var temp__4657__auto___14247 = cljs.core.seq.call(null,seq__14234_14238);
if(temp__4657__auto___14247){
var seq__14234_14248__$1 = temp__4657__auto___14247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14234_14248__$1)){
var c__4317__auto___14249 = cljs.core.chunk_first.call(null,seq__14234_14248__$1);
var G__14250 = cljs.core.chunk_rest.call(null,seq__14234_14248__$1);
var G__14251 = c__4317__auto___14249;
var G__14252 = cljs.core.count.call(null,c__4317__auto___14249);
var G__14253 = (0);
seq__14234_14238 = G__14250;
chunk__14235_14239 = G__14251;
count__14236_14240 = G__14252;
i__14237_14241 = G__14253;
continue;
} else {
var msg_14254 = cljs.core.first.call(null,seq__14234_14248__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14254);


var G__14255 = cljs.core.next.call(null,seq__14234_14248__$1);
var G__14256 = null;
var G__14257 = (0);
var G__14258 = (0);
seq__14234_14238 = G__14255;
chunk__14235_14239 = G__14256;
count__14236_14240 = G__14257;
i__14237_14241 = G__14258;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__14259){
var map__14260 = p__14259;
var map__14260__$1 = ((((!((map__14260 == null)))?(((((map__14260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14260):map__14260);
var w = map__14260__$1;
var message = cljs.core.get.call(null,map__14260__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/dev/js/out_front/buddylistcljs_front_chat/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/dev/js/out_front/buddylistcljs_front_chat/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__14262 = cljs.core.seq.call(null,plugins);
var chunk__14263 = null;
var count__14264 = (0);
var i__14265 = (0);
while(true){
if((i__14265 < count__14264)){
var vec__14266 = cljs.core._nth.call(null,chunk__14263,i__14265);
var k = cljs.core.nth.call(null,vec__14266,(0),null);
var plugin = cljs.core.nth.call(null,vec__14266,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14272 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14262,chunk__14263,count__14264,i__14265,pl_14272,vec__14266,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14272.call(null,msg_hist);
});})(seq__14262,chunk__14263,count__14264,i__14265,pl_14272,vec__14266,k,plugin))
);
} else {
}


var G__14273 = seq__14262;
var G__14274 = chunk__14263;
var G__14275 = count__14264;
var G__14276 = (i__14265 + (1));
seq__14262 = G__14273;
chunk__14263 = G__14274;
count__14264 = G__14275;
i__14265 = G__14276;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14262);
if(temp__4657__auto__){
var seq__14262__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14262__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__14262__$1);
var G__14277 = cljs.core.chunk_rest.call(null,seq__14262__$1);
var G__14278 = c__4317__auto__;
var G__14279 = cljs.core.count.call(null,c__4317__auto__);
var G__14280 = (0);
seq__14262 = G__14277;
chunk__14263 = G__14278;
count__14264 = G__14279;
i__14265 = G__14280;
continue;
} else {
var vec__14269 = cljs.core.first.call(null,seq__14262__$1);
var k = cljs.core.nth.call(null,vec__14269,(0),null);
var plugin = cljs.core.nth.call(null,vec__14269,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14281 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14262,chunk__14263,count__14264,i__14265,pl_14281,vec__14269,k,plugin,seq__14262__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14281.call(null,msg_hist);
});})(seq__14262,chunk__14263,count__14264,i__14265,pl_14281,vec__14269,k,plugin,seq__14262__$1,temp__4657__auto__))
);
} else {
}


var G__14282 = cljs.core.next.call(null,seq__14262__$1);
var G__14283 = null;
var G__14284 = (0);
var G__14285 = (0);
seq__14262 = G__14282;
chunk__14263 = G__14283;
count__14264 = G__14284;
i__14265 = G__14285;
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
var G__14287 = arguments.length;
switch (G__14287) {
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

var seq__14288_14293 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__14289_14294 = null;
var count__14290_14295 = (0);
var i__14291_14296 = (0);
while(true){
if((i__14291_14296 < count__14290_14295)){
var msg_14297 = cljs.core._nth.call(null,chunk__14289_14294,i__14291_14296);
figwheel.client.socket.handle_incoming_message.call(null,msg_14297);


var G__14298 = seq__14288_14293;
var G__14299 = chunk__14289_14294;
var G__14300 = count__14290_14295;
var G__14301 = (i__14291_14296 + (1));
seq__14288_14293 = G__14298;
chunk__14289_14294 = G__14299;
count__14290_14295 = G__14300;
i__14291_14296 = G__14301;
continue;
} else {
var temp__4657__auto___14302 = cljs.core.seq.call(null,seq__14288_14293);
if(temp__4657__auto___14302){
var seq__14288_14303__$1 = temp__4657__auto___14302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14288_14303__$1)){
var c__4317__auto___14304 = cljs.core.chunk_first.call(null,seq__14288_14303__$1);
var G__14305 = cljs.core.chunk_rest.call(null,seq__14288_14303__$1);
var G__14306 = c__4317__auto___14304;
var G__14307 = cljs.core.count.call(null,c__4317__auto___14304);
var G__14308 = (0);
seq__14288_14293 = G__14305;
chunk__14289_14294 = G__14306;
count__14290_14295 = G__14307;
i__14291_14296 = G__14308;
continue;
} else {
var msg_14309 = cljs.core.first.call(null,seq__14288_14303__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_14309);


var G__14310 = cljs.core.next.call(null,seq__14288_14303__$1);
var G__14311 = null;
var G__14312 = (0);
var G__14313 = (0);
seq__14288_14293 = G__14310;
chunk__14289_14294 = G__14311;
count__14290_14295 = G__14312;
i__14291_14296 = G__14313;
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
var len__4497__auto___14318 = arguments.length;
var i__4498__auto___14319 = (0);
while(true){
if((i__4498__auto___14319 < len__4497__auto___14318)){
args__4500__auto__.push((arguments[i__4498__auto___14319]));

var G__14320 = (i__4498__auto___14319 + (1));
i__4498__auto___14319 = G__14320;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__14315){
var map__14316 = p__14315;
var map__14316__$1 = ((((!((map__14316 == null)))?(((((map__14316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14316):map__14316);
var opts = map__14316__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq14314){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14314));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e14321){if((e14321 instanceof Error)){
var e = e14321;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e14321;

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
return (function (p__14322){
var map__14323 = p__14322;
var map__14323__$1 = ((((!((map__14323 == null)))?(((((map__14323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14323):map__14323);
var msg_name = cljs.core.get.call(null,map__14323__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
