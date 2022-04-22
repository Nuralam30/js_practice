
var a, b;
a = 5;
b = 7;

var temp = a;
a = b;
b = temp;
console.log("a =", a, "b =", b);


var x, y;
x = 5;
y = 7;

x = x + y;
y = x - y;
x = x - y;
console.log("x =", x, "y =", y);


var p, q;
p = 5;
q = 7;
[p, q] = [q, p];
console.log("p =", p, "q =", q);
