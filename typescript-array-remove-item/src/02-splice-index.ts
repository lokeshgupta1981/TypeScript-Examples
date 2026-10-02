export function spliceByIndex(): void {
  const nums = [10, 20, 30, 40, 50];

  // 1. One element at index 1
  const one = nums.splice(1, 1);                // one = [20], nums = [10, 30, 40, 50]
  console.log("one =", JSON.stringify(one), "| nums =", JSON.stringify(nums));

  // 2. Two elements from index 1
  const two = nums.splice(1, 2);                // two = [30, 40], nums = [10, 50]
  console.log("two =", JSON.stringify(two), "| nums =", JSON.stringify(nums));

  // 3. Everything from an index to the end
  const letters = ["a", "b", "c", "d"];
  const tail = letters.splice(2);               // tail = ["c", "d"], letters = ["a", "b"]
  console.log("tail =", JSON.stringify(tail), "| letters =", JSON.stringify(letters));
}
