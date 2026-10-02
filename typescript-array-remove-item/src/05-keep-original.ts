export function removeFromCopy(): void {
  const nums = [10, 20, 30, 40];

  // 1. Without the element at index 1 (ES2023)
  const a = nums.toSpliced(1, 1);               // a = [10, 30, 40]

  // 2. Without the first or last element
  const b = nums.slice(1);                      // b = [20, 30, 40]
  const c = nums.slice(0, -1);                  // c = [10, 20, 30]

  // 3. Without a value
  const d = nums.filter((n) => n !== 30);       // d = [10, 20, 40]

  // nums is unchanged: [10, 20, 30, 40]

  console.log("a =", JSON.stringify(a), "| b =", JSON.stringify(b), "| c =", JSON.stringify(c), "| d =", JSON.stringify(d), "| nums =", JSON.stringify(nums));
}
