const express = require("express") 
const mysql = require("mysql")

const app = express()
app.listen(8081)




app.use("/",(req,res)=>{
    //连接mysql服务器
   let pool =  mysql.createPool({
        host:"localhost",
        port:3306,
        user:"root",
        password:"root",
        database:"stus"
    })
    //pool只有一个方法叫query
    const sql = "select name,school,course from students as stu left join sorces as src on stu.sid=src.sid where stu.sid='s123'"
    pool.query( sql,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log("查询失败")
        }
    } )
})