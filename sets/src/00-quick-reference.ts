export function quickReference(): void {
  const fruits = new Set<string>();

  // 1. Add values; a duplicate is ignored
  fruits.add("apple").add("banana").add("apple");         // fruits = {"apple", "banana"}

  // 2. Check a value
  const hasApple = fruits.has("apple");                   // hasApple = true

  // 3. Size of the Set
  const count = fruits.size;                              // count = 2

  // 4. Iterate in insertion order
  for (const fruit of fruits) {
    console.log(fruit);                                   // apple, banana
  }

  // 5. Remove duplicates from an array
  const unique = [...new Set([1, 2, 2, 3, 3])];           // unique = [1, 2, 3]

  // 6. Set operations (ES2025)
  const a = new Set([1, 2, 3]);
  const b = new Set([3, 4]);
  const all = a.union(b);                                 // all = {1, 2, 3, 4}
  const common = a.intersection(b);                       // common = {3}
  const onlyA = a.difference(b);                          // onlyA = {1, 2}

  // 7. Delete a value and clear the Set
  const isDeleted = fruits.delete("banana");              // isDeleted = true
  fruits.clear();                                         // size = 0

  console.log("hasApple =", hasApple, "count =", count);
  console.log("unique =", JSON.stringify(unique));
  console.log("all =", all, "common =", common, "onlyA =", onlyA);
  console.log("isDeleted =", isDeleted, "size =", fruits.size);
}
