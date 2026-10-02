export function merging(): void {
  // Two declarations, one interface
  interface User {
    name: string;
  }

  interface User {
    age: number;
  }

  const john: User = { name: "John", age: 40 };   // both properties required
  const keys = Object.keys(john);               // keys = ["name", "age"]

  console.log("keys =", keys);
}
