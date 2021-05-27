// Compiled by ClojureScript 1.10.191 {:elide-asserts true, :target :nodejs}
goog.provide('buddylistcljs.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('buddylistcljs.forjure');
goog.require('buddylistcljs.user');
goog.require('buddylistcljs.util');
buddylistcljs.core.path = cljs.nodejs.require.call(null,"path");
buddylistcljs.core.client = cljs.nodejs.require.call(null,"faye-websocket").Client;
buddylistcljs.core.Electron = cljs.nodejs.require.call(null,"electron");
buddylistcljs.core.BrowserWindow = buddylistcljs.core.Electron.BrowserWindow;
buddylistcljs.core.Menu = buddylistcljs.core.Electron.Menu;
buddylistcljs.core.Tray = buddylistcljs.core.Electron.Tray;
buddylistcljs.core.ipc_main = buddylistcljs.core.Electron.ipcMain;
buddylistcljs.core.crash_reporter = buddylistcljs.core.Electron.crashReporter;
buddylistcljs.core.Os = cljs.nodejs.require.call(null,"os");
buddylistcljs.core.Notification = buddylistcljs.core.Electron.Notification;
buddylistcljs.core._STAR_win_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
buddylistcljs.core._STAR_user_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
buddylistcljs.core.app = buddylistcljs.core.Electron.app;
if(cljs.core.truth_(buddylistcljs.core.app.isPackaged)){
cljs.nodejs.process.env.NODE_ENV = "production";
} else {
cljs.core.println.call(null,cljs.nodejs.process.env.NODE_ENV);
}
buddylistcljs.core.application_menu_template = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"File",new cljs.core.Keyword(null,"submenu","submenu",2142563344),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Open buddy list",new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return cljs.core.println.call(null,"open buddy list");
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Close Window"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Edit",new cljs.core.Keyword(null,"submenu","submenu",2142563344),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Undo",new cljs.core.Keyword(null,"accelerator","accelerator",1975205785),"CmdOrCtrl+Z",new cljs.core.Keyword(null,"selector","selector",762528866),"undo:"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Redo",new cljs.core.Keyword(null,"accelerator","accelerator",1975205785),"Shift+CmdOrCtrl+Z",new cljs.core.Keyword(null,"selector","selector",762528866),"redo:"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Cut",new cljs.core.Keyword(null,"accelerator","accelerator",1975205785),"CmdOrCtrl+X",new cljs.core.Keyword(null,"selector","selector",762528866),"cut:"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Copy",new cljs.core.Keyword(null,"accelerator","accelerator",1975205785),"CmdOrCtrl+C",new cljs.core.Keyword(null,"selector","selector",762528866),"copy:"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Paste",new cljs.core.Keyword(null,"accelerator","accelerator",1975205785),"CmdOrCtrl+V",new cljs.core.Keyword(null,"selector","selector",762528866),"paste:"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Select All",new cljs.core.Keyword(null,"accelerator","accelerator",1975205785),"CmdOrCtrl+A",new cljs.core.Keyword(null,"selector","selector",762528866),"selectAll:"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Buddies",new cljs.core.Keyword(null,"submenu","submenu",2142563344),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Add Buddy",new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return cljs.core.println.call(null,"Add buddy");
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Remove Buddy",new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return cljs.core.println.call(null,"remove buddy");
})], null)], null)], null)], null);
if(cljs.core._EQ_.call(null,cljs.nodejs.process.platform,"darwin")){
buddylistcljs.core.application_menu_template = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"BuddyList",new cljs.core.Keyword(null,"submenu","submenu",2142563344),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Quit",new cljs.core.Keyword(null,"accelerator","accelerator",1975205785),((cljs.core._EQ_.call(null,cljs.nodejs.process.platform,"darwin"))?"Command+Q":"Ctrl+Q"),new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return buddylistcljs.core.app.quit();
})], null)], null)], null)], null),buddylistcljs.core.application_menu_template);
} else {
}
if(cljs.core.not_EQ_.call(null,cljs.nodejs.process.env.NODE_ENV,"production")){
buddylistcljs.core.application_menu_template = cljs.core.conj.call(null,buddylistcljs.core.application_menu_template,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Developer Tools",new cljs.core.Keyword(null,"submenu","submenu",2142563344),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Toggle DevTools",new cljs.core.Keyword(null,"click","click",1912301393),(function (p1__2204_SHARP_,p2__2203_SHARP_){
return p2__2203_SHARP_.toggleDevTools();
}),new cljs.core.Keyword(null,"accelerator","accelerator",1975205785),((cljs.core._EQ_.call(null,cljs.nodejs.process.platform,"darwin"))?"Command+I":"Ctrl+I")], null)], null)], null));
} else {
}
buddylistcljs.core.application_menu_template = cljs.core.clj__GT_js.call(null,buddylistcljs.core.application_menu_template);
cljs.core.println.call(null,JSON.stringify(buddylistcljs.core.application_menu_template));
buddylistcljs.core.on_buddy_message = (function buddylistcljs$core$on_buddy_message(e){
cljs.core.println.call(null,"Message: ",e.data);

if(cljs.core.not_EQ_.call(null,cljs.core.first.call(null,e.data),"{")){
var buddies = buddylistcljs.user.cache_buddies_str.call(null,e.data);
cljs.core.println.call(null,"buddies: ",buddies);

var temp__4655__auto__ = new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_));
if(cljs.core.truth_(temp__4655__auto__)){
var window = temp__4655__auto__;
return window.send("buddies",buddies);
} else {
return null;
}
} else {
var new_status = new cljs.core.Keyword(null,"new-status","new-status",584395313).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,JSON.parse(e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_user_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new_status);

buddylistcljs.user.cache_user.call(null,cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_));

