export function shortCircuit(): void {
  let calls = 0;

  // 1. The right side runs only when needed
  const a = false && ++calls > 0;               // a = false, calls = 0
  const b = true || ++calls > 0;                // b = true, calls = 0
  const c = true && ++calls > 0;                // c = true, calls = 1
  console.log("a =", a, "b =", b, "c =", c, "calls =", calls);

  // 2. Guard against a missing object
  const users = [{ name: "Lokesh", age: 37 }];
  const raj = users.find((u) => u.name === "Raj");
  const rajAge = raj && raj.age;                // rajAge = undefined
  console.log("rajAge =", rajAge);
}
