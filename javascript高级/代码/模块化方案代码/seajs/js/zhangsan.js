//张三定义的模块
define(function(require,exports,module){

    function Run(){
        //引入依赖
        var common = require("./common/common.js")
        console.log("this is zhangsan module of run,common="+common())
    }
    function Go(){
        //引入依赖
        var common = require("./common/common.js")
        console.log("this is zhangsan module of go,common="+common())
    }
    
    function Play(){
        //引入依赖
        var common = require("./common/common.js")
        console.log("this is zhangsan module of play,common="+common())
    }

    module.exports = {
        Run:Run,
        Go:Go,
        Play:Play 
    }
})