var temp__4655__auto__ = new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_));
if(cljs.core.truth_(temp__4655__auto__)){
var window = temp__4655__auto__;
return window.webContents.send("user",JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_))));
} else {
return null;
}
}
});
buddylistcljs.core.launch_buddylist = (function buddylistcljs$core$launch_buddylist(){
cljs.core.println.call(null,"user:",cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_));

cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"buddylist","buddylist",275565366),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(700),new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),true,new cljs.core.Keyword(null,"contextIsolation","contextIsolation",-277188069),false], null)], null)))));

new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.path.resolve(__dirname,"../html/buddylist.html"))].join(''));

return new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).webContents.on("did-finish-load",(function (){
new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).webContents.send("user",JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_))));

var socket = (new buddylistcljs.core.client("ws://50.16.117.236:8000/buddies",null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_)),new cljs.core.Keyword(null,"request-user","request-user",2052007844),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_))], null)], null))));
socket.on("open",((function (socket){
return (function (p1__2205_SHARP_){
return cljs.core.println.call(null,"Opening connection",p1__2205_SHARP_);
});})(socket))
);

socket.on("close",((function (socket){
return (function (p1__2206_SHARP_){
return cljs.core.println.call(null,"Closing connection",p1__2206_SHARP_);
});})(socket))
);

socket.on("message",buddylistcljs.core.on_buddy_message);

buddylistcljs.core.ipc_main.on("buddies:new-status",((function (socket){
return (function (_,new_status){
cljs.core.println.call(null,"received new-status",new_status);

var package$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-status","new-status",584395313),new_status], null);
var encoded_message = JSON.stringify(cljs.core.clj__GT_js.call(null,package$));
return socket.send(encoded_message);
});})(socket))
);

