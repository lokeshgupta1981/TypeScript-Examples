export function division(): void {
  // 1. Division keeps the fraction
  const half = 7 / 2;                           // half = 3.5

  // 2. Integer division
  const whole = Math.trunc(7 / 2);              // whole = 3
  const truncated = Math.trunc(-7 / 2);         // truncated = -3
  const floored = Math.floor(-7 / 2);           // floored = -4

  // 3. Division by zero
  const inf = 5 / 0;                            // inf = Infinity
  const nan = 0 / 0;                            // nan = NaN
  const isNan = Number.isNaN(nan);              // isNan = true

  console.log("half =", half, "whole =", whole, "truncated =", truncated, "floored =", floored);
  console.log("inf =", inf, "nan =", nan, "isNan =", isNan, "nan === nan:", nan === nan);
}
