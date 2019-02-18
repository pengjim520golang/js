(function(window){

    //实现列表功能
    function list(){
        var result = common();
        console.log("pj list function,common=" + result)
    }

    //实现添加功能
    function add(){
        var result = common();
        console.log("pj add function,common=" + result)
    }

    window.pj = {
        list:list,
        add:add 
    }

})(window)