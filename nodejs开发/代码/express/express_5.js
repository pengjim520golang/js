const express = require("express") 

//express是一个函数,封装了服务器创建的方式,内部其实实现了http.createServer方法
const server = express()
server.listen(8895)

//解析use数据解析get请求,use会涉及连贯(流水性)操作,next表示继续下一个use
server.use( "/",(request,response,next)=>{
    request.welcome =  "<h1>hi Express~!!</h1>"
    next()
})


server.use( "/user",(request,response)=>{

    response.send( `${request.welcome},Hello ${request.query.username} ,age is ${request.query.age} ~!!`)
})
