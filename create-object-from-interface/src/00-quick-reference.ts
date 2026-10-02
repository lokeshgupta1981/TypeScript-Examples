export function quickReference(): void {
  interface User {
    name: string;
    age: number;
    greet(): string;
  }

  // 1. Object literal with a type annotation
  const lokesh: User = {
    name: "Lokesh",
    age: 37,
    greet() { return "Hi, I am " + this.name; },
  };

  // 2. Object literal checked with satisfies
  const raj = {
    name: "Raj",
    age: 35,
    greet() { return "Hello from " + this.name; },
  } satisfies User;

  // 3. Copy of an existing object, with one change
  const older: User = { ...lokesh, age: 38 };

  // 4. Factory function with a default value
  function createUser(name: string, age = 18): User {
    return { name, age, greet() { return "Hi, I am " + this.name; } };
  }

  const john = createUser("John", 40);

  // 5. Class that implements the interface
  class Member implements User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet(): string { return "Hi, I am " + this.name; }
  }

  const brian = new Member("Brian", 25);

  const g1 = lokesh.greet();                    // g1 = "Hi, I am Lokesh"
  const g2 = raj.greet();                       // g2 = "Hello from Raj"
  const age = older.age;                        // age = 38
  const g3 = john.greet();                      // g3 = "Hi, I am John"
  const g4 = brian.greet();                     // g4 = "Hi, I am Brian"

  console.log("g1 =", g1);
  console.log("g2 =", g2);
  console.log("age =", age);
  console.log("g3 =", g3);
  console.log("g4 =", g4);
}
