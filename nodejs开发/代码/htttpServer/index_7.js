//引入http系统模块
const http = require("http")
const queryString = require("querystring")
let server = http.createServer((request,response)=>{
    let users = null
    //b.html?username=pengjin&password=123456
    let pathInfo = request.url
    //补/favicon.ico的天坑
    if(pathInfo.indexOf("?")!==-1){
        //使用?进行拆分
        //arr[0] => /b.html
        //arr[1] => username=pengjin&password=123456
        let arr = pathInfo.split("?")
        users = queryString.parse(arr[1])

        console.log(users)
    }
    response.end()
}) 

server.listen(8892)