export function howFilterWorks(): void {
  const nums = [10, 15, 20, 25];

  // 1. Keep elements for which the callback returns true
  const big = nums.filter((n) => n > 12);       // big = [15, 20, 25]

  // 2. The callback also receives the index
  const evenPositions = nums.filter((n, i) => i % 2 === 0);   // evenPositions = [10, 20]

  // 3. No match: an empty array, never undefined
  const none = nums.filter((n) => n > 100);     // none = []

  // nums is unchanged: [10, 15, 20, 25]

  console.log("big =", JSON.stringify(big), "| evenPositions =", JSON.stringify(evenPositions), "| none =", JSON.stringify(none), "| nums =", JSON.stringify(nums));
}

export function namedCallback(): void {
  const nums = [1, 2, 3, 4];

  const isEven = (n: number): boolean => n % 2 === 0;
  const evens = nums.filter(isEven);            // evens = [2, 4]

  console.log("evens =", JSON.stringify(evens));
}
