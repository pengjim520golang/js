const ejs = require("ejs")

ejs.renderFile("./templates/index2.ejs",{
    name:"<span class='BOX'>pengjin</span>"
},(err,data)=>{
    if(!err){
        console.log(data)
    }else{
        console.log("错误:",err)
    }
})