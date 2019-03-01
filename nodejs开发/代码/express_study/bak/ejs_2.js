
const express = require("express")

const server = express()

const consolidate = require("consolidate")

server.listen(8888)

server.set("view engines","html")
server.set("views","views")
server.engine('html',consolidate.ejs)


server.get("/",(request,response)=>{
    response.render("index.ejs",{name:"pengjin"})
})