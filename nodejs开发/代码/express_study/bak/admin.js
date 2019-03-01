const express = require("express")
const cookieParser = require("cookie-parser")
const cookieSession = require("cookie-session")
const consolidate = require("consolidate")
const bodyParser = require("body-parser")
const multer = require("multer")
const app = express()

app.listen(8889)

//使用consolidate整合模板引擎
app.set("view engines","html")
app.set("views","./views")
app.engine("html",consolidate.ejs)


//设置body-parser和multer(设置post提交)
app.use( bodyParser.urlencoded() )
app.use( multer({dest:"./www/upload/"}).any() )

//设置cookie和session
app.use( cookieParser() )
app.use( cookieSession({
    name:"sess_id",
    keys:["aaa","bbb","cccc"],
    maxAage:20*60*1000,
}) )



app.use("/admin",require('./route/admin')())