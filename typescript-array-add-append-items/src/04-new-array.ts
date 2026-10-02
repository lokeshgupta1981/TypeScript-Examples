export function addToNewArray(): void {
  const nums = [1, 2, 3];

  // 1. Spread: any position
  const atEnd = [...nums, 4];                   // atEnd = [1, 2, 3, 4]
  const atStart = [0, ...nums];                 // atStart = [0, 1, 2, 3]
  const both = [...nums, ...[4, 5]];            // both = [1, 2, 3, 4, 5]

  // 2. concat(): values and arrays
  const joined = nums.concat(4, [5, 6]);        // joined = [1, 2, 3, 4, 5, 6]

  // 3. toSpliced(): insert at an index (ES2023)
  const inserted = nums.toSpliced(1, 0, 9);     // inserted = [1, 9, 2, 3]

  // nums is unchanged: [1, 2, 3]

  console.log("atEnd =", atEnd, "| atStart =", atStart, "| both =", both);
  console.log("joined =", joined, "| inserted =", inserted, "| nums =", nums);
}

export function addToReadonlyArray(): void {
  const days: readonly string[] = ["Mon", "Tue"];

  const week = [...days, "Wed"];                // week = ["Mon", "Tue", "Wed"]

  console.log("week =", week, "| days =", days);
}
