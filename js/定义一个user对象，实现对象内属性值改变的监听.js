/*
* 定义一个user对象，实现对象内属性值改变的监听操作
* */
const user = {
    name: "kobe",
    age: 2,
    play(){
        console.log(this.name, this.age);
    }
}

//ES5

Object.defineProperty(user, name, {
    set(v) {
        console.log("new value is" + "---" + v)
    }
})

//ES6
const user1 = new Proxy({}, {
    set(target, key, value){
        console.log(target, key, value)
    }
})

