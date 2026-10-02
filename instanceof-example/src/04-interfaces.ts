export function interfaces(): void {
  interface User {
    name: string;
    age: number;
  }

  interface Shape {
    area(): number;
  }

  // 1. The "in" operator narrows a union of interfaces
  function describe(value: User | Shape): string {
    if ("age" in value) {
      return value.name + " is " + value.age;   // value is User here
    }
    return "area " + value.area();              // value is Shape here
  }

  const d1 = describe({ name: "Lokesh", age: 37 });   // d1 = "Lokesh is 37"
  const d2 = describe({ area: () => 16 });            // d2 = "area 16"

  // 2. A user-defined type guard for unknown data
  function isUser(value: unknown): value is User {
    return typeof value === "object" && value !== null
      && "name" in value && typeof value.name === "string"
      && "age" in value && typeof value.age === "number";
  }

  const data: unknown = JSON.parse('{"name":"Raj","age":35}');
  if (isUser(data)) {
    console.log(data.name);                     // Raj
  }

  const bad = isUser({ name: "John" });         // bad = false

  console.log("d1 =", d1);
  console.log("d2 =", d2);
  console.log("bad =", bad);
}
