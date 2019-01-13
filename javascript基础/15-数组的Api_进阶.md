# forEach

该方法是实例方法,forEach用于遍历数组中的元素,其

* 语法规则：forEach(回调函数,thisArgs),该方法中的回调函数是同步方法
* 回调函数中的形参: function(value,index,source) 

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

