
var num = [25, 45, 65, 12, 45, 86, 25, 54, 45, 27];

//first way
var uniqueNum = [];

for(var i=0; i<num.length; i++){
    var element = num[i];
    var index = uniqueNum.indexOf(element);

    if(index == -1){
        uniqueNum.push(element);
    }
}
console.log('first way',uniqueNum)

//second way
var uniqueNumbers = [...new Set(num)];
console.log('second way',uniqueNumbers)


// third way
var uniqueSet = [];

num.forEach((n) => {
    if (!uniqueSet.includes(n)) {
        uniqueSet.push(n);
    }
});

console.log('third way',uniqueSet)