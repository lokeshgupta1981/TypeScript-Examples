export function sliceTypes(): void {
  // 1. readonly in, mutable copy out
  const days: readonly string[] = ["Mon", "Tue"];
  const copy = days.slice();                    // string[]
  copy.push("Wed");                             // copy = ["Mon", "Tue", "Wed"]

  // 2. Tuples lose their positions
  const person: [string, number, boolean] = ["Lokesh", 37, true];
  const part = person.slice(0, 2);              // (string | number | boolean)[]

  // 3. Strings have slice() too
  const word = "hello".slice(1, -1);            // word = "ell"

  console.log("copy =", JSON.stringify(copy), "| days =", JSON.stringify(days));
  console.log("part =", JSON.stringify(part), "| word =", word);
}
