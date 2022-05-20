
function spaceRemove(text){
    var newText = '';
    for(var i=0; i<text.length; i++){
        var char = text[i];
        if(char != ' '){
            newText = newText + char;
        }  
    }
    return newText;
}

var check = spaceRemove('Hello  My Gorgeous Friends');
console.log(check)