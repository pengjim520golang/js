//引入http系统模块
const http = require("http")
//建立一个服务器
let server = http.createServer((request,response)=>{
    console.log( request.url )  //获取请求路由(路径)
    response.end()
}) 


//服务器的实例对象有一个listen方法，用于定义服务器中的端口
//listen回调函数在服务器成功建立后被触发
server.listen(8891,()=>{
    //console.log("服务器启动成功,请访问地址:","http://localhost:8890")
})