# isArray

该api是一个静态方法只能通过构造函数名Array去调用,语法:Array.isArray(对象实例)。返回true表示为当前对象实例是一个数组,否则返回false

```javascript
var arr = ["pengjin",13,23,undefined,null]
console.log( Array.isArray(arr) ) //true

var str = "pengjin"
console.log( Array.isArray(str) ) //false
```


