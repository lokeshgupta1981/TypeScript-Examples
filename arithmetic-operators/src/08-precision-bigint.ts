export function precisionAndBigInt(): void {
  // 1. Binary fractions are not exact
  const sum = 0.1 + 0.2;                        // sum = 0.30000000000000004
  const rounded = Number(sum.toFixed(2));       // rounded = 0.3
  const close = Math.abs(sum - 0.3) < Number.EPSILON;   // close = true

  // 2. Work in whole cents
  const cents = 10 + 20;                        // cents = 30
  const amount = cents / 100;                   // amount = 0.3

  // 3. Integers above 2 ** 53 lose precision
  const big = 2 ** 53 + 1;                      // big = 9007199254740992

  // 4. BigInt keeps every digit
  const exact = 2n ** 53n + 1n;                 // exact = 9007199254740993n
  const divided = 7n / 2n;                      // divided = 3n
  const mixed = exact + BigInt(5);              // mixed = 9007199254740998n

  console.log("sum =", sum, "rounded =", rounded, "close =", close);
  console.log("cents =", cents, "amount =", amount, "big =", big);
  console.log("exact =", exact, "divided =", divided, "mixed =", mixed);
}
