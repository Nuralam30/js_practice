
// anagrams.js

var firstword = 'Nasum';
var secondword = 'Usman';

function isAnagrams(x , y){
    var first = x.toLowerCase();
    var second = y.toLowerCase();

    first = first.split("").sort().join("");
    second = second.split("").sort().join("");
    
    if(first == second){
        console.log('This words are anagrams');
    }else{
        console.log('This words are not anagrams');
    }
}

isAnagrams(firstword, secondword)