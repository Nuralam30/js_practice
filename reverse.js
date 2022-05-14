
function reverseText(text){
    var reverse = "";

    for( var i = 0; i < text.length; i++){

        var char = text[i];
        reverse = char + reverse; 
    }
    return reverse;
}

var myText = "I Love my country.";
var reverseString = reverseText(myText);
console.log(reverseString)