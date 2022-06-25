
// reverseEachWord.js
// var sentence = "Hello this is Nura Alam ";
// var result = "";
// var temp = "";

// for (var i=0; i<sentence.length; i++){
//     temp = sentence[i] + temp;
//     if(sentence[i] == " "){
//         result = result + temp;
//         temp = "";
//     }
// }

// console.log(result);


var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

console.log(reverseEachWord);