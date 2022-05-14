
var names = ["Jamal", "Rahim", "Munna", "Riya", "Shamim", "Priya"];

function tinyFriend(name){

    var tinyName = name[0];
    var tinyNameLength = name[0].length;

    for( var i=1; i<name.length; i++){

        var stringLength = name[i].length;

        if(stringLength < tinyNameLength){
            tinyName = name[i];
        }
    }
    return tinyName;
}

var friendName = tinyFriend(names)
console.log(friendName)