
// spreadOperator.js

// conctat easily all array values
var ages1 = [12, 23, 21, 18, 17, 23, 12];
var ages2 = [22, 24, 27];
var ages3 = [12, 27, 25, 32];

var allAges1 = ages1.concat(ages2).concat(ages3);
var allAges2 = [...ages1, ...ages2, ...ages3];

console.log(allAges1)
console.log(allAges2)

 // print unique values in an array
console.log([...new Set(ages1)]);
console.log(Math.max(...ages1));


