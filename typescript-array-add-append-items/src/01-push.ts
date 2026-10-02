export function pushItems(): void {
  const nums: number[] = [1, 2, 3];

  // 1. One item; push() returns the new length
  const newLength = nums.push(4);               // newLength = 4, nums = [1, 2, 3, 4]
  console.log("newLength =", newLength, "| nums =", JSON.stringify(nums));

  // 2. Several items in one call
  nums.push(5, 6);                              // nums = [1, 2, 3, 4, 5, 6]
  console.log("nums =", JSON.stringify(nums));

  // 3. All items of another array
  const more = [7, 8];
  nums.push(...more);                           // nums = [1, 2, 3, 4, 5, 6, 7, 8]

  console.log("nums =", JSON.stringify(nums));
}

export function pushLargeArray(): void {
  const big = Array.from({ length: 150_000 }, (_, i) => i);
  const target: number[] = [];

  try {
    target.push(...big);                          // RangeError: Maximum call stack size exceeded
  } catch (e) {
    console.log(String(e));
  }
  for (const n of big) target.push(n);          // works for any size

  console.log("target.length =", target.length);
}
