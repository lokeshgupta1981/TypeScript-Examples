export function functionHoisting(): void {
  // A function declaration can be called above its definition
  const total = addTax(100);                    // total = 118

  function addTax(amount: number): number {
    return amount * 1.18;
  }

  console.log("total =", total);
}
