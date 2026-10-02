export function quickReference(): void {
  const a: number = 10;
  const b: number = 20;

  // 1. Equality
  const isTen = a === 10;                       // isTen = true
  const differs = a !== b;                      // differs = true

  // 2. Greater and less
  const less = a < b;                           // less = true
  const atLeast = a >= 10;                      // atLeast = true

  // 3. Strings compare character by character
  const s1 = "apple" < "banana";                // s1 = true
  const s2 = "Zebra" < "apple";                 // s2 = true, uppercase first
  const s3 = "10" < "9";                        // s3 = true, not numeric

  // 4. Alphabetical order for people
  const order = "apple".localeCompare("Banana");   // order = -1

  // 5. Dates compare by time
  const later = new Date(2026, 0, 2) > new Date(2026, 0, 1);   // later = true

  // 6. Objects compare by reference
  const lokesh = { age: 37 };
  const copy = { age: 37 };
  const sameObject = lokesh === copy;           // sameObject = false

  console.log("isTen =", isTen, "differs =", differs, "less =", less, "atLeast =", atLeast);
  console.log("s1 =", s1, "s2 =", s2, "s3 =", s3, "order =", order);
  console.log("later =", later, "sameObject =", sameObject);
}
