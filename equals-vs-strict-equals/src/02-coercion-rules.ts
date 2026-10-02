export function coercionRules(): void {
  const text: unknown = "10";
  const empty: unknown = "";
  const yes: unknown = true;
  const list: unknown = [5];
  const nothing: unknown = null;

  // 1. String vs number: the string becomes a number
  const r1 = text == 10;                        // r1 = true
  // 2. Boolean: becomes 1 or 0 first
  const r2 = yes == "1";                        // r2 = true
  // 3. The empty string becomes 0
  const r3 = empty == 0;                        // r3 = true
  // 4. Object: converted to a primitive first
  const r4 = list == 5;                         // r4 = true
  // 5. null equals only null and undefined
  const r5 = nothing == 0;                      // r5 = false
  const r6 = nothing == undefined;              // r6 = true
  // 6. Not transitive
  const r7 = empty == "0";                      // r7 = false

  console.log("r1 =", r1, "r2 =", r2, "r3 =", r3, "r4 =", r4);
  console.log("r5 =", r5, "r6 =", r6, "r7 =", r7);
}
