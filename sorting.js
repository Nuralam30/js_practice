
function sortingArray(num){
    num.sort((a,b) =>{
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
    });
    return num
}

var array = [45, 56, 12, 87, 67, 34];
var check = sortingArray(array);
console.log(check)

