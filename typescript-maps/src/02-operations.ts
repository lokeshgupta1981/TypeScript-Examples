import { increment } from "./inventory.js";

export function basicOperations(): void {
  const stock = new Map<string, number>();

  // Add entries
  stock.set("BOOK-101", 12);
  stock.set("BOOK-102", 5);
  stock.set("BOOK-103", 0);

  // Read a value
  console.log(stock.get("BOOK-101")); // 12
  console.log(stock.get("BOOK-999")); // undefined

  // Check if a key exists
  console.log(stock.has("BOOK-102")); // true

  // Update: set() on an existing key replaces the value
  stock.set("BOOK-102", 7);
  console.log(stock.get("BOOK-102")); // 7

  // Count the entries
  console.log(stock.size); // 3

  // Delete one entry; returns true if the key existed
  console.log(stock.delete("BOOK-103")); // true
  console.log(stock.delete("BOOK-103")); // false

  // Increment a counter, starting at 0 for a new key
  increment(stock, "BOOK-101");
  increment(stock, "BOOK-104", 3);
  console.log(stock);

  // Remove everything
  stock.clear();
  console.log(stock.size); // 0
}
