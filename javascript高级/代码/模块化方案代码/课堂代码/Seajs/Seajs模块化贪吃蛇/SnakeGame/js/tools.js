define(function(require,exports,module){
  
  //把工具对象进行暴露
  module.exports = {
    getRandom: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) +  min;
    }
  }

})



