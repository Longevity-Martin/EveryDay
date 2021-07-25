/*
* 完成一个对象的深度克隆方法的实现
* */
function deepclone(target = {}, origin = {}) {
    if (origin === null){
        return null;
    }
    for (const prop in origin) {
        if (origin.hasOwnProperty(prop)){
            if (typeof origin[prop] === "object"){
                target[prop] = Object.prototype.toString.call(origin[prop]) === "[object Array]"? []: {};
                deepclone(target[prop], origin[prop]);
            }else{
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}

const obj = {
    name: "oys",
    age: 18,
    height: 180,
    play: {
        time: 1000,
        long: 8000
    }
}
const arr = {};

