export function unionVsIntersection(): void {
  type Named = { name: string };
  type Aged = { age: number };

  // 1. Union: Named or Aged (or both)
  const either: Named | Aged = { age: 40 };

  // 2. Intersection: Named and Aged
  const both: Named & Aged = { name: "John", age: 40 };

  console.log(either, both);
}
