(function(window){
    
    function Run(){
        var res = common();
        console.log("this is pengjin module of run,common="+res)
    }

    function Go(){
        var res = common();
        console.log("this is pengjin module of go,common="+res)
    }

    function Play(){
        var res = common();
        console.log("this is pengjin module of play,common="+res)
    }

    //在全局暴露pengjin模块
    window.pengjin = {
        Run:Run,
        Go:Go,
        Play:Play 
    }

})(window)