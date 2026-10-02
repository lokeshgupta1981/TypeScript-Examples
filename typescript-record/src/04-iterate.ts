export function iterateRecord(): void {
  const ages: Record<string, number> = { Lokesh: 37, Raj: 35, John: 40 };

  // 1. Keys and values together
  for (const [name, age] of Object.entries(ages)) {
    console.log(name, age);                               // Lokesh 37, Raj 35, John 40
  }

  // 2. Only keys or only values
  const names = Object.keys(ages);                        // names = ["Lokesh", "Raj", "John"]
  const total = Object.values(ages).reduce((s, a) => s + a, 0);   // total = 112

  // 3. for...in visits keys, including inherited enumerable ones
  for (const name in ages) {
    if (Object.hasOwn(ages, name)) {
      console.log(name, ages[name]);                      // Lokesh 37, Raj 35, John 40
    }
  }

  console.log("names =", JSON.stringify(names), "total =", total);
}

export function iterateUnionKeys(): void {
  type Fruit = "apple" | "banana";
  const stock: Record<Fruit, number> = { apple: 5, banana: 3 };

  // 1. Object.keys() returns string[], so cast to the key type
  for (const fruit of Object.keys(stock) as Fruit[]) {
    console.log(fruit, stock[fruit]);                     // apple 5, banana 3
  }

  // 2. Object.entries() needs no cast for the value
  for (const [fruit, count] of Object.entries(stock)) {
    console.log(fruit, count);                            // apple 5, banana 3
  }
}

export function keyOrder(): void {
  const order = Object.keys({ b: 1, 2: 1, a: 1, 1: 1 });  // order = ["1", "2", "b", "a"]
  console.log("order =", JSON.stringify(order));
}
