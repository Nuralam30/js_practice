
// callbackFunction

function callback(name, age, task){
    console.log('Hello ',name);
    console.log('Your age is ', age);
    task();
}

function field(){
    console.log("Go to the Field");
}

function school(){
    console.log("Go to the School");
}


var first = callback('Karim', 22, field);
var second = callback('Fahim', 27, school);