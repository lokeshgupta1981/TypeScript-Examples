export function copyingMethods(): void {
  const scores = [30, 10, 20];

  // 1. Sort a copy
  const sorted = scores.toSorted((a, b) => a - b);   // sorted = [10, 20, 30]

  // 2. Reverse a copy
  const reversed = scores.toReversed();         // reversed = [20, 10, 30]

  // 3. Remove or insert in a copy
  const spliced = scores.toSpliced(1, 1);       // spliced = [30, 20]

  // 4. Replace one element in a copy
  const changed = scores.with(0, 99);           // changed = [99, 10, 20]

  // scores is unchanged: [30, 10, 20]

  console.log("sorted =", sorted, "| reversed =", reversed);
  console.log("spliced =", spliced, "| changed =", changed, "| scores =", scores);
}

export function defaultSortPitfall(): void {
  const nums = [10, 9, 1];

  const wrong = nums.toSorted();                // wrong = [1, 10, 9]
  const right = nums.toSorted((a, b) => a - b); // right = [1, 9, 10]

  console.log("wrong =", wrong, "| right =", right);
}
