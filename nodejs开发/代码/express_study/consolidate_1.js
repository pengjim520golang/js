const express = require("express")
//把consolidate引入到项目中
const consolidate = require("consolidate")
const app = express() 

app.listen(8893)

//需要设置express的相关模板引擎的配置
//选项view engine该模板引擎是什么类型的:有3种类型可选( xml html json ) 
//选项views表示该模板引擎去哪个目录下找文件
//选项html表示，html类型的模板引擎时候哪个
app.set("view engine","html")
app.set("views","./templates")
//如果希望支持ejs就需要编写成为consolidate.ejs , 如果希望支持jade就需要编写成为consolidate.jade
app.engine("html",consolidate.jade)

//consolidate其实在后端帮我对response进行了渲染的传值
app.use("/pengjin",(req,res)=>{
    res.render("pengjin.jade",{name:"consolidate.jade pengjin"})
})