// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    function common(){
        return "common function return value."
    }
    // 通过 module.exports 提供整个接口
    module.exports = common
  
});