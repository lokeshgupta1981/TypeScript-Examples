export function methods(): void {
  interface User {
    name: string;
    age: number;
    greet(): string;                            // method syntax
    isOlderThan: (age: number) => boolean;      // property syntax
  }

  const raj: User = {
    name: "Raj",
    age: 35,
    greet() { return "Hi, I am " + this.name; },
    isOlderThan(age) { return this.age > age; },
  };

  const hello = raj.greet();                    // hello = "Hi, I am Raj"
  const older = raj.isOlderThan(30);            // older = true

  // An interface that describes a function
  interface Formatter {
    (user: User): string;
  }

  const shortName: Formatter = (user) => user.name.toUpperCase();
  const upper = shortName(raj);                 // upper = "RAJ"

  console.log("hello =", hello);
  console.log("older =", older);
  console.log("upper =", upper);
}
