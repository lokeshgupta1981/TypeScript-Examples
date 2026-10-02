export function collections(): void {
  const prices = new Map([["apple", 5], ["banana", 3]]);
  const tags = new Set(["new", "sale"]);
  const ages: Record<string, number> = { Lokesh: 37, Raj: 35, John: 40 };

  // 1. Map: keys(), values(), entries()
  const names = [...prices.keys()];             // names = ["apple", "banana"]
  let total = 0;
  for (const price of prices.values()) {
    total += price;
  }
  console.log("names =", names, "| total =", total);   // total = 8

  // 2. Set: values in insertion order
  for (const tag of tags) {
    console.log(tag);                           // new, sale
  }

  // 3. Object: keys, values, entries
  const people = Object.keys(ages);             // people = ["Lokesh", "Raj", "John"]
  const sum = Object.values(ages).reduce((a, b) => a + b, 0);   // sum = 112
  for (const [name, age] of Object.entries(ages)) {
    console.log(name, age);                     // Lokesh 37, Raj 35, John 40
  }
  console.log("people =", people, "| sum =", sum);
}
