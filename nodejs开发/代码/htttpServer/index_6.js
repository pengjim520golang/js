//引入http系统模块
const http = require("http")
let server = http.createServer((request,response)=>{
    let users = {}
    //b.html?username=pengjin&password=123456
    let pathInfo = request.url
    //补/favicon.ico的天坑
    if(pathInfo.indexOf("?")!==-1){
        //使用?进行拆分
        //arr1[0] => /b.html
        //arr1[1] => username=pengjin&password=123456
        let arr1 = pathInfo.split("?")
        //使用&拆分
        //arr2[0]=>username=pengjin
        //arr2[1]=>password=123456
        let arr2 = arr1[1].split("&")
        
        for(var i=0;i<arr2.length;i++){
            //arr3[0] = username
            //arr3[1] = pengjin
            let arr3 = arr2[i].split("=")
            users[ arr3[0] ] = arr3[1]  // users["username"] = "pengjin"
        }

        console.log(users)
    }
    response.end()
}) 

server.listen(8892)