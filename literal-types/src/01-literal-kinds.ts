export function literalKinds(): void {
  // 1. String literals
  type Size = "small" | "medium" | "large";
  const size: Size = "medium";

  // 2. Number literals
  type Dice = 1 | 2 | 3 | 4 | 5 | 6;
  const roll: Dice = 6;

  // 3. Boolean literal
  type Yes = true;
  const agreed: Yes = true;

  // 4. Literal type as a parameter
  function order(fruit: "apple" | "banana", count: number): string {
    return count + " x " + fruit;
  }
  const text = order("apple", 5);               // text = "5 x apple"

  console.log("size =", size, "roll =", roll, "agreed =", agreed, "text =", text);
}
