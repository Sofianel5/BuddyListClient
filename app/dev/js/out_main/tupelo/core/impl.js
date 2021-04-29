// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('tupelo.core.impl');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('schema.core');
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
tupelo.core.impl.cljs_env_QMARK_ = (function tupelo$core$impl$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
var ret__4531__auto___5940 = /**
 * Return then if we are generating cljs code and else for Clojure code.
 * https://groups.google.com/d/msg/clojurescript/iBY5HaQda4A/w1lAQi9_AwsJ
 */
tupelo.core.impl.if_cljs = (function tupelo$core$impl$if_cljs(_AMPERSAND_form,_AMPERSAND_env,then,else$){
if(cljs.core.truth_(tupelo.core.impl.cljs_env_QMARK_.call(null,_AMPERSAND_env))){
return then;
} else {
return else$;
}
});
tupelo.core.impl.if_cljs.cljs$lang$macro = true;

var ret__4531__auto___5947 = (function (){
/**
 * A cross-platform variant of try-catch that catches all exceptions.
 * Does not (yet) support finally, and does not need or want an exception class.
 */
tupelo.core.impl.try_catchall = (function tupelo$core$impl$try_catchall(var_args){
var args__4500__auto__ = [];
var len__4497__auto___5948 = arguments.length;
var i__4498__auto___5949 = (0);
while(true){
if((i__4498__auto___5949 < len__4497__auto___5948)){
args__4500__auto__.push((arguments[i__4498__auto___5949]));

var G__5950 = (i__4498__auto___5949 + (1));
i__4498__auto___5949 = G__5950;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return tupelo.core.impl.try_catchall.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

tupelo.core.impl.try_catchall.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
var try_body = cljs.core.butlast.call(null,body);
var vec__5944 = cljs.core.last.call(null,body);
var seq__5945 = cljs.core.seq.call(null,vec__5944);
var first__5946 = cljs.core.first.call(null,seq__5945);
var seq__5945__$1 = cljs.core.next.call(null,seq__5945);
var catch_op = first__5946;
var first__5946__$1 = cljs.core.first.call(null,seq__5945__$1);
var seq__5945__$2 = cljs.core.next.call(null,seq__5945__$1);
var ex_symbol = first__5946__$1;
var catch_body = seq__5945__$2;
var catch_form = vec__5944;


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core.impl","if-cljs","tupelo.core.impl/if-cljs",665227380,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),try_body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Object","js/Object",61215323,null),null,(1),null)),(new cljs.core.List(null,ex_symbol,null,(1),null)),catch_body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),try_body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core.impl","Throwable","tupelo.core.impl/Throwable",-227350237,null),null,(1),null)),(new cljs.core.List(null,ex_symbol,null,(1),null)),catch_body))),null,(1),null))))),null,(1),null)))));
});

tupelo.core.impl.try_catchall.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tupelo.core.impl.try_catchall.cljs$lang$applyTo = (function (seq5941){
var G__5942 = cljs.core.first.call(null,seq5941);
var seq5941__$1 = cljs.core.next.call(null,seq5941);
var G__5943 = cljs.core.first.call(null,seq5941__$1);
var seq5941__$2 = cljs.core.next.call(null,seq5941__$1);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5942,G__5943,seq5941__$2);
});

return null;
})()
;
tupelo.core.impl.try_catchall.cljs$lang$macro = true;

/**
 * Returns the type/class name of a value as a string.  Works for both CLJ and CLJS.
 */
tupelo.core.impl.type_name_str = (function tupelo$core$impl$type_name_str(arg){
var captured = (function (){var sb__4428__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_5951_5953 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_5952_5954 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_5951_5953,_STAR_print_fn_STAR_5952_5954,sb__4428__auto__){
return (function (x__4429__auto__){
return sb__4428__auto__.append(x__4429__auto__);
});})(_STAR_print_newline_STAR_5951_5953,_STAR_print_fn_STAR_5952_5954,sb__4428__auto__))
;

try{cljs.core.pr.call(null,cljs.core.type.call(null,arg));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_5952_5954;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_5951_5953;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4428__auto__)].join('');
})();
return captured;
});
/**
 * Returns true iff arg is a native Java or JavaScript array.
 */
tupelo.core.impl.native_array_QMARK_ = (function tupelo$core$impl$native_array_QMARK_(arg){
return cljs.core.boolean$.call(null,cljs.core.array_QMARK_.call(null,arg));
});
