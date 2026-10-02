export function widening(): void {
  type Size = "small" | "medium" | "large";
  function pick(size: Size): string {
    return "Picked " + size;
  }

  // 1. Variables
  const a = "small";                            // a: "small"
  let b = "small";                              // b: string

  // 2. Object properties widen too
  const loose = { size: "small" };              // size: string

  // 3. Three ways to keep the literal
  const typed: { size: Size } = { size: "small" };
  const checked = { size: "small" } satisfies { size: Size };
  const frozen = { size: "small" } as const;    // readonly size: "small"

  const r1 = pick(a);                           // r1 = "Picked small"
  const r2 = pick(frozen.size);                 // r2 = "Picked small"

  console.log("r1 =", r1, "r2 =", r2, b, loose, typed, checked);
}
