import { samplePeople } from "./person.js";

export function sortObjects(): void {
  const people = samplePeople();                          // Lokesh 37, Raj 35, John 40

  // 1. New sorted arrays (ES2023); people is unchanged
  const byAge = people.toSorted((a, b) => a.age - b.age);                 // [Raj, Lokesh, John]
  const oldestFirst = people.toSorted((a, b) => b.age - a.age);           // [John, Lokesh, Raj]
  const byName = people.toSorted((a, b) => a.name.localeCompare(b.name)); // [John, Lokesh, Raj]

  // 2. sort() changes the original array
  people.sort((a, b) => a.age - b.age);                   // people = [Raj, Lokesh, John]

  console.log("byAge =", byAge.map((p) => p.name).join(", "));
  console.log("oldestFirst =", oldestFirst.map((p) => p.name).join(", "));
  console.log("byName =", byName.map((p) => p.name).join(", "));
  console.log("people =", people.map((p) => p.name).join(", "));
}
