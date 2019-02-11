(function(window){
    
    function Run(){
        var res = common();
        console.log("this is lisi module of run,common="+res)
    }

    function Go(){
        var res = common();
        console.log("this is lisi module of go,common="+res)
    }

    function Play(){
        var res = common();
        console.log("this is lisi module of play,common="+res)
    }

    //在全局暴露lisi模块
    window.lisi = {
        Run:Run,
        Go:Go,
        Play:Play 
    }

})(window)