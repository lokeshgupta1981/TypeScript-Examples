export function quickReference(): void {
  const letters = ["a", "b", "c", "d", "e", "f", "g"];

  // 1. From an index to the end
  const fromThree = letters.slice(3);           // fromThree = ["d", "e", "f", "g"]

  // 2. From start (included) to end (excluded)
  const middle = letters.slice(2, 5);           // middle = ["c", "d", "e"]

  // 3. Negative indexes count from the end
  const lastTwo = letters.slice(-2);            // lastTwo = ["f", "g"]
  const trimmed = letters.slice(1, -1);         // trimmed = ["b", "c", "d", "e", "f"]

  // 4. First n elements
  const firstThree = letters.slice(0, 3);       // firstThree = ["a", "b", "c"]

  // 5. Copy of the whole array
  const copy = letters.slice();                 // copy = all 7 letters, a new array

  // letters is unchanged

  console.log("fromThree =", JSON.stringify(fromThree), "| middle =", JSON.stringify(middle));
  console.log("lastTwo =", JSON.stringify(lastTwo), "| trimmed =", JSON.stringify(trimmed));
  console.log("firstThree =", JSON.stringify(firstThree), "| copy =", JSON.stringify(copy), "| copy === letters:", copy === letters);
  console.log("letters =", JSON.stringify(letters));
}
