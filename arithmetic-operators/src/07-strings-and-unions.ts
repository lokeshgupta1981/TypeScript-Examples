export function stringsAndUnions(): void {
  const qty = "5";

  // 1. + joins strings
  const joined = qty + 2;                       // joined = "52"

  // 2. Convert first, then calculate
  const n = Number(qty);                        // n = 5
  const total = n + 2;                          // total = 7
  const unary = +qty;                           // unary = 5

  // 3. Bad input
  const bad = Number("abc");                    // bad = NaN
  const empty = Number("");                     // empty = 0

  console.log("joined =", JSON.stringify(joined), "n =", n, "total =", total, "unary =", unary);
  console.log("bad =", bad, "empty =", empty);

  const inputs: (string | number)[] = ["3", 4];
  const first = inputs[0];

  // 4. Narrow a union with typeof
  const value = typeof first === "string" ? Number(first) : first;
  const doubled = value * 2;                    // doubled = 6
  console.log("doubled =", doubled);
}
