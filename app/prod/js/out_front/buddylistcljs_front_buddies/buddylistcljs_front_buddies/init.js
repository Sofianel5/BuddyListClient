// Compiled by ClojureScript 1.10.191 {:elide-asserts true}
goog.provide('buddylistcljs_front_buddies.init');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('buddylistcljs_front_buddies.core');
goog.require('buddylistcljs_front_buddies.conf');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),new cljs.core.Symbol(null,"start-descjop!","start-descjop!",-2023242547,null));
buddylistcljs_front_buddies.init.start_descjop_BANG_ = (function buddylistcljs_front_buddies$init$start_descjop_BANG_(){
return buddylistcljs_front_buddies.core.init_BANG_.call(null,buddylistcljs_front_buddies.conf.setting);
});
buddylistcljs_front_buddies.init.start_descjop_BANG_.call(null);
