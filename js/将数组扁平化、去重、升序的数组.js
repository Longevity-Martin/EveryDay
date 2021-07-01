const arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 12, [14]]]]]

function getArr(){
    function falt(arr){
        return arr.reduce((c, v) => c.concat(Array.isArray(v)? falt(v): v), []);
    }
    return [...new Set(falt(arr))].sort((a, b) => a - b);
}

