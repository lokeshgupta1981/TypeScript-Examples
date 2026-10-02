export function extendOne(): void {
  // 1. Base interface
  interface Shape {
    name: string;
    area(): number;
  }

  // 2. Derived interface: inherits name and area(), adds side
  interface Square extends Shape {
    side: number;
  }

  const square: Square = {
    name: "square",
    side: 4,
    area() { return this.side * this.side; },
  };

  const area = square.area();                   // area = 16

  // 3. A Square can be used wherever a Shape is expected
  const shape: Shape = square;
  const shapeName = shape.name;                 // shapeName = "square"

  console.log("area =", area);
  console.log("shapeName =", shapeName);
}
