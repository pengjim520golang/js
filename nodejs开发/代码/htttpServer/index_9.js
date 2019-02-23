const http = require("http")
const queryString = require("querystring")
http.createServer( (request,response)=>{
    let POST = {}
    let postData = "";
    let i = 0 
    //request.on的事件其中有2种事件:
    //'data'事件:每接收数据一次就被触发一次,回调函数的第1个参数就是客户端传过来的数据
    //'end'事件:完全接收结束就备触发
    request.on('data',(data)=>{
        console.log("第"+ (++i) +"次获取\n\n")
        postData += data 
    })

    request.on("end",()=>{
        console.log("获取完成"+postData)
        //把post的查询字符串变为对象{username:"zs",password:"123",content:"HELLO"}
        POST = queryString.parse(postData) 
        //使用POST对象获取对应表单字段
        console.log( POST.username,POST.password,POST.content  ) 
         
        
    })


} ).listen(8892);






