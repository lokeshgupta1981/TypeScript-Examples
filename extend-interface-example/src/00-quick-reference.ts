export function quickReference(): void {
  interface User {
    name: string;
    age: number;
  }

  interface Printable {
    print(): string;
  }

  // 1. Extend one interface
  interface Admin extends User {
    role: string;
  }

  const lokesh: Admin = { name: "Lokesh", age: 37, role: "owner" };

  // 2. Extend several interfaces
  interface PrintableUser extends User, Printable {}

  const raj: PrintableUser = {
    name: "Raj",
    age: 35,
    print() { return this.name + " (" + this.age + ")"; },
  };

  const text = raj.print();                     // text = "Raj (35)"

  // 3. Merge two declarations with the same name
  interface Settings { theme: string; }
  interface Settings { fontSize: number; }

  const settings: Settings = { theme: "dark", fontSize: 14 };

  // 4. Combine types with an intersection
  type AdminAndPrintable = Admin & Printable;

  const john: AdminAndPrintable = {
    name: "John",
    age: 40,
    role: "editor",
    print() { return this.name + " is " + this.role; },
  };

  const line = john.print();                    // line = "John is editor"

  console.log("lokesh =", lokesh);
  console.log("text =", text);
  console.log("settings =", settings);
  console.log("line =", line);
}
