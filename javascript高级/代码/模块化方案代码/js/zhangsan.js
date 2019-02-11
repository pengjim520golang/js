(function(window){
    
    function Run(){
        var res = common();
        console.log("this is zhangsan module of run,common="+res)
    }

    function Go(){
        var res = common();
        console.log("this is zhangsan module of go,common="+res)
    }

    function Play(){
        var res = common();
        console.log("this is zhangsan module of play,common="+res)
    }

    //在全局暴露zhangsan模块
    window.zhangsan = {
        Run:Run,
        Go:Go,
        Play:Play 
    }

})(window)