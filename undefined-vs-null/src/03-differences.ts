export function differences(): void {
  // 1. Equality
  const e1 = null == undefined;                 // e1 = true
  const e2 = null === undefined;                // e2 = false
  const e3 = null == 0;                         // e3 = false

  // 2. Conversion to number
  const n1 = Number(null);                      // n1 = 0
  const n2 = Number(undefined);                 // n2 = NaN

  // 3. JSON drops undefined properties, keeps null
  const json = JSON.stringify({ a: undefined, b: null });   // json = {"b":null}

  // 4. Default parameters replace only undefined
  function greet(name: string | null = "Guest"): string {
    return "Hello, " + name;
  }
  const g1 = greet(undefined);                  // g1 = "Hello, Guest"
  const g2 = greet(null);                       // g2 = "Hello, null"

  console.log("e1 =", e1, "e2 =", e2, "e3 =", e3, "n1 =", n1, "n2 =", n2);
  console.log("json =", json, "g1 =", g1, "g2 =", g2);
}
