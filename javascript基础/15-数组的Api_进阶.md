# forEach

该方法是实例方法,forEach用于遍历数组中的元素,其

* 语法规则：forEach(callback,thisArgs),该方法中的callback是同步方法
* callback形参: function(value,index,source) 

   -value : 数组中的值

   -index : 数组中的索引

   -source : 原数组

* thisArgs: 可选参数。当执行回调 函数时用作this的值,如果省略this则是window

* 返回值：undefined

* 是否影响老数组：由回调函数决定

```javascript
var arr = ["pengjin","sasa","shanshan",["a","b","c"]]
arr.forEach(function(v,k,src){
	
	if( k == src.length-1 ){
	    if( Array.isArray(v) ){
		v.forEach(function(value){
			console.log("key=",k,",value=",value)
		})
	    }
	}else{
	    console.log("key=",k,",value=",v)
	}
})
```

传入thisArgs,this将是传入的对象

```javascript
var arr = ["pengjin","sasa"]
arr.forEach(function(v,k,src){
	console.log(this)
},{name:"pengjin"})
```

# every

该方法是实例方法,方法测试数组的所有元素是否都通过了指定函数的测试

语法:every(callback,thisArgs)

* callback形参: function(value,index,source)

   -value : 数组中的值

   -index : 数组中的索引

   -source : 原数组

* thisArgs: 可选参数。当执行回调 函数时用作this的值,如果省略this则是window
		
* 返回值：true false
		
* 是否影响老数组：不影响

```javascript
var arr = [100,"pengjin","sasa","shanshan",["a","b","c"]]
var bool = arr.every(function(value,index,src){
	if(typeof value==="string"){
		return true
	}
})
console.log(bool)
```

# some

该方法是实例方法,方法测试数组中的某些元素是否通过由提供的函数实现的测试。

语法:every(callback,thisArgs)

* callback形参: function(value,index,source)

   -value : 数组中的值

   -index : 数组中的索引

   -source : 原数组

* thisArgs: 可选参数。当执行回调 函数时用作this的值,如果省略this则是window
		
* 返回值：true false
		
* 是否影响老数组：不影响

```javascript
var arr =[1,2,3,4,5,6,7,8];
var result = arr.some(function(item,index){
    if(item > 7){
	return true;
    }
})
		
console.log(result);
```

# filter

该方法是实例方法,方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 

语法:filter(callback,thisArgs)

* callback形参: function(value,index,source)

   -value : 数组中的值

   -index : 数组中的索引

   -source : 原数组

* thisArgs: 可选参数。当执行回调 函数时用作this的值,如果省略this则是window
		
* 返回值：一个新的通过测试的元素的集合的数组
		
* 是否影响老数组：不影响

```javascript
var arr =[1,2,3,4,5,6,7,8];
var result = arr.filter(function(item,index){
    if(item<5){
	return true;
    }
})
		
console.log(result);
```

# sort

该方法使用in-place算法对数组的元素进行排序，并返回数组。

* 语法规则:sort(function(a,b))
  
   -从小到大,a-b

   -从大到小,b-a

* 返回值：返回排序后的数组。
		
* 是否影响老数组： 影响 原数组已经被排序后的数组代替。

```javascript
var arr =[1,2,6,4,3,5,7,8];
arr.sort(function(a,b){
	return b-a
})
console.log(arr)


var data =["Tommy","Alice","Candy","Bob"];
data.sort()
console.log(data)
```

> 大多数情况下我们如果是从大到小我们使用reverse来代替

```javascript
var arr =[1,2,6,4,3,5,7,8];
arr.reverse()
console.log(arr)
```

*sort和reverse细节:它们返回的数组都是一个引用*

# map 

该方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

语法:map(callback,thisArgs)

* callback形参: function(value,index,source)

   -value : 数组中的值

   -index : 数组中的索引

   -source : 原数组

* thisArgs: 可选参数。当执行回调 函数时用作this的值,如果省略this则是window

* 返回值：一个新数组，每个元素都是回调函数的结果。
		
* 是否影响老数组：不影响

```javascript
var arr = [4,6,8]
var result = arr.map(function(item){
	return item**2
})
console.log(arr,result)
```

把数据`[{key:1,value:10},{key:2,value:300},{key:3,value:400}]`转换为固定格式`[{1:10},{2:300},{3:400}]`

```javascript
var arr = [{key:1,value:10},{key:2,value:300},{key:3,value:400}]
var result = arr.map(function(item){
	var obj = {}
	obj[item.key] = item.value
	return obj
})
console.log(result)
```

# slice

该方法返回一个从开始到结束（不包括结束，左闭右开）选择的数组的一部分浅拷贝到一个新数组对象。

* 语法规则:slice(begin,end):[begin,end),begin 可选

* 返回值：一个含有提取元素的新数组
		
* 是否影响老数组：不影响

> 这个方法很像golang中的切片

```javascript
var arr = [1,2,3,4,5,6,7,8]
var result = arr.slice(1,4)
console.log(result)
result = arr.slice(4)
console.log(result)
result = arr.slice()
console.log(result)
//复制数组
result = arr.slice()
console.log(result)
console.log(arr==result)
```

# splice 

该方法通过删除现有元素和/或添加新元素来更改一个数组的内容

* 返回值:返回被删除的元素

* 是否影响老数组：影响

```javascript
var arr = [1,2,3,4,5,6,7]
//把2,3,4删除
var res = arr.splice(1,3)
console.log(arr,res)
```

```javascript
var arr = [1,2,3,4,5,6,7]
//在把3删除并且在原来3的位置开始插入a,b,c
arr.splice(2,1,"a","b","c")
console.log(arr)
```


```javascript
var arr = [1,2,3,4,5,6,7]
//在索引为2的位置开始插入a,b,c
arr.splice(2,0,"a","b","c")
console.log(arr)
```

```javascript
var arr = [1,2,3,4,5,6,7]
//删除整个数组中所有的元素
arr.splice(0)
console.log(arr)
```