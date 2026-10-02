export function deriveUnions(): void {
  // 1. From an array
  const sizes = ["small", "medium", "large"] as const;
  type Size = (typeof sizes)[number];           // "small" | "medium" | "large"

  // 2. From object keys
  const stock = { apple: 5, banana: 3 } as const;
  type Fruit = keyof typeof stock;              // "apple" | "banana"

  // 3. From object values
  type Count = (typeof stock)[Fruit];           // 5 | 3

  // 4. The array stays usable at runtime
  const count = sizes.length;                   // count = 3
  const first: Size = sizes[0];                 // first = "small"
  const fruit: Fruit = "banana";
  const bananas: Count = stock[fruit];          // bananas = 3

  console.log("count =", count, "first =", first, "bananas =", bananas);
}
