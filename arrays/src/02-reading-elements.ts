export function readingElements(): void {
  const fruits = ["apple", "banana", "cherry"];

  // 1. By index (zero-based)
  const first = fruits[0];                      // first = "apple"
  const outside = fruits[5];                    // outside = undefined, typed string

  // 2. From the end with at()
  const last = fruits.at(-1);                   // last = "cherry", typed string | undefined

  // 3. Length
  const count = fruits.length;                  // count = 3

  // 4. Destructuring
  const [a, b] = fruits;                        // a = "apple", b = "banana"

  console.log("first =", first, "| outside =", outside, "| last =", last);
  console.log("count =", count, "| a =", a, "| b =", b);
}
