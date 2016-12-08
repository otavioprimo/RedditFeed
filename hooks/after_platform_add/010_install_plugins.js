#!/usr/bin/env node

var pluginlist = ["cordova-plugin-console","cordova-plugin-device","cordova-plugin-inappbrowser","cordova-plugin-splashscreen","cordova-plugin-statusbar","cordova-plugin-whitelist","ionic-plugin-keyboard"];

var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    console.log(stdout);
}

pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});
