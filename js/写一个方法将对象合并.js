const a = {foo: 1};
const b = {bar: 2};
const c = {anz: 3};

function  merge(a, b, c) {
    return Object.assign({},a,b,c);
}

console.log({...{name: "oys"}})