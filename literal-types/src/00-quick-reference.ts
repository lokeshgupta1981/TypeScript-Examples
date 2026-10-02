export function quickReference(): void {
  // 1. A union of string literals
  type Size = "small" | "medium" | "large";
  let size: Size = "small";
  size = "large";                               // OK, "tiny" is a compile error

  // 2. Number and boolean literals
  type Dice = 1 | 2 | 3 | 4 | 5 | 6;
  const roll: Dice = 4;
  const done: true = true;

  // 3. const keeps the literal, let widens it
  const fruit = "apple";                        // fruit: "apple"
  let other = "apple";                          // other: string

  // 4. Derive a union from an array
  const sizes = ["small", "medium", "large"] as const;
  type SizeFromArray = (typeof sizes)[number];  // "small" | "medium" | "large"

  // 5. Check a runtime string
  function isSize(value: string): value is Size {
    return (sizes as readonly string[]).includes(value);
  }
  const valid = isSize("medium");               // valid = true
  const invalid = isSize("tiny");               // invalid = false

  // 6. One entry for every literal
  const prices: Record<Size, number> = { small: 5, medium: 7, large: 9 };
  const price = prices[size];                   // price = 9

  const fromArray: SizeFromArray = "medium";
  console.log("size =", size, "roll =", roll, "done =", done, fruit, other, fromArray);
  console.log("valid =", valid, "invalid =", invalid, "price =", price);
}
