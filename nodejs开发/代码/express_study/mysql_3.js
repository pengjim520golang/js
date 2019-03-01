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


    function * getSorceByStudent(){
        let sid = yield pool.query("select sid from students where sid='s123' limit 1",(err,data)=>{
            if(!err){
                console.log("先找找到:", data[0].sid)
                it.next( data[0].sid )
            }
        })


        yield pool.query(`select * from sorces where sid='${sid}'`,(err,data)=>{
            if(!err){
                console.log("然后找到:",data)
            }
        })
    }


    let it = getSorceByStudent()
    it.next() 


})