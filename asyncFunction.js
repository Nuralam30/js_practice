
// asyncFunction.js

function one(){
    console.log('text one');
}

function asyncFunc(){
    console.log('text two. data loading....');
}

function two(){
    setTimeout(()=>{
        asyncFunc();
    },3000);
}

function three(){
    console.log('text three');
}

function four(){
    console.log('text four');
}

one();
two();
three();
four();