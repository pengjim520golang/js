const path = require("path")
let fileName =   __dirname + "/upload/one.txt"

console.log( path.extname(fileName) )  //单纯返回后缀

console.log( path.parse(fileName) )  //返回文件的所有信息

console.log( path.parse(fileName).ext  )  //返回文件的后缀名