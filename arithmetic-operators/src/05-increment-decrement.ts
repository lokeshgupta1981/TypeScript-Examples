export function incrementDecrement(): void {
  let count = 5;

  // 1. Postfix returns the old value
  const before = count++;                       // before = 5, count = 6
  console.log("before =", before, "count =", count);

  // 2. Prefix returns the new value
  const after = ++count;                        // after = 7, count = 7
  console.log("after =", after, "count =", count);

  // 3. Decrement works the same way
  const old = count--;                          // old = 7, count = 6
  console.log("old =", old, "count =", count);
}
