export function strictChecks(): void {
  // 1. noImplicitAny: parameters need a type
  const double = (n: number) => n * 2;
  const result = double(4);                     // result = 8

  // 2. strictNullChecks: find() can return undefined
  const ages = [37, 35, 40];
  const found = ages.find((age) => age > 38);   // found = 40, type number | undefined
  const next = (found ?? 0) + 1;                // next = 41

  console.log("result =", result, "| found =", found, "| next =", next);
}
