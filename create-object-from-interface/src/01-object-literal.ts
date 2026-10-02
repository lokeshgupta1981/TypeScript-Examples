export function objectLiteral(): void {
  interface User {
    name: string;
    age: number;
    email?: string;
    greet(): string;
  }

  // 1. Method syntax: this is the object
  const lokesh: User = {
    name: "Lokesh",
    age: 37,
    greet() { return "Hi, I am " + this.name; },
  };

  // 2. Arrow function: it has no own this
  const raj: User = {
    name: "Raj",
    age: 35,
    greet: () => "Hi, I am Raj",
  };

  const g1 = lokesh.greet();                    // g1 = "Hi, I am Lokesh"
  const g2 = raj.greet();                       // g2 = "Hi, I am Raj"
  const email = lokesh.email;                   // email = undefined

  console.log("g1 =", g1);
  console.log("g2 =", g2);
  console.log("email =", email);
}
