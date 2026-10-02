export function implementsInClass(): void {
  interface Shape {
    name: string;
    area(): number;
  }

  interface Printable {
    print(): string;
  }

  // 1. One class, two interfaces
  class Rectangle implements Shape, Printable {
    name = "rectangle";
    width: number;
    height: number;

    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }

    area(): number {
      return this.width * this.height;
    }

    print(): string {
      return this.name + " " + this.area();
    }
  }

  // 2. Use the class through the interface type
  const shape: Shape = new Rectangle(3, 4);
  const area = shape.area();                    // area = 12

  const printed = new Rectangle(2, 5).print();  // printed = "rectangle 10"

  console.log("area =", area);
  console.log("printed =", printed);
}
