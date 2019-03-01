const express = require("express")
const cookieParser = require("cookie-parser")
const app = express();


app.listen(8895)

//定义一个密钥
const CK_KEY = "sdfasdfasdfzcxvsde4234"
//解密时要用
app.use(cookieParser(CK_KEY))

app.get("/",(request,response)=>{
    //加密
    response.serect = CK_KEY
    response.cookie("userkey","lisi",{signed:true,maxAge:7*86400*1000})
    response.send("signed ok.....")
})



app.get("/getck",(request,response)=>{
    
    //加密的cookie无法修改，但是可以看见明文
    console.log("加密版:",request.signedCookies)
    response.send("success")
})

