const http = require("http")
//引入Url模块
const url = require("url")
const server = http.createServer( (request,response)=>{
    let urlInfo = request.url
    if(urlInfo.indexOf("?")!==-1){
        //true表示把query转为对象
        let pathInfo = url.parse( urlInfo,true ) 
        console.log(pathInfo.query)
        response.end()
    }

} );

server.listen(8892)