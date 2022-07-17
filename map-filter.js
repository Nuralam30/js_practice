
// map-filter.js

var numbers = [2, 3, 4, 5];

function square(arr){
    var output = []
    for(let i=0; i<arr.length; i++){
        var square = arr[i] * arr[i];
        output.push(square)
    }
    console.log(output)
}
square(numbers)


// mapping method
// const result = numbers.map(function(element){
//     return element * element;
// });

const result = numbers.map( element => element * element);
console.log(result)

const bigger = numbers.filter(num => num > 3)

const isThere = numbers.filter(num => num < 5)
console.log(isThere)