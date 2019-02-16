(function(){

        var message = "this is a message"

        //把文字转为大写
        function toUpper(){
            console.log( message.toUpperCase() )
        }
        //把文字转为小写
        function toLower(){
            console.log( message.toLocaleLowerCase() )
        }
    
        window.Chat = {
            toUpper:toUpper,
            toLower:toLower
        }
})()