export function reverseMappingAndIteration(): void {
  enum Size {
    Small,
    Medium,
    Large,
  }
  enum Fruit {
    Apple = "apple",
    Banana = "banana",
  }

  // 1. Reverse mapping: value to name (numeric enums only)
  const name = Size[2];                         // name = "Large"

  // 2. A numeric enum object holds both directions
  const keys = Object.keys(Size);               // keys = ["0", "1", "2", "Small", "Medium", "Large"]
  const names = Object.keys(Size).filter((k) => isNaN(Number(k)));
  // names = ["Small", "Medium", "Large"]

  // 3. A string enum holds names and values once
  const fruitNames = Object.keys(Fruit);        // fruitNames = ["Apple", "Banana"]
  const fruitValues = Object.values(Fruit);     // fruitValues = ["apple", "banana"]

  // 4. Names as a union type
  type FruitName = keyof typeof Fruit;          // "Apple" | "Banana"
  const key: FruitName = "Banana";
  const banana = Fruit[key];                    // banana = "banana"

  console.log("name =", name, "keys =", keys, "names =", names);
  console.log("fruitNames =", fruitNames, "fruitValues =", fruitValues, "banana =", banana);
}
