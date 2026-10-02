export function handleMissingKeys(): void {
  const stock = new Map<string, number>([["BOOK-101", 12]]);

  // get() returns number | undefined, so we must handle the missing case.

  // Option 1: a default value with ??
  const quantity = stock.get("BOOK-999") ?? 0;
  console.log(quantity); // 0

  // Option 2: store the result, then check it. TypeScript narrows the type.
  const found = stock.get("BOOK-101");
  if (found !== undefined) {
    console.log(found + 1); // 13
  }

  // Option 3: has() + get() with the non-null assertion (!).
  // has() does not narrow the type of a later get() call.
  if (stock.has("BOOK-101")) {
    console.log(stock.get("BOOK-101")! + 1); // 13
  }
}
