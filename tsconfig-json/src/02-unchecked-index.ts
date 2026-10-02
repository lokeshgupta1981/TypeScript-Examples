export function uncheckedIndex(): void {
  const fruits = ["apple", "banana"];
  const prices: Record<string, number> = { apple: 5, banana: 3 };

  // 1. Array element: type string | undefined
  const first = fruits[0];
  const upper = first?.toUpperCase();           // upper = "APPLE"

  // 2. Missing key: type number | undefined
  const cherry = prices["cherry"] ?? 0;         // cherry = 0

  console.log("upper =", upper, "| cherry =", cherry);
}
