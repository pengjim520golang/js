# isArray

该api是一个静态方法只能通过构造函数名Array去调用,语法:Array.isArray(对象实例)。返回true表示为当前对象实例是一个数组,否则返回false

```javascript
var arr = ["pengjin",13,23,undefined,null]
console.log( Array.isArray(arr) ) //true

var str = "pengjin"
console.log( Array.isArray(str) ) //false
```


# push

该api是一个实例方法,必须要new以后才能使用,push方法用于在一个数组的末尾添加元素。语法:数组.push(元素...)
> 注意:该方法会修改原来变量的原始值

```javascript
var arr = ["pengjin"]
arr.push("zhangsan","lisi","wangwu")
console.log(arr)
```


# unshift

该api是一个实例方法,必须要new以后才能使用,unshift方法用于在一个数组的头部添加元素。语法:数组.unshift(元素...)
> 注意:该方法会修改原来变量的原始值

```javascript
var arr = ["pengjin"]
arr.unshift("zhangsan","lisi","wangwu")
console.log(arr)
```