export function iterateSets(): void {
  const fruits = new Set(["apple", "banana", "mango"]);

  // 1. for...of
  for (const fruit of fruits) {
    console.log(fruit);                                   // apple, banana, mango
  }

  // 2. forEach: value and "key" are the same value
  fruits.forEach((value) => console.log(value));          // apple, banana, mango

  // 3. values(), keys() and entries()
  const values = [...fruits.values()];                    // values = ["apple", "banana", "mango"]
  const entries = [...fruits.entries()];                  // entries[0] = ["apple", "apple"]

  // 4. Re-adding keeps the position; delete and add moves it to the end
  fruits.add("apple");                                    // order unchanged
  fruits.delete("apple");
  fruits.add("apple");
  const order = [...fruits];                              // order = ["banana", "mango", "apple"]

  console.log("values =", JSON.stringify(values));
  console.log("entries[0] =", JSON.stringify(entries[0]));
  console.log("order =", JSON.stringify(order));
}
