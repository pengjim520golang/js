const http = require("http")
//把文件系统模块导入
const fs = require("fs")
http.createServer( (request,response)=>{
    //err如果读取文件失败,err就为错误对象
    //data如果读取成功,则data是文件中的内容 
    fs.readFile("./www"+request.url,(err,data)=>{
        if(!err){
            response.write(data)
            
        }else{
            response.write("404 not found~")
        }
        response.end()
    })

} ).listen(8892);






