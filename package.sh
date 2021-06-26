npm run build
electron-packager . BuddyList --platform=darwin --arch=x64 --electron-version=12.0.6 --icon=resources/public/img/buddylist.icns --overwrite=true
codesign --deep --force --verbose --sign "JS2NN5XX7S" BuddyList-darwin-x64/BuddyList.app