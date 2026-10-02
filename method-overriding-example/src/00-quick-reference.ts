export function quickReference(): void {
  class Shape {
    area(): number { return 0; }
    describe(): string { return "area " + this.area(); }
  }

  class Square extends Shape {
    side: number;
    constructor(side: number) {
      super();
      this.side = side;
    }

    // 1. Override a method with the override keyword
    override area(): number { return this.side * this.side; }

    // 2. Call the parent version with super
    override describe(): string { return "square, " + super.describe(); }
  }

  // 3. The subclass method runs, even through a Shape variable
  const shape: Shape = new Square(4);
  const area = shape.area();                    // area = 16
  const text = shape.describe();                // text = "square, area 16"

  console.log("area =", area);
  console.log("text =", text);
}
