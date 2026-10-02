// Section 1: Creating a Map
export function createMaps(): void {
  // 1. Empty Map with explicit types
  const empty = new Map<string, number>();

  // 2. Initial entries; the type is inferred as Map<string, number>
  const ages = new Map([
    ["Lokesh", 37],
    ["Raj", 35],
  ]);

  // 3. Chained set() calls
  const cities = new Map<string, string>()
    .set("Lokesh", "Delhi")
    .set("Raj", "Pune");

  console.log(empty.size, ages.size, cities); // 0 2 Map(2) { 'Lokesh' => 'Delhi', 'Raj' => 'Pune' }
}
