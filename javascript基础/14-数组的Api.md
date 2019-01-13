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

# shift

该api是一个实例方法,必须要new以后才能使用,shift()方法从数组中删除第1个元素，并返回该元素的值。此方法更改数组的长度

语法：arr.shift(),返回值：从数组中删除的元素(当数组为空时返回undefined)
> 注意:该方法会修改原来变量的原始值,也就是影响了老数组

```javascript
var arr = ["pengjin","zhangsan","wangwu"]
var res = arr.shift()
console.log(arr,res,arr.length)

res = arr.shift()
console.log(arr,res,arr.length)

res = arr.shift()
console.log(arr,res,arr.length)

res = arr.shift()
console.log(arr,res,arr.length)
```

# concat

该api是一个实例方法,必须要new以后才能使用，方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

语法：arr.concat(arr1[, arr2[, ...[, arrN]]])，返回新的 Array 实例
> 注意:该不会影响了老数组

```javascript
var arr =[1,2,1,4];
var arr1=[5];
var arr2=[6];
var result = arr.concat(arr1,arr2);
console.log(result,arr,arr1,arr2);
```

# indexOf

该api是一个实例方法,必须要new以后才能使用，方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

* 语法：arr.indexOf(searchElement)
* 参数：searchElement要查找的元素
* 返回值：首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1
* 是否影响老数组：不影响

```javascript
var arr =[1,2,1,4];
var result = arr.indexOf(1); //0
console.log(result,arr);
```


# lastIndexOf() 

该api是一个实例方法,必须要new以后才能使用，方法返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1

* 语法：arr.lastIndexOf(searchElement)
* 参数：searchElement要查找的元素
* 返回值：数组中最后一个元素的索引，如未找到返回-1
* 是否影响老数组：不影响
		
```javascript
var arr =[1,2,1,4];
var result = arr.lastIndexOf(1); //2
console.log(result,arr);
```

# join

该api是一个实例方法,必须要new以后才能使用，方法将一个数组的所有元素连接成一个字符串并返回这个字符串

* 语法：arr.join(separator)
* 参数：separator指定一个字符串来分隔数组的每个元素。如果省略()，数组元素用逗号分隔。默认为 ","。
* 返回值：一个所有数组元素连接的字符串。如果 arr.length 为0，则返回空字符串
* 是否影响老数组：不影响

```javascript
var arr =[1,2,1,4];
var result = arr.join("&");
console.log(result,arr);
```

# toString

该api是一个实例方法,必须要new以后才能使用，返回一个字符串，表示指定的数组及其元素。

* 语法：arr.toString()
* 参数：无
* 返回值：返回一个字符串。 
* 是否影响老数组：影响

```javascript
var arr =[1,2,3,4];
var result = arr.toString();
console.log(result,arr);
```