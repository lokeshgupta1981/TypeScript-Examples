import { fromObject, toObject } from "./inventory.js";

export function convertMaps(): void {
  const stock = new Map<string, number>([
    ["BOOK-101", 12],
    ["BOOK-102", 5],
  ]);

  // Map -> array of [key, value] pairs
  const pairs = [...stock];
  console.log(pairs);

  // Map -> plain object
  const obj = toObject(stock);
  console.log(obj);

  // Plain object -> Map
  const fromConfig = fromObject({ "BOOK-201": 3, "BOOK-202": 9 });
  console.log(fromConfig);

  // JSON.stringify() does not know how to write a Map
  console.log(JSON.stringify(stock)); // {}

  // Convert first, then stringify
  const json = JSON.stringify(Object.fromEntries(stock));
  console.log(json);

  // And back: parse, then build the Map
  const parsed: Record<string, number> = JSON.parse(json);
  const restored = new Map(Object.entries(parsed));
  console.log(restored.get("BOOK-102")); // 5
}
