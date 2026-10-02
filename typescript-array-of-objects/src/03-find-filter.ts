import { samplePeople } from "./person.js";

export function findAndFilter(): void {
  const people = samplePeople();                          // Lokesh 37, Raj 35, John 40

  // 1. First and last match
  const first = people.find((p) => p.age > 36);           // first = Lokesh
  const last = people.findLast((p) => p.age > 36);        // last = John
  const none = people.find((p) => p.age > 50);            // none = undefined

  // 2. All matches
  const over36 = people.filter((p) => p.age > 36);        // over36 = [Lokesh, John]

  // 3. Yes/no checks
  const hasRaj = people.some((p) => p.name === "Raj");    // hasRaj = true
  const allAdults = people.every((p) => p.age >= 18);     // allAdults = true

  // 4. includes() compares references, not fields
  const copy = { name: "Raj", age: 35 };
  const found = people.includes(copy);                    // found = false
  const same = people.includes(people[1]);                // same = true

  console.log("first =", first?.name, "last =", last?.name, "none =", none);
  console.log("over36 =", over36.map((p) => p.name));
  console.log("hasRaj =", hasRaj, "allAdults =", allAdults);
  console.log("found =", found, "same =", same);
}
