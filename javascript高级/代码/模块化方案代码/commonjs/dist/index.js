(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function common(){
    return "commonjs function"
}

module.exports = common 
},{}],2:[function(require,module,exports){
window.onload = function(){
    var pengjin = require("./pengjin.js")
    pengjin.Go();
}
},{"./pengjin.js":3}],3:[function(require,module,exports){
function Run(){
    var common = require("./common/common.js")
    console.log("this is pengjin of run,common=",common())
}

function Go(){
    var common = require("./common/common.js")
    console.log("this is pengjin of go,common=",common())
}

function Play(){
    var common = require("./common/common.js")
    console.log("this is pengjin of play,common=",common()) 
}

module.exports = {
    Run:Run,
    Go:Go,
    Play:Play 
}
},{"./common/common.js":1}]},{},[2]);
