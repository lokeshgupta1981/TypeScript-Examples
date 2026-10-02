export function quickReference(): void {
  const nums = [1, 2, 3];
  const sentences = ["hello world", "good morning"];

  // 1. map(): one result per element
  const doubled = nums.map((n) => n * 2);                   // doubled = [2, 4, 6]

  // 2. map() keeps arrays returned by the callback
  const nested = sentences.map((s) => s.split(" "));        // nested = [["hello", "world"], ["good", "morning"]]

  // 3. flatMap(): map, then flatten one level
  const words = sentences.flatMap((s) => s.split(" "));     // words = ["hello", "world", "good", "morning"]

  // 4. Same result with map() and flat()
  const words2 = sentences.map((s) => s.split(" ")).flat(); // words2 = ["hello", "world", "good", "morning"]

  // 5. Add elements: two results per element
  const pairs = nums.flatMap((n) => [n, n * 10]);           // pairs = [1, 10, 2, 20, 3, 30]

  // 6. Remove elements: [] drops the element
  const evens = nums.flatMap((n) => (n % 2 === 0 ? [n] : []));   // evens = [2]

  // 7. Only one level is flattened
  const deep = nums.flatMap((n) => [[n]]);                  // deep = [[1], [2], [3]]

  console.log("doubled =", JSON.stringify(doubled));
  console.log("nested =", JSON.stringify(nested));
  console.log("words =", JSON.stringify(words));
  console.log("words2 =", JSON.stringify(words2));
  console.log("pairs =", JSON.stringify(pairs));
  console.log("evens =", JSON.stringify(evens));
  console.log("deep =", JSON.stringify(deep));
}
