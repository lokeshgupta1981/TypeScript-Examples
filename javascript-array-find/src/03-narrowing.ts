export function narrowingFind(): void {
  type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number };

  const shapes: Shape[] = [
    { kind: "square", side: 2 },
    { kind: "circle", radius: 1 },
  ];

  const circle = shapes.find((s) => s.kind === "circle");   // { kind: "circle"; radius: number } | undefined
  const radius = circle?.radius;                // radius = 1

  console.log("circle =", JSON.stringify(circle), "| radius =", radius);
}
