# 箭头函数

在es6中箭头函数一般作为回调函数使用,目的是为了简化传统的es6回调函数的格式.es6的箭头函数来自于python这种语法的灵感

语法格式：

```
(参数列表)=>{代码块列表}
```

1.如果箭头函数的参数只有一个()可以不写

2.如果箭头函数的逻辑代码只有1行{}可以不写

```javascript
     let arr = [11,22,33,44,55]
     arr.map( item=>console.log(item)  )
```

3.如果箭头函数只有1个返回值那么return可以不写

```javascript
    arr.sort((a,b)=>b-a)
    alert(arr)
```

> 注意事项:在某种特定的应用当中箭头函数作为回调函数无法等同于function

```javascript
    let arr = [11,22,33,44]
    let obj = {test:"change this is obj"}
    //如果是箭头函数无法修改this的指向
    arr.forEach( item=>console.log(this),obj )
    //以下function作为关键字的函数可以在回调中修改this的指向
    arr.forEach( function(item){
        console.log(this)
    },obj )

```

# es6函数的参数

1.函数参数的默认值,灵感来自于php的语法

```javascript

    function userInfo(name="zhangsan",age=44,gender="male"){
        console.log(name,age,gender)
    }

    userInfo(); //zhangsan 44 male
    userInfo("lisi") //lisi 44 male
    userInfo("wangwu",66) //wangwu 66 male
```

2. ...运算符,灵感来自于golang的语法

* 可以获取多个不定参数

```javascript
    function show(a,b,...args){
        console.log(a,b,...args)
    }

    show(11,12,13,14,15)
```

* ...运算符作为参数时只能放在最后面

```javascript
    //语法错误的定义,...args只能出现在最后
    function show(a,b,...args,c){
        console.log(a,b,...args,c)
    }

    show(11,12,13,14,15)
```

* ...运算法还可以展开数组


```javascript
    var arr1 = [1,2,3]
    var arr2 = [4,5,6]
    //展开数组后进行合并
    var arr = [...arr1,...arr2]
    console.log(arr)

    
    function show(a,b,c){
        console.log(a,b,c)
    }

    show(1,2,3)
    //在参数中展开数组
    show(...arr1)
```


* 注意:如下的代码会出错

```javascript
    var arr = [1,2,3]
    var a = ...arr  //报错

    console.log(a)
```


另外:es6新增的函数有generator函数,async函数.


