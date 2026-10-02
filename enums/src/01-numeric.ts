export function numericEnums(): void {
  // 1. Default values start at 0
  enum Size {
    Small,                                      // 0
    Medium,                                     // 1
    Large,                                      // 2
  }

  // 2. Custom start, then +1
  enum Dice {
    One = 1,                                    // 1
    Two,                                        // 2
    Three,                                      // 3
  }

  // 3. Any explicit numbers
  enum Level {
    Low = 10,
    High = 20,
  }

  // 4. Enum as a type
  let size: Size = Size.Medium;
  size = Size.Large;
  const three = Dice.Three;                     // three = 3
  const high = Level.High;                      // high = 20

  console.log("size =", size, "three =", three, "high =", high);
}
