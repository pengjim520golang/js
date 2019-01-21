function clickEvent(btnElement,btnEvent){
    //动态创建一个按钮属性
    var btn = document.querySelector("#" + btnElement)
    var msg = arguments[2]
    if(btnEvent === null || btnEvent === undefined){
        btnEvent = function(){
            
            if(typeof msg==="string" || typeof msg==="number"){
                alert(msg) //调用第3个参数进行弹出
            }else{
                alert("第3个参数必须是string或者number类型")
            }
            
        } 
    }
    //实现事件的onclick
    btn.onclick = btnEvent
}