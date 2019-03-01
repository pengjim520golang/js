const express = require("express")

module.exports = function(){
    let router = express.Router() 

    //验证后台是否已经登录
    router.use( (req,res,next)=>{
        //console.log(req.url)
        req.session["admin_id"] = 100
        if(!req.session['admin_id'] && req.url!=='/login'){
            res.redirect("/admin/login")
        }else{
            next()
        }
    } )

    router.get("/login",(req,res)=>{
        res.send("login").end() //编程习惯
    })
  


    router.get("/list",(req,res)=>{

        res.send("list").end() //编程习惯
    })

    router.get("/add",(req,res)=>{
        res.send("add").end() //编程习惯
    })

    router.post("/upload",(req,res)=>{
        res.send("upload").end() //编程习惯
    })

    return router; 
}