
function filterNegativeValue(num){
    var newArr = [];
    for(var i=0; i<num.length; i++){
        if(num[i] > 0){
            newArr.push(num[i]);
        }
    }
    return newArr;
}

var arr = [54, -56, 86 , -13, 65, 76, 35, -97];
var check = filterNegativeValue(arr);
console.log(check)