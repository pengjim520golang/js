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

# 闭包的产生

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
           console.log(++i)
       }
       return inner;
   }

   var f = wrap();  //外部函数调用,inner就会被定义,这时闭包马上产生
   f(); //这时访问到的i来自闭包对象
   f();
   f();
</script>
```

注意:闭包产生在inner函数内部,当wrap被调用时就产生了。i之所以在wrap调用结束后还能被调用到,那是因为闭包的原因,但inner之所以能被调用到那时因为变量f一直引用这inner函数,而不是因为闭包的原因。

外部函数调用一次就会产生一个新的闭包,假设把如下调用修改如下:

```html
<script>
   function wrap(){
       //变量i在wrap的作用域中
       var i = 100;
       //inner函数会提升
       function inner(){
           //inner函数调用的变量i在wrap函数的作用域中
           console.log(++i)
       }
       return inner;
   }

   wrap()();
   wrap()();
   wrap()();
   
</script>
```

以上一共产生了3个闭包,这3个闭包是独立的互不影响.如果你希望手动销毁闭包,那么可以修改代码如下:
```html
<script>
   function wrap(){
       //变量i在wrap的作用域中
       var i = 100;
       //inner函数会提升
       function inner(){
           //inner函数调用的变量i在wrap函数的作用域中
           console.log(++i)
       }
       return inner;
   }
   
   var f = wrap();
   f = null;
   
</script>
```

在开发中尽量避免使用和出现`鸡肋闭包`,大量的鸡肋闭包会导致内存溢出的可能性,如下代码就是`鸡肋闭包`:

```html
<script>
   function wrap(){
       //变量i在wrap的作用域中
       var i = 100;
       //inner函数会提升
       function inner(){
           //inner函数调用的变量i在wrap函数的作用域中
           console.log(++i)
       }
       inner()
   }

   wrap();
   wrap();
   wrap();
   wrap();
   wrap();
</script>
```

# 闭包的应用

闭包在现今的js开发中一般是用于定义模块,俗称js模块化的定义（js模块化有自己的规范,node使用的js模块化规范是CommonJs,但其本质最后都是闭包）,现在我们就尝试定义一个简单的js模块

```html
<script>
    function myModule(){
        var world = "This is a teacher"
        function Upper(){
            console.log("upper is " + world.toUpperCase() )
        }
        function Lower(){
            console.log("lower is " + world.toLowerCase() )
        }

        return {
            Upper:Upper,
            Lower:Lower
        }
    }
    var m = myModule()
    m.Upper()
    m.Lower()
</script>
```

以上更为专业的定义如下：


```html
<script>
    (function(win){
        var world = "This is a teacher"
        function Upper(){
            console.log("upper is " + world.toUpperCase() )
        }
        function Lower(){
            console.log("lower is " + world.toLowerCase() )
        }
        win.MyModule = {
            Upper:Upper,
            Lower:Lower
        }
    })(window)

    MyModule.Upper();
    MyModule.Lower();
</script>
```
