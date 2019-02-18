//common是一个依赖模块
//require:负责解决依赖问题
//exports:负责暴露值类型的变量
//module:负责暴露引用类型的变量,但一般会使用module.exports属性进行暴露，因为module是一个对象
define(function(require,exports,module){
    function common(){
        return "common function value";
    }
    //这里的exports是一个对象的属性
    module.exports = common 
})