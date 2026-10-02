export function objectTypes(): void {
  // 1. Type alias for an object
  type User = {
    readonly id: number;                        // cannot change later
    name: string;
    age: number;
    email?: string;                             // optional
  };
  const raj: User = { id: 1, name: "Raj", age: 35 };

  // 2. Interface with the same shape
  interface Fruit {
    name: string;
    count: number;
  }
  const apple: Fruit = { name: "apple", count: 5 };

  // 3. Shape matters, not the name
  const john = { name: "John", age: 40, city: "Pune" };
  const named: { name: string } = john;         // OK, extra property allowed

  const email = raj.email;                      // email = undefined
  console.log(raj, apple, named, "email =", email);
}
