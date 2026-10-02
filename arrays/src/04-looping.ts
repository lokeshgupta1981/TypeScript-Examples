export function looping(): void {
  const fruits = ["apple", "banana"];

  // 1. Values
  for (const fruit of fruits) {
    console.log(fruit);                         // apple, banana
  }

  // 2. Index and value
  for (const [i, fruit] of fruits.entries()) {
    console.log(i, fruit);                      // 0 apple, 1 banana
  }

  // 3. forEach
  fruits.forEach((fruit, i) => console.log(i, fruit));   // 0 apple, 1 banana

  // 4. for...in gives string keys, not values
  for (const key in fruits) {
    console.log(typeof key, key);               // string 0, string 1
  }
}
