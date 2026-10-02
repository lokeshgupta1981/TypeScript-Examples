export function stringToEnum(): void {
  enum Fruit {
    Apple = "apple",
    Banana = "banana",
  }

  // 1. By value: "banana" -> Fruit.Banana
  function toFruit(value: string): Fruit | undefined {
    return Object.values(Fruit).find((f) => f === value);
  }
  const f1 = toFruit("banana");                 // f1 = Fruit.Banana ("banana")
  const f2 = toFruit("mango");                  // f2 = undefined

  // 2. By name: "Apple" -> Fruit.Apple
  function fromName(name: string): Fruit | undefined {
    return name in Fruit ? Fruit[name as keyof typeof Fruit] : undefined;
  }
  const f3 = fromName("Apple");                 // f3 = Fruit.Apple ("apple")

  console.log("f1 =", f1, "f2 =", f2, "f3 =", f3);
}
