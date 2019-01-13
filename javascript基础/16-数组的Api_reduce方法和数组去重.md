# reduce方法

该方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

语法：arr.reduce(function(accumulator,currentValue,currentIndex,array),initialValue)

* accumulator

累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。

* currentValue

数组中正在处理的元素。

* currentIndex可选

数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则为1。

* array可选

调用reduce()的数组

* initialValue可选

作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。


返回值：函数累计处理的结果

### 求一个数组中的和

```javascript
var arr = [1,3,4,5]
var sum = arr.reduce(function(acc,item){
	return acc+item	
},0)
console.log(sum)
```

### 数组去重

* 第1种方式:通过算法实现

```javascript
function uniqueArr(arr){
	var res = []
	arr.sort().map(function(item,index){
		if(index===0 || res[res.length-1]!==item ){
			res.push(item)
		}
	})
	return res
}
var arr = [1,2,3,4,4,5,1,1,2,2,3,6,7,8,9,9]
console.log( uniqueArr(arr) )
```

* 第2种方式:通过使用reduce方法去实现

```javascript
var arr = [1,2,3,4,4,5,1,1,2,2,3,6,7,8,9,9]

var result = arr.sort().reduce(function(res,item,index){
	if(index===0 || res[res.length-1]!==item){
		res.push(item)
	}
	return res
},[])
console.log( "unique:", result )
```