// 1. var: hoisted and set to undefined
console.log(hoisted);                           // undefined
var hoisted = 10;

// 2. let: temporal dead zone
try {
  console.log(early);
  let early = 1;
} catch (e) {
  console.log(String(e));                       // ReferenceError: Cannot access 'early' before initialization
}

// 3. const: no reassignment
const max = 10;
try {
  max = 20;
} catch (e) {
  console.log(String(e));                       // TypeError: Assignment to constant variable.
}

// 4. No keyword at all (ES modules are always in strict mode)
try {
  index = 0;
} catch (e) {
  console.log(String(e));                       // ReferenceError: index is not defined
}
