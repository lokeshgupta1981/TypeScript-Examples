function tryRun(label, fn) {
  try {
    console.log(label, fn());
  } catch (e) {
    console.log(label, String(e));
  }
}

// 1. var: declaration hoisted, value is undefined
tryRun("1. var before declaration:", () => {
  const a = early;                              // a = undefined
  var early = 10;
  return a;
});

// 2. let and const: temporal dead zone
tryRun("2. let before declaration:", () => {
  const b = later;                              // ReferenceError
  let later = 20;
  return b;
});

// 3. Function declaration: fully hoisted
tryRun("3. function declaration:", () => {
  const sum = add(2, 3);                        // sum = 5
  function add(x, y) { return x + y; }
  return sum;
});

// 4. Function expression stored in a var
tryRun("4. function expression:", () => {
  const product = multiply(2, 3);               // TypeError: multiply is not a function
  var multiply = function (x, y) { return x * y; };
  return product;
});

// 5. Class: temporal dead zone
tryRun("5. class before declaration:", () => {
  const user = new User();                      // ReferenceError
  class User {}
  return user;
});

// 6. A local var hides the outer variable from the first line
var fruit = "apple";
function pick() {
  const before = fruit;                         // before = undefined
  var fruit = "banana";
  return before;
}
tryRun("6. local var shadows outer:", pick);

// 7. typeof in the temporal dead zone
tryRun("7. typeof undeclared name:", () => typeof notDeclared);
tryRun("7. typeof in the TDZ:", () => {
  const t = typeof size;
  let size = 3;
  return t;
});
