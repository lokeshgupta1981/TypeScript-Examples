import { samplePeople, type Person } from "./person.js";

export function copyAndUpdate(): void {
  const people = samplePeople();                          // Lokesh 37, Raj 35, John 40

  // 1. Update one object, return a new array
  const updated = people.map((p) => (p.name === "Raj" ? { ...p, age: 36 } : p));
  // updated[1].age = 36, people[1].age = 35

  // 2. Replace or remove by index (ES2023)
  const replaced = people.with(0, { name: "Amit", age: 30 });   // [Amit, Raj, John]
  const without = people.toSpliced(1, 1);                 // [Lokesh, John]

  // 3. A spread copy shares the same objects
  const shallow = [...people];
  shallow[0].age = 99;                                    // people[0].age = 99 too

  // 4. structuredClone() copies the objects as well
  const deep = structuredClone(people);
  deep[1].age = 50;                                       // people[1].age stays 35

  // 5. readonly blocks changes to the array, not to the objects
  const fixed: readonly Person[] = people;
  fixed[2].age = 41;                                      // compiles

  console.log("updated[1].age =", updated[1].age, "people[1].age =", people[1].age);
  console.log("replaced =", replaced.map((p) => p.name).join(", "));
  console.log("without =", without.map((p) => p.name).join(", "));
  console.log("people[0].age =", people[0].age);
  console.log("deep[1].age =", deep[1].age, "people[1].age =", people[1].age);
  console.log("people[2].age =", people[2].age);
}
