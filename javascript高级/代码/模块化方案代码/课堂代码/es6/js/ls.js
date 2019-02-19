// {}表示模块暴露的函数或者对象的名称是时候,名称可以随便定义只要符合变量定义的规则即可
// from后面表示模块定义的文件路径
import {common} from "./common/common.js"
//import {demo,display} from "./common/common2.js"


function add(){
    test()
    console.log("es6 - ls of add function,common="+common())
}


function list(){
    test()
    console.log("es6 - ls of list function,common="+common())
}

//如果没有使用export暴露的函数 只能再模块内部使用
function test(){
    console.log("private of test from ls")
}

export {
    add,
    list
}