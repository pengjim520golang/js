define(function(require,exports,module){
    
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
        //导入依赖工具模块
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

})