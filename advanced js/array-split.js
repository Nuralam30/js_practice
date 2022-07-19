
// array-split.js

var nums = [1,2,3,4,5,6,7,8];
var part = nums.slice(2,5);

var removed = nums.splice(2, 4, 20)

console.log(removed)
console.log(nums)

var newNums = nums.join("#")
console.log(newNums)