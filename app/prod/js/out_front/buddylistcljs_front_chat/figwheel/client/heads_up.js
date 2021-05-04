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
var len__4497__auto___7151 = arguments.length;
var i__4498__auto___7152 = (0);
while(true){
if((i__4498__auto___7152 < len__4497__auto___7151)){
args__4500__auto__.push((arguments[i__4498__auto___7152]));

var G__7153 = (i__4498__auto___7152 + (1));
i__4498__auto___7152 = G__7153;
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
var seq__7143_7154 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__7144_7155 = null;
var count__7145_7156 = (0);
var i__7146_7157 = (0);
while(true){
if((i__7146_7157 < count__7145_7156)){
var k_7158 = cljs.core._nth.call(null,chunk__7144_7155,i__7146_7157);
e.setAttribute(cljs.core.name.call(null,k_7158),cljs.core.get.call(null,attrs,k_7158));


var G__7159 = seq__7143_7154;
var G__7160 = chunk__7144_7155;
var G__7161 = count__7145_7156;
var G__7162 = (i__7146_7157 + (1));
seq__7143_7154 = G__7159;
chunk__7144_7155 = G__7160;
count__7145_7156 = G__7161;
i__7146_7157 = G__7162;
continue;
} else {
var temp__4657__auto___7163 = cljs.core.seq.call(null,seq__7143_7154);
if(temp__4657__auto___7163){
var seq__7143_7164__$1 = temp__4657__auto___7163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7143_7164__$1)){
var c__4317__auto___7165 = cljs.core.chunk_first.call(null,seq__7143_7164__$1);
var G__7166 = cljs.core.chunk_rest.call(null,seq__7143_7164__$1);
var G__7167 = c__4317__auto___7165;
var G__7168 = cljs.core.count.call(null,c__4317__auto___7165);
var G__7169 = (0);
seq__7143_7154 = G__7166;
chunk__7144_7155 = G__7167;
count__7145_7156 = G__7168;
i__7146_7157 = G__7169;
continue;
} else {
var k_7170 = cljs.core.first.call(null,seq__7143_7164__$1);
e.setAttribute(cljs.core.name.call(null,k_7170),cljs.core.get.call(null,attrs,k_7170));


var G__7171 = cljs.core.next.call(null,seq__7143_7164__$1);
var G__7172 = null;
var G__7173 = (0);
var G__7174 = (0);
seq__7143_7154 = G__7171;
chunk__7144_7155 = G__7172;
count__7145_7156 = G__7173;
i__7146_7157 = G__7174;
continue;
}
} else {
}
}
break;
}

