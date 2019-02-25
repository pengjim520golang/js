# express框架简述

express是一个轻量级的保留式开发框架,本身不具备任何特殊的功能,只是对静态资源,数据解析(post/get),服务器创建进行了封装。

使用express来创建一个服务器:

```javascript
const express = require("express") 
//express是一个函数,封装了服务器创建的方式,内部其实实现了http.createServer方法
const app = express()
app.listen(8895,()=>{
    console.log("server start success~!")
})
```

使用server.get()方法获取get请求

```javascript
const express = require("express") 
//express是一个函数,封装了服务器创建的方式,内部其实实现了http.createServer方法
const server = express()
server.listen(8895,()=>{
    console.log("server start success~!")
})

//解析get数据并获取get参数
//http://localhost:8895/?username=pengjin&age=33
server.get( "/",(request,response)=>{
    response.send("<h1>Hello Express~!!</h1>")
    response.send({"status":0,"message":"success"})
    response.send([1,2,3,4,5])
})

// ``是es6的语法(字符串模板)，可以运行在nodejs端也可以运行在浏览器端
server.get( "/user",(request,response)=>{
    response.send(`<h1>Hello ${request.query.username} ,age is ${request.query.age} ~!!</h1>`)
})
```

# use的连贯操作

server.use()能解析get和post请求,然而它的主要应用场景在于中间件和连贯操作当中,一般不要在use中使用response.send方法,我们使用use一般是为值传递。

```javascript
//express是一个函数,封装了服务器创建的方式,内部其实实现了http.createServer方法
const server = express()
server.listen(8895)

//解析use数据解析get请求,use会涉及连贯(流水性)操作,next表示继续下一个use
server.use( "/",(request,response,next)=>{
    request.welcome =  "<h1>hi Express~!!</h1>" //把值传递到下一个use
    next()
})


server.use( "/user",(request,response)=>{

    response.send( `${request.welcome},Hello ${request.query.username} ,age is ${request.query.age} ~!!`)
})
```


# server.post()和body-parser解析post请求

在express当中request.body用于获取post请求数据,然而它需要靠两种中间件进行安装

* body-parser : 解析post提交的数据(表单数据),无法解析二进制文件
* multer : 解析post提交的文件(文件域表单上传数据,二进制)

```javascript
const express = require("express") 
//引用body-parser中间件
const bodyParser = require("body-parser")
//express是一个函数,封装了服务器创建的方式,内部其实实现了http.createServer方法
const server = express()
server.listen(8895)

//使用server.use加载中间件,bodyParser.urlencoded()调用可以为request传值body属性
server.use( bodyParser.urlencoded({
    extended:false, 
    limit:2*1024*1024   //默认为100k，设置限制最大可以提交的数据为2M
}) )

server.post( "/",(request,response)=>{
    //console.log( request.query ) 获取get数据无法获取post数据
    console.log( request.body ) //获取post数据
    response.end() 
})
```

> 在开发中一般是body-parser配合multer一起使用

# 定义一个属于自己的中间件my-body-parser

自定义一个commonjs方案的模块my-body-parser.js 
暴露的方法urlencode返回是use的函数定义function(request,response,next),而不是我们实现function(request,response,next)这个函数的调用,因为function(request,response,next)是use的回调函数

```javascript
const queryString = require("querystring")
module.exports = {
    urlencode:function(){
        return function(request,response,next){
            let postData = ''
            request.on('data',(data)=>{
                postData += data 
            })
        
            request.on('end',()=>{
                request.body = queryString.parse(postData);
                next() 
            })
        }
    }
}
```

在nodejs的逻辑中引入中间件

```javascript
const express = require("express") 
//引用my-body-parser中间件,自定义模块
const myBodyParser = require("./my-body-parser")

//express是一个函数,封装了服务器创建的方式,内部其实实现了http.createServer方法
const server = express()
server.listen(8895)

//使用server.use加载中间件,myBodyParser.urlencoded()调用可以为request传值body属性
server.use( myBodyParser.urlencode() )

server.post( "/",(request,response)=>{
    //console.log( request.query ) 获取get数据无法获取post数据
    console.log( "~获取post:" , request.body ) //获取post数据
    response.end() 
})
```

# 使用multer中间件实现文件上传

由于body-parser无法获取post的文件数据,所以我们需要借助multer中间件获取post文件数据

```javascript
const express = require("express")
const path = require("path")
const fs = require("fs")
const bodyParser = require("body-parser")
//引入multer中间件
const multer = require("multer")
const app = express()

app.listen(8895)

//接收任何文件域的上传
app.use( multer({dest:__dirname + "/upload/"}).any() )



app.use( bodyParser.urlencoded({
  extended:false, //不启用扩展模式
  limit:50*1024*1024 
}) )


app.post("/",(request,response)=>{

  console.log("照片说明:",request.body)

  let uploadInfo = request.files[0]
  //获取后缀名
  let extName = path.extname(uploadInfo.originalname)
  //创建新名字
  let newName = uploadInfo.destination + uploadInfo.filename + extName
  //获取上传的名字
  let oldName = uploadInfo.path
  //改名
  fs.rename(oldName,newName,(err)=>{
    if(!err){
      console.log("上传成功")
    }else{
      console.log("上传失败")
    }
  })
})
```

> 一般multer必须和body-parser配合使用

# express.static处理静态资源文件

```javascript
const express = require("express")

const app = express();

app.listen(8895)

const serve = express.static
//http://localhost:8895/images/11.png
//http://localhost:8895/css/style.css
//http://localhost:8895/js/ok
//http://localhost:8895/aaa.html  (这种访问方式我们一般使用模板引擎完成)
app.use( serve( __dirname +  "/www") )
```