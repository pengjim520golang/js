//整合所有express需要的组件
const express = require("express")
const bodyParser = require("body-parser")
const multer = require("multer")
const cookieParser = require("cookie-parser")
const cookieSession = require("cookie-session")
const consolidate = require("consolidate")
app = express()
app.listen(8893)

//在服务器中可以post数据
app.use( bodyParser.urlencoded({
    extended:false,
    limit:2*1024*1024
}) )

//在服务器中可以post的上传文件
app.use( multer({dest:"./upload/"}).any() )

//设置和获取cookie
app.use( cookieParser() )
//设置和获取session
app.use( cookieSession({
    name:"sess_id",
    keys:["aaa","bbb","cccc"],
    maxAage:20*60*1000
}) )


//设置路由
app.use("/admin",require('./mod/admin')() )



//设置模板引擎的整合
app.set("view engine","html")
app.set("./views","./templates")
app.engine("html",consolidate.ejs ) 

//设置静态资源
app.use( express.static("./static") )