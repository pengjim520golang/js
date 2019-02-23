//引入http系统模块
const http = require("http")
let server = http.createServer((request,response)=>{
    switch( request.url ){
        case "/a.html":
            response.write("you request was" + request.url )
            break;
        case "/b.html":
            response.write("you request is " + request.url )
            break;
    }


    response.end()
}) 

server.listen(8892)