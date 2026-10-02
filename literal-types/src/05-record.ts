export function recordOfLiterals(): void {
  type Size = "small" | "medium" | "large";

  // 1. Every literal must have an entry
  const prices: Record<Size, number> = {
    small: 5,
    medium: 7,
    large: 9,
  };

  // 2. Lookup by a Size value
  const size: Size = "medium";
  const price = prices[size];                   // price = 7

  console.log("price =", price);
}
