
function brickCalculator(floor) {

    if(floor > 0) {
        if(floor <= 10) {
            var totalHeight = floor * 15;
            var totalbrick = totalHeight * 1000;
        }
        else if(floor <= 20) {
            var totalHeight = ((floor - 10) * 12) + (10 * 15);
            var totalbrick = totalHeight * 1000;
        }
        else if(floor <= 30) {
            var totalHeight = ((floor - 20) * 10) + (10 * 12) + (10 * 15);
            var totalbrick = totalHeight * 1000;
        }
        else {
            var totalbrick = " Building will not be safe for living";
        }
    }
    else {
        var totalbrick = "Thats not a correct input";
    }
    return totalbrick
}

var floorInput = brickCalculator(25);
console.log(floorInput)
