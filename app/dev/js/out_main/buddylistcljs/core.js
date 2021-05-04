// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('buddylistcljs.forjure');
goog.require('buddylistcljs.user');
buddylistcljs.core.path = cljs.nodejs.require.call(null,"path");
buddylistcljs.core.client = cljs.nodejs.require.call(null,"faye-websocket").Client;
buddylistcljs.core.Electron = cljs.nodejs.require.call(null,"electron");
buddylistcljs.core.BrowserWindow = buddylistcljs.core.Electron.BrowserWindow;
buddylistcljs.core.ipc_main = buddylistcljs.core.Electron.ipcMain;
buddylistcljs.core.crash_reporter = buddylistcljs.core.Electron.crashReporter;
buddylistcljs.core.Os = cljs.nodejs.require.call(null,"os");
buddylistcljs.core._STAR_win_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
buddylistcljs.core._STAR_user_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
buddylistcljs.core.app = buddylistcljs.core.Electron.app;
buddylistcljs.core.on_buddy_message = (function buddylistcljs$core$on_buddy_message(e){
cljs.core.println.call(null,"Message: ",e.data);

if(cljs.core.not_EQ_.call(null,cljs.core.first.call(null,e.data),"{")){
var buddies = buddylistcljs.user.cache_buddies_str.call(null,e.data);
cljs.core.println.call(null,"buddies: ",buddies);

new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).webContents.send("buddies",buddies);

return cljs.core.println.call(null,"sent to client ",new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).webContents);
} else {
var new_status = new cljs.core.Keyword(null,"new-status","new-status",584395313).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,JSON.parse(e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_user_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new_status);

buddylistcljs.user.cache_user.call(null,cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_));

return new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).webContents.send("user",JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_))));
}
});
buddylistcljs.core.launch_buddylist = (function buddylistcljs$core$launch_buddylist(){
cljs.core.println.call(null,"user:",cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_));

cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"buddylist","buddylist",275565366),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(700),new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),true,new cljs.core.Keyword(null,"contextIsolation","contextIsolation",-277188069),false], null)], null)))));

new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.path.resolve(__dirname,"../html/buddylist.html"))].join(''));

new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).webContents.on("did-finish-load",(function (){
new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).webContents.send("user",JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_))));

var socket = (new buddylistcljs.core.client("ws://50.16.117.236:8000/buddies",null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_)),new cljs.core.Keyword(null,"request-user","request-user",2052007844),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_))], null)], null))));
socket.on("open",((function (socket){
return (function (p1__4160_SHARP_){
return cljs.core.println.call(null,"Opening connection",p1__4160_SHARP_);
});})(socket))
);

socket.on("close",((function (socket){
return (function (p1__4161_SHARP_){
return cljs.core.println.call(null,"Closing connection",p1__4161_SHARP_);
});})(socket))
);

socket.on("message",buddylistcljs.core.on_buddy_message);

return buddylistcljs.core.ipc_main.on("buddies:new-status",((function (socket){
return (function (_,new_status){
cljs.core.println.call(null,"received new-status",new_status);

var package$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-status","new-status",584395313),new_status], null);
var encoded_message = JSON.stringify(cljs.core.clj__GT_js.call(null,package$));
return socket.send(encoded_message);
});})(socket))
);
}));

return new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).on("closed",(function (){
return cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.dissoc,new cljs.core.Keyword(null,"buddylist","buddylist",275565366));
}));
});
buddylistcljs.core.ipc_main.on("login",(function (_,username,password){
return buddylistcljs.user.log_in.call(null,username,password).then((function (user){
cljs.core.reset_BANG_.call(null,buddylistcljs.core._STAR_user_STAR_,user);

new cljs.core.Keyword(null,"authentication","authentication",1746273042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).close();

return buddylistcljs.core.launch_buddylist.call(null);
}));
}));
buddylistcljs.core.ipc_main.on("signup",(function (_,username,phone,password){
return buddylistcljs.user.sign_up.call(null,username,phone,password).then((function (user){
cljs.core.reset_BANG_.call(null,buddylistcljs.core._STAR_user_STAR_,user);

new cljs.core.Keyword(null,"authentication","authentication",1746273042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).close();

return buddylistcljs.core.launch_buddylist.call(null);
}));
}));
buddylistcljs.core.on_message_recieved = (function buddylistcljs$core$on_message_recieved(with_user,e){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"chats","chats",518672204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)),with_user).webContents.send("chat:received",e.data);
});
buddylistcljs.core.launch_chat = (function buddylistcljs$core$launch_chat(with_user){
cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats","chats",518672204),with_user], null),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),true,new cljs.core.Keyword(null,"contextIsolation","contextIsolation",-277188069),false], null)], null)))));

cljs.core.get.call(null,new cljs.core.Keyword(null,"chats","chats",518672204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)),with_user).loadFile(buddylistcljs.core.path.resolve(__dirname,"../html/chat.html"),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-user","with-user",1719589037),with_user], null)], null)));

cljs.core.get.call(null,new cljs.core.Keyword(null,"chats","chats",518672204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)),with_user).webContents.on("did-finish-load",(function (){
var socket = (new buddylistcljs.core.client(["ws://50.16.117.236:8000/chat?with-user=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(with_user)].join(''),null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_)),new cljs.core.Keyword(null,"request-user","request-user",2052007844),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_))], null)], null))));
socket.on("open",((function (socket){
return (function (p1__4162_SHARP_){
return cljs.core.println.call(null,"Opening connection",p1__4162_SHARP_);
});})(socket))
);

socket.on("close",((function (socket){
return (function (p1__4163_SHARP_){
return cljs.core.println.call(null,"Closing connection",p1__4163_SHARP_);
});})(socket))
);

socket.on("message",((function (socket){
return (function (p1__4164_SHARP_){
return buddylistcljs.core.on_message_recieved.call(null,with_user,p1__4164_SHARP_);
});})(socket))
);

return buddylistcljs.core.ipc_main.on(["chat:sent:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(with_user)].join(''),((function (socket){
return (function (_,message){
var package$ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),with_user,new cljs.core.Keyword(null,"message","message",-406056002),message], null);
var encoded_message = JSON.stringify(cljs.core.clj__GT_js.call(null,package$));
return socket.send(encoded_message);
});})(socket))
);
}));

