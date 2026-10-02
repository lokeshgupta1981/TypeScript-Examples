export function letScope(): void {
  // 1. Block scope: the inner score is a separate variable
  let score = 10;
  {
    let score = 20;
    console.log("inner score =", score);        // 20
  }
  const outer = score;                          // outer = 10

  // 2. A new binding of j in every iteration
  const letFns: (() => number)[] = [];
  for (let j = 0; j < 3; j++) {
    letFns.push(() => j);
  }
  const fromLet = letFns.map((f) => f());       // fromLet = [0, 1, 2]

  console.log("outer =", outer, "| fromLet =", fromLet);
}
