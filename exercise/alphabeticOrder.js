
// alphabeticOrder.js

function alphabeticOrder(word){
    var w = word.split('').sort().join('');

    console.log(w)
}

alphabeticOrder('webmaster')