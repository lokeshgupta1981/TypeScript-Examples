import { samplePeople, type Person } from "./person.js";

export function addRemoveUpdate(): void {
  const people: Person[] = [
    { name: "Lokesh", age: 37 },
    { name: "Raj", age: 35 },
    { name: "John", age: 40 },
  ];

  // 1. Add at the end, at the start, at an index
  people.push({ name: "Amit", age: 30 });                 // [Lokesh, Raj, John, Amit]
  people.unshift({ name: "Neha", age: 28 });              // [Neha, Lokesh, Raj, John, Amit]
  people.splice(2, 0, { name: "Ravi", age: 33 });         // [Neha, Lokesh, Ravi, Raj, John, Amit]

  // 2. Remove from the end, from the start, at an index
  const last = people.pop();                              // last = Amit
  const first = people.shift();                           // first = Neha
  const removed = people.splice(1, 1);                    // removed = [Ravi]

  // 3. Change a property of the object at an index
  people[0].age = 38;                                     // Lokesh is now 38

  // 4. Find the index by a property, then replace the object
  const i = people.findIndex((p) => p.name === "John");   // i = 2
  if (i !== -1) {
    people[i] = { ...people[i], age: 41 };                // John is now 41
  }

  console.log("last =", last?.name, "first =", first?.name, "removed =", removed.map((p) => p.name));
  console.log("people =", JSON.stringify(people));
  console.log("i =", i);
}

export function outOfBounds(): void {
  const people = samplePeople();

  const p = people[5];                                    // type Person, value undefined
  const q = people.at(5);                                 // type Person | undefined
  const lastPerson = people.at(-1);                       // lastPerson = John

  console.log("p =", p, "q =", q, "lastPerson =", lastPerson?.name);
}
