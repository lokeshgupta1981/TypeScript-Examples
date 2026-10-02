export function functionArguments(): void {
  const scores = [3, 7, 5];

  // 1. Spread an array into separate arguments
  const max = Math.max(...scores);              // max = 7

  // 2. A tuple matches fixed parameters
  const multiply = (a: number, b: number) => a * b;
  const pair: [number, number] = [4, 5];
  const product = multiply(...pair);            // product = 20

  // 3. The older way with apply()
  const oldMax = Math.max.apply(null, scores);  // oldMax = 7

  console.log("max =", max, "product =", product, "oldMax =", oldMax);
}
