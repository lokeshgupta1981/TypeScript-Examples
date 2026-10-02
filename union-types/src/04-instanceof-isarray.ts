export function narrowWithInstanceofAndIsArray(): void {
  // 1. Array.isArray()
  function total(input: number | number[]): number {
    if (Array.isArray(input)) {
      return input.reduce((sum, n) => sum + n, 0);   // input: number[]
    }
    return input;                               // input: number
  }
  const t1 = total(5);                          // t1 = 5
  const t2 = total([1, 2, 3]);                  // t2 = 6

  // 2. instanceof
  function year(value: Date | string): number {
    if (value instanceof Date) {
      return value.getFullYear();               // value: Date
    }
    return new Date(value).getFullYear();       // value: string
  }
  const y = year("2026-10-03");                 // y = 2026

  console.log("t1 =", t1, "t2 =", t2, "y =", y);
}
