const fs = require("fs")
//writeFile的第1个参数:路径文件名
//writeFile的第2个参数:要写入的文件内容
//writeFile的第3个参数:编码格式
//writeFile的第1个参数:成功或者失败时的回调函数,err是写入失败时产生的错误对象
fs.writeFile("./www/firelinks.txt","深圳区块链","utf-8",(err)=>{
    if(!err){
        console.log("保存成功~!")
    }else{
        console.log("保存失败~!")
    }
})