const  arr = ["a", "a", "b", "b", "a", "b", "a", "a"];
        // 0  1  4  6  7
    function  map(arr) {
        const array = arr.map((item, index) => {
            return item === "a"? index: "";
        })
        console.log(array.join("").split(""));;
    }
    function filter(arr) {
        const map = new Map();
        const array = arr.filter((item, index) => {
            if (item === "a"){
               map.set(index, item);
            }
        })
        console.log(Array.from(map.keys()));
    }