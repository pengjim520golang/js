
(function(){
    
    window.$  = window.jQuery = function(args){
        if(typeof args === "function"){
            window.onload = function(){
                args();
            } //把window.onload赋值给args
        }else if(typeof args ==="string"){
            document.querySelector(args).classList.add("boxCss")
        }
       
    }
})()