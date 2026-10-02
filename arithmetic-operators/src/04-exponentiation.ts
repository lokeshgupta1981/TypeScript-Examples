export function exponentiation(): void {
  // 1. Powers and roots
  const cube = 2 ** 3;                          // cube = 8
  const root = 9 ** 0.5;                        // root = 3
  const inverse = 2 ** -1;                      // inverse = 0.5

  // 2. Groups from right to left
  const tower = 2 ** 3 ** 2;                    // tower = 512, same as 2 ** 9

  // 3. A negative base needs parentheses
  const square = (-2) ** 2;                     // square = 4

  // 4. Exponent assignment
  let size = 3;
  size **= 2;                                   // size = 9

  console.log("cube =", cube, "root =", root, "inverse =", inverse);
  console.log("tower =", tower, "square =", square, "size =", size);
  console.log("Math.pow(2, 3) =", Math.pow(2, 3));
}
