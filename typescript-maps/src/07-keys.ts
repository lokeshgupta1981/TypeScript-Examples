// Section 7: How a Map compares keys
interface User { id: number; name: string; }

export function keyTypes(): void {
  // 1. The number 1 and the string "1" are different keys
  const mixed = new Map<number | string, string>();
  mixed.set(1, "number");
  mixed.set("1", "string");
  console.log(mixed.size); // 2

  // 2. A plain object turns both into the string "1"
  const plain: Record<string, string> = {};
  plain[1] = "number";
  plain["1"] = "string";
  console.log(Object.keys(plain).length); // 1

  // 3. Object keys are compared by reference
  const lokesh: User = { id: 1, name: "Lokesh" };
  const visits = new Map<User, number>([[lokesh, 3]]);
  console.log(visits.get(lokesh)); // 3
  console.log(visits.get({ id: 1, name: "Lokesh" })); // undefined
}
