export function quickReference(): void {
  // 1. Numeric enum: members get 0, 1, 2
  enum Size {
    Small,
    Medium,
    Large,
  }
  const m = Size.Medium;                        // m = 1
  const label = Size[1];                        // label = "Medium", reverse mapping

  // 2. String enum
  enum Fruit {
    Apple = "apple",
    Banana = "banana",
  }
  const f = Fruit.Banana;                       // f = "banana"

  // 3. const enum: value inlined at compile time
  const enum Dice {
    One = 1,
    Two = 2,
  }
  const d = Dice.Two;                           // d = 2

  // 4. Enum as a parameter type
  function price(size: Size): number {
    return size === Size.Large ? 9 : 5;
  }
  const p = price(Size.Large);                  // p = 9

  // 5. Erasable alternative: as const object + union type
  const Color = { Red: "red", Green: "green" } as const;
  type Color = (typeof Color)[keyof typeof Color];   // "red" | "green"
  const c: Color = Color.Green;                 // c = "green"

  console.log("m =", m, "label =", label, "f =", f, "d =", d, "p =", p, "c =", c);
}
