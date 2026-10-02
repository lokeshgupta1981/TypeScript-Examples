export function createMaps(): void {
  // 1. An empty Map with explicit key and value types
  const stock = new Map<string, number>();
  stock.set("BOOK-101", 12);
  console.log(stock);

  // 2. A Map with initial entries. TypeScript infers Map<string, number>.
  const prices = new Map([
    ["BOOK-101", 29.99],
    ["BOOK-102", 45.5],
  ]);
  console.log(prices.size);

  // 3. set() returns the Map itself, so calls can be chained
  const categories = new Map<string, string>()
    .set("BOOK-101", "Java")
    .set("BOOK-102", "Spring");
  console.log(categories);
}
