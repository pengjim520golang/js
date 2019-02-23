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