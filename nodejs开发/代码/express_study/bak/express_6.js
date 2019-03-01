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

