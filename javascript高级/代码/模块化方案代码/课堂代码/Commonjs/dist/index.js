(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

    function common(){
        return "common function value";
    }
    //这里的exports是一个对象的属性
    module.exports = common 

},{}],2:[function(require,module,exports){
window.onload = function(){
    var zs = require("./zs.js")
    var ls = require("./ls.js")
    var pj = require("./pj.js")

    zs.list()
    ls.list()
    pj.list()
}
},{"./ls.js":3,"./pj.js":4,"./zs.js":5}],3:[function(require,module,exports){

    //实现列表功能
    function list(){
        var common = require("./common/common.js")
        console.log("commonjs -  ls list function,common=" + common())
    }

    //实现添加功能
    function add(){
        var common = require("./common/common.js")
        console.log("commonjs -  ls add function,common=" + common())
    }
    module.exports = {
        list:list,
        add:add
    }

},{"./common/common.js":1}],4:[function(require,module,exports){

    //实现列表功能
    function list(){
        var common = require("./common/common.js")
        console.log("commonjs -  pj list function,common=" + common())
    }

    //实现添加功能
    function add(){
        var common = require("./common/common.js")
        console.log("commonjs -  pj add function,common=" + common())
    }
    module.exports = {
        list:list,
        add:add
    }

},{"./common/common.js":1}],5:[function(require,module,exports){

    //实现列表功能
    function list(){
        var common = require("./common/common.js")
        console.log("commonjs- zs list function,common=" + common())
    }

    //实现添加功能
    function add(){
        var common = require("./common/common.js")
        console.log("commonjs-  zs add function,common=" + common())
    }

    module.exports = {
        list:list,
        add:add
    }




},{"./common/common.js":1}]},{},[2]);
