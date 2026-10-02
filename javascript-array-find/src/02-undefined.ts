export function handleUndefined(): void {
  interface Person { name: string; age: number; }

  const people: Person[] = [
    { name: "Lokesh", age: 37 },
    { name: "Raj", age: 35 },
  ];

  // 1. Check before use; the type narrows to Person
  const raj = people.find((p) => p.name === "Raj");
  if (raj) {
    console.log(raj.age);                       // 35
  }

  // 2. Optional chaining and a default
  const age = people.find((p) => p.name === "Brian")?.age ?? 0;   // age = 0

  // 3. Fail fast when the element must exist
  const lokesh = people.find((p) => p.name === "Lokesh");
  if (!lokesh) throw new Error("Lokesh not found");
  const lokeshAge = lokesh.age;                 // lokeshAge = 37

  console.log("age =", age, "| lokeshAge =", lokeshAge);
}
