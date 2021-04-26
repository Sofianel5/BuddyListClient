// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('buddylistcljs.user');
goog.require('cljs.core.async');
buddylistcljs.core.path = cljs.nodejs.require.call(null,"path");
buddylistcljs.core.Electron = cljs.nodejs.require.call(null,"electron");
buddylistcljs.core.BrowserWindow = buddylistcljs.core.Electron.BrowserWindow;
buddylistcljs.core.ipc_main = buddylistcljs.core.Electron.ipcMain;
buddylistcljs.core.crash_reporter = buddylistcljs.core.Electron.crashReporter;
buddylistcljs.core.Os = cljs.nodejs.require.call(null,"os");
buddylistcljs.core._STAR_win_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
buddylistcljs.core.app = buddylistcljs.core.Electron.app;
buddylistcljs.core._main = (function buddylistcljs$core$_main(){
buddylistcljs.core.crash_reporter.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"companyName","companyName",2030952346),"BuddyList",new cljs.core.Keyword(null,"submitURL","submitURL",-169159433),"http://buddylistapp.com"], null)));

cljs.nodejs.process.on("error",(function (err){
return console.log(err);
}));

buddylistcljs.core.app.on("window-all-closed",(function (){
if(cljs.core.not_EQ_.call(null,cljs.nodejs.process.platform,"darwin")){
return buddylistcljs.core.app.quit();
} else {
return null;
}
}));

buddylistcljs.core.ipc_main.on("login",(function (event,username,password){
cljs.core.println.call(null,event);

cljs.core.println.call(null,username,", ",password);

return buddylistcljs.user.log_in.call(null,username,password).then((function (p1__4100_SHARP_){
return cljs.core.println.call(null,["printing: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4100_SHARP_)].join(''));
}));
}));

return buddylistcljs.core.app.on("ready",(function (){
cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"loading","loading",-737050189),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)))));

new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.path.resolve(__dirname,"../index.html"))].join(''));

var temp__4655__auto__ = buddylistcljs.user.get_cached_user.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var user = temp__4655__auto__;
new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).close();

cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"buddylist","buddylist",275565366),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(1000),new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),true], null)], null)))));

new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.path.resolve(__dirname,"../html/buddylist.html"))].join(''));

return new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).on("closed",((function (user,temp__4655__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.dissoc,new cljs.core.Keyword(null,"buddylist","buddylist",275565366));
});})(user,temp__4655__auto__))
);
} else {
new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).close();

cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"authentication","authentication",1746273042),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),true], null)], null)))));

new cljs.core.Keyword(null,"authentication","authentication",1746273042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.path.resolve(__dirname,"../html/authentication.html"))].join(''));

return new cljs.core.Keyword(null,"authentication","authentication",1746273042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).on("closed",((function (temp__4655__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.dissoc,new cljs.core.Keyword(null,"authentication","authentication",1746273042));
});})(temp__4655__auto__))
);
}
}));
});
cljs.nodejs.enable_util_print_BANG_.call(null);
console.log(["Start descjop application on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.Os.type()),"."].join(''));
cljs.core._STAR_main_cli_fn_STAR_ = buddylistcljs.core._main;
