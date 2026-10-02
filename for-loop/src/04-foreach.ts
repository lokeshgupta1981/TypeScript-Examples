export function forEachLoop(): void {
  const fruits = ["apple", "banana", "cherry"];

  // 1. return skips only the current element
  const kept: string[] = [];
  fruits.forEach((fruit) => {
    if (fruit === "banana") return;
    kept.push(fruit);
  });
  console.log("kept =", kept);                  // kept = ["apple", "cherry"]

  // 2. some() stops at the first true result
  const visited: string[] = [];
  fruits.some((fruit) => {
    visited.push(fruit);
    return fruit === "banana";
  });
  console.log("visited =", visited);            // visited = ["apple", "banana"]
}
