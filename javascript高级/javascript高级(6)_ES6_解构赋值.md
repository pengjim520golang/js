# 解构赋值

解构数据两边必须都是同一个东西.

在左边{}包住是变量而不是对象的属性,右边是一个对象并且决定左边使用{}还是[],如果是对象左边就需要用{}包住变量，如果是数组就需要用[]包住变量

```javascript
    let obj = {
        name:"pengjin",
        age:33,
        gender:"male"
    }

    let arr = ["aa","bb","cc"]

    //需要把obj.name赋值给变量name,name = obj.name
    //需要把obj.age赋值给变量age,age = obj.age
    //需要把obj.gender赋值给变量gender,gender = obj.gender
    //在左边{}包住是变量而不是对象的属性,右边是一个对象并且决定左边使用{}还是[],如果是对象左边就需要用{}包住变量，如果是数组就需要用[]包住变量
    let {gender,name,age} = obj  //对象的解构不会受到属性顺序的影响，取决于变量的名称和属性名称是否一致
    
    console.log(name,age,gender)


    //let {a,b,c} = arr //无法获取数组
    let [a,b,c] = arr 
    let [x,y] = arr 
    console.log(a,b,c,x,y)
```

> 对象的解构不会受到属性顺序的影响，取决于变量的名称和属性名称是否一致
