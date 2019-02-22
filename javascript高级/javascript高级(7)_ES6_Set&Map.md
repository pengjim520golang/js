# Set

Set在es6中主要的功能用于数组去重,Set里面的值是唯一,且Set没有索引.Set用于表示一个唯一性的集合,其定义语法格式如下：

```javascript
let set = new Set(数组对象)
```

代码示例如下:

```javascript
    let set = new Set([1,2,3,4,4,3])
    //发觉set是一个唯一性的集合,具有数组去重的功能
    console.log(set)
```

在Set集合中无法实现单个取值和修改的功能，但可以实现Set集合的遍历,Set添加,Set的删除和清空等功能

```javascript
    let set = new Set() 
    let obj = {name:"zhangsan"}

    //添加数据到set中使用add方法
    set.add("pengjin")
    set.add(100)
    set.add(obj)

    console.log(set)

    //遍历当前的set可以使用for..of语句，因为set内部实现了迭代器协议(Symbol.iterator)

    for(let item of set){
        console.log(item)
    }

    //删除set中的数据是根据数据内容本身删除

    set.delete("pengjin")
    set.delete(obj) //注意：set一般不要放对象，放对象使用map，因为set无法删除对象,如果要放置对象并希望删除需要通过变量进行引用
    console.log(set)


    //set的清除
    let set1 = new Set([11,22,33]) 
    set1.clear() //一次性删除所有的set元素
    console.log(set1)
```

>注意事项: set的值和索引是相同的

```javascript
    let set = new Set(["a","b","c"])

    let keys = set.keys()
    for (let item of keys) {
        console.log(item)
    }


    let vals = set.values()
    for (let v of vals) {
        console.log(v)
    }

    //返回：(索引：值)数组

    let kvs = set.entries() //set 的entries方法没有任何意义
    for (let kv of kvs) {
        console.log(kv)
    }
```

# Map

Map和Set功能基本一致,不过Map是以键值对的方式存储数据,Map既可以变量也可以获取单个指定的值

```javascript
    let map = new Map([ ["name","pengjin"],["age",33],["gender","fmale"] ])
    console.log(map)
    //一般使用add方法添加key=>value到map中
    let map2 = new Map()
    map2.set("index",100)
    map2.set("item","壹佰")
    console.log(map2)

    //可以通过size获取一个map对象有多少个元素
    console.log(map.size,map2.size )

    //获取单个值
    console.log(map2.get("item") )

    //删除key为item的值
    map2.delete("item")
    console.log(map2)

    //判断一个键是否存在
    let map3 = new Map()
    map3.set("id",100)
    map3.set("username","zhangsan")

    console.log( map3.has("id") ) //true

    console.log( map3.has("password") )//false


    //map的遍历所有的键
    let keysOfMap3 = map3.keys()
    for(let key of keysOfMap3){
        console.log(key)
    }
    
    //map的遍历所有的值
    let valsOfMap3 = map3.values()
    for(let v of valsOfMap3){
        console.log(v)
    }
    

    //map的遍历所有的键值对
    let kvs = map3.entries()
    for(let kv of kvs){
        console.log(kv)
    }
```