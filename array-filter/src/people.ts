export interface Person { name: string; age: number; city: string; }

export const people: Person[] = [
  { name: "Lokesh", age: 37, city: "Delhi" },
  { name: "Raj", age: 35, city: "Pune" },
  { name: "John", age: 40, city: "Delhi" },
  { name: "Amit", age: 17, city: "Pune" },
];

export const namesOf = (list: { name: string }[]): string => list.map((p) => p.name).join(", ");
