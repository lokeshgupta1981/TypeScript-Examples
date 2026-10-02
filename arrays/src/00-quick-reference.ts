export function quickReference(): void {
  // 1. Create typed arrays
  const fruits: string[] = ["apple", "banana", "cherry"];
  const scores: Array<number> = [10, 20, 30];

  // 2. Read elements
  const first = fruits[0];                      // first = "apple"
  const last = fruits.at(-1);                   // last = "cherry"
  const count = fruits.length;                  // count = 3

  // 3. Add and remove at the end
  fruits.push("mango");                         // ["apple", "banana", "cherry", "mango"]
  const removed = fruits.pop();                 // removed = "mango"

  // 4. Copy with a change (ES2023)
  const sorted = scores.toSorted((a, b) => b - a);   // sorted = [30, 20, 10]
  const updated = scores.with(0, 15);           // updated = [15, 20, 30]

  // 5. Filter and find
  const big = scores.filter((s) => s > 15);     // big = [20, 30]
  const found = scores.find((s) => s > 15);     // found = 20

  // 6. Loop
  for (const fruit of fruits) {
    console.log(fruit);                         // apple, banana, cherry
  }

  // 7. Merge into a new array
  const all = [...fruits, "grape"];             // all = ["apple", "banana", "cherry", "grape"]

  // 8. Read-only array and tuple
  const days: readonly string[] = ["Mon", "Tue"];
  const person: [string, number] = ["Lokesh", 37];

  console.log("first =", first, "| last =", last, "| count =", count);
  console.log("removed =", removed);
  console.log("sorted =", sorted, "| updated =", updated, "| scores =", scores);
  console.log("big =", big, "| found =", found);
  console.log("all =", all);
  console.log("days =", days, "| person =", person);
}
