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
var G__8896 = arguments.length;
switch (G__8896) {
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
var len__4497__auto___8899 = arguments.length;
var i__4498__auto___8900 = (0);
while(true){
if((i__4498__auto___8900 < len__4497__auto___8899)){
args__4500__auto__.push((arguments[i__4498__auto___8900]));

var G__8901 = (i__4498__auto___8900 + (1));
i__4498__auto___8900 = G__8901;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq8898){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8898));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___8903 = arguments.length;
var i__4498__auto___8904 = (0);
while(true){
if((i__4498__auto___8904 < len__4497__auto___8903)){
args__4500__auto__.push((arguments[i__4498__auto___8904]));

var G__8905 = (i__4498__auto___8904 + (1));
i__4498__auto___8904 = G__8905;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq8902){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8902));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__8906){
var map__8907 = p__8906;
var map__8907__$1 = ((((!((map__8907 == null)))?(((((map__8907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8907):map__8907);
var message = cljs.core.get.call(null,map__8907__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__8907__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__2950__auto___8986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto___8986,ch){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto___8986,ch){
return (function (state_8958){
var state_val_8959 = (state_8958[(1)]);
if((state_val_8959 === (7))){
var inst_8954 = (state_8958[(2)]);
var state_8958__$1 = state_8958;
var statearr_8960_8987 = state_8958__$1;
(statearr_8960_8987[(2)] = inst_8954);

(statearr_8960_8987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (1))){
var state_8958__$1 = state_8958;
var statearr_8961_8988 = state_8958__$1;
(statearr_8961_8988[(2)] = null);

(statearr_8961_8988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (4))){
var inst_8911 = (state_8958[(7)]);
var inst_8911__$1 = (state_8958[(2)]);
var state_8958__$1 = (function (){var statearr_8962 = state_8958;
(statearr_8962[(7)] = inst_8911__$1);

return statearr_8962;
})();
if(cljs.core.truth_(inst_8911__$1)){
var statearr_8963_8989 = state_8958__$1;
(statearr_8963_8989[(1)] = (5));

} else {
var statearr_8964_8990 = state_8958__$1;
(statearr_8964_8990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (15))){
var inst_8918 = (state_8958[(8)]);
var inst_8933 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_8918);
var inst_8934 = cljs.core.first.call(null,inst_8933);
var inst_8935 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_8934);
var inst_8936 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_8935)].join('');
var inst_8937 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_8936);
var state_8958__$1 = state_8958;
var statearr_8965_8991 = state_8958__$1;
(statearr_8965_8991[(2)] = inst_8937);

(statearr_8965_8991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (13))){
var inst_8942 = (state_8958[(2)]);
var state_8958__$1 = state_8958;
var statearr_8966_8992 = state_8958__$1;
(statearr_8966_8992[(2)] = inst_8942);

(statearr_8966_8992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (6))){
var state_8958__$1 = state_8958;
var statearr_8967_8993 = state_8958__$1;
(statearr_8967_8993[(2)] = null);

(statearr_8967_8993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (17))){
var inst_8940 = (state_8958[(2)]);
var state_8958__$1 = state_8958;
var statearr_8968_8994 = state_8958__$1;
(statearr_8968_8994[(2)] = inst_8940);

(statearr_8968_8994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (3))){
var inst_8956 = (state_8958[(2)]);
var state_8958__$1 = state_8958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8958__$1,inst_8956);
} else {
if((state_val_8959 === (12))){
var inst_8917 = (state_8958[(9)]);
var inst_8931 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_8917,opts);
var state_8958__$1 = state_8958;
if(cljs.core.truth_(inst_8931)){
var statearr_8969_8995 = state_8958__$1;
(statearr_8969_8995[(1)] = (15));

} else {
var statearr_8970_8996 = state_8958__$1;
(statearr_8970_8996[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (2))){
var state_8958__$1 = state_8958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8958__$1,(4),ch);
} else {
if((state_val_8959 === (11))){
var inst_8918 = (state_8958[(8)]);
var inst_8923 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8924 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_8918);
var inst_8925 = cljs.core.async.timeout.call(null,(1000));
var inst_8926 = [inst_8924,inst_8925];
var inst_8927 = (new cljs.core.PersistentVector(null,2,(5),inst_8923,inst_8926,null));
var state_8958__$1 = state_8958;
return cljs.core.async.ioc_alts_BANG_.call(null,state_8958__$1,(14),inst_8927);
} else {
if((state_val_8959 === (9))){
var inst_8918 = (state_8958[(8)]);
var inst_8944 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_8945 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_8918);
var inst_8946 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_8945);
var inst_8947 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_8946)].join('');
var inst_8948 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_8947);
var state_8958__$1 = (function (){var statearr_8971 = state_8958;
(statearr_8971[(10)] = inst_8944);

return statearr_8971;
})();
var statearr_8972_8997 = state_8958__$1;
(statearr_8972_8997[(2)] = inst_8948);

(statearr_8972_8997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (5))){
var inst_8911 = (state_8958[(7)]);
var inst_8913 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_8914 = (new cljs.core.PersistentArrayMap(null,2,inst_8913,null));
var inst_8915 = (new cljs.core.PersistentHashSet(null,inst_8914,null));
var inst_8916 = figwheel.client.focus_msgs.call(null,inst_8915,inst_8911);
var inst_8917 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_8916);
var inst_8918 = cljs.core.first.call(null,inst_8916);
var inst_8919 = figwheel.client.autoload_QMARK_.call(null);
var state_8958__$1 = (function (){var statearr_8973 = state_8958;
(statearr_8973[(9)] = inst_8917);

(statearr_8973[(8)] = inst_8918);

return statearr_8973;
})();
if(cljs.core.truth_(inst_8919)){
var statearr_8974_8998 = state_8958__$1;
(statearr_8974_8998[(1)] = (8));

} else {
var statearr_8975_8999 = state_8958__$1;
(statearr_8975_8999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (14))){
var inst_8929 = (state_8958[(2)]);
var state_8958__$1 = state_8958;
var statearr_8976_9000 = state_8958__$1;
(statearr_8976_9000[(2)] = inst_8929);

(statearr_8976_9000[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (16))){
var state_8958__$1 = state_8958;
var statearr_8977_9001 = state_8958__$1;
(statearr_8977_9001[(2)] = null);

(statearr_8977_9001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (10))){
var inst_8950 = (state_8958[(2)]);
var state_8958__$1 = (function (){var statearr_8978 = state_8958;
(statearr_8978[(11)] = inst_8950);

return statearr_8978;
})();
var statearr_8979_9002 = state_8958__$1;
(statearr_8979_9002[(2)] = null);

(statearr_8979_9002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (8))){
var inst_8917 = (state_8958[(9)]);
var inst_8921 = figwheel.client.reload_file_state_QMARK_.call(null,inst_8917,opts);
var state_8958__$1 = state_8958;
if(cljs.core.truth_(inst_8921)){
var statearr_8980_9003 = state_8958__$1;
(statearr_8980_9003[(1)] = (11));

} else {
var statearr_8981_9004 = state_8958__$1;
(statearr_8981_9004[(1)] = (12));

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
});})(c__2950__auto___8986,ch))
;
return ((function (switch__2906__auto__,c__2950__auto___8986,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__2907__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__2907__auto____0 = (function (){
var statearr_8982 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8982[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__2907__auto__);

(statearr_8982[(1)] = (1));

return statearr_8982;
});
var figwheel$client$file_reloader_plugin_$_state_machine__2907__auto____1 = (function (state_8958){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_8958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e8983){if((e8983 instanceof Object)){
var ex__2910__auto__ = e8983;
var statearr_8984_9005 = state_8958;
(statearr_8984_9005[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9006 = state_8958;
state_8958 = G__9006;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__2907__auto__ = function(state_8958){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__2907__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__2907__auto____1.call(this,state_8958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__2907__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__2907__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto___8986,ch))
})();
var state__2952__auto__ = (function (){var statearr_8985 = f__2951__auto__.call(null);
(statearr_8985[(6)] = c__2950__auto___8986);

return statearr_8985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto___8986,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__9007_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__9007_SHARP_));
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
var base_path_9009 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_9009){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e9008){if((e9008 instanceof Error)){
var e = e9008;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_9009], null));
} else {
var e = e9008;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_9009))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__9010){
var map__9011 = p__9010;
var map__9011__$1 = ((((!((map__9011 == null)))?(((((map__9011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9011):map__9011);
var opts = map__9011__$1;
var build_id = cljs.core.get.call(null,map__9011__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__9011,map__9011__$1,opts,build_id){
return (function (p__9013){
var vec__9014 = p__9013;
var seq__9015 = cljs.core.seq.call(null,vec__9014);
var first__9016 = cljs.core.first.call(null,seq__9015);
var seq__9015__$1 = cljs.core.next.call(null,seq__9015);
var map__9017 = first__9016;
var map__9017__$1 = ((((!((map__9017 == null)))?(((((map__9017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9017):map__9017);
var msg = map__9017__$1;
var msg_name = cljs.core.get.call(null,map__9017__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__9015__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__9014,seq__9015,first__9016,seq__9015__$1,map__9017,map__9017__$1,msg,msg_name,_,map__9011,map__9011__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__9014,seq__9015,first__9016,seq__9015__$1,map__9017,map__9017__$1,msg,msg_name,_,map__9011,map__9011__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__9011,map__9011__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__9019){
var vec__9020 = p__9019;
var seq__9021 = cljs.core.seq.call(null,vec__9020);
var first__9022 = cljs.core.first.call(null,seq__9021);
var seq__9021__$1 = cljs.core.next.call(null,seq__9021);
var map__9023 = first__9022;
var map__9023__$1 = ((((!((map__9023 == null)))?(((((map__9023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9023):map__9023);
var msg = map__9023__$1;
var msg_name = cljs.core.get.call(null,map__9023__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__9021__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__9025){
var map__9026 = p__9025;
var map__9026__$1 = ((((!((map__9026 == null)))?(((((map__9026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9026):map__9026);
var on_compile_warning = cljs.core.get.call(null,map__9026__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__9026__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__9026,map__9026__$1,on_compile_warning,on_compile_fail){
return (function (p__9028){
var vec__9029 = p__9028;
var seq__9030 = cljs.core.seq.call(null,vec__9029);
var first__9031 = cljs.core.first.call(null,seq__9030);
var seq__9030__$1 = cljs.core.next.call(null,seq__9030);
var map__9032 = first__9031;
var map__9032__$1 = ((((!((map__9032 == null)))?(((((map__9032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9032):map__9032);
var msg = map__9032__$1;
var msg_name = cljs.core.get.call(null,map__9032__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__9030__$1;
var pred__9034 = cljs.core._EQ_;
var expr__9035 = msg_name;
if(cljs.core.truth_(pred__9034.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__9035))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__9034.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__9035))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__9026,map__9026__$1,on_compile_warning,on_compile_fail))
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
var c__2950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto__,msg_hist,msg_names,msg){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto__,msg_hist,msg_names,msg){
return (function (state_9124){
var state_val_9125 = (state_9124[(1)]);
if((state_val_9125 === (7))){
var inst_9044 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
if(cljs.core.truth_(inst_9044)){
var statearr_9126_9173 = state_9124__$1;
(statearr_9126_9173[(1)] = (8));

} else {
var statearr_9127_9174 = state_9124__$1;
(statearr_9127_9174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (20))){
var inst_9118 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
var statearr_9128_9175 = state_9124__$1;
(statearr_9128_9175[(2)] = inst_9118);

(statearr_9128_9175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (27))){
var inst_9114 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
var statearr_9129_9176 = state_9124__$1;
(statearr_9129_9176[(2)] = inst_9114);

(statearr_9129_9176[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (1))){
var inst_9037 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_9124__$1 = state_9124;
if(cljs.core.truth_(inst_9037)){
var statearr_9130_9177 = state_9124__$1;
(statearr_9130_9177[(1)] = (2));

} else {
var statearr_9131_9178 = state_9124__$1;
(statearr_9131_9178[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (24))){
var inst_9116 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
var statearr_9132_9179 = state_9124__$1;
(statearr_9132_9179[(2)] = inst_9116);

(statearr_9132_9179[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (4))){
var inst_9122 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9124__$1,inst_9122);
} else {
if((state_val_9125 === (15))){
var inst_9120 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
var statearr_9133_9180 = state_9124__$1;
(statearr_9133_9180[(2)] = inst_9120);

(statearr_9133_9180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (21))){
var inst_9073 = (state_9124[(2)]);
var inst_9074 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_9075 = figwheel.client.auto_jump_to_error.call(null,opts,inst_9074);
var state_9124__$1 = (function (){var statearr_9134 = state_9124;
(statearr_9134[(7)] = inst_9073);

return statearr_9134;
})();
var statearr_9135_9181 = state_9124__$1;
(statearr_9135_9181[(2)] = inst_9075);

(statearr_9135_9181[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (31))){
var inst_9103 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_9124__$1 = state_9124;
if(cljs.core.truth_(inst_9103)){
var statearr_9136_9182 = state_9124__$1;
(statearr_9136_9182[(1)] = (34));

} else {
var statearr_9137_9183 = state_9124__$1;
(statearr_9137_9183[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (32))){
var inst_9112 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
var statearr_9138_9184 = state_9124__$1;
(statearr_9138_9184[(2)] = inst_9112);

(statearr_9138_9184[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (33))){
var inst_9099 = (state_9124[(2)]);
var inst_9100 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_9101 = figwheel.client.auto_jump_to_error.call(null,opts,inst_9100);
var state_9124__$1 = (function (){var statearr_9139 = state_9124;
(statearr_9139[(8)] = inst_9099);

return statearr_9139;
})();
var statearr_9140_9185 = state_9124__$1;
(statearr_9140_9185[(2)] = inst_9101);

(statearr_9140_9185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (13))){
var inst_9058 = figwheel.client.heads_up.clear.call(null);
var state_9124__$1 = state_9124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9124__$1,(16),inst_9058);
} else {
if((state_val_9125 === (22))){
var inst_9079 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_9080 = figwheel.client.heads_up.append_warning_message.call(null,inst_9079);
var state_9124__$1 = state_9124;
var statearr_9141_9186 = state_9124__$1;
(statearr_9141_9186[(2)] = inst_9080);

(statearr_9141_9186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (36))){
var inst_9110 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
var statearr_9142_9187 = state_9124__$1;
(statearr_9142_9187[(2)] = inst_9110);

(statearr_9142_9187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (29))){
var inst_9090 = (state_9124[(2)]);
var inst_9091 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_9092 = figwheel.client.auto_jump_to_error.call(null,opts,inst_9091);
var state_9124__$1 = (function (){var statearr_9143 = state_9124;
(statearr_9143[(9)] = inst_9090);

return statearr_9143;
})();
var statearr_9144_9188 = state_9124__$1;
(statearr_9144_9188[(2)] = inst_9092);

(statearr_9144_9188[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (6))){
var inst_9039 = (state_9124[(10)]);
var state_9124__$1 = state_9124;
var statearr_9145_9189 = state_9124__$1;
(statearr_9145_9189[(2)] = inst_9039);

(statearr_9145_9189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (28))){
var inst_9086 = (state_9124[(2)]);
var inst_9087 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_9088 = figwheel.client.heads_up.display_warning.call(null,inst_9087);
var state_9124__$1 = (function (){var statearr_9146 = state_9124;
(statearr_9146[(11)] = inst_9086);

return statearr_9146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9124__$1,(29),inst_9088);
} else {
if((state_val_9125 === (25))){
var inst_9084 = figwheel.client.heads_up.clear.call(null);
var state_9124__$1 = state_9124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9124__$1,(28),inst_9084);
} else {
if((state_val_9125 === (34))){
var inst_9105 = figwheel.client.heads_up.flash_loaded.call(null);
var state_9124__$1 = state_9124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9124__$1,(37),inst_9105);
} else {
if((state_val_9125 === (17))){
var inst_9064 = (state_9124[(2)]);
var inst_9065 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_9066 = figwheel.client.auto_jump_to_error.call(null,opts,inst_9065);
var state_9124__$1 = (function (){var statearr_9147 = state_9124;
(statearr_9147[(12)] = inst_9064);

return statearr_9147;
})();
var statearr_9148_9190 = state_9124__$1;
(statearr_9148_9190[(2)] = inst_9066);

(statearr_9148_9190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (3))){
var inst_9056 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_9124__$1 = state_9124;
if(cljs.core.truth_(inst_9056)){
var statearr_9149_9191 = state_9124__$1;
(statearr_9149_9191[(1)] = (13));

} else {
var statearr_9150_9192 = state_9124__$1;
(statearr_9150_9192[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (12))){
var inst_9052 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
var statearr_9151_9193 = state_9124__$1;
(statearr_9151_9193[(2)] = inst_9052);

(statearr_9151_9193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (2))){
var inst_9039 = (state_9124[(10)]);
var inst_9039__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_9124__$1 = (function (){var statearr_9152 = state_9124;
(statearr_9152[(10)] = inst_9039__$1);

return statearr_9152;
})();
if(cljs.core.truth_(inst_9039__$1)){
var statearr_9153_9194 = state_9124__$1;
(statearr_9153_9194[(1)] = (5));

} else {
var statearr_9154_9195 = state_9124__$1;
(statearr_9154_9195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (23))){
var inst_9082 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_9124__$1 = state_9124;
if(cljs.core.truth_(inst_9082)){
var statearr_9155_9196 = state_9124__$1;
(statearr_9155_9196[(1)] = (25));

} else {
var statearr_9156_9197 = state_9124__$1;
(statearr_9156_9197[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (35))){
var state_9124__$1 = state_9124;
var statearr_9157_9198 = state_9124__$1;
(statearr_9157_9198[(2)] = null);

(statearr_9157_9198[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (19))){
var inst_9077 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_9124__$1 = state_9124;
if(cljs.core.truth_(inst_9077)){
var statearr_9158_9199 = state_9124__$1;
(statearr_9158_9199[(1)] = (22));

} else {
var statearr_9159_9200 = state_9124__$1;
(statearr_9159_9200[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (11))){
var inst_9048 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
var statearr_9160_9201 = state_9124__$1;
(statearr_9160_9201[(2)] = inst_9048);

(statearr_9160_9201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (9))){
var inst_9050 = figwheel.client.heads_up.clear.call(null);
var state_9124__$1 = state_9124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9124__$1,(12),inst_9050);
} else {
if((state_val_9125 === (5))){
var inst_9041 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_9124__$1 = state_9124;
var statearr_9161_9202 = state_9124__$1;
(statearr_9161_9202[(2)] = inst_9041);

(statearr_9161_9202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (14))){
var inst_9068 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_9124__$1 = state_9124;
if(cljs.core.truth_(inst_9068)){
var statearr_9162_9203 = state_9124__$1;
(statearr_9162_9203[(1)] = (18));

} else {
var statearr_9163_9204 = state_9124__$1;
(statearr_9163_9204[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (26))){
var inst_9094 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_9124__$1 = state_9124;
if(cljs.core.truth_(inst_9094)){
var statearr_9164_9205 = state_9124__$1;
(statearr_9164_9205[(1)] = (30));

} else {
var statearr_9165_9206 = state_9124__$1;
(statearr_9165_9206[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (16))){
var inst_9060 = (state_9124[(2)]);
var inst_9061 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_9062 = figwheel.client.heads_up.display_exception.call(null,inst_9061);
var state_9124__$1 = (function (){var statearr_9166 = state_9124;
(statearr_9166[(13)] = inst_9060);

return statearr_9166;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9124__$1,(17),inst_9062);
} else {
if((state_val_9125 === (30))){
var inst_9096 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_9097 = figwheel.client.heads_up.display_warning.call(null,inst_9096);
var state_9124__$1 = state_9124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9124__$1,(33),inst_9097);
} else {
if((state_val_9125 === (10))){
var inst_9054 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
var statearr_9167_9207 = state_9124__$1;
(statearr_9167_9207[(2)] = inst_9054);

(statearr_9167_9207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (18))){
var inst_9070 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_9071 = figwheel.client.heads_up.display_exception.call(null,inst_9070);
var state_9124__$1 = state_9124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9124__$1,(21),inst_9071);
} else {
if((state_val_9125 === (37))){
var inst_9107 = (state_9124[(2)]);
var state_9124__$1 = state_9124;
var statearr_9168_9208 = state_9124__$1;
(statearr_9168_9208[(2)] = inst_9107);

(statearr_9168_9208[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9125 === (8))){
var inst_9046 = figwheel.client.heads_up.flash_loaded.call(null);
var state_9124__$1 = state_9124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9124__$1,(11),inst_9046);
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
});})(c__2950__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__2906__auto__,c__2950__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto____0 = (function (){
var statearr_9169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9169[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto__);

(statearr_9169[(1)] = (1));

return statearr_9169;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto____1 = (function (state_9124){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_9124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e9170){if((e9170 instanceof Object)){
var ex__2910__auto__ = e9170;
var statearr_9171_9209 = state_9124;
(statearr_9171_9209[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9210 = state_9124;
state_9124 = G__9210;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto__ = function(state_9124){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto____1.call(this,state_9124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto__,msg_hist,msg_names,msg))
})();
var state__2952__auto__ = (function (){var statearr_9172 = f__2951__auto__.call(null);
(statearr_9172[(6)] = c__2950__auto__);

return statearr_9172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto__,msg_hist,msg_names,msg))
);

return c__2950__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__2950__auto___9239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto___9239,ch){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto___9239,ch){
return (function (state_9225){
var state_val_9226 = (state_9225[(1)]);
if((state_val_9226 === (1))){
var state_9225__$1 = state_9225;
var statearr_9227_9240 = state_9225__$1;
(statearr_9227_9240[(2)] = null);

(statearr_9227_9240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9226 === (2))){
var state_9225__$1 = state_9225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9225__$1,(4),ch);
} else {
if((state_val_9226 === (3))){
var inst_9223 = (state_9225[(2)]);
var state_9225__$1 = state_9225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9225__$1,inst_9223);
} else {
if((state_val_9226 === (4))){
var inst_9213 = (state_9225[(7)]);
var inst_9213__$1 = (state_9225[(2)]);
var state_9225__$1 = (function (){var statearr_9228 = state_9225;
(statearr_9228[(7)] = inst_9213__$1);

return statearr_9228;
})();
if(cljs.core.truth_(inst_9213__$1)){
var statearr_9229_9241 = state_9225__$1;
(statearr_9229_9241[(1)] = (5));

} else {
var statearr_9230_9242 = state_9225__$1;
(statearr_9230_9242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9226 === (5))){
var inst_9213 = (state_9225[(7)]);
var inst_9215 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_9213);
var state_9225__$1 = state_9225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9225__$1,(8),inst_9215);
} else {
if((state_val_9226 === (6))){
var state_9225__$1 = state_9225;
var statearr_9231_9243 = state_9225__$1;
(statearr_9231_9243[(2)] = null);

(statearr_9231_9243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9226 === (7))){
var inst_9221 = (state_9225[(2)]);
var state_9225__$1 = state_9225;
var statearr_9232_9244 = state_9225__$1;
(statearr_9232_9244[(2)] = inst_9221);

(statearr_9232_9244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9226 === (8))){
var inst_9217 = (state_9225[(2)]);
var state_9225__$1 = (function (){var statearr_9233 = state_9225;
(statearr_9233[(8)] = inst_9217);

return statearr_9233;
})();
var statearr_9234_9245 = state_9225__$1;
(statearr_9234_9245[(2)] = null);

(statearr_9234_9245[(1)] = (2));


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
});})(c__2950__auto___9239,ch))
;
return ((function (switch__2906__auto__,c__2950__auto___9239,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__2907__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__2907__auto____0 = (function (){
var statearr_9235 = [null,null,null,null,null,null,null,null,null];
(statearr_9235[(0)] = figwheel$client$heads_up_plugin_$_state_machine__2907__auto__);

(statearr_9235[(1)] = (1));

return statearr_9235;
});
var figwheel$client$heads_up_plugin_$_state_machine__2907__auto____1 = (function (state_9225){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_9225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e9236){if((e9236 instanceof Object)){
var ex__2910__auto__ = e9236;
var statearr_9237_9246 = state_9225;
(statearr_9237_9246[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9247 = state_9225;
state_9225 = G__9247;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__2907__auto__ = function(state_9225){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__2907__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__2907__auto____1.call(this,state_9225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__2907__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__2907__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto___9239,ch))
})();
var state__2952__auto__ = (function (){var statearr_9238 = f__2951__auto__.call(null);
(statearr_9238[(6)] = c__2950__auto___9239);

return statearr_9238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto___9239,ch))
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
var c__2950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto__){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto__){
return (function (state_9253){
var state_val_9254 = (state_9253[(1)]);
if((state_val_9254 === (1))){
var inst_9248 = cljs.core.async.timeout.call(null,(3000));
var state_9253__$1 = state_9253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9253__$1,(2),inst_9248);
} else {
if((state_val_9254 === (2))){
var inst_9250 = (state_9253[(2)]);
var inst_9251 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_9253__$1 = (function (){var statearr_9255 = state_9253;
(statearr_9255[(7)] = inst_9250);

return statearr_9255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9253__$1,inst_9251);
} else {
return null;
}
}
});})(c__2950__auto__))
;
return ((function (switch__2906__auto__,c__2950__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__2907__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__2907__auto____0 = (function (){
var statearr_9256 = [null,null,null,null,null,null,null,null];
(statearr_9256[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__2907__auto__);

(statearr_9256[(1)] = (1));

return statearr_9256;
});
var figwheel$client$enforce_project_plugin_$_state_machine__2907__auto____1 = (function (state_9253){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_9253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e9257){if((e9257 instanceof Object)){
var ex__2910__auto__ = e9257;
var statearr_9258_9260 = state_9253;
(statearr_9258_9260[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9261 = state_9253;
state_9253 = G__9261;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__2907__auto__ = function(state_9253){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__2907__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__2907__auto____1.call(this,state_9253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__2907__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__2907__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto__))
})();
var state__2952__auto__ = (function (){var statearr_9259 = f__2951__auto__.call(null);
(statearr_9259[(6)] = c__2950__auto__);

return statearr_9259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto__))
);

return c__2950__auto__;
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
var c__2950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto__,figwheel_version,temp__4657__auto__){
return (function (state_9268){
var state_val_9269 = (state_9268[(1)]);
if((state_val_9269 === (1))){
var inst_9262 = cljs.core.async.timeout.call(null,(2000));
var state_9268__$1 = state_9268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9268__$1,(2),inst_9262);
} else {
if((state_val_9269 === (2))){
var inst_9264 = (state_9268[(2)]);
var inst_9265 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_9266 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_9265);
var state_9268__$1 = (function (){var statearr_9270 = state_9268;
(statearr_9270[(7)] = inst_9264);

return statearr_9270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9268__$1,inst_9266);
} else {
return null;
}
}
});})(c__2950__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__2906__auto__,c__2950__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto____0 = (function (){
var statearr_9271 = [null,null,null,null,null,null,null,null];
(statearr_9271[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto__);

(statearr_9271[(1)] = (1));

return statearr_9271;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto____1 = (function (state_9268){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_9268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e9272){if((e9272 instanceof Object)){
var ex__2910__auto__ = e9272;
var statearr_9273_9275 = state_9268;
(statearr_9273_9275[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9276 = state_9268;
state_9268 = G__9276;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto__ = function(state_9268){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto____1.call(this,state_9268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto__,figwheel_version,temp__4657__auto__))
})();
var state__2952__auto__ = (function (){var statearr_9274 = f__2951__auto__.call(null);
(statearr_9274[(6)] = c__2950__auto__);

return statearr_9274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto__,figwheel_version,temp__4657__auto__))
);

return c__2950__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__9277){
var map__9278 = p__9277;
var map__9278__$1 = ((((!((map__9278 == null)))?(((((map__9278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9278):map__9278);
var file = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__9280 = "";
var G__9280__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9280),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__9280);
var G__9280__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9280__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__9280__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9280__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__9280__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__9281){
var map__9282 = p__9281;
var map__9282__$1 = ((((!((map__9282 == null)))?(((((map__9282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9282):map__9282);
var ed = map__9282__$1;
var formatted_exception = cljs.core.get.call(null,map__9282__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__9282__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__9282__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__9284_9288 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__9285_9289 = null;
var count__9286_9290 = (0);
var i__9287_9291 = (0);
while(true){
if((i__9287_9291 < count__9286_9290)){
var msg_9292 = cljs.core._nth.call(null,chunk__9285_9289,i__9287_9291);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_9292);


var G__9293 = seq__9284_9288;
var G__9294 = chunk__9285_9289;
var G__9295 = count__9286_9290;
var G__9296 = (i__9287_9291 + (1));
seq__9284_9288 = G__9293;
chunk__9285_9289 = G__9294;
count__9286_9290 = G__9295;
i__9287_9291 = G__9296;
continue;
} else {
var temp__4657__auto___9297 = cljs.core.seq.call(null,seq__9284_9288);
if(temp__4657__auto___9297){
var seq__9284_9298__$1 = temp__4657__auto___9297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9284_9298__$1)){
var c__4317__auto___9299 = cljs.core.chunk_first.call(null,seq__9284_9298__$1);
var G__9300 = cljs.core.chunk_rest.call(null,seq__9284_9298__$1);
var G__9301 = c__4317__auto___9299;
var G__9302 = cljs.core.count.call(null,c__4317__auto___9299);
var G__9303 = (0);
seq__9284_9288 = G__9300;
chunk__9285_9289 = G__9301;
count__9286_9290 = G__9302;
i__9287_9291 = G__9303;
continue;
} else {
var msg_9304 = cljs.core.first.call(null,seq__9284_9298__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_9304);


var G__9305 = cljs.core.next.call(null,seq__9284_9298__$1);
var G__9306 = null;
var G__9307 = (0);
var G__9308 = (0);
seq__9284_9288 = G__9305;
chunk__9285_9289 = G__9306;
count__9286_9290 = G__9307;
i__9287_9291 = G__9308;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__9309){
var map__9310 = p__9309;
var map__9310__$1 = ((((!((map__9310 == null)))?(((((map__9310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9310):map__9310);
var w = map__9310__$1;
var message = cljs.core.get.call(null,map__9310__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__9312 = cljs.core.seq.call(null,plugins);
var chunk__9313 = null;
var count__9314 = (0);
var i__9315 = (0);
while(true){
if((i__9315 < count__9314)){
var vec__9316 = cljs.core._nth.call(null,chunk__9313,i__9315);
var k = cljs.core.nth.call(null,vec__9316,(0),null);
var plugin = cljs.core.nth.call(null,vec__9316,(1),null);
if(cljs.core.truth_(plugin)){
var pl_9322 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__9312,chunk__9313,count__9314,i__9315,pl_9322,vec__9316,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_9322.call(null,msg_hist);
});})(seq__9312,chunk__9313,count__9314,i__9315,pl_9322,vec__9316,k,plugin))
);
} else {
}


var G__9323 = seq__9312;
var G__9324 = chunk__9313;
var G__9325 = count__9314;
var G__9326 = (i__9315 + (1));
seq__9312 = G__9323;
chunk__9313 = G__9324;
count__9314 = G__9325;
i__9315 = G__9326;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9312);
if(temp__4657__auto__){
var seq__9312__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9312__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__9312__$1);
var G__9327 = cljs.core.chunk_rest.call(null,seq__9312__$1);
var G__9328 = c__4317__auto__;
var G__9329 = cljs.core.count.call(null,c__4317__auto__);
var G__9330 = (0);
seq__9312 = G__9327;
chunk__9313 = G__9328;
count__9314 = G__9329;
i__9315 = G__9330;
continue;
} else {
var vec__9319 = cljs.core.first.call(null,seq__9312__$1);
var k = cljs.core.nth.call(null,vec__9319,(0),null);
var plugin = cljs.core.nth.call(null,vec__9319,(1),null);
if(cljs.core.truth_(plugin)){
var pl_9331 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__9312,chunk__9313,count__9314,i__9315,pl_9331,vec__9319,k,plugin,seq__9312__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_9331.call(null,msg_hist);
});})(seq__9312,chunk__9313,count__9314,i__9315,pl_9331,vec__9319,k,plugin,seq__9312__$1,temp__4657__auto__))
);
} else {
}


var G__9332 = cljs.core.next.call(null,seq__9312__$1);
var G__9333 = null;
var G__9334 = (0);
var G__9335 = (0);
seq__9312 = G__9332;
chunk__9313 = G__9333;
count__9314 = G__9334;
i__9315 = G__9335;
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
var G__9337 = arguments.length;
switch (G__9337) {
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

var seq__9338_9343 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__9339_9344 = null;
var count__9340_9345 = (0);
var i__9341_9346 = (0);
while(true){
if((i__9341_9346 < count__9340_9345)){
var msg_9347 = cljs.core._nth.call(null,chunk__9339_9344,i__9341_9346);
figwheel.client.socket.handle_incoming_message.call(null,msg_9347);


var G__9348 = seq__9338_9343;
var G__9349 = chunk__9339_9344;
var G__9350 = count__9340_9345;
var G__9351 = (i__9341_9346 + (1));
seq__9338_9343 = G__9348;
chunk__9339_9344 = G__9349;
count__9340_9345 = G__9350;
i__9341_9346 = G__9351;
continue;
} else {
var temp__4657__auto___9352 = cljs.core.seq.call(null,seq__9338_9343);
if(temp__4657__auto___9352){
var seq__9338_9353__$1 = temp__4657__auto___9352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9338_9353__$1)){
var c__4317__auto___9354 = cljs.core.chunk_first.call(null,seq__9338_9353__$1);
var G__9355 = cljs.core.chunk_rest.call(null,seq__9338_9353__$1);
var G__9356 = c__4317__auto___9354;
var G__9357 = cljs.core.count.call(null,c__4317__auto___9354);
var G__9358 = (0);
seq__9338_9343 = G__9355;
chunk__9339_9344 = G__9356;
count__9340_9345 = G__9357;
i__9341_9346 = G__9358;
continue;
} else {
var msg_9359 = cljs.core.first.call(null,seq__9338_9353__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_9359);


var G__9360 = cljs.core.next.call(null,seq__9338_9353__$1);
var G__9361 = null;
var G__9362 = (0);
var G__9363 = (0);
seq__9338_9343 = G__9360;
chunk__9339_9344 = G__9361;
count__9340_9345 = G__9362;
i__9341_9346 = G__9363;
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
var len__4497__auto___9368 = arguments.length;
var i__4498__auto___9369 = (0);
while(true){
if((i__4498__auto___9369 < len__4497__auto___9368)){
args__4500__auto__.push((arguments[i__4498__auto___9369]));

var G__9370 = (i__4498__auto___9369 + (1));
i__4498__auto___9369 = G__9370;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__9365){
var map__9366 = p__9365;
var map__9366__$1 = ((((!((map__9366 == null)))?(((((map__9366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9366):map__9366);
var opts = map__9366__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq9364){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9364));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e9371){if((e9371 instanceof Error)){
var e = e9371;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e9371;

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
return (function (p__9372){
var map__9373 = p__9372;
var map__9373__$1 = ((((!((map__9373 == null)))?(((((map__9373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9373):map__9373);
var msg_name = cljs.core.get.call(null,map__9373__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});
