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

> 在js中call使用的几率更高,通常用于转换伪数组为真数组

# 伪数组

通常属性名是数值且含有length属性的对象,我们称为伪数组,然而伪数组无法使用数组中的方法,这时我们需要把伪数组转换为真数组

```javascript

var obj = new Object()
obj[0] = 100
obj[1] = 200
obj[2] = 300
obj.length = 3

console.log( Array.isArray(obj) ) //false

var arr = Array.prototype.slice.call(obj)

console.log( Array.isArray(arr) ) //true

arr.map(function(item,index){
	console.log(index,item)
})
```

# arguments

函数中的形参都存放在arguments对象中,而arguments拥有length属性是一个经典的伪数组

```javascript
function demo(){
	console.log( typeof arguments )
	console.log( arguments.length )
	console.log(arguments[0])
	console.log(arguments[1])
	console.log(arguments[2])
}

demo(100,200,300)
```

```javascript
function demo(){
	var arr = Array.prototype.slice.call(arguments)
	arr.map(function(item,index){
		console.log(index,item)
	})
}

demo(100,200,300)
```