
const arr = [1, 2, 3];

//pop方法： 删除数组的最后一位

function pop(arr) {
    const result = arr[arr.length-1];
    arr.length --;
    return result;
}