(function(window){

    //实现列表功能
    function list(){
        var result = common();
        console.log("ls list function,common=" + result)
    }

    //实现添加功能
    function add(){
        var result = common();
        console.log("ls add function,common=" + result)
    }

    window.ls = {
        list:list,
        add:add 
    }

})(window)