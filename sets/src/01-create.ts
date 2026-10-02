export function createSets(): void {
  // 1. Empty Set with an explicit type
  const names = new Set<string>();

  // 2. From an array; the type is inferred as Set<number>
  const nums = new Set([1, 2, 2, 3]);                     // nums = {1, 2, 3}

  // 3. From a string: one entry per character
  const letters = new Set("hello");                       // letters = {"h", "e", "l", "o"}

  // 4. From a union type
  type Color = "red" | "green" | "blue";
  const colors = new Set<Color>(["red", "blue"]);

  console.log("names =", names, "nums =", nums);
  console.log("letters =", letters, "colors =", colors);
}
