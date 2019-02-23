//引入http系统模块
const http = require("http")
//建立一个服务器
let server = http.createServer(()=>{
    console.log("有人访问了我~!")
}) 


//服务器的实例对象有一个listen方法，用于定义服务器中的端口
server.listen(8890)