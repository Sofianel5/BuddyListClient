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
var len__4497__auto___11020 = arguments.length;
var i__4498__auto___11021 = (0);
while(true){
if((i__4498__auto___11021 < len__4497__auto___11020)){
args__4500__auto__.push((arguments[i__4498__auto___11021]));

var G__11022 = (i__4498__auto___11021 + (1));
i__4498__auto___11021 = G__11022;
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
var seq__11012_11023 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__11013_11024 = null;
var count__11014_11025 = (0);
var i__11015_11026 = (0);
while(true){
if((i__11015_11026 < count__11014_11025)){
var k_11027 = cljs.core._nth.call(null,chunk__11013_11024,i__11015_11026);
e.setAttribute(cljs.core.name.call(null,k_11027),cljs.core.get.call(null,attrs,k_11027));


var G__11028 = seq__11012_11023;
var G__11029 = chunk__11013_11024;
var G__11030 = count__11014_11025;
var G__11031 = (i__11015_11026 + (1));
seq__11012_11023 = G__11028;
chunk__11013_11024 = G__11029;
count__11014_11025 = G__11030;
i__11015_11026 = G__11031;
continue;
} else {
var temp__4657__auto___11032 = cljs.core.seq.call(null,seq__11012_11023);
if(temp__4657__auto___11032){
var seq__11012_11033__$1 = temp__4657__auto___11032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11012_11033__$1)){
var c__4317__auto___11034 = cljs.core.chunk_first.call(null,seq__11012_11033__$1);
var G__11035 = cljs.core.chunk_rest.call(null,seq__11012_11033__$1);
var G__11036 = c__4317__auto___11034;
var G__11037 = cljs.core.count.call(null,c__4317__auto___11034);
var G__11038 = (0);
seq__11012_11023 = G__11035;
chunk__11013_11024 = G__11036;
count__11014_11025 = G__11037;
i__11015_11026 = G__11038;
continue;
} else {
var k_11039 = cljs.core.first.call(null,seq__11012_11033__$1);
e.setAttribute(cljs.core.name.call(null,k_11039),cljs.core.get.call(null,attrs,k_11039));


var G__11040 = cljs.core.next.call(null,seq__11012_11033__$1);
var G__11041 = null;
var G__11042 = (0);
var G__11043 = (0);
seq__11012_11023 = G__11040;
chunk__11013_11024 = G__11041;
count__11014_11025 = G__11042;
i__11015_11026 = G__11043;
continue;
}
} else {
}
}
break;
}

