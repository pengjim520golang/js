const fs = require("fs")

fs.rename("./upload/1111.txt","./upload/one.txt",(err)=>{
    if(!err){
        console.log("修改成功")
    }else{
        console.log("修改失败")
    }
})