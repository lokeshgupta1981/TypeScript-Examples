export function quickReference(): void {
  const nums = [1, 2, 3, 4, 5, 3];

  // 1. Remove the last element
  const last = nums.pop();                      // last = 3, nums = [1, 2, 3, 4, 5]
  console.log("last =", last, "| nums =", JSON.stringify(nums));

  // 2. Remove the first element
  const first = nums.shift();                   // first = 1, nums = [2, 3, 4, 5]
  console.log("first =", first, "| nums =", JSON.stringify(nums));

  // 3. Remove by index
  const removed = nums.splice(1, 1);            // removed = [3], nums = [2, 4, 5]
  console.log("removed =", JSON.stringify(removed), "| nums =", JSON.stringify(nums));

  // 4. Remove by value
  const index = nums.indexOf(4);
  if (index !== -1) nums.splice(index, 1);      // nums = [2, 5]
  console.log("nums =", JSON.stringify(nums));

  // 5. New array without some elements
  const fruits = ["apple", "banana", "apple", "cherry"];
  const noApples = fruits.filter((f) => f !== "apple");   // noApples = ["banana", "cherry"]
  const noSecond = fruits.toSpliced(1, 1);      // noSecond = ["apple", "apple", "cherry"]
  console.log("noApples =", JSON.stringify(noApples), "| noSecond =", JSON.stringify(noSecond));

  // 6. Empty the array
  nums.length = 0;                              // nums = []
  console.log("nums =", JSON.stringify(nums));
}
