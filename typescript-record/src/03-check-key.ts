export function checkKey(): void {
  const ages: Record<string, number> = { Lokesh: 37, Raj: 35 };

  // 1. Object.hasOwn(): own keys only (ES2022)
  const h1 = Object.hasOwn(ages, "Raj");                  // h1 = true
  const h2 = Object.hasOwn(ages, "toString");             // h2 = false

  // 2. The in operator also sees inherited keys
  const i1 = "Raj" in ages;                               // i1 = true
  const i2 = "toString" in ages;                          // i2 = true

  // 3. Read the value and compare with undefined
  const age = ages["Brian"];
  const exists = age !== undefined;                       // exists = false

  console.log("h1 =", h1, "h2 =", h2, "i1 =", i1, "i2 =", i2, "exists =", exists);
}
