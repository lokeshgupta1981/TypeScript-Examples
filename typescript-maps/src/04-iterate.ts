// Section 4: Iterating over a Map
export function iterateMaps(): void {
  const ages = new Map([
    ["Lokesh", 37],
    ["Raj", 35],
    ["John", 40],
  ]);

  // 1. Entries
  for (const [name, age] of ages) {
    console.log(name, age); // Lokesh 37, Raj 35, John 40
  }

  // 2. Keys and values
  const names = [...ages.keys()]; // names = ["Lokesh", "Raj", "John"]
  const values = [...ages.values()]; // values = [37, 35, 40]
  console.log(names, values);

  // 3. forEach: value first, then key
  ages.forEach((age, name) => console.log(name, age));

  // How updates change the order
  ages.set("Lokesh", 38); // stays first
  ages.delete("Raj");
  ages.set("Raj", 35); // moves to the end
  const order = [...ages.keys()]; // order = ["Lokesh", "John", "Raj"]
  console.log(order);
}
