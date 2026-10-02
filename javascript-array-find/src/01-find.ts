export function findObject(): void {
  interface Person { name: string; age: number; }

  const people: Person[] = [
    { name: "Lokesh", age: 37 },
    { name: "Raj", age: 35 },
    { name: "John", age: 40 },
  ];

  // 1. By property value
  const raj = people.find((p) => p.name === "Raj");   // raj = { name: "Raj", age: 35 }

  // 2. First of several matches
  const over36 = people.find((p) => p.age > 36);   // over36 = Lokesh (John also matches)

  // 3. Destructuring in the parameter
  const john = people.find(({ name }) => name === "John");   // john = { name: "John", age: 40 }

  console.log("raj =", JSON.stringify(raj), "| over36 =", over36?.name, "| john =", JSON.stringify(john));
}

export function findStopsEarly(): void {
  let calls = 0;
  const two = [1, 2, 3, 4].find((n) => {
    calls++;
    return n === 2;
  });
  // two = 2, calls = 2: elements 3 and 4 are never checked

  console.log("two =", two, "| calls =", calls);
}
