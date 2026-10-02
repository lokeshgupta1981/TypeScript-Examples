export function removeByValue(): void {
  const fruits = ["apple", "banana", "cherry"];

  const index = fruits.indexOf("banana");       // index = 1
  if (index !== -1) {
    fruits.splice(index, 1);                    // fruits = ["apple", "cherry"]
  }
  console.log("index =", index, "| fruits =", JSON.stringify(fruits));
}

export function missingValueBug(): void {
  const fruits = ["apple", "banana"];

  fruits.splice(fruits.indexOf("kiwi"), 1);     // fruits = ["apple"], banana is gone
  console.log("fruits =", JSON.stringify(fruits));
}

export function removeObjectByProperty(): void {
  interface Person { name: string; age: number; }
  const people: Person[] = [
    { name: "Lokesh", age: 37 },
    { name: "Raj", age: 35 },
    { name: "John", age: 40 },
  ];

  const i = people.findIndex((p) => p.name === "Raj");   // i = 1
  if (i !== -1) {
    people.splice(i, 1);                        // Lokesh and John remain
  }
  console.log("i =", i, "| people =", JSON.stringify(people.map((p) => p.name)));
}
