export function abstractClass(): void {
  // Abstract class: some methods with code, some without
  abstract class Shape {
    abstract area(): number;

    describe(): string {
      return "area " + this.area();
    }
  }

  class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }

    area(): number {
      return this.width * this.height;
    }
  }

  const text = new Rectangle(2, 3).describe();  // text = "area 6"

  console.log("text =", text);
}
