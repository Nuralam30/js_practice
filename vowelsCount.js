
function vowelsCount(text){
    var count = 0;
    for(var i=0; i<text.length; i++){
        var char = text[i];
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
            count++;
        }
    }
    return count;
}

var check = vowelsCount('Hi, This is Nur. I am here to make friendship with you.');
console.log(check)