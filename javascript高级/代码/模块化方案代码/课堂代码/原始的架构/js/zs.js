(function(window){

    //实现列表功能
    function list(){
        var result = common();
        console.log("zs list function,common=" + result)
    }

    //实现添加功能
    function add(){
        var result = common();
        console.log("zs add function,common=" + result)
    }

    window.zs = {
        list:list,
        add:add 
    }

})(window)