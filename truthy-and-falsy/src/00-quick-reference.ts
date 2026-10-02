export function quickReference(): void {
  // 1. The eight falsy values
  const falsy = [false, 0, -0, 0n, "", null, undefined, NaN];
  const allFalsy = falsy.every((v) => !v);      // allFalsy = true

  // 2. Truthy values that look empty or false
  const t1 = Boolean("0");                      // t1 = true
  const t2 = Boolean("false");                  // t2 = true
  const t3 = Boolean([]);                       // t3 = true
  const t4 = Boolean({});                       // t4 = true

  // 3. Convert to a boolean
  const fruit = "apple";
  const b1 = !!fruit;                           // b1 = true
  const b2 = Boolean(0);                        // b2 = false

  // 4. A truthiness check narrows the type
  function shout(name?: string): string {
    return name ? name.toUpperCase() : "NO NAME";   // name: string in the true branch
  }
  const s = shout("raj");                       // s = "RAJ"

  // 5. 0 is falsy: || replaces it, ?? keeps it
  const count = 0;
  const c1 = count || 10;                       // c1 = 10
  const c2 = count ?? 10;                       // c2 = 0

  console.log("allFalsy =", allFalsy, "t1..t4 =", t1, t2, t3, t4, "b1 =", b1, "b2 =", b2);
  console.log("s =", s, "c1 =", c1, "c2 =", c2);
}
