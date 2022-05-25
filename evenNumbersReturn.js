
// evenNumbersReturn
function evenNumbersReturn(nums){
    var evenNumbers = [];
    for(var i=0; i<nums.length; i++){
        var check = checkEven(nums[i]);
        evenNumbers.push(check);
    }
    return evenNumbers;
}

var numbers = [63, 26, 75, 54, 29, 76, 98];
var result = evenNumbersReturn(numbers);
console.log(result)


function checkEven(num){
    if(num%2 ==0){
        return num;
    }
    else{
        return num * num;
    }
}

