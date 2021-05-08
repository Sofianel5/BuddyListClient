// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4500__auto__ = [];
var len__4497__auto___7475 = arguments.length;
var i__4498__auto___7476 = (0);
while(true){
if((i__4498__auto___7476 < len__4497__auto___7475)){
args__4500__auto__.push((arguments[i__4498__auto___7476]));

var G__7477 = (i__4498__auto___7476 + (1));
i__4498__auto___7476 = G__7477;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__7467_7478 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__7468_7479 = null;
var count__7469_7480 = (0);
var i__7470_7481 = (0);
while(true){
if((i__7470_7481 < count__7469_7480)){
var k_7482 = cljs.core._nth.call(null,chunk__7468_7479,i__7470_7481);
e.setAttribute(cljs.core.name.call(null,k_7482),cljs.core.get.call(null,attrs,k_7482));


var G__7483 = seq__7467_7478;
var G__7484 = chunk__7468_7479;
var G__7485 = count__7469_7480;
var G__7486 = (i__7470_7481 + (1));
seq__7467_7478 = G__7483;
chunk__7468_7479 = G__7484;
count__7469_7480 = G__7485;
i__7470_7481 = G__7486;
continue;
} else {
var temp__4657__auto___7487 = cljs.core.seq.call(null,seq__7467_7478);
if(temp__4657__auto___7487){
var seq__7467_7488__$1 = temp__4657__auto___7487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7467_7488__$1)){
var c__4317__auto___7489 = cljs.core.chunk_first.call(null,seq__7467_7488__$1);
var G__7490 = cljs.core.chunk_rest.call(null,seq__7467_7488__$1);
var G__7491 = c__4317__auto___7489;
var G__7492 = cljs.core.count.call(null,c__4317__auto___7489);
var G__7493 = (0);
seq__7467_7478 = G__7490;
chunk__7468_7479 = G__7491;
count__7469_7480 = G__7492;
i__7470_7481 = G__7493;
continue;
} else {
var k_7494 = cljs.core.first.call(null,seq__7467_7488__$1);
e.setAttribute(cljs.core.name.call(null,k_7494),cljs.core.get.call(null,attrs,k_7494));


var G__7495 = cljs.core.next.call(null,seq__7467_7488__$1);
var G__7496 = null;
var G__7497 = (0);
var G__7498 = (0);
seq__7467_7478 = G__7495;
chunk__7468_7479 = G__7496;
count__7469_7480 = G__7497;
i__7470_7481 = G__7498;
continue;
}
} else {
}
}
break;
}

