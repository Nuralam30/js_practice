
function feetToMile(feet){

    if( feet > 0) {
        var mile = feet / 5280;
        var totalMile = mile.toFixed(6);
    }
    else {
        var totalMile = "Is not a correct number";
    }
    return totalMile
}

var mileValue = feetToMile(1000);
console.log(mileValue)