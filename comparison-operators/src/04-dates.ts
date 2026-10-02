export function dates(): void {
  const start = new Date(2026, 0, 1);
  const same = new Date(2026, 0, 1);

  // 1. Relational operators compare the time value
  const before = start < new Date(2026, 5, 1);  // before = true
  const notAfter = start <= same;               // notAfter = true

  // 2. === compares references
  const equalRef = start === same;              // equalRef = false
  const equalTime = start.getTime() === same.getTime();   // equalTime = true

  console.log("before =", before, "notAfter =", notAfter);
  console.log("equalRef =", equalRef, "equalTime =", equalTime);
}
