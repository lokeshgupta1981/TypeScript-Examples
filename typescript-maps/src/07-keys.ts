// Section 7: How a Map compares keys
interface Customer { id: number; name: string; }

export function keyTypes(): void {
  const mixed = new Map<number | string, string>();
  mixed.set(1, "number one");
  mixed.set("1", "string one");
  console.log(mixed.size); // 2

  const plain: Record<string, string> = {};
  plain[1] = "number one";
  plain["1"] = "string one";
  console.log(Object.keys(plain).length); // 1

  const alice: Customer = { id: 1, name: "Alice" };
  const visits = new Map<Customer, number>([[alice, 3]]);

  console.log(visits.get(alice)); // 3
  console.log(visits.get({ id: 1, name: "Alice" })); // undefined
}
