export function quickReference(): void {
  // 1. Declare an interface
  interface User {
    readonly id: number;                        // cannot be reassigned
    name: string;
    age: number;
    email?: string;                             // optional
    greet(): string;                            // method signature
  }

  // 2. Use it as the type of an object
  const lokesh: User = {
    id: 1,
    name: "Lokesh",
    age: 37,
    greet() { return "Hi, I am " + this.name; },
  };

  const message = lokesh.greet();               // message = "Hi, I am Lokesh"
  const email = lokesh.email;                   // email = undefined

  // 3. Implement an interface in a class
  interface Shape {
    area(): number;
  }

  class Square implements Shape {
    side: number;
    constructor(side: number) { this.side = side; }
    area(): number { return this.side * this.side; }
  }

  const area = new Square(4).area();            // area = 16

  // 4. Check an object literal with satisfies
  const raj = { id: 2, name: "Raj", age: 35, greet: () => "Hi" } satisfies User;
  const rajAge = raj.age;                       // rajAge = 35

  console.log("message =", message);
  console.log("email =", email);
  console.log("area =", area);
  console.log("rajAge =", rajAge);
}
