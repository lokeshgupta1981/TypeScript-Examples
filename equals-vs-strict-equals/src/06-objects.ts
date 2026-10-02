export function objects(): void {
  const a = { name: "Lokesh" };
  const b = a;
  const c = { name: "Lokesh" };

  const r1 = a == b;                            // r1 = true, same object
  const r2 = a == c;                            // r2 = false
  const r3 = a === c;                           // r3 = false
  const r4 = a.name === c.name;                 // r4 = true

  console.log("r1 =", r1, "r2 =", r2, "r3 =", r3, "r4 =", r4);
}
