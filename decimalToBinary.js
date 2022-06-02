
// node decimalToBinary.js

// program to convert decimal to binary
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2; // 0, 0, 0, 1, 0, 0, 1, 1
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2); //100, 50, 25, 12, 6, 3, 1, 0 
        bin = bin + rem * i; // 0+0*1, 0+0*10, 0+0*100, 0+1*1000, 1000+0*10000, 1000+0*100000, 1000+1*1000000, 1001000+10000000
        i = i * 10; // 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000
    }
    console.log(`Binary: ${bin}`);

}


convertToBinary(200);