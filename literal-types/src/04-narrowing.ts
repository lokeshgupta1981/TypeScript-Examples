export function narrowingLiterals(): void {
  type Size = "small" | "medium" | "large";
  const sizes: readonly Size[] = ["small", "medium", "large"];

  // 1. Equality check narrows the union
  function label(size: Size): string {
    if (size === "small") {
      return "S";                               // size: "small"
    }
    return size === "medium" ? "M" : "L";       // size: "medium" | "large"
  }
  const l = label("medium");                    // l = "M"

  // 2. Type guard for a plain string
  function isSize(value: string): value is Size {
    return (sizes as readonly string[]).includes(value);
  }
  const input: string = "large";
  if (isSize(input)) {
    const s = label(input);                     // s = "L", input: Size
    console.log("s =", s);
  }

  // 3. Convert with a default
  function toSize(value: string): Size {
    return sizes.find((s) => s === value) ?? "medium";
  }
  const s1 = toSize("small");                   // s1 = "small"
  const s2 = toSize("tiny");                    // s2 = "medium"

  console.log("l =", l, "s1 =", s1, "s2 =", s2);
}
