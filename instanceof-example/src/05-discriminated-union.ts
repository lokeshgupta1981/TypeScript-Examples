export function discriminatedUnion(): void {
  interface Square {
    kind: "square";
    side: number;
  }

  interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
  }

  type Shape = Square | Rectangle;

  function area(shape: Shape): number {
    switch (shape.kind) {
      case "square":
        return shape.side * shape.side;         // shape is Square
      case "rectangle":
        return shape.width * shape.height;      // shape is Rectangle
    }
  }

  const a1 = area({ kind: "square", side: 4 });                   // a1 = 16
  const a2 = area({ kind: "rectangle", width: 2, height: 3 });    // a2 = 6

  console.log("a1 =", a1);
  console.log("a2 =", a2);
}
