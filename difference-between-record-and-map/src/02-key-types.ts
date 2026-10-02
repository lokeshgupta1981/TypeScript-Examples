export function keyTypes(): void {
  // 1. Record: number keys become strings
  const rec: Record<number, string> = { 1: "one" };
  const recKeys = Object.keys(rec);                       // recKeys = ["1"]

  // 2. Map: number keys stay numbers
  const map = new Map<number, string>([[1, "one"]]);
  const mapKeys = [...map.keys()];                        // mapKeys = [1]

  // 3. Map: objects as keys
  const lokesh = { name: "Lokesh" };
  const visits = new Map<object, number>([[lokesh, 3]]);
  const count = visits.get(lokesh);                       // count = 3

  console.log("recKeys =", JSON.stringify(recKeys), "mapKeys =", JSON.stringify(mapKeys));
  console.log("count =", count);
}
