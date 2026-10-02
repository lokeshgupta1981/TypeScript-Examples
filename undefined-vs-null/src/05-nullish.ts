export function nullishCoalescing(): void {
  const count = 0;
  const label = "";
  const missing: number | undefined = undefined;

  // 1. ?? keeps 0 and ""
  const c1 = count ?? 10;                       // c1 = 0
  const l1 = label ?? "none";                   // l1 = ""
  const m1 = missing ?? 10;                     // m1 = 10

  // 2. || replaces every falsy value
  const c2 = count || 10;                       // c2 = 10
  const l2 = label || "none";                   // l2 = "none"

  // 3. ??= assigns only when null or undefined
  let stock: number | null = null;
  stock ??= 5;                                  // stock = 5
  stock ??= 9;                                  // stock = 5, unchanged

  console.log("c1 =", c1, "l1 =", JSON.stringify(l1), "m1 =", m1, "c2 =", c2, "l2 =", l2, "stock =", stock);
}
