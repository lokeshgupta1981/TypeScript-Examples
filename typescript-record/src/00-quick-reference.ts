export function quickReference(): void {
  const ages: Record<string, number> = { Lokesh: 37, Raj: 35 };

  // 1. Read and add
  const age = ages["Lokesh"];                             // age = 37
  ages["John"] = 40;                                      // adds a key

  // 2. Update and delete
  ages["Raj"] = 36;                                       // replaces 35
  delete ages["John"];

  // 3. Check if a key exists
  const hasRaj = Object.hasOwn(ages, "Raj");              // hasRaj = true
  const hasBrian = "Brian" in ages;                       // hasBrian = false

  // 4. Count the keys
  const count = Object.keys(ages).length;                 // count = 2

  // 5. Iterate over keys and values
  for (const [name, value] of Object.entries(ages)) {
    console.log(name, value);                             // Lokesh 37, Raj 36
  }

  // 6. Fixed keys: every key is required
  type Fruit = "apple" | "banana";
  const stock: Record<Fruit, number> = { apple: 5, banana: 3 };

  // 7. Optional keys
  const some: Partial<Record<Fruit, number>> = { apple: 5 };

  console.log("age =", age, "ages =", JSON.stringify(ages));
  console.log("hasRaj =", hasRaj, "hasBrian =", hasBrian, "count =", count);
  console.log("stock =", JSON.stringify(stock), "some =", JSON.stringify(some));
}
