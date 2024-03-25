// // MODULUS(%):
// let orange: number = 15
// let bags: number = 2
// let reminder: number = orange % bags;
// console.log(reminder);
// // UNARY OPERATORS:
// let a = 13 
// let b = 14
// // (++):
// console.log(a++);
// console.log(++a);
// console.log(b++);
// console.log(++b);
// // (--):
// console.log(a--); 
// console.log(--a); 
// console.log(b--); 
// console.log(--b);
// // HOME WORK:
// let c: number = 5;
// let d: number = 2;
// let e: number = c = ++a + a++ + --b + b-- + a + b++ + b;
// console.log(c);
var result = 3 + 4 * 5; // COMBINING OPERATORS:
result++;
console.log(result);
// ASSIGNMENT OPERATORS:
var f = 3;
f += 2; // f is equal and + 1
console.log(f);
f -= 2; // f is equal and -1
console.log(f);
f *= 2; // f is equal and * 1
console.log(f);
f /= 2; // f is equal and / 1
console.log(f);
f %= 2; // f is equal and % 1
console.log(f);
f = Math.pow(f, 2); // f is equal and ** 1
console.log(f);
// COMPARISON OPERATORS:
var g = 5;
var h = 2;
var isequal = (g == h); //false
var isnotequal = (g != h); //true
var isgreaterthan = (g > h); //true
var islessthan = (g < h); //false
var greaterorequal = (g >= h); //true
var lessorequal = (g <= h); //false
// LOGICAL OPERATORS:
var i = 5;
var j = 2;
var logicAnd = (i > j) && (j < i); //agr ek bhi false hoga tu answer false hi ayega
var logicOr = (i > j) || (i < j); //agr koi ek glat hoga tu bhi chlyga answer true hi ayega
var logicNot = !(i > j); //ismy answer console pr opposite ayga bracket true h tu false answer ayega 
