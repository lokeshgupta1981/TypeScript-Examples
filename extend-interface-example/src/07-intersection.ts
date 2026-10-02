export function intersection(): void {
  interface Shape {
    area(): number;
  }

  type Colored = {
    color: string;
  };

  // 1. Intersection of an interface and a type alias
  type ColoredShape = Shape & Colored;

  const tile: ColoredShape = {
    color: "blue",
    area() { return 2 * 2; },
  };

  const area = tile.area();                     // area = 4

  // 2. Intersection written inline in a parameter
  function describe(shape: Shape & Colored): string {
    return shape.color + " " + shape.area();
  }

  const text = describe(tile);                  // text = "blue 4"

  console.log("area =", area);
  console.log("text =", text);
}
