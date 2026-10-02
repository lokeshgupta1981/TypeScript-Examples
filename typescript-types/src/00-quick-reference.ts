export function quickReference(): void {
  // 1. Primitive types
  const name: string = "Lokesh";
  const age: number = 37;
  const isActive: boolean = true;

  // 2. Inference: no annotation needed
  let city = "Delhi";                           // city: string
  const country = "India";                      // country: "India"

  // 3. Arrays and tuples
  const ages: number[] = [37, 35, 40];
  const person: [string, number] = ["Lokesh", 37];

  // 4. Object type with a type alias
  type User = { name: string; age: number; email?: string };
  const raj: User = { name: "Raj", age: 35 };

  // 5. Union and literal types
  let id: string | number = 101;
  let size: "small" | "large" = "small";

  // 6. unknown: check before use
  const input: unknown = "apple";
  if (typeof input === "string") {
    const len = input.length;                   // len = 5
    console.log("len =", len);
  }

  // 7. Function with typed parameters and return type
  function add(a: number, b: number): number {
    return a + b;
  }
  const sum = add(2, 3);                        // sum = 5

  // 8. Generic type
  const fruits: Array<string> = ["apple", "banana"];

  console.log(name, age, isActive, city, country);
  console.log(ages, person, raj, id, size);
  console.log("sum =", sum, fruits);
}
