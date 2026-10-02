export function readonlyAndWeakSet(): void {
  // 1. ReadonlySet: no add(), delete() or clear() in the type
  const colors: ReadonlySet<string> = new Set(["red", "green"]);
  const hasRed = colors.has("red");                       // hasRed = true

  // 2. WeakSet: objects only, no size, no iteration
  const visited = new WeakSet<object>();
  const page = { url: "/home" };
  visited.add(page);
  const seen = visited.has(page);                         // seen = true

  console.log("hasRed =", hasRed, "seen =", seen);
}
