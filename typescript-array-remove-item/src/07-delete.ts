export function deleteOperator(): void {
  const nums = [1, 2, 3];

  delete nums[1];                               // nums = [1, <empty>, 3]
  const size = nums.length;                     // size = 3
  const middle = nums[1];                       // middle = undefined, typed number

  console.log(nums, "| size =", size, "| middle =", middle);
  nums.forEach((n, i) => console.log(i, n));    // 0 1, 2 3
}
