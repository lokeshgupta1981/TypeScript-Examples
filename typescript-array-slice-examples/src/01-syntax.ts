export function startAndEnd(): void {
  const nums = [10, 20, 30, 40, 50];

  const part = nums.slice(1, 4);                // part = [20, 30, 40]
  const count = part.length;                    // count = 3, that is 4 - 1
  const all = nums.slice();                     // all = [10, 20, 30, 40, 50]
  const same = all === nums;                    // same = false, a new array

  console.log("part =", JSON.stringify(part), "| count =", count, "| all =", JSON.stringify(all), "| same =", same);
}
