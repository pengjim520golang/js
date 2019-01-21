function clickEvent(btnElement,btnEvent){
    //动态创建一个按钮属性
    var btn = document.querySelector("#" + btnElement)
    //实现事件的onclick
    btn.onclick = btnEvent
}