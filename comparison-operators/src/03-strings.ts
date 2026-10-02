export function strings(): void {
  // 1. Character code order
  const s1 = "Zebra" < "apple";                 // s1 = true
  const sorted = ["banana", "apple", "Cherry"].sort();   // sorted = ["Cherry", "apple", "banana"]

  // 2. localeCompare(): negative, 0 or positive
  const r1 = "apple".localeCompare("Banana");   // r1 = -1
  const r2 = "a".localeCompare("A", undefined, { sensitivity: "base" });   // r2 = 0
  const byName = ["banana", "apple", "Cherry"].sort((x, y) => x.localeCompare(y));
  // byName = ["apple", "banana", "Cherry"]

  // 3. Numbers inside strings
  const collator = new Intl.Collator("en", { numeric: true });
  const files = ["item10", "item9", "item1"].sort(collator.compare);
  // files = ["item1", "item9", "item10"]

  console.log("s1 =", s1, "sorted =", sorted);
  console.log("r1 =", r1, "r2 =", r2, "byName =", byName);
  console.log("files =", files);
}
