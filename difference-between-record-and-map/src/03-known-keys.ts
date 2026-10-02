export function knownKeys(): void {
  type Fruit = "apple" | "banana";

  // 1. Record: the compiler requires every key
  const stock: Record<Fruit, number> = { apple: 5, banana: 3 };
  const apples = stock.apple;                             // type number, apples = 5

  // 2. Map: any subset of keys compiles
  const stockMap = new Map<Fruit, number>([["apple", 5]]);
  const bananas = stockMap.get("banana");                 // type number | undefined, bananas = undefined

  console.log("apples =", apples, "bananas =", bananas);
}

export function missingKeys(): void {
  const rec: Record<string, number> = { Lokesh: 37 };
  const map = new Map<string, number>([["Lokesh", 37]]);

  const r = rec["Brian"];                                 // type number, value undefined
  const m = map.get("Brian");                             // type number | undefined
  const age = map.get("Brian") ?? 0;                      // age = 0

  console.log("r =", r, "m =", m, "age =", age);
}
