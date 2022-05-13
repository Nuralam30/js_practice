
var num = [20, 12, 90, 32, 85, 7, 45];
var smaller = num[0];

for(var i=0; i<num.length; i++){
    if(num[i] < smaller){
        smaller = num[i];
    }
}
console.log('Smallest number is :', smaller);

