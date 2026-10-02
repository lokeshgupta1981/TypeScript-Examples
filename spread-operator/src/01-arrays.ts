export function arrays(): void {
  const fruits = ["apple", "banana"];
  const veggies = ["carrot"];

  // 1. Copy
  const copy = [...fruits];                     // copy = ["apple", "banana"]
  const isNew = copy !== fruits;                // isNew = true

  // 2. Merge and add items anywhere
  const all = [...fruits, ...veggies];          // all = ["apple", "banana", "carrot"]
  const withFirst = ["mango", ...fruits];       // withFirst = ["mango", "apple", "banana"]

  // 3. Push many items at once
  copy.push(...veggies);                        // copy = ["apple", "banana", "carrot"]

  // 4. Reverse a copy, not the original
  const reversed = [...fruits].reverse();       // reversed = ["banana", "apple"]
  const same = fruits.toReversed();             // same = ["banana", "apple"]

  console.log("isNew =", isNew, "all =", all, "withFirst =", withFirst);
  console.log("copy =", copy, "reversed =", reversed, "same =", same, "fruits =", fruits);
}
