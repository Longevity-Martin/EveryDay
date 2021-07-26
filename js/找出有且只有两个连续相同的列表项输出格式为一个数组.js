const arr = [1, 2, 3, 3, 4, 4, 4, "a", "a", 6, 6, 6];
const  result = [];

let length = arr.length;
for(let i = 0; i < length; i++){
    if (arr[i] === arr[i+1] && arr[i+1] !== arr[i+2] && arr[i+1] !== arr[i-1]){
        const obj = {};
        obj['value'] = arr[i];
        result.push(obj);
        arr.splice(i, 2);
        i--;
        length -= 2;
    }
}
console.log(result)