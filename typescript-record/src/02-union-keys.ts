export function unionKeys(): void {
  type Fruit = "apple" | "banana" | "mango";

  // 1. Every key in the union is required
  const stock: Record<Fruit, number> = {
    apple: 5,
    banana: 3,
    mango: 0,
  };

  // 2. Partial: any subset of the keys
  const sold: Partial<Record<Fruit, number>> = { apple: 2 };
  const mangoSold = sold.mango ?? 0;                      // mangoSold = 0

  // 3. Values can be objects
  type Status = "active" | "blocked";
  const labels: Record<Status, { text: string; color: string }> = {
    active: { text: "Active", color: "green" },
    blocked: { text: "Blocked", color: "red" },
  };
  const color = labels.blocked.color;                     // color = "red"

  console.log("stock =", JSON.stringify(stock));
  console.log("sold =", JSON.stringify(sold), "mangoSold =", mangoSold);
  console.log("color =", color);
}
