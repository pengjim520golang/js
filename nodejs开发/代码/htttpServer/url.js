const url = require("url")
let pathInfo = "http://localhost:8892/a.html?username=pengjin&password=1234"
//{username:"pengjin",password：1234}

let res = url.parse(pathInfo,true) //true意味着解析query为一个对象，如果没有true则解析为一个字符串
console.log(res.query,res.pathname)