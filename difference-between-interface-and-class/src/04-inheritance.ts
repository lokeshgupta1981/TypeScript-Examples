export function inheritance(): void {
  interface Named {
    name: string;
  }

  interface Aged {
    age: number;
  }

  // 1. An interface can extend several interfaces
  interface Person extends Named, Aged {}

  interface Printable {
    print(): string;
  }

  class Base {
    greet(): string { return "Hi"; }
  }

  // 2. A class extends one class and implements several interfaces
  class User extends Base implements Person, Printable {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      super();
      this.name = name;
      this.age = age;
    }
    print(): string { return this.name + ", " + this.age; }
  }

  const raj = new User("Raj", 35);
  const hello = raj.greet();                    // hello = "Hi", inherited from Base
  const printed = raj.print();                  // printed = "Raj, 35"

  console.log("hello =", hello);
  console.log("printed =", printed);
}
