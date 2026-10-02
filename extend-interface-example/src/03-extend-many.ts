export function extendMany(): void {
  interface Named {
    name: string;
  }

  interface Aged {
    age: number;
  }

  interface Printable {
    print(): string;
  }

  // One interface, three parents
  interface User extends Named, Aged, Printable {
    email?: string;
  }

  const lokesh: User = {
    name: "Lokesh",
    age: 37,
    print() { return this.name + ", " + this.age; },
  };

  const printed = lokesh.print();               // printed = "Lokesh, 37"

  console.log("printed =", printed);
}
