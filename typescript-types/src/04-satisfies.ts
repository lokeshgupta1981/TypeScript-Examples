export function satisfiesAndAsConst(): void {
  // 1. as const: literal and readonly
  const sizes = ["small", "large"] as const;    // readonly ["small", "large"]

  // 2. Annotation: any string key is allowed
  const stock: Record<string, number> = { apple: 5, banana: 3 };
  const cherries = stock.cherry;                // cherries = undefined, no error

  // 3. satisfies: value is checked, keys stay known
  const prices = { apple: 2, banana: 1 } satisfies Record<string, number>;
  const applePrice = prices.apple;              // applePrice = 2

  console.log(sizes, "cherries =", cherries, "applePrice =", applePrice);
}
