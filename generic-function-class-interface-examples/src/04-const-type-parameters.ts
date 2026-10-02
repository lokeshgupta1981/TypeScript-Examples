export function constTypeParameters(): void {
  // 1. Without const: literals are widened
  function plain<T extends readonly string[]>(items: T): T {
    return items;
  }
  const a = plain(["apple", "banana"]);         // type string[]
  console.log(a);

  // 2. With const: literals are kept
  function exact<const T extends readonly string[]>(items: T): T {
    return items;
  }
  const b = exact(["apple", "banana"]);         // type readonly ["apple", "banana"]
  console.log(b);

  // 3. Use the literal union in the return type
  function pickFirst<const T extends readonly string[]>(items: T): T[number] {
    return items[0];
  }
  const fruit = pickFirst(["apple", "banana"]); // fruit = "apple" ("apple" | "banana")
  console.log(fruit);
}
