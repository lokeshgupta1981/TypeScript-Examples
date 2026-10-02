// Section 1: Creating a Map
export function createMaps(): void {
  // Empty Map: keys are strings, values are numbers
  const stock = new Map<string, number>();

  // Initial entries as [key, value] pairs; the type is inferred
  const prices = new Map([
    ["BOOK-101", 29.99],
    ["BOOK-102", 45.5],
  ]);

  // set() returns the Map, so calls can be chained
  const categories = new Map<string, string>()
    .set("BOOK-101", "Java")
    .set("BOOK-102", "Spring");

  console.log(stock.size, prices.size); // 0 2
  console.log(categories); // Map(2) { 'BOOK-101' => 'Java', 'BOOK-102' => 'Spring' }
}
