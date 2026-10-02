export function quickReference(): void {
  interface Person {
    name: string;
    age: number;
  }

  const people: Person[] = [
    { name: "Lokesh", age: 37 },
    { name: "Raj", age: 35 },
  ];

  // 1. Add an object
  people.push({ name: "John", age: 40 });                 // length = 3

  // 2. Find one object by a property
  const raj = people.find((p) => p.name === "Raj");       // raj = { name: "Raj", age: 35 }
  console.log("raj =", JSON.stringify(raj));

  // 3. Filter objects by a property
  const over36 = people.filter((p) => p.age > 36);        // over36 = [Lokesh, John]

  // 4. Sort by a property into a new array
  const byAge = people.toSorted((a, b) => a.age - b.age); // byAge = [Raj, Lokesh, John]

  // 5. Get one property from every object
  const names = people.map((p) => p.name);                // names = ["Lokesh", "Raj", "John"]

  // 6. Update an object found by a property
  const i = people.findIndex((p) => p.name === "Raj");    // i = 1
  people[i].age = 36;                                     // Raj is now 36

  // 7. Remove an object by a property
  const others = people.filter((p) => p.name !== "John"); // others = [Lokesh, Raj]

  // 8. Loop over the objects
  for (const { name, age } of people) {
    console.log(name, age);                               // Lokesh 37, Raj 36, John 40
  }

  console.log("length =", people.length);
  console.log("over36 =", over36.map((p) => p.name).join(", "));
  console.log("byAge =", byAge.map((p) => p.name).join(", "));
  console.log("names =", JSON.stringify(names));
  console.log("i =", i, "people[1].age =", people[1].age);
  console.log("others =", others.map((p) => p.name).join(", "));
}
