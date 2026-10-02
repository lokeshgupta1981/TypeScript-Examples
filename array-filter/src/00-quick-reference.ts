import { namesOf } from "./people.js";

export function quickReference(): void {
  interface Person { name: string; age: number; city: string; }

  const people: Person[] = [
    { name: "Lokesh", age: 37, city: "Delhi" },
    { name: "Raj", age: 35, city: "Pune" },
    { name: "John", age: 40, city: "Delhi" },
    { name: "Amit", age: 17, city: "Pune" },
  ];

  // 1. By one property value
  const fromDelhi = people.filter((p) => p.city === "Delhi");   // Lokesh, John

  // 2. By a range
  const adults = people.filter((p) => p.age >= 18);   // Lokesh, Raj, John

  // 3. Two conditions
  const olderInDelhi = people.filter((p) => p.city === "Delhi" && p.age > 38);   // John

  // 4. Property in a list of values
  const wanted = ["Raj", "Amit"];
  const picked = people.filter((p) => wanted.includes(p.name));   // Raj, Amit

  // 5. Text search, ignoring case
  const withO = people.filter((p) => p.name.toLowerCase().includes("o"));   // Lokesh, John

  // 6. Array of numbers
  const evens = [1, 2, 3, 4].filter((n) => n % 2 === 0);   // evens = [2, 4]

  // 7. Remove null and undefined
  const fruits = ["apple", null, "banana", undefined].filter((f) => f != null);   // ["apple", "banana"], string[]

  console.log("fromDelhi =", namesOf(fromDelhi), "| adults =", namesOf(adults), "| olderInDelhi =", namesOf(olderInDelhi));
  console.log("picked =", namesOf(picked), "| withO =", namesOf(withO));
  console.log("evens =", JSON.stringify(evens), "| fruits =", JSON.stringify(fruits));
}
