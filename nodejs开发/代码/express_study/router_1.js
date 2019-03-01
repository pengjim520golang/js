const express = require("express")
const app = express()
app.listen(9992)

//声明一个对应到/news模块
const newsRouter = express.Router() 

newsRouter.get("/add",(request,response)=>{
    response.send("news add")
})


newsRouter.get("/update",(request,response)=>{
    response.send("news update")
})

//注册路由到对应的url中  http://localhost:9992/news/
app.use("/news",newsRouter)




//声明一个对应到/pro模块
const proRouter = express.Router() 

proRouter.get("/add",(request,response)=>{
    response.send("pro add")
})


proRouter.get("/update",(request,response)=>{
    response.send("pro update")
})
//注册路由到对应的url中  http://localhost:9992/pro/
app.use("/pro",proRouter)