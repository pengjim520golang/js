# call()和apply()

* 这两个方法都是函数对象的方法，需要通过函数对象来调用
* 当对函数调用call()和apply()都会调用函数执行
* 在调用call()和apply()可以将一个对象指定为第一个参数,此时这个对象将会成为函数执行时的this
* call()方法可以将实参在对象之后依次传递
* apply()方法需要将实参封装到一个数组中统一传递

```javascript
function func(){
	console.log(this)
}

var obj = {
	name:"zs",
	age : 33
}

func.call(obj)
```

```javascript
function addition(x,y){
	console.log(x+y)
	console.log(this)
}

addition.call({name:"pengjin"},3,4)
```


```javascript
function addition(x,y){
	console.log(x+y)
	console.log(this)
}

addition.apply({name:"pengjin"},[30,40])
```