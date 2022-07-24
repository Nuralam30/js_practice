
// reverseNumber.js

function reverseNum(num){
    var n = num.toString();
    var result = '';

    for (let i = n.length-1; i >= 0; i--) {
        const element = n[i];
        result = result + element;
    }
    console.log(parseInt(result))
}

reverseNum(32243);