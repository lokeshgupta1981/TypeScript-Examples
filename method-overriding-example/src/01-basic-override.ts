export function basicOverride(): void {
  class Shape {
    name = "shape";
    area(): number { return 0; }
    describe(): string { return this.name + " with area " + this.area(); }
  }

  class Square extends Shape {
    side: number;
    constructor(side: number) {
      super();
      this.side = side;
      this.name = "square";
    }
    override area(): number { return this.side * this.side; }
  }

  class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
      this.name = "rectangle";
    }
    override area(): number { return this.width * this.height; }
  }

  // Each object runs its own area(), also inside describe()
  const shapes: Shape[] = [new Shape(), new Square(3), new Rectangle(2, 5)];
  const texts = shapes.map((s) => s.describe());
  // texts = ["shape with area 0", "square with area 9", "rectangle with area 10"]

  console.log("texts =", texts);
}
