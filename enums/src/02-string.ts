export function stringEnums(): void {
  enum Fruit {
    Apple = "apple",
    Banana = "banana",
    Cherry = "cherry",
  }

  // 1. Read a member
  const fruit = Fruit.Apple;                    // fruit = "apple"

  // 2. Compare with ===
  const isApple = fruit === Fruit.Apple;        // isApple = true

  // 3. Enum value in a string
  const text = "I like " + Fruit.Cherry;        // text = "I like cherry"

  console.log("fruit =", fruit, "isApple =", isApple, "text =", text);
}
