export function quickReference(): void {
  // 1. Interface: shape only, no code, removed by the compiler
  interface Shape {
    name: string;
    area(): number;
  }

  // 2. Class: shape plus code, kept in the JavaScript output
  class Square implements Shape {
    name = "square";
    side: number;
    constructor(side: number) { this.side = side; }
    area(): number { return this.side * this.side; }
  }

  // 3. Objects: new for a class, an object literal for an interface
  const square = new Square(4);
  const tile: Shape = { name: "tile", area: () => 1 };

  const a1 = square.area();                     // a1 = 16
  const a2 = tile.area();                       // a2 = 1

  // 4. Runtime checks work only with the class
  const isSquare = square instanceof Square;    // isSquare = true
  const kind = typeof Square;                   // kind = "function"

  console.log("a1 =", a1);
  console.log("a2 =", a2);
  console.log("isSquare =", isSquare);
  console.log("kind =", kind);
}
