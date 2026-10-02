export function clearArray(): void {
  const nums = [1, 2, 3];
  const sameArray = nums;

  // 1. Set the length to 0: every reference sees an empty array
  nums.length = 0;                              // nums = [], sameArray = []
  console.log("nums =", JSON.stringify(nums), "| sameArray =", JSON.stringify(sameArray));

  // 2. Assign a new array: only this variable changes
  let fruits = ["apple", "banana"];
  const oldFruits = fruits;
  fruits = [];                                  // fruits = [], oldFruits = ["apple", "banana"]
  console.log("fruits =", JSON.stringify(fruits), "| oldFruits =", JSON.stringify(oldFruits));
}
