
var num = [25, 45, 65, 12, 45, 86, 25, 54, 45];
var uniqueNum = [];

for(var i=0; i<num.length; i++){
    var element = num[i];
    var index = uniqueNum.indexOf(element);

    if(index == -1){
        uniqueNum.push(element);
    }
}

console.log(uniqueNum)