
// reverseEachWord.js
var sentence = "Hello this is Nura Alam ";
var result = "";
var temp = "";

for (var i=0; i<sentence.length; i++){
    temp = sentence[i] + temp;
    if(sentence[i] == " "){
        result = result + temp;
        temp = "";
    }
}
console.log(result)