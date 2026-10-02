// Section 5: Converting a Map to an array, object or JSON
export function convertMaps(): void {
  const stock = new Map([["BOOK-101", 12], ["BOOK-102", 5]]);

  console.log([...stock]); // [ [ 'BOOK-101', 12 ], [ 'BOOK-102', 5 ] ]
  console.log(Object.fromEntries(stock)); // { 'BOOK-101': 12, 'BOOK-102': 5 }
  console.log(new Map(Object.entries({ "BOOK-201": 3 }))); // Map(1) { 'BOOK-201' => 3 }

  console.log(JSON.stringify(stock)); // {}  (the entries are lost)

  const json = JSON.stringify(Object.fromEntries(stock));
  console.log(json); // {"BOOK-101":12,"BOOK-102":5}

  const parsed: Record<string, number> = JSON.parse(json);
  const restored = new Map(Object.entries(parsed));
  console.log(restored.get("BOOK-102")); // 5
}
