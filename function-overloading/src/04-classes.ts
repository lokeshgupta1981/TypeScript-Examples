export function classOverloads(): void {
  class Person {
    name: string;
    age: number;

    // 1. Constructor overloads
    constructor(name: string, age: number);
    constructor(data: { name: string; age: number });
    constructor(nameOrData: string | { name: string; age: number }, age?: number) {
      if (typeof nameOrData === "string") {
        this.name = nameOrData;
        this.age = age ?? 0;
      } else {
        this.name = nameOrData.name;
        this.age = nameOrData.age;
      }
    }

    // 2. Method overloads
    olderThan(age: number): boolean;
    olderThan(other: Person): boolean;
    olderThan(ageOrPerson: number | Person): boolean {
      const limit = typeof ageOrPerson === "number" ? ageOrPerson : ageOrPerson.age;
      return this.age > limit;
    }
  }

  const lokesh = new Person("Lokesh", 37);
  const john = new Person({ name: "John", age: 40 });
  const r1 = john.olderThan(lokesh);            // r1 = true
  const r2 = lokesh.olderThan(40);              // r2 = false
  console.log(lokesh.name, john.name, r1, r2);
}
