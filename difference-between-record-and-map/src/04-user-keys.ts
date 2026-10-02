export function userKeys(): void {
  const words = ["apple", "constructor", "apple"];

  // 1. Record: "constructor" is found on Object.prototype
  const counts: Record<string, number> = {};
  for (const w of words) {
    counts[w] = (counts[w] ?? 0) + 1;
  }
  // counts = { apple: 2, constructor: "function Object() { [native code] }1" }

  // 2. Map: only stored keys are found
  const countMap = new Map<string, number>();
  for (const w of words) {
    countMap.set(w, (countMap.get(w) ?? 0) + 1);
  }
  // countMap = Map { "apple" => 2, "constructor" => 1 }

  // 3. Record without a prototype
  const safe: Record<string, number> = Object.create(null);
  for (const w of words) {
    safe[w] = (safe[w] ?? 0) + 1;
  }
  // safe = { apple: 2, constructor: 1 }

  console.log("counts =", counts);
  console.log("countMap =", countMap);
  console.log("safe =", safe);
}
