export function readonlyArrays(): void {
  // 1. Two ways to write a read-only array type
  const days: readonly string[] = ["Mon", "Tue"];
  const months: ReadonlyArray<string> = ["Jan", "Feb"];

  // 2. as const: read-only tuple of literal types
  const sizes = ["S", "M", "L"] as const;       // readonly ["S", "M", "L"]

  // 3. Copying methods still work
  const sortedDays = days.toSorted();           // sortedDays = ["Mon", "Tue"]
  const withWed = [...days, "Wed"];             // withWed = ["Mon", "Tue", "Wed"]

  console.log("days =", days, "| months =", months, "| sizes =", sizes);
  console.log("sortedDays =", sortedDays, "| withWed =", withWed);
}
