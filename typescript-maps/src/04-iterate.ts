export function iterateMaps(): void {
  const stock = new Map<string, number>([
    ["BOOK-101", 12],
    ["BOOK-102", 5],
    ["BOOK-103", 8],
  ]);

  // Entries as [key, value] pairs, in insertion order
  for (const [sku, quantity] of stock) {
    console.log(sku + " -> " + quantity);
  }

  // Only keys, or only values
  console.log([...stock.keys()]);
  console.log([...stock.values()]);

  // forEach() passes the VALUE first, then the key
  stock.forEach((quantity, sku) => console.log(sku, quantity));

  // Updating an existing key keeps its position...
  stock.set("BOOK-101", 20);
  // ...but delete + set moves the key to the end
  stock.delete("BOOK-102");
  stock.set("BOOK-102", 5);
  console.log([...stock.keys()]);
}
