export function falsyValues(): void {
  const f1 = Boolean(false);                    // f1 = false
  const f2 = Boolean(0);                        // f2 = false
  const f3 = Boolean(-0);                       // f3 = false
  const f4 = Boolean(0n);                       // f4 = false, BigInt zero
  const f5 = Boolean("");                       // f5 = false, empty string
  const f6 = Boolean(null);                     // f6 = false
  const f7 = Boolean(undefined);                // f7 = false
  const f8 = Boolean(NaN);                      // f8 = false
  const f9 = Boolean(2 - 2);                    // f9 = false, result is 0

  console.log(f1, f2, f3, f4, f5, f6, f7, f8, f9);
}
