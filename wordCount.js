
var sentence = "Hello this is Nur. I am  from Bangladesh."

var count = 0;

for( var i = 0; i < sentence.length; i++){
    var char = sentence[i];

    if(char == " " && sentence[i-1] != " "){
        count++;
    }
}

count++;
console.log('Number of words :', count)