export function addIfMissing(): void {
  const fruits = ["apple", "banana"];

  // 1. Check first with includes()
  if (!fruits.includes("apple")) {
    fruits.push("apple");                       // skipped, already there
  }

  // 2. Set for many unique values
  const unique = new Set(fruits);
  unique.add("cherry");
  unique.add("apple");                          // ignored
  const list = [...unique];                     // list = ["apple", "banana", "cherry"]

  console.log("fruits =", fruits, "| list =", list);
}
