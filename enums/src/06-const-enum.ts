export function constEnums(): void {
  const enum Dice {
    One = 1,
    Two = 2,
    Three = 3,
  }

  const roll = Dice.Three;                      // compiled to: const roll = 3
  const sum = Dice.One + Dice.Two;              // sum = 3

  console.log("roll =", roll, "sum =", sum);
}
