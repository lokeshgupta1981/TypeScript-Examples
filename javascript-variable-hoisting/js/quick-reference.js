// 1. var: declaration hoisted, value is undefined
const a = early;                              // a = undefined
var early = 10;

// 2. let and const: temporal dead zone
// const b = later;                           // ReferenceError: Cannot access 'later' before initialization
let later = 20;

// 3. Function declaration: fully hoisted
const sum = add(2, 3);                        // sum = 5
function add(x, y) { return x + y; }

// 4. Function expression: only its var is hoisted
// const product = multiply(2, 3);            // TypeError: multiply is not a function
var multiply = function (x, y) { return x * y; };

// 5. Class: temporal dead zone
// const user = new User();                   // ReferenceError: Cannot access 'User' before initialization
class User {}

// 6. typeof of an undeclared name vs a name in the temporal dead zone
typeof notDeclared;                           // "undefined"
// typeof size;                               // ReferenceError: Cannot access 'size' before initialization
let size = 3;

console.log("a =", a, "| sum =", sum, "| typeof notDeclared =", typeof notDeclared);
console.log("later =", later, "| multiply =", multiply(2, 3), "| user =", new User(), "| size =", size);
