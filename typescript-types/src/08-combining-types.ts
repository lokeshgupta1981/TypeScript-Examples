export function combiningTypes(): void {
  // 1. Union: one of several types
  let id: string | number = 101;
  id = "101";

  // 2. Literal types: exact values
  type Size = "small" | "medium" | "large";
  const size: Size = "medium";

  // 3. Intersection: all properties of both
  type Named = { name: string };
  type Aged = { age: number };
  const lokesh: Named & Aged = { name: "Lokesh", age: 37 };

  console.log("id =", id, "size =", size, lokesh);
}
