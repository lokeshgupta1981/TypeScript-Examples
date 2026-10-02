export function restParameters(): void {
  // 1. All arguments go into one array
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
  }
  const none = sum();                           // none = 0
  const two = sum(5, 3);                        // two = 8
  const three = sum(37, 35, 40);                // three = 112
  console.log(none, two, three);

  // 2. Fixed parameters come first
  function introduce(greeting: string, ...names: string[]): string {
    return greeting + " " + names.join(", ");
  }
  const text = introduce("Hi", "Lokesh", "Raj"); // text = "Hi Lokesh, Raj"
  const alone = introduce("Hi");                // alone = "Hi "
  console.log(text, "|" + alone + "|");

  // 3. Union element type
  function joinAll(...parts: (string | number)[]): string {
    return parts.join("-");
  }
  const key = joinAll("apple", 5, "banana", 3); // key = "apple-5-banana-3"
  console.log(key);
}

export function readonlyRest(): void {
  function countFruits(...fruits: readonly string[]): number {
    return fruits.length;
  }
  const n = countFruits("apple", "banana");     // n = 2
  console.log(n);
}
