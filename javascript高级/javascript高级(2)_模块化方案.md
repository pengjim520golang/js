# js模块化的简述

在项目开发中我们把一个功能归类为一个模块,不同的程序员负责不同的模块。js也不例外,然而js的早期通过闭包的方式去实现模块化的方式存在很多的问题,随着js的发展
很多人为js提供了各种出色的模块化方案。其中代表有seajs,commonjs,es6的模块化方案。（其中es6的模块化方案必定是将来的主流,这也是至今官方提出唯一的规范）

## 早期的模块化结构

```html
<script src="js/common/common.js"></script>
<script src="js/zhangsan.js"></script>
<script src="js/lisi.js"></script>
<script src="js/pengjin.js"></script>

<script>
    //调用zhangsan编写的模块
    zhangsan.Go()
    //调用lisi的模块
    lisi.Go()
    //调用pengjin的模块
    pengjin.Go()
</script>
```

以上所有的模块都必须依赖common.js,所以我们在js/common/common.js中定义代码如下：

```javascript
function common(){
    return "common function return value."
}
```

我们使用闭包把3个程序员实现的模块进行全局的暴露,在每个需要使用的都common函数返回值的地方进行函数调用,并保存到res变量中.

```javascript
(function(window){
    
    function Run(){
        var res = common();
        console.log("this is zhangsan module of run,common="+res)
    }

    function Go(){
        var res = common();
        console.log("this is zhangsan module of go,common="+res)
    }

    function Play(){
        var res = common();
        console.log("this is zhangsan module of play,common="+res)
    }

    //在全局暴露zhangsan模块
    window.zhangsan = {
        Run:Run,
        Go:Go,
        Play:Play 
    }

})(window)
```

以上的模块方案是早期定义结构方式，它存在的问题有如下几个：

* 加载的文件多，且一定要有先后顺序

* 并没有很多地解决依赖的问题


# 使用seajs进行模块化

