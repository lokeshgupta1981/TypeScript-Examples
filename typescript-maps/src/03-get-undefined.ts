// Section 3: Handling undefined from get()
export function handleMissingKeys(): void {
  const stock = new Map<string, number>([["BOOK-101", 12]]);

  // Option 1: a default value with ??
  const quantity = stock.get("BOOK-999") ?? 0;
  console.log(quantity); // 0

  // Option 2: store the result, then check it; TypeScript narrows the type to number
  const found = stock.get("BOOK-101");
  if (found !== undefined) {
    console.log(found + 1); // 13
  }

  // Option 3: the non-null assertion (!) after has()
  if (stock.has("BOOK-101")) {
    console.log(stock.get("BOOK-101")! + 1); // 13
  }
}
