// Section 2: Adding, reading, updating and deleting entries
export function basicOperations(): void {
  const stock = new Map<string, number>();

  stock.set("BOOK-101", 12);
  stock.set("BOOK-102", 5);
  stock.set("BOOK-102", 7); // same key: 5 is replaced by 7

  console.log(stock.get("BOOK-101")); // 12
  console.log(stock.get("BOOK-999")); // undefined
  console.log(stock.has("BOOK-102")); // true
  console.log(stock.size); // 2

  console.log(stock.delete("BOOK-102")); // true
  console.log(stock.delete("BOOK-102")); // false, the key is already gone

  // Counting with a default of 0
  const count = (stock.get("BOOK-104") ?? 0) + 1;
  stock.set("BOOK-104", count);
  console.log(stock.get("BOOK-104")); // 1

  stock.clear();
  console.log(stock.size); // 0
}
