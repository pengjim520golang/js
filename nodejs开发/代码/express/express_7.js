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

