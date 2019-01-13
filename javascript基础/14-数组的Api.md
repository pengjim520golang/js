# isArray

该api是一个静态方法只能通过构造函数名Array去调用,语法:Array.isArray(对象实例)。返回true表示为当前对象实例是一个数组,否则返回false

```javascript
var arr = ["pengjin",13,23,undefined,null]
console.log( Array.isArray(arr) ) //true

var str = "pengjin"
console.log( Array.isArray(str) ) //false
```


# push

该api是一个实例方法,必须要new以后才能使用,push方法用于在一个数组的末尾添加元素。

语法:数组.push(元素...),返回添加后的数组长度
> 注意:该方法会修改原来变量的原始值,也就是影响了老数组

```javascript
var arr = ["pengjin"]
var len = arr.push("zhangsan","lisi","wangwu")
console.log(arr,len)
```


# unshift

该api是一个实例方法,必须要new以后才能使用,unshift方法用于在一个数组的头部添加元素。

语法:数组.unshift(元素...),返回添加后的数组长度
> 注意:该方法会修改原来变量的原始值,也就是影响了老数组

```javascript
var arr = ["pengjin"]
var len = arr.unshift("zhangsan","lisi","wangwu")
console.log(arr,len)
```

# pop

该api是一个实例方法,必须要new以后才能使用,pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度

语法：arr.pop(),返回值：从数组中删除的元素(当数组为空时返回undefined)
> 注意:该方法会修改原来变量的原始值,也就是影响了老数组

```javascript
var arr = ["pengjin","zhangsan","wangwu"]
var res = arr.pop()
console.log(arr,res,arr.length)

res = arr.pop()
console.log(arr,res,arr.length)

res = arr.pop()
console.log(arr,res,arr.length)

res = arr.pop()
console.log(arr,res,arr.length)
```