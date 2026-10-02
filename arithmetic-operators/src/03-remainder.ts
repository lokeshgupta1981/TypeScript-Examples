export function remainder(): void {
  // 1. The sign follows the left operand
  const r1 = 10 % 3;                            // r1 = 1
  const r2 = -10 % 3;                           // r2 = -1
  const r3 = 10 % -3;                           // r3 = 1
  const r4 = 5.5 % 2;                           // r4 = 1.5

  // 2. Common uses
  const isEven = 8 % 2 === 0;                   // isEven = true
  const day = ((-1 % 7) + 7) % 7;               // day = 6

  console.log("r1 =", r1, "r2 =", r2, "r3 =", r3, "r4 =", r4);
  console.log("isEven =", isEven, "day =", day);
}
