// this 指向习题

//第一题
// function Pet(name) {
//     this.name = name;
//     this.getName = () => this.name;
// }
// const cat = new Pet("kobe");
// console.log(cat.getName()); // kobe
// const {getName} = cat;
// console.log(getName()); // kobe

// 第二题
// const length = 4;
// function callback() {
//     console.log(this.length);
// }
// const obj = {
//     length: 5,
//     method(callback){
//         callback();
//     }
// }
// obj.method(callback, 1, 2);//4

// 第二题演化
const length = 4;
function callback() {
    console.log(this.length);
}
const obj = {
    length: 5,
    method(){
        arguments[0]();
    }
}
obj.method(callback, 1, 2);//3