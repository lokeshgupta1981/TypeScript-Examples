export function numbers(): void {
  const score: number = 0 / 0;

  // 1. NaN is never greater, less or equal
  const above = score > 1;                      // above = false
  const below = score <= 1;                     // below = false
  const isNan = Number.isNaN(score);            // isNan = true

  // 2. Range check: two comparisons joined with &&
  const age = 37;
  const inRange = 18 <= age && age < 60;        // inRange = true

  // 3. Default sort() compares as strings
  const asText = [10, 9, 1].sort();             // asText = [1, 10, 9]
  const asNumbers = [10, 9, 1].sort((x, y) => x - y);   // asNumbers = [1, 9, 10]

  console.log("above =", above, "below =", below, "isNan =", isNan, "inRange =", inRange);
  console.log("asText =", asText, "asNumbers =", asNumbers);
}
