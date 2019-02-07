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