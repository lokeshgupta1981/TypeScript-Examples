export function mapExamples(): void {
  const nums = [1, 2, 3, 4];

  // 1. Transform each value
  const squares = nums.map((n) => n * n);                   // squares = [1, 4, 9, 16]

  // 2. Change the element type: number[] to string[]
  const labels = nums.map((n) => "Item " + n);              // labels = ["Item 1", "Item 2", "Item 3", "Item 4"]

  // 3. Use the index (second callback parameter)
  const indexed = nums.map((n, i) => i + ":" + n);          // indexed = ["0:1", "1:2", "2:3", "3:4"]

  console.log("squares =", JSON.stringify(squares));
  console.log("labels =", JSON.stringify(labels));
  console.log("indexed =", JSON.stringify(indexed));
  console.log("nums =", JSON.stringify(nums));
}

export function mapObjects(): void {
  interface Person {
    name: string;
    age: number;
  }

  const people: Person[] = [
    { name: "Lokesh", age: 37 },
    { name: "Raj", age: 35 },
    { name: "John", age: 40 },
  ];

  // 1. Pick one property
  const names = people.map((p) => p.name);                  // names = ["Lokesh", "Raj", "John"]

  // 2. Build new objects; the originals stay unchanged
  const older = people.map((p) => ({ ...p, age: p.age + 1 }));
  // older[0] = { name: "Lokesh", age: 38 }, people[0].age = 37

  console.log("names =", JSON.stringify(names));
  console.log("older[0] =", JSON.stringify(older[0]), "people[0].age =", people[0].age);
}
