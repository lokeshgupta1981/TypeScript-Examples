export function howItWorks(): void {
  class User {
    name: string;
    constructor(name: string) { this.name = name; }
  }

  const raj = new User("Raj");
  const plain = { name: "John" };

  // 1. instanceof looks for User.prototype in the prototype chain
  const r1 = raj instanceof User;               // r1 = true
  const r2 = Object.getPrototypeOf(raj) === User.prototype;   // r2 = true

  // 2. An object literal with the same shape is not an instance
  const r3 = plain instanceof User;             // r3 = false

  console.log("r1 =", r1, "r2 =", r2);
  console.log("r3 =", r3);
}
