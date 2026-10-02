export function factory(): void {
  interface User {
    name: string;
    age: number;
    active: boolean;
  }

  // Defaults first, caller values override them
  function createUser(name: string, overrides: Partial<User> = {}): User {
    return { name, age: 18, active: true, ...overrides };
  }

  const john = createUser("John");              // { name: "John", age: 18, active: true }
  const raj = createUser("Raj", { age: 35 });   // { name: "Raj", age: 35, active: true }

  console.log("john =", john);
  console.log("raj =", raj);
}
