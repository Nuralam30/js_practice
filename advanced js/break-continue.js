
// break-continue.js

var nums = [1,-2,3,-5,4,5,-7,6]

for(let i=0; i<nums.length; i++){
    if(nums[i] > 4){
        break;
    }
    // console.log(nums[i])
}


for(let i=0; i<nums.length; i++){
    if(nums[i] < 0){
        continue;
    }
    console.log(nums[i])
}