const express = require("express")
//引入了创建session的模块
const cookieParser = require("cookie-parser")
const cookieSession = require("cookie-session")
const app = express()

app.listen(8893)


//创建cookie-parser
app.use(cookieParser())
//创建cookie-session必须在cookie-parser之后
//cookie-session有以下3个参数是必填的
//name:表示session在浏览器中的cookie名称是什么
//keys:随机的签名值，用于增强session_id被劫持的安全性
//maxAage:表示session生存周期,一般用毫秒来做单位
let sessionKv = []
for(let i=1;i<=1000;i++){
    let mtrand = Math.random();
    //注意>Math.random返回的是number类型，而我们需要把它专为String类型方可设置session的keys属性
    sessionKv.push( String(mtrand) )
}

app.use(cookieSession({
    name:"nodejs_sess_id",
    keys:sessionKv,
    maxAge:20 * 60 * 1000  //20分钟有效
}))

//创建session
app.get("/setSession",(req,res)=>{
    req.session["username"] = "pengjin"
    req.session["age"] = "33"
    res.send("ok")
})

//获取session
app.get("/getSession",(req,res)=>{
    console.log( req.session ) 
    res.send("ok~!!")
})


//修改session
app.get("/updateSession",(req,res)=>{
   req.session["age"] = 444
    res.send("ok~!!")
})

//删除session
app.get("/delSession",(req,res)=>{
    delete req.session["username"]
    res.send("ok~!!")
})