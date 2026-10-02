export function builtIn(): void {
  // 1. Arrays: Array.isArray() is the safer check
  const nums = [1, 2, 3];
  const r1 = nums instanceof Array;             // r1 = true
  const r2 = Array.isArray(nums);               // r2 = true

  // 2. Map, Set and RegExp
  const r3 = new Map() instanceof Map;          // r3 = true
  const r4 = /a+/ instanceof RegExp;            // r4 = true

  // 3. Primitives are not instances; use typeof
  const name: unknown = "Lokesh";
  const r5 = name instanceof String;            // r5 = false
  const r6 = typeof name === "string";          // r6 = true

  // 4. Errors in a catch block
  try {
    JSON.parse("{ bad json");
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.log("invalid JSON:", e.name);     // invalid JSON: SyntaxError
    }
  }

  console.log("r1 =", r1, "r2 =", r2);
  console.log("r3 =", r3, "r4 =", r4);
  console.log("r5 =", r5, "r6 =", r6);
}
