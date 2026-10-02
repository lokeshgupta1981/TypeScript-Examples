export function objects(): void {
  const lokesh = { name: "Lokesh", age: 37 };
  const alias = lokesh;
  const copy = { name: "Lokesh", age: 37 };

  // 1. Same reference
  const r1 = lokesh === alias;                  // r1 = true

  // 2. Same content, different object
  const r2 = lokesh === copy;                   // r2 = false

  // 3. Compare the fields instead
  const r3 = lokesh.name === copy.name && lokesh.age === copy.age;   // r3 = true

  console.log("r1 =", r1, "r2 =", r2, "r3 =", r3);
}
