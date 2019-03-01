const express = require("express")

module.exports = function(){
    let router = express.Router()

    router.get("/add",(request,response)=>{
        response.send("pro add")
    })
    
    
    router.get("/update",(request,response)=>{
        response.send("pro update")
    })
    

    return router
}