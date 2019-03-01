const jade = require("jade")

jade.renderFile("./views/var.jade",{pretty:true},(err,data)=>{
    if(!err){
        console.log(data)
    }else{
        console.log("错误信息:",err)
    }
})