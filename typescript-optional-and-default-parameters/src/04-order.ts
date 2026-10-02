export function parameterOrder(): void {
  // 1. A default before a required parameter
  function rate(fruit = "apple", count: number): string {
    return fruit + ": " + count;
  }
  const r1 = rate(undefined, 5);                // r1 = "apple: 5"
  const r2 = rate("banana", 3);                 // r2 = "banana: 3"
  console.log(r1, r2);

  // 2. Optional vs required-but-undefined
  function optional(age?: number): string {
    return "age " + age;
  }
  function explicit(age: number | undefined): string {
    return "age " + age;
  }
  const o1 = optional();                        // o1 = "age undefined"
  const o2 = explicit(undefined);               // o2 = "age undefined"; explicit() alone fails
  console.log(o1, o2);
}
