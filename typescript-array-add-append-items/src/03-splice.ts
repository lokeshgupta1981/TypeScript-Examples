export function spliceInsert(): void {
  const nums = [1, 2, 5];

  // 1. Insert at index 2, remove nothing
  const removed = nums.splice(2, 0, 3, 4);      // removed = [], nums = [1, 2, 3, 4, 5]
  console.log("removed =", removed, "| nums =", JSON.stringify(nums));

  // 2. Negative index counts from the end
  nums.splice(-1, 0, 9);                        // nums = [1, 2, 3, 4, 9, 5]
  console.log("nums =", JSON.stringify(nums));

  // 3. Index past the end appends
  nums.splice(100, 0, 6);                       // nums = [1, 2, 3, 4, 9, 5, 6]
  console.log("nums =", JSON.stringify(nums));
}
