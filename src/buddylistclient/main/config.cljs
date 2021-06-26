(ns buddylistclient.main.config)

(def base-url "https://buddylist.app/")

(def login-url (str base-url "login"))

(def signup-url (str base-url "signup"))

(def user-url (str base-url "user"))

(def add-buddy-url (str base-url "add-buddy"))

(def chat-history-url (str base-url "chat-history"))

(def pfp-url (str base-url "set-pfp"))

(def rearrange-buddies-url (str base-url "rearrange-buddies"))

(def buddylist-ws-url "wss://buddylist.app/buddies")

(def chat-ws-url "wss://buddylist.app/chat")