return new cljs.core.Keyword(null,"buddylist","buddylist",275565366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).on("closed",((function (socket){
return (function (){
socket.close();

buddylistcljs.core.ipc_main.removeAllListeners("buddies:new-status");

return cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.dissoc,new cljs.core.Keyword(null,"buddylist","buddylist",275565366));
});})(socket))
);
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
buddylistcljs.core.notify_new_message = (function buddylistcljs$core$notify_new_message(with_user,message){
var notification_params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["New message from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(with_user)].join(''),new cljs.core.Keyword(null,"body","body",-2049205669),message,new cljs.core.Keyword(null,"sound","sound",-2127407070),buddylistcljs.core.path.resolve(__dirname,"../assets/imrcv.wav")], null));
var notification = (new buddylistcljs.core.Notification(notification_params));
return notification.show();
});
buddylistcljs.core.on_message_recieved = (function buddylistcljs$core$on_message_recieved(e){
cljs.core.println.call(null,"chat recieved from server",e.data);

var js_message = JSON.parse(e.data);
var message = cljs.core.js__GT_clj.call(null,js_message,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var with_user = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(message);
var old_max = buddylistcljs.user.get_message_count.call(null,with_user);
var temp__4655__auto___2207 = cljs.core.get.call(null,new cljs.core.Keyword(null,"chats","chats",518672204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)),with_user);
if(cljs.core.truth_(temp__4655__auto___2207)){
var window_2208 = temp__4655__auto___2207;
window_2208.webContents.send("chat:received",e.data);
} else {
}

var temp__4655__auto__ = buddylistcljs.util.get_max_id.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_)),message);
if(cljs.core.truth_(temp__4655__auto__)){
var new_max = temp__4655__auto__;
if((new_max > old_max)){
cljs.core.println.call(null,new_max,old_max);

buddylistcljs.user.update_messages_count.call(null,with_user,new_max);

return buddylistcljs.core.notify_new_message.call(null,with_user,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message));
} else {
return cljs.core.println.call(null,new_max,old_max);
}
} else {
return cljs.core.println.call(null,"new max null",old_max);
}
});
buddylistcljs.core.launch_chat = (function buddylistcljs$core$launch_chat(with_user){
cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats","chats",518672204),with_user], null),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),true,new cljs.core.Keyword(null,"contextIsolation","contextIsolation",-277188069),false], null)], null)))));

cljs.core.get.call(null,new cljs.core.Keyword(null,"chats","chats",518672204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)),with_user).loadFile(buddylistcljs.core.path.resolve(__dirname,"../html/chat.html"),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-user","with-user",1719589037),with_user,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_))], null)], null)));

cljs.core.get.call(null,new cljs.core.Keyword(null,"chats","chats",518672204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)),with_user).webContents.on("did-finish-load",(function (){
cljs.core.println.call(null,"chat did-finish-load ",with_user);

return buddylistcljs.user.get_chat_history.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_)),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_)),with_user,(0),(25)).then((function (data){
cljs.core.println.call(null,data);

cljs.core.println.call(null,cljs.core.first.call(null,data));

var temp__4655__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"chats","chats",518672204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)),with_user);
if(cljs.core.truth_(temp__4655__auto__)){
var window = temp__4655__auto__;
return window.webContents.send("chat:loaded-history",data);
} else {
return null;
}
}));
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

new cljs.core.Keyword(null,"add-buddy","add-buddy",687628777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).on("closed",(function (){
buddylistcljs.core.ipc_main.removeAllListeners("open-addbuddy");

return cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.dissoc,new cljs.core.Keyword(null,"add-buddy","add-buddy",687628777));
}));

return buddylistcljs.core.ipc_main.on("open-addbuddy",(function (_){
return buddylistcljs.core.open_addbuddy_win.call(null);
}));
});
buddylistcljs.core.launch_unauth_flow = (function buddylistcljs$core$launch_unauth_flow(){
new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).close();

cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"authentication","authentication",1746273042),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),true,new cljs.core.Keyword(null,"contextIsolation","contextIsolation",-277188069),false], null)], null)))));

new cljs.core.Keyword(null,"authentication","authentication",1746273042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.path.resolve(__dirname,"../html/authentication.html"))].join(''));

