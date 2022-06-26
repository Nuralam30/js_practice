
// checkEmptyArray.js

var arr = [21, 23, 43, 32, 45];

var newArr = arr;
arr.length = 0;

if(newArr.length == 0){
    console.log('empty array :' + newArr)
}else{
    console.log('not empty array :' + newArr)
}