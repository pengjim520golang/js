define(function(require,exports,module){
    //实现列表功能
    function list(){
        var common = require("./common/common.js")
        console.log("seajs - zs list function,common=" + common())
    }

    //实现添加功能
    function add(){
        var common = require("./common/common.js")
        console.log("seajs -  zs add function,common=" + common())
    }

    module.exports = {
        list:list,
        add:add
    }
})



