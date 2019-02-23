const http = require("http")
//用于处理post
const queryString = require("querystring")
//用于处理get
const url = require("url")
//用于处理页面
const fs = require("fs")
//用于保存用户的信息
let users = {} 
//创建服务器
http.createServer( (req,res)=>{

    //接收post数据
    let postStr = ''
    //post对象
    let POST = null 
    //处理post提交
    req.on('data',(data)=>{
        postStr += data 
    })

    //提交完成
    req.on('end',()=>{
        //处理get请求
        let GET = url.parse( req.url,true ) //{action:"register"},{action:"login"}
        //获取action
        let action = GET.query.action
        //获取页面
        let page = GET.pathname;
        //解析post数据为POST对象
        POST = queryString.parse(postStr) //{username:"pengjin",password:1111} 
        //console.log("\nPOST:",POST)
        //希望注册是写入的数据格式如下:{"zs":1234,"pengjin":1111}
        switch(action){
            case "register":
                console.log("\n注册之前:",users)
                //注册用户
                if( !users[ POST.username ] ){
                    users[ POST.username ] = POST.password
                    console.log("\n注册之后:",users)
                    res.write('{"status":0,"message":"注册成功"}')
                }else{
                    res.write('{"status":201,"message":"注册失败"}')
                }
                res.end()
                break;
            case "login":
                //用户登录
                if( !users[ POST.username ] ){
                    res.write('{"status":202,"message":"当前用户不存在"}')
                }else{
                    if(users[ POST.username ]!==POST.password){
                        res.write('{"status":203,"message":"登录密码不正确"}')
                    }else{
                        res.write('{"status":0,"message":"登录成功"}')
                    }
                }
                res.end()
                break; 
        }
        //处理页面 /user /user.html
        fs.readFile("./www" + page,(err,data)=>{
            if(!err){
                res.write(data);
                res.end()
            }
        } )
    })
} ).listen(8893,()=>{
    console.log("server start,you can view:","http://localhost:8893\n\n")
})