const arr1 = [
    {id:1, index:10, name:"a", sum:123},
    {id:1, index:10, name:"b", sum:123},
    {id:2, index:10, name:"c", sum:123},
    {id:3, index:10, name:"d", sum:123},
    {id:3, index:10, name:"ee", sum:123}
]

/**
 * const arr = [
 *  {product: 10, "a":123, "b":123},
 *  {product:10, "c":123},
 *  {produce:10, "d":123, "ee":123}
 * ]
 * */ 
function getArr(arr){
    const map = new Map();
    arr.map((item) => { 
        const obj = {};
        obj["product"] = item.index;
        obj[item.name] = item.sum;
       map.set(item.id, {...obj, ...map.get(item.id) });
    })
    return [...map.values()];
}