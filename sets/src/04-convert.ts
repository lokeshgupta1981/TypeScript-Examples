export function convertSets(): void {
  const fruits = new Set(["apple", "banana"]);

  // 1. Set to array
  const arr1 = [...fruits];                               // arr1 = ["apple", "banana"]
  const arr2 = Array.from(fruits);                        // arr2 = ["apple", "banana"]

  // 2. Remove duplicates from an array
  const unique = [...new Set(["apple", "kiwi", "apple"])];   // unique = ["apple", "kiwi"]

  // 3. Use a Set for fast lookups while filtering
  const sold = new Set(["apple"]);
  const unsold = ["apple", "banana", "kiwi"].filter((f) => !sold.has(f));   // unsold = ["banana", "kiwi"]

  // 4. JSON: convert to an array first
  const wrong = JSON.stringify(fruits);                   // wrong = {}
  const json = JSON.stringify([...fruits]);               // json = ["apple","banana"]
  const restored = new Set<string>(JSON.parse(json));     // restored = {"apple", "banana"}

  console.log("arr1 =", JSON.stringify(arr1), "arr2 =", JSON.stringify(arr2));
  console.log("unique =", JSON.stringify(unique));
  console.log("unsold =", JSON.stringify(unsold));
  console.log("wrong =", wrong, "json =", json, "restored =", restored);
}
