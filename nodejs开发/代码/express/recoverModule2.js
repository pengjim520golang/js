//在前端直接myModule.js表示模块的路径与当前文件在同一个目录
//如果你需要引入的是自定义的模块就需要加入./表示引用自定义的当前模块(自定义模块方式)
//在nodejs中引入模块可以省略.js的后缀名
const myModule = require("./myModule")
const myMod = require("./lib/mod")

console.log(myModule.a,myModule.b,myModule.c)
console.log(myMod.x,myMod.y,myMod.z)