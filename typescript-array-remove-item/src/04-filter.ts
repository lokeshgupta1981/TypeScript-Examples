export function removeAllMatches(): void {
  const nums = [1, 2, 2, 3, 2];

  // 1. Every 2
  const noTwos = nums.filter((n) => n !== 2);   // noTwos = [1, 3]

  // 2. Several values at once
  const unwanted = new Set([1, 3]);
  const kept = nums.filter((n) => !unwanted.has(n));   // kept = [2, 2, 2]

  // 3. null and undefined
  const raw = [1, null, 2, undefined];
  const clean = raw.filter((n) => n != null);   // clean = [1, 2], typed number[]

  console.log("noTwos =", JSON.stringify(noTwos), "| kept =", JSON.stringify(kept), "| clean =", JSON.stringify(clean), "| nums =", JSON.stringify(nums));
}
