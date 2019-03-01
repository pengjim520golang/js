const express = require("express")
const path = require("path")
const fs = require("fs")
const bodyParser = require("body-parser")
//引入multer中间件
const multer = require("multer")
const app = express()

app.listen(8895)

//接收任何文件域的上传
app.use( multer({dest:__dirname + "/upload/"}).any() )



app.use( bodyParser.urlencoded({
  extended:false, //不启用扩展模式
  limit:50*1024*1024 
}) )


app.post("/",(request,response)=>{

  console.log("照片说明:",request.body)

  let uploadInfo = request.files[0]
  //获取后缀名
  let extName = path.extname(uploadInfo.originalname)
  //创建新名字
  let newName = uploadInfo.destination + uploadInfo.filename + extName
  //获取上传的名字
  let oldName = uploadInfo.path
  //改名
  fs.rename(oldName,newName,(err)=>{
    if(!err){
      console.log("上传成功")
    }else{
      console.log("上传失败")
    }
  })
})