// Quick reference: every operation from the article
export function quickReference(): void {
  const ages = new Map<string, number>();

  // 1. Add entries
  ages.set("Lokesh", 37);
  ages.set("Raj", 35);
  ages.set("John", 40);

  // 2. Get an entry
  const age = ages.get("John"); // age = 40
  const missing = ages.get("Brian") ?? 0; // missing = 0
  console.log(age, missing);

  // 3. Check a key
  console.log(ages.has("Lokesh"), ages.has("Brian")); // true false

  // 4. Size of the Map
  const count = ages.size; // count = 3
  console.log(count);

  // 5. Update an entry
  ages.set("Raj", 36); // replaces 35

  // 6. Iterate in insertion order
  for (const [name, value] of ages) {
    console.log(name, value); // Lokesh 37, Raj 36, John 40
  }

  // 7. Convert to JSON
  const json = JSON.stringify(Object.fromEntries(ages));
  console.log(json); // {"Lokesh":37,"Raj":36,"John":40}

  // 8. Sort by value
  const byAge = new Map([...ages].sort(([, a], [, b]) => a - b));
  console.log(byAge); // Raj 36, Lokesh 37, John 40

  // 9. Group a list (ES2024)
  const groups = Map.groupBy([1, 2, 3, 4], (n) => (n % 2 === 0 ? "even" : "odd"));
  console.log(groups); // odd => [1, 3], even => [2, 4]

  // 10. Delete an entry
  const isDeleted = ages.delete("Lokesh"); // isDeleted = true
  console.log(isDeleted);

  // 11. Clear the whole Map
  ages.clear();
  console.log(ages.size); // 0
}
