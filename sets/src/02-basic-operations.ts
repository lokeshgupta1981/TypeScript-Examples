export function basicOperations(): void {
  const fruits = new Set<string>();

  // 1. Add; add() returns the Set, so calls can be chained
  fruits.add("apple");
  fruits.add("banana").add("mango");
  fruits.add("apple");                                    // ignored, already present

  // 2. Read
  const count = fruits.size;                              // count = 3
  const hasMango = fruits.has("mango");                   // hasMango = true
  const hasKiwi = fruits.has("kiwi");                     // hasKiwi = false

  // 3. Delete
  const deleted = fruits.delete("mango");                 // deleted = true
  const again = fruits.delete("mango");                   // again = false

  // 4. Clear
  fruits.clear();                                         // size = 0

  console.log("count =", count, "hasMango =", hasMango, "hasKiwi =", hasKiwi);
  console.log("deleted =", deleted, "again =", again, "size =", fruits.size);
}
