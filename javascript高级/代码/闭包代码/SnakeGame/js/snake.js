//定义蛇模块
(function(window){
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
    //把蛇对象暴露到全局中
    window.Snake = Snake

})(window)