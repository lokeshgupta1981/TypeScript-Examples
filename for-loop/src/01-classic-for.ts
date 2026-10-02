export function classicFor(): void {
  // 1. Count down
  for (let i = 3; i > 0; i--) {
    console.log(i);                             // 3, 2, 1
  }

  // 2. Every second element
  const scores = [10, 20, 30, 40, 50];
  let sum = 0;
  for (let i = 0; i < scores.length; i += 2) {
    sum += scores[i];
  }
  console.log("sum =", sum);                    // sum = 90

  // 3. Remove items while looping: go backwards
  const nums = [1, 2, 3, 4];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] % 2 === 0) nums.splice(i, 1);
  }
  console.log("nums =", nums);                  // nums = [1, 3]
}
