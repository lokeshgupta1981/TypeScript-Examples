export function narrowing(): void {
  // 1. Inferred type predicate (TypeScript 5.5+)
  const raw = [1, null, 2, undefined, 0];
  const nums = raw.filter((n) => n != null);    // nums = [1, 2, 0], typed number[]

  // 2. filter(Boolean) drops 0 and keeps the wider type
  const truthy = raw.filter(Boolean);           // truthy = [1, 2], typed (number | null | undefined)[]

  // 3. Discriminated union
  type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number };
  const shapes: Shape[] = [{ kind: "circle", radius: 1 }, { kind: "square", side: 2 }];
  const circles = shapes.filter((s) => s.kind === "circle");   // { kind: "circle"; radius: number }[]
  const radius = circles[0].radius;             // radius = 1

  console.log("nums =", JSON.stringify(nums), "| truthy =", JSON.stringify(truthy), "| radius =", radius);
}

export function explicitTypeGuard(): void {
  const isDefined = <T>(value: T | null | undefined): value is T => value != null;

  const names = ["Lokesh", undefined, "Raj", null];
  const valid = names.filter(isDefined);        // valid = ["Lokesh", "Raj"], typed string[]

  console.log("valid =", JSON.stringify(valid));
}
