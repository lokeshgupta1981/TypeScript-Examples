export function searchByValue(): void {
  const fruits = ["apple", "banana", "apple", "cherry"];

  // 1. First and last position of a value
  const first = fruits.indexOf("apple");        // first = 0
  const last = fruits.lastIndexOf("apple");     // last = 2
  const missing = fruits.indexOf("kiwi");       // missing = -1

  // 2. Exists or not
  const hasBanana = fruits.includes("banana");  // hasBanana = true

  // 3. NaN: includes() finds it, indexOf() does not
  const nanAt = [NaN].indexOf(NaN);             // nanAt = -1
  const hasNaN = [NaN].includes(NaN);           // hasNaN = true

  console.log("first =", first, "| last =", last, "| missing =", missing, "| hasBanana =", hasBanana);
  console.log("nanAt =", nanAt, "| hasNaN =", hasNaN);
}

export function includesWithLiteralTypes(): void {
  const sizes = ["S", "M", "L"] as const;
  type Size = (typeof sizes)[number];           // "S" | "M" | "L"

  const isSize = (value: string): value is Size => (sizes as readonly string[]).includes(value);

  const input: string = "M";
  if (isSize(input)) {
    const size: Size = input;                   // size = "M"
    console.log("size =", size);
  }
  console.log("isSize(\"XL\") =", isSize("XL"));
}
