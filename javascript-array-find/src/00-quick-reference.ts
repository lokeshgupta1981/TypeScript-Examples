export function quickReference(): void {
  const scores = [90, 44, 76, 12, 0, 34];

  // 1. First element that matches
  const firstPass = scores.find((s) => s > 35);   // firstPass = 90, typed number | undefined

  // 2. Index of the first match
  const firstPassAt = scores.findIndex((s) => s > 35);   // firstPassAt = 0

  // 3. Last match and its index (ES2023)
  const lastPass = scores.findLast((s) => s > 35);   // lastPass = 76
  const lastPassAt = scores.findLastIndex((s) => s > 35);   // lastPassAt = 2

  // 4. No match
  const perfect = scores.find((s) => s === 100);   // perfect = undefined
  const perfectAt = scores.findIndex((s) => s === 100);   // perfectAt = -1

  // 5. Search by value instead of a condition
  const zeroAt = scores.indexOf(0);             // zeroAt = 4
  const hasZero = scores.includes(0);           // hasZero = true
  const anyFail = scores.some((s) => s < 35);   // anyFail = true

  console.log("firstPass =", firstPass, "| firstPassAt =", firstPassAt, "| lastPass =", lastPass, "| lastPassAt =", lastPassAt);
  console.log("perfect =", perfect, "| perfectAt =", perfectAt);
  console.log("zeroAt =", zeroAt, "| hasZero =", hasZero, "| anyFail =", anyFail);
}
