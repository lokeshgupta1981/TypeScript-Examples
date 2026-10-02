import { people, namesOf } from "./people.js";

export function byListOfValues(): void {
  // 1. Small list: includes()
  const cities = ["Pune", "Mumbai"];
  const fromCities = people.filter((p) => cities.includes(p.city));   // Raj, Amit

  // 2. Large list: a Set
  const blocked = new Set(["Raj", "John"]);
  const allowed = people.filter((p) => !blocked.has(p.name));   // Lokesh, Amit

  console.log("fromCities =", namesOf(fromCities), "| allowed =", namesOf(allowed));
}

export function nestedAndOptional(): void {
  interface User {
    name: string;
    address: { city: string };
    tags: string[];
    email?: string;
  }

  const users: User[] = [
    { name: "Lokesh", address: { city: "Delhi" }, tags: ["admin"], email: "lokesh@example.com" },
    { name: "Raj", address: { city: "Pune" }, tags: ["dev", "admin"] },
    { name: "John", address: { city: "Delhi" }, tags: ["dev"] },
  ];

  // 1. Nested property
  const delhi = users.filter((u) => u.address.city === "Delhi");   // Lokesh, John

  // 2. Array property contains a value
  const admins = users.filter((u) => u.tags.includes("admin"));   // Lokesh, Raj

  // 3. Optional property
  const withEmail = users.filter((u) => u.email?.endsWith("@example.com"));   // Lokesh

  console.log("delhi =", namesOf(delhi), "| admins =", namesOf(admins), "| withEmail =", namesOf(withEmail));
}
