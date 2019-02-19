// * 表示获取所有在模块中使用export关键字对外暴露的函数或者对象
// as 是把需要暴露函数或者对象放到自定义的命名空间当中
import * as zs from "./zs.js"
import * as ls from "./ls.js"

window.onload = function(){
    zs.add()
    zs.list()
    ls.add()
    ls.list()
}