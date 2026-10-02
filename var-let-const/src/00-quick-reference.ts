export function quickReference(): void {
  // 1. Reassignment
  let count = 1;
  count = 2;                                    // allowed
  const max = 10;
  // max = 20;                                  // error TS2588: max is a constant

  // 2. Scope
  {
    var fruit = "apple";                        // function scope
    let color = "red";                          // block scope
  }
  const seen = fruit;                           // seen = "apple"
  // color;                                     // error TS2304: Cannot find name 'color'

  // 3. Use before declaration
  // JavaScript: var gives undefined, let and const throw a ReferenceError

  // 4. Loop closures
  const varFns: (() => number)[] = [];
  for (var i = 0; i < 3; i++) varFns.push(() => i);
  const letFns: (() => number)[] = [];
  for (let j = 0; j < 3; j++) letFns.push(() => j);
  const fromVar = varFns.map((f) => f());       // fromVar = [3, 3, 3]
  const fromLet = letFns.map((f) => f());       // fromLet = [0, 1, 2]

  // 5. A const object can still change
  const ages = { Lokesh: 37 };
  ages.Lokesh = 38;                             // allowed, ages = { Lokesh: 38 }

  // 6. Inferred types
  let name1 = "Raj";                            // type string
  const name2 = "Raj";                          // type "Raj"

  console.log("count =", count, "| max =", max, "| seen =", seen);
  console.log("fromVar =", fromVar, "| fromLet =", fromLet);
  console.log("ages =", ages);
  console.log("name1 =", name1, "| name2 =", name2);
}
