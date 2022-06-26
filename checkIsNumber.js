
// checkIsNumber.js

var x = 'Hello';

if(typeof(x) === "number"){
    console.log('It is a number.')
}else{
    console.log('It is not a number.')
}


// second method
function checkIsNumber(number){
    var check =  number % 1 === 0;
    if(check == true){
        console.log('Is a number.')
    }else {
        console.log('Is not a number.')
    }

}
checkIsNumber(x);
