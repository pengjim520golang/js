(function(window){
    var snakeElements = [];
    //声明蛇的构造函数
    function Snake(opt){
        opt = opt || {};
        //蛇节的大小
        this.width = opt.width || 20;
        this.height = opt.height || 20;
        //蛇移动的方向
        this.direction = opt.direction || "right";
        //蛇的身体
        this.body = [
            {x:3,y:2,color:"red",desc:"蛇头"},
            {x:2,y:2,color:"blue",desc:"蛇节"},
            {x:1,y:2,color:"blue",desc:"蛇节"}
        ];
    }
    //把蛇渲染到地图上
    Snake.prototype.render = function(map){
        //删除之前的蛇节点
        clearSnake()
        //获取蛇节点长度
        var snakeLength = this.body.length
        for(var i=0;i<snakeLength;i++){
            //蛇的节点
            var snakeNode = this.body[i]
            //声明一个div元素来作为蛇的节点
            var div = document.createElement("div")
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.left = snakeNode.x * this.width + "px";
            div.style.top = snakeNode.y * this.height + "px";
            div.style.backgroundColor = snakeNode.color;
            //把蛇节点元素加入数组中
            snakeElements.push(div)
            //把div加入地图中
            map.appendChild(div)
        }
    }
    //蛇移动
    Snake.prototype.move = function(food,map){
        //把蛇身节点中的，思想：后一个节点代替前一个节点
        for(var i=this.body.length-1;i>0;i--){
            this.body[i].x = this.body[i-1].x 
            this.body[i].y = this.body[i-1].y  
        }
        //处理蛇头的方向
        var snakeHead = this.body[0]
        switch(this.direction){
            case "right":
                snakeHead.x += 1;
                break;
            case "left":
                snakeHead.x -= 1;
                break;
            case "top":
                snakeHead.y -= 1;
                break;
            case "bottom":
                snakeHead.y += 1;
                break; 
        }
        console.log(this.body)  
        //获取当前头部的坐标
        var headX = snakeHead.x * this.width
        var headY = snakeHead.y * this.height
        if(headX===food.x && headY===food.y){
            var lastSnakeNode = this.body[this.body.length-1]
            this.body.push({
                x:lastSnakeNode.x,
                y:lastSnakeNode.y,
                color:lastSnakeNode.color,
                desc:lastSnakeNode.desc
            })
            console.log(this.body)
            food.render(map)
        }
    }
    //删除蛇节点
    function clearSnake(){
        for(var i=snakeElements.length-1;i>=0;i--){
            snakeElements[i].parentNode.removeChild(snakeElements[i])
            snakeElements.splice(i,1)
        }
    }
    //把蛇对象声明到全局
    window.Snake = Snake;

})(window)