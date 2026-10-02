export function quickReference(): void {
  const fruits = ["apple", "banana", "cherry"];

  // 1. Classic for: index and value
  for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);                  // 0 apple, 1 banana, 2 cherry
  }

  // 2. for...of: values
  for (const fruit of fruits) {
    console.log(fruit);                         // apple, banana, cherry
  }

  // 3. for...of with entries(): index and value
  for (const [i, fruit] of fruits.entries()) {
    console.log(i, fruit);                      // 0 apple, 1 banana, 2 cherry
  }

  // 4. for...in: keys of an object
  const ages = { Lokesh: 37, Raj: 35 };
  for (const name in ages) {
    console.log(name);                          // Lokesh, Raj
  }

  // 5. forEach(): one callback call per element, no break
  fruits.forEach((fruit, i) => console.log(i, fruit));   // 0 apple, 1 banana, 2 cherry

  // 6. break and continue
  for (const n of [1, 2, 3, 4, 5]) {
    if (n === 2) continue;                      // skips 2
    if (n === 4) break;                         // stops at 4
    console.log(n);                             // 1, 3
  }

  // 7. Map, Set and object entries
  const prices = new Map([["apple", 5], ["banana", 3]]);
  for (const [fruit, price] of prices) {
    console.log(fruit, price);                  // apple 5, banana 3
  }
  for (const fruit of new Set(["apple", "apple", "kiwi"])) {
    console.log(fruit);                         // apple, kiwi
  }
  for (const [name, age] of Object.entries(ages)) {
    console.log(name, age);                     // Lokesh 37, Raj 35
  }
}
