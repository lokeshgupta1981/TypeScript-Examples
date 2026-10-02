export function iterables(): void {
  // 1. String to characters
  const letters = [..."hello"];                 // letters = ["h", "e", "l", "l", "o"]

  // 2. Remove duplicates with a Set
  const unique = [...new Set([1, 2, 2, 3])];    // unique = [1, 2, 3]

  // 3. Map entries and keys
  const ages = new Map([["Lokesh", 37], ["Raj", 35]]);
  const pairs = [...ages];                      // pairs = [["Lokesh", 37], ["Raj", 35]]
  const names = [...ages.keys()];               // names = ["Lokesh", "Raj"]

  // 4. Merge two Maps
  const more = new Map([["John", 40]]);
  const merged = new Map([...ages, ...more]);   // merged.size = 3

  // 5. Object spread of a Map copies nothing
  const empty = { ...ages };                    // empty = {}

  console.log("letters =", letters, "unique =", unique);
  console.log("pairs =", JSON.stringify(pairs), "names =", names, "merged.size =", merged.size);
  console.log("empty =", empty);
}
