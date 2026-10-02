// Section 4: Iterating over a Map
export function iterateMaps(): void {
  const stock = new Map([
    ["BOOK-101", 12],
    ["BOOK-102", 5],
    ["BOOK-103", 8],
  ]);

  for (const [sku, quantity] of stock) {
    console.log(sku, quantity); // BOOK-101 12, BOOK-102 5, BOOK-103 8
  }

  console.log([...stock.keys()]); // [ 'BOOK-101', 'BOOK-102', 'BOOK-103' ]
  console.log([...stock.values()]); // [ 12, 5, 8 ]

  stock.forEach((quantity, sku) => {
    console.log(sku, quantity); // same output; note the order: value, then key
  });

  // How updates change the order
  stock.set("BOOK-101", 20); // existing key: stays first
  stock.delete("BOOK-102");
  stock.set("BOOK-102", 5); // re-added key: moves to the end
  console.log([...stock.keys()]); // [ 'BOOK-101', 'BOOK-103', 'BOOK-102' ]
}
