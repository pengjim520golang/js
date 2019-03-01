const mysql = require("mysql")

const  db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nodejs",
    port:3306
})


function * delAfterSelect(db){

    yield db.query("SELECT * FROM ARTICLES WHERE ID=129",(err,data)=>{
        if(!err){
            console.log(data)
            it.next()
        }
    })

    yield db.query("delete from articles where id=129",(err,data)=>{
        if(!err){
            console.log("删除成功：",data)
            it.next() 
        }else{
            console.log("删除失败：",err)
        }
    })



}

var it = delAfterSelect(db)
it.next()