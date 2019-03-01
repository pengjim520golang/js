const express = require("express")

module.exports = function(){
    let router = express.Router()

    router.get("/add",(request,response)=>{
        response.send("news add")
    })
    
    
    router.get("/update",(request,response)=>{
        response.send("news update")
    })
    

    router.get("/list",(request,response)=>{
        response.send("news list")
    })


    return router
}