const jade = require("jade")

let intX = 300

let news = [
    {id:1,title:"这是第1条新闻"},
    {id:2,title:"这是第2条新闻"},
    {id:3,title:"这是第3条新闻"},
]
let style={width:"20px",height:"30px"}
let classarr = ["box1","box2"]
let obj = {
    pretty:true,
    name:"王禹博",
    x:intX,
    sorce:60,
    list:["a","b","c"],
    news:news,
    content:"<script>while(true){}</script>",
    json:style,
    arr:classarr
}

jade.renderFile("./views/html.jade",obj,(err,data)=>{
    if(!err){
        console.log(data)
    }else{
        console.log("错误信息:",err)
    }
})