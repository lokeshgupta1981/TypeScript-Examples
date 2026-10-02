export function sameShape(): void {
  interface UserShape {
    name: string;
    age: number;
    greet(): string;
  }

  class User implements UserShape {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet(): string {
      return "Hi, I am " + this.name;
    }
  }

  const lokesh = new User("Lokesh", 37);
  const text = lokesh.greet();                  // text = "Hi, I am Lokesh"

  console.log("text =", text);
}
