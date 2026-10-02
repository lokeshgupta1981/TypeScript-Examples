export function quickReference(): void {
  const fruits = ["apple", "banana"];
  const lokesh = { name: "Lokesh", age: 37 };

  // 1. Copy and extend an array
  const copy = [...fruits];                     // copy = ["apple", "banana"]
  const more = [...fruits, "cherry"];           // more = ["apple", "banana", "cherry"]

  // 2. Copy an object and override a property
  const older = { ...lokesh, age: 38 };         // older = { name: "Lokesh", age: 38 }

  // 3. Spread an array into function arguments
  const max = Math.max(...[3, 7, 5]);           // max = 7

  // 4. Rest parameter collects arguments
  const sum = (...nums: number[]) => nums.reduce((a, b) => a + b, 0);
  const total = sum(1, 2, 3);                   // total = 6

  // 5. Rest destructuring removes a property
  const { age, ...rest } = lokesh;              // rest = { name: "Lokesh" }

  // 6. Strings and Sets are iterable
  const letters = [..."hi"];                    // letters = ["h", "i"]
  const unique = [...new Set([1, 1, 2])];       // unique = [1, 2]

  console.log("copy =", copy, "more =", more);
  console.log("older =", older, "max =", max, "total =", total);
  console.log("age =", age, "rest =", rest, "letters =", letters, "unique =", unique);
}
