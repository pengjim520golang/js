# es5中var的缺点

1. 可以重复声明

```javascript
    var a = {name:"zhangsan"}
    var a = 200 //重定义了a
    console.log(a) 
```

2. 无法限制修改

```javascript
    var b = 3.1415926 //b用于参与圆形相关计算，希望3.1415926不可以被修改
    b = 100 
    b = 200
    console.log(b) //b是可变的
```

3. 没有块级作用域

```html
<button>btn-1</button>
<button>btn-2</button>
<button>btn-3</button>

<script>

    var i = 100  
    for(var i=0;i<=10;i++){

    }

    console.log(i) //可以访问到i 
   


    //点击按钮btn-1，btn-2，btn-3，打印0，1,2

    var btns = document.getElementsByTagName("button")
    //转换btns为真数组
    var items = Array.prototype.slice.apply(btns)
    
    for(var i=0;i<items.length;i++){
        (function(i){
            btns[i].onclick = function(){
                alert(i)
            }
        })(i)
    }


</script>
```

4.有变量提升

```javascript
    console.log(a) //undefined
    var a ; 
```

> 注意:var在es6中不建议使用,但不代表var被舍弃了.尤其是在以太坊的geth命令行中需要使用var定义

# es6中的let和const

* let不能重复声明，用于声明的是变量,可以修改,有块级作用域,let不会产生变量提升

```html
<button>btn-1</button>
<button>btn-2</button>
<button>btn-3</button>

<script>

    let a = 100
    //let a = 100 #报错,重复定义会报错

    a = 200 //a可以被修改

    console.log(a)

    //i定义在()块级作用域中
    //for语句()和{}是两个块级作用域，所以()中的let变量和{}的let变量无关
    //for语句{}作用域可以看到()作用域的东西,但他们的声明变量不会重定义
    //{}作用域中定义的变量优先于()作用域中的，如果{}中有该变量会被优先使用
    for(let i=0;i<10;i++){
        let i = 100
        console.log(i)  //100打印10次
    }
    //console.log(i) // 报错,i没有被定义


    //点击按钮btn-1，btn-2，btn-3，打印0，1,2
    let btns = document.getElementsByTagName("button")
    //转换btns为真数组
    let items = Array.prototype.slice.apply(btns)
    //let内部的本质也有闭包
    for(let i=0;i<items.length;i++){
            btns[i].onclick = function(){
                alert(i)
            }
    }
</script>
```

let不会产生变量提升，如下代码会报错：

```javascript
    console.log(a) //报错
    let a ;
```

* const不能重复声明，用于声明的是常量,不可以修改,有块级作用域,const不会产生常量提升

```javascript
    const PI = 3.14
    //PI = 1.74 //报错
    console.log(PI) //基本数据类型的值不能被修改



    const arr = [1,2,3,4]
    arr = [5,6,7,8]   //赋值不能被修改
    console.log(arr) 
```

> 基本数据类型使用const声明是常量,const声明的引用数据类型要冻结后才是常量


```javascript
    const arr = [1,2,3,4,5] 
    arr[0] = 100 //arr引用的数组本身是可以修改的
    console.log(arr)

    const obj = {name:"pengjin",age:33}
    obj.age = 34 
    console.log(obj)


    //如果希望const被引用的数组不可以被修改，需要冻结该数组(es6的语法)
    const arr2 = [100,200,300]
    Object.freeze(arr2) //冻结arr2 
    arr2[0] = 999
    console.log("arr2=",arr2)


    const obj1 = {name:"pengjin",age:33}
    Object.freeze(obj1) //冻结obj1
    obj1.age = 34 
    console.log(obj1)
```
