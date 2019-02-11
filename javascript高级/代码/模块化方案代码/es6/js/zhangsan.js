//导入需要使用的依赖库
import {common} from "./common/common.js"

function Run(){
    console.log( "zhangsan of run,common="+common() )
}

function Go(){
    console.log( "zhangsan of go,common="+common() )
}

function Play(){
    console.log( "zhangsan of play,common="+common() )
}

export {
    //在es6的对象中如果方法名和属性名一致可以省略属性名,这里相当于Run:Run 
    Run,  
    Go,
    Play 
}