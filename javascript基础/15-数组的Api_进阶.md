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