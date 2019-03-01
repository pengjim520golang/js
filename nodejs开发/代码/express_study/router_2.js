const express = require("express")
const app = express()
app.listen(9992)

//注册路由到对应的url中  http://localhost:9992/news/
app.use("/news",require("./mod/news")() )
//注册路由到对应的url中  http://localhost:9992/pro/
app.use("/pro",require("./mod/pro")() )