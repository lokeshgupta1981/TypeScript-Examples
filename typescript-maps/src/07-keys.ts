interface Customer {
  id: number;
  name: string;
}

export function keyTypes(): void {
  // Keys keep their type: the number 1 and the string "1" are different keys
  const mixed = new Map<number | string, string>();
  mixed.set(1, "number one");
  mixed.set("1", "string one");
  console.log(mixed.size); // 2

  // In a plain object, both keys become the string "1"
  const plain: Record<string, string> = {};
  plain[1] = "number one";
  plain["1"] = "string one";
  console.log(Object.keys(plain).length); // 1

  // Object keys are compared by reference, not by content
  const visits = new Map<Customer, number>();
  const alice: Customer = { id: 1, name: "Alice" };
  visits.set(alice, 3);
  console.log(visits.get(alice)); // 3
  console.log(visits.get({ id: 1, name: "Alice" })); // undefined

  // A stable ID is usually the better key
  const visitsById = new Map<number, number>([[alice.id, 3]]);
  console.log(visitsById.get(1)); // 3
}
