export function asConstAlternative(): void {
  // 1. Object with the values, frozen by as const
  const Size = {
    Small: "small",
    Medium: "medium",
    Large: "large",
  } as const;

  // 2. Type with the same name: union of the values
  type Size = (typeof Size)[keyof typeof Size];   // "small" | "medium" | "large"

  // 3. Use it like an enum
  function price(size: Size): number {
    return size === Size.Large ? 9 : 5;
  }
  const p1 = price(Size.Large);                 // p1 = 9
  const p2 = price("small");                    // p2 = 5, plain string accepted

  // 4. List and check values at runtime
  const all = Object.values(Size);              // all = ["small", "medium", "large"]
  const valid = (all as string[]).includes("medium");   // valid = true

  console.log("p1 =", p1, "p2 =", p2, "all =", all, "valid =", valid);
}
