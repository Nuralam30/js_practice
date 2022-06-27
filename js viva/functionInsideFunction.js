
// functionInsideFunction.js

function createBase(baseValue){
    return function(n){
        return baseValue + n;
    }
}

var add = createBase(6);
console.log(add(10));
console.log(add(15))