export function transformRecords(): void {
  const stock: Record<string, number> = { apple: 5, banana: 3, mango: 0 };

  // 1. Change every value
  const doubled = Object.fromEntries(
    Object.entries(stock).map(([fruit, n]) => [fruit, n * 2]),
  );                                                      // doubled = { apple: 10, banana: 6, mango: 0 }

  // 2. Keep only some keys
  const inStock = Object.fromEntries(
    Object.entries(stock).filter(([, n]) => n > 0),
  );                                                      // inStock = { apple: 5, banana: 3 }

  // 3. Build a Record from an array: count words
  const counts: Record<string, number> = {};
  for (const word of ["apple", "kiwi", "apple"]) {
    counts[word] = (counts[word] ?? 0) + 1;
  }                                                       // counts = { apple: 2, kiwi: 1 }

  console.log("doubled =", JSON.stringify(doubled));
  console.log("inStock =", JSON.stringify(inStock));
  console.log("counts =", JSON.stringify(counts));
}
