//在nodes_modules目录中定义的模块被nodejs认为是第三方模块，如果是第3方模块可以省略./

const person = require("firelinks/person")


console.log(person.username,person.age,person.gender)
