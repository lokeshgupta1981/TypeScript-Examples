export function removeInLoopBug(): void {
  const nums = [1, 2, 2, 3];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2) nums.splice(i, 1);
  }
  // nums = [1, 2, 3]: the second 2 was skipped
  console.log("nums =", JSON.stringify(nums));
}

export function removeInLoopFixed(): void {
  const nums = [1, 2, 2, 3];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 2) nums.splice(i, 1);
  }
  // nums = [1, 3]
  console.log("nums =", JSON.stringify(nums));
}
