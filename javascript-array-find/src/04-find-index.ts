export function findIndexAndReplace(): void {
  interface Person { name: string; age: number; }

  const people: Person[] = [
    { name: "Lokesh", age: 37 },
    { name: "Raj", age: 35 },
  ];

  // 1. Replace in place
  const i = people.findIndex((p) => p.name === "Raj");   // i = 1
  if (i !== -1) {
    people[i] = { ...people[i], age: 36 };      // Raj is now 36
  }

  // 2. Replace in a copy (ES2023)
  const j = people.findIndex((p) => p.name === "Lokesh");   // j = 0
  const updated = j === -1 ? people : people.with(j, { name: "Lokesh", age: 38 });   // Lokesh is 38 in the copy

  console.log("i =", i, "| people =", JSON.stringify(people));
  console.log("j =", j, "| updated =", JSON.stringify(updated));
}
