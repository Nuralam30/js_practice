
function woodCalculator(bed, table, chair) {

    if(bed > 0 && table >0 && chair > 0) {
        var forBed = 5 * bed;
        var forTable = 3 * table;
        var forChair = chair;

        var total = forBed + forTable + forChair;
    }
    else{
        var total = " is not a correct number";
    }
    return total
}

var requirement = woodCalculator(3, -2, 10);
console.log('Total required wood', requirement, 'cubic')