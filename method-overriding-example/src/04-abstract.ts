export function abstractMethods(): void {
  abstract class Shape {
    abstract area(): number;                    // no body, subclasses must provide it
    describe(): string { return "area " + this.area(); }
  }

  class Square extends Shape {
    side: number;
    constructor(side: number) {
      super();
      this.side = side;
    }
    override area(): number { return this.side * this.side; }
  }

  const text = new Square(5).describe();        // text = "area 25"

  console.log("text =", text);
}
