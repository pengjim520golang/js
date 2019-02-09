(function(window){
    //声明一个食物容器
    var foodsElements = [];
    //声明食物的构造函数,形参opt是对象
    function Food(opt){
        //如果opt没有传值,那么opt就是空对象
        opt = opt || {} 
        //设置宽度,默认为20
        this.width = opt.width || 20;
        //设置高度,默认为20
        this.height = opt.height || 20;
        //设置背景颜色，默认为绿色
        this.bgColor = opt.bgColor || 'green';
        //设置食物的x坐标,默认为0
        this.x = opt.x || 0;
         //设置食物的y坐标,默认为0
        this.y = opt.y || 0;
    }
    //渲染食物到地图上
    Food.prototype.render = function(map){
        //每次创建一个新的食物就删除之前创建的食物
        clearFood()
        //声明一个div作为食物元素
        var div = document.createElement("div")
        div.style.position = "absolute"
        div.style.width = this.width + "px"
        div.style.height = this.height + "px"
        div.style.backgroundColor = this.bgColor
        this.x = Tools.getRandom(0,map.offsetWidth/this.width-1) * this.width
        this.y = Tools.getRandom(0,map.offsetHeight/this.height-1) * this.height
        div.style.left = this.x + "px"
        div.style.top = this.y + "px"
        //把食物加入到容器中
        foodsElements.push(div)
        //在地图中加入食物
        map.appendChild(div)
    }
    //删除食物
    function clearFood(){
        for(var i=foodsElements.length-1;i>=0;i--){
            foodsElements[i].parentNode.removeChild(foodsElements[i])
            foodsElements.splice(i,1)
        }
    }
    window.Food = Food;

})(window)