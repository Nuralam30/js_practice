
// arguments
function add(num1, num2){
    console.log(arguments)
    var sum = 0;
    for(var i=0; i<arguments.length; i++){
        var num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

var result = add(3,5,6,9);
console.log('Summation :',result)