var seq__7147_7175 = cljs.core.seq.call(null,children);
var chunk__7148_7176 = null;
var count__7149_7177 = (0);
var i__7150_7178 = (0);
while(true){
if((i__7150_7178 < count__7149_7177)){
var ch_7179 = cljs.core._nth.call(null,chunk__7148_7176,i__7150_7178);
e.appendChild(ch_7179);


var G__7180 = seq__7147_7175;
var G__7181 = chunk__7148_7176;
var G__7182 = count__7149_7177;
var G__7183 = (i__7150_7178 + (1));
seq__7147_7175 = G__7180;
chunk__7148_7176 = G__7181;
count__7149_7177 = G__7182;
i__7150_7178 = G__7183;
continue;
} else {
var temp__4657__auto___7184 = cljs.core.seq.call(null,seq__7147_7175);
if(temp__4657__auto___7184){
var seq__7147_7185__$1 = temp__4657__auto___7184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7147_7185__$1)){
var c__4317__auto___7186 = cljs.core.chunk_first.call(null,seq__7147_7185__$1);
var G__7187 = cljs.core.chunk_rest.call(null,seq__7147_7185__$1);
var G__7188 = c__4317__auto___7186;
var G__7189 = cljs.core.count.call(null,c__4317__auto___7186);
var G__7190 = (0);
seq__7147_7175 = G__7187;
chunk__7148_7176 = G__7188;
count__7149_7177 = G__7189;
i__7150_7178 = G__7190;
continue;
} else {
var ch_7191 = cljs.core.first.call(null,seq__7147_7185__$1);
e.appendChild(ch_7191);


var G__7192 = cljs.core.next.call(null,seq__7147_7185__$1);
var G__7193 = null;
var G__7194 = (0);
var G__7195 = (0);
seq__7147_7175 = G__7192;
chunk__7148_7176 = G__7193;
count__7149_7177 = G__7194;
i__7150_7178 = G__7195;
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
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq7140){
var G__7141 = cljs.core.first.call(null,seq7140);
var seq7140__$1 = cljs.core.next.call(null,seq7140);
var G__7142 = cljs.core.first.call(null,seq7140__$1);
var seq7140__$2 = cljs.core.next.call(null,seq7140__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7141,G__7142,seq7140__$2);
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
var el_7196 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_7196.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_7196.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_7196.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_7196);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__7197,st_map){
var map__7198 = p__7197;
var map__7198__$1 = ((((!((map__7198 == null)))?(((((map__7198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7198):map__7198);
var container_el = cljs.core.get.call(null,map__7198__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__7198,map__7198__$1,container_el){
return (function (p__7200){
var vec__7201 = p__7200;
var k = cljs.core.nth.call(null,vec__7201,(0),null);
var v = cljs.core.nth.call(null,vec__7201,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__7198,map__7198__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__7204,dom_str){
var map__7205 = p__7204;
var map__7205__$1 = ((((!((map__7205 == null)))?(((((map__7205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7205):map__7205);
var c = map__7205__$1;
var content_area_el = cljs.core.get.call(null,map__7205__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__7207){
var map__7208 = p__7207;
var map__7208__$1 = ((((!((map__7208 == null)))?(((((map__7208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7208):map__7208);
var content_area_el = cljs.core.get.call(null,map__7208__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__4186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4186__auto__){
return (function (){
var f__4187__auto__ = (function (){var switch__4142__auto__ = ((function (c__4186__auto__){
return (function (state_7225){
var state_val_7226 = (state_7225[(1)]);
if((state_val_7226 === (1))){
var inst_7210 = (state_7225[(7)]);
var inst_7210__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_7211 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_7212 = ["10px","10px","100%","68px","1.0"];
var inst_7213 = cljs.core.PersistentHashMap.fromArrays(inst_7211,inst_7212);
var inst_7214 = cljs.core.merge.call(null,inst_7213,style);
var inst_7215 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_7210__$1,inst_7214);
var inst_7216 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_7210__$1,msg);
var inst_7217 = cljs.core.async.timeout.call(null,(300));
var state_7225__$1 = (function (){var statearr_7227 = state_7225;
(statearr_7227[(8)] = inst_7216);

(statearr_7227[(7)] = inst_7210__$1);

(statearr_7227[(9)] = inst_7215);

return statearr_7227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7225__$1,(2),inst_7217);
} else {
if((state_val_7226 === (2))){
var inst_7210 = (state_7225[(7)]);
var inst_7219 = (state_7225[(2)]);
var inst_7220 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_7221 = ["auto"];
var inst_7222 = cljs.core.PersistentHashMap.fromArrays(inst_7220,inst_7221);
var inst_7223 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_7210,inst_7222);
var state_7225__$1 = (function (){var statearr_7228 = state_7225;
(statearr_7228[(10)] = inst_7219);

return statearr_7228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7225__$1,inst_7223);
} else {
return null;
}
}
});})(c__4186__auto__))
;
return ((function (switch__4142__auto__,c__4186__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto____0 = (function (){
var statearr_7229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7229[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto__);

(statearr_7229[(1)] = (1));

return statearr_7229;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto____1 = (function (state_7225){
while(true){
var ret_value__4144__auto__ = (function (){try{while(true){
var result__4145__auto__ = switch__4142__auto__.call(null,state_7225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4145__auto__;
}
break;
}
}catch (e7230){if((e7230 instanceof Object)){
var ex__4146__auto__ = e7230;
var statearr_7231_7233 = state_7225;
(statearr_7231_7233[(5)] = ex__4146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7234 = state_7225;
state_7225 = G__7234;
continue;
} else {
return ret_value__4144__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto__ = function(state_7225){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto____1.call(this,state_7225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__4143__auto__;
})()
;})(switch__4142__auto__,c__4186__auto__))
})();
var state__4188__auto__ = (function (){var statearr_7232 = f__4187__auto__.call(null);
(statearr_7232[(6)] = c__4186__auto__);

return statearr_7232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4188__auto__);
});})(c__4186__auto__))
);

return c__4186__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__7236 = arguments.length;
switch (G__7236) {
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
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__7238){
var map__7239 = p__7238;
var map__7239__$1 = ((((!((map__7239 == null)))?(((((map__7239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7239):map__7239);
var file = cljs.core.get.call(null,map__7239__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7239__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7239__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__7241){
var vec__7242 = p__7241;
var typ = cljs.core.nth.call(null,vec__7242,(0),null);
var line_number = cljs.core.nth.call(null,vec__7242,(1),null);
var line = cljs.core.nth.call(null,vec__7242,(2),null);
var pred__7245 = cljs.core._EQ_;
var expr__7246 = typ;
if(cljs.core.truth_(pred__7245.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__7246))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__7245.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__7246))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__7245.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__7246))){
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
return (function (p1__7248_SHARP_){
return cljs.core.update_in.call(null,p1__7248_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__7249_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__7249_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__7252){
var map__7253 = p__7252;
var map__7253__$1 = ((((!((map__7253 == null)))?(((((map__7253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7253):map__7253);
var exception = map__7253__$1;
var message = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__7253__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__3909__auto__ = file;
if(cljs.core.truth_(and__3909__auto__)){
return line;
} else {
return and__3909__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__7253,map__7253__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__7250_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7250_SHARP_),"</div>"].join('');
});})(last_message,map__7253,map__7253__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__7253,map__7253__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__7251_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__7251_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__7251_SHARP_)))].join('');
});})(last_message,map__7253,map__7253__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__7255){
var map__7256 = p__7255;
var map__7256__$1 = ((((!((map__7256 == null)))?(((((map__7256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7256):map__7256);
var file = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__7259 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__7259__$1 = ((((!((map__7259 == null)))?(((((map__7259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7259):map__7259);
var head = cljs.core.get.call(null,map__7259__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__7259__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__7259__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__7259__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__7259__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7259__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7259__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__7262){
var map__7263 = p__7262;
var map__7263__$1 = ((((!((map__7263 == null)))?(((((map__7263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7263):map__7263);
var warning_data = map__7263__$1;
var file = cljs.core.get.call(null,map__7263__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7263__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7263__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__7263__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__7263__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__3909__auto__ = file;
if(cljs.core.truth_(and__3909__auto__)){
return line;
} else {
return and__3909__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__7263,map__7263__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__7261_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7261_SHARP_),"</div>"].join('');
});})(last_message,map__7263,map__7263__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__7265 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__7265__$1 = ((((!((map__7265 == null)))?(((((map__7265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7265):map__7265);
var head = cljs.core.get.call(null,map__7265__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__7265__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__7265__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__7265__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__7265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7265__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7265__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__7267){
var map__7268 = p__7267;
var map__7268__$1 = ((((!((map__7268 == null)))?(((((map__7268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7268):map__7268);
var warning_data = map__7268__$1;
var message = cljs.core.get.call(null,map__7268__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__7268__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7268__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7268__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__7270 = message;
var G__7270__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7270)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__7270);
var G__7270__$2 = (cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7270__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__7270__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7270__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__7270__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__7271){
var map__7272 = p__7271;
var map__7272__$1 = ((((!((map__7272 == null)))?(((((map__7272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7272):map__7272);
var warning_data = map__7272__$1;
var message = cljs.core.get.call(null,map__7272__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__7272__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__7272__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7272__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__7274 = figwheel.client.heads_up.ensure_container.call(null);
var map__7274__$1 = ((((!((map__7274 == null)))?(((((map__7274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7274):map__7274);
var content_area_el = cljs.core.get.call(null,map__7274__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
var c__4186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4186__auto__){
return (function (){
var f__4187__auto__ = (function (){var switch__4142__auto__ = ((function (c__4186__auto__){
return (function (state_7293){
var state_val_7294 = (state_7293[(1)]);
if((state_val_7294 === (1))){
var inst_7276 = (state_7293[(7)]);
var inst_7276__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_7277 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_7278 = ["0.0"];
var inst_7279 = cljs.core.PersistentHashMap.fromArrays(inst_7277,inst_7278);
var inst_7280 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_7276__$1,inst_7279);
var inst_7281 = cljs.core.async.timeout.call(null,(300));
var state_7293__$1 = (function (){var statearr_7295 = state_7293;
(statearr_7295[(8)] = inst_7280);

(statearr_7295[(7)] = inst_7276__$1);

return statearr_7295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7293__$1,(2),inst_7281);
} else {
if((state_val_7294 === (2))){
var inst_7276 = (state_7293[(7)]);
var inst_7283 = (state_7293[(2)]);
var inst_7284 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_7285 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_7286 = cljs.core.PersistentHashMap.fromArrays(inst_7284,inst_7285);
var inst_7287 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_7276,inst_7286);
var inst_7288 = cljs.core.async.timeout.call(null,(200));
var state_7293__$1 = (function (){var statearr_7296 = state_7293;
(statearr_7296[(9)] = inst_7283);

(statearr_7296[(10)] = inst_7287);

return statearr_7296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7293__$1,(3),inst_7288);
} else {
if((state_val_7294 === (3))){
var inst_7276 = (state_7293[(7)]);
var inst_7290 = (state_7293[(2)]);
var inst_7291 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_7276,"");
var state_7293__$1 = (function (){var statearr_7297 = state_7293;
(statearr_7297[(11)] = inst_7290);

return statearr_7297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7293__$1,inst_7291);
} else {
return null;
}
}
}
});})(c__4186__auto__))
;
return ((function (switch__4142__auto__,c__4186__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__4143__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__4143__auto____0 = (function (){
var statearr_7298 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7298[(0)] = figwheel$client$heads_up$clear_$_state_machine__4143__auto__);

(statearr_7298[(1)] = (1));

return statearr_7298;
});
var figwheel$client$heads_up$clear_$_state_machine__4143__auto____1 = (function (state_7293){
while(true){
var ret_value__4144__auto__ = (function (){try{while(true){
var result__4145__auto__ = switch__4142__auto__.call(null,state_7293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4145__auto__;
}
break;
}
}catch (e7299){if((e7299 instanceof Object)){
var ex__4146__auto__ = e7299;
var statearr_7300_7302 = state_7293;
(statearr_7300_7302[(5)] = ex__4146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7303 = state_7293;
state_7293 = G__7303;
continue;
} else {
return ret_value__4144__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__4143__auto__ = function(state_7293){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__4143__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__4143__auto____1.call(this,state_7293);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__4143__auto____0;
figwheel$client$heads_up$clear_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__4143__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__4143__auto__;
})()
;})(switch__4142__auto__,c__4186__auto__))
})();
var state__4188__auto__ = (function (){var statearr_7301 = f__4187__auto__.call(null);
(statearr_7301[(6)] = c__4186__auto__);

return statearr_7301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4188__auto__);
});})(c__4186__auto__))
);

return c__4186__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__4186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4186__auto__){
return (function (){
var f__4187__auto__ = (function (){var switch__4142__auto__ = ((function (c__4186__auto__){
return (function (state_7314){
var state_val_7315 = (state_7314[(1)]);
if((state_val_7315 === (1))){
var inst_7304 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_7314__$1 = state_7314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7314__$1,(2),inst_7304);
} else {
if((state_val_7315 === (2))){
var inst_7306 = (state_7314[(2)]);
var inst_7307 = cljs.core.async.timeout.call(null,(400));
var state_7314__$1 = (function (){var statearr_7316 = state_7314;
(statearr_7316[(7)] = inst_7306);

return statearr_7316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7314__$1,(3),inst_7307);
} else {
if((state_val_7315 === (3))){
var inst_7309 = (state_7314[(2)]);
var inst_7310 = figwheel.client.heads_up.clear.call(null);
var state_7314__$1 = (function (){var statearr_7317 = state_7314;
(statearr_7317[(8)] = inst_7309);

return statearr_7317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7314__$1,(4),inst_7310);
} else {
if((state_val_7315 === (4))){
var inst_7312 = (state_7314[(2)]);
var state_7314__$1 = state_7314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7314__$1,inst_7312);
} else {
return null;
}
}
}
}
});})(c__4186__auto__))
;
return ((function (switch__4142__auto__,c__4186__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto____0 = (function (){
var statearr_7318 = [null,null,null,null,null,null,null,null,null];
(statearr_7318[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto__);

(statearr_7318[(1)] = (1));

return statearr_7318;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto____1 = (function (state_7314){
while(true){
var ret_value__4144__auto__ = (function (){try{while(true){
var result__4145__auto__ = switch__4142__auto__.call(null,state_7314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4145__auto__;
}
break;
}
}catch (e7319){if((e7319 instanceof Object)){
var ex__4146__auto__ = e7319;
var statearr_7320_7322 = state_7314;
(statearr_7320_7322[(5)] = ex__4146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7323 = state_7314;
state_7314 = G__7323;
continue;
} else {
return ret_value__4144__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto__ = function(state_7314){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto____1.call(this,state_7314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__4143__auto__;
})()
;})(switch__4142__auto__,c__4186__auto__))
})();
var state__4188__auto__ = (function (){var statearr_7321 = f__4187__auto__.call(null);
(statearr_7321[(6)] = c__4186__auto__);

return statearr_7321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4188__auto__);
});})(c__4186__auto__))
);

return c__4186__auto__;
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
