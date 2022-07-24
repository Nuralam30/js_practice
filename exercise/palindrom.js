
// palindrom.js
function palindromCheck(text){
    var check = '';
    for (let i = 0; i < text.length; i++) {
        var char = text[i];
        check = char + check;
    }
    if(check === text){
        console.log('Palindrom word...');
    }
    else{
        console.log('Not a palindrom word...');
    }
}

palindromCheck('madam')
palindromCheck('nurses')