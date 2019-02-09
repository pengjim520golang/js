(function(window){
    //用于记住游戏对象中的this
    var that = null 
    //开始游戏,Game Project
    function Game(map){
        this.food = new Food()
        this.snake = new Snake()
        this.map = map 
        that = this 
    }

    //游戏逻辑开始
    Game.prototype.start = function(){
        this.food.render(this.map)
        this.snake.render(this.map)
        //让蛇动起来
        snakeRun()
        //绑定键盘事件
        bindKey()
    }
    //让蛇动起来
    function snakeRun(){
        //使用定时器循环执行move和render方法
        var dt = setInterval(function(){
            that.snake.move(that.food,that.map)
            that.snake.render(that.map)
            //求出最大可以容纳的蛇节
            var maxSnakeNodeX = that.map.offsetWidth / that.snake.width;
            var maxSnakeNodeY = that.map.offsetHeight / that.snake.height;
            //获取蛇头
            var snakeHeadX = that.snake.body[0].x;
            var snakeHeadY = that.snake.body[0].y;
            //向左或者向右移动错误处理
            if(snakeHeadX < 0 || snakeHeadX >= maxSnakeNodeX){
                clearInterval(dt)
                alert("游戏结束!")
                //window.location.href = "index.html"
            }
            //向上或者向下移动错误处理
            if(snakeHeadY < 0 || snakeHeadY >= maxSnakeNodeY){
                clearInterval(dt)
                alert("游戏结束!")
                //window.location.href = "index.html"
            }
        },150)
    }
    //绑定键盘移动事件
    function bindKey(){
        document.addEventListener("keydown",function(e){
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
        },false)
    }
    window.Game = Game;

})(window)

var map = document.getElementById("map")
var game = new Game(map)
game.start();