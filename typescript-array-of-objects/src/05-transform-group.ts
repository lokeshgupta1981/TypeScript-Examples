import { samplePeople } from "./person.js";

export function transformAndGroup(): void {
  const people = samplePeople();                          // Lokesh 37, Raj 35, John 40

  // 1. One property from each object
  const names = people.map((p) => p.name);                // names = ["Lokesh", "Raj", "John"]

  // 2. Sum a property
  const totalAge = people.reduce((sum, p) => sum + p.age, 0);   // totalAge = 112

  // 3. Group by a computed key (ES2024)
  const groups = Object.groupBy(people, (p) => (p.age < 38 ? "young" : "senior"));
  // groups = { young: [Lokesh, Raj], senior: [John] }

  // 4. Index by name for fast lookups
  const byName = new Map(people.map((p) => [p.name, p]));
  const john = byName.get("John");                        // john = { name: "John", age: 40 }

  console.log("names =", JSON.stringify(names));
  console.log("totalAge =", totalAge);
  console.log("groups =", JSON.stringify(groups));
  console.log("john =", JSON.stringify(john));
}
