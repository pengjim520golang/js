const express = require("express")
const cookieParser = require("cookie-parser")
const app = express();


app.listen(8895)


app.use(cookieParser())

app.get("/",(request,response)=>{
    // cookie是使用key=>value形式存放数据内容,
    //response.cookie("username","pengjin")//默认创建的cookie没有设置配置参数是浏览器关闭后消失
    //response.cookie("username","pengjin",{path:"/aaa",maxAge:30*86400*1000})  //设置30天后过期,在/aaa目录下有效
    response.cookie("username1","pengjin",{maxAge:30*86400*1000})
    response.cookie("username2","lisi",{maxAge:30*86400*1000})
    response.send("ok")
})



app.get("/getck",(request,response)=>{
    //获取cookie需要使用中间件cookie-parser
    console.log(request.cookies)
    response.send("success")
})


app.get("/delck",(request,response)=>{
    //清除username2
    response.clearCookie("username2")
    response.send("del success")
})