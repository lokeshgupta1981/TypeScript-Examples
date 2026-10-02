export async function mistakes(): Promise<void> {
  const nums = [1, 2, 3];

  // 1. parseInt() receives the index as the radix
  const wrong = ["1", "2", "3"].map(parseInt);              // wrong = [1, NaN, NaN]
  const right = ["1", "2", "3"].map((s) => parseInt(s, 10));   // right = [1, 2, 3]

  // 2. An async callback returns promises
  const promises = nums.map(async (n) => n * 2);            // Promise<number>[]
  const values = await Promise.all(promises);               // values = [2, 4, 6]

  console.log("wrong =", wrong);
  console.log("right =", JSON.stringify(right));
  console.log("promises =", promises);
  console.log("values =", JSON.stringify(values));
}
