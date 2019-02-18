
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
