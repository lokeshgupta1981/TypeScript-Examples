export function quickReference(): void {
  let a = 10;
  let b = 3;

  // 1. Basic arithmetic
  const sum = a + b;                            // sum = 13
  const diff = a - b;                           // diff = 7
  const product = a * b;                        // product = 30
  const quotient = a / b;                       // quotient = 3.3333333333333335
  const remainder = a % b;                      // remainder = 1
  const power = a ** b;                         // power = 1000

  // 2. Unary operators
  const negative = -a;                          // negative = -10
  const parsed = +"42";                         // parsed = 42

  // 3. Increment and decrement
  a++;                                          // a = 11
  b--;                                          // b = 2

  // 4. Compound assignment
  a += 5;                                       // a = 16
  a **= 2;                                      // a = 256

  console.log("sum =", sum, "diff =", diff, "product =", product);
  console.log("quotient =", quotient, "remainder =", remainder, "power =", power);
  console.log("negative =", negative, "parsed =", parsed);
  console.log("b =", b, "a =", a);
}
