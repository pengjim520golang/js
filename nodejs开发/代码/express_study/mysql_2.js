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
        database:"nodejs"
    })
    //pool只有一个方法叫query
    const sql = "select * from articles"
    pool.query( sql,(err,data)=>{
        console.log("查询完毕")
    } )

    console.log("ending")
})