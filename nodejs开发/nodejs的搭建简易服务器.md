# nodejs 

nodejs的作者名字叫Ryan Dahl(瑞安达儿),在2004年纽约的一所大学里面学习数学博士的专业,2006年的时候他觉得很无聊,在心中有一个想法：“世界那么大我想去看看”。
因此他退学去智利旅行(穷游),因为生活所迫,被迫他要去学习网站建设的相关技术。2年之后他就成为web专家,专为企业解决高并发的问题而生。
他明白如果需要解决高并发需要在后端有一个引擎可以实现异步IO的支持和事件驱动的支持,于是他就去尝试编写和使用现有的引擎，他尝试Ruby,c,luo然而都失败了。
Ruby失败的原因在于：Ruby虽然性能很高，然而必须要有一个虚拟机，不利于项目的最后部署.
c失败的原因:c虽然性能很高也没有虚拟机,但是c的开发效率很低门槛很高,不利于快速开发.
luo失败的原因:虽然性能高，没有虚拟机，学习成本很低，开发高效，然而luo是单进程的引擎。
尝试了多次失败之后,Ryan Dahl感觉到很绝望,因为没有一个现有的引擎可以帮助他完成nodejs解析器的开发,知道v8引擎的诞生让他看到了希望.
在2009年的时候他就发表nodejs，他nodejs称为非阻塞异步IO和事件驱动的后端编程技术，能够解决大网站的并发问题。

# nvm的介绍

nvm是nodejs的版本管理工具，可以管理不同的nodejs版本,常用的命令有如下几个:

nvm list --- 返回当前所拥有的nodejs版本列表有哪些

nvm use nodejs的版本号  --- 切换nodejs的版本


# nodejs的http模块

http模块是nodejs提供的系统模块,也就是无需我们自己下载和编写完成的模块化功能.nodejs采用commonjs的模块化方案，如果我们需要使用系统模块
则需要引入该模块的依赖：

```javascript
const http = require("http")
```

> 注意:nodejs是一个后端的运行平台不具备任何dom操作的功能,document.getElementById在nodejs当中完全没有任何意义,所有与nodejs开发相关的文件或者目录命名不能含有中文和特殊字符.所有nodejs的代码文件都必须使用.js作为后缀名


### createSever

createSever是http模块对象的方法,功能用于建立一个服务器对象实例.语法格式如下:

```
let server = http.createServer(回调函数) 
```

代码示例1(index.js)：

```javascript
//引入http系统模块
const http = require("http")
//建立一个服务器
let server = http.createServer(()=>{}) 

console.log(server)
```

运行以上代码需要使用node命令:

```
项目目录路径>node index.js
```

在nodejs当中假设修改了nodejs的代码，必须重新编译一次。


代码示例2(index_1.js)

```javascript
//引入http系统模块
const http = require("http")
//建立一个服务器
let server = http.createServer(()=>{
    console.log("有人访问了我~!")
}) 


//服务器的实例对象有一个listen方法，用于定义服务器中的端口
server.listen(8890)
```

代码示例3(index_2.js)

```javascript
//引入http系统模块
const http = require("http")
//建立一个服务器
let server = http.createServer(()=>{
    console.log("有人访问了我~!")
}) 


//服务器的实例对象有一个listen方法，用于定义服务器中的端口
//listen回调函数在服务器成功建立后被触发
server.listen(8890,()=>{
    console.log("服务器启动成功,请访问地址:","http://localhost:8890")
})
```

服务器的listen回调函数只会在服务器创建成功后触发,一个端口只能够用于一个服务器的创建当中


## createServer方法的回调函数中的参数


```
const server = http.createServer( (request,response)=>{} )
```

request参数:request负责获取客户端对服务器中的请求

```javascript
//引入http系统模块
const http = require("http")
let server = http.createServer((request,response)=>{
    switch( request.url ){
        case "/a.html":
            response.write("you request was" + request.url )
            break;
        case "/b.html":
            response.write("you request is " + request.url )
            break;
    }


    response.end()
}) 

server.listen(8892)
```

reponse参数:response负责把服务器的响应返回给客户端

* response.write是页面的响应输出,返回字符串到浏览器当中

* response.end()表示服务器响应结束,出现在reponse.write之后

```javascript
//引入http系统模块
const http = require("http")
//建立一个服务器
let server = http.createServer((request,response)=>{
    console.log("有人访问了我~!") //console.log是命令行的响应输出
    response.write("Hello Welcome to Nodejs Server")      //response.write是页面的响应输出和response.end结合
    response.end() //表示服务器响应结束

    //response.end("Hi Everyone~!") //高版本的nodejs支持reponse.write的封装
}) 


//服务器的实例对象有一个listen方法，用于定义服务器中的端口
//listen回调函数在服务器成功建立后被触发
server.listen(8891,()=>{
    console.log("服务器启动成功,请访问地址:","http://localhost:8890")
})
```


# nodejs的数据解析

使用原始的方式处理Get的结果

```javascript
//引入http系统模块
const http = require("http")
let server = http.createServer((request,response)=>{
    let users = {}
    //b.html?username=pengjin&password=123456
    let pathInfo = request.url
    //补/favicon.ico的天坑
    if(pathInfo.indexOf("?")!==-1){
        //使用?进行拆分
        //arr1[0] => /b.html
        //arr1[1] => username=pengjin&password=123456
        let arr1 = pathInfo.split("?")
        //使用&拆分
        //arr2[0]=>username=pengjin
        //arr2[1]=>password=123456
        let arr2 = arr1[1].split("&")
        
        for(var i=0;i<arr2.length;i++){
            //arr3[0] = username
            //arr3[1] = pengjin
            let arr3 = arr2[i].split("=")
            users[ arr3[0] ] = arr3[1]  // users["username"] = "pengjin"
        }

        console.log(users)
    }
    response.end()
}) 

server.listen(8892)
```

我们可以使用querystring的系统模块来优化手动解析get请求数据如下:

```javascript
//引入http系统模块
const http = require("http")
const queryString = require("querystring")
let server = http.createServer((request,response)=>{
    let users = null
    //b.html?username=pengjin&password=123456
    let pathInfo = request.url
    //补/favicon.ico的天坑
    if(pathInfo.indexOf("?")!==-1){
        //使用?进行拆分
        //arr[0] => /b.html
        //arr[1] => username=pengjin&password=123456
        let arr = pathInfo.split("?")
        users = queryString.parse(arr[1])

        console.log(users)
    }
    response.end()
}) 

server.listen(8892)
```