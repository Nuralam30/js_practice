
// decimalToOctal.js

function octalConverter(x){
    var oct = 0;
    let rem, i = 1;

    while( x != 0){
        rem = x % 8; // 2 , 2
        x = parseInt(x / 8); // 6, 0
        oct = oct + rem * i; // 2,  
        i = i * 10; // 10, 
    }
    console.log(oct);

}


octalConverter(100);