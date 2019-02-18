(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

    //定义食物的定位变量
    var position = "absolute"
    //声明一个专门用于装载食物的容器
    var foodsElement = [] 
    //定义食物为构造函数
    function Food(opt){ 
        //默认opt是一个对象
        opt = opt || {} 
        //定义食物的背景颜色
        this.color = opt.color || "green";
        //定义食物的大小
        this.width = opt.width || 20;
        this.height = opt.height || 20;
        //定义食物的x,y坐标
        this.x = opt.x || 0 ;
        this.y = opt.y || 0 ;
    }
    //把食物渲染到地图当中
    Food.prototype.render = function(map){
        var Tools = require("./tools.js")
        //创建食物之前就清除食物
        clearFood()
        //创建食物
        var div = document.createElement("div")
        //设置食物的样式
        div.style.position = position
        //设置食物的高宽
        div.style.width = this.width + "px"
        div.style.height = this.height + "px"
        //设置食物的颜色
        div.style.backgroundColor = this.color;
        //设置x,y的随机值
        this.x = Tools.getRandom(0,map.offsetWidth/this.width-1)
        this.y = Tools.getRandom(0,map.offsetHeight/this.height-1)
        //设置定位偏移
        div.style.left = (this.x * this.width) + "px"
        div.style.top = (this.y * this.height) + "px"
        //把食物渲染到地图中
        map.appendChild(div)
        //每次生成一个食物就把食物放入容器中
        foodsElement.push(div)
    }
    //清除食物
    function clearFood(){
        //获取容器中所有的食物
        var foodCounts = foodsElement.length - 1
        for(var i=foodCounts;i>=0;i--){
            foodsElement[i].parentNode.removeChild(foodsElement[i]) //从最后一个元素开始删除
            foodsElement.splice(i,1) //从当前下标开始删除1个元素
        }
    }

    module.exports = Food 

},{"./tools.js":5}],2:[function(require,module,exports){

    var that = null 
    //游戏对象的构造函数
    function Game(map){
        var Snake = require("./snake.js")
        var Food = require("./food.js")
        this.snake = new Snake() 
        this.food = new Food()
        this.map = map 
        that = this 
    }

    //游戏启动的方法
    Game.prototype.start = function(){
        this.food.render(this.map) //把食物渲染到地图中
        this.snake.render(this.map) //把蛇渲染到地图中
        SnakeRun() //让蛇动起来
        bindKey() //实现键盘的绑定
    }

    //让蛇运动起来
    function SnakeRun(){
        var dt = setInterval(function(){
            that.snake.move(that.food,that.map)
            that.snake.render(that.map)
            //获取地图中能容纳最大蛇节
            var maxSnakeNodeX = that.map.offsetWidth / that.snake.width ; 
            var maxSnakeNodeY = that.map.offsetHeight / that.snake.height ;
            //获取蛇头
            var snakeHead = that.snake.body[0];
            //设置game over的判断条件
            if(snakeHead.x<0 || snakeHead.x>=maxSnakeNodeX){
                alert("Game Over")
                clearInterval(dt)
                window.location = "index.html"
            } 
            if(snakeHead.y<0 || snakeHead.y>=maxSnakeNodeY){
                alert("Game Over")
                clearInterval(dt)
                window.location = "index.html"
            } 
        },150)
    }

    //实现键盘的绑定
    function bindKey(){
        
        document.addEventListener("keydown",function(e){
            //console.log(e.keyCode),e.keyCode可以获取键盘中的ascii码值
            switch(e.keyCode){
                case 37:
                    that.snake.direction = "left"
                    break;
                case 38:
                    that.snake.direction = "top"
                    break;   
                case 39:
                    that.snake.direction = "right"
                    break; 
                case 40:
                    that.snake.direction = "bottom"
                    break;    
            }
        
        })
    }

    module.exports = Game;

},{"./food.js":1,"./snake.js":4}],3:[function(require,module,exports){
window.onload = function(){
    var Game = require("./game.js")
    var map = document.getElementById("map")
    var game = new Game(map)
    game.start()
}
},{"./game.js":2}],4:[function(require,module,exports){

    var position = "absolute"
    //声明一个闭包来记录蛇的身体节点
    var SnakeNodes = []
    //定义蛇的构造函数
    function Snake(opt){
        opt = opt || {};
        //方向,默认向右运动
        this.direction = opt.direction || "right"
        //定义蛇的大小
        this.width = opt.width || 20;
        this.height = opt.height || 20;
        //定义蛇的身体
        this.body = [
            //蛇头
            {x:3,y:2,color:"red"},
            //蛇身体节点
            {x:2,y:2,color:"blue"},
             //蛇身体节点
            {x:1,y:2,color:"blue"}
        ]
    }
    //把蛇渲染到地图当中
    Snake.prototype.render = function(map){
        //清除蛇
        clearSnake()
        //创建蛇
        var snakeNodesCount = this.body.length-1
        for(var i=0;i<=snakeNodesCount;i++){
            var div = document.createElement("div")
            div.style.position = position
            div.style.width = this.width + "px"
            div.style.height = this.height + "px"
            div.style.backgroundColor = this.body[i].color
            //设置蛇在地图中默认的偏移量
            this.x = this.body[i].x
            this.y = this.body[i].y 
            div.style.left = (this.x * this.width) + "px"
            div.style.top = (this.y * this.height) + "px"
            //把蛇的身体节点push到容器中
            SnakeNodes.push(div)
            map.appendChild(div)
        }
    }
    //蛇移动
    Snake.prototype.move = function(food,map){
        //先处理身体的移动:最后一个节点取代上一个节点的x,y坐标位置
        for(var i=this.body.length-1;i>0;i--){
            this.body[i].x = this.body[i-1].x 
            this.body[i].y = this.body[i-1].y
        }
        //获取蛇头
        var SnakeHead = this.body[0];
        //根据方向判断蛇头如何移动
        switch(this.direction){
            case "right":
                SnakeHead.x += 1
                break;
            case "left":
                SnakeHead.x -= 1
                break;
            case "top":
                SnakeHead.y -= 1
                break;
            case "bottom":
                SnakeHead.y += 1
                break;
        }
        //判断蛇的x，y坐标是否与食物的x,y坐标重合
        if( SnakeHead.x === food.x && SnakeHead.y === food.y ){
            //让蛇变长，获取最后一个节点
            var lastNode = this.body[this.body.length-1]
            //新的节点，在最后
            var newLastNode = {
                x:lastNode.x,
                y:lastNode.y,
                color:lastNode.color
            }
            //把新的节点加入到body中
            this.body.push(newLastNode)
            //重新渲染一个新的食物
            food.render(map)
        }

    }
    //清除蛇
    function clearSnake(){
        var SnakeNodesCount = SnakeNodes.length - 1
        for(var i=SnakeNodesCount;i>=0;i--){
            SnakeNodes[i].parentNode.removeChild(SnakeNodes[i]) //删除节点元素
            SnakeNodes.splice(i,1)
        }
    }

    module.exports = Snake
},{}],5:[function(require,module,exports){

module.exports = {
    getRandom: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) +  min;
    }
}



},{}]},{},[3]);
