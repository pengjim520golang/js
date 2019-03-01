const ejs = require("ejs")

ejs.renderFile("./views/index.ejs",{
    name:"pengjin"
},(err,data)=>{
    if(!err){
        console.log(data)
    }else{
        console.log("错误信息",err)
    }
})