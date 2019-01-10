# 工厂方法创建对象

通常在函数中封装一个对象的生成,通过该函数可以大批量的创建对象,我们成为使用工厂方法创建对象。

```javascript
function NewPerson(_name,_age,_gender){
	var obj = {
		name:_name,
		age:_age,
		gender:_gender
	}
	return obj
}

var zs = NewPerson("张三",33,"男")
var ls = NewPerson("李四",35,"男")
var ww = NewPerson("王五",23,"女")

console.log(zs)
console.log(ls)
console.log(ww)
```

以上代码生成了不同的对象,但你会发觉他们所有对象都来自Object这个类,Object实际上是js本身的一个构造对象的函数。

![](./images/object.png)

