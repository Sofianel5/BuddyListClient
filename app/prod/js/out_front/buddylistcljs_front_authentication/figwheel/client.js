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
var G__17550 = arguments.length;
switch (G__17550) {
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
var len__4497__auto___17553 = arguments.length;
var i__4498__auto___17554 = (0);
while(true){
if((i__4498__auto___17554 < len__4497__auto___17553)){
args__4500__auto__.push((arguments[i__4498__auto___17554]));

var G__17555 = (i__4498__auto___17554 + (1));
i__4498__auto___17554 = G__17555;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq17552){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17552));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___17557 = arguments.length;
var i__4498__auto___17558 = (0);
while(true){
if((i__4498__auto___17558 < len__4497__auto___17557)){
args__4500__auto__.push((arguments[i__4498__auto___17558]));

var G__17559 = (i__4498__auto___17558 + (1));
i__4498__auto___17558 = G__17559;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq17556){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17556));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__17560){
var map__17561 = p__17560;
var map__17561__$1 = ((((!((map__17561 == null)))?(((((map__17561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17561):map__17561);
var message = cljs.core.get.call(null,map__17561__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__17561__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__5590__auto___17640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___17640,ch){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___17640,ch){
return (function (state_17612){
var state_val_17613 = (state_17612[(1)]);
if((state_val_17613 === (7))){
var inst_17608 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17614_17641 = state_17612__$1;
(statearr_17614_17641[(2)] = inst_17608);

(statearr_17614_17641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (1))){
var state_17612__$1 = state_17612;
var statearr_17615_17642 = state_17612__$1;
(statearr_17615_17642[(2)] = null);

(statearr_17615_17642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (4))){
var inst_17565 = (state_17612[(7)]);
var inst_17565__$1 = (state_17612[(2)]);
var state_17612__$1 = (function (){var statearr_17616 = state_17612;
(statearr_17616[(7)] = inst_17565__$1);

return statearr_17616;
})();
if(cljs.core.truth_(inst_17565__$1)){
var statearr_17617_17643 = state_17612__$1;
(statearr_17617_17643[(1)] = (5));

} else {
var statearr_17618_17644 = state_17612__$1;
(statearr_17618_17644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (15))){
var inst_17572 = (state_17612[(8)]);
var inst_17587 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_17572);
var inst_17588 = cljs.core.first.call(null,inst_17587);
var inst_17589 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_17588);
var inst_17590 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17589)].join('');
var inst_17591 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_17590);
var state_17612__$1 = state_17612;
var statearr_17619_17645 = state_17612__$1;
(statearr_17619_17645[(2)] = inst_17591);

(statearr_17619_17645[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (13))){
var inst_17596 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17620_17646 = state_17612__$1;
(statearr_17620_17646[(2)] = inst_17596);

(statearr_17620_17646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (6))){
var state_17612__$1 = state_17612;
var statearr_17621_17647 = state_17612__$1;
(statearr_17621_17647[(2)] = null);

(statearr_17621_17647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (17))){
var inst_17594 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17622_17648 = state_17612__$1;
(statearr_17622_17648[(2)] = inst_17594);

(statearr_17622_17648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (3))){
var inst_17610 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17612__$1,inst_17610);
} else {
if((state_val_17613 === (12))){
var inst_17571 = (state_17612[(9)]);
var inst_17585 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_17571,opts);
var state_17612__$1 = state_17612;
if(cljs.core.truth_(inst_17585)){
var statearr_17623_17649 = state_17612__$1;
(statearr_17623_17649[(1)] = (15));

} else {
var statearr_17624_17650 = state_17612__$1;
(statearr_17624_17650[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (2))){
var state_17612__$1 = state_17612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17612__$1,(4),ch);
} else {
if((state_val_17613 === (11))){
var inst_17572 = (state_17612[(8)]);
var inst_17577 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17578 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_17572);
var inst_17579 = cljs.core.async.timeout.call(null,(1000));
var inst_17580 = [inst_17578,inst_17579];
var inst_17581 = (new cljs.core.PersistentVector(null,2,(5),inst_17577,inst_17580,null));
var state_17612__$1 = state_17612;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17612__$1,(14),inst_17581);
} else {
if((state_val_17613 === (9))){
var inst_17572 = (state_17612[(8)]);
var inst_17598 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_17599 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_17572);
var inst_17600 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17599);
var inst_17601 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17600)].join('');
var inst_17602 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_17601);
var state_17612__$1 = (function (){var statearr_17625 = state_17612;
(statearr_17625[(10)] = inst_17598);

return statearr_17625;
})();
var statearr_17626_17651 = state_17612__$1;
(statearr_17626_17651[(2)] = inst_17602);

(statearr_17626_17651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (5))){
var inst_17565 = (state_17612[(7)]);
var inst_17567 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_17568 = (new cljs.core.PersistentArrayMap(null,2,inst_17567,null));
var inst_17569 = (new cljs.core.PersistentHashSet(null,inst_17568,null));
var inst_17570 = figwheel.client.focus_msgs.call(null,inst_17569,inst_17565);
var inst_17571 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_17570);
var inst_17572 = cljs.core.first.call(null,inst_17570);
var inst_17573 = figwheel.client.autoload_QMARK_.call(null);
var state_17612__$1 = (function (){var statearr_17627 = state_17612;
(statearr_17627[(9)] = inst_17571);

(statearr_17627[(8)] = inst_17572);

return statearr_17627;
})();
if(cljs.core.truth_(inst_17573)){
var statearr_17628_17652 = state_17612__$1;
(statearr_17628_17652[(1)] = (8));

} else {
var statearr_17629_17653 = state_17612__$1;
(statearr_17629_17653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (14))){
var inst_17583 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17630_17654 = state_17612__$1;
(statearr_17630_17654[(2)] = inst_17583);

(statearr_17630_17654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (16))){
var state_17612__$1 = state_17612;
var statearr_17631_17655 = state_17612__$1;
(statearr_17631_17655[(2)] = null);

(statearr_17631_17655[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (10))){
var inst_17604 = (state_17612[(2)]);
var state_17612__$1 = (function (){var statearr_17632 = state_17612;
(statearr_17632[(11)] = inst_17604);

return statearr_17632;
})();
var statearr_17633_17656 = state_17612__$1;
(statearr_17633_17656[(2)] = null);

(statearr_17633_17656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (8))){
var inst_17571 = (state_17612[(9)]);
var inst_17575 = figwheel.client.reload_file_state_QMARK_.call(null,inst_17571,opts);
var state_17612__$1 = state_17612;
if(cljs.core.truth_(inst_17575)){
var statearr_17634_17657 = state_17612__$1;
(statearr_17634_17657[(1)] = (11));

} else {
var statearr_17635_17658 = state_17612__$1;
(statearr_17635_17658[(1)] = (12));

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
});})(c__5590__auto___17640,ch))
;
return ((function (switch__5435__auto__,c__5590__auto___17640,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__5436__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__5436__auto____0 = (function (){
var statearr_17636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17636[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__5436__auto__);

(statearr_17636[(1)] = (1));

return statearr_17636;
});
var figwheel$client$file_reloader_plugin_$_state_machine__5436__auto____1 = (function (state_17612){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_17612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e17637){if((e17637 instanceof Object)){
var ex__5439__auto__ = e17637;
var statearr_17638_17659 = state_17612;
(statearr_17638_17659[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17660 = state_17612;
state_17612 = G__17660;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__5436__auto__ = function(state_17612){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__5436__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__5436__auto____1.call(this,state_17612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__5436__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__5436__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___17640,ch))
})();
var state__5592__auto__ = (function (){var statearr_17639 = f__5591__auto__.call(null);
(statearr_17639[(6)] = c__5590__auto___17640);

return statearr_17639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___17640,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__17661_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__17661_SHARP_));
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
var base_path_17663 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_17663){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e17662){if((e17662 instanceof Error)){
var e = e17662;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_17663], null));
} else {
var e = e17662;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_17663))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__17664){
var map__17665 = p__17664;
var map__17665__$1 = ((((!((map__17665 == null)))?(((((map__17665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17665):map__17665);
var opts = map__17665__$1;
var build_id = cljs.core.get.call(null,map__17665__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__17665,map__17665__$1,opts,build_id){
return (function (p__17667){
var vec__17668 = p__17667;
var seq__17669 = cljs.core.seq.call(null,vec__17668);
var first__17670 = cljs.core.first.call(null,seq__17669);
var seq__17669__$1 = cljs.core.next.call(null,seq__17669);
var map__17671 = first__17670;
var map__17671__$1 = ((((!((map__17671 == null)))?(((((map__17671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17671):map__17671);
var msg = map__17671__$1;
var msg_name = cljs.core.get.call(null,map__17671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__17669__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__17668,seq__17669,first__17670,seq__17669__$1,map__17671,map__17671__$1,msg,msg_name,_,map__17665,map__17665__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__17668,seq__17669,first__17670,seq__17669__$1,map__17671,map__17671__$1,msg,msg_name,_,map__17665,map__17665__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__17665,map__17665__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__17673){
var vec__17674 = p__17673;
var seq__17675 = cljs.core.seq.call(null,vec__17674);
var first__17676 = cljs.core.first.call(null,seq__17675);
var seq__17675__$1 = cljs.core.next.call(null,seq__17675);
var map__17677 = first__17676;
var map__17677__$1 = ((((!((map__17677 == null)))?(((((map__17677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17677):map__17677);
var msg = map__17677__$1;
var msg_name = cljs.core.get.call(null,map__17677__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__17675__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__17679){
var map__17680 = p__17679;
var map__17680__$1 = ((((!((map__17680 == null)))?(((((map__17680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17680):map__17680);
var on_compile_warning = cljs.core.get.call(null,map__17680__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__17680__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__17680,map__17680__$1,on_compile_warning,on_compile_fail){
return (function (p__17682){
var vec__17683 = p__17682;
var seq__17684 = cljs.core.seq.call(null,vec__17683);
var first__17685 = cljs.core.first.call(null,seq__17684);
var seq__17684__$1 = cljs.core.next.call(null,seq__17684);
var map__17686 = first__17685;
var map__17686__$1 = ((((!((map__17686 == null)))?(((((map__17686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17686):map__17686);
var msg = map__17686__$1;
var msg_name = cljs.core.get.call(null,map__17686__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__17684__$1;
var pred__17688 = cljs.core._EQ_;
var expr__17689 = msg_name;
if(cljs.core.truth_(pred__17688.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__17689))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__17688.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__17689))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__17680,map__17680__$1,on_compile_warning,on_compile_fail))
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
var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__,msg_hist,msg_names,msg){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__,msg_hist,msg_names,msg){
return (function (state_17778){
var state_val_17779 = (state_17778[(1)]);
if((state_val_17779 === (7))){
var inst_17698 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
if(cljs.core.truth_(inst_17698)){
var statearr_17780_17827 = state_17778__$1;
(statearr_17780_17827[(1)] = (8));

} else {
var statearr_17781_17828 = state_17778__$1;
(statearr_17781_17828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (20))){
var inst_17772 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
var statearr_17782_17829 = state_17778__$1;
(statearr_17782_17829[(2)] = inst_17772);

(statearr_17782_17829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (27))){
var inst_17768 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
var statearr_17783_17830 = state_17778__$1;
(statearr_17783_17830[(2)] = inst_17768);

(statearr_17783_17830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (1))){
var inst_17691 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_17778__$1 = state_17778;
if(cljs.core.truth_(inst_17691)){
var statearr_17784_17831 = state_17778__$1;
(statearr_17784_17831[(1)] = (2));

} else {
var statearr_17785_17832 = state_17778__$1;
(statearr_17785_17832[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (24))){
var inst_17770 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
var statearr_17786_17833 = state_17778__$1;
(statearr_17786_17833[(2)] = inst_17770);

(statearr_17786_17833[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (4))){
var inst_17776 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17778__$1,inst_17776);
} else {
if((state_val_17779 === (15))){
var inst_17774 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
var statearr_17787_17834 = state_17778__$1;
(statearr_17787_17834[(2)] = inst_17774);

(statearr_17787_17834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (21))){
var inst_17727 = (state_17778[(2)]);
var inst_17728 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17729 = figwheel.client.auto_jump_to_error.call(null,opts,inst_17728);
var state_17778__$1 = (function (){var statearr_17788 = state_17778;
(statearr_17788[(7)] = inst_17727);

return statearr_17788;
})();
var statearr_17789_17835 = state_17778__$1;
(statearr_17789_17835[(2)] = inst_17729);

(statearr_17789_17835[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (31))){
var inst_17757 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_17778__$1 = state_17778;
if(cljs.core.truth_(inst_17757)){
var statearr_17790_17836 = state_17778__$1;
(statearr_17790_17836[(1)] = (34));

} else {
var statearr_17791_17837 = state_17778__$1;
(statearr_17791_17837[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (32))){
var inst_17766 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
var statearr_17792_17838 = state_17778__$1;
(statearr_17792_17838[(2)] = inst_17766);

(statearr_17792_17838[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (33))){
var inst_17753 = (state_17778[(2)]);
var inst_17754 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17755 = figwheel.client.auto_jump_to_error.call(null,opts,inst_17754);
var state_17778__$1 = (function (){var statearr_17793 = state_17778;
(statearr_17793[(8)] = inst_17753);

return statearr_17793;
})();
var statearr_17794_17839 = state_17778__$1;
(statearr_17794_17839[(2)] = inst_17755);

(statearr_17794_17839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (13))){
var inst_17712 = figwheel.client.heads_up.clear.call(null);
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17778__$1,(16),inst_17712);
} else {
if((state_val_17779 === (22))){
var inst_17733 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17734 = figwheel.client.heads_up.append_warning_message.call(null,inst_17733);
var state_17778__$1 = state_17778;
var statearr_17795_17840 = state_17778__$1;
(statearr_17795_17840[(2)] = inst_17734);

(statearr_17795_17840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (36))){
var inst_17764 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
var statearr_17796_17841 = state_17778__$1;
(statearr_17796_17841[(2)] = inst_17764);

(statearr_17796_17841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (29))){
var inst_17744 = (state_17778[(2)]);
var inst_17745 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17746 = figwheel.client.auto_jump_to_error.call(null,opts,inst_17745);
var state_17778__$1 = (function (){var statearr_17797 = state_17778;
(statearr_17797[(9)] = inst_17744);

return statearr_17797;
})();
var statearr_17798_17842 = state_17778__$1;
(statearr_17798_17842[(2)] = inst_17746);

(statearr_17798_17842[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (6))){
var inst_17693 = (state_17778[(10)]);
var state_17778__$1 = state_17778;
var statearr_17799_17843 = state_17778__$1;
(statearr_17799_17843[(2)] = inst_17693);

(statearr_17799_17843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (28))){
var inst_17740 = (state_17778[(2)]);
var inst_17741 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17742 = figwheel.client.heads_up.display_warning.call(null,inst_17741);
var state_17778__$1 = (function (){var statearr_17800 = state_17778;
(statearr_17800[(11)] = inst_17740);

return statearr_17800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17778__$1,(29),inst_17742);
} else {
if((state_val_17779 === (25))){
var inst_17738 = figwheel.client.heads_up.clear.call(null);
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17778__$1,(28),inst_17738);
} else {
if((state_val_17779 === (34))){
var inst_17759 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17778__$1,(37),inst_17759);
} else {
if((state_val_17779 === (17))){
var inst_17718 = (state_17778[(2)]);
var inst_17719 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17720 = figwheel.client.auto_jump_to_error.call(null,opts,inst_17719);
var state_17778__$1 = (function (){var statearr_17801 = state_17778;
(statearr_17801[(12)] = inst_17718);

return statearr_17801;
})();
var statearr_17802_17844 = state_17778__$1;
(statearr_17802_17844[(2)] = inst_17720);

(statearr_17802_17844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (3))){
var inst_17710 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_17778__$1 = state_17778;
if(cljs.core.truth_(inst_17710)){
var statearr_17803_17845 = state_17778__$1;
(statearr_17803_17845[(1)] = (13));

} else {
var statearr_17804_17846 = state_17778__$1;
(statearr_17804_17846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (12))){
var inst_17706 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
var statearr_17805_17847 = state_17778__$1;
(statearr_17805_17847[(2)] = inst_17706);

(statearr_17805_17847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (2))){
var inst_17693 = (state_17778[(10)]);
var inst_17693__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_17778__$1 = (function (){var statearr_17806 = state_17778;
(statearr_17806[(10)] = inst_17693__$1);

return statearr_17806;
})();
if(cljs.core.truth_(inst_17693__$1)){
var statearr_17807_17848 = state_17778__$1;
(statearr_17807_17848[(1)] = (5));

} else {
var statearr_17808_17849 = state_17778__$1;
(statearr_17808_17849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (23))){
var inst_17736 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_17778__$1 = state_17778;
if(cljs.core.truth_(inst_17736)){
var statearr_17809_17850 = state_17778__$1;
(statearr_17809_17850[(1)] = (25));

} else {
var statearr_17810_17851 = state_17778__$1;
(statearr_17810_17851[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (35))){
var state_17778__$1 = state_17778;
var statearr_17811_17852 = state_17778__$1;
(statearr_17811_17852[(2)] = null);

(statearr_17811_17852[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (19))){
var inst_17731 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_17778__$1 = state_17778;
if(cljs.core.truth_(inst_17731)){
var statearr_17812_17853 = state_17778__$1;
(statearr_17812_17853[(1)] = (22));

} else {
var statearr_17813_17854 = state_17778__$1;
(statearr_17813_17854[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (11))){
var inst_17702 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
var statearr_17814_17855 = state_17778__$1;
(statearr_17814_17855[(2)] = inst_17702);

(statearr_17814_17855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (9))){
var inst_17704 = figwheel.client.heads_up.clear.call(null);
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17778__$1,(12),inst_17704);
} else {
if((state_val_17779 === (5))){
var inst_17695 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_17778__$1 = state_17778;
var statearr_17815_17856 = state_17778__$1;
(statearr_17815_17856[(2)] = inst_17695);

(statearr_17815_17856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (14))){
var inst_17722 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_17778__$1 = state_17778;
if(cljs.core.truth_(inst_17722)){
var statearr_17816_17857 = state_17778__$1;
(statearr_17816_17857[(1)] = (18));

} else {
var statearr_17817_17858 = state_17778__$1;
(statearr_17817_17858[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (26))){
var inst_17748 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_17778__$1 = state_17778;
if(cljs.core.truth_(inst_17748)){
var statearr_17818_17859 = state_17778__$1;
(statearr_17818_17859[(1)] = (30));

} else {
var statearr_17819_17860 = state_17778__$1;
(statearr_17819_17860[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (16))){
var inst_17714 = (state_17778[(2)]);
var inst_17715 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17716 = figwheel.client.heads_up.display_exception.call(null,inst_17715);
var state_17778__$1 = (function (){var statearr_17820 = state_17778;
(statearr_17820[(13)] = inst_17714);

return statearr_17820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17778__$1,(17),inst_17716);
} else {
if((state_val_17779 === (30))){
var inst_17750 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17751 = figwheel.client.heads_up.display_warning.call(null,inst_17750);
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17778__$1,(33),inst_17751);
} else {
if((state_val_17779 === (10))){
var inst_17708 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
var statearr_17821_17861 = state_17778__$1;
(statearr_17821_17861[(2)] = inst_17708);

(statearr_17821_17861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (18))){
var inst_17724 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17725 = figwheel.client.heads_up.display_exception.call(null,inst_17724);
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17778__$1,(21),inst_17725);
} else {
if((state_val_17779 === (37))){
var inst_17761 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
var statearr_17822_17862 = state_17778__$1;
(statearr_17822_17862[(2)] = inst_17761);

(statearr_17822_17862[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (8))){
var inst_17700 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17778__$1,(11),inst_17700);
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
});})(c__5590__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__5435__auto__,c__5590__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto____0 = (function (){
var statearr_17823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17823[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto__);

(statearr_17823[(1)] = (1));

return statearr_17823;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto____1 = (function (state_17778){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_17778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e17824){if((e17824 instanceof Object)){
var ex__5439__auto__ = e17824;
var statearr_17825_17863 = state_17778;
(statearr_17825_17863[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17864 = state_17778;
state_17778 = G__17864;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto__ = function(state_17778){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto____1.call(this,state_17778);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__,msg_hist,msg_names,msg))
})();
var state__5592__auto__ = (function (){var statearr_17826 = f__5591__auto__.call(null);
(statearr_17826[(6)] = c__5590__auto__);

return statearr_17826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__,msg_hist,msg_names,msg))
);

return c__5590__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__5590__auto___17893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto___17893,ch){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto___17893,ch){
return (function (state_17879){
var state_val_17880 = (state_17879[(1)]);
if((state_val_17880 === (1))){
var state_17879__$1 = state_17879;
var statearr_17881_17894 = state_17879__$1;
(statearr_17881_17894[(2)] = null);

(statearr_17881_17894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17880 === (2))){
var state_17879__$1 = state_17879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17879__$1,(4),ch);
} else {
if((state_val_17880 === (3))){
var inst_17877 = (state_17879[(2)]);
var state_17879__$1 = state_17879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17879__$1,inst_17877);
} else {
if((state_val_17880 === (4))){
var inst_17867 = (state_17879[(7)]);
var inst_17867__$1 = (state_17879[(2)]);
var state_17879__$1 = (function (){var statearr_17882 = state_17879;
(statearr_17882[(7)] = inst_17867__$1);

return statearr_17882;
})();
if(cljs.core.truth_(inst_17867__$1)){
var statearr_17883_17895 = state_17879__$1;
(statearr_17883_17895[(1)] = (5));

} else {
var statearr_17884_17896 = state_17879__$1;
(statearr_17884_17896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17880 === (5))){
var inst_17867 = (state_17879[(7)]);
var inst_17869 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_17867);
var state_17879__$1 = state_17879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17879__$1,(8),inst_17869);
} else {
if((state_val_17880 === (6))){
var state_17879__$1 = state_17879;
var statearr_17885_17897 = state_17879__$1;
(statearr_17885_17897[(2)] = null);

(statearr_17885_17897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17880 === (7))){
var inst_17875 = (state_17879[(2)]);
var state_17879__$1 = state_17879;
var statearr_17886_17898 = state_17879__$1;
(statearr_17886_17898[(2)] = inst_17875);

(statearr_17886_17898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17880 === (8))){
var inst_17871 = (state_17879[(2)]);
var state_17879__$1 = (function (){var statearr_17887 = state_17879;
(statearr_17887[(8)] = inst_17871);

return statearr_17887;
})();
var statearr_17888_17899 = state_17879__$1;
(statearr_17888_17899[(2)] = null);

(statearr_17888_17899[(1)] = (2));


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
});})(c__5590__auto___17893,ch))
;
return ((function (switch__5435__auto__,c__5590__auto___17893,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__5436__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__5436__auto____0 = (function (){
var statearr_17889 = [null,null,null,null,null,null,null,null,null];
(statearr_17889[(0)] = figwheel$client$heads_up_plugin_$_state_machine__5436__auto__);

(statearr_17889[(1)] = (1));

return statearr_17889;
});
var figwheel$client$heads_up_plugin_$_state_machine__5436__auto____1 = (function (state_17879){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_17879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e17890){if((e17890 instanceof Object)){
var ex__5439__auto__ = e17890;
var statearr_17891_17900 = state_17879;
(statearr_17891_17900[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17901 = state_17879;
state_17879 = G__17901;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__5436__auto__ = function(state_17879){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__5436__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__5436__auto____1.call(this,state_17879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__5436__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__5436__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto___17893,ch))
})();
var state__5592__auto__ = (function (){var statearr_17892 = f__5591__auto__.call(null);
(statearr_17892[(6)] = c__5590__auto___17893);

return statearr_17892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto___17893,ch))
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
var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__){
return (function (state_17907){
var state_val_17908 = (state_17907[(1)]);
if((state_val_17908 === (1))){
var inst_17902 = cljs.core.async.timeout.call(null,(3000));
var state_17907__$1 = state_17907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17907__$1,(2),inst_17902);
} else {
if((state_val_17908 === (2))){
var inst_17904 = (state_17907[(2)]);
var inst_17905 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_17907__$1 = (function (){var statearr_17909 = state_17907;
(statearr_17909[(7)] = inst_17904);

return statearr_17909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17907__$1,inst_17905);
} else {
return null;
}
}
});})(c__5590__auto__))
;
return ((function (switch__5435__auto__,c__5590__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__5436__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__5436__auto____0 = (function (){
var statearr_17910 = [null,null,null,null,null,null,null,null];
(statearr_17910[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__5436__auto__);

(statearr_17910[(1)] = (1));

return statearr_17910;
});
var figwheel$client$enforce_project_plugin_$_state_machine__5436__auto____1 = (function (state_17907){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_17907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e17911){if((e17911 instanceof Object)){
var ex__5439__auto__ = e17911;
var statearr_17912_17914 = state_17907;
(statearr_17912_17914[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17915 = state_17907;
state_17907 = G__17915;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__5436__auto__ = function(state_17907){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__5436__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__5436__auto____1.call(this,state_17907);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__5436__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__5436__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_17913 = f__5591__auto__.call(null);
(statearr_17913[(6)] = c__5590__auto__);

return statearr_17913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__))
);

return c__5590__auto__;
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
var c__5590__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5590__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5435__auto__ = ((function (c__5590__auto__,figwheel_version,temp__4657__auto__){
return (function (state_17922){
var state_val_17923 = (state_17922[(1)]);
if((state_val_17923 === (1))){
var inst_17916 = cljs.core.async.timeout.call(null,(2000));
var state_17922__$1 = state_17922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17922__$1,(2),inst_17916);
} else {
if((state_val_17923 === (2))){
var inst_17918 = (state_17922[(2)]);
var inst_17919 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_17920 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_17919);
var state_17922__$1 = (function (){var statearr_17924 = state_17922;
(statearr_17924[(7)] = inst_17918);

return statearr_17924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17922__$1,inst_17920);
} else {
return null;
}
}
});})(c__5590__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__5435__auto__,c__5590__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto____0 = (function (){
var statearr_17925 = [null,null,null,null,null,null,null,null];
(statearr_17925[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto__);

(statearr_17925[(1)] = (1));

return statearr_17925;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto____1 = (function (state_17922){
while(true){
var ret_value__5437__auto__ = (function (){try{while(true){
var result__5438__auto__ = switch__5435__auto__.call(null,state_17922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5438__auto__;
}
break;
}
}catch (e17926){if((e17926 instanceof Object)){
var ex__5439__auto__ = e17926;
var statearr_17927_17929 = state_17922;
(statearr_17927_17929[(5)] = ex__5439__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17930 = state_17922;
state_17922 = G__17930;
continue;
} else {
return ret_value__5437__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto__ = function(state_17922){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto____1.call(this,state_17922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__5436__auto__;
})()
;})(switch__5435__auto__,c__5590__auto__,figwheel_version,temp__4657__auto__))
})();
var state__5592__auto__ = (function (){var statearr_17928 = f__5591__auto__.call(null);
(statearr_17928[(6)] = c__5590__auto__);

return statearr_17928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5592__auto__);
});})(c__5590__auto__,figwheel_version,temp__4657__auto__))
);

return c__5590__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__17931){
var map__17932 = p__17931;
var map__17932__$1 = ((((!((map__17932 == null)))?(((((map__17932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17932):map__17932);
var file = cljs.core.get.call(null,map__17932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__17932__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__17932__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__17934 = "";
var G__17934__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17934),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__17934);
var G__17934__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17934__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__17934__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17934__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__17934__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__17935){
var map__17936 = p__17935;
var map__17936__$1 = ((((!((map__17936 == null)))?(((((map__17936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17936):map__17936);
var ed = map__17936__$1;
var formatted_exception = cljs.core.get.call(null,map__17936__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__17936__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__17936__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__17938_17942 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__17939_17943 = null;
var count__17940_17944 = (0);
var i__17941_17945 = (0);
while(true){
if((i__17941_17945 < count__17940_17944)){
var msg_17946 = cljs.core._nth.call(null,chunk__17939_17943,i__17941_17945);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17946);


var G__17947 = seq__17938_17942;
var G__17948 = chunk__17939_17943;
var G__17949 = count__17940_17944;
var G__17950 = (i__17941_17945 + (1));
seq__17938_17942 = G__17947;
chunk__17939_17943 = G__17948;
count__17940_17944 = G__17949;
i__17941_17945 = G__17950;
continue;
} else {
var temp__4657__auto___17951 = cljs.core.seq.call(null,seq__17938_17942);
if(temp__4657__auto___17951){
var seq__17938_17952__$1 = temp__4657__auto___17951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17938_17952__$1)){
var c__4317__auto___17953 = cljs.core.chunk_first.call(null,seq__17938_17952__$1);
var G__17954 = cljs.core.chunk_rest.call(null,seq__17938_17952__$1);
var G__17955 = c__4317__auto___17953;
var G__17956 = cljs.core.count.call(null,c__4317__auto___17953);
var G__17957 = (0);
seq__17938_17942 = G__17954;
chunk__17939_17943 = G__17955;
count__17940_17944 = G__17956;
i__17941_17945 = G__17957;
continue;
} else {
var msg_17958 = cljs.core.first.call(null,seq__17938_17952__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17958);


var G__17959 = cljs.core.next.call(null,seq__17938_17952__$1);
var G__17960 = null;
var G__17961 = (0);
var G__17962 = (0);
seq__17938_17942 = G__17959;
chunk__17939_17943 = G__17960;
count__17940_17944 = G__17961;
i__17941_17945 = G__17962;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__17963){
var map__17964 = p__17963;
var map__17964__$1 = ((((!((map__17964 == null)))?(((((map__17964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17964):map__17964);
var w = map__17964__$1;
var message = cljs.core.get.call(null,map__17964__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/prod/js/out_front/buddylistcljs_front_authentication/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/prod/js/out_front/buddylistcljs_front_authentication/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__17966 = cljs.core.seq.call(null,plugins);
var chunk__17967 = null;
var count__17968 = (0);
var i__17969 = (0);
while(true){
if((i__17969 < count__17968)){
var vec__17970 = cljs.core._nth.call(null,chunk__17967,i__17969);
var k = cljs.core.nth.call(null,vec__17970,(0),null);
var plugin = cljs.core.nth.call(null,vec__17970,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17976 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17966,chunk__17967,count__17968,i__17969,pl_17976,vec__17970,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_17976.call(null,msg_hist);
});})(seq__17966,chunk__17967,count__17968,i__17969,pl_17976,vec__17970,k,plugin))
);
} else {
}


var G__17977 = seq__17966;
var G__17978 = chunk__17967;
var G__17979 = count__17968;
var G__17980 = (i__17969 + (1));
seq__17966 = G__17977;
chunk__17967 = G__17978;
count__17968 = G__17979;
i__17969 = G__17980;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17966);
if(temp__4657__auto__){
var seq__17966__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17966__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__17966__$1);
var G__17981 = cljs.core.chunk_rest.call(null,seq__17966__$1);
var G__17982 = c__4317__auto__;
var G__17983 = cljs.core.count.call(null,c__4317__auto__);
var G__17984 = (0);
seq__17966 = G__17981;
chunk__17967 = G__17982;
count__17968 = G__17983;
i__17969 = G__17984;
continue;
} else {
var vec__17973 = cljs.core.first.call(null,seq__17966__$1);
var k = cljs.core.nth.call(null,vec__17973,(0),null);
var plugin = cljs.core.nth.call(null,vec__17973,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17985 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17966,chunk__17967,count__17968,i__17969,pl_17985,vec__17973,k,plugin,seq__17966__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_17985.call(null,msg_hist);
});})(seq__17966,chunk__17967,count__17968,i__17969,pl_17985,vec__17973,k,plugin,seq__17966__$1,temp__4657__auto__))
);
} else {
}


var G__17986 = cljs.core.next.call(null,seq__17966__$1);
var G__17987 = null;
var G__17988 = (0);
var G__17989 = (0);
seq__17966 = G__17986;
chunk__17967 = G__17987;
count__17968 = G__17988;
i__17969 = G__17989;
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
var G__17991 = arguments.length;
switch (G__17991) {
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

var seq__17992_17997 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__17993_17998 = null;
var count__17994_17999 = (0);
var i__17995_18000 = (0);
while(true){
if((i__17995_18000 < count__17994_17999)){
var msg_18001 = cljs.core._nth.call(null,chunk__17993_17998,i__17995_18000);
figwheel.client.socket.handle_incoming_message.call(null,msg_18001);


var G__18002 = seq__17992_17997;
var G__18003 = chunk__17993_17998;
var G__18004 = count__17994_17999;
var G__18005 = (i__17995_18000 + (1));
seq__17992_17997 = G__18002;
chunk__17993_17998 = G__18003;
count__17994_17999 = G__18004;
i__17995_18000 = G__18005;
continue;
} else {
var temp__4657__auto___18006 = cljs.core.seq.call(null,seq__17992_17997);
if(temp__4657__auto___18006){
var seq__17992_18007__$1 = temp__4657__auto___18006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17992_18007__$1)){
var c__4317__auto___18008 = cljs.core.chunk_first.call(null,seq__17992_18007__$1);
var G__18009 = cljs.core.chunk_rest.call(null,seq__17992_18007__$1);
var G__18010 = c__4317__auto___18008;
var G__18011 = cljs.core.count.call(null,c__4317__auto___18008);
var G__18012 = (0);
seq__17992_17997 = G__18009;
chunk__17993_17998 = G__18010;
count__17994_17999 = G__18011;
i__17995_18000 = G__18012;
continue;
} else {
var msg_18013 = cljs.core.first.call(null,seq__17992_18007__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_18013);


var G__18014 = cljs.core.next.call(null,seq__17992_18007__$1);
var G__18015 = null;
var G__18016 = (0);
var G__18017 = (0);
seq__17992_17997 = G__18014;
chunk__17993_17998 = G__18015;
count__17994_17999 = G__18016;
i__17995_18000 = G__18017;
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
var len__4497__auto___18022 = arguments.length;
var i__4498__auto___18023 = (0);
while(true){
if((i__4498__auto___18023 < len__4497__auto___18022)){
args__4500__auto__.push((arguments[i__4498__auto___18023]));

var G__18024 = (i__4498__auto___18023 + (1));
i__4498__auto___18023 = G__18024;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__18019){
var map__18020 = p__18019;
var map__18020__$1 = ((((!((map__18020 == null)))?(((((map__18020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18020):map__18020);
var opts = map__18020__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq18018){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18018));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e18025){if((e18025 instanceof Error)){
var e = e18025;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e18025;

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
return (function (p__18026){
var map__18027 = p__18026;
var map__18027__$1 = ((((!((map__18027 == null)))?(((((map__18027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18027):map__18027);
var msg_name = cljs.core.get.call(null,map__18027__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});
