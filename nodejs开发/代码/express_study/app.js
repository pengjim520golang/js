const express = require("express")
const app = express() 
app.listen(9999)


//新闻模块的代码编写(pengjin)

app.get("/news/add",(request,response)=>{
    console.log("显示add页面")
})

app.post("/news/insert",(request,response)=>{
    console.log("post入库")
})

app.get("/news/del",(request,response)=>{
    console.log("获取id，删除")
})


app.get("/news/read",(request,response)=>{
    console.log("获取列表")
})

app.get("/news/update",(request,response)=>{
    console.log("显示修改页面")
})


app.post("/news/modify",(request,response)=>{
    console.log("修改入库")
})




//产品模块的代码编写(zhangsan)

app.get("/pro/add",(request,response)=>{
    console.log("显示add页面")
})

app.post("/pro/insert",(request,response)=>{
    console.log("post入库")
})

app.get("/pro/del",(request,response)=>{
    console.log("获取id，删除")
})


app.get("/pro/read",(request,response)=>{
    console.log("获取列表")
})

app.get("/pro/update",(request,response)=>{
    console.log("显示修改页面")
})


app.post("/pro/modify",(request,response)=>{
    console.log("修改入库")
})