export function quickReference(): void {
  // 1. Overload signatures (what callers see)
  function greet(name: string): string;
  function greet(names: string[]): string[];

  // 2. Implementation signature (one body for all overloads)
  function greet(input: string | string[]): string | string[] {
    if (typeof input === "string") {
      return "Hello, " + input;
    }
    return input.map((name) => "Hello, " + name);
  }

  // 3. Each call gets the return type of the matching overload
  const one = greet("Lokesh");                  // one = "Hello, Lokesh" (string)
  const many = greet(["Raj", "John"]);          // many = ["Hello, Raj", "Hello, John"] (string[])
  console.log(one, many);

  // 4. Overloaded method in a class
  class Person {
    constructor(public name: string, public age: number) {}

    olderThan(age: number): boolean;
    olderThan(other: Person): boolean;
    olderThan(x: number | Person): boolean {
      return this.age > (typeof x === "number" ? x : x.age);
    }
  }
  const lokesh = new Person("Lokesh", 37);
  const john = new Person("John", 40);
  const r1 = lokesh.olderThan(35);              // r1 = true
  const r2 = lokesh.olderThan(john);            // r2 = false
  console.log(r1, r2);
}
