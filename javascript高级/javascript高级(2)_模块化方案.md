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

SeaJS是一个遵循CMD规范的JavaScript模块加载框架，可以实现JavaScript的模块化开发及加载机制。它应用于我国早期的一些js项目中,是淘宝js工程师
玉伯提出的一个方案。

使用seajs我们可以使用bootcdn加载seajs的1.3.1版本

```html
<!-- 引入seajs -->
<script src="https://cdn.bootcss.com/seajs/1.3.1/sea.min.js"></script>
<script>

    // 加载多个模块，在加载完成时，执行回调
    seajs.use(['./js/lisi','./js/zhangsan','./js/pengjin'], function(lisi,zhangsan,pengjin) {
        lisi.Run()
        zhangsan.Go()
        pengjin.Play()
    });
</script>
```

使用seajs的define函数通过module.exports暴露模块,定义common.js如下：

```javascript
// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    function common(){
        return "common function return value."
    }
    // 通过 module.exports 提供整个接口
    module.exports = common
  
});
```

通过require引入依赖,并通过module.exports暴露模块

```javascript
//彭劲定义的模块
define(function(require,exports,module){

    function Run(){
        //引入依赖
        var common = require("./common/common.js")
        console.log("this is pengjin module of run,common="+common())
    }
    function Go(){
        //引入依赖
        var common = require("./common/common.js")
        console.log("this is pengjin module of go,common="+common())
    }
    
    function Play(){
        //引入依赖
        var common = require("./common/common.js")
        console.log("this is pengjin module of play,common="+common())
    }

    module.exports = {
        Run:Run,
        Go:Go,
        Play:Play 
    }
})
```

seajs提出的讲解方案后,nodejs提出了在其基础上提出commonjs等方案,使得模块化变得更加直接简单。

# 使用commonjs进行模块化

commonjs是nodejs的解决方案,前提是我们需要安装node和npm,并且使用npm安装编译工具browserify.

### browserify安装步骤

* 点击下载nvm安装包,并按照nvm

* 使用命令nvm install 8.11.4,安装nodejs

* 使用npm install browserify -g安装browserify

使用commonjs的方式编写common.js依赖库代码如下：

```javascript
function common(){
    return "commonjs function"
}

module.exports = common 
```

编写模块,并且引入common.js库


```javascript
function Run(){
    var common = require("./common/common.js")
    console.log("this is pengjin of run,common=",common())
}

function Go(){
    var common = require("./common/common.js")
    console.log("this is pengjin of go,common=",common())
}

function Play(){
    var common = require("./common/common.js")
    console.log("this is pengjin of play,common=",common()) 
}

module.exports = {
    Run:Run,
    Go:Go,
    Play:Play 
}
```

编写入库文件index.js

```javascript
window.onload = function(){
    var pengjin = require("./pengjin.js")
    pengjin.Go();
}
```

通过命令编译入口文件

```
browserify index.js -o ../dist/index.js
```

在dist/index.js文件中生成如下代码：

```javascript
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function common(){
    return "commonjs function"
}

module.exports = common 
},{}],2:[function(require,module,exports){
window.onload = function(){
    var pengjin = require("./pengjin.js")
    pengjin.Go();
}
},{"./pengjin.js":3}],3:[function(require,module,exports){
function Run(){
    var common = require("./common/common.js")
    console.log("this is pengjin of run,common=",common())
}

function Go(){
    var common = require("./common/common.js")
    console.log("this is pengjin of go,common=",common())
}

function Play(){
    var common = require("./common/common.js")
    console.log("this is pengjin of play,common=",common()) 
}

module.exports = {
    Run:Run,
    Go:Go,
    Play:Play 
}
},{"./common/common.js":1}]},{},[2]);
```

在index.html文件中引入dist/index.js文件

```html
<script src="./dist/index.js"></script>
```

以上过程操作无误就是commonjs模块化的结果.

# es6模块化方案

es6模块化目前是世界上唯一由官方提出的模块化方案,但目前后端尚未支持该方案,但相信在不久的将来es6模块化方案将统一js的前后端开发。
需要使用es6模块化需要安装webpack。

#### 安装webpack3.10.0

```
npm install -g webpack@3.10.0 
```

使用es6模块化方式export对外暴露common函数

```javascript
//es6模块化使用export关键字对外暴露静态的代码块
export function common(){
    return "es6 common function return value."
}
```

使用import关键字导入common库并且使用export关键字的第2种方式对外暴露多个函数

```javascript
//导入需要使用的依赖库
import {common} from "./common/common.js"

function Run(){
    console.log( "zhangsan of run,common="+common() )
}

function Go(){
    console.log( "zhangsan of go,common="+common() )
}

function Play(){
    console.log( "zhangsan of play,common="+common() )
}

export {
    //在es6的对象中如果方法名和属性名一致可以省略属性名,这里相当于Run:Run 
    Run,  
    Go,
    Play 
}
```


编写入口文件index.js

```javascript
//as是把暴露的函数作为对象属性名导入
import * as pengjin from "./pengjin.js";
import * as zhangsan from "./zhangsan.js";

window.onload = function(){
    pengjin.Run();
    pengjin.Go();
    pengjin.Play();

    zhangsan.Run();
    zhangsan.Go();
    zhangsan.Play();
}
```

使用webpack编译入口文件:

```
webpack ./index.js ../dist/index.js
```

在index.html引入./dist/index.js文件

```html
<script src="./dist/index.js"></script>
```

以上操作无误就是es6的模块化方案