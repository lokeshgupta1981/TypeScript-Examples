export function narrowProperty(): void {
  interface Shape {
    kind: string;
    area(): number;
  }

  // kind is redeclared with a narrower type
  interface Square extends Shape {
    kind: "square";
    side: number;
  }

  const square: Square = {
    kind: "square",
    side: 3,
    area() { return this.side * this.side; },
  };

  const kind = square.kind;                     // kind = "square", type "square"
  const area = square.area();                   // area = 9

  console.log("kind =", kind);
  console.log("area =", area);
}
