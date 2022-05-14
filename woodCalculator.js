
function woodCalculator(bed, table, chair) {

    var forBed = 5 * bed;
    var forTable = 3 * table;
    var forChair = chair;

    var total = forBed + forTable + forChair;
    return total
}

var requirement = woodCalculator(3, 2, 10);
console.log('Total required wood', requirement, 'cubic')