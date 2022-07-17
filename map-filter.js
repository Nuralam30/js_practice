
// map-filter.js

var array = [2, 3, 4, 5];

function square(arr){
    var output = []
    for(let i=0; i<arr.length; i++){
        var square = arr[i] * arr[i];
        output.push(square)
    }
    console.log(output)
}
square(array)