var seq__7471_7499 = cljs.core.seq.call(null,children);
var chunk__7472_7500 = null;
var count__7473_7501 = (0);
var i__7474_7502 = (0);
while(true){
if((i__7474_7502 < count__7473_7501)){
var ch_7503 = cljs.core._nth.call(null,chunk__7472_7500,i__7474_7502);
e.appendChild(ch_7503);


var G__7504 = seq__7471_7499;
var G__7505 = chunk__7472_7500;
var G__7506 = count__7473_7501;
var G__7507 = (i__7474_7502 + (1));
seq__7471_7499 = G__7504;
chunk__7472_7500 = G__7505;
count__7473_7501 = G__7506;
i__7474_7502 = G__7507;
continue;
} else {
var temp__4657__auto___7508 = cljs.core.seq.call(null,seq__7471_7499);
if(temp__4657__auto___7508){
var seq__7471_7509__$1 = temp__4657__auto___7508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7471_7509__$1)){
var c__4317__auto___7510 = cljs.core.chunk_first.call(null,seq__7471_7509__$1);
var G__7511 = cljs.core.chunk_rest.call(null,seq__7471_7509__$1);
var G__7512 = c__4317__auto___7510;
var G__7513 = cljs.core.count.call(null,c__4317__auto___7510);
var G__7514 = (0);
seq__7471_7499 = G__7511;
chunk__7472_7500 = G__7512;
count__7473_7501 = G__7513;
i__7474_7502 = G__7514;
continue;
} else {
var ch_7515 = cljs.core.first.call(null,seq__7471_7509__$1);
e.appendChild(ch_7515);


var G__7516 = cljs.core.next.call(null,seq__7471_7509__$1);
var G__7517 = null;
var G__7518 = (0);
var G__7519 = (0);
seq__7471_7499 = G__7516;
chunk__7472_7500 = G__7517;
count__7473_7501 = G__7518;
i__7474_7502 = G__7519;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq7464){
var G__7465 = cljs.core.first.call(null,seq7464);
var seq7464__$1 = cljs.core.next.call(null,seq7464);
var G__7466 = cljs.core.first.call(null,seq7464__$1);
var seq7464__$2 = cljs.core.next.call(null,seq7464__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7465,G__7466,seq7464__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__,hierarchy__4384__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4384__auto__,method_table__4380__auto__,prefer_table__4381__auto__,method_cache__4382__auto__,cached_hierarchy__4383__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_7520 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_7520.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_7520.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_7520.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_7520);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__7521,st_map){
var map__7522 = p__7521;
var map__7522__$1 = ((((!((map__7522 == null)))?(((((map__7522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7522):map__7522);
var container_el = cljs.core.get.call(null,map__7522__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__7522,map__7522__$1,container_el){
return (function (p__7524){
var vec__7525 = p__7524;
var k = cljs.core.nth.call(null,vec__7525,(0),null);
var v = cljs.core.nth.call(null,vec__7525,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__7522,map__7522__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__7528,dom_str){
var map__7529 = p__7528;
var map__7529__$1 = ((((!((map__7529 == null)))?(((((map__7529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7529):map__7529);
var c = map__7529__$1;
var content_area_el = cljs.core.get.call(null,map__7529__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__7531){
var map__7532 = p__7531;
var map__7532__$1 = ((((!((map__7532 == null)))?(((((map__7532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7532):map__7532);
var content_area_el = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__2950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto__){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto__){
return (function (state_7549){
var state_val_7550 = (state_7549[(1)]);
if((state_val_7550 === (1))){
var inst_7534 = (state_7549[(7)]);
var inst_7534__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_7535 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_7536 = ["10px","10px","100%","68px","1.0"];
var inst_7537 = cljs.core.PersistentHashMap.fromArrays(inst_7535,inst_7536);
var inst_7538 = cljs.core.merge.call(null,inst_7537,style);
var inst_7539 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_7534__$1,inst_7538);
var inst_7540 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_7534__$1,msg);
var inst_7541 = cljs.core.async.timeout.call(null,(300));
var state_7549__$1 = (function (){var statearr_7551 = state_7549;
(statearr_7551[(8)] = inst_7540);

(statearr_7551[(9)] = inst_7539);

(statearr_7551[(7)] = inst_7534__$1);

return statearr_7551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7549__$1,(2),inst_7541);
} else {
if((state_val_7550 === (2))){
var inst_7534 = (state_7549[(7)]);
var inst_7543 = (state_7549[(2)]);
var inst_7544 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_7545 = ["auto"];
var inst_7546 = cljs.core.PersistentHashMap.fromArrays(inst_7544,inst_7545);
var inst_7547 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_7534,inst_7546);
var state_7549__$1 = (function (){var statearr_7552 = state_7549;
(statearr_7552[(10)] = inst_7543);

return statearr_7552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7549__$1,inst_7547);
} else {
return null;
}
}
});})(c__2950__auto__))
;
return ((function (switch__2906__auto__,c__2950__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto____0 = (function (){
var statearr_7553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7553[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto__);

(statearr_7553[(1)] = (1));

return statearr_7553;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto____1 = (function (state_7549){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_7549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e7554){if((e7554 instanceof Object)){
var ex__2910__auto__ = e7554;
var statearr_7555_7557 = state_7549;
(statearr_7555_7557[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7558 = state_7549;
state_7549 = G__7558;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto__ = function(state_7549){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto____1.call(this,state_7549);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto__))
})();
var state__2952__auto__ = (function (){var statearr_7556 = f__2951__auto__.call(null);
(statearr_7556[(6)] = c__2950__auto__);

return statearr_7556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto__))
);

return c__2950__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__7560 = arguments.length;
switch (G__7560) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__7562){
var map__7563 = p__7562;
var map__7563__$1 = ((((!((map__7563 == null)))?(((((map__7563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7563):map__7563);
var file = cljs.core.get.call(null,map__7563__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7563__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7563__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__3920__auto__ = file;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__7565){
var vec__7566 = p__7565;
var typ = cljs.core.nth.call(null,vec__7566,(0),null);
var line_number = cljs.core.nth.call(null,vec__7566,(1),null);
var line = cljs.core.nth.call(null,vec__7566,(2),null);
var pred__7569 = cljs.core._EQ_;
var expr__7570 = typ;
if(cljs.core.truth_(pred__7569.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__7570))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__7569.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__7570))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__7569.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__7570))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__7572_SHARP_){
return cljs.core.update_in.call(null,p1__7572_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__7573_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__7573_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__7576){
var map__7577 = p__7576;
var map__7577__$1 = ((((!((map__7577 == null)))?(((((map__7577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7577):map__7577);
var exception = map__7577__$1;
var message = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__3909__auto__ = file;
if(cljs.core.truth_(and__3909__auto__)){
return line;
} else {
return and__3909__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__7577,map__7577__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__7574_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7574_SHARP_),"</div>"].join('');
});})(last_message,map__7577,map__7577__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__7577,map__7577__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__7575_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__7575_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__7575_SHARP_)))].join('');
});})(last_message,map__7577,map__7577__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__7579){
var map__7580 = p__7579;
var map__7580__$1 = ((((!((map__7580 == null)))?(((((map__7580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7580):map__7580);
var file = cljs.core.get.call(null,map__7580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7580__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7580__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__7583 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__7583__$1 = ((((!((map__7583 == null)))?(((((map__7583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7583):map__7583);
var head = cljs.core.get.call(null,map__7583__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__7583__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__7583__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__7583__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__7583__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7583__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7583__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__7586){
var map__7587 = p__7586;
var map__7587__$1 = ((((!((map__7587 == null)))?(((((map__7587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7587):map__7587);
var warning_data = map__7587__$1;
var file = cljs.core.get.call(null,map__7587__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7587__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7587__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__7587__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__7587__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__3909__auto__ = file;
if(cljs.core.truth_(and__3909__auto__)){
return line;
} else {
return and__3909__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__7587,map__7587__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__7585_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7585_SHARP_),"</div>"].join('');
});})(last_message,map__7587,map__7587__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__7589 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__7589__$1 = ((((!((map__7589 == null)))?(((((map__7589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7589):map__7589);
var head = cljs.core.get.call(null,map__7589__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__7589__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__7589__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__7589__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__7589__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7589__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7589__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__7591){
var map__7592 = p__7591;
var map__7592__$1 = ((((!((map__7592 == null)))?(((((map__7592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7592):map__7592);
var warning_data = map__7592__$1;
var message = cljs.core.get.call(null,map__7592__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__7592__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7592__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7592__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__7594 = message;
var G__7594__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7594)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__7594);
var G__7594__$2 = (cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7594__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__7594__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7594__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__7594__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__7595){
var map__7596 = p__7595;
var map__7596__$1 = ((((!((map__7596 == null)))?(((((map__7596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7596):map__7596);
var warning_data = map__7596__$1;
var message = cljs.core.get.call(null,map__7596__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__7596__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7596__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7596__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__7598 = figwheel.client.heads_up.ensure_container.call(null);
var map__7598__$1 = ((((!((map__7598 == null)))?(((((map__7598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7598):map__7598);
var content_area_el = cljs.core.get.call(null,map__7598__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__2950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto__){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto__){
return (function (state_7617){
var state_val_7618 = (state_7617[(1)]);
if((state_val_7618 === (1))){
var inst_7600 = (state_7617[(7)]);
var inst_7600__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_7601 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_7602 = ["0.0"];
var inst_7603 = cljs.core.PersistentHashMap.fromArrays(inst_7601,inst_7602);
var inst_7604 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_7600__$1,inst_7603);
var inst_7605 = cljs.core.async.timeout.call(null,(300));
var state_7617__$1 = (function (){var statearr_7619 = state_7617;
(statearr_7619[(7)] = inst_7600__$1);

(statearr_7619[(8)] = inst_7604);

return statearr_7619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7617__$1,(2),inst_7605);
} else {
if((state_val_7618 === (2))){
var inst_7600 = (state_7617[(7)]);
var inst_7607 = (state_7617[(2)]);
var inst_7608 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_7609 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_7610 = cljs.core.PersistentHashMap.fromArrays(inst_7608,inst_7609);
var inst_7611 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_7600,inst_7610);
var inst_7612 = cljs.core.async.timeout.call(null,(200));
var state_7617__$1 = (function (){var statearr_7620 = state_7617;
(statearr_7620[(9)] = inst_7611);

(statearr_7620[(10)] = inst_7607);

return statearr_7620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7617__$1,(3),inst_7612);
} else {
if((state_val_7618 === (3))){
var inst_7600 = (state_7617[(7)]);
var inst_7614 = (state_7617[(2)]);
var inst_7615 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_7600,"");
var state_7617__$1 = (function (){var statearr_7621 = state_7617;
(statearr_7621[(11)] = inst_7614);

return statearr_7621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7617__$1,inst_7615);
} else {
return null;
}
}
}
});})(c__2950__auto__))
;
return ((function (switch__2906__auto__,c__2950__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__2907__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__2907__auto____0 = (function (){
var statearr_7622 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7622[(0)] = figwheel$client$heads_up$clear_$_state_machine__2907__auto__);

(statearr_7622[(1)] = (1));

return statearr_7622;
});
var figwheel$client$heads_up$clear_$_state_machine__2907__auto____1 = (function (state_7617){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_7617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e7623){if((e7623 instanceof Object)){
var ex__2910__auto__ = e7623;
var statearr_7624_7626 = state_7617;
(statearr_7624_7626[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7627 = state_7617;
state_7617 = G__7627;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__2907__auto__ = function(state_7617){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__2907__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__2907__auto____1.call(this,state_7617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__2907__auto____0;
figwheel$client$heads_up$clear_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__2907__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto__))
})();
var state__2952__auto__ = (function (){var statearr_7625 = f__2951__auto__.call(null);
(statearr_7625[(6)] = c__2950__auto__);

return statearr_7625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto__))
);

return c__2950__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__2950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2950__auto__){
return (function (){
var f__2951__auto__ = (function (){var switch__2906__auto__ = ((function (c__2950__auto__){
return (function (state_7638){
var state_val_7639 = (state_7638[(1)]);
if((state_val_7639 === (1))){
var inst_7628 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_7638__$1 = state_7638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7638__$1,(2),inst_7628);
} else {
if((state_val_7639 === (2))){
var inst_7630 = (state_7638[(2)]);
var inst_7631 = cljs.core.async.timeout.call(null,(400));
var state_7638__$1 = (function (){var statearr_7640 = state_7638;
(statearr_7640[(7)] = inst_7630);

return statearr_7640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7638__$1,(3),inst_7631);
} else {
if((state_val_7639 === (3))){
var inst_7633 = (state_7638[(2)]);
var inst_7634 = figwheel.client.heads_up.clear.call(null);
var state_7638__$1 = (function (){var statearr_7641 = state_7638;
(statearr_7641[(8)] = inst_7633);

return statearr_7641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7638__$1,(4),inst_7634);
} else {
if((state_val_7639 === (4))){
var inst_7636 = (state_7638[(2)]);
var state_7638__$1 = state_7638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7638__$1,inst_7636);
} else {
return null;
}
}
}
}
});})(c__2950__auto__))
;
return ((function (switch__2906__auto__,c__2950__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto____0 = (function (){
var statearr_7642 = [null,null,null,null,null,null,null,null,null];
(statearr_7642[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto__);

(statearr_7642[(1)] = (1));

return statearr_7642;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto____1 = (function (state_7638){
while(true){
var ret_value__2908__auto__ = (function (){try{while(true){
var result__2909__auto__ = switch__2906__auto__.call(null,state_7638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2909__auto__;
}
break;
}
}catch (e7643){if((e7643 instanceof Object)){
var ex__2910__auto__ = e7643;
var statearr_7644_7646 = state_7638;
(statearr_7644_7646[(5)] = ex__2910__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7647 = state_7638;
state_7638 = G__7647;
continue;
} else {
return ret_value__2908__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto__ = function(state_7638){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto____1.call(this,state_7638);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__2907__auto__;
})()
;})(switch__2906__auto__,c__2950__auto__))
})();
var state__2952__auto__ = (function (){var statearr_7645 = f__2951__auto__.call(null);
(statearr_7645[(6)] = c__2950__auto__);

return statearr_7645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2952__auto__);
});})(c__2950__auto__))
);

return c__2950__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});
