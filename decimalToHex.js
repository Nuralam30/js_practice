
// decimalToHex.js

function hexConverter(x){

    let hex = x.toString(16);
    let hexadecimal = hex.toUpperCase();
    console.log(hexadecimal)
}

function decimalConverter(x){
    let decimal = parseInt(x,16);
    console.log(decimal)
}


hexConverter(3999);
decimalConverter('F9F');