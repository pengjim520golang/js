const express = require("express") 

//express是一个函数,封装了服务器创建的方式,内部其实实现了http.createServer方法
const server = express()
server.listen(8895,()=>{
    console.log("server start success~!")
})