var seq__11016_11044 = cljs.core.seq.call(null,children);
var chunk__11017_11045 = null;
var count__11018_11046 = (0);
var i__11019_11047 = (0);
while(true){
if((i__11019_11047 < count__11018_11046)){
var ch_11048 = cljs.core._nth.call(null,chunk__11017_11045,i__11019_11047);
e.appendChild(ch_11048);


var G__11049 = seq__11016_11044;
var G__11050 = chunk__11017_11045;
var G__11051 = count__11018_11046;
var G__11052 = (i__11019_11047 + (1));
seq__11016_11044 = G__11049;
chunk__11017_11045 = G__11050;
count__11018_11046 = G__11051;
i__11019_11047 = G__11052;
continue;
} else {
var temp__4657__auto___11053 = cljs.core.seq.call(null,seq__11016_11044);
if(temp__4657__auto___11053){
var seq__11016_11054__$1 = temp__4657__auto___11053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11016_11054__$1)){
var c__4317__auto___11055 = cljs.core.chunk_first.call(null,seq__11016_11054__$1);
var G__11056 = cljs.core.chunk_rest.call(null,seq__11016_11054__$1);
var G__11057 = c__4317__auto___11055;
var G__11058 = cljs.core.count.call(null,c__4317__auto___11055);
var G__11059 = (0);
seq__11016_11044 = G__11056;
chunk__11017_11045 = G__11057;
count__11018_11046 = G__11058;
i__11019_11047 = G__11059;
continue;
} else {
var ch_11060 = cljs.core.first.call(null,seq__11016_11054__$1);
e.appendChild(ch_11060);


var G__11061 = cljs.core.next.call(null,seq__11016_11054__$1);
var G__11062 = null;
var G__11063 = (0);
var G__11064 = (0);
seq__11016_11044 = G__11061;
chunk__11017_11045 = G__11062;
count__11018_11046 = G__11063;
i__11019_11047 = G__11064;
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
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq11009){
var G__11010 = cljs.core.first.call(null,seq11009);
var seq11009__$1 = cljs.core.next.call(null,seq11009);
var G__11011 = cljs.core.first.call(null,seq11009__$1);
var seq11009__$2 = cljs.core.next.call(null,seq11009__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11010,G__11011,seq11009__$2);
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
var el_11065 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_11065.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_11065.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_11065.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_11065);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__11066,st_map){
var map__11067 = p__11066;
var map__11067__$1 = ((((!((map__11067 == null)))?(((((map__11067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11067):map__11067);
var container_el = cljs.core.get.call(null,map__11067__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__11067,map__11067__$1,container_el){
return (function (p__11069){
var vec__11070 = p__11069;
var k = cljs.core.nth.call(null,vec__11070,(0),null);
var v = cljs.core.nth.call(null,vec__11070,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__11067,map__11067__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__11073,dom_str){
var map__11074 = p__11073;
var map__11074__$1 = ((((!((map__11074 == null)))?(((((map__11074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11074):map__11074);
var c = map__11074__$1;
var content_area_el = cljs.core.get.call(null,map__11074__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__11076){
var map__11077 = p__11076;
var map__11077__$1 = ((((!((map__11077 == null)))?(((((map__11077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11077):map__11077);
var content_area_el = cljs.core.get.call(null,map__11077__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__){
return (function (state_11094){
var state_val_11095 = (state_11094[(1)]);
if((state_val_11095 === (1))){
var inst_11079 = (state_11094[(7)]);
var inst_11079__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_11080 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_11081 = ["10px","10px","100%","68px","1.0"];
var inst_11082 = cljs.core.PersistentHashMap.fromArrays(inst_11080,inst_11081);
var inst_11083 = cljs.core.merge.call(null,inst_11082,style);
var inst_11084 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_11079__$1,inst_11083);
var inst_11085 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_11079__$1,msg);
var inst_11086 = cljs.core.async.timeout.call(null,(300));
var state_11094__$1 = (function (){var statearr_11096 = state_11094;
(statearr_11096[(8)] = inst_11085);

(statearr_11096[(7)] = inst_11079__$1);

(statearr_11096[(9)] = inst_11084);

return statearr_11096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11094__$1,(2),inst_11086);
} else {
if((state_val_11095 === (2))){
var inst_11079 = (state_11094[(7)]);
var inst_11088 = (state_11094[(2)]);
var inst_11089 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_11090 = ["auto"];
var inst_11091 = cljs.core.PersistentHashMap.fromArrays(inst_11089,inst_11090);
var inst_11092 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_11079,inst_11091);
var state_11094__$1 = (function (){var statearr_11097 = state_11094;
(statearr_11097[(10)] = inst_11088);

return statearr_11097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11094__$1,inst_11092);
} else {
return null;
}
}
});})(c__2146__auto__))
;
return ((function (switch__1991__auto__,c__2146__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto____0 = (function (){
var statearr_11098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11098[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto__);

(statearr_11098[(1)] = (1));

return statearr_11098;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto____1 = (function (state_11094){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_11094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e11099){if((e11099 instanceof Object)){
var ex__1995__auto__ = e11099;
var statearr_11100_11102 = state_11094;
(statearr_11100_11102[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11103 = state_11094;
state_11094 = G__11103;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto__ = function(state_11094){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto____1.call(this,state_11094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__))
})();
var state__2148__auto__ = (function (){var statearr_11101 = f__2147__auto__.call(null);
(statearr_11101[(6)] = c__2146__auto__);

return statearr_11101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__))
);

return c__2146__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__11105 = arguments.length;
switch (G__11105) {
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
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__11107){
var map__11108 = p__11107;
var map__11108__$1 = ((((!((map__11108 == null)))?(((((map__11108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11108):map__11108);
var file = cljs.core.get.call(null,map__11108__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__11108__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__11108__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__11110){
var vec__11111 = p__11110;
var typ = cljs.core.nth.call(null,vec__11111,(0),null);
var line_number = cljs.core.nth.call(null,vec__11111,(1),null);
var line = cljs.core.nth.call(null,vec__11111,(2),null);
var pred__11114 = cljs.core._EQ_;
var expr__11115 = typ;
if(cljs.core.truth_(pred__11114.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__11115))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__11114.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__11115))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__11114.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__11115))){
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
return (function (p1__11117_SHARP_){
return cljs.core.update_in.call(null,p1__11117_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__11118_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__11118_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__11121){
var map__11122 = p__11121;
var map__11122__$1 = ((((!((map__11122 == null)))?(((((map__11122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11122):map__11122);
var exception = map__11122__$1;
var message = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__11122__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__3909__auto__ = file;
if(cljs.core.truth_(and__3909__auto__)){
return line;
} else {
return and__3909__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__11122,map__11122__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__11119_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11119_SHARP_),"</div>"].join('');
});})(last_message,map__11122,map__11122__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__11122,map__11122__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__11120_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__11120_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__11120_SHARP_)))].join('');
});})(last_message,map__11122,map__11122__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__11124){
var map__11125 = p__11124;
var map__11125__$1 = ((((!((map__11125 == null)))?(((((map__11125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11125):map__11125);
var file = cljs.core.get.call(null,map__11125__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__11125__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__11125__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__11128 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__11128__$1 = ((((!((map__11128 == null)))?(((((map__11128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11128):map__11128);
var head = cljs.core.get.call(null,map__11128__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__11128__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__11128__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__11128__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__11128__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__11128__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__11128__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__11131){
var map__11132 = p__11131;
var map__11132__$1 = ((((!((map__11132 == null)))?(((((map__11132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11132):map__11132);
var warning_data = map__11132__$1;
var file = cljs.core.get.call(null,map__11132__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__11132__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__11132__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__11132__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__11132__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__3909__auto__ = file;
if(cljs.core.truth_(and__3909__auto__)){
return line;
} else {
return and__3909__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__11132,map__11132__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__11130_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11130_SHARP_),"</div>"].join('');
});})(last_message,map__11132,map__11132__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__11134 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__11134__$1 = ((((!((map__11134 == null)))?(((((map__11134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11134):map__11134);
var head = cljs.core.get.call(null,map__11134__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__11134__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__11134__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__11134__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__11134__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__11134__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__11134__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__11136){
var map__11137 = p__11136;
var map__11137__$1 = ((((!((map__11137 == null)))?(((((map__11137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11137):map__11137);
var warning_data = map__11137__$1;
var message = cljs.core.get.call(null,map__11137__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__11137__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__11137__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__11137__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__11139 = message;
var G__11139__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11139)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__11139);
var G__11139__$2 = (cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11139__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__11139__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11139__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__11139__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__11140){
var map__11141 = p__11140;
var map__11141__$1 = ((((!((map__11141 == null)))?(((((map__11141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11141):map__11141);
var warning_data = map__11141__$1;
var message = cljs.core.get.call(null,map__11141__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__11141__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__11141__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__11141__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__11143 = figwheel.client.heads_up.ensure_container.call(null);
var map__11143__$1 = ((((!((map__11143 == null)))?(((((map__11143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11143):map__11143);
var content_area_el = cljs.core.get.call(null,map__11143__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__){
return (function (state_11162){
var state_val_11163 = (state_11162[(1)]);
if((state_val_11163 === (1))){
var inst_11145 = (state_11162[(7)]);
var inst_11145__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_11146 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_11147 = ["0.0"];
var inst_11148 = cljs.core.PersistentHashMap.fromArrays(inst_11146,inst_11147);
var inst_11149 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_11145__$1,inst_11148);
var inst_11150 = cljs.core.async.timeout.call(null,(300));
var state_11162__$1 = (function (){var statearr_11164 = state_11162;
(statearr_11164[(8)] = inst_11149);

(statearr_11164[(7)] = inst_11145__$1);

return statearr_11164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11162__$1,(2),inst_11150);
} else {
if((state_val_11163 === (2))){
var inst_11145 = (state_11162[(7)]);
var inst_11152 = (state_11162[(2)]);
var inst_11153 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_11154 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_11155 = cljs.core.PersistentHashMap.fromArrays(inst_11153,inst_11154);
var inst_11156 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_11145,inst_11155);
var inst_11157 = cljs.core.async.timeout.call(null,(200));
var state_11162__$1 = (function (){var statearr_11165 = state_11162;
(statearr_11165[(9)] = inst_11152);

(statearr_11165[(10)] = inst_11156);

return statearr_11165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11162__$1,(3),inst_11157);
} else {
if((state_val_11163 === (3))){
var inst_11145 = (state_11162[(7)]);
var inst_11159 = (state_11162[(2)]);
var inst_11160 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_11145,"");
var state_11162__$1 = (function (){var statearr_11166 = state_11162;
(statearr_11166[(11)] = inst_11159);

return statearr_11166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11162__$1,inst_11160);
} else {
return null;
}
}
}
});})(c__2146__auto__))
;
return ((function (switch__1991__auto__,c__2146__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__1992__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__1992__auto____0 = (function (){
var statearr_11167 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11167[(0)] = figwheel$client$heads_up$clear_$_state_machine__1992__auto__);

(statearr_11167[(1)] = (1));

return statearr_11167;
});
var figwheel$client$heads_up$clear_$_state_machine__1992__auto____1 = (function (state_11162){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_11162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e11168){if((e11168 instanceof Object)){
var ex__1995__auto__ = e11168;
var statearr_11169_11171 = state_11162;
(statearr_11169_11171[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11172 = state_11162;
state_11162 = G__11172;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__1992__auto__ = function(state_11162){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__1992__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__1992__auto____1.call(this,state_11162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__1992__auto____0;
figwheel$client$heads_up$clear_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__1992__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__))
})();
var state__2148__auto__ = (function (){var statearr_11170 = f__2147__auto__.call(null);
(statearr_11170[(6)] = c__2146__auto__);

return statearr_11170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__))
);

return c__2146__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__2146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2146__auto__){
return (function (){
var f__2147__auto__ = (function (){var switch__1991__auto__ = ((function (c__2146__auto__){
return (function (state_11183){
var state_val_11184 = (state_11183[(1)]);
if((state_val_11184 === (1))){
var inst_11173 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_11183__$1 = state_11183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11183__$1,(2),inst_11173);
} else {
if((state_val_11184 === (2))){
var inst_11175 = (state_11183[(2)]);
var inst_11176 = cljs.core.async.timeout.call(null,(400));
var state_11183__$1 = (function (){var statearr_11185 = state_11183;
(statearr_11185[(7)] = inst_11175);

return statearr_11185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11183__$1,(3),inst_11176);
} else {
if((state_val_11184 === (3))){
var inst_11178 = (state_11183[(2)]);
var inst_11179 = figwheel.client.heads_up.clear.call(null);
var state_11183__$1 = (function (){var statearr_11186 = state_11183;
(statearr_11186[(8)] = inst_11178);

return statearr_11186;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11183__$1,(4),inst_11179);
} else {
if((state_val_11184 === (4))){
var inst_11181 = (state_11183[(2)]);
var state_11183__$1 = state_11183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11183__$1,inst_11181);
} else {
return null;
}
}
}
}
});})(c__2146__auto__))
;
return ((function (switch__1991__auto__,c__2146__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto____0 = (function (){
var statearr_11187 = [null,null,null,null,null,null,null,null,null];
(statearr_11187[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto__);

(statearr_11187[(1)] = (1));

return statearr_11187;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto____1 = (function (state_11183){
while(true){
var ret_value__1993__auto__ = (function (){try{while(true){
var result__1994__auto__ = switch__1991__auto__.call(null,state_11183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1994__auto__;
}
break;
}
}catch (e11188){if((e11188 instanceof Object)){
var ex__1995__auto__ = e11188;
var statearr_11189_11191 = state_11183;
(statearr_11189_11191[(5)] = ex__1995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11192 = state_11183;
state_11183 = G__11192;
continue;
} else {
return ret_value__1993__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto__ = function(state_11183){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto____1.call(this,state_11183);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__1992__auto__;
})()
;})(switch__1991__auto__,c__2146__auto__))
})();
var state__2148__auto__ = (function (){var statearr_11190 = f__2147__auto__.call(null);
(statearr_11190[(6)] = c__2146__auto__);

return statearr_11190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2148__auto__);
});})(c__2146__auto__))
);

return c__2146__auto__;
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

//# sourceMappingURL=heads_up.js.map
