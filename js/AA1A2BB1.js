const arr1 = ["A1", "A2", "B1", "B2", "C1", "C2"];
const arr2 = ["A", "B", "C"];

//怎么变成["A1", "A2", "A", "B1", "B2", "B", "C1", "C2", "C", "D1", "D2", "D"]

function getArr(arr1, arr2){
    const arr = arr2.map((item, index) => [arr1[index*2], arr1[index*2+1], item]);
    
    console.log(arr.join().split(","));
}