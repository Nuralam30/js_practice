
// scope.js

function valueAccess(){
    var id = 20;
    if(id){
        var friend = "Riya";
        let hobby = "Journey";
        // return friend
    }
    console.log(friend)
    // console.log(hobby)
}

valueAccess();


// set the value globally if data tupe is not used
function add(num1, num2){
    result = num1 + num2;
    return result
}

var sum = add(25, 15);
console.log(result)