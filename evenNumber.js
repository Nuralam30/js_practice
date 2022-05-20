
function evenNumber(num){
    if( num > 0){
        if(num % 2 == 0){
            var result = 'Even Number';
        }
        else{
            var result = 'Odd Number';
        }
        return result;
    }
    else{
        var result = 'Not a number';
    }
    return result;
}

var check = evenNumber(24.05);
console.log(check)
