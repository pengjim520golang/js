//import关键字必须出现在执行代码的首行，不能放在任何函数作用域当中
import {Game} from "./game.js"

window.onload = function(){
    var map = document.querySelector("#map")
    var game = new Game(map)
    game.start()
}