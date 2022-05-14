
function feetToMile(feet){

    var feetValue = feet;
    var mile = feetValue / 5280;
    return mile.toFixed(6)
}

var mileValue = feetToMile(1000);
console.log(mileValue)