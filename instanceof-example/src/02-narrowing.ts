export function narrowing(): void {
  class Square {
    side: number;
    constructor(side: number) { this.side = side; }
  }

  class Circle {
    radius: number;
    constructor(radius: number) { this.radius = radius; }
  }

  function describe(shape: Square | Circle): string {
    if (shape instanceof Square) {
      return "square with side " + shape.side;  // shape is Square here
    }
    return "circle with radius " + shape.radius;   // shape is Circle here
  }

  const d1 = describe(new Square(4));           // d1 = "square with side 4"
  const d2 = describe(new Circle(2));           // d2 = "circle with radius 2"

  console.log("d1 =", d1);
  console.log("d2 =", d2);
}
