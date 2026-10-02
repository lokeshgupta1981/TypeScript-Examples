export function declareArrays(): void {
  // 1. Interface and T[] syntax
  interface Person {
    name: string;
    age: number;
  }
  const people: Person[] = [{ name: "Lokesh", age: 37 }];

  // 2. Generic Array<T> syntax, same type
  const people2: Array<Person> = [{ name: "Raj", age: 35 }];

  // 3. Type alias with an optional property
  type Fruit = { name: string; count: number; color?: string };
  const fruits: Fruit[] = [
    { name: "apple", count: 5, color: "red" },
    { name: "banana", count: 3 },
  ];

  // 4. Inline object type
  const points: { x: number; y: number }[] = [{ x: 1, y: 2 }];

  // 5. Inferred type: { name: string; age: number }[]
  const team = [
    { name: "John", age: 40 },
    { name: "Raj", age: 35 },
  ];

  console.log("people =", JSON.stringify(people));
  console.log("people2 =", JSON.stringify(people2));
  console.log("fruits =", JSON.stringify(fruits));
  console.log("points =", JSON.stringify(points));
  console.log("team =", JSON.stringify(team));
}

export function elementTypeFromArray(): void {
  const team = [
    { name: "John", age: 40 },
    { name: "Raj", age: 35 },
  ];

  type Member = (typeof team)[number];                    // { name: string; age: number }
  const member: Member = { name: "Lokesh", age: 37 };

  console.log("member =", JSON.stringify(member));
}
