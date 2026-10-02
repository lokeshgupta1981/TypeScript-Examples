export function quickReference(): void {
  // 1. TypeScript input
  const total = (price: number, qty?: number) => price * (qty ?? 1);
  const cost = total(5, 3);                     // cost = 15

  // 2. tsc output with target es2024: only the types are removed
  // const total = (price, qty) => price * (qty ?? 1);

  // 3. tsc output with target es2015: ?? is rewritten for older engines
  // const total = (price, qty) => price * (qty !== null && qty !== void 0 ? qty : 1);

  // 4. A compiler in the classic sense: Hello.java -> Hello.class (JVM bytecode)

  console.log("cost =", cost);
}
