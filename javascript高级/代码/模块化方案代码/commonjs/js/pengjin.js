function Run(){
    var common = require("./common/common.js")
    console.log("this is pengjin of run,common=",common())
}

function Go(){
    var common = require("./common/common.js")
    console.log("this is pengjin of go,common=",common())
}

function Play(){
    var common = require("./common/common.js")
    console.log("this is pengjin of play,common=",common()) 
}

module.exports = {
    Run:Run,
    Go:Go,
    Play:Play 
}