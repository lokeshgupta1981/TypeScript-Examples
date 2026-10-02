export function nanAndZero(): void {
  const nan = Number("abc");

  // 1. NaN
  const r1 = nan === nan;                       // r1 = false
  const r2 = Number.isNaN(nan);                 // r2 = true
  const r3 = Object.is(nan, NaN);               // r3 = true

  // 2. Positive and negative zero
  const r4 = 0 === -0;                          // r4 = true
  const r5 = Object.is(0, -0);                  // r5 = false

  console.log("r1 =", r1, "r2 =", r2, "r3 =", r3, "r4 =", r4, "r5 =", r5);
}
