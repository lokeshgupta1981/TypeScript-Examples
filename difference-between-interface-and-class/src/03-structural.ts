export function structural(): void {
  class Square {
    side: number;
    constructor(side: number) { this.side = side; }
    area(): number { return this.side * this.side; }
  }

  // 1. A plain object matches the public shape of the class
  const fake: Square = { side: 2, area: () => 4 };
  const area = fake.area();                     // area = 4

  // 2. But it is not an instance of the class
  const isSquare = fake instanceof Square;      // isSquare = false

  console.log("area =", area);
  console.log("isSquare =", isSquare);
}
