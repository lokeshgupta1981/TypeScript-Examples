export function negativeIndexes(): void {
  const letters = ["a", "b", "c", "d", "e", "f", "g"];

  const lastThree = letters.slice(-3);          // lastThree = ["e", "f", "g"]
  const range = letters.slice(-3, -1);          // range = ["e", "f"]
  const mixed = letters.slice(2, -2);           // mixed = ["c", "d", "e"]
  const empty = letters.slice(-1, -3);          // empty = [], start is after end

  console.log("lastThree =", JSON.stringify(lastThree), "| range =", JSON.stringify(range));
  console.log("mixed =", JSON.stringify(mixed), "| empty =", JSON.stringify(empty));
}
