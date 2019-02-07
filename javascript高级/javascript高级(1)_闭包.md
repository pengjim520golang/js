# 闭包的引出

我们在讲解什么是闭包之前？我们先来看一个需求：分别实现点击第1,2,3个div打印为0,1,2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        *{
            margin:0;
            padding: 0;
        }
        div{
            border:1px solid #000;
            background: green;
            width: 200px;
            height: 200px;
            margin: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</body>

<script>
    window.onload = function(){
        //选择所有的div元素
        var items = document.querySelectorAll(".box")
        //把items的伪数组转化为真数组
        var divs = Array.prototype.slice.apply(items)
        //遍历所有的div,为每个div元素绑定onclick事件
        for(var i=0;i<divs.length;i++){
            items[i].onclick = function(){
                alert(i)
            }
        }
    }
</script>
</html>
```

我们的直觉会认为这样的写法没有问题,逻辑也没有问题.然而你会发觉这根本无法完成我们的需求。于是我们把js代码修改如下:

```html
<script type="text/javascript">
    window.onload = function(){
        //选择所有的div元素
        var items = document.querySelectorAll(".box")
        //把items的伪数组转化为真数组
        var divs = Array.prototype.slice.apply(items)
        for(var i=0;i<divs.length;i++){
            (function(i){
                //在立即执行函数中，遍历所有的div,为每个div元素绑定onclick事件
                items[i].onclick = function(){
                    alert(i)
                }
            })(i)
        }
    }
</script>
```

以上的代码修改神奇地完成了我们的需求,而这个代码之所以能完成我们的需求是因为`闭包`起了作用。这也是javascript最早为了解决这个问题而提出来的解决方案。

现在我们已经体验了闭包的最基本作用,现在我们就需要来深入了解一下闭包的相关知识点。

# 闭包的概念

闭包其本质是一个c++的对象,其产生必须具备以下条件：

* 外部函数（或者叫做包裹函数）必须被调用
* 外部函数中内部函数已经被定义（声明）
* 内部函数必须引用了外部函数作用域中的变量

```html
<script>
   function wrap(){
       //变量i在wrap的作用域中
       var i = 100;
       //inner函数会提升
       function inner(){
           //inner函数调用的变量i在wrap函数的作用域中
           console.log(i)
       }
       return inner;
   }

   var f = wrap();  //外部函数调用,inner就会被定义,这时闭包马上产生
   f(); //这时访问到的i来自闭包对象
</script>
```
