//在nodejs中分为模块3种:系统模块，第3方模块，自定义模块
//nodejs加载模块有优先级规则:
//1. 如果使用./会优先查找自定义模块，这时路径直接查找
//2. 如果没有使用./nodejs会优先查找系统模块中是否存在该模块,如果系统中没有该模块那么nodejs就会去node_modules下查找是否有该模块
//   如果node_modules也找不到就报错

//ps:系统模块是最优先
const http = require("http")
const http2 = require("./lib/http")
console.log(http)
console.log(http2)