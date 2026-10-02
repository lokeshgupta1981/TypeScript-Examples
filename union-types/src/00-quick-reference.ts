export function quickReference(): void {
  // 1. Declare a union
  let id: string | number = 101;
  id = "101";                                   // also OK

  // 2. Narrow with typeof
  function format(value: string | number): string {
    return typeof value === "string" ? value.toUpperCase() : value.toFixed(2);
  }
  const a = format("apple");                    // a = "APPLE"
  const b = format(5);                          // b = "5.00"

  // 3. Discriminated union
  type Shape =
    | { kind: "square"; size: number }
    | { kind: "rect"; width: number; height: number };

  // 4. Narrow on the kind property, exhaustive with never
  function area(shape: Shape): number {
    switch (shape.kind) {
      case "square":
        return shape.size * shape.size;
      case "rect":
        return shape.width * shape.height;
      default:
        const unreachable: never = shape;
        return unreachable;
    }
  }
  const s = area({ kind: "square", size: 3 });  // s = 9
  const r = area({ kind: "rect", width: 2, height: 4 });   // r = 8

  console.log("id =", id, "a =", a, "b =", b, "s =", s, "r =", r);
}
