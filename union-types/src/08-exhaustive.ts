export function exhaustiveChecks(): void {
  type Shape =
    | { kind: "square"; size: number }
    | { kind: "rect"; width: number; height: number }
    | { kind: "circle"; radius: number };

  function area(shape: Shape): number {
    switch (shape.kind) {
      case "square":
        return shape.size * shape.size;
      case "rect":
        return shape.width * shape.height;
      case "circle":
        return Math.round(Math.PI * shape.radius * shape.radius);
      default:
        const unreachable: never = shape;       // error if a case is missing
        return unreachable;
    }
  }

  const c = area({ kind: "circle", radius: 2 });   // c = 13

  console.log("c =", c);
}
