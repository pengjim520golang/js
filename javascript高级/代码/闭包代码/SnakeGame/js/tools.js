//把Tools工具函数进行模块封装，并且暴露到全局当中
(function(window){
  var Tools = {
    getRandom: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) +  min;
    }
  }
  window.Tools = Tools
})(window)


