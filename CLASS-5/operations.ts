
// MODULUS(%):

let orange: number = 15
let bags: number = 2
let reminder: number = orange % bags;
console.log(reminder);

// UNARY OPERATORS:

let a = 13 
let b = 14

// (++):

console.log(a++);
console.log(++a);
console.log(b++);
console.log(++b);

// (--):

console.log(a--); 
console.log(--a); 
console.log(b--); 
console.log(--b);

// HOME WORK:

let c: number = 5;
let d: number = 2;
let e: number = c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);


let result = 3 + 4 * 5; // COMBINING OPERATORS:
result++
console.log(result);

// ASSIGNMENT OPERATORS:

let f = 3
f += 2  // f is equal and + 1
console.log(f);
f -= 2  // f is equal and -1
console.log(f);
f *= 2 // f is equal and * 1
console.log(f);
f /= 2 // f is equal and / 1
console.log(f);
f %= 2 // f is equal and % 1
console.log(f);
f **= 2 // f is equal and ** 1
console.log(f);

// COMPARISON OPERATORS:

let g = 5
let h = 2
let isequal = (g==h); //false
let isnotequal = (g!=h); //true
let isgreaterthan = (g>h); //true
let islessthan = (g<h);//false
let greaterorequal = (g>=h); //true
let lessorequal = (g<=h); //false

// LOGICAL OPERATORS:

let i = 5 
let j = 2
let logicAnd = (i > j) && (j < i); //agr ek bhi false hoga tu answer false hi ayega
let logicOr = (i > j) || (i < j); //agr koi ek glat hoga tu bhi chlyga answer true hi ayega
let logicNot = !(i > j); //ismy answer console pr opposite ayga bracket true h tu false answer ayega 
