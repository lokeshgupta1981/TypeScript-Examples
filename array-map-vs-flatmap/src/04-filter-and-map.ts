export function filterAndMap(): void {
  const inputs = ["1", "x", "3"];

  // 1. filter() then map(): two passes, Number() called twice
  const n1 = inputs.filter((s) => !Number.isNaN(Number(s))).map((s) => Number(s));   // n1 = [1, 3]

  // 2. flatMap(): one pass, [] drops the element
  const n2 = inputs.flatMap((s) => {
    const n = Number(s);
    return Number.isNaN(n) ? [] : [n];
  });                                                       // n2 = [1, 3]

  console.log("n1 =", JSON.stringify(n1));
  console.log("n2 =", JSON.stringify(n2));
}

export function removeUndefined(): void {
  const scores = [10, undefined, 30];                       // (number | undefined)[]

  // 1. filter() with a check narrows the type
  const s1 = scores.filter((s) => s !== undefined);         // s1: number[] = [10, 30]

  // 2. filter(Boolean) does not narrow
  const s2 = scores.filter(Boolean);                        // s2: (number | undefined)[] = [10, 30]

  // 3. flatMap() narrows too
  const s3 = scores.flatMap((s) => s ?? []);                // s3: number[] = [10, 30]

  console.log("s1 =", JSON.stringify(s1));
  console.log("s2 =", JSON.stringify(s2));
  console.log("s3 =", JSON.stringify(s3));
}