return new cljs.core.Keyword(null,"authentication","authentication",1746273042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).on("closed",(function (){
return cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.dissoc,new cljs.core.Keyword(null,"authentication","authentication",1746273042));
}));
});
buddylistcljs.core._main = (function buddylistcljs$core$_main(){
buddylistcljs.core.crash_reporter.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"companyName","companyName",2030952346),"BuddyList",new cljs.core.Keyword(null,"submitURL","submitURL",-169159433),"https://buddylist.app"], null)));

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

buddylistcljs.core.app.on("ready",(function (){
cljs.core.swap_BANG_.call(null,buddylistcljs.core._STAR_win_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"loading","loading",-737050189),(new buddylistcljs.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)))));

new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.path.resolve(__dirname,"../index.html"))].join(''));

var temp__4655__auto___2212 = buddylistcljs.user.get_user.call(null);
if(cljs.core.truth_(temp__4655__auto___2212)){
var user_2213 = temp__4655__auto___2212;
user_2213.then(((function (user_2213,temp__4655__auto___2212){
return (function (u){
if(cljs.core.truth_(u)){
cljs.core.println.call(null,"User:",u);

cljs.core.reset_BANG_.call(null,buddylistcljs.core._STAR_user_STAR_,u);

new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_win_STAR_)).close();

buddylistcljs.core.launch_buddylist.call(null);

buddylistcljs.user.cache_user.call(null,cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_));

var socket_2214 = (new buddylistcljs.core.client(["ws://50.16.117.236:8000/chat"].join(''),null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_)),new cljs.core.Keyword(null,"request-user","request-user",2052007844),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buddylistcljs.core._STAR_user_STAR_))], null)], null))));
socket_2214.on("open",((function (socket_2214,user_2213,temp__4655__auto___2212){
return (function (p1__2209_SHARP_){
return cljs.core.println.call(null,"Opening connection",p1__2209_SHARP_);
});})(socket_2214,user_2213,temp__4655__auto___2212))
);

socket_2214.on("close",((function (socket_2214,user_2213,temp__4655__auto___2212){
return (function (p1__2210_SHARP_){
return cljs.core.println.call(null,"Closing connection",p1__2210_SHARP_);
});})(socket_2214,user_2213,temp__4655__auto___2212))
);

socket_2214.on("message",((function (socket_2214,user_2213,temp__4655__auto___2212){
return (function (p1__2211_SHARP_){
return buddylistcljs.core.on_message_recieved.call(null,p1__2211_SHARP_);
});})(socket_2214,user_2213,temp__4655__auto___2212))
);

buddylistcljs.core.ipc_main.on("chat:sent",((function (socket_2214,user_2213,temp__4655__auto___2212){
return (function (_,to,message){
cljs.core.println.call(null,"recieved chat from client");

var package$ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"message","message",-406056002),message], null);
var encoded_message = JSON.stringify(cljs.core.clj__GT_js.call(null,package$));
return socket_2214.send(encoded_message);
});})(socket_2214,user_2213,temp__4655__auto___2212))
);
} else {
}

return buddylistcljs.core.launch_unauth_flow.call(null);
});})(user_2213,temp__4655__auto___2212))
);
} else {
buddylistcljs.core.launch_unauth_flow.call(null);
}

var tray = (new buddylistcljs.core.Tray(buddylistcljs.core.path.resolve(__dirname,"../assets/list.png")));
var context_menu = buddylistcljs.core.Menu.buildFromTemplate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"BuddyList"], null)], null)));
tray.setToolTip("BuddyList");

return tray.setContextMenu(context_menu);
}));

return buddylistcljs.core.Menu.setApplicationMenu(buddylistcljs.core.Menu.buildFromTemplate(buddylistcljs.core.application_menu_template));
});
cljs.nodejs.enable_util_print_BANG_.call(null);
console.log(["Start descjop application on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buddylistcljs.core.Os.type()),"."].join(''));
cljs.core._STAR_main_cli_fn_STAR_ = buddylistcljs.core._main;