return cljs.core.get.call(null,new cljs.core.Keyword(null,"chats","chats",518672204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)),with_user).on("closed",(function (){
return cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,buddylistcljs.forjure.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats","chats",518672204),with_user], null));
}));
});
buddylistcljs.core.ipc_main.on("buddies:selected",(function (_,username){
if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"chats","chats",518672204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)),username))){
return buddylistcljs.core.launch_chat.call(null,username);
} else {
return cljs.core.get.call(null,new cljs.core.Keyword(null,"chats","chats",518672204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)),username).show();
}
}));
buddylistcljs.core.ipc_main.on("addbuddy",(function (_,buddy_username){
return buddylistcljs.user.add_buddy.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_)),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_)),buddy_username).then((function (m){
new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).reload();

return new cljs.core.Keyword(null,"add-buddy","add-buddy",687628777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).close();
}));
}));
buddylistcljs.core.open_addbuddy_win = (function buddylistcljs$core$open_addbuddy_win(){
cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"add-buddy","add-buddy",687628777),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),true,new cljs.core.Keyword(null,"contextIsolation","contextIsolation",-277188069),false], null)], null)))));

new cljs.core.Keyword(null,"add-buddy","add-buddy",687628777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.path.resolve(__dirname,"../html/addbuddy.html"))].join(''));

return new cljs.core.Keyword(null,"add-buddy","add-buddy",687628777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).on("closed",(function (){
return cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.dissoc,new cljs.core.Keyword(null,"add-buddy","add-buddy",687628777));
}));
});
buddylistcljs.core.ipc_main.on("open-addbuddy",(function (_){
return buddylistcljs.core.open_addbuddy_win.call(null);
}));
buddylistcljs.core.launch_unauth_flow = (function buddylistcljs$core$launch_unauth_flow(){
new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).close();

cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"authentication","authentication",1746273042),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),true,new cljs.core.Keyword(null,"contextIsolation","contextIsolation",-277188069),false], null)], null)))));

new cljs.core.Keyword(null,"authentication","authentication",1746273042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.path.resolve(__dirname,"../html/authentication.html"))].join(''));

return new cljs.core.Keyword(null,"authentication","authentication",1746273042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).on("closed",(function (){
return cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.dissoc,new cljs.core.Keyword(null,"authentication","authentication",1746273042));
}));
});
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

return buddylistcljs.core.app.on("ready",(function (){
cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"loading","loading",-737050189),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)))));

new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.path.resolve(__dirname,"../index.html"))].join(''));

var temp__4655__auto__ = buddylistcljs.user.get_user.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var user = temp__4655__auto__;
return user.then(((function (user,temp__4655__auto__){
return (function (p1__4165_SHARP_){
if(cljs.core.truth_(p1__4165_SHARP_)){
cljs.core.println.call(null,"User:",p1__4165_SHARP_);

cljs.core.reset_BANG_.call(null,buddylistcljs.core._STAR_user_STAR_,p1__4165_SHARP_);

new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).close();

buddylistcljs.core.launch_buddylist.call(null);

return buddylistcljs.user.cache_user.call(null,cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_));
} else {
return buddylistcljs.core.launch_unauth_flow.call(null);
}
});})(user,temp__4655__auto__))
);
} else {
return buddylistcljs.core.launch_unauth_flow.call(null);
}
}));
});
cljs.nodejs.enable_util_print_BANG_.call(null);
console.log(["Start descjop application on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.Os.type()),"."].join(''));
cljs.core._STAR_main_cli_fn_STAR_ = buddylistcljs.core._main;
