window.onload = function(){
    var Game = require("./game.js")
    var map = document.getElementById("map")
    var game = new Game(map)
    game.start()
}