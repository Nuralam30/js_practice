
var num = [20, 12, 90, 32, 85, 45];
var largeNum = num[0];

for(var i=0; i<num.length; i++){ 
    if(num[i] > largeNum){
        largeNum = num[i];
    }
}

console.log('Large number is :' +